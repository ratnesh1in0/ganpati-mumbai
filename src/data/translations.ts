export type Language = 'en' | 'mr';

export const TRANSLATIONS = {
  en: {
    // Header & Hero
    festivalTagline: "Ganpati Bappa Morya",
    festivalDay: "Day 1 of 10 · Ganeshotsav 2026",
    heroTitlePrefix: "Experience Mumbai’s",
    heroTitleHighlight: "Ganpati",
    heroSubtitle: "Find mandals near you, track live crowd queues, and plan walkable darshan routes.",
    searchPlaceholder: "Search Ganpati, mandal, or area (Lalbaug, Girgaon, Andheri)...",
    openMapBtn: "Open map",
    buildRouteBtn: "Build my route",
    
    // Live Crowd Tracker
    liveCrowdHeading: "Live crowd tracker",
    liveCrowdSubheading: "Devotee wait times updated in real time",
    reportCrowdBtn: "Report wait time",
    reportModalTitle: "Submit Live Queue Report",
    charanSparsh: "Charan Sparsh",
    mukhDarshan: "Mukh Darshan",
    generalQueue: "Queue Wait",
    statusLow: "Low Queue (< 30 min)",
    statusMod: "Moderate (30-60 min)",
    statusBusy: "Busy (1-3 hrs)",
    statusPeak: "Heavy Rush (3+ hrs)",
    verifiedReports: "devotee reports",
    
    // Sections
    goodForNowHeading: "Good for right now",
    goodForNowSub: "Walkable circuits tailored to time of day",
    seeAll: "See all",
    iconicMandalsHeading: "Mumbai’s Crown Jewels",
    iconicMandalsSub: "The most revered and historic mandals",
    exploreByAreaHeading: "Explore by area",
    sortByClosest: "Sort by what’s closest",
    sortByCrowd: "Sort by shortest wait",
    locationNote: "Your location stays on your device and is only used to sort this list.",
    
    // Parking & Transit Banner
    transitBannerTitle: "Local trains, parking & road closures",
    transitBannerDesc: "24x7 night suburban trains, 20+ official parking lots, and traffic diversions by Mumbai Police.",
    
    // Navigation
    navHome: "Home",
    navExplore: "Explore",
    navMap: "Map",
    navRoutes: "Routes",
    navSaved: "Saved",
    navTransit: "Transit & Parking",
    navLiveStreams: "Live Streams",
    navVisarjan: "Visarjan Guide",
    navAartis: "Aarti Sangrah",
    
    // Common
    minutes: "min",
    hours: "hr",
    stops: "stops",
    walkingTime: "walk",
    viewDetails: "View details",
    addToRoute: "Add to route",
    saveMandal: "Bookmark",
    savedMandal: "Saved",
    markVisited: "Mark Visited",
    visited: "Visited ✓",
    directions: "Directions",
    nearestStation: "Nearest Station",
    allAreas: "All Areas",
    allFilters: "All",
    filterByZone: "Filter by Zone",
    filterByStatus: "Filter by Status",
    filterByFeature: "Filter by Feature",
    
    // Route Builder
    builderTitle: "Build Your Darshan Walk",
    builderSub: "Pick your starting Mumbai railway station and select the mandals you wish to visit.",
    selectStartStation: "Choose starting railway station",
    chooseMandals: "Select mandals to include in your walk",
    calculateRouteBtn: "Generate Optimized Walking Route",
    optimizedResultTitle: "Your Optimized Darshan Plan",
    totalEstTime: "Total Estimated Duration (Walking + Queues)",
    totalDistance: "Total Walk Distance",
    
    // Mandal Detail
    aartiSchedule: "Daily Aarti Schedule",
    nextAarti: "Next Upcoming Aarti",
    historySection: "History & Tradition",
    highlightsSection: "Key Highlights",
    liveDarshanPlayer: "Official 24x7 Live Darshan Stream",
    prasadTitle: "Prasad & Offerings",
    dressCodeNotice: "Dress Code Advisory",
    
    // Footer
    footerTagline: "Ganpati Bappa Morya · Mangal Murti Morya",
    footerDesc: "A non-commercial community project dedicated to millions of devotees experiencing Mumbai Ganeshotsav.",
    emergencyHelplines: "Emergency & Helplines",
    quickLinks: "Quick Navigation"
  },
  
  mr: {
    // Header & Hero
    festivalTagline: "गणपती बाप्पा मोरया",
    festivalDay: "दिवस १ / १० · गणेशोत्सव २०२६",
    heroTitlePrefix: "अनुभवा मुंबईचा",
    heroTitleHighlight: "गणेशोत्सव",
    heroSubtitle: "तुमच्या जवळचे मंडळ शोधा, लाईव्ह गर्दी आणि रांगेचा अंदाज घ्या व सुखद दर्शन मार्गाचे नियोजन करा.",
    searchPlaceholder: "गणपती, मंडळ अथवा परिसर शोधा (लालबाग, गिरगाव, अंधेरी)...",
    openMapBtn: "नकाशा उघडा",
    buildRouteBtn: "दर्शन मार्ग बनवा",
    
    // Live Crowd Tracker
    liveCrowdHeading: "थेट गर्दी व रांग माहिती",
    liveCrowdSubheading: "भाविकांनी दिलेली ताज्या परिस्थितीची माहिती",
    reportCrowdBtn: "रांगेची माहिती नोंदवा",
    reportModalTitle: "रांगेची ताजी माहिती नोंदवा",
    charanSparsh: "चरणस्पर्श रांग",
    mukhDarshan: "मुखदर्शन रांग",
    generalQueue: "रांगेतील वेळ",
    statusLow: "कमी गर्दी (< ३० मि.)",
    statusMod: "मध्यम गर्दी (३०-६० मि.)",
    statusBusy: "गर्दी (१-३ तास)",
    statusPeak: "प्रचंड गर्दी (३+ तास)",
    verifiedReports: "भाविकांचे अहवाल",
    
    // Sections
    goodForNowHeading: "आत्तासाठी उत्तम मार्ग",
    goodForNowSub: "वेळेनुसार व रांगेनुसार सुलभ पदभ्रमण मार्ग",
    seeAll: "सर्व पहा",
    iconicMandalsHeading: "मुंबईतील प्रसिद्ध व मानाचे गणपती",
    iconicMandalsSub: "शताब्दी मंडळे आणि ऐतिहासिक श्रद्धास्थाने",
    exploreByAreaHeading: "विभागानुसार शोधा",
    sortByClosest: "जवळच्या अंतरानुसार लावा",
    sortByCrowd: "कमी गर्दीनुसार लावा",
    locationNote: "तुमचे लोकेशन फक्त यादी लावण्यासाठी वापरले जाते आणि सुरक्षित राहते.",
    
    // Parking & Transit Banner
    transitBannerTitle: "लोकल ट्रेन्स, पार्किंग व रस्ते वाहतूक",
    transitBannerDesc: "२४ तास विशेष रात्रकालीन लोकल, २०+ अधिकृत पार्किंग मैदाने आणि मुंबई पोलिसांची वाहतूक नियमावली.",
    
    // Navigation
    navHome: "मुख्य",
    navExplore: "मंडळे",
    navMap: "नकाशा",
    navRoutes: "मार्ग",
    navSaved: "साठवलेले",
    navTransit: "वाहतूक व पार्किंग",
    navLiveStreams: "थेट प्रक्षेपण",
    navVisarjan: "विसर्जन माहिती",
    navAartis: "आरती संग्रह",
    
    // Common
    minutes: "मि.",
    hours: "तास",
    stops: "थांबे",
    walkingTime: "चालत",
    viewDetails: "सविस्तर पहा",
    addToRoute: "मार्गात जोडा",
    saveMandal: "बुकमार्क",
    savedMandal: "साठवले",
    markVisited: "दर्शन झाले",
    visited: "दर्शन पूर्ण ✓",
    directions: "मार्गदर्शन",
    nearestStation: "जवळचे स्थानक",
    allAreas: "सर्व भाग",
    allFilters: "सर्व",
    filterByZone: "विभाग निवडा",
    filterByStatus: "गर्दीनुसार निवडा",
    filterByFeature: "वैशिष्ट्यानुसार निवडा",
    
    // Route Builder
    builderTitle: "तुमचा स्वतःचा दर्शन मार्ग तयार करा",
    builderSub: "सुरुवातीचे रेल्वे स्थानक निवडा आणि तुम्हाला हव्या असलेल्या मंडळांची निवड करा.",
    selectStartStation: "सुरुवातीचे रेल्वे स्थानक निवडा",
    chooseMandals: "दर्शनासाठी मंडळे निवडा",
    calculateRouteBtn: "सर्वोत्तम पायी मार्ग तयार करा",
    optimizedResultTitle: "तुमचा सर्वोत्तम दर्शन आराखडा",
    totalEstTime: "एकूण अंदाजे वेळ (चालणे + रांग)",
    totalDistance: "एकूण चालण्याचे अंतर",
    
    // Mandal Detail
    aartiSchedule: "दैनंदिन आरती वेळापत्रक",
    nextAarti: "पुढील आगामी आरती",
    historySection: "इतिहास आणि परंपरा",
    highlightsSection: "मुख्य आकर्षणे",
    liveDarshanPlayer: "२४ तास थेट दर्शन लाईव्ह",
    prasadTitle: "प्रसाद माहिती",
    dressCodeNotice: "पोशाख नियमावली",
    
    // Footer
    footerTagline: "गणपती बाप्पा मोरया · मंगलमूर्ती मोरया",
    footerDesc: "मुंबईच्या गणेशोत्सवात सहभागी होणाऱ्या करोडो भाविकांच्या सेवेसाठी विनामूल्य उपक्रम.",
    emergencyHelplines: "तातडीचे संपर्क क्रमांक",
    quickLinks: "द्रुत मार्गक्रमण"
  }
};
