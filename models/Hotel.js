import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    desc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    property: {
        freeParking: {
            type: Boolean,
            default: false,
        },
        valetParking: {
            type: Boolean,
            default: false,
        },
        freeWiFi: {
            type: Boolean,
            default: false,
        },
        pool: {
            type: Boolean,
            default: false,
        },
        outdoorPool: {
            type: Boolean,
            default: false,
        },
        gym: {
            type: Boolean,
            default: false,
        },
        bar: {
            type: Boolean,
            default: false,
        },
        freeKidsStay: {
            type: Boolean,
            default: false,
        },
        airTransportation: {
            type: Boolean,
            default: false,
        },
        conference: {
            type: Boolean,
            default: false,
        },
        coffeeShop: {
            type: Boolean,
            default: false,
        },
        freeBreakfast: {
            type: Boolean,
            default: false,
        },
        welcomeDrink: {
            type: Boolean,
            default: false,
        },
        carHire: {
            type: Boolean,
            default: false,
        },
        taxiService: {
            type: Boolean,
            default: false,
        },
        banquetRoom: {
            type: Boolean,
            default: false,
        },
        meetingRoom: {
            type: Boolean,
            default: false,
        },
        security: {
            type: Boolean,
            default: false,
        },
        newspaper: {
            type: Boolean,
            default: false,
        },
        firstaid: {
            type: Boolean,
            default: false,
        },
        dryCleaning: {
            type: Boolean,
            default: false,
        },
        ironing: {
            type: Boolean,
            default: false,
        },
        laundry: {
            type: Boolean,
            default: false,
        },
        frontDesk24h: {
            type: Boolean,
            default: false,
        },
        currencyExchange: {
            type: Boolean,
            default: false,
        },
    },
    room: {
        blackoutCurtains: {
            type: Boolean,
            default: false,
        },
        soundproof: {
            type: Boolean,
            default: false,
        },
        airConditioning: {
            type: Boolean,
            default: false,
        },
        desk: {
            type: Boolean,
            default: false,
        },
        diningArea: {
            type: Boolean,
            default: false,
        },
        tv: {
            type: Boolean,
            default: false,
        },
        shower: {
            type: Boolean,
            default: false,
        },
        bathrobes: {
            type: Boolean,
            default: false,
        },
        houseKeeping: {
            type: Boolean,
            default: false,
        },
        roomService: {
            type: Boolean,
            default: false,
        },
        seatingArea: {
            type: Boolean,
            default: false,
        },
        sofa: {
            type: Boolean,
            default: false,
        },
        telephone: {
            type: Boolean,
            default: false,
        },
        wardrobe: {
            type: Boolean,
            default: false,
        },
        clothesRack: {
            type: Boolean,
            default: false,
        },
        complimentaryToiletries: {
            type: Boolean,
            default: false,
        },
    },
    roomTypes: {
        landmarkView: {
            type: Boolean,
            default: false,
        },
        suites: {
            type: Boolean,
            default: false,
        },
        noSmoking: {
            type: Boolean,
            default: false,
        },
        cityView: {
            type: Boolean,
            default: false,
        },
    }
})

export default mongoose.model("Hotel", HotelSchema)