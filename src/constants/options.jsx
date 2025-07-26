export const SelectTravellersList=[
    {
        id:1,
        title:'Solo Trip',
        desc:'A solo traveller in exploration',
        icon:'✈',
        people:'1 person'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travellers in tandem' ,
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family' ,
        desc:'A group of caring ones',
        icon:'🏡' ,
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'👯‍♂️',
        people: '5 to 10 People'
    },
]

export const SelectBudgetOptions=[
    {
        id: 1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on average side' ,
        icon:'💰'
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
]

export const AI_PROMPT='Generate a travel plan for Location: {location}, for {totalDays} days for {travellers} with a {budget} budget. Return the result in JSON format with the following structure: hotels as an array of objects with these exact fields: name, address, price(make sure the price is in Indian Rupees), image_url, geo_coordinates, rating (number), and description. itinerary as an array of objects, each with: day (number), title, description, places (array of objects with: name, details, image_url, geo_coordinates, ticket_pricing, rating (number), time_to_travel), and schedule (array of objects with: place, time in HH:MM AM/PM). Use the exact field names and structure as specified here. Do not use any other field names or formats. Make sure you split the itinerary into {totalDays} days equally, considering the travel time and activities for each day, so that none of the day is vacant.';