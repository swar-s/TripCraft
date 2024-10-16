import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "../components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravellersList,
} from "../constants/options";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { chatSession } from "../service/AIModel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import { DialogClose } from "../components/ui/dialog";

function CreateTrip() {
  const [place, setPlace] = useState();
  const navigate = useNavigate();

  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (
      formData?.numberOfDays > 10 ||
      !formData?.location ||
      !formData?.numberOfDays ||
      !formData?.budget ||
      !formData?.travellers
    ) {
      toast("Please fill all the details..!!");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location.label
    )
      .replace("{totalDays}", formData?.numberOfDays)
      .replace("{travellers}", formData?.travellers)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.numberOfDays);
    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log("--", result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-trip/" + docId);
  };

  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        OnGenerateTrip();
      });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-5">
      <h2 className="font-bold text-3xl">Plan Your Perfect Trip</h2>
      <p className=" text-gray-500 text-xl mt-5">
        Fill in the details below, and our AI will create a customized itinerary
        just for you.
      </p>

      <div className="mt-14">
        <div>
          <h2 className="text-xl my-3 font-medium">
            Enter the destination of your choice:
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v), handleInputChange("location", v);
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium mt-10">
            Enter the number of days of trip you are planning for:
          </h2>
          <Input
            placeholder={"Example. 3"}
            type="number"
            value={formData.numberOfDays || ""}
            onChange={(e) => handleInputChange("numberOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium mt-10">
            Choose your budget category:
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className={`p-3 border cursor-pointer rounded-lg hover:shadow-lg
                        ${
                          formData?.budget == item.title &&
                          "shadow-lg border-neutral-600 border-2"
                        }
                    `}
                onClick={() => handleInputChange("budget", item.title)}
              >
                <h2 className="text-2xl text-center">{item.icon}</h2>
                <h2 className="font-bold text-center">{item.title}</h2>
                <h2 className="text-sm text-gray-500 text-center">
                  {item.desc}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium mt-10">
            Whom do you plan on travelling with ?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravellersList.map((item, index) => (
              <div
                key={index}
                className={`p-3 border cursor-pointer rounded-lg hover:shadow-lg
                        ${
                          formData?.travellers == item.people &&
                          "shadow-lg border-neutral-600 border-2"
                        }
                    `}
                onClick={() => handleInputChange("travellers", item.people)}
              >
                <h2 className="text-2xl text-center">{item.icon}</h2>
                <h2 className="font-bold text-center">{item.title}</h2>
                <h2 className="text-sm text-gray-500 text-center">
                  {item.desc}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 justify-end flex mb-10">
        <Button disabled={loading} onClick={OnGenerateTrip}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Planner"
          )}
        </Button>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <h2 className="font-bold text-lg text-black">
                Sign in with Google
              </h2>
              <p className="mt-1 text-gray-600">
                Sign in with Google Authentication securely.
              </p>
              <Button
                onClick={login}
                className="mt-5 w-full flex gap-2 items-center"
              >
                <FcGoogle className="w-6 h-6" />
                Sign In
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
