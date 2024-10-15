import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

function HotelCardItem({ hotel }) {
    const [PhotoUrl,setPhotoUrl] = useState();
    useEffect(()=>{
        hotel&&GetPlacePhoto();
    },[hotel])

    const GetPlacePhoto=async()=>{
        const data = {
            textQuery: hotel?.name
        }
        const result = await GetPlaceDetails(data).then(resp =>{
            console.log(resp.data.places[0].photos[3].name);

            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoUrl);
        })
    }

  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel?.name +
          "," +
          hotel?.address
        }
        target="_blank"
      >
        <div className="mt-2 hover:scale-105 transition-all cursor-pointer">
          <img src={PhotoUrl ? PhotoUrl: '/background.webp'} className="rounded-lg h-[200px] w-full object-cover" />
          <div className="mt-1">
            <h2 className="font-semibold text-gray-700 mt-1">{hotel?.name}</h2>
            <h2 className="text-xs text-gray-700 mt-1">📍 {hotel?.address}</h2>
            <h2 className="text-sm text-gray-700 mt-1">💰 {hotel?.price}</h2>
            <h2 className="text-sm text-gray-700 mt-1">
              ⭐ {hotel?.rating}/5 stars
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HotelCardItem;
