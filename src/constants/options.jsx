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

export const AI_PROMPT='Generate Travel Plan for Location : {location}, for {totalDays} Days for {travellers} with a {budget} budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Uri, Geo Coordinates, ticket Pricing, rating,Time to travel each Of the location for {totalDays} days with each day plan, having the details of what to visit at what time(HH:MM AM/PM) in that particular day, in JSON format.'