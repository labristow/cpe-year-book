// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getHostel (req, res){
    const hostel_id = parseInt(req.query.id);
    let hostel;
    if(hostel_id){
        hostel = hostels.find(hostel=>hostel.id===hostel_id);
        // console.log(hostel)
    }
    if(hostel){
        res.status(200).json(hostel);
    }else{
        res.status(404).json({
        "message": "Requested resource not found"
    });
    }
}


let hostels = [
    {
        "id": 1,
        "name": "Amoke Hostel",
        "location": "Stella Maris Area",
        "price": "150,000",
        "imagesDir": "amoke",
        "images": ["/images/hostels/amoke/1.jpg", "/images/hostels/amoke/2.jpg", "/images/hostels/amoke/3.jpg", "/images/hostels/amoke/4.jpg"],
        "rating": "4.0",
        "comments": [
            "This hostel is one of the best I have ever lived. Peaceful and safe",
            "The distance from the main road is somehow much for me",
            "It's stressful to get water during dry season because their bore-hole is usually dry during that time",
            "MTN network is blazingly fast here"
        ],
        "ammenities": ["Bore hole", "Wifi", "Generator"],
        "agent_number": "+2348148331698"
    },{
        "id": 2,
        "name": "Lambo II Hostel",
        "location": "Safari",
        "price": "105,000",
        "imagesDir": "lambo",
        "images": ["/images/hostels/lambo/1.jpg", "/images/hostels/lambo/2.jpg", "/images/hostels/lambo/3.jpg"],
        "rating": "4.0",
        "comments": [
            "This hostel is one of the best I have ever lived. Peaceful and safe",
            "The distance from the main road is somehow much for me",
            "It's stressful to get water during dry season because their bore-hole is usually dry during that time",
            "MTN network is blazingly fast here"
        ],
        "ammenities": ["Running water", "Generator", "Hostel Cleaner"],
        "agent_number": "+2348148331698"
    },{
        "id": 3,
        "name": "God's Own Villa",
        "location": "Behind Immigration office Oyun",
        "price": "90,000",
        "imagesDir": "gods-own",
        "images": ["/images/hostels/gods-own/1.jpg", "/images/hostels/gods-own/2.jpg"],
        "rating": "4.0",
        "comments": [
            "This hostel is one of the best I have ever lived. Peaceful and safe",
            "The distance from the main road is somehow much for me",
            "It's stressful to get water during dry season because their bore-hole is usually dry during that time",
            "MTN network is blazingly fast here"
        ],
        "ammenities": ["Running water", "Hostel Cleaner", "Room Wardrobe"],
        "agent_number": "+2348148331698"
    },{
        "id": 4,
        "name": "Benik Hostel",
        "location": "Tiper garrage",
        "price": "200,000",
        "imagesDir": "benik",
        "images": ["/images/hostels/benik/1.jpg", "/images/hostels/benik/2.jpg", "/images/hostels/benik/3.jpg", "/images/hostels/benik/4.jpg"],
        "rating": "4.0",
        "comments": [
            "This hostel is one of the best I have ever lived. Peaceful and safe",
            "The distance from the main road is somehow much for me",
            "It's stressful to get water during dry season because their bore-hole is usually dry during that time",
            "MTN network is blazingly fast here"
        ],
        "ammenities": ["Running water", "Wifi", "Room Wardrobe"],
        "agent_number": "+2348148331698"
    },{
        "id": 5,
        "name": "Chukwuchebem Hostel",
        "location": "G.R.A",
        "price": "220,000",
        "imagesDir": "chukwuchebem",
        "images": ["/images/hostels/chukwuchebem/1.jpg", "/images/hostels/chukwuchebem/2.jpg", "/images/hostels/chukwuchebem/3.jpg", "/images/hostels/chukwuchebem/4.jpg"],
        "rating": "4.0",
        "comments": [
            "This hostel is one of the best I have ever lived. Peaceful and safe",
            "The distance from the main road is somehow much for me",
            "It's stressful to get water during dry season because their bore-hole is usually dry during that time",
            "MTN network is blazingly fast here"
        ],
        "ammenities": ["Running water", "Transfomer"],
        "agent_number": "+2348148331698"
    },{
        "id": 6,
        "name": "Godfellic Hostel",
        "location": "Ajanaku",
        "price": "250,000",
        "imagesDir": "godfellic",
        "images": ["/images/hostels/godfellic/1.jpg", "/images/hostels/godfellic/2.jpg", "/images/hostels/godfellic/3.jpg", "/images/hostels/godfellic/4.jpg"],
        "rating": "4.0",
        "comments": [
            "This hostel is one of the best I have ever lived. Peaceful and safe",
            "The distance from the main road is somehow much for me",
            "It's stressful to get water during dry season because their bore-hole is usually dry during that time",
            "MTN network is blazingly fast here"
        ],
        "ammenities": ["Football field", "Generator", "Room Wardrobe"],
        "agent_number": "+2348148331698"
    },{
        "id": 7,
        "name": "Marvelous Hostel",
        "location": "Sanrab",
        "price": "200,000",
        "imagesDir": "marvelous",
        "images": ["/images/hostels/marvelous/1.jpg", "/images/hostels/marvelous/2.jpg", "/images/hostels/marvelous/3.jpg", "/images/hostels/marvelous/4.jpg"],
        "rating": "4.0",
        "comments": [
            "This hostel is one of the best I have ever lived. Peaceful and safe",
            "The distance from the main road is somehow much for me",
            "It's stressful to get water during dry season because their bore-hole is usually dry during that time",
            "MTN network is blazingly fast here"
        ],
        "ammenities": ["Bore hole", "Transformer", "Room Wardrobe"],
        "agent_number": "+2348148331698"
    },{
        "id": 8,
        "name": "Novena Hostel",
        "location": "Awolowo road",
        "price": "280,000",
        "imagesDir": "novena",
        "images": ["/images/hostels/novena/1.jpg", "/images/hostels/novena/2.jpg", "/images/hostels/novena/3.jpg", "/images/hostels/novena/4.jpg"],
        "rating": "4.0",
        "comments": [
            "This hostel is one of the best I have ever lived. Peaceful and safe",
            "The distance from the main road is somehow much for me",
            "It's stressful to get water during dry season because their bore-hole is usually dry during that time",
            "MTN network is blazingly fast here"
        ],
        "ammenities": ["Running water", "Generator", "Room Wardrobe"],
        "agent_number": "+2348148331698"
    }
]