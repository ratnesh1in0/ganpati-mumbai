export interface RouteStop {
  mandalId: string;
  order: number;
  walkingTimeFromPrev?: string;
  walkingTimeFromPrevMr?: string;
  distanceFromPrev?: string;
  walkingTip?: string;
  walkingTipMr?: string;
}

export interface CuratedRoute {
  id: string;
  title: string;
  titleMr: string;
  tagline: string;
  taglineMr: string;
  badge: string;
  badgeMr: string;
  description: string;
  descriptionMr: string;
  stopsCount: number;
  totalDistance: string;
  estimatedTime: string;
  estimatedTimeMr: string;
  bestTiming: string;
  bestTimingMr: string;
  startStation: string;
  startStationMr: string;
  endStation: string;
  endStationMr: string;
  suitability: string;
  suitabilityMr: string;
  stops: RouteStop[];
  highlights: string[];
  highlightsMr: string[];
  tips: string[];
  tipsMr: string[];
}

export const CURATED_ROUTES: CuratedRoute[] = [
  {
    id: "lalbaug-parel-trinity",
    title: "The Lalbaug-Parel Trinity",
    titleMr: "लालबाग-परळ त्रिमूर्ती दर्शन मार्ग",
    tagline: "The beating heart of Mumbai's Ganeshotsav in one walkable loop.",
    taglineMr: "मुंबई गणेशोत्सवाचे हृदय — एकाच पदभ्रमण फेरीत.",
    badge: "Most Iconic Trail",
    badgeMr: "सर्वात लोकप्रिय मार्ग",
    description: "Connects Mumbai's four most legendary mandals in Lalbaug and Parel. Starting from Currey Road station, weave through the bustling lanes of Ganesh Galli, pay homage to Lalbaugcha Raja, witness Tejukaya's dynamic art, and conclude at Chinchpokli Cha Chintamani.",
    descriptionMr: "लालबाग-परळमधील चार महाकाय मंडळे एकाच फेरीत. करी रोड स्थानकावरून सुरू होऊन गणेश गल्ली, लालबागचा राजा, तेजुकुकाया आणि चिंचपोकळीचा चिंतामणी असा हा मार्ग आहे.",
    stopsCount: 4,
    totalDistance: "2.4 km",
    estimatedTime: "about 3 hr 30 min",
    estimatedTimeMr: "सुमारे ३ तास ३० मिनिटे",
    bestTiming: "Early Morning (4:00 AM – 7:30 AM) or Midnight (1:00 AM – 4:00 AM)",
    bestTimingMr: "पहाटे ४:०० ते ७:३० किंवा मध्यरात्री १:०० ते ४:००",
    startStation: "Currey Road (Central Line)",
    startStationMr: "करी रोड (मध्य रेल्वे)",
    endStation: "Chinchpokli (Central Line)",
    endStationMr: "चिंचपोकळी (मध्य रेल्वे)",
    suitability: "Energetic devotees, pandal hoppers, night walkers",
    suitabilityMr: "उत्साही भाविक, रात्री पायी फिरणारे",
    stops: [
      {
        mandalId: "mumbaicha-raja-ganesh-galli",
        order: 1,
        walkingTimeFromPrev: "Start at Currey Road",
        walkingTimeFromPrevMr: "करी रोडपासून सुरुवात",
        distanceFromPrev: "450 m",
        walkingTip: "Take Currey Road East exit and walk down toward 1st Ganesh Galli arch.",
        walkingTipMr: "करी रोड पूर्व गेटवरून पहिल्या गणेश गल्लीच्या कमानीकडे या."
      },
      {
        mandalId: "lalbaugcha-raja",
        order: 2,
        walkingTimeFromPrev: "5 min walk",
        walkingTimeFromPrevMr: "५ मिनिटे चालत",
        distanceFromPrev: "350 m",
        walkingTip: "Exit Ganesh Galli onto GD Ambekar Marg directly into Lalbaug Market entrance.",
        walkingTipMr: "गणेश गल्लीतून बाहेर पडून थेट लालबाग मार्केटच्या प्रवेशद्वाराकडे या."
      },
      {
        mandalId: "tejukaya-mandal-lalbaug",
        order: 3,
        walkingTimeFromPrev: "6 min walk",
        walkingTimeFromPrevMr: "६ मिनिटे चालत",
        distanceFromPrev: "450 m",
        walkingTip: "Head north past Bharatmata junction into Tejukaya Compound.",
        walkingTipMr: "भारतमाता जंक्शनकडून उत्तरेकडे तेजुकुकाया कंपाउंडमध्ये जा."
      },
      {
        mandalId: "chinchpokli-cha-chintamani",
        order: 4,
        walkingTimeFromPrev: "12 min walk",
        walkingTimeFromPrevMr: "१२ मिनिटे चालत",
        distanceFromPrev: "900 m",
        walkingTip: "Walk south down Dr. Ambedkar Road, turning right onto Dattaram Lad Marg toward Chinchpokli station.",
        walkingTipMr: "डॉ. आंबेडकर रोडवरून दक्षिणेकडे जाऊन दत्ताराम लाड मार्गावर वळा."
      }
    ],
    highlights: [
      "Covers Mumbai's most prestigious mandals within 2.5km",
      "Both start and finish at direct Central Line stations",
      "Street food stalls along Lalbaug market for hot chai & vada pav",
      "Spectacular illuminated arches and vibrant atmosphere"
    ],
    highlightsMr: [
      "२.५ किमी अंतरात मुंबईतील अग्रगण्य मंडळांचे दर्शन",
      "सुरुवात व शेवट दोन्ही मध्य रेल्वे स्थानकांवर",
      "लालबाग मार्केटमध्ये गरमागरम चहा व वडापाव",
      "भव्य विद्युत रोषणाई व उत्सवी जल्लोष"
    ],
    tips: [
      "Wear comfortable slip-on footwear as you will take them off at each pandal.",
      "If taking Lalbaugcha Raja Charan Sparsh, do this route in reverse, visiting Chintamani & Ganesh Galli first.",
      "Keep loose change and small bags — large backpacks face police scanning delays."
    ],
    tipsMr: [
      "सहज काढता येतील असे स्लीपर किंवा सँडल वापरा.",
      "लालबागच्या राजाचा चरणस्पर्श करायचा असल्यास चिंतामणी व गणेश गल्ली आधी घ्या.",
      "मोठ्या बॅगा टाळा, छोट्या पिशव्या ठेवा."
    ]
  },
  {
    id: "south-mumbai-heritage-walk",
    title: "South Mumbai Heritage & Clay Trail",
    titleMr: "दक्षिण मुंबई वारसा व शाडू माती दर्शन मार्ग",
    tagline: "Historic 1893 pandals, pure Shadu clay idols, and chawl traditions.",
    taglineMr: "१८९३ चा पहिला गणपती, शुद्ध शाडू माती व ऐतिहासिक चाळी.",
    badge: "Heritage & Soulful",
    badgeMr: "ऐतिहासिक वारसा",
    description: "Step away from loud commercialism into the historic cradle of Mumbai's Sarvajanik Ganeshotsav. Visit Mumbai's very first mandal from 1893 at Keshavji Naik Chawl, the mammoth 25-foot pure clay Girgaon Cha Raja, Khetwadi's famous 12th lane, and Chandanwadi Cha Raja.",
    descriptionMr: "व्यावसायिकतेपासून दूर गिरगावच्या पारंपरिक संस्कृतीचा अनुभव घ्या. १८९३ चा मुंबईतील पहिला गणपती (केशवजी नाईक चाळ), २५ फुटी शाडू मातीचा गिरगावचा राजा आणि खेतवाडीच्या गल्ल्यांचा अनुभव.",
    stopsCount: 4,
    totalDistance: "2.8 km",
    estimatedTime: "about 2 hr 15 min",
    estimatedTimeMr: "सुमारे २ तास १५ मिनिटे",
    bestTiming: "Evening (5:00 PM – 9:00 PM) for vibrant aartis & traditional snacks",
    bestTimingMr: "संध्याकाळी ५:०० ते ९:००, आरत्या व खाऊगल्लीसाठी उत्तम",
    startStation: "Charni Road (Western Line)",
    startStationMr: "चर्नी रोड (पश्चिम रेल्वे)",
    endStation: "Grant Road / Marine Lines (Western Line)",
    endStationMr: "ग्रँट रोड / मरीन लाईन्स (पश्चिम रेल्वे)",
    suitability: "Families, history enthusiasts, culture lovers, photographers",
    suitabilityMr: "कुटुंब, इतिहासप्रेमी, छायाचित्रकार",
    stops: [
      {
        mandalId: "keshavji-naik-chawl-girgaon",
        order: 1,
        walkingTimeFromPrev: "Start at Charni Road Station",
        walkingTimeFromPrevMr: "चर्नी रोडवरून सुरुवात",
        distanceFromPrev: "650 m",
        walkingTip: "Walk east through Gaiwadi into Khadilkar Road courtyard.",
        walkingTipMr: "गायवाडीतून खाडिलकर रोडच्या अंगणात या."
      },
      {
        mandalId: "girgaon-cha-raja-nikadwari-lane",
        order: 2,
        walkingTimeFromPrev: "6 min walk",
        walkingTimeFromPrevMr: "६ मिनिटे चालत",
        distanceFromPrev: "450 m",
        walkingTip: "Cross over to JSS Road toward Nikadwari Lane.",
        walkingTipMr: "जेएसएस रोड ओलांडून निकदवारी लेनकडे या."
      },
      {
        mandalId: "khetwadi-12th-lane-ganraj",
        order: 3,
        walkingTimeFromPrev: "9 min walk",
        walkingTimeFromPrevMr: "९ मिनिटे चालत",
        distanceFromPrev: "650 m",
        walkingTip: "Walk north up to 12th Khetwadi Lane.",
        walkingTipMr: "उत्तरेकडे १२ व्या खेतवाडी लेनकडे चालत या."
      },
      {
        mandalId: "chandanwadi-cha-raja-marine-lines",
        order: 4,
        walkingTimeFromPrev: "12 min walk",
        walkingTimeFromPrevMr: "१२ मिनिटे चालत",
        distanceFromPrev: "850 m",
        walkingTip: "Walk down toward Princess Street & Chandanwadi.",
        walkingTipMr: "प्रिन्सेस स्ट्रीट व चंदनवाडीकडे दक्षिणेस या."
      }
    ],
    highlights: [
      "Visit Mumbai's 1st ever Sarvajanik Ganpati founded under Lokmanya Tilak in 1893",
      "Maharashtra's tallest 25ft eco-friendly Shadu clay idol",
      "Famous Girgaon snack stops: Kande Pohe, Ukadiche Modak, Piyush",
      "Calm, deeply spiritual atmosphere suitable for senior citizens"
    ],
    highlightsMr: [
      "लोकमान्य टिळकांच्या प्रेरणेने १८९३ मध्ये स्थापन झालेला पहिला गणपती",
      "महाराष्ट्रातील सर्वात उंच २५ फुटी पर्यावरणपूरक शाडूची मूर्ती",
      "गिरगावची प्रसिद्ध खाऊगल्ली: उकडीचे मोदक, कांदे पोहे, पियूष",
      "ज्येष्ठ नागरिकांसाठी अतिशय सोयीस्कर व शांत वातावरण"
    ],
    tips: [
      "Stop at Panshikar or Vinay Health Home in Girgaon for authentic Maharashtrian prasad & delicacies.",
      "The walk is along paved neighborhood streets with plenty of shade.",
      "Photography is warmly welcomed at Keshavji Naik Chawl without rush."
    ],
    tipsMr: [
      "गिरगावातील पानशिकर किंवा विनय हेल्थ होममध्ये अस्सल मराठी पदार्थांचा आस्वाद घ्या.",
      "सर्व रस्ते डांबरी व सावलीचे आहेत.",
      "केशवजी नाईक चाळीत शांततेत फोटो काढता येतात."
    ]
  },
  {
    id: "gsb-spiritual-prasad-circuit",
    title: "GSB Divine Gold & Annadaan Trail",
    titleMr: "जीएसबी सुवर्ण महापूजा व अन्नदान मार्ग",
    tagline: "The world's richest Ganpati with 66kg gold, Vedic havans & banana-leaf feasts.",
    taglineMr: "६६ किलो सोने, अखंड वैदिक हवन आणि केळीच्या पानावर महाप्रसाद.",
    badge: "Richest & Sacred Feast",
    badgeMr: "महाप्रसाद व सुवर्ण दर्शन",
    description: "Experience the grand spiritual tradition of the Gowd Saraswat Brahmin (GSB) community. Visit the multi-crore insured GSB Seva Mandal at Kings Circle for its pure gold adornments and free sacred banana-leaf feast (Annadaan), then proceed to the 10-day Vedic sanctuary of GSB Ram Mandir in Wadala.",
    descriptionMr: "जीएसबी मंडळाचा दैदिप्यमान उत्सव. किंग्ज सर्कलच्या ६६ किलो सुवर्णमंडित महागणपतीचे दर्शन व मोफत महाप्रसाद, त्यानंतर वडाळा राम मंदिरातील शांत आणि पवित्र वैदिक उत्सव.",
    stopsCount: 2,
    totalDistance: "2.1 km",
    estimatedTime: "about 1 hr 45 min",
    estimatedTimeMr: "सुमारे १ तास ४५ मिनिटे",
    bestTiming: "11:30 AM – 2:00 PM (for Mahaprasad Lunch) or 7:30 PM (for evening Rathotsav)",
    bestTimingMr: "सकाळी ११:३० ते २:०० (महाप्रसाद भोजनासाठी) किंवा संध्याकाळी ७:३०",
    startStation: "Kings Circle / GTB Nagar (Harbour Line)",
    startStationMr: "किंग्ज सर्कल / जीटीबी नगर (हार्बर रेल्वे)",
    endStation: "Wadala Road (Harbour Line)",
    endStationMr: "वडाळा रोड (हार्बर रेल्वे)",
    suitability: "Devotees seeking traditional poojas, families, food lovers",
    suitabilityMr: "वैदिक पूजा भाविक, कुटुंब, महाप्रसाद घेणारे",
    stops: [
      {
        mandalId: "gsb-seva-mandal-kings-circle",
        order: 1,
        walkingTimeFromPrev: "Start at Kings Circle / GTB Nagar",
        walkingTimeFromPrevMr: "किंग्ज सर्कल/जीटीबी नगरवरून सुरुवात",
        distanceFromPrev: "400 m",
        walkingTip: "Walk straight onto the GSB Seva Mandal grounds on Bhookailash Nagar.",
        walkingTipMr: "भूकैलाश नगरवरील जीएसबी सेवा मंडळाच्या मैदानाकडे या."
      },
      {
        mandalId: "gsb-wadala-ganpati-ram-mandir",
        order: 2,
        walkingTimeFromPrev: "15 min walk or 5 min taxi",
        walkingTimeFromPrevMr: "१५ मि. चालत किंवा ५ मि. टॅक्सी",
        distanceFromPrev: "1.7 km",
        walkingTip: "Take a quick direct taxi down Katrak Road to Shri Ram Mandir Wadala.",
        walkingTipMr: "कात्रक रोडने श्री राम मंदिरासाठी थेट टॅक्सी किंवा चालत या."
      }
    ],
    highlights: [
      "Witness over 66 kg of pure gold and 300 kg silver ornaments",
      "Enjoy authentic free South Indian Annadaan served on banana leaves",
      "Listen to the divine reverberation of Nadaswaram and Vedic chants",
      "Very fast-moving, high-efficiency queue management"
    ],
    highlightsMr: [
      "६६ किलो अस्सल सोन्याच्या दागिन्यांचे दैदिप्यमान दर्शन",
      "केळीच्या पानावर मोफत सात्विक महाप्रसाद भोजन",
      "नादस्वरम संगीत व पवित्र वेदमंत्रांचा नाद",
      "अतिशय वेगवान व शिस्तबद्ध दर्शन रांग"
    ],
    tips: [
      "Annadaan runs from 12:00 PM to 3:30 PM daily at Kings Circle.",
      "Both mandals have dedicated counters for dry fruit prasad and pooja receipts.",
      "Modest attire is appreciated inside the sacred Vedic precincts."
    ],
    tipsMr: [
      "किंग्ज सर्कल येथे दुपारी १२:०० ते ३:३० पर्यंत महाप्रसाद भोजन चालू असते.",
      "दोन्ही ठिकाणी सुका मेवा प्रसाद व पूजेचे स्वतंत्र काऊंटर आहेत.",
      "मंडपात सात्विक पोशाख परिधान करावा."
    ]
  },
  {
    id: "midnight-to-dawn-pandal-hop",
    title: "Midnight to Dawn Pandal Hopping",
    titleMr: "मध्यरात्री ते पहाटेचा दर्शन मार्ग",
    tagline: "Beat Mumbai's legendary rush hours between 1:30 AM and 6:00 AM.",
    taglineMr: "रात्री १:३० ते पहाटे ६:०० — गर्दी नसताना सुखद दर्शन.",
    badge: "Crowd-Free Secret",
    badgeMr: "गर्दी नसणारा मार्ग",
    description: "The veteran Mumbaikar's best-kept tradition: pandal hopping through Central Mumbai in the magical hours of the night. Temperatures cool down, illuminated facades blaze in full glory, and queues move at three times their daytime speed.",
    descriptionMr: "अनुभवी मुंबईकरांचा सर्वात आवडता मार्ग: मध्यरात्री थंड हवेत विद्युत रोषणाई पाहत शांत दर्शन. दिवसापेक्षा तिप्पट वेगाने रांगा पुढे सरकतात आणि रात्री लोकल ट्रेन्सही अविरत धावतात.",
    stopsCount: 4,
    totalDistance: "3.2 km",
    estimatedTime: "about 2 hr 45 min",
    estimatedTimeMr: "सुमारे २ तास ४५ मिनिटे",
    bestTiming: "1:30 AM – 5:30 AM (Peak night lull)",
    bestTimingMr: "मध्यरात्री १:३० ते पहाटे ५:३०",
    startStation: "Currey Road (Central Line - Night Specials)",
    startStationMr: "करी रोड (रात्रकालीन लोकल)",
    endStation: "Parel (Central Line)",
    endStationMr: "परळ (मध्य रेल्वे)",
    suitability: "Youth groups, night owls, photography enthusiasts",
    suitabilityMr: "तरुणांचे ग्रुप्स, रात्री भटकणारे, फोटोग्राफर्स",
    stops: [
      {
        mandalId: "mumbaicha-raja-ganesh-galli",
        order: 1,
        walkingTimeFromPrev: "Start at Currey Road Station",
        walkingTimeFromPrevMr: "करी रोडपासून सुरुवात",
        distanceFromPrev: "450 m",
        walkingTip: "Arrive via 1:30 AM Central line local. Pandal remains open 24x7.",
        walkingTipMr: "रात्रीच्या लोकलने या. मंडप २४ तास उघडा असतो."
      },
      {
        mandalId: "tejukaya-mandal-lalbaug",
        order: 2,
        walkingTimeFromPrev: "6 min walk",
        walkingTimeFromPrevMr: "६ मिनिटे चालत",
        distanceFromPrev: "450 m",
        walkingTip: "Walking down Ambedkar road is empty and breezy at night.",
        walkingTipMr: "रात्री आंबेडकर रोडवरून शांत व सुखद चालणे."
      },
      {
        mandalId: "parel-cha-raja-narepark",
        order: 3,
        walkingTimeFromPrev: "10 min walk",
        walkingTimeFromPrevMr: "१० मिनिटे चालत",
        distanceFromPrev: "750 m",
        walkingTip: "Walk north through Parel toward Narepark ground.",
        walkingTipMr: "परळमार्गे उत्तरेकडे नारेपार्क मैदानाकडे या."
      },
      {
        mandalId: "chinchpokli-cha-chintamani",
        order: 4,
        walkingTimeFromPrev: "14 min walk",
        walkingTimeFromPrevMr: "१४ मिनिटे चालत",
        distanceFromPrev: "1.1 km",
        walkingTip: "Finish at Chintamani around 4:30 AM right before the morning Kakad aarti!",
        walkingTipMr: "पहाटेच्या काकड आरतीच्या वेळेस चिंतामणीचे दर्शन घेऊन सांगता."
      }
    ],
    highlights: [
      "Avoid 4-hour queues — wait times drop by up to 70%",
      "Special 24x7 suburban local trains operate throughout festival nights",
      "Night food stalls serving hot bhurji, bun maska, and cutting chai",
      "Stunning night illumination without harsh daytime heat"
    ],
    highlightsMr: [
      "दिवसाच्या ४ तासांच्या रांगा टाळा — प्रतीक्षा वेळ ७०% नी कमी",
      "उत्सवाच्या रात्री मुंबई लोकल ट्रेन्स २४ तास सुरू असतात",
      "रात्रभर गरमागरम भुर्जी, बन मस्का व कटींग चहाचे स्टॉल्स",
      "उन्हाचा त्रास नाही आणि रोषणाईचे अप्रतिम दृश्य"
    ],
    tips: [
      "Central Railway runs hourly night special locals between CSMT and Kalyan.",
      "Carry a light jacket as early morning breeze along Lalbaug can be chilly.",
      "Lalbaugcha Raja Mukh Darshan queue drops to 30-40 mins around 3:30 AM."
    ],
    tipsMr: [
      "मध्य रेल्वेवर सीएसएमटी ते कल्याण दरम्यान रात्रभर विशेष लोकल धावतात.",
      "पहाटेच्या थंड हवेसाठी हलके जॅकेट सोबत ठेवा.",
      "पहाटे ३:३० वाजता लालबागच्या राजाच्या मुखदर्शनाची रांग फक्त ३०-४० मिनिटांवर येते."
    ]
  },
  {
    id: "suburban-starlight-circuit",
    title: "Suburban Kings: Andheri to Khar",
    titleMr: "उपनगराचा राजा व पश्चिम उपनगरे मार्ग",
    tagline: "Metro-connected circuit covering Andhericha Raja, Vile Parle & Khar Koliwada.",
    taglineMr: "मेट्रोने जोडलेला मार्ग: अंधेरीचा राजा, विलेपार्ले व खार दांडा.",
    badge: "Metro Connected",
    badgeMr: "मेट्रो मार्ग",
    description: "Explore the glamorous, culturally rich Western Suburbs. Hop on the Mumbai Metro Line 1 to visit the famous 16-day festival at Andhericha Raja, stop for classical cultural programmes in Vile Parle, and conclude with coastal folk traditions at Khar Danda Koliwada on the Arabian Sea.",
    descriptionMr: "पश्चिम उपनगरातील सर्वात प्रसिद्ध दर्शन मार्ग. अंधेरीच्या राजाचे १६ दिवसांचे वैभव, विलेपार्लेचा सांस्कृतिक वारसा आणि खार दांडा कोळीवाड्यातील अरबी समुद्राच्या किनाऱ्यावरील मनमोहक उत्सव.",
    stopsCount: 3,
    totalDistance: "6.2 km (Metro + Walk)",
    estimatedTime: "about 2 hr 45 min",
    estimatedTimeMr: "सुमारे २ तास ४५ मिनिटे",
    bestTiming: "Evening (6:00 PM – 10:00 PM)",
    bestTimingMr: "संध्याकाळी ६:०० ते १०:००",
    startStation: "Azad Nagar Metro (Line 1)",
    startStationMr: "आझाद नगर मेट्रो (मार्ग १)",
    endStation: "Khar Road (Western Line)",
    endStationMr: "खार रोड (पश्चिम रेल्वे)",
    suitability: "Families, celebrity watchers, suburb residents",
    suitabilityMr: "कुटुंब, उपनगरातील नागरिक",
    stops: [
      {
        mandalId: "andhericha-raja-azad-nagar",
        order: 1,
        walkingTimeFromPrev: "Start at Azad Nagar Metro",
        walkingTimeFromPrevMr: "आझाद नगर मेट्रोवरून सुरुवात",
        distanceFromPrev: "250 m",
        walkingTip: "Step down from Azad Nagar Metro station directly into Veera Desai road pandal.",
        walkingTipMr: "मेट्रो स्थानकावरून पायऱ्या उतरून थेट वीरा देसाई रोडवरील मंडपात या."
      },
      {
        mandalId: "balgopal-mitra-mandal-vile-parle",
        order: 2,
        walkingTimeFromPrev: "12 min via Western Local from Andheri to Vile Parle",
        walkingTimeFromPrevMr: "अंधेरी ते विलेपार्ले १२ मि. लोकलने",
        distanceFromPrev: "3.2 km",
        walkingTip: "Take short train from Andheri to Vile Parle, exit East into Subhash Road.",
        walkingTipMr: "अंधेरीवरून विलेपार्लेसाठी लोकल पकडा व पूर्व गेटने बाहेर पडा."
      },
      {
        mandalId: "danda-cha-raja-khar-koliwada",
        order: 3,
        walkingTimeFromPrev: "10 min auto from Khar station",
        walkingTimeFromPrevMr: "खार स्थानकावरून १० मि. ऑटो",
        distanceFromPrev: "2.7 km",
        walkingTip: "Take auto from Khar station down to the coastal village of Khar Danda.",
        walkingTipMr: "खार स्थानकावरून खार दांडा कोळीवाड्यासाठी ऑटो घ्या."
      }
    ],
    highlights: [
      "Seamless connectivity via Mumbai Metro Line 1 and Western Railway",
      "Celebrity spotting at Andhericha Raja",
      "Serene cultural recitals in Vile Parle",
      "Breathtaking coastal sea breeze at Khar Danda"
    ],
    highlightsMr: [
      "मुंबई मेट्रो मार्ग १ आणि पश्चिम रेल्वेने जलद प्रवास",
      "अंधेरीच्या राजाच्या दरबारात बॉलिवूड सेलिब्रिटींचे दर्शन",
      "विलेपार्लेमध्ये शास्त्रीय संगीत व सांस्कृतिक कार्यक्रम",
      "खार दांडा येथे अरबी समुद्राची सुखद झुळूक"
    ],
    tips: [
      "Remember: Andhericha Raja has a strict traditional dress code (no shorts or sleeveless tops).",
      "Use Metro Line 1 from Ghatkopar or Versova to reach Azad Nagar in minutes without traffic.",
      "Try the fresh coastal seafood and street snacks along Khar Danda."
    ],
    tipsMr: [
      "लक्षात ठेवा: अंधेरीच्या राजासाठी पारंपरिक कपड्यांचा ड्रेस कोड अनिवार्य आहे.",
      "घाटकोपर किंवा वर्सोव्यावरून ट्रॅफिक टाळण्यासाठी मेट्रो मार्ग १ चा वापर करा.",
      "खार दांडा परिसरात ताजे सागरी खाद्यपदार्थ मिळतात."
    ]
  }
];
