const genres = [
  {
    id: 4,
    name: "Action",
    slug: "action",
    games_count: 175925,
    image_background:
      "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    games: [
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        added: 20173,
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 19452,
      },
      {
        id: 4291,
        slug: "counter-strike-global-offensive",
        name: "Counter-Strike: Global Offensive",
        added: 15952,
      },
      {
        id: 5286,
        slug: "tomb-raider",
        name: "Tomb Raider (2013)",
        added: 15934,
      },
      {
        id: 12020,
        slug: "left-4-dead-2",
        name: "Left 4 Dead 2",
        added: 15489,
      },
      {
        id: 5679,
        slug: "the-elder-scrolls-v-skyrim",
        name: "The Elder Scrolls V: Skyrim",
        added: 15218,
      },
    ],
  },
  {
    id: 51,
    name: "Indie",
    slug: "indie",
    games_count: 58198,
    image_background:
      "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
    games: [
      {
        id: 1030,
        slug: "limbo",
        name: "Limbo",
        added: 12933,
      },
      {
        id: 422,
        slug: "terraria",
        name: "Terraria",
        added: 11843,
      },
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11828,
      },
      {
        id: 9767,
        slug: "hollow-knight",
        name: "Hollow Knight",
        added: 10300,
      },
      {
        id: 3612,
        slug: "hotline-miami",
        name: "Hotline Miami",
        added: 9947,
      },
      {
        id: 3790,
        slug: "outlast",
        name: "Outlast",
        added: 9865,
      },
    ],
  },
  {
    id: 3,
    name: "Adventure",
    slug: "adventure",
    games_count: 135675,
    image_background:
      "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
    games: [
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        added: 20173,
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 19452,
      },
      {
        id: 5286,
        slug: "tomb-raider",
        name: "Tomb Raider (2013)",
        added: 15934,
      },
      {
        id: 13536,
        slug: "portal",
        name: "Portal",
        added: 15582,
      },
      {
        id: 28,
        slug: "red-dead-redemption-2",
        name: "Red Dead Redemption 2",
        added: 14708,
      },
      {
        id: 3439,
        slug: "life-is-strange-episode-1-2",
        name: "Life is Strange",
        added: 14496,
      },
    ],
  },
  {
    id: 5,
    name: "RPG",
    slug: "role-playing-games-rpg",
    games_count: 53983,
    image_background:
      "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
    games: [
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 19452,
      },
      {
        id: 5679,
        slug: "the-elder-scrolls-v-skyrim",
        name: "The Elder Scrolls V: Skyrim",
        added: 15218,
      },
      {
        id: 802,
        slug: "borderlands-2",
        name: "Borderlands 2",
        added: 14501,
      },
      {
        id: 58175,
        slug: "god-of-war-2",
        name: "God of War (2018)",
        added: 12909,
      },
      {
        id: 3070,
        slug: "fallout-4",
        name: "Fallout 4",
        added: 12839,
      },
      {
        id: 278,
        slug: "horizon-zero-dawn",
        name: "Horizon Zero Dawn",
        added: 12144,
      },
    ],
  },
  {
    id: 10,
    name: "Strategy",
    slug: "strategy",
    games_count: 54241,
    image_background:
      "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
    games: [
      {
        id: 13633,
        slug: "civilization-v",
        name: "Sid Meier's Civilization V",
        added: 8938,
      },
      {
        id: 10243,
        slug: "company-of-heroes-2",
        name: "Company of Heroes 2",
        added: 8887,
      },
      {
        id: 13910,
        slug: "xcom-enemy-unknown",
        name: "XCOM: Enemy Unknown",
        added: 7915,
      },
      {
        id: 5525,
        slug: "brutal-legend",
        name: "Brutal Legend",
        added: 7842,
      },
      {
        id: 10065,
        slug: "cities-skylines",
        name: "Cities: Skylines",
        added: 7804,
      },
      {
        id: 11147,
        slug: "ark-survival-of-the-fittest",
        name: "ARK: Survival Of The Fittest",
        added: 7645,
      },
    ],
  },
  {
    id: 2,
    name: "Shooter",
    slug: "shooter",
    games_count: 59394,
    image_background:
      "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    games: [
      {
        id: 4200,
        slug: "portal-2",
        name: "Portal 2",
        added: 18329,
      },
      {
        id: 4291,
        slug: "counter-strike-global-offensive",
        name: "Counter-Strike: Global Offensive",
        added: 15952,
      },
      {
        id: 12020,
        slug: "left-4-dead-2",
        name: "Left 4 Dead 2",
        added: 15489,
      },
      {
        id: 4062,
        slug: "bioshock-infinite",
        name: "BioShock Infinite",
        added: 14700,
      },
      {
        id: 802,
        slug: "borderlands-2",
        name: "Borderlands 2",
        added: 14501,
      },
      {
        id: 13537,
        slug: "half-life-2",
        name: "Half-Life 2",
        added: 13869,
      },
    ],
  },
  {
    id: 40,
    name: "Casual",
    slug: "casual",
    games_count: 48470,
    image_background:
      "https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg",
    games: [
      {
        id: 9721,
        slug: "garrys-mod",
        name: "Garry's Mod",
        added: 9206,
      },
      {
        id: 326292,
        slug: "fall-guys",
        name: "Fall Guys: Ultimate Knockout",
        added: 8123,
      },
      {
        id: 9830,
        slug: "brawlhalla",
        name: "Brawlhalla",
        added: 7089,
      },
      {
        id: 356714,
        slug: "among-us",
        name: "Among Us",
        added: 6760,
      },
      {
        id: 1959,
        slug: "goat-simulator",
        name: "Goat Simulator",
        added: 6036,
      },
      {
        id: 16343,
        slug: "a-story-about-my-uncle",
        name: "A Story About My Uncle",
        added: 5651,
      },
    ],
  },
  {
    id: 14,
    name: "Simulation",
    slug: "simulation",
    games_count: 67382,
    image_background:
      "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
    games: [
      {
        id: 10035,
        slug: "hitman",
        name: "Hitman",
        added: 10135,
      },
      {
        id: 654,
        slug: "stardew-valley",
        name: "Stardew Valley",
        added: 9373,
      },
      {
        id: 9721,
        slug: "garrys-mod",
        name: "Garry's Mod",
        added: 9206,
      },
      {
        id: 10243,
        slug: "company-of-heroes-2",
        name: "Company of Heroes 2",
        added: 8887,
      },
      {
        id: 9882,
        slug: "dont-starve-together",
        name: "Don't Starve Together",
        added: 8677,
      },
      {
        id: 22509,
        slug: "minecraft",
        name: "Minecraft",
        added: 8004,
      },
    ],
  },
  {
    id: 7,
    name: "Puzzle",
    slug: "puzzle",
    games_count: 97181,
    image_background:
      "https://media.rawg.io/media/screenshots/6fe/6fe228662a253cd929cc78a103541ee0.jpg",
    games: [
      {
        id: 4200,
        slug: "portal-2",
        name: "Portal 2",
        added: 18329,
      },
      {
        id: 13536,
        slug: "portal",
        name: "Portal",
        added: 15582,
      },
      {
        id: 1030,
        slug: "limbo",
        name: "Limbo",
        added: 12933,
      },
      {
        id: 19709,
        slug: "half-life-2-episode-two",
        name: "Half-Life 2: Episode Two",
        added: 10344,
      },
      {
        id: 1450,
        slug: "inside",
        name: "INSIDE",
        added: 7567,
      },
      {
        id: 3853,
        slug: "trine-2-complete-story",
        name: "Trine 2: Complete Story",
        added: 6913,
      },
    ],
  },
  {
    id: 11,
    name: "Arcade",
    slug: "arcade",
    games_count: 22588,
    image_background:
      "https://media.rawg.io/media/games/23d/23d78acedbb5f40c9fb64e73af5af65d.jpg",
    games: [
      {
        id: 3612,
        slug: "hotline-miami",
        name: "Hotline Miami",
        added: 9947,
      },
      {
        id: 17540,
        slug: "injustice-gods-among-us-ultimate-edition",
        name: "Injustice: Gods Among Us Ultimate Edition",
        added: 9043,
      },
      {
        id: 22509,
        slug: "minecraft",
        name: "Minecraft",
        added: 8004,
      },
      {
        id: 4003,
        slug: "grid-2",
        name: "GRID 2",
        added: 7134,
      },
      {
        id: 3408,
        slug: "hotline-miami-2-wrong-number",
        name: "Hotline Miami 2: Wrong Number",
        added: 5824,
      },
      {
        id: 16343,
        slug: "a-story-about-my-uncle",
        name: "A Story About My Uncle",
        added: 5651,
      },
    ],
  },
  {
    id: 83,
    name: "Platformer",
    slug: "platformer",
    games_count: 100691,
    image_background:
      "https://media.rawg.io/media/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg",
    games: [
      {
        id: 1030,
        slug: "limbo",
        name: "Limbo",
        added: 12933,
      },
      {
        id: 422,
        slug: "terraria",
        name: "Terraria",
        added: 11843,
      },
      {
        id: 9767,
        slug: "hollow-knight",
        name: "Hollow Knight",
        added: 10300,
      },
      {
        id: 41,
        slug: "little-nightmares",
        name: "Little Nightmares",
        added: 10208,
      },
      {
        id: 3144,
        slug: "super-meat-boy",
        name: "Super Meat Boy",
        added: 8987,
      },
      {
        id: 28179,
        slug: "sega-mega-drive-and-genesis-classics",
        name: "SEGA Mega Drive and Genesis Classics",
        added: 7684,
      },
    ],
  },
  {
    id: 59,
    name: "Massively Multiplayer",
    slug: "massively-multiplayer",
    games_count: 3414,
    image_background:
      "https://media.rawg.io/media/games/c3b/c3be1d5f55cb9324c97ccb7aaaf42ad4.jpg",
    games: [
      {
        id: 32,
        slug: "destiny-2",
        name: "Destiny 2",
        added: 12942,
      },
      {
        id: 10213,
        slug: "dota-2",
        name: "Dota 2",
        added: 11746,
      },
      {
        id: 766,
        slug: "warframe",
        name: "Warframe",
        added: 11644,
      },
      {
        id: 290856,
        slug: "apex-legends",
        name: "Apex Legends",
        added: 10438,
      },
      {
        id: 10533,
        slug: "path-of-exile",
        name: "Path of Exile",
        added: 9382,
      },
      {
        id: 10142,
        slug: "playerunknowns-battlegrounds",
        name: "PlayerUnknown’s Battlegrounds",
        added: 9233,
      },
    ],
  },
  {
    id: 1,
    name: "Racing",
    slug: "racing",
    games_count: 24329,
    image_background:
      "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg",
    games: [
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11828,
      },
      {
        id: 4003,
        slug: "grid-2",
        name: "GRID 2",
        added: 7134,
      },
      {
        id: 2572,
        slug: "dirt-rally",
        name: "DiRT Rally",
        added: 6414,
      },
      {
        id: 58753,
        slug: "forza-horizon-4",
        name: "Forza Horizon 4",
        added: 5770,
      },
      {
        id: 5578,
        slug: "grid",
        name: "Race Driver: Grid",
        added: 5213,
      },
      {
        id: 19491,
        slug: "burnout-paradise-the-ultimate-box",
        name: "Burnout Paradise: The Ultimate Box",
        added: 4497,
      },
    ],
  },
  {
    id: 15,
    name: "Sports",
    slug: "sports",
    games_count: 20953,
    image_background:
      "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
    games: [
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11828,
      },
      {
        id: 326292,
        slug: "fall-guys",
        name: "Fall Guys: Ultimate Knockout",
        added: 8123,
      },
      {
        id: 2572,
        slug: "dirt-rally",
        name: "DiRT Rally",
        added: 6414,
      },
      {
        id: 53341,
        slug: "jet-set-radio-2012",
        name: "Jet Set Radio",
        added: 4941,
      },
      {
        id: 9575,
        slug: "vrchat",
        name: "VRChat",
        added: 4323,
      },
      {
        id: 622492,
        slug: "forza-horizon-5",
        name: "Forza Horizon 5",
        added: 4286,
      },
    ],
  },
  {
    id: 6,
    name: "Fighting",
    slug: "fighting",
    games_count: 11727,
    image_background:
      "https://media.rawg.io/media/games/297/297a51aa1f0999016d5a35e2e1d6d8ab.jpg",
    games: [
      {
        id: 17540,
        slug: "injustice-gods-among-us-ultimate-edition",
        name: "Injustice: Gods Among Us Ultimate Edition",
        added: 9043,
      },
      {
        id: 108,
        slug: "mortal-kombat-x",
        name: "Mortal Kombat X",
        added: 8350,
      },
      {
        id: 28179,
        slug: "sega-mega-drive-and-genesis-classics",
        name: "SEGA Mega Drive and Genesis Classics",
        added: 7684,
      },
      {
        id: 9830,
        slug: "brawlhalla",
        name: "Brawlhalla",
        added: 7089,
      },
      {
        id: 274480,
        slug: "mortal-kombat-11",
        name: "Mortal Kombat 11",
        added: 5080,
      },
      {
        id: 44525,
        slug: "yakuza-kiwami",
        name: "Yakuza Kiwami",
        added: 4300,
      },
    ],
  },
  {
    id: 19,
    name: "Family",
    slug: "family",
    games_count: 5395,
    image_background:
      "https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg",
    games: [
      {
        id: 3254,
        slug: "journey",
        name: "Journey",
        added: 8094,
      },
      {
        id: 2597,
        slug: "lego-lord-of-the-rings",
        name: "LEGO The Lord of the Rings",
        added: 5237,
      },
      {
        id: 3350,
        slug: "broken-age",
        name: "Broken Age",
        added: 4827,
      },
      {
        id: 3729,
        slug: "lego-the-hobbit",
        name: "LEGO The Hobbit",
        added: 4803,
      },
      {
        id: 1259,
        slug: "machinarium",
        name: "Machinarium",
        added: 4334,
      },
      {
        id: 1140,
        slug: "world-of-goo",
        name: "World of Goo",
        added: 4252,
      },
    ],
  },
  {
    id: 28,
    name: "Board Games",
    slug: "board-games",
    games_count: 8347,
    image_background:
      "https://media.rawg.io/media/screenshots/768/768e36d4b62a1481fef737c6920fbfc7.jpg",
    games: [
      {
        id: 23557,
        slug: "gwent-the-witcher-card-game",
        name: "Gwent: The Witcher Card Game",
        added: 4513,
      },
      {
        id: 327999,
        slug: "dota-underlords",
        name: "Dota Underlords",
        added: 3812,
      },
      {
        id: 2055,
        slug: "adventure-capitalist",
        name: "AdVenture Capitalist",
        added: 3186,
      },
      {
        id: 758,
        slug: "hue",
        name: "Hue",
        added: 2206,
      },
      {
        id: 2306,
        slug: "poker-night-2",
        name: "Poker Night 2",
        added: 1993,
      },
      {
        id: 3187,
        slug: "armello",
        name: "Armello",
        added: 1922,
      },
    ],
  },
  {
    id: 34,
    name: "Educational",
    slug: "educational",
    games_count: 15657,
    image_background:
      "https://media.rawg.io/media/games/5ba/5ba70c842aaf82176ff47618f776a498.jpg",
    games: [
      {
        id: 1358,
        slug: "papers-please",
        name: "Papers, Please",
        added: 6487,
      },
      {
        id: 1140,
        slug: "world-of-goo",
        name: "World of Goo",
        added: 4252,
      },
      {
        id: 2778,
        slug: "surgeon-simulator-cpr",
        name: "Surgeon Simulator",
        added: 3755,
      },
      {
        id: 9768,
        slug: "gameguru",
        name: "GameGuru",
        added: 2414,
      },
      {
        id: 13777,
        slug: "sid-meiers-civilization-iv-colonization",
        name: "Sid Meier's Civilization IV: Colonization",
        added: 2215,
      },
      {
        id: 6885,
        slug: "pirates-3",
        name: "Sid Meier's Pirates!",
        added: 2131,
      },
    ],
  },
  {
    id: 17,
    name: "Card",
    slug: "card",
    games_count: 4519,
    image_background:
      "https://media.rawg.io/media/games/891/8916b6d4d41c5931d1d5b6b1f525da7b.jpg",
    games: [
      {
        id: 28121,
        slug: "slay-the-spire",
        name: "Slay the Spire",
        added: 4546,
      },
      {
        id: 23557,
        slug: "gwent-the-witcher-card-game",
        name: "Gwent: The Witcher Card Game",
        added: 4513,
      },
      {
        id: 18852,
        slug: "poker-night-at-the-inventory",
        name: "Poker Night at the Inventory",
        added: 2653,
      },
      {
        id: 8923,
        slug: "faeria",
        name: "Faeria",
        added: 2080,
      },
      {
        id: 332,
        slug: "the-elder-scrolls-legends",
        name: "The Elder Scrolls: Legends",
        added: 2044,
      },
      {
        id: 2306,
        slug: "poker-night-2",
        name: "Poker Night 2",
        added: 1993,
      },
    ],
  },
];

export default genres;
