const flags = [
  {
    name: "Arabic dirham",
    symbol: "د.إ",
    code: "AED",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/aed.svg",
    emoji: "🇦🇪",
  },
  {
    name: "Afghan afghani",
    symbol: "؋",
    code: "AFN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/afn.svg",
    emoji: "🇦🇫",
  },
  {
    name: "Albanian lek",
    symbol: "Lek",
    code: "ALL",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/all.svg",
    emoji: "🇦🇱",
  },
  {
    name: "Armenian dram",
    symbol: "֏",
    code: "AMD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/amd.svg",
    emoji: "🇦🇲",
  },
  {
    name: "Netherlands Antillean guilder",
    symbol: "NAƒ",
    code: "ANG",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ang.svg",
    emoji: "🇨🇼",
  },
  {
    name: "Angolan kwanza",
    symbol: "Kz",
    code: "AOA",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/aoa.svg",
    emoji: "🇦🇴",
  },
  {
    name: "Argentine peso",
    symbol: "$",
    code: "ARS",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ars.svg",
    emoji: "🇦🇷",
  },
  {
    name: "Australian dollar",
    symbol: "$",
    code: "AUD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/aud.svg",
    emoji: "🇦🇺",
  },
  {
    name: "Aruban florin",
    symbol: "ƒ",
    code: "AWG",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/awg.svg",
    emoji: "🇦🇼",
  },
  {
    name: "Azerbaijani manat",
    symbol: "Əm",
    code: "AZN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/azn.svg",
    emoji: "🇦🇿",
  },
  {
    name: "Barbadian dollar",
    symbol: "$",
    code: "BBD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bbd.svg",
    emoji: "🇧🇧",
  },
  {
    name: "Bangladeshi taka",
    symbol: "৳",
    code: "BDT",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bdt.svg",
    emoji: "🇧🇩",
  },
  {
    name: "Bulgarian lev",
    symbol: "лв",
    code: "BGN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bgn.svg",
    emoji: "🇧🇬",
  },
  {
    name: "Bahraini dinar",
    symbol: ".د.ب",
    code: "BHD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bhd.svg",
    emoji: "🇧🇭",
  },
  {
    name: "Burundian franc",
    symbol: "Fr",
    code: "BIF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bif.svg",
    emoji: "🇧🇮",
  },
  {
    name: "Bermudian dollar",
    symbol: "$",
    code: "BMD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bmd.svg",
    emoji: "🇧🇲",
  },
  {
    name: "Brunei dollar",
    symbol: "$",
    code: "BND",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bnd.svg",
    emoji: "🇧🇳",
  },
  {
    name: "Bolivian boliviano",
    symbol: "Bs.",
    code: "BOB",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bob.svg",
    emoji: "🇧🇴",
  },
  {
    name: "Brazilian real",
    symbol: "R$",
    code: "BRL",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/brl.svg",
    emoji: "🇧🇷",
  },
  {
    name: "Bahamian dollar",
    symbol: "$",
    code: "BSD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bsd.svg",
    emoji: "🇧🇸",
  },
  {
    name: "Bhutanese ngultrum",
    symbol: "Nu.",
    code: "BTN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/btn.svg",
    emoji: "🇧🇹",
  },
  {
    name: "Botswana pula",
    symbol: "P",
    code: "BWP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bwp.svg",
    emoji: "🇧🇼",
  },
  {
    name: "Belarusian ruble",
    symbol: "p.",
    code: "BYN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/byn.svg",
    emoji: "🇧🇾",
  },
  {
    name: "Belize dollar",
    symbol: "$",
    code: "BZD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/bzd.svg",
    emoji: "🇧🇿",
  },
  {
    name: "Canadian dollar",
    symbol: "$",
    code: "CAD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/cad.svg",
    emoji: "🇨🇦",
  },
  {
    name: "Congolese franc",
    symbol: "Fr",
    code: "CDF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/cdf.svg",
    emoji: "🇨🇩",
  },
  {
    name: "Swiss franc",
    symbol: "Fr",
    code: "CHF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/chf.svg",
    emoji: "🇨🇭",
  },
  {
    name: "Chilean peso",
    symbol: "$",
    code: "CLP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/clp.svg",
    emoji: "🇨🇱",
  },
  {
    name: "Chinese yuan",
    symbol: "¥",
    code: "CNY",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/cny.svg",
    emoji: "🇨🇳",
  },
  {
    name: "Colombian peso",
    symbol: "$",
    code: "COP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/cop.svg",
    emoji: "🇨🇴",
  },
  {
    name: "Costa Rican colón",
    symbol: "₡",
    code: "CRC",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/crc.svg",
    emoji: "🇨🇷",
  },
  {
    name: "Cuban peso",
    symbol: "$",
    code: "CUP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/cup.svg",
    emoji: "🇨🇺",
  },
  {
    name: "Cape Verdean escudo",
    symbol: "$",
    code: "CVE",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/cve.svg",
    emoji: "🇨🇻",
  },
  {
    name: "Czech koruna",
    symbol: "Kč",
    code: "CZK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/czk.svg",
    emoji: "🇨🇿",
  },
  {
    name: "Djiboutian franc",
    symbol: "Fr",
    code: "DJF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/djf.svg",
    emoji: "🇩🇯",
  },
  {
    name: "Danish krone",
    symbol: "kr",
    code: "DKK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/dkk.svg",
    emoji: "🇩🇰",
  },
  {
    name: "Dominican peso",
    symbol: "$",
    code: "DOP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/dop.svg",
    emoji: "🇩🇴",
  },
  {
    name: "Algerian dinar",
    symbol: "د.ج",
    code: "DZD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/dzd.svg",
    emoji: "🇩🇿",
  },
  {
    name: "Egyptian pound",
    symbol: "£",
    code: "EGP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/egp.svg",
    emoji: "🇪🇬",
  },
  {
    name: "Eritrean nakfa",
    symbol: "Nfk",
    code: "ERN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ern.svg",
    emoji: "🇪🇷",
  },
  {
    name: "Ethiopian birr",
    symbol: "Br",
    code: "ETB",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/etb.svg",
    emoji: "🇪🇹",
  },
  {
    name: "Euro",
    symbol: "€",
    code: "EUR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/eur.svg",
    emoji: "🇪🇺",
  },
  {
    name: "Fijian dollar",
    symbol: "$",
    code: "FJD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/fjd.svg",
    emoji: "🇫🇯",
  },
  {
    name: "Falkland Islands pound",
    symbol: "£",
    code: "FKP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/fkp.svg",
    emoji: "🇫🇰",
  },
  {
    name: "Pound sterling",
    symbol: "£",
    code: "GBP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/gbp.svg",
    emoji: "🇬🇧",
  },
  {
    name: "Georgian lari",
    symbol: "₾",
    code: "GEL",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/gel.svg",
    emoji: "🇬🇪",
  },
  {
    name: "Guernsey pound",
    symbol: "£",
    code: "GGP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ggp.svg",
    emoji: "🇬🇬",
  },
  {
    name: "Ghanaian cedi",
    symbol: "₵",
    code: "GHS",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ghs.svg",
    emoji: "🇬🇭",
  },
  {
    name: "Gibraltar pound",
    symbol: "£",
    code: "GIP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/gip.svg",
    emoji: "🇬🇮",
  },
  {
    name: "Gambian dalasi",
    symbol: "D",
    code: "GMD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/gmd.svg",
    emoji: "🇬🇲",
  },
  {
    name: "Guinean franc",
    symbol: "Fr",
    code: "GNF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/gnf.svg",
    emoji: "🇬🇳",
  },
  {
    name: "Guatemalan quetzal",
    symbol: "Q",
    code: "GTQ",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/gtq.svg",
    emoji: "🇬🇹",
  },
  {
    name: "Guyanese dollar",
    symbol: "$",
    code: "GYD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/gyd.svg",
    emoji: "🇬🇾",
  },
  {
    name: "Hong Kong dollar",
    symbol: "$",
    code: "HKD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/hkd.svg",
    emoji: "🇭🇰",
  },
  {
    name: "Honduran lempira",
    symbol: "L",
    code: "HNL",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/hnl.svg",
    emoji: "🇭🇳",
  },
  {
    name: "Croatian kuna",
    symbol: "kn",
    code: "HRK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/hrk.svg",
    emoji: "🇭🇷",
  },
  {
    name: "Haitian gourde",
    symbol: "G",
    code: "HTG",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/htg.svg",
    emoji: "🇭🇹",
  },
  {
    name: "Hungarian forint",
    symbol: "Ft",
    code: "HUF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/huf.svg",
    emoji: "🇭🇺",
  },
  {
    name: "Indonesian rupiah",
    symbol: "Rp",
    code: "IDR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/idr.svg",
    emoji: "🇮🇩",
  },
  {
    name: "Israeli new shekel",
    symbol: "₪",
    code: "ILS",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ils.svg",
    emoji: "🇮🇱",
  },
  {
    name: "Manx pound",
    symbol: "£",
    code: "IMP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/imp.svg",
    emoji: "🇮🇲",
  },
  {
    name: "Indian rupee",
    symbol: "₹",
    code: "INR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/inr.svg",
    emoji: "🇮🇳",
  },
  {
    name: "Iraqi dinar",
    symbol: "د.ع",
    code: "IQD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/iqd.svg",
    emoji: "🇮🇶",
  },
  {
    name: "Iranian rial",
    symbol: "﷼",
    code: "IRR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/irr.svg",
    emoji: "🇮🇷",
  },
  {
    name: "Icelandic króna",
    symbol: "kr",
    code: "ISK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/isk.svg",
    emoji: "🇮🇸",
  },
  {
    name: "Jersey pound",
    symbol: "£",
    code: "JEP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/jep.svg",
    emoji: "🇯🇪",
  },
  {
    name: "Jamaican dollar",
    symbol: "$",
    code: "JMD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/jmd.svg",
    emoji: "🇯🇲",
  },
  {
    name: "Jordanian dinar",
    symbol: "د.ا",
    code: "JOD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/jod.svg",
    emoji: "🇯🇴",
  },
  {
    name: "Japanese yen",
    symbol: "¥",
    code: "JPY",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/jpy.svg",
    emoji: "🇯🇵",
  },
  {
    name: "Kenyan shilling",
    symbol: "KSh",
    code: "KES",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/kes.svg",
    emoji: "🇰🇪",
  },
  {
    name: "Kyrgyzstani som",
    symbol: "с",
    code: "KGS",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/kgs.svg",
    emoji: "🇰🇬",
  },
  {
    name: "Cambodian riel",
    symbol: "៛",
    code: "KHR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/khr.svg",
    emoji: "🇰🇭",
  },
  {
    name: "Comorian franc",
    symbol: "Fr",
    code: "KMF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/kmf.svg",
    emoji: "🇰🇲",
  },
  {
    name: "North Korean won",
    symbol: "₩",
    code: "KPW",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/kpw.svg",
    emoji: "🇰🇵",
  },
  {
    name: "South Korean won",
    symbol: "₩",
    code: "KRW",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/krw.svg",
    emoji: "🇰🇷",
  },
  {
    name: "Kuwaiti dinar",
    symbol: "د.ك",
    code: "KWD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/kwd.svg",
    emoji: "🇰🇼",
  },
  {
    name: "Cayman Islands dollar",
    symbol: "$",
    code: "KYD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/kyd.svg",
    emoji: "🇰🇾",
  },
  {
    name: "Kazakhstani tenge",
    symbol: "₸",
    code: "KZT",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/kzt.svg",
    emoji: "🇰🇿",
  },
  {
    name: "Lao kip",
    symbol: "₭",
    code: "LAK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/lak.svg",
    emoji: "🇱🇦",
  },
  {
    name: "Lebanese pound",
    symbol: "ل.ل",
    code: "LBP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/lbp.svg",
    emoji: "🇱🇧",
  },
  {
    name: "Sri Lankan rupee",
    symbol: "රු",
    code: "LKR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/lkr.svg",
    emoji: "🇱🇰",
  },
  {
    name: "Liberian dollar",
    symbol: "$",
    code: "LRD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/lrd.svg",
    emoji: "🇱🇷",
  },
  {
    name: "Lesotho loti",
    symbol: "L",
    code: "LSL",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/lsl.svg",
    emoji: "🇱🇸",
  },
  {
    name: "Libyan dinar",
    symbol: "ل.د",
    code: "LYD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/lyd.svg",
    emoji: "🇱🇾",
  },
  {
    name: "Moroccan dirham",
    symbol: "د.م.",
    code: "MAD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mad.svg",
    emoji: "🇲🇦",
  },
  {
    name: "Moldovan leu",
    symbol: "L",
    code: "MDL",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mdl.svg",
    emoji: "🇲🇩",
  },
  {
    name: "Malagasy ariary",
    symbol: "Ar",
    code: "MGA",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mga.svg",
    emoji: "🇲🇬",
  },
  {
    name: "Macedonian denar",
    symbol: "ден",
    code: "MKD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mkd.svg",
    emoji: "🇲🇰",
  },
  {
    name: "Myanmar kyat",
    symbol: "Ks",
    code: "MMK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mmk.svg",
    emoji: "🇲🇲",
  },
  {
    name: "Mongolian tögrög",
    symbol: "₮",
    code: "MNT",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mnt.svg",
    emoji: "🇲🇳",
  },
  {
    name: "Macanese pataca",
    symbol: "MOP$",
    code: "MOP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mop.svg",
    emoji: "🇲🇴",
  },
  {
    name: "Mauritanian ouguiya",
    symbol: "UM",
    code: "MRO",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mro.svg",
    emoji: "🇲🇷",
  },
  {
    name: "Mauritian rupee",
    symbol: "₨",
    code: "MUR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mur.svg",
    emoji: "🇲🇺",
  },
  {
    name: "Maldivian rufiyaa",
    symbol: ".ރ",
    code: "MVR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mvr.svg",
    emoji: "🇲🇻",
  },
  {
    name: "Malawian kwacha",
    symbol: "MK",
    code: "MWK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mwk.svg",
    emoji: "🇲🇼",
  },
  {
    name: "Mexican peso",
    symbol: "$",
    code: "MXN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mxn.svg",
    emoji: "🇲🇽",
  },
  {
    name: "Malaysian ringgit",
    symbol: "RM",
    code: "MYR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/myr.svg",
    emoji: "🇲🇾",
  },
  {
    name: "Mozambican metical",
    symbol: "MT",
    code: "MZN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/mzn.svg",
    emoji: "🇲🇿",
  },
  {
    name: "Namibian dollar",
    symbol: "$",
    code: "NAD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/nad.svg",
    emoji: "🇳🇦",
  },
  {
    name: "Nigerian naira",
    symbol: "₦",
    code: "NGN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ngn.svg",
    emoji: "🇳🇬",
  },
  {
    name: "Nicaraguan córdoba",
    symbol: "C$",
    code: "NIO",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/nio.svg",
    emoji: "🇳🇮",
  },
  {
    name: "Norwegian krone",
    symbol: "kr",
    code: "NOK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/nok.svg",
    emoji: "🇳🇴",
  },
  {
    name: "Nepalese rupee",
    symbol: "रू",
    code: "NPR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/npr.svg",
    emoji: "🇳🇵",
  },
  {
    name: "New Zealand dollar",
    symbol: "$",
    code: "NZD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/nzd.svg",
    emoji: "🇳🇿",
  },
  {
    name: "Omani rial",
    symbol: "ر.ع.",
    code: "OMR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/omr.svg",
    emoji: "🇴🇲",
  },
  {
    name: "Panamanian balboa",
    symbol: "B/.",
    code: "PAB",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/pab.svg",
    emoji: "🇵🇦",
  },
  {
    name: "Peruvian nuevo sol",
    symbol: "S/.",
    code: "PEN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/pen.svg",
    emoji: "🇵🇪",
  },
  {
    name: "Papua New Guinean kina",
    symbol: "K",
    code: "PGK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/pgk.svg",
    emoji: "🇵🇬",
  },
  {
    name: "Philippine peso",
    symbol: "₱",
    code: "PHP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/php.svg",
    emoji: "🇵🇭",
  },
  {
    name: "Pakistani rupee",
    symbol: "₨",
    code: "PKR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/pkr.svg",
    emoji: "🇵🇰",
  },
  {
    name: "Polish złoty",
    symbol: "zł",
    code: "PLN",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/pln.svg",
    emoji: "🇵🇱",
  },
  {
    name: "Paraguayan guaraní",
    symbol: "₲",
    code: "PYG",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/pyg.svg",
    emoji: "🇵🇾",
  },
  {
    name: "Qatari riyal",
    symbol: "ر.ق",
    code: "QAR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/qar.svg",
    emoji: "🇶🇦",
  },
  {
    name: "Romanian leu",
    symbol: "lei",
    code: "RON",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ron.svg",
    emoji: "🇷🇴",
  },
  {
    name: "Serbian dinar",
    symbol: "din.",
    code: "RSD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/rsd.svg",
    emoji: "🇷🇸",
  },
  {
    name: "Russian ruble",
    symbol: "₽",
    code: "RUB",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/rub.svg",
    emoji: "🇷🇺",
  },
  {
    name: "Rwandan franc",
    symbol: "Fr",
    code: "RWF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/rwf.svg",
    emoji: "🇷🇼",
  },
  {
    name: "Saudi riyal",
    symbol: "ر.س",
    code: "SAR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/sar.svg",
    emoji: "🇸🇦",
  },
  {
    name: "Solomon Islands dollar",
    symbol: "$",
    code: "SBD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/sbd.svg",
    emoji: "",
  },
  {
    name: "Seychellois rupee",
    symbol: "₨",
    code: "SCR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/scr.svg",
    emoji: "🇸🇨",
  },
  {
    name: "Swedish krona",
    symbol: "kr",
    code: "SEK",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/sek.svg",
    emoji: "🇸🇪",
  },
  {
    name: "Singapore dollar",
    symbol: "$",
    code: "SGD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/sgd.svg",
    emoji: "🇸🇬",
  },
  {
    name: "Saint Helena pound",
    symbol: "£",
    code: "SHP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/shp.svg",
    emoji: "🇸🇭",
  },
  {
    name: "Sierra Leonean leone",
    symbol: "Le",
    code: "SLL",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/sll.svg",
    emoji: "🇸🇱",
  },
  {
    name: "Somali shilling",
    symbol: "Sh",
    code: "SOS",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/sos.svg",
    emoji: "🇸🇴",
  },
  {
    name: "Surinamese dollar",
    symbol: "$",
    code: "SRD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/srd.svg",
    emoji: "🇸🇷",
  },
  {
    name: "Syrian pound",
    symbol: "£",
    code: "SYP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/syp.svg",
    emoji: "🇸🇾",
  },
  {
    name: "Thai baht",
    symbol: "฿",
    code: "THB",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/thb.svg",
    emoji: "🇹🇭",
  },
  {
    name: "Tajikistani somoni",
    symbol: "ЅМ",
    code: "TJS",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/tjs.svg",
    emoji: "🇹🇯",
  },
  {
    name: "Turkmenistani manat",
    symbol: "m",
    code: "TMT",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/tmt.svg",
    emoji: "🇹🇲",
  },
  {
    name: "Tunisian dinar",
    symbol: "د.ت",
    code: "TND",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/tnd.svg",
    emoji: "🇹🇳",
  },
  {
    name: "Tongan paʻanga",
    symbol: "T$",
    code: "TOP",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/top.svg",
    emoji: "🇹🇴",
  },
  {
    name: "Turkish lira",
    symbol: "₺",
    code: "TRY",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/try.svg",
    emoji: "🇹🇷",
  },
  {
    name: "Trinidad and Tobago dollar",
    symbol: "$",
    code: "TTD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ttd.svg",
    emoji: "🇹🇹",
  },
  {
    name: "New Taiwan dollar",
    symbol: "$",
    code: "TWD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/twd.svg",
    emoji: "🇹🇼",
  },
  {
    name: "Tanzanian shilling",
    symbol: "Sh",
    code: "TZS",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/tzs.svg",
    emoji: "🇹🇿",
  },
  {
    name: "Ukrainian hryvnia",
    symbol: "₴",
    code: "UAH",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/uah.svg",
    emoji: "🇺🇦",
  },
  {
    name: "Ugandan shilling",
    symbol: "Sh",
    code: "UGX",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/ugx.svg",
    emoji: "🇺🇬",
  },
  {
    name: "United States dollar",
    symbol: "$",
    code: "USD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/usd.svg",
    emoji: "🇺🇸",
  },
  {
    name: "Uruguayan peso",
    symbol: "$",
    code: "UYU",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/uyu.svg",
    emoji: "🇺🇾",
  },
  {
    name: "Uzbekistani som",
    symbol: "Ўзб",
    code: "UZS",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/uzs.svg",
    emoji: "🇺🇿",
  },
  {
    name: "Venezuelan bolívar",
    symbol: "Bs",
    code: "VEF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/vef.svg",
    emoji: "🇻🇪",
  },
  {
    name: "Vietnamese đồng",
    symbol: "₫",
    code: "VND",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/vnd.svg",
    emoji: "🇻🇳",
  },
  {
    name: "Vanuatu vatu",
    symbol: "Vt",
    code: "VUV",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/vuv.svg",
    emoji: "🇻🇺",
  },
  {
    name: "Samoan tālā",
    symbol: "T",
    code: "WST",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/wst.svg",
    emoji: "🇼🇸",
  },
  {
    name: "Central African CFA franc",
    symbol: "Fr",
    code: "XAF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/xaf.svg",
    emoji: "🇨🇫",
  },
  {
    name: "East Caribbean dollar",
    symbol: "$",
    code: "XCD",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/xcd.svg",
    emoji: "🇦🇬",
  },
  {
    name: "West African CFA franc",
    symbol: "Fr",
    code: "XOF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/xof.svg",
    emoji: "🇧🇯",
  },
  {
    name: "CFP franc",
    symbol: "Fr",
    code: "XPF",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/xpf.svg",
    emoji: "🇵🇫",
  },
  {
    name: "Yemeni rial",
    symbol: "﷼",
    code: "YER",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/yer.svg",
    emoji: "🇾🇪",
  },
  {
    name: "South African rand",
    symbol: "R",
    code: "ZAR",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/zar.svg",
    emoji: "🇿🇦",
  },
  {
    name: "Zambian kwacha",
    symbol: "ZK",
    code: "ZMW",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/zmw.svg",
    emoji: "🇿🇲",
  },
];

export default flags;
