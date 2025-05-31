// Basketball Club Data with Unique Coordinates
const CLUBS_DATA = [
    { rank: 1, name: "Los Angeles Lakers", lat: 34.0522, lng: -118.2437, country: "USA" },
    { rank: 2, name: "Milwaukee Bucks", lat: 43.0389, lng: -87.9065, country: "USA" },
    { rank: 3, name: "Golden State Warriors", lat: 37.7680, lng: -122.3877, country: "USA" }, // San Francisco
    { rank: 4, name: "Brooklyn Nets", lat: 40.6782, lng: -73.9442, country: "USA" },
    { rank: 5, name: "Chicago Bulls", lat: 41.8781, lng: -87.6298, country: "USA" },
    { rank: 6, name: "Philadelphia 76ers", lat: 39.9012, lng: -75.1720, country: "USA" },
    { rank: 7, name: "Los Angeles Clippers", lat: 34.0523, lng: -118.2437, country: "USA" }, // +0.0001 lat
    { rank: 8, name: "Miami Heat", lat: 25.7617, lng: -80.1918, country: "USA" },
    { rank: 9, name: "Boston Celtics", lat: 42.3601, lng: -71.0589, country: "USA" },
    { rank: 10, name: "Phoenix Suns", lat: 33.4484, lng: -112.0740, country: "USA" },
    { rank: 11, name: "Denver Nuggets", lat: 39.7392, lng: -104.9903, country: "USA" },
    { rank: 12, name: "Atlanta Hawks", lat: 33.7490, lng: -84.3880, country: "USA" },
    { rank: 13, name: "Toronto Raptors", lat: 43.6532, lng: -79.3832, country: "Canada" },
    { rank: 14, name: "Dallas Mavericks", lat: 32.7767, lng: -96.7970, country: "USA" },
    { rank: 15, name: "New Orleans Pelicans", lat: 29.9511, lng: -90.0715, country: "USA" },
    { rank: 16, name: "Minnesota Timberwolves", lat: 44.9778, lng: -93.2650, country: "USA" },
    { rank: 17, name: "Portland Trail Blazers", lat: 45.5152, lng: -122.6784, country: "USA" },
    { rank: 18, name: "New York Knicks", lat: 40.7128, lng: -74.0060, country: "USA" },
    { rank: 19, name: "Cleveland Cavaliers", lat: 41.4993, lng: -81.6944, country: "USA" },
    { rank: 20, name: "Washington Wizards", lat: 38.9072, lng: -77.0369, country: "USA" },
    { rank: 21, name: "Memphis Grizzlies", lat: 35.1495, lng: -90.0490, country: "USA" },
    { rank: 22, name: "Sacramento Kings", lat: 38.5816, lng: -121.4944, country: "USA" },
    { rank: 23, name: "Charlotte Hornets", lat: 35.2271, lng: -80.8431, country: "USA" },
    { rank: 24, name: "Anadolu Efes ", lat: 41.0082, lng: 28.9784, country: "Turkey" }, // Istanbul
    { rank: 25, name: "EA7 Emporio Armani Milano", lat: 45.4642, lng: 9.1900, country: "Italy" }, // Milan
    { rank: 26, name: "Toronto Raptors", lat: 43.6533, lng: -79.3832, country: "Canada" }, // +0.0001 lat
    { rank: 27, name: "Utah Jazz", lat: 40.7608, lng: -111.8910, country: "USA" }, // Salt Lake City
    { rank: 28, name: "Olympiacos BC", lat: 37.9755, lng: 23.7348, country: "Greece" }, // Athens
    { rank: 29, name: "Fenerbahçe Beko", lat: 41.0083, lng: 28.9784, country: "Turkey" }, // +0.0001 lat
    { rank: 30, name: "Virtus Segafredo Bologna", lat: 44.4949, lng: 11.3426, country: "Italy" }, // Bologna
    { rank: 31, name: "Barça", lat: 41.3851, lng: 2.1734, country: "Spain" }, // Barcelona
    { rank: 32, name: "KK Crvena Zvezda mts", lat: 44.7866, lng: 20.4489, country: "Serbia" }, // Belgrade
    { rank: 33, name: "AS Monaco Basket", lat: 43.7384, lng: 7.4246, country: "Monaco" },
    { rank: 34, name: "Panathinaikos BC", lat: 37.9756, lng: 23.7348, country: "Greece" }, // +0.0001 lat
    { rank: 35, name: "Detroit Pistons", lat: 42.3314, lng: -83.0458, country: "USA" },
    { rank: 36, name: "Indiana Pacers", lat: 39.7684, lng: -86.1581, country: "USA" }, // Indianapolis
    { rank: 37, name: "Orlando Magic", lat: 28.5383, lng: -81.3792, country: "USA" },
    { rank: 38, name: "Real Madrid", lat: 40.4168, lng: -3.7038, country: "Spain" }, // Madrid
    { rank: 39, name: "BC Zalgiris Kaunas", lat: 54.8985, lng: 23.9036, country: "Lithuania" }, // Kaunas
    { rank: 40, name: "Oklahoma City Thunder", lat: 35.4676, lng: -97.5164, country: "USA" },
    { rank: 41, name: "Maccabi Playtika Tel Aviv", lat: 32.0853, lng: 34.7818, country: "Israel" }, // Tel Aviv
    { rank: 42, name: "Cazoo Baskonia", lat: 42.8499, lng: -2.6715, country: "Spain" }, // Vitoria-Gasteiz
    { rank: 43, name: "Gran Canaria ", lat: 28.1248, lng: -15.4300, country: "Spain" }, // Las Palmas
    { rank: 44, name: "Houston Rockets", lat: 29.7604, lng: -95.3698, country: "USA" },
    { rank: 45, name: "San Antonio Spurs", lat: 29.4241, lng: -98.4936, country: "USA" },
    { rank: 46, name: "Umana Reyer Venezia", lat: 45.4408, lng: 12.3155, country: "Italy" }, // Venice
    { rank: 47, name: "FC Bayern München", lat: 48.1351, lng: 11.5820, country: "Germany" }, // Munich
    { rank: 48, name: "LDLC ASVEL Villeurbanne", lat: 45.7640, lng: 4.8357, country: "France" }, // Lyon area
    { rank: 49, name: "Lenovo Tenerife", lat: 28.4636, lng: -16.2518, country: "Spain" }, // Santa Cruz de Tenerife
    { rank: 50, name: "Valencia Basket", lat: 39.4699, lng: -0.3763, country: "Spain" }, // Valencia
    { rank: 51, name: "Pinar Karsiyaka", lat: 38.4237, lng: 27.1428, country: "Turkey" }, // Izmir
    { rank: 52, name: "Galatasaray Nef", lat: 41.0084, lng: 28.9784, country: "Turkey" }, // +0.0002 lat
    { rank: 53, name: "Unicaja", lat: 36.7196, lng: -4.4214, country: "Spain" }, // Malaga
    { rank: 54, name: "Joventut Badalona", lat: 41.4501, lng: 2.2471, country: "Spain" }, // Badalona
    { rank: 55, name: "Türk Telekom", lat: 39.9334, lng: 32.8597, country: "Turkey" }, // Ankara
    { rank: 56, name: "KK Partizan MozzartBet", lat: 44.7867, lng: 20.4489, country: "Serbia" }, // +0.0001 lat
    { rank: 57, name: "Monbus Obradoiro", lat: 42.8805, lng: -8.5456, country: "Spain" }, // Santiago de Compostela
    { rank: 58, name: "Bertram Yachts Derthona", lat: 44.9056, lng: 8.8742, country: "Italy" }, // Tortona
    { rank: 59, name: "London Lions", lat: 51.5074, lng: -0.1278, country: "United Kingdom" }, // London
    { rank: 60, name: "Besiktas", lat: 41.0085, lng: 28.9784, country: "Turkey" }, // +0.0003 lat
    { rank: 61, name: "ALBA Berlin", lat: 52.5200, lng: 13.4050, country: "Germany" }, // Berlin
    { rank: 62, name: "Germani Brescia", lat: 45.5416, lng: 10.2118, country: "Italy" }, // Brescia
    { rank: 63, name: "KK Cedevita Olimpija", lat: 46.0569, lng: 14.5058, country: "Slovenia" }, // Ljubljana
    { rank: 64, name: "Metropolitans 92", lat: 48.8566, lng: 2.3522, country: "France" }, // Paris area
    { rank: 65, name: "Fortitudo Bologna", lat: 44.4950, lng: 11.3426, country: "Italy" }, // +0.0001 lat
    { rank: 66, name: "Paris Basketball", lat: 48.8567, lng: 2.3522, country: "France" }, // +0.0001 lat
    { rank: 67, name: "UCLA Bruins", lat: 34.0524, lng: -118.2437, country: "USA" }, // +0.0002 lat
    { rank: 68, name: "SIG Strasbourg", lat: 48.5734, lng: 7.7521, country: "France" }, // Strasbourg
    { rank: 69, name: "Bahçesehir Koleji", lat: 41.0086, lng: 28.9784, country: "Turkey" }, // +0.0004 lat
    { rank: 70, name: "Gaziantep Basketbol", lat: 37.0662, lng: 37.3833, country: "Turkey" }, // Gaziantep
    { rank: 71, name: "Surne Bilbao Basket", lat: 43.2627, lng: -2.9253, country: "Spain" }, // Bilbao
    { rank: 72, name: "KK Buducnost VOLI", lat: 42.4304, lng: 19.2594, country: "Montenegro" }, // Podgorica
    { rank: 73, name: "Banco di Sardegna Sassari", lat: 40.7259, lng: 8.5547, country: "Italy" }, // Sassari
    { rank: 74, name: "Frutti Extra Bursaspor", lat: 40.1826, lng: 29.0665, country: "Turkey" }, // Bursa
    { rank: 75, name: "Tofas", lat: 40.1827, lng: 29.0665, country: "Turkey" }, // +0.0001 lat
    { rank: 76, name: "Unahotels Reggio Emilia", lat: 44.6989, lng: 10.6346, country: "Italy" }, // Reggio Emilia
    { rank: 77, name: "AEK BC", lat: 37.9757, lng: 23.7348, country: "Greece" }, // +0.0002 lat
    { rank: 78, name: "Rytas Vilnius", lat: 54.6872, lng: 25.2797, country: "Lithuania" }, // Vilnius
    { rank: 79, name: "Florida State Seminoles", lat: 30.4383, lng: -84.2807, country: "USA" }, // Tallahassee
    { rank: 80, name: "Casademont Zaragoza", lat: 41.6488, lng: -0.8890, country: "Spain" }, // Zaragoza
    { rank: 81, name: "Bnei Ofek Dist Herzliya", lat: 32.1624, lng: 34.8441, country: "Israel" }, // Herzliya
    { rank: 82, name: "Río Breogán", lat: 43.3623, lng: -8.4115, country: "Spain" }, // Lugo
    { rank: 83, name: "Bàsquet Girona", lat: 41.9794, lng: 2.8214, country: "Spain" }, // Girona
    { rank: 84, name: "Creighton Bluejays", lat: 41.2565, lng: -95.9345, country: "USA" }, // Omaha
    { rank: 85, name: "Hapoel Tel Aviv", lat: 32.0854, lng: 34.7818, country: "Israel" }, // +0.0001 lat
    { rank: 86, name: "Covirán Granada", lat: 37.1773, lng: -3.5986, country: "Spain" }, // Granada
    { rank: 87, name: "Baxi Manresa", lat: 41.7289, lng: 1.8262, country: "Spain" }, // Manresa
    { rank: 88, name: "U-BT Cluj-Napoca", lat: 46.7712, lng: 23.6236, country: "Romania" }, // Cluj-Napoca
    { rank: 89, name: "Darüssafaka", lat: 41.0087, lng: 28.9784, country: "Turkey" }, // +0.0005 lat
    { rank: 90, name: "ratiopharm Ulm", lat: 48.3974, lng: 9.9934, country: "Germany" }, // Ulm
    { rank: 91, name: "Real Betis", lat: 37.3886, lng: -5.9823, country: "Spain" }, // Seville
    { rank: 92, name: "Le Mans Sarthe Basket", lat: 48.0061, lng: 0.1996, country: "France" }, // Le Mans
    { rank: 93, name: "New Zealand Breakers", lat: -36.8485, lng: 174.7633, country: "New Zealand" }, // Auckland
    { rank: 94, name: "HAKRO Merlins Crailsheim", lat: 49.1340, lng: 10.0614, country: "Germany" }, // Crailsheim
    { rank: 95, name: "Telekom Baskets Bonn", lat: 50.7374, lng: 7.0982, country: "Germany" }, // Bonn
    { rank: 96, name: "Ironi Hai Motors Ness Ziona", lat: 31.9278, lng: 34.7925, country: "Israel" }, // Ness Ziona
    { rank: 97, name: "BC Wolves", lat: 54.6873, lng: 25.2797, country: "Lithuania" }, // +0.0001 lat
    { rank: 98, name: "Manisa Büyüksehir Belediyespor", lat: 38.6191, lng: 27.4289, country: "Turkey" }, // Manisa
    { rank: 99, name: "Vanoli Cremona", lat: 45.1335, lng: 10.0222, country: "Italy" }, // Cremona
    { rank: 100, name: "Carplus Fuenlabrada", lat: 40.2846, lng: -3.7989, country: "Spain" }, // Fuenlabrada
    { rank: 101, name: "Dolomiti Energia Trento", lat: 46.0748, lng: 11.1217, country: "Italy" }, // Trento
    { rank: 102, name: "Peristeri BC", lat: 37.9758, lng: 23.7348, country: "Greece" }, // +0.0003 lat
    { rank: 103, name: "Yukatel Merkezefendi", lat: 37.7765, lng: 29.0864, country: "Turkey" }, // Denizli
    { rank: 104, name: "BC Lietkabelis", lat: 55.7172, lng: 21.1175, country: "Lithuania" }, // Panevezys
    { rank: 105, name: "UCAM Murcia", lat: 37.9922, lng: -1.1307, country: "Spain" }, // Murcia
    { rank: 106, name: "Hapoel Holon", lat: 32.0167, lng: 34.7667, country: "Israel" }, // Holon
    { rank: 107, name: "Semt77 Yalovaspor", lat: 40.6564, lng: 29.2777, country: "Turkey" }, // Yalova
    { rank: 108, name: "Brose Bamberg", lat: 49.8988, lng: 10.9027, country: "Germany" }, // Bamberg
    { rank: 109, name: "Texas Longhorns", lat: 30.2672, lng: -97.7431, country: "USA" }, // Austin
    { rank: 110, name: "Lavrio Megabolt", lat: 37.7167, lng: 24.0667, country: "Greece" }, // Lavrio
    { rank: 111, name: "S.E. Melbourne Phoenix", lat: -37.8136, lng: 144.9631, country: "Australia" }, // Melbourne
    { rank: 112, name: "JL Bourg Basket", lat: 46.2044, lng: 5.2255, country: "France" }, // Bourg-en-Bresse
    { rank: 113, name: "Perth Wildcats", lat: -31.9505, lng: 115.8605, country: "Australia" }, // Perth
    { rank: 114, name: "Kansas Jayhawks", lat: 38.9717, lng: -95.2353, country: "USA" }, // Lawrence
    { rank: 115, name: "Hapoel B-Cure Laser Haifa", lat: 32.7940, lng: 34.9896, country: "Israel" }, // Haifa
    { rank: 116, name: "Ironi Kiryat Ata", lat: 32.8044, lng: 35.1044, country: "Israel" }, // Kiryat Ata
    { rank: 117, name: "Happy Casa Brindisi", lat: 40.6384, lng: 17.9411, country: "Italy" }, // Brindisi
    { rank: 118, name: "Aliaga Petkim", lat: 38.8007, lng: 26.9770, country: "Turkey" }, // Aliaga
    { rank: 119, name: "Prometey Slobozhanske", lat: 49.9935, lng: 36.2304, country: "Ukraine" }, // Kharkiv
    { rank: 120, name: "Duke Blue Devils", lat: 36.0014, lng: -78.9382, country: "USA" }, // Durham
    { rank: 121, name: "Michigan Wolverines", lat: 42.2780, lng: -83.7382, country: "USA" }, // Ann Arbor
    { rank: 122, name: "AYOS Konyaspor", lat: 37.8667, lng: 32.4833, country: "Turkey" }, // Konya
    { rank: 123, name: "Baylor Bears", lat: 31.5804, lng: -97.1114, country: "USA" }, // Waco
    { rank: 124, name: "Basketball Löwen Braunschweig", lat: 52.2689, lng: 10.5268, country: "Germany" }, // Braunschweig
    { rank: 125, name: "Virginia Cavaliers", lat: 38.0336, lng: -78.5080, country: "USA" }, // Charlottesville
    { rank: 126, name: "North Carolina Tar Heels", lat: 35.9049, lng: -79.0469, country: "USA" }, // Chapel Hill
    { rank: 127, name: "Niners Chemnitz", lat: 50.8278, lng: 12.9214, country: "Germany" }, // Chemnitz
    { rank: 128, name: "Illinois Fighting Illini", lat: 40.1020, lng: -88.2272, country: "USA" }, // Champaign
    { rank: 129, name: "BC CBET Jonava", lat: 55.0778, lng: 24.2803, country: "Lithuania" }, // Jonava
    { rank: 130, name: "Cholet Basket", lat: 47.0588, lng: -0.8710, country: "France" }, // Cholet
    { rank: 131, name: "GeVi Napoli Basket", lat: 40.8518, lng: 14.2681, country: "Italy" }, // Naples
    { rank: 132, name: "Indiana Hoosiers", lat: 39.1637, lng: -86.5264, country: "USA" }, // Bloomington
    { rank: 133, name: "JDA Dijon Basket", lat: 47.3220, lng: 5.0415, country: "France" }, // Dijon
    { rank: 134, name: "Notre Dame Fighting Irish", lat: 41.7001, lng: -86.2379, country: "USA" }, // South Bend
    { rank: 135, name: "SLUC Nancy Basket", lat: 48.6921, lng: 6.1844, country: "France" }, // Nancy
    { rank: 136, name: "Kentucky Wildcats", lat: 38.0406, lng: -84.5037, country: "USA" }, // Lexington
    { rank: 137, name: "EWE Baskets Oldenburg", lat: 53.1435, lng: 8.2146, country: "Germany" }, // Oldenburg
    { rank: 138, name: "NutriBullet Treviso", lat: 45.6669, lng: 12.2431, country: "Italy" }, // Treviso
    { rank: 139, name: "Adelaide 36ers", lat: -34.9285, lng: 138.6007, country: "Australia" }, // Adelaide
    { rank: 140, name: "USC Trojans", lat: 34.0525, lng: -118.2437, country: "USA" }, // +0.0003 lat
    { rank: 141, name: "Hapoel Yossi Avrahami Eilat", lat: 29.5569, lng: 34.9516, country: "Israel" }, // Eilat
    { rank: 142, name: "Promitheas Patras", lat: 38.2466, lng: 21.7346, country: "Greece" }, // Patras
    { rank: 143, name: "Chorale Roanne", lat: 46.0339, lng: 4.0644, country: "France" }, // Roanne
    { rank: 144, name: "AS Karditsas", lat: 39.3667, lng: 21.9211, country: "Greece" }, // Karditsa
    { rank: 145, name: "Givova Scafati", lat: 40.7583, lng: 14.5278, country: "Italy" }, // Scafati
    { rank: 146, name: "BC Utenos Juventus", lat: 55.4978, lng: 25.2669, country: "Lithuania" }, // Utena
    { rank: 147, name: "Miami Hurricanes", lat: 25.7618, lng: -80.1918, country: "USA" }, // +0.0001 lat
    { rank: 148, name: "Virginia Tech Hokies", lat: 37.2284, lng: -80.4234, country: "USA" }, // Blacksburg
    { rank: 149, name: "Arizona Wildcats", lat: 32.2226, lng: -110.9747, country: "USA" }, // Tucson
    { rank: 150, name: "Aris BC", lat: 40.6403, lng: 22.9439, country: "Greece" }, // Thessaloniki
    { rank: 151, name: "Clemson Tigers", lat: 34.6834, lng: -82.8374, country: "USA" }, // Clemson
    { rank: 152, name: "Illawarra Hawks", lat: -34.4244, lng: 150.8931, country: "Australia" }, // Wollongong
    { rank: 153, name: "NC State Wolfpack", lat: 35.7796, lng: -78.6382, country: "USA" }, // Raleigh
    { rank: 154, name: "Openjobmetis Varese", lat: 45.8205, lng: 8.8250, country: "Italy" }, // Varese
    { rank: 155, name: "Syracuse Orange", lat: 43.0481, lng: -76.1474, country: "USA" }, // Syracuse
    { rank: 156, name: "PAOK BC", lat: 40.6404, lng: 22.9439, country: "Greece" }, // +0.0001 lat
    { rank: 157, name: "MHP RIESEN Ludwigsburg", lat: 48.8941, lng: 9.1918, country: "Germany" }, // Ludwigsburg
    { rank: 158, name: "Villanova Wildcats", lat: 40.0379, lng: -75.3436, country: "USA" }, // Villanova
    { rank: 159, name: "Hapoel Bank Yahav Jerusalem", lat: 31.7683, lng: 35.2137, country: "Israel" }, // Jerusalem
    { rank: 160, name: "Maccabi Effie Capital Rishon LeZion", lat: 31.9730, lng: 34.7926, country: "Israel" }, // +0.0001 lng
    { rank: 161, name: "Veolia Towers Hamburg", lat: 53.5511, lng: 9.9937, country: "Germany" }, // Hamburg
    { rank: 162, name: "Carpegna Prosciutto Pesaro", lat: 43.9102, lng: 12.9133, country: "Italy" }, // Pesaro
    { rank: 163, name: "MLP Academics Heidelberg", lat: 49.3988, lng: 8.6724, country: "Germany" }, // Heidelberg
    { rank: 164, name: "Sydney Kings", lat: -33.8688, lng: 151.2093, country: "Australia" }, // Sydney
    { rank: 165, name: "Nanterre 92", lat: 48.8568, lng: 2.3522, country: "France" }, // +0.0002 lat
    { rank: 166, name: "Alabama Crimson Tide", lat: 33.2098, lng: -87.5692, country: "USA" }, // Tuscaloosa
    { rank: 167, name: "Fraport Skyliners", lat: 50.1109, lng: 8.6821, country: "Germany" }, // Frankfurt
    { rank: 168, name: "Arkansas Razorbacks", lat: 36.0625, lng: -94.1574, country: "USA" }, // Fayetteville
    { rank: 169, name: "Ohio State Buckeyes", lat: 39.9612, lng: -83.0007, country: "USA" }, // Columbus
    { rank: 170, name: "BCM Gravelines-Dunkerque", lat: 51.0342, lng: 2.3770, country: "France" }, // Dunkirk
    { rank: 171, name: "Auburn Tigers", lat: 32.6010, lng: -85.4887, country: "USA" }, // Auburn
    { rank: 172, name: "Filou Oostende", lat: 51.2172, lng: 2.9267, country: "Belgium" }, // Ostend
    { rank: 173, name: "KK Igokea m:tel", lat: 43.8486, lng: 18.3564, country: "Bosnia and Herzegovina" }, // Aleksandrovac
    { rank: 174, name: "Kolossos H Hotels", lat: 36.3932, lng: 25.4615, country: "Greece" }, // Rhodes
    { rank: 175, name: "Cairns Taipans", lat: -16.9186, lng: 145.7781, country: "Australia" }, // Cairns
    { rank: 176, name: "Minnesota Golden Gophers", lat: 44.9779, lng: -93.2650, country: "USA" }, // +0.0001 lat
    { rank: 177, name: "Syntainics MBC", lat: 51.4969, lng: 11.9695, country: "Germany" }, // Weissenfels
    { rank: 178, name: "Onvo Büyükçekmece Basketbol", lat: 41.0088, lng: 28.9784, country: "Turkey" }, // +0.0006 lat
    { rank: 179, name: "Hapoel Gilboa Galil", lat: 32.9375, lng: 35.5364, country: "Israel" }, // Galilee
    { rank: 180, name: "Pittsburgh Panthers", lat: 40.4406, lng: -79.9959, country: "USA" }, // Pittsburgh
    { rank: 181, name: "Boston College Eagles", lat: 42.3398, lng: -71.1663, country: "USA" }, // Chestnut Hill
    { rank: 182, name: "Rutgers Scarlet Knights", lat: 40.5008, lng: -74.4474, country: "USA" }, // New Brunswick
    { rank: 183, name: "Wake Forest Demon Deacons", lat: 36.1349, lng: -80.2772, country: "USA" }, // Winston-Salem
    { rank: 184, name: "Tasmania JackJumpers", lat: -42.8821, lng: 147.3272, country: "Australia" }, // Hobart
    { rank: 185, name: "BC Neptunas Klaipeda", lat: 55.7173, lng: 21.1175, country: "Lithuania" }, // +0.0001 lat
    { rank: 186, name: "Texas Tech Red Raiders", lat: 33.5779, lng: -101.8552, country: "USA" }, // Lubbock
    { rank: 187, name: "Georgia Tech Yellow Jackets", lat: 33.7756, lng: -84.3963, country: "USA" }, // Atlanta
    { rank: 188, name: "AA Quimsa", lat: -27.7833, lng: -64.2667, country: "Argentina" }, // Santiago del Estero
    { rank: 189, name: "Brisbane Bullets", lat: -27.4698, lng: 153.0251, country: "Australia" }, // Brisbane
    { rank: 190, name: "Hapoel Nofar Galil Elyon", lat: 32.9376, lng: 35.5364, country: "Israel" }, // +0.0001 lat
    { rank: 191, name: "Ionikos Basket", lat: 37.9473, lng: 23.6647, country: "Greece" }, // Nikaia
    { rank: 192, name: "medi bayreuth", lat: 49.9429, lng: 11.5753, country: "Germany" }, // Bayreuth
    { rank: 193, name: "Houston Cougars", lat: 29.7605, lng: -95.3698, country: "USA" }, // +0.0001 lat
    { rank: 194, name: "Hapoel Be'er Sheva", lat: 31.2530, lng: 34.7915, country: "Israel" }, // Be'er Sheva
    { rank: 195, name: "Gonzaga Bulldogs", lat: 47.6587, lng: -117.4260, country: "USA" }, // Spokane
    { rank: 196, name: "Hereda San Pablo Burgos", lat: 42.3404, lng: -3.7026, country: "Spain" }, // Burgos
    { rank: 197, name: "BC Siauliai", lat: 55.9349, lng: 23.3135, country: "Lithuania" }, // Siauliai
    { rank: 198, name: "WKS Slask Wroclaw", lat: 51.1079, lng: 17.0385, country: "Poland" }, // Wroclaw
    { rank: 199, name: "Melbourne United", lat: -37.8137, lng: 144.9631, country: "Australia" }, // +0.0001 lat
    { rank: 200, name: "Oregon Ducks", lat: 44.0505, lng: -123.0951, country: "USA" }, // Eugene
    { rank: 201, name: "Florida Gators", lat: 29.6516, lng: -82.3248, country: "USA" }, // Gainesville
    { rank: 202, name: "Wisconsin Badgers", lat: 43.0722, lng: -89.4008, country: "USA" }, // Madison
    { rank: 203, name: "South Carolina Gamecocks", lat: 34.0007, lng: -81.0348, country: "USA" }, // Columbia
    { rank: 204, name: "Pallacanestro Trieste", lat: 45.6495, lng: 13.7768, country: "Italy" }, // Trieste
    { rank: 205, name: "West Virginia Mountaineers", lat: 39.6295, lng: -79.9559, country: "USA" }, // Morgantown
    { rank: 206, name: "Tennessee Volunteers", lat: 35.9544, lng: -83.9295, country: "USA" }, // Knoxville
    { rank: 207, name: "Tezenis Verona", lat: 45.4384, lng: 10.9916, country: "Italy" }, // Verona
    { rank: 208, name: "Iowa Hawkeyes", lat: 41.6611, lng: -91.5302, country: "USA" }, // Iowa City
    { rank: 209, name: "Purdue Boilermakers", lat: 40.4237, lng: -86.9212, country: "USA" }, // West Lafayette
    { rank: 210, name: "MoraBanc Andorra", lat: 42.5063, lng: 1.5218, country: "Andorra" }, // Andorra la Vella
    { rank: 211, name: "Limoges CSP", lat: 45.8336, lng: 1.2611, country: "France" }, // Limoges
    { rank: 212, name: "LSU Tigers", lat: 30.4515, lng: -91.1871, country: "USA" }, // Baton Rouge
    { rank: 213, name: "Oklahoma Sooners", lat: 35.2226, lng: -97.4395, country: "USA" }, // Norman
    { rank: 214, name: "Louisville Cardinals", lat: 38.2527, lng: -85.7585, country: "USA" }, // Louisville
    { rank: 215, name: "KK Split", lat: 43.5081, lng: 16.4402, country: "Croatia" }, // Split
    { rank: 216, name: "Oklahoma State Cowboys", lat: 36.1156, lng: -97.0583, country: "USA" }, // Stillwater
    { rank: 217, name: "Texas A&M Aggies", lat: 30.6280, lng: -96.3344, country: "USA" }, // College Station
    { rank: 218, name: "Okapi Aalst", lat: 50.9365, lng: 4.0435, country: "Belgium" }, // Aalst
    { rank: 219, name: "Ole Miss Rebels", lat: 34.3664, lng: -89.5348, country: "USA" }, // Oxford
    { rank: 220, name: "EB Pau-Lacq-Orthez", lat: 43.2951, lng: -0.3707, country: "France" }, // Pau
    { rank: 221, name: "Arizona State Sun Devils", lat: 33.4255, lng: -111.9400, country: "USA" }, // Tempe
    { rank: 222, name: "BC Pieno Zvaigzdes", lat: 55.9169, lng: 24.1638, country: "Lithuania" }, // Pasvalys
    { rank: 223, name: "KK Zadar", lat: 44.1194, lng: 15.2314, country: "Croatia" }, // Zadar
    { rank: 224, name: "TCU Horned Frogs", lat: 32.7081, lng: -97.3731, country: "USA" }, // Fort Worth
    { rank: 225, name: "Würzburg Baskets", lat: 49.7913, lng: 9.9534, country: "Germany" }, // Würzburg
    { rank: 226, name: "KK Mega MIS", lat: 44.7868, lng: 20.4489, country: "Serbia" }, // +0.0002 lat
    { rank: 227, name: "Northwestern Wildcats", lat: 42.0534, lng: -87.6751, country: "USA" }, // Evanston
    { rank: 228, name: "Nebraska Cornhuskers", lat: 40.8136, lng: -96.7026, country: "USA" }, // Lincoln
    { rank: 229, name: "Missouri Tigers", lat: 38.9517, lng: -92.3341, country: "USA" }, // Columbia
    { rank: 230, name: "Stanford Cardinal", lat: 37.4419, lng: -122.1430, country: "USA" }, // Stanford
    { rank: 231, name: "ESSM Le Portel", lat: 50.7133, lng: 1.5667, country: "France" }, // Le Portel
    { rank: 232, name: "BG Göttingen", lat: 51.5412, lng: 9.9158, country: "Germany" }, // Göttingen
    { rank: 233, name: "UConn Huskies", lat: 41.8077, lng: -72.2540, country: "USA" }, // Storrs
    { rank: 234, name: "Mississippi State Bulldogs", lat: 33.4735, lng: -88.7820, country: "USA" }, // Starkville
    { rank: 235, name: "Heroes Den Bosch", lat: 51.6978, lng: 5.3037, country: "Netherlands" }, // Den Bosch
    { rank: 236, name: "Vanderbilt Commodores", lat: 36.1447, lng: -86.8027, country: "USA" }, // Nashville
    { rank: 237, name: "Instituto de Córdoba", lat: -31.4201, lng: -64.1888, country: "Argentina" }, // Córdoba
    { rank: 238, name: "Kangoeroes Basket Mechelen", lat: 51.0259, lng: 4.4777, country: "Belgium" }, // Mechelen
    { rank: 239, name: "Iowa State Cyclones", lat: 42.0308, lng: -93.6319, country: "USA" }, // Ames
    { rank: 240, name: "Kansas State Wildcats", lat: 39.1836, lng: -96.5717, country: "USA" }, // Manhattan
    { rank: 241, name: "Maryland Terrapins", lat: 38.9869, lng: -76.9426, country: "USA" }, // College Park
    { rank: 242, name: "Belfius Mons-Hainaut", lat: 50.4542, lng: 3.9565, country: "Belgium" }, // Mons
    { rank: 243, name: "Xavier Musketeers", lat: 39.1612, lng: -84.4569, country: "USA" }, // Cincinnati
    { rank: 244, name: "Spirou Basket", lat: 50.4058, lng: 4.4464, country: "Belgium" }, // Charleroi
    { rank: 245, name: "Feyenoord Basketball", lat: 51.9225, lng: 4.4792, country: "Netherlands" }, // Rotterdam
    { rank: 246, name: "ADA Blois", lat: 47.5980, lng: 1.3348, country: "France" }, // Blois
    { rank: 247, name: "Maccabi Ashdod", lat: 31.7948, lng: 34.6553, country: "Israel" }, // Ashdod
    { rank: 248, name: "Penn State Nittany Lions", lat: 40.7982, lng: -77.8599, country: "USA" }, // University Park
    { rank: 249, name: "Landstede Hammers Zwolle", lat: 52.5168, lng: 6.0830, country: "Netherlands" }, // Zwolle
    { rank: 250, name: "Circus Brussels Basketball", lat: 50.8503, lng: 4.3517, country: "Belgium" }, // Brussels
    { rank: 251, name: "Memphis Tigers", lat: 35.1496, lng: -90.0490, country: "USA" }, // +0.0001 lat
    { rank: 252, name: "Providence Friars", lat: 41.8240, lng: -71.4128, country: "USA" }, // Providence
    { rank: 253, name: "Colorado Buffaloes", lat: 40.0150, lng: -105.2705, country: "USA" }, // Boulder
    { rank: 254, name: "Michigan State Spartans", lat: 42.7335, lng: -84.5467, country: "USA" }, // East Lansing
    { rank: 255, name: "ICG Força Lleida", lat: 41.6176, lng: 0.6200, country: "Spain" }, // Lleida
    { rank: 256, name: "Stella Artois Leuven Bears", lat: 50.8798, lng: 4.7005, country: "Belgium" }, // Leuven
    { rank: 257, name: "Cincinnati Bearcats", lat: 39.1031, lng: -84.5120, country: "USA" }, // Cincinnati
    { rank: 258, name: "Georgia Bulldogs", lat: 33.9519, lng: -83.3576, country: "USA" }, // Athens
    { rank: 259, name: "KK Borac Mozzart", lat: 44.1953, lng: 17.9051, country: "Bosnia and Herzegovina" }, // Banja Luka
    { rank: 260, name: "St. John's Red Storm", lat: 40.7282, lng: -73.7949, country: "USA" }, // Queens
    { rank: 261, name: "Dayton Flyers", lat: 39.7589, lng: -84.1916, country: "USA" }, // Dayton
    { rank: 262, name: "Telenet Giants Antwerp", lat: 51.2194, lng: 4.4025, country: "Belgium" }, // Antwerp
    { rank: 263, name: "Rostock Seawolves", lat: 54.0887, lng: 12.1476, country: "Germany" }, // Rostock
    { rank: 264, name: "Saint Louis Billikens", lat: 38.6270, lng: -90.1994, country: "USA" }, // St. Louis
    { rank: 265, name: "KK Mornar-Barsko Zlato", lat: 42.0956, lng: 19.1267, country: "Montenegro" }, // Bar
    { rank: 266, name: "Utah Utes", lat: 40.7609, lng: -111.8910, country: "USA" }, // +0.0001 lat
    { rank: 267, name: "Élan Chalon", lat: 46.7833, lng: 4.8333, country: "France" }, // Chalon-sur-Saône
    { rank: 268, name: "Tulane Green Wave", lat: 29.9512, lng: -90.0715, country: "USA" }, // +0.0001 lat
    { rank: 269, name: "Washington Huskies", lat: 47.6062, lng: -122.3321, country: "USA" }, // Seattle
    { rank: 270, name: "San Diego State Aztecs", lat: 32.7157, lng: -117.1611, country: "USA" }, // San Diego
    { rank: 271, name: "Apollon Patras", lat: 38.2467, lng: 21.7346, country: "Greece" }, // +0.0001 lat
    { rank: 272, name: "Orléans Loiret Basket", lat: 47.9029, lng: 1.9093, country: "France" }, // Orléans
    { rank: 273, name: "California Golden Bears", lat: 37.8715, lng: -122.2730, country: "USA" }, // Berkeley
    { rank: 274, name: "Wyoming Cowboys", lat: 41.3114, lng: -105.5911, country: "USA" }, // Laramie
    { rank: 275, name: "Hubo Limburg United", lat: 50.8798, lng: 5.6926, country: "Belgium" }, // Hasselt
    { rank: 276, name: "SMU Mustangs", lat: 32.8412, lng: -96.7834, country: "USA" }, // Dallas
    { rank: 277, name: "BYU Cougars", lat: 40.2518, lng: -111.6493, country: "USA" }, // Provo
    { rank: 278, name: "Donar Groningen", lat: 53.2194, lng: 6.5665, country: "Netherlands" }, // Groningen
    { rank: 279, name: "Oregon State Beavers", lat: 44.5645, lng: -123.2620, country: "USA" }, // Corvallis
    { rank: 280, name: "San Diego Toreros", lat: 32.7158, lng: -117.1611, country: "USA" }, // +0.0001 lat
    { rank: 281, name: "East Carolina Pirates", lat: 35.6120, lng: -77.3666, country: "USA" }, // Greenville
    { rank: 282, name: "Den Helder Suns", lat: 52.9537, lng: 4.7722, country: "Netherlands" }, // Den Helder
    { rank: 283, name: "Saint Mary's Gaels", lat: 37.8272, lng: -122.2714, country: "USA" }, // Moraga
    { rank: 284, name: "DePaul Blue Demons", lat: 41.8782, lng: -87.6298, country: "USA" }, // +0.0001 lat
    { rank: 285, name: "BC Labas GAS Prienai", lat: 54.6333, lng: 23.9500, country: "Lithuania" }, // Prienai
    { rank: 286, name: "Guuk Gipuzkoa Basket", lat: 43.2630, lng: -2.9350, country: "Spain" }, // San Sebastián
    { rank: 287, name: "VCU Rams", lat: 37.5407, lng: -77.4360, country: "USA" }, // Richmond
    { rank: 288, name: "BC Gargzdai", lat: 55.7172, lng: 21.3950, country: "Lithuania" }, // Gargždai
    { rank: 289, name: "Zunder Palencia", lat: 42.0096, lng: -4.5284, country: "Spain" }, // Palencia
    { rank: 290, name: "Aris Leeuwarden", lat: 53.2012, lng: 5.7999, country: "Netherlands" }, // Leeuwarden
    { rank: 291, name: "Temple Owls", lat: 39.9526, lng: -75.1652, country: "USA" }, // Philadelphia
    { rank: 292, name: "BC Nevezis Kedainiai", lat: 55.2833, lng: 23.9833, country: "Lithuania" }, // Kėdainiai
    { rank: 293, name: "KK FMP Meridian", lat: 44.7869, lng: 20.4489, country: "Serbia" }, // +0.0003 lat
    { rank: 294, name: "Washington State Cougars", lat: 46.7298, lng: -117.1817, country: "USA" }, // Pullman
    { rank: 295, name: "Portland Pilots", lat: 45.5153, lng: -122.6784, country: "USA" }, // +0.0001 lat
    { rank: 296, name: "RSW Liège Basket", lat: 50.6326, lng: 5.5797, country: "Belgium" }, // Liège
    { rank: 297, name: "Alliance Sport Alsace", lat: 48.5735, lng: 7.7521, country: "France" }, // +0.0001 lat
    { rank: 298, name: "CS San Martín Corrientes", lat: -27.4692, lng: -58.8306, country: "Argentina" }, // Corrientes
    { rank: 299, name: "Movistar Estudiantes", lat: 40.4169, lng: -3.7038, country: "Spain" }, // +0.0001 lat
    { rank: 300, name: "Georgetown Hoyas", lat: 38.9073, lng: -77.0369, country: "USA" }, // +0.0001 lat
    { rank: 301, name: "ZZ Leiden", lat: 52.1601, lng: 4.4970, country: "Netherlands" }, // Leiden
    { rank: 302, name: "Fos Provence Basket", lat: 43.4378, lng: 4.9474, country: "France" }, // Fos-sur-Mer
    { rank: 303, name: "Colorado State Rams", lat: 40.5853, lng: -105.0844, country: "USA" }, // Fort Collins
    { rank: 304, name: "Florida Gulf Coast Eagles", lat: 26.4619, lng: -81.7717, country: "USA" }, // Fort Myers
    { rank: 305, name: "Marquette Golden Eagles", lat: 43.0390, lng: -87.9065, country: "USA" }, // +0.0001 lat
    { rank: 306, name: "KK Cibona", lat: 45.8150, lng: 15.9819, country: "Croatia" }, // Zagreb
    { rank: 307, name: "Tulsa Golden Hurricane", lat: 36.1540, lng: -95.9928, country: "USA" }, // Tulsa
    { rank: 308, name: "Butler Bulldogs", lat: 39.7685, lng: -86.1581, country: "USA" }, // +0.0001 lat
    { rank: 309, name: "CA Boca Juniors", lat: -34.6037, lng: -58.3816, country: "Argentina" }, // Buenos Aires
    { rank: 310, name: "Seton Hall Pirates", lat: 40.7429, lng: -74.2473, country: "USA" }, // South Orange
    { rank: 311, name: "Pepperdine Waves", lat: 34.0359, lng: -118.7108, country: "USA" }, // Malibu
    { rank: 312, name: "San Francisco Dons", lat: 37.7749, lng: -122.4194, country: "USA" },
    { rank: 313, name: "Nevada Wolf Pack", lat: 39.5296, lng: -119.8138, country: "USA" }, // Reno
    { rank: 314, name: "Lipscomb Bisons", lat: 36.1627, lng: -86.7816, country: "USA" }, // Nashville
    { rank: 315, name: "UAB Blazers", lat: 33.5186, lng: -86.8104, country: "USA" }, // Birmingham
    { rank: 316, name: "Yoast United", lat: 52.1602, lng: 4.4970, country: "Netherlands" }, // +0.0001 lat
    { rank: 317, name: "New Mexico Lobos", lat: 35.0844, lng: -106.6504, country: "USA" }, // Albuquerque
    { rank: 318, name: "CB Almansa con Afanion", lat: 38.8725, lng: -1.0969, country: "Spain" }, // Almansa
    { rank: 319, name: "C.R. Flamengo", lat: -22.9068, lng: -43.1729, country: "Brazil" }, // Rio de Janeiro
    { rank: 320, name: "Apollo Amsterdam", lat: 52.3676, lng: 4.9041, country: "Netherlands" }, // Amsterdam
    { rank: 321, name: "CA Riachuelo", lat: -34.6358, lng: -58.4916, country: "Argentina" }, // Buenos Aires
    { rank: 322, name: "Béliers de Kemper", lat: 48.0181, lng: -4.0976, country: "France" }, // Quimper
    { rank: 323, name: "UNLV Rebels", lat: 36.1699, lng: -115.1398, country: "USA" }, // Las Vegas
    { rank: 324, name: "Richmond Spiders", lat: 37.5408, lng: -77.4360, country: "USA" }, // +0.0001 lat
    { rank: 325, name: "Vaqueros de Bayamón", lat: 18.3965, lng: -66.1615, country: "Puerto Rico" }, // Bayamón
    { rank: 326, name: "Santa Clara Broncos", lat: 37.3541, lng: -121.9552, country: "USA" }, // Santa Clara
    { rank: 327, name: "Melilla Sport Capital", lat: 35.2919, lng: -2.9381, country: "Spain" }, // Melilla
    { rank: 328, name: "KK SC Derby", lat: 44.7666, lng: 20.4489, country: "Serbia" }, // Belgrade
    { rank: 329, name: "AO Agriniou", lat: 38.6211, lng: 21.4082, country: "Greece" }, // Agrinio
    { rank: 330, name: "Saint-Vallier BD", lat: 45.1830, lng: 4.8167, country: "France" }, // Saint-Vallier
    { rank: 331, name: "Gimnasia y Esgrima de Comodoro", lat: -45.8667, lng: -67.5000, country: "Argentina" }, // Comodoro Rivadavia
    { rank: 332, name: "Davidson Wildcats", lat: 35.5018, lng: -80.8414, country: "USA" }, // Davidson
    { rank: 333, name: "Iraklis Thessaloniki", lat: 40.6405, lng: 22.9439, country: "Greece" }, // +0.0002 lat
    { rank: 334, name: "Utah State Aggies", lat: 41.7370, lng: -111.8338, country: "USA" }, // Logan
    { rank: 335, name: "Western Kentucky Hilltoppers", lat: 36.9954, lng: -86.4669, country: "USA" }, // Bowling Green
    { rank: 336, name: "Champagne Châlons-Reims Basket", lat: 49.2583, lng: 4.0317, country: "France" }, // Reims
    { rank: 337, name: "Boise State Broncos", lat: 43.6150, lng: -116.2023, country: "USA" }, // Boise
    { rank: 338, name: "UCF Knights", lat: 28.5384, lng: -81.3792, country: "USA" }, // +0.0001 lat
    { rank: 339, name: "South Florida Bulls", lat: 27.7663, lng: -82.6404, country: "USA" }, // Tampa
    { rank: 340, name: "KK Krka", lat: 45.7597, lng: 15.1516, country: "Slovenia" }, // Novo Mesto
    { rank: 341, name: "Liberty Flames", lat: 37.3520, lng: -79.1728, country: "USA" }, // Lynchburg
    { rank: 342, name: "North Alabama Lions", lat: 34.7304, lng: -87.6774, country: "USA" }, // Florence
    { rank: 343, name: "Étoile Angers Basket", lat: 47.4784, lng: -0.5632, country: "France" }, // Angers
    { rank: 344, name: "HLA Alicante", lat: 38.3452, lng: -0.4810, country: "Spain" }, // Alicante
    { rank: 345, name: "Nantes Basket Hermine", lat: 47.2184, lng: -1.5536, country: "France" }, // Nantes
    { rank: 346, name: "Wichita State Shockers", lat: 37.6872, lng: -97.3301, country: "USA" }, // Wichita
    { rank: 347, name: "Bryant Bulldogs", lat: 41.7658, lng: -71.5135, country: "USA" }, // Smithfield
    { rank: 348, name: "Panerythraikos BC", lat: 37.9474, lng: 23.6647, country: "Greece" }, // +0.0001 lat
    { rank: 349, name: "TAU Castelló", lat: 39.9864, lng: -0.0513, country: "Spain" }, // Castellón
    { rank: 350, name: "Ermis Schimatari", lat: 38.3333, lng: 23.5500, country: "Greece" }, // Schimatari
    { rank: 351, name: "KK Gorica", lat: 45.9553, lng: 13.6363, country: "Slovenia" }, // Nova Gorica
    { rank: 352, name: "Middle Tennessee Blue Raiders", lat: 35.8456, lng: -86.3903, country: "USA" }, // Murfreesboro
    { rank: 353, name: "Eastern Michigan Eagles", lat: 42.2411, lng: -83.6130, country: "USA" }, // Ypsilanti
    { rank: 354, name: "Antibes Sharks", lat: 43.5809, lng: 7.1251, country: "France" }, // Antibes
    { rank: 355, name: "North Florida Ospreys", lat: 30.3322, lng: -81.6557, country: "USA" }, // Jacksonville
    { rank: 356, name: "San José State Spartans", lat: 37.3382, lng: -121.8863, country: "USA" }, // San José
    { rank: 357, name: "Saint Joseph's Hawks", lat: 39.9527, lng: -75.1652, country: "USA" }, // +0.0001 lat
    { rank: 358, name: "Boulazac Basket Dordogne", lat: 45.1833, lng: 0.7167, country: "France" }, // Boulazac
    { rank: 359, name: "Duquesne Dukes", lat: 40.4407, lng: -79.9959, country: "USA" }, // +0.0001 lat
    { rank: 360, name: "Leyma Coruña", lat: 43.3624, lng: -8.4115, country: "Spain" }, // +0.0001 lat
    { rank: 361, name: "Toledo Rockets", lat: 41.6528, lng: -83.5379, country: "USA" }, // Toledo
    { rank: 362, name: "George Washington Colonials", lat: 38.9074, lng: -77.0369, country: "USA" }, // +0.0002 lat
    { rank: 363, name: "Stetson Hatters", lat: 29.0536, lng: -81.3003, country: "USA" }, // DeLand
    { rank: 364, name: "Central Arkansas Bears", lat: 35.0926, lng: -92.4426, country: "USA" }, // Conway
    { rank: 365, name: "C.A. Aguada", lat: -34.8844, lng: -56.0181, country: "Uruguay" }, // Montevideo
    { rank: 366, name: "Aix-Maurienne Savoie Basket", lat: 45.5647, lng: 6.3235, country: "France" }, // Aix-les-Bains
    { rank: 367, name: "Cáceres Patrimonio de la Humanidad", lat: 39.4753, lng: -6.3724, country: "Spain" }, // Cáceres
    { rank: 368, name: "Stade Rochelais", lat: 46.1603, lng: -1.1511, country: "France" }, // La Rochelle
    { rank: 369, name: "Basketball Academie Limburg", lat: 50.8799, lng: 5.6926, country: "Belgium" }, // +0.0001 lat
    { rank: 370, name: "Maroussi BC", lat: 38.0500, lng: 23.8064, country: "Greece" }, // Maroussi
    { rank: 371, name: "KK MZT Skopje Aerodrom ", lat: 41.9973, lng: 21.4280, country: "North Macedonia" }, // Skopje
    { rank: 372, name: "George Mason Patriots", lat: 38.8462, lng: -77.3063, country: "USA" }, // Fairfax
    { rank: 373, name: "Pacific Tigers", lat: 37.9816, lng: -121.3107, country: "USA" }, // Stockton
    { rank: 374, name: "Medipolis SC Jena", lat: 50.9278, lng: 11.5897, country: "Germany" }, // Jena
    { rank: 375, name: "Club Regatas Corrientes", lat: -27.4693, lng: -58.8306, country: "Argentina" }, // +0.0001 lat
    { rank: 376, name: "St. Bonaventure Bonnies", lat: 42.0837, lng: -78.4894, country: "USA" }, // St. Bonaventure
    { rank: 377, name: "Fresno State Bulldogs", lat: 36.7378, lng: -119.7871, country: "USA" }, // Fresno
    { rank: 378, name: "Aias Evosmou", lat: 40.6667, lng: 22.9500, country: "Greece" }, // Evosmos
    { rank: 379, name: "Valparaiso Beacons", lat: 41.4789, lng: -87.0467, country: "USA" }, // Valparaiso
    { rank: 380, name: "Kennesaw State Owls", lat: 34.0234, lng: -84.5816, country: "USA" }, // Kennesaw
    { rank: 381, name: "Loyola Marymount Lions", lat: 34.0526, lng: -118.4183, country: "USA" }, // +0.0004 lat
    { rank: 382, name: "Grupo Alega Cantabria CBT", lat: 43.4623, lng: -3.8100, country: "Spain" }, // Santander
    { rank: 383, name: "Detroit Mercy Titans", lat: 42.3315, lng: -83.0458, country: "USA" }, // +0.0001 lat
    { rank: 384, name: "UMass Lowell River Hawks", lat: 42.6334, lng: -71.3162, country: "USA" }, // Lowell
    { rank: 385, name: "Fordham Rams", lat: 40.8448, lng: -73.8648, country: "USA" }, // Bronx
    { rank: 386, name: "UMBC Retrievers", lat: 39.2540, lng: -76.7093, country: "USA" }, // Baltimore
    { rank: 387, name: "Kent State Golden Flashes", lat: 41.1454, lng: -81.3440, country: "USA" }, // Kent
    { rank: 388, name: "CA San Lorenzo", lat: -34.6692, lng: -58.5348, country: "Argentina" }, // Buenos Aires
    { rank: 389, name: "Boston University Terriers", lat: 42.3602, lng: -71.0589, country: "USA" }, // +0.0001 lat
    { rank: 390, name: "Ball State Cardinals", lat: 40.1934, lng: -85.3887, country: "USA" }, // Muncie
    { rank: 391, name: "Club Ourense Baloncesto", lat: 42.3370, lng: -7.8642, country: "Spain" }, // Ourense
    { rank: 392, name: "La Salle Explorers", lat: 39.9528, lng: -75.1652, country: "USA" }, // +0.0002 lat
    { rank: 393, name: "Jacksonville State Gamecocks", lat: 33.8205, lng: -85.7686, country: "USA" }, // Jacksonville
    { rank: 394, name: "Tennessee Tech Golden Eagles", lat: 36.1614, lng: -85.4808, country: "USA" }, // Cookeville
    { rank: 395, name: "Joniskio Delikatesas", lat: 56.2394, lng: 23.6161, country: "Lithuania" }, // Joniškis
    { rank: 396, name: "Bowling Green Falcons", lat: 41.3748, lng: -83.6582, country: "USA" }, // Bowling Green
    { rank: 397, name: "CD Colegio Los Leones", lat: -33.4489, lng: -70.6693, country: "Chile" }, // Santiago
    { rank: 398, name: "Rhode Island Rams", lat: 41.8241, lng: -71.4128, country: "USA" }, // +0.0001 lat
    { rank: 399, name: "Missouri State Bears", lat: 37.2090, lng: -93.2923, country: "USA" }, // Springfield
    { rank: 400, name: "Southern Illinois Salukis", lat: 37.7172, lng: -89.2167, country: "USA" }, // Carbondale
    { rank: 401, name: "ALM Évreux Basket", lat: 49.0244, lng: 1.1508, country: "France" }, // Évreux
    { rank: 402, name: "AO Tritonas", lat: 37.9475, lng: 23.6647, country: "Greece" }, // +0.0002 lat
    { rank: 403, name: "Northern Kentucky Norse", lat: 39.0458, lng: -84.5120, country: "USA" }, // Highland Heights
    { rank: 404, name: "CA Peñarol", lat: -34.8845, lng: -56.0181, country: "Uruguay" }, // +0.0001 lat
    { rank: 405, name: "Psychiko BC", lat: 37.9839, lng: 23.7794, country: "Greece" }, // Psychiko
    { rank: 406, name: "Marshall Thundering Herd", lat: 38.4231, lng: -82.4387, country: "USA" }, // Huntington
    { rank: 407, name: "Drake Bulldogs", lat: 41.5868, lng: -93.6250, country: "USA" }, // Des Moines
    { rank: 408, name: "Maine Black Bears", lat: 44.9778, lng: -68.8017, country: "USA" }, // Orono
    { rank: 409, name: "GS Eleftheroupoli Kavalas", lat: 41.0556, lng: 24.4056, country: "Greece" }, // Kavala
    { rank: 410, name: "Morehead State Eagles", lat: 38.1867, lng: -83.4327, country: "USA" }, // Morehead
    { rank: 411, name: "Illinois State Redbirds", lat: 40.5142, lng: -88.9906, country: "USA" }, // Normal
    { rank: 412, name: "Eastern Kentucky Colonels", lat: 37.7347, lng: -84.2733, country: "USA" }, // Richmond
    { rank: 413, name: "Hofstra Pride", lat: 40.7283, lng: -73.5985, country: "USA" }, // +0.0001 lat
    { rank: 414, name: "Oberá Tenis Club", lat: -27.4864, lng: -55.1192, country: "Argentina" }, // Oberá
    { rank: 415, name: "Belmont Bruins", lat: 36.1448, lng: -86.8027, country: "USA" }, // +0.0001 lat
    { rank: 416, name: "Wright State Raiders", lat: 39.7590, lng: -84.1916, country: "USA" }, // +0.0001 lat
    { rank: 417, name: "Northern Iowa Panthers", lat: 42.5078, lng: -92.4453, country: "USA" }, // Cedar Falls
    { rank: 418, name: "UEMC Real Valladolid", lat: 41.6528, lng: -4.7245, country: "Spain" }, // Valladolid
    { rank: 419, name: "BC Vytis", lat: 54.9000, lng: 23.9167, country: "Lithuania" }, // Sakiai
    { rank: 420, name: "Oakland Golden Grizzlies", lat: 42.6334, lng: -83.2148, country: "USA" }, // Rochester
    { rank: 421, name: "UT Martin Skyhawks", lat: 36.2896, lng: -88.8506, country: "USA" }, // Martin
    { rank: 422, name: "Ohio Bobcats", lat: 39.3292, lng: -82.1013, country: "USA" }, // Athens
    { rank: 423, name: "Air Force Falcons", lat: 38.9972, lng: -104.8586, country: "USA" }, // Colorado Springs
    { rank: 424, name: "KK Helios Suns", lat: 46.2396, lng: 15.2677, country: "Slovenia" }, // Domžale
    { rank: 425, name: "Northern Illinois Huskies", lat: 41.9278, lng: -88.6479, country: "USA" }, // DeKalb
    { rank: 426, name: "Seattle U Redhawks", lat: 47.6063, lng: -122.3321, country: "USA" }, // +0.0001 lat
    { rank: 427, name: "Lille Métropole Basket", lat: 50.6292, lng: 3.0573, country: "France" }, // Lille
    { rank: 428, name: "Club Comunicaciones", lat: -34.6038, lng: -58.3816, country: "Argentina" }, // +0.0001 lat
    { rank: 429, name: "NE Megaridas", lat: 38.0000, lng: 23.0833, country: "Greece" }, // Megara
    { rank: 430, name: "Bradley Braves", lat: 40.6936, lng: -89.5889, country: "USA" }, // Peoria
    { rank: 431, name: "Evansville Purple Aces", lat: 37.9716, lng: -87.5711, country: "USA" }, // Evansville
    { rank: 432, name: "Indiana State Sycamores", lat: 39.4667, lng: -87.4139, country: "USA" }, // Terre Haute
    { rank: 433, name: "Purdue Fort Wayne Mastodons", lat: 41.0793, lng: -85.1394, country: "USA" }, // Fort Wayne
    { rank: 434, name: "UMass Minutemen", lat: 42.3868, lng: -72.5301, country: "USA" }, // Amherst
    { rank: 435, name: "CD Universidad de Concepción", lat: -36.8201, lng: -73.0444, country: "Chile" }, // Concepción
    { rank: 436, name: "Old Dominion Monarchs", lat: 36.8468, lng: -76.2852, country: "USA" }, // Norfolk
    { rank: 437, name: "Brown Bears", lat: 41.8242, lng: -71.4128, country: "USA" }, // +0.0002 lat
    { rank: 438, name: "Club Ferro Carril Oeste", lat: -34.5833, lng: -58.5167, country: "Argentina" }, // Buenos Aires
    { rank: 439, name: "New Hampshire Wildcats", lat: 43.2081, lng: -71.5376, country: "USA" }, // Durham
    { rank: 440, name: "Loyola Chicago Ramblers", lat: 41.8783, lng: -87.6298, country: "USA" }, // +0.0002 lat
    { rank: 441, name: "Youngstown State Penguins", lat: 41.1040, lng: -80.6495, country: "USA" }, // Youngstown
    { rank: 442, name: "Murray State Racers", lat: 36.6103, lng: -88.3148, country: "USA" }, // Murray
    { rank: 443, name: "BC Telsiai", lat: 55.9811, lng: 22.2475, country: "Lithuania" }, // Telšiai
    { rank: 444, name: "NEA Filadelfeia", lat: 37.9476, lng: 23.6647, country: "Greece" }, // +0.0003 lat
    { rank: 445, name: "CSU Bakersfield Roadrunners", lat: 35.3733, lng: -119.0187, country: "USA" }, // Bakersfield
    { rank: 446, name: "Tennessee State Tigers", lat: 36.1628, lng: -86.7816, country: "USA" }, // +0.0001 lat
    { rank: 447, name: "UIC Flames", lat: 41.8784, lng: -87.6298, country: "USA" }, // +0.0003 lat
    { rank: 448, name: "BC Zalgiris Kaunas 2", lat: 54.8986, lng: 23.9036, country: "Lithuania" }, // +0.0001 lat
    { rank: 449, name: "HKK Siroki", lat: 43.3833, lng: 17.5833, country: "Bosnia and Herzegovina" }, // Široki Brijeg
    { rank: 450, name: "Chattanooga Mocs", lat: 35.0456, lng: -85.3097, country: "USA" }, // Chattanooga
    { rank: 451, name: "BC Silute", lat: 55.3500, lng: 21.4833, country: "Lithuania" }, // Šilutė
    { rank: 452, name: "Trikoupis Messolonghi BC", lat: 38.3667, lng: 21.4306, country: "Greece" }, // Messolonghi
    { rank: 453, name: "Saint-Chamond BVG", lat: 45.4747, lng: 4.5139, country: "France" }, // Saint-Chamond
    { rank: 454, name: "New Mexico State Aggies", lat: 32.2798, lng: -106.7637, country: "USA" }, // Las Cruces
    { rank: 455, name: "Denain Voltaire", lat: 50.3258, lng: 3.3947, country: "France" }, // Denain
    { rank: 456, name: "Austin Peay Governors", lat: 36.5270, lng: -87.3595, country: "USA" }, // Clarksville
    { rank: 457, name: "Western Michigan Broncos", lat: 42.2634, lng: -85.6681, country: "USA" }, // Kalamazoo
    { rank: 458, name: "Central Michigan Chippewas", lat: 43.5956, lng: -84.7836, country: "USA" }, // Mount Pleasant
    { rank: 459, name: "Oral Roberts Golden Eagles", lat: 36.1541, lng: -95.9928, country: "USA" }, // +0.0001 lat
    { rank: 460, name: "JA Vichy-Clermont", lat: 46.1244, lng: 3.4247, country: "France" }, // Vichy
    { rank: 461, name: "Albany Great Danes", lat: 42.6803, lng: -73.8370, country: "USA" }, // Albany
    { rank: 462, name: "Buffalo Bulls", lat: 42.8864, lng: -78.8784, country: "USA" }, // Buffalo
    { rank: 463, name: "Tigers Tübingen", lat: 48.5216, lng: 9.0576, country: "Germany" }, // Tübingen
    { rank: 464, name: "Obras Basket", lat: -34.6039, lng: -58.3816, country: "Argentina" }, // +0.0002 lat
    { rank: 465, name: "Mazeikiai M Basket", lat: 56.3139, lng: 22.3311, country: "Lithuania" }, // Mažeikiai
    { rank: 466, name: "Miami (OH) Redhawks", lat: 39.5092, lng: -84.7323, country: "USA" }, // Oxford
    { rank: 467, name: "Stephen F. Austin Lumberjacks", lat: 31.6018, lng: -94.6549, country: "USA" }, // Nacogdoches
    { rank: 468, name: "Siena Saints", lat: 42.7191, lng: -73.7562, country: "USA" }, // Loudonville
    { rank: 469, name: "Green Bay Phoenix", lat: 44.5133, lng: -87.9073, country: "USA" }, // Green Bay
    { rank: 470, name: "KK Sencur", lat: 46.2396, lng: 14.4167, country: "Slovenia" }, // Šenčur
    { rank: 471, name: "Southern Utah Thunderbirds", lat: 37.6781, lng: -113.0619, country: "USA" }, // Cedar City
    { rank: 472, name: "UTSA Roadrunners", lat: 29.4242, lng: -98.4936, country: "USA" }, // +0.0001 lat
    { rank: 473, name: "Milwaukee Panthers", lat: 43.0391, lng: -87.9065, country: "USA" }, // +0.0002 lat
    { rank: 474, name: "Louisiana Tech Bulldogs", lat: 32.5252, lng: -92.6379, country: "USA" }, // Ruston
    { rank: 475, name: "NJIT Highlanders", lat: 40.7362, lng: -74.1760, country: "USA" }, // Newark
    { rank: 476, name: "Robert Morris Colonials", lat: 40.6218, lng: -80.0896, country: "USA" }, // Moon Township
    { rank: 477, name: "Koroivos BC", lat: 40.6167, lng: 22.0167, country: "Greece" }, // Amyntaio
    { rank: 478, name: "Club Ciclista Olímpico", lat: -27.4694, lng: -58.8306, country: "Argentina" }, // +0.0002 lat
    { rank: 479, name: "SIU Edwardsville Cougars", lat: 38.8111, lng: -90.1535, country: "USA" }, // Edwardsville
    { rank: 480, name: "ABA Ancud", lat: -41.8697, lng: -73.8203, country: "Chile" }, // Ancud
    { rank: 481, name: "Phoenix Hagen", lat: 51.3617, lng: 7.4631, country: "Germany" }, // Hagen
    { rank: 482, name: "Southeast Missouri State Redhawks", lat: 37.3092, lng: -89.5586, country: "USA" }, // Cape Girardeau
    { rank: 483, name: "Colgate Raiders", lat: 42.8209, lng: -75.5379, country: "USA" }, // Hamilton
    { rank: 484, name: "Army Black Knights", lat: 41.3915, lng: -73.9626, country: "USA" }, // West Point
    { rank: 485, name: "Bayer Giants Leverkusen", lat: 51.0315, lng: 6.9842, country: "Germany" }, // Leverkusen
    { rank: 486, name: "Northeastern Huskies", lat: 42.3603, lng: -71.0589, country: "USA" }, // +0.0002 lat
    { rank: 487, name: "OKK Spars", lat: 44.7866, lng: 17.2686, country: "Bosnia and Herzegovina" }, // Sarajevo
    { rank: 488, name: "Loyola (MD) Greyhounds", lat: 39.3498, lng: -76.5018, country: "USA" }, // Baltimore
    { rank: 489, name: "UTEP Miners", lat: 31.7619, lng: -106.4850, country: "USA" }, // El Paso
    { rank: 490, name: "Denver Pioneers", lat: 39.7393, lng: -104.9903, country: "USA" }, // +0.0001 lat
    { rank: 491, name: "KK Pelister-Bitola", lat: 41.0361, lng: 21.3344, country: "North Macedonia" }, // Bitola
    { rank: 492, name: "Charlotte 49ers", lat: 35.2272, lng: -80.8431, country: "USA" }, // +0.0001 lat
    { rank: 493, name: "Bueno Arenas Albacete Basket", lat: 39.0000, lng: -1.8667, country: "Spain" }, // Albacete
    { rank: 494, name: "Harvard Crimson", lat: 42.3770, lng: -71.1167, country: "USA" }, // Cambridge
    { rank: 495, name: "Akron Zips", lat: 41.0814, lng: -81.5190, country: "USA" }, // Akron
    { rank: 496, name: "Eastern Illinois Panthers", lat: 39.6403, lng: -88.0781, country: "USA" }, // Charleston
    { rank: 497, name: "Vermont Catamounts", lat: 44.4759, lng: -73.1978, country: "USA" }, // Burlington
    { rank: 498, name: "Marist Red Foxes", lat: 41.7270, lng: -73.9301, country: "USA" }, // Poughkeepsie
    { rank: 499, name: "RASTA Vechta", lat: 52.7294, lng: 8.2844, country: "Germany" }, // Vechta
    { rank: 500, name: "Dartmouth Big Green", lat: 43.6044, lng: -72.2887, country: "USA" }, // Hanover
    { rank: 501, name: "Lafayette Leopards", lat: 40.7009, lng: -75.2071, country: "USA" }, // Easton
    { rank: 502, name: "Florida International Panthers", lat: 25.7619, lng: -80.1918, country: "USA" }, // +0.0002 lat
    { rank: 503, name: "Rice Owls", lat: 29.7606, lng: -95.3698, country: "USA" }, // +0.0002 lat
    { rank: 504, name: "Marijampoles Suduva-Mantinga", lat: 54.5597, lng: 23.3544, country: "Lithuania" }, // Marijampolė
    { rank: 505, name: "CD Valdivia", lat: -39.8142, lng: -73.2459, country: "Chile" }, // Valdivia
    { rank: 506, name: "Vilkaviskio Perlas", lat: 54.6514, lng: 23.0333, country: "Lithuania" }, // Vilkaviškis
    { rank: 507, name: "KK Borac WWIN", lat: 44.1954, lng: 17.9051, country: "Bosnia and Herzegovina" }, // +0.0001 lat
    { rank: 508, name: "Florida Atlantic Owls", lat: 26.3683, lng: -80.1289, country: "USA" }, // Boca Raton
    { rank: 509, name: "Cornell Big Red", lat: 42.4534, lng: -76.4735, country: "USA" }, // Ithaca
    { rank: 510, name: "Cleveland State Vikings", lat: 41.4994, lng: -81.6944, country: "USA" }, // +0.0001 lat
    { rank: 511, name: "Southern Miss Golden Eagles", lat: 31.3207, lng: -89.3369, country: "USA" }, // Hattiesburg
    { rank: 512, name: "Bucknell Bison", lat: 40.9548, lng: -76.8839, country: "USA" }, // Lewisburg
    { rank: 513, name: "KK Sutjeska", lat: 42.4304, lng: 18.7681, country: "Montenegro" }, // Nikšić
    { rank: 514, name: "Club Biguá", lat: -34.8846, lng: -56.0181, country: "Uruguay" }, // +0.0002 lat
    { rank: 515, name: "Atlético Puerto Varas", lat: -41.3194, lng: -72.9833, country: "Chile" }, // Puerto Varas
    { rank: 516, name: "UC San Diego Tritons", lat: 32.8801, lng: -117.2340, country: "USA" }, // La Jolla
    { rank: 517, name: "PS Karlsruhe Lions", lat: 49.0069, lng: 8.4037, country: "Germany" }, // Karlsruhe
    { rank: 518, name: "American University Eagles", lat: 38.9075, lng: -77.0369, country: "USA" }, // +0.0003 lat
    { rank: 519, name: "Sam Houston Bearkats", lat: 30.7144, lng: -95.5547, country: "USA" }, // Huntsville
    { rank: 520, name: "High Point Panthers", lat: 35.9557, lng: -80.0053, country: "USA" }, // High Point
    { rank: 521, name: "Utah Tech Trailblazers", lat: 37.1041, lng: -113.5841, country: "USA" }, // St. George
    { rank: 522, name: "Utah Valley Wolverines", lat: 40.2732, lng: -111.7153, country: "USA" }, // Orem
    { rank: 523, name: "AD Atenas", lat: -34.4611, lng: -58.7069, country: "Argentina" }, // San Martín
    { rank: 524, name: "CA Argentino", lat: -28.4697, lng: -65.7795, country: "Argentina" }, // Junín
    { rank: 525, name: "Towson Tigers", lat: 39.3954, lng: -76.6103, country: "USA" }, // Towson
    { rank: 526, name: "Tarleton Texans", lat: 32.2343, lng: -98.2001, country: "USA" }, // Stephenville
    { rank: 527, name: "JobStairs Giessen 46ers", lat: 50.5838, lng: 8.6742, country: "Germany" }, // Giessen
    { rank: 528, name: "VfL Kirchheim Knights", lat: 48.6528, lng: 9.4394, country: "Germany" }, // Kirchheim
    { rank: 529, name: "Palangos Kursiai", lat: 55.9167, lng: 21.0667, country: "Lithuania" }, // Palanga
    { rank: 530, name: "St. Thomas - Minnesota Tommies", lat: 44.9780, lng: -93.2650, country: "USA" }, // +0.0002 lat
    { rank: 531, name: "KK Podgorica", lat: 42.4305, lng: 19.2594, country: "Montenegro" }, // +0.0001 lat
    { rank: 532, name: "Monmouth Hawks", lat: 40.2677, lng: -74.0059, country: "USA" }, // West Long Branch
    { rank: 533, name: "Bellarmine Knights", lat: 38.2528, lng: -85.7585, country: "USA" }, // +0.0001 lat
    { rank: 534, name: "Western Illinois Leathernecks", lat: 40.4653, lng: -90.6712, country: "USA" }, // Macomb
    { rank: 535, name: "Holy Cross Crusaders", lat: 42.2619, lng: -71.8063, country: "USA" }, // Worcester
    { rank: 536, name: "California Baptist Lancers", lat: 33.9425, lng: -117.3617, country: "USA" }, // Riverside
    { rank: 537, name: "Saint-Quentin Basketball", lat: 49.8467, lng: 3.2878, country: "France" }, // Saint-Quentin
    { rank: 538, name: "Alimerka Oviedo Baloncesto", lat: 43.3614, lng: -5.8593, country: "Spain" }, // Oviedo
    { rank: 539, name: "Wiha Panthers Schwenningen", lat: 48.0667, lng: 8.5333, country: "Germany" }, // Schwenningen
    { rank: 540, name: "Columbia Lions", lat: 40.8075, lng: -73.9626, country: "USA" }, // New York
    { rank: 541, name: "Merrimack Warriors", lat: 42.6335, lng: -71.3162, country: "USA" }, // +0.0001 lat
    { rank: 542, name: "UNC Wilmington Seahawks", lat: 34.2257, lng: -77.8868, country: "USA" }, // Wilmington
    { rank: 543, name: "KK Zlatibor", lat: 43.7333, lng: 19.7167, country: "Serbia" }, // Čajetina
    { rank: 544, name: "IUPUI Jaguars", lat: 39.7686, lng: -86.1581, country: "USA" }, // +0.0002 lat
    { rank: 545, name: "Lehigh Mountain Hawks", lat: 40.6259, lng: -75.3784, country: "USA" }, // Bethlehem
    { rank: 546, name: "Nürnberg Falcons BC", lat: 49.4521, lng: 11.0767, country: "Germany" }, // Nuremberg
    { rank: 547, name: "KK Atletas", lat: 54.6874, lng: 25.2797, country: "Lithuania" }, // +0.0002 lat
    { rank: 548, name: "Drexel Dragons", lat: 39.9529, lng: -75.1652, country: "USA" }, // +0.0003 lat
    { rank: 549, name: "Kretingos Kretinga", lat: 55.8833, lng: 21.2500, country: "Lithuania" }, // Kretinga
    { rank: 550, name: "Iona Gaels", lat: 40.8776, lng: -73.8370, country: "USA" }, // New Rochelle
    { rank: 551, name: "Eisbären Bremerhaven", lat: 53.5395, lng: 8.5809, country: "Germany" }, // Bremerhaven
    { rank: 552, name: "Sesi Franca", lat: -20.5386, lng: -47.4008, country: "Brazil" }, // Franca
    { rank: 553, name: "North Texas Mean Green", lat: 33.2148, lng: -97.1331, country: "USA" }, // Denton
    { rank: 554, name: "Abilene Christian Wildcats", lat: 32.4487, lng: -99.7331, country: "USA" }, // Abilene
    { rank: 555, name: "ART Giants Düsseldorf", lat: 51.2277, lng: 6.7735, country: "Germany" }, // Düsseldorf
    { rank: 556, name: "Jacksonville Dolphins", lat: 30.3323, lng: -81.6557, country: "USA" }, // +0.0001 lat
    { rank: 557, name: "Eastern Washington Eagles", lat: 47.4913, lng: -117.5847, country: "USA" }, // Cheney
    { rank: 558, name: "Artland Dragons", lat: 52.7744, lng: 7.9719, country: "Germany" }, // Quakenbrück
    { rank: 559, name: "Canisius Golden Griffins", lat: 42.8865, lng: -78.8784, country: "USA" }, // +0.0001 lat
    { rank: 560, name: "Manhattan Jaspers", lat: 40.8896, lng: -73.9017, country: "USA" }, // Riverdale
    { rank: 561, name: "Weber State Wildcats", lat: 41.2230, lng: -111.9738, country: "USA" }, // Ogden
    { rank: 562, name: "VfL SparkassenStars Bochum", lat: 51.4818, lng: 7.2162, country: "Germany" }, // Bochum
    { rank: 563, name: "UT Rio Grande Valley Vaqueros", lat: 26.3009, lng: -98.1670, country: "USA" }, // Edinburg
    { rank: 564, name: "La Unión de Formosa", lat: -26.1775, lng: -58.1781, country: "Argentina" }, // Formosa
    { rank: 565, name: "Navy Midshipmen", lat: 38.9832, lng: -76.4951, country: "USA" }, // Annapolis
    { rank: 566, name: "Fairfield Stags", lat: 41.1579, lng: -73.2478, country: "USA" }, // Fairfield
    { rank: 567, name: "AO Amyntas", lat: 40.6168, lng: 22.0167, country: "Greece" }, // +0.0001 lat
    { rank: 568, name: "Yale Bulldogs", lat: 41.3163, lng: -72.9223, country: "USA" }, // New Haven
    { rank: 569, name: "Quinnipiac Bobcats", lat: 41.4271, lng: -72.8944, country: "USA" }, // Hamden
    { rank: 570, name: "Titanes de Barranquilla", lat: 10.9639, lng: -74.7964, country: "Colombia" }, // Barranquilla
    { rank: 571, name: "Kavala BC", lat: 41.0557, lng: 24.4056, country: "Greece" }, // +0.0001 lat
    { rank: 572, name: "Delaware Blue Hens", lat: 39.6837, lng: -75.7497, country: "USA" }, // Newark
    { rank: 573, name: "CD Español Osorno", lat: -40.5728, lng: -73.1322, country: "Chile" }, // Osorno
    { rank: 574, name: "Sacramento State Hornets", lat: 38.5817, lng: -121.4944, country: "USA" }, // +0.0001 lat
    { rank: 575, name: "Saint Peter's Peacocks", lat: 40.7284, lng: -74.0776, country: "USA" }, // +0.0002 lat
    { rank: 576, name: "Rider Broncs", lat: 40.2677, lng: -74.7429, country: "USA" }, // Lawrenceville
    { rank: 577, name: "Vilniaus Stekas", lat: 54.6875, lng: 25.2797, country: "Lithuania" }, // +0.0003 lat
    { rank: 578, name: "KK Vrijednosnice Osijek", lat: 45.5550, lng: 18.6955, country: "Croatia" }, // Osijek
    { rank: 579, name: "Montana Grizzlies", lat: 46.8787, lng: -113.9967, country: "USA" }, // Missoula
    { rank: 580, name: "Kansas City Roos", lat: 39.0997, lng: -94.5786, country: "USA" }, // Kansas City
    { rank: 581, name: "Gardner-Webb Runnin' Bulldogs", lat: 35.2971, lng: -81.8723, country: "USA" }, // Boiling Springs
    { rank: 582, name: "Vilniaus Perlas", lat: 54.6876, lng: 25.2797, country: "Lithuania" }, // +0.0004 lat
    { rank: 583, name: "William & Mary Tribe", lat: 37.2707, lng: -76.7075, country: "USA" }, // Williamsburg
    { rank: 584, name: "South Dakota Coyotes", lat: 42.7918, lng: -96.9289, country: "USA" }, // Vermillion
    { rank: 585, name: "Español de Talca", lat: -35.4264, lng: -71.6554, country: "Chile" }, // Talca
    { rank: 586, name: "Princeton Tigers", lat: 40.3573, lng: -74.6672, country: "USA" }, // Princeton
    { rank: 587, name: "Cal Poly Mustangs", lat: 35.3050, lng: -120.6625, country: "USA" }, // San Luis Obispo
    { rank: 588, name: "Chicago State Cougars", lat: 41.8785, lng: -87.6298, country: "USA" }, // +0.0004 lat
    { rank: 589, name: "Portland State Vikings", lat: 45.5154, lng: -122.6784, country: "USA" }, // +0.0002 lat
    { rank: 590, name: "Long Beach State Beach", lat: 33.7701, lng: -118.1937, country: "USA" }, // Long Beach
    { rank: 591, name: "Charleston Cougars", lat: 32.7765, lng: -79.9311, country: "USA" }, // Charleston
    { rank: 592, name: "CA Unión", lat: -31.4202, lng: -64.1888, country: "Argentina" }, // +0.0001 lat
    { rank: 593, name: "Grand Canyon Lopes", lat: 33.5387, lng: -112.1516, country: "USA" }, // Phoenix
    { rank: 594, name: "Real Estelí", lat: 13.0931, lng: -86.3539, country: "Nicaragua" }, // Estelí
    { rank: 595, name: "Puente Alto CD", lat: -33.6167, lng: -70.5833, country: "Chile" }, // Puente Alto
    { rank: 596, name: "CA Platense", lat: -34.5333, lng: -58.4667, country: "Argentina" }, // Buenos Aires
    { rank: 597, name: "KK Sloga", lat: 44.3092, lng: 20.9711, country: "Serbia" }, // Požarevac
    { rank: 598, name: "UT Arlington Mavericks", lat: 32.7303, lng: -97.1136, country: "USA" }, // Arlington
    { rank: 599, name: "Pennsylvania Quakers", lat: 39.9530, lng: -75.1652, country: "USA" }, // +0.0004 lat
    { rank: 600, name: "Lamar Cardinals", lat: 30.0627, lng: -94.1099, country: "USA" }, // Beaumont
    { rank: 601, name: "Campbell Fighting Camels", lat: 35.5151, lng: -78.8784, country: "USA" }, // Buies Creek
    { rank: 602, name: "Idaho Vandals", lat: 46.7298, lng: -117.0094, country: "USA" }, // Moscow
    { rank: 603, name: "CD Las Ánimas", lat: -33.4490, lng: -70.6693, country: "Chile" }, // +0.0001 lat
    { rank: 604, name: "Römerstrom Gladiators Trier", lat: 49.7596, lng: 6.6441, country: "Germany" }, // Trier
    { rank: 605, name: "KK TFT Skopje", lat: 41.9974, lng: 21.4280, country: "North Macedonia" }, // +0.0001 lat
    { rank: 606, name: "CD Tinguiririca San Fernando", lat: -34.5833, lng: -70.9833, country: "Chile" }, // San Fernando
    { rank: 607, name: "Dresden Titans", lat: 51.0504, lng: 13.7373, country: "Germany" }, // Dresden
    { rank: 608, name: "Independiente Oliva", lat: -34.8847, lng: -56.0181, country: "Uruguay" }, // +0.0003 lat
    { rank: 609, name: "Idaho State Bengals", lat: 42.8713, lng: -112.4455, country: "USA" }, // Pocatello
    { rank: 610, name: "South Carolina Upstate Spartans", lat: 34.9495, lng: -81.9320, country: "USA" }, // Spartanburg
    { rank: 611, name: "CSU Fullerton Titans", lat: 33.8839, lng: -117.8850, country: "USA" }, // Fullerton
    { rank: 612, name: "Santiago Morning Quilicura", lat: -33.3667, lng: -70.7333, country: "Chile" }, // Quilicura
    { rank: 613, name: "UC Riverside Highlanders", lat: 33.9737, lng: -117.3281, country: "USA" }, // Riverside
    { rank: 614, name: "AS Papagou", lat: 37.9915, lng: 23.8186, country: "Greece" }, // Papagou
    { rank: 615, name: "North Dakota State Bison", lat: 46.8772, lng: -96.7898, country: "USA" }, // Fargo
    { rank: 616, name: "North Carolina A&T Aggies", lat: 36.0726, lng: -79.7920, country: "USA" }, // Greensboro
    { rank: 617, name: "Hampton Pirates", lat: 37.0271, lng: -76.3444, country: "USA" }, // Hampton
    { rank: 618, name: "Mount St. Mary's Mountaineers", lat: 39.6403, lng: -77.4286, country: "USA" }, // Emmitsburg
    { rank: 619, name: "CD Universidad Católica", lat: -33.4491, lng: -70.6693, country: "Chile" }, // +0.0002 lat
    { rank: 620, name: "Juaristi ISB", lat: 43.2631, lng: -2.9350, country: "Spain" }, // +0.0001 lat
    { rank: 621, name: "Uni Baskets Paderborn", lat: 51.7189, lng: 8.7575, country: "Germany" }, // Paderborn
    { rank: 622, name: "CD Castro", lat: -42.4833, lng: -73.7667, country: "Chile" }, // Castro
    { rank: 623, name: "Elon Phoenix", lat: 36.1026, lng: -79.5020, country: "USA" }, // Elon
    { rank: 624, name: "Grambling Tigers", lat: 32.5207, lng: -92.7179, country: "USA" }, // Grambling
    { rank: 625, name: "Western Carolina Catamounts", lat: 35.3099, lng: -83.1852, country: "USA" }, // Cullowhee
    { rank: 626, name: "UC Davis Aggies", lat: 38.5382, lng: -121.7617, country: "USA" }, // Davis
    { rank: 627, name: "James Madison Dukes", lat: 38.4349, lng: -78.8689, country: "USA" }, // Harrisonburg
    { rank: 628, name: "Niagara Purple Eagles", lat: 43.1079, lng: -78.9867, country: "USA" }, // Lewiston
    { rank: 629, name: "Montana State Bobcats", lat: 45.6770, lng: -111.0429, country: "USA" }, // Bozeman
    { rank: 630, name: "Mogi Basquete", lat: -23.5232, lng: -46.2111, country: "Brazil" }, // Mogi das Cruzes
    { rank: 631, name: "Northern Arizona Lumberjacks", lat: 35.1983, lng: -111.6513, country: "USA" }, // Flagstaff
    { rank: 632, name: "Coastal Carolina Chanticleers", lat: 33.7948, lng: -79.0075, country: "USA" }, // Conway
    { rank: 633, name: "Longwood Lancers", lat: 37.3036, lng: -78.1625, country: "USA" }, // Farmville
    { rank: 634, name: "UNC Asheville Bulldogs", lat: 35.5951, lng: -82.5515, country: "USA" }, // Asheville
    { rank: 635, name: "Klaipedos Neptunas-Akvaservis ", lat: 55.7174, lng: 21.1175, country: "Lithuania" }, // +0.0002 lat
    { rank: 636, name: "Northern Colorado Bears", lat: 40.4059, lng: -104.6757, country: "USA" }, // Greeley
    { rank: 637, name: "Radford Highlanders", lat: 37.1318, lng: -80.5764, country: "USA" }, // Radford
    { rank: 638, name: "CSU Northridge Matadors", lat: 34.2411, lng: -118.5295, country: "USA" }, // Northridge
    { rank: 639, name: "CEB Puerto Montt", lat: -41.4733, lng: -72.9400, country: "Chile" }, // Puerto Montt
    { rank: 640, name: "Hawaii Rainbow Warriors", lat: 21.2985, lng: -157.8165, country: "USA" }, // Honolulu
    { rank: 641, name: "Hartford Hawks", lat: 41.7658, lng: -72.6851, country: "USA" }, // West Hartford
    { rank: 642, name: "Louisiana Ragin' Cajuns", lat: 30.2241, lng: -92.0198, country: "USA" }, // Lafayette
    { rank: 643, name: "Morgan State Bears", lat: 39.3434, lng: -76.5819, country: "USA" }, // Baltimore
    { rank: 644, name: "VMI Keydets", lat: 37.7873, lng: -79.4411, country: "USA" }, // Lexington
    { rank: 645, name: "Presbyterian Blue Hose", lat: 34.8698, lng: -81.5101, country: "USA" }, // Clinton
    { rank: 646, name: "East Tennessee State Buccaneers", lat: 36.3007, lng: -82.3709, country: "USA" }, // Johnson City
    { rank: 647, name: "Winthrop Eagles", lat: 35.0434, lng: -81.0289, country: "USA" }, // Rock Hill
    { rank: 648, name: "AB Temuco", lat: -38.7359, lng: -72.5904, country: "Chile" }, // Temuco
    { rank: 649, name: "UNC Greensboro Spartans", lat: 36.0726, lng: -79.8051, country: "USA" }, // Greensboro
    { rank: 650, name: "Binghamton Bearcats", lat: 42.0862, lng: -75.9683, country: "USA" }, // Vestal
    { rank: 651, name: "Omaha Mavericks", lat: 41.2566, lng: -95.9345, country: "USA" }, // +0.0001 lat
    { rank: 652, name: "North Dakota Fighting Hawks", lat: 47.9253, lng: -97.0329, country: "USA" }, // Grand Forks
    { rank: 653, name: "Arkansas State Red Wolves", lat: 35.8397, lng: -90.6787, country: "USA" }, // Jonesboro
    { rank: 654, name: "Delaware State Hornets", lat: 39.1573, lng: -75.5277, country: "USA" }, // Dover
    { rank: 655, name: "UC Irvine Anteaters", lat: 33.6405, lng: -117.8443, country: "USA" }, // Irvine
    { rank: 656, name: "Northwestern State Demons", lat: 31.7619, lng: -93.0862, country: "USA" }, // Natchitoches
    { rank: 657, name: "Coppin State Eagles", lat: 39.3096, lng: -76.6728, country: "USA" }, // Baltimore
    { rank: 658, name: "South Dakota State Jackrabbits", lat: 44.3114, lng: -96.7969, country: "USA" }, // Brookings
    { rank: 659, name: "Charleston Southern Buccaneers", lat: 32.8179, lng: -80.0018, country: "USA" }, // Charleston
    { rank: 660, name: "Samford Bulldogs", lat: 33.4734, lng: -86.7946, country: "USA" }, // Birmingham
    { rank: 661, name: "Mercer Bears", lat: 32.8407, lng: -83.6324, country: "USA" }, // Macon
    { rank: 662, name: "The Citadel Bulldogs", lat: 32.7766, lng: -79.9311, country: "USA" }, // +0.0001 lat
    { rank: 663, name: "WWU Baskets Münster", lat: 51.9607, lng: 7.6261, country: "Germany" }, // Münster
    { rank: 664, name: "Furman Paladins", lat: 34.9249, lng: -82.4375, country: "USA" }, // Greenville
    { rank: 665, name: "Stony Brook Seawolves", lat: 40.9176, lng: -73.1412, country: "USA" }, // Stony Brook
    { rank: 666, name: "Norfolk State Spartans", lat: 36.8469, lng: -76.2852, country: "USA" }, // +0.0001 lat
    { rank: 667, name: "Wofford Terriers", lat: 34.9249, lng: -81.9498, country: "USA" }, // Spartanburg
    { rank: 668, name: "Texas A&M-CC Islanders", lat: 27.8006, lng: -97.3964, country: "USA" }, // Corpus Christi
    { rank: 669, name: "Georgia Southern Eagles", lat: 32.4279, lng: -81.7832, country: "USA" }, // Statesboro
    { rank: 670, name: "Maryland-Eastern Shore Hawks", lat: 38.3498, lng: -75.5018, country: "USA" }, // Princess Anne
    { rank: 671, name: "South Carolina State Bulldogs", lat: 33.4534, lng: -80.9962, country: "USA" }, // Orangeburg
    { rank: 672, name: "UC Santa Barbara Gauchos", lat: 34.4140, lng: -119.8489, country: "USA" }, // Santa Barbara
    { rank: 673, name: "Georgia State Panthers", lat: 33.7491, lng: -84.3880, country: "USA" }, // +0.0001 lat
    { rank: 674, name: "Howard Bison", lat: 38.9076, lng: -77.0369, country: "USA" }, // +0.0004 lat
    { rank: 675, name: "Appalachian State Mountaineers", lat: 36.2168, lng: -81.6746, country: "USA" }, // Boone
    { rank: 676, name: "Nicholls Colonels", lat: 29.7013, lng: -90.4426, country: "USA" }, // Thibodaux
    { rank: 677, name: "South Alabama Jaguars", lat: 30.6954, lng: -88.0399, country: "USA" }, // Mobile
    { rank: 678, name: "UL Monroe Warhawks", lat: 32.5093, lng: -92.1193, country: "USA" }, // Monroe
    { rank: 679, name: "Jackson State Tigers", lat: 32.2988, lng: -90.1848, country: "USA" }, // Jackson
    { rank: 680, name: "Troy Trojans", lat: 31.8088, lng: -85.9669, country: "USA" }, // Troy
    { rank: 681, name: "Texas State Bobcats", lat: 29.8988, lng: -97.9391, country: "USA" }, // San Marcos
    { rank: 682, name: "North Carolina Central Eagles", lat: 35.9778, lng: -78.8986, country: "USA" }, // Durham
    { rank: 683, name: "CB Prat", lat: 41.7542, lng: 1.8461, country: "Spain" }, // Manresa
    { rank: 684, name: "McNeese Cowboys", lat: 30.2266, lng: -93.2174, country: "USA" }, // Lake Charles
    { rank: 685, name: "New Orleans Privateers", lat: 29.9513, lng: -90.0715, country: "USA" }, // +0.0002 lat
    { rank: 686, name: "Wagner Seahawks", lat: 40.6176, lng: -74.1424, country: "USA" }, // Staten Island
    { rank: 687, name: "St. Francis (PA) Red Flash", lat: 40.3423, lng: -78.9394, country: "USA" }, // Loretto
    { rank: 688, name: "SE Louisiana Lions", lat: 30.5209, lng: -90.4426, country: "USA" }, // Hammond
    { rank: 689, name: "Long Island University Sharks", lat: 40.6893, lng: -73.9442, country: "USA" }, // +0.0001 lat
    { rank: 690, name: "Sacred Heart Pioneers", lat: 41.1580, lng: -73.2478, country: "USA" }, // +0.0001 lat
    { rank: 691, name: "Central Connecticut Blue Devils", lat: 41.6488, lng: -72.7278, country: "USA" }, // New Britain
    { rank: 692, name: "St. Francis (BKN) Terriers", lat: 40.6894, lng: -73.9442, country: "USA" }, // +0.0002 lat
    { rank: 693, name: "Fairleigh Dickinson Knights", lat: 40.9584, lng: -74.1048, country: "USA" }, // Teaneck
    { rank: 694, name: "Little Rock Trojans", lat: 34.7465, lng: -92.2896, country: "USA" }, // Little Rock
    { rank: 695, name: "Incarnate Word Cardinals", lat: 29.4243, lng: -98.4936, country: "USA" }, // +0.0002 lat
    { rank: 696, name: "Mississippi Valley State Delta Devils", lat: 33.3515, lng: -90.3070, country: "USA" }, // Itta Bena
    { rank: 697, name: "Florida A&M Rattlers", lat: 30.4384, lng: -84.2807, country: "USA" }, // +0.0001 lat
    { rank: 698, name: "Southern Jaguars", lat: 29.9514, lng: -90.0715, country: "USA" }, // +0.0003 lat
    { rank: 699, name: "Alcorn State Braves", lat: 31.5540, lng: -91.3918, country: "USA" }, // Lorman
    { rank: 700, name: "Prairie View A&M Panthers", lat: 30.0863, lng: -95.9917, country: "USA" }, // Prairie View
    { rank: 701, name: "Arkansas-Pine Bluff Golden Lions", lat: 34.2284, lng: -92.0031, country: "USA" }, // Pine Bluff
    { rank: 702, name: "Alabama State Hornets", lat: 32.3668, lng: -86.2999, country: "USA" }, // Montgomery
    { rank: 703, name: "Houston Baptist Huskies", lat: 29.7607, lng: -95.3698, country: "USA" }, // +0.0003 lat
    { rank: 704, name: "Alabama A&M Bulldogs", lat: 34.7304, lng: -86.5861, country: "USA" }, // Huntsville
    { rank: 705, name: "Bethune-Cookman Wildcats", lat: 29.2108, lng: -81.0228, country: "USA" }, // Daytona Beach
    { rank: 706, name: "Texas Southern Tigers", lat: 29.7608, lng: -95.3698, country: "USA" } // +0.0004 lat
];