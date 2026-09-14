export interface TrainSchedule {
  line: string;
  lineMr: string;
  from: string;
  to: string;
  timing: string;
  timingMr: string;
  frequency: string;
  frequencyMr: string;
  keyStops: string[];
  notes: string;
  notesMr: string;
}

export interface RoadClosure {
  road: string;
  roadMr: string;
  area: string;
  areaMr: string;
  restriction: string;
  restrictionMr: string;
  alternateRoute: string;
  alternateRouteMr: string;
  activeHours: string;
}

export interface ParkingLot {
  name: string;
  nameMr: string;
  area: string;
  areaMr: string;
  capacity: string;
  capacityMr: string;
  coordinates?: { lat: number; lng: number };
  walkingTo: string;
  walkingToMr: string;
  isOfficial: boolean;
}

export interface EmergencyContact {
  title: string;
  titleMr: string;
  number: string;
  category: 'police' | 'medical' | 'civic' | 'helpline';
  description: string;
  descriptionMr: string;
}

export interface VisarjanSpot {
  id: string;
  name: string;
  nameMr: string;
  type: 'beach' | 'artificial-pond';
  area: string;
  areaMr: string;
  description: string;
  descriptionMr: string;
  majorMandals: string[];
  majorMandalsMr: string[];
  bestArrivalStation: string;
  bestArrivalStationMr: string;
  facilities: string[];
  facilitiesMr: string[];
}

export const TRANSIT_DATA = {
  trainSchedules: [
    {
      line: "Central Railway (Suburban Main Line)",
      lineMr: "मध्य रेल्वे (मुख्य लाईन)",
      from: "CSMT",
      to: "Kalyan / Thane",
      timing: "Round the Clock (24x7 Night Specials)",
      timingMr: "२४ तास अखंड (रात्रकालीन विशेष लोकल)",
      frequency: "Every 25-35 minutes between 1:00 AM and 4:30 AM",
      frequencyMr: "मध्यरात्री १:०० ते ४:३० दरम्यान दर २५-३५ मिनिटांनी",
      keyStops: ["CSMT", "Byculla", "Chinchpokli", "Currey Road", "Parel", "Dadar", "Kurla", "Ghatkopar", "Thane"],
      notes: "Currey Road and Chinchpokli have special one-way barricaded foot-overbridge exit paths. Follow RPF directions.",
      notesMr: "करी रोड आणि चिंचपोकळी स्थानकांवर वन-वे पादचारी पूल सुरू राहतील. रेल्वे पोलिसांच्या सूचनांचे पालन करा."
    },
    {
      line: "Western Railway",
      lineMr: "पश्चिम रेल्वे",
      from: "Churchgate",
      to: "Borivali / Virar",
      timing: "Special Midnight Service",
      timingMr: "मध्यरात्रीची विशेष सेवा",
      frequency: "Every 30 minutes all night long on festival days",
      frequencyMr: "उत्सवाच्या दिवसांत रात्रभर दर ३० मिनिटांनी",
      keyStops: ["Churchgate", "Marine Lines", "Charni Road", "Grant Road", "Mumbai Central", "Lower Parel", "Dadar", "Bandra", "Andheri", "Borivali"],
      notes: "Charni Road station is best for Girgaon Chowpatty and Girgaon mandals; Lower Parel for Lalbaug via west side.",
      notesMr: "गिरगाव चौपाटीसाठी चर्नी रोड स्थानक; पश्चिमेकडून लालबागसाठी लोअर परळ स्थानक वापरा."
    },
    {
      line: "Harbour Line",
      lineMr: "हार्बर रेल्वे",
      from: "CSMT",
      to: "Panvel / Vashi",
      timing: "Extended Night Service",
      timingMr: "रात्रकालीन जादा फेऱ्या",
      frequency: "Every 40 minutes post midnight",
      frequencyMr: "मध्यरात्रीनंतर दर ४० मिनिटांनी",
      keyStops: ["CSMT", "Cotton Green", "Sewri", "Wadala Road", "Kings Circle", "GTB Nagar", "Kurla", "Vashi", "Panvel"],
      notes: "Kings Circle station provides direct pedestrian gate entry to GSB Seva Mandal pandal grounds.",
      notesMr: "किंग्ज सर्कल स्थानकातून थेट जीएसबी सेवा मंडळाच्या मैदानावर पायी जाता येते."
    },
    {
      line: "Mumbai Metro (Line 1 - Blue Line)",
      lineMr: "मुंबई मेट्रो (मार्ग १)",
      from: "Versova",
      to: "Ghatkopar",
      timing: "05:30 AM – 12:30 AM (Extended on Visarjan)",
      timingMr: "सकाळी ०५:३० ते रात्री १२:३० (विसर्जनाच्या दिवशी वाढीव फेऱ्या)",
      frequency: "Every 4 to 8 minutes",
      frequencyMr: "दर ४ ते ८ मिनिटांनी",
      keyStops: ["Versova", "DN Nagar", "Azad Nagar (Andhericha Raja)", "Andheri", "Western Express Highway", "Saki Naka", "Ghatkopar"],
      notes: "Azad Nagar station is directly connected by skywalk to Andhericha Raja entry lane.",
      notesMr: "आझाद नगर स्थानक थेट अंधेरीच्या राजाच्या दर्शन मार्गाला जोडलेले आहे."
    }
  ] as TrainSchedule[],

  roadClosures: [
    {
      road: "Dr. Babasaheb Ambedkar Road (Lalbaug Section)",
      roadMr: "डॉ. बाबासाहेब आंबेडकर रोड (लालबाग विभाग)",
      area: "Lalbaug & Parel",
      areaMr: "लालबाग व परळ",
      restriction: "Closed to private vehicles from Bharatmata to Bawla Mosque from 16:00 to 06:00.",
      restrictionMr: "भारतमाता ते बा Bawla मशीद दरम्यान खाजगी वाहनांना संध्याकाळी ४ ते सकाळी ६ बंदी.",
      alternateRoute: "Divert via Rafi Ahmed Kidwai Marg (Sewri) or Eastern Freeway.",
      alternateRouteMr: "रफी अहमद किडवाई मार्ग (शिवडी) अथवा ईस्टर्न फ्रीवेचा वापर करा.",
      activeHours: "16:00 – 06:00 Daily"
    },
    {
      road: "Lalbaug Flyover",
      roadMr: "लालबाग उड्डाणपूल",
      area: "Lalbaug",
      areaMr: "लालबाग",
      restriction: "Two-wheelers and heavy vehicles strictly barred. Northbound lane open only for emergency ambulances and BEST buses.",
      restrictionMr: "दुचाकी व अवजड वाहनांना बंदी. फक्त रुग्णवाहिका व बेस्ट बसेसना मुभा.",
      alternateRoute: "Use Eastern Freeway or P. D'Mello Road.",
      alternateRouteMr: "ईस्टर्न फ्रीवे किंवा पी. डिमेलो रोडचा वापर करा.",
      activeHours: "24 Hours during festival"
    },
    {
      road: "JSS Road & Khadilkar Road",
      roadMr: "जेएसएस रोड व खाडिलकर रोड",
      area: "Girgaon",
      areaMr: "गिरगाव",
      restriction: "Pedestrian-only corridor between Opera House and Portuguese Church.",
      restrictionMr: "ऑपेरा हाऊस ते पोर्तुगीज चर्च दरम्यान फक्त पादचाऱ्यांसाठी मार्ग राखीव.",
      alternateRoute: "Divert via Marine Drive (Netaji Subhash Chandra Bose Road).",
      alternateRouteMr: "मरीन ड्राईव्ह रस्त्याने प्रवास करावा.",
      activeHours: "17:00 – 02:00 Daily"
    },
    {
      road: "Dattaram Lad Marg",
      roadMr: "दत्ताराम लाड मार्ग",
      area: "Chinchpokli",
      areaMr: "चिंचपोकळी",
      restriction: "Closed completely to vehicular movement for Chinchpokli Cha Chintamani queue barricades.",
      restrictionMr: "चिंचपोकळी चिंतामणीच्या दर्शन रांगेसाठी वाहनांना पूर्णपणे बंदी.",
      alternateRoute: "Use Arthur Road (NM Joshi Marg) towards Lower Parel.",
      alternateRouteMr: "एन.एम. जोशी मार्ग (लोअर परळ) वापरा.",
      activeHours: "24 Hours Daily"
    }
  ] as RoadClosure[],

  parkingLots: [
    {
      name: "Cotton Green Railway Colony Ground",
      nameMr: "कॉटन ग्रीन रेल्वे कॉलनी मैदान",
      area: "Cotton Green / Kalachowki",
      areaMr: "कॉटन ग्रीन / काळाचौकी",
      capacity: "1,200 Four-wheelers & 2,500 Two-wheelers",
      capacityMr: "१,२०० चारचाकी व २,५०० दुचाकी",
      walkingTo: "12 min walk to Lalbaugcha Raja & Ganesh Galli",
      walkingToMr: "लालबागचा राजा व गणेश गल्लीसाठी १२ मि. चालत",
      isOfficial: true
    },
    {
      name: "Bawla Mosque Compound Parking",
      nameMr: "बावला मशीद कंपाउंड पार्किंग",
      area: "Lalbaug",
      areaMr: "लालबाग",
      capacity: "350 Four-wheelers",
      capacityMr: "३५० चारचाकी",
      walkingTo: "5 min walk to Chinchpokli Chintamani",
      walkingToMr: "चिंचपोकळी चिंतामणीसाठी ५ मि. चालत",
      isOfficial: true
    },
    {
      name: "Matunga Don Bosco Ground",
      nameMr: "माटुंगा डॉन बॉस्को मैदान",
      area: "Kings Circle / Matunga",
      areaMr: "किंग्ज सर्कल / माटुंगा",
      capacity: "800 Four-wheelers & 1,500 Two-wheelers",
      capacityMr: "८०० चारचाकी व १,५०० दुचाकी",
      walkingTo: "6 min walk to GSB Seva Mandal Kings Circle",
      walkingToMr: "जीएसबी सेवा मंडळासाठी ६ मि. चालत",
      isOfficial: true
    },
    {
      name: "Azad Maidan & CSMT Pay & Park",
      nameMr: "आझाद मैदान व सीएसएमटी पे अँड पार्क",
      area: "Fort",
      areaMr: "फोर्ट",
      capacity: "1,500 Vehicles",
      capacityMr: "१,५०० वाहने",
      walkingTo: "6 min walk to Fortcha Raja",
      walkingToMr: "फोर्टच्या राजासाठी ६ मि. चालत",
      isOfficial: true
    },
    {
      name: "Saifee Hospital Parking & Opera House Multi-Level",
      nameMr: "सैफी हॉस्पिटल व ऑपेरा हाऊस पार्किंग",
      area: "Charni Road",
      areaMr: "चर्नी रोड",
      capacity: "450 Four-wheelers",
      capacityMr: "४५० चारचाकी",
      walkingTo: "7 min walk to Keshavji Naik Chawl & Girgaon Cha Raja",
      walkingToMr: "केशवजी नाईक चाळ व गिरगावच्या राजासाठी ७ मि. चालत",
      isOfficial: true
    },
    {
      name: "Andheri Sports Complex Ground (Shahaji Raje)",
      nameMr: "अंधेरी स्पोर्ट्स कॉम्प्लेक्स मैदान",
      area: "Andheri West",
      areaMr: "अंधेरी पश्चिम",
      capacity: "900 Four-wheelers",
      capacityMr: "९०० चारचाकी",
      walkingTo: "8 min walk to Andhericha Raja",
      walkingToMr: "अंधेरीच्या राजासाठी ८ मि. चालत",
      isOfficial: true
    }
  ] as ParkingLot[],

  emergencyContacts: [
    {
      title: "Mumbai Police Central Control",
      titleMr: "मुंबई पोलीस नियंत्रण कक्ष",
      number: "100 / 112",
      category: "police",
      description: "24x7 emergency security & police assistance",
      descriptionMr: "२४ तास तात्काळ पोलीस व सुरक्षा मदत"
    },
    {
      title: "Mumbai Traffic Police Helpline",
      titleMr: "मुंबई वाहतूक पोलीस हेल्पलाईन",
      number: "8454999999",
      category: "police",
      description: "Live WhatsApp route & parking guidance",
      descriptionMr: "व्हॉट्सॲप ट्रॅफिक व पार्किंग माहिती"
    },
    {
      title: "BMC Disaster Management Cell",
      titleMr: "महानगरपालिका आपत्कालीन कक्ष",
      number: "1916",
      category: "civic",
      description: "Flooding, civic emergencies, tree falls, and artificial lake spots",
      descriptionMr: "पाणी भरणे, नागरी समस्या, विसर्जन कृत्रिम तलाव माहिती"
    },
    {
      title: "Emergency Medical & Ambulance",
      titleMr: "तात्काळ रुग्णवाहिका सेवा",
      number: "108",
      category: "medical",
      description: "Free medical ambulance service at major pandals",
      descriptionMr: "प्रमुख मंडळांजवळ २४ तास मोफत रुग्णवाहिका"
    },
    {
      title: "Childline & Lost Person Center",
      titleMr: "बाल संरक्षण व हरवलेली व्यक्ती कक्ष",
      number: "1098",
      category: "helpline",
      description: "Assistance for lost children during high crowd pandal visits",
      descriptionMr: "गर्दीत हरवलेली मुले व व्यक्ती शोधण्यासाठी मदत"
    }
  ] as EmergencyContact[],

  visarjanSpots: [
    {
      id: "girgaon-chowpatty",
      name: "Girgaon Chowpatty (Marine Drive)",
      nameMr: "गिरगाव चौपाटी (मरीन ड्राईव्ह)",
      type: "beach",
      area: "South Mumbai",
      areaMr: "दक्षिण मुंबई",
      description: "The epicentre of Mumbai's Ganeshotsav immersion! Hosts the world-famous immersion processions of Lalbaugcha Raja, Ganesh Galli, Khetwadicha Ganraj, and Girgaon Cha Raja with millions gathering on Marine Drive.",
      descriptionMr: "मुंबई विसर्जन सोहळ्याचा मुख्य केंद्रबिंदू! लालबागचा राजा, गणेश गल्ली, खेतवाडीचा गणराज आणि गिरगावच्या राजाचे विसर्जन येथेच होते. लाखो भाविक मरीन ड्राईव्हवर उपस्थित असतात.",
      majorMandals: ["Lalbaugcha Raja", "Mumbaicha Raja", "Khetwadi Ganraj", "Girgaon Cha Raja"],
      majorMandalsMr: ["लालबागचा राजा", "मुंबईचा राजा", "खेतवाडीचा गणराज", "गिरगावचा राजा"],
      bestArrivalStation: "Charni Road (Western Line)",
      bestArrivalStationMr: "चर्नी रोड (पश्चिम रेल्वे)",
      facilities: ["Navy & Coast Guard boats", "Lifeguards & watchtowers", "Medical ICU tents", "CCTV crowd monitors", "Free drinking water"],
      facilitiesMr: ["नौदल व तटरक्षक दलाच्या बोटी", "जीवरक्षक व वॉच टॉवर्स", "वैद्यकीय तात्काळ कक्ष", "सीसीटीव्ही नियंत्रण कक्ष", "पिण्याचे पाणी"]
    },
    {
      id: "juhu-beach",
      name: "Juhu Beach",
      nameMr: "जुहू चौपाटी",
      type: "beach",
      area: "Western Suburbs",
      areaMr: "पश्चिम उपनगरे",
      description: "The premier immersion site for Western Mumbai, welcoming thousands of home Ganpatis and suburban mandals from Bandra, Khar, Santacruz, Andheri, and Vile Parle.",
      descriptionMr: "पश्चिम उपनगरातील सर्वात मोठे विसर्जन ठिकाण. हजारो घरगुती गणपती व उपनगरातील सार्वजनिक मंडळांचे विसर्जन जुहू चौपाटीवर होते.",
      majorMandals: ["Balgopal Mitra Mandal", "Bandra Sarvajanik", "Santacruz Mandals"],
      majorMandalsMr: ["बालगोपाल मित्र मंडळ", "वांद्रे सार्वजनिक", "सांताक्रूझ मंडळे"],
      bestArrivalStation: "Vile Parle / Santacruz (Western Line)",
      bestArrivalStationMr: "विलेपार्ले / सांताक्रूझ (पश्चिम रेल्वे)",
      facilities: ["BMC Cranes for heavy idols", "Lifeguard patrols", "Eco-collection zones for Nirmalya", "Ambulance fleet"],
      facilitiesMr: ["महापालिकेचे क्रेन", "जीवरक्षक पथके", "निर्मल्य संकलन केंद्र", "रुग्णवाहिका"]
    },
    {
      id: "dadar-chowpatty",
      name: "Dadar Chowpatty (Chaityabhoomi Beach)",
      nameMr: "दादर चौपाटी (चैत्यभूमी किनारा)",
      type: "beach",
      area: "Central Mumbai / Dadar",
      areaMr: "मध्य मुंबई / दादर",
      description: "Overlooked by the iconic Bandra-Worli Sea Link, Dadar Chowpatty receives thousands of immersions from Dadar, Prabhadevi, Matunga, and Mahim.",
      descriptionMr: "वांद्रे-वरळी सी-लिंकच्या विलोभनीय पार्श्वभूमीवर दादर, प्रभादेवी, माटुंगा व माहीमच्या मूर्तींचे विसर्जन.",
      majorMandals: ["Dadar Sarvajanik Mandals", "Prabhadevi Cha Raja", "Matunga Mandals"],
      majorMandalsMr: ["दादर सार्वजनिक मंडळे", "प्रभादेवीचा राजा", "माटुंगा मंडळे"],
      bestArrivalStation: "Dadar (Central & Western Lines)",
      bestArrivalStationMr: "दादर (मध्य व पश्चिम रेल्वे)",
      facilities: ["Dedicated boat ramps", "High mast floodlights", "Nirmalya kalash", "Police watch towers"],
      facilitiesMr: ["बोटींसाठी रॅम्प", "प्रखर प्रकाश दिवे", "निर्मल्य कलश", "पोलीस टॉवर"]
    },
    {
      id: "bmc-artificial-lakes",
      name: "BMC Eco-Friendly Artificial Lakes (200+ Locations)",
      nameMr: "महापालिका कृत्रिम तलाव (२००+ ठिकाणी)",
      type: "artificial-pond",
      area: "All Across Mumbai (Wards A to T)",
      areaMr: "संपूर्ण मुंबई (सर्व वॉर्ड्स)",
      description: "BMC sets up over 200 specially engineered artificial immersion ponds across municipal parks and playgrounds to protect the marine ecosystem and marine life.",
      descriptionMr: "सागरी पर्यावरणाच्या रक्षणासाठी मुंबई महानगरपालिकेतर्फे मुंबईत २०० हून अधिक कृत्रिम तलावांची निर्मिती केली जाते.",
      majorMandals: ["All Eco-Friendly and Home Ganpatis (घरगुती व शाडूच्या मूर्ती)"],
      majorMandalsMr: ["सर्व पर्यावरणपूरक व घरगुती मूर्ती"],
      bestArrivalStation: "Nearest Ward municipal ground",
      bestArrivalStationMr: "जवळचे महापालिका मैदान",
      facilities: ["Free soil return for plants", "Zero sea pollution", "Hassle-free 5 min immersion", "Pooja ritual tables"],
      facilitiesMr: ["मातीचा झाडांसाठी पुनर्वापर", "शून्य प्रदूषण", "अवघ्या ५ मिनिटांत विसर्जन", "पूजा साहित्य टेबल"]
    }
  ] as VisarjanSpot[]
};
