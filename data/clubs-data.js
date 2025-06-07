const CLUBS_DATA = [
  {
    "rank": 1,
    "name": "Los Angeles Lakers",
    "lat": 34.0522,
    "lng": -118.2437,
    "country": "USA"
  },
  {
    "rank": 2,
    "name": "Milwaukee Bucks",
    "lat": 43.0589,
    "lng": -87.9065,
    "country": "USA"
  },
  {
    "rank": 3,
    "name": "Golden State Warriors",
    "lat": 37.768,
    "lng": -122.3877,
    "country": "USA"
  },
  {
    "rank": 4,
    "name": "Brooklyn Nets",
    "lat": 40.6782,
    "lng": -73.9442,
    "country": "USA"
  },
  {
    "rank": 5,
    "name": "Chicago Bulls",
    "lat": 41.8781,
    "lng": -87.6298,
    "country": "USA"
  },
  {
    "rank": 6,
    "name": "Philadelphia 76ers",
    "lat": 39.9012,
    "lng": -75.172,
    "country": "USA"
  },
  {
    "rank": 7,
    "name": "Los Angeles Clippers",
    "lat": 34.079411,
    "lng": -118.250578,
    "country": "USA"
  },
  {
    "rank": 8,
    "name": "Miami Heat",
    "lat": 25.7617,
    "lng": -80.1918,
    "country": "USA"
  },
  {
    "rank": 9,
    "name": "Boston Celtics",
    "lat": 42.3601,
    "lng": -71.0589,
    "country": "USA"
  },
  {
    "rank": 10,
    "name": "Phoenix Suns",
    "lat": 33.4484,
    "lng": -112.074,
    "country": "USA"
  },
  {
    "rank": 11,
    "name": "Denver Nuggets",
    "lat": 39.7392,
    "lng": -104.9903,
    "country": "USA"
  },
  {
    "rank": 12,
    "name": "Atlanta Hawks",
    "lat": 33.749,
    "lng": -84.388,
    "country": "USA"
  },
  {
    "rank": 13,
    "name": "Toronto Raptors",
    "lat": 43.6532,
    "lng": -79.3832,
    "country": "Canada"
  },
  {
    "rank": 14,
    "name": "Dallas Mavericks",
    "lat": 32.7767,
    "lng": -96.797,
    "country": "USA"
  },
  {
    "rank": 15,
    "name": "New Orleans Pelicans",
    "lat": 29.9511,
    "lng": -90.0715,
    "country": "USA"
  },
  {
    "rank": 16,
    "name": "Minnesota Timberwolves",
    "lat": 44.9778,
    "lng": -93.265,
    "country": "USA"
  },
  {
    "rank": 17,
    "name": "Portland Trail Blazers",
    "lat": 45.5152,
    "lng": -122.6784,
    "country": "USA"
  },
  {
    "rank": 18,
    "name": "New York Knicks",
    "lat": 40.7128,
    "lng": -74.006,
    "country": "USA"
  },
  {
    "rank": 19,
    "name": "Cleveland Cavaliers",
    "lat": 41.4993,
    "lng": -81.6944,
    "country": "USA"
  },
  {
    "rank": 20,
    "name": "Washington Wizards",
    "lat": 38.9072,
    "lng": -77.0369,
    "country": "USA"
  },
  {
    "rank": 21,
    "name": "Memphis Grizzlies",
    "lat": 35.1495,
    "lng": -90.049,
    "country": "USA"
  },
  {
    "rank": 22,
    "name": "Sacramento Kings",
    "lat": 38.5816,
    "lng": -121.4944,
    "country": "USA"
  },
  {
    "rank": 23,
    "name": "Charlotte Hornets",
    "lat": 35.2271,
    "lng": -80.8431,
    "country": "USA"
  },
  {
    "rank": 24,
    "name": "Anadolu Efes ",
    "lat": 41.0082,
    "lng": 28.9784,
    "country": "Turkey"
  },
  {
    "rank": 25,
    "name": "EA7 Emporio Armani Milano",
    "lat": 45.4642,
    "lng": 9.19,
    "country": "Italy"
  },
  {
    "rank": 26,
    "name": "Toronto Raptors",
    "lat": 43.659811,
    "lng": -79.39537800000001,
    "country": "Canada"
  },
  {
    "rank": 27,
    "name": "Utah Jazz",
    "lat": 40.7608,
    "lng": -111.891,
    "country": "USA"
  },
  {
    "rank": 28,
    "name": "Olympiacos BC",
    "lat": 37.9755,
    "lng": 23.7348,
    "country": "Greece"
  },
  {
    "rank": 29,
    "name": "Fenerbah\u00e7e Beko",
    "lat": 41.015211,
    "lng": 28.961478,
    "country": "Turkey"
  },
  {
    "rank": 30,
    "name": "Virtus Segafredo Bologna",
    "lat": 44.4949,
    "lng": 11.3426,
    "country": "Italy"
  },
  {
    "rank": 31,
    "name": "Bar\u00e7a",
    "lat": 41.3851,
    "lng": 2.1734,
    "country": "Spain"
  },
  {
    "rank": 32,
    "name": "KK Crvena Zvezda mts",
    "lat": 44.7866,
    "lng": 20.4489,
    "country": "Serbia"
  },
  {
    "rank": 33,
    "name": "AS Monaco Basket",
    "lat": 43.7384,
    "lng": 7.4246,
    "country": "Monaco"
  },
  {
    "rank": 34,
    "name": "Panathinaikos BC",
    "lat": 38.004611000000004,
    "lng": 23.699678,
    "country": "Greece"
  },
  {
    "rank": 35,
    "name": "Detroit Pistons",
    "lat": 42.3314,
    "lng": -83.0458,
    "country": "USA"
  },
  {
    "rank": 36,
    "name": "Indiana Pacers",
    "lat": 39.7684,
    "lng": -86.1581,
    "country": "USA"
  },
  {
    "rank": 37,
    "name": "Orlando Magic",
    "lat": 28.5383,
    "lng": -81.3792,
    "country": "USA"
  },
  {
    "rank": 38,
    "name": "Real Madrid",
    "lat": 40.4168,
    "lng": -3.7038,
    "country": "Spain"
  },
  {
    "rank": 39,
    "name": "BC Zalgiris Kaunas",
    "lat": 54.8985,
    "lng": 23.9036,
    "country": "Lithuania"
  },
  {
    "rank": 40,
    "name": "Oklahoma City Thunder",
    "lat": 35.4676,
    "lng": -97.5164,
    "country": "USA"
  },
  {
    "rank": 41,
    "name": "Maccabi Playtika Tel Aviv",
    "lat": 32.0853,
    "lng": 34.7818,
    "country": "Israel"
  },
  {
    "rank": 42,
    "name": "Cazoo Baskonia",
    "lat": 42.8499,
    "lng": -2.6715,
    "country": "Spain"
  },
  {
    "rank": 43,
    "name": "Gran Canaria ",
    "lat": 28.1248,
    "lng": -15.43,
    "country": "Spain"
  },
  {
    "rank": 44,
    "name": "Houston Rockets",
    "lat": 29.7604,
    "lng": -95.3698,
    "country": "USA"
  },
  {
    "rank": 45,
    "name": "San Antonio Spurs",
    "lat": 29.4241,
    "lng": -98.4936,
    "country": "USA"
  },
  {
    "rank": 46,
    "name": "Umana Reyer Venezia",
    "lat": 45.4408,
    "lng": 12.3155,
    "country": "Italy"
  },
  {
    "rank": 47,
    "name": "FC Bayern M\u00fcnchen",
    "lat": 48.1351,
    "lng": 11.582,
    "country": "Germany"
  },
  {
    "rank": 48,
    "name": "LDLC ASVEL Villeurbanne",
    "lat": 45.764,
    "lng": 4.8357,
    "country": "France"
  },
  {
    "rank": 49,
    "name": "Lenovo Tenerife",
    "lat": 28.4636,
    "lng": -16.2518,
    "country": "Spain"
  },
  {
    "rank": 50,
    "name": "Valencia Basket",
    "lat": 39.4699,
    "lng": -0.3763,
    "country": "Spain"
  },
  {
    "rank": 51,
    "name": "Pinar Karsiyaka",
    "lat": 38.4237,
    "lng": 27.1428,
    "country": "Turkey"
  },
  {
    "rank": 52,
    "name": "Galatasaray Nef",
    "lat": 41.007011,
    "lng": 29.003678,
    "country": "Turkey"
  },
  {
    "rank": 53,
    "name": "Unicaja",
    "lat": 36.7196,
    "lng": -4.4214,
    "country": "Spain"
  },
  {
    "rank": 54,
    "name": "Joventut Badalona",
    "lat": 41.4501,
    "lng": 2.2471,
    "country": "Spain"
  },
  {
    "rank": 55,
    "name": "T\u00fcrk Telekom",
    "lat": 39.9334,
    "lng": 32.8597,
    "country": "Turkey"
  },
  {
    "rank": 56,
    "name": "KK Partizan MozzartBet",
    "lat": 44.8154,
    "lng": 20.4171,
    "country": "Serbia"
  },
  {
    "rank": 57,
    "name": "Monbus Obradoiro",
    "lat": 42.8805,
    "lng": -8.5456,
    "country": "Spain"
  },
  {
    "rank": 58,
    "name": "Bertram Yachts Derthona",
    "lat": 44.9056,
    "lng": 8.8742,
    "country": "Italy"
  },
  {
    "rank": 59,
    "name": "London Lions",
    "lat": 51.5074,
    "lng": -0.1278,
    "country": "United Kingdom"
  },
  {
    "rank": 60,
    "name": "Besiktas",
    "lat": 41.033411,
    "lng": 28.983078,
    "country": "Turkey"
  },
  {
    "rank": 61,
    "name": "ALBA Berlin",
    "lat": 52.52,
    "lng": 13.405,
    "country": "Germany"
  },
  {
    "rank": 62,
    "name": "Germani Brescia",
    "lat": 45.5416,
    "lng": 10.2118,
    "country": "Italy"
  },
  {
    "rank": 63,
    "name": "KK Cedevita Olimpija",
    "lat": 46.0569,
    "lng": 14.5058,
    "country": "Slovenia"
  },
  {
    "rank": 64,
    "name": "Metropolitans 92",
    "lat": 48.8566,
    "lng": 2.3522,
    "country": "France"
  },
  {
    "rank": 65,
    "name": "Fortitudo Bologna",
    "lat": 44.5177,
    "lng": 11.3202,
    "country": "Italy"
  },
  {
    "rank": 66,
    "name": "Paris Basketball",
    "lat": 48.845011,
    "lng": 2.374178,
    "country": "France"
  },
  {
    "rank": 67,
    "name": "UCLA Bruins",
    "lat": 34.028411,
    "lng": -118.238978,
    "country": "USA"
  },
  {
    "rank": 68,
    "name": "SIG Strasbourg",
    "lat": 48.5734,
    "lng": 7.7521,
    "country": "France"
  },
  {
    "rank": 69,
    "name": "Bah\u00e7esehir Koleji",
    "lat": 41.025011,
    "lng": 29.021678,
    "country": "Turkey"
  },
  {
    "rank": 70,
    "name": "Gaziantep Basketbol",
    "lat": 37.0662,
    "lng": 37.3833,
    "country": "Turkey"
  },
  {
    "rank": 71,
    "name": "Surne Bilbao Basket",
    "lat": 43.2627,
    "lng": -2.9253,
    "country": "Spain"
  },
  {
    "rank": 72,
    "name": "KK Buducnost VOLI",
    "lat": 42.4304,
    "lng": 19.2594,
    "country": "Montenegro"
  },
  {
    "rank": 73,
    "name": "Banco di Sardegna Sassari",
    "lat": 40.7259,
    "lng": 8.5547,
    "country": "Italy"
  },
  {
    "rank": 74,
    "name": "Frutti Extra Bursaspor",
    "lat": 40.1826,
    "lng": 29.0665,
    "country": "Turkey"
  },
  {
    "rank": 75,
    "name": "Tofas",
    "lat": 40.200611,
    "lng": 29.085778,
    "country": "Turkey"
  },
  {
    "rank": 76,
    "name": "Unahotels Reggio Emilia",
    "lat": 44.6989,
    "lng": 10.6346,
    "country": "Italy"
  },
  {
    "rank": 77,
    "name": "AEK BC",
    "lat": 37.981011,
    "lng": 23.759678,
    "country": "Greece"
  },
  {
    "rank": 78,
    "name": "Rytas Vilnius",
    "lat": 54.6872,
    "lng": 25.2797,
    "country": "Lithuania"
  },
  {
    "rank": 79,
    "name": "Florida State Seminoles",
    "lat": 30.4383,
    "lng": -84.2807,
    "country": "USA"
  },
  {
    "rank": 80,
    "name": "Casademont Zaragoza",
    "lat": 41.6488,
    "lng": -0.889,
    "country": "Spain"
  },
  {
    "rank": 81,
    "name": "Bnei Ofek Dist Herzliya",
    "lat": 32.1624,
    "lng": 34.8441,
    "country": "Israel"
  },
  {
    "rank": 82,
    "name": "R\u00edo Breog\u00e1n",
    "lat": 43.3623,
    "lng": -8.4115,
    "country": "Spain"
  },
  {
    "rank": 83,
    "name": "B\u00e0squet Girona",
    "lat": 41.9794,
    "lng": 2.8214,
    "country": "Spain"
  },
  {
    "rank": 84,
    "name": "Creighton Bluejays",
    "lat": 41.2565,
    "lng": -95.9345,
    "country": "USA"
  },
  {
    "rank": 85,
    "name": "Hapoel Tel Aviv",
    "lat": 32.103211,
    "lng": 34.746677999999996,
    "country": "Israel"
  },
  {
    "rank": 86,
    "name": "Covir\u00e1n Granada",
    "lat": 37.1773,
    "lng": -3.5986,
    "country": "Spain"
  },
  {
    "rank": 87,
    "name": "Baxi Manresa",
    "lat": 41.7289,
    "lng": 1.8262,
    "country": "Spain"
  },
  {
    "rank": 88,
    "name": "U-BT Cluj-Napoca",
    "lat": 46.7712,
    "lng": 23.6236,
    "country": "Romania"
  },
  {
    "rank": 89,
    "name": "Dar\u00fcssafaka",
    "lat": 41.043011,
    "lng": 29.015677999999998,
    "country": "Turkey"
  },
  {
    "rank": 90,
    "name": "ratiopharm Ulm",
    "lat": 48.3974,
    "lng": 9.9934,
    "country": "Germany"
  },
  {
    "rank": 91,
    "name": "Real Betis",
    "lat": 37.3886,
    "lng": -5.9823,
    "country": "Spain"
  },
  {
    "rank": 92,
    "name": "Le Mans Sarthe Basket",
    "lat": 48.0061,
    "lng": 0.1996,
    "country": "France"
  },
  {
    "rank": 93,
    "name": "New Zealand Breakers",
    "lat": -36.8485,
    "lng": 174.7633,
    "country": "New Zealand"
  },
  {
    "rank": 94,
    "name": "HAKRO Merlins Crailsheim",
    "lat": 49.134,
    "lng": 10.0614,
    "country": "Germany"
  },
  {
    "rank": 95,
    "name": "Telekom Baskets Bonn",
    "lat": 50.7374,
    "lng": 7.0982,
    "country": "Germany"
  },
  {
    "rank": 96,
    "name": "Ironi Hai Motors Ness Ziona",
    "lat": 31.9278,
    "lng": 34.7925,
    "country": "Israel"
  },
  {
    "rank": 97,
    "name": "BC Wolves",
    "lat": 54.716011,
    "lng": 25.244578,
    "country": "Lithuania"
  },
  {
    "rank": 98,
    "name": "Manisa B\u00fcy\u00fcksehir Belediyespor",
    "lat": 38.6191,
    "lng": 27.4289,
    "country": "Turkey"
  },
  {
    "rank": 99,
    "name": "Vanoli Cremona",
    "lat": 45.1335,
    "lng": 10.0222,
    "country": "Italy"
  },
  {
    "rank": 100,
    "name": "Carplus Fuenlabrada",
    "lat": 40.2846,
    "lng": -3.7989,
    "country": "Spain"
  },
  {
    "rank": 101,
    "name": "Dolomiti Energia Trento",
    "lat": 46.0748,
    "lng": 11.1217,
    "country": "Italy"
  },
  {
    "rank": 102,
    "name": "Peristeri BC",
    "lat": 37.979011,
    "lng": 23.721678,
    "country": "Greece"
  },
  {
    "rank": 103,
    "name": "Yukatel Merkezefendi",
    "lat": 37.7765,
    "lng": 29.0864,
    "country": "Turkey"
  },
  {
    "rank": 104,
    "name": "BC Lietkabelis",
    "lat": 55.7172,
    "lng": 21.1175,
    "country": "Lithuania"
  },
  {
    "rank": 105,
    "name": "UCAM Murcia",
    "lat": 37.9922,
    "lng": -1.1307,
    "country": "Spain"
  },
  {
    "rank": 106,
    "name": "Hapoel Holon",
    "lat": 32.0167,
    "lng": 34.7667,
    "country": "Israel"
  },
  {
    "rank": 107,
    "name": "Semt77 Yalovaspor",
    "lat": 40.6564,
    "lng": 29.2777,
    "country": "Turkey"
  },
  {
    "rank": 108,
    "name": "Brose Bamberg",
    "lat": 49.8988,
    "lng": 10.9027,
    "country": "Germany"
  },
  {
    "rank": 109,
    "name": "Texas Longhorns",
    "lat": 30.2672,
    "lng": -97.7431,
    "country": "USA"
  },
  {
    "rank": 110,
    "name": "Lavrio Megabolt",
    "lat": 37.7167,
    "lng": 24.0667,
    "country": "Greece"
  },
  {
    "rank": 111,
    "name": "S.E. Melbourne Phoenix",
    "lat": -37.8136,
    "lng": 144.9631,
    "country": "Australia"
  },
  {
    "rank": 112,
    "name": "JL Bourg Basket",
    "lat": 46.2044,
    "lng": 5.2255,
    "country": "France"
  },
  {
    "rank": 113,
    "name": "Perth Wildcats",
    "lat": -31.9505,
    "lng": 115.8605,
    "country": "Australia"
  },
  {
    "rank": 114,
    "name": "Kansas Jayhawks",
    "lat": 38.9717,
    "lng": -95.2353,
    "country": "USA"
  },
  {
    "rank": 115,
    "name": "Hapoel B-Cure Laser Haifa",
    "lat": 32.794,
    "lng": 34.9896,
    "country": "Israel"
  },
  {
    "rank": 116,
    "name": "Ironi Kiryat Ata",
    "lat": 32.8044,
    "lng": 35.1044,
    "country": "Israel"
  },
  {
    "rank": 117,
    "name": "Happy Casa Brindisi",
    "lat": 40.6384,
    "lng": 17.9411,
    "country": "Italy"
  },
  {
    "rank": 118,
    "name": "Aliaga Petkim",
    "lat": 38.8007,
    "lng": 26.977,
    "country": "Turkey"
  },
  {
    "rank": 119,
    "name": "Prometey Slobozhanske",
    "lat": 49.9935,
    "lng": 36.2304,
    "country": "Ukraine"
  },
  {
    "rank": 120,
    "name": "Duke Blue Devils",
    "lat": 36.0014,
    "lng": -78.9382,
    "country": "USA"
  },
  {
    "rank": 121,
    "name": "Michigan Wolverines",
    "lat": 42.278,
    "lng": -83.7382,
    "country": "USA"
  },
  {
    "rank": 122,
    "name": "AYOS Konyaspor",
    "lat": 37.8667,
    "lng": 32.4833,
    "country": "Turkey"
  },
  {
    "rank": 123,
    "name": "Baylor Bears",
    "lat": 31.5804,
    "lng": -97.1114,
    "country": "USA"
  },
  {
    "rank": 124,
    "name": "Basketball L\u00f6wen Braunschweig",
    "lat": 52.2689,
    "lng": 10.5268,
    "country": "Germany"
  },
  {
    "rank": 125,
    "name": "Virginia Cavaliers",
    "lat": 38.0336,
    "lng": -78.508,
    "country": "USA"
  },
  {
    "rank": 126,
    "name": "North Carolina Tar Heels",
    "lat": 35.9049,
    "lng": -79.0469,
    "country": "USA"
  },
  {
    "rank": 127,
    "name": "Niners Chemnitz",
    "lat": 50.8278,
    "lng": 12.9214,
    "country": "Germany"
  },
  {
    "rank": 128,
    "name": "Illinois Fighting Illini",
    "lat": 40.102,
    "lng": -88.2272,
    "country": "USA"
  },
  {
    "rank": 129,
    "name": "BC CBET Jonava",
    "lat": 55.0778,
    "lng": 24.2803,
    "country": "Lithuania"
  },
  {
    "rank": 130,
    "name": "Cholet Basket",
    "lat": 47.0588,
    "lng": -0.871,
    "country": "France"
  },
  {
    "rank": 131,
    "name": "GeVi Napoli Basket",
    "lat": 40.8518,
    "lng": 14.2681,
    "country": "Italy"
  },
  {
    "rank": 132,
    "name": "Indiana Hoosiers",
    "lat": 39.1637,
    "lng": -86.5264,
    "country": "USA"
  },
  {
    "rank": 133,
    "name": "JDA Dijon Basket",
    "lat": 47.322,
    "lng": 5.0415,
    "country": "France"
  },
  {
    "rank": 134,
    "name": "Notre Dame Fighting Irish",
    "lat": 41.7001,
    "lng": -86.2379,
    "country": "USA"
  },
  {
    "rank": 135,
    "name": "SLUC Nancy Basket",
    "lat": 48.6921,
    "lng": 6.1844,
    "country": "France"
  },
  {
    "rank": 136,
    "name": "Kentucky Wildcats",
    "lat": 38.0406,
    "lng": -84.5037,
    "country": "USA"
  },
  {
    "rank": 137,
    "name": "EWE Baskets Oldenburg",
    "lat": 53.1435,
    "lng": 8.2146,
    "country": "Germany"
  },
  {
    "rank": 138,
    "name": "NutriBullet Treviso",
    "lat": 45.6669,
    "lng": 12.2431,
    "country": "Italy"
  },
  {
    "rank": 139,
    "name": "Adelaide 36ers",
    "lat": -34.9285,
    "lng": 138.6007,
    "country": "Australia"
  },
  {
    "rank": 140,
    "name": "USC Trojans",
    "lat": 34.035211000000004,
    "lng": -118.252978,
    "country": "USA"
  },
  {
    "rank": 141,
    "name": "Hapoel Yossi Avrahami Eilat",
    "lat": 29.5569,
    "lng": 34.9516,
    "country": "Israel"
  },
  {
    "rank": 142,
    "name": "Promitheas Patras",
    "lat": 38.2466,
    "lng": 21.7346,
    "country": "Greece"
  },
  {
    "rank": 143,
    "name": "Chorale Roanne",
    "lat": 46.0339,
    "lng": 4.0644,
    "country": "France"
  },
  {
    "rank": 144,
    "name": "AS Karditsas",
    "lat": 39.3667,
    "lng": 21.9211,
    "country": "Greece"
  },
  {
    "rank": 145,
    "name": "Givova Scafati",
    "lat": 40.7583,
    "lng": 14.5278,
    "country": "Italy"
  },
  {
    "rank": 146,
    "name": "BC Utenos Juventus",
    "lat": 55.4978,
    "lng": 25.2669,
    "country": "Lithuania"
  },
  {
    "rank": 147,
    "name": "Miami Hurricanes",
    "lat": 25.790811,
    "lng": -80.204678,
    "country": "USA"
  },
  {
    "rank": 148,
    "name": "Virginia Tech Hokies",
    "lat": 37.2284,
    "lng": -80.4234,
    "country": "USA"
  },
  {
    "rank": 149,
    "name": "Arizona Wildcats",
    "lat": 32.2226,
    "lng": -110.9747,
    "country": "USA"
  },
  {
    "rank": 150,
    "name": "Aris BC",
    "lat": 40.6403,
    "lng": 22.9439,
    "country": "Greece"
  },
  {
    "rank": 151,
    "name": "Clemson Tigers",
    "lat": 34.6834,
    "lng": -82.8374,
    "country": "USA"
  },
  {
    "rank": 152,
    "name": "Illawarra Hawks",
    "lat": -34.4244,
    "lng": 150.8931,
    "country": "Australia"
  },
  {
    "rank": 153,
    "name": "NC State Wolfpack",
    "lat": 35.7796,
    "lng": -78.6382,
    "country": "USA"
  },
  {
    "rank": 154,
    "name": "Openjobmetis Varese",
    "lat": 45.8205,
    "lng": 8.825,
    "country": "Italy"
  },
  {
    "rank": 155,
    "name": "Syracuse Orange",
    "lat": 43.0481,
    "lng": -76.1474,
    "country": "USA"
  },
  {
    "rank": 156,
    "name": "PAOK BC",
    "lat": 40.649411,
    "lng": 22.931078,
    "country": "Greece"
  },
  {
    "rank": 157,
    "name": "MHP RIESEN Ludwigsburg",
    "lat": 48.8941,
    "lng": 9.1918,
    "country": "Germany"
  },
  {
    "rank": 158,
    "name": "Villanova Wildcats",
    "lat": 40.0379,
    "lng": -75.3436,
    "country": "USA"
  },
  {
    "rank": 159,
    "name": "Hapoel Bank Yahav Jerusalem",
    "lat": 31.7683,
    "lng": 35.2137,
    "country": "Israel"
  },
  {
    "rank": 160,
    "name": "Maccabi Effie Capital Rishon LeZion",
    "lat": 31.973,
    "lng": 34.7926,
    "country": "Israel"
  },
  {
    "rank": 161,
    "name": "Veolia Towers Hamburg",
    "lat": 53.5511,
    "lng": 9.9937,
    "country": "Germany"
  },
  {
    "rank": 162,
    "name": "Carpegna Prosciutto Pesaro",
    "lat": 43.9102,
    "lng": 12.9133,
    "country": "Italy"
  },
  {
    "rank": 163,
    "name": "MLP Academics Heidelberg",
    "lat": 49.3988,
    "lng": 8.6724,
    "country": "Germany"
  },
  {
    "rank": 164,
    "name": "Sydney Kings",
    "lat": -33.8688,
    "lng": 151.2093,
    "country": "Australia"
  },
  {
    "rank": 165,
    "name": "Nanterre 92",
    "lat": 48.881611,
    "lng": 2.340178,
    "country": "France"
  },
  {
    "rank": 166,
    "name": "Alabama Crimson Tide",
    "lat": 33.2098,
    "lng": -87.5692,
    "country": "USA"
  },
  {
    "rank": 167,
    "name": "Fraport Skyliners",
    "lat": 50.1109,
    "lng": 8.6821,
    "country": "Germany"
  },
  {
    "rank": 168,
    "name": "Arkansas Razorbacks",
    "lat": 36.0625,
    "lng": -94.1574,
    "country": "USA"
  },
  {
    "rank": 169,
    "name": "Ohio State Buckeyes",
    "lat": 39.9612,
    "lng": -83.0007,
    "country": "USA"
  },
  {
    "rank": 170,
    "name": "BCM Gravelines-Dunkerque",
    "lat": 51.0342,
    "lng": 2.377,
    "country": "France"
  },
  {
    "rank": 171,
    "name": "Auburn Tigers",
    "lat": 32.601,
    "lng": -85.4887,
    "country": "USA"
  },
  {
    "rank": 172,
    "name": "Filou Oostende",
    "lat": 51.2172,
    "lng": 2.9267,
    "country": "Belgium"
  },
  {
    "rank": 173,
    "name": "KK Igokea m:tel",
    "lat": 43.8486,
    "lng": 18.3564,
    "country": "Bosnia and Herzegovina"
  },
  {
    "rank": 174,
    "name": "Kolossos H Hotels",
    "lat": 36.3932,
    "lng": 25.4615,
    "country": "Greece"
  },
  {
    "rank": 175,
    "name": "Cairns Taipans",
    "lat": -16.9186,
    "lng": 145.7781,
    "country": "Australia"
  },
  {
    "rank": 176,
    "name": "Minnesota Golden Gophers",
    "lat": 44.9608,
    "lng": -93.283,
    "country": "USA"
  },
  {
    "rank": 177,
    "name": "Syntainics MBC",
    "lat": 51.4969,
    "lng": 11.9695,
    "country": "Germany"
  },
  {
    "rank": 178,
    "name": "Onvo B\u00fcy\u00fck\u00e7ekmece Basketbol",
    "lat": 41.052011,
    "lng": 28.965678,
    "country": "Turkey"
  },
  {
    "rank": 179,
    "name": "Hapoel Gilboa Galil",
    "lat": 32.9375,
    "lng": 35.5364,
    "country": "Israel"
  },
  {
    "rank": 180,
    "name": "Pittsburgh Panthers",
    "lat": 40.4406,
    "lng": -79.9959,
    "country": "USA"
  },
  {
    "rank": 181,
    "name": "Boston College Eagles",
    "lat": 42.3398,
    "lng": -71.1663,
    "country": "USA"
  },
  {
    "rank": 182,
    "name": "Rutgers Scarlet Knights",
    "lat": 40.5008,
    "lng": -74.4474,
    "country": "USA"
  },
  {
    "rank": 183,
    "name": "Wake Forest Demon Deacons",
    "lat": 36.1349,
    "lng": -80.2772,
    "country": "USA"
  },
  {
    "rank": 184,
    "name": "Tasmania JackJumpers",
    "lat": -42.8821,
    "lng": 147.3272,
    "country": "Australia"
  },
  {
    "rank": 185,
    "name": "BC Neptunas Klaipeda",
    "lat": 55.746611,
    "lng": 21.081878,
    "country": "Lithuania"
  },
  {
    "rank": 186,
    "name": "Texas Tech Red Raiders",
    "lat": 33.5779,
    "lng": -101.8552,
    "country": "USA"
  },
  {
    "rank": 187,
    "name": "Georgia Tech Yellow Jackets",
    "lat": 33.7756,
    "lng": -84.3963,
    "country": "USA"
  },
  {
    "rank": 188,
    "name": "AA Quimsa",
    "lat": -27.7833,
    "lng": -64.2667,
    "country": "Argentina"
  },
  {
    "rank": 189,
    "name": "Brisbane Bullets",
    "lat": -27.4698,
    "lng": 153.0251,
    "country": "Australia"
  },
  {
    "rank": 190,
    "name": "Hapoel Nofar Galil Elyon",
    "lat": 32.943811000000004,
    "lng": 35.523778,
    "country": "Israel"
  },
  {
    "rank": 191,
    "name": "Ionikos Basket",
    "lat": 37.9473,
    "lng": 23.6647,
    "country": "Greece"
  },
  {
    "rank": 192,
    "name": "medi bayreuth",
    "lat": 49.9429,
    "lng": 11.5753,
    "country": "Germany"
  },
  {
    "rank": 193,
    "name": "Houston Cougars",
    "lat": 29.790011,
    "lng": -95.382578,
    "country": "USA"
  },
  {
    "rank": 194,
    "name": "Hapoel Be'er Sheva",
    "lat": 31.253,
    "lng": 34.7915,
    "country": "Israel"
  },
  {
    "rank": 195,
    "name": "Gonzaga Bulldogs",
    "lat": 47.6587,
    "lng": -117.426,
    "country": "USA"
  },
  {
    "rank": 196,
    "name": "Hereda San Pablo Burgos",
    "lat": 42.3404,
    "lng": -3.7026,
    "country": "Spain"
  },
  {
    "rank": 197,
    "name": "BC Siauliai",
    "lat": 55.9349,
    "lng": 23.3135,
    "country": "Lithuania"
  },
  {
    "rank": 198,
    "name": "WKS Slask Wroclaw",
    "lat": 51.1079,
    "lng": 17.0385,
    "country": "Poland"
  },
  {
    "rank": 199,
    "name": "Melbourne United",
    "lat": -37.785811,
    "lng": 144.950478,
    "country": "Australia"
  },
  {
    "rank": 200,
    "name": "Oregon Ducks",
    "lat": 44.0505,
    "lng": -123.0951,
    "country": "USA"
  },
  {
    "rank": 201,
    "name": "Florida Gators",
    "lat": 29.6516,
    "lng": -82.3248,
    "country": "USA"
  },
  {
    "rank": 202,
    "name": "Wisconsin Badgers",
    "lat": 43.0722,
    "lng": -89.4008,
    "country": "USA"
  },
  {
    "rank": 203,
    "name": "South Carolina Gamecocks",
    "lat": 34.0007,
    "lng": -81.0348,
    "country": "USA"
  },
  {
    "rank": 204,
    "name": "Pallacanestro Trieste",
    "lat": 45.6495,
    "lng": 13.7768,
    "country": "Italy"
  },
  {
    "rank": 205,
    "name": "West Virginia Mountaineers",
    "lat": 39.6295,
    "lng": -79.9559,
    "country": "USA"
  },
  {
    "rank": 206,
    "name": "Tennessee Volunteers",
    "lat": 35.9544,
    "lng": -83.9295,
    "country": "USA"
  },
  {
    "rank": 207,
    "name": "Tezenis Verona",
    "lat": 45.4384,
    "lng": 10.9916,
    "country": "Italy"
  },
  {
    "rank": 208,
    "name": "Iowa Hawkeyes",
    "lat": 41.6611,
    "lng": -91.5302,
    "country": "USA"
  },
  {
    "rank": 209,
    "name": "Purdue Boilermakers",
    "lat": 40.4237,
    "lng": -86.9212,
    "country": "USA"
  },
  {
    "rank": 210,
    "name": "MoraBanc Andorra",
    "lat": 42.5063,
    "lng": 1.5218,
    "country": "Andorra"
  },
  {
    "rank": 211,
    "name": "Limoges CSP",
    "lat": 45.8336,
    "lng": 1.2611,
    "country": "France"
  },
  {
    "rank": 212,
    "name": "LSU Tigers",
    "lat": 30.4515,
    "lng": -91.1871,
    "country": "USA"
  },
  {
    "rank": 213,
    "name": "Oklahoma Sooners",
    "lat": 35.2226,
    "lng": -97.4395,
    "country": "USA"
  },
  {
    "rank": 214,
    "name": "Louisville Cardinals",
    "lat": 38.2527,
    "lng": -85.7585,
    "country": "USA"
  },
  {
    "rank": 215,
    "name": "KK Split",
    "lat": 43.5081,
    "lng": 16.4402,
    "country": "Croatia"
  },
  {
    "rank": 216,
    "name": "Oklahoma State Cowboys",
    "lat": 36.1156,
    "lng": -97.0583,
    "country": "USA"
  },
  {
    "rank": 217,
    "name": "Texas A&M Aggies",
    "lat": 30.628,
    "lng": -96.3344,
    "country": "USA"
  },
  {
    "rank": 218,
    "name": "Okapi Aalst",
    "lat": 50.9365,
    "lng": 4.0435,
    "country": "Belgium"
  },
  {
    "rank": 219,
    "name": "Ole Miss Rebels",
    "lat": 34.3664,
    "lng": -89.5348,
    "country": "USA"
  },
  {
    "rank": 220,
    "name": "EB Pau-Lacq-Orthez",
    "lat": 43.2951,
    "lng": -0.3707,
    "country": "France"
  },
  {
    "rank": 221,
    "name": "Arizona State Sun Devils",
    "lat": 33.4255,
    "lng": -111.94,
    "country": "USA"
  },
  {
    "rank": 222,
    "name": "BC Pieno Zvaigzdes",
    "lat": 55.9169,
    "lng": 24.1638,
    "country": "Lithuania"
  },
  {
    "rank": 223,
    "name": "KK Zadar",
    "lat": 44.1194,
    "lng": 15.2314,
    "country": "Croatia"
  },
  {
    "rank": 224,
    "name": "TCU Horned Frogs",
    "lat": 32.7081,
    "lng": -97.3731,
    "country": "USA"
  },
  {
    "rank": 225,
    "name": "W\u00fcrzburg Baskets",
    "lat": 49.7913,
    "lng": 9.9534,
    "country": "Germany"
  },
  {
    "rank": 226,
    "name": "KK Mega MIS",
    "lat": 44.804211,
    "lng": 20.436578,
    "country": "Serbia"
  },
  {
    "rank": 227,
    "name": "Northwestern Wildcats",
    "lat": 42.0534,
    "lng": -87.6751,
    "country": "USA"
  },
  {
    "rank": 228,
    "name": "Nebraska Cornhuskers",
    "lat": 40.8136,
    "lng": -96.7026,
    "country": "USA"
  },
  {
    "rank": 229,
    "name": "Missouri Tigers",
    "lat": 38.9517,
    "lng": -92.3341,
    "country": "USA"
  },
  {
    "rank": 230,
    "name": "Stanford Cardinal",
    "lat": 37.4419,
    "lng": -122.143,
    "country": "USA"
  },
  {
    "rank": 231,
    "name": "ESSM Le Portel",
    "lat": 50.7133,
    "lng": 1.5667,
    "country": "France"
  },
  {
    "rank": 232,
    "name": "BG G\u00f6ttingen",
    "lat": 51.5412,
    "lng": 9.9158,
    "country": "Germany"
  },
  {
    "rank": 233,
    "name": "UConn Huskies",
    "lat": 41.8077,
    "lng": -72.254,
    "country": "USA"
  },
  {
    "rank": 234,
    "name": "Mississippi State Bulldogs",
    "lat": 33.4735,
    "lng": -88.782,
    "country": "USA"
  },
  {
    "rank": 235,
    "name": "Heroes Den Bosch",
    "lat": 51.6978,
    "lng": 5.3037,
    "country": "Netherlands"
  },
  {
    "rank": 236,
    "name": "Vanderbilt Commodores",
    "lat": 36.1447,
    "lng": -86.8027,
    "country": "USA"
  },
  {
    "rank": 237,
    "name": "Instituto de C\u00f3rdoba",
    "lat": -31.4201,
    "lng": -64.1888,
    "country": "Argentina"
  },
  {
    "rank": 238,
    "name": "Kangoeroes Basket Mechelen",
    "lat": 51.0259,
    "lng": 4.4777,
    "country": "Belgium"
  },
  {
    "rank": 239,
    "name": "Iowa State Cyclones",
    "lat": 42.0308,
    "lng": -93.6319,
    "country": "USA"
  },
  {
    "rank": 240,
    "name": "Kansas State Wildcats",
    "lat": 39.1836,
    "lng": -96.5717,
    "country": "USA"
  },
  {
    "rank": 241,
    "name": "Maryland Terrapins",
    "lat": 38.9869,
    "lng": -76.9426,
    "country": "USA"
  },
  {
    "rank": 242,
    "name": "Belfius Mons-Hainaut",
    "lat": 50.4542,
    "lng": 3.9565,
    "country": "Belgium"
  },
  {
    "rank": 243,
    "name": "Xavier Musketeers",
    "lat": 39.1612,
    "lng": -84.4569,
    "country": "USA"
  },
  {
    "rank": 244,
    "name": "Spirou Basket",
    "lat": 50.4058,
    "lng": 4.4464,
    "country": "Belgium"
  },
  {
    "rank": 245,
    "name": "Feyenoord Basketball",
    "lat": 51.9225,
    "lng": 4.4792,
    "country": "Netherlands"
  },
  {
    "rank": 246,
    "name": "ADA Blois",
    "lat": 47.598,
    "lng": 1.3348,
    "country": "France"
  },
  {
    "rank": 247,
    "name": "Maccabi Ashdod",
    "lat": 31.7948,
    "lng": 34.6553,
    "country": "Israel"
  },
  {
    "rank": 248,
    "name": "Penn State Nittany Lions",
    "lat": 40.7982,
    "lng": -77.8599,
    "country": "USA"
  },
  {
    "rank": 249,
    "name": "Landstede Hammers Zwolle",
    "lat": 52.5168,
    "lng": 6.083,
    "country": "Netherlands"
  },
  {
    "rank": 250,
    "name": "Circus Brussels Basketball",
    "lat": 50.8503,
    "lng": 4.3517,
    "country": "Belgium"
  },
  {
    "rank": 251,
    "name": "Memphis Tigers",
    "lat": 35.176311,
    "lng": -90.035478,
    "country": "USA"
  },
  {
    "rank": 252,
    "name": "Providence Friars",
    "lat": 41.824,
    "lng": -71.4128,
    "country": "USA"
  },
  {
    "rank": 253,
    "name": "Colorado Buffaloes",
    "lat": 40.015,
    "lng": -105.2705,
    "country": "USA"
  },
  {
    "rank": 254,
    "name": "Michigan State Spartans",
    "lat": 42.7335,
    "lng": -84.5467,
    "country": "USA"
  },
  {
    "rank": 255,
    "name": "ICG For\u00e7a Lleida",
    "lat": 41.6176,
    "lng": 0.62,
    "country": "Spain"
  },
  {
    "rank": 256,
    "name": "Stella Artois Leuven Bears",
    "lat": 50.8798,
    "lng": 4.7005,
    "country": "Belgium"
  },
  {
    "rank": 257,
    "name": "Cincinnati Bearcats",
    "lat": 39.1031,
    "lng": -84.512,
    "country": "USA"
  },
  {
    "rank": 258,
    "name": "Georgia Bulldogs",
    "lat": 33.9519,
    "lng": -83.3576,
    "country": "USA"
  },
  {
    "rank": 259,
    "name": "KK Borac Mozzart",
    "lat": 44.1953,
    "lng": 17.9051,
    "country": "Bosnia and Herzegovina"
  },
  {
    "rank": 260,
    "name": "St. John's Red Storm",
    "lat": 40.7282,
    "lng": -73.7949,
    "country": "USA"
  },
  {
    "rank": 261,
    "name": "Dayton Flyers",
    "lat": 39.7589,
    "lng": -84.1916,
    "country": "USA"
  },
  {
    "rank": 262,
    "name": "Telenet Giants Antwerp",
    "lat": 51.2194,
    "lng": 4.4025,
    "country": "Belgium"
  },
  {
    "rank": 263,
    "name": "Rostock Seawolves",
    "lat": 54.0887,
    "lng": 12.1476,
    "country": "Germany"
  },
  {
    "rank": 264,
    "name": "Saint Louis Billikens",
    "lat": 38.627,
    "lng": -90.1994,
    "country": "USA"
  },
  {
    "rank": 265,
    "name": "KK Mornar-Barsko Zlato",
    "lat": 42.0956,
    "lng": 19.1267,
    "country": "Montenegro"
  },
  {
    "rank": 266,
    "name": "Utah Utes",
    "lat": 40.789011,
    "lng": -111.904078,
    "country": "USA"
  },
  {
    "rank": 267,
    "name": "\u00c9lan Chalon",
    "lat": 46.7833,
    "lng": 4.8333,
    "country": "France"
  },
  {
    "rank": 268,
    "name": "Tulane Green Wave",
    "lat": 29.958011,
    "lng": -90.106678,
    "country": "USA"
  },
  {
    "rank": 269,
    "name": "Washington Huskies",
    "lat": 47.6062,
    "lng": -122.3321,
    "country": "USA"
  },
  {
    "rank": 270,
    "name": "San Diego State Aztecs",
    "lat": 32.7157,
    "lng": -117.1611,
    "country": "USA"
  },
  {
    "rank": 271,
    "name": "Apollon Patras",
    "lat": 38.255211,
    "lng": 21.722078,
    "country": "Greece"
  },
  {
    "rank": 272,
    "name": "Orl\u00e9ans Loiret Basket",
    "lat": 47.9029,
    "lng": 1.9093,
    "country": "France"
  },
  {
    "rank": 273,
    "name": "California Golden Bears",
    "lat": 37.8715,
    "lng": -122.273,
    "country": "USA"
  },
  {
    "rank": 274,
    "name": "Wyoming Cowboys",
    "lat": 41.3114,
    "lng": -105.5911,
    "country": "USA"
  },
  {
    "rank": 275,
    "name": "Hubo Limburg United",
    "lat": 50.8798,
    "lng": 5.6926,
    "country": "Belgium"
  },
  {
    "rank": 276,
    "name": "SMU Mustangs",
    "lat": 32.8412,
    "lng": -96.7834,
    "country": "USA"
  },
  {
    "rank": 277,
    "name": "BYU Cougars",
    "lat": 40.2518,
    "lng": -111.6493,
    "country": "USA"
  },
  {
    "rank": 278,
    "name": "Donar Groningen",
    "lat": 53.2194,
    "lng": 6.5665,
    "country": "Netherlands"
  },
  {
    "rank": 279,
    "name": "Oregon State Beavers",
    "lat": 44.5645,
    "lng": -123.262,
    "country": "USA"
  },
  {
    "rank": 280,
    "name": "San Diego Toreros",
    "lat": 32.744211,
    "lng": -117.174278,
    "country": "USA"
  },
  {
    "rank": 281,
    "name": "East Carolina Pirates",
    "lat": 35.612,
    "lng": -77.3666,
    "country": "USA"
  },
  {
    "rank": 282,
    "name": "Den Helder Suns",
    "lat": 52.9537,
    "lng": 4.7722,
    "country": "Netherlands"
  },
  {
    "rank": 283,
    "name": "Saint Mary's Gaels",
    "lat": 37.8272,
    "lng": -122.2714,
    "country": "USA"
  },
  {
    "rank": 284,
    "name": "DePaul Blue Demons",
    "lat": 41.907411,
    "lng": -87.642478,
    "country": "USA"
  },
  {
    "rank": 285,
    "name": "BC Labas GAS Prienai",
    "lat": 54.6333,
    "lng": 23.95,
    "country": "Lithuania"
  },
  {
    "rank": 286,
    "name": "Guuk Gipuzkoa Basket",
    "lat": 43.281211,
    "lng": -2.969778,
    "country": "Spain"
  },
  {
    "rank": 287,
    "name": "VCU Rams",
    "lat": 37.5407,
    "lng": -77.436,
    "country": "USA"
  },
  {
    "rank": 288,
    "name": "BC Gargzdai",
    "lat": 55.7172,
    "lng": 21.395,
    "country": "Lithuania"
  },
  {
    "rank": 289,
    "name": "Zunder Palencia",
    "lat": 42.0096,
    "lng": -4.5284,
    "country": "Spain"
  },
  {
    "rank": 290,
    "name": "Aris Leeuwarden",
    "lat": 53.2012,
    "lng": 5.7999,
    "country": "Netherlands"
  },
  {
    "rank": 291,
    "name": "Temple Owls",
    "lat": 39.9526,
    "lng": -75.1652,
    "country": "USA"
  },
  {
    "rank": 292,
    "name": "BC Nevezis Kedainiai",
    "lat": 55.2833,
    "lng": 23.9833,
    "country": "Lithuania"
  },
  {
    "rank": 293,
    "name": "KK FMP Meridian",
    "lat": 44.824211,
    "lng": 20.436578,
    "country": "Serbia"
  },
  {
    "rank": 294,
    "name": "Washington State Cougars",
    "lat": 46.7298,
    "lng": -117.1817,
    "country": "USA"
  },
  {
    "rank": 295,
    "name": "Portland Pilots",
    "lat": 45.544611,
    "lng": -122.69117800000001,
    "country": "USA"
  },
  {
    "rank": 296,
    "name": "RSW Li\u00e8ge Basket",
    "lat": 50.6326,
    "lng": 5.5797,
    "country": "Belgium"
  },
  {
    "rank": 297,
    "name": "Alliance Sport Alsace",
    "lat": 48.582411,
    "lng": 7.739178,
    "country": "France"
  },
  {
    "rank": 298,
    "name": "CS San Mart\u00edn Corrientes",
    "lat": -27.4692,
    "lng": -58.8306,
    "country": "Argentina"
  },
  {
    "rank": 299,
    "name": "Movistar Estudiantes",
    "lat": 40.438911,
    "lng": -3.677378,
    "country": "Spain"
  },
  {
    "rank": 300,
    "name": "Georgetown Hoyas",
    "lat": 38.936411,
    "lng": -77.049678,
    "country": "USA"
  },
  {
    "rank": 301,
    "name": "ZZ Leiden",
    "lat": 52.1601,
    "lng": 4.497,
    "country": "Netherlands"
  },
  {
    "rank": 302,
    "name": "Fos Provence Basket",
    "lat": 43.4378,
    "lng": 4.9474,
    "country": "France"
  },
  {
    "rank": 303,
    "name": "Colorado State Rams",
    "lat": 40.5853,
    "lng": -105.0844,
    "country": "USA"
  },
  {
    "rank": 304,
    "name": "Florida Gulf Coast Eagles",
    "lat": 26.4619,
    "lng": -81.7717,
    "country": "USA"
  },
  {
    "rank": 305,
    "name": "Marquette Golden Eagles",
    "lat": 43.068211,
    "lng": -87.919378,
    "country": "USA"
  },
  {
    "rank": 306,
    "name": "KK Cibona",
    "lat": 45.815,
    "lng": 15.9819,
    "country": "Croatia"
  },
  {
    "rank": 307,
    "name": "Tulsa Golden Hurricane",
    "lat": 36.154,
    "lng": -95.9928,
    "country": "USA"
  },
  {
    "rank": 308,
    "name": "Butler Bulldogs",
    "lat": 39.797811,
    "lng": -86.170978,
    "country": "USA"
  },
  {
    "rank": 309,
    "name": "CA Boca Juniors",
    "lat": -34.6037,
    "lng": -58.3816,
    "country": "Argentina"
  },
  {
    "rank": 310,
    "name": "Seton Hall Pirates",
    "lat": 40.7429,
    "lng": -74.2473,
    "country": "USA"
  },
  {
    "rank": 311,
    "name": "Pepperdine Waves",
    "lat": 34.0359,
    "lng": -118.7108,
    "country": "USA"
  },
  {
    "rank": 312,
    "name": "San Francisco Dons",
    "lat": 37.7749,
    "lng": -122.4194,
    "country": "USA"
  },
  {
    "rank": 313,
    "name": "Nevada Wolf Pack",
    "lat": 39.5296,
    "lng": -119.8138,
    "country": "USA"
  },
  {
    "rank": 314,
    "name": "Lipscomb Bisons",
    "lat": 36.1627,
    "lng": -86.7816,
    "country": "USA"
  },
  {
    "rank": 315,
    "name": "UAB Blazers",
    "lat": 33.5186,
    "lng": -86.8104,
    "country": "USA"
  },
  {
    "rank": 316,
    "name": "Yoast United",
    "lat": 52.189411,
    "lng": 4.461778,
    "country": "Netherlands"
  },
  {
    "rank": 317,
    "name": "New Mexico Lobos",
    "lat": 35.0844,
    "lng": -106.6504,
    "country": "USA"
  },
  {
    "rank": 318,
    "name": "CB Almansa con Afanion",
    "lat": 38.8725,
    "lng": -1.0969,
    "country": "Spain"
  },
  {
    "rank": 319,
    "name": "C.R. Flamengo",
    "lat": -22.9068,
    "lng": -43.1729,
    "country": "Brazil"
  },
  {
    "rank": 320,
    "name": "Apollo Amsterdam",
    "lat": 52.3676,
    "lng": 4.9041,
    "country": "Netherlands"
  },
  {
    "rank": 321,
    "name": "CA Riachuelo",
    "lat": -34.6358,
    "lng": -58.4916,
    "country": "Argentina"
  },
  {
    "rank": 322,
    "name": "B\u00e9liers de Kemper",
    "lat": 48.0181,
    "lng": -4.0976,
    "country": "France"
  },
  {
    "rank": 323,
    "name": "UNLV Rebels",
    "lat": 36.1699,
    "lng": -115.1398,
    "country": "USA"
  },
  {
    "rank": 324,
    "name": "Richmond Spiders",
    "lat": 37.569211,
    "lng": -77.449778,
    "country": "USA"
  },
  {
    "rank": 325,
    "name": "Vaqueros de Bayam\u00f3n",
    "lat": 18.3965,
    "lng": -66.1615,
    "country": "Puerto Rico"
  },
  {
    "rank": 326,
    "name": "Santa Clara Broncos",
    "lat": 37.3541,
    "lng": -121.9552,
    "country": "USA"
  },
  {
    "rank": 327,
    "name": "Melilla Sport Capital",
    "lat": 35.2919,
    "lng": -2.9381,
    "country": "Spain"
  },
  {
    "rank": 328,
    "name": "KK SC Derby",
    "lat": 44.7666,
    "lng": 20.4489,
    "country": "Serbia"
  },
  {
    "rank": 329,
    "name": "AO Agriniou",
    "lat": 38.6211,
    "lng": 21.4082,
    "country": "Greece"
  },
  {
    "rank": 330,
    "name": "Saint-Vallier BD",
    "lat": 45.183,
    "lng": 4.8167,
    "country": "France"
  },
  {
    "rank": 331,
    "name": "Gimnasia y Esgrima de Comodoro",
    "lat": -45.8667,
    "lng": -67.5,
    "country": "Argentina"
  },
  {
    "rank": 332,
    "name": "Davidson Wildcats",
    "lat": 35.5018,
    "lng": -80.8414,
    "country": "USA"
  },
  {
    "rank": 333,
    "name": "Iraklis Thessaloniki",
    "lat": 40.669611,
    "lng": 22.910978,
    "country": "Greece"
  },
  {
    "rank": 334,
    "name": "Utah State Aggies",
    "lat": 41.737,
    "lng": -111.8338,
    "country": "USA"
  },
  {
    "rank": 335,
    "name": "Western Kentucky Hilltoppers",
    "lat": 36.9954,
    "lng": -86.4669,
    "country": "USA"
  },
  {
    "rank": 336,
    "name": "Champagne Ch\u00e2lons-Reims Basket",
    "lat": 49.2583,
    "lng": 4.0317,
    "country": "France"
  },
  {
    "rank": 337,
    "name": "Boise State Broncos",
    "lat": 43.615,
    "lng": -116.2023,
    "country": "USA"
  },
  {
    "rank": 338,
    "name": "UCF Knights",
    "lat": 28.567611,
    "lng": -81.391878,
    "country": "USA"
  },
  {
    "rank": 339,
    "name": "South Florida Bulls",
    "lat": 27.7663,
    "lng": -82.6404,
    "country": "USA"
  },
  {
    "rank": 340,
    "name": "KK Krka",
    "lat": 45.7597,
    "lng": 15.1516,
    "country": "Slovenia"
  },
  {
    "rank": 341,
    "name": "Liberty Flames",
    "lat": 37.352,
    "lng": -79.1728,
    "country": "USA"
  },
  {
    "rank": 342,
    "name": "North Alabama Lions",
    "lat": 34.7304,
    "lng": -87.6774,
    "country": "USA"
  },
  {
    "rank": 343,
    "name": "\u00c9toile Angers Basket",
    "lat": 47.4784,
    "lng": -0.5632,
    "country": "France"
  },
  {
    "rank": 344,
    "name": "HLA Alicante",
    "lat": 38.3452,
    "lng": -0.481,
    "country": "Spain"
  },
  {
    "rank": 345,
    "name": "Nantes Basket Hermine",
    "lat": 47.2184,
    "lng": -1.5536,
    "country": "France"
  },
  {
    "rank": 346,
    "name": "Wichita State Shockers",
    "lat": 37.6872,
    "lng": -97.3301,
    "country": "USA"
  },
  {
    "rank": 347,
    "name": "Bryant Bulldogs",
    "lat": 41.7658,
    "lng": -71.5135,
    "country": "USA"
  },
  {
    "rank": 348,
    "name": "Panerythraikos BC",
    "lat": 37.975611,
    "lng": 23.629578,
    "country": "Greece"
  },
  {
    "rank": 349,
    "name": "TAU Castell\u00f3",
    "lat": 39.9864,
    "lng": -0.0513,
    "country": "Spain"
  },
  {
    "rank": 350,
    "name": "Ermis Schimatari",
    "lat": 38.3333,
    "lng": 23.55,
    "country": "Greece"
  },
  {
    "rank": 351,
    "name": "KK Gorica",
    "lat": 45.9553,
    "lng": 13.6363,
    "country": "Slovenia"
  },
  {
    "rank": 352,
    "name": "Middle Tennessee Blue Raiders",
    "lat": 35.8456,
    "lng": -86.3903,
    "country": "USA"
  },
  {
    "rank": 353,
    "name": "Eastern Michigan Eagles",
    "lat": 42.2411,
    "lng": -83.613,
    "country": "USA"
  },
  {
    "rank": 354,
    "name": "Antibes Sharks",
    "lat": 43.5809,
    "lng": 7.1251,
    "country": "France"
  },
  {
    "rank": 355,
    "name": "North Florida Ospreys",
    "lat": 30.3322,
    "lng": -81.6557,
    "country": "USA"
  },
  {
    "rank": 356,
    "name": "San Jos\u00e9 State Spartans",
    "lat": 37.3382,
    "lng": -121.8863,
    "country": "USA"
  },
  {
    "rank": 357,
    "name": "Saint Joseph's Hawks",
    "lat": 39.982211,
    "lng": -75.178078,
    "country": "USA"
  },
  {
    "rank": 358,
    "name": "Boulazac Basket Dordogne",
    "lat": 45.1833,
    "lng": 0.7167,
    "country": "France"
  },
  {
    "rank": 359,
    "name": "Duquesne Dukes",
    "lat": 40.470011,
    "lng": -80.008778,
    "country": "USA"
  },
  {
    "rank": 360,
    "name": "Leyma Coru\u00f1a",
    "lat": 43.392011000000004,
    "lng": -8.424278,
    "country": "Spain"
  },
  {
    "rank": 361,
    "name": "Toledo Rockets",
    "lat": 41.6528,
    "lng": -83.5379,
    "country": "USA"
  },
  {
    "rank": 362,
    "name": "George Washington Colonials",
    "lat": 38.956546,
    "lng": -77.049511,
    "country": "USA"
  },
  {
    "rank": 363,
    "name": "Stetson Hatters",
    "lat": 29.0536,
    "lng": -81.3003,
    "country": "USA"
  },
  {
    "rank": 364,
    "name": "Central Arkansas Bears",
    "lat": 35.0926,
    "lng": -92.4426,
    "country": "USA"
  },
  {
    "rank": 365,
    "name": "C.A. Aguada",
    "lat": -34.8844,
    "lng": -56.0181,
    "country": "Uruguay"
  },
  {
    "rank": 366,
    "name": "Aix-Maurienne Savoie Basket",
    "lat": 45.5647,
    "lng": 6.3235,
    "country": "France"
  },
  {
    "rank": 367,
    "name": "C\u00e1ceres Patrimonio de la Humanidad",
    "lat": 39.4753,
    "lng": -6.3724,
    "country": "Spain"
  },
  {
    "rank": 368,
    "name": "Stade Rochelais",
    "lat": 46.1603,
    "lng": -1.1511,
    "country": "France"
  },
  {
    "rank": 369,
    "name": "Basketball Academie Limburg",
    "lat": 50.909011,
    "lng": 5.657378,
    "country": "Belgium"
  },
  {
    "rank": 370,
    "name": "Maroussi BC",
    "lat": 38.05,
    "lng": 23.8064,
    "country": "Greece"
  },
  {
    "rank": 371,
    "name": "KK MZT Skopje Aerodrom ",
    "lat": 41.9973,
    "lng": 21.428,
    "country": "North Macedonia"
  },
  {
    "rank": 372,
    "name": "George Mason Patriots",
    "lat": 38.8462,
    "lng": -77.3063,
    "country": "USA"
  },
  {
    "rank": 373,
    "name": "Pacific Tigers",
    "lat": 37.9816,
    "lng": -121.3107,
    "country": "USA"
  },
  {
    "rank": 374,
    "name": "Medipolis SC Jena",
    "lat": 50.9278,
    "lng": 11.5897,
    "country": "Germany"
  },
  {
    "rank": 375,
    "name": "Club Regatas Corrientes",
    "lat": -27.462611,
    "lng": -58.843378,
    "country": "Argentina"
  },
  {
    "rank": 376,
    "name": "St. Bonaventure Bonnies",
    "lat": 42.0837,
    "lng": -78.4894,
    "country": "USA"
  },
  {
    "rank": 377,
    "name": "Fresno State Bulldogs",
    "lat": 36.7378,
    "lng": -119.7871,
    "country": "USA"
  },
  {
    "rank": 378,
    "name": "Aias Evosmou",
    "lat": 40.6667,
    "lng": 22.95,
    "country": "Greece"
  },
  {
    "rank": 379,
    "name": "Valparaiso Beacons",
    "lat": 41.4789,
    "lng": -87.0467,
    "country": "USA"
  },
  {
    "rank": 380,
    "name": "Kennesaw State Owls",
    "lat": 34.0234,
    "lng": -84.5816,
    "country": "USA"
  },
  {
    "rank": 381,
    "name": "Loyola Marymount Lions",
    "lat": 34.0526,
    "lng": -118.4183,
    "country": "USA"
  },
  {
    "rank": 382,
    "name": "Grupo Alega Cantabria CBT",
    "lat": 43.4623,
    "lng": -3.81,
    "country": "Spain"
  },
  {
    "rank": 383,
    "name": "Detroit Mercy Titans",
    "lat": 42.360811,
    "lng": -83.058578,
    "country": "USA"
  },
  {
    "rank": 384,
    "name": "UMass Lowell River Hawks",
    "lat": 42.6334,
    "lng": -71.3162,
    "country": "USA"
  },
  {
    "rank": 385,
    "name": "Fordham Rams",
    "lat": 40.8448,
    "lng": -73.8648,
    "country": "USA"
  },
  {
    "rank": 386,
    "name": "UMBC Retrievers",
    "lat": 39.254,
    "lng": -76.7093,
    "country": "USA"
  },
  {
    "rank": 387,
    "name": "Kent State Golden Flashes",
    "lat": 41.1454,
    "lng": -81.344,
    "country": "USA"
  },
  {
    "rank": 388,
    "name": "CA San Lorenzo",
    "lat": -34.6692,
    "lng": -58.5348,
    "country": "Argentina"
  },
  {
    "rank": 389,
    "name": "Boston University Terriers",
    "lat": 42.389411,
    "lng": -71.071678,
    "country": "USA"
  },
  {
    "rank": 390,
    "name": "Ball State Cardinals",
    "lat": 40.1934,
    "lng": -85.3887,
    "country": "USA"
  },
  {
    "rank": 391,
    "name": "Club Ourense Baloncesto",
    "lat": 42.337,
    "lng": -7.8642,
    "country": "Spain"
  },
  {
    "rank": 392,
    "name": "La Salle Explorers",
    "lat": 40.002046000000004,
    "lng": -75.177811,
    "country": "USA"
  },
  {
    "rank": 393,
    "name": "Jacksonville State Gamecocks",
    "lat": 33.8205,
    "lng": -85.7686,
    "country": "USA"
  },
  {
    "rank": 394,
    "name": "Tennessee Tech Golden Eagles",
    "lat": 36.1614,
    "lng": -85.4808,
    "country": "USA"
  },
  {
    "rank": 395,
    "name": "Joniskio Delikatesas",
    "lat": 56.2394,
    "lng": 23.6161,
    "country": "Lithuania"
  },
  {
    "rank": 396,
    "name": "Bowling Green Falcons",
    "lat": 41.3748,
    "lng": -83.6582,
    "country": "USA"
  },
  {
    "rank": 397,
    "name": "CD Colegio Los Leones",
    "lat": -33.4489,
    "lng": -70.6693,
    "country": "Chile"
  },
  {
    "rank": 398,
    "name": "Rhode Island Rams",
    "lat": 41.853411,
    "lng": -71.425578,
    "country": "USA"
  },
  {
    "rank": 399,
    "name": "Missouri State Bears",
    "lat": 37.209,
    "lng": -93.2923,
    "country": "USA"
  },
  {
    "rank": 400,
    "name": "Southern Illinois Salukis",
    "lat": 37.7172,
    "lng": -89.2167,
    "country": "USA"
  },
  {
    "rank": 401,
    "name": "ALM \u00c9vreux Basket",
    "lat": 49.0244,
    "lng": 1.1508,
    "country": "France"
  },
  {
    "rank": 402,
    "name": "AO Tritonas",
    "lat": 37.955446,
    "lng": 23.629410999999998,
    "country": "Greece"
  },
  {
    "rank": 403,
    "name": "Northern Kentucky Norse",
    "lat": 39.0458,
    "lng": -84.512,
    "country": "USA"
  },
  {
    "rank": 404,
    "name": "CA Pe\u00f1arol",
    "lat": -34.877811,
    "lng": -56.031078,
    "country": "Uruguay"
  },
  {
    "rank": 405,
    "name": "Psychiko BC",
    "lat": 38.0019,
    "lng": 23.755399999999998,
    "country": "Greece"
  },
  {
    "rank": 406,
    "name": "Marshall Thundering Herd",
    "lat": 38.4231,
    "lng": -82.4387,
    "country": "USA"
  },
  {
    "rank": 407,
    "name": "Drake Bulldogs",
    "lat": 41.5868,
    "lng": -93.625,
    "country": "USA"
  },
  {
    "rank": 408,
    "name": "Maine Black Bears",
    "lat": 44.9778,
    "lng": -68.8017,
    "country": "USA"
  },
  {
    "rank": 409,
    "name": "GS Eleftheroupoli Kavalas",
    "lat": 41.0556,
    "lng": 24.4056,
    "country": "Greece"
  },
  {
    "rank": 410,
    "name": "Morehead State Eagles",
    "lat": 38.1867,
    "lng": -83.4327,
    "country": "USA"
  },
  {
    "rank": 411,
    "name": "Illinois State Redbirds",
    "lat": 40.5142,
    "lng": -88.9906,
    "country": "USA"
  },
  {
    "rank": 412,
    "name": "Eastern Kentucky Colonels",
    "lat": 37.7347,
    "lng": -84.2733,
    "country": "USA"
  },
  {
    "rank": 413,
    "name": "Hofstra Pride",
    "lat": 40.7283,
    "lng": -73.5985,
    "country": "USA"
  },
  {
    "rank": 414,
    "name": "Ober\u00e1 Tenis Club",
    "lat": -27.4864,
    "lng": -55.1192,
    "country": "Argentina"
  },
  {
    "rank": 415,
    "name": "Belmont Bruins",
    "lat": 36.174011,
    "lng": -86.815378,
    "country": "USA"
  },
  {
    "rank": 416,
    "name": "Wright State Raiders",
    "lat": 39.788211000000004,
    "lng": -84.204778,
    "country": "USA"
  },
  {
    "rank": 417,
    "name": "Northern Iowa Panthers",
    "lat": 42.5078,
    "lng": -92.4453,
    "country": "USA"
  },
  {
    "rank": 418,
    "name": "UEMC Real Valladolid",
    "lat": 41.6528,
    "lng": -4.7245,
    "country": "Spain"
  },
  {
    "rank": 419,
    "name": "BC Vytis",
    "lat": 54.927411,
    "lng": 23.881477999999998,
    "country": "Lithuania"
  },
  {
    "rank": 420,
    "name": "Oakland Golden Grizzlies",
    "lat": 42.6334,
    "lng": -83.2148,
    "country": "USA"
  },
  {
    "rank": 421,
    "name": "UT Martin Skyhawks",
    "lat": 36.2896,
    "lng": -88.8506,
    "country": "USA"
  },
  {
    "rank": 422,
    "name": "Ohio Bobcats",
    "lat": 39.3292,
    "lng": -82.1013,
    "country": "USA"
  },
  {
    "rank": 423,
    "name": "Air Force Falcons",
    "lat": 38.9972,
    "lng": -104.8586,
    "country": "USA"
  },
  {
    "rank": 424,
    "name": "KK Helios Suns",
    "lat": 46.2396,
    "lng": 15.2677,
    "country": "Slovenia"
  },
  {
    "rank": 425,
    "name": "Northern Illinois Huskies",
    "lat": 41.9278,
    "lng": -88.6479,
    "country": "USA"
  },
  {
    "rank": 426,
    "name": "Seattle U Redhawks",
    "lat": 47.635611,
    "lng": -122.344978,
    "country": "USA"
  },
  {
    "rank": 427,
    "name": "Lille M\u00e9tropole Basket",
    "lat": 50.6292,
    "lng": 3.0573,
    "country": "France"
  },
  {
    "rank": 428,
    "name": "Club Comunicaciones",
    "lat": -34.597011,
    "lng": -58.394378,
    "country": "Argentina"
  },
  {
    "rank": 429,
    "name": "NE Megaridas",
    "lat": 38.0,
    "lng": 23.0833,
    "country": "Greece"
  },
  {
    "rank": 430,
    "name": "Bradley Braves",
    "lat": 40.6936,
    "lng": -89.5889,
    "country": "USA"
  },
  {
    "rank": 431,
    "name": "Evansville Purple Aces",
    "lat": 37.9716,
    "lng": -87.5711,
    "country": "USA"
  },
  {
    "rank": 432,
    "name": "Indiana State Sycamores",
    "lat": 39.4667,
    "lng": -87.4139,
    "country": "USA"
  },
  {
    "rank": 433,
    "name": "Purdue Fort Wayne Mastodons",
    "lat": 41.0793,
    "lng": -85.1394,
    "country": "USA"
  },
  {
    "rank": 434,
    "name": "UMass Minutemen",
    "lat": 42.3868,
    "lng": -72.5301,
    "country": "USA"
  },
  {
    "rank": 435,
    "name": "CD Universidad de Concepci\u00f3n",
    "lat": -36.8201,
    "lng": -73.0444,
    "country": "Chile"
  },
  {
    "rank": 436,
    "name": "Old Dominion Monarchs",
    "lat": 36.8468,
    "lng": -76.2852,
    "country": "USA"
  },
  {
    "rank": 437,
    "name": "Brown Bears",
    "lat": 41.873546,
    "lng": -71.425411,
    "country": "USA"
  },
  {
    "rank": 438,
    "name": "Club Ferro Carril Oeste",
    "lat": -34.5833,
    "lng": -58.5167,
    "country": "Argentina"
  },
  {
    "rank": 439,
    "name": "New Hampshire Wildcats",
    "lat": 43.2081,
    "lng": -71.5376,
    "country": "USA"
  },
  {
    "rank": 440,
    "name": "Loyola Chicago Ramblers",
    "lat": 41.927546,
    "lng": -87.632411,
    "country": "USA"
  },
  {
    "rank": 441,
    "name": "Youngstown State Penguins",
    "lat": 41.104,
    "lng": -80.6495,
    "country": "USA"
  },
  {
    "rank": 442,
    "name": "Murray State Racers",
    "lat": 36.6103,
    "lng": -88.3148,
    "country": "USA"
  },
  {
    "rank": 443,
    "name": "BC Telsiai",
    "lat": 55.9811,
    "lng": 22.2475,
    "country": "Lithuania"
  },
  {
    "rank": 444,
    "name": "NEA Filadelfeia",
    "lat": 37.975281,
    "lng": 23.629244,
    "country": "Greece"
  },
  {
    "rank": 445,
    "name": "CSU Bakersfield Roadrunners",
    "lat": 35.3733,
    "lng": -119.0187,
    "country": "USA"
  },
  {
    "rank": 446,
    "name": "Tennessee State Tigers",
    "lat": 36.192011,
    "lng": -86.794278,
    "country": "USA"
  },
  {
    "rank": 447,
    "name": "UIC Flames",
    "lat": 41.947681000000004,
    "lng": -87.642244,
    "country": "USA"
  },
  {
    "rank": 448,
    "name": "BC Zalgiris Kaunas 2",
    "lat": 54.945811,
    "lng": 23.890677999999998,
    "country": "Lithuania"
  },
  {
    "rank": 449,
    "name": "HKK Siroki",
    "lat": 43.3833,
    "lng": 17.5833,
    "country": "Bosnia and Herzegovina"
  },
  {
    "rank": 450,
    "name": "Chattanooga Mocs",
    "lat": 35.0456,
    "lng": -85.3097,
    "country": "USA"
  },
  {
    "rank": 451,
    "name": "BC Silute",
    "lat": 55.35,
    "lng": 21.4833,
    "country": "Lithuania"
  },
  {
    "rank": 452,
    "name": "Trikoupis Messolonghi BC",
    "lat": 38.3667,
    "lng": 21.4306,
    "country": "Greece"
  },
  {
    "rank": 453,
    "name": "Saint-Chamond BVG",
    "lat": 45.4747,
    "lng": 4.5139,
    "country": "France"
  },
  {
    "rank": 454,
    "name": "New Mexico State Aggies",
    "lat": 32.2798,
    "lng": -106.7637,
    "country": "USA"
  },
  {
    "rank": 455,
    "name": "Denain Voltaire",
    "lat": 50.3258,
    "lng": 3.3947,
    "country": "France"
  },
  {
    "rank": 456,
    "name": "Austin Peay Governors",
    "lat": 36.527,
    "lng": -87.3595,
    "country": "USA"
  },
  {
    "rank": 457,
    "name": "Western Michigan Broncos",
    "lat": 42.2634,
    "lng": -85.6681,
    "country": "USA"
  },
  {
    "rank": 458,
    "name": "Central Michigan Chippewas",
    "lat": 43.5956,
    "lng": -84.7836,
    "country": "USA"
  },
  {
    "rank": 459,
    "name": "Oral Roberts Golden Eagles",
    "lat": 36.183211,
    "lng": -96.005578,
    "country": "USA"
  },
  {
    "rank": 460,
    "name": "JA Vichy-Clermont",
    "lat": 46.1244,
    "lng": 3.4247,
    "country": "France"
  },
  {
    "rank": 461,
    "name": "Albany Great Danes",
    "lat": 42.6803,
    "lng": -73.837,
    "country": "USA"
  },
  {
    "rank": 462,
    "name": "Buffalo Bulls",
    "lat": 42.8864,
    "lng": -78.8784,
    "country": "USA"
  },
  {
    "rank": 463,
    "name": "Tigers T\u00fcbingen",
    "lat": 48.5216,
    "lng": 9.0576,
    "country": "Germany"
  },
  {
    "rank": 464,
    "name": "Obras Basket",
    "lat": -34.566846,
    "lng": -58.394211,
    "country": "Argentina"
  },
  {
    "rank": 465,
    "name": "Mazeikiai M Basket",
    "lat": 56.3139,
    "lng": 22.3311,
    "country": "Lithuania"
  },
  {
    "rank": 466,
    "name": "Miami (OH) Redhawks",
    "lat": 39.5092,
    "lng": -84.7323,
    "country": "USA"
  },
  {
    "rank": 467,
    "name": "Stephen F. Austin Lumberjacks",
    "lat": 31.6018,
    "lng": -94.6549,
    "country": "USA"
  },
  {
    "rank": 468,
    "name": "Siena Saints",
    "lat": 42.7191,
    "lng": -73.7562,
    "country": "USA"
  },
  {
    "rank": 469,
    "name": "Green Bay Phoenix",
    "lat": 44.5133,
    "lng": -87.9073,
    "country": "USA"
  },
  {
    "rank": 470,
    "name": "KK Sencur",
    "lat": 46.2396,
    "lng": 14.4167,
    "country": "Slovenia"
  },
  {
    "rank": 471,
    "name": "Southern Utah Thunderbirds",
    "lat": 37.6781,
    "lng": -113.0619,
    "country": "USA"
  },
  {
    "rank": 472,
    "name": "UTSA Roadrunners",
    "lat": 29.453611000000002,
    "lng": -98.506378,
    "country": "USA"
  },
  {
    "rank": 473,
    "name": "Milwaukee Panthers",
    "lat": 43.068346,
    "lng": -87.919211,
    "country": "USA"
  },
  {
    "rank": 474,
    "name": "Louisiana Tech Bulldogs",
    "lat": 32.5252,
    "lng": -92.6379,
    "country": "USA"
  },
  {
    "rank": 475,
    "name": "NJIT Highlanders",
    "lat": 40.7362,
    "lng": -74.176,
    "country": "USA"
  },
  {
    "rank": 476,
    "name": "Robert Morris Colonials",
    "lat": 40.6218,
    "lng": -80.0896,
    "country": "USA"
  },
  {
    "rank": 477,
    "name": "Koroivos BC",
    "lat": 40.6167,
    "lng": 22.0167,
    "country": "Greece"
  },
  {
    "rank": 478,
    "name": "Club Ciclista Ol\u00edmpico",
    "lat": -27.482446,
    "lng": -58.843211000000004,
    "country": "Argentina"
  },
  {
    "rank": 479,
    "name": "SIU Edwardsville Cougars",
    "lat": 38.8111,
    "lng": -90.1535,
    "country": "USA"
  },
  {
    "rank": 480,
    "name": "ABA Ancud",
    "lat": -41.8697,
    "lng": -73.8203,
    "country": "Chile"
  },
  {
    "rank": 481,
    "name": "Phoenix Hagen",
    "lat": 51.3617,
    "lng": 7.4631,
    "country": "Germany"
  },
  {
    "rank": 482,
    "name": "Southeast Missouri State Redhawks",
    "lat": 37.3092,
    "lng": -89.5586,
    "country": "USA"
  },
  {
    "rank": 483,
    "name": "Colgate Raiders",
    "lat": 42.8209,
    "lng": -75.5379,
    "country": "USA"
  },
  {
    "rank": 484,
    "name": "Army Black Knights",
    "lat": 41.3915,
    "lng": -73.9626,
    "country": "USA"
  },
  {
    "rank": 485,
    "name": "Bayer Giants Leverkusen",
    "lat": 51.0315,
    "lng": 6.9842,
    "country": "Germany"
  },
  {
    "rank": 486,
    "name": "Northeastern Huskies",
    "lat": 42.389546,
    "lng": -71.051511,
    "country": "USA"
  },
  {
    "rank": 487,
    "name": "OKK Spars",
    "lat": 44.7866,
    "lng": 17.2686,
    "country": "Bosnia and Herzegovina"
  },
  {
    "rank": 488,
    "name": "Loyola (MD) Greyhounds",
    "lat": 39.3498,
    "lng": -76.5018,
    "country": "USA"
  },
  {
    "rank": 489,
    "name": "UTEP Miners",
    "lat": 31.7619,
    "lng": -106.485,
    "country": "USA"
  },
  {
    "rank": 490,
    "name": "Denver Pioneers",
    "lat": 39.768611,
    "lng": -105.003078,
    "country": "USA"
  },
  {
    "rank": 491,
    "name": "KK Pelister-Bitola",
    "lat": 41.0361,
    "lng": 21.3344,
    "country": "North Macedonia"
  },
  {
    "rank": 492,
    "name": "Charlotte 49ers",
    "lat": 35.256411,
    "lng": -80.85597800000001,
    "country": "USA"
  },
  {
    "rank": 493,
    "name": "Bueno Arenas Albacete Basket",
    "lat": 39.0,
    "lng": -1.8667,
    "country": "Spain"
  },
  {
    "rank": 494,
    "name": "Harvard Crimson",
    "lat": 42.377,
    "lng": -71.1167,
    "country": "USA"
  },
  {
    "rank": 495,
    "name": "Akron Zips",
    "lat": 41.0814,
    "lng": -81.519,
    "country": "USA"
  },
  {
    "rank": 496,
    "name": "Eastern Illinois Panthers",
    "lat": 39.6403,
    "lng": -88.0781,
    "country": "USA"
  },
  {
    "rank": 497,
    "name": "Vermont Catamounts",
    "lat": 44.4759,
    "lng": -73.1978,
    "country": "USA"
  },
  {
    "rank": 498,
    "name": "Marist Red Foxes",
    "lat": 41.727,
    "lng": -73.9301,
    "country": "USA"
  },
  {
    "rank": 499,
    "name": "RASTA Vechta",
    "lat": 52.7294,
    "lng": 8.2844,
    "country": "Germany"
  },
  {
    "rank": 500,
    "name": "Dartmouth Big Green",
    "lat": 43.6044,
    "lng": -72.2887,
    "country": "USA"
  },
  {
    "rank": 501,
    "name": "Lafayette Leopards",
    "lat": 40.7009,
    "lng": -75.2071,
    "country": "USA"
  },
  {
    "rank": 502,
    "name": "Florida International Panthers",
    "lat": 25.810846000000002,
    "lng": -80.204511,
    "country": "USA"
  },
  {
    "rank": 503,
    "name": "Rice Owls",
    "lat": 29.850246,
    "lng": -95.382711,
    "country": "USA"
  },
  {
    "rank": 504,
    "name": "Marijampoles Suduva-Mantinga",
    "lat": 54.5597,
    "lng": 23.3544,
    "country": "Lithuania"
  },
  {
    "rank": 505,
    "name": "CD Valdivia",
    "lat": -39.8142,
    "lng": -73.2459,
    "country": "Chile"
  },
  {
    "rank": 506,
    "name": "Vilkaviskio Perlas",
    "lat": 54.6514,
    "lng": 23.0333,
    "country": "Lithuania"
  },
  {
    "rank": 507,
    "name": "KK Borac WWIN",
    "lat": 44.224611,
    "lng": 17.869978,
    "country": "Bosnia and Herzegovina"
  },
  {
    "rank": 508,
    "name": "Florida Atlantic Owls",
    "lat": 26.3683,
    "lng": -80.1289,
    "country": "USA"
  },
  {
    "rank": 509,
    "name": "Cornell Big Red",
    "lat": 42.4534,
    "lng": -76.4735,
    "country": "USA"
  },
  {
    "rank": 510,
    "name": "Cleveland State Vikings",
    "lat": 41.528611,
    "lng": -81.707178,
    "country": "USA"
  },
  {
    "rank": 511,
    "name": "Southern Miss Golden Eagles",
    "lat": 31.3207,
    "lng": -89.3369,
    "country": "USA"
  },
  {
    "rank": 512,
    "name": "Bucknell Bison",
    "lat": 40.9548,
    "lng": -76.8839,
    "country": "USA"
  },
  {
    "rank": 513,
    "name": "KK Sutjeska",
    "lat": 42.4304,
    "lng": 18.7681,
    "country": "Montenegro"
  },
  {
    "rank": 514,
    "name": "Club Bigu\u00e1",
    "lat": -34.897646,
    "lng": -56.030911,
    "country": "Uruguay"
  },
  {
    "rank": 515,
    "name": "Atl\u00e9tico Puerto Varas",
    "lat": -41.3194,
    "lng": -72.9833,
    "country": "Chile"
  },
  {
    "rank": 516,
    "name": "UC San Diego Tritons",
    "lat": 32.8801,
    "lng": -117.234,
    "country": "USA"
  },
  {
    "rank": 517,
    "name": "PS Karlsruhe Lions",
    "lat": 49.0069,
    "lng": 8.4037,
    "country": "Germany"
  },
  {
    "rank": 518,
    "name": "American University Eagles",
    "lat": 38.986681,
    "lng": -77.049444,
    "country": "USA"
  },
  {
    "rank": 519,
    "name": "Sam Houston Bearkats",
    "lat": 30.7144,
    "lng": -95.5547,
    "country": "USA"
  },
  {
    "rank": 520,
    "name": "High Point Panthers",
    "lat": 35.9557,
    "lng": -80.0053,
    "country": "USA"
  },
  {
    "rank": 521,
    "name": "Utah Tech Trailblazers",
    "lat": 37.1041,
    "lng": -113.5841,
    "country": "USA"
  },
  {
    "rank": 522,
    "name": "Utah Valley Wolverines",
    "lat": 40.2732,
    "lng": -111.7153,
    "country": "USA"
  },
  {
    "rank": 523,
    "name": "AD Atenas",
    "lat": -34.4611,
    "lng": -58.7069,
    "country": "Argentina"
  },
  {
    "rank": 524,
    "name": "CA Argentino",
    "lat": -28.4697,
    "lng": -65.7795,
    "country": "Argentina"
  },
  {
    "rank": 525,
    "name": "Towson Tigers",
    "lat": 39.3954,
    "lng": -76.6103,
    "country": "USA"
  },
  {
    "rank": 526,
    "name": "Tarleton Texans",
    "lat": 32.2343,
    "lng": -98.2001,
    "country": "USA"
  },
  {
    "rank": 527,
    "name": "JobStairs Giessen 46ers",
    "lat": 50.5838,
    "lng": 8.6742,
    "country": "Germany"
  },
  {
    "rank": 528,
    "name": "VfL Kirchheim Knights",
    "lat": 48.6528,
    "lng": 9.4394,
    "country": "Germany"
  },
  {
    "rank": 529,
    "name": "Palangos Kursiai",
    "lat": 55.9167,
    "lng": 21.0667,
    "country": "Lithuania"
  },
  {
    "rank": 530,
    "name": "St. Thomas - Minnesota Tommies",
    "lat": 45.003946,
    "lng": -93.278611,
    "country": "USA"
  },
  {
    "rank": 531,
    "name": "KK Podgorica",
    "lat": 42.459811,
    "lng": 19.224178,
    "country": "Montenegro"
  },
  {
    "rank": 532,
    "name": "Monmouth Hawks",
    "lat": 40.2677,
    "lng": -74.0059,
    "country": "USA"
  },
  {
    "rank": 533,
    "name": "Bellarmine Knights",
    "lat": 38.282011000000004,
    "lng": -85.771378,
    "country": "USA"
  },
  {
    "rank": 534,
    "name": "Western Illinois Leathernecks",
    "lat": 40.4653,
    "lng": -90.6712,
    "country": "USA"
  },
  {
    "rank": 535,
    "name": "Holy Cross Crusaders",
    "lat": 42.2619,
    "lng": -71.8063,
    "country": "USA"
  },
  {
    "rank": 536,
    "name": "California Baptist Lancers",
    "lat": 33.9425,
    "lng": -117.3617,
    "country": "USA"
  },
  {
    "rank": 537,
    "name": "Saint-Quentin Basketball",
    "lat": 49.8467,
    "lng": 3.2878,
    "country": "France"
  },
  {
    "rank": 538,
    "name": "Alimerka Oviedo Baloncesto",
    "lat": 43.3614,
    "lng": -5.8593,
    "country": "Spain"
  },
  {
    "rank": 539,
    "name": "Wiha Panthers Schwenningen",
    "lat": 48.0667,
    "lng": 8.5333,
    "country": "Germany"
  },
  {
    "rank": 540,
    "name": "Columbia Lions",
    "lat": 40.8075,
    "lng": -73.9626,
    "country": "USA"
  },
  {
    "rank": 541,
    "name": "Merrimack Warriors",
    "lat": 42.662811,
    "lng": -71.328978,
    "country": "USA"
  },
  {
    "rank": 542,
    "name": "UNC Wilmington Seahawks",
    "lat": 34.2257,
    "lng": -77.8868,
    "country": "USA"
  },
  {
    "rank": 543,
    "name": "KK Zlatibor",
    "lat": 43.7333,
    "lng": 19.7167,
    "country": "Serbia"
  },
  {
    "rank": 544,
    "name": "IUPUI Jaguars",
    "lat": 39.817646,
    "lng": -86.170811,
    "country": "USA"
  },
  {
    "rank": 545,
    "name": "Lehigh Mountain Hawks",
    "lat": 40.6259,
    "lng": -75.3784,
    "country": "USA"
  },
  {
    "rank": 546,
    "name": "N\u00fcrnberg Falcons BC",
    "lat": 49.4521,
    "lng": 11.0767,
    "country": "Germany"
  },
  {
    "rank": 547,
    "name": "KK Atletas",
    "lat": 54.735946,
    "lng": 25.226610999999998,
    "country": "Lithuania"
  },
  {
    "rank": 548,
    "name": "Drexel Dragons",
    "lat": 39.961881,
    "lng": -75.177744,
    "country": "USA"
  },
  {
    "rank": 549,
    "name": "Kretingos Kretinga",
    "lat": 55.8833,
    "lng": 21.25,
    "country": "Lithuania"
  },
  {
    "rank": 550,
    "name": "Iona Gaels",
    "lat": 40.8776,
    "lng": -73.837,
    "country": "USA"
  },
  {
    "rank": 551,
    "name": "Eisb\u00e4ren Bremerhaven",
    "lat": 53.5395,
    "lng": 8.5809,
    "country": "Germany"
  },
  {
    "rank": 552,
    "name": "Sesi Franca",
    "lat": -20.5386,
    "lng": -47.4008,
    "country": "Brazil"
  },
  {
    "rank": 553,
    "name": "North Texas Mean Green",
    "lat": 33.2148,
    "lng": -97.1331,
    "country": "USA"
  },
  {
    "rank": 554,
    "name": "Abilene Christian Wildcats",
    "lat": 32.4487,
    "lng": -99.7331,
    "country": "USA"
  },
  {
    "rank": 555,
    "name": "ART Giants D\u00fcsseldorf",
    "lat": 51.2277,
    "lng": 6.7735,
    "country": "Germany"
  },
  {
    "rank": 556,
    "name": "Jacksonville Dolphins",
    "lat": 30.361611,
    "lng": -81.668578,
    "country": "USA"
  },
  {
    "rank": 557,
    "name": "Eastern Washington Eagles",
    "lat": 47.4913,
    "lng": -117.5847,
    "country": "USA"
  },
  {
    "rank": 558,
    "name": "Artland Dragons",
    "lat": 52.7744,
    "lng": 7.9719,
    "country": "Germany"
  },
  {
    "rank": 559,
    "name": "Canisius Golden Griffins",
    "lat": 42.915811,
    "lng": -78.891178,
    "country": "USA"
  },
  {
    "rank": 560,
    "name": "Manhattan Jaspers",
    "lat": 40.8896,
    "lng": -73.9017,
    "country": "USA"
  },
  {
    "rank": 561,
    "name": "Weber State Wildcats",
    "lat": 41.223,
    "lng": -111.9738,
    "country": "USA"
  },
  {
    "rank": 562,
    "name": "VfL SparkassenStars Bochum",
    "lat": 51.4818,
    "lng": 7.2162,
    "country": "Germany"
  },
  {
    "rank": 563,
    "name": "UT Rio Grande Valley Vaqueros",
    "lat": 26.3009,
    "lng": -98.167,
    "country": "USA"
  },
  {
    "rank": 564,
    "name": "La Uni\u00f3n de Formosa",
    "lat": -26.1775,
    "lng": -58.1781,
    "country": "Argentina"
  },
  {
    "rank": 565,
    "name": "Navy Midshipmen",
    "lat": 38.9832,
    "lng": -76.4951,
    "country": "USA"
  },
  {
    "rank": 566,
    "name": "Fairfield Stags",
    "lat": 41.1579,
    "lng": -73.2478,
    "country": "USA"
  },
  {
    "rank": 567,
    "name": "AO Amyntas",
    "lat": 40.646011,
    "lng": 21.981478,
    "country": "Greece"
  },
  {
    "rank": 568,
    "name": "Yale Bulldogs",
    "lat": 41.3163,
    "lng": -72.9223,
    "country": "USA"
  },
  {
    "rank": 569,
    "name": "Quinnipiac Bobcats",
    "lat": 41.4271,
    "lng": -72.8944,
    "country": "USA"
  },
  {
    "rank": 570,
    "name": "Titanes de Barranquilla",
    "lat": 10.9639,
    "lng": -74.7964,
    "country": "Colombia"
  },
  {
    "rank": 571,
    "name": "Kavala BC",
    "lat": 41.084811,
    "lng": 24.370378,
    "country": "Greece"
  },
  {
    "rank": 572,
    "name": "Delaware Blue Hens",
    "lat": 39.6837,
    "lng": -75.7497,
    "country": "USA"
  },
  {
    "rank": 573,
    "name": "CD Espa\u00f1ol Osorno",
    "lat": -40.5728,
    "lng": -73.1322,
    "country": "Chile"
  },
  {
    "rank": 574,
    "name": "Sacramento State Hornets",
    "lat": 38.611011,
    "lng": -121.507178,
    "country": "USA"
  },
  {
    "rank": 575,
    "name": "Saint Peter's Peacocks",
    "lat": 40.7284,
    "lng": -74.0776,
    "country": "USA"
  },
  {
    "rank": 576,
    "name": "Rider Broncs",
    "lat": 40.2677,
    "lng": -74.7429,
    "country": "USA"
  },
  {
    "rank": 577,
    "name": "Vilniaus Stekas",
    "lat": 54.736081,
    "lng": 25.246444,
    "country": "Lithuania"
  },
  {
    "rank": 578,
    "name": "KK Vrijednosnice Osijek",
    "lat": 45.555,
    "lng": 18.6955,
    "country": "Croatia"
  },
  {
    "rank": 579,
    "name": "Montana Grizzlies",
    "lat": 46.8787,
    "lng": -113.9967,
    "country": "USA"
  },
  {
    "rank": 580,
    "name": "Kansas City Roos",
    "lat": 39.0997,
    "lng": -94.5786,
    "country": "USA"
  },
  {
    "rank": 581,
    "name": "Gardner-Webb Runnin' Bulldogs",
    "lat": 35.2971,
    "lng": -81.8723,
    "country": "USA"
  },
  {
    "rank": 582,
    "name": "Vilniaus Perlas",
    "lat": 54.756216,
    "lng": 25.246277,
    "country": "Lithuania"
  },
  {
    "rank": 583,
    "name": "William & Mary Tribe",
    "lat": 37.2707,
    "lng": -76.7075,
    "country": "USA"
  },
  {
    "rank": 584,
    "name": "South Dakota Coyotes",
    "lat": 42.7918,
    "lng": -96.9289,
    "country": "USA"
  },
  {
    "rank": 585,
    "name": "Espa\u00f1ol de Talca",
    "lat": -35.4264,
    "lng": -71.6554,
    "country": "Chile"
  },
  {
    "rank": 586,
    "name": "Princeton Tigers",
    "lat": 40.3573,
    "lng": -74.6672,
    "country": "USA"
  },
  {
    "rank": 587,
    "name": "Cal Poly Mustangs",
    "lat": 35.305,
    "lng": -120.6625,
    "country": "USA"
  },
  {
    "rank": 588,
    "name": "Chicago State Cougars",
    "lat": 41.887816000000004,
    "lng": -87.622077,
    "country": "USA"
  },
  {
    "rank": 589,
    "name": "Portland State Vikings",
    "lat": 45.564746,
    "lng": -122.691011,
    "country": "USA"
  },
  {
    "rank": 590,
    "name": "Long Beach State Beach",
    "lat": 33.7701,
    "lng": -118.1937,
    "country": "USA"
  },
  {
    "rank": 591,
    "name": "Charleston Cougars",
    "lat": 32.7765,
    "lng": -79.9311,
    "country": "USA"
  },
  {
    "rank": 592,
    "name": "CA Uni\u00f3n",
    "lat": -31.391611,
    "lng": -64.201578,
    "country": "Argentina"
  },
  {
    "rank": 593,
    "name": "Grand Canyon Lopes",
    "lat": 33.5387,
    "lng": -112.1516,
    "country": "USA"
  },
  {
    "rank": 594,
    "name": "Real Estel\u00ed",
    "lat": 13.0931,
    "lng": -86.3539,
    "country": "Nicaragua"
  },
  {
    "rank": 595,
    "name": "Puente Alto CD",
    "lat": -33.6167,
    "lng": -70.5833,
    "country": "Chile"
  },
  {
    "rank": 596,
    "name": "CA Platense",
    "lat": -34.5333,
    "lng": -58.4667,
    "country": "Argentina"
  },
  {
    "rank": 597,
    "name": "KK Sloga",
    "lat": 44.3092,
    "lng": 20.9711,
    "country": "Serbia"
  },
  {
    "rank": 598,
    "name": "UT Arlington Mavericks",
    "lat": 32.7303,
    "lng": -97.1136,
    "country": "USA"
  },
  {
    "rank": 599,
    "name": "Pennsylvania Quakers",
    "lat": 39.981716,
    "lng": -75.147577,
    "country": "USA"
  },
  {
    "rank": 600,
    "name": "Lamar Cardinals",
    "lat": 30.0627,
    "lng": -94.1099,
    "country": "USA"
  },
  {
    "rank": 601,
    "name": "Campbell Fighting Camels",
    "lat": 35.5151,
    "lng": -78.8784,
    "country": "USA"
  },
  {
    "rank": 602,
    "name": "Idaho Vandals",
    "lat": 46.7298,
    "lng": -117.0094,
    "country": "USA"
  },
  {
    "rank": 603,
    "name": "CD Las \u00c1nimas",
    "lat": -33.441111,
    "lng": -70.68217800000001,
    "country": "Chile"
  },
  {
    "rank": 604,
    "name": "R\u00f6merstrom Gladiators Trier",
    "lat": 49.7596,
    "lng": 6.6441,
    "country": "Germany"
  },
  {
    "rank": 605,
    "name": "KK TFT Skopje",
    "lat": 42.003211,
    "lng": 21.415077999999998,
    "country": "North Macedonia"
  },
  {
    "rank": 606,
    "name": "CD Tinguiririca San Fernando",
    "lat": -34.5833,
    "lng": -70.9833,
    "country": "Chile"
  },
  {
    "rank": 607,
    "name": "Dresden Titans",
    "lat": 51.0504,
    "lng": 13.7373,
    "country": "Germany"
  },
  {
    "rank": 608,
    "name": "Independiente Oliva",
    "lat": -34.857480999999996,
    "lng": -56.030744,
    "country": "Uruguay"
  },
  {
    "rank": 609,
    "name": "Idaho State Bengals",
    "lat": 42.8713,
    "lng": -112.4455,
    "country": "USA"
  },
  {
    "rank": 610,
    "name": "South Carolina Upstate Spartans",
    "lat": 34.9495,
    "lng": -81.932,
    "country": "USA"
  },
  {
    "rank": 611,
    "name": "CSU Fullerton Titans",
    "lat": 33.8839,
    "lng": -117.885,
    "country": "USA"
  },
  {
    "rank": 612,
    "name": "Santiago Morning Quilicura",
    "lat": -33.3667,
    "lng": -70.7333,
    "country": "Chile"
  },
  {
    "rank": 613,
    "name": "UC Riverside Highlanders",
    "lat": 33.9737,
    "lng": -117.3281,
    "country": "USA"
  },
  {
    "rank": 614,
    "name": "AS Papagou",
    "lat": 37.9915,
    "lng": 23.8186,
    "country": "Greece"
  },
  {
    "rank": 615,
    "name": "North Dakota State Bison",
    "lat": 46.8772,
    "lng": -96.7898,
    "country": "USA"
  },
  {
    "rank": 616,
    "name": "North Carolina A&T Aggies",
    "lat": 36.0726,
    "lng": -79.792,
    "country": "USA"
  },
  {
    "rank": 617,
    "name": "Hampton Pirates",
    "lat": 37.0271,
    "lng": -76.3444,
    "country": "USA"
  },
  {
    "rank": 618,
    "name": "Mount St. Mary's Mountaineers",
    "lat": 39.6403,
    "lng": -77.4286,
    "country": "USA"
  },
  {
    "rank": 619,
    "name": "CD Universidad Cat\u00f3lica",
    "lat": -33.461246,
    "lng": -70.682011,
    "country": "Chile"
  },
  {
    "rank": 620,
    "name": "Juaristi ISB",
    "lat": 43.270211,
    "lng": -2.959078,
    "country": "Spain"
  },
  {
    "rank": 621,
    "name": "Uni Baskets Paderborn",
    "lat": 51.7189,
    "lng": 8.7575,
    "country": "Germany"
  },
  {
    "rank": 622,
    "name": "CD Castro",
    "lat": -42.4833,
    "lng": -73.7667,
    "country": "Chile"
  },
  {
    "rank": 623,
    "name": "Elon Phoenix",
    "lat": 36.1026,
    "lng": -79.502,
    "country": "USA"
  },
  {
    "rank": 624,
    "name": "Grambling Tigers",
    "lat": 32.5207,
    "lng": -92.7179,
    "country": "USA"
  },
  {
    "rank": 625,
    "name": "Western Carolina Catamounts",
    "lat": 35.3099,
    "lng": -83.1852,
    "country": "USA"
  },
  {
    "rank": 626,
    "name": "UC Davis Aggies",
    "lat": 38.5382,
    "lng": -121.7617,
    "country": "USA"
  },
  {
    "rank": 627,
    "name": "James Madison Dukes",
    "lat": 38.4349,
    "lng": -78.8689,
    "country": "USA"
  },
  {
    "rank": 628,
    "name": "Niagara Purple Eagles",
    "lat": 43.1079,
    "lng": -78.9867,
    "country": "USA"
  },
  {
    "rank": 629,
    "name": "Montana State Bobcats",
    "lat": 45.677,
    "lng": -111.0429,
    "country": "USA"
  },
  {
    "rank": 630,
    "name": "Mogi Basquete",
    "lat": -23.5232,
    "lng": -46.2111,
    "country": "Brazil"
  },
  {
    "rank": 631,
    "name": "Northern Arizona Lumberjacks",
    "lat": 35.1983,
    "lng": -111.6513,
    "country": "USA"
  },
  {
    "rank": 632,
    "name": "Coastal Carolina Chanticleers",
    "lat": 33.7948,
    "lng": -79.0075,
    "country": "USA"
  },
  {
    "rank": 633,
    "name": "Longwood Lancers",
    "lat": 37.3036,
    "lng": -78.1625,
    "country": "USA"
  },
  {
    "rank": 634,
    "name": "UNC Asheville Bulldogs",
    "lat": 35.5951,
    "lng": -82.5515,
    "country": "USA"
  },
  {
    "rank": 635,
    "name": "Klaipedos Neptunas-Akvaservis ",
    "lat": 55.765746000000004,
    "lng": 21.082110999999998,
    "country": "Lithuania"
  },
  {
    "rank": 636,
    "name": "Northern Colorado Bears",
    "lat": 40.4059,
    "lng": -104.6757,
    "country": "USA"
  },
  {
    "rank": 637,
    "name": "Radford Highlanders",
    "lat": 37.1318,
    "lng": -80.5764,
    "country": "USA"
  },
  {
    "rank": 638,
    "name": "CSU Northridge Matadors",
    "lat": 34.2411,
    "lng": -118.5295,
    "country": "USA"
  },
  {
    "rank": 639,
    "name": "CEB Puerto Montt",
    "lat": -41.4733,
    "lng": -72.94,
    "country": "Chile"
  },
  {
    "rank": 640,
    "name": "Hawaii Rainbow Warriors",
    "lat": 21.2985,
    "lng": -157.8165,
    "country": "USA"
  },
  {
    "rank": 641,
    "name": "Hartford Hawks",
    "lat": 41.7658,
    "lng": -72.6851,
    "country": "USA"
  },
  {
    "rank": 642,
    "name": "Louisiana Ragin' Cajuns",
    "lat": 30.2241,
    "lng": -92.0198,
    "country": "USA"
  },
  {
    "rank": 643,
    "name": "Morgan State Bears",
    "lat": 39.3434,
    "lng": -76.5819,
    "country": "USA"
  },
  {
    "rank": 644,
    "name": "VMI Keydets",
    "lat": 37.7873,
    "lng": -79.4411,
    "country": "USA"
  },
  {
    "rank": 645,
    "name": "Presbyterian Blue Hose",
    "lat": 34.8698,
    "lng": -81.5101,
    "country": "USA"
  },
  {
    "rank": 646,
    "name": "East Tennessee State Buccaneers",
    "lat": 36.3007,
    "lng": -82.3709,
    "country": "USA"
  },
  {
    "rank": 647,
    "name": "Winthrop Eagles",
    "lat": 35.0434,
    "lng": -81.0289,
    "country": "USA"
  },
  {
    "rank": 648,
    "name": "AB Temuco",
    "lat": -38.7359,
    "lng": -72.5904,
    "country": "Chile"
  },
  {
    "rank": 649,
    "name": "UNC Greensboro Spartans",
    "lat": 36.0906,
    "lng": -79.8291,
    "country": "USA"
  },
  {
    "rank": 650,
    "name": "Binghamton Bearcats",
    "lat": 42.0862,
    "lng": -75.9683,
    "country": "USA"
  },
  {
    "rank": 651,
    "name": "Omaha Mavericks",
    "lat": 41.284811,
    "lng": -95.947378,
    "country": "USA"
  },
  {
    "rank": 652,
    "name": "North Dakota Fighting Hawks",
    "lat": 47.9253,
    "lng": -97.0329,
    "country": "USA"
  },
  {
    "rank": 653,
    "name": "Arkansas State Red Wolves",
    "lat": 35.8397,
    "lng": -90.6787,
    "country": "USA"
  },
  {
    "rank": 654,
    "name": "Delaware State Hornets",
    "lat": 39.1573,
    "lng": -75.5277,
    "country": "USA"
  },
  {
    "rank": 655,
    "name": "UC Irvine Anteaters",
    "lat": 33.6405,
    "lng": -117.8443,
    "country": "USA"
  },
  {
    "rank": 656,
    "name": "Northwestern State Demons",
    "lat": 31.7619,
    "lng": -93.0862,
    "country": "USA"
  },
  {
    "rank": 657,
    "name": "Coppin State Eagles",
    "lat": 39.3096,
    "lng": -76.6728,
    "country": "USA"
  },
  {
    "rank": 658,
    "name": "South Dakota State Jackrabbits",
    "lat": 44.3114,
    "lng": -96.7969,
    "country": "USA"
  },
  {
    "rank": 659,
    "name": "Charleston Southern Buccaneers",
    "lat": 32.8179,
    "lng": -80.0018,
    "country": "USA"
  },
  {
    "rank": 660,
    "name": "Samford Bulldogs",
    "lat": 33.4734,
    "lng": -86.7946,
    "country": "USA"
  },
  {
    "rank": 661,
    "name": "Mercer Bears",
    "lat": 32.8407,
    "lng": -83.6324,
    "country": "USA"
  },
  {
    "rank": 662,
    "name": "The Citadel Bulldogs",
    "lat": 32.805811,
    "lng": -79.943978,
    "country": "USA"
  },
  {
    "rank": 663,
    "name": "WWU Baskets M\u00fcnster",
    "lat": 51.9607,
    "lng": 7.6261,
    "country": "Germany"
  },
  {
    "rank": 664,
    "name": "Furman Paladins",
    "lat": 34.9249,
    "lng": -82.4375,
    "country": "USA"
  },
  {
    "rank": 665,
    "name": "Stony Brook Seawolves",
    "lat": 40.9176,
    "lng": -73.1412,
    "country": "USA"
  },
  {
    "rank": 666,
    "name": "Norfolk State Spartans",
    "lat": 36.876011,
    "lng": -76.297978,
    "country": "USA"
  },
  {
    "rank": 667,
    "name": "Wofford Terriers",
    "lat": 34.9249,
    "lng": -81.9498,
    "country": "USA"
  },
  {
    "rank": 668,
    "name": "Texas A&M-CC Islanders",
    "lat": 27.8006,
    "lng": -97.3964,
    "country": "USA"
  },
  {
    "rank": 669,
    "name": "Georgia Southern Eagles",
    "lat": 32.4279,
    "lng": -81.7832,
    "country": "USA"
  },
  {
    "rank": 670,
    "name": "Maryland-Eastern Shore Hawks",
    "lat": 38.3498,
    "lng": -75.5018,
    "country": "USA"
  },
  {
    "rank": 671,
    "name": "South Carolina State Bulldogs",
    "lat": 33.4534,
    "lng": -80.9962,
    "country": "USA"
  },
  {
    "rank": 672,
    "name": "UC Santa Barbara Gauchos",
    "lat": 34.414,
    "lng": -119.8489,
    "country": "USA"
  },
  {
    "rank": 673,
    "name": "Georgia State Panthers",
    "lat": 33.808411,
    "lng": -84.400778,
    "country": "USA"
  },
  {
    "rank": 674,
    "name": "Howard Bison",
    "lat": 38.936816,
    "lng": -77.009277,
    "country": "USA"
  },
  {
    "rank": 675,
    "name": "Appalachian State Mountaineers",
    "lat": 36.2168,
    "lng": -81.6746,
    "country": "USA"
  },
  {
    "rank": 676,
    "name": "Nicholls Colonels",
    "lat": 29.7013,
    "lng": -90.4426,
    "country": "USA"
  },
  {
    "rank": 677,
    "name": "South Alabama Jaguars",
    "lat": 30.6954,
    "lng": -88.0399,
    "country": "USA"
  },
  {
    "rank": 678,
    "name": "UL Monroe Warhawks",
    "lat": 32.5093,
    "lng": -92.1193,
    "country": "USA"
  },
  {
    "rank": 679,
    "name": "Jackson State Tigers",
    "lat": 32.2988,
    "lng": -90.1848,
    "country": "USA"
  },
  {
    "rank": 680,
    "name": "Troy Trojans",
    "lat": 31.8088,
    "lng": -85.9669,
    "country": "USA"
  },
  {
    "rank": 681,
    "name": "Texas State Bobcats",
    "lat": 29.8988,
    "lng": -97.9391,
    "country": "USA"
  },
  {
    "rank": 682,
    "name": "North Carolina Central Eagles",
    "lat": 35.9778,
    "lng": -78.8986,
    "country": "USA"
  },
  {
    "rank": 683,
    "name": "CB Prat",
    "lat": 41.7542,
    "lng": 1.8461,
    "country": "Spain"
  },
  {
    "rank": 684,
    "name": "McNeese Cowboys",
    "lat": 30.2266,
    "lng": -93.2174,
    "country": "USA"
  },
  {
    "rank": 685,
    "name": "New Orleans Privateers",
    "lat": 29.978246,
    "lng": -90.106511,
    "country": "USA"
  },
  {
    "rank": 686,
    "name": "Wagner Seahawks",
    "lat": 40.6176,
    "lng": -74.1424,
    "country": "USA"
  },
  {
    "rank": 687,
    "name": "St. Francis (PA) Red Flash",
    "lat": 40.3423,
    "lng": -78.9394,
    "country": "USA"
  },
  {
    "rank": 688,
    "name": "SE Louisiana Lions",
    "lat": 30.5209,
    "lng": -90.4426,
    "country": "USA"
  },
  {
    "rank": 689,
    "name": "Long Island University Sharks",
    "lat": 40.707300000000004,
    "lng": -73.9682,
    "country": "USA"
  },
  {
    "rank": 690,
    "name": "Sacred Heart Pioneers",
    "lat": 41.186211,
    "lng": -73.260678,
    "country": "USA"
  },
  {
    "rank": 691,
    "name": "Central Connecticut Blue Devils",
    "lat": 41.6488,
    "lng": -72.7278,
    "country": "USA"
  },
  {
    "rank": 692,
    "name": "St. Francis (BKN) Terriers",
    "lat": 40.700611,
    "lng": -73.933078,
    "country": "USA"
  },
  {
    "rank": 693,
    "name": "Fairleigh Dickinson Knights",
    "lat": 40.9584,
    "lng": -74.1048,
    "country": "USA"
  },
  {
    "rank": 694,
    "name": "Little Rock Trojans",
    "lat": 34.7465,
    "lng": -92.2896,
    "country": "USA"
  },
  {
    "rank": 695,
    "name": "Incarnate Word Cardinals",
    "lat": 29.473746000000002,
    "lng": -98.50621100000001,
    "country": "USA"
  },
  {
    "rank": 696,
    "name": "Mississippi Valley State Delta Devils",
    "lat": 33.3515,
    "lng": -90.307,
    "country": "USA"
  },
  {
    "rank": 697,
    "name": "Florida A&M Rattlers",
    "lat": 30.467611,
    "lng": -84.29347800000001,
    "country": "USA"
  },
  {
    "rank": 698,
    "name": "Southern Jaguars",
    "lat": 30.008381,
    "lng": -90.106344,
    "country": "USA"
  },
  {
    "rank": 699,
    "name": "Alcorn State Braves",
    "lat": 31.554,
    "lng": -91.3918,
    "country": "USA"
  },
  {
    "rank": 700,
    "name": "Prairie View A&M Panthers",
    "lat": 30.0863,
    "lng": -95.9917,
    "country": "USA"
  },
  {
    "rank": 701,
    "name": "Arkansas-Pine Bluff Golden Lions",
    "lat": 34.2284,
    "lng": -92.0031,
    "country": "USA"
  },
  {
    "rank": 702,
    "name": "Alabama State Hornets",
    "lat": 32.3668,
    "lng": -86.2999,
    "country": "USA"
  },
  {
    "rank": 703,
    "name": "Houston Baptist Huskies",
    "lat": 29.810446,
    "lng": -95.382644,
    "country": "USA"
  },
  {
    "rank": 704,
    "name": "Alabama A&M Bulldogs",
    "lat": 34.7304,
    "lng": -86.5861,
    "country": "USA"
  },
  {
    "rank": 705,
    "name": "Bethune-Cookman Wildcats",
    "lat": 29.2108,
    "lng": -81.0228,
    "country": "USA"
  },
  {
    "rank": 706,
    "name": "Texas Southern Tigers",
    "lat": 29.789861000000002,
    "lng": -95.396028,
    "country": "USA"
  }
];