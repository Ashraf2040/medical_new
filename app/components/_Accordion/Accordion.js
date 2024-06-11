'use client';
import { isValidArray } from '@/lib/func';
import { useRef, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import '././style.css';
//  accordionitem component

const data = [
  {
    category: {
      en: 'General Health and Safety',
      ar: 'الصحة والسلامة العامة',
      fr: 'Santé et sécurité générales',
      bn: 'সাধারণ স্বাস্থ্য এবং নিরাপত্তা',
      bm: 'Kesihatan dan Keselamatan Umum',
      ud: 'عمومی صحت اور حفاظت',
    },
    data: [
      {
        question: {
          en: 'What vaccinations are required before traveling for Hajj?',
          ar: 'ما هي التطعيمات المطلوبة قبل السفر للحج؟',
          fr: 'Quelles vaccinations sont requises avant de voyager pour le Hajj?',
          bn: 'হজের জন্য ভ্রমণ করার আগে কোন টিকাগুলি প্রয়োজন?',
          bm: 'Apakah vaksinasi yang diperlukan sebelum pergi menunaikan Haji?',
          ud: 'حج کے لئے سفر سے پہلے کونسی ویکسینیشن ضروری ہیں؟',
        },
        answer: {
          en: 'Meningococcal meningitis (mandatory), Influenza, Hepatitis A and B, Polio, Tetanus, Typhoid, Covid - 19.',
          ar: 'التهاب السحايا بالمكورات السحائية (إجباري), الأنفلونزا, التهاب الكبد A و B, شلل الأطفال, الكزاز, التيفوئيد, كوفيد - 19.',
          fr: 'Méningite à méningocoque (obligatoire), grippe, hépatites A et B, polio, tétanos, typhoïde, Covid - 19.',
          bn: 'মেনিনগোকোকাল মেনিনজাইটিস (আবশ্যক), ইনফ্লুয়েঞ্জা, হেপাটাইটিস এ এবং বি, পোলিও, টিটেনাস, টাইফয়েড, কোভিড - ১৯।',
          bm: 'Meningitis meningokokus (wajib), Influenza, Hepatitis A dan B, Polio, Tetanus, Typhoid, Covid - 19.',
          ud: 'میننگوکوکل میننجائٹس (لازمی), انفلوئنزا, ہیپاٹائٹس اے اور بی, پولیو, تشنج, ٹائیفائڈ, کووڈ - 19۔',
        },
      },
      {
        question: {
          en: 'How can I protect myself from heatstroke during Hajj?',
          ar: 'كيف يمكنني حماية نفسي من ضربة الشمس أثناء الحج؟',
          fr: 'Comment puis-je me protéger du coup de chaleur pendant le Hajj?',
          bn: 'হজের সময় আমি কীভাবে হিটস্ট্রোক থেকে নিজেকে রক্ষা করতে পারি?',
          bm: 'Bagaimana saya boleh melindungi diri daripada strok haba semasa Haji?',
          ud: 'حج کے دوران خود کو ہیٹ اسٹروک سے کیسے بچایا جائے؟',
        },
        answer: {
          en: 'Stay hydrated by drinking plenty of water. Wear loose, light-colored clothing. Use an umbrella or hat to shade yourself. Take frequent breaks in shaded or air-conditioned areas. Avoid outdoor activities during peak sun hours.',
          ar: 'اشرب الكثير من الماء للحفاظ على رطوبتك. ارتدي ملابس فضفاضة وفاتحة اللون. استخدم مظلة أو قبعة لتظليل نفسك. خذ فترات راحة متكررة في مناطق مظللة أو مكيفة. تجنب الأنشطة الخارجية خلال ساعات الذروة الشمسية.',
          fr: "Restez hydraté en buvant beaucoup d'eau. Portez des vêtements amples et de couleur claire. Utilisez un parapluie ou un chapeau pour vous protéger du soleil. Faites des pauses fréquentes dans des zones ombragées ou climatisées. Évitez les activités extérieures pendant les heures les plus chaudes.",
          bn: 'প্রচুর পানি পান করে নিজেকে হাইড্রেট রাখুন। ঢিলেঢালা, হালকা রঙের পোশাক পরুন। নিজেকে ছায়া দিতে একটি ছাতা বা টুপি ব্যবহার করুন। ছায়াযুক্ত বা শীতাতপ নিয়ন্ত্রিত জায়গায় ঘন ঘন বিরতি নিন। সর্বাধিক সূর্যের সময়কালে বাইরের কার্যকলাপ এড়িয়ে চলুন।',
          bm: 'Kekal terhidrat dengan minum banyak air. Pakai pakaian longgar dan berwarna terang. Gunakan payung atau topi untuk berteduh. Berehat secara kerap di kawasan yang teduh atau berhawa dingin. Elakkan aktiviti luar semasa waktu puncak matahari.',
          ud: 'خود کو ہائیڈریٹ رکھنے کے لئے بہت زیادہ پانی پیئے۔ ڈھیلے، ہلکے رنگ کے کپڑے پہنیں۔ اپنے آپ کو سایہ دینے کے لئے چھتری یا ٹوپی کا استعمال کریں۔ سایہ دار یا ائیرکنڈیشنڈ علاقوں میں بار بار وقفے لیں۔ سورج کے عروج کے اوقات میں بیرونی سرگرمیوں سے پرہیز کریں۔',
        },
      },
      {
        question: {
          en: 'What should I do if I face dehydration during the pilgrimage?',
          ar: 'ماذا يجب أن أفعل إذا واجهت الجفاف أثناء الحج؟',
          fr: 'Que dois-je faire si je fais face à la déshydratation pendant le pèlerinage?',
          bn: 'তীর্থযাত্রা চলাকালীন যদি আমি পানিশূন্যতার সম্মুখীন হই তবে আমাকে কী করা উচিত?',
          bm: 'Apa yang perlu saya lakukan jika saya menghadapi dehidrasi semasa menunaikan Haji?',
          ud: 'اگر دوران حج مجھے پانی کی کمی کا سامنا ہو تو مجھے کیا کرنا چاہئے؟',
        },
        answer: {
          en: 'Drink oral rehydration solutions or sports drinks. Rest in a cool, shaded area. Seek medical assistance if symptoms persist or worsen.',
          ar: 'اشرب محاليل الإماهة الفموية أو المشروبات الرياضية. استرح في منطقة باردة ومظللة. اطلب المساعدة الطبية إذا استمرت الأعراض أو ساءت.',
          fr: "Buvez des solutions de réhydratation orale ou des boissons pour sportifs. Reposez-vous dans une zone fraîche et ombragée. Consultez un médecin si les symptômes persistent ou s'aggravent.",
          bn: 'ওরাল রিহাইড্রেশন সলিউশন বা স্পোর্টস ড্রিংক পান করুন। একটি ঠান্ডা, ছায়াযুক্ত জায়গায় বিশ্রাম নিন। লক্ষণগুলি অব্যাহত থাকলে বা খারাপ হলে চিকিৎসা সহায়তা নিন।',
          bm: 'Minum larutan rehidrasi oral atau minuman sukan. Berehat di kawasan yang sejuk dan teduh. Dapatkan bantuan perubatan jika gejala berterusan atau bertambah teruk.',
          ud: 'اورل ری ہائیڈریشن سلوشن یا اسپورٹس ڈرنکس پئیں۔ کسی ٹھنڈی، سایہ دار جگہ پر آرام کریں۔ اگر علامات برقرار رہیں یا خراب ہوں تو طبی مدد لیں۔',
        },
      },
    ],
  },
  {
    category: {
      en: 'Environmental Safety',
      ar: 'السلامة البيئية',
      fr: 'Sécurité environnementale',
      bn: 'পরিবেশগত নিরাপত্তা',
      bm: 'Keselamatan Alam Sekitar',
      ud: 'ماحولیاتی حفاظت',
    },
    data: [
      {
        question: {
          en: 'What are the guidelines for waste disposal in Hajj sites?',
          ar: 'ما هي إرشادات التخلص من النفايات في مواقع الحج؟',
          fr: "Quelles sont les directives pour l'élimination des déchets sur les sites du Hajj?",
          bn: 'হজ সাইটে বর্জ্য নিষ্পত্তির জন্য নির্দেশিকাগুলি কী কী?',
          bm: 'Apakah garis panduan untuk pelupusan sampah di tapak Haji?',
          ud: 'حج مقامات پر فضلہ ٹھکانے لگانے کے لئے کیا ہدایات ہیں؟',
        },
        answer: {
          en: 'Follow local waste disposal guidelines. Use designated bins for different types of waste. Avoid littering.',
          ar: 'اتبع إرشادات التخلص من النفايات المحلية. استخدم الصناديق المخصصة لأنواع مختلفة من النفايات. تجنب إلقاء القمامة.',
          fr: "Suivez les directives locales pour l'élimination des déchets. Utilisez les poubelles désignées pour les différents types de déchets. Évitez de jeter des déchets par terre.",
          bn: 'স্থানীয় বর্জ্য নিষ্পত্তি নির্দেশিকা অনুসরণ করুন। বিভিন্ন ধরনের বর্জ্যের জন্য নির্ধারিত বিন ব্যবহার করুন। ময়লা ফেলা এড়িয়ে চলুন।',
          bm: 'Ikuti garis panduan pelupusan sampah tempatan. Gunakan tong sampah yang ditetapkan untuk jenis sampah yang berbeza. Elakkan membuang sampah merata-rata.',
          ud: 'مقامی فضلہ ٹھکانے لگانے کی ہدایات پر عمل کریں۔ مختلف قسم کے فضلے کے لئے مخصوص بِن استعمال کریں۔ کوڑا کرکٹ پھینکنے سے گریز کریں۔',
        },
      },
      {
        question: {
          en: 'Are there designated areas for recycling during Hajj?',
          ar: 'هل هناك مناطق مخصصة لإعادة التدوير خلال الحج؟',
          fr: 'Y a-t-il des zones désignées pour le recyclage pendant le Hajj?',
          bn: 'হজের সময় পুনর্ব্যবহারের জন্য কি নির্দিষ্ট এলাকা আছে?',
          bm: 'Adakah terdapat kawasan yang ditetapkan untuk kitar semula semasa Haji?',
          ud: 'حج کے دوران ری سائیکلنگ کے لئے مخصوص علاقے ہیں؟',
        },
        answer: {
          en: 'Yes, there are designated recycling areas. Look for recycling bins and participate in recycling programs.',
          ar: 'نعم، هناك مناطق مخصصة لإعادة التدوير. ابحث عن صناديق إعادة التدوير وشارك في برامج إعادة التدوير.',
          fr: 'Oui, il y a des zones désignées pour le recyclage. Cherchez des bacs de recyclage et participez aux programmes de recyclage.',
          bn: 'হ্যাঁ, নির্ধারিত পুনর্ব্যবহার এলাকা রয়েছে। পুনর্ব্যবহার বিনের জন্য সন্ধান করুন এবং পুনর্ব্যবহার প্রোগ্রামে অংশগ্রহণ করুন।',
          bm: 'Ya, terdapat kawasan kitar semula yang ditetapkan. Cari tong kitar semula dan sertai program kitar semula.',
          ud: 'ہاں، مخصوص ری سائیکلنگ علاقے ہیں۔ ری سائیکلنگ بِن تلاش کریں اور ری سائیکلنگ پروگراموں میں حصہ لیں۔',
        },
      },
      {
        question: {
          en: 'What can I do to help keep the pilgrimage sites clean?',
          ar: 'ماذا يمكنني أن أفعل للمساعدة في الحفاظ على نظافة مواقع الحج؟',
          fr: 'Que puis-je faire pour aider à garder les sites de pèlerinage propres?',
          bn: 'তীর্থযাত্রা সাইটগুলি পরিষ্কার রাখতে আমি কী করতে পারি?',
          bm: 'Apa yang boleh saya lakukan untuk membantu menjaga kebersihan tapak ziarah?',
          ud: 'حج مقامات کو صاف رکھنے میں مدد کے لئے میں کیا کر سکتا ہوں؟',
        },
        answer: {
          en: 'Dispose of waste properly. Encourage others to keep the area clean. Participate in clean-up activities.',
          ar: 'تخلص من النفايات بشكل صحيح. شجع الآخرين على الحفاظ على نظافة المنطقة. شارك في أنشطة التنظيف.',
          fr: 'Jetez les déchets correctement. Encouragez les autres à garder la zone propre. Participez aux activités de nettoyage.',
          bn: 'বর্জ্য যথাযথভাবে নিষ্পত্তি করুন। অন্যদের এলাকা পরিষ্কার রাখতে উত্সাহিত করুন। পরিষ্কার-পরিচ্ছন্নতার কার্যক্রমে অংশগ্রহণ করুন।',
          bm: 'Buang sampah dengan betul. Galakkan orang lain untuk menjaga kebersihan kawasan. Sertai aktiviti pembersihan.',
          ud: 'فضلہ مناسب طریقے سے ٹھکانے لگائیں۔ دوسروں کو علاقے کو صاف رکھنے کی ترغیب دیں۔ صفائی کی سرگرمیوں میں حصہ لیں۔',
        },
      },
    ],
  },
  {
    category: {
      en: 'Injury Prevention and Management',
      ar: 'الوقاية من الإصابات وإدارتها',
      fr: 'Prévention et gestion des blessures',
      bn: 'আঘাত প্রতিরোধ এবং পরিচালনা',
      bm: 'Pencegahan dan Pengurusan Kecederaan',
      ud: 'چوٹ کی روک تھام اور انتظام',
    },
    data: [
      {
        question: {
          en: 'What are the most common types of injuries during Hajj?',
          ar: 'ما هي أنواع الإصابات الأكثر شيوعًا أثناء الحج؟',
          fr: 'Quels sont les types de blessures les plus courants pendant le Hajj?',
          bn: 'হজের সময় সবচেয়ে সাধারণ ধরণের আঘাতগুলি কী কী?',
          bm: 'Apakah jenis kecederaan yang paling biasa semasa Haji?',
          ud: 'حج کے دوران سب سے عام چوٹوں کی اقسام کیا ہیں؟',
        },
        answer: {
          en: 'Common injuries include heatstroke, dehydration, blisters, sprains, and cuts.',
          ar: 'تشمل الإصابات الشائعة ضربة الشمس، الجفاف، البثور، الالتواءات، والجروح.',
          fr: 'Les blessures courantes incluent le coup de chaleur, la déshydratation, les ampoules, les entorses et les coupures.',
          bn: 'সাধারণ আঘাতের মধ্যে রয়েছে হিটস্ট্রোক, পানিশূন্যতা, ফোসকা, মচকানো এবং কাটাছেঁড়া।',
          bm: 'Kecederaan yang biasa berlaku termasuk strok haba, dehidrasi, lepuh, terseliuh, dan luka.',
          ud: 'عام چوٹوں میں ہیٹ اسٹروک، پانی کی کمی، چھالے، موچ اور کٹ شامل ہیں۔',
        },
      },
      {
        question: {
          en: 'How can I prevent falls and slips on the ground?',
          ar: 'كيف يمكنني منع السقوط والانزلاق على الأرض؟',
          fr: 'Comment puis-je prévenir les chutes et les glissades au sol?',
          bn: 'আমি কীভাবে মাটি পড়া এবং পিছলে যাওয়া রোধ করতে পারি?',
          bm: 'Bagaimana saya boleh mengelakkan terjatuh dan tergelincir di atas tanah?',
          ud: 'میں گرنے اور زمین پر پھسلنے سے کیسے بچ سکتا ہوں؟',
        },
        answer: {
          en: 'Wear non-slip shoes, avoid wet surfaces, and be mindful of your surroundings.',
          ar: 'ارتدي أحذية غير قابلة للانزلاق، وتجنب الأسطح الرطبة، وانتبه لمحيطك.',
          fr: 'Portez des chaussures antidérapantes, évitez les surfaces mouillées et faites attention à votre environnement.',
          bn: 'নন-স্লিপ জুতা পরুন, ভেজা পৃষ্ঠগুলি এড়িয়ে চলুন এবং আপনার চারপাশের বিষয়ে সতর্ক থাকুন।',
          bm: 'Pakai kasut yang tidak licin, elakkan permukaan basah, dan beri perhatian kepada persekitaran anda.',
          ud: 'نان سلپ جوتے پہنیں، گیلی سطحوں سے پرہیز کریں، اور اپنے ارد گرد کا خیال رکھیں۔',
        },
      },
      {
        question: {
          en: 'How can I protect myself from being in a stampede?',
          ar: 'كيف يمكنني حماية نفسي من التدافع؟',
          fr: "Comment puis-je me protéger d'une bousculade?",
          bn: 'আমি কীভাবে পদদলিত হওয়া থেকে নিজেকে রক্ষা করতে পারি?',
          bm: 'Bagaimana saya boleh melindungi diri daripada rempuhan?',
          ud: 'میں اپنے آپ کو بھگدڑ سے کیسے بچا سکتا ہوں؟',
        },
        answer: {
          en: 'Stay vigilant, avoid congested areas, and follow crowd control guidelines.',
          ar: 'ابقَ متيقظًا، تجنب المناطق المزدحمة، واتبع إرشادات التحكم في الحشود.',
          fr: 'Restez vigilant, évitez les zones encombrées et suivez les directives de contrôle des foules.',
          bn: 'সতর্ক থাকুন, ভিড়যুক্ত এলাকা এড়িয়ে চলুন এবং ভিড় নিয়ন্ত্রণের নির্দেশাবলী অনুসরণ করুন।',
          bm: 'Berhati-hati, elakkan kawasan yang sesak, dan ikuti garis panduan kawalan orang ramai.',
          ud: 'چوکنا رہیں، بھیڑ والے علاقوں سے پرہیز کریں، اور ہجوم کنٹرول کے رہنما خطوط پر عمل کریں۔',
        },
      },
    ],
  },
  {
    category: {
      en: 'Specific Health Conditions',
      ar: 'حالات صحية محددة',
      fr: 'Conditions de santé spécifiques',
      bn: 'নির্দিষ্ট স্বাস্থ্য অবস্থা',
      bm: 'Keadaan Kesihatan Tertentu',
      ud: 'خاص صحت کی حالات',
    },
    data: [
      {
        question: {
          en: 'What should I do if I have an autoimmune disorder?',
          ar: 'ماذا يجب أن أفعل إذا كنت أعاني من اضطراب في المناعة الذاتية؟',
          fr: "Que dois-je faire si j'ai un trouble auto-immun?",
          bn: 'আমার অটোইমিউন ডিসঅর্ডার থাকলে আমি কী করব?',
          bm: 'Apa yang perlu saya lakukan jika saya mempunyai gangguan autoimun?',
          ud: 'اگر مجھے آٹو امیون ڈس آرڈر ہے تو مجھے کیا کرنا چاہئے؟',
        },
        answer: {
          en: 'Take medications as prescribed, avoid known triggers, and maintain a healthy lifestyle.',
          ar: 'تناول الأدوية حسب الوصفة الطبية، وتجنب المحفزات المعروفة، وحافظ على نمط حياة صحي.',
          fr: 'Prenez vos médicaments comme prescrits, évitez les déclencheurs connus et maintenez un mode de vie sain.',
          bn: 'প্রেসক্রিপশন অনুযায়ী ওষুধ নিন, পরিচিত ট্রিগারগুলি এড়িয়ে চলুন এবং একটি স্বাস্থ্যকর জীবনযাপন বজায় রাখুন।',
          bm: 'Ambil ubat seperti yang ditetapkan, elakkan pencetus yang diketahui, dan kekalkan gaya hidup yang sihat.',
          ud: 'ادویات جیسا کہ تجویز کیا گیا ہے لیں، معلوم محرکات سے بچیں، اور صحت مند طرز زندگی برقرار رکھیں۔',
        },
      },
      {
        question: {
          en: 'How can I manage chronic fatigue syndrome during Hajj?',
          ar: 'كيف يمكنني إدارة متلازمة التعب المزمن أثناء الحج؟',
          fr: 'Comment puis-je gérer le syndrome de fatigue chronique pendant le Hajj?',
          bn: 'হজের সময় আমি কীভাবে দীর্ঘস্থায়ী ক্লান্তি সিন্ড্রোম পরিচালনা করতে পারি?',
          bm: 'Bagaimana saya boleh menguruskan sindrom keletihan kronik semasa Haji?',
          ud: 'میں حج کے دوران دائمی تھکاوٹ کے سنڈروم کو کیسے سنبھال سکتا ہوں؟',
        },
        answer: {
          en: 'Take frequent breaks, stay hydrated, and avoid overexertion.',
          ar: 'خذ فترات راحة متكررة، وابقَ رطبًا، وتجنب الإجهاد الزائد.',
          fr: 'Prenez des pauses fréquentes, restez hydraté et évitez de trop vous fatiguer.',
          bn: 'ঘন ঘন বিরতি নিন, হাইড্রেটেড থাকুন এবং অতিরিক্ত পরিশ্রম এড়িয়ে চলুন।',
          bm: 'Berehat secara kerap, kekal terhidrat, dan elakkan daripada berlebihan tenaga.',
          ud: 'بار بار وقفے لیں، ہائیڈریٹ رہیں، اور زیادہ محنت سے بچیں۔',
        },
      },
      {
        question: {
          en: 'How should I manage organ transplant care during Hajj?',
          ar: 'كيف يجب أن أتعامل مع رعاية زراعة الأعضاء أثناء الحج؟',
          fr: "Comment dois-je gérer les soins de transplantation d'organes pendant le Hajj?",
          bn: 'হজের সময় আমি কীভাবে অঙ্গ প্রতিস্থাপন যত্ন পরিচালনা করব?',
          bm: 'Bagaimana saya harus menguruskan penjagaan pemindahan organ semasa Haji?',
          ud: 'حج کے دوران اعضا کی پیوند کاری کی دیکھ بھال کیسے کرنی چاہئے؟',
        },
        answer: {
          en: 'Carry necessary medications, avoid crowded places, and follow hygiene protocols strictly.',
          ar: 'احمل الأدوية اللازمة، وتجنب الأماكن المزدحمة، واتبع بروتوكولات النظافة بدقة.',
          fr: "Emportez les médicaments nécessaires, évitez les endroits bondés et suivez strictement les protocoles d'hygiène.",
          bn: 'প্রয়োজনীয় ওষুধ বহন করুন, ভিড়যুক্ত জায়গাগুলি এড়িয়ে চলুন এবং কঠোরভাবে স্বাস্থ্যবিধি প্রোটোকল অনুসরণ করুন।',
          bm: 'Bawa ubat yang diperlukan, elakkan tempat yang sesak, dan ikuti protokol kebersihan dengan ketat.',
          ud: 'ضروری ادویات ساتھ رکھیں، بھیڑ والی جگہوں سے پرہیز کریں، اور صفائی کے پروٹوکول پر سختی سے عمل کریں۔',
        },
      },
    ],
  },
  {
    category: {
      en: "Women's Health",
      ar: 'صحة المرأة',
      fr: 'Santé des femmes',
      bn: 'নারী স্বাস্থ্য',
      bm: 'Kesihatan Wanita',
      ud: 'خواتین کی صحت',
    },
    data: [
      {
        question: {
          en: 'What should I do if I get my period during Hajj?',
          ar: 'ماذا يجب أن أفعل إذا جائتني الدورة الشهرية أثناء الحج؟',
          fr: "Que dois-je faire si j'ai mes règles pendant le Hajj?",
          bn: 'হজের সময় যদি আমার পিরিয়ড হয় তবে আমাকে কী করা উচিত?',
          bm: 'Apa yang perlu saya lakukan jika saya datang haid semasa Haji?',
          ud: 'اگر حج کے دوران مجھے ماہواری ہو تو مجھے کیا کرنا چاہئے؟',
        },
        answer: {
          en: 'Continue with the permissible rituals, practice good hygiene, and manage cramps with medications as needed.',
          ar: 'استمري في أداء الطقوس المسموح بها، واتبعي ممارسات النظافة الجيدة، واديري التقلصات بالأدوية حسب الحاجة.',
          fr: 'Continuez avec les rituels permis, pratiquez une bonne hygiène et gérez les crampes avec des médicaments si nécessaire.',
          bn: 'অনুমোদিত আচার-অনুষ্ঠানগুলি চালিয়ে যান, ভাল স্বাস্থ্যবিধি অনুশীলন করুন এবং প্রয়োজন হলে ওষুধের সাহায্যে ক্র্যাম্পগুলি পরিচালনা করুন।',
          bm: 'Teruskan dengan ritual yang dibenarkan, amalkan kebersihan yang baik, dan uruskan kekejangan dengan ubat-ubatan yang diperlukan.',
          ud: 'جائز عبادات جاری رکھیں، اچھی صفائی کا خیال رکھیں، اور درد کش ادویات سے درد کو سنبھالیں۔',
        },
      },
      {
        question: {
          en: 'How can I manage urinary tract infections (UTIs)?',
          ar: 'كيف يمكنني إدارة التهابات المسالك البولية؟',
          fr: 'Comment puis-je gérer les infections urinaires (UTI)?',
          bn: 'আমি কীভাবে মূত্রনালী সংক্রমণ (UTIs) পরিচালনা করতে পারি?',
          bm: 'Bagaimana saya boleh menguruskan jangkitan saluran kencing (UTI)?',
          ud: 'میں پیشاب کی نالی کے انفیکشن (UTIs) کو کیسے سنبھال سکتا ہوں؟',
        },
        answer: {
          en: 'Drink plenty of water, use the restroom regularly, maintain good hygiene, and take prescribed medications if infected.',
          ar: 'اشرب الكثير من الماء، استخدم الحمام بانتظام، حافظ على نظافتك، وتناول الأدوية الموصوفة إذا كنت مصابًا.',
          fr: "Buvez beaucoup d'eau, allez régulièrement aux toilettes, maintenez une bonne hygiène et prenez les médicaments prescrits si vous êtes infecté.",
          bn: 'প্রচুর পানি পান করুন, নিয়মিত টয়লেট ব্যবহার করুন, ভাল স্বাস্থ্যবিধি বজায় রাখুন এবং সংক্রমিত হলে প্রেসক্রাইব করা ওষুধ নিন।',
          bm: 'Minum banyak air, gunakan tandas secara kerap, jaga kebersihan diri, dan ambil ubat yang ditetapkan jika dijangkiti.',
          ud: 'بہت زیادہ پانی پیئے، باقاعدگی سے واش روم استعمال کریں، اچھی صفائی رکھیں، اور اگر انفیکشن ہو تو تجویز کردہ دوائیں لیں۔',
        },
      },
      {
        question: {
          en: 'What should I do if I experience a miscarriage?',
          ar: 'ماذا يجب أن أفعل إذا تعرضت للإجهاض؟',
          fr: 'Que dois-je faire si je fais une fausse couche?',
          bn: 'যদি আমি গর্ভপাতের সম্মুখীন হই তবে আমাকে কী করা উচিত?',
          bm: 'Apa yang perlu saya lakukan jika saya mengalami keguguran?',
          ud: 'اگر مجھے اسقاط حمل ہو جائے تو مجھے کیا کرنا چاہئے؟',
        },
        answer: {
          en: 'Seek immediate medical help, inform your group leader, and rest in a safe place.',
          ar: 'اطلب المساعدة الطبية فورًا، وأخبر قائد مجموعتك، واسترح في مكان آمن.',
          fr: 'Cherchez une aide médicale immédiate, informez votre chef de groupe et reposez-vous dans un endroit sûr.',
          bn: 'তাৎক্ষণিক চিকিৎসা সহায়তা নিন, আপনার দলের নেতাকে জানান এবং একটি নিরাপদ স্থানে বিশ্রাম নিন।',
          bm: 'Dapatkan bantuan perubatan segera, maklumkan kepada ketua kumpulan anda, dan berehat di tempat yang selamat.',
          ud: 'فوری طور پر طبی مدد حاصل کریں، اپنے گروپ لیڈر کو مطلع کریں، اور کسی محفوظ جگہ پر آرام کریں۔',
        },
      },
    ],
  },
];

const AccordionItem = ({
  data,
  isOpen,
  onClick,
  setActiveAnswer,
  executeScroll,
}) => {
  const contentHeight = useRef();
  const [activeIndex, setActiveIndex] = useState(null);
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? 'active' : ''}`}
        onClick={() => {
          onClick();
        }}
      >
        <p className="question-content text-lg font-medium font-inter text-[#00afbf] cursor-pointer">
          {decodeURIComponent(data?.category[currentLanguage])}
        </p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="answer-content flex flex-col gap-2">
          {isValidArray(data.data) &&
            data.data.map((el, i) => (
              <div key={i}>
                <p
                  className="border-2 border-teal-400 text-center rounded-lg py-2 leading-6 text-sm lg:text-base shadow-md px-2 bg-white not-italic cursor-pointer font-inter"
                  onClick={() => {
                    setActiveAnswer(el);
                    executeScroll();
                  }}
                >
                  {decodeURIComponent(el?.question[currentLanguage])}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ setActiveAnswer, activeAnswer, executeScroll }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          data={item}
          isOpen={activeIndex === index}
          setActiveAnswer={setActiveAnswer}
          executeScroll={executeScroll}
          onClick={() => {
            handleItemClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;
