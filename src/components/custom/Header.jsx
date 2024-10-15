import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import { useNavigate, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";



function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);

  // const navigation = useNavigate();
  useEffect(() => {
    console.log(user);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

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
        window.location.reload()
      });
  };
  return (
    <div className="py-3 shadow-sm flex justify-between items-center px-7">
      <a href="/">
      <img src="/transparent_logo.png" className="h-10 w-full"/>
      </a>
      <div>
        {user ? (
          <div className="flex items-center gap-5">
            <a href="/create-trip">
            <Button className="rounded-full">
              Create Trip
            </Button>
            </a>
            <a href="/my-trips">
            <Button className="rounded-full">
              My Trips
            </Button>
            </a>
          
            <Popover>
              <PopoverTrigger>
              <img src={user?.picture}  className="h-[35px] w-[35px] rounded-full"/>
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="text-md flex items-center gap-2 hover:cursor-pointer" onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                  // navigation('/');
                }}><img src="/logout.png" className="h-5 w-5"/> Logout</h2>
              </PopoverContent>
            </Popover>


          </div>
        ) : (
          <Button onClick={()=> setOpenDialog(true)}>Sign In</Button>
        )}
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

export default Header;
