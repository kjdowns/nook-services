
const bugData = [
    {
        name: "Common butterfly",
        location: "Flying",
        time: "4 AM - 7 PM",
        northMonths: ["Sept - Jun"],
        southMonths: ["Mar - Dec"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/3/3a/NH-Icon-commonbutterfly.png/revision/latest?cb=20200401005428"
    },
    {
        name: "Yellow butterfly",
        location: "Flying",
        time: "4 AM - 7 PM",
        northMonths: ["Mar - Jun", "Sept - Oct"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/f/fa/NH-Icon-yellowbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Tiger butterfly",
        location: "Flying",
        time: "4 AM - 7 PM",
        northMonths: ["Mar - Sept"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/65/NH-Icon-tigerbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Peacock butterfly",
        location: "Flying (Hybrid Flowers)",
        time: "4 AM - 7 PM",
        northMonths: ["Mar - Jun"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-peacockbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Common bluebottle",
        location: "Flying",
        time: "4 AM - 7 PM",
        northMonths: ["Apr - Aug"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-commonbluebottle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Paper kite butterfly",
        location: "Flying",
        time: "8 AM - 7PM",
        northMonths: ["All Year"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-paperkitebutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Great purple emperor",
        location: "Flying",
        time: "4 AM - 7 PM",
        northMonths: ["May - Aug"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/27/NH-Icon-greatpurpleemperor.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Monarch butterfly",
        location: "Flying",
        time: "4 AM - 5 PM",
        northMonths: ["Sep - Nov"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-monarchbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Emperor butterfly",
        location: "Flying",
        time: "5 PM - 8 AM",
        northMonths: ["Jun - Sep", "Dec - Mar"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-emperorbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Agrias butterfly",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["Apr - Sep"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-agriasbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Rajah Brooke's birdwing",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["Apr - Sep", "Dec - Feb"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-rajahbrookesbirdwing.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Queen Alexandra's birdwing",
        location: "Flying",
        time: "8 AM - 4 PM",
        northMonths: ["May - Sep"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b8/NH-Icon-queenalexandrasbirdwing.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Moth",
        location: "Flying (Light)",
        time: "7 PM - 4 AM",
        northMonths: ["All Year"],
        southMonths: [],
        url: ""
    },
    {
        name: "Atlas moth",
        location: "On Trees",
        time: "7 PM - 4 AM",
        northMonths: ["Apr - Sep"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-atlasmoth.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Madagascan sunset moth",
        location: "Flying",
        time: "8 AM - 4 PM",
        northMonths: ["Apr - Sep"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7d/NH-Icon-madagascansunsetmoth.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Long locust",
        location: "On the Ground",
        time: "8 AM - 7 PM",
        northMonths: ["Apr - Nov"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-longlocust.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Migratory locust",
        location: "On the Ground",
        time: "8 AM - 7 PM",
        northMonths: ["Aug - Nov"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e4/NH-Icon-migratorylocust.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Rice grasshopper",
        location: "On the Ground",
        time: "8 AM - 7 PM",
        northMonths: ["Aug - Nov"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/d3/NH-Icon-ricegrasshopper.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Grasshopper",
        location: "On the Ground",
        time: "8 AM - 5 PM",
        northMonths: ["Jul - Sep"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/56/NH-Icon-grasshopper.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Cricket",
        location: "On the Ground",
        time: "5 PM - 8 AM",
        northMonths: ["Sep - Nov"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Icon-cricket.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Bell cricket",
        location: "On the Ground",
        time: "5 PM - 8 AM",
        northMonths: ["Sept - Oct"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-bellcricket.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Mantis",
        location: "On Flowers",
        time: "8 AM - 5 PM",
        northMonths: ["Mar - Nov"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-mantis.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Orchid mantis",
        location: "On Flowers (White)",
        time: "8 AM - 5 PM",
        northMonths: ["Mar - Nov"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-orchidmantis.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Honeybee",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["Mar - Jul"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-honeybee.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Wasp",
        location: "Shaking Trees",
        time: "All day",
        northMonths: ["All Year"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-wasp.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Brown cicada",
        location: "On Trees",
        time: "8 AM - 5 PM",
        northMonths: ["Jul - Aug"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/a/ab/NH-Icon-browncicada.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Robust cicada",
        location: "On Trees",
        time: "8 AM - 5 PM",
        northMonths: ["Jul - Aug"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-robustcicada.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Giant cicada",
        location: "On Trees",
        time: "8 AM - 5 PM",
        northMonths: ["Jul - Aug"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/58/NH-Icon-giantcicada.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Walker cicada",
        location: "On Trees",
        time: "8 AM - 5 PM",
        northMonths: ["Aug - Sep"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ec/NH-Icon-walkercicada.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Evening cicada",
        location: "On Trees",
        time: "4 AM - 8 AM & 4 PM - 7 PM",
        northMonths: ["Jul - Aug"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-eveningcicada.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Cicada shell",
        location: "On Trees",
        time: "All day",
        northMonths: ["Jul - Aug"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/97/NH-Icon-cicadashell.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Red dragonfly",
        location: "Flying",
        time: "8 AM - 7 PM",
        northMonths: ["Sep - Oct"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/eb/NH-Icon-reddragonfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Darner dragonfly",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["Apr - Oct"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/70/NH-Icon-darnerdragonfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Banded dragonfly",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["May - Oct"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/64/NH-Icon-bandeddragonfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Damselfly",
        location: "Flying",
        time: "All day",
        northMonths: ["Nov - Feb"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-damselfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Firefly",
        location: "Flying",
        time: "7 PM - 4 AM",
        northMonths: ["Jun"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/a/ae/NH-Icon-firefly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Mole cricket",
        location: "Underground",
        time: "All day",
        northMonths: ["Nov - May"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-molecricket.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Pondskater",
        location: "On Ponds and Rivers",
        time: "8 AM - 7 PM",
        northMonths: ["May - Sep"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/f/f4/NH-Icon-pondskater.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Diving beetle",
        location: "On Ponds and Rivers",
        time: "8 AM - 7 PM",
        northMonths: ["May - Sep"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-divingbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Giant water bug",
        location: "On Ponds and Rivers",
        time: "7 PM - 8 AM",
        northMonths: ["Apr - Sep"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-giantwaterbug.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    }

]

const fishData = [
    {
        name: "",
        location: "",
        time: "",
        northMonths: [],
        southMonths: [],
        url: ""
    }
]

let template = {
    name: "",
    location: "",
    time: "",
    northMonths: [],
    southMonths: [],
    url: ""
}