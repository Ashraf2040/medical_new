'use client';
import { useSelector } from 'react-redux';

export default function PrivacyPage() {
  const currentLanguage = useSelector(
    (state) => state?.language?.currentLanguage
  );
  const supportedLanguage = [
    {
      lang: 'en',
      title: 'Medical AssistantAI’s Privacy Policy',
      introduction: '1. Introduction',
      introductionDesc:
        'Learning Oasis ("we", "us", or "our") operates the Pilgrim Health Assistant website (collectively, the "Service"). This Privacy Policy outlines our practices concerning the collection, use, disclosure, and protection of information that applies to our Service, and your options regarding the collection and use of your information.',
      introductionDesc2:
        'By utilizing our Service, you consent to the collection and utilization of information in alliance with this Privacy Policy.',
      information: '2. Information Collection and Use',
      informationDesc1:
        'For the purpose of providing an effective service, we collect the following types of information during each session:',

      informationSubTitle1: 'a. Session Information',
      informationSubDescription1:
        'We do not collect personal information that can be used to permanently identify or contact an individual, such as names, email addresses, or phone numbers. Instead, any information you provide during the session, including health-related details, is used solely to deliver a diagnosis or health advice within that session.',
      informationSubTitle2: 'b. Location Data',
      informationSubDescription2:
        'To enhance the usefulness of our Service, we collect and use your location data during each session. This allows us to provide information on nearby medical facilities. This data is only used in the current session and is not stored beyond it.',
      informationSubTitle3: 'c. Usage Data',
      informationSubDescription3:
        'We may track usage data related to the session, such as device type, browser type, and other diagnostic data that assists us in improving our Service. This data does not include personal identifying information and is used solely for analysis and service enhancement.',
      useData: '3. Use of Data',
      useDataTitle: 'The information we collect is used for various purposes: ',
      useDataLi1: ' - To provide and maintain our Service',
      useDataLi2: ' - To inform you of changes to our Service',
      useDataLi3:
        ' - To enable participation in interactive features of our Service when you choose to do so',
      useDataLi4: ' - To offer customer support',
      useDataLi5:
        ' - To gather analysis or valuable information enabling us to improve the service',
      useDataLi6: '- To monitor the usage of the Service',
      useDataLi7: ' - To detect, prevent, and address technical issues',
      useDataLi8: '- To train and enhance our AI models',
      dataRetention: '4. Data Retention',
      dataRetentionDes:
        ' We retain your Information and Usage Data as long as necessary for the purposes outlined in this Privacy Policy or as required by applicable laws and regulations.',
      dataSharing: '5. Data Sharing',
      dataSharingDes:
        'We do not sell, trade, or rent any Information to third parties.',
      dataSecurity: '6. Changes to This Privacy Policy',
      dataSecurityDes:
        'We may modify this Privacy Policy occasionally. Any changes will be communicated by posting the updated policy on this page and revising the "Last updated" date. Regular review of this policy is advisable to stay informed of any changes.',

      contact: '7. Contact Us',
      contactTitle:
        'For any queries regarding this Privacy Policy, please contact us:',
      contactEmail: 'By email: zjattar@hotmail.com ',
      law: '8. Governing Law',
      lawDes:
        ' This Privacy Policy is governed by and construed in accordance with the laws of Saudi Arabia, irrespective of its conflict of law  provisions.',
    },

    {
      lang: 'bn',
      title: 'মেডিকেল অ্যাসিস্ট্যান্টএআই-এর গোপনীয়তা নীতি',
      introduction: '১. পরিচিতি',
      introductionDesc:
        'জেডএ ইনফোটেক (আমরা, আমাদের, বা আমাদের) মেডিকেল অ্যাসিস্ট্যান্টএআই ওয়েবসাইট এবং মোবাইল অ্যাপ্লিকেশন (সমষ্টিগতভাবে, পরিষেবা) পরিচালনা করে। এই গোপনীয়তা নীতিতে আমাদের পরিষেবা সম্পর্কিত তথ্য সংগ্রহ, ব্যবহার, প্রকাশ এবং সুরক্ষার পদ্ধতি এবং আপনার তথ্য সংগ্রহ ও ব্যবহারের বিকল্পগুলি সম্পর্কে আলোচনা করা হয়েছে।',
      introductionDesc2:
        'আমাদের পরিষেবা ব্যবহার করে, আপনি এই গোপনীয়তা নীতির সাথে সঙ্গতিপূর্ণভাবে তথ্য সংগ্রহ এবং ব্যবহারে সম্মতি প্রদান করেন।',
      information: '২. তথ্য সংগ্রহ এবং ব্যবহার',
      informationDesc1:
        'আমাদের পরিষেবা সরবরাহ এবং উন্নত করতে, আমরা নিম্নলিখিত ধরণের তথ্য সংগ্রহ করতে পারি:',

      informationSubTitle1: 'ক. সেশন তথ্য',
      informationSubDescription1:
        'আমরা এমন কোনো ব্যক্তিগত তথ্য সংগ্রহ করি না যা ব্যক্তিকে স্থায়ীভাবে সনাক্ত বা যোগাযোগ করতে ব্যবহার করা যায়, যেমন নাম, ইমেইল ঠিকানা, বা ফোন নম্বর। বরং, সেশন চলাকালীন আপনি যে কোনো তথ্য প্রদান করেন, যার মধ্যে স্বাস্থ্য সম্পর্কিত বিবরণ অন্তর্ভুক্ত, তা শুধুমাত্র ওই সেশনে একটি নির্ণয় বা স্বাস্থ্য পরামর্শ প্রদান করতে ব্যবহৃত হয়।',
      informationSubTitle2: 'খ. অবস্থান তথ্য',
      informationSubDescription2:
        'আমাদের পরিষেবার কার্যকারিতা বাড়ানোর জন্য, আমরা প্রতিটি সেশনের সময় আপনার অবস্থান তথ্য সংগ্রহ এবং ব্যবহার করি। এটি আমাদের কাছাকাছি চিকিৎসা সুবিধার তথ্য প্রদান করতে সক্ষম করে। এই তথ্য শুধুমাত্র বর্তমান সেশনে ব্যবহৃত হয় এবং এর বাইরে সংরক্ষণ করা হয় না।',
      informationSubTitle3: 'গ. ব্যবহার তথ্য',
      informationSubDescription3:
        'আমরা সেশন সম্পর্কিত ব্যবহার তথ্য ট্র্যাক করতে পারি, যেমন ডিভাইসের ধরন, ব্রাউজারের ধরন, এবং অন্যান্য ডায়াগনস্টিক তথ্য যা আমাদের পরিষেবা উন্নত করতে সহায়তা করে। এই তথ্যটি ব্যক্তিগত সনাক্তকরণযোগ্য তথ্য অন্তর্ভুক্ত করে না এবং শুধুমাত্র বিশ্লেষণ এবং পরিষেবা উন্নতির জন্য ব্যবহৃত হয়।',
      useData: '৩. তথ্যের ব্যবহার',
      useDataTitle:
        'আমরা বিভিন্ন উদ্দেশ্যে আমাদের সংগ্রহ করা তথ্য ব্যবহার করি:',
      useDataLi1: ' - আমাদের পরিষেবা প্রদান এবং বজায় রাখা',
      useDataLi2: ' - আমাদের পরিষেবার পরিবর্তনগুলি সম্পর্কে আপনাকে অবহিত করতে',
      useDataLi3:
        ' - যখন আপনি বেছে নেন তখন আমাদের পরিষেবার ইন্টারেক্টিভ বৈশিষ্ট্যগুলিতে অংশগ্রহণ সক্ষম করতে',
      useDataLi4: ' - গ্রাহক সহায়তা প্রদান করতে',
      useDataLi5:
        ' - বিশ্লেষণ বা মূল্যবান তথ্য সংগ্রহ করতে যা আমাদের পরিষেবা উন্নত করতে সক্ষম করে',
      useDataLi6: '- পরিষেবার ব্যবহার পর্যবেক্ষণ করতে',
      useDataLi7: ' - প্রযুক্তিগত সমস্যাগুলি সনাক্ত, প্রতিরোধ এবং সমাধান করতে',
      useDataLi8: '- আমাদের এআই মডেলগুলিকে প্রশিক্ষণ এবং উন্নত করতে',
      dataRetention: '৪. তথ্য সংরক্ষণ',
      dataRetentionDes:
        ' আমরা আপনার ব্যক্তিগত তথ্য এবং ব্যবহার তথ্য সংরক্ষণ করি যতক্ষণ পর্যন্ত এই গোপনীয়তা নীতিতে বর্ণিত উদ্দেশ্যে বা প্রযোজ্য আইন এবং নিয়ম অনুযায়ী প্রয়োজন হয়।',
      dataSharing: '৫. তথ্য শেয়ারিং',
      dataSharingDes:
        ' আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি, বাণিজ্য বা ভাড়া দিই না। আমাদের পরিষেবা উন্নত করার জন্য তৃতীয় পক্ষের পরিষেবা প্রদানকারীদের সাথে যে কোনো তথ্য শেয়ারিং শুধুমাত্র এই উদ্দেশ্যেই করা হয়। এই প্রদানকারীরা আপনার তথ্য সুরক্ষার জন্য চুক্তিভিত্তিকভাবে বাধ্য এবং কেবলমাত্র এখানে প্রকাশিত হিসাবে এটি ব্যবহার করতে পারে।',
      dataSecurity: '৬. তথ্য নিরাপত্তা',
      dataSecurityDes:
        ' আপনার ডেটা সুরক্ষা আমাদের কাছে অগ্রাধিকার, এবং আমরা উপযুক্ত প্রতিরক্ষামূলক ব্যবস্থা প্রয়োগের জন্য সচেষ্ট থাকি। তবে, কোনো ইলেকট্রনিক স্টোরেজ বা ইন্টারনেট সংক্রমণের পদ্ধতি ১০০% নিরাপদ নয়, তাই আমরা সম্পূর্ণ নিরাপত্তা নিশ্চিত করতে পারি না।',

      contact: '৯. আমাদের সাথে যোগাযোগ করুন',
      contactTitle: 'এই গোপনীয়তা নীতি সম্পর্কিত কোনো প্রশ্নের জন্য,',
      contactEmail: 'ইমেইল দ্বারা: info@zainfotech.com',
      law: '১০. শাসক আইন',
      lawDes:
        ' এই গোপনীয়তা নীতি সৌদি আরবের আইন দ্বারা নিয়ন্ত্রিত এবং এর সাথে সঙ্গতিপূর্ণ, তার সংঘাতের আইন বিধানের পরেও।',
    },

    {
      lang: 'ar',
      title: 'سياسة الخصوصية لمساعد الطبي AI',
      introduction: '١. المقدمة',
      introductionDesc:
        'ZA Infotech (نحن أو نحن أو لنا) تدير موقع الويب والتطبيق المحمول مساعد الطبي AI (المشار إليها مجتمعةً باسم الخدمة). تحدد سياسة الخصوصية هذه ممارساتنا فيما يتعلق بجمع المعلومات واستخدامها والإفصاح عنها وحمايتها التي تنطبق على خدمتنا، وخياراتك فيما يتعلق بجمع المعلومات واستخدامها.',
      introductionDesc2:
        'باستخدامك لخدمتنا، فإنك توافق على جمع واستخدام المعلومات بما يتوافق مع سياسة الخصوصية هذه.',
      information: '٢. جمع المعلومات واستخدامها',
      informationDesc1:
        'لتقديم وتحسين خدمتنا، قد نجمع الأنواع التالية من المعلومات:',

      informationSubTitle1: 'أ. معلومات الجلسة',
      informationSubDescription1:
        'نحن لا نجمع المعلومات الشخصية التي يمكن استخدامها للتعرف على الفرد أو الاتصال به بشكل دائم، مثل الأسماء أو عناوين البريد الإلكتروني أو أرقام الهواتف. بدلاً من ذلك، يتم استخدام أي معلومات تقدمها خلال الجلسة، بما في ذلك التفاصيل المتعلقة بالصحة، فقط لتقديم التشخيص أو النصيحة الصحية خلال تلك الجلسة.',
      informationSubTitle2: 'ب. بيانات الموقع',
      informationSubDescription2:
        'لتعزيز فائدة خدمتنا، نجمع ونستخدم بيانات موقعك خلال كل جلسة. يسمح لنا ذلك بتقديم معلومات حول المرافق الطبية القريبة. تُستخدم هذه البيانات فقط في الجلسة الحالية ولا يتم تخزينها بعدها.',
      informationSubTitle3: 'ج. بيانات الاستخدام',
      informationSubDescription3:
        'قد نتعقب بيانات الاستخدام المتعلقة بالجلسة، مثل نوع الجهاز ونوع المتصفح والبيانات التشخيصية الأخرى التي تساعدنا في تحسين خدمتنا. هذه البيانات لا تشمل معلومات التعريف الشخصية وتُستخدم فقط للتحليل وتحسين الخدمة.',
      useData: '٣. استخدام البيانات',
      useDataTitle: 'تُستخدم المعلومات التي نجمعها لأغراض مختلفة:',
      useDataLi1: ' - لتقديم وصيانة خدمتنا',
      useDataLi2: ' - لإعلامك بالتغييرات على خدمتنا',
      useDataLi3:
        ' - لتمكينك من المشاركة في الميزات التفاعلية لخدمتنا عندما تختار ذلك',
      useDataLi4: ' - لتقديم الدعم للعملاء',
      useDataLi5:
        ' - لجمع التحليلات أو المعلومات القيمة التي تمكننا من تحسين الخدمة',
      useDataLi6: ' - لمراقبة استخدام الخدمة',
      useDataLi7: ' - لاكتشاف ومنع ومعالجة المشكلات التقنية',
      useDataLi8: ' - لتدريب وتحسين نماذج الذكاء الاصطناعي الخاصة بنا',
      dataRetention: '٤. الاحتفاظ بالبيانات',
      dataRetentionDes:
        ' نحن نحتفظ بمعلوماتك الشخصية وبيانات الاستخدام طالما كان ذلك ضروريًا للأغراض المحددة في سياسة الخصوصية هذه أو كما هو مطلوب بموجب القوانين واللوائح المعمول بها.',
      dataSharing: '٥. مشاركة البيانات',
      dataSharingDes:
        ' نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية إلى أطراف ثالثة. أي مشاركة للبيانات مع مقدمي الخدمات من الأطراف الثالثة تكون فقط لغرض تحسين خدمتنا. يلتزم هؤلاء المزودون تعاقديًا بحماية معلوماتك واستخدامها فقط كما هو مذكور.',
      dataSecurity: '٦. أمن البيانات',
      dataSecurityDes:
        ' أمن بياناتك هو أولوية بالنسبة لنا، ونحن نسعى جاهدين لتنفيذ تدابير حماية مناسبة. ومع ذلك، لا يمكننا ضمان الأمان المطلق لأن أي طريقة لتخزين إلكتروني أو نقل عبر الإنترنت ليست آمنة بنسبة 100٪.',

      contact: '٩. اتصل بنا',
      contactTitle: 'لأي استفسارات بخصوص سياسة الخصوصية هذه،',
      contactEmail: 'عبر البريد الإلكتروني: info@zainfotech.com',
      law: '١٠. القانون الحاكم',
      lawDes:
        ' تخضع سياسة الخصوصية هذه وتفسر وفقًا لقوانين المملكة العربية السعودية، بغض النظر عن تعارضها مع الأحكام القانونية.',
    },
    {
      lang: 'bm',
      title: 'Dasar Privasi Pembantu PerubatanAI',
      introduction: '1. Pengenalan',
      introductionDesc:
        'ZA Infotech (kami, kami, atau kami) mengendalikan laman web dan aplikasi mudah alih Pembantu PerubatanAI (secara kolektif, Perkhidmatan). Dasar Privasi ini menggariskan amalan kami mengenai pengumpulan, penggunaan, pendedahan, dan perlindungan maklumat yang berlaku kepada Perkhidmatan kami, dan pilihan anda mengenai pengumpulan dan penggunaan maklumat anda.',
      introductionDesc2:
        'Dengan menggunakan Perkhidmatan kami, anda bersetuju dengan pengumpulan dan penggunaan maklumat yang selaras dengan Dasar Privasi ini.',
      information: '2. Pengumpulan dan Penggunaan Maklumat',
      informationDesc1:
        'Untuk menyampaikan dan meningkatkan Perkhidmatan kami, kami mungkin mengumpulkan jenis maklumat berikut:',

      informationSubTitle1: 'a. Maklumat Sesi',
      informationSubDescription1:
        'Kami tidak mengumpulkan maklumat peribadi yang boleh digunakan untuk mengenal pasti atau menghubungi individu secara kekal, seperti nama, alamat emel, atau nombor telefon. Sebaliknya, sebarang maklumat yang anda berikan semasa sesi, termasuk butiran berkaitan kesihatan, hanya digunakan untuk memberikan diagnosis atau nasihat kesihatan dalam sesi tersebut.',
      informationSubTitle2: 'b. Data Lokasi',
      informationSubDescription2:
        'Untuk meningkatkan kegunaan Perkhidmatan kami, kami mengumpulkan dan menggunakan data lokasi anda semasa setiap sesi. Ini membolehkan kami memberikan maklumat mengenai kemudahan perubatan berhampiran. Data ini hanya digunakan dalam sesi semasa dan tidak disimpan selepas itu.',
      informationSubTitle3: 'c. Data Penggunaan',
      informationSubDescription3:
        'Kami mungkin menjejaki data penggunaan yang berkaitan dengan sesi, seperti jenis peranti, jenis pelayar, dan data diagnostik lain yang membantu kami meningkatkan Perkhidmatan kami. Data ini tidak termasuk maklumat pengenalan peribadi dan hanya digunakan untuk analisis dan peningkatan perkhidmatan.',
      useData: '3. Penggunaan Data',
      useDataTitle:
        'Maklumat yang kami kumpulkan digunakan untuk pelbagai tujuan:',
      useDataLi1: ' - Untuk menyediakan dan mengekalkan Perkhidmatan kami',
      useDataLi2:
        ' - Untuk memberitahu anda mengenai perubahan kepada Perkhidmatan kami',
      useDataLi3:
        ' - Untuk membolehkan anda mengambil bahagian dalam ciri interaktif Perkhidmatan kami apabila anda memilih untuk berbuat demikian',
      useDataLi4: ' - Untuk menyediakan sokongan pelanggan',
      useDataLi5:
        ' - Untuk mengumpulkan analisis atau maklumat berharga yang membolehkan kami meningkatkan perkhidmatan',
      useDataLi6: '- Untuk memantau penggunaan Perkhidmatan',
      useDataLi7: ' - Untuk mengesan, mencegah, dan menangani isu teknikal',
      useDataLi8: '- Untuk melatih dan meningkatkan model AI kami',
      dataRetention: '4. Penyimpanan Data',
      dataRetentionDes:
        ' Kami menyimpan Maklumat Peribadi dan Data Penggunaan anda selama yang diperlukan untuk tujuan yang dinyatakan dalam Dasar Privasi ini atau seperti yang dikehendaki oleh undang-undang dan peraturan yang berkenaan.',
      dataSharing: '5. Perkongsian Data',
      dataSharingDes:
        ' Kami tidak menjual, menukar, atau menyewakan Maklumat Peribadi anda kepada pihak ketiga. Sebarang perkongsian data dengan penyedia perkhidmatan pihak ketiga adalah semata-mata untuk tujuan meningkatkan Perkhidmatan kami. Penyedia ini terikat secara kontrak untuk melindungi maklumat anda dan menggunakannya hanya seperti yang dinyatakan.',
      dataSecurity: '6. Keselamatan Data',
      dataSecurityDes:
        ' Menjamin data anda adalah keutamaan kami, dan kami berusaha untuk melaksanakan langkah perlindungan yang sesuai. Walau bagaimanapun, kami tidak dapat menjamin keselamatan mutlak kerana tiada kaedah penyimpanan elektronik atau penghantaran internet adalah 100% selamat.',

      contact: '9. Hubungi Kami',
      contactTitle: 'Untuk sebarang pertanyaan mengenai Dasar Privasi ini,',
      contactEmail: 'Melalui e-mel: info@zainfotech.com',
      law: '10. Undang-undang yang Mengawal',
      lawDes:
        ' Dasar Privasi ini dikawal oleh dan ditafsirkan mengikut undang-undang Arab Saudi, tanpa mengambil kira percanggahan peruntukan undang-undangnya.',
    },
    {
      lang: 'ud',
      title: 'میڈیکل اسسٹنٹ AI کی پرائیویسی پالیسی',
      introduction: '١. تعارف',
      introductionDesc:
        'ZA انفوٹیک (ہم، ہمارا، یا ہماری) میڈیکل اسسٹنٹ AI ویب سائٹ اور موبائل ایپلیکیشن (مجموعی طور پر، سروس) چلاتا ہے۔ یہ پرائیویسی پالیسی ہمارے سروس سے متعلق معلومات کے جمع کرنے، استعمال، افشاء کرنے، اور حفاظت کرنے کے عمل کو بیان کرتی ہے، اور آپ کی معلومات کے جمع کرنے اور استعمال کرنے کے اختیارات کو بھی بیان کرتی ہے۔',
      introductionDesc2:
        'ہماری سروس کا استعمال کرکے، آپ اس پرائیویسی پالیسی کے مطابق معلومات کے جمع کرنے اور استعمال کرنے کی رضامندی دیتے ہیں۔',
      information: '٢. معلومات کا جمع کرنا اور استعمال',
      informationDesc1:
        'ہماری سروس کو فراہم کرنے اور بہتر بنانے کے لئے، ہم مندرجہ ذیل قسم کی معلومات جمع کر سکتے ہیں:',

      informationSubTitle1: 'ا. سیشن کی معلومات',
      informationSubDescription1:
        'ہم کوئی ذاتی معلومات جمع نہیں کرتے جو کسی فرد کو مستقل طور پر شناخت یا رابطہ کرنے کے لئے استعمال کی جا سکے، جیسے نام، ای میل ایڈریس، یا فون نمبر۔ اس کے بجائے، آپ جو بھی معلومات سیشن کے دوران فراہم کرتے ہیں، بشمول صحت سے متعلق تفصیلات، وہ صرف اسی سیشن میں تشخیص یا صحت کے مشورے کے لئے استعمال ہوتی ہے۔',
      informationSubTitle2: 'ب. مقام کے ڈیٹا',
      informationSubDescription2:
        'ہماری سروس کی افادیت کو بڑھانے کے لئے، ہم ہر سیشن کے دوران آپ کا مقام کا ڈیٹا جمع اور استعمال کرتے ہیں۔ یہ ہمیں قریب کے طبی سہولیات کی معلومات فراہم کرنے کی اجازت دیتا ہے۔ یہ ڈیٹا صرف موجودہ سیشن میں استعمال ہوتا ہے اور اس کے بعد محفوظ نہیں کیا جاتا۔',
      informationSubTitle3: 'ج. استعمال کا ڈیٹا',
      informationSubDescription3:
        'ہم سیشن کے متعلق استعمال کا ڈیٹا ٹریک کر سکتے ہیں، جیسے کہ ڈیوائس کی قسم، براؤزر کی قسم، اور دیگر تشخیصی ڈیٹا جو ہماری سروس کو بہتر بنانے میں مدد کرتا ہے۔ اس ڈیٹا میں ذاتی شناخت کی معلومات شامل نہیں ہیں اور یہ صرف تجزیہ اور سروس کو بہتر بنانے کے لئے استعمال ہوتا ہے۔',
      useData: '٣. ڈیٹا کا استعمال',
      useDataTitle:
        'ہم مختلف مقاصد کے لئے جمع کی گئی معلومات کا استعمال کرتے ہیں:',
      useDataLi1: ' - ہماری سروس فراہم کرنے اور اسے برقرار رکھنے کے لئے',
      useDataLi2:
        ' - ہماری سروس میں تبدیلیوں کے بارے میں آپ کو مطلع کرنے کے لئے',
      useDataLi3:
        ' - جب آپ انتخاب کرتے ہیں تو ہماری سروس کے انٹرایکٹو فیچرز میں شرکت کو فعال کرنے کے لئے',
      useDataLi4: ' - کسٹمر سپورٹ فراہم کرنے کے لئے',
      useDataLi5:
        ' - تجزیات یا قیمتی معلومات جمع کرنے کے لئے جو ہمیں سروس کو بہتر بنانے کے قابل بناتی ہیں',
      useDataLi6: ' - سروس کے استعمال کی نگرانی کرنے کے لئے',
      useDataLi7:
        ' - تکنیکی مسائل کی نشاندہی، روک تھام، اور ان کا پتہ لگانے کے لئے',
      useDataLi8: ' - ہمارے AI ماڈلز کو تربیت دینے اور بہتر بنانے کے لئے',
      dataRetention: '٤. ڈیٹا کو برقرار رکھنا',
      dataRetentionDes:
        ' ہم آپ کی ذاتی معلومات اور استعمال کے ڈیٹا کو اس وقت تک برقرار رکھتے ہیں جب تک کہ اس پرائیویسی پالیسی میں بیان کردہ مقصد کے لئے ضروری ہو یا قابل اطلاق قوانین اور ضوابط کے مطابق ہو۔',
      dataSharing: '٥. ڈیٹا کا اشتراک',
      dataSharingDes:
        ' ہم آپ کی ذاتی معلومات کو تیسرے فریق کے ساتھ نہیں بیچتے، تجارت نہیں کرتے یا کرائے پر نہیں دیتے۔ کسی بھی تیسرے فریق کے خدمت فراہم کنندگان کے ساتھ ڈیٹا کا اشتراک صرف ہماری سروس کو بہتر بنانے کے مقصد کے لئے کیا جاتا ہے۔ یہ فراہم کنندگان آپ کی معلومات کی حفاظت کے لئے معاہدے کے تحت پابند ہیں اور اسے صرف اس طرح استعمال کر سکتے ہیں جیسا کہ یہاں بیان کیا گیا ہے۔',
      dataSecurity: '٦. ڈیٹا کی سیکیورٹی',
      dataSecurityDes:
        ' آپ کے ڈیٹا کی حفاظت ہمارے لئے ایک ترجیح ہے، اور ہم مناسب حفاظتی اقدامات کے نفاذ کی کوشش کرتے ہیں۔ تاہم، ہم مکمل حفاظت کی ضمانت نہیں دے سکتے کیونکہ کوئی بھی الیکٹرانک اسٹوریج یا انٹرنیٹ ترسیل کا طریقہ 100٪ محفوظ نہیں ہے۔',

      contact: '٩. ہم سے رابطہ کریں',
      contactTitle: 'اس پرائیویسی پالیسی کے بارے میں کسی بھی سوال کے لئے،',

      contactEmail: 'ای میل کے ذریعہ: info@zainfotech.com',
      law: '١٠. گورننگ قانون',
      lawDes:
        ' اس پرائیویسی پالیسی کو سعودی عرب کے قوانین کے مطابق کنٹرول اور تشریح کیا جاتا ہے، چاہے اس کے قانون کے دفعات سے تصادم ہو۔',
    },
  ];
  const selectedLangData =
    supportedLanguage.find((item) => item?.lang === currentLanguage) ||
    supportedLanguage[0];
  return (
    <div className="min-h-screen w-full px-6 flex flex-col justify-center items py-4">
      <h1 className="font-semibold mb-4 text-xl">{selectedLangData.title}</h1>
      <ul>
        <li className="font-semibold  text-justify mb-4">
          {selectedLangData.introduction}
        </li>
        <p className="text-justify ">
          {selectedLangData.introductionDesc}
          <br /> <br />
          {selectedLangData.introductionDesc2}
          <br />
          <br />
        </p>
        <li className="font-semibold  text-justify mb-4">
          {selectedLangData.information}
        </li>
        <p className="text-justify ">
          {selectedLangData.informationDesc1} <br />
          <br />
          <span className="font-semibold">
            {selectedLangData.informationSubTitle1}
          </span>
          <br />
          <br />
          {selectedLangData.informationSubDescription1}
          <br />
          <br />
          <span className="font-semibold">
            {' '}
            {selectedLangData.informationSubTitle2}
          </span>{' '}
          <br />
          <br />
          {selectedLangData.informationSubDescription2}
          <br />
          <br />
          <span className="font-semibold">
            {' '}
            {selectedLangData.informationSubTitle3}
          </span>{' '}
          <br />
          <br />
          {selectedLangData.informationSubDescription3}
          <br />
          <br />
        </p>
        <li className="font-semibold  text-justify mb-4">
          {selectedLangData.useData}
        </li>
        <p className="font-semibold text-justify ">
          {selectedLangData.useDataTitle} <br />
          <br />
        </p>
        <p>
          {selectedLangData.useDataLi1}
          <br />
          {selectedLangData.useDataLi2}
          <br />
          {selectedLangData.useDataLi3} <br />
          {selectedLangData.useDataLi4}
          <br />
          {selectedLangData.useDataLi5}
          <br />
          {selectedLangData.useDataLi6}
          <br />
          {selectedLangData.useDataLi7}
          <br />
          {selectedLangData.useDataLi8}
          <br />
        </p>
        <li className="font-semibold  text-justify my-4">
          {selectedLangData.dataRetention}
        </li>
        <p className="text-justify">{selectedLangData.dataRetentionDes}</p>
        <li className="font-semibold  text-justify my-4">
          {' '}
          {selectedLangData.dataSharing}
        </li>
        <p className="text-justify">{selectedLangData.dataSharingDes}</p>
        <li className="font-semibold  text-justify my-4">
          {' '}
          {selectedLangData.dataSecurity}
        </li>
        <p className="text-justify">{selectedLangData.dataSecurityDes}</p>

        <li className="font-semibold  text-justify my-4">
          {' '}
          {selectedLangData.contact}
        </li>
        <p className="text-justify">
          {selectedLangData.contactTitle}
          <br />
          {selectedLangData.contactEmail}
          <br /> <br />
        </p>
        <li className="font-semibold  text-justify my-4">
          {selectedLangData.law}
        </li>
        <p className="text-justify">{selectedLangData.lawDes}</p>
      </ul>
    </div>
  );
}
