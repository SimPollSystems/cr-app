import { Card } from './card';

export var CARDS: Card[] = [
 {
    "id": "sparky",
    "name": "Sparky",
    "img": "sparky.png",
    "hitSpeed": 1,
    "speed": 1,
    "deployTime": 1,
    "lifetime": null,
    "range": 4.5,
    "targets": 1,
    "splash": true,
    "cost": 6,
    "troopCount": 1,
    "type": "troop",
    "rarity": 4,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": null,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 1200,
        "damage": 1300,
        "dps": 260
      },
      "2": {
        "hitpoints": 1320,
        "damage": 1430,
        "dps": 286
      },
      "3": {
        "hitpoints": 1452,
        "damage": 1573,
        "dps": 314
      },
      "4": {
        "hitpoints": 1596,
        "damage": 1729,
        "dps": 345
      },
      "5": {
        "hitpoints": 1752,
        "damage": 1430,
        "dps": 286
      }
    }
  },
  {
    "id": "iceWiz",
    "name": "Ice Wizard",
    "img": "iceWiz.png",
    "hitSpeed": 1.5,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 5.5,
    "targets": 2,
    "splash": true,
    "cost": 3,
    "troopCount": 1,
    "type": "troop",
    "rarity": 4,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": null,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": {
        "slowUnits": 0.5
      },
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 700,
        "damage": 63,
        "dps": 42
      },
      "2": {
        "hitpoints": 770,
        "shieldHp": false,
        "damage": 69,
        "dps": 46
      },
      "3": {
        "hitpoints": 847,
        "shieldHp": false,
        "damage":76,
        "dps": 50
      },
      "4": {
        "hitpoints": 931,
        "damage": 83,
        "dps": 55
      },
      "5": {
        "hitpoints": 1022,
        "damage": 91,
        "dps": 60
      }
    }      
  },
  {
    "id": "princess",
    "name": "Princess",
    "img": "princess.png",
    "hitSpeed": 3,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 9,
    "targets": 2,
    "splash": true,
    "cost": 3,
    "troopCount": 1,
    "type": "troop",
    "rarity": 4,
    "radius": null,
    "spawnAmt": false,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 216,
        "damage": 140,
        "dps": 46
      },
      "2": {
        "hitpoints": 237,
        "damage": 154,
        "dps": 51
      },
      "3": {
        "hitpoints": 261,
        "damage":169,
        "dps": 56
      },
      "4": {
        "hitpoints": 287,
        "damage": 186,
        "dps": 62
      },
      "5": {
        "hitpoints":315,
        "damage": 204,
        "dps": 68
      }
    }      
  },
  {
    "id": "lavaHound",
    "name": "Lava Hound",
    "img": "lavaHound.png",
    "hitSpeed": 1.3,
    "speed": 1,
    "deployTime": 1,
    "lifetime": null,
    "range": 2,
    "targets": 3,
    "splash": false,
    "cost": 7,
    "troopCount": 1,
    "type": "troop",
    "rarity": 4,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": "lavaPup",
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 3000,
        "damage": 35,
        "dps": 26
      },
      "2": {
        "hitpoints": 3300,
        "damage": 38,
        "dps": 29
      },
      "3": {
        "hitpoints": 3630,
        "damage": 42,
        "dps": 32
      },
      "4": {
        "hitpoints": 3990,
        "damage": 46,
        "dps": 35
      },
      "5": {
        "hitpoints": 4380,
        "damage": 51,
        "dps": 39
      }
    }      
  },
  {
    "id": "lavaPup",
    "name": "Lava Pup",
    "img": null,
    "hitSpeed": 1,
    "speed": 2,
    "deployTime": 0,
    "lifetime": null,
    "range": 2,
    "targets": 2,
    "splash": false,
    "cost": 0,
    "troopCount": 6,
    "type": "troop",
    "rarity": 4,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 180,
        "damage": 45,
        "dps": 45
      },
      "2": {
        "hitpoints": 198,
        "damage": 49,
        "dps": 49
      },
      "3": {
        "hitpoints": 217,
        "damage": 54,
        "dps": 54
      },
      "4": {
        "hitpoints": 239,
        "damage": 59,
        "dps": 59
      },
      "5": {
        "hitpoints": 262,
        "damage": 65,
        "dps": 65
      }
    }      
  },
  {
    "id": "pekka",
    "name": "P.E.K.K.A.",
    "img": "pekka.png",
    "hitSpeed": 1.8,
    "speed": 1,
    "deployTime": 3,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 7,
    "troopCount": 1,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 2600,
        "damage": 450,
        "dps": 250
      },
      "2": {
        "hitpoints": 2860,
        "damage": 495,
        "dps": 275
      },
      "3": {
        "hitpoints": 3146,
        "damage": 544,
        "dps": 302
      },
      "4": {
        "hitpoints": 3458,
        "damage": 598,
        "dps": 332
      },
      "5": {
        "hitpoints": 3796,
        "damage": 657,
        "dps": 365
      },
      "6": {
        "hitpoints": 4160,
        "damage": 720,
        "dps": 400
      },
      "7": {
        "hitpoints": 4576,
        "damage": 792,
        "dps": 440
      },
      "8": {
        "hitpoints": 5018,
        "damage": 868,
        "dps": 482
      }
    }
  },
  {
    "id": "babyDrag",
    "name": "Baby Dragon",
    "img": "babyDrag.png",
    "hitSpeed": 1.8,
    "speed": 3,
    "deployTime": 1,
    "lifetime": null,
    "range": 3,
    "targets": 2,
    "splash": true,
    "cost": 4,
    "troopCount": 1,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 800,
        "damage": 100,
        "dps": 55
      },
      "2": {
        "hitpoints": 880,
        "damage": 110,
        "dps": 61
      },
      "3": {
        "hitpoints": 968,
        "damage": 121,
        "dps": 67
      },
      "4": {
        "hitpoints": 1064,
        "damage": 133,
        "dps": 74
      },
      "5": {
        "hitpoints": 1168,
        "damage": 146,
        "dps": 81
      },
      "6": {
        "hitpoints": 1280,
        "damage": 160,
        "dps": 88
      },
      "7": {
        "hitpoints": 1408,
        "damage": 176,
        "dps": 97
      },
      "8": {
        "hitpoints": 1544,
        "damage": 193,
        "dps": 107
      }
    }
  },
  {
    "id": "darkPrince",
    "name": "Dark Prince",
    "img": "darkPrince.png",
    "hitSpeed": 1.5,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": true,
    "cost": 4,
    "troopCount": 1,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": true,
    "duration": false,
    "special": {
      "damageMultiplier": 2
    },
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 700,
        "shieldHp": 200,
        "damage": 125,
        "dps": 83
      },
      "2": {
        "hitpoints": 770,
        "shieldHp": 220,
        "damage": 137,
        "dps": 91
      },
      "3": {
        "hitpoints": 847,
        "shieldHp": 242,
        "damage": 151,
        "dps": 100
      },
      "4": {
        "hitpoints": 931,
        "shieldHp": 266,
        "damage": 166,
        "dps": 110
      },
      "5": {
        "hitpoints": 1022,
        "shieldHp": 292,
        "damage": 182,
        "dps": 121
      },
      "6": {
        "hitpoints": 1120,
        "shieldHp": 320,
        "damage": 200,
        "dps": 133
      },
      "7": {
        "hitpoints": 1232,
        "shieldHp": 352,
        "damage": 220,
        "dps": 160
      },
      "8": {
        "hitpoints": 1351,
        "shieldHp": 386,
        "damage": 241,
        "dps": 160
      }
    }
  },
  {
    "id": "miner",
    "name": "Miner",
    "img": "miner.png",
    "hitSpeed": 1.2,
    "speed": 3,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 3,
    "troopCount": 1,
    "type": "troop",
    "rarity": 4,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": true,
    "duration": false,
    "special": null,
    "crownTowerReduction": true,
    "level": {
      "1": {
        "hitpoints": 1060,
        "damage": 160,
        "dps": 130,
        "crownTowerDmg": 64
      },
      "2": {
        "hitpoints": 1166,
        "damage": 176,
        "dps": 146,
        "crownTowerDmg": 71
      },
      "3": {
        "hitpoints": 1282,
        "damage": 193,
        "dps": 160,
        "crownTowerDmg": 78
      },
      "4": {
        "hitpoints": 1409,
        "damage": 212,
        "dps": 176,
        "crownTowerDmg": 85
      },
      "5": {
        "hitpoints": 1547,
        "damage": 233,
        "dps": 194,
        "crownTowerDmg": 94
      }
    }
  },
  {
    "id": "miniPekka",
    "name": "Mini P.E.K.K.A.",
    "img": "miniPekka.png",
    "hitSpeed": 1.8,
    "speed": 3,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 4,
    "troopCount": 1,
    "type": "troop",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 600,
        "damage": 325,
        "dps": 180
      },
      "2": {
        "hitpoints": 660,
        "damage": 357,
        "dps": 198
      },
      "3": {
        "hitpoints": 726,
        "damage": 393,
        "dps": 216
      },
      "4": {
        "hitpoints": 798,
        "damage": 434,
        "dps": 240
      },
      "5": {
        "hitpoints": 876,
        "damage": 474,
        "dps": 263
      },
      "6": {
        "hitpoints": 960,
        "damage": 520,
        "dps": 288
      },
      "7": {
        "hitpoints": 1056,
        "damage": 572,
        "dps": 317
      },
      "8": {
        "hitpoints": 1158,
        "damage": 627,
        "dps": 348
      },
      "9": {
        "hitpoints": 1272,
        "damage": 689,
        "dps": 382
      },
      "10": {
        "hitpoints": 1398,
        "damage": 757,
        "dps": 420
      },
      "11": {
        "hitpoints": 1536,
        "damage": 832,
        "dps": 462
      }
    }
  },
  {
    "id": "royalGiant",
    "name": "Royal Giant",
    "img": "royalGiant.png",
    "hitSpeed": 1.5,
    "speed": 1,
    "deployTime": 1,
    "lifetime": null,
    "range": 6.5,
    "targets": 3,
    "splash": false,
    "cost": 6,
    "troopCount": 1,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 1200,
        "damage": 78,
        "dps": 52
      },
      "2": {
        "hitpoints": 1320,
        "damage": 85,
        "dps": 56
      },
      "3": {
        "hitpoints": 1452,
        "damage": 94,
        "dps": 62
      },
      "4": {
        "hitpoints": 1596,
        "damage": 103,
        "dps": 68
      },
      "5": {
        "hitpoints": 1752,
        "damage": 113,
        "dps": 75
      },
      "6": {
        "hitpoints": 1920,
        "damage": 124,
        "dps": 82
      },
      "7": {
        "hitpoints": 2112,
        "damage": 132,
        "dps": 88
      },
      "8": {
        "hitpoints": 2316,
        "damage": 144,
        "dps": 96
      },
      "9": {
        "hitpoints": 2544,
        "damage": 159,
        "dps": 106
      },
      "10": {
        "hitpoints": 2796,
        "damage": 174,
        "dps": 116
      },
      "11": {
        "hitpoints": 3072,
        "damage": 192,
        "dps": 128
      },
      "12": {
        "hitpoints": 3372,
        "damage": 210,
        "dps": 140
      },
      "13": {
        "hitpoints": 3708,
        "damage": 231,
        "dps": 154
      }
    }
  },
  {
    "id": "hogRider",
    "name": "Hog Rider",
    "img": "hogRider.png",
    "hitSpeed": 1.5,
    "speed": 4,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 3,
    "splash": false,
    "cost": 4,
    "troopCount": 1,
    "type": "troop",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 800,
        "damage": 160,
        "dps": 106
      },
      "2": {
        "hitpoints": 880,
        "damage": 176,
        "dps": 117
      },
      "3": {
        "hitpoints": 968,
        "damage": 193,
        "dps": 128
      },
      "4": {
        "hitpoints": 1064,
        "damage": 212,
        "dps": 141
      },
      "5": {
        "hitpoints": 1168,
        "damage": 233,
        "dps": 155
      },
      "6": {
        "hitpoints": 1280,
        "damage": 256,
        "dps": 170
      },
      "7": {
        "hitpoints": 1408,
        "damage": 281,
        "dps": 187
      },
      "8": {
        "hitpoints": 1544,
        "damage": 308,
        "dps": 205
      },
      "9": {
        "hitpoints": 1696,
        "damage": 339,
        "dps": 226
      },
      "10": {
        "hitpoints": 1864,
        "damage": 372,
        "dps": 248
      },
      "11": {
        "hitpoints": 2048,
        "damage": 409,
        "dps": 272
      }
    }
  },
  {
    "id": "golem",
    "name": "Golem",
    "img": "golem.png",
    "hitSpeed": 2.5,
    "speed": 1,
    "deployTime": 3,
    "lifetime": null,
    "range": 1,
    "targets": 3,
    "splash": false,
    "cost": 8,
    "troopCount": 1,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": true,
    "deathSpawn": "golemite",
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 3150,
        "damage": 186,
        "dps": 74,
        "deathDamage": 186
      },
      "2": {
        "hitpoints": 3465,
        "damage": 204,
        "dps": 81,
        "deathDamage": 204
      },
      "3": {
        "hitpoints": 3811,
        "damage": 225,
        "dps": 90,
        "deathDamage": 225
      },
      "4": {
        "hitpoints": 4189,
        "damage": 246,
        "dps": 98,
        "deathDamage": 246
      },
      "5": {
        "hitpoints": 4599,
        "damage": 270,
        "dps": 108,
        "deathDamage": 271
      },
      "6": {
        "hitpoints": 5040,
        "damage": 297,
        "dps": 118,
        "deathDamage": 297
      },
      "7": {
        "hitpoints": 5544,
        "damage": 327,
        "dps": 130,
        "deathDamage": 327
      },
      "8": {
        "hitpoints": 6079,
        "damage": 358,
        "dps": 143,
        "deathDamage": 358
      }
    }
  },
  {
    "id": "golemite",
    "name": "Golemite",
    "img": null,
    "hitSpeed": 2.5,
    "speed": 1,
    "deployTime": 0,
    "lifetime": null,
    "range": 1,
    "targets": 3,
    "splash": false,
    "cost": 8,
    "troopCount": 2,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": true,
    "deathSpawn": "golemite",
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 630,
        "damage": 37,
        "dps": 15,
        "deathDamage": 37
      },
      "2": {
        "hitpoints": 693,
        "damage": 40,
        "dps": 16,
        "deathDamage": 40
      },
      "3": {
        "hitpoints": 762,
        "damage": 44,
        "dps": 18,
        "deathDamage": 44
      },
      "4": {
        "hitpoints": 837,
        "damage": 49,
        "dps": 20,
        "deathDamage": 49
      },
      "5": {
        "hitpoints": 919,
        "damage": 54,
        "dps": 22,
        "deathDamage": 54
      },
      "6": {
        "hitpoints": 1008,
        "damage": 59,
        "dps": 24,
        "deathDamage": 59
      },
      "7": {
        "hitpoints": 1108,
        "damage": 65,
        "dps": 26,
        "deathDamage": 65
      },
      "8": {
        "hitpoints": 1215,
        "damage": 71,
        "dps": 29,
        "deathDamage": 71
      }
    }
  },
  {
    "id": "guards",
    "name": "Guards",
    "img": "guards.png",
    "hitSpeed": 1.2,
    "speed": 3,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 3,
    "troopCount": 3,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": true,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 65,
        "shieldHp": 150,
        "damage": 65,
        "dps": 54
      },
      "2": {
        "hitpoints": 71,
        "shieldHp": 165,
        "damage": 71,
        "dps": 59
      },
      "3": {
        "hitpoints": 78,
        "shieldHp": 181,
        "damage": 78,
        "dps": 65
      },
      "4": {
        "hitpoints": 86,
        "shieldHp": 199,
        "damage": 86,
        "dps": 71
      },
      "5": {
        "hitpoints": 94,
        "shieldHp": 219,
        "damage": 94,
        "dps": 78
      },
      "6": {
        "hitpoints": 104,
        "shieldHp": 240,
        "damage": 104,
        "dps": 86
      },
      "7": {
        "hitpoints": 114,
        "shieldHp": 264,
        "damage": 114,
        "dps": 95
      },
      "8": {
        "hitpoints": 125,
        "shieldHp": 289,
        "damage": 125,
        "dps": 104
      }
    }
  },
  {
    "id": "wizard",
    "name": "Wizard",
    "img": "wizard.png",
    "hitSpeed": 1.7,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 5,
    "targets": 2,
    "splash": true,
    "cost": 5,
    "troopCount": 1,
    "type": "troop",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 340,
        "damage": 130,
        "dps": 77
      },
      "2": {
        "hitpoints": 374,
        "damage": 143,
        "dps": 84
      },
      "3": {
        "hitpoints": 411,
        "damage": 157,
        "dps": 92
      },
      "4": {
        "hitpoints": 452,
        "damage": 172,
        "dps": 101
      },
      "5": {
        "hitpoints": 496,
        "damage": 189,
        "dps": 111
      },
      "6": {
        "hitpoints": 544,
        "damage": 208,
        "dps": 122
      },
      "7": {
        "hitpoints": 598,
        "damage": 228,
        "dps": 134
      },
      "8": {
        "hitpoints": 656,
        "damage": 250,
        "dps": 147
      },
      "9": {
        "hitpoints": 720,
        "damage": 275,
        "dps": 161
      },
      "10": {
        "hitpoints": 792,
        "damage": 302,
        "dps": 177
      },
      "11": {
        "hitpoints": 870,
        "damage": 332,
        "dps": 195
      }
    }
  },
  {
    "id": "barbs",
    "name": "Barbarians",
    "img": "barbs.png",
    "hitSpeed": 1.5,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 5,
    "troopCount": 4,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 300,
        "damage": 75,
        "dps": 50
      },
      "2": {
        "hitpoints": 330,
        "damage": 82,
        "dps": 54
      },
      "3": {
        "hitpoints": 363,
        "damage": 90,
        "dps": 60
      },
      "4": {
        "hitpoints": 399,
        "damage": 99,
        "dps": 66
      },
      "5": {
        "hitpoints": 438,
        "damage": 109,
        "dps": 72
      },
      "6": {
        "hitpoints": 480,
        "damage": 120,
        "dps": 80
      },
      "7": {
        "hitpoints": 528,
        "damage": 132,
        "dps": 88
      },
      "8": {
        "hitpoints": 579,
        "damage": 144,
        "dps": 96
      },
      "9": {
        "hitpoints": 636,
        "damage": 159,
        "dps": 106
      },
      "10": {
        "hitpoints": 699,
        "damage": 174,
        "dps": 116
      },
      "11": {
        "hitpoints": 768,
        "damage": 192,
        "dps": 128
      },
      "12": {
        "hitpoints": 843,
        "damage": 210,
        "dps": 140
      },
      "13": {
        "hitpoints": 827,
        "damage": 231,
        "dps": 154
      }
    }
  },
  {
    "id": "minionHorde",
    "name": "Minion Horde",
    "img": "minionHorde.png",
    "hitSpeed": 1,
    "speed": 3,
    "deployTime": 1,
    "lifetime": null,
    "range": 2,
    "targets": 2,
    "splash": false,
    "cost": 5,
    "troopCount": 6,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 90,
        "damage": 40,
        "dps": 40
      },
      "2": {
        "hitpoints": 99,
        "damage": 44,
        "dps": 44
      },
      "3": {
        "hitpoints": 108,
        "damage": 48,
        "dps": 48
      },
      "4": {
        "hitpoints": 119,
        "damage": 53,
        "dps": 53
      },
      "5": {
        "hitpoints": 131,
        "damage": 58,
        "dps": 58
      },
      "6": {
        "hitpoints": 144,
        "damage": 64,
        "dps": 64
      },
      "7": {
        "hitpoints": 158,
        "damage": 70,
        "dps": 70
      },
      "8": {
        "hitpoints": 173,
        "damage": 77,
        "dps": 77
      },
      "9": {
        "hitpoints": 190,
        "damage": 84,
        "dps": 84
      },
      "10": {
        "hitpoints": 209,
        "damage": 93,
        "dps": 93
      },
      "11": {
        "hitpoints": 230,
        "damage": 102,
        "dps": 102
      },
      "12": {
        "hitpoints": 252,
        "damage": 112,
        "dps": 112
      },
      "13": {
        "hitpoints": 278,
        "damage": 123,
        "dps": 123
      }
    }
  },
  {
    "id": "prince",
    "name": "Prince",
    "img": "prince.png",
    "hitSpeed": 1.5,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 5,
    "troopCount": 1,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": {
      "damageMultiplier": 2
    },
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 1100,
        "damage": 220,
        "dps": 146
      },
      "2": {
        "hitpoints": 1210,
        "damage": 242,
        "dps": 161
      },
      "3": {
        "hitpoints": 1331,
        "damage": 266,
        "dps": 177
      },
      "4": {
        "hitpoints": 1463,
        "damage": 292,
        "dps": 194
      },
      "5": {
        "hitpoints": 1609,
        "damage": 321,
        "dps": 214
      },
      "6": {
        "hitpoints": 1760,
        "damage": 352,
        "dps": 234
      },
      "7": {
        "hitpoints": 1936,
        "damage": 387,
        "dps": 258
      },
      "8": {
        "hitpoints": 2123,
        "damage": 424,
        "dps": 282
      }
    }
  },
  {
    "id": "threeMusk",
    "name": "Three Musketeers",
    "img": "threeMusk.png",
    "hitSpeed": 1.1,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 6,
    "targets": 2,
    "splash": false,
    "cost": 9,
    "troopCount": 3,
    "type": "troop",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 340,
        "damage": 100,
        "dps": 90
      },
      "2": {
        "hitpoints": 374,
        "damage": 110,
        "dps": 100
      },
      "3": {
        "hitpoints": 411,
        "damage": 121,
        "dps": 110
      },
      "4": {
        "hitpoints": 452,
        "damage": 133,
        "dps": 120
      },
      "5": {
        "hitpoints": 496,
        "damage": 146,
        "dps": 132
      },
      "6": {
        "hitpoints": 544,
        "damage": 160,
        "dps": 145
      },
      "7": {
        "hitpoints": 598,
        "damage": 176,
        "dps": 160
      },
      "8": {
        "hitpoints": 656,
        "damage": 193,
        "dps": 175
      },
      "9": {
        "hitpoints": 720,
        "damage": 212,
        "dps": 192
      },
      "10": {
        "hitpoints": 792,
        "damage": 233,
        "dps": 211
      },
      "11": {
        "hitpoints": 870,
        "damage": 256,
        "dps": 232
      }
    }
  },
  {
    "id": "giant",
    "name": "Giant",
    "img": "giant.png",
    "hitSpeed": 1.5,
    "speed": 1,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 3,
    "splash": false,
    "cost": 5,
    "troopCount": 3,
    "type": "troop",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 2000,
        "damage": 126,
        "dps": 84
      },
      "2": {
        "hitpoints": 2200,
        "damage": 138,
        "dps": 92
      },
      "3": {
        "hitpoints": 2420,
        "damage": 152,
        "dps": 101
      },
      "4": {
        "hitpoints": 2660,
        "damage": 167,
        "dps": 111
      },
      "5": {
        "hitpoints": 2920,
        "damage": 183,
        "dps": 122
      },
      "6": {
        "hitpoints": 3200,
        "damage": 201,
        "dps": 134
      },
      "7": {
        "hitpoints": 3520,
        "damage": 221,
        "dps": 147
      },
      "8": {
        "hitpoints": 3860,
        "damage": 243,
        "dps": 162
      },
      "9": {
        "hitpoints": 4240,
        "damage": 267,
        "dps": 178
      },
      "10": {
        "hitpoints": 4660,
        "damage": 293,
        "dps": 195
      },
      "11": {
        "hitpoints": 5120,
        "damage": 322,
        "dps": 214
      }
    }
  },
  {
    "id": "witch",
    "name": "Witch",
    "img": "witch.png",
    "hitSpeed": 0.7,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 5,
    "targets": 2,
    "splash": true,
    "cost": 5,
    "troopCount": 1,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": 3,
    "spawnUnit": "skellies",
    "spawnSpeed": 7.5,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 500,
        "damage": 42,
        "dps": 60,
        "troopLvl": 6
      },
      "2": {
        "hitpoints": 550,
        "damage": 46,
        "dps": 65,
        "troopLvl": 7
      },
      "3": {
        "hitpoints": 605,
        "damage": 50,
        "dps": 71,
        "troopLvl": 8
      },
      "4": {
        "hitpoints": 665,
        "damage": 55,
        "dps": 78,
        "troopLvl": 9
      },
      "5": {
        "hitpoints": 730,
        "damage": 61,
        "dps": 87,
        "troopLvl": 10
      },
      "6": {
        "hitpoints": 800,
        "damage": 67,
        "dps": 95,
        "troopLvl": 11
      },
      "7": {
        "hitpoints": 880,
        "damage": 73,
        "dps": 104,
        "troopLvl": 12
      },
      "8": {
        "hitpoints": 965,
        "damage": 81,
        "dps": 115,
        "troopLvl": 13
      }
    }
  },
  {
    "id": "fireSpirits",
    "name": "Fire Spirits",
    "img": "fireSpirits.png",
    "hitSpeed": 1,
    "speed": 4,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 2,
    "splash": true,
    "cost": 2,
    "troopCount": 3,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 43,
        "damage": 80,
        "dps": 80
      },
      "2": {
        "hitpoints": 47,
        "damage": 88,
        "dps": 88
      },
      "3": {
        "hitpoints": 52,
        "damage": 96,
        "dps": 96
      },
      "4": {
        "hitpoints": 57,
        "damage": 106,
        "dps": 106
      },
      "5": {
        "hitpoints": 62,
        "damage": 116,
        "dps": 116
      },
      "6": {
        "hitpoints": 68,
        "damage": 128,
        "dps": 128
      },
      "7": {
        "hitpoints": 75,
        "damage": 140,
        "dps": 140
      },
      "8": {
        "hitpoints": 82,
        "damage": 154,
        "dps": 154
      },
      "9": {
        "hitpoints": 91,
        "damage": 169,
        "dps": 169
      },
      "10": {
        "hitpoints": 100,
        "damage": 186,
        "dps": 186
      },
      "11": {
        "hitpoints": 110,
        "damage": 204,
        "dps": 204
      },
      "12": {
        "hitpoints": 120,
        "damage": 224,
        "dps": 224
      },
      "13": {
        "hitpoints": 132,
        "damage": 247,
        "dps": 247
      }
    }
  },
  {
    "id": "balloon",
    "name": "Balloon",
    "img": "balloon.png",
    "hitSpeed": 3,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 3,
    "splash": true,
    "cost": 5,
    "troopCount": 1,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": "skeleton",
    "spawnSpeed": null,
    "deathDamage": true,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 1050,
        "damage": 600,
        "dps": 200,
        "deathDamage": 100
      },
      "2": {
        "hitpoints": 1155,
        "damage": 660,
        "dps": 220,
        "deathDamage": 110
      },
      "3": {
        "hitpoints": 1270,
        "damage": 726,
        "dps": 242,
        "deathDamage": 121
      },
      "4": {
        "hitpoints": 1396,
        "damage": 798,
        "dps": 266,
        "deathDamage": 133
      },
      "5": {
        "hitpoints": 1533,
        "damage": 876,
        "dps": 292,
        "deathDamage": 146
      },
      "6": {
        "hitpoints": 1680,
        "damage": 960,
        "dps": 320,
        "deathDamage": 160
      },
      "7": {
        "hitpoints": 1848,
        "damage": 1056,
        "dps": 352,
        "deathDamage": 176
      },
      "8": {
        "hitpoints": 2026,
        "damage": 1158,
        "dps": 386,
        "deathDamage": 193
      }
    }
  },
  {
    "id": "giantSkellie",
    "name": "Giant Skeleton",
    "img": "giantSkellie.png",
    "hitSpeed": 1.5,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 6,
    "troopCount": 1,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": true,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 2000,
        "damage": 100,
        "dps": 66,
        "deathDamage": 720
      },
      "2": {
        "hitpoints": 2200,
        "damage": 110,
        "dps": 73,
        "deathDamage": 792
      },
      "3": {
        "hitpoints": 2420,
        "damage": 121,
        "dps": 80,
        "deathDamage": 871
      },
      "4": {
        "hitpoints": 2660,
        "damage": 133,
        "dps": 88,
        "deathDamage": 957
      },
      "5": {
        "hitpoints": 2920,
        "damage": 146,
        "dps": 97,
        "deathDamage": 1051
      },
      "6": {
        "hitpoints": 3200,
        "damage": 160,
        "dps": 106,
        "deathDamage": 1152
      },
      "7": {
        "hitpoints": 2520,
        "damage": 176,
        "dps": 117,
        "deathDamage": 1267
      },
      "8": {
        "hitpoints": 3860,
        "damage": 193,
        "dps": 128,
        "deathDamage": 1389
      }
    }
  },
  {
    "id": "knight",
    "name": "Knight",
    "img": "knight.png",
    "hitSpeed": 1.1,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 3,
    "troopCount": 1,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 660,
        "damage": 75,
        "dps": 68
      },
      "2": {
        "hitpoints": 726,
        "damage": 82,
        "dps": 74
      },
      "3": {
        "hitpoints": 798,
        "damage": 90,
        "dps": 81
      },
      "4": {
        "hitpoints": 877,
        "damage": 99,
        "dps": 90
      },
      "5": {
        "hitpoints": 963,
        "damage": 109,
        "dps": 99
      },
      "6": {
        "hitpoints": 1056,
        "damage": 120,
        "dps": 109
      },
      "7": {
        "hitpoints": 1161,
        "damage": 132,
        "dps": 120
      },
      "8": {
        "hitpoints": 1273,
        "damage": 144,
        "dps": 130
      },
      "9": {
        "hitpoints": 1399,
        "damage": 159,
        "dps": 144
      },
      "10": {
        "hitpoints": 1537,
        "damage": 174,
        "dps": 158
      },
      "11": {
        "hitpoints": 1689,
        "damage": 192,
        "dps": 174
      },
      "12": {
        "hitpoints": 1854,
        "damage": 210,
        "dps": 190
      },
      "13": {
        "hitpoints": 2039,
        "damage": 231,
        "dps": 210
      }
    }
  },
  {
    "id": "musketeer",
    "name": "Musketeer",
    "img": "musketeer.png",
    "hitSpeed": 1.1,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 6,
    "targets": 2,
    "splash": false,
    "cost": 4,
    "troopCount": 1,
    "type": "troop",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 340,
        "damage": 100,
        "dps": 90
      },
      "2": {
        "hitpoints": 374,
        "damage": 110,
        "dps": 100
      },
      "3": {
        "hitpoints": 411,
        "damage": 121,
        "dps": 110
      },
      "4": {
        "hitpoints": 452,
        "damage": 133,
        "dps": 120
      },
      "5": {
        "hitpoints": 496,
        "damage": 146,
        "dps": 132
      },
      "6": {
        "hitpoints": 544,
        "damage": 160,
        "dps": 145
      },
      "7": {
        "hitpoints": 598,
        "damage": 176,
        "dps": 160
      },
      "8": {
        "hitpoints": 656,
        "damage": 193,
        "dps": 175
      },
      "9": {
        "hitpoints": 720,
        "damage": 212,
        "dps": 192
      },
      "10": {
        "hitpoints": 792,
        "damage": 233,
        "dps": 211
      },
      "11": {
        "hitpoints": 870,
        "damage": 256,
        "dps": 232
      }
    }
  },
  {
    "id": "valkyrie",
    "name": "Valkyrie",
    "img": "valkyrie.png",
    "hitSpeed": 1.5,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": true,
    "cost": 4,
    "troopCount": 1,
    "type": "troop",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 880,
        "damage": 120,
        "dps": 80
      },
      "2": {
        "hitpoints": 968,
        "damage": 132,
        "dps": 88
      },
      "3": {
        "hitpoints": 1064,
        "damage": 145,
        "dps": 96
      },
      "4": {
        "hitpoints": 1170,
        "damage": 159,
        "dps": 106
      },
      "5": {
        "hitpoints": 1284,
        "damage": 175,
        "dps": 116
      },
      "6": {
        "hitpoints": 1408,
        "damage": 192,
        "dps": 128
      },
      "7": {
        "hitpoints": 1548,
        "damage": 211,
        "dps": 140
      },
      "8": {
        "hitpoints": 1698,
        "damage": 231,
        "dps": 154
      },
      "9": {
        "hitpoints": 1865,
        "damage": 254,
        "dps": 169
      },
      "10": {
        "hitpoints": 2050,
        "damage": 279,
        "dps": 186
      },
      "11": {
        "hitpoints": 2252,
        "damage": 307,
        "dps": 204
      }
    }
  },
  {
    "id": "skellieArmy",
    "name": "Skeleton Army",
    "img": "skellieArmy.png",
    "hitSpeed": 1,
    "speed": 3,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 4,
    "troopCount": 20,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": true,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 32,
        "damage": 32,
        "dps": 32
      },
      "2": {
        "hitpoints": 35,
        "damage": 35,
        "dps": 35
      },
      "3": {
        "hitpoints": 38,
        "damage": 38,
        "dps": 38
      },
      "4": {
        "hitpoints": 42,
        "damage": 42,
        "dps": 42
      },
      "5": {
        "hitpoints": 46,
        "damage": 46,
        "dps": 46
      },
      "6": {
        "hitpoints": 51,
        "damage": 51,
        "dps": 51
      },
      "7": {
        "hitpoints": 56,
        "damage": 56,
        "dps": 56
      },
      "8": {
        "hitpoints": 61,
        "damage": 61,
        "dps": 61
      }
    }
  },
  {
    "id": "skellies",
    "name": "Skeletons",
    "img": "skellies.png",
    "hitSpeed": 1,
    "speed": 3,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 1,
    "troopCount": 4,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 32,
        "damage": 32,
        "dps": 32
      },
      "2": {
        "hitpoints": 35,
        "damage": 35,
        "dps": 35
      },
      "3": {
        "hitpoints": 38,
        "damage": 38,
        "dps": 38
      },
      "4": {
        "hitpoints": 42,
        "damage": 42,
        "dps": 42
      },
      "5": {
        "hitpoints": 46,
        "damage": 46,
        "dps": 46
      },
      "6": {
        "hitpoints": 51,
        "damage": 51,
        "dps": 51
      },
      "7": {
        "hitpoints": 56,
        "damage": 56,
        "dps": 56
      },
      "8": {
        "hitpoints": 61,
        "damage": 61,
        "dps": 61
      },
      "9": {
        "hitpoints": 67,
        "damage": 67,
        "dps": 67
      },
      "10": {
        "hitpoints": 74,
        "damage": 74,
        "dps": 74
      },
      "11": {
        "hitpoints": 81,
        "damage": 81,
        "dps": 81
      },
      "12": {
        "hitpoints": 89,
        "damage": 89,
        "dps": 89
      },
      "13": {
        "hitpoints": 98,
        "damage": 98,
        "dps": 98
      }
    }
  },
  {
    "id": "archers",
    "name": "Archers",
    "img": "archers.png",
    "hitSpeed": 1.2,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 5,
    "targets": 2,
    "splash": false,
    "cost": 3,
    "troopCount": 2,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 125,
        "damage": 40,
        "dps": 33
      },
      "2": {
        "hitpoints": 137,
        "damage": 44,
        "dps": 36
      },
      "3": {
        "hitpoints": 151,
        "damage": 48,
        "dps": 40
      },
      "4": {
        "hitpoints": 166,
        "damage": 53,
        "dps": 44
      },
      "5": {
        "hitpoints": 182,
        "damage": 58,
        "dps": 48
      },
      "6": {
        "hitpoints": 200,
        "damage": 64,
        "dps": 53
      },
      "7": {
        "hitpoints": 220,
        "damage": 70,
        "dps": 56
      },
      "8": {
        "hitpoints": 241,
        "damage": 77,
        "dps": 64
      },
      "9": {
        "hitpoints": 265,
        "damage": 84,
        "dps": 70
      },
      "10": {
        "hitpoints": 291,
        "damage": 93,
        "dps": 77
      },
      "11": {
        "hitpoints": 320,
        "damage": 102,
        "dps": 85
      },
      "12": {
        "hitpoints": 351,
        "damage": 112,
        "dps": 93
      },
      "13": {
        "hitpoints": 386,
        "damage": 123,
        "dps": 102
      }
    }
  },
  {
    "id": "goblins",
    "name": "Goblins",
    "img": "goblins.png",
    "hitSpeed": 1.1,
    "speed": 4,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": false,
    "cost": 2,
    "troopCount": 3,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 80,
        "damage": 50,
        "dps": 45
      },
      "2": {
        "hitpoints": 88,
        "damage": 55,
        "dps": 50
      },
      "3": {
        "hitpoints": 96,
        "damage": 60,
        "dps": 54
      },
      "4": {
        "hitpoints": 106,
        "damage": 66,
        "dps": 60
      },
      "5": {
        "hitpoints": 116,
        "damage": 73,
        "dps": 66
      },
      "6": {
        "hitpoints": 128,
        "damage": 80,
        "dps": 72
      },
      "7": {
        "hitpoints": 140,
        "damage": 88,
        "dps": 80
      },
      "8": {
        "hitpoints": 154,
        "damage": 96,
        "dps": 87
      },
      "9": {
        "hitpoints": 169,
        "damage": 106,
        "dps": 96
      },
      "10": {
        "hitpoints": 186,
        "damage": 116,
        "dps": 105
      },
      "11": {
        "hitpoints": 204,
        "damage": 128,
        "dps": 116
      },
      "12": {
        "hitpoints": 224,
        "damage": 140,
        "dps": 127
      },
      "13": {
        "hitpoints": 247,
        "damage": 154,
        "dps": 140
      }
    }
  },
  {
    "id": "spearGobs",
    "name": "Spear Goblins",
    "img": "spearGobs.png",
    "hitSpeed": 1.3,
    "speed": 4,
    "deployTime": 1,
    "lifetime": null,
    "range": 5,
    "targets": 2,
    "splash": false,
    "cost": 2,
    "troopCount": 3,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 52,
        "damage": 24,
        "dps": 18
      },
      "2": {
        "hitpoints": 57,
        "damage": 26,
        "dps": 20
      },
      "3": {
        "hitpoints": 62,
        "damage": 29,
        "dps": 22
      },
      "4": {
        "hitpoints": 69,
        "damage": 31,
        "dps": 23
      },
      "5": {
        "hitpoints": 75,
        "damage": 35,
        "dps": 26
      },
      "6": {
        "hitpoints": 83,
        "damage": 38,
        "dps": 29
      },
      "7": {
        "hitpoints": 91,
        "damage": 42,
        "dps": 32
      },
      "8": {
        "hitpoints": 100,
        "damage": 46,
        "dps": 35
      },
      "9": {
        "hitpoints": 110,
        "damage": 50,
        "dps": 38
      },
      "10": {
        "hitpoints": 121,
        "damage": 55,
        "dps": 42
      },
      "11": {
        "hitpoints": 133,
        "damage": 61,
        "dps": 46
      },
      "12": {
        "hitpoints": 146,
        "damage": 67,
        "dps": 51
      },
      "13": {
        "hitpoints": 160,
        "damage": 74,
        "dps": 56
      }
    }
  },
  {
    "id": "bomber",
    "name": "Bomber",
    "img": "bomber.png",
    "hitSpeed": 1.9,
    "speed": 2,
    "deployTime": 1,
    "lifetime": null,
    "range": 4.5,
    "targets": 1,
    "splash": true,
    "cost": 3,
    "troopCount": 1,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 150,
        "damage": 110,
        "dps": 57
      },
      "2": {
        "hitpoints": 165,
        "damage": 121,
        "dps": 63
      },
      "3": {
        "hitpoints": 181,
        "damage": 133,
        "dps": 70
      },
      "4": {
        "hitpoints": 199,
        "damage": 146,
        "dps": 76
      },
      "5": {
        "hitpoints": 219,
        "damage": 160,
        "dps": 84
      },
      "6": {
        "hitpoints": 240,
        "damage": 176,
        "dps": 92
      },
      "7": {
        "hitpoints": 264,
        "damage": 193,
        "dps": 101
      },
      "8": {
        "hitpoints": 289,
        "damage": 212,
        "dps": 111
      },
      "9": {
        "hitpoints": 318,
        "damage": 233,
        "dps": 122
      },
      "10": {
        "hitpoints": 349,
        "damage": 256,
        "dps": 128
      },
      "11": {
        "hitpoints": 384,
        "damage": 281,
        "dps": 147
      },
      "12": {
        "hitpoints": 421,
        "damage": 309,
        "dps": 162
      },
      "13": {
        "hitpoints": 463,
        "damage": 339,
        "dps": 178
      }
    }
  },
  {
    "id": "minions",
    "name": "Minions",
    "img": "minions.png",
    "hitSpeed": 1,
    "speed": 3,
    "deployTime": 1,
    "lifetime": null,
    "range": 2,
    "targets": 2,
    "splash": false,
    "cost": 3,
    "troopCount": 3,
    "type": "troop",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 90,
        "damage": 40,
        "dps": 40
      },
      "2": {
        "hitpoints": 99,
        "damage": 44,
        "dps": 44
      },
      "3": {
        "hitpoints": 108,
        "damage": 48,
        "dps": 48
      },
      "4": {
        "hitpoints": 119,
        "damage": 53,
        "dps": 53
      },
      "5": {
        "hitpoints": 131,
        "damage": 58,
        "dps": 58
      },
      "6": {
        "hitpoints": 144,
        "damage": 64,
        "dps": 64
      },
      "7": {
        "hitpoints": 158,
        "damage": 70,
        "dps": 70
      },
      "8": {
        "hitpoints": 173,
        "damage": 77,
        "dps": 77
      },
      "9": {
        "hitpoints": 190,
        "damage": 84,
        "dps": 84
      },
      "10": {
        "hitpoints": 209,
        "damage": 93,
        "dps": 93
      },
      "11": {
        "hitpoints": 230,
        "damage": 102,
        "dps": 102
      },
      "12": {
        "hitpoints": 252,
        "damage": 112,
        "dps": 112
      },
      "13": {
        "hitpoints": 278,
        "damage": 123,
        "dps": 123
      }
    }
  },
  {
    "id": "mirror",
    "name": "Mirror",
    "img": "mirror.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": null,
    "range": null,
    "targets": null,
    "splash": null,
    "cost": null,
    "troopCount": null,
    "type": "spell",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "1": 6,
        "2": 4,
        "3": 1,
        "4": 1
      },
      "2": {
        "1": 7,
        "2": 6,
        "3": 2,
        "4": 1
      },
      "3": {
        "1": 8,
        "2": 6,
        "3": 3,
        "4": 1
      },
      "4": {
        "1": 9,
        "2": 7,
        "3": 4,
        "4": 1
      },
      "5": {
        "1": 10,
        "2": 8,
        "3": 5,
        "4": 2
      },
      "6": {
        "1": 11,
        "2": 9,
        "3": 6,
        "4": 2
      },
      "7": {
        "1": 12,
        "2": 10,
        "3": 7,
        "4": 3
      },
      "8": {
        "1": 13,
        "2": 11,
        "3": 8,
        "4": 5
      }
    }
  },
  {
    "id": "zap",
    "name": "Zap",
    "img": "zap.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": null,
    "range": null,
    "targets": 2,
    "splash": true,
    "cost": 2,
    "troopCount": 0,
    "type": "spell",
    "rarity": 1,
    "radius": 2.5,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": true,
    "level": {
      "1": {
        "damage": 80,
        "dps": 80,
        "crownTowerDmg": 32
      },
      "2": {
        "damage": 88,
        "dps": 88,
        "crownTowerDmg": 36
      },
      "3": {
        "damage": 96,
        "dps": 96,
        "crownTowerDmg": 39
      },
      "4": {
        "damage": 106,
        "dps": 106,
        "crownTowerDmg": 43
      },
      "5": {
        "damage": 116,
        "dps": 116,
        "crownTowerDmg": 47
      },
      "6": {
        "damage": 128,
        "dps": 128,
        "crownTowerDmg": 52
      },
      "7": {
        "damage": 140,
        "dps": 140,
        "crownTowerDmg": 56
      },
      "8": {
        "damage": 154,
        "dps": 154,
        "crownTowerDmg": 62
      },
      "9": {
        "damage": 169,
        "dps": 169,
        "crownTowerDmg": 68
      },
      "10": {
        "damage": 186,
        "dps": 186,
        "crownTowerDmg": 75
      },
      "11": {
        "damage": 204,
        "dps": 204,
        "crownTowerDmg": 82
      },
      "12": {
        "damage": 224,
        "dps": 224,
        "crownTowerDmg": 90
      },
      "13": {
        "damage": 247,
        "dps": 247,
        "crownTowerDmg": 99
      }
    }
  },
  {
    "id": "poison",
    "name": "Poison",
    "img": "poison.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": null,
    "range": null,
    "targets": 2,
    "splash": true,
    "cost": 4,
    "troopCount": 0,
    "type": "spell",
    "rarity": 1,
    "radius": 3.5,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": true,
    "special": {
        "slowUnits": 0.5
      },
    "crownTowerReduction": true,
    "level": {
      "1": {
        "damage": 42,
        "dps": 42,
        "crownTowerDmg": 17,
        "duration": 10
      },
      "2": {
        "damage": 46,
        "dps": 46,
        "crownTowerDmg": 19,
        "duration": 10
      },
      "3": {
        "damage": 50,
        "dps": 50,
        "crownTowerDmg": 20,
        "duration": 10
      },
      "4": {
        "damage": 55,
        "dps": 55,
        "crownTowerDmg": 22,
        "duration": 10
      },
      "5": {
        "damage": 61,
        "dps": 61,
        "crownTowerDmg": 25,
        "duration": 10
      },
      "6": {
        "damage": 67,
        "dps": 67,
        "crownTowerDmg": 27,
        "duration": 10
      },
      "7": {
        "damage": 73,
        "dps": 73,
        "crownTowerDmg": 30,
        "duration": 10
      },
      "8": {
        "damage": 81,
        "dps": 81,
        "crownTowerDmg": 33,
        "duration": 10
      }
    }
  },
  {
    "id": "fireball",
    "name": "Fireball",
    "img": "fireball.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": null,
    "range": null,
    "targets": 2,
    "splash": true,
    "cost": 4,
    "troopCount": 0,
    "type": "spell",
    "rarity": 2,
    "radius": 2.5,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": true,
    "level": {
      "1": {
        "damage": 325,
        "dps": 325,
        "crownTowerDmg": 130
      },
      "2": {
        "damage": 357,
        "dps": 357,
        "crownTowerDmg": 143
      },
      "3": {
        "damage": 396,
        "dps": 396,
        "crownTowerDmg": 158
      },
      "4": {
        "damage": 432,
        "dps": 432,
        "crownTowerDmg": 173
      },
      "5": {
        "damage": 476,
        "dps": 476,
        "crownTowerDmg": 190
      },
      "6": {
        "damage": 520,
        "dps": 520,
        "crownTowerDmg": 208
      },
      "7": {
        "damage": 572,
        "dps": 572,
        "crownTowerDmg": 229
      },
      "8": {
        "damage": 627,
        "dps": 627,
        "crownTowerDmg": 251
      },
      "9": {
        "damage": 689,
        "dps": 689,
        "crownTowerDmg": 276
      },
      "10": {
        "damage": 757,
        "dps": 757,
        "crownTowerDmg": 303
      },
      "11": {
        "damage": 832,
        "dps": 832,
        "crownTowerDmg": 333
      }
    }
  },
  {
    "id": "rocket",
    "name": "Rocket",
    "img": "rocket.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": null,
    "range": null,
    "targets": 2,
    "splash": true,
    "cost": 6,
    "troopCount": 0,
    "type": "spell",
    "rarity": 1,
    "radius": 2,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": true,
    "level": {
      "1": {
        "damage": 700,
        "dps": 700,
        "crownTowerDmg": 280
      },
      "2": {
        "damage": 770,
        "dps": 770,
        "crownTowerDmg": 308
      },
      "3": {
        "damage": 847,
        "dps": 847,
        "crownTowerDmg": 339
      },
      "4": {
        "damage": 931,
        "dps": 931,
        "crownTowerDmg": 373
      },
      "5": {
        "damage": 1022,
        "dps": 1022,
        "crownTowerDmg": 409
      },
      "6": {
        "damage": 1120,
        "dps": 1120,
        "crownTowerDmg": 448
      },
      "7": {
        "damage": 1232,
        "dps": 1232,
        "crownTowerDmg": 493
      },
      "8": {
        "damage": 1351,
        "dps": 1351,
        "crownTowerDmg": 541
      },
      "9": {
        "damage": 1484,
        "dps": 1484,
        "crownTowerDmg": 594
      },
      "10": {
        "damage": 1631,
        "dps": 1631,
        "crownTowerDmg": 653
      },
      "11": {
        "damage": 1792,
        "dps": 1792,
        "crownTowerDmg": 717
      }
    }
  },
  {
    "id": "rage",
    "name": "Rage",
    "img": "rage.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": null,
    "range": null,
    "targets": 1,
    "splash": true,
    "cost": 4,
    "troopCount": 0,
    "type": "spell",
    "rarity": 3,
    "radius": 1.5,
    "spawnAmt": 3,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": {
        "attackBoost": 1.4
      },
    "crownTowerReduction": true,
    "level": {
      "1": {
        "damage": 0,
        "dps": 0,
        "duration": 8
      },
      "2": {
        "damage": 0,
        "dps": 0,
        "duration": 8.5
      },
      "3": {
        "damage": 0,
        "dps": 0,
        "duration": 9
      },
      "4": {
        "damage": 0,
        "dps": 0,
        "duration": 9.5
      },
      "5": {
        "damage": 0,
        "dps": 0,
        "duration": 10
      },
      "6": {
        "damage": 0,
        "dps": 0,
        "duration": 10.5
      },
      "7": {
        "damage": 0,
        "dps": 0,
        "duration": 11
      },
      "8": {
        "damage": 0,
        "dps": 0,
        "duration": 11.5
      }
    }
  },
  {
    "id": "gobBarrel",
    "name": "Goblin Barrel",
    "img": "gobBarrel.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": 1,
    "lifetime": null,
    "range": 1,
    "targets": 1,
    "splash": true,
    "cost": 2,
    "troopCount": 0,
    "type": "troop",
    "rarity": 3,
    "radius": null,
    "spawnAmt": 3,
    "spawnUnit": "goblins",
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": true,
    "level": {
      "1": {
        "damage": 50,
        "dps": 50,
        "crownTowerDmg": 20,
        "troopLvl": 6
      },
      "2": {
        "damage": 55,
        "dps": 55,
        "crownTowerDmg": 22,
        "troopLvl": 7
      },
      "3": {
        "damage": 60,
        "dps": 60,
        "crownTowerDmg": 24,
        "troopLvl": 8
      },
      "4": {
        "damage": 66,
        "dps": 66,
        "crownTowerDmg": 27,
        "troopLvl": 9
      },
      "5": {
        "damage": 73,
        "dps": 73,
        "crownTowerDmg": 30,
        "troopLvl": 10
      },
      "6": {
        "damage": 80,
        "dps": 80,
        "crownTowerDmg": 32,
        "troopLvl": 11
      },
      "7": {
        "damage": 88,
        "dps": 88,
        "crownTowerDmg": 36,
        "troopLvl": 12
      },
      "8": {
        "damage": 96,
        "dps": 96,
        "crownTowerDmg": 39,
        "troopLvl": 13
      }
    }
  },
  {
    "id": "freeze",
    "name": "Freeze",
    "img": "freeze.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": null,
    "range": null,
    "targets": 2,
    "splash": true,
    "cost": 4,
    "troopCount": 0,
    "type": "spell",
    "rarity": 3,
    "radius": 3,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": true,
    "special": {
        "slowUnits": 0
      },
    "crownTowerReduction": true,
    "level": {
      "1": {
        "damage": 0,
        "dps": 0,
        "duration": 4
      },
      "2": {
        "damage": 0,
        "dps": 0,
        "duration": 4.3
      },
      "3": {
        "damage": 0,
        "dps": 0,
        "duration": 4.6
      },
      "4": {
        "damage": 0,
        "dps": 0,
        "duration": 4.9
      },
      "5": {
        "damage": 0,
        "dps": 0,
        "duration": 5.2
      },
      "6": {
        "damage": 0,
        "dps": 0,
        "duration": 5.5
      },
      "7": {
        "damage": 0,
        "dps": 0,
        "duration": 5.8
      },
      "8": {
        "damage": 0,
        "dps": 0,
        "duration": 6.1
      }
    }
  },
  {
    "id": "arrows",
    "name": "Arrows",
    "img": "arrows.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": null,
    "range": null,
    "targets": 2,
    "splash": true,
    "cost": 3,
    "troopCount": 0,
    "type": "spell",
    "rarity": 1,
    "radius": 4,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": true,
    "level": {
      "1": {
        "damage": 115,
        "dps": 115,
        "crownTowerDmg": 46
      },
      "2": {
        "damage": 126,
        "dps": 126,
        "crownTowerDmg": 51
      },
      "3": {
        "damage": 139,
        "dps": 139,
        "crownTowerDmg": 56
      },
      "4": {
        "damage": 152,
        "dps": 152,
        "crownTowerDmg": 61
      },
      "5": {
        "damage": 168,
        "dps": 168,
        "crownTowerDmg": 67
      },
      "6": {
        "damage": 184,
        "dps": 184,
        "crownTowerDmg": 74
      },
      "7": {
        "damage": 202,
        "dps": 202,
        "crownTowerDmg": 81
      },
      "8": {
        "damage": 221,
        "dps": 221,
        "crownTowerDmg": 89
      },
      "9": {
        "damage": 243,
        "dps": 243,
        "crownTowerDmg": 98
      },
      "10": {
        "damage": 268,
        "dps": 268,
        "crownTowerDmg": 107
      },
      "11": {
        "damage": 295,
        "dps": 295,
        "crownTowerDmg": 118
      },
      "12": {
        "damage": 323,
        "dps": 323,
        "crownTowerDmg": 130
      },
      "13": {
        "damage": 355,
        "dps": 355,
        "crownTowerDmg": 142
      }
    }
  },
  {
    "id": "lightning",
    "name": "Lightning",
    "img": "lightning.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": null,
    "range": null,
    "targets": 2,
    "splash": true,
    "cost": 6,
    "troopCount": 0,
    "type": "spell",
    "rarity": 3,
    "radius": 3.5,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": true,
    "special": {
      "targets": 3
      },
    "crownTowerReduction": true,
    "level": {
      "1": {
        "damage": 650,
        "dps": 1300,
        "crownTowerDmg": 260,
        "duration": 1.5
      },
      "2": {
        "damage": 715,
        "dps": 1430,
        "crownTowerDmg": 286,
        "duration": 1.5
      },
      "3": {
        "damage": 786,
        "dps": 1572,
        "crownTowerDmg": 315,
        "duration": 1.5
      },
      "4": {
        "damage": 864,
        "dps": 1728,
        "crownTowerDmg": 346,
        "duration": 1.5
      },
      "5": {
        "damage": 949,
        "dps": 1898,
        "crownTowerDmg": 380,
        "duration": 1.5
      },
      "6": {
        "damage": 1040,
        "dps": 2080,
        "crownTowerDmg": 416
      },
      "7": {
        "damage": 1144,
        "dps": 2288,
        "crownTowerDmg": 458,
        "duration": 1.5
      },
      "8": {
        "damage": 1254,
        "dps": 2508,
        "crownTowerDmg": 502,
        "duration": 1.5
      }
    }
  },
  {
    "id": "elixirCollector",
    "name": "Elixir Collector",
    "img": "elixirCollector.png",
    "hitSpeed": null,
    "speed": null,
    "deployTime": null,
    "lifetime": 70,
    "range": null,
    "targets": null,
    "splash": false,
    "cost": 5,
    "troopCount": 0,
    "type": "building",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": {
      "productionSpeed": 9.8
      },
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 580,
        "damage": 0,
        "dps": 0
      },
      "2": {
        "hitpoints": 638,
        "damage": 0,
        "dps": 0
      },
      "3": {
        "hitpoints": 701,
        "damage": 0,
        "dps": 0
      },
      "4": {
        "hitpoints": 771,
        "damage": 0,
        "dps": 0
      },
      "5": {
        "hitpoints": 846,
        "damage": 0,
        "dps": 0
      },
      "6": {
        "hitpoints": 928,
        "damage": 0,
        "dps": 0
      },
      "7": {
        "hitpoints": 1020,
        "damage": 0,
        "dps": 0
      },
      "8": {
        "hitpoints": 1119,
        "damage": 0,
        "dps": 0
      },
      "9": {
        "hitpoints": 1229,
        "damage": 0,
        "dps": 0
      },
      "10": {
        "hitpoints": 1351,
        "damage": 0,
        "dps": 0
      },
      "11": {
        "hitpoints": 1484,
        "damage": 0,
        "dps": 0
      }
    }
  },
  {
    "id": "xbow",
    "name": "X-Bow",
    "img": "xbow.png",
    "hitSpeed": 0.3,
    "speed": null,
    "deployTime": 5,
    "lifetime": 40,
    "range": 11.5,
    "targets": 1,
    "splash": false,
    "cost": 6,
    "troopCount": 0,
    "type": "building",
    "rarity": 3,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 850,
        "damage": 20,
        "dps": 66
      },
      "2": {
        "hitpoints": 935,
        "damage": 22,
        "dps": 73
      },
      "3": {
        "hitpoints": 1028,
        "damage": 24,
        "dps": 80
      },
      "4": {
        "hitpoints": 1130,
        "damage": 26,
        "dps": 86
      },
      "5": {
        "hitpoints": 1241,
        "damage": 29,
        "dps": 96
      },
      "6": {
        "hitpoints": 1360,
        "damage": 32,
        "dps": 106
      },
      "7": {
        "hitpoints": 1496,
        "damage": 35,
        "dps": 116
      },
      "8": {
        "hitpoints": 1640,
        "damage": 38,
        "dps": 126
      }
    }
  },
  {
    "id": "inferno",
    "name": "Inferno Tower",
    "img": "inferno.png",
    "hitSpeed": 0.4,
    "speed": null,
    "deployTime": 1,
    "lifetime": 40,
    "range": 6,
    "targets": 2,
    "splash": false,
    "cost": 5,
    "troopCount": 0,
    "type": "building",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": {
      "damageMultiplier": 20
      },
    "crownTowerReduction": true,
    "level": {
      "1": {
        "hitpoints": 800,
        "damage": 20,
        "dps": 50,
        "crownTowerDmg": 0
      },
      "2": {
        "hitpoints": 880,
        "damage": 22,
        "dps": 55,
        "crownTowerDmg": 0
      },
      "3": {
        "hitpoints": 968,
        "damage": 24,
        "dps": 60,
        "crownTowerDmg": 0
      },
      "4": {
        "hitpoints": 1064,
        "damage": 26,
        "dps": 65,
        "crownTowerDmg": 0
      },
      "5": {
        "hitpoints": 1168,
        "damage": 29,
        "dps": 72,
        "crownTowerDmg": 0
      },
      "6": {
        "hitpoints": 1280,
        "damage": 32,
        "dps": 80,
        "crownTowerDmg": 0
      },
      "7": {
        "hitpoints": 1408,
        "damage": 35,
        "dps": 87,
        "crownTowerDmg": 0
      },
      "8": {
        "hitpoints": 1544,
        "damage": 38,
        "dps": 95,
        "crownTowerDmg": 0
      },
      "9": {
        "hitpoints": 1696,
        "damage": 42,
        "dps": 105,
        "crownTowerDmg": 0
      },
      "10": {
        "hitpoints": 1864,
        "damage": 46,
        "dps": 115,
        "crownTowerDmg": 0
      },
      "11": {
        "hitpoints": 2048,
        "damage": 51,
        "dps": 127,
        "crownTowerDmg": 0
      }
    }
  },
  {
    "id": "tesla",
    "name": "Tesla",
    "img": "tesla.png",
    "hitSpeed": 0.8,
    "speed": null,
    "deployTime": 1,
    "lifetime": 40,
    "range": 5.5,
    "targets": 2,
    "splash": false,
    "cost": 4,
    "troopCount": 0,
    "type": "building",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": {
      "hidden": true
      },
    "crownTowerReduction": true,
    "level": {
      "1": {
        "hitpoints": 420,
        "damage": 64,
        "dps": 80,
        "crownTowerDmg": 0
      },
      "2": {
        "hitpoints": 440,
        "damage": 70,
        "dps": 87,
        "crownTowerDmg": 0
      },
      "3": {
        "hitpoints": 508,
        "damage": 77,
        "dps": 96,
        "crownTowerDmg": 0
      },
      "4": {
        "hitpoints": 558,
        "damage": 85,
        "dps": 106,
        "crownTowerDmg": 0
      },
      "5": {
        "hitpoints": 613,
        "damage": 93,
        "dps": 116,
        "crownTowerDmg": 0
      },
      "6": {
        "hitpoints": 672,
        "damage": 102,
        "dps": 127,
        "crownTowerDmg": 0
      },
      "7": {
        "hitpoints": 739,
        "damage": 112,
        "dps": 140,
        "crownTowerDmg": 0
      },
      "8": {
        "hitpoints": 810,
        "damage": 123,
        "dps": 153,
        "crownTowerDmg": 0
      },
      "9": {
        "hitpoints": 890,
        "damage": 135,
        "dps": 168,
        "crownTowerDmg": 0
      },
      "10": {
        "hitpoints": 978,
        "damage": 149,
        "dps": 186,
        "crownTowerDmg": 0
      },
      "11": {
        "hitpoints": 1075,
        "damage": 163,
        "dps": 203,
        "crownTowerDmg": 0
      },
      "12": {
        "hitpoints": 1180,
        "damage": 179,
        "dps": 223,
        "crownTowerDmg": 0
      },
      "13": {
        "hitpoints": 1297,
        "damage": 197,
        "dps": 246,
        "crownTowerDmg": 0
      }
    }
  },
  {
    "id": "mortar",
    "name": "Mortar",
    "img": "mortar.png",
    "hitSpeed": 5,
    "speed": null,
    "deployTime": 5,
    "lifetime": 30,
    "range": 11,
    "targets": 1,
    "splash": true,
    "cost": 4,
    "troopCount": 0,
    "type": "building",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 600,
        "damage": 108,
        "dps": 21,
        "crownTowerDmg": 108
      },
      "2": {
        "hitpoints": 660,
        "damage": 119,
        "dps": 23,
        "crownTowerDmg": 119
      },
      "3": {
        "hitpoints": 726,
        "damage": 131,
        "dps": 26,
        "crownTowerDmg": 131
      },
      "4": {
        "hitpoints": 798,
        "damage": 145,
        "dps": 29,
        "crownTowerDmg": 145
      },
      "5": {
        "hitpoints": 876,
        "damage": 158,
        "dps": 31,
        "crownTowerDmg": 158
      },
      "6": {
        "hitpoints": 960,
        "damage": 173,
        "dps": 34,
        "crownTowerDmg": 173
      },
      "7": {
        "hitpoints": 1056,
        "damage": 190,
        "dps": 38,
        "crownTowerDmg": 190
      },
      "8": {
        "hitpoints": 1158,
        "damage": 208,
        "dps": 41,
        "crownTowerDmg": 208
      },
      "9": {
        "hitpoints": 1272,
        "damage": 229,
        "dps": 45,
        "crownTowerDmg": 229
      },
      "10": {
        "hitpoints": 1398,
        "damage": 251,
        "dps": 50,
        "crownTowerDmg": 251
      },
      "11": {
        "hitpoints": 1536,
        "damage": 276,
        "dps": 55,
        "crownTowerDmg": 276
      },
      "12": {
        "hitpoints": 1686,
        "damage": 303,
        "dps": 60,
        "crownTowerDmg": 303
      },
      "13": {
        "hitpoints": 1854,
        "damage": 333,
        "dps": 66,
        "crownTowerDmg": 333
      }
    }
  },
  {
    "id": "cannon",
    "name": "Cannon",
    "img": "cannon.png",
    "hitSpeed": 0.8,
    "speed": null,
    "deployTime": 1,
    "lifetime": 30,
    "range": 5.5,
    "targets": 1,
    "splash": false,
    "cost": 3,
    "troopCount": 0,
    "type": "building",
    "rarity": 1,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": true,
    "level": {
      "1": {
        "hitpoints": 380,
        "damage": 60,
        "dps": 75,
        "crownTowerDmg": 0
      },
      "2": {
        "hitpoints": 418,
        "damage": 66,
        "dps": 82,
        "crownTowerDmg": 0
      },
      "3": {
        "hitpoints": 459,
        "damage": 72,
        "dps": 90,
        "crownTowerDmg": 0
      },
      "4": {
        "hitpoints": 505,
        "damage": 79,
        "dps": 98,
        "crownTowerDmg": 0
      },
      "5": {
        "hitpoints": 554,
        "damage": 85,
        "dps": 106,
        "crownTowerDmg": 0
      },
      "6": {
        "hitpoints": 608,
        "damage": 96,
        "dps": 120,
        "crownTowerDmg": 0
      },
      "7": {
        "hitpoints": 668,
        "damage": 105,
        "dps": 131,
        "crownTowerDmg": 0
      },
      "8": {
        "hitpoints": 773,
        "damage": 115,
        "dps": 143,
        "crownTowerDmg": 0
      },
      "9": {
        "hitpoints": 805,
        "damage": 127,
        "dps": 158,
        "crownTowerDmg": 0
      },
      "10": {
        "hitpoints": 885,
        "damage": 139,
        "dps": 173,
        "crownTowerDmg": 0
      },
      "11": {
        "hitpoints": 972,
        "damage": 153,
        "dps": 191,
        "crownTowerDmg": 0
      },
      "12": {
        "hitpoints": 1067,
        "damage": 168,
        "dps": 210,
        "crownTowerDmg": 0
      },
      "13": {
        "hitpoints": 1174,
        "damage": 185,
        "dps": 231,
        "crownTowerDmg": 0
      }
    }
  },
  {
    "id": "bombTower",
    "name": "Bomb Tower",
    "img": "bombTower.png",
    "hitSpeed": 1.6,
    "speed": null,
    "deployTime": 1,
    "lifetime": 40,
    "range": 6,
    "targets": 1,
    "splash": true,
    "cost": 5,
    "troopCount": 0,
    "type": "building",
    "rarity": 2,
    "radius": null,
    "spawnAmt": null,
    "spawnUnit": null,
    "spawnSpeed": null,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": true,
    "level": {
      "1": {
        "hitpoints": 900,
        "damage": 100,
        "dps": 62,
        "crownTowerDmg": 0
      },
      "2": {
        "hitpoints": 990,
        "damage": 110,
        "dps": 68,
        "crownTowerDmg": 0
      },
      "3": {
        "hitpoints": 1089,
        "damage": 121,
        "dps": 75,
        "crownTowerDmg": 0
      },
      "4": {
        "hitpoints": 1197,
        "damage": 133,
        "dps": 83,
        "crownTowerDmg": 0
      },
      "5": {
        "hitpoints": 1314,
        "damage": 146,
        "dps": 91,
        "crownTowerDmg": 0
      },
      "6": {
        "hitpoints": 1440,
        "damage": 160,
        "dps": 100,
        "crownTowerDmg": 0
      },
      "7": {
        "hitpoints": 1584,
        "damage": 176,
        "dps": 110,
        "crownTowerDmg": 0
      },
      "8": {
        "hitpoints": 1737,
        "damage": 193,
        "dps": 120,
        "crownTowerDmg": 0
      },
      "9": {
        "hitpoints": 1908,
        "damage": 212,
        "dps": 132,
        "crownTowerDmg": 0
      },
      "10": {
        "hitpoints": 2097,
        "damage": 233,
        "dps": 145,
        "crownTowerDmg": 0
      },
      "11": {
        "hitpoints": 2304,
        "damage": 256,
        "dps": 160,
        "crownTowerDmg": 0
      }
    }
  },
  {
    "id": "furnace",
    "name": "Furnace",
    "img": "furnace.png",
    "hitSpeed": 0,
    "speed": null,
    "deployTime": 1,
    "lifetime": 40,
    "range": 0,
    "targets": null,
    "splash": false,
    "cost": 4,
    "troopCount": 0,
    "type": "building",
    "rarity": 2,
    "radius": null,
    "spawnAmt": 2,
    "spawnUnit": "fireSpirits",
    "spawnSpeed": 10,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 600,
        "damage": 0,
        "dps": 0,
        "troopLevel": 3
      },
      "2": {
        "hitpoints": 660,
        "damage": 0,
        "dps": 0,
        "troopLevel": 4
      },
      "3": {
        "hitpoints": 726,
        "damage": 0,
        "dps": 0,
        "troopLevel": 5
      },
      "4": {
        "hitpoints": 798,
        "damage": 0,
        "dps": 0,
        "troopLevel": 6
      },
      "5": {
        "hitpoints": 876,
        "damage": 0,
        "dps": 0,
        "troopLevel": 7
      },
      "6": {
        "hitpoints": 960,
        "damage": 0,
        "dps": 0,
        "troopLevel": 8
      },
      "7": {
        "hitpoints": 1056,
        "damage": 0,
        "dps": 0,
        "troopLevel": 9
      },
      "8": {
        "hitpoints": 1158,
        "damage": 0,
        "dps": 0,
        "troopLevel": 10
      },
      "9": {
        "hitpoints": 1276,
        "damage": 0,
        "dps": 0,
        "troopLevel": 11
      },
      "10": {
        "hitpoints": 1402,
        "damage": 0,
        "dps": 0,
        "troopLevel": 12
      },
      "11": {
        "hitpoints": 1536,
        "damage": 0,
        "dps": 0,
        "troopLevel": 13
      }
    }
  },
  {
    "id": "tombstone",
    "name": "Tombstone",
    "img": "tombstone.png",
    "hitSpeed": 0,
    "speed": null,
    "deployTime": 1,
    "lifetime": 40,
    "range": 0,
    "targets": null,
    "splash": false,
    "cost": 3,
    "troopCount": 0,
    "type": "building",
    "rarity": 2,
    "radius": null,
    "spawnAmt": 1,
    "spawnUnit": "skellies",
    "spawnSpeed": 2.9,
    "deathDamage": false,
    "deathSpawn": "skellies",
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 220,
        "damage": 0,
        "dps": 0,
        "troopLevel": 3
      },
      "2": {
        "hitpoints": 242,
        "damage": 0,
        "dps": 0,
        "troopLevel": 4
      },
      "3": {
        "hitpoints": 266,
        "damage": 0,
        "dps": 0,
        "troopLevel": 5
      },
      "4": {
        "hitpoints": 292,
        "damage": 0,
        "dps": 0,
        "troopLevel": 6
      },
      "5": {
        "hitpoints": 321,
        "damage": 0,
        "dps": 0,
        "troopLevel": 7
      },
      "6": {
        "hitpoints": 352,
        "damage": 0,
        "dps": 0,
        "troopLevel": 8
      },
      "7": {
        "hitpoints": 387,
        "damage": 0,
        "dps": 0,
        "troopLevel": 9
      },
      "8": {
        "hitpoints": 424,
        "damage": 0,
        "dps": 0,
        "troopLevel": 10
      },
      "9": {
        "hitpoints": 466,
        "damage": 0,
        "dps": 0,
        "troopLevel": 11
      },
      "10": {
        "hitpoints": 512,
        "damage": 0,
        "dps": 0,
        "troopLevel": 12
      },
      "11": {
        "hitpoints": 563,
        "damage": 0,
        "dps": 0,
        "troopLevel": 13
      }
    }
  },
  {
    "id": "gobHut",
    "name": "Goblin Hut",
    "img": "gobHut.png",
    "hitSpeed": 0,
    "speed": null,
    "deployTime": 1,
    "lifetime": 60,
    "range": 0,
    "targets": null,
    "splash": false,
    "cost": 5,
    "troopCount": 0,
    "type": "building",
    "rarity": 2,
    "radius": null,
    "spawnAmt": 2,
    "spawnUnit": "spearGobs",
    "spawnSpeed": 4.9,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 700,
        "damage": 0,
        "dps": 0,
        "troopLevel": 3
      },
      "2": {
        "hitpoints": 770,
        "damage": 0,
        "dps": 0,
        "troopLevel": 4
      },
      "3": {
        "hitpoints": 847,
        "damage": 0,
        "dps": 0,
        "troopLevel": 5
      },
      "4": {
        "hitpoints": 931,
        "damage": 0,
        "dps": 0,
        "troopLevel": 6
      },
      "5": {
        "hitpoints": 1022,
        "damage": 0,
        "dps": 0,
        "troopLevel": 7
      },
      "6": {
        "hitpoints": 1120,
        "damage": 0,
        "dps": 0,
        "troopLevel": 8
      },
      "7": {
        "hitpoints": 1232,
        "damage": 0,
        "dps": 0,
        "troopLevel": 9
      },
      "8": {
        "hitpoints": 1351,
        "damage": 0,
        "dps": 0,
        "troopLevel": 10
      },
      "9": {
        "hitpoints": 1484,
        "damage": 0,
        "dps": 0,
        "troopLevel": 11
      },
      "10": {
        "hitpoints": 1631,
        "damage": 0,
        "dps": 0,
        "troopLevel": 12
      },
      "11": {
        "hitpoints": 1792,
        "damage": 0,
        "dps": 0,
        "troopLevel": 13
      }
    }
  },
  {
    "id": "barbHut",
    "name": "Barbarian Hut",
    "img": "barbHut.png",
    "hitSpeed": 0,
    "speed": null,
    "deployTime": 1,
    "lifetime": 60,
    "range": 0,
    "targets": null,
    "splash": false,
    "cost": 7,
    "troopCount": 0,
    "type": "building",
    "rarity": 2,
    "radius": null,
    "spawnAmt": 2,
    "spawnUnit": "barbarians",
    "spawnSpeed": 14,
    "deathDamage": false,
    "deathSpawn": null,
    "shield": false,
    "duration": false,
    "special": null,
    "crownTowerReduction": false,
    "level": {
      "1": {
        "hitpoints": 1100,
        "damage": 0,
        "dps": 0,
        "troopLevel": 3
      },
      "2": {
        "hitpoints": 1210,
        "damage": 0,
        "dps": 0,
        "troopLevel": 4
      },
      "3": {
        "hitpoints": 1331,
        "damage": 0,
        "dps": 0,
        "troopLevel": 5
      },
      "4": {
        "hitpoints": 1463,
        "damage": 0,
        "dps": 0,
        "troopLevel": 6
      },
      "5": {
        "hitpoints": 1606,
        "damage": 0,
        "dps": 0,
        "troopLevel": 7
      },
      "6": {
        "hitpoints": 1760,
        "damage": 0,
        "dps": 0,
        "troopLevel": 8
      },
      "7": {
        "hitpoints": 1936,
        "damage": 0,
        "dps": 0,
        "troopLevel": 9
      },
      "8": {
        "hitpoints": 2123,
        "damage": 0,
        "dps": 0,
        "troopLevel": 10
      },
      "9": {
        "hitpoints": 2332,
        "damage": 0,
        "dps": 0,
        "troopLevel": 11
      },
      "10": {
        "hitpoints": 2563,
        "damage": 0,
        "dps": 0,
        "troopLevel": 12
      },
      "11": {
        "hitpoints": 2816,
        "damage": 0,
        "dps": 0,
        "troopLevel": 13
      }
    }
  }
];