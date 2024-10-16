import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {
  const [PhotoUrl,setPhotoUrl] = useState();
  useEffect(()=>{
      trip&&GetPlacePhoto();
  },[trip])

  const GetPlacePhoto=async()=>{
      const data = {
          textQuery: trip?.userSelection?.location?.label
      }
      const result = await GetPlaceDetails(data).then(resp =>{
          console.log(resp.data.places[0].photos[3].name);

          const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
          setPhotoUrl(PhotoUrl);
      })
  }
  return (
    <Link to={'/view-trip/'+ trip?.id}>
      <div className='mt-5 hover:scale-105 transition-all border rounded-xl p-2 border-gray-500'>
        <img src={PhotoUrl? PhotoUrl:'/background.webp'} className="object-cover rounded-xl h-[200px] w-full"/>
        <div>
          <h2 className='text-gray-800 font-bold text-md mt-2 ml-1'>
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className='font-medium text-sm ml-1 text-gray-500'>
            {trip?.userSelection?.numberOfDays} Days Trip with {trip?.userSelection?.budget} Budget
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default UserTripCardItem