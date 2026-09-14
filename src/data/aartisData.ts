export interface AartiItem {
  id: string;
  title: string;
  titleMr: string;
  author: string;
  authorMr: string;
  description: string;
  descriptionMr: string;
  lyricsMarathi: string[];
  lyricsEnglish: string[];
  audioSource?: string;
}

export const AARTIS_DATA: AartiItem[] = [
  {
    id: "sukh-karta-dukh-harta",
    title: "Sukh Karta Dukh Harta",
    titleMr: "सुखकर्ता दुःखहर्ता",
    author: "Samarth Ramdas Swami (17th Century)",
    authorMr: "समर्थ रामदास स्वामी",
    description: "The primary and most beloved Marathi Aarti sung in every household and mandal across Maharashtra.",
    descriptionMr: "महाराष्ट्रातील प्रत्येक घरात व मंडपात गायली जाणारी मुख्य आणि सर्वांत प्रिय गणेश आरती.",
    lyricsMarathi: [
      "सुखकर्ता दुःखहर्ता वार्ता विघ्नाची ।",
      "नुरवी पूर्वी प्रेम कृपा जयाची ॥",
      "सर्वांगी सुंदर उटी शेंदुराची ।",
      "कंठी झळके माळ मुक्ताफळांची ॥ १ ॥",
      "",
      "जय देव जय देव जय मंगलमूर्ती ।",
      "दर्शनमात्रे मनकामना पुरती ॥ धृ. ॥",
      "",
      "रत्नखचित फरा तुज गौरीकुमरा ।",
      "चंदनाची उटी कुमकुमकेशरा ॥",
      "हिरेजडित मुकुट शोभतो बरा ।",
      "रुणझुणती नूपुरे चरणी घागरिया ॥ २ ॥",
      "",
      "जय देव जय देव जय मंगलमूर्ती ।",
      "दर्शनमात्रे मनकामना पुरती ॥ धृ. ॥",
      "",
      "लंबोदर पीतांबर फणिवरबंधना ।",
      "सरळ सोंड वक्रतुंड त्रिनयना ॥",
      "दास रामाचा वाट पाहे सदना ।",
      "संकटी पावावे निर्वाणी रक्षावे सुरवरवंदना ॥ ३ ॥",
      "",
      "जय देव जय देव जय मंगलमूर्ती ।",
      "दर्शनमात्रे मनकामना पुरती ॥ धृ. ॥"
    ],
    lyricsEnglish: [
      "Sukhkarta Dukhharta Varta Vighnachi |",
      "Nurvi Purvi Prem Krupa Jayachi ||",
      "Sarvangi Sundar Uti Shendurachi |",
      "Kanthi Zalke Maal Muktaphallanchi || 1 ||",
      "",
      "Jai Dev Jai Dev Jai Mangal Murti |",
      "Darshanmatre Man Kamana Purti || Dhru. ||",
      "",
      "Ratnakhachit Phara Tuj Gaurikumara |",
      "Chandanachi Uti Kumkumkeshara ||",
      "Hirejadit Mukut Shobhato Bara |",
      "Runzhunti Nupure Charni Ghagariya || 2 ||",
      "",
      "Jai Dev Jai Dev Jai Mangal Murti |",
      "Darshanmatre Man Kamana Purti || Dhru. ||",
      "",
      "Lambodar Peetambar Phanivara Bandhana |",
      "Saral Sond Vakratunda Trinayana ||",
      "Das Ramacha Vaat Pahe Sadana |",
      "Sankati Pavave Nirvani Rakshave Survarvandana || 3 ||",
      "",
      "Jai Dev Jai Dev Jai Mangal Murti |",
      "Darshanmatre Man Kamana Purti || Dhru. ||"
    ]
  },
  {
    id: "shendur-lal-chadhayo",
    title: "Shendur Lal Chadhayo",
    titleMr: "शेंदुर लाल चढायो",
    author: "Traditional Devotional Song",
    authorMr: "पारंपरिक भजन",
    description: "Enthusiastic and rhythmic prayer celebrating Lord Ganesha's valor and vermilion adornment.",
    descriptionMr: "गणेशाच्या शेंदूर लेपनाचे आणि अष्टसिद्धी दात्याचे वर्णन करणारी तालबद्ध आरती.",
    lyricsMarathi: [
      "शेंदुर लाल चढायो अच्छा गजमुखको ।",
      "दोंदिल लाल बिराजे सुत गौरीहरको ॥",
      "हाथ लिए गुडलड्डू सांई सुरवरको ।",
      "महिमा कहे न जाय लागत पद परको ॥ १ ॥",
      "",
      "जय जय जय जय जय वंदना जय जय सुखदाता ।",
      "चरण शरण में आया राखो विधाता ॥ धृ. ॥",
      "",
      "अष्टसिद्धि नवनिधि के दाता दुखहर्ता ।",
      "कष्ट मिटाओ हमारे तुम जग के कर्ता ॥",
      "मोदक भोग लगाऊं प्रेमसहित ध्याऊँ ।",
      "नित उठ मंगल गाऊँ प्रभुगुण गुण गाऊँ ॥ २ ॥"
    ],
    lyricsEnglish: [
      "Shendur Lal Chadhayo Achha Gajmukhko |",
      "Dondil Lal Biraje Sut Gouriharko ||",
      "Hath Liye Gudladdu Sai Survarko |",
      "Mahima Kahe Na Jaye Lagat Pad Parko || 1 ||",
      "",
      "Jai Jai Jai Jai Jai Vandana Jai Jai Sukhdata |",
      "Charan Sharan Mein Aaya Rakho Vidhata || Dhru. ||",
      "",
      "Ashtasiddhi Navanidhi Ke Data Dukhaharta |",
      "Kasht Mitao Hamare Tum Jag Ke Karta ||",
      "Modak Bhog Lagaoon Premsahit Dhyaoon |",
      "Nit Uth Mangal Gaoon Prabhugun Gun Gaoon || 2 ||"
    ]
  },
  {
    id: "ghalin-lotangan",
    title: "Ghalin Lotangan",
    titleMr: "घालीन लोटांगण",
    author: "Saint Dnyaneshwar Tradition",
    authorMr: "संत परंपरा",
    description: "Traditional concluding prayer (Prarthana) surrendering ego at the lotus feet of the Divine.",
    descriptionMr: "आरतीची सांगता करताना ईश्वराच्या चरणी संपूर्ण शरणागती व्यक्त करणारी प्रार्थना.",
    lyricsMarathi: [
      "घालीन लोटांगण वंदीन चरण ।",
      "डोळ्यांनी पाहीन रूप तुझे ॥",
      "प्रेमे आलिंगिन आनंदे पूजिन ।",
      "भावे ओवाळीन म्हणे नामा ॥ १ ॥",
      "",
      "त्वमेव माता च पिता त्वमेव ।",
      "त्वमेव बंधुश्च सखा त्वमेव ॥",
      "त्वमेव विद्या द्रविणं त्वमेव ।",
      "त्वमेव सर्वं मम देव देव ॥ २ ॥",
      "",
      "कायेन वाचा मनसेंद्रियैर्वा ।",
      "बुद्ध्यात्मना वा प्रकृतिस्वभावात ॥",
      "करोमि यद्यत् सकलं परस्मै ।",
      "नारायणायेति समर्पयामि ॥ ३ ॥",
      "",
      "हरे राम हरे राम राम राम हरे हरे ।",
      "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ॥"
    ],
    lyricsEnglish: [
      "Ghalin Lotangan Vandin Charan |",
      "Dolyani Pahin Roop Tujhe ||",
      "Preme Aalingin Anande Poojin |",
      "Bhave Owalin Mhane Nama || 1 ||",
      "",
      "Tvameva Mata Cha Pita Tvameva |",
      "Tvameva Bandhushcha Sakha Tvameva ||",
      "Tvameva Vidya Dravinam Tvameva |",
      "Tvameva Sarvam Mama Deva Deva || 2 ||",
      "",
      "Kayena Vacha Manasendriyairva |",
      "Buddhyatmana Va Prakritisvabhavat ||",
      "Karomi Yadyat Sakalam Parasmai |",
      "Narayanayeti Samarpayami || 3 ||",
      "",
      "Hare Rama Hare Rama Rama Rama Hare Hare |",
      "Hare Krishna Hare Krishna Krishna Krishna Hare Hare ||"
    ]
  },
  {
    id: "atharvashirsha",
    title: "Shri Ganpati Atharvashirsha",
    titleMr: "श्री गणपती अथर्वशीर्ष",
    author: "Atharva Veda (Rishi Atharva)",
    authorMr: "अथर्ववेद (ऋषी अथर्वा)",
    description: "The supreme Vedic hymn extolling Lord Ganesha as the ultimate truth, creator, preserver, and destroyer of the universe.",
    descriptionMr: "गणपती हेच विश्वाचे अंतिम सत्य, चैतन्य आणि ब्रह्मतत्त्व आहे हे सांगणारे सर्वोच्च वैदिक स्तोत्र.",
    lyricsMarathi: [
      "ॐ नमस्ते गणपतये । त्वमेव प्रत्यक्षं तत्त्वमसि ।",
      "त्वमेव केवलं कर्ताऽसि । त्वमेव केवलं धर्ताऽसि ।",
      "त्वमेव केवलं हर्ताऽसि । त्वमेव सर्वं खल्विदं ब्रह्मासि ।",
      "त्वं साक्षादात्माऽसि नित्यम् ॥ १ ॥",
      "",
      "ऋतं वच्मि । सत्यं वच्मि ॥ २ ॥",
      "",
      "अव त्वं माम् । अव वक्तारम् । अव श्रोतारम् ।",
      "अव दातारम् । अव धातारम् । अवानूचानमव शिष्यम् ।",
      "अव पश्चात्तात् । अव पुरस्तात् । अवोत्तरात्तात् ।",
      "अव दक्षिणात्तात् । अव चोध्ध्वात्तात् । अवाधरात्तात् ।",
      "सर्वतो मां पाहि पाहि समन्तात् ॥ ३ ॥",
      "",
      "ॐ गं गणपतये नमः ।",
      "एकदन्ताय विद्महे वक्रतुण्डाय धीमहि । तन्नो दन्तिः प्रचोदयात् ॥"
    ],
    lyricsEnglish: [
      "Om Namaste Ganapataye | Tvameva Pratyaksham Tattvamasi |",
      "Tvameva Kevalam Karta'si | Tvameva Kevalam Dharta'si |",
      "Tvameva Kevalam Harta'si | Tvameva Sarvam Khalvidam Brahmasi |",
      "Tvam Sakshad-Atma'si Nityam || 1 ||",
      "",
      "Ritam Vachmi | Satyam Vachmi || 2 ||",
      "",
      "Ava Tvam Mam | Ava Vaktaram | Ava Shrotaram |",
      "Ava Dataram | Ava Dhataram | Avanuchanamava Shishyam |",
      "Ava Pashchattat | Ava Purastat | Avottarattat |",
      "Ava Dakshinattat | Ava Chordhvattat | Avadharattat |",
      "Sarvato Mam Pahi Pahi Samantat || 3 ||",
      "",
      "Om Gam Ganapataye Namaha |",
      "Ekadantaya Vidmahe Vakratundaya Dhimahi | Tanno Dantih Prachodayat ||"
    ]
  }
];
