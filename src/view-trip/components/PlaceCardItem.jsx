import React, { useEffect, useState } from "react";
// import { Button } from "../../components/ui/button";
// import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

function PlaceCardItem({ place }) {
  const [PhotoUrl,setPhotoUrl] = useState();
    useEffect(()=>{
        place&&GetPlacePhoto();
    },[place])

    const GetPlacePhoto=async()=>{
        const data = {
            textQuery: place?.name
        }
        const result = await GetPlaceDetails(data).then(resp =>{
            console.log(resp.data.places[0].photos[3].name);

            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoUrl);
        })
    }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.name} target="_blank">
        <div className="mt-2 border border-gray-300 rounded-xl p-3 flex gap-5 hover:scale-105 transition-all shadow-md cursor-pointer">
        <img src={PhotoUrl ? PhotoUrl: '/background.webp'} className="w-[130px] h-[130px] rounded-xl object-cover" />
        <div>
            <h2 className="font-bold text-gray-800">{place?.name}</h2>
            <p className="text-xs text-justify text-gray-500">
            {place.details}
            </p>
            <h2 className="text-sm text-orange-900 mt-2">
            🕘 {place.time_to_travel}
            </h2>
        </div>
        </div>
    </Link>
  );
}

export default PlaceCardItem;
