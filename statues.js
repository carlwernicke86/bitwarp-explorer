//all statue coords are floored to nearest integer
//data from: https://pastebin.com/vfNuNT41

statues = [
  //Skyloft
  {x:-4698, y: 1237, z:-6364, map:                "Skyloft", name:         "Lower Academy"},
  {x: 2186, y:  393, z:  804, map:                "Skyloft", name:                "Bazaar"}, //bazzar
  {x: 4174, y:-3157, z:-5928, map:                "Skyloft", name:        "Waterfall Cave"}, //waterfall cave
  {x:-2353, y: 1880, z:-9622, map:                "Skyloft", name:         "Upper Academy"}, //upper academy
  //Isle of Songs
  {x: -179, y:  395, z: 4651, map:          "Isle of Songs", name:"Isle of Songs Interior"}, //Isle of Songs Interior
  //The Sky
  {x:102115,y:-10643,z:47017, map:                    "Sky", name:         "Lumpy Pumpkin"}, //Lumpy Pumpkin
  //Sky Keep
  {x: -317, y:    0, z: 2630, map:               "Sky Keep", name:                 "Enemy"}, //Enemy
  {x: 2639, y:    0, z:  603, map:               "Sky Keep", name:           "Underground"}, //Underground
  {x: 2480, y:    0, z: -760, map:               "Sky Keep", name:                  "Lava"}, //Lava
  {x:-2157, y:    0, z: -552, map:               "Sky Keep", name:           "Timeshift 2"}, //Timeshift 2
  {x:  475, y:    0, z: 2249, map:               "Sky Keep", name:           "Timeshift 1"}, //Timeshift 1
  {x: -677, y:    0, z:-2867, map:               "Sky Keep", name:             "Something"}, //Something
  {x: -621, y:    0, z: 2150, map:               "Sky Keep", name:              "Entrance"}, //Entrance
  //Faron Woods
  {x:-8360, y: -930, z:-1620, map:            "Faron Woods", name:                 "Entry"}, //Entrance
  {x:-2200, y: -500, z: 5450, map:            "Faron Woods", name:          "In The Woods"}, //In The Woods
  {x: 7260, y: 2100, z:-9375, map:            "Faron Woods", name:      "Viewing Platform"}, //Viewing Platform
  {x:-1180, y: 4979, z:-4280, map:            "Faron Woods", name:        "Great Tree Top"}, //Great Tree Top
  //Deep Woods
  {x: 2350, y: 1543, z:10250, map:             "Deep Woods", name:            "Deep Woods"},
  {x: -765, y:  757, z: 3350, map:             "Deep Woods", name:         "Forest Temple"},
  //Lake Floria
  {x: 1110, y: -824, z:15400, map:            "Lake Floria", name:            "Underwater"},
  {x: 2260, y:  433, z: 8110, map:            "Lake Floria", name:           "Lake Floria"},
  {x:-4950, y:  249, z:-5700, map:            "Lake Floria", name:      "Floria Waterfall"}, //Floria Waterfall
  //Skyview Temple
  {x:  268, y: 1124, z: 6180, map:         "Skyview Temple", name:              "Entrance"}, //Entrance
  {x:  680, y:    0, z: 1560, map:         "Skyview Temple", name:        "Map Chest Room"},
  {x:-3500, y:    0, z:-8400, map:         "Skyview Temple", name:         "Main Hub Room"}, //Main Hub Room
  {x: 1027, y:  300, z:-16994,map:         "Skyview Temple", name:             "Boss Door"},//Boss Door
  //Ancient Cistern
  {x: -424, y:    0, z: 5026, map:        "Ancient Cistern", name:              "Entrance"}, //Entrance(?)
  {x:  386, y: 7569, z: 1385, map:        "Ancient Cistern", name:             "Boss Door"},
  {x:-3990, y: 1000, z: 2850, map:        "Ancient Cistern", name:                     "?"},
  {x:-12300,y: 1481, z: 1370, map:        "Ancient Cistern", name:                     "?"},
  {x:-5263, y:-3410, z: 4381, map:        "Ancient Cistern", name:                     "?"},
  {x:-3459, y:-4218, z:  887, map:        "Ancient Cistern", name:                     "?"},
  {x:  444, y: 1000, z:-5435, map:        "Ancient Cistern", name:   "Lilypad Geyser Room"},
  //Eldin Volcano
  {x:-9900, y: 1840, z: 2800, map:          "Eldin Volcano", name:              "Entrance"},
  {x: 3470, y:  987, z: 6420, map:          "Eldin Volcano", name:          "Volcano East"}, //
  {x: 1100, y:  845, z:-5600, map:          "Eldin Volcano", name:        "Volcano Ascent"}, //Volcano Ascent
  {x:  300, y:13800, z:-24700,map:          "Eldin Volcano", name:       "Temple Entrance"},//Temple Entrance
  //Eldin Caves
  {x: 1200, y:-7390, z: 1700, map:            "Eldin Caves", name:              "Entrance"}, //Entrance
  //Volcano Summit
  {x: -400, y:    0, z: -700, map:         "Volcano Summit", name:        "Volcano Summit"},
  //Volcano Summit Interior
  {x: -600, y: -500, z:-10500,map:"Volcano Summit Interior", name:        "Fire Sanctuary"},//Fire Sanctuary Entrance
  //Earth Temple
  {x: 1000, y:    0, z:  -70, map:           "Earth Temple", name:              "Entrance"},
  {x:  800, y:    0, z:14200, map:           "Earth Temple", name:         "Middle Island"},
  {x: 9100, y:  450, z:-4500, map:           "Earth Temple", name:  "Ball Rolling Section"},
  {x:-9600, y: 6050, z:-13840,map:           "Earth Temple", name:             "Boss Door"},//Boss Door
  //Fire Sanctuary
  {x: 1282, y: 1100, z: 5974, map:         "Fire Sanctuary", name:              "Entrance"},
  {x: 4050, y:    0, z:-5132, map:         "Fire Sanctuary", name:"   First Magmanos Room"},
  {x:-7008, y:    0, z:-15921,map:         "Fire Sanctuary", name:" Northwest Circle Room"},
  {x:-7581, y: -550, z:-11476,map:         "Fire Sanctuary", name:"      Mogma Mitts Room"},
  {x: -222, y: 1100, z: -1072,map:         "Fire Sanctuary", name:"Initial Outdoor Bridge"},
  {x:-11594,y:  600, z:-10016,map:         "Fire Sanctuary", name:"     Thirsty Frog Room"},
  {x:    0, y: -550, z:-14250,map:         "Fire Sanctuary", name:             "Boss Door"},//Boss Door
  //Lanayru Desert
  {x: 1680, y: 1984, z:18933, map:         "Lanayru Desert", name:""},
  {x:-2117, y:  475, z:-6749, map:         "Lanayru Desert", name:          "North Desert"},
  {x:-23334,y:   50, z:  749, map:         "Lanayru Desert", name:         "Lanayru Gorge"},
  {x:-34352,y:   50, z:-4031, map:         "Lanayru Desert", name:        "Temple of Time"},
  {x:-14960,y:   80, z: 8300, map:         "Lanayru Desert", name:"?"},
  {x: 9300, y:  226, z:10200, map:         "Lanayru Desert", name:"?"},
  {x:-2054, y:  475, z:-6773, map:         "Lanayru Desert", name:"North Desert Alternate"},
  //Ancient Harbor
  {x:10175, y: 2293, z:35566, map:         "Ancient Harbor", name:"Ancient Harbor"},
  //Sand Sea Docks
  {x:  180, y:   70, z: -410, map:         "Sand Sea Docks", name:"Sand Sea Docks"},
  //Sand Sea
  {x:-48573,y:-10000,z:30736, map:               "Sand Sea", name:"?"},
  {x:-123230,y:-10000,z:12391,map:               "Sand Sea", name:"?"},
  {x:-121658,y:-10000,z:-34290,map:              "Sand Sea", name:"?"},
  {x: 1786, y:-10000,z: -736, map:               "Sand Sea", name:"?"},
  {x:-120725,y:-10000,z:11223,map:               "Sand Sea", name:"?"},
  //Skipper's Retreat
  {x:-3945, y:   50, z: 8660, map:      "Skipper's Retreat", name:"Entrance"},
  //Shipyard
  {x: -414, y:   50, z:15822, map:               "Shipyard", name:"Entrance"},
  {x:-3983, y:  500, z: 8826, map:"               Shipyard", name:"2nd Minecart"},
  //Pirate Stronghold
  {x: -712, y:   70, z:  182, map:      "Pirate Stronghold", name:"Entrance"},
  //Lanayru Mining Facility
  {x: -900, y:    0, z: 2200, map:"Lanayru Mining Facility", name:"Entrance"},
  {x:-3475, y: 1100, z:-20750,map:"Lanayru Mining Facility", name:"?"},
  {x: -700, y:  600, z:-8860, map:"Lanayru Mining Facility", name:"?"},
  {x: 4125, y: 1100, z:-22800,map:"Lanayru Mining Facility", name:"Boss Door"},
  //Sandship
  {x:-4993, y:    0, z:  811, map:               "Sandship", name:"First Lock"},
  {x:-2766, y:-1600, z: 1830, map:               "Sandship", name:"Boss Door"}, //Boss Door
  {x: 4818, y:    0, z: -730, map:               "Sandship", name:"Captain's Cabin"},
  //Sealed Grounds
  {x:-11029,y: 7500, z: 6279, map:         "Sealed Grounds", name:"Sealed Temple"},
  {x: 1365, y: 7600, z:10420, map:         "Sealed Grounds", name:"Behind the Temple"},
  {x:-8043, y: 8403, z:  153, map:         "Sealed Grounds", name:"Entrance"},
  //Past Sealed Grounds
  {x:    0, y:    0, z: 2320, map:    "Past Sealed Grounds", name:"Demise"},
]
