//all statue coords are floored to nearest integer
//data from: https://pastebin.com/vfNuNT41

statues = [
  //Skyloft
  {x:-4698, y: 1237, z:-6364, map:                "Skyloft", name:         "Lower Academy", bitwarp:  true}, //lower academy
  {x: 2186, y:  393, z:  804, map:                "Skyloft", name:                "Bazaar", bitwarp:  true}, //bazzar
  {x: 4174, y:-3157, z:-5928, map:                "Skyloft", name:        "Waterfall Cave", bitwarp:  true}, //waterfall cave
  {x:-2353, y: 1880, z:-9622, map:                "Skyloft", name:         "Upper Academy", bitwarp:  true}, //upper academy
  //Isle of Songs
  {x: -179, y:  395, z: 4651, map:          "Isle of Songs", name:"Isle of Songs Interior", bitwarp: false}, //Isle of Songs Interior
  //The Sky
  {x:102115,y:-10643,z:47017, map:                    "Sky", name:         "Lumpy Pumpkin", bitwarp:  true}, //Lumpy Pumpkin
  //Sky Keep
  {x: -317, y:    0, z: 2630, map:               "Sky Keep", name:                 "Enemy", bitwarp: false}, //Enemy
  {x: 2639, y:    0, z:  603, map:               "Sky Keep", name:           "Underground", bitwarp: false}, //Underground
  {x: 2480, y:    0, z: -760, map:               "Sky Keep", name:                  "Lava", bitwarp: false}, //Lava
  {x:-2157, y:    0, z: -552, map:               "Sky Keep", name:           "Timeshift 2", bitwarp: false}, //Timeshift 2
  {x:  475, y:    0, z: 2249, map:               "Sky Keep", name:           "Timeshift 1", bitwarp: false}, //Timeshift 1
  {x: -677, y:    0, z:-2867, map:               "Sky Keep", name:             "Something", bitwarp: false}, //Something
  {x: -621, y:    0, z: 2150, map:               "Sky Keep", name:              "Entrance", bitwarp: false}, //Entrance
  //Faron Woods
  {x:-8360, y: -930, z:-1620, map:            "Faron Woods", name:                 "Entry", bitwarp:  true}, //Entrance
  {x:-2200, y: -500, z: 5450, map:            "Faron Woods", name:          "In The Woods", bitwarp:  true}, //In The Woods
  {x: 7260, y: 2100, z:-9375, map:            "Faron Woods", name:      "Viewing Platform", bitwarp:  true}, //Viewing Platform
  {x:-1180, y: 4979, z:-4280, map:            "Faron Woods", name:        "Great Tree Top", bitwarp:  true}, //Great Tree Top
  //Deep Woods
  {x: 2350, y: 1543, z:10250, map:             "Deep Woods", name:                "Island", bitwarp:  true},
  {x: -765, y:  757, z: 3350, map:             "Deep Woods", name:         "Forest Temple", bitwarp:  true},
  //Lake Floria
  {x: 1110, y: -824, z:15400, map:            "Lake Floria", name:            "Underwater", bitwarp:  true},
  {x: 2260, y:  433, z: 8110, map:            "Lake Floria", name:           "Lake Floria", bitwarp:  true},
  {x:-4950, y:  249, z:-5700, map:            "Lake Floria", name:      "Floria Waterfall", bitwarp:  true}, //Floria Waterfall
  //Skyview Temple
  {x:  268, y: 1124, z: 6180, map:         "Skyview Temple", name:              "Entrance", bitwarp: false}, //Entrance
  {x:  680, y:    0, z: 1560, map:         "Skyview Temple", name:        "Map Chest Room", bitwarp: false},
  {x:-3500, y:    0, z:-8400, map:         "Skyview Temple", name:         "Main Hub Room", bitwarp: false}, //Main Hub Room
  {x: 1027, y:  300, z:-16994,map:         "Skyview Temple", name:             "Boss Door", bitwarp: false},//Boss Door
  //Ancient Cistern
  {x: -424, y:    0, z: 5026, map:        "Ancient Cistern", name:              "Entrance", bitwarp: false}, //Entrance(?)
  {x:  386, y: 7569, z: 1385, map:        "Ancient Cistern", name:             "Boss Door", bitwarp: false},
  {x:-3990, y: 1000, z: 2850, map:        "Ancient Cistern", name:  "Thread from Basement", bitwarp: false},
  {x:-5263, y:-3410, z: 4381, map:        "Ancient Cistern", name:       "Basement Tunnel", bitwarp: false},
  {x:  444, y: 1000, z:-5435, map:        "Ancient Cistern", name:   "Lilypad Geyser Room", bitwarp: false},
  //Eldin Volcano
  {x:-9900, y: 1840, z: 2800, map:          "Eldin Volcano", name:              "Entrance", bitwarp: false},
  {x: 3470, y:  987, z: 6420, map:          "Eldin Volcano", name:          "Volcano East", bitwarp: false}, //
  {x: 1100, y:  845, z:-5600, map:          "Eldin Volcano", name:        "Volcano Ascent", bitwarp: false}, //Volcano Ascent
  {x:  300, y:13800, z:-24700,map:          "Eldin Volcano", name:       "Temple Entrance", bitwarp: false},//Temple Entrance
  //Eldin Caves
  {x: 1200, y:-7390, z: 1700, map:            "Eldin Caves", name:              "Entrance", bitwarp: false}, //Entrance
  //Volcano Summit
  {x: -400, y:    0, z: -700, map:         "Volcano Summit", name:        "Volcano Summit", bitwarp: false},
  //Volcano Summit Interior
  {x: -600, y: -500, z:-10500,map:"Volcano Summit Interior", name:        "Fire Sanctuary", bitwarp: false},//Fire Sanctuary Entrance
  //Earth Temple
  {x: 1000, y:    0, z:  -70, map:           "Earth Temple", name:              "Entrance", bitwarp: false},
  {x:  800, y:    0, z:14200, map:           "Earth Temple", name:         "Middle Island", bitwarp: false},
  {x: 9100, y:  450, z:-4500, map:           "Earth Temple", name:  "Ball Rolling Section", bitwarp: false},
  {x:-9600, y: 6050, z:-13840,map:           "Earth Temple", name:             "Boss Door", bitwarp: false},//Boss Door
  //Fire Sanctuary
  {x: 1282, y: 1100, z: 5974, map:         "Fire Sanctuary", name:              "Entrance", bitwarp: false},
  {x: 4050, y:    0, z:-5132, map:         "Fire Sanctuary", name:"   First Magmanos Room", bitwarp: false},
  {x:-7008, y:    0, z:-15921,map:         "Fire Sanctuary", name:" Northwest Circle Room", bitwarp: false},
  {x:-7581, y: -550, z:-11476,map:         "Fire Sanctuary", name:"      Mogma Mitts Room", bitwarp: false},
  {x:    0, y: 1100, z: -1100,map:         "Fire Sanctuary", name:"Initial Outdoor Bridge", bitwarp: false},
  {x:-11594,y:  600, z:-10016,map:         "Fire Sanctuary", name:"     Thirsty Frog Room", bitwarp: false},
  {x:    0, y: -550, z:-14250,map:         "Fire Sanctuary", name:             "Boss Door", bitwarp: false},//Boss Door
  //Lanayru Desert
  {x: 1680, y: 1984, z:18933, map:         "Lanayru Desert", name:"       Desert Entrance", bitwarp: false},
  {x:-2117, y:  475, z:-6749, map:         "Lanayru Desert", name:"          North Desert", bitwarp: false},
  {x:-23334,y:   50, z:  749, map:         "Lanayru Desert", name:"          Desert Gorge", bitwarp: false},
  {x:-34352,y:   50, z:-4031, map:         "Lanayru Desert", name:"        Temple of Time", bitwarp: false},
  {x:-14960,y:   80, z: 8300, map:         "Lanayru Desert", name:"           West Desert", bitwarp: false},
  {x: 9300, y:  226, z:10200, map:         "Lanayru Desert", name:"           Stone Cache", bitwarp: false},
  //Ancient Harbor
  {x:10175, y: 2293, z:35566, map:           "Lanayru Mine", name:"              Entrance", bitwarp: false},
  //Sand Sea Docks
  {x:  180, y:   70, z: -410, map:         "Sand Sea Docks", name:"        Sand Sea Docks", bitwarp: false},
  //Sand Sea, not displaying these since they will never be useful
  /*{x:-48573,y:-10000,z:30736, map:               "Sand Sea", name:"?", bitwarp: false},
  {x:-123230,y:-10000,z:12391,map:               "Sand Sea", name:"?", bitwarp: false},
  {x:-121658,y:-10000,z:-34290,map:              "Sand Sea", name:"?", bitwarp: false},
  {x: 1786, y:-10000,z: -736, map:               "Sand Sea", name:"?", bitwarp: false},
  {x:-120725,y:-10000,z:11223,map:               "Sand Sea", name:"?", bitwarp: false},*/
  //Skipper's Retreat
  {x:-3945, y:   50, z: 8660, map:      "Skipper's Retreat", name:"              Entrance", bitwarp: false},
  //Shipyard
  {x: -414, y:   50, z:15822, map:               "Shipyard", name:"              Entrance", bitwarp: false},
  {x:-3983, y:  500, z: 8826, map:               "Shipyard", name:"          2nd Minecart", bitwarp: false},
  //Pirate Stronghold
  {x: -712, y:   70, z:  182, map:      "Pirate Stronghold", name:"              Entrance", bitwarp: false},
  //Lanayru Gorge
  {x: -1200,y:   30, z:-2000, map:          "Lanayru Gorge", name:"              Entrance", bitwarp: false},
  //Lanayru Mining Facility
  {x: -900, y:    0, z: 2200, map:"Lanayru Mining Facility", name:"              Entrance", bitwarp: false},
  {x:-3475, y: 1100, z:-20750,map:"Lanayru Mining Facility", name:"        Boss Door East", bitwarp: false},
  {x: -700, y:  600, z:-8860, map:"Lanayru Mining Facility", name:"         Main Hub Room", bitwarp: false},
  {x: 4125, y: 1100, z:-22800,map:"Lanayru Mining Facility", name:"        Boss Door West", bitwarp: false},
  //Sandship
  {x:-4993, y:    0, z:  811, map:               "Sandship", name:"            First Lock", bitwarp: false},
  {x:-2766, y:-1600, z: 1830, map:               "Sandship", name:"             Boss Door", bitwarp: false}, //Boss Door
  {x: 4818, y:    0, z: -730, map:               "Sandship", name:"       Captain's Cabin", bitwarp: false},
  //Sealed Grounds
  {x:-11029,y: 7500, z: 6279, map:         "Sealed Grounds", name:"     Behind the Temple", bitwarp:  true},
  {x: 1365, y: 7600, z:10420, map:         "Sealed Grounds", name:"         Sealed Temple", bitwarp:  true},
  {x:-8043, y: 8403, z:  153, map:         "Sealed Grounds", name:"                Spiral", bitwarp:  true},
  //Past Sealed Grounds
  {x:    0, y:    0, z: 2320, map:    "Past Sealed Grounds", name:"                Demise", bitwarp: false},
]
