import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function Places({ trip }) {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl">• Places to Visit:</h2>

      <div>
        {trip.tripData?.itinerary.map((item, index) => (
          <div>
            <h2 className="font-bold mt-5">Day - {item.day} Itinerary</h2>
            <div className="grid md:grid-cols-2 gap-5">
            {item.places.map((place, index) => (
              <div className="mt-2">
                <h2 className="text-orange-700 text-sm">{place.visit_time || place.time_of_visit}</h2>
                <PlaceCardItem place = {place}/>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
