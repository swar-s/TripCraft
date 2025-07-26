import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function Places({ trip }) {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl">• Places to Visit:</h2>

      <div>
        {(trip.tripData?.itinerary || []).map((item, index) => (
          <div key={index}>
            <h2 className="font-bold mt-5">Day - {item.day} Itinerary</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {(item.places && item.places.length > 0) ? (
                item.places.map((place, idx) => (
                  <div className="mt-2" key={idx}>
                    <h2 className="text-orange-700 text-sm">{place.visit_time || place.time_of_visit}</h2>
                    <PlaceCardItem place={place} />
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-gray-500 italic">No places scheduled for this day.</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
