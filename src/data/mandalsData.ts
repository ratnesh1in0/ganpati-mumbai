export interface NearestStation {
  name: string;
  nameMr: string;
  line: 'Central' | 'Western' | 'Harbour' | 'Metro';
  walkTime: string;
  walkTimeMr: string;
  distance: string;
  exitTip: string;
  exitTipMr: string;
}

export interface AartiTiming {
  time: string;
  name: string;
  nameMr: string;
  isNext?: boolean;
}

export interface CrowdInfo {
  status: 'low' | 'moderate' | 'busy' | 'peak';
  statusText: string;
  statusTextMr: string;
  charanSparshMinutes?: number;
  mukhDarshanMinutes?: number;
  generalWaitMinutes: number;
  lastUpdated: string;
  lastUpdatedMr: string;
  reportedCount: number;
  trend: 'rising' | 'stable' | 'decreasing';
  notes: string;
  notesMr: string;
}

export interface Mandal {
  id: string;
  name: string;
  nameMr: string;
  popularTitle: string;
  popularTitleMr: string;
  badge: string;
  badgeMr: string;
  area: string;
  areaMr: string;
  zone: 'lalbaug-parel' | 'south-mumbai' | 'central-mumbai' | 'suburbs-west' | 'suburbs-east';
  zoneName: string;
  zoneNameMr: string;
  foundedYear: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
  addressMr: string;
  nearestStations: NearestStation[];
  crowd: CrowdInfo;
  aartis: AartiTiming[];
  history: string;
  historyMr: string;
  highlights: string[];
  highlightsMr: string[];
  themeDekhava?: string;
  themeDekhavaMr?: string;
  dressCodeRule?: string;
  dressCodeRuleMr?: string;
  liveStreamAvailable: boolean;
  streamEmbedUrl?: string;
  prasadInfo: string;
  prasadInfoMr: string;
  donationUrl?: string;
  tags: string[];
  gradientTheme: string;
}

export const MANDALS_DATA: Mandal[] = [
  {
    id: "lalbaugcha-raja",
    name: "Shrimant Lalbaugcha Raja",
    nameMr: "श्रीमंत लालबागचा राजा",
    popularTitle: "Navsacha Ganpati (Wish-Fulfilling King)",
    popularTitleMr: "नवसाचा गणपती",
    badge: "#1 Most Visited in World",
    badgeMr: "#१ जगप्रसिद्ध",
    area: "Lalbaug, Parel",
    areaMr: "लालबाग, परळ",
    zone: "lalbaug-parel",
    zoneName: "Lalbaug & Parel",
    zoneNameMr: "लालबाग आणि परळ",
    foundedYear: 1934,
    coordinates: { lat: 18.9904, lng: 72.8344 },
    address: "GD Ambekar Marg, Lalbaug Market, Lalbaug, Mumbai 400012",
    addressMr: "जी.डी. आंबेकर मार्ग, लालबाग मार्केट, परळ, मुंबई ४०००१२",
    nearestStations: [
      {
        name: "Currey Road (Central Line)",
        nameMr: "करी रोड (मध्य रेल्वे)",
        line: "Central",
        walkTime: "8 min walk",
        walkTimeMr: "८ मिनिटे चालत",
        distance: "650 m",
        exitTip: "Exit towards East / Bharatmata bridge",
        exitTipMr: "पूर्वेकडील भारतमाता पुलाकडे बाहेर पडा"
      },
      {
        name: "Chinchpokli (Central Line)",
        nameMr: "चिंचपोकळी (मध्य रेल्वे)",
        line: "Central",
        walkTime: "10 min walk",
        walkTimeMr: "१० मिनिटे चालत",
        distance: "800 m",
        exitTip: "Follow the barricaded queue path northward",
        exitTipMr: "उत्तरेकडील बॅरिकेड्सच्या मार्गाने जा"
      },
      {
        name: "Lower Parel (Western Line)",
        nameMr: "लोअर परळ (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "14 min walk",
        walkTimeMr: "१४ मिनिटे चालत",
        distance: "1.1 km",
        exitTip: "Take East FOB towards Curry Road bridge",
        exitTipMr: "करी रोड पुलाकडे पूर्व पादचारी पूल वापरा"
      }
    ],
    crowd: {
      status: "peak",
      statusText: "Heavy Rush (Normal for Lalbaug)",
      statusTextMr: "प्रचंड गर्दी (लालबागसाठी नेहमीची)",
      charanSparshMinutes: 510, // ~8.5 hours
      mukhDarshanMinutes: 95,   // ~1.5 hours
      generalWaitMinutes: 95,
      lastUpdated: "3 mins ago",
      lastUpdatedMr: "३ मिनिटांपूर्वी",
      reportedCount: 68,
      trend: "rising",
      notes: "Charan Sparsh line moving through Dattaram Lad Marg; Mukh Darshan line moving smoothly.",
      notesMr: "चरणस्पर्श रांग दत्ताराम लाड मार्गावरून पुढे सरकत आहे; मुखदर्शन रांग वेगाने सुरू आहे."
    },
    aartis: [
      { time: "06:00 AM", name: "Kakad Aarti", nameMr: "काकड आरती" },
      { time: "12:30 PM", name: "Madhyanha Aarti", nameMr: "मध्यान्ह आरती" },
      { time: "08:30 PM", name: "Sandhya Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "12:00 AM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Founded in 1934 by the local fishermen (Kolis) and market vendors after their prayer for a permanent marketplace was fulfilled when the Peru Chawl market was shut down. Sculpted for generations exclusively by the Kambli family (Kambli Arts), Lalbaugcha Raja is renowned globally as 'Navsacha Ganpati', fulfilling the heartfelt vows of millions of devotees who stand in queue for up to 24 hours.",
    historyMr: "१९३४ मध्ये पेरू चाळ बाजार बंद झाल्यानंतर कोळी व इतर विक्रेत्यांनी बाजारपेठ मिळवण्यासाठी नवस केला. नवस पूर्ण झाल्यावर त्यांनी लालबागच्या राजाची स्थापना केली. पिढ्यानपिढ्या कांबळी घराणे (कांबळी आर्ट्स) ही लोभस मूर्ती साकारत आहेत.",
    highlights: [
      "Separate queues for Charan Sparsh (Feet Touch) and Mukh Darshan (General View)",
      "Traditional regal throne design with Kambli Arts signature sculpting",
      "Over 1.5 million devotees visit daily during peak festival days",
      "24-hour long grand immersion procession on Anant Chaturdashi reaching Girgaon Chowpatty"
    ],
    highlightsMr: [
      "चरणस्पर्श (नवसाची रांग) आणि मुखदर्शन यासाठी स्वतंत्र रांगांची व्यवस्था",
      "कांबळी आर्ट्स द्वारे पिढ्यानपिढ्या साकारली जाणारी भव्य लोभस मूर्ती",
      "उत्सवाच्या काळात दररोज १५ लाखांहून अधिक भाविकांचे दर्शन",
      "अनंत चतुर्दशीला २४ तास चालणारी ऐतिहासिक विसर्जन मिरवणूक"
    ],
    themeDekhava: "Spectacular Royal Rajmahal Darbar with intricate filigree gold leaf work",
    themeDekhavaMr: "सोनेरी नक्षीकाम आणि राजेशाही राजमहल दरबार देखावा",
    liveStreamAvailable: true,
    streamEmbedUrl: "https://www.youtube-nocookie.com/embed/live_stream?channel=UCkQZz0Y8P6vE",
    prasadInfo: "Laddoo and Modak prasad boxes available at official counters inside pandal exit.",
    prasadInfoMr: "दर्शनानंतर बाहेर पडताना अधिकृत काऊंटरवर लाडू व मोदक प्रसाद उपलब्ध.",
    tags: ["Wish Fulfilling", "Charan Sparsh", "Historic 1934", "Live Stream"],
    gradientTheme: "from-amber-600 via-orange-700 to-amber-950"
  },
  {
    id: "mumbaicha-raja-ganesh-galli",
    name: "Mumbaicha Raja (Ganesh Galli)",
    nameMr: "मुंबईचा राजा (गणेश गल्ली)",
    popularTitle: "Lalbaug Sarvajanik Utsav Mandal (Pioneer of Grand Themes)",
    popularTitleMr: "लालबाग सार्वजनिक उत्सव मंडळ (भव्य देखाव्यांचे जनक)",
    badge: "98th Year Legacy",
    badgeMr: "९८ वे वर्ष",
    area: "Ganesh Galli, Lalbaug",
    areaMr: "गणेश गल्ली, लालबाग",
    zone: "lalbaug-parel",
    zoneName: "Lalbaug & Parel",
    zoneNameMr: "लालबाग आणि परळ",
    foundedYear: 1928,
    coordinates: { lat: 18.9918, lng: 72.8358 },
    address: "1st Ganesh Galli, Lane No. 1, Lalbaug, Mumbai 400012",
    addressMr: "पहिली गणेश गल्ली, लेन नं १, लालबाग, मुंबई ४०००१२",
    nearestStations: [
      {
        name: "Currey Road (Central Line)",
        nameMr: "करी रोड (मध्य रेल्वे)",
        line: "Central",
        walkTime: "6 min walk",
        walkTimeMr: "६ मिनिटे चालत",
        distance: "500 m",
        exitTip: "Walk straight towards Ganesh Galli arch",
        exitTipMr: "गणेश गल्ली कमानीकडे सरळ चालत या"
      },
      {
        name: "Chinchpokli (Central Line)",
        nameMr: "चिंचपोकळी (मध्य रेल्वे)",
        line: "Central",
        walkTime: "8 min walk",
        walkTimeMr: "८ मिनिटे चालत",
        distance: "700 m",
        exitTip: "Enter from Dr. Ambedkar road entrance",
        exitTipMr: "डॉ. आंबेडकर रोड प्रवेशद्वारातून या"
      }
    ],
    crowd: {
      status: "busy",
      statusText: "Brisk Moving Line (~45 min)",
      statusTextMr: "रांग वेगाने पुढे सरकत आहे (~४५ मि.)",
      generalWaitMinutes: 45,
      lastUpdated: "5 mins ago",
      lastUpdatedMr: "५ मिनिटांपूर्वी",
      reportedCount: 42,
      trend: "stable",
      notes: "Line moving fast. Theme set viewing area has excellent crowd regulation.",
      notesMr: "रांग सुरळीत सुरू आहे. देखाव्याच्या हॉलमध्ये उत्तम व्यवस्था आहे."
    },
    aartis: [
      { time: "07:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "01:00 PM", name: "Dopahar Aarti", nameMr: "दुपारची आरती" },
      { time: "08:00 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "11:30 PM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Established in 1928, Ganesh Galli is the oldest mandal in the Lalbaug region and was the pioneer of introducing gigantic 22-foot idols in 1977. Every year, it builds magnificent architectural replicas of India's iconic temples like Kedarnath, Sun Temple Konark, Varanasi Ghats, and Ayodhya Ram Mandir.",
    historyMr: "१९२८ मध्ये स्थापन झालेले हे लालबाग परिसरातील सर्वात जुने मंडळ आहे. १९७७ मध्ये त्यांनीच मुंबईत २२ फुटी भव्य मूर्तीची प्रथा सुरू केली. दरवर्षी भारतामधील प्रसिद्ध मंदिरांची भव्य प्रतिकृती येथे उभारली जाते.",
    highlights: [
      "Pioneer of mammoth 22ft idols and full-scale temple replicas",
      "Just 300 meters away from Lalbaugcha Raja",
      "Very efficient queue flow with broad darshan gallery",
      "Celebrates 98 glorious years of cultural heritage"
    ],
    highlightsMr: [
      "भव्य २२ फुटी मूर्ती व मंदिर प्रतिकृतींचे अग्रदूत",
      "लालबागच्या राजापासून अवघ्या ३०० मीटर अंतरावर",
      "विशाल दर्शन गॅलरीमुळे रांग अत्यंत वेगाने पुढे सरकते",
      "९८ वर्षांचा देदिप्यमान ऐतिहासिक वारसा"
    ],
    themeDekhava: "Grand Replica of Mahakaleshwar Jyotirlinga Temple, Ujjain",
    themeDekhavaMr: "उज्जैनच्या श्री महाकालेश्वर ज्योतिर्लिंग मंदिराची हुबेहूब प्रतिकृती",
    liveStreamAvailable: true,
    streamEmbedUrl: "https://www.youtube-nocookie.com/embed/live_stream?channel=mumbaicharaja",
    prasadInfo: "Motichoor laddoo prasad packets distributed to every devotee.",
    prasadInfoMr: "सर्व भाविकांना मोतीचूर लाडू प्रसाद वाटप.",
    tags: ["Grand Temple Themes", "Oldest in Lalbaug", "98 Years", "Fast Queue"],
    gradientTheme: "from-orange-600 via-red-700 to-stone-900"
  },
  {
    id: "chinchpokli-cha-chintamani",
    name: "Chinchpokli Cha Chintamani",
    nameMr: "चिंचपोकळीचा चिंतामणी",
    popularTitle: "Chinchpokli Sarvajanik Utsav Mandal (Centenary Mandal)",
    popularTitleMr: "चिंचपोकळी सार्वजनिक उत्सव मंडळ (शताब्दी मंडळ)",
    badge: "105 Years Centenary",
    badgeMr: "१०५ वर्षे",
    area: "Chinchpokli",
    areaMr: "चिंचपोकळी",
    zone: "lalbaug-parel",
    zoneName: "Lalbaug & Parel",
    zoneNameMr: "लालबाग आणि परळ",
    foundedYear: 1920,
    coordinates: { lat: 18.9868, lng: 72.8331 },
    address: "Dattaram Lad Marg, Chinchpokli, Mumbai 400012",
    addressMr: "दत्ताराम लाड मार्ग, चिंचपोकळी, मुंबई ४०००१२",
    nearestStations: [
      {
        name: "Chinchpokli (Central Line)",
        nameMr: "चिंचपोकळी (मध्य रेल्वे)",
        line: "Central",
        walkTime: "3 min walk",
        walkTimeMr: "३ मिनिटे चालत",
        distance: "250 m",
        exitTip: "Directly opposite Chinchpokli station east exit",
        exitTipMr: "चिंचपोकळी स्टेशन पूर्व गेटच्या अगदी समोर"
      },
      {
        name: "Byculla (Central Line)",
        nameMr: "भायखळा (मध्य रेल्वे)",
        line: "Central",
        walkTime: "10 min walk",
        walkTimeMr: "१० मिनिटे चालत",
        distance: "850 m",
        exitTip: "North FOB towards Dattaram Lad road",
        exitTipMr: "उत्तर पूल उतरून दत्ताराम लाड रोडकडे या"
      }
    ],
    crowd: {
      status: "busy",
      statusText: "Crowded (~1.5 hours wait)",
      statusTextMr: "गर्दी (~१ तास ३० मिनिटे)",
      generalWaitMinutes: 90,
      lastUpdated: "7 mins ago",
      lastUpdatedMr: "७ मिनिटांपूर्वी",
      reportedCount: 35,
      trend: "rising",
      notes: "Queue stretching onto Arthur Road bridge approach. Volunteers managing water distribution.",
      notesMr: "रांग आर्थर रोड पुलाजवळ पोहोचली आहे. स्वयंसेवकांकडून पाण्याची उत्तम व्यवस्था."
    },
    aartis: [
      { time: "07:30 AM", name: "Pratah Aarti", nameMr: "प्रातः आरती" },
      { time: "01:00 PM", name: "Madhyan Aarti", nameMr: "मध्यान्ह आरती" },
      { time: "08:15 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "11:45 PM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Founded in 1920, Chinchpokli Cha Chintamani celebrated its grand centenary in 2019. Sculpted by the legendary Vijay Khatu and now Reshma Khatu, the idol is famous for its majestic seated posture, meditative eyes, and unmatched aura. Its Aagman Sohala (welcoming ceremony 15 days prior) attracts over 300,000 devotees onto Dattaram Lad Marg.",
    historyMr: "१९२० मध्ये स्थापन झालेल्या या मंडळाने २०१९ मध्ये दिमाखदार शताब्दी साजरी केली. दिवंगत विजय खातू व रेश्मा खातू यांच्या हस्ते साकारली जाणारी ही शांत, ध्यानस्थ बसलेली मूर्ती सर्वांना भुरळ पाडते. आगमनाचा सोहळा लाखो भाविकांच्या साक्षीने रंगतो.",
    highlights: [
      "Famous meditative seated pose (विराजमान मुद्रा)",
      "Unrivaled Aagman Sohala welcoming procession",
      "Direct 2-minute walk from Chinchpokli railway station",
      "Philanthropic medical clinic running round the year"
    ],
    highlightsMr: [
      "अतिशय विलोभनीय व तेजस्वी ध्यानस्थ बैठक मुद्रा",
      "महाराष्ट्रातील सर्वात मोठा आणि प्रसिद्ध आगमन सोहळा",
      "चिंचपोकळी रेल्वे स्थानकापासून अवघ्या २ मिनिटांच्या अंतरावर",
      "वर्षभर सामाजिक व वैद्यकीय मदत केंद्र कार्यरत"
    ],
    themeDekhava: "Divine Indralok celestial palace with golden pillars",
    themeDekhavaMr: "सुवर्ण खांब असलेला दिव्य इंद्रलोक महाल देखावा",
    liveStreamAvailable: true,
    streamEmbedUrl: "https://www.youtube-nocookie.com/embed/live_stream?channel=chinchpoklichachintamani",
    prasadInfo: "Pure ghee modak prasad distributed in packets.",
    prasadInfoMr: "शुद्ध तुपातील मोदक प्रसाद पाकिटात उपलब्ध.",
    tags: ["Centenary 105 Yrs", "Soulful Murti", "Near Station", "Aagman Sohala"],
    gradientTheme: "from-red-600 via-rose-800 to-stone-900"
  },
  {
    id: "gsb-seva-mandal-kings-circle",
    name: "GSB Seva Mandal (Kings Circle)",
    nameMr: "जीएसबी सेवा मंडळ (किंग्ज सर्कल)",
    popularTitle: "Mumbai's Richest & Most Sacred Ganpati (Mahaganpati)",
    popularTitleMr: "मुंबईचा सर्वात श्रीमंत व सुवर्णमयी गणपती",
    badge: "₹400+ Cr Insurance & 66kg Gold",
    badgeMr: "६६ किलो सोने व भव्य महापूजा",
    area: "Kings Circle / Sion",
    areaMr: "किंग्ज सर्कल, शीव",
    zone: "central-mumbai",
    zoneName: "Central Mumbai (Sion & Dadar)",
    zoneNameMr: "मध्य मुंबई (शीव, दादर, वडाळा)",
    foundedYear: 1954,
    coordinates: { lat: 19.0305, lng: 72.8596 },
    address: "Guru Tegh Bahadur Nagar, Bhookailash Nagar, Sion East, Mumbai 400022",
    addressMr: "गुरु तेग बहादूर नगर, भूकैलाश नगर, सायन पूर्व, मुंबई ४०००२२",
    nearestStations: [
      {
        name: "Kings Circle (Harbour Line)",
        nameMr: "किंग्ज सर्कल (हार्बर रेल्वे)",
        line: "Harbour",
        walkTime: "5 min walk",
        walkTimeMr: "५ मिनिटे चालत",
        distance: "400 m",
        exitTip: "Exit East towards circle and walk down Sion road",
        exitTipMr: "पूर्वेकडे बाहेर पडून सर्कलवरून सायन रोडकडे या"
      },
      {
        name: "GTB Nagar (Harbour Line)",
        nameMr: "जीटीबी नगर (हार्बर रेल्वे)",
        line: "Harbour",
        walkTime: "6 min walk",
        walkTimeMr: "६ मिनिटे चालत",
        distance: "550 m",
        exitTip: "West exit towards mandal grounds",
        exitTipMr: "मंडळाच्या मैदानाकडे पश्चिम गेट"
      },
      {
        name: "Sion (Central Line)",
        nameMr: "शीव (मध्य रेल्वे)",
        line: "Central",
        walkTime: "12 min walk",
        walkTimeMr: "१२ मिनिटे चालत",
        distance: "1.0 km",
        exitTip: "Take South exit towards Kings Circle",
        exitTipMr: "किंग्ज सर्कल दिशेने दक्षिण गेट वापरा"
      }
    ],
    crowd: {
      status: "moderate",
      statusText: "Smooth Moving Line (~30 min)",
      statusTextMr: "अतिशय शिस्तबद्ध रांग (~३० मि.)",
      generalWaitMinutes: 30,
      lastUpdated: "2 mins ago",
      lastUpdatedMr: "२ मिनिटांपूर्वी",
      reportedCount: 51,
      trend: "stable",
      notes: "Extremely well organized GSB volunteer system. Annadaan dining hall running continuously.",
      notesMr: "जीएसबी स्वयंसेवकांची अत्यंत शिस्तबद्ध व्यवस्था. महाप्रसाद अन्नदान अखंड सुरू आहे."
    },
    aartis: [
      { time: "07:00 AM", name: "Ushakala Pooja & Aarti", nameMr: "उषःकाल पूजा व आरती" },
      { time: "12:00 PM", name: "Madhyanna Pooja", nameMr: "मध्यान्ह महापूजा" },
      { time: "08:00 PM", name: "Rathotsava & Maha Aarti", nameMr: "रथोस्तव व महाआरती", isNext: true },
      { time: "10:30 PM", name: "Nitya Seva & Mangalarati", nameMr: "नित्य सेवा व मंगलारती" }
    ],
    history: "Founded in 1954 by the Gowd Saraswat Brahmin (GSB) community, this is world-renowned as the wealthiest Ganpati mandal, insured for over ₹400 Crores. The pure clay eco-friendly idol is adorned with over 66 kg of pure gold and 300+ kg of silver. The mandal celebrates for 5 auspicious days with round-the-clock Vedic havans, archana, and free Annadaan feeding 50,000+ devotees daily.",
    historyMr: "१९५४ मध्ये गौड सारस्वत ब्राह्मण समाजाने स्थापन केलेले हे मंडळ जगातील सर्वात संपन्न मानले जाते. मूर्तीवर ६६ किलोपेक्षा जास्त शुद्ध सुवर्ण व ३०० किलो चांदीचे दागिने परिधान केले जातात. संपूर्ण मातीची पर्यावरणपूरक मूर्ती आणि ५ दिवस चालणारा अखंड महाप्रसाद हे याचे मुख्य आकर्षण आहे.",
    highlights: [
      "Pure clay eco-friendly idol adorned with 66kg pure gold ornaments",
      "World-class queue management — rarely exceeds 45-60 minutes",
      "Free traditional South Indian banana-leaf Annadaan (Mahaprasad)",
      "Continuous Vedic chants, South Indian nadaswaram and silver chariot rathotsav"
    ],
    highlightsMr: [
      "६६ किलो अस्सल सोन्याच्या दागिन्यांनी मढवलेली पर्यावरणपूरक शाडूची मूर्ती",
      "जगातील सर्वोत्तम रांग व्यवस्थापन — क्वचितच ४५-६० मिनिटांपेक्षा जास्त वेळ लागतो",
      "केळीच्या पानावर मोफत व अखंड सात्विक महाप्रसाद (अन्नदान)",
      "नादस्वरम संगीत, वैदिक मंत्रोच्चार व चांदीचा रथोस्तव"
    ],
    themeDekhava: "Traditional South Indian Gopuram & Silver Mandapam",
    themeDekhavaMr: "पारंपरिक दक्षिण भारतीय सुवर्ण गोपुरम व चांदीचा मंडप",
    liveStreamAvailable: true,
    streamEmbedUrl: "https://www.youtube-nocookie.com/embed/live_stream?channel=gsbsevamandal",
    prasadInfo: "Panchamrut and dry fruit packets given to every darshan visitor. Banana leaf feast in Annadaan hall.",
    prasadInfoMr: "पंचामृत व सुका मेवा प्रसाद पाकीट. तसेच मोफत अन्नछत्र भोजन उपलब्ध.",
    tags: ["Richest Ganpati", "Gold & Silver", "Annadaan Mahaprasad", "Eco-Friendly Clay"],
    gradientTheme: "from-yellow-600 via-amber-700 to-yellow-950"
  },
  {
    id: "khetwadi-12th-lane-ganraj",
    name: "Khetwadi 12th Lane (Khetwadicha Ganraj)",
    nameMr: "खेतवाडी १२वी गल्ली (खेतवाडीचा गणराज)",
    popularTitle: "The Kingdom of Giant Mourtis",
    popularTitleMr: "भव्य आणि उंच मूर्तींचे साम्राज्य",
    badge: "Towering 38-45ft Idols",
    badgeMr: "विक्रमी उंच मूर्ती",
    area: "Grant Road / Girgaon",
    areaMr: "ग्रँट रोड / गिरगाव",
    zone: "south-mumbai",
    zoneName: "South Mumbai (Girgaon & Fort)",
    zoneNameMr: "दक्षिण मुंबई (गिरगाव, ग्रँट रोड, फोर्ट)",
    foundedYear: 1959,
    coordinates: { lat: 18.9602, lng: 72.8211 },
    address: "12th Khetwadi Lane, Grant Road East, Mumbai 400004",
    addressMr: "१२ वी खेतवाडी लेन, ग्रँट रोड पूर्व, मुंबई ४००००४",
    nearestStations: [
      {
        name: "Grant Road (Western Line)",
        nameMr: "ग्रँट रोड (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "6 min walk",
        walkTimeMr: "६ मिनिटे चालत",
        distance: "500 m",
        exitTip: "East exit towards Maulana Shaukat Ali road",
        exitTipMr: "पूर्वेकडील मौलाना शौकत अली रोडकडे बाहेर पडा"
      },
      {
        name: "Charni Road (Western Line)",
        nameMr: "चर्नी रोड (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "10 min walk",
        walkTimeMr: "१० मिनिटे चालत",
        distance: "800 m",
        exitTip: "Exit towards Opera House / Girgaon",
        exitTipMr: "ऑपेरा हाऊस / गिरगावकडे बाहेर पडा"
      }
    ],
    crowd: {
      status: "moderate",
      statusText: "Moderate Line (~35 min)",
      statusTextMr: "मध्यम गर्दी (~३५ मि.)",
      generalWaitMinutes: 35,
      lastUpdated: "8 mins ago",
      lastUpdatedMr: "८ मिनिटांपूर्वी",
      reportedCount: 29,
      trend: "stable",
      notes: "Lane is crowded with photo takers. Foot movement inside the mandap is steady.",
      notesMr: "गल्लीत फोटो काढणाऱ्यांची गर्दी आहे. मंडपातील रांग सुरळीत सुरू आहे."
    },
    aartis: [
      { time: "08:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "01:30 PM", name: "Madhyan Aarti", nameMr: "दुपारची आरती" },
      { time: "08:30 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "12:00 AM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Founded in 1959, Khetwadi 12th Lane shot to international fame when it constructed a record-breaking 40-foot idol in the year 2000. It has won numerous prestigious awards including the Best Mandal in Mumbai. The entire Khetwadi stretch (from 1st to 14th lane) features iconic idols, making it one of the most vibrant walking stretches in the city.",
    historyMr: "१९५९ मध्ये स्थापन झालेल्या १२ व्या गल्लीने २००० साली तब्बल ४० फुटी विश्वविक्रमी मूर्ती साकारून इतिहास रचला. मुंबईतील सर्वोत्कृष्ट मंडळाचे अनेक पुरस्कार या मंडळाने पटकावले आहेत. खेतवाडीच्या १ ते १४ गल्ल्यांमध्ये अद्वितीय गणपती साकारले जातात.",
    highlights: [
      "Historically famous for world-record 38 to 45 foot idols",
      "Stunning real diamond and gold-plated ornaments",
      "Located in the heart of Khetwadi's 14 lanes pandal trail",
      "Just 6 minutes walk from Grant Road station"
    ],
    highlightsMr: [
      "ऐतिहासिक ३८ ते ४५ फुटी गगनचुंबी मूर्तींसाठी प्रसिद्ध",
      "अस्सल हिरे आणि सोन्याचा मुलामा असलेले अप्रतिम दागिने",
      "खेतवाडीच्या १४ गल्ल्यांच्या पदभ्रमण मार्गाचा मध्यबिंदू",
      "ग्रँट रोड रेल्वे स्थानकापासून फक्त ६ मिनिटे चालत"
    ],
    themeDekhava: "Indraprastha Celestial Crystal Palace with light synchronization",
    themeDekhavaMr: "इंद्रप्रस्थ स्फटिक महाल व आधुनिक प्रकाश योजना देखावा",
    liveStreamAvailable: true,
    prasadInfo: "Kaju Katli and laddoo prasad boxes distributed.",
    prasadInfoMr: "काजू कतली व लाडू प्रसाद बॉक्स उपलब्ध.",
    tags: ["Giant Idol", "Record Height", "Grant Road", "Khetwadi 14 Lanes"],
    gradientTheme: "from-amber-600 via-yellow-700 to-stone-900"
  },
  {
    id: "tejukaya-mandal-lalbaug",
    name: "Tejukaya Mandal (Lalbaug)",
    nameMr: "तेजुकुकाया ट्रस्ट (लालबाग)",
    popularTitle: "Pioneers of Moving Sets & Eco-Friendly Art",
    popularTitleMr: "चलचित्रे देखावे व पर्यावरणपूरक कलेचे जनक",
    badge: "Eco-Friendly Giant Art",
    badgeMr: "पर्यावरणपूरक भव्य कला",
    area: "Lalbaug",
    areaMr: "लालबाग",
    zone: "lalbaug-parel",
    zoneName: "Lalbaug & Parel",
    zoneNameMr: "लालबाग आणि परळ",
    foundedYear: 1967,
    coordinates: { lat: 18.9931, lng: 72.8339 },
    address: "Tejukaya Compound, Dr. Babasaheb Ambedkar Road, Lalbaug, Mumbai 400012",
    addressMr: "तेजुकुकाया कंपाउंड, डॉ. आंबेडकर रोड, लालबाग, मुंबई ४०००१२",
    nearestStations: [
      {
        name: "Currey Road (Central Line)",
        nameMr: "करी रोड (मध्य रेल्वे)",
        line: "Central",
        walkTime: "5 min walk",
        walkTimeMr: "५ मिनिटे चालत",
        distance: "400 m",
        exitTip: "Exit towards Bharatmata junction",
        exitTipMr: "भारतमाता जंक्शन दिशेने बाहेर पडा"
      }
    ],
    crowd: {
      status: "low",
      statusText: "Low Waiting (~20 min)",
      statusTextMr: "कमी गर्दी (~२० मि.)",
      generalWaitMinutes: 20,
      lastUpdated: "6 mins ago",
      lastUpdatedMr: "६ मिनिटांपूर्वी",
      reportedCount: 22,
      trend: "stable",
      notes: "Moving briskly. Great stop on the Lalbaug trinity route.",
      notesMr: "रांग जलद गतीने सुरू आहे. लालबाग त्रिमूर्ती मार्गावरील सर्वोत्तम थांबा."
    },
    aartis: [
      { time: "07:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "08:00 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "11:30 PM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Tejukaya Mandal, established in 1967, represents the indomitable mill-worker spirit of Lalbaug. They have pioneered paper-mache and completely biodegradable 22ft idols. Renowned sculptor Rajan Zad creates some of the most dynamic, movement-inspired postures in the city here.",
    historyMr: "१९६७ मध्ये स्थापन झालेल्या तेजुकुकाया मंडळाने गिरणगावाचा वारसा जपला आहे. कागदी लगदा आणि पर्यावरणपूरक भव्य २२ फुटी मूर्तींचे हे प्रणेते आहेत. मूर्तिकार राजन झाड यांच्या कल्पकतेतून येथे अत्यंत गतिमान मूर्ती साकारल्या जातात.",
    highlights: [
      "100% eco-friendly giant paper-mache craftmanship",
      "Dynamic action posture (वीर किंवा रौद्र मुद्रा)",
      "5 minutes from Currey Road station",
      "Integral part of the Lalbaug walking triangle"
    ],
    highlightsMr: [
      "१००% पर्यावरणपूरक कागदी लगद्याची भव्य मूर्ती",
      "अत्यंत देखणी व गतिमान मुद्रा",
      "करी रोड स्थानकापासून अवघ्या ५ मिनिटांवर",
      "लालबाग दर्शन पदभ्रमण मार्गाचा अविभाज्य भाग"
    ],
    themeDekhava: "Shivaji Maharaj Rajyabhishek coronation animated scene",
    themeDekhavaMr: "छत्रपती शिवाजी महाराज राज्याभिषेक सोहळा चलचित्र देखावा",
    liveStreamAvailable: true,
    prasadInfo: "Boondi and pedha prasad.",
    prasadInfoMr: "बुंदी व पेढा प्रसाद.",
    tags: ["Eco-Friendly", "Lalbaug Trinity", "Paper Mache", "Fast Queue"],
    gradientTheme: "from-orange-700 via-amber-800 to-stone-900"
  },
  {
    id: "andhericha-raja-azad-nagar",
    name: "Andhericha Raja (Azad Nagar)",
    nameMr: "अंधेरीचा राजा (आझाद नगर)",
    popularTitle: "The King of Mumbai Suburbs (16 Days Festival)",
    popularTitleMr: "मुंबई उपनगराचा राजा (१६ दिवसांचा उत्सव)",
    badge: "Suburbs Crown Jewel",
    badgeMr: "उपनगराचा राजा",
    area: "Andheri West",
    areaMr: "अंधेरी पश्चिम",
    zone: "suburbs-west",
    zoneName: "Western Suburbs (Andheri & Bandra)",
    zoneNameMr: "पश्चिम उपनगरे (अंधेरी, वांद्रे, विलेपार्ले)",
    foundedYear: 1966,
    coordinates: { lat: 19.1298, lng: 72.8315 },
    address: "Azad Nagar, Veera Desai Road, Andheri West, Mumbai 400053",
    addressMr: "आझाद नगर, वीरा देसाई रोड, अंधेरी पश्चिम, मुंबई ४०००५३",
    nearestStations: [
      {
        name: "Azad Nagar Metro (Line 1)",
        nameMr: "आझाद नगर मेट्रो (मार्ग १)",
        line: "Metro",
        walkTime: "3 min walk",
        walkTimeMr: "३ मिनिटे चालत",
        distance: "250 m",
        exitTip: "Exit station onto Veera Desai road towards pandal",
        exitTipMr: "वीरा देसाई रोड दिशेने बाहेर पडा"
      },
      {
        name: "Andheri (Western & Harbour Line)",
        nameMr: "अंधेरी (पश्चिम व हार्बर रेल्वे)",
        line: "Western",
        walkTime: "12 min walk",
        walkTimeMr: "१२ मिनिटे चालत",
        distance: "1.0 km",
        exitTip: "West exit, walk or take share auto to Azad Nagar",
        exitTipMr: "पश्चिम गेटवरून आझाद नगरसाठी शेअर ऑटो किंवा चालत या"
      }
    ],
    crowd: {
      status: "moderate",
      statusText: "Steady Queue (~40 min)",
      statusTextMr: "सुरळीत रांग (~४० मि.)",
      generalWaitMinutes: 40,
      lastUpdated: "5 mins ago",
      lastUpdatedMr: "५ मिनिटांपूर्वी",
      reportedCount: 38,
      trend: "stable",
      notes: "Strict traditional dress code enforced at entry. No shorts or sleeveless tops allowed.",
      notesMr: "प्रवेशद्वारावर पारंपरिक पोशाखाचा नियम काटेकोरपणे लागू आहे. शॉर्ट्स किंवा स्लीव्हलेस कपड्यांना मनाई."
    },
    aartis: [
      { time: "08:30 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "01:30 PM", name: "Bhog Aarti", nameMr: "दुपारची आरती" },
      { time: "09:00 PM", name: "Sandhya Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "12:30 AM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Founded in 1966 by the factory workers of Tata Special Steel and Golden Tobacco, Andhericha Raja holds a unique distinction: while other Ganpatis are immersed on Anant Chaturdashi (Day 10), Andhericha Raja stays for 16 days and is immersed on Sankashti Chaturthi. Millions of suburban devotees and Bollywood celebrities flock here every year.",
    historyMr: "१९६६ मध्ये टाटा स्पेशल स्टील व गोल्डन टोबॅकोच्या कामगारांनी या मंडळाची स्थापना केली. या राजाचे वैशिष्ट्य म्हणजे अनंत चतुर्दशीला विसर्जन न होता हा सोहळा तब्बल १६ दिवस चालतो आणि संकष्टी चतुर्थीला विसर्जन होते. अनेक बॉलिवूड कलाकार येथे दर्शनासाठी येतात.",
    highlights: [
      "Stays for 16 days (Visarjan on Sankashti Chaturthi)",
      "Strict traditional dress code mandatory for darshan",
      "Spectacular celebrity and suburban hub",
      "Right next to Azad Nagar Metro station"
    ],
    highlightsMr: [
      "तब्बल १६ दिवस चालणारा अनोखा उत्सव (संकष्टीला विसर्जन)",
      "दर्शनासाठी पारंपरिक पोशाखाची सक्ती (ड्रेस कोड)",
      "उपनगरातील सर्वात गर्दीचे व प्रसिद्ध मंडळ",
      "आझाद नगर मेट्रो स्थानकापासून अवघ्या ३ मिनिटांवर"
    ],
    dressCodeRule: "Traditional Indian attire mandatory. Shorts, ripped jeans, sleeveless tops strictly prohibited for darshan.",
    dressCodeRuleMr: "दर्शनासाठी भारतीय पारंपरिक पोशाख अनिवार्य. शॉर्ट्स, स्लीव्हलेस कपड्यांवर बंदी.",
    themeDekhava: "Shri Somnath Jyotirlinga Temple Architecture",
    themeDekhavaMr: "श्री सोमनाथ ज्योतिर्लिंग मंदिराची भव्य प्रतिकृती देखावा",
    liveStreamAvailable: true,
    streamEmbedUrl: "https://www.youtube-nocookie.com/embed/live_stream?channel=andhericharaja",
    prasadInfo: "Peda and dry coconut prasad handed to all devotees.",
    prasadInfoMr: "पेढा व सुके खोबरे प्रसाद वाटप.",
    tags: ["Suburbs King", "16 Days Stay", "Metro Connected", "Strict Dress Code"],
    gradientTheme: "from-purple-800 via-rose-900 to-stone-900"
  },
  {
    id: "keshavji-naik-chawl-girgaon",
    name: "Keshavji Naik Chawl (Girgaon)",
    nameMr: "केशवजी नाईक चाळ (गिरगाव)",
    popularTitle: "Mumbai's 1st Sarvajanik Ganpati (Since 1893)",
    popularTitleMr: "मुंबईचा पहिला सार्वजनिक गणपती (१८९३ पासून)",
    badge: "132 Years - 1st In Mumbai",
    badgeMr: "१३२ वे वर्ष - मुंबईतील पहिला",
    area: "Girgaon",
    areaMr: "गिरगाव",
    zone: "south-mumbai",
    zoneName: "South Mumbai (Girgaon & Fort)",
    zoneNameMr: "दक्षिण मुंबई (गिरगाव, ग्रँट रोड, फोर्ट)",
    foundedYear: 1893,
    coordinates: { lat: 18.9554, lng: 72.8203 },
    address: "Keshavji Naik Chawl, Khadilkar Road, Girgaon, Mumbai 400004",
    addressMr: "केशवजी नाईक चाळ, खाडिलकर रोड, गिरगाव, मुंबई ४००००४",
    nearestStations: [
      {
        name: "Charni Road (Western Line)",
        nameMr: "चर्नी रोड (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "8 min walk",
        walkTimeMr: "८ मिनिटे चालत",
        distance: "650 m",
        exitTip: "Exit East towards Girgaon Gaiwadi and walk to Khadilkar road",
        exitTipMr: "पूर्वेकडे गिरगाव गायवाडीच्या दिशेने बाहेर पडा"
      },
      {
        name: "Grant Road (Western Line)",
        nameMr: "ग्रँट रोड (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "11 min walk",
        walkTimeMr: "११ मिनिटे चालत",
        distance: "900 m",
        exitTip: "Walk south towards Khadilkar road junction",
        exitTipMr: "खाडिलकर रोड जंक्शनच्या दिशेने चालत या"
      }
    ],
    crowd: {
      status: "low",
      statusText: "Peaceful Darshan (~15 min)",
      statusTextMr: "शांत आणि प्रसन्न दर्शन (~१५ मि.)",
      generalWaitMinutes: 15,
      lastUpdated: "10 mins ago",
      lastUpdatedMr: "१० मिनिटांपूर्वी",
      reportedCount: 18,
      trend: "stable",
      notes: "Very peaceful, serene heritage ambience. Devotees can sit in the courtyard and enjoy bhajans.",
      notesMr: "अतिशय शांत आणि पारंपरिक वातावरण. चाळीच्या अंगणात बसून भजन ऐकण्याची सोय."
    },
    aartis: [
      { time: "07:30 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "01:00 PM", name: "Madhyan Aarti", nameMr: "दुपारची आरती" },
      { time: "08:00 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "10:30 PM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Founded in 1893 inspired directly by Lokmanya Bal Gangadhar Tilak to unite Indians against British colonial rule, Keshavji Naik Chawl holds the sacred status of being Mumbai's VERY FIRST Sarvajanik Ganpati. In a world of commercialization and giant sets, this mandal deliberately maintains its 130+ year old tradition: a sweet 2.5-foot Shadu clay idol, wooden chawl courtyard pandal, classical cultural programmes, and no loud Bollywood speakers.",
    historyMr: "१८९३ मध्ये लोकमान्य बाळ गंगाधर टिळकांच्या प्रेरणेतून पारतंत्र्याच्या काळात स्वातंत्र्यलढ्यासाठी लोकसंग्रह व्हावा म्हणून या पहिल्या सार्वजनिक गणपतीची स्थापना झाली. व्यावसायिकतेपासून दूर राहत मंडळाने आजही अडीच फुटांची शाडूची मूर्ती आणि पारंपरिक शांतता अबाधित ठेवली आहे.",
    highlights: [
      "Mumbai's first Sarvajanik Ganeshotsav mandal (1893)",
      "Visited personally by Lokmanya Tilak in 1901",
      "Pure traditional 2.5-foot eco-friendly Shadu clay idol",
      "Intimate courtyard heritage atmosphere in historic Girgaon chawl"
    ],
    highlightsMr: [
      "मुंबईतील सर्वात पहिला ऐतिहासिक सार्वजनिक गणेशोत्सव (१८९३)",
      "१९०१ मध्ये स्वतः लोकमान्य टिळकांनी प्रत्यक्ष भेट दिलेले स्थान",
      "अस्सल शाडूच्या मातीची पारंपरिक अडीच फुटांची मनमोहक मूर्ती",
      "गिरगावच्या ऐतिहासिक चाळीतील अस्सल मराठमोळे पारंपरिक वातावरण"
    ],
    themeDekhava: "Authentic 1893 wooden heritage pandal preservation",
    themeDekhavaMr: "१८९३ ची पारंपरिक लाकडी मांडव रचना व ऐतिहासिक वारसा",
    liveStreamAvailable: false,
    prasadInfo: "Homemade Modaks and Pedha offered with pure devotion.",
    prasadInfoMr: "चाळीतील रहिवाशांनी तयार केलेले उकडीचे मोदक व पेढा प्रसाद.",
    tags: ["Historic 1893", "First In Mumbai", "Lokmanya Tilak", "Peaceful Heritage"],
    gradientTheme: "from-amber-800 via-orange-950 to-stone-900"
  },
  {
    id: "fortcha-raja-fort-vibhag",
    name: "Fortcha Raja (Fort Vibhag)",
    nameMr: "फोर्टचा राजा (फोर्ट विभाग)",
    popularTitle: "The Royal King of South Mumbai's Heritage Heart",
    popularTitleMr: "दक्षिण मुंबईच्या ऐतिहासिक फोर्टचा राजा",
    badge: "Royal Palace Themes",
    badgeMr: "राजेशाही महाल",
    area: "Fort, South Mumbai",
    areaMr: "फोर्ट, दक्षिण मुंबई",
    zone: "south-mumbai",
    zoneName: "South Mumbai (Girgaon & Fort)",
    zoneNameMr: "दक्षिण मुंबई (गिरगाव, ग्रँट रोड, फोर्ट)",
    foundedYear: 1956,
    coordinates: { lat: 18.9351, lng: 72.8362 },
    address: "Mint Road, Ballard Estate, Fort, Mumbai 400001",
    addressMr: "मिंट रोड, बॅलार्ड इस्टेट, फोर्ट, मुंबई ४००००१",
    nearestStations: [
      {
        name: "CSMT (Central Line & Express)",
        nameMr: "सीएसएमटी (मध्य रेल्वे)",
        line: "Central",
        walkTime: "5 min walk",
        walkTimeMr: "५ मिनिटे चालत",
        distance: "450 m",
        exitTip: "Exit towards General Post Office (GPO) / Mint road",
        exitTipMr: "जीपीओ / मिंट रोड दिशेने बाहेर पडा"
      },
      {
        name: "Churchgate (Western Line)",
        nameMr: "चर्चगेट (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "14 min walk",
        walkTimeMr: "१४ मिनिटे चालत",
        distance: "1.1 km",
        exitTip: "Walk east across Hutatma Chowk towards Mint road",
        exitTipMr: "हुतात्मा चौक ओलांडून मिंट रोडकडे या"
      }
    ],
    crowd: {
      status: "moderate",
      statusText: "Brisk Moving (~25 min)",
      statusTextMr: "जलद चालणारी रांग (~२५ मि.)",
      generalWaitMinutes: 25,
      lastUpdated: "12 mins ago",
      lastUpdatedMr: "१२ मिनिटांपूर्वी",
      reportedCount: 16,
      trend: "decreasing",
      notes: "Evening crowd picked up. Beautiful architectural lighting around the set.",
      notesMr: "संध्याकाळी गर्दी वाढली आहे. महालावरील विद्युत रोषणाई विलोभनीय दिसत आहे."
    },
    aartis: [
      { time: "08:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "08:30 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "11:30 PM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Founded in 1956 in Mumbai's historic British-era colonial banking and trading district of Fort, Fortcha Raja is celebrated for recreating life-size replicas of famous royal Indian palaces (such as Mysore Palace, Amber Fort, and Padmanabhaswamy Temple). Situated right near CSMT terminus, it is easily accessible to commuters.",
    historyMr: "१९५६ मध्ये फोर्ट विभागात स्थापन झालेले हे मंडळ भव्य राजवाड्यांच्या प्रतिकृतींसाठी प्रसिद्ध आहे. म्हैसूर पॅलेस, आमेर किल्ला यांसारखे भव्य देखावे येथे साकारले जातात. सीएसएमटी रेल्वे स्थानकाजवळ असल्याने प्रवाशांना दर्शनासाठी अत्यंत सोयीचे आहे.",
    highlights: [
      "Famous for magnificent royal palace architecture",
      "Just 5 minutes walk from CSMT Railway Station",
      "Wide open streets with smooth crowd dispersal",
      "South Mumbai's prime corporate and business district attraction"
    ],
    highlightsMr: [
      "राजेशाही राजवाड्यांच्या भव्य प्रतिकृतींसाठी प्रसिद्ध",
      "सीएसएमटी स्थानकावरून अवघ्या ५ मिनिटांवर",
      "रुंद रस्त्यांमुळे गर्दीचे उत्तम नियंत्रण",
      "दक्षिण मुंबईतील सर्वात लोकप्रिय मंडळ"
    ],
    themeDekhava: "Mysore Palace Golden Durbar Hall",
    themeDekhavaMr: "म्हैसूर पॅलेस सुवर्ण दरबार हॉल देखावा",
    liveStreamAvailable: true,
    prasadInfo: "Laddoo prasad packs distributed to devotees.",
    prasadInfoMr: "लाडू प्रसाद पाकीट वाटप.",
    tags: ["CSMT Near", "Palace Themes", "South Mumbai", "Royal Splendor"],
    gradientTheme: "from-amber-700 via-yellow-800 to-stone-900"
  },
  {
    id: "sahyadri-krida-mandal-chembur",
    name: "Sahyadri Krida Mandal (Chembur)",
    nameMr: "सह्याद्री क्रीडा मंडळ (चेंबर)",
    popularTitle: "Pioneers of Bollywood Cinematic Theme Sets",
    popularTitleMr: "भव्य बॉलीवूड व जागतिक कला देखावे",
    badge: "Grand Cinematic Dekhavas",
    badgeMr: "भव्य देखावे",
    area: "Tilak Nagar, Chembur",
    areaMr: "टिळक नगर, चेंबूर",
    zone: "suburbs-east",
    zoneName: "Eastern Suburbs (Chembur & Ghatkopar)",
    zoneNameMr: "पूर्व उपनगरे (चेंबूर, घाटकोपर, मुलुंड)",
    foundedYear: 1975,
    coordinates: { lat: 19.0682, lng: 72.8988 },
    address: "Tilak Nagar Ground, Chembur West, Mumbai 400089",
    addressMr: "टिळक नगर मैदान, चेंबूर पश्चिम, मुंबई ४०००८९",
    nearestStations: [
      {
        name: "Tilak Nagar (Harbour Line)",
        nameMr: "टिळक नगर (हार्बर रेल्वे)",
        line: "Harbour",
        walkTime: "4 min walk",
        walkTimeMr: "४ मिनिटे चालत",
        distance: "300 m",
        exitTip: "Exit North directly towards Tilak Nagar grounds",
        exitTipMr: "टिळक नगर मैदानाकडे उत्तर गेट"
      },
      {
        name: "Kurla (Central & Harbour Line)",
        nameMr: "कुर्ला (मध्य व हार्बर रेल्वे)",
        line: "Central",
        walkTime: "14 min walk",
        walkTimeMr: "१४ मिनिटे चालत",
        distance: "1.2 km",
        exitTip: "Take East exit and take auto to Tilak Nagar",
        exitTipMr: "पूर्व गेटवरून टिळक नगरसाठी ऑटो घ्या"
      }
    ],
    crowd: {
      status: "moderate",
      statusText: "Moderate Line (~35 min)",
      statusTextMr: "मध्यम गर्दी (~३५ मि.)",
      generalWaitMinutes: 35,
      lastUpdated: "9 mins ago",
      lastUpdatedMr: "९ मिनिटांपूर्वी",
      reportedCount: 27,
      trend: "rising",
      notes: "Night crowd coming to see the exterior lighting and light show.",
      notesMr: "रात्रीच्या वेळी विद्युत रोषणाई पाहण्यासाठी गर्दी वाढली आहे."
    },
    aartis: [
      { time: "08:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "08:30 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "11:30 PM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Founded in 1975, Sahyadri Krida Mandal in Tilak Nagar Chembur is renowned throughout Maharashtra for setting new benchmarks in thematic art direction. Working with top Bollywood production designers (such as the late Nitin Desai), they have created stunning replicas of St. Peter's Basilica, Varanasi Ghats, the Taj Mahal, and ancient Indian caves.",
    historyMr: "१९७५ मध्ये स्थापन झालेल्या सह्याद्री क्रीडा मंडळाने गणेशोत्सवात भव्य कला दिग्दर्शनाचा नवा पायंडा पाडला. बॉलीवूडचे दिग्गज कलादिग्दर्शक येथे अप्रतिम देखावे उभे करतात.",
    highlights: [
      "Top-tier Bollywood cinematic art installations",
      "Huge open grounds with spectacular exterior facades",
      "4 minutes from Tilak Nagar Harbour railway station",
      "Premier attraction in Eastern Mumbai suburbs"
    ],
    highlightsMr: [
      "बॉलीवूड दर्जाचे भव्य कला दिग्दर्शन व देखावे",
      "भव्य मैदानामुळे मोकळी जागा व सुंदर रोषणाई",
      "टिळक नगर हार्बर स्थानकावरून फक्त ४ मिनिटांवर",
      "पूर्व उपनगरातील सर्वात भव्य व लोकप्रिय गणपती"
    ],
    themeDekhava: "Varanasi Ganga Aarti Ghat with water cascades",
    themeDekhavaMr: "वाराणसी गंगा आरती घाट व वाहत्या पाण्याचे कारंजे",
    liveStreamAvailable: true,
    prasadInfo: "Dry fruits and laddoo prasad packets.",
    prasadInfoMr: "सुका मेवा व लाडू प्रसाद वाटप.",
    tags: ["Bollywood Themes", "Tilak Nagar", "Grand Facade", "Harbour Line"],
    gradientTheme: "from-blue-900 via-indigo-950 to-stone-900"
  },
  {
    id: "girgaon-cha-raja-nikadwari-lane",
    name: "Girgaon Cha Raja (Nikadwari Lane)",
    nameMr: "गिरगावचा राजा (निकदवारी लेन)",
    popularTitle: "Maharashtra's Tallest 25-Foot Shadu Mati Eco Idol",
    popularTitleMr: "महाराष्ट्रातील सर्वात उंच २५ फुटी शाडू मातीची मूर्ती",
    badge: "25ft Pure Eco Clay",
    badgeMr: "२५ फूट शुद्ध शाडू माती",
    area: "Girgaon",
    areaMr: "गिरगाव",
    zone: "south-mumbai",
    zoneName: "South Mumbai (Girgaon & Fort)",
    zoneNameMr: "दक्षिण मुंबई (गिरगाव, ग्रँट रोड, फोर्ट)",
    foundedYear: 1938,
    coordinates: { lat: 18.9575, lng: 72.8228 },
    address: "Nikadwari Lane, J.S.S. Road, Girgaon, Mumbai 400004",
    addressMr: "निकदवारी लेन, जे.एस.एस. रोड, गिरगाव, मुंबई ४००००४",
    nearestStations: [
      {
        name: "Charni Road (Western Line)",
        nameMr: "चर्नी रोड (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "6 min walk",
        walkTimeMr: "६ मिनिटे चालत",
        distance: "500 m",
        exitTip: "Exit towards J.S.S. Road Girgaon",
        exitTipMr: "जे.एस.एस. रोड गिरगावकडे बाहेर पडा"
      }
    ],
    crowd: {
      status: "low",
      statusText: "Short Wait (~20 min)",
      statusTextMr: "कमी वेळ (~२० मि.)",
      generalWaitMinutes: 20,
      lastUpdated: "11 mins ago",
      lastUpdatedMr: "११ मिनिटांपूर्वी",
      reportedCount: 19,
      trend: "stable",
      notes: "Quick darshan line. Volunteers guiding devotees smoothly.",
      notesMr: "दर्शनाची रांग वेगाने हलते आहे. स्वयंसेवक उत्तम मार्गदर्शन करत आहेत."
    },
    aartis: [
      { time: "08:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "08:00 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "11:00 PM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Founded in 1938, Girgaon Cha Raja holds a remarkable environmental and sculptural record: while giant idols across the city are predominantly made of Plaster of Paris, this 25-foot mammoth idol is crafted entirely out of pure Shadu Mati (natural clay) imported from Bhavnagar, Gujarat, sculpted by master artist Rajan Khatu.",
    historyMr: "१९३८ मध्ये स्थापन झालेला गिरगावचा राजा संपूर्ण महाराष्ट्रात पर्यावरण संवर्धनाचा आदर्श आहे. २५ फुटांची ही अवाढव्य मूर्ती पीओपी ऐवजी संपूर्ण शुद्ध शाडूच्या मातीपासून साकारली जाते.",
    highlights: [
      "Tallest pure eco-friendly Shadu clay idol in Maharashtra (25 feet)",
      "Traditional dhol-tasha pathak welcome",
      "Minutes from Charni Road railway station and Girgaon Chowpatty",
      "Authentic Girgaon cultural hub"
    ],
    highlightsMr: [
      "महाराष्ट्रातील सर्वात उंच २५ फुटी पर्यावरणपूरक शाडूची मूर्ती",
      "पारंपरिक ढोल-ताशा पथकांची अप्रतिम सलामी",
      "चर्नी रोड स्थानक आणि गिरगाव चौपाटीपासून जवळ",
      "अस्सल गिरगाव संस्कृतीचे प्रतीक"
    ],
    themeDekhava: "Natural Floral Forest Theme with Vrindavan peacocks",
    themeDekhavaMr: "नैसर्गिक पुष्पवाटिका व वृंदावन मोर देखावा",
    liveStreamAvailable: true,
    prasadInfo: "Coconut burfi and pedha prasad.",
    prasadInfoMr: "नारळ बर्फी व पेढा प्रसाद.",
    tags: ["Eco-Friendly 25ft", "Pure Clay", "Girgaon", "Charni Road"],
    gradientTheme: "from-emerald-800 via-teal-950 to-stone-900"
  },
  {
    id: "gsb-wadala-ganpati-ram-mandir",
    name: "GSB Wadala Ganpati (Ram Mandir)",
    nameMr: "जीएसबी वडाळा गणपती (राम मंदिर)",
    popularTitle: "10-Day Traditional Vedic & Silver Mandir Ganeshotsav",
    popularTitleMr: "१० दिवसांचा पारंपरिक वैदिक व रौप्य मंदिर उत्सव",
    badge: "10 Days Vedic Rites",
    badgeMr: "१० दिवस वैदिक पूजा",
    area: "Wadala",
    areaMr: "वडाळा",
    zone: "central-mumbai",
    zoneName: "Central Mumbai (Sion & Dadar)",
    zoneNameMr: "मध्य मुंबई (शीव, दादर, वडाळा)",
    foundedYear: 1955,
    coordinates: { lat: 19.0195, lng: 72.8614 },
    address: "Shri Ram Mandir, Katrak Road, Wadala West, Mumbai 400031",
    addressMr: "श्री राम मंदिर, कात्रक रोड, वडाळा पश्चिम, मुंबई ४०००३१",
    nearestStations: [
      {
        name: "Wadala Road (Harbour Line)",
        nameMr: "वडाळा रोड (हार्बर रेल्वे)",
        line: "Harbour",
        walkTime: "6 min walk",
        walkTimeMr: "६ मिनिटे चालत",
        distance: "500 m",
        exitTip: "Exit West towards Katrak road",
        exitTipMr: "कात्रक रोड दिशेने पश्चिम गेट"
      },
      {
        name: "Dadar (Central & Western)",
        nameMr: "दादर (मध्य व पश्चिम रेल्वे)",
        line: "Central",
        walkTime: "18 min walk / 6 min taxi",
        walkTimeMr: "१८ मि. चालत / ६ मि. टॅक्सी",
        distance: "1.6 km",
        exitTip: "East exit, take Wadala bus or taxi",
        exitTipMr: "दादर पूर्वेकडून वडाळ्यासाठी टॅक्सी"
      }
    ],
    crowd: {
      status: "low",
      statusText: "Peaceful Line (~15 min)",
      statusTextMr: "शांत रांग (~१५ मि.)",
      generalWaitMinutes: 15,
      lastUpdated: "14 mins ago",
      lastUpdatedMr: "१४ मिनिटांपूर्वी",
      reportedCount: 15,
      trend: "stable",
      notes: "Devotees can sit in the hall and observe the Vedic Havans.",
      notesMr: "मंडपात बसून प्रत्यक्ष हवन व पूजा पाहण्याची उत्तम सोय आहे."
    },
    aartis: [
      { time: "07:00 AM", name: "Kakad Aarti", nameMr: "काकड आरती" },
      { time: "12:30 PM", name: "Madhyanna Pooja", nameMr: "मध्यान्ह पूजा" },
      { time: "07:30 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "09:30 PM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "While GSB Kings Circle concludes on Day 5, the GSB Sarvajanik Ganeshotsav at Ram Mandir Wadala continues for the entire 10 days of the festival. Nestled inside the historic Ram Mandir premises, it offers an exceptionally serene temple ambience, silver-encrusted sanctum, and traditional Dakshina rituals.",
    historyMr: "किंग्ज सर्कलचा उत्सव ५ दिवसांचा असताना वडाळा राम मंदिरातील हा उत्सव संपूर्ण १० दिवस चालतो. पारंपरिक वैदिक मंत्रोच्चार, सुवर्ण-चांदीचे आभूषण आणि मंदिराचे शांत वातावरण हे याचे वैशिष्ट्य आहे.",
    highlights: [
      "Runs for full 10 days with continuous Vedic poojas",
      "Serene temple environment away from heavy traffic",
      "Silver sanctum and authentic South Indian prasad",
      "Easy access from Wadala Road station"
    ],
    highlightsMr: [
      "संपूर्ण १० दिवस चालणारा पवित्र धार्मिक उत्सव",
      "गर्दीच्या गोंगाटापासून दूर अतिशय शांत वातावरण",
      "चांदीचा गर्भगृह आणि सात्विक प्रसाद",
      "वडाळा रोड रेल्वे स्थानकापासून हाकेच्या अंतरावर"
    ],
    themeDekhava: "Pure Silver Sanctum Sanctorum (चांदीचा गर्भगृह)",
    themeDekhavaMr: "चांदीचा भव्य गर्भगृह व पारंपरिक दीपमाळा",
    liveStreamAvailable: true,
    prasadInfo: "Panchamrut and Modak prasad.",
    prasadInfoMr: "पंचामृत व मोदक प्रसाद.",
    tags: ["10 Days GSB", "Temple Ambience", "Vedic Rituals", "Silver Sanctum"],
    gradientTheme: "from-amber-600 via-stone-800 to-stone-950"
  },
  {
    id: "tulsiwadi-cha-maharaja-tardeo",
    name: "Tulsiwadi Cha Maharaja (Tardeo)",
    nameMr: "तुळशीवाडीचा महाराजा (ताडदेव)",
    popularTitle: "The Sovereign of Tardeo",
    popularTitleMr: "ताडदेवचा चक्रवर्ती महाराजा",
    badge: "Majestic Horse/Rath Idols",
    badgeMr: "ऐटदार मूर्ती",
    area: "Tardeo",
    areaMr: "ताडदेव",
    zone: "south-mumbai",
    zoneName: "South Mumbai (Girgaon & Fort)",
    zoneNameMr: "दक्षिण मुंबई (गिरगाव, ग्रँट रोड, फोर्ट)",
    foundedYear: 1939,
    coordinates: { lat: 18.9691, lng: 72.8164 },
    address: "Tulsiwadi, Tardeo Road, Mumbai 400034",
    addressMr: "तुळशीवाडी, ताडदेव रोड, मुंबई ४०००३४",
    nearestStations: [
      {
        name: "Mumbai Central (Western & Express)",
        nameMr: "मुंबई सेंट्रल (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "8 min walk",
        walkTimeMr: "८ मिनिटे चालत",
        distance: "650 m",
        exitTip: "Exit West towards Tardeo road",
        exitTipMr: "ताडदेव रोड दिशेने पश्चिम गेट"
      }
    ],
    crowd: {
      status: "low",
      statusText: "Smooth Queue (~20 min)",
      statusTextMr: "सुरळीत रांग (~२० मि.)",
      generalWaitMinutes: 20,
      lastUpdated: "15 mins ago",
      lastUpdatedMr: "१५ मिनिटांपूर्वी",
      reportedCount: 12,
      trend: "stable",
      notes: "Quick darshan. Ideal to combine with Grant Road and Khetwadi mandals.",
      notesMr: "जलद दर्शन. खेतवाडी आणि गिरगावच्या दर्शन मार्गावर हा उत्तम थांबा आहे."
    },
    aartis: [
      { time: "08:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "08:30 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true }
    ],
    history: "Formed in 1939, Tulsiwadi Cha Maharaja is known for its regal, majestic posture, often seated on decorated steeds or royal chariots, reflecting valor and grace. The mandal has won awards for social welfare and disaster relief.",
    historyMr: "१९३९ मध्ये स्थापन झालेला हा महाराजा आपल्या रुबाबदार आणि राजेशाही बैठकीसाठी ओळखला जातो. रथावर अथवा घोड्यावर स्वार झालेली मूर्ती अत्यंत विलोभनीय दिसते.",
    highlights: [
      "Royal chariot and steed-mounted postures",
      "Walking distance from Mumbai Central station",
      "Smooth queue and welcoming local community",
      "Close to Heera Panna & Haji Ali circuit"
    ],
    highlightsMr: [
      "रथावर स्वार असलेली ऐटदार राजेशाही मुद्रा",
      "मुंबई सेंट्रल रेल्वे स्थानकापासून चालत ८ मिनिटांवर",
      "शांत व शिस्तबद्ध दर्शन व्यवस्था",
      "ताडदेव-हाजी अली परिसरातील मुख्य आकर्षण"
    ],
    themeDekhava: "Rajasthani Royal Fort Archway",
    themeDekhavaMr: "राजस्थानी शाही महाल प्रवेशद्वार",
    liveStreamAvailable: false,
    prasadInfo: "Besan laddoo and pedha prasad.",
    prasadInfoMr: "बेसन लाडू व पेढा प्रसाद.",
    tags: ["Tardeo", "Mumbai Central Near", "Regal Idol", "Smooth Flow"],
    gradientTheme: "from-red-800 via-amber-900 to-stone-900"
  },
  {
    id: "balgopal-mitra-mandal-vile-parle",
    name: "Balgopal Mitra Mandal (Vile Parle)",
    nameMr: "बालगोपाल मित्र मंडळ (विलेपार्ले)",
    popularTitle: "Cultural Heritage of Vile Parle East",
    popularTitleMr: "विलेपार्ले पूर्वचा सांस्कृतिक गणपती",
    badge: "Marathi Cultural Hub",
    badgeMr: "सांस्कृतिक वारसा",
    area: "Vile Parle East",
    areaMr: "विलेपार्ले पूर्व",
    zone: "suburbs-west",
    zoneName: "Western Suburbs (Andheri & Bandra)",
    zoneNameMr: "पश्चिम उपनगरे (अंधेरी, वांद्रे, विलेपार्ले)",
    foundedYear: 1989,
    coordinates: { lat: 19.0984, lng: 72.8492 },
    address: "Subhash Road, Vile Parle East, Mumbai 400057",
    addressMr: "सुभाष रोड, विलेपार्ले पूर्व, मुंबई ४०००५७",
    nearestStations: [
      {
        name: "Vile Parle (Western Line)",
        nameMr: "विलेपार्ले (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "5 min walk",
        walkTimeMr: "५ मिनिटे चालत",
        distance: "400 m",
        exitTip: "East exit towards Nehru Road / Subhash Road",
        exitTipMr: "नेहरू रोड / सुभाष रोड दिशेने पूर्व गेट"
      }
    ],
    crowd: {
      status: "low",
      statusText: "Fast Moving (~15 min)",
      statusTextMr: "जलद चालणारी रांग (~१५ मि.)",
      generalWaitMinutes: 15,
      lastUpdated: "18 mins ago",
      lastUpdatedMr: "१८ मिनिटांपूर्वी",
      reportedCount: 14,
      trend: "stable",
      notes: "Serene cultural atmosphere. Great to visit with families and elders.",
      notesMr: "अतिशय शांत व सांस्कृतिक वातावरण. कुटुंबासह दर्शनासाठी उत्तम."
    },
    aartis: [
      { time: "08:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "08:00 PM", name: "Sandhya Maha Aarti", nameMr: "संध्या महाआरती", isNext: true }
    ],
    history: "Located in Mumbai's cultural heartland of Vile Parle East, this mandal represents authentic Maharashtrian cultural celebrations with classical music recitals, natyasangeet, and educational scholarships.",
    historyMr: "विलेपार्ले या सांस्कृतिक नगरीत वसलेले हे मंडळ शास्त्रीय संगीत, नाट्यसंगीत आणि सामाजिक उपक्रमांसाठी प्रसिद्ध आहे.",
    highlights: [
      "Pure cultural and musical atmosphere",
      "5 minutes from Vile Parle station",
      "Ideal family darshan stop",
      "Famous for traditional rangoli art exhibitions"
    ],
    highlightsMr: [
      "अस्सल सांस्कृतिक व सांगीतिक मेजवानी",
      "विलेपार्ले रेल्वे स्थानकापासून ५ मिनिटांवर",
      "कुटुंबीयांसह शांत दर्शनासाठी सर्वोत्तम",
      "पारंपरिक रांगोळी प्रदर्शनांचे आयोजन"
    ],
    themeDekhava: "Wada Architecture of Peshwa Era",
    themeDekhavaMr: "पेशवेकालीन मराठमोळा वाडा देखावा",
    liveStreamAvailable: false,
    prasadInfo: "Ukadiche Modak on Chaturthi days.",
    prasadInfoMr: "चतुर्थीच्या दिवशी उकडीचे मोदक प्रसाद.",
    tags: ["Vile Parle", "Family Friendly", "Cultural Hub", "Short Wait"],
    gradientTheme: "from-amber-700 via-orange-900 to-stone-900"
  },
  {
    id: "chandanwadi-cha-raja-marine-lines",
    name: "Chandanwadi Cha Raja (Marine Lines)",
    nameMr: "चंदनवाडीचा राजा (मरीन लाईन्स)",
    popularTitle: "The Pride of Marine Lines & Metro Junction",
    popularTitleMr: "मरीन लाईन्सचा वैभवशाली राजा",
    badge: "Golden Crown & Rich Heritage",
    badgeMr: "सुवर्ण मुकुट",
    area: "Marine Lines / Kalbadevi",
    areaMr: "मरीन लाईन्स / काळबादेवी",
    zone: "south-mumbai",
    zoneName: "South Mumbai (Girgaon & Fort)",
    zoneNameMr: "दक्षिण मुंबई (गिरगाव, ग्रँट रोड, फोर्ट)",
    foundedYear: 1977,
    coordinates: { lat: 18.9482, lng: 72.8258 },
    address: "Chandanwadi, JSS Road, Marine Lines, Mumbai 400002",
    addressMr: "चंदनवाडी, जेएसएस रोड, मरीन लाईन्स, मुंबई ४००००२",
    nearestStations: [
      {
        name: "Marine Lines (Western Line)",
        nameMr: "मरीन लाईन्स (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "4 min walk",
        walkTimeMr: "४ मिनिटे चालत",
        distance: "350 m",
        exitTip: "East exit towards Princess Street / Chandanwadi",
        exitTipMr: "प्रिन्सेस स्ट्रीट / चंदनवाडी दिशेने पूर्व गेट"
      }
    ],
    crowd: {
      status: "low",
      statusText: "Smooth Darshan (~20 min)",
      statusTextMr: "सुरळीत दर्शन (~२० मि.)",
      generalWaitMinutes: 20,
      lastUpdated: "10 mins ago",
      lastUpdatedMr: "१० मिनिटांपूर्वी",
      reportedCount: 17,
      trend: "stable",
      notes: "Steady flow. Pandal is spacious with clear entry and exit gates.",
      notesMr: "प्रवेश व बाहेर पडण्याचे मार्ग स्वतंत्र असल्याने दर्शन जलद होते."
    },
    aartis: [
      { time: "08:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "08:30 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true }
    ],
    history: "Chandanwadi Cha Raja is celebrated for its distinctive pure gold crown (Mukut) weighing several kilograms, designed with exquisite craftsmanship. Located close to Marine Lines station, it is on the path taken by thousands of walkers.",
    historyMr: "चंदनवाडीचा राजा आपल्या सोन्याच्या भव्य मुकुटासाठी व सुबक कलाकृतीसाठी प्रसिद्ध आहे. मरीन लाईन्स स्थानकाजवळ असल्याने दक्षिण मुंबईतील भाविकांचे हे मोठे श्रद्धास्थान आहे.",
    highlights: [
      "Pure gold Mukut and traditional ornaments",
      "Just 4 minutes from Marine Lines railway station",
      "Convenient link between Marine Lines and Girgaon pandals",
      "Smooth crowd dispersal system"
    ],
    highlightsMr: [
      "अस्सल सोन्याचा नक्षीदार मुकुट",
      "मरीन लाईन्स स्थानकावरून अवघ्या ४ मिनिटांवर",
      "गिरगाव व मरीन लाईन्स दर्शन मार्गावरील सोयीचा थांबा",
      "विशाल मंडप व स्वतंत्र दर्शन रांगा"
    ],
    themeDekhava: "Swarna Mahal with crystal chandeliers",
    themeDekhavaMr: "सुवर्ण महाल व स्फटिकांची रोषणाई देखावा",
    liveStreamAvailable: true,
    prasadInfo: "Kaju barfi and laddoo prasad packets.",
    prasadInfoMr: "काजू बर्फी व लाडू प्रसाद वाटप.",
    tags: ["Marine Lines", "Gold Crown", "South Mumbai", "Near Station"],
    gradientTheme: "from-amber-600 via-orange-800 to-stone-900"
  },
  {
    id: "parel-cha-raja-narepark",
    name: "Parel Cha Raja (Narepark)",
    nameMr: "परळचा राजा (नारेपार्क)",
    popularTitle: "The Historic Mill-Workers King Since 1947",
    popularTitleMr: "१९४७ पासून गिरणी कामगारांचा परळचा राजा",
    badge: "Postures in Standing Pose",
    badgeMr: "उभी ध्यानस्थ मुद्रा",
    area: "Parel",
    areaMr: "परळ",
    zone: "lalbaug-parel",
    zoneName: "Lalbaug & Parel",
    zoneNameMr: "लालबाग आणि परळ",
    foundedYear: 1947,
    coordinates: { lat: 18.9982, lng: 72.8415 },
    address: "Narepark Ground, Parel, Mumbai 400012",
    addressMr: "नारेपार्क मैदान, परळ, मुंबई ४०००१२",
    nearestStations: [
      {
        name: "Parel (Central Line)",
        nameMr: "परळ (मध्य रेल्वे)",
        line: "Central",
        walkTime: "6 min walk",
        walkTimeMr: "६ मिनिटे चालत",
        distance: "500 m",
        exitTip: "East exit towards Narepark",
        exitTipMr: "नारेपार्क दिशेने पूर्व गेट"
      },
      {
        name: "Elphinstone / Prabhadevi (Western Line)",
        nameMr: "प्रभादेवी (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "9 min walk",
        walkTimeMr: "९ मिनिटे चालत",
        distance: "750 m",
        exitTip: "Take East FOB connection to Parel side",
        exitTipMr: "परळ बाजूचा पादचारी पूल वापरा"
      }
    ],
    crowd: {
      status: "moderate",
      statusText: "Smooth Queue (~25 min)",
      statusTextMr: "सुरळीत रांग (~२५ मि.)",
      generalWaitMinutes: 25,
      lastUpdated: "8 mins ago",
      lastUpdatedMr: "८ मिनिटांपूर्वी",
      reportedCount: 20,
      trend: "stable",
      notes: "Spacious Narepark ground ensures comfortable movement for families.",
      notesMr: "नारेपार्कचे विशाल मैदान असल्यामुळे गर्दीचा त्रास होत नाही."
    },
    aartis: [
      { time: "07:30 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "08:30 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true },
      { time: "11:30 PM", name: "Shej Aarti", nameMr: "शेज आरती" }
    ],
    history: "Founded in 1947, the year of Indian Independence, Parel Cha Raja is famed for its iconic standing (उभी मुद्रा) idol postures sculpted by master craftsmen. Set in the lush open grounds of Narepark, it carries forward the pride and solidarity of Mumbai's textile mill heritage.",
    historyMr: "स्वातंत्र्यप्राप्तीच्या वर्षी म्हणजेच १९४७ मध्ये या मंडळाची स्थापना झाली. परळचा राजा हा आपल्या देखण्या उभ्या मुद्रेसाठी जगभर ओळखला जातो. नारेपार्कच्या भव्य मैदानात हा उत्सव थाटामाटात साजरा होतो.",
    highlights: [
      "Famous for graceful standing idol poses (उभी मुद्रा)",
      "Set in spacious Narepark grounds with smooth crowd movement",
      "Short walk from Parel (Central) and Prabhadevi (Western) stations",
      "Rich 78-year independence era heritage"
    ],
    highlightsMr: [
      "अत्यंत मनमोहक व रुबाबदार उभी मुद्रा",
      "नारेपार्कच्या प्रशस्त मैदानात उत्तम व्यवस्था",
      "परळ व प्रभादेवी दोन्ही रेल्वे स्थानकांपासून हाकेच्या अंतरावर",
      "स्वातंत्र्य काळातील ७८ वर्षांचा वैभवशाली इतिहास"
    ],
    themeDekhava: "Independence Memorial Heritage Palace",
    themeDekhavaMr: "स्वातंत्र्य स्मारक राजमहाल देखावा",
    liveStreamAvailable: true,
    prasadInfo: "Traditional laddoo prasad packets.",
    prasadInfoMr: "पारंपरिक लाडू प्रसाद पाकीट.",
    tags: ["Parel", "Standing Idol", "Narepark", "Independence 1947"],
    gradientTheme: "from-orange-700 via-red-900 to-stone-900"
  },
  {
    id: "danda-cha-raja-khar-koliwada",
    name: "Danda Cha Raja (Khar Koliwada)",
    nameMr: "दांडाचा राजा (खार कोळीवाडा)",
    popularTitle: "Guardian of the Arabian Sea & Koli Heritage",
    popularTitleMr: "अरबी समुद्राचा रक्षक व कोळी संस्कृतीचे वैभव",
    badge: "Coastal Koli Heritage",
    badgeMr: "कोळी संस्कृती",
    area: "Khar Danda, Bandra West",
    areaMr: "खार दांडा, वांद्रे पश्चिम",
    zone: "suburbs-west",
    zoneName: "Western Suburbs (Andheri & Bandra)",
    zoneNameMr: "पश्चिम उपनगरे (अंधेरी, वांद्रे, विलेपार्ले)",
    foundedYear: 1960,
    coordinates: { lat: 19.0722, lng: 72.8258 },
    address: "Khar Danda Koliwada, Khar West, Mumbai 400052",
    addressMr: "खार दांडा कोळीवाडा, खार पश्चिम, मुंबई ४०००५२",
    nearestStations: [
      {
        name: "Khar Road (Western Line)",
        nameMr: "खार रोड (पश्चिम रेल्वे)",
        line: "Western",
        walkTime: "15 min walk / 5 min auto",
        walkTimeMr: "१५ मि. चालत / ५ मि. ऑटो",
        distance: "1.2 km",
        exitTip: "West exit, take share auto to Khar Danda",
        exitTipMr: "पश्चिम गेटवरून खार दांडासाठी ऑटो"
      }
    ],
    crowd: {
      status: "low",
      statusText: "Smooth Flow (~15 min)",
      statusTextMr: "सुरळीत प्रवाह (~१५ मि.)",
      generalWaitMinutes: 15,
      lastUpdated: "20 mins ago",
      lastUpdatedMr: "२० मिनिटांपूर्वी",
      reportedCount: 11,
      trend: "stable",
      notes: "Coastal breeze and vibrant fisherfolk folk music in the evenings.",
      notesMr: "समुद्राची झुळूक आणि कोळीगीतांचा उत्साह मंडपात पाहायला मिळतो."
    },
    aartis: [
      { time: "08:00 AM", name: "Sakal Aarti", nameMr: "सकाळची आरती" },
      { time: "08:00 PM", name: "Maha Aarti", nameMr: "संध्या महाआरती", isNext: true }
    ],
    history: "Founded by the indigenous Koli community of Khar Danda in 1960, this mandal celebrates Mumbai's original sons of the soil. The Ganpati idol is adorned in traditional Koli headgear and gold chains, with the immersion procession leading straight into the Arabian Sea waters of Khar Danda beach.",
    historyMr: "१९६० मध्ये मुंबईच्या मूळ भूमिपुत्र कोळी बांधवांनी या मंडळाची स्थापना केली. पारंपरिक कोळी वेशभूषा, सोन्याचे दागिने आणि समुद्राच्या लाटांच्या साक्षिने होणारा उत्सव मन जिंकून घेतो.",
    highlights: [
      "Rich indigenous Koli coastal culture",
      "Traditional Koli folk songs and brass band music",
      "Scenic coastal village setting right on the Arabian Sea",
      "Direct beach immersion ceremony"
    ],
    highlightsMr: [
      "मुंबईच्या अस्सल कोळी संस्कृतीचे दर्शन",
      "पारंपरिक कोळीगीते व वाद्यवृंद",
      "अरबी समुद्राच्या किनाऱ्यावरील विलोभनीय वातावरण",
      "थेट समुद्रात होणारा दिमाखदार विसर्जन सोहळा"
    ],
    themeDekhava: "Traditional Fishing Boat & Coral Reef Set",
    themeDekhavaMr: "पारंपरिक कोळी होडी व सागरी प्रवाळ देखावा",
    liveStreamAvailable: false,
    prasadInfo: "Naral wadi and laddoo prasad.",
    prasadInfoMr: "नारळ वडी व लाडू प्रसाद.",
    tags: ["Koli Culture", "Coastal", "Khar Danda", "Arabian Sea"],
    gradientTheme: "from-cyan-900 via-blue-950 to-stone-900"
  }
];
