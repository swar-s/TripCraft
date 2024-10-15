import React, { useEffect, useState } from 'react'
import { Button } from '../../components/ui/button'
import { MdOutlineScreenShare } from "react-icons/md";
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

function InfoSection({trip}) {

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
    <div>
        <img src={PhotoUrl ? PhotoUrl: '/background.webp'} className='h-[400px] w-full object-cover rounded-xl'/>
        <div className='flex justify-between items-center'>
            <div className='mt-3 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>
                    {trip?.userSelection?.location?.label}
                </h2>
                <div className='mt-1 flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-700'>Number of Days: {trip?.userSelection?.numberOfDays}</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-700'>Budget: {trip?.userSelection?.budget}</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-700'>Travellers: {trip?.userSelection?.travellers}</h2>

                </div>
            </div>
            <Button className='bg-gray-200 hover:bg-gray-400 text-black'>
                <MdOutlineScreenShare className='h-6 w-6 text-black'/>
            </Button>
        </div>
    </div>
  )
}

export default InfoSection