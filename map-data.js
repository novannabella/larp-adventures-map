const HEX_ROWS = 26;
const HEX_COLS = 76;
const HEX_DATA = [
  {
    "index": 0,
    "row": 0,
    "col": 0,
    "hex": 101,
    "display": "101",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 1,
    "row": 1,
    "col": 0,
    "hex": 102,
    "display": "102",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 2,
    "row": 2,
    "col": 0,
    "hex": 103,
    "display": "103",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 3,
    "row": 3,
    "col": 0,
    "hex": 104,
    "display": "104",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 4,
    "row": 4,
    "col": 0,
    "hex": 105,
    "display": "105",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 5,
    "row": 5,
    "col": 0,
    "hex": 106,
    "display": "106",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 6,
    "row": 6,
    "col": 0,
    "hex": 107,
    "display": "107",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 7,
    "row": 7,
    "col": 0,
    "hex": 108,
    "display": "108",
    "location": "West",
    "faction": "Blackthorne",
    "name": ""
  },
  {
    "index": 8,
    "row": 8,
    "col": 0,
    "hex": 109,
    "display": "109",
    "location": "West",
    "faction": "Blackthorne",
    "name": ""
  },
  {
    "index": 9,
    "row": 9,
    "col": 0,
    "hex": 110,
    "display": "110",
    "location": "West",
    "faction": "Blackthorne",
    "name": ""
  },
  {
    "index": 10,
    "row": 10,
    "col": 0,
    "hex": 111,
    "display": "111",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 11,
    "row": 11,
    "col": 0,
    "hex": 112,
    "display": "112",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 12,
    "row": 12,
    "col": 0,
    "hex": 113,
    "display": "113",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 13,
    "row": 13,
    "col": 0,
    "hex": 114,
    "display": "114",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 14,
    "row": 14,
    "col": 0,
    "hex": 115,
    "display": "115",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 15,
    "row": 15,
    "col": 0,
    "hex": 116,
    "display": "116",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 16,
    "row": 16,
    "col": 0,
    "hex": 117,
    "display": "117",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 17,
    "row": 17,
    "col": 0,
    "hex": 118,
    "display": "118",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 18,
    "row": 18,
    "col": 0,
    "hex": 119,
    "display": "119",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 19,
    "row": 19,
    "col": 0,
    "hex": 120,
    "display": "120",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 20,
    "row": 20,
    "col": 0,
    "hex": 121,
    "display": "121",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 21,
    "row": 21,
    "col": 0,
    "hex": 122,
    "display": "122",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 22,
    "row": 22,
    "col": 0,
    "hex": 123,
    "display": "123",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 23,
    "row": 23,
    "col": 0,
    "hex": 124,
    "display": "124",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 24,
    "row": 24,
    "col": 0,
    "hex": 125,
    "display": "125",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 25,
    "row": 25,
    "col": 0,
    "hex": 126,
    "display": "126",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 26,
    "row": 0,
    "col": 1,
    "hex": 201,
    "display": "201",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 27,
    "row": 1,
    "col": 1,
    "hex": 202,
    "display": "202",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 28,
    "row": 2,
    "col": 1,
    "hex": 203,
    "display": "203",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 29,
    "row": 3,
    "col": 1,
    "hex": 204,
    "display": "204",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 30,
    "row": 4,
    "col": 1,
    "hex": 205,
    "display": "205",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 31,
    "row": 5,
    "col": 1,
    "hex": 206,
    "display": "206",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 32,
    "row": 6,
    "col": 1,
    "hex": 207,
    "display": "207",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 33,
    "row": 7,
    "col": 1,
    "hex": 208,
    "display": "208",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 34,
    "row": 8,
    "col": 1,
    "hex": 209,
    "display": "209",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 35,
    "row": 9,
    "col": 1,
    "hex": 210,
    "display": "210",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 36,
    "row": 10,
    "col": 1,
    "hex": 211,
    "display": "211",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 37,
    "row": 11,
    "col": 1,
    "hex": 212,
    "display": "212",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 38,
    "row": 12,
    "col": 1,
    "hex": 213,
    "display": "213",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 39,
    "row": 13,
    "col": 1,
    "hex": 214,
    "display": "214",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 40,
    "row": 14,
    "col": 1,
    "hex": 215,
    "display": "215",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 41,
    "row": 15,
    "col": 1,
    "hex": 216,
    "display": "216",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 42,
    "row": 16,
    "col": 1,
    "hex": 217,
    "display": "217",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 43,
    "row": 17,
    "col": 1,
    "hex": 218,
    "display": "218",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 44,
    "row": 18,
    "col": 1,
    "hex": 219,
    "display": "219",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 45,
    "row": 19,
    "col": 1,
    "hex": 220,
    "display": "220",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 46,
    "row": 20,
    "col": 1,
    "hex": 221,
    "display": "221",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 47,
    "row": 21,
    "col": 1,
    "hex": 222,
    "display": "222",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 48,
    "row": 22,
    "col": 1,
    "hex": 223,
    "display": "223",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 49,
    "row": 23,
    "col": 1,
    "hex": 224,
    "display": "224",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 50,
    "row": 24,
    "col": 1,
    "hex": 225,
    "display": "225",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 51,
    "row": 25,
    "col": 1,
    "hex": 226,
    "display": "226",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 52,
    "row": 0,
    "col": 2,
    "hex": 301,
    "display": "301",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 53,
    "row": 1,
    "col": 2,
    "hex": 302,
    "display": "302",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 54,
    "row": 2,
    "col": 2,
    "hex": 303,
    "display": "303",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 55,
    "row": 3,
    "col": 2,
    "hex": 304,
    "display": "304",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 56,
    "row": 4,
    "col": 2,
    "hex": 305,
    "display": "305",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 57,
    "row": 5,
    "col": 2,
    "hex": 306,
    "display": "306",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 58,
    "row": 6,
    "col": 2,
    "hex": 307,
    "display": "307",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 59,
    "row": 7,
    "col": 2,
    "hex": 308,
    "display": "308",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 60,
    "row": 8,
    "col": 2,
    "hex": 309,
    "display": "309",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 61,
    "row": 9,
    "col": 2,
    "hex": 310,
    "display": "310",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 62,
    "row": 10,
    "col": 2,
    "hex": 311,
    "display": "311",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 63,
    "row": 11,
    "col": 2,
    "hex": 312,
    "display": "312",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 64,
    "row": 12,
    "col": 2,
    "hex": 313,
    "display": "313",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 65,
    "row": 13,
    "col": 2,
    "hex": 314,
    "display": "314",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 66,
    "row": 14,
    "col": 2,
    "hex": 315,
    "display": "315",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 67,
    "row": 15,
    "col": 2,
    "hex": 316,
    "display": "316",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": "Oread's Summit"
  },
  {
    "index": 68,
    "row": 16,
    "col": 2,
    "hex": 317,
    "display": "317",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 69,
    "row": 17,
    "col": 2,
    "hex": 318,
    "display": "318",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 70,
    "row": 18,
    "col": 2,
    "hex": 319,
    "display": "319",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 71,
    "row": 19,
    "col": 2,
    "hex": 320,
    "display": "320",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 72,
    "row": 20,
    "col": 2,
    "hex": 321,
    "display": "321",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 73,
    "row": 21,
    "col": 2,
    "hex": 322,
    "display": "322",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 74,
    "row": 22,
    "col": 2,
    "hex": 323,
    "display": "323",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 75,
    "row": 23,
    "col": 2,
    "hex": 324,
    "display": "324",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 76,
    "row": 24,
    "col": 2,
    "hex": 325,
    "display": "325",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 77,
    "row": 25,
    "col": 2,
    "hex": 326,
    "display": "326",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 78,
    "row": 0,
    "col": 3,
    "hex": 401,
    "display": "401",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 79,
    "row": 1,
    "col": 3,
    "hex": 402,
    "display": "402",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 80,
    "row": 2,
    "col": 3,
    "hex": 403,
    "display": "403",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 81,
    "row": 3,
    "col": 3,
    "hex": 404,
    "display": "404",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 82,
    "row": 4,
    "col": 3,
    "hex": 405,
    "display": "405",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 83,
    "row": 5,
    "col": 3,
    "hex": 406,
    "display": "406",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 84,
    "row": 6,
    "col": 3,
    "hex": 407,
    "display": "407",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 85,
    "row": 7,
    "col": 3,
    "hex": 408,
    "display": "408",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 86,
    "row": 8,
    "col": 3,
    "hex": 409,
    "display": "409",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 87,
    "row": 9,
    "col": 3,
    "hex": 410,
    "display": "410",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 88,
    "row": 10,
    "col": 3,
    "hex": 411,
    "display": "411",
    "location": "West",
    "faction": "White Ravens",
    "name": "Vlthar"
  },
  {
    "index": 89,
    "row": 11,
    "col": 3,
    "hex": 412,
    "display": "412",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 90,
    "row": 12,
    "col": 3,
    "hex": 413,
    "display": "413",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 91,
    "row": 13,
    "col": 3,
    "hex": 414,
    "display": "414",
    "location": "West",
    "faction": "Blackthorne",
    "name": ""
  },
  {
    "index": 92,
    "row": 14,
    "col": 3,
    "hex": 415,
    "display": "415",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 93,
    "row": 15,
    "col": 3,
    "hex": 416,
    "display": "416",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 94,
    "row": 16,
    "col": 3,
    "hex": 417,
    "display": "417",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 95,
    "row": 17,
    "col": 3,
    "hex": 418,
    "display": "418",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 96,
    "row": 18,
    "col": 3,
    "hex": 419,
    "display": "419",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 97,
    "row": 19,
    "col": 3,
    "hex": 420,
    "display": "420",
    "location": "West",
    "faction": "Bard City",
    "name": "Funky Town"
  },
  {
    "index": 98,
    "row": 20,
    "col": 3,
    "hex": 421,
    "display": "421",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 99,
    "row": 21,
    "col": 3,
    "hex": 422,
    "display": "422",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 100,
    "row": 22,
    "col": 3,
    "hex": 423,
    "display": "423",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 101,
    "row": 23,
    "col": 3,
    "hex": 424,
    "display": "424",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 102,
    "row": 24,
    "col": 3,
    "hex": 425,
    "display": "425",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 103,
    "row": 25,
    "col": 3,
    "hex": 426,
    "display": "426",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 104,
    "row": 0,
    "col": 4,
    "hex": 501,
    "display": "501",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 105,
    "row": 1,
    "col": 4,
    "hex": 502,
    "display": "502",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 106,
    "row": 2,
    "col": 4,
    "hex": 503,
    "display": "503",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 107,
    "row": 3,
    "col": 4,
    "hex": 504,
    "display": "504",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 108,
    "row": 4,
    "col": 4,
    "hex": 505,
    "display": "505",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 109,
    "row": 5,
    "col": 4,
    "hex": 506,
    "display": "506",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 110,
    "row": 6,
    "col": 4,
    "hex": 507,
    "display": "507",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 111,
    "row": 7,
    "col": 4,
    "hex": 508,
    "display": "508",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 112,
    "row": 8,
    "col": 4,
    "hex": 509,
    "display": "509",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 113,
    "row": 9,
    "col": 4,
    "hex": 510,
    "display": "510",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 114,
    "row": 10,
    "col": 4,
    "hex": 511,
    "display": "511",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 115,
    "row": 11,
    "col": 4,
    "hex": 512,
    "display": "512",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 116,
    "row": 12,
    "col": 4,
    "hex": 513,
    "display": "513",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 117,
    "row": 13,
    "col": 4,
    "hex": 514,
    "display": "514",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 118,
    "row": 14,
    "col": 4,
    "hex": 515,
    "display": "515",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 119,
    "row": 15,
    "col": 4,
    "hex": 516,
    "display": "516",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 120,
    "row": 16,
    "col": 4,
    "hex": 517,
    "display": "517",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 121,
    "row": 17,
    "col": 4,
    "hex": 518,
    "display": "518",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 122,
    "row": 18,
    "col": 4,
    "hex": 519,
    "display": "519",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 123,
    "row": 19,
    "col": 4,
    "hex": 520,
    "display": "520",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 124,
    "row": 20,
    "col": 4,
    "hex": 521,
    "display": "521",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 125,
    "row": 21,
    "col": 4,
    "hex": 522,
    "display": "522",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 126,
    "row": 22,
    "col": 4,
    "hex": 523,
    "display": "523",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 127,
    "row": 23,
    "col": 4,
    "hex": 524,
    "display": "524",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 128,
    "row": 24,
    "col": 4,
    "hex": 525,
    "display": "525",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 129,
    "row": 25,
    "col": 4,
    "hex": 526,
    "display": "526",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 130,
    "row": 0,
    "col": 5,
    "hex": 601,
    "display": "601",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 131,
    "row": 1,
    "col": 5,
    "hex": 602,
    "display": "602",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 132,
    "row": 2,
    "col": 5,
    "hex": 603,
    "display": "603",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 133,
    "row": 3,
    "col": 5,
    "hex": 604,
    "display": "604",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 134,
    "row": 4,
    "col": 5,
    "hex": 605,
    "display": "605",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 135,
    "row": 5,
    "col": 5,
    "hex": 606,
    "display": "606",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 136,
    "row": 6,
    "col": 5,
    "hex": 607,
    "display": "607",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 137,
    "row": 7,
    "col": 5,
    "hex": 608,
    "display": "608",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 138,
    "row": 8,
    "col": 5,
    "hex": 609,
    "display": "609",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 139,
    "row": 9,
    "col": 5,
    "hex": 610,
    "display": "610",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 140,
    "row": 10,
    "col": 5,
    "hex": 611,
    "display": "611",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 141,
    "row": 11,
    "col": 5,
    "hex": 612,
    "display": "612",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 142,
    "row": 12,
    "col": 5,
    "hex": 613,
    "display": "613",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 143,
    "row": 13,
    "col": 5,
    "hex": 614,
    "display": "614",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 144,
    "row": 14,
    "col": 5,
    "hex": 615,
    "display": "615",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 145,
    "row": 15,
    "col": 5,
    "hex": 616,
    "display": "616",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 146,
    "row": 16,
    "col": 5,
    "hex": 617,
    "display": "617",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 147,
    "row": 17,
    "col": 5,
    "hex": 618,
    "display": "618",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 148,
    "row": 18,
    "col": 5,
    "hex": 619,
    "display": "619",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 149,
    "row": 19,
    "col": 5,
    "hex": 620,
    "display": "620",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 150,
    "row": 20,
    "col": 5,
    "hex": 621,
    "display": "621",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 151,
    "row": 21,
    "col": 5,
    "hex": 622,
    "display": "622",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 152,
    "row": 22,
    "col": 5,
    "hex": 623,
    "display": "623",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 153,
    "row": 23,
    "col": 5,
    "hex": 624,
    "display": "624",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 154,
    "row": 24,
    "col": 5,
    "hex": 625,
    "display": "625",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 155,
    "row": 25,
    "col": 5,
    "hex": 626,
    "display": "626",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 156,
    "row": 0,
    "col": 6,
    "hex": 701,
    "display": "701",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 157,
    "row": 1,
    "col": 6,
    "hex": 702,
    "display": "702",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 158,
    "row": 2,
    "col": 6,
    "hex": 703,
    "display": "703",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 159,
    "row": 3,
    "col": 6,
    "hex": 704,
    "display": "704",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 160,
    "row": 4,
    "col": 6,
    "hex": 705,
    "display": "705",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 161,
    "row": 5,
    "col": 6,
    "hex": 706,
    "display": "706",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 162,
    "row": 6,
    "col": 6,
    "hex": 707,
    "display": "707",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 163,
    "row": 7,
    "col": 6,
    "hex": 708,
    "display": "708",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 164,
    "row": 8,
    "col": 6,
    "hex": 709,
    "display": "709",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 165,
    "row": 9,
    "col": 6,
    "hex": 710,
    "display": "710",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 166,
    "row": 10,
    "col": 6,
    "hex": 711,
    "display": "711",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 167,
    "row": 11,
    "col": 6,
    "hex": 712,
    "display": "712",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 168,
    "row": 12,
    "col": 6,
    "hex": 713,
    "display": "713",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 169,
    "row": 13,
    "col": 6,
    "hex": 714,
    "display": "714",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 170,
    "row": 14,
    "col": 6,
    "hex": 715,
    "display": "715",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 171,
    "row": 15,
    "col": 6,
    "hex": 716,
    "display": "716",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 172,
    "row": 16,
    "col": 6,
    "hex": 717,
    "display": "717",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 173,
    "row": 17,
    "col": 6,
    "hex": 718,
    "display": "718",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 174,
    "row": 18,
    "col": 6,
    "hex": 719,
    "display": "719",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 175,
    "row": 19,
    "col": 6,
    "hex": 720,
    "display": "720",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 176,
    "row": 20,
    "col": 6,
    "hex": 721,
    "display": "721",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 177,
    "row": 21,
    "col": 6,
    "hex": 722,
    "display": "722",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 178,
    "row": 22,
    "col": 6,
    "hex": 723,
    "display": "723",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 179,
    "row": 23,
    "col": 6,
    "hex": 724,
    "display": "724",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 180,
    "row": 24,
    "col": 6,
    "hex": 725,
    "display": "725",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 181,
    "row": 25,
    "col": 6,
    "hex": 726,
    "display": "726",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 182,
    "row": 0,
    "col": 7,
    "hex": 801,
    "display": "801",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 183,
    "row": 1,
    "col": 7,
    "hex": 802,
    "display": "802",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 184,
    "row": 2,
    "col": 7,
    "hex": 803,
    "display": "803",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 185,
    "row": 3,
    "col": 7,
    "hex": 804,
    "display": "804",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 186,
    "row": 4,
    "col": 7,
    "hex": 805,
    "display": "805",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 187,
    "row": 5,
    "col": 7,
    "hex": 806,
    "display": "806",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 188,
    "row": 6,
    "col": 7,
    "hex": 807,
    "display": "807",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 189,
    "row": 7,
    "col": 7,
    "hex": 808,
    "display": "808",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 190,
    "row": 8,
    "col": 7,
    "hex": 809,
    "display": "809",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 191,
    "row": 9,
    "col": 7,
    "hex": 810,
    "display": "810",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 192,
    "row": 10,
    "col": 7,
    "hex": 811,
    "display": "811",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 193,
    "row": 11,
    "col": 7,
    "hex": 812,
    "display": "812",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 194,
    "row": 12,
    "col": 7,
    "hex": 813,
    "display": "813",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 195,
    "row": 13,
    "col": 7,
    "hex": 814,
    "display": "814",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 196,
    "row": 14,
    "col": 7,
    "hex": 815,
    "display": "815",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 197,
    "row": 15,
    "col": 7,
    "hex": 816,
    "display": "816",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 198,
    "row": 16,
    "col": 7,
    "hex": 817,
    "display": "817",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 199,
    "row": 17,
    "col": 7,
    "hex": 818,
    "display": "818",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 200,
    "row": 18,
    "col": 7,
    "hex": 819,
    "display": "819",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 201,
    "row": 19,
    "col": 7,
    "hex": 820,
    "display": "820",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 202,
    "row": 20,
    "col": 7,
    "hex": 821,
    "display": "821",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 203,
    "row": 21,
    "col": 7,
    "hex": 822,
    "display": "822",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 204,
    "row": 22,
    "col": 7,
    "hex": 823,
    "display": "823",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 205,
    "row": 23,
    "col": 7,
    "hex": 824,
    "display": "824",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 206,
    "row": 24,
    "col": 7,
    "hex": 825,
    "display": "825",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 207,
    "row": 25,
    "col": 7,
    "hex": 826,
    "display": "826",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 208,
    "row": 0,
    "col": 8,
    "hex": 901,
    "display": "901",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 209,
    "row": 1,
    "col": 8,
    "hex": 902,
    "display": "902",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 210,
    "row": 2,
    "col": 8,
    "hex": 903,
    "display": "903",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 211,
    "row": 3,
    "col": 8,
    "hex": 904,
    "display": "904",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 212,
    "row": 4,
    "col": 8,
    "hex": 905,
    "display": "905",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 213,
    "row": 5,
    "col": 8,
    "hex": 906,
    "display": "906",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 214,
    "row": 6,
    "col": 8,
    "hex": 907,
    "display": "907",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 215,
    "row": 7,
    "col": 8,
    "hex": 908,
    "display": "908",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 216,
    "row": 8,
    "col": 8,
    "hex": 909,
    "display": "909",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 217,
    "row": 9,
    "col": 8,
    "hex": 910,
    "display": "910",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 218,
    "row": 10,
    "col": 8,
    "hex": 911,
    "display": "911",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 219,
    "row": 11,
    "col": 8,
    "hex": 912,
    "display": "912",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 220,
    "row": 12,
    "col": 8,
    "hex": 913,
    "display": "913",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 221,
    "row": 13,
    "col": 8,
    "hex": 914,
    "display": "914",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 222,
    "row": 14,
    "col": 8,
    "hex": 915,
    "display": "915",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 223,
    "row": 15,
    "col": 8,
    "hex": 916,
    "display": "916",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 224,
    "row": 16,
    "col": 8,
    "hex": 917,
    "display": "917",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 225,
    "row": 17,
    "col": 8,
    "hex": 918,
    "display": "918",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 226,
    "row": 18,
    "col": 8,
    "hex": 919,
    "display": "919",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 227,
    "row": 19,
    "col": 8,
    "hex": 920,
    "display": "920",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 228,
    "row": 20,
    "col": 8,
    "hex": 921,
    "display": "921",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 229,
    "row": 21,
    "col": 8,
    "hex": 922,
    "display": "922",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 230,
    "row": 22,
    "col": 8,
    "hex": 923,
    "display": "923",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 231,
    "row": 23,
    "col": 8,
    "hex": 924,
    "display": "924",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 232,
    "row": 24,
    "col": 8,
    "hex": 925,
    "display": "925",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 233,
    "row": 25,
    "col": 8,
    "hex": 926,
    "display": "926",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 234,
    "row": 0,
    "col": 9,
    "hex": 1001,
    "display": "1001",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 235,
    "row": 1,
    "col": 9,
    "hex": 1002,
    "display": "1002",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 236,
    "row": 2,
    "col": 9,
    "hex": 1003,
    "display": "1003",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 237,
    "row": 3,
    "col": 9,
    "hex": 1004,
    "display": "1004",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 238,
    "row": 4,
    "col": 9,
    "hex": 1005,
    "display": "1005",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 239,
    "row": 5,
    "col": 9,
    "hex": 1006,
    "display": "1006",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 240,
    "row": 6,
    "col": 9,
    "hex": 1007,
    "display": "1007",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 241,
    "row": 7,
    "col": 9,
    "hex": 1008,
    "display": "1008",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 242,
    "row": 8,
    "col": 9,
    "hex": 1009,
    "display": "1009",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 243,
    "row": 9,
    "col": 9,
    "hex": 1010,
    "display": "1010",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 244,
    "row": 10,
    "col": 9,
    "hex": 1011,
    "display": "1011",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 245,
    "row": 11,
    "col": 9,
    "hex": 1012,
    "display": "1012",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 246,
    "row": 12,
    "col": 9,
    "hex": 1013,
    "display": "1013",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 247,
    "row": 13,
    "col": 9,
    "hex": 1014,
    "display": "1014",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": "Starlight Bazaar"
  },
  {
    "index": 248,
    "row": 14,
    "col": 9,
    "hex": 1015,
    "display": "1015",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 249,
    "row": 15,
    "col": 9,
    "hex": 1016,
    "display": "1016",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 250,
    "row": 16,
    "col": 9,
    "hex": 1017,
    "display": "1017",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 251,
    "row": 17,
    "col": 9,
    "hex": 1018,
    "display": "1018",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 252,
    "row": 18,
    "col": 9,
    "hex": 1019,
    "display": "1019",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 253,
    "row": 19,
    "col": 9,
    "hex": 1020,
    "display": "1020",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 254,
    "row": 20,
    "col": 9,
    "hex": 1021,
    "display": "1021",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 255,
    "row": 21,
    "col": 9,
    "hex": 1022,
    "display": "1022",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 256,
    "row": 22,
    "col": 9,
    "hex": 1023,
    "display": "1023",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 257,
    "row": 23,
    "col": 9,
    "hex": 1024,
    "display": "1024",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 258,
    "row": 24,
    "col": 9,
    "hex": 1025,
    "display": "1025",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 259,
    "row": 25,
    "col": 9,
    "hex": 1026,
    "display": "1026",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 260,
    "row": 0,
    "col": 10,
    "hex": 1101,
    "display": "1101",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 261,
    "row": 1,
    "col": 10,
    "hex": 1102,
    "display": "1102",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 262,
    "row": 2,
    "col": 10,
    "hex": 1103,
    "display": "1103",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 263,
    "row": 3,
    "col": 10,
    "hex": 1104,
    "display": "1104",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 264,
    "row": 4,
    "col": 10,
    "hex": 1105,
    "display": "1105",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 265,
    "row": 5,
    "col": 10,
    "hex": 1106,
    "display": "1106",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 266,
    "row": 6,
    "col": 10,
    "hex": 1107,
    "display": "1107",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 267,
    "row": 7,
    "col": 10,
    "hex": 1108,
    "display": "1108",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 268,
    "row": 8,
    "col": 10,
    "hex": 1109,
    "display": "1109",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 269,
    "row": 9,
    "col": 10,
    "hex": 1110,
    "display": "1110",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 270,
    "row": 10,
    "col": 10,
    "hex": 1111,
    "display": "1111",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 271,
    "row": 11,
    "col": 10,
    "hex": 1112,
    "display": "1112",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 272,
    "row": 12,
    "col": 10,
    "hex": 1113,
    "display": "1113",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 273,
    "row": 13,
    "col": 10,
    "hex": 1114,
    "display": "1114",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 274,
    "row": 14,
    "col": 10,
    "hex": 1115,
    "display": "1115",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 275,
    "row": 15,
    "col": 10,
    "hex": 1116,
    "display": "1116",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 276,
    "row": 16,
    "col": 10,
    "hex": 1117,
    "display": "1117",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 277,
    "row": 17,
    "col": 10,
    "hex": 1118,
    "display": "1118",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 278,
    "row": 18,
    "col": 10,
    "hex": 1119,
    "display": "1119",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 279,
    "row": 19,
    "col": 10,
    "hex": 1120,
    "display": "1120",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 280,
    "row": 20,
    "col": 10,
    "hex": 1121,
    "display": "1121",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 281,
    "row": 21,
    "col": 10,
    "hex": 1122,
    "display": "1122",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 282,
    "row": 22,
    "col": 10,
    "hex": 1123,
    "display": "1123",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 283,
    "row": 23,
    "col": 10,
    "hex": 1124,
    "display": "1124",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 284,
    "row": 24,
    "col": 10,
    "hex": 1125,
    "display": "1125",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 285,
    "row": 25,
    "col": 10,
    "hex": 1126,
    "display": "1126",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 286,
    "row": 0,
    "col": 11,
    "hex": 1201,
    "display": "1201",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 287,
    "row": 1,
    "col": 11,
    "hex": 1202,
    "display": "1202",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 288,
    "row": 2,
    "col": 11,
    "hex": 1203,
    "display": "1203",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 289,
    "row": 3,
    "col": 11,
    "hex": 1204,
    "display": "1204",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 290,
    "row": 4,
    "col": 11,
    "hex": 1205,
    "display": "1205",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 291,
    "row": 5,
    "col": 11,
    "hex": 1206,
    "display": "1206",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 292,
    "row": 6,
    "col": 11,
    "hex": 1207,
    "display": "1207",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 293,
    "row": 7,
    "col": 11,
    "hex": 1208,
    "display": "1208",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 294,
    "row": 8,
    "col": 11,
    "hex": 1209,
    "display": "1209",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 295,
    "row": 9,
    "col": 11,
    "hex": 1210,
    "display": "1210",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 296,
    "row": 10,
    "col": 11,
    "hex": 1211,
    "display": "1211",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 297,
    "row": 11,
    "col": 11,
    "hex": 1212,
    "display": "1212",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 298,
    "row": 12,
    "col": 11,
    "hex": 1213,
    "display": "1213",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 299,
    "row": 13,
    "col": 11,
    "hex": 1214,
    "display": "1214",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 300,
    "row": 14,
    "col": 11,
    "hex": 1215,
    "display": "1215",
    "location": "West",
    "faction": "Prismatic Troupe",
    "name": ""
  },
  {
    "index": 301,
    "row": 15,
    "col": 11,
    "hex": 1216,
    "display": "1216",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 302,
    "row": 16,
    "col": 11,
    "hex": 1217,
    "display": "1217",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 303,
    "row": 17,
    "col": 11,
    "hex": 1218,
    "display": "1218",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 304,
    "row": 18,
    "col": 11,
    "hex": 1219,
    "display": "1219",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 305,
    "row": 19,
    "col": 11,
    "hex": 1220,
    "display": "1220",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 306,
    "row": 20,
    "col": 11,
    "hex": 1221,
    "display": "1221",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 307,
    "row": 21,
    "col": 11,
    "hex": 1222,
    "display": "1222",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 308,
    "row": 22,
    "col": 11,
    "hex": 1223,
    "display": "1223",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 309,
    "row": 23,
    "col": 11,
    "hex": 1224,
    "display": "1224",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 310,
    "row": 24,
    "col": 11,
    "hex": 1225,
    "display": "1225",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 311,
    "row": 25,
    "col": 11,
    "hex": 1226,
    "display": "1226",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 312,
    "row": 0,
    "col": 12,
    "hex": 1301,
    "display": "1301",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 313,
    "row": 1,
    "col": 12,
    "hex": 1302,
    "display": "1302",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 314,
    "row": 2,
    "col": 12,
    "hex": 1303,
    "display": "1303",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 315,
    "row": 3,
    "col": 12,
    "hex": 1304,
    "display": "1304",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 316,
    "row": 4,
    "col": 12,
    "hex": 1305,
    "display": "1305",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 317,
    "row": 5,
    "col": 12,
    "hex": 1306,
    "display": "1306",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 318,
    "row": 6,
    "col": 12,
    "hex": 1307,
    "display": "1307",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 319,
    "row": 7,
    "col": 12,
    "hex": 1308,
    "display": "1308",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 320,
    "row": 8,
    "col": 12,
    "hex": 1309,
    "display": "1309",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 321,
    "row": 9,
    "col": 12,
    "hex": 1310,
    "display": "1310",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 322,
    "row": 10,
    "col": 12,
    "hex": 1311,
    "display": "1311",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 323,
    "row": 11,
    "col": 12,
    "hex": 1312,
    "display": "1312",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 324,
    "row": 12,
    "col": 12,
    "hex": 1313,
    "display": "1313",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 325,
    "row": 13,
    "col": 12,
    "hex": 1314,
    "display": "1314",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 326,
    "row": 14,
    "col": 12,
    "hex": 1315,
    "display": "1315",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 327,
    "row": 15,
    "col": 12,
    "hex": 1316,
    "display": "1316",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 328,
    "row": 16,
    "col": 12,
    "hex": 1317,
    "display": "1317",
    "location": "West",
    "faction": "White Ravens",
    "name": "Decemvirate"
  },
  {
    "index": 329,
    "row": 17,
    "col": 12,
    "hex": 1318,
    "display": "1318",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 330,
    "row": 18,
    "col": 12,
    "hex": 1319,
    "display": "1319",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 331,
    "row": 19,
    "col": 12,
    "hex": 1320,
    "display": "1320",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 332,
    "row": 20,
    "col": 12,
    "hex": 1321,
    "display": "1321",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 333,
    "row": 21,
    "col": 12,
    "hex": 1322,
    "display": "1322",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 334,
    "row": 22,
    "col": 12,
    "hex": 1323,
    "display": "1323",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 335,
    "row": 23,
    "col": 12,
    "hex": 1324,
    "display": "1324",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 336,
    "row": 24,
    "col": 12,
    "hex": 1325,
    "display": "1325",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 337,
    "row": 25,
    "col": 12,
    "hex": 1326,
    "display": "1326",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 338,
    "row": 0,
    "col": 13,
    "hex": 1401,
    "display": "1401",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 339,
    "row": 1,
    "col": 13,
    "hex": 1402,
    "display": "1402",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 340,
    "row": 2,
    "col": 13,
    "hex": 1403,
    "display": "1403",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 341,
    "row": 3,
    "col": 13,
    "hex": 1404,
    "display": "1404",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 342,
    "row": 4,
    "col": 13,
    "hex": 1405,
    "display": "1405",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 343,
    "row": 5,
    "col": 13,
    "hex": 1406,
    "display": "1406",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 344,
    "row": 6,
    "col": 13,
    "hex": 1407,
    "display": "1407",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 345,
    "row": 7,
    "col": 13,
    "hex": 1408,
    "display": "1408",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 346,
    "row": 8,
    "col": 13,
    "hex": 1409,
    "display": "1409",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 347,
    "row": 9,
    "col": 13,
    "hex": 1410,
    "display": "1410",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 348,
    "row": 10,
    "col": 13,
    "hex": 1411,
    "display": "1411",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 349,
    "row": 11,
    "col": 13,
    "hex": 1412,
    "display": "1412",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 350,
    "row": 12,
    "col": 13,
    "hex": 1413,
    "display": "1413",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 351,
    "row": 13,
    "col": 13,
    "hex": 1414,
    "display": "1414",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 352,
    "row": 14,
    "col": 13,
    "hex": 1415,
    "display": "1415",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 353,
    "row": 15,
    "col": 13,
    "hex": 1416,
    "display": "1416",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 354,
    "row": 16,
    "col": 13,
    "hex": 1417,
    "display": "1417",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 355,
    "row": 17,
    "col": 13,
    "hex": 1418,
    "display": "1418",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 356,
    "row": 18,
    "col": 13,
    "hex": 1419,
    "display": "1419",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 357,
    "row": 19,
    "col": 13,
    "hex": 1420,
    "display": "1420",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 358,
    "row": 20,
    "col": 13,
    "hex": 1421,
    "display": "1421",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 359,
    "row": 21,
    "col": 13,
    "hex": 1422,
    "display": "1422",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 360,
    "row": 22,
    "col": 13,
    "hex": 1423,
    "display": "1423",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 361,
    "row": 23,
    "col": 13,
    "hex": 1424,
    "display": "1424",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 362,
    "row": 24,
    "col": 13,
    "hex": 1425,
    "display": "1425",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 363,
    "row": 25,
    "col": 13,
    "hex": 1426,
    "display": "1426",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 364,
    "row": 0,
    "col": 14,
    "hex": 1501,
    "display": "1501",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 365,
    "row": 1,
    "col": 14,
    "hex": 1502,
    "display": "1502",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 366,
    "row": 2,
    "col": 14,
    "hex": 1503,
    "display": "1503",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 367,
    "row": 3,
    "col": 14,
    "hex": 1504,
    "display": "1504",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 368,
    "row": 4,
    "col": 14,
    "hex": 1505,
    "display": "1505",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 369,
    "row": 5,
    "col": 14,
    "hex": 1506,
    "display": "1506",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 370,
    "row": 6,
    "col": 14,
    "hex": 1507,
    "display": "1507",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 371,
    "row": 7,
    "col": 14,
    "hex": 1508,
    "display": "1508",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 372,
    "row": 8,
    "col": 14,
    "hex": 1509,
    "display": "1509",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 373,
    "row": 9,
    "col": 14,
    "hex": 1510,
    "display": "1510",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 374,
    "row": 10,
    "col": 14,
    "hex": 1511,
    "display": "1511",
    "location": "West",
    "faction": "Orc Lands",
    "name": "Three Peaks"
  },
  {
    "index": 375,
    "row": 11,
    "col": 14,
    "hex": 1512,
    "display": "1512",
    "location": "West",
    "faction": "Orc Lands",
    "name": "Three Peaks"
  },
  {
    "index": 376,
    "row": 12,
    "col": 14,
    "hex": 1513,
    "display": "1513",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 377,
    "row": 13,
    "col": 14,
    "hex": 1514,
    "display": "1514",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 378,
    "row": 14,
    "col": 14,
    "hex": 1515,
    "display": "1515",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 379,
    "row": 15,
    "col": 14,
    "hex": 1516,
    "display": "1516",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 380,
    "row": 16,
    "col": 14,
    "hex": 1517,
    "display": "1517",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 381,
    "row": 17,
    "col": 14,
    "hex": 1518,
    "display": "1518",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 382,
    "row": 18,
    "col": 14,
    "hex": 1519,
    "display": "1519",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 383,
    "row": 19,
    "col": 14,
    "hex": 1520,
    "display": "1520",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 384,
    "row": 20,
    "col": 14,
    "hex": 1521,
    "display": "1521",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 385,
    "row": 21,
    "col": 14,
    "hex": 1522,
    "display": "1522",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 386,
    "row": 22,
    "col": 14,
    "hex": 1523,
    "display": "1523",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 387,
    "row": 23,
    "col": 14,
    "hex": 1524,
    "display": "1524",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 388,
    "row": 24,
    "col": 14,
    "hex": 1525,
    "display": "1525",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 389,
    "row": 25,
    "col": 14,
    "hex": 1526,
    "display": "1526",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 390,
    "row": 0,
    "col": 15,
    "hex": 1601,
    "display": "1601",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 391,
    "row": 1,
    "col": 15,
    "hex": 1602,
    "display": "1602",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 392,
    "row": 2,
    "col": 15,
    "hex": 1603,
    "display": "1603",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 393,
    "row": 3,
    "col": 15,
    "hex": 1604,
    "display": "1604",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 394,
    "row": 4,
    "col": 15,
    "hex": 1605,
    "display": "1605",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 395,
    "row": 5,
    "col": 15,
    "hex": 1606,
    "display": "1606",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 396,
    "row": 6,
    "col": 15,
    "hex": 1607,
    "display": "1607",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 397,
    "row": 7,
    "col": 15,
    "hex": 1608,
    "display": "1608",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 398,
    "row": 8,
    "col": 15,
    "hex": 1609,
    "display": "1609",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 399,
    "row": 9,
    "col": 15,
    "hex": 1610,
    "display": "1610",
    "location": "West",
    "faction": "Orc Lands",
    "name": "Three Peaks"
  },
  {
    "index": 400,
    "row": 10,
    "col": 15,
    "hex": 1611,
    "display": "1611",
    "location": "West",
    "faction": "Orc Lands",
    "name": "Three Peaks"
  },
  {
    "index": 401,
    "row": 11,
    "col": 15,
    "hex": 1612,
    "display": "1612",
    "location": "West",
    "faction": "Orc Lands",
    "name": "Three Peaks"
  },
  {
    "index": 402,
    "row": 12,
    "col": 15,
    "hex": 1613,
    "display": "1613",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 403,
    "row": 13,
    "col": 15,
    "hex": 1614,
    "display": "1614",
    "location": "West",
    "faction": "White Ravens",
    "name": "Kerlauger"
  },
  {
    "index": 404,
    "row": 14,
    "col": 15,
    "hex": 1615,
    "display": "1615",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 405,
    "row": 15,
    "col": 15,
    "hex": 1616,
    "display": "1616",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 406,
    "row": 16,
    "col": 15,
    "hex": 1617,
    "display": "1617",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 407,
    "row": 17,
    "col": 15,
    "hex": 1618,
    "display": "1618",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 408,
    "row": 18,
    "col": 15,
    "hex": 1619,
    "display": "1619",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 409,
    "row": 19,
    "col": 15,
    "hex": 1620,
    "display": "1620",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 410,
    "row": 20,
    "col": 15,
    "hex": 1621,
    "display": "1621",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 411,
    "row": 21,
    "col": 15,
    "hex": 1622,
    "display": "1622",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 412,
    "row": 22,
    "col": 15,
    "hex": 1623,
    "display": "1623",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 413,
    "row": 23,
    "col": 15,
    "hex": 1624,
    "display": "1624",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 414,
    "row": 24,
    "col": 15,
    "hex": 1625,
    "display": "1625",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 415,
    "row": 25,
    "col": 15,
    "hex": 1626,
    "display": "1626",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 416,
    "row": 0,
    "col": 16,
    "hex": 1701,
    "display": "1701",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 417,
    "row": 1,
    "col": 16,
    "hex": 1702,
    "display": "1702",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 418,
    "row": 2,
    "col": 16,
    "hex": 1703,
    "display": "1703",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 419,
    "row": 3,
    "col": 16,
    "hex": 1704,
    "display": "1704",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 420,
    "row": 4,
    "col": 16,
    "hex": 1705,
    "display": "1705",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 421,
    "row": 5,
    "col": 16,
    "hex": 1706,
    "display": "1706",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 422,
    "row": 6,
    "col": 16,
    "hex": 1707,
    "display": "1707",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 423,
    "row": 7,
    "col": 16,
    "hex": 1708,
    "display": "1708",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 424,
    "row": 8,
    "col": 16,
    "hex": 1709,
    "display": "1709",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 425,
    "row": 9,
    "col": 16,
    "hex": 1710,
    "display": "1710",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 426,
    "row": 10,
    "col": 16,
    "hex": 1711,
    "display": "1711",
    "location": "West",
    "faction": "Orc Lands",
    "name": "Three Peaks"
  },
  {
    "index": 427,
    "row": 11,
    "col": 16,
    "hex": 1712,
    "display": "1712",
    "location": "West",
    "faction": "Orc Lands",
    "name": "Three Peaks"
  },
  {
    "index": 428,
    "row": 12,
    "col": 16,
    "hex": 1713,
    "display": "1713",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 429,
    "row": 13,
    "col": 16,
    "hex": 1714,
    "display": "1714",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 430,
    "row": 14,
    "col": 16,
    "hex": 1715,
    "display": "1715",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 431,
    "row": 15,
    "col": 16,
    "hex": 1716,
    "display": "1716",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 432,
    "row": 16,
    "col": 16,
    "hex": 1717,
    "display": "1717",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 433,
    "row": 17,
    "col": 16,
    "hex": 1718,
    "display": "1718",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 434,
    "row": 18,
    "col": 16,
    "hex": 1719,
    "display": "1719",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 435,
    "row": 19,
    "col": 16,
    "hex": 1720,
    "display": "1720",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 436,
    "row": 20,
    "col": 16,
    "hex": 1721,
    "display": "1721",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 437,
    "row": 21,
    "col": 16,
    "hex": 1722,
    "display": "1722",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 438,
    "row": 22,
    "col": 16,
    "hex": 1723,
    "display": "1723",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 439,
    "row": 23,
    "col": 16,
    "hex": 1724,
    "display": "1724",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 440,
    "row": 24,
    "col": 16,
    "hex": 1725,
    "display": "1725",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 441,
    "row": 25,
    "col": 16,
    "hex": 1726,
    "display": "1726",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 442,
    "row": 0,
    "col": 17,
    "hex": 1801,
    "display": "1801",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 443,
    "row": 1,
    "col": 17,
    "hex": 1802,
    "display": "1802",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 444,
    "row": 2,
    "col": 17,
    "hex": 1803,
    "display": "1803",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 445,
    "row": 3,
    "col": 17,
    "hex": 1804,
    "display": "1804",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 446,
    "row": 4,
    "col": 17,
    "hex": 1805,
    "display": "1805",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 447,
    "row": 5,
    "col": 17,
    "hex": 1806,
    "display": "1806",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 448,
    "row": 6,
    "col": 17,
    "hex": 1807,
    "display": "1807",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 449,
    "row": 7,
    "col": 17,
    "hex": 1808,
    "display": "1808",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 450,
    "row": 8,
    "col": 17,
    "hex": 1809,
    "display": "1809",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 451,
    "row": 9,
    "col": 17,
    "hex": 1810,
    "display": "1810",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 452,
    "row": 10,
    "col": 17,
    "hex": 1811,
    "display": "1811",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 453,
    "row": 11,
    "col": 17,
    "hex": 1812,
    "display": "1812",
    "location": "West",
    "faction": "Irregulars",
    "name": ""
  },
  {
    "index": 454,
    "row": 12,
    "col": 17,
    "hex": 1813,
    "display": "1813",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 455,
    "row": 13,
    "col": 17,
    "hex": 1814,
    "display": "1814",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 456,
    "row": 14,
    "col": 17,
    "hex": 1815,
    "display": "1815",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 457,
    "row": 15,
    "col": 17,
    "hex": 1816,
    "display": "1816",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 458,
    "row": 16,
    "col": 17,
    "hex": 1817,
    "display": "1817",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 459,
    "row": 17,
    "col": 17,
    "hex": 1818,
    "display": "1818",
    "location": "West",
    "faction": "White Ravens",
    "name": "Greywatch"
  },
  {
    "index": 460,
    "row": 18,
    "col": 17,
    "hex": 1819,
    "display": "1819",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 461,
    "row": 19,
    "col": 17,
    "hex": 1820,
    "display": "1820",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 462,
    "row": 20,
    "col": 17,
    "hex": 1821,
    "display": "1821",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 463,
    "row": 21,
    "col": 17,
    "hex": 1822,
    "display": "1822",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 464,
    "row": 22,
    "col": 17,
    "hex": 1823,
    "display": "1823",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 465,
    "row": 23,
    "col": 17,
    "hex": 1824,
    "display": "1824",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 466,
    "row": 24,
    "col": 17,
    "hex": 1825,
    "display": "1825",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 467,
    "row": 25,
    "col": 17,
    "hex": 1826,
    "display": "1826",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 468,
    "row": 0,
    "col": 18,
    "hex": 1901,
    "display": "1901",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 469,
    "row": 1,
    "col": 18,
    "hex": 1902,
    "display": "1902",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 470,
    "row": 2,
    "col": 18,
    "hex": 1903,
    "display": "1903",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 471,
    "row": 3,
    "col": 18,
    "hex": 1904,
    "display": "1904",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 472,
    "row": 4,
    "col": 18,
    "hex": 1905,
    "display": "1905",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 473,
    "row": 5,
    "col": 18,
    "hex": 1906,
    "display": "1906",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 474,
    "row": 6,
    "col": 18,
    "hex": 1907,
    "display": "1907",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 475,
    "row": 7,
    "col": 18,
    "hex": 1908,
    "display": "1908",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 476,
    "row": 8,
    "col": 18,
    "hex": 1909,
    "display": "1909",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 477,
    "row": 9,
    "col": 18,
    "hex": 1910,
    "display": "1910",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 478,
    "row": 10,
    "col": 18,
    "hex": 1911,
    "display": "1911",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 479,
    "row": 11,
    "col": 18,
    "hex": 1912,
    "display": "1912",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 480,
    "row": 12,
    "col": 18,
    "hex": 1913,
    "display": "1913",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 481,
    "row": 13,
    "col": 18,
    "hex": 1914,
    "display": "1914",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 482,
    "row": 14,
    "col": 18,
    "hex": 1915,
    "display": "1915",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 483,
    "row": 15,
    "col": 18,
    "hex": 1916,
    "display": "1916",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 484,
    "row": 16,
    "col": 18,
    "hex": 1917,
    "display": "1917",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 485,
    "row": 17,
    "col": 18,
    "hex": 1918,
    "display": "1918",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 486,
    "row": 18,
    "col": 18,
    "hex": 1919,
    "display": "1919",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 487,
    "row": 19,
    "col": 18,
    "hex": 1920,
    "display": "1920",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 488,
    "row": 20,
    "col": 18,
    "hex": 1921,
    "display": "1921",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 489,
    "row": 21,
    "col": 18,
    "hex": 1922,
    "display": "1922",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 490,
    "row": 22,
    "col": 18,
    "hex": 1923,
    "display": "1923",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 491,
    "row": 23,
    "col": 18,
    "hex": 1924,
    "display": "1924",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 492,
    "row": 24,
    "col": 18,
    "hex": 1925,
    "display": "1925",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 493,
    "row": 25,
    "col": 18,
    "hex": 1926,
    "display": "1926",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 494,
    "row": 0,
    "col": 19,
    "hex": 2001,
    "display": "2001",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 495,
    "row": 1,
    "col": 19,
    "hex": 2002,
    "display": "2002",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 496,
    "row": 2,
    "col": 19,
    "hex": 2003,
    "display": "2003",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 497,
    "row": 3,
    "col": 19,
    "hex": 2004,
    "display": "2004",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 498,
    "row": 4,
    "col": 19,
    "hex": 2005,
    "display": "2005",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 499,
    "row": 5,
    "col": 19,
    "hex": 2006,
    "display": "2006",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 500,
    "row": 6,
    "col": 19,
    "hex": 2007,
    "display": "2007",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 501,
    "row": 7,
    "col": 19,
    "hex": 2008,
    "display": "2008",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 502,
    "row": 8,
    "col": 19,
    "hex": 2009,
    "display": "2009",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 503,
    "row": 9,
    "col": 19,
    "hex": 2010,
    "display": "2010",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 504,
    "row": 10,
    "col": 19,
    "hex": 2011,
    "display": "2011",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 505,
    "row": 11,
    "col": 19,
    "hex": 2012,
    "display": "2012",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 506,
    "row": 12,
    "col": 19,
    "hex": 2013,
    "display": "2013",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 507,
    "row": 13,
    "col": 19,
    "hex": 2014,
    "display": "2014",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 508,
    "row": 14,
    "col": 19,
    "hex": 2015,
    "display": "2015",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 509,
    "row": 15,
    "col": 19,
    "hex": 2016,
    "display": "2016",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 510,
    "row": 16,
    "col": 19,
    "hex": 2017,
    "display": "2017",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 511,
    "row": 17,
    "col": 19,
    "hex": 2018,
    "display": "2018",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 512,
    "row": 18,
    "col": 19,
    "hex": 2019,
    "display": "2019",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 513,
    "row": 19,
    "col": 19,
    "hex": 2020,
    "display": "2020",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 514,
    "row": 20,
    "col": 19,
    "hex": 2021,
    "display": "2021",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 515,
    "row": 21,
    "col": 19,
    "hex": 2022,
    "display": "2022",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 516,
    "row": 22,
    "col": 19,
    "hex": 2023,
    "display": "2023",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 517,
    "row": 23,
    "col": 19,
    "hex": 2024,
    "display": "2024",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 518,
    "row": 24,
    "col": 19,
    "hex": 2025,
    "display": "2025",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 519,
    "row": 25,
    "col": 19,
    "hex": 2026,
    "display": "2026",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 520,
    "row": 0,
    "col": 20,
    "hex": 2101,
    "display": "2101",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 521,
    "row": 1,
    "col": 20,
    "hex": 2102,
    "display": "2102",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 522,
    "row": 2,
    "col": 20,
    "hex": 2103,
    "display": "2103",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 523,
    "row": 3,
    "col": 20,
    "hex": 2104,
    "display": "2104",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 524,
    "row": 4,
    "col": 20,
    "hex": 2105,
    "display": "2105",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 525,
    "row": 5,
    "col": 20,
    "hex": 2106,
    "display": "2106",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 526,
    "row": 6,
    "col": 20,
    "hex": 2107,
    "display": "2107",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 527,
    "row": 7,
    "col": 20,
    "hex": 2108,
    "display": "2108",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 528,
    "row": 8,
    "col": 20,
    "hex": 2109,
    "display": "2109",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 529,
    "row": 9,
    "col": 20,
    "hex": 2110,
    "display": "2110",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 530,
    "row": 10,
    "col": 20,
    "hex": 2111,
    "display": "2111",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 531,
    "row": 11,
    "col": 20,
    "hex": 2112,
    "display": "2112",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 532,
    "row": 12,
    "col": 20,
    "hex": 2113,
    "display": "2113",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 533,
    "row": 13,
    "col": 20,
    "hex": 2114,
    "display": "2114",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 534,
    "row": 14,
    "col": 20,
    "hex": 2115,
    "display": "2115",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 535,
    "row": 15,
    "col": 20,
    "hex": 2116,
    "display": "2116",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 536,
    "row": 16,
    "col": 20,
    "hex": 2117,
    "display": "2117",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 537,
    "row": 17,
    "col": 20,
    "hex": 2118,
    "display": "2118",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 538,
    "row": 18,
    "col": 20,
    "hex": 2119,
    "display": "2119",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 539,
    "row": 19,
    "col": 20,
    "hex": 2120,
    "display": "2120",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 540,
    "row": 20,
    "col": 20,
    "hex": 2121,
    "display": "2121",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 541,
    "row": 21,
    "col": 20,
    "hex": 2122,
    "display": "2122",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 542,
    "row": 22,
    "col": 20,
    "hex": 2123,
    "display": "2123",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 543,
    "row": 23,
    "col": 20,
    "hex": 2124,
    "display": "2124",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 544,
    "row": 24,
    "col": 20,
    "hex": 2125,
    "display": "2125",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 545,
    "row": 25,
    "col": 20,
    "hex": 2126,
    "display": "2126",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 546,
    "row": 0,
    "col": 21,
    "hex": 2201,
    "display": "2201",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 547,
    "row": 1,
    "col": 21,
    "hex": 2202,
    "display": "2202",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 548,
    "row": 2,
    "col": 21,
    "hex": 2203,
    "display": "2203",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 549,
    "row": 3,
    "col": 21,
    "hex": 2204,
    "display": "2204",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 550,
    "row": 4,
    "col": 21,
    "hex": 2205,
    "display": "2205",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 551,
    "row": 5,
    "col": 21,
    "hex": 2206,
    "display": "2206",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 552,
    "row": 6,
    "col": 21,
    "hex": 2207,
    "display": "2207",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 553,
    "row": 7,
    "col": 21,
    "hex": 2208,
    "display": "2208",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 554,
    "row": 8,
    "col": 21,
    "hex": 2209,
    "display": "2209",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 555,
    "row": 9,
    "col": 21,
    "hex": 2210,
    "display": "2210",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 556,
    "row": 10,
    "col": 21,
    "hex": 2211,
    "display": "2211",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 557,
    "row": 11,
    "col": 21,
    "hex": 2212,
    "display": "2212",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 558,
    "row": 12,
    "col": 21,
    "hex": 2213,
    "display": "2213",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 559,
    "row": 13,
    "col": 21,
    "hex": 2214,
    "display": "2214",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 560,
    "row": 14,
    "col": 21,
    "hex": 2215,
    "display": "2215",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 561,
    "row": 15,
    "col": 21,
    "hex": 2216,
    "display": "2216",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 562,
    "row": 16,
    "col": 21,
    "hex": 2217,
    "display": "2217",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 563,
    "row": 17,
    "col": 21,
    "hex": 2218,
    "display": "2218",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 564,
    "row": 18,
    "col": 21,
    "hex": 2219,
    "display": "2219",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 565,
    "row": 19,
    "col": 21,
    "hex": 2220,
    "display": "2220",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 566,
    "row": 20,
    "col": 21,
    "hex": 2221,
    "display": "2221",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 567,
    "row": 21,
    "col": 21,
    "hex": 2222,
    "display": "2222",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 568,
    "row": 22,
    "col": 21,
    "hex": 2223,
    "display": "2223",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 569,
    "row": 23,
    "col": 21,
    "hex": 2224,
    "display": "2224",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 570,
    "row": 24,
    "col": 21,
    "hex": 2225,
    "display": "2225",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 571,
    "row": 25,
    "col": 21,
    "hex": 2226,
    "display": "2226",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 572,
    "row": 0,
    "col": 22,
    "hex": 2301,
    "display": "2301",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 573,
    "row": 1,
    "col": 22,
    "hex": 2302,
    "display": "2302",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 574,
    "row": 2,
    "col": 22,
    "hex": 2303,
    "display": "2303",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 575,
    "row": 3,
    "col": 22,
    "hex": 2304,
    "display": "2304",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 576,
    "row": 4,
    "col": 22,
    "hex": 2305,
    "display": "2305",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 577,
    "row": 5,
    "col": 22,
    "hex": 2306,
    "display": "2306",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 578,
    "row": 6,
    "col": 22,
    "hex": 2307,
    "display": "2307",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 579,
    "row": 7,
    "col": 22,
    "hex": 2308,
    "display": "2308",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 580,
    "row": 8,
    "col": 22,
    "hex": 2309,
    "display": "2309",
    "location": "West",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 581,
    "row": 9,
    "col": 22,
    "hex": 2310,
    "display": "2310",
    "location": "West",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 582,
    "row": 10,
    "col": 22,
    "hex": 2311,
    "display": "2311",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 583,
    "row": 11,
    "col": 22,
    "hex": 2312,
    "display": "2312",
    "location": "West",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 584,
    "row": 12,
    "col": 22,
    "hex": 2313,
    "display": "2313",
    "location": "West",
    "faction": "Vidarians",
    "name": "Shakhet"
  },
  {
    "index": 585,
    "row": 13,
    "col": 22,
    "hex": 2314,
    "display": "2314",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 586,
    "row": 14,
    "col": 22,
    "hex": 2315,
    "display": "2315",
    "location": "West",
    "faction": "Vidarians",
    "name": "Khokhbatuul"
  },
  {
    "index": 587,
    "row": 15,
    "col": 22,
    "hex": 2316,
    "display": "2316",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 588,
    "row": 16,
    "col": 22,
    "hex": 2317,
    "display": "2317",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 589,
    "row": 17,
    "col": 22,
    "hex": 2318,
    "display": "2318",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 590,
    "row": 18,
    "col": 22,
    "hex": 2319,
    "display": "2319",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 591,
    "row": 19,
    "col": 22,
    "hex": 2320,
    "display": "2320",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 592,
    "row": 20,
    "col": 22,
    "hex": 2321,
    "display": "2321",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 593,
    "row": 21,
    "col": 22,
    "hex": 2322,
    "display": "2322",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 594,
    "row": 22,
    "col": 22,
    "hex": 2323,
    "display": "2323",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 595,
    "row": 23,
    "col": 22,
    "hex": 2324,
    "display": "2324",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 596,
    "row": 24,
    "col": 22,
    "hex": 2325,
    "display": "2325",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 597,
    "row": 25,
    "col": 22,
    "hex": 2326,
    "display": "2326",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 598,
    "row": 0,
    "col": 23,
    "hex": 2401,
    "display": "2401",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 599,
    "row": 1,
    "col": 23,
    "hex": 2402,
    "display": "2402",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 600,
    "row": 2,
    "col": 23,
    "hex": 2403,
    "display": "2403",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 601,
    "row": 3,
    "col": 23,
    "hex": 2404,
    "display": "2404",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 602,
    "row": 4,
    "col": 23,
    "hex": 2405,
    "display": "2405",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 603,
    "row": 5,
    "col": 23,
    "hex": 2406,
    "display": "2406",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 604,
    "row": 6,
    "col": 23,
    "hex": 2407,
    "display": "2407",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 605,
    "row": 7,
    "col": 23,
    "hex": 2408,
    "display": "2408",
    "location": "West",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 606,
    "row": 8,
    "col": 23,
    "hex": 2409,
    "display": "2409",
    "location": "West",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 607,
    "row": 9,
    "col": 23,
    "hex": 2410,
    "display": "2410",
    "location": "West",
    "faction": "Silver Branches",
    "name": "Crossroads"
  },
  {
    "index": 608,
    "row": 10,
    "col": 23,
    "hex": 2411,
    "display": "2411",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 609,
    "row": 11,
    "col": 23,
    "hex": 2412,
    "display": "2412",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 610,
    "row": 12,
    "col": 23,
    "hex": 2413,
    "display": "2413",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 611,
    "row": 13,
    "col": 23,
    "hex": 2414,
    "display": "2414",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 612,
    "row": 14,
    "col": 23,
    "hex": 2415,
    "display": "2415",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 613,
    "row": 15,
    "col": 23,
    "hex": 2416,
    "display": "2416",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 614,
    "row": 16,
    "col": 23,
    "hex": 2417,
    "display": "2417",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 615,
    "row": 17,
    "col": 23,
    "hex": 2418,
    "display": "2418",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 616,
    "row": 18,
    "col": 23,
    "hex": 2419,
    "display": "2419",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 617,
    "row": 19,
    "col": 23,
    "hex": 2420,
    "display": "2420",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 618,
    "row": 20,
    "col": 23,
    "hex": 2421,
    "display": "2421",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 619,
    "row": 21,
    "col": 23,
    "hex": 2422,
    "display": "2422",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 620,
    "row": 22,
    "col": 23,
    "hex": 2423,
    "display": "2423",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 621,
    "row": 23,
    "col": 23,
    "hex": 2424,
    "display": "2424",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 622,
    "row": 24,
    "col": 23,
    "hex": 2425,
    "display": "2425",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 623,
    "row": 25,
    "col": 23,
    "hex": 2426,
    "display": "2426",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 624,
    "row": 0,
    "col": 24,
    "hex": 2501,
    "display": "2501",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 625,
    "row": 1,
    "col": 24,
    "hex": 2502,
    "display": "2502",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 626,
    "row": 2,
    "col": 24,
    "hex": 2503,
    "display": "2503",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 627,
    "row": 3,
    "col": 24,
    "hex": 2504,
    "display": "2504",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 628,
    "row": 4,
    "col": 24,
    "hex": 2505,
    "display": "2505",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 629,
    "row": 5,
    "col": 24,
    "hex": 2506,
    "display": "2506",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 630,
    "row": 6,
    "col": 24,
    "hex": 2507,
    "display": "2507",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 631,
    "row": 7,
    "col": 24,
    "hex": 2508,
    "display": "2508",
    "location": "West",
    "faction": "Silver Branches",
    "name": "Ceoch Abhainn"
  },
  {
    "index": 632,
    "row": 8,
    "col": 24,
    "hex": 2509,
    "display": "2509",
    "location": "West",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 633,
    "row": 9,
    "col": 24,
    "hex": 2510,
    "display": "2510",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 634,
    "row": 10,
    "col": 24,
    "hex": 2511,
    "display": "2511",
    "location": "West",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 635,
    "row": 11,
    "col": 24,
    "hex": 2512,
    "display": "2512",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 636,
    "row": 12,
    "col": 24,
    "hex": 2513,
    "display": "2513",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 637,
    "row": 13,
    "col": 24,
    "hex": 2514,
    "display": "2514",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 638,
    "row": 14,
    "col": 24,
    "hex": 2515,
    "display": "2515",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 639,
    "row": 15,
    "col": 24,
    "hex": 2516,
    "display": "2516",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 640,
    "row": 16,
    "col": 24,
    "hex": 2517,
    "display": "2517",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 641,
    "row": 17,
    "col": 24,
    "hex": 2518,
    "display": "2518",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 642,
    "row": 18,
    "col": 24,
    "hex": 2519,
    "display": "2519",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 643,
    "row": 19,
    "col": 24,
    "hex": 2520,
    "display": "2520",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 644,
    "row": 20,
    "col": 24,
    "hex": 2521,
    "display": "2521",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 645,
    "row": 21,
    "col": 24,
    "hex": 2522,
    "display": "2522",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 646,
    "row": 22,
    "col": 24,
    "hex": 2523,
    "display": "2523",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 647,
    "row": 23,
    "col": 24,
    "hex": 2524,
    "display": "2524",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 648,
    "row": 24,
    "col": 24,
    "hex": 2525,
    "display": "2525",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 649,
    "row": 25,
    "col": 24,
    "hex": 2526,
    "display": "2526",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 650,
    "row": 0,
    "col": 25,
    "hex": 2601,
    "display": "2601",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 651,
    "row": 1,
    "col": 25,
    "hex": 2602,
    "display": "2602",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 652,
    "row": 2,
    "col": 25,
    "hex": 2603,
    "display": "2603",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 653,
    "row": 3,
    "col": 25,
    "hex": 2604,
    "display": "2604",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 654,
    "row": 4,
    "col": 25,
    "hex": 2605,
    "display": "2605",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 655,
    "row": 5,
    "col": 25,
    "hex": 2606,
    "display": "2606",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 656,
    "row": 6,
    "col": 25,
    "hex": 2607,
    "display": "2607",
    "location": "West",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 657,
    "row": 7,
    "col": 25,
    "hex": 2608,
    "display": "2608",
    "location": "West",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 658,
    "row": 8,
    "col": 25,
    "hex": 2609,
    "display": "2609",
    "location": "West",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 659,
    "row": 9,
    "col": 25,
    "hex": 2610,
    "display": "2610",
    "location": "West",
    "faction": "Vidarians",
    "name": "Chugol"
  },
  {
    "index": 660,
    "row": 10,
    "col": 25,
    "hex": 2611,
    "display": "2611",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 661,
    "row": 11,
    "col": 25,
    "hex": 2612,
    "display": "2612",
    "location": "West",
    "faction": "Vidarians",
    "name": "Shigon"
  },
  {
    "index": 662,
    "row": 12,
    "col": 25,
    "hex": 2613,
    "display": "2613",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 663,
    "row": 13,
    "col": 25,
    "hex": 2614,
    "display": "2614",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 664,
    "row": 14,
    "col": 25,
    "hex": 2615,
    "display": "2615",
    "location": "West",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 665,
    "row": 15,
    "col": 25,
    "hex": 2616,
    "display": "2616",
    "location": "West",
    "faction": "Vidarians",
    "name": "Kishahr"
  },
  {
    "index": 666,
    "row": 16,
    "col": 25,
    "hex": 2617,
    "display": "2617",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 667,
    "row": 17,
    "col": 25,
    "hex": 2618,
    "display": "2618",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 668,
    "row": 18,
    "col": 25,
    "hex": 2619,
    "display": "2619",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 669,
    "row": 19,
    "col": 25,
    "hex": 2620,
    "display": "2620",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 670,
    "row": 20,
    "col": 25,
    "hex": 2621,
    "display": "2621",
    "location": "West",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 671,
    "row": 21,
    "col": 25,
    "hex": 2622,
    "display": "2622",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 672,
    "row": 22,
    "col": 25,
    "hex": 2623,
    "display": "2623",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 673,
    "row": 23,
    "col": 25,
    "hex": 2624,
    "display": "2624",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 674,
    "row": 24,
    "col": 25,
    "hex": 2625,
    "display": "2625",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 675,
    "row": 25,
    "col": 25,
    "hex": 2626,
    "display": "2626",
    "location": "West",
    "faction": "",
    "name": ""
  },
  {
    "index": 676,
    "row": 0,
    "col": 26,
    "hex": 2701,
    "display": "2701",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 677,
    "row": 1,
    "col": 26,
    "hex": 2702,
    "display": "2702",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 678,
    "row": 2,
    "col": 26,
    "hex": 2703,
    "display": "2703",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 679,
    "row": 3,
    "col": 26,
    "hex": 2704,
    "display": "2704",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 680,
    "row": 4,
    "col": 26,
    "hex": 2705,
    "display": "2705",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 681,
    "row": 5,
    "col": 26,
    "hex": 2706,
    "display": "2706",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 682,
    "row": 6,
    "col": 26,
    "hex": 2707,
    "display": "2707",
    "location": "Center",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 683,
    "row": 7,
    "col": 26,
    "hex": 2708,
    "display": "2708",
    "location": "Center",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 684,
    "row": 8,
    "col": 26,
    "hex": 2709,
    "display": "2709",
    "location": "Center",
    "faction": "Silver Branches",
    "name": ""
  },
  {
    "index": 685,
    "row": 9,
    "col": 26,
    "hex": 2710,
    "display": "2710",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 686,
    "row": 10,
    "col": 26,
    "hex": 2711,
    "display": "2711",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 687,
    "row": 11,
    "col": 26,
    "hex": 2712,
    "display": "2712",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 688,
    "row": 12,
    "col": 26,
    "hex": 2713,
    "display": "2713",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 689,
    "row": 13,
    "col": 26,
    "hex": 2714,
    "display": "2714",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 690,
    "row": 14,
    "col": 26,
    "hex": 2715,
    "display": "2715",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 691,
    "row": 15,
    "col": 26,
    "hex": 2716,
    "display": "2716",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 692,
    "row": 16,
    "col": 26,
    "hex": 2717,
    "display": "2717",
    "location": "Center",
    "faction": "White Ravens",
    "name": "Tidewater"
  },
  {
    "index": 693,
    "row": 17,
    "col": 26,
    "hex": 2718,
    "display": "2718",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 694,
    "row": 18,
    "col": 26,
    "hex": 2719,
    "display": "2719",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 695,
    "row": 19,
    "col": 26,
    "hex": 2720,
    "display": "2720",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 696,
    "row": 20,
    "col": 26,
    "hex": 2721,
    "display": "2721",
    "location": "Center",
    "faction": "White Ravens",
    "name": "Zone of Chaos"
  },
  {
    "index": 697,
    "row": 21,
    "col": 26,
    "hex": 2722,
    "display": "2722",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 698,
    "row": 22,
    "col": 26,
    "hex": 2723,
    "display": "2723",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 699,
    "row": 23,
    "col": 26,
    "hex": 2724,
    "display": "2724",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 700,
    "row": 24,
    "col": 26,
    "hex": 2725,
    "display": "2725",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 701,
    "row": 25,
    "col": 26,
    "hex": 2726,
    "display": "2726",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 702,
    "row": 0,
    "col": 27,
    "hex": 2801,
    "display": "2801",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 703,
    "row": 1,
    "col": 27,
    "hex": 2802,
    "display": "2802",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 704,
    "row": 2,
    "col": 27,
    "hex": 2803,
    "display": "2803",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 705,
    "row": 3,
    "col": 27,
    "hex": 2804,
    "display": "2804",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 706,
    "row": 4,
    "col": 27,
    "hex": 2805,
    "display": "2805",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 707,
    "row": 5,
    "col": 27,
    "hex": 2806,
    "display": "2806",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 708,
    "row": 6,
    "col": 27,
    "hex": 2807,
    "display": "2807",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 709,
    "row": 7,
    "col": 27,
    "hex": 2808,
    "display": "2808",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 710,
    "row": 8,
    "col": 27,
    "hex": 2809,
    "display": "2809",
    "location": "Center",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 711,
    "row": 9,
    "col": 27,
    "hex": 2810,
    "display": "2810",
    "location": "Center",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 712,
    "row": 10,
    "col": 27,
    "hex": 2811,
    "display": "2811",
    "location": "Center",
    "faction": "Vidarians",
    "name": "Shidher"
  },
  {
    "index": 713,
    "row": 11,
    "col": 27,
    "hex": 2812,
    "display": "2812",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 714,
    "row": 12,
    "col": 27,
    "hex": 2813,
    "display": "2813",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 715,
    "row": 13,
    "col": 27,
    "hex": 2814,
    "display": "2814",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 716,
    "row": 14,
    "col": 27,
    "hex": 2815,
    "display": "2815",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 717,
    "row": 15,
    "col": 27,
    "hex": 2816,
    "display": "2816",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 718,
    "row": 16,
    "col": 27,
    "hex": 2817,
    "display": "2817",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 719,
    "row": 17,
    "col": 27,
    "hex": 2818,
    "display": "2818",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 720,
    "row": 18,
    "col": 27,
    "hex": 2819,
    "display": "2819",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 721,
    "row": 19,
    "col": 27,
    "hex": 2820,
    "display": "2820",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 722,
    "row": 20,
    "col": 27,
    "hex": 2821,
    "display": "2821",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 723,
    "row": 21,
    "col": 27,
    "hex": 2822,
    "display": "2822",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 724,
    "row": 22,
    "col": 27,
    "hex": 2823,
    "display": "2823",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 725,
    "row": 23,
    "col": 27,
    "hex": 2824,
    "display": "2824",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 726,
    "row": 24,
    "col": 27,
    "hex": 2825,
    "display": "2825",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 727,
    "row": 25,
    "col": 27,
    "hex": 2826,
    "display": "2826",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 728,
    "row": 0,
    "col": 28,
    "hex": 2901,
    "display": "2901",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 729,
    "row": 1,
    "col": 28,
    "hex": 2902,
    "display": "2902",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 730,
    "row": 2,
    "col": 28,
    "hex": 2903,
    "display": "2903",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 731,
    "row": 3,
    "col": 28,
    "hex": 2904,
    "display": "2904",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 732,
    "row": 4,
    "col": 28,
    "hex": 2905,
    "display": "2905",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 733,
    "row": 5,
    "col": 28,
    "hex": 2906,
    "display": "2906",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 734,
    "row": 6,
    "col": 28,
    "hex": 2907,
    "display": "2907",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 735,
    "row": 7,
    "col": 28,
    "hex": 2908,
    "display": "2908",
    "location": "Center",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 736,
    "row": 8,
    "col": 28,
    "hex": 2909,
    "display": "2909",
    "location": "Center",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 737,
    "row": 9,
    "col": 28,
    "hex": 2910,
    "display": "2910",
    "location": "Center",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 738,
    "row": 10,
    "col": 28,
    "hex": 2911,
    "display": "2911",
    "location": "Center",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 739,
    "row": 11,
    "col": 28,
    "hex": 2912,
    "display": "2912",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 740,
    "row": 12,
    "col": 28,
    "hex": 2913,
    "display": "2913",
    "location": "Center",
    "faction": "Vidarians",
    "name": "Kharaat"
  },
  {
    "index": 741,
    "row": 13,
    "col": 28,
    "hex": 2914,
    "display": "2914",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 742,
    "row": 14,
    "col": 28,
    "hex": 2915,
    "display": "2915",
    "location": "Center",
    "faction": "Vidarians",
    "name": "Bazgush"
  },
  {
    "index": 743,
    "row": 15,
    "col": 28,
    "hex": 2916,
    "display": "2916",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 744,
    "row": 16,
    "col": 28,
    "hex": 2917,
    "display": "2917",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 745,
    "row": 17,
    "col": 28,
    "hex": 2918,
    "display": "2918",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 746,
    "row": 18,
    "col": 28,
    "hex": 2919,
    "display": "2919",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 747,
    "row": 19,
    "col": 28,
    "hex": 2920,
    "display": "2920",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 748,
    "row": 20,
    "col": 28,
    "hex": 2921,
    "display": "2921",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 749,
    "row": 21,
    "col": 28,
    "hex": 2922,
    "display": "2922",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 750,
    "row": 22,
    "col": 28,
    "hex": 2923,
    "display": "2923",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 751,
    "row": 23,
    "col": 28,
    "hex": 2924,
    "display": "2924",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 752,
    "row": 24,
    "col": 28,
    "hex": 2925,
    "display": "2925",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 753,
    "row": 25,
    "col": 28,
    "hex": 2926,
    "display": "2926",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 754,
    "row": 0,
    "col": 29,
    "hex": 3001,
    "display": "3001",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 755,
    "row": 1,
    "col": 29,
    "hex": 3002,
    "display": "3002",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 756,
    "row": 2,
    "col": 29,
    "hex": 3003,
    "display": "3003",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 757,
    "row": 3,
    "col": 29,
    "hex": 3004,
    "display": "3004",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 758,
    "row": 4,
    "col": 29,
    "hex": 3005,
    "display": "3005",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 759,
    "row": 5,
    "col": 29,
    "hex": 3006,
    "display": "3006",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 760,
    "row": 6,
    "col": 29,
    "hex": 3007,
    "display": "3007",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 761,
    "row": 7,
    "col": 29,
    "hex": 3008,
    "display": "3008",
    "location": "Center",
    "faction": "Orc Lands",
    "name": ""
  },
  {
    "index": 762,
    "row": 8,
    "col": 29,
    "hex": 3009,
    "display": "3009",
    "location": "Center",
    "faction": "Vidarians",
    "name": "Ugyen"
  },
  {
    "index": 763,
    "row": 9,
    "col": 29,
    "hex": 3010,
    "display": "3010",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 764,
    "row": 10,
    "col": 29,
    "hex": 3011,
    "display": "3011",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 765,
    "row": 11,
    "col": 29,
    "hex": 3012,
    "display": "3012",
    "location": "Center",
    "faction": "Vidarians",
    "name": "Kharaat"
  },
  {
    "index": 766,
    "row": 12,
    "col": 29,
    "hex": 3013,
    "display": "3013",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 767,
    "row": 13,
    "col": 29,
    "hex": 3014,
    "display": "3014",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 768,
    "row": 14,
    "col": 29,
    "hex": 3015,
    "display": "3015",
    "location": "Center",
    "faction": "White Ravens",
    "name": "Raven's Refuge"
  },
  {
    "index": 769,
    "row": 15,
    "col": 29,
    "hex": 3016,
    "display": "3016",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 770,
    "row": 16,
    "col": 29,
    "hex": 3017,
    "display": "3017",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 771,
    "row": 17,
    "col": 29,
    "hex": 3018,
    "display": "3018",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 772,
    "row": 18,
    "col": 29,
    "hex": 3019,
    "display": "3019",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 773,
    "row": 19,
    "col": 29,
    "hex": 3020,
    "display": "3020",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 774,
    "row": 20,
    "col": 29,
    "hex": 3021,
    "display": "3021",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 775,
    "row": 21,
    "col": 29,
    "hex": 3022,
    "display": "3022",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 776,
    "row": 22,
    "col": 29,
    "hex": 3023,
    "display": "3023",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 777,
    "row": 23,
    "col": 29,
    "hex": 3024,
    "display": "3024",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 778,
    "row": 24,
    "col": 29,
    "hex": 3025,
    "display": "3025",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 779,
    "row": 25,
    "col": 29,
    "hex": 3026,
    "display": "3026",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 780,
    "row": 0,
    "col": 30,
    "hex": 3101,
    "display": "3101",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 781,
    "row": 1,
    "col": 30,
    "hex": 3102,
    "display": "3102",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 782,
    "row": 2,
    "col": 30,
    "hex": 3103,
    "display": "3103",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 783,
    "row": 3,
    "col": 30,
    "hex": 3104,
    "display": "3104",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 784,
    "row": 4,
    "col": 30,
    "hex": 3105,
    "display": "3105",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 785,
    "row": 5,
    "col": 30,
    "hex": 3106,
    "display": "3106",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 786,
    "row": 6,
    "col": 30,
    "hex": 3107,
    "display": "3107",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 787,
    "row": 7,
    "col": 30,
    "hex": 3108,
    "display": "3108",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 788,
    "row": 8,
    "col": 30,
    "hex": 3109,
    "display": "3109",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 789,
    "row": 9,
    "col": 30,
    "hex": 3110,
    "display": "3110",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 790,
    "row": 10,
    "col": 30,
    "hex": 3111,
    "display": "3111",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 791,
    "row": 11,
    "col": 30,
    "hex": 3112,
    "display": "3112",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 792,
    "row": 12,
    "col": 30,
    "hex": 3113,
    "display": "3113",
    "location": "Center",
    "faction": "Vidarians",
    "name": ""
  },
  {
    "index": 793,
    "row": 13,
    "col": 30,
    "hex": 3114,
    "display": "3114",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 794,
    "row": 14,
    "col": 30,
    "hex": 3115,
    "display": "3115",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 795,
    "row": 15,
    "col": 30,
    "hex": 3116,
    "display": "3116",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 796,
    "row": 16,
    "col": 30,
    "hex": 3117,
    "display": "3117",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 797,
    "row": 17,
    "col": 30,
    "hex": 3118,
    "display": "3118",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 798,
    "row": 18,
    "col": 30,
    "hex": 3119,
    "display": "3119",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": "Alysicles"
  },
  {
    "index": 799,
    "row": 19,
    "col": 30,
    "hex": 3120,
    "display": "3120",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 800,
    "row": 20,
    "col": 30,
    "hex": 3121,
    "display": "3121",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 801,
    "row": 21,
    "col": 30,
    "hex": 3122,
    "display": "3122",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 802,
    "row": 22,
    "col": 30,
    "hex": 3123,
    "display": "3123",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 803,
    "row": 23,
    "col": 30,
    "hex": 3124,
    "display": "3124",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 804,
    "row": 24,
    "col": 30,
    "hex": 3125,
    "display": "3125",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 805,
    "row": 25,
    "col": 30,
    "hex": 3126,
    "display": "3126",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 806,
    "row": 0,
    "col": 31,
    "hex": 3201,
    "display": "3201",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 807,
    "row": 1,
    "col": 31,
    "hex": 3202,
    "display": "3202",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 808,
    "row": 2,
    "col": 31,
    "hex": 3203,
    "display": "3203",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 809,
    "row": 3,
    "col": 31,
    "hex": 3204,
    "display": "3204",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 810,
    "row": 4,
    "col": 31,
    "hex": 3205,
    "display": "3205",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 811,
    "row": 5,
    "col": 31,
    "hex": 3206,
    "display": "3206",
    "location": "Center",
    "faction": "Catalpa",
    "name": ""
  },
  {
    "index": 812,
    "row": 6,
    "col": 31,
    "hex": 3207,
    "display": "3207",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 813,
    "row": 7,
    "col": 31,
    "hex": 3208,
    "display": "3208",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 814,
    "row": 8,
    "col": 31,
    "hex": 3209,
    "display": "3209",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 815,
    "row": 9,
    "col": 31,
    "hex": 3210,
    "display": "3210",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 816,
    "row": 10,
    "col": 31,
    "hex": 3211,
    "display": "3211",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 817,
    "row": 11,
    "col": 31,
    "hex": 3212,
    "display": "3212",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 818,
    "row": 12,
    "col": 31,
    "hex": 3213,
    "display": "3213",
    "location": "Center",
    "faction": "White Ravens",
    "name": "Gai'hana"
  },
  {
    "index": 819,
    "row": 13,
    "col": 31,
    "hex": 3214,
    "display": "3214",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 820,
    "row": 14,
    "col": 31,
    "hex": 3215,
    "display": "3215",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 821,
    "row": 15,
    "col": 31,
    "hex": 3216,
    "display": "3216",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 822,
    "row": 16,
    "col": 31,
    "hex": 3217,
    "display": "3217",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 823,
    "row": 17,
    "col": 31,
    "hex": 3218,
    "display": "3218",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 824,
    "row": 18,
    "col": 31,
    "hex": 3219,
    "display": "3219",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 825,
    "row": 19,
    "col": 31,
    "hex": 3220,
    "display": "3220",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 826,
    "row": 20,
    "col": 31,
    "hex": 3221,
    "display": "3221",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 827,
    "row": 21,
    "col": 31,
    "hex": 3222,
    "display": "3222",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 828,
    "row": 22,
    "col": 31,
    "hex": 3223,
    "display": "3223",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 829,
    "row": 23,
    "col": 31,
    "hex": 3224,
    "display": "3224",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 830,
    "row": 24,
    "col": 31,
    "hex": 3225,
    "display": "3225",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 831,
    "row": 25,
    "col": 31,
    "hex": 3226,
    "display": "3226",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 832,
    "row": 0,
    "col": 32,
    "hex": 3301,
    "display": "3301",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 833,
    "row": 1,
    "col": 32,
    "hex": 3302,
    "display": "3302",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 834,
    "row": 2,
    "col": 32,
    "hex": 3303,
    "display": "3303",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 835,
    "row": 3,
    "col": 32,
    "hex": 3304,
    "display": "3304",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 836,
    "row": 4,
    "col": 32,
    "hex": 3305,
    "display": "3305",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 837,
    "row": 5,
    "col": 32,
    "hex": 3306,
    "display": "3306",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 838,
    "row": 6,
    "col": 32,
    "hex": 3307,
    "display": "3307",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 839,
    "row": 7,
    "col": 32,
    "hex": 3308,
    "display": "3308",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 840,
    "row": 8,
    "col": 32,
    "hex": 3309,
    "display": "3309",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 841,
    "row": 9,
    "col": 32,
    "hex": 3310,
    "display": "3310",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 842,
    "row": 10,
    "col": 32,
    "hex": 3311,
    "display": "3311",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 843,
    "row": 11,
    "col": 32,
    "hex": 3312,
    "display": "3312",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 844,
    "row": 12,
    "col": 32,
    "hex": 3313,
    "display": "3313",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 845,
    "row": 13,
    "col": 32,
    "hex": 3314,
    "display": "3314",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 846,
    "row": 14,
    "col": 32,
    "hex": 3315,
    "display": "3315",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 847,
    "row": 15,
    "col": 32,
    "hex": 3316,
    "display": "3316",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 848,
    "row": 16,
    "col": 32,
    "hex": 3317,
    "display": "3317",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 849,
    "row": 17,
    "col": 32,
    "hex": 3318,
    "display": "3318",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 850,
    "row": 18,
    "col": 32,
    "hex": 3319,
    "display": "3319",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 851,
    "row": 19,
    "col": 32,
    "hex": 3320,
    "display": "3320",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 852,
    "row": 20,
    "col": 32,
    "hex": 3321,
    "display": "3321",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 853,
    "row": 21,
    "col": 32,
    "hex": 3322,
    "display": "3322",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 854,
    "row": 22,
    "col": 32,
    "hex": 3323,
    "display": "3323",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 855,
    "row": 23,
    "col": 32,
    "hex": 3324,
    "display": "3324",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 856,
    "row": 24,
    "col": 32,
    "hex": 3325,
    "display": "3325",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 857,
    "row": 25,
    "col": 32,
    "hex": 3326,
    "display": "3326",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 858,
    "row": 0,
    "col": 33,
    "hex": 3401,
    "display": "3401",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 859,
    "row": 1,
    "col": 33,
    "hex": 3402,
    "display": "3402",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 860,
    "row": 2,
    "col": 33,
    "hex": 3403,
    "display": "3403",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 861,
    "row": 3,
    "col": 33,
    "hex": 3404,
    "display": "3404",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 862,
    "row": 4,
    "col": 33,
    "hex": 3405,
    "display": "3405",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 863,
    "row": 5,
    "col": 33,
    "hex": 3406,
    "display": "3406",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 864,
    "row": 6,
    "col": 33,
    "hex": 3407,
    "display": "3407",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 865,
    "row": 7,
    "col": 33,
    "hex": 3408,
    "display": "3408",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 866,
    "row": 8,
    "col": 33,
    "hex": 3409,
    "display": "3409",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": "Bronze Guardia"
  },
  {
    "index": 867,
    "row": 9,
    "col": 33,
    "hex": 3410,
    "display": "3410",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 868,
    "row": 10,
    "col": 33,
    "hex": 3411,
    "display": "3411",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 869,
    "row": 11,
    "col": 33,
    "hex": 3412,
    "display": "3412",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 870,
    "row": 12,
    "col": 33,
    "hex": 3413,
    "display": "3413",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 871,
    "row": 13,
    "col": 33,
    "hex": 3414,
    "display": "3414",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 872,
    "row": 14,
    "col": 33,
    "hex": 3415,
    "display": "3415",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 873,
    "row": 15,
    "col": 33,
    "hex": 3416,
    "display": "3416",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 874,
    "row": 16,
    "col": 33,
    "hex": 3417,
    "display": "3417",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 875,
    "row": 17,
    "col": 33,
    "hex": 3418,
    "display": "3418",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 876,
    "row": 18,
    "col": 33,
    "hex": 3419,
    "display": "3419",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 877,
    "row": 19,
    "col": 33,
    "hex": 3420,
    "display": "3420",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 878,
    "row": 20,
    "col": 33,
    "hex": 3421,
    "display": "3421",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 879,
    "row": 21,
    "col": 33,
    "hex": 3422,
    "display": "3422",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 880,
    "row": 22,
    "col": 33,
    "hex": 3423,
    "display": "3423",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 881,
    "row": 23,
    "col": 33,
    "hex": 3424,
    "display": "3424",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 882,
    "row": 24,
    "col": 33,
    "hex": 3425,
    "display": "3425",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 883,
    "row": 25,
    "col": 33,
    "hex": 3426,
    "display": "3426",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 884,
    "row": 0,
    "col": 34,
    "hex": 3501,
    "display": "3501",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 885,
    "row": 1,
    "col": 34,
    "hex": 3502,
    "display": "3502",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 886,
    "row": 2,
    "col": 34,
    "hex": 3503,
    "display": "3503",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 887,
    "row": 3,
    "col": 34,
    "hex": 3504,
    "display": "3504",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 888,
    "row": 4,
    "col": 34,
    "hex": 3505,
    "display": "3505",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 889,
    "row": 5,
    "col": 34,
    "hex": 3506,
    "display": "3506",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 890,
    "row": 6,
    "col": 34,
    "hex": 3507,
    "display": "3507",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 891,
    "row": 7,
    "col": 34,
    "hex": 3508,
    "display": "3508",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 892,
    "row": 8,
    "col": 34,
    "hex": 3509,
    "display": "3509",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 893,
    "row": 9,
    "col": 34,
    "hex": 3510,
    "display": "3510",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 894,
    "row": 10,
    "col": 34,
    "hex": 3511,
    "display": "3511",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 895,
    "row": 11,
    "col": 34,
    "hex": 3512,
    "display": "3512",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 896,
    "row": 12,
    "col": 34,
    "hex": 3513,
    "display": "3513",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 897,
    "row": 13,
    "col": 34,
    "hex": 3514,
    "display": "3514",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 898,
    "row": 14,
    "col": 34,
    "hex": 3515,
    "display": "3515",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 899,
    "row": 15,
    "col": 34,
    "hex": 3516,
    "display": "3516",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 900,
    "row": 16,
    "col": 34,
    "hex": 3517,
    "display": "3517",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 901,
    "row": 17,
    "col": 34,
    "hex": 3518,
    "display": "3518",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 902,
    "row": 18,
    "col": 34,
    "hex": 3519,
    "display": "3519",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 903,
    "row": 19,
    "col": 34,
    "hex": 3520,
    "display": "3520",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 904,
    "row": 20,
    "col": 34,
    "hex": 3521,
    "display": "3521",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 905,
    "row": 21,
    "col": 34,
    "hex": 3522,
    "display": "3522",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 906,
    "row": 22,
    "col": 34,
    "hex": 3523,
    "display": "3523",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 907,
    "row": 23,
    "col": 34,
    "hex": 3524,
    "display": "3524",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 908,
    "row": 24,
    "col": 34,
    "hex": 3525,
    "display": "3525",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 909,
    "row": 25,
    "col": 34,
    "hex": 3526,
    "display": "3526",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 910,
    "row": 0,
    "col": 35,
    "hex": 3601,
    "display": "3601",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 911,
    "row": 1,
    "col": 35,
    "hex": 3602,
    "display": "3602",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 912,
    "row": 2,
    "col": 35,
    "hex": 3603,
    "display": "3603",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 913,
    "row": 3,
    "col": 35,
    "hex": 3604,
    "display": "3604",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 914,
    "row": 4,
    "col": 35,
    "hex": 3605,
    "display": "3605",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 915,
    "row": 5,
    "col": 35,
    "hex": 3606,
    "display": "3606",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 916,
    "row": 6,
    "col": 35,
    "hex": 3607,
    "display": "3607",
    "location": "Center",
    "faction": "Catalpa",
    "name": ""
  },
  {
    "index": 917,
    "row": 7,
    "col": 35,
    "hex": 3608,
    "display": "3608",
    "location": "Center",
    "faction": "Catalpa",
    "name": ""
  },
  {
    "index": 918,
    "row": 8,
    "col": 35,
    "hex": 3609,
    "display": "3609",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 919,
    "row": 9,
    "col": 35,
    "hex": 3610,
    "display": "3610",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 920,
    "row": 10,
    "col": 35,
    "hex": 3611,
    "display": "3611",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 921,
    "row": 11,
    "col": 35,
    "hex": 3612,
    "display": "3612",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 922,
    "row": 12,
    "col": 35,
    "hex": 3613,
    "display": "3613",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 923,
    "row": 13,
    "col": 35,
    "hex": 3614,
    "display": "3614",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 924,
    "row": 14,
    "col": 35,
    "hex": 3615,
    "display": "3615",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 925,
    "row": 15,
    "col": 35,
    "hex": 3616,
    "display": "3616",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 926,
    "row": 16,
    "col": 35,
    "hex": 3617,
    "display": "3617",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 927,
    "row": 17,
    "col": 35,
    "hex": 3618,
    "display": "3618",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 928,
    "row": 18,
    "col": 35,
    "hex": 3619,
    "display": "3619",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 929,
    "row": 19,
    "col": 35,
    "hex": 3620,
    "display": "3620",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 930,
    "row": 20,
    "col": 35,
    "hex": 3621,
    "display": "3621",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 931,
    "row": 21,
    "col": 35,
    "hex": 3622,
    "display": "3622",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 932,
    "row": 22,
    "col": 35,
    "hex": 3623,
    "display": "3623",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 933,
    "row": 23,
    "col": 35,
    "hex": 3624,
    "display": "3624",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 934,
    "row": 24,
    "col": 35,
    "hex": 3625,
    "display": "3625",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 935,
    "row": 25,
    "col": 35,
    "hex": 3626,
    "display": "3626",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 936,
    "row": 0,
    "col": 36,
    "hex": 3701,
    "display": "3701",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 937,
    "row": 1,
    "col": 36,
    "hex": 3702,
    "display": "3702",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 938,
    "row": 2,
    "col": 36,
    "hex": 3703,
    "display": "3703",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 939,
    "row": 3,
    "col": 36,
    "hex": 3704,
    "display": "3704",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 940,
    "row": 4,
    "col": 36,
    "hex": 3705,
    "display": "3705",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 941,
    "row": 5,
    "col": 36,
    "hex": 3706,
    "display": "3706",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": "Silkwood"
  },
  {
    "index": 942,
    "row": 6,
    "col": 36,
    "hex": 3707,
    "display": "3707",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 943,
    "row": 7,
    "col": 36,
    "hex": 3708,
    "display": "3708",
    "location": "Center",
    "faction": "Catalpa",
    "name": ""
  },
  {
    "index": 944,
    "row": 8,
    "col": 36,
    "hex": 3709,
    "display": "3709",
    "location": "Center",
    "faction": "Catalpa",
    "name": ""
  },
  {
    "index": 945,
    "row": 9,
    "col": 36,
    "hex": 3710,
    "display": "3710",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": "Tharropolis"
  },
  {
    "index": 946,
    "row": 10,
    "col": 36,
    "hex": 3711,
    "display": "3711",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 947,
    "row": 11,
    "col": 36,
    "hex": 3712,
    "display": "3712",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 948,
    "row": 12,
    "col": 36,
    "hex": 3713,
    "display": "3713",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 949,
    "row": 13,
    "col": 36,
    "hex": 3714,
    "display": "3714",
    "location": "Center",
    "faction": "White Ravens",
    "name": "New Pandalen"
  },
  {
    "index": 950,
    "row": 14,
    "col": 36,
    "hex": 3715,
    "display": "3715",
    "location": "Center",
    "faction": "White Ravens",
    "name": "Promise Keep"
  },
  {
    "index": 951,
    "row": 15,
    "col": 36,
    "hex": 3716,
    "display": "3716",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 952,
    "row": 16,
    "col": 36,
    "hex": 3717,
    "display": "3717",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 953,
    "row": 17,
    "col": 36,
    "hex": 3718,
    "display": "3718",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 954,
    "row": 18,
    "col": 36,
    "hex": 3719,
    "display": "3719",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 955,
    "row": 19,
    "col": 36,
    "hex": 3720,
    "display": "3720",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 956,
    "row": 20,
    "col": 36,
    "hex": 3721,
    "display": "3721",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 957,
    "row": 21,
    "col": 36,
    "hex": 3722,
    "display": "3722",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 958,
    "row": 22,
    "col": 36,
    "hex": 3723,
    "display": "3723",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 959,
    "row": 23,
    "col": 36,
    "hex": 3724,
    "display": "3724",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 960,
    "row": 24,
    "col": 36,
    "hex": 3725,
    "display": "3725",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 961,
    "row": 25,
    "col": 36,
    "hex": 3726,
    "display": "3726",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 962,
    "row": 0,
    "col": 37,
    "hex": 3801,
    "display": "3801",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 963,
    "row": 1,
    "col": 37,
    "hex": 3802,
    "display": "3802",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 964,
    "row": 2,
    "col": 37,
    "hex": 3803,
    "display": "3803",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 965,
    "row": 3,
    "col": 37,
    "hex": 3804,
    "display": "3804",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 966,
    "row": 4,
    "col": 37,
    "hex": 3805,
    "display": "3805",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 967,
    "row": 5,
    "col": 37,
    "hex": 3806,
    "display": "3806",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 968,
    "row": 6,
    "col": 37,
    "hex": 3807,
    "display": "3807",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 969,
    "row": 7,
    "col": 37,
    "hex": 3808,
    "display": "3808",
    "location": "Center",
    "faction": "Catalpa",
    "name": ""
  },
  {
    "index": 970,
    "row": 8,
    "col": 37,
    "hex": 3809,
    "display": "3809",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 971,
    "row": 9,
    "col": 37,
    "hex": 3810,
    "display": "3810",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 972,
    "row": 10,
    "col": 37,
    "hex": 3811,
    "display": "3811",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 973,
    "row": 11,
    "col": 37,
    "hex": 3812,
    "display": "3812",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 974,
    "row": 12,
    "col": 37,
    "hex": 3813,
    "display": "3813",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 975,
    "row": 13,
    "col": 37,
    "hex": 3814,
    "display": "3814",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 976,
    "row": 14,
    "col": 37,
    "hex": 3815,
    "display": "3815",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 977,
    "row": 15,
    "col": 37,
    "hex": 3816,
    "display": "3816",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 978,
    "row": 16,
    "col": 37,
    "hex": 3817,
    "display": "3817",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 979,
    "row": 17,
    "col": 37,
    "hex": 3818,
    "display": "3818",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 980,
    "row": 18,
    "col": 37,
    "hex": 3819,
    "display": "3819",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 981,
    "row": 19,
    "col": 37,
    "hex": 3820,
    "display": "3820",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 982,
    "row": 20,
    "col": 37,
    "hex": 3821,
    "display": "3821",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 983,
    "row": 21,
    "col": 37,
    "hex": 3822,
    "display": "3822",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 984,
    "row": 22,
    "col": 37,
    "hex": 3823,
    "display": "3823",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 985,
    "row": 23,
    "col": 37,
    "hex": 3824,
    "display": "3824",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 986,
    "row": 24,
    "col": 37,
    "hex": 3825,
    "display": "3825",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 987,
    "row": 25,
    "col": 37,
    "hex": 3826,
    "display": "3826",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 988,
    "row": 0,
    "col": 38,
    "hex": 3901,
    "display": "3901",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 989,
    "row": 1,
    "col": 38,
    "hex": 3902,
    "display": "3902",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 990,
    "row": 2,
    "col": 38,
    "hex": 3903,
    "display": "3903",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 991,
    "row": 3,
    "col": 38,
    "hex": 3904,
    "display": "3904",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 992,
    "row": 4,
    "col": 38,
    "hex": 3905,
    "display": "3905",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 993,
    "row": 5,
    "col": 38,
    "hex": 3906,
    "display": "3906",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 994,
    "row": 6,
    "col": 38,
    "hex": 3907,
    "display": "3907",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 995,
    "row": 7,
    "col": 38,
    "hex": 3908,
    "display": "3908",
    "location": "Center",
    "faction": "Catalpa",
    "name": ""
  },
  {
    "index": 996,
    "row": 8,
    "col": 38,
    "hex": 3909,
    "display": "3909",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 997,
    "row": 9,
    "col": 38,
    "hex": 3910,
    "display": "3910",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": "Mountain Run Winery"
  },
  {
    "index": 998,
    "row": 10,
    "col": 38,
    "hex": 3911,
    "display": "3911",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 999,
    "row": 11,
    "col": 38,
    "hex": 3912,
    "display": "3912",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": "Trinity"
  },
  {
    "index": 1000,
    "row": 12,
    "col": 38,
    "hex": 3913,
    "display": "3913",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 1001,
    "row": 13,
    "col": 38,
    "hex": 3914,
    "display": "3914",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 1002,
    "row": 14,
    "col": 38,
    "hex": 3915,
    "display": "3915",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1003,
    "row": 15,
    "col": 38,
    "hex": 3916,
    "display": "3916",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1004,
    "row": 16,
    "col": 38,
    "hex": 3917,
    "display": "3917",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1005,
    "row": 17,
    "col": 38,
    "hex": 3918,
    "display": "3918",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": "Awindal"
  },
  {
    "index": 1006,
    "row": 18,
    "col": 38,
    "hex": 3919,
    "display": "3919",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 1007,
    "row": 19,
    "col": 38,
    "hex": 3920,
    "display": "3920",
    "location": "Center",
    "faction": "Blackthorne",
    "name": "The Foundry"
  },
  {
    "index": 1008,
    "row": 20,
    "col": 38,
    "hex": 3921,
    "display": "3921",
    "location": "Center",
    "faction": "Blackthorne",
    "name": ""
  },
  {
    "index": 1009,
    "row": 21,
    "col": 38,
    "hex": 3922,
    "display": "3922",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1010,
    "row": 22,
    "col": 38,
    "hex": 3923,
    "display": "3923",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1011,
    "row": 23,
    "col": 38,
    "hex": 3924,
    "display": "3924",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1012,
    "row": 24,
    "col": 38,
    "hex": 3925,
    "display": "3925",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1013,
    "row": 25,
    "col": 38,
    "hex": 3926,
    "display": "3926",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1014,
    "row": 0,
    "col": 39,
    "hex": 4001,
    "display": "4001",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1015,
    "row": 1,
    "col": 39,
    "hex": 4002,
    "display": "4002",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1016,
    "row": 2,
    "col": 39,
    "hex": 4003,
    "display": "4003",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1017,
    "row": 3,
    "col": 39,
    "hex": 4004,
    "display": "4004",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1018,
    "row": 4,
    "col": 39,
    "hex": 4005,
    "display": "4005",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1019,
    "row": 5,
    "col": 39,
    "hex": 4006,
    "display": "4006",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1020,
    "row": 6,
    "col": 39,
    "hex": 4007,
    "display": "4007",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 1021,
    "row": 7,
    "col": 39,
    "hex": 4008,
    "display": "4008",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": "Petrapolis"
  },
  {
    "index": 1022,
    "row": 8,
    "col": 39,
    "hex": 4009,
    "display": "4009",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 1023,
    "row": 9,
    "col": 39,
    "hex": 4010,
    "display": "4010",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 1024,
    "row": 10,
    "col": 39,
    "hex": 4011,
    "display": "4011",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 1025,
    "row": 11,
    "col": 39,
    "hex": 4012,
    "display": "4012",
    "location": "Center",
    "faction": "Cedar Hill / White Ravens",
    "name": ""
  },
  {
    "index": 1026,
    "row": 12,
    "col": 39,
    "hex": 4013,
    "display": "4013",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 1027,
    "row": 13,
    "col": 39,
    "hex": 4014,
    "display": "4014",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1028,
    "row": 14,
    "col": 39,
    "hex": 4015,
    "display": "4015",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1029,
    "row": 15,
    "col": 39,
    "hex": 4016,
    "display": "4016",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1030,
    "row": 16,
    "col": 39,
    "hex": 4017,
    "display": "4017",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1031,
    "row": 17,
    "col": 39,
    "hex": 4018,
    "display": "4018",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1032,
    "row": 18,
    "col": 39,
    "hex": 4019,
    "display": "4019",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": "Greenhouse Project"
  },
  {
    "index": 1033,
    "row": 19,
    "col": 39,
    "hex": 4020,
    "display": "4020",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 1034,
    "row": 20,
    "col": 39,
    "hex": 4021,
    "display": "4021",
    "location": "Center",
    "faction": "Blackthorne",
    "name": ""
  },
  {
    "index": 1035,
    "row": 21,
    "col": 39,
    "hex": 4022,
    "display": "4022",
    "location": "Center",
    "faction": "Blackthorne",
    "name": "New Noxus"
  },
  {
    "index": 1036,
    "row": 22,
    "col": 39,
    "hex": 4023,
    "display": "4023",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1037,
    "row": 23,
    "col": 39,
    "hex": 4024,
    "display": "4024",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1038,
    "row": 24,
    "col": 39,
    "hex": 4025,
    "display": "4025",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1039,
    "row": 25,
    "col": 39,
    "hex": 4026,
    "display": "4026",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1040,
    "row": 0,
    "col": 40,
    "hex": 4101,
    "display": "4101",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1041,
    "row": 1,
    "col": 40,
    "hex": 4102,
    "display": "4102",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1042,
    "row": 2,
    "col": 40,
    "hex": 4103,
    "display": "4103",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1043,
    "row": 3,
    "col": 40,
    "hex": 4104,
    "display": "4104",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1044,
    "row": 4,
    "col": 40,
    "hex": 4105,
    "display": "4105",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1045,
    "row": 5,
    "col": 40,
    "hex": 4106,
    "display": "4106",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1046,
    "row": 6,
    "col": 40,
    "hex": 4107,
    "display": "4107",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1047,
    "row": 7,
    "col": 40,
    "hex": 4108,
    "display": "4108",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1048,
    "row": 8,
    "col": 40,
    "hex": 4109,
    "display": "4109",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 1049,
    "row": 9,
    "col": 40,
    "hex": 4110,
    "display": "4110",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 1050,
    "row": 10,
    "col": 40,
    "hex": 4111,
    "display": "4111",
    "location": "Center",
    "faction": "Ce",
    "name": ""
  },
  {
    "index": 1051,
    "row": 11,
    "col": 40,
    "hex": 4112,
    "display": "4112",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 1052,
    "row": 12,
    "col": 40,
    "hex": 4113,
    "display": "4113",
    "location": "Center",
    "faction": "White Ravens",
    "name": "Laurel Gate"
  },
  {
    "index": 1053,
    "row": 13,
    "col": 40,
    "hex": 4114,
    "display": "4114",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1054,
    "row": 14,
    "col": 40,
    "hex": 4115,
    "display": "4115",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1055,
    "row": 15,
    "col": 40,
    "hex": 4116,
    "display": "4116",
    "location": "Center",
    "faction": "White Ravens",
    "name": "Nico's Rest"
  },
  {
    "index": 1056,
    "row": 16,
    "col": 40,
    "hex": 4117,
    "display": "4117",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1057,
    "row": 17,
    "col": 40,
    "hex": 4118,
    "display": "4118",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1058,
    "row": 18,
    "col": 40,
    "hex": 4119,
    "display": "4119",
    "location": "Center",
    "faction": "Geth",
    "name": ""
  },
  {
    "index": 1059,
    "row": 19,
    "col": 40,
    "hex": 4120,
    "display": "4120",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 1060,
    "row": 20,
    "col": 40,
    "hex": 4121,
    "display": "4121",
    "location": "Center",
    "faction": "",
    "name": "Carnarian"
  },
  {
    "index": 1061,
    "row": 21,
    "col": 40,
    "hex": 4122,
    "display": "4122",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1062,
    "row": 22,
    "col": 40,
    "hex": 4123,
    "display": "4123",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1063,
    "row": 23,
    "col": 40,
    "hex": 4124,
    "display": "4124",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1064,
    "row": 24,
    "col": 40,
    "hex": 4125,
    "display": "4125",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1065,
    "row": 25,
    "col": 40,
    "hex": 4126,
    "display": "4126",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1066,
    "row": 0,
    "col": 41,
    "hex": 4201,
    "display": "4201",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1067,
    "row": 1,
    "col": 41,
    "hex": 4202,
    "display": "4202",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1068,
    "row": 2,
    "col": 41,
    "hex": 4203,
    "display": "4203",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1069,
    "row": 3,
    "col": 41,
    "hex": 4204,
    "display": "4204",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1070,
    "row": 4,
    "col": 41,
    "hex": 4205,
    "display": "4205",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1071,
    "row": 5,
    "col": 41,
    "hex": 4206,
    "display": "4206",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1072,
    "row": 6,
    "col": 41,
    "hex": 4207,
    "display": "4207",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1073,
    "row": 7,
    "col": 41,
    "hex": 4208,
    "display": "4208",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 1074,
    "row": 8,
    "col": 41,
    "hex": 4209,
    "display": "4209",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 1075,
    "row": 9,
    "col": 41,
    "hex": 4210,
    "display": "4210",
    "location": "Center",
    "faction": "White Ravens",
    "name": "Raven's Reach"
  },
  {
    "index": 1076,
    "row": 10,
    "col": 41,
    "hex": 4211,
    "display": "4211",
    "location": "Center",
    "faction": "",
    "name": "Yule Glade"
  },
  {
    "index": 1077,
    "row": 11,
    "col": 41,
    "hex": 4212,
    "display": "4212",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1078,
    "row": 12,
    "col": 41,
    "hex": 4213,
    "display": "4213",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1079,
    "row": 13,
    "col": 41,
    "hex": 4214,
    "display": "4214",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1080,
    "row": 14,
    "col": 41,
    "hex": 4215,
    "display": "4215",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1081,
    "row": 15,
    "col": 41,
    "hex": 4216,
    "display": "4216",
    "location": "Center",
    "faction": "White Ravens",
    "name": ""
  },
  {
    "index": 1082,
    "row": 16,
    "col": 41,
    "hex": 4217,
    "display": "4217",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1083,
    "row": 17,
    "col": 41,
    "hex": 4218,
    "display": "4218",
    "location": "Center",
    "faction": "Geth",
    "name": ""
  },
  {
    "index": 1084,
    "row": 18,
    "col": 41,
    "hex": 4219,
    "display": "4219",
    "location": "Center",
    "faction": "Black Sky",
    "name": ""
  },
  {
    "index": 1085,
    "row": 19,
    "col": 41,
    "hex": 4220,
    "display": "4220",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1086,
    "row": 20,
    "col": 41,
    "hex": 4221,
    "display": "4221",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1087,
    "row": 21,
    "col": 41,
    "hex": 4222,
    "display": "4222",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1088,
    "row": 22,
    "col": 41,
    "hex": 4223,
    "display": "4223",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1089,
    "row": 23,
    "col": 41,
    "hex": 4224,
    "display": "4224",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1090,
    "row": 24,
    "col": 41,
    "hex": 4225,
    "display": "4225",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1091,
    "row": 25,
    "col": 41,
    "hex": 4226,
    "display": "4226",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1092,
    "row": 0,
    "col": 42,
    "hex": 4301,
    "display": "4301",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1093,
    "row": 1,
    "col": 42,
    "hex": 4302,
    "display": "4302",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1094,
    "row": 2,
    "col": 42,
    "hex": 4303,
    "display": "4303",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1095,
    "row": 3,
    "col": 42,
    "hex": 4304,
    "display": "4304",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1096,
    "row": 4,
    "col": 42,
    "hex": 4305,
    "display": "4305",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1097,
    "row": 5,
    "col": 42,
    "hex": 4306,
    "display": "4306",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1098,
    "row": 6,
    "col": 42,
    "hex": 4307,
    "display": "4307",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1099,
    "row": 7,
    "col": 42,
    "hex": 4308,
    "display": "4308",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1100,
    "row": 8,
    "col": 42,
    "hex": 4309,
    "display": "4309",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 1101,
    "row": 9,
    "col": 42,
    "hex": 4310,
    "display": "4310",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1102,
    "row": 10,
    "col": 42,
    "hex": 4311,
    "display": "4311",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1103,
    "row": 11,
    "col": 42,
    "hex": 4312,
    "display": "4312",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1104,
    "row": 12,
    "col": 42,
    "hex": 4313,
    "display": "4313",
    "location": "Center",
    "faction": "Wardens",
    "name": "Fletchings"
  },
  {
    "index": 1105,
    "row": 13,
    "col": 42,
    "hex": 4314,
    "display": "4314",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1106,
    "row": 14,
    "col": 42,
    "hex": 4315,
    "display": "4315",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1107,
    "row": 15,
    "col": 42,
    "hex": 4316,
    "display": "4316",
    "location": "Center",
    "faction": "Geth",
    "name": "Temple of Geth"
  },
  {
    "index": 1108,
    "row": 16,
    "col": 42,
    "hex": 4317,
    "display": "4317",
    "location": "Center",
    "faction": "Geth",
    "name": ""
  },
  {
    "index": 1109,
    "row": 17,
    "col": 42,
    "hex": 4318,
    "display": "4318",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1110,
    "row": 18,
    "col": 42,
    "hex": 4319,
    "display": "4319",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1111,
    "row": 19,
    "col": 42,
    "hex": 4320,
    "display": "4320",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1112,
    "row": 20,
    "col": 42,
    "hex": 4321,
    "display": "4321",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1113,
    "row": 21,
    "col": 42,
    "hex": 4322,
    "display": "4322",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1114,
    "row": 22,
    "col": 42,
    "hex": 4323,
    "display": "4323",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1115,
    "row": 23,
    "col": 42,
    "hex": 4324,
    "display": "4324",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1116,
    "row": 24,
    "col": 42,
    "hex": 4325,
    "display": "4325",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1117,
    "row": 25,
    "col": 42,
    "hex": 4326,
    "display": "4326",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1118,
    "row": 0,
    "col": 43,
    "hex": 4401,
    "display": "4401",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1119,
    "row": 1,
    "col": 43,
    "hex": 4402,
    "display": "4402",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1120,
    "row": 2,
    "col": 43,
    "hex": 4403,
    "display": "4403",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1121,
    "row": 3,
    "col": 43,
    "hex": 4404,
    "display": "4404",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1122,
    "row": 4,
    "col": 43,
    "hex": 4405,
    "display": "4405",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1123,
    "row": 5,
    "col": 43,
    "hex": 4406,
    "display": "4406",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1124,
    "row": 6,
    "col": 43,
    "hex": 4407,
    "display": "4407",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1125,
    "row": 7,
    "col": 43,
    "hex": 4408,
    "display": "4408",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1126,
    "row": 8,
    "col": 43,
    "hex": 4409,
    "display": "4409",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 1127,
    "row": 9,
    "col": 43,
    "hex": 4410,
    "display": "4410",
    "location": "Center",
    "faction": "Wardens",
    "name": "Nock"
  },
  {
    "index": 1128,
    "row": 10,
    "col": 43,
    "hex": 4411,
    "display": "4411",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1129,
    "row": 11,
    "col": 43,
    "hex": 4412,
    "display": "4412",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1130,
    "row": 12,
    "col": 43,
    "hex": 4413,
    "display": "4413",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1131,
    "row": 13,
    "col": 43,
    "hex": 4414,
    "display": "4414",
    "location": "Center",
    "faction": "Black Sky",
    "name": ""
  },
  {
    "index": 1132,
    "row": 14,
    "col": 43,
    "hex": 4415,
    "display": "4415",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1133,
    "row": 15,
    "col": 43,
    "hex": 4416,
    "display": "4416",
    "location": "Center",
    "faction": "Geth",
    "name": ""
  },
  {
    "index": 1134,
    "row": 16,
    "col": 43,
    "hex": 4417,
    "display": "4417",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1135,
    "row": 17,
    "col": 43,
    "hex": 4418,
    "display": "4418",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1136,
    "row": 18,
    "col": 43,
    "hex": 4419,
    "display": "4419",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1137,
    "row": 19,
    "col": 43,
    "hex": 4420,
    "display": "4420",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1138,
    "row": 20,
    "col": 43,
    "hex": 4421,
    "display": "4421",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1139,
    "row": 21,
    "col": 43,
    "hex": 4422,
    "display": "4422",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 1140,
    "row": 22,
    "col": 43,
    "hex": 4423,
    "display": "4423",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1141,
    "row": 23,
    "col": 43,
    "hex": 4424,
    "display": "4424",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1142,
    "row": 24,
    "col": 43,
    "hex": 4425,
    "display": "4425",
    "location": "Center",
    "faction": "Cedar Hill",
    "name": ""
  },
  {
    "index": 1143,
    "row": 25,
    "col": 43,
    "hex": 4426,
    "display": "4426",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1144,
    "row": 0,
    "col": 44,
    "hex": 4501,
    "display": "4501",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1145,
    "row": 1,
    "col": 44,
    "hex": 4502,
    "display": "4502",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1146,
    "row": 2,
    "col": 44,
    "hex": 4503,
    "display": "4503",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1147,
    "row": 3,
    "col": 44,
    "hex": 4504,
    "display": "4504",
    "location": "Center",
    "faction": "Grimfrost",
    "name": ""
  },
  {
    "index": 1148,
    "row": 4,
    "col": 44,
    "hex": 4505,
    "display": "4505",
    "location": "Center",
    "faction": "Grimfrost",
    "name": "Southport"
  },
  {
    "index": 1149,
    "row": 5,
    "col": 44,
    "hex": 4506,
    "display": "4506",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1150,
    "row": 6,
    "col": 44,
    "hex": 4507,
    "display": "4507",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1151,
    "row": 7,
    "col": 44,
    "hex": 4508,
    "display": "4508",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1152,
    "row": 8,
    "col": 44,
    "hex": 4509,
    "display": "4509",
    "location": "Center",
    "faction": "Kult of Tharros",
    "name": ""
  },
  {
    "index": 1153,
    "row": 9,
    "col": 44,
    "hex": 4510,
    "display": "4510",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1154,
    "row": 10,
    "col": 44,
    "hex": 4511,
    "display": "4511",
    "location": "Center",
    "faction": "Wardens",
    "name": ""
  },
  {
    "index": 1155,
    "row": 11,
    "col": 44,
    "hex": 4512,
    "display": "4512",
    "location": "Center",
    "faction": "Wardens",
    "name": "Archer's Crest"
  },
  {
    "index": 1156,
    "row": 12,
    "col": 44,
    "hex": 4513,
    "display": "4513",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1157,
    "row": 13,
    "col": 44,
    "hex": 4514,
    "display": "4514",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1158,
    "row": 14,
    "col": 44,
    "hex": 4515,
    "display": "4515",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1159,
    "row": 15,
    "col": 44,
    "hex": 4516,
    "display": "4516",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1160,
    "row": 16,
    "col": 44,
    "hex": 4517,
    "display": "4517",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1161,
    "row": 17,
    "col": 44,
    "hex": 4518,
    "display": "4518",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1162,
    "row": 18,
    "col": 44,
    "hex": 4519,
    "display": "4519",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1163,
    "row": 19,
    "col": 44,
    "hex": 4520,
    "display": "4520",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1164,
    "row": 20,
    "col": 44,
    "hex": 4521,
    "display": "4521",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1165,
    "row": 21,
    "col": 44,
    "hex": 4522,
    "display": "4522",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1166,
    "row": 22,
    "col": 44,
    "hex": 4523,
    "display": "4523",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1167,
    "row": 23,
    "col": 44,
    "hex": 4524,
    "display": "4524",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1168,
    "row": 24,
    "col": 44,
    "hex": 4525,
    "display": "4525",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1169,
    "row": 25,
    "col": 44,
    "hex": 4526,
    "display": "4526",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1170,
    "row": 0,
    "col": 45,
    "hex": 4601,
    "display": "4601",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1171,
    "row": 1,
    "col": 45,
    "hex": 4602,
    "display": "4602",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1172,
    "row": 2,
    "col": 45,
    "hex": 4603,
    "display": "4603",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1173,
    "row": 3,
    "col": 45,
    "hex": 4604,
    "display": "4604",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1174,
    "row": 4,
    "col": 45,
    "hex": 4605,
    "display": "4605",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1175,
    "row": 5,
    "col": 45,
    "hex": 4606,
    "display": "4606",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1176,
    "row": 6,
    "col": 45,
    "hex": 4607,
    "display": "4607",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1177,
    "row": 7,
    "col": 45,
    "hex": 4608,
    "display": "4608",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1178,
    "row": 8,
    "col": 45,
    "hex": 4609,
    "display": "4609",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1179,
    "row": 9,
    "col": 45,
    "hex": 4610,
    "display": "4610",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1180,
    "row": 10,
    "col": 45,
    "hex": 4611,
    "display": "4611",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1181,
    "row": 11,
    "col": 45,
    "hex": 4612,
    "display": "4612",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1182,
    "row": 12,
    "col": 45,
    "hex": 4613,
    "display": "4613",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1183,
    "row": 13,
    "col": 45,
    "hex": 4614,
    "display": "4614",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1184,
    "row": 14,
    "col": 45,
    "hex": 4615,
    "display": "4615",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1185,
    "row": 15,
    "col": 45,
    "hex": 4616,
    "display": "4616",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1186,
    "row": 16,
    "col": 45,
    "hex": 4617,
    "display": "4617",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1187,
    "row": 17,
    "col": 45,
    "hex": 4618,
    "display": "4618",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1188,
    "row": 18,
    "col": 45,
    "hex": 4619,
    "display": "4619",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1189,
    "row": 19,
    "col": 45,
    "hex": 4620,
    "display": "4620",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1190,
    "row": 20,
    "col": 45,
    "hex": 4621,
    "display": "4621",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1191,
    "row": 21,
    "col": 45,
    "hex": 4622,
    "display": "4622",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1192,
    "row": 22,
    "col": 45,
    "hex": 4623,
    "display": "4623",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1193,
    "row": 23,
    "col": 45,
    "hex": 4624,
    "display": "4624",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1194,
    "row": 24,
    "col": 45,
    "hex": 4625,
    "display": "4625",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1195,
    "row": 25,
    "col": 45,
    "hex": 4626,
    "display": "4626",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1196,
    "row": 0,
    "col": 46,
    "hex": 4701,
    "display": "4701",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1197,
    "row": 1,
    "col": 46,
    "hex": 4702,
    "display": "4702",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1198,
    "row": 2,
    "col": 46,
    "hex": 4703,
    "display": "4703",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1199,
    "row": 3,
    "col": 46,
    "hex": 4704,
    "display": "4704",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1200,
    "row": 4,
    "col": 46,
    "hex": 4705,
    "display": "4705",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1201,
    "row": 5,
    "col": 46,
    "hex": 4706,
    "display": "4706",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1202,
    "row": 6,
    "col": 46,
    "hex": 4707,
    "display": "4707",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1203,
    "row": 7,
    "col": 46,
    "hex": 4708,
    "display": "4708",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1204,
    "row": 8,
    "col": 46,
    "hex": 4709,
    "display": "4709",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1205,
    "row": 9,
    "col": 46,
    "hex": 4710,
    "display": "4710",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1206,
    "row": 10,
    "col": 46,
    "hex": 4711,
    "display": "4711",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1207,
    "row": 11,
    "col": 46,
    "hex": 4712,
    "display": "4712",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1208,
    "row": 12,
    "col": 46,
    "hex": 4713,
    "display": "4713",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1209,
    "row": 13,
    "col": 46,
    "hex": 4714,
    "display": "4714",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1210,
    "row": 14,
    "col": 46,
    "hex": 4715,
    "display": "4715",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1211,
    "row": 15,
    "col": 46,
    "hex": 4716,
    "display": "4716",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1212,
    "row": 16,
    "col": 46,
    "hex": 4717,
    "display": "4717",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1213,
    "row": 17,
    "col": 46,
    "hex": 4718,
    "display": "4718",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1214,
    "row": 18,
    "col": 46,
    "hex": 4719,
    "display": "4719",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1215,
    "row": 19,
    "col": 46,
    "hex": 4720,
    "display": "4720",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1216,
    "row": 20,
    "col": 46,
    "hex": 4721,
    "display": "4721",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1217,
    "row": 21,
    "col": 46,
    "hex": 4722,
    "display": "4722",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1218,
    "row": 22,
    "col": 46,
    "hex": 4723,
    "display": "4723",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1219,
    "row": 23,
    "col": 46,
    "hex": 4724,
    "display": "4724",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1220,
    "row": 24,
    "col": 46,
    "hex": 4725,
    "display": "4725",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1221,
    "row": 25,
    "col": 46,
    "hex": 4726,
    "display": "4726",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1222,
    "row": 0,
    "col": 47,
    "hex": 4801,
    "display": "4801",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1223,
    "row": 1,
    "col": 47,
    "hex": 4802,
    "display": "4802",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1224,
    "row": 2,
    "col": 47,
    "hex": 4803,
    "display": "4803",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1225,
    "row": 3,
    "col": 47,
    "hex": 4804,
    "display": "4804",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1226,
    "row": 4,
    "col": 47,
    "hex": 4805,
    "display": "4805",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1227,
    "row": 5,
    "col": 47,
    "hex": 4806,
    "display": "4806",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1228,
    "row": 6,
    "col": 47,
    "hex": 4807,
    "display": "4807",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1229,
    "row": 7,
    "col": 47,
    "hex": 4808,
    "display": "4808",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1230,
    "row": 8,
    "col": 47,
    "hex": 4809,
    "display": "4809",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1231,
    "row": 9,
    "col": 47,
    "hex": 4810,
    "display": "4810",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1232,
    "row": 10,
    "col": 47,
    "hex": 4811,
    "display": "4811",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1233,
    "row": 11,
    "col": 47,
    "hex": 4812,
    "display": "4812",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1234,
    "row": 12,
    "col": 47,
    "hex": 4813,
    "display": "4813",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1235,
    "row": 13,
    "col": 47,
    "hex": 4814,
    "display": "4814",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1236,
    "row": 14,
    "col": 47,
    "hex": 4815,
    "display": "4815",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1237,
    "row": 15,
    "col": 47,
    "hex": 4816,
    "display": "4816",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1238,
    "row": 16,
    "col": 47,
    "hex": 4817,
    "display": "4817",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1239,
    "row": 17,
    "col": 47,
    "hex": 4818,
    "display": "4818",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1240,
    "row": 18,
    "col": 47,
    "hex": 4819,
    "display": "4819",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1241,
    "row": 19,
    "col": 47,
    "hex": 4820,
    "display": "4820",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1242,
    "row": 20,
    "col": 47,
    "hex": 4821,
    "display": "4821",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1243,
    "row": 21,
    "col": 47,
    "hex": 4822,
    "display": "4822",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1244,
    "row": 22,
    "col": 47,
    "hex": 4823,
    "display": "4823",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1245,
    "row": 23,
    "col": 47,
    "hex": 4824,
    "display": "4824",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1246,
    "row": 24,
    "col": 47,
    "hex": 4825,
    "display": "4825",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1247,
    "row": 25,
    "col": 47,
    "hex": 4826,
    "display": "4826",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1248,
    "row": 0,
    "col": 48,
    "hex": 4901,
    "display": "4901",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1249,
    "row": 1,
    "col": 48,
    "hex": 4902,
    "display": "4902",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1250,
    "row": 2,
    "col": 48,
    "hex": 4903,
    "display": "4903",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1251,
    "row": 3,
    "col": 48,
    "hex": 4904,
    "display": "4904",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1252,
    "row": 4,
    "col": 48,
    "hex": 4905,
    "display": "4905",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1253,
    "row": 5,
    "col": 48,
    "hex": 4906,
    "display": "4906",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1254,
    "row": 6,
    "col": 48,
    "hex": 4907,
    "display": "4907",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1255,
    "row": 7,
    "col": 48,
    "hex": 4908,
    "display": "4908",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1256,
    "row": 8,
    "col": 48,
    "hex": 4909,
    "display": "4909",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1257,
    "row": 9,
    "col": 48,
    "hex": 4910,
    "display": "4910",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1258,
    "row": 10,
    "col": 48,
    "hex": 4911,
    "display": "4911",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1259,
    "row": 11,
    "col": 48,
    "hex": 4912,
    "display": "4912",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1260,
    "row": 12,
    "col": 48,
    "hex": 4913,
    "display": "4913",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1261,
    "row": 13,
    "col": 48,
    "hex": 4914,
    "display": "4914",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1262,
    "row": 14,
    "col": 48,
    "hex": 4915,
    "display": "4915",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1263,
    "row": 15,
    "col": 48,
    "hex": 4916,
    "display": "4916",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1264,
    "row": 16,
    "col": 48,
    "hex": 4917,
    "display": "4917",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1265,
    "row": 17,
    "col": 48,
    "hex": 4918,
    "display": "4918",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1266,
    "row": 18,
    "col": 48,
    "hex": 4919,
    "display": "4919",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1267,
    "row": 19,
    "col": 48,
    "hex": 4920,
    "display": "4920",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1268,
    "row": 20,
    "col": 48,
    "hex": 4921,
    "display": "4921",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1269,
    "row": 21,
    "col": 48,
    "hex": 4922,
    "display": "4922",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1270,
    "row": 22,
    "col": 48,
    "hex": 4923,
    "display": "4923",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1271,
    "row": 23,
    "col": 48,
    "hex": 4924,
    "display": "4924",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1272,
    "row": 24,
    "col": 48,
    "hex": 4925,
    "display": "4925",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1273,
    "row": 25,
    "col": 48,
    "hex": 4926,
    "display": "4926",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1274,
    "row": 0,
    "col": 49,
    "hex": 5001,
    "display": "5001",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1275,
    "row": 1,
    "col": 49,
    "hex": 5002,
    "display": "5002",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1276,
    "row": 2,
    "col": 49,
    "hex": 5003,
    "display": "5003",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1277,
    "row": 3,
    "col": 49,
    "hex": 5004,
    "display": "5004",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1278,
    "row": 4,
    "col": 49,
    "hex": 5005,
    "display": "5005",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1279,
    "row": 5,
    "col": 49,
    "hex": 5006,
    "display": "5006",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1280,
    "row": 6,
    "col": 49,
    "hex": 5007,
    "display": "5007",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1281,
    "row": 7,
    "col": 49,
    "hex": 5008,
    "display": "5008",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1282,
    "row": 8,
    "col": 49,
    "hex": 5009,
    "display": "5009",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1283,
    "row": 9,
    "col": 49,
    "hex": 5010,
    "display": "5010",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1284,
    "row": 10,
    "col": 49,
    "hex": 5011,
    "display": "5011",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1285,
    "row": 11,
    "col": 49,
    "hex": 5012,
    "display": "5012",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1286,
    "row": 12,
    "col": 49,
    "hex": 5013,
    "display": "5013",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1287,
    "row": 13,
    "col": 49,
    "hex": 5014,
    "display": "5014",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1288,
    "row": 14,
    "col": 49,
    "hex": 5015,
    "display": "5015",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1289,
    "row": 15,
    "col": 49,
    "hex": 5016,
    "display": "5016",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1290,
    "row": 16,
    "col": 49,
    "hex": 5017,
    "display": "5017",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1291,
    "row": 17,
    "col": 49,
    "hex": 5018,
    "display": "5018",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1292,
    "row": 18,
    "col": 49,
    "hex": 5019,
    "display": "5019",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1293,
    "row": 19,
    "col": 49,
    "hex": 5020,
    "display": "5020",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1294,
    "row": 20,
    "col": 49,
    "hex": 5021,
    "display": "5021",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1295,
    "row": 21,
    "col": 49,
    "hex": 5022,
    "display": "5022",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1296,
    "row": 22,
    "col": 49,
    "hex": 5023,
    "display": "5023",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1297,
    "row": 23,
    "col": 49,
    "hex": 5024,
    "display": "5024",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1298,
    "row": 24,
    "col": 49,
    "hex": 5025,
    "display": "5025",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1299,
    "row": 25,
    "col": 49,
    "hex": 5026,
    "display": "5026",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1300,
    "row": 0,
    "col": 50,
    "hex": 5101,
    "display": "5101",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1301,
    "row": 1,
    "col": 50,
    "hex": 5102,
    "display": "5102",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1302,
    "row": 2,
    "col": 50,
    "hex": 5103,
    "display": "5103",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1303,
    "row": 3,
    "col": 50,
    "hex": 5104,
    "display": "5104",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1304,
    "row": 4,
    "col": 50,
    "hex": 5105,
    "display": "5105",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1305,
    "row": 5,
    "col": 50,
    "hex": 5106,
    "display": "5106",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1306,
    "row": 6,
    "col": 50,
    "hex": 5107,
    "display": "5107",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1307,
    "row": 7,
    "col": 50,
    "hex": 5108,
    "display": "5108",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1308,
    "row": 8,
    "col": 50,
    "hex": 5109,
    "display": "5109",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1309,
    "row": 9,
    "col": 50,
    "hex": 5110,
    "display": "5110",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1310,
    "row": 10,
    "col": 50,
    "hex": 5111,
    "display": "5111",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1311,
    "row": 11,
    "col": 50,
    "hex": 5112,
    "display": "5112",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1312,
    "row": 12,
    "col": 50,
    "hex": 5113,
    "display": "5113",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1313,
    "row": 13,
    "col": 50,
    "hex": 5114,
    "display": "5114",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1314,
    "row": 14,
    "col": 50,
    "hex": 5115,
    "display": "5115",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1315,
    "row": 15,
    "col": 50,
    "hex": 5116,
    "display": "5116",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1316,
    "row": 16,
    "col": 50,
    "hex": 5117,
    "display": "5117",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1317,
    "row": 17,
    "col": 50,
    "hex": 5118,
    "display": "5118",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1318,
    "row": 18,
    "col": 50,
    "hex": 5119,
    "display": "5119",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1319,
    "row": 19,
    "col": 50,
    "hex": 5120,
    "display": "5120",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1320,
    "row": 20,
    "col": 50,
    "hex": 5121,
    "display": "5121",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1321,
    "row": 21,
    "col": 50,
    "hex": 5122,
    "display": "5122",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1322,
    "row": 22,
    "col": 50,
    "hex": 5123,
    "display": "5123",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1323,
    "row": 23,
    "col": 50,
    "hex": 5124,
    "display": "5124",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1324,
    "row": 24,
    "col": 50,
    "hex": 5125,
    "display": "5125",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1325,
    "row": 25,
    "col": 50,
    "hex": 5126,
    "display": "5126",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1326,
    "row": 0,
    "col": 51,
    "hex": 5201,
    "display": "5201",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1327,
    "row": 1,
    "col": 51,
    "hex": 5202,
    "display": "5202",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1328,
    "row": 2,
    "col": 51,
    "hex": 5203,
    "display": "5203",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1329,
    "row": 3,
    "col": 51,
    "hex": 5204,
    "display": "5204",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1330,
    "row": 4,
    "col": 51,
    "hex": 5205,
    "display": "5205",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1331,
    "row": 5,
    "col": 51,
    "hex": 5206,
    "display": "5206",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1332,
    "row": 6,
    "col": 51,
    "hex": 5207,
    "display": "5207",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1333,
    "row": 7,
    "col": 51,
    "hex": 5208,
    "display": "5208",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1334,
    "row": 8,
    "col": 51,
    "hex": 5209,
    "display": "5209",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1335,
    "row": 9,
    "col": 51,
    "hex": 5210,
    "display": "5210",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1336,
    "row": 10,
    "col": 51,
    "hex": 5211,
    "display": "5211",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1337,
    "row": 11,
    "col": 51,
    "hex": 5212,
    "display": "5212",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1338,
    "row": 12,
    "col": 51,
    "hex": 5213,
    "display": "5213",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1339,
    "row": 13,
    "col": 51,
    "hex": 5214,
    "display": "5214",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1340,
    "row": 14,
    "col": 51,
    "hex": 5215,
    "display": "5215",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1341,
    "row": 15,
    "col": 51,
    "hex": 5216,
    "display": "5216",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1342,
    "row": 16,
    "col": 51,
    "hex": 5217,
    "display": "5217",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1343,
    "row": 17,
    "col": 51,
    "hex": 5218,
    "display": "5218",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1344,
    "row": 18,
    "col": 51,
    "hex": 5219,
    "display": "5219",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1345,
    "row": 19,
    "col": 51,
    "hex": 5220,
    "display": "5220",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1346,
    "row": 20,
    "col": 51,
    "hex": 5221,
    "display": "5221",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1347,
    "row": 21,
    "col": 51,
    "hex": 5222,
    "display": "5222",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1348,
    "row": 22,
    "col": 51,
    "hex": 5223,
    "display": "5223",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1349,
    "row": 23,
    "col": 51,
    "hex": 5224,
    "display": "5224",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1350,
    "row": 24,
    "col": 51,
    "hex": 5225,
    "display": "5225",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1351,
    "row": 25,
    "col": 51,
    "hex": 5226,
    "display": "5226",
    "location": "Center",
    "faction": "",
    "name": ""
  },
  {
    "index": 1352,
    "row": 0,
    "col": 52,
    "hex": 2701,
    "display": "E2701",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1353,
    "row": 1,
    "col": 52,
    "hex": 2702,
    "display": "E2702",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1354,
    "row": 2,
    "col": 52,
    "hex": 2703,
    "display": "E2703",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1355,
    "row": 3,
    "col": 52,
    "hex": 2704,
    "display": "E2704",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1356,
    "row": 4,
    "col": 52,
    "hex": 2705,
    "display": "E2705",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1357,
    "row": 5,
    "col": 52,
    "hex": 2706,
    "display": "E2706",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1358,
    "row": 6,
    "col": 52,
    "hex": 2707,
    "display": "E2707",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1359,
    "row": 7,
    "col": 52,
    "hex": 2708,
    "display": "E2708",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1360,
    "row": 8,
    "col": 52,
    "hex": 2709,
    "display": "E2709",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1361,
    "row": 9,
    "col": 52,
    "hex": 2710,
    "display": "E2710",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1362,
    "row": 10,
    "col": 52,
    "hex": 2711,
    "display": "E2711",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1363,
    "row": 11,
    "col": 52,
    "hex": 2712,
    "display": "E2712",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1364,
    "row": 12,
    "col": 52,
    "hex": 2713,
    "display": "E2713",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1365,
    "row": 13,
    "col": 52,
    "hex": 2714,
    "display": "E2714",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1366,
    "row": 14,
    "col": 52,
    "hex": 2715,
    "display": "E2715",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1367,
    "row": 15,
    "col": 52,
    "hex": 2716,
    "display": "E2716",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1368,
    "row": 16,
    "col": 52,
    "hex": 2717,
    "display": "E2717",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1369,
    "row": 17,
    "col": 52,
    "hex": 2718,
    "display": "E2718",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1370,
    "row": 18,
    "col": 52,
    "hex": 2719,
    "display": "E2719",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1371,
    "row": 19,
    "col": 52,
    "hex": 2720,
    "display": "E2720",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1372,
    "row": 20,
    "col": 52,
    "hex": 2721,
    "display": "E2721",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1373,
    "row": 21,
    "col": 52,
    "hex": 2722,
    "display": "E2722",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1374,
    "row": 22,
    "col": 52,
    "hex": 2723,
    "display": "E2723",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1375,
    "row": 23,
    "col": 52,
    "hex": 2724,
    "display": "E2724",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1376,
    "row": 24,
    "col": 52,
    "hex": 2725,
    "display": "E2725",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1377,
    "row": 25,
    "col": 52,
    "hex": 2726,
    "display": "E2726",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1378,
    "row": 0,
    "col": 53,
    "hex": 2801,
    "display": "E2801",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1379,
    "row": 1,
    "col": 53,
    "hex": 2802,
    "display": "E2802",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1380,
    "row": 2,
    "col": 53,
    "hex": 2803,
    "display": "E2803",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1381,
    "row": 3,
    "col": 53,
    "hex": 2804,
    "display": "E2804",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1382,
    "row": 4,
    "col": 53,
    "hex": 2805,
    "display": "E2805",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1383,
    "row": 5,
    "col": 53,
    "hex": 2806,
    "display": "E2806",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1384,
    "row": 6,
    "col": 53,
    "hex": 2807,
    "display": "E2807",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1385,
    "row": 7,
    "col": 53,
    "hex": 2808,
    "display": "E2808",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1386,
    "row": 8,
    "col": 53,
    "hex": 2809,
    "display": "E2809",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1387,
    "row": 9,
    "col": 53,
    "hex": 2810,
    "display": "E2810",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1388,
    "row": 10,
    "col": 53,
    "hex": 2811,
    "display": "E2811",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1389,
    "row": 11,
    "col": 53,
    "hex": 2812,
    "display": "E2812",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1390,
    "row": 12,
    "col": 53,
    "hex": 2813,
    "display": "E2813",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1391,
    "row": 13,
    "col": 53,
    "hex": 2814,
    "display": "E2814",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1392,
    "row": 14,
    "col": 53,
    "hex": 2815,
    "display": "E2815",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1393,
    "row": 15,
    "col": 53,
    "hex": 2816,
    "display": "E2816",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1394,
    "row": 16,
    "col": 53,
    "hex": 2817,
    "display": "E2817",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1395,
    "row": 17,
    "col": 53,
    "hex": 2818,
    "display": "E2818",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1396,
    "row": 18,
    "col": 53,
    "hex": 2819,
    "display": "E2819",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1397,
    "row": 19,
    "col": 53,
    "hex": 2820,
    "display": "E2820",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1398,
    "row": 20,
    "col": 53,
    "hex": 2821,
    "display": "E2821",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1399,
    "row": 21,
    "col": 53,
    "hex": 2822,
    "display": "E2822",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1400,
    "row": 22,
    "col": 53,
    "hex": 2823,
    "display": "E2823",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1401,
    "row": 23,
    "col": 53,
    "hex": 2824,
    "display": "E2824",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1402,
    "row": 24,
    "col": 53,
    "hex": 2825,
    "display": "E2825",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1403,
    "row": 25,
    "col": 53,
    "hex": 2826,
    "display": "E2826",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1404,
    "row": 0,
    "col": 54,
    "hex": 2901,
    "display": "E2901",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1405,
    "row": 1,
    "col": 54,
    "hex": 2902,
    "display": "E2902",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1406,
    "row": 2,
    "col": 54,
    "hex": 2903,
    "display": "E2903",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1407,
    "row": 3,
    "col": 54,
    "hex": 2904,
    "display": "E2904",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1408,
    "row": 4,
    "col": 54,
    "hex": 2905,
    "display": "E2905",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1409,
    "row": 5,
    "col": 54,
    "hex": 2906,
    "display": "E2906",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1410,
    "row": 6,
    "col": 54,
    "hex": 2907,
    "display": "E2907",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1411,
    "row": 7,
    "col": 54,
    "hex": 2908,
    "display": "E2908",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1412,
    "row": 8,
    "col": 54,
    "hex": 2909,
    "display": "E2909",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1413,
    "row": 9,
    "col": 54,
    "hex": 2910,
    "display": "E2910",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1414,
    "row": 10,
    "col": 54,
    "hex": 2911,
    "display": "E2911",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1415,
    "row": 11,
    "col": 54,
    "hex": 2912,
    "display": "E2912",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1416,
    "row": 12,
    "col": 54,
    "hex": 2913,
    "display": "E2913",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1417,
    "row": 13,
    "col": 54,
    "hex": 2914,
    "display": "E2914",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1418,
    "row": 14,
    "col": 54,
    "hex": 2915,
    "display": "E2915",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1419,
    "row": 15,
    "col": 54,
    "hex": 2916,
    "display": "E2916",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1420,
    "row": 16,
    "col": 54,
    "hex": 2917,
    "display": "E2917",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1421,
    "row": 17,
    "col": 54,
    "hex": 2918,
    "display": "E2918",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1422,
    "row": 18,
    "col": 54,
    "hex": 2919,
    "display": "E2919",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1423,
    "row": 19,
    "col": 54,
    "hex": 2920,
    "display": "E2920",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1424,
    "row": 20,
    "col": 54,
    "hex": 2921,
    "display": "E2921",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1425,
    "row": 21,
    "col": 54,
    "hex": 2922,
    "display": "E2922",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1426,
    "row": 22,
    "col": 54,
    "hex": 2923,
    "display": "E2923",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1427,
    "row": 23,
    "col": 54,
    "hex": 2924,
    "display": "E2924",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1428,
    "row": 24,
    "col": 54,
    "hex": 2925,
    "display": "E2925",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1429,
    "row": 25,
    "col": 54,
    "hex": 2926,
    "display": "E2926",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1430,
    "row": 0,
    "col": 55,
    "hex": 3001,
    "display": "E3001",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1431,
    "row": 1,
    "col": 55,
    "hex": 3002,
    "display": "E3002",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1432,
    "row": 2,
    "col": 55,
    "hex": 3003,
    "display": "E3003",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1433,
    "row": 3,
    "col": 55,
    "hex": 3004,
    "display": "E3004",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1434,
    "row": 4,
    "col": 55,
    "hex": 3005,
    "display": "E3005",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1435,
    "row": 5,
    "col": 55,
    "hex": 3006,
    "display": "E3006",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1436,
    "row": 6,
    "col": 55,
    "hex": 3007,
    "display": "E3007",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1437,
    "row": 7,
    "col": 55,
    "hex": 3008,
    "display": "E3008",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1438,
    "row": 8,
    "col": 55,
    "hex": 3009,
    "display": "E3009",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1439,
    "row": 9,
    "col": 55,
    "hex": 3010,
    "display": "E3010",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1440,
    "row": 10,
    "col": 55,
    "hex": 3011,
    "display": "E3011",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1441,
    "row": 11,
    "col": 55,
    "hex": 3012,
    "display": "E3012",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1442,
    "row": 12,
    "col": 55,
    "hex": 3013,
    "display": "E3013",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1443,
    "row": 13,
    "col": 55,
    "hex": 3014,
    "display": "E3014",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1444,
    "row": 14,
    "col": 55,
    "hex": 3015,
    "display": "E3015",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1445,
    "row": 15,
    "col": 55,
    "hex": 3016,
    "display": "E3016",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1446,
    "row": 16,
    "col": 55,
    "hex": 3017,
    "display": "E3017",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1447,
    "row": 17,
    "col": 55,
    "hex": 3018,
    "display": "E3018",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1448,
    "row": 18,
    "col": 55,
    "hex": 3019,
    "display": "E3019",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1449,
    "row": 19,
    "col": 55,
    "hex": 3020,
    "display": "E3020",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1450,
    "row": 20,
    "col": 55,
    "hex": 3021,
    "display": "E3021",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1451,
    "row": 21,
    "col": 55,
    "hex": 3022,
    "display": "E3022",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1452,
    "row": 22,
    "col": 55,
    "hex": 3023,
    "display": "E3023",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1453,
    "row": 23,
    "col": 55,
    "hex": 3024,
    "display": "E3024",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1454,
    "row": 24,
    "col": 55,
    "hex": 3025,
    "display": "E3025",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1455,
    "row": 25,
    "col": 55,
    "hex": 3026,
    "display": "E3026",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1456,
    "row": 0,
    "col": 56,
    "hex": 3101,
    "display": "E3101",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1457,
    "row": 1,
    "col": 56,
    "hex": 3102,
    "display": "E3102",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1458,
    "row": 2,
    "col": 56,
    "hex": 3103,
    "display": "E3103",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1459,
    "row": 3,
    "col": 56,
    "hex": 3104,
    "display": "E3104",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1460,
    "row": 4,
    "col": 56,
    "hex": 3105,
    "display": "E3105",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1461,
    "row": 5,
    "col": 56,
    "hex": 3106,
    "display": "E3106",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1462,
    "row": 6,
    "col": 56,
    "hex": 3107,
    "display": "E3107",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1463,
    "row": 7,
    "col": 56,
    "hex": 3108,
    "display": "E3108",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1464,
    "row": 8,
    "col": 56,
    "hex": 3109,
    "display": "E3109",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1465,
    "row": 9,
    "col": 56,
    "hex": 3110,
    "display": "E3110",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1466,
    "row": 10,
    "col": 56,
    "hex": 3111,
    "display": "E3111",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1467,
    "row": 11,
    "col": 56,
    "hex": 3112,
    "display": "E3112",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1468,
    "row": 12,
    "col": 56,
    "hex": 3113,
    "display": "E3113",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1469,
    "row": 13,
    "col": 56,
    "hex": 3114,
    "display": "E3114",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1470,
    "row": 14,
    "col": 56,
    "hex": 3115,
    "display": "E3115",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1471,
    "row": 15,
    "col": 56,
    "hex": 3116,
    "display": "E3116",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1472,
    "row": 16,
    "col": 56,
    "hex": 3117,
    "display": "E3117",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1473,
    "row": 17,
    "col": 56,
    "hex": 3118,
    "display": "E3118",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1474,
    "row": 18,
    "col": 56,
    "hex": 3119,
    "display": "E3119",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1475,
    "row": 19,
    "col": 56,
    "hex": 3120,
    "display": "E3120",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1476,
    "row": 20,
    "col": 56,
    "hex": 3121,
    "display": "E3121",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1477,
    "row": 21,
    "col": 56,
    "hex": 3122,
    "display": "E3122",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1478,
    "row": 22,
    "col": 56,
    "hex": 3123,
    "display": "E3123",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1479,
    "row": 23,
    "col": 56,
    "hex": 3124,
    "display": "E3124",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1480,
    "row": 24,
    "col": 56,
    "hex": 3125,
    "display": "E3125",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1481,
    "row": 25,
    "col": 56,
    "hex": 3126,
    "display": "E3126",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1482,
    "row": 0,
    "col": 57,
    "hex": 3201,
    "display": "E3201",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1483,
    "row": 1,
    "col": 57,
    "hex": 3202,
    "display": "E3202",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1484,
    "row": 2,
    "col": 57,
    "hex": 3203,
    "display": "E3203",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1485,
    "row": 3,
    "col": 57,
    "hex": 3204,
    "display": "E3204",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1486,
    "row": 4,
    "col": 57,
    "hex": 3205,
    "display": "E3205",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1487,
    "row": 5,
    "col": 57,
    "hex": 3206,
    "display": "E3206",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1488,
    "row": 6,
    "col": 57,
    "hex": 3207,
    "display": "E3207",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1489,
    "row": 7,
    "col": 57,
    "hex": 3208,
    "display": "E3208",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1490,
    "row": 8,
    "col": 57,
    "hex": 3209,
    "display": "E3209",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1491,
    "row": 9,
    "col": 57,
    "hex": 3210,
    "display": "E3210",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1492,
    "row": 10,
    "col": 57,
    "hex": 3211,
    "display": "E3211",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1493,
    "row": 11,
    "col": 57,
    "hex": 3212,
    "display": "E3212",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1494,
    "row": 12,
    "col": 57,
    "hex": 3213,
    "display": "E3213",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1495,
    "row": 13,
    "col": 57,
    "hex": 3214,
    "display": "E3214",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1496,
    "row": 14,
    "col": 57,
    "hex": 3215,
    "display": "E3215",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1497,
    "row": 15,
    "col": 57,
    "hex": 3216,
    "display": "E3216",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1498,
    "row": 16,
    "col": 57,
    "hex": 3217,
    "display": "E3217",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1499,
    "row": 17,
    "col": 57,
    "hex": 3218,
    "display": "E3218",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1500,
    "row": 18,
    "col": 57,
    "hex": 3219,
    "display": "E3219",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1501,
    "row": 19,
    "col": 57,
    "hex": 3220,
    "display": "E3220",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1502,
    "row": 20,
    "col": 57,
    "hex": 3221,
    "display": "E3221",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1503,
    "row": 21,
    "col": 57,
    "hex": 3222,
    "display": "E3222",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1504,
    "row": 22,
    "col": 57,
    "hex": 3223,
    "display": "E3223",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1505,
    "row": 23,
    "col": 57,
    "hex": 3224,
    "display": "E3224",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1506,
    "row": 24,
    "col": 57,
    "hex": 3225,
    "display": "E3225",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1507,
    "row": 25,
    "col": 57,
    "hex": 3226,
    "display": "E3226",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1508,
    "row": 0,
    "col": 58,
    "hex": 3301,
    "display": "E3301",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1509,
    "row": 1,
    "col": 58,
    "hex": 3302,
    "display": "E3302",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1510,
    "row": 2,
    "col": 58,
    "hex": 3303,
    "display": "E3303",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1511,
    "row": 3,
    "col": 58,
    "hex": 3304,
    "display": "E3304",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1512,
    "row": 4,
    "col": 58,
    "hex": 3305,
    "display": "E3305",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1513,
    "row": 5,
    "col": 58,
    "hex": 3306,
    "display": "E3306",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1514,
    "row": 6,
    "col": 58,
    "hex": 3307,
    "display": "E3307",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1515,
    "row": 7,
    "col": 58,
    "hex": 3308,
    "display": "E3308",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1516,
    "row": 8,
    "col": 58,
    "hex": 3309,
    "display": "E3309",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1517,
    "row": 9,
    "col": 58,
    "hex": 3310,
    "display": "E3310",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1518,
    "row": 10,
    "col": 58,
    "hex": 3311,
    "display": "E3311",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1519,
    "row": 11,
    "col": 58,
    "hex": 3312,
    "display": "E3312",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1520,
    "row": 12,
    "col": 58,
    "hex": 3313,
    "display": "E3313",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1521,
    "row": 13,
    "col": 58,
    "hex": 3314,
    "display": "E3314",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1522,
    "row": 14,
    "col": 58,
    "hex": 3315,
    "display": "E3315",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1523,
    "row": 15,
    "col": 58,
    "hex": 3316,
    "display": "E3316",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1524,
    "row": 16,
    "col": 58,
    "hex": 3317,
    "display": "E3317",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1525,
    "row": 17,
    "col": 58,
    "hex": 3318,
    "display": "E3318",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1526,
    "row": 18,
    "col": 58,
    "hex": 3319,
    "display": "E3319",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1527,
    "row": 19,
    "col": 58,
    "hex": 3320,
    "display": "E3320",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1528,
    "row": 20,
    "col": 58,
    "hex": 3321,
    "display": "E3321",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1529,
    "row": 21,
    "col": 58,
    "hex": 3322,
    "display": "E3322",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1530,
    "row": 22,
    "col": 58,
    "hex": 3323,
    "display": "E3323",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1531,
    "row": 23,
    "col": 58,
    "hex": 3324,
    "display": "E3324",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1532,
    "row": 24,
    "col": 58,
    "hex": 3325,
    "display": "E3325",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1533,
    "row": 25,
    "col": 58,
    "hex": 3326,
    "display": "E3326",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1534,
    "row": 0,
    "col": 59,
    "hex": 3401,
    "display": "E3401",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1535,
    "row": 1,
    "col": 59,
    "hex": 3402,
    "display": "E3402",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1536,
    "row": 2,
    "col": 59,
    "hex": 3403,
    "display": "E3403",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1537,
    "row": 3,
    "col": 59,
    "hex": 3404,
    "display": "E3404",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1538,
    "row": 4,
    "col": 59,
    "hex": 3405,
    "display": "E3405",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1539,
    "row": 5,
    "col": 59,
    "hex": 3406,
    "display": "E3406",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1540,
    "row": 6,
    "col": 59,
    "hex": 3407,
    "display": "E3407",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1541,
    "row": 7,
    "col": 59,
    "hex": 3408,
    "display": "E3408",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1542,
    "row": 8,
    "col": 59,
    "hex": 3409,
    "display": "E3409",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1543,
    "row": 9,
    "col": 59,
    "hex": 3410,
    "display": "E3410",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1544,
    "row": 10,
    "col": 59,
    "hex": 3411,
    "display": "E3411",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1545,
    "row": 11,
    "col": 59,
    "hex": 3412,
    "display": "E3412",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1546,
    "row": 12,
    "col": 59,
    "hex": 3413,
    "display": "E3413",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1547,
    "row": 13,
    "col": 59,
    "hex": 3414,
    "display": "E3414",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1548,
    "row": 14,
    "col": 59,
    "hex": 3415,
    "display": "E3415",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1549,
    "row": 15,
    "col": 59,
    "hex": 3416,
    "display": "E3416",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1550,
    "row": 16,
    "col": 59,
    "hex": 3417,
    "display": "E3417",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1551,
    "row": 17,
    "col": 59,
    "hex": 3418,
    "display": "E3418",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1552,
    "row": 18,
    "col": 59,
    "hex": 3419,
    "display": "E3419",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1553,
    "row": 19,
    "col": 59,
    "hex": 3420,
    "display": "E3420",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1554,
    "row": 20,
    "col": 59,
    "hex": 3421,
    "display": "E3421",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1555,
    "row": 21,
    "col": 59,
    "hex": 3422,
    "display": "E3422",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1556,
    "row": 22,
    "col": 59,
    "hex": 3423,
    "display": "E3423",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1557,
    "row": 23,
    "col": 59,
    "hex": 3424,
    "display": "E3424",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1558,
    "row": 24,
    "col": 59,
    "hex": 3425,
    "display": "E3425",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1559,
    "row": 25,
    "col": 59,
    "hex": 3426,
    "display": "E3426",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1560,
    "row": 0,
    "col": 60,
    "hex": 3501,
    "display": "E3501",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1561,
    "row": 1,
    "col": 60,
    "hex": 3502,
    "display": "E3502",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1562,
    "row": 2,
    "col": 60,
    "hex": 3503,
    "display": "E3503",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1563,
    "row": 3,
    "col": 60,
    "hex": 3504,
    "display": "E3504",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1564,
    "row": 4,
    "col": 60,
    "hex": 3505,
    "display": "E3505",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1565,
    "row": 5,
    "col": 60,
    "hex": 3506,
    "display": "E3506",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1566,
    "row": 6,
    "col": 60,
    "hex": 3507,
    "display": "E3507",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1567,
    "row": 7,
    "col": 60,
    "hex": 3508,
    "display": "E3508",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1568,
    "row": 8,
    "col": 60,
    "hex": 3509,
    "display": "E3509",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1569,
    "row": 9,
    "col": 60,
    "hex": 3510,
    "display": "E3510",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1570,
    "row": 10,
    "col": 60,
    "hex": 3511,
    "display": "E3511",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1571,
    "row": 11,
    "col": 60,
    "hex": 3512,
    "display": "E3512",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1572,
    "row": 12,
    "col": 60,
    "hex": 3513,
    "display": "E3513",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1573,
    "row": 13,
    "col": 60,
    "hex": 3514,
    "display": "E3514",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1574,
    "row": 14,
    "col": 60,
    "hex": 3515,
    "display": "E3515",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1575,
    "row": 15,
    "col": 60,
    "hex": 3516,
    "display": "E3516",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1576,
    "row": 16,
    "col": 60,
    "hex": 3517,
    "display": "E3517",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1577,
    "row": 17,
    "col": 60,
    "hex": 3518,
    "display": "E3518",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1578,
    "row": 18,
    "col": 60,
    "hex": 3519,
    "display": "E3519",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1579,
    "row": 19,
    "col": 60,
    "hex": 3520,
    "display": "E3520",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1580,
    "row": 20,
    "col": 60,
    "hex": 3521,
    "display": "E3521",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1581,
    "row": 21,
    "col": 60,
    "hex": 3522,
    "display": "E3522",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1582,
    "row": 22,
    "col": 60,
    "hex": 3523,
    "display": "E3523",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1583,
    "row": 23,
    "col": 60,
    "hex": 3524,
    "display": "E3524",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1584,
    "row": 24,
    "col": 60,
    "hex": 3525,
    "display": "E3525",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1585,
    "row": 25,
    "col": 60,
    "hex": 3526,
    "display": "E3526",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1586,
    "row": 0,
    "col": 61,
    "hex": 3601,
    "display": "E3601",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1587,
    "row": 1,
    "col": 61,
    "hex": 3602,
    "display": "E3602",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1588,
    "row": 2,
    "col": 61,
    "hex": 3603,
    "display": "E3603",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1589,
    "row": 3,
    "col": 61,
    "hex": 3604,
    "display": "E3604",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1590,
    "row": 4,
    "col": 61,
    "hex": 3605,
    "display": "E3605",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1591,
    "row": 5,
    "col": 61,
    "hex": 3606,
    "display": "E3606",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1592,
    "row": 6,
    "col": 61,
    "hex": 3607,
    "display": "E3607",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1593,
    "row": 7,
    "col": 61,
    "hex": 3608,
    "display": "E3608",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1594,
    "row": 8,
    "col": 61,
    "hex": 3609,
    "display": "E3609",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1595,
    "row": 9,
    "col": 61,
    "hex": 3610,
    "display": "E3610",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1596,
    "row": 10,
    "col": 61,
    "hex": 3611,
    "display": "E3611",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1597,
    "row": 11,
    "col": 61,
    "hex": 3612,
    "display": "E3612",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1598,
    "row": 12,
    "col": 61,
    "hex": 3613,
    "display": "E3613",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1599,
    "row": 13,
    "col": 61,
    "hex": 3614,
    "display": "E3614",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1600,
    "row": 14,
    "col": 61,
    "hex": 3615,
    "display": "E3615",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1601,
    "row": 15,
    "col": 61,
    "hex": 3616,
    "display": "E3616",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1602,
    "row": 16,
    "col": 61,
    "hex": 3617,
    "display": "E3617",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1603,
    "row": 17,
    "col": 61,
    "hex": 3618,
    "display": "E3618",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1604,
    "row": 18,
    "col": 61,
    "hex": 3619,
    "display": "E3619",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1605,
    "row": 19,
    "col": 61,
    "hex": 3620,
    "display": "E3620",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1606,
    "row": 20,
    "col": 61,
    "hex": 3621,
    "display": "E3621",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1607,
    "row": 21,
    "col": 61,
    "hex": 3622,
    "display": "E3622",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1608,
    "row": 22,
    "col": 61,
    "hex": 3623,
    "display": "E3623",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1609,
    "row": 23,
    "col": 61,
    "hex": 3624,
    "display": "E3624",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1610,
    "row": 24,
    "col": 61,
    "hex": 3625,
    "display": "E3625",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1611,
    "row": 25,
    "col": 61,
    "hex": 3626,
    "display": "E3626",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1612,
    "row": 0,
    "col": 62,
    "hex": 3701,
    "display": "E3701",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1613,
    "row": 1,
    "col": 62,
    "hex": 3702,
    "display": "E3702",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1614,
    "row": 2,
    "col": 62,
    "hex": 3703,
    "display": "E3703",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1615,
    "row": 3,
    "col": 62,
    "hex": 3704,
    "display": "E3704",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1616,
    "row": 4,
    "col": 62,
    "hex": 3705,
    "display": "E3705",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1617,
    "row": 5,
    "col": 62,
    "hex": 3706,
    "display": "E3706",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1618,
    "row": 6,
    "col": 62,
    "hex": 3707,
    "display": "E3707",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1619,
    "row": 7,
    "col": 62,
    "hex": 3708,
    "display": "E3708",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1620,
    "row": 8,
    "col": 62,
    "hex": 3709,
    "display": "E3709",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1621,
    "row": 9,
    "col": 62,
    "hex": 3710,
    "display": "E3710",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1622,
    "row": 10,
    "col": 62,
    "hex": 3711,
    "display": "E3711",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1623,
    "row": 11,
    "col": 62,
    "hex": 3712,
    "display": "E3712",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1624,
    "row": 12,
    "col": 62,
    "hex": 3713,
    "display": "E3713",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1625,
    "row": 13,
    "col": 62,
    "hex": 3714,
    "display": "E3714",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1626,
    "row": 14,
    "col": 62,
    "hex": 3715,
    "display": "E3715",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1627,
    "row": 15,
    "col": 62,
    "hex": 3716,
    "display": "E3716",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1628,
    "row": 16,
    "col": 62,
    "hex": 3717,
    "display": "E3717",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1629,
    "row": 17,
    "col": 62,
    "hex": 3718,
    "display": "E3718",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1630,
    "row": 18,
    "col": 62,
    "hex": 3719,
    "display": "E3719",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1631,
    "row": 19,
    "col": 62,
    "hex": 3720,
    "display": "E3720",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1632,
    "row": 20,
    "col": 62,
    "hex": 3721,
    "display": "E3721",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1633,
    "row": 21,
    "col": 62,
    "hex": 3722,
    "display": "E3722",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1634,
    "row": 22,
    "col": 62,
    "hex": 3723,
    "display": "E3723",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1635,
    "row": 23,
    "col": 62,
    "hex": 3724,
    "display": "E3724",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1636,
    "row": 24,
    "col": 62,
    "hex": 3725,
    "display": "E3725",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1637,
    "row": 25,
    "col": 62,
    "hex": 3726,
    "display": "E3726",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1638,
    "row": 0,
    "col": 63,
    "hex": 3801,
    "display": "E3801",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1639,
    "row": 1,
    "col": 63,
    "hex": 3802,
    "display": "E3802",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1640,
    "row": 2,
    "col": 63,
    "hex": 3803,
    "display": "E3803",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1641,
    "row": 3,
    "col": 63,
    "hex": 3804,
    "display": "E3804",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1642,
    "row": 4,
    "col": 63,
    "hex": 3805,
    "display": "E3805",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1643,
    "row": 5,
    "col": 63,
    "hex": 3806,
    "display": "E3806",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1644,
    "row": 6,
    "col": 63,
    "hex": 3807,
    "display": "E3807",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1645,
    "row": 7,
    "col": 63,
    "hex": 3808,
    "display": "E3808",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1646,
    "row": 8,
    "col": 63,
    "hex": 3809,
    "display": "E3809",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1647,
    "row": 9,
    "col": 63,
    "hex": 3810,
    "display": "E3810",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1648,
    "row": 10,
    "col": 63,
    "hex": 3811,
    "display": "E3811",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1649,
    "row": 11,
    "col": 63,
    "hex": 3812,
    "display": "E3812",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1650,
    "row": 12,
    "col": 63,
    "hex": 3813,
    "display": "E3813",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1651,
    "row": 13,
    "col": 63,
    "hex": 3814,
    "display": "E3814",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1652,
    "row": 14,
    "col": 63,
    "hex": 3815,
    "display": "E3815",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1653,
    "row": 15,
    "col": 63,
    "hex": 3816,
    "display": "E3816",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1654,
    "row": 16,
    "col": 63,
    "hex": 3817,
    "display": "E3817",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1655,
    "row": 17,
    "col": 63,
    "hex": 3818,
    "display": "E3818",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1656,
    "row": 18,
    "col": 63,
    "hex": 3819,
    "display": "E3819",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1657,
    "row": 19,
    "col": 63,
    "hex": 3820,
    "display": "E3820",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1658,
    "row": 20,
    "col": 63,
    "hex": 3821,
    "display": "E3821",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1659,
    "row": 21,
    "col": 63,
    "hex": 3822,
    "display": "E3822",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1660,
    "row": 22,
    "col": 63,
    "hex": 3823,
    "display": "E3823",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1661,
    "row": 23,
    "col": 63,
    "hex": 3824,
    "display": "E3824",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1662,
    "row": 24,
    "col": 63,
    "hex": 3825,
    "display": "E3825",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1663,
    "row": 25,
    "col": 63,
    "hex": 3826,
    "display": "E3826",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1664,
    "row": 0,
    "col": 64,
    "hex": 3901,
    "display": "E3901",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1665,
    "row": 1,
    "col": 64,
    "hex": 3902,
    "display": "E3902",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1666,
    "row": 2,
    "col": 64,
    "hex": 3903,
    "display": "E3903",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1667,
    "row": 3,
    "col": 64,
    "hex": 3904,
    "display": "E3904",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1668,
    "row": 4,
    "col": 64,
    "hex": 3905,
    "display": "E3905",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1669,
    "row": 5,
    "col": 64,
    "hex": 3906,
    "display": "E3906",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1670,
    "row": 6,
    "col": 64,
    "hex": 3907,
    "display": "E3907",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1671,
    "row": 7,
    "col": 64,
    "hex": 3908,
    "display": "E3908",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1672,
    "row": 8,
    "col": 64,
    "hex": 3909,
    "display": "E3909",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1673,
    "row": 9,
    "col": 64,
    "hex": 3910,
    "display": "E3910",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1674,
    "row": 10,
    "col": 64,
    "hex": 3911,
    "display": "E3911",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1675,
    "row": 11,
    "col": 64,
    "hex": 3912,
    "display": "E3912",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1676,
    "row": 12,
    "col": 64,
    "hex": 3913,
    "display": "E3913",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1677,
    "row": 13,
    "col": 64,
    "hex": 3914,
    "display": "E3914",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1678,
    "row": 14,
    "col": 64,
    "hex": 3915,
    "display": "E3915",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1679,
    "row": 15,
    "col": 64,
    "hex": 3916,
    "display": "E3916",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1680,
    "row": 16,
    "col": 64,
    "hex": 3917,
    "display": "E3917",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1681,
    "row": 17,
    "col": 64,
    "hex": 3918,
    "display": "E3918",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1682,
    "row": 18,
    "col": 64,
    "hex": 3919,
    "display": "E3919",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1683,
    "row": 19,
    "col": 64,
    "hex": 3920,
    "display": "E3920",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1684,
    "row": 20,
    "col": 64,
    "hex": 3921,
    "display": "E3921",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1685,
    "row": 21,
    "col": 64,
    "hex": 3922,
    "display": "E3922",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1686,
    "row": 22,
    "col": 64,
    "hex": 3923,
    "display": "E3923",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1687,
    "row": 23,
    "col": 64,
    "hex": 3924,
    "display": "E3924",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1688,
    "row": 24,
    "col": 64,
    "hex": 3925,
    "display": "E3925",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1689,
    "row": 25,
    "col": 64,
    "hex": 3926,
    "display": "E3926",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1690,
    "row": 0,
    "col": 65,
    "hex": 4001,
    "display": "E4001",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1691,
    "row": 1,
    "col": 65,
    "hex": 4002,
    "display": "E4002",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1692,
    "row": 2,
    "col": 65,
    "hex": 4003,
    "display": "E4003",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1693,
    "row": 3,
    "col": 65,
    "hex": 4004,
    "display": "E4004",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1694,
    "row": 4,
    "col": 65,
    "hex": 4005,
    "display": "E4005",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1695,
    "row": 5,
    "col": 65,
    "hex": 4006,
    "display": "E4006",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1696,
    "row": 6,
    "col": 65,
    "hex": 4007,
    "display": "E4007",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1697,
    "row": 7,
    "col": 65,
    "hex": 4008,
    "display": "E4008",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1698,
    "row": 8,
    "col": 65,
    "hex": 4009,
    "display": "E4009",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1699,
    "row": 9,
    "col": 65,
    "hex": 4010,
    "display": "E4010",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1700,
    "row": 10,
    "col": 65,
    "hex": 4011,
    "display": "E4011",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1701,
    "row": 11,
    "col": 65,
    "hex": 4012,
    "display": "E4012",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1702,
    "row": 12,
    "col": 65,
    "hex": 4013,
    "display": "E4013",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1703,
    "row": 13,
    "col": 65,
    "hex": 4014,
    "display": "E4014",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1704,
    "row": 14,
    "col": 65,
    "hex": 4015,
    "display": "E4015",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1705,
    "row": 15,
    "col": 65,
    "hex": 4016,
    "display": "E4016",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1706,
    "row": 16,
    "col": 65,
    "hex": 4017,
    "display": "E4017",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1707,
    "row": 17,
    "col": 65,
    "hex": 4018,
    "display": "E4018",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1708,
    "row": 18,
    "col": 65,
    "hex": 4019,
    "display": "E4019",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1709,
    "row": 19,
    "col": 65,
    "hex": 4020,
    "display": "E4020",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1710,
    "row": 20,
    "col": 65,
    "hex": 4021,
    "display": "E4021",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1711,
    "row": 21,
    "col": 65,
    "hex": 4022,
    "display": "E4022",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1712,
    "row": 22,
    "col": 65,
    "hex": 4023,
    "display": "E4023",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1713,
    "row": 23,
    "col": 65,
    "hex": 4024,
    "display": "E4024",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1714,
    "row": 24,
    "col": 65,
    "hex": 4025,
    "display": "E4025",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1715,
    "row": 25,
    "col": 65,
    "hex": 4026,
    "display": "E4026",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1716,
    "row": 0,
    "col": 66,
    "hex": 4101,
    "display": "E4101",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1717,
    "row": 1,
    "col": 66,
    "hex": 4102,
    "display": "E4102",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1718,
    "row": 2,
    "col": 66,
    "hex": 4103,
    "display": "E4103",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1719,
    "row": 3,
    "col": 66,
    "hex": 4104,
    "display": "E4104",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1720,
    "row": 4,
    "col": 66,
    "hex": 4105,
    "display": "E4105",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1721,
    "row": 5,
    "col": 66,
    "hex": 4106,
    "display": "E4106",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1722,
    "row": 6,
    "col": 66,
    "hex": 4107,
    "display": "E4107",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1723,
    "row": 7,
    "col": 66,
    "hex": 4108,
    "display": "E4108",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1724,
    "row": 8,
    "col": 66,
    "hex": 4109,
    "display": "E4109",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1725,
    "row": 9,
    "col": 66,
    "hex": 4110,
    "display": "E4110",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1726,
    "row": 10,
    "col": 66,
    "hex": 4111,
    "display": "E4111",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1727,
    "row": 11,
    "col": 66,
    "hex": 4112,
    "display": "E4112",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1728,
    "row": 12,
    "col": 66,
    "hex": 4113,
    "display": "E4113",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1729,
    "row": 13,
    "col": 66,
    "hex": 4114,
    "display": "E4114",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1730,
    "row": 14,
    "col": 66,
    "hex": 4115,
    "display": "E4115",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1731,
    "row": 15,
    "col": 66,
    "hex": 4116,
    "display": "E4116",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1732,
    "row": 16,
    "col": 66,
    "hex": 4117,
    "display": "E4117",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1733,
    "row": 17,
    "col": 66,
    "hex": 4118,
    "display": "E4118",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1734,
    "row": 18,
    "col": 66,
    "hex": 4119,
    "display": "E4119",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1735,
    "row": 19,
    "col": 66,
    "hex": 4120,
    "display": "E4120",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1736,
    "row": 20,
    "col": 66,
    "hex": 4121,
    "display": "E4121",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1737,
    "row": 21,
    "col": 66,
    "hex": 4122,
    "display": "E4122",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1738,
    "row": 22,
    "col": 66,
    "hex": 4123,
    "display": "E4123",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1739,
    "row": 23,
    "col": 66,
    "hex": 4124,
    "display": "E4124",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1740,
    "row": 24,
    "col": 66,
    "hex": 4125,
    "display": "E4125",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1741,
    "row": 25,
    "col": 66,
    "hex": 4126,
    "display": "E4126",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1742,
    "row": 0,
    "col": 67,
    "hex": 4201,
    "display": "E4201",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1743,
    "row": 1,
    "col": 67,
    "hex": 4202,
    "display": "E4202",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1744,
    "row": 2,
    "col": 67,
    "hex": 4203,
    "display": "E4203",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1745,
    "row": 3,
    "col": 67,
    "hex": 4204,
    "display": "E4204",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1746,
    "row": 4,
    "col": 67,
    "hex": 4205,
    "display": "E4205",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1747,
    "row": 5,
    "col": 67,
    "hex": 4206,
    "display": "E4206",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1748,
    "row": 6,
    "col": 67,
    "hex": 4207,
    "display": "E4207",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1749,
    "row": 7,
    "col": 67,
    "hex": 4208,
    "display": "E4208",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1750,
    "row": 8,
    "col": 67,
    "hex": 4209,
    "display": "E4209",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1751,
    "row": 9,
    "col": 67,
    "hex": 4210,
    "display": "E4210",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1752,
    "row": 10,
    "col": 67,
    "hex": 4211,
    "display": "E4211",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1753,
    "row": 11,
    "col": 67,
    "hex": 4212,
    "display": "E4212",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1754,
    "row": 12,
    "col": 67,
    "hex": 4213,
    "display": "E4213",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1755,
    "row": 13,
    "col": 67,
    "hex": 4214,
    "display": "E4214",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1756,
    "row": 14,
    "col": 67,
    "hex": 4215,
    "display": "E4215",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1757,
    "row": 15,
    "col": 67,
    "hex": 4216,
    "display": "E4216",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1758,
    "row": 16,
    "col": 67,
    "hex": 4217,
    "display": "E4217",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1759,
    "row": 17,
    "col": 67,
    "hex": 4218,
    "display": "E4218",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1760,
    "row": 18,
    "col": 67,
    "hex": 4219,
    "display": "E4219",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1761,
    "row": 19,
    "col": 67,
    "hex": 4220,
    "display": "E4220",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1762,
    "row": 20,
    "col": 67,
    "hex": 4221,
    "display": "E4221",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1763,
    "row": 21,
    "col": 67,
    "hex": 4222,
    "display": "E4222",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1764,
    "row": 22,
    "col": 67,
    "hex": 4223,
    "display": "E4223",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1765,
    "row": 23,
    "col": 67,
    "hex": 4224,
    "display": "E4224",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1766,
    "row": 24,
    "col": 67,
    "hex": 4225,
    "display": "E4225",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1767,
    "row": 25,
    "col": 67,
    "hex": 4226,
    "display": "E4226",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1768,
    "row": 0,
    "col": 68,
    "hex": 4301,
    "display": "E4301",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1769,
    "row": 1,
    "col": 68,
    "hex": 4302,
    "display": "E4302",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1770,
    "row": 2,
    "col": 68,
    "hex": 4303,
    "display": "E4303",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1771,
    "row": 3,
    "col": 68,
    "hex": 4304,
    "display": "E4304",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1772,
    "row": 4,
    "col": 68,
    "hex": 4305,
    "display": "E4305",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1773,
    "row": 5,
    "col": 68,
    "hex": 4306,
    "display": "E4306",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1774,
    "row": 6,
    "col": 68,
    "hex": 4307,
    "display": "E4307",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1775,
    "row": 7,
    "col": 68,
    "hex": 4308,
    "display": "E4308",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1776,
    "row": 8,
    "col": 68,
    "hex": 4309,
    "display": "E4309",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1777,
    "row": 9,
    "col": 68,
    "hex": 4310,
    "display": "E4310",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1778,
    "row": 10,
    "col": 68,
    "hex": 4311,
    "display": "E4311",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1779,
    "row": 11,
    "col": 68,
    "hex": 4312,
    "display": "E4312",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1780,
    "row": 12,
    "col": 68,
    "hex": 4313,
    "display": "E4313",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1781,
    "row": 13,
    "col": 68,
    "hex": 4314,
    "display": "E4314",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1782,
    "row": 14,
    "col": 68,
    "hex": 4315,
    "display": "E4315",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1783,
    "row": 15,
    "col": 68,
    "hex": 4316,
    "display": "E4316",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1784,
    "row": 16,
    "col": 68,
    "hex": 4317,
    "display": "E4317",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1785,
    "row": 17,
    "col": 68,
    "hex": 4318,
    "display": "E4318",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1786,
    "row": 18,
    "col": 68,
    "hex": 4319,
    "display": "E4319",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1787,
    "row": 19,
    "col": 68,
    "hex": 4320,
    "display": "E4320",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1788,
    "row": 20,
    "col": 68,
    "hex": 4321,
    "display": "E4321",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1789,
    "row": 21,
    "col": 68,
    "hex": 4322,
    "display": "E4322",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1790,
    "row": 22,
    "col": 68,
    "hex": 4323,
    "display": "E4323",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1791,
    "row": 23,
    "col": 68,
    "hex": 4324,
    "display": "E4324",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1792,
    "row": 24,
    "col": 68,
    "hex": 4325,
    "display": "E4325",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1793,
    "row": 25,
    "col": 68,
    "hex": 4326,
    "display": "E4326",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1794,
    "row": 0,
    "col": 69,
    "hex": 4401,
    "display": "E4401",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1795,
    "row": 1,
    "col": 69,
    "hex": 4402,
    "display": "E4402",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1796,
    "row": 2,
    "col": 69,
    "hex": 4403,
    "display": "E4403",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1797,
    "row": 3,
    "col": 69,
    "hex": 4404,
    "display": "E4404",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1798,
    "row": 4,
    "col": 69,
    "hex": 4405,
    "display": "E4405",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1799,
    "row": 5,
    "col": 69,
    "hex": 4406,
    "display": "E4406",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1800,
    "row": 6,
    "col": 69,
    "hex": 4407,
    "display": "E4407",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1801,
    "row": 7,
    "col": 69,
    "hex": 4408,
    "display": "E4408",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1802,
    "row": 8,
    "col": 69,
    "hex": 4409,
    "display": "E4409",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1803,
    "row": 9,
    "col": 69,
    "hex": 4410,
    "display": "E4410",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1804,
    "row": 10,
    "col": 69,
    "hex": 4411,
    "display": "E4411",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1805,
    "row": 11,
    "col": 69,
    "hex": 4412,
    "display": "E4412",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1806,
    "row": 12,
    "col": 69,
    "hex": 4413,
    "display": "E4413",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1807,
    "row": 13,
    "col": 69,
    "hex": 4414,
    "display": "E4414",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1808,
    "row": 14,
    "col": 69,
    "hex": 4415,
    "display": "E4415",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1809,
    "row": 15,
    "col": 69,
    "hex": 4416,
    "display": "E4416",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1810,
    "row": 16,
    "col": 69,
    "hex": 4417,
    "display": "E4417",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1811,
    "row": 17,
    "col": 69,
    "hex": 4418,
    "display": "E4418",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1812,
    "row": 18,
    "col": 69,
    "hex": 4419,
    "display": "E4419",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1813,
    "row": 19,
    "col": 69,
    "hex": 4420,
    "display": "E4420",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1814,
    "row": 20,
    "col": 69,
    "hex": 4421,
    "display": "E4421",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1815,
    "row": 21,
    "col": 69,
    "hex": 4422,
    "display": "E4422",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1816,
    "row": 22,
    "col": 69,
    "hex": 4423,
    "display": "E4423",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1817,
    "row": 23,
    "col": 69,
    "hex": 4424,
    "display": "E4424",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1818,
    "row": 24,
    "col": 69,
    "hex": 4425,
    "display": "E4425",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1819,
    "row": 25,
    "col": 69,
    "hex": 4426,
    "display": "E4426",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1820,
    "row": 0,
    "col": 70,
    "hex": 4501,
    "display": "E4501",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1821,
    "row": 1,
    "col": 70,
    "hex": 4502,
    "display": "E4502",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1822,
    "row": 2,
    "col": 70,
    "hex": 4503,
    "display": "E4503",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1823,
    "row": 3,
    "col": 70,
    "hex": 4504,
    "display": "E4504",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1824,
    "row": 4,
    "col": 70,
    "hex": 4505,
    "display": "E4505",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1825,
    "row": 5,
    "col": 70,
    "hex": 4506,
    "display": "E4506",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1826,
    "row": 6,
    "col": 70,
    "hex": 4507,
    "display": "E4507",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1827,
    "row": 7,
    "col": 70,
    "hex": 4508,
    "display": "E4508",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1828,
    "row": 8,
    "col": 70,
    "hex": 4509,
    "display": "E4509",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1829,
    "row": 9,
    "col": 70,
    "hex": 4510,
    "display": "E4510",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1830,
    "row": 10,
    "col": 70,
    "hex": 4511,
    "display": "E4511",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1831,
    "row": 11,
    "col": 70,
    "hex": 4512,
    "display": "E4512",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1832,
    "row": 12,
    "col": 70,
    "hex": 4513,
    "display": "E4513",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1833,
    "row": 13,
    "col": 70,
    "hex": 4514,
    "display": "E4514",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1834,
    "row": 14,
    "col": 70,
    "hex": 4515,
    "display": "E4515",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1835,
    "row": 15,
    "col": 70,
    "hex": 4516,
    "display": "E4516",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1836,
    "row": 16,
    "col": 70,
    "hex": 4517,
    "display": "E4517",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1837,
    "row": 17,
    "col": 70,
    "hex": 4518,
    "display": "E4518",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1838,
    "row": 18,
    "col": 70,
    "hex": 4519,
    "display": "E4519",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1839,
    "row": 19,
    "col": 70,
    "hex": 4520,
    "display": "E4520",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1840,
    "row": 20,
    "col": 70,
    "hex": 4521,
    "display": "E4521",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1841,
    "row": 21,
    "col": 70,
    "hex": 4522,
    "display": "E4522",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1842,
    "row": 22,
    "col": 70,
    "hex": 4523,
    "display": "E4523",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1843,
    "row": 23,
    "col": 70,
    "hex": 4524,
    "display": "E4524",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1844,
    "row": 24,
    "col": 70,
    "hex": 4525,
    "display": "E4525",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1845,
    "row": 25,
    "col": 70,
    "hex": 4526,
    "display": "E4526",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1846,
    "row": 0,
    "col": 71,
    "hex": 4601,
    "display": "E4601",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1847,
    "row": 1,
    "col": 71,
    "hex": 4602,
    "display": "E4602",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1848,
    "row": 2,
    "col": 71,
    "hex": 4603,
    "display": "E4603",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1849,
    "row": 3,
    "col": 71,
    "hex": 4604,
    "display": "E4604",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1850,
    "row": 4,
    "col": 71,
    "hex": 4605,
    "display": "E4605",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1851,
    "row": 5,
    "col": 71,
    "hex": 4606,
    "display": "E4606",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1852,
    "row": 6,
    "col": 71,
    "hex": 4607,
    "display": "E4607",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1853,
    "row": 7,
    "col": 71,
    "hex": 4608,
    "display": "E4608",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1854,
    "row": 8,
    "col": 71,
    "hex": 4609,
    "display": "E4609",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1855,
    "row": 9,
    "col": 71,
    "hex": 4610,
    "display": "E4610",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1856,
    "row": 10,
    "col": 71,
    "hex": 4611,
    "display": "E4611",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1857,
    "row": 11,
    "col": 71,
    "hex": 4612,
    "display": "E4612",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1858,
    "row": 12,
    "col": 71,
    "hex": 4613,
    "display": "E4613",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1859,
    "row": 13,
    "col": 71,
    "hex": 4614,
    "display": "E4614",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1860,
    "row": 14,
    "col": 71,
    "hex": 4615,
    "display": "E4615",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1861,
    "row": 15,
    "col": 71,
    "hex": 4616,
    "display": "E4616",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1862,
    "row": 16,
    "col": 71,
    "hex": 4617,
    "display": "E4617",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1863,
    "row": 17,
    "col": 71,
    "hex": 4618,
    "display": "E4618",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1864,
    "row": 18,
    "col": 71,
    "hex": 4619,
    "display": "E4619",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1865,
    "row": 19,
    "col": 71,
    "hex": 4620,
    "display": "E4620",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1866,
    "row": 20,
    "col": 71,
    "hex": 4621,
    "display": "E4621",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1867,
    "row": 21,
    "col": 71,
    "hex": 4622,
    "display": "E4622",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1868,
    "row": 22,
    "col": 71,
    "hex": 4623,
    "display": "E4623",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1869,
    "row": 23,
    "col": 71,
    "hex": 4624,
    "display": "E4624",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1870,
    "row": 24,
    "col": 71,
    "hex": 4625,
    "display": "E4625",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1871,
    "row": 25,
    "col": 71,
    "hex": 4626,
    "display": "E4626",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1872,
    "row": 0,
    "col": 72,
    "hex": 4701,
    "display": "E4701",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1873,
    "row": 1,
    "col": 72,
    "hex": 4702,
    "display": "E4702",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1874,
    "row": 2,
    "col": 72,
    "hex": 4703,
    "display": "E4703",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1875,
    "row": 3,
    "col": 72,
    "hex": 4704,
    "display": "E4704",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1876,
    "row": 4,
    "col": 72,
    "hex": 4705,
    "display": "E4705",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1877,
    "row": 5,
    "col": 72,
    "hex": 4706,
    "display": "E4706",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1878,
    "row": 6,
    "col": 72,
    "hex": 4707,
    "display": "E4707",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1879,
    "row": 7,
    "col": 72,
    "hex": 4708,
    "display": "E4708",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1880,
    "row": 8,
    "col": 72,
    "hex": 4709,
    "display": "E4709",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1881,
    "row": 9,
    "col": 72,
    "hex": 4710,
    "display": "E4710",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1882,
    "row": 10,
    "col": 72,
    "hex": 4711,
    "display": "E4711",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1883,
    "row": 11,
    "col": 72,
    "hex": 4712,
    "display": "E4712",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1884,
    "row": 12,
    "col": 72,
    "hex": 4713,
    "display": "E4713",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1885,
    "row": 13,
    "col": 72,
    "hex": 4714,
    "display": "E4714",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1886,
    "row": 14,
    "col": 72,
    "hex": 4715,
    "display": "E4715",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1887,
    "row": 15,
    "col": 72,
    "hex": 4716,
    "display": "E4716",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1888,
    "row": 16,
    "col": 72,
    "hex": 4717,
    "display": "E4717",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1889,
    "row": 17,
    "col": 72,
    "hex": 4718,
    "display": "E4718",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1890,
    "row": 18,
    "col": 72,
    "hex": 4719,
    "display": "E4719",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1891,
    "row": 19,
    "col": 72,
    "hex": 4720,
    "display": "E4720",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1892,
    "row": 20,
    "col": 72,
    "hex": 4721,
    "display": "E4721",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1893,
    "row": 21,
    "col": 72,
    "hex": 4722,
    "display": "E4722",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1894,
    "row": 22,
    "col": 72,
    "hex": 4723,
    "display": "E4723",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1895,
    "row": 23,
    "col": 72,
    "hex": 4724,
    "display": "E4724",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1896,
    "row": 24,
    "col": 72,
    "hex": 4725,
    "display": "E4725",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1897,
    "row": 25,
    "col": 72,
    "hex": 4726,
    "display": "E4726",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1898,
    "row": 0,
    "col": 73,
    "hex": 4801,
    "display": "E4801",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1899,
    "row": 1,
    "col": 73,
    "hex": 4802,
    "display": "E4802",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1900,
    "row": 2,
    "col": 73,
    "hex": 4803,
    "display": "E4803",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1901,
    "row": 3,
    "col": 73,
    "hex": 4804,
    "display": "E4804",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1902,
    "row": 4,
    "col": 73,
    "hex": 4805,
    "display": "E4805",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1903,
    "row": 5,
    "col": 73,
    "hex": 4806,
    "display": "E4806",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1904,
    "row": 6,
    "col": 73,
    "hex": 4807,
    "display": "E4807",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1905,
    "row": 7,
    "col": 73,
    "hex": 4808,
    "display": "E4808",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1906,
    "row": 8,
    "col": 73,
    "hex": 4809,
    "display": "E4809",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1907,
    "row": 9,
    "col": 73,
    "hex": 4810,
    "display": "E4810",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1908,
    "row": 10,
    "col": 73,
    "hex": 4811,
    "display": "E4811",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1909,
    "row": 11,
    "col": 73,
    "hex": 4812,
    "display": "E4812",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1910,
    "row": 12,
    "col": 73,
    "hex": 4813,
    "display": "E4813",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1911,
    "row": 13,
    "col": 73,
    "hex": 4814,
    "display": "E4814",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1912,
    "row": 14,
    "col": 73,
    "hex": 4815,
    "display": "E4815",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1913,
    "row": 15,
    "col": 73,
    "hex": 4816,
    "display": "E4816",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1914,
    "row": 16,
    "col": 73,
    "hex": 4817,
    "display": "E4817",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1915,
    "row": 17,
    "col": 73,
    "hex": 4818,
    "display": "E4818",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1916,
    "row": 18,
    "col": 73,
    "hex": 4819,
    "display": "E4819",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1917,
    "row": 19,
    "col": 73,
    "hex": 4820,
    "display": "E4820",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1918,
    "row": 20,
    "col": 73,
    "hex": 4821,
    "display": "E4821",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1919,
    "row": 21,
    "col": 73,
    "hex": 4822,
    "display": "E4822",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1920,
    "row": 22,
    "col": 73,
    "hex": 4823,
    "display": "E4823",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1921,
    "row": 23,
    "col": 73,
    "hex": 4824,
    "display": "E4824",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1922,
    "row": 24,
    "col": 73,
    "hex": 4825,
    "display": "E4825",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1923,
    "row": 25,
    "col": 73,
    "hex": 4826,
    "display": "E4826",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1924,
    "row": 0,
    "col": 74,
    "hex": 4901,
    "display": "E4901",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1925,
    "row": 1,
    "col": 74,
    "hex": 4902,
    "display": "E4902",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1926,
    "row": 2,
    "col": 74,
    "hex": 4903,
    "display": "E4903",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1927,
    "row": 3,
    "col": 74,
    "hex": 4904,
    "display": "E4904",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1928,
    "row": 4,
    "col": 74,
    "hex": 4905,
    "display": "E4905",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1929,
    "row": 5,
    "col": 74,
    "hex": 4906,
    "display": "E4906",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1930,
    "row": 6,
    "col": 74,
    "hex": 4907,
    "display": "E4907",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1931,
    "row": 7,
    "col": 74,
    "hex": 4908,
    "display": "E4908",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1932,
    "row": 8,
    "col": 74,
    "hex": 4909,
    "display": "E4909",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1933,
    "row": 9,
    "col": 74,
    "hex": 4910,
    "display": "E4910",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1934,
    "row": 10,
    "col": 74,
    "hex": 4911,
    "display": "E4911",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1935,
    "row": 11,
    "col": 74,
    "hex": 4912,
    "display": "E4912",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1936,
    "row": 12,
    "col": 74,
    "hex": 4913,
    "display": "E4913",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1937,
    "row": 13,
    "col": 74,
    "hex": 4914,
    "display": "E4914",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1938,
    "row": 14,
    "col": 74,
    "hex": 4915,
    "display": "E4915",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1939,
    "row": 15,
    "col": 74,
    "hex": 4916,
    "display": "E4916",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1940,
    "row": 16,
    "col": 74,
    "hex": 4917,
    "display": "E4917",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1941,
    "row": 17,
    "col": 74,
    "hex": 4918,
    "display": "E4918",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1942,
    "row": 18,
    "col": 74,
    "hex": 4919,
    "display": "E4919",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1943,
    "row": 19,
    "col": 74,
    "hex": 4920,
    "display": "E4920",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1944,
    "row": 20,
    "col": 74,
    "hex": 4921,
    "display": "E4921",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1945,
    "row": 21,
    "col": 74,
    "hex": 4922,
    "display": "E4922",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1946,
    "row": 22,
    "col": 74,
    "hex": 4923,
    "display": "E4923",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1947,
    "row": 23,
    "col": 74,
    "hex": 4924,
    "display": "E4924",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1948,
    "row": 24,
    "col": 74,
    "hex": 4925,
    "display": "E4925",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1949,
    "row": 25,
    "col": 74,
    "hex": 4926,
    "display": "E4926",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1950,
    "row": 0,
    "col": 75,
    "hex": 5001,
    "display": "E5001",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1951,
    "row": 1,
    "col": 75,
    "hex": 5002,
    "display": "E5002",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1952,
    "row": 2,
    "col": 75,
    "hex": 5003,
    "display": "E5003",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1953,
    "row": 3,
    "col": 75,
    "hex": 5004,
    "display": "E5004",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1954,
    "row": 4,
    "col": 75,
    "hex": 5005,
    "display": "E5005",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1955,
    "row": 5,
    "col": 75,
    "hex": 5006,
    "display": "E5006",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1956,
    "row": 6,
    "col": 75,
    "hex": 5007,
    "display": "E5007",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1957,
    "row": 7,
    "col": 75,
    "hex": 5008,
    "display": "E5008",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1958,
    "row": 8,
    "col": 75,
    "hex": 5009,
    "display": "E5009",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1959,
    "row": 9,
    "col": 75,
    "hex": 5010,
    "display": "E5010",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1960,
    "row": 10,
    "col": 75,
    "hex": 5011,
    "display": "E5011",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1961,
    "row": 11,
    "col": 75,
    "hex": 5012,
    "display": "E5012",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1962,
    "row": 12,
    "col": 75,
    "hex": 5013,
    "display": "E5013",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1963,
    "row": 13,
    "col": 75,
    "hex": 5014,
    "display": "E5014",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1964,
    "row": 14,
    "col": 75,
    "hex": 5015,
    "display": "E5015",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1965,
    "row": 15,
    "col": 75,
    "hex": 5016,
    "display": "E5016",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1966,
    "row": 16,
    "col": 75,
    "hex": 5017,
    "display": "E5017",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1967,
    "row": 17,
    "col": 75,
    "hex": 5018,
    "display": "E5018",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1968,
    "row": 18,
    "col": 75,
    "hex": 5019,
    "display": "E5019",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1969,
    "row": 19,
    "col": 75,
    "hex": 5020,
    "display": "E5020",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1970,
    "row": 20,
    "col": 75,
    "hex": 5021,
    "display": "E5021",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1971,
    "row": 21,
    "col": 75,
    "hex": 5022,
    "display": "E5022",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1972,
    "row": 22,
    "col": 75,
    "hex": 5023,
    "display": "E5023",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1973,
    "row": 23,
    "col": 75,
    "hex": 5024,
    "display": "E5024",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1974,
    "row": 24,
    "col": 75,
    "hex": 5025,
    "display": "E5025",
    "location": "East",
    "faction": "",
    "name": ""
  },
  {
    "index": 1975,
    "row": 25,
    "col": 75,
    "hex": 5026,
    "display": "E5026",
    "location": "East",
    "faction": "",
    "name": ""
  }
];
