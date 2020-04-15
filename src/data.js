
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
        southMonths: ["Mar - Apr", "Sep - Dec"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/f/fa/NH-Icon-yellowbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Tiger butterfly",
        location: "Flying",
        time: "4 AM - 7 PM",
        northMonths: ["Mar - Sept"],
        southMonths: ["Sep - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/65/NH-Icon-tigerbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Peacock butterfly",
        location: "Flying (Hybrid Flowers)",
        time: "4 AM - 7 PM",
        northMonths: ["Mar - Jun"],
        southMonths: ["Sep - Dec"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-peacockbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Common bluebottle",
        location: "Flying",
        time: "4 AM - 7 PM",
        northMonths: ["Apr - Aug"],
        southMonths: ["Oct - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-commonbluebottle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Paper kite butterfly",
        location: "Flying",
        time: "8 AM - 7PM",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-paperkitebutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Great purple emperor",
        location: "Flying",
        time: "4 AM - 7 PM",
        northMonths: ["May - Aug"],
        southMonths: ["Nov - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/27/NH-Icon-greatpurpleemperor.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Monarch butterfly",
        location: "Flying",
        time: "4 AM - 5 PM",
        northMonths: ["Sep - Nov"],
        southMonths: ["Mar - May"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-monarchbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Emperor butterfly",
        location: "Flying",
        time: "5 PM - 8 AM",
        northMonths: ["Jun - Sep", "Dec - Mar"],
        southMonths: ["Jun - Sep", "Dec - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-emperorbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Agrias butterfly",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["Apr - Sep"],
        southMonths: ["Oct - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-agriasbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Rajah Brooke's birdwing",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["Apr - Sep", "Dec - Feb"],
        southMonths: ["Jun - Aug", "Oct - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-rajahbrookesbirdwing.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Queen Alexandra's birdwing",
        location: "Flying",
        time: "8 AM - 4 PM",
        northMonths: ["May - Sep"],
        southMonths: ["Nov - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b8/NH-Icon-queenalexandrasbirdwing.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Moth",
        location: "Flying (Light)",
        time: "7 PM - 4 AM",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: ""
    },
    {
        name: "Atlas moth",
        location: "On Trees",
        time: "7 PM - 4 AM",
        northMonths: ["Apr - Sep"],
        southMonths: ["Oct - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-atlasmoth.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Madagascan sunset moth",
        location: "Flying",
        time: "8 AM - 4 PM",
        northMonths: ["Apr - Sep"],
        southMonths: ["Oct - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7d/NH-Icon-madagascansunsetmoth.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Long locust",
        location: "On the Ground",
        time: "8 AM - 7 PM",
        northMonths: ["Apr - Nov"],
        southMonths: ["Nov - May"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-longlocust.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Migratory locust",
        location: "On the Ground",
        time: "8 AM - 7 PM",
        northMonths: ["Aug - Nov"],
        southMonths: ["Feb - May"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e4/NH-Icon-migratorylocust.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Rice grasshopper",
        location: "On the Ground",
        time: "8 AM - 7 PM",
        northMonths: ["Aug - Nov"],
        southMonths: ["Feb - May"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/d3/NH-Icon-ricegrasshopper.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Grasshopper",
        location: "On the Ground",
        time: "8 AM - 5 PM",
        northMonths: ["Jul - Sep"],
        southMonths: ["Jan - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/56/NH-Icon-grasshopper.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Cricket",
        location: "On the Ground",
        time: "5 PM - 8 AM",
        northMonths: ["Sep - Nov"],
        southMonths: ["Mar - May"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Icon-cricket.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Bell cricket",
        location: "On the Ground",
        time: "5 PM - 8 AM",
        northMonths: ["Sept - Oct"],
        southMonths: ["Mar - Apr"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-bellcricket.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Mantis",
        location: "On Flowers",
        time: "8 AM - 5 PM",
        northMonths: ["Mar - Nov"],
        southMonths: ["Sep - May"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-mantis.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Orchid mantis",
        location: "On Flowers (White)",
        time: "8 AM - 5 PM",
        northMonths: ["Mar - Nov"],
        southMonths: ["Sep - May"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-orchidmantis.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Honeybee",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["Mar - Jul"],
        southMonths: ["Sep - Jan"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-honeybee.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Wasp",
        location: "Shaking Trees",
        time: "All day",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-wasp.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Brown cicada",
        location: "On Trees",
        time: "8 AM - 5 PM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/a/ab/NH-Icon-browncicada.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Robust cicada",
        location: "On Trees",
        time: "8 AM - 5 PM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-robustcicada.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Giant cicada",
        location: "On Trees",
        time: "8 AM - 5 PM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/58/NH-Icon-giantcicada.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Walker cicada",
        location: "On Trees",
        time: "8 AM - 5 PM",
        northMonths: ["Aug - Sep"],
        southMonths: ["Feb - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ec/NH-Icon-walkercicada.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Evening cicada",
        location: "On Trees",
        time: "4 AM - 8 AM & 4 PM - 7 PM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-eveningcicada.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Cicada shell",
        location: "On Trees",
        time: "All day",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/97/NH-Icon-cicadashell.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Red dragonfly",
        location: "Flying",
        time: "8 AM - 7 PM",
        northMonths: ["Sep - Oct"],
        southMonths: ["Mar - Apr"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/eb/NH-Icon-reddragonfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Darner dragonfly",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["Apr - Oct"],
        southMonths: ["Jan - Apr"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/70/NH-Icon-darnerdragonfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Banded dragonfly",
        location: "Flying",
        time: "8 AM - 5 PM",
        northMonths: ["May - Oct"],
        southMonths: ["Oct - Apr"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/64/NH-Icon-bandeddragonfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Damselfly",
        location: "Flying",
        time: "All day",
        northMonths: ["Nov - Feb"],
        southMonths: ["May - Aug"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-damselfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Firefly",
        location: "Flying",
        time: "7 PM - 4 AM",
        northMonths: ["Jun"],
        southMonths: ["Dec"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/a/ae/NH-Icon-firefly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Mole cricket",
        location: "Underground",
        time: "All day",
        northMonths: ["Nov - May"],
        southMonths: ["May - Nov"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-molecricket.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Pondskater",
        location: "On Ponds and Rivers",
        time: "8 AM - 7 PM",
        northMonths: ["May - Sep"],
        southMonths: ["Nov - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/f/f4/NH-Icon-pondskater.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Diving beetle",
        location: "On Ponds and Rivers",
        time: "8 AM - 7 PM",
        northMonths: ["May - Sep"],
        southMonths: ["Nov - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-divingbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Giant water bug",
        location: "On Ponds and Rivers",
        time: "7 PM - 8 AM",
        northMonths: ["Apr - Sep"],
        southMonths: ["Oct - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-giantwaterbug.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Stinkbug",
        location: "On Flowers",
        time: "All day",
        northMonths: ["Mar - Oct"],
        southMonths: ["Sep - Apr"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/80/NH-Icon-stinkbug.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Man-faced stink bug",
        location: "On Flowers",
        time: "7 PM - 8 AM",
        northMonths: ["Mar - Oct"],
        southMonths: ["Sep - Apr"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-manfacedstinkbug.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Ladybug",
        location: "On Flowers",
        time: "8 AM - 5 PM",
        northMonths: ["Mar - Jun", "Oct"],
        southMonths: ["Apr", "Sep - Dec"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/18/NH-Icon-ladybug.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Tiger beetle",
        location: "On the Ground",
        time: "All day",
        northMonths: ["Feb - Oct"],
        southMonths: ["Aug - Apr"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-tigerbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Jewel beetle",
        location: "On Tree Stumps",
        time: "All day",
        northMonths: ["Apr - Aug"],
        southMonths: ["Oct - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-jewelbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Violin beetle",
        location: "On Tree Stumps",
        time: "All day",
        northMonths: ["May - Jun", "Sep - Nov"],
        southMonths: ["Mar - May", "Nov - Dec"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-violinbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Citrus long-horned beetle",
        location: "On Tree Stumps",
        time: "All day",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-citruslonghornedbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Rosalia batesi beetle",
        location: "On Tree Stumps	",
        time: "All day",
        northMonths: ["May - Sep"],
        southMonths: ["Nov - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e0/NH-Icon-rosaliabatesibeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Blue weevil beetle",
        location: "On Trees",
        time: "All day",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/f/f5/NH-Icon-blueweevilbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Dung beetle",
        location: "On the Ground (rolling snowballs)",
        time: "All day",
        northMonths: ["Dec - Feb"],
        southMonths: ["Jun - Aug"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-dungbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005431"
    },
    {
        name: "Earth-boring dung beetle",
        location: "On the Ground",
        time: "All day",
        northMonths: ["Jul - Sep"],
        southMonths: ["Jan - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-earthboringdungbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Scarab beetle",
        location: "On Trees",
        time: "11 PM - 8 AM",
        northMonths: ["Jul - Aug"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4c/NH-Icon-scarabbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Drone beetle",
        location: "On Trees",
        time: "All day	",
        northMonths: ["Jun - Aug"],
        southMonths: ["Dec - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-dronebeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Goliath beetle",
        location: "On Trees (Coconut)",
        time: "5 PM - 8 AM",
        northMonths: ["Jun - Sep"],
        southMonths: ["Dec - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5b/NH-Icon-goliathbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Saw stag",
        location: "On Trees",
        time: "All day",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/4/48/NH-Icon-sawstag.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Miyama stag",
        location: "On Trees",
        time: "All day",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1b/NH-Icon-miyamastag.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Giant stag",
        location: "On Trees",
        time: "11 PM - 8 AM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-giantstag.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Rainbow stag",
        location: "On Trees",
        time: "7 PM - 8 AM",
        northMonths: ["Jun - Aug"],
        southMonths: [],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-rainbowstag.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Cyclommatus stag",
        location: "On Trees (Coconut)",
        time: "5 PM - 8 AM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Dec - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/17/NH-Icon-cyclommatusstag.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Golden stag",
        location: "On Trees (Coconut)",
        time: "5 PM - 8 AM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-goldenstag.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Giraffe stag",
        location: "On Trees",
        time: "5 PM - 8 AM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-giraffestag.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Horned dynastid",
        location: "On Trees",
        time: "5 PM - 8 AM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-horneddynastid.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Horned atlas",
        location: "On Trees (Coconut)",
        time: "5 PM - 8 AM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-hornedatlas.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Horned elephant",
        location: "On Trees (Coconut)",
        time: "5 PM - 8 AM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-hornedelephant.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Horned hercules",
        location: "On Trees (Coconut)",
        time: "5 PM - 8 AM",
        northMonths: ["Jul - Aug"],
        southMonths: ["Jan - Feb"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c2/NH-Icon-hornedhercules.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Walking stick",
        location: "On Trees",
        time: "4 AM - 8 AM & 5 PM - 7 PM",
        northMonths: ["Jul - Nov"],
        southMonths: ["Jan - May"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/62/NH-Icon-walkingstick.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Walking leaf",
        location: "Under Trees Disguised as Leafs",
        time: "All day",
        northMonths: ["Jul - Sep"],
        southMonths: ["Jan - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/cb/NH-Icon-walkingleaf.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Bagworm",
        location: "Shaking Trees",
        time: "All day",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/81/NH-Icon-bagworm.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Ant",
        location: "On rotten food",
        time: "All day",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/4/45/NH-Icon-ant.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Hermit crab",
        location: "Beach disguised as Shells",
        time: "7 PM - 8 AM",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-hermitcrab.png/revision/latest/scale-to-width-down/64?cb=20200401005430"
    },
    {
        name: "Wharf roach",
        location: "On Beach Rocks",
        time: "All day",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH-Icon-wharfroach.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Fly",
        location: "On Trash Items",
        time: "All day",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-fly.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Mosquito",
        location: "Flying",
        time: "5 PM - 4 AM",
        northMonths: ["Jun - Sep"],
        southMonths: ["Dec - Mar"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-mosquito.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Flea",
        location: "Villager's Heads",
        time: "All day",
        northMonths: ["Apr - Nov"],
        southMonths: ["Nov - May"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/92/NH-Icon-flea.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Snail",
        location: "On Rocks (Rain)",
        time: "All day",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b1/NH-Icon-snail.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Pill bug",
        location: "Hitting Rocks",
        time: "11 PM - 4 PM",
        northMonths: ["Sep - Jun"],
        southMonths: ["Mar - Dec"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-pillbug.png/revision/latest/scale-to-width-down/64?cb=20200401005428"
    },
    {
        name: "Centipede",
        location: "Hitting Rocks",
        time: "4 PM - 11 PM",
        northMonths: ["Sep - Jun"],
        southMonths: ["Mar - Dec"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/3/30/NH-Icon-centipede.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Spider",
        location: "Shaking Trees",
        time: "7 PM - 8 AM",
        northMonths: ["All Year"],
        southMonths: ["All Year"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-spider.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Tarantula",
        location: "On the Ground",
        time: "7 PM - 4 AM",
        northMonths: ["Nov - Apr"],
        southMonths: ["May - Oct"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/0/0a/NH-Icon-tarantula.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
    },
    {
        name: "Scorpion",
        location: "On the Ground",
        time: "7 PM - 4 AM",
        northMonths: ["May - Oct"],
        southMonths: ["Nov - Apr"],
        url: "https://vignette.wikia.nocookie.net/animalcrossing/images/3/34/NH-Icon-scorpion.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
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

let template = 
{
    name: "",
    location: "",
    time: "",
    northMonths: [],
    southMonths: [],
    url: ""
}