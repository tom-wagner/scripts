const playerApiArray = [
    'player_points',
    'player_rebounds',
    'player_assists',
    'player_turnovers',
    'player_steals',
    'player_made_threes',
    'player_points_%2B_assists',
    'player_points_%2B_rebounds',
    'player_rebounds_%2B_assists',
    'player_steals_%2B_blocks',
    'player_points_%2B_rebounds_%2B_assists'
];

const ETR = [
    {
        "Name": "Terrence Shannon Jr.",
        "Minutes": 38,
        "DK Points": 35.23
    },
    {
        "Name": "Mark Sears",
        "Minutes": 39,
        "DK Points": 40.1
    },
    {
        "Name": "Jaedon LeDee",
        "Minutes": 36,
        "DK Points": 34.04
    },
    {
        "Name": "Marcus Domask",
        "Minutes": 37,
        "DK Points": 28.45
    },
    {
        "Name": "Tristen Newton",
        "Minutes": 37,
        "DK Points": 30.99
    },
    {
        "Name": "Donovan Clingan",
        "Minutes": 27,
        "DK Points": 31.83
    },
    {
        "Name": "Armando Bacot",
        "Minutes": 34,
        "DK Points": 35.94
    },
    {
        "Name": "RJ Davis",
        "Minutes": 36,
        "DK Points": 38.77
    },
    {
        "Name": "Aaron Estrada",
        "Minutes": 37,
        "DK Points": 34.16
    },
    {
        "Name": "Caleb Love",
        "Minutes": 35,
        "DK Points": 31.2
    },
    {
        "Name": "Oumar Ballo",
        "Minutes": 28,
        "DK Points": 31.01
    },
    {
        "Name": "Tamin Lipsey",
        "Minutes": 35,
        "DK Points": 30.16
    },
    {
        "Name": "PJ Hall",
        "Minutes": 30,
        "DK Points": 29.95
    },
    {
        "Name": "Harrison Ingram",
        "Minutes": 34,
        "DK Points": 30.04
    },
    {
        "Name": "Coleman Hawkins",
        "Minutes": 33,
        "DK Points": 25.89
    },
    {
        "Name": "Keshon Gilbert",
        "Minutes": 33,
        "DK Points": 29.22
    },
    {
        "Name": "Cam Spencer",
        "Minutes": 36,
        "DK Points": 26.43
    },
    {
        "Name": "Pelle Larsson",
        "Minutes": 33,
        "DK Points": 25.06
    },
    {
        "Name": "Ian Schieffelin",
        "Minutes": 28,
        "DK Points": 25.95
    },
    {
        "Name": "Joseph Girard III",
        "Minutes": 35,
        "DK Points": 25.18
    },
    {
        "Name": "Keshad Johnson",
        "Minutes": 33,
        "DK Points": 25.49
    },
    {
        "Name": "Chase Hunter",
        "Minutes": 36,
        "DK Points": 22.68
    },
    {
        "Name": "Alex Karaban",
        "Minutes": 33,
        "DK Points": 21.97
    },
    {
        "Name": "Kylan Boswell",
        "Minutes": 25,
        "DK Points": 17.38
    },
    {
        "Name": "Lamont Butler",
        "Minutes": 32,
        "DK Points": 19.96
    },
    {
        "Name": "Darrion Trammell",
        "Minutes": 32,
        "DK Points": 18.74
    },
    {
        "Name": "Nick Pringle",
        "Minutes": 24,
        "DK Points": 20.92
    },
    {
        "Name": "Stephon Castle",
        "Minutes": 28,
        "DK Points": 19.59
    },
    {
        "Name": "Milan Momcilovic",
        "Minutes": 31,
        "DK Points": 18.63
    },
    {
        "Name": "Cormac Ryan",
        "Minutes": 33,
        "DK Points": 20.93
    },
    {
        "Name": "Curtis Jones",
        "Minutes": 27,
        "DK Points": 20.03
    },
    {
        "Name": "Grant Nelson",
        "Minutes": 24,
        "DK Points": 20.67
    },
    {
        "Name": "Tre King",
        "Minutes": 21,
        "DK Points": 16.51
    },
    {
        "Name": "Dain Dainja",
        "Minutes": 15,
        "DK Points": 14.23
    },
    {
        "Name": "Jack Clark",
        "Minutes": 33,
        "DK Points": 20.85
    },
    {
        "Name": "Ty Rodgers",
        "Minutes": 23,
        "DK Points": 13.87
    },
    {
        "Name": "Jaden Bradley",
        "Minutes": 23,
        "DK Points": 16.83
    },
    {
        "Name": "Jae'Lyn Withers",
        "Minutes": 14,
        "DK Points": 15.16
    },
    {
        "Name": "Elliot Cadeau",
        "Minutes": 24,
        "DK Points": 18.41
    },
    {
        "Name": "Jay Pal",
        "Minutes": 20,
        "DK Points": 13.1
    },
    {
        "Name": "Micah Parrish",
        "Minutes": 26,
        "DK Points": 15.4
    },
    {
        "Name": "Quincy Guerrier",
        "Minutes": 18,
        "DK Points": 11.59
    },
    {
        "Name": "Hason Ward",
        "Minutes": 15,
        "DK Points": 16.1
    },
    {
        "Name": "Rylan Griffen",
        "Minutes": 30,
        "DK Points": 21.8
    },
    {
        "Name": "Robert Jones",
        "Minutes": 23,
        "DK Points": 17.02
    },
    {
        "Name": "KJ Lewis",
        "Minutes": 14,
        "DK Points": 10.61
    },
    {
        "Name": "Hassan Diarra",
        "Minutes": 16,
        "DK Points": 10.39
    },
    {
        "Name": "RJ Godfrey",
        "Minutes": 18,
        "DK Points": 13.79
    },
    {
        "Name": "Reese Waters",
        "Minutes": 17,
        "DK Points": 9.24
    },
    {
        "Name": "Luke Goode",
        "Minutes": 17,
        "DK Points": 8.97
    },
    {
        "Name": "Elijah Saunders",
        "Minutes": 19,
        "DK Points": 10.59
    },
    {
        "Name": "Mouhamed Dioubate",
        "Minutes": 11,
        "DK Points": 11.86
    },
    {
        "Name": "Samson Johnson",
        "Minutes": 13,
        "DK Points": 8.11
    },
    {
        "Name": "Sam Walters",
        "Minutes": 13,
        "DK Points": 10.55
    },
    {
        "Name": "Miles Byrd",
        "Minutes": 13,
        "DK Points": 9.06
    },
    {
        "Name": "Motiejus Krivas",
        "Minutes": 9,
        "DK Points": 6.99
    },
    {
        "Name": "Jarin Stevenson",
        "Minutes": 18,
        "DK Points": 9.92
    },
    {
        "Name": "Seth Trimble",
        "Minutes": 17,
        "DK Points": 10.26
    },
    {
        "Name": "Jalen Washington",
        "Minutes": 6,
        "DK Points": 6.17
    },
    {
        "Name": "Justin Harmon",
        "Minutes": 10,
        "DK Points": 4.77
    },
    {
        "Name": "Jaylin Stewart",
        "Minutes": 9,
        "DK Points": 4.66
    },
    {
        "Name": "Demarion Watson",
        "Minutes": 14,
        "DK Points": 8.42
    },
    {
        "Name": "Jayden Ross",
        "Minutes": 1,
        "DK Points": 0.66
    },
    {
        "Name": "Miles Heide",
        "Minutes": 5,
        "DK Points": 3.05
    },
    {
        "Name": "Amani Hansberry",
        "Minutes": 1,
        "DK Points": 0.69
    },
    {
        "Name": "Niccolo Moretti",
        "Minutes": 3,
        "DK Points": 0.93
    },
    {
        "Name": "Dra Gibbs-Lawhorn",
        "Minutes": 5,
        "DK Points": 2.06
    },
    {
        "Name": "Jackson Paveletzke",
        "Minutes": 1,
        "DK Points": 0.54
    },
    {
        "Name": "Mohamed Wague",
        "Minutes": 4,
        "DK Points": 3.52
    },
    {
        "Name": "Paxson Wojcik",
        "Minutes": 2,
        "DK Points": 1.1
    },
    {
        "Name": "Chauncey Wiggins",
        "Minutes": 12,
        "DK Points": 6.41
    },
    {
        "Name": "Josh Beadle",
        "Minutes": 1,
        "DK Points": 0.45
    },
    {
        "Name": "Dillon Hunter",
        "Minutes": 7,
        "DK Points": 2.81
    },
    {
        "Name": "Zach Edey",
        "Minutes": 35,
        "DK Points": 50.51
    },
    {
        "Name": "Baylor Scheierman",
        "Minutes": 39,
        "DK Points": 37.05
    },
    {
        "Name": "Ryan Kalkbrenner",
        "Minutes": 38,
        "DK Points": 34.81
    },
    {
        "Name": "Tyler Kolek",
        "Minutes": 39,
        "DK Points": 38.65
    },
    {
        "Name": "Kyle Filipowski",
        "Minutes": 34,
        "DK Points": 32.34
    },
    {
        "Name": "Dalton Knecht",
        "Minutes": 35,
        "DK Points": 34.78
    },
    {
        "Name": "Ryan Nembhard",
        "Minutes": 39,
        "DK Points": 29.47
    },
    {
        "Name": "Trey Alexander",
        "Minutes": 39,
        "DK Points": 31.43
    },
    {
        "Name": "Kam Jones",
        "Minutes": 34,
        "DK Points": 30.1
    },
    {
        "Name": "Anton Watson",
        "Minutes": 38,
        "DK Points": 31.31
    },
    {
        "Name": "Zakai Zeigler",
        "Minutes": 34,
        "DK Points": 28.64
    },
    {
        "Name": "Jamal Shead",
        "Minutes": 35,
        "DK Points": 31.33
    },
    {
        "Name": "Graham Ike",
        "Minutes": 30,
        "DK Points": 30.48
    },
    {
        "Name": "Mohamed Diarra",
        "Minutes": 33,
        "DK Points": 29.76
    },
    {
        "Name": "Braden Smith",
        "Minutes": 36,
        "DK Points": 31.02
    },
    {
        "Name": "Oso Ighodaro",
        "Minutes": 36,
        "DK Points": 29.84
    },
    {
        "Name": "DJ Horne",
        "Minutes": 35,
        "DK Points": 27.16
    },
    {
        "Name": "Jared McCain",
        "Minutes": 35,
        "DK Points": 23.5
    },
    {
        "Name": "Jonas Aidoo",
        "Minutes": 30,
        "DK Points": 28.57
    },
    {
        "Name": "Ben Gregg",
        "Minutes": 31,
        "DK Points": 25.29
    },
    {
        "Name": "David Joplin",
        "Minutes": 30,
        "DK Points": 22.57
    },
    {
        "Name": "Steven Ashworth",
        "Minutes": 38,
        "DK Points": 24.52
    },
    {
        "Name": "Jeremy Roach",
        "Minutes": 38,
        "DK Points": 22.42
    },
    {
        "Name": "DJ Burns Jr.",
        "Minutes": 24,
        "DK Points": 22.33
    },
    {
        "Name": "L.J. Cryer",
        "Minutes": 33,
        "DK Points": 23.33
    },
    {
        "Name": "Tyrese Proctor",
        "Minutes": 38,
        "DK Points": 21.21
    },
    {
        "Name": "Mark Mitchell",
        "Minutes": 33,
        "DK Points": 22.88
    },
    {
        "Name": "Emanuel Sharp",
        "Minutes": 32,
        "DK Points": 21.93
    },
    {
        "Name": "Nolan Hickman",
        "Minutes": 38,
        "DK Points": 21.94
    },
    {
        "Name": "Josiah-Jordan James",
        "Minutes": 32,
        "DK Points": 22.59
    },
    {
        "Name": "J'Wan Roberts",
        "Minutes": 29,
        "DK Points": 24.21
    },
    {
        "Name": "Stevie Mitchell",
        "Minutes": 29,
        "DK Points": 19.77
    },
    {
        "Name": "Michael O'Connell",
        "Minutes": 34,
        "DK Points": 20.16
    },
    {
        "Name": "Casey Morsell",
        "Minutes": 34,
        "DK Points": 19.53
    },
    {
        "Name": "Ja'Vier Francis",
        "Minutes": 26,
        "DK Points": 21.76
    },
    {
        "Name": "Lance Jones",
        "Minutes": 32,
        "DK Points": 20.59
    },
    {
        "Name": "Fletcher Loyer",
        "Minutes": 32,
        "DK Points": 18.46
    },
    {
        "Name": "Mylik Wilson",
        "Minutes": 18,
        "DK Points": 12.69
    },
    {
        "Name": "Jayden Taylor",
        "Minutes": 22,
        "DK Points": 16
    },
    {
        "Name": "Ben Middlebrooks",
        "Minutes": 16,
        "DK Points": 14.19
    },
    {
        "Name": "Santiago Vescovi",
        "Minutes": 25,
        "DK Points": 14.86
    },
    {
        "Name": "Mason Gillis",
        "Minutes": 18,
        "DK Points": 11.92
    },
    {
        "Name": "Trey Kaufman-Renn",
        "Minutes": 17,
        "DK Points": 13.05
    },
    {
        "Name": "Chase Ross",
        "Minutes": 24,
        "DK Points": 13.9
    },
    {
        "Name": "Sean Stewart",
        "Minutes": 8,
        "DK Points": 7.28
    },
    {
        "Name": "Tobe Awaka",
        "Minutes": 11,
        "DK Points": 9.34
    },
    {
        "Name": "Damian Dunn",
        "Minutes": 16,
        "DK Points": 10.22
    },
    {
        "Name": "Braden Huff",
        "Minutes": 10,
        "DK Points": 10.28
    },
    {
        "Name": "Jahmai Mashack",
        "Minutes": 20,
        "DK Points": 12.41
    },
    {
        "Name": "Dusty Stromer",
        "Minutes": 14,
        "DK Points": 6.85
    },
    {
        "Name": "Mason Miller",
        "Minutes": 21,
        "DK Points": 9.29
    },
    {
        "Name": "Ben Gold",
        "Minutes": 8,
        "DK Points": 5
    },
    {
        "Name": "Jordan Gainey",
        "Minutes": 13,
        "DK Points": 7.54
    },
    {
        "Name": "Camden Heide",
        "Minutes": 15,
        "DK Points": 8.01
    },
    {
        "Name": "Ryan Young",
        "Minutes": 5,
        "DK Points": 3.31
    },
    {
        "Name": "Francisco Farabello",
        "Minutes": 19,
        "DK Points": 6.51
    },
    {
        "Name": "Myles Colvin",
        "Minutes": 8,
        "DK Points": 5.76
    },
    {
        "Name": "TJ Power",
        "Minutes": 4,
        "DK Points": 2.28
    },
    {
        "Name": "Ramon Walker Jr.",
        "Minutes": 4,
        "DK Points": 2.21
    },
    {
        "Name": "Jasen Green",
        "Minutes": 5,
        "DK Points": 2.48
    },
    {
        "Name": "Cedric Lath",
        "Minutes": 6,
        "DK Points": 2.21
    },
    {
        "Name": "Ryan Elvin",
        "Minutes": 1,
        "DK Points": 0.64
    },
    {
        "Name": "Jaylen Blakes",
        "Minutes": 5,
        "DK Points": 2.26
    },
    {
        "Name": "Breon Pass",
        "Minutes": 2,
        "DK Points": 1.13
    },
    {
        "Name": "Caleb Furst",
        "Minutes": 5,
        "DK Points": 3.16
    },
    {
        "Name": "Ethan Morton",
        "Minutes": 2,
        "DK Points": 0.8
    },
    {
        "Name": "Fredrick King",
        "Minutes": 1,
        "DK Points": 0.87
    }
];


// TODO: Add logic for multiple dates
const testDate = '2024-03-19';

// TODO: NEED TO UPDATE DAILY
// TODO: ADD LOGIC TO DO EDIT DISTANCE BY TEAM
const KP_PLAYERS = [
    "Tristen Newton",
    "Donovan Clingan",
    "Stephon Castle",
    "Cam Spencer",
    "Alex Karaban",
    "Hassan Diarra",
    "Samson Johnson",
    "Solomon Ball",
    "Jaylin Stewart",
    "Jayden Ross",
    "Jamal Shead",
    "LJ Cryer",
    "Emanuel Sharp",
    "Damian Dunn",
    "J'Wan Roberts",
    "Mylik Wilson",
    "Terrance Arceneaux",
    "Ja'Vier Francis",
    "Joseph Tugler",
    "Ramon Walker",
    "Cedric Lath",
    "Ryan Elvin",
    "Zach Edey",
    "Braden Smith",
    "Lance Jones",
    "Fletcher Loyer",
    "Trey Kaufman-Renn",
    "Myles Colvin",
    "Mason Gillis",
    "Caleb Furst",
    "Camden Heide",
    "Ethan Morton",
    "Caleb Love",
    "Oumar Ballo",
    "Motiejus Krivas",
    "Pelle Larsson",
    "Keshad Johnson",
    "Kylan Boswell",
    "Jaden Bradley",
    "KJ Lewis",
    "Paulius Murauskas",
    "Filip Borovicanin",
    "Conrad Martinez",
    "Grant Weitman",
    "Kyle Filipowski",
    "Mark Mitchell",
    "Jeremy Roach",
    "Jared McCain",
    "Tyrese Proctor",
    "Caleb Foster",
    "Ryan Young",
    "Sean Stewart",
    "TJ Power",
    "Jaylen Blakes",
    "Keshon Gilbert",
    "Tamin Lipsey",
    "Milan Momcilovic",
    "Curtis Jones",
    "Tre King",
    "Robert Jones",
    "Hason Ward",
    "Jackson Paveletzke",
    "Omaha Biliew",
    "Demarion Watson",
    "Dalton Knecht",
    "Zakai Zeigler",
    "Jonas Aidoo",
    "Jordan Gainey",
    "Tobe Awaka",
    "Josiah-Jordan James",
    "Santiago Vescovi",
    "Jahmai Mashack",
    "JP Estrella",
    "Freddie Dilione V",
    "Cade Phillips",
    "Cameron Carr",
    "RJ Davis",
    "Armando Bacot",
    "Elliot Cadeau",
    "Harrison Ingram",
    "Cormac Ryan",
    "Jae'Lyn Withers",
    "Jalen Washington",
    "Seth Trimble",
    "Paxson Wojcik",
    "Zayden High",
    "Creighton Lebo",
    "Rob Landry",
    "Duwe Farris",
    "Terrence Shannon",
    "Dain Dainja",
    "Marcus Domask",
    "Dra Gibbs-Lawhorn",
    "Coleman Hawkins",
    "Quincy Guerrier",
    "Ty Rodgers",
    "Luke Goode",
    "Justin Harmon",
    "Amani Hansberry",
    "Niccolo Moretti",
    "Trey Alexander",
    "Baylor Scheierman",
    "Ryan Kalkbrenner",
    "Fredrick King",
    "Steven Ashworth",
    "Isaac Traudt",
    "Jasen Green",
    "Francisco Farabello",
    "Mason Miller",
    "Josiah Dotzler",
    "Johnathan Lawson",
    "Graham Ike",
    "Braden Huff",
    "Ryan Nembhard",
    "Anton Watson",
    "Nolan Hickman",
    "Jun Seok Yeo",
    "Ben Gregg",
    "Dusty Stromer",
    "Luka Krajnovic",
    "Joe Few",
    "Kam Jones",
    "Tyler Kolek",
    "Oso Ighodaro",
    "Sean Jones",
    "David Joplin",
    "Stevie Mitchell",
    "Chase Ross",
    "Ben Gold",
    "Tre Norman",
    "Zaide Lowery",
    "Aaron Estrada",
    "Mouhamed Dioubate",
    "Grant Nelson",
    "Rylan Griffen",
    "Nick Pringle",
    "Sam Walters",
    "Mohamed Wague",
    "Davin Cosby",
    "Latrell Wrightsell",
    "Jarin Stevenson",
    "Mark Sears",
    "Jaedon LeDee",
    "Lamont Butler",
    "Micah Parrish",
    "Darrion Trammell",
    "Reese Waters",
    "Jay Pal",
    "Miles Byrd",
    "Elijah Saunders",
    "Miles Heide",
    "Demarshay Johnson",
    "BJ Davis",
    "PJ Hall",
    "Joseph Girard",
    "Chase Hunter",
    "Ian Schieffelin",
    "Chauncey Wiggins",
    "RJ Godfrey",
    "Josh Beadle",
    "Jack Clark",
    "Dillon Hunter",
    "Bas Leyte",
    "Alex Hemenway",
    "Dan Skillings",
    "Jizzle James",
    "Day Day Thomas",
    "Viktor Lakhin",
    "Jamille Reynolds",
    "John Newman",
    "Simas Lukosius",
    "Aziz Bandaogo",
    "CJ Fredrick",
    "Ody Oguama",
    "Josh Reed",
    "Robbie Avila",
    "Ryan Conwell",
    "Isaiah Swope",
    "Xavier Bledson",
    "Julian Larry",
    "Jayson Kent",
    "Jake Wolfe",
    "Masen Miller",
    "Derek Vorst",
    "Aaron Gray",
    "Eli Shetlar",
    "Jaden Daughtry",
    "Roddy Gayle",
    "Bruce Thornton",
    "Jamison Battle",
    "Zed Key",
    "Devin Royal",
    "Dale Bonner",
    "Felix Okpara",
    "Evan Mahaffey",
    "Scotty Middleton",
    "Bowen Hardman",
    "Owen Spencer",
    "Branden Carlson",
    "Deivon Smith",
    "Lawson Lovering",
    "Keba Keita",
    "Rollie Worster",
    "Gabe Madsen",
    "Cole Bajema",
    "Hunter Erickson",
    "Ben Carlson",
    "Jake Wahlin",
    "Luka Tarlac",
    "Jayden Teat",
    "DJ Burns",
    "DJ Horne",
    "Jayden Taylor",
    "Casey Morsell",
    "Ben Middlebrooks",
    "Dennis Parker",
    "Michael O'Connell",
    "Mohamed Diarra",
    "Breon Pass",
    "Kam Woods",
    "LJ Thomas",
    "MJ Rice",
    "Kadary Richmond",
    "Al-Amir Dawes",
    "Dre Davis",
    "Dylan Addae-Wusu",
    "Jaden Bediako",
    "Isaiah Coleman",
    "Elijah Hutchins-Everett",
    "Jaquan Sanders",
    "Sadraque NgaNga",
    "Malachi Brown",
    "David Tubek",
    "Kalib Boone",
    "Dedan Thomas",
    "Keylan Boone",
    "Jackie Johnson",
    "Luis Rodriguez",
    "Rob Whaley",
    "Isaiah Cottrell",
    "Jalen Hill",
    "Justin Webster",
    "Brooklyn Hicks",
    "Shane Nowell",
    "Karl Jones",
    "Joe Bamisile",
    "Max Shulga",
    "Zeb Jackson",
    "Toibu Lawal",
    "Alphonzo Billups",
    "Sean Bairstow",
    "Jason Nelson",
    "Kuany Kuany",
    "Michael Belle",
    "Christian Fermin",
    "Roosevelt Wheeler",
    "Noah Thomasson",
    "Silas Demary",
    "Justin Hill",
    "Jabri Abdur-Rahim",
    "RJ Melendez",
    "Russel Tchewa",
    "Blue Cain",
    "Jalen DeLoach",
    "Dylan James",
    "Frank Anselem-Ibe",
    "RJ Sunahara",
    "Matthew-Alexander Moncrieffe",
    "Kezza Giffa",
    "Duke Miles",
    "Kimani Hamilton",
    "Abdoulaye Thiam",
    "Trae Benham",
    "Juslin Bodo Bodo",
    "Titas Sargiunas",
    "Cade Potter",
    "Denzel Hines",
    "Pavlo Dziuba",
    "Bryson Childress",
    "Alex Schumacher",
    "Cameron Tyson",
    "Kobe Williamson",
    "John Christofilis",
    "Brandton Chatfield",
    "Paris Dawson",
    "Seyi Reiley",
    "Viktor Rajkovic",
    "Malek Gomma",
    "Vasja Pandza",
    "Matthew Levis",
    "Brody Nunn",
    "Taryn Todd",
    "Freddy Hicks",
    "Caleb Fields",
    "Dyondre Dominguez",
    "Derrian Ford",
    "Izaiyah Nelson",
    "Julian Lual",
    "Zane Butler",
    "Lado Laku",
    "Avery Felts",
    "LaQuill Hardnett",
    "Terrance Ford",
    "Rasheed Bello",
    "Jalen Jackson",
    "Anthony Roberts",
    "Quinton Morton-Robertson",
    "Corey Hadnot",
    "Eric Mulder",
    "Maximus Nelson",
    "Johnathan DeJurnett",
    "Destin Whitaker",
    "Caleb Fields",
    "Jalen Leach",
    "Brycen Goodine",
    "Jasper Floyd",
    "Louis Bleechmore",
    "Peyton Smith",
    "James Johns",
    "Alexis Yetna",
    "Birima Seck",
    "Jack Brown",
    "Michael Rogan",
    "Matt Curtis",
    "Jamarii Thomas",
    "Chris Fields",
    "Allen Betrand",
    "Christian Ings",
    "Tyrel Bladen",
    "Kuluel Mading",
    "Jack Doumbia",
    "Jaylani Darden",
    "Nyzaiah Chambers",
    "George Beale",
    "Tyrese Jenkins",
    "Daryl Anderson",
    "Terrance Jones",
    "Gilbert Brown",
    "Daman Tate"
];

function editDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;

    // Create a 2D array to store the distances
    const distances = [];
    for (let i = 0; i <= len1; i++) {
        distances[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
        distances[0][j] = j;
    }

    // Compute distances
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            distances[i][j] = Math.min(
                distances[i - 1][j] + 1, // deletion
                distances[i][j - 1] + 1, // insertion
                distances[i - 1][j - 1] + cost // substitution
            );
        }
    }

    // Return the final distance
    return distances[len1][len2];
}

function genUrlParams(keyword = 'player_points') {
    const myUrl = `https://oddsjam.com/api/backend/oddscreen/v2/game/data?sport=basketball&league=ncaab&state=MN&market_name=${keyword}&is_future=0&game_status_filter=All`;
    const myParams = {
        "headers": {
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": `https://oddsjam.com/ncaab/screen/${keyword}`,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    };
    return [myUrl, myParams];
}

function getKenPomName(otherName) {
    const editDistances = KP_PLAYERS.map(kpName => [editDistance(otherName, kpName), kpName]);
    return editDistances.sort((a, b) => (a[0] - b[0]))[0][1];
}

const etr = ETR.reduce((acc, cv) => {
    const kpName = getKenPomName(cv.Name);
    acc[kpName] = cv;
    return acc;
}, {});

async function returnJsonObj(url, params) {
    return fetch(url, params)
        .then((resp) => resp.json())
        .catch(err => {
            console.error("Error getting data: ", err);
            throw err;
        })
}

function getPlayerMetadata(playerObj, gameObj) {
    const playerMeta = {};
    const playerDisp = playerObj.rows[0].display;
    const betCategory = Object.keys(playerDisp)[0];
    const gameInfo = gameObj[playerObj.game_id];
    playerMeta['betCategory'] = betCategory;
    // playerMeta['gameId'] = playerObj.game_id;
    playerMeta['awayTeam'] = gameInfo.away_team;
    playerMeta['homeTeam'] = gameInfo.home_team;
    playerMeta['startTime'] = gameInfo.start_date;

    playerMeta['playerName'] = playerDisp[betCategory].player_name;
    const kpName = getKenPomName(playerDisp[betCategory].player_name);
    playerMeta['kenPomName'] = kpName;
    if (kpName in etr) {
        playerMeta['etrMinutes'] = etr[kpName]["Minutes"];
        playerMeta['etrFp'] = etr[kpName]["DK Points"];
    } else {
        playerMeta['etrMinutes'] = 0;
        playerMeta['etrFp'] = 0;
    }

    return playerMeta;
}

function getOverUnderOdds(playerObj) {
    if (playerObj.rows.length === 1) {
        console.log('Only one line for -->');
        console.log(playerObj);
    }

    const plOddsObj = {};

    let unders;
    let overs;
    if (playerObj.rows.length > 1) {
        unders = playerObj.rows[0].odds;
        overs = playerObj.rows[1].odds;
    } else {
        overs = playerObj.rows[0].odds;
    }


    Object.keys(overs).forEach((key) => {
        const key_nosp = key.replace(/\s+/, '');
        plOddsObj[key_nosp] = {}

        const overs_obj = Array.isArray(overs[key]) ? overs[key][0] : overs[key];
        plOddsObj[key_nosp]['over'] = overs_obj.price;
        plOddsObj[key_nosp]['line'] = overs_obj.bet_points;
    });

    if (unders) {
        Object.keys(unders).forEach((key) => {
            const key_nosp = key.replace(/\s+/, '');
            if (!(key_nosp in plOddsObj)) {
                plOddsObj[key_nosp] = {}
            }

            const unders_obj = Array.isArray(unders[key]) ? unders[key][0] : unders[key];
            plOddsObj[key_nosp]['under'] = unders_obj.price;
            plOddsObj[key_nosp]['line'] = unders_obj.bet_points;
        });
    }

    return plOddsObj;
}

// TODO: THIS HAS A BUG FOR LOOKING FOR UNDERS
function getMaxPointsOptBet(oddsObj) {
    const bookOddsObj = {
        'LowestLine': null,
        'LowestLineBook': null,
        'LowestLineOver': null,
        'LowestLineUnder': null,
        'HighestLine': null,
        'HighestLineBook': null,
        'HighestLineOver': null,
        'HighestLineUnder': null
    };

    // This is all counter-intuitive but correct
    Object.entries(oddsObj).forEach(([k, v]) => {
        bookOddsObj[`${k}Line`] = v.line;
        bookOddsObj[`${k}Under`] = v.under;
        bookOddsObj[`${k}Over`] = v.over;
        if (bookOddsObj.LowestLine == null || v.line < bookOddsObj.LowestLine || (v.line == bookOddsObj.LowestLine && v.under > bookOddsObj.LowestLineOver)) {
            bookOddsObj.LowestLine = v.line;
            bookOddsObj.LowestLineBook = k;
            bookOddsObj.LowestLineUnder = v.over;
            bookOddsObj.LowestLineOver = v.under;
        }
        if (bookOddsObj.HighestLine == null || v.line > bookOddsObj.HighestLine || (v.line == bookOddsObj.HighestLine && v.over > bookOddsObj.HighestLineUnder)) {
            bookOddsObj.HighestLine = v.line;
            bookOddsObj.HighestLineBook = k;
            bookOddsObj.HighestLineUnder = v.over;
            bookOddsObj.HighestLineOver = v.under;
        }
    });

    return bookOddsObj;
}

function getPlayerData(playerArr, gameObj) {
    const playerMetaData = getPlayerMetadata(playerArr, gameObj);
    const playerOverUnderData = getOverUnderOdds(playerArr);
    const playerAllData = getMaxPointsOptBet(playerOverUnderData);
    return { ...playerMetaData, ...playerAllData };
}

function arrayToCSV(data) {
    // Extract column names from the first array
    const columns = data.shift();

    // Convert data arrays to CSV rows
    const csvRows = data.map(row => row.join(','));

    // Join column names and CSV rows with newline characters
    return [columns.join(','), ...csvRows].join('\n');
}

function downloadCSV(csvString, filename) {
    // Create a Blob containing the CSV data
    const blob = new Blob([csvString], { type: 'text/csv' });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute and the href attribute
    link.setAttribute('download', filename);
    link.setAttribute('href', url);

    // Programmatically click the link to trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the link and revoking the URL object
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

async function getPlayerDataFilteredDate(keyword = 'player_points', filterDate = null) {
    if (!Boolean(filterDate)) {
        filterDate = (new Date()).toISOString().split('T')[0];
    }
    const [myUrl, myParams] = genUrlParams(keyword);
    return returnJsonObj(myUrl, myParams)
        // TODO: ADD BACK FILTERING BY DATE HERE IF NEEDED
        // .then(gamePlayerData => {
        //     // TODO: Consider filtering here
        //     gamePlayerData.data = gamePlayerData.data.filter(player => {
        //         let currDate = player.game_id.slice(-10);
        //         return currDate == filterDate;
        //     })
        //     return gamePlayerData;
        // })
        .then(gamePlayerData => {
            let gameObj = gamePlayerData.games;
            let plData = gamePlayerData.data;

            // super hack to remove bad Tipico rows
            let adjPlData = plData.filter(obj => {
                // Note: This pulls out the stat and allows access to the player name from the playerData object
                const key = Object.keys(obj.rows[0].display)[0];
                const displayName = obj.rows[0].display[key].player_name;
                if (displayName.slice(0, 8) === 'Winner &' || displayName === '2nd Half Total') {
                    return false;
                }
                return true;
            })

            const allData = adjPlData.map(plOb => getPlayerData(plOb, gameObj));
            return allData;
        })
}

async function getPlayerDataFilteredDateLoop(
    keywords = ['player_points'],
    filterDate = null) {
    const allData = [];

    // Map each keyword to a promise that fetches the data
    const promises = keywords.map(keyword => {
        console.log("API: ", keyword);
        return getPlayerDataFilteredDate(keyword, filterDate)
            .then(allKeywordData => {
                allData.push(...allKeywordData);
            })
            .catch(error => {
                console.log(keyword, "caused an error: ", error);
            });
    });

    await Promise.all(promises);

    return allData;
}

async function outputDataCsv(keywords = ['player_points'], filterDate = null) {
    const allData = [];

    // Map each keyword to a promise that fetches the data
    const promises = keywords.map(keyword => {
        console.log("API: ", keyword);
        return getPlayerDataFilteredDate(keyword, filterDate)
            .then(allKeywordData => {
                allData.push(...allKeywordData);
            })
            .catch(error => {
                console.log(keyword, "caused an error: ", error);
            });
    });

    // Wait for all promises to resolve
    await Promise.all(promises);

    // Process allData here
    const myObKeySet = new Set();
    for (const obj of allData) {
        for (const k of Object.keys(obj)) {
            myObKeySet.add(k);
        }
    }

    const allDataRows = allData.map(plOb => [...myObKeySet].map(obKey => plOb[obKey]));
    const allDataCols = [[...myObKeySet]];

    const myCsvArray = allDataCols.concat(allDataRows);
    const myCsvStr = arrayToCSV(myCsvArray);

    // console.log("CSV length = ", myCsvStr.length);

    return myCsvStr; // Return whatever you need here
}

function dataToCsvStr(allDataArr) {
    const myObKeySet = new Set();
    for (const obj of allDataArr) {
        for (const k of Object.keys(obj)) {
            myObKeySet.add(k);
        }
    }

    const allDataRows = allDataArr.map(plOb => [...myObKeySet].map(obKey => plOb[obKey]));
    const allDataCols = [[...myObKeySet]];

    const myCsvArray = allDataCols.concat(allDataRows);
    const myCsvStr = arrayToCSV(myCsvArray);

    console.log("CSV length = ", myCsvStr.length);

    return myCsvStr; // Return whatever you need here
}

// const formFile = document.querySelector('#input_file');
// formFile.addEventListener('input', getData, false);

function csvToJson(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split(",").map(header => header.trim());
    const result = lines.slice(1).map(line => {
        const values = line.split(",").map(value => value.trim());
        return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
        }, {});
    });
    // console.log(result);
    return result;
}

// ORIGINAL FILE LISTENER FUNCTION
function getData() {
    console.log("Starting getData()...")
    event.preventDefault();
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        console.log('The File APIs are not fully supported in this browser.');
        return;
    }

    if (!formFile.files) {
        console.log("This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!formFile.files[0]) {
        console.log("No file selected.");
    } else {
        let file = formFile.files[0];
        let fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);

        function receivedText() {
            console.log("File received!");
            var csvFile = fr.result;
            var dataJson = csvToJson(csvFile);
            console.log(`API array: ${playerApiArray} | Filter date: ${testDate}`);
            console.log("dataJson type: ", typeof (dataJson));
            console.log("dataJson #1: ", dataJson[0], "Type of: ", typeof (dataJson[0]));

            getPlayerDataFilteredDateLoop(playerApiArray, testDate)
                .then(dataPP => {
                    dataJson.forEach(plJson => {
                        dataPP.forEach((ppObj, index) => {
                            if (ppObj.playerName.trim() == plJson.Name.trim()) {
                                dataPP[index] = { ...plJson, ...ppObj };
                            }
                        })
                    })
                    // console.log("All entries have been matched! County: ", dataPP.length);
                    // const dataPpWithKp = dataPP.filter(pp => Boolean(pp.Name));
                    // console.log("First entry w/ minutes: ", dataPpWithKp[0]);
                    return dataPP;
                })
                .then(dataPP => {
                    var csvData = dataToCsvStr(dataPP);
                    return csvData;
                })
                .then(csvData => {
                    const fnDataType = 'player_props_combined';
                    const fnTimestamp = (new Date()).toLocaleString('en-GB').replaceAll(/[\/\,:]/gi, '').replace(' ', '_');
                    const filename = `${fnDataType}_${fnTimestamp}.csv`;
                    console.log(`Downloading ${filename} now...`);
                    downloadCSV(csvData, filename);
                })
                .catch(error => {
                    console.error("Error occurred:", error);
                })
                .finally(() => {
                    formFile.value = '';
                })
        }
    }
}

// ADJUSTED NO INPUT FILE CODE
function scrape() {
    // console.log("File received!");
    // var csvFile = fr.result;
    // var dataJson = csvToJson(csvFile);
    // console.log(`API array: ${playerApiArray} | Filter date: ${testDate}`);
    // console.log("dataJson type: ", typeof(dataJson));
    // console.log("dataJson #1: ", dataJson[0], "Type of: ", typeof(dataJson[0]));

    getPlayerDataFilteredDateLoop(playerApiArray, testDate)
        // .then(dataPP => {
        //     dataJson.forEach(plJson => {
        //         dataPP.forEach((ppObj, index) => {
        //             if (ppObj.playerName.trim() == plJson.Name.trim()) {
        //                 dataPP[index] = {...plJson, ...ppObj};
        //             }
        //         })
        //     })
        //     // console.log("All entries have been matched! County: ", dataPP.length);
        //     // const dataPpWithKp = dataPP.filter(pp => Boolean(pp.Name));
        //     // console.log("First entry w/ minutes: ", dataPpWithKp[0]);
        //     return dataPP;
        // })
        .then(dataPP => {
            var csvData = dataToCsvStr(dataPP);
            return csvData;
        })
        .then(csvData => {
            const fnDataType = 'player_props_combined';
            const fnTimestamp = (new Date()).toLocaleString('en-GB').replaceAll(/[\/\,:]/gi, '').replace(' ', '_');
            const filename = `${fnDataType}_${fnTimestamp}.csv`;
            console.log(`Downloading ${filename} now...`);
            downloadCSV(csvData, filename);
        })
        .catch(error => {
            console.error("Error occurred:", error);
        })
    // TODO: NOT SURE WHAT THIS DOES
    // .finally(() => {
    //     formFile.value = '';
    // })
}

scrape();
