'use client';
import { useSelector } from 'react-redux';

export default function TermsPage() {
  const currentLanguage = useSelector(
    (state) => state?.language?.currentLanguage
  );
  const supportedLanguage = [
    {
      lang: 'en',
      mainTitle: 'Medical AssistantAI Terms and Conditions',
      description1:
        'Please read these Terms and Conditions (Terms, Terms and Conditions) carefully before using the Medical AssistantAI website and mobile application (collectively, the Service) operated by ZA Infotech (us, we, or our).',
      description2:
        'Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you do not have permission to access the Service.',
      li: '1. **Accounts**',
      liDescription:
        'No accounts or personal information is needed to use our Service. All interactions are session-based and data pertaining to the session is not retained after the session ends.',
      li1: '2. **Intellectual Property**',
      li1Description:
        'The Service and its original content, features, and functionality are and will remain the exclusive property of ZA Infotech and its licensors. The Service is protected by copyright, trademark, and other laws of both Saudi Arabia and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ZA Infotech.',
      li2: '3. **Links to Other Websites**',
      li2Description1:
        'Our Service may contain links to third-party websites or services that are not owned or controlled by ZA Infotech.',
      li2Description2:
        'ZA Infotech has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that ZA Infotech shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites or services.',
      li2Description3:
        'We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.',
      li3: '4. **Termination**',
      li3Description:
        'Given that no accounts are created, termination policies only apply to discontinuation of use by individuals. Users can discontinue the use at their discretion. Any interaction data from the session is not stored post-session.',
      li4: '5. **Indemnification**',
      li4Description:
        'You agree to defend, indemnify, and hold harmless ZA Infotech and its licensee and licensors, and their employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorneys fees), resulting from or arising out of your use and access of the Service, or from your violation of these Terms.',
      li5: '6. **Limitation of Liability**',
      li5Description:
        'In no event shall ZA Infotech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.',
      li6: '7. **Disclaimer**',
      li6Description:
        'Your use of the Service is at your sole risk. The Service is provided on an AS IS and AS AVAILABLE basis, without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.',
      li7: '8. **Governing Law**',
      li7Description:
        'These Terms shall be governed and construed in accordance with the laws of Saudi Arabia, without regard to its conflict of law provisions.',
      li8: '9. **Changes**',
      li8Description:
        'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised terms.',
      li9: '10. **Contact Us**',
      li9Description:
        'If you have any questions about these terms, please contact us:',
      liEmail: 'Email: info@zainfotech.com ',
      liAddress: '[Physical Address in Saudi Arabia]',
      liParagraph:
        'These Terms constitute the entire agreement between us regarding our Service, and replace any prior agreements we might have had regarding the Service.',
    },
    {
      lang: 'bn',
      mainTitle: 'মেডিকেল অ্যাসিস্ট্যান্টএআই শর্তাবলী',
      description1:
        'মেডিকেল অ্যাসিস্ট্যান্টএআই ওয়েবসাইট এবং মোবাইল অ্যাপ্লিকেশন (সমষ্টিগতভাবে, সেবা) ব্যবহার করার আগে দয়া করে এই শর্তাবলী (শর্তাবলী, শর্তাবলী) মনোযোগ সহকারে পড়ুন যা ZA Infotech (আমরা, আমাদের, বা আমাদের দ্বারা পরিচালিত) দ্বারা পরিচালিত।',
      description2:
        'আপনার সেবায় প্রবেশ এবং ব্যবহার শর্তাবলীর আপনার গ্রহণযোগ্যতা এবং সম্মতির উপর নির্ভর করে। এই শর্তাবলী সমস্ত দর্শক, ব্যবহারকারী এবং অন্যদের জন্য প্রযোজ্য যারা সেবায় প্রবেশ বা ব্যবহার করতে চান। সেবায় প্রবেশ বা ব্যবহার করে, আপনি এই শর্তাবলী দ্বারা বাধ্য থাকতে সম্মত হন। যদি আপনি শর্তাবলীর কোনো অংশের সাথে দ্বিমত করেন, তবে আপনার সেবায় প্রবেশ করার অনুমতি নেই।',
      li: '1. **অ্যাকাউন্টসমূহ**',
      liDescription:
        'আমাদের সেবা ব্যবহার করতে কোনো অ্যাকাউন্ট বা ব্যক্তিগত তথ্যের প্রয়োজন নেই। সমস্ত মিথস্ক্রিয়া সেশন-ভিত্তিক এবং সেশন শেষ হওয়ার পরে সেশনের সাথে সম্পর্কিত তথ্য সংরক্ষণ করা হয় না।',
      li1: '2. **বুদ্ধিবৃত্তিক সম্পত্তি**',
      li1Description:
        'সেবা এবং এর মূল সামগ্রী, বৈশিষ্ট্য এবং কার্যকারিতা ZA Infotech এবং এর লাইসেন্সদাতাদের একচেটিয়া সম্পত্তি হিসাবে থাকবে। সেবা কপিরাইট, ট্রেডমার্ক, এবং সৌদি আরব এবং বিদেশী দেশের অন্যান্য আইন দ্বারা সুরক্ষিত। আমাদের ট্রেডমার্ক এবং ট্রেড ড্রেস ZA Infotech এর পূর্ব লিখিত সম্মতি ব্যতীত কোনো পণ্য বা সেবার সাথে ব্যবহার করা যাবে না।',
      li2: '3. **অন্যান্য ওয়েবসাইটের লিঙ্ক**',
      li2Description1:
        'আমাদের সেবা তৃতীয় পক্ষের ওয়েবসাইট বা সেবার লিঙ্ক থাকতে পারে যা ZA Infotech দ্বারা মালিকানাধীন বা নিয়ন্ত্রিত নয়।',
      li2Description2:
        'ZA Infotech তৃতীয় পক্ষের ওয়েবসাইট বা সেবার সামগ্রী, গোপনীয়তা নীতি, বা অনুশীলনের উপর কোন নিয়ন্ত্রণ নেই এবং কোন দায় গ্রহণ করে না। আপনি আরও স্বীকার করেন এবং সম্মত হন যে ZA Infotech কোনও ক্ষতি বা ক্ষতির জন্য দায়ী থাকবে না, সরাসরি বা পরোক্ষভাবে, যে কোনও তৃতীয় পক্ষের ওয়েবসাইট বা সেবার মাধ্যমে উপলব্ধ যে কোনও সামগ্রী, পণ্য বা সেবার ব্যবহার বা নির্ভরতার কারণে বা সম্পর্কিত বলে অভিযোগ করা হয়েছে।',
      li2Description3:
        'আমরা দৃঢ়ভাবে পরামর্শ দিচ্ছি যে আপনি যে কোনও তৃতীয় পক্ষের ওয়েবসাইট বা সেবার শর্তাবলী এবং গোপনীয়তা নীতি পড়ুন।',
      li3: '4. **সমাপ্তি**',
      li3Description:
        'কোনও অ্যাকাউন্ট তৈরি করা হয় না বলে, সমাপ্তি নীতি শুধুমাত্র ব্যক্তিদের দ্বারা ব্যবহার বন্ধ করার ক্ষেত্রে প্রযোজ্য। ব্যবহারকারীরা তাদের বিবেচনার ভিত্তিতে ব্যবহার বন্ধ করতে পারেন। সেশন থেকে যে কোনও মিথস্ক্রিয়া তথ্য সেশন-পরবর্তী সংরক্ষণ করা হয় না।',
      li4: '5. **ক্ষতিপূরণ**',
      li4Description:
        'আপনি ZA Infotech এবং এর লাইসেন্সি এবং লাইসেন্সদাতা, এবং তাদের কর্মচারী, ঠিকাদার, এজেন্ট, কর্মকর্তা এবং পরিচালকদের যে কোনও এবং সমস্ত দাবি, ক্ষতি, বাধ্যবাধকতা, ক্ষতি, দায়, খরচ বা ঋণ, এবং খরচ (অ্যাটর্নি ফি সহ তবে সীমাবদ্ধ নয়) থেকে প্রতিরক্ষা, ক্ষতিপূরণ, এবং ক্ষতির হাত থেকে রক্ষা করার জন্য সম্মত হন, যা আপনার সেবা ব্যবহার এবং প্রবেশ থেকে বা এই শর্তাবলী লঙ্ঘন থেকে উদ্ভূত।',
      li5: '6. **দায় সীমাবদ্ধতা**',
      li5Description:
        'কোনও ঘটনাতেই ZA Infotech, বা তার পরিচালক, কর্মচারী, অংশীদার, এজেন্ট, সরবরাহকারী, বা অধিভুক্ত, কোনও পরোক্ষ, আপতিক, বিশেষ, ফলস্বরূপ বা শাস্তিমূলক ক্ষতির জন্য দায়ী থাকবে না, যার মধ্যে সীমাবদ্ধ নয়, মুনাফা, তথ্য, ব্যবহার, সুপ্রতি বা অন্যান্য অশরীরী ক্ষতি যা আপনার সেবা ব্যবহারের ফলে উদ্ভূত হয়।',
      li6: '7. **দাবিত্যাগ**',
      li6Description:
        'আপনার নিজের ঝুঁকিতে সেবাটি ব্যবহার করছেন। সেবাটি কোনও ধরণের ওয়ারেন্টি ছাড়াই, যেমনটি রয়েছে এবং যেমনটি উপলব্ধ, সরবরাহ করা হয়, যা স্পষ্ট বা অন্তর্নিহিত, যার মধ্যে সীমাবদ্ধ নয়, বাণিজ্যিকতা, একটি নির্দিষ্ট উদ্দেশ্যের জন্য ফিটনেস, অধিকার লঙ্ঘন না করা, বা কার্যকারিতার প্রবাহের অন্তর্নিহিত ওয়ারেন্টি।',
      li7: '8. **গভর্নিং আইন**',
      li7Description:
        'এই শর্তাবলী সৌদি আরবের আইন অনুযায়ী শাসিত এবং নির্মিত হবে, আইন বিধানের সংঘাত ছাড়াই।',
      li8: '9. **পরিবর্তনসমূহ**',
      li8Description:
        'আমরা আমাদের একমাত্র বিবেচনার ভিত্তিতে যে কোনও সময় এই শর্তাবলী পরিবর্তন বা প্রতিস্থাপন করার অধিকার সংরক্ষণ করি। কী উপাদান পরিবর্তন গঠন করবে তা আমাদের একমাত্র বিবেচনার ভিত্তিতে নির্ধারণ করা হবে। আমাদের সেবা ব্যবহার চালিয়ে যাওয়ার মাধ্যমে আপনি সংশোধিত শর্তাবলী দ্বারা বাধ্য থাকতে সম্মত হন।',
      li9: '10. **যোগাযোগ করুন**',
      li9Description:
        'এই শর্তাবলী সম্পর্কে আপনার কোনও প্রশ্ন থাকলে, আমাদের সাথে যোগাযোগ করুন:',
      liEmail: 'ইমেল: info@zainfotech.com',
      liAddress: '[সৌদি আরবে শারীরিক ঠিকানা]',
      liParagraph:
        'এই শর্তাবলী আমাদের সেবার বিষয়ে আমাদের মধ্যে সম্পূর্ণ চুক্তি গঠন করে এবং সেবার বিষয়ে আমাদের যে কোনও পূর্ববর্তী চুক্তি প্রতিস্থাপন করে।',
    },
    {
      lang: 'ar',
      mainTitle: 'شروط استخدام مساعد الصحة الذكي بالذكاء الاصطناعي',
      description1:
        'يرجى قراءة هذه الشروط والأحكام (الشروط، الشروط والأحكام) بعناية قبل استخدام موقع Medical AssistantAI وتطبيق الهاتف المحمول (المشار إليهما معاً بالخدمة) الذي تديره ZA Infotech (نحن، نحن، أو لنا).',
      description2:
        'يعتمد وصولك إلى الخدمة واستخدامك لها على قبولك والامتثال لهذه الشروط. تنطبق هذه الشروط على جميع الزوار والمستخدمين والآخرين الذين يرغبون في الوصول إلى الخدمة أو استخدامها. من خلال الوصول إلى الخدمة أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من الشروط، فإنك لا تملك إذناً للوصول إلى الخدمة.',
      li: '1. **الحسابات**',
      liDescription:
        'لا تحتاج إلى حسابات أو معلومات شخصية لاستخدام خدمتنا. جميع التفاعلات تكون على أساس الجلسة ولا يتم الاحتفاظ بالبيانات المتعلقة بالجلسة بعد انتهائها.',
      li1: '2. **الملكية الفكرية**',
      li1Description:
        'الخدمة ومحتواها الأصلي وميزاتها ووظائفها ستظل وستبقى الملكية الحصرية لـ ZA Infotech والمرخصين لها. الخدمة محمية بموجب حقوق الطبع والنشر والعلامات التجارية وقوانين أخرى في كل من المملكة العربية السعودية والدول الأجنبية. لا يجوز استخدام علاماتنا التجارية وتزييننا التجاري فيما يتعلق بأي منتج أو خدمة دون موافقة خطية مسبقة من ZA Infotech.',
      li2: '3. **روابط إلى مواقع ويب أخرى**',
      li2Description1:
        'قد تحتوي خدمتنا على روابط لمواقع ويب أو خدمات تابعة لجهات خارجية لا تملكها أو تتحكم بها ZA Infotech.',
      li2Description2:
        'لا تتحكم ZA Infotech ولا تتحمل أي مسؤولية عن المحتوى أو سياسات الخصوصية أو ممارسات أي مواقع ويب أو خدمات تابعة لجهات خارجية. وأنت تقر وتوافق أيضاً على أن ZA Infotech لن تكون مسؤولة أو ملتزمة، بشكل مباشر أو غير مباشر، عن أي ضرر أو خسارة ناجمة أو مزعومة ناجمة عن أو فيما يتعلق باستخدام أو الاعتماد على أي من هذه المحتويات أو البضائع أو الخدمات المتاحة على أو من خلال أي من هذه المواقع أو الخدمات.',
      li2Description3:
        'نحن ننصحك بشدة بقراءة الشروط والأحكام وسياسات الخصوصية الخاصة بأي مواقع ويب أو خدمات تابعة لجهات خارجية تزورها.',
      li3: '4. **الإنهاء**',
      li3Description:
        'نظرًا لعدم إنشاء أي حسابات، فإن سياسات الإنهاء تنطبق فقط على التوقف عن الاستخدام من قبل الأفراد. يمكن للمستخدمين التوقف عن الاستخدام وفقاً لتقديرهم. لا يتم تخزين أي بيانات تفاعل من الجلسة بعد انتهاء الجلسة.',
      li4: '5. **التعويض**',
      li4Description:
        'أنت توافق على الدفاع عن وتعويض وحماية ZA Infotech والمرخص لها ومرخصيها، وموظفيها، ومقاوليها، ووكلائها، ومسؤوليها، ومديريها من وضد أي وجميع المطالبات والأضرار والالتزامات والخسائر والمسؤوليات والتكاليف أو الديون والنفقات (بما في ذلك على سبيل المثال لا الحصر أتعاب المحامين)، الناشئة عن أو المتعلقة باستخدامك ووصولك إلى الخدمة، أو من انتهاكك لهذه الشروط.',
      li5: '6. **تحديد المسؤولية**',
      li5Description:
        'لا تتحمل ZA Infotech، ولا مديروها أو موظفوها أو شركاؤها أو وكلاؤها أو موردوها أو فروعها، بأي حال من الأحوال، المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر، فقدان الأرباح أو البيانات أو الاستخدام أو الشهرة أو الخسائر غير الملموسة الأخرى، الناجمة عن استخدامك للخدمة.',
      li6: '7. **إخلاء المسؤولية**',
      li6Description:
        'استخدامك للخدمة يكون على مسؤوليتك الشخصية. يتم تقديم الخدمة على أساس "كما هي" و "كما هي متاحة" دون ضمانات من أي نوع، سواء كانت صريحة أو ضمنية، بما في ذلك على سبيل المثال لا الحصر، الضمانات الضمنية للتسويق، الملاءمة لغرض معين، عدم الانتهاك، أو سير الأداء.',
      li7: '8. **القانون الحاكم**',
      li7Description:
        'تخضع هذه الشروط وتفسر وفقًا لقوانين المملكة العربية السعودية، دون اعتبار لتعارضها مع الأحكام القانونية.',
      li8: '9. **التغييرات**',
      li8Description:
        'نحتفظ بالحق، وفقًا لتقديرنا الخاص، في تعديل أو استبدال هذه الشروط في أي وقت. سيتم تحديد ما يشكل تغييرًا ماديًا وفقًا لتقديرنا الخاص. من خلال الاستمرار في الوصول إلى خدمتنا أو استخدامها بعد أن تصبح التعديلات سارية، فإنك توافق على الالتزام بالشروط المعدلة.',
      li9: '10. **اتصل بنا**',
      li9Description:
        'إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا:',
      liEmail: 'البريد الإلكتروني: info@zainfotech.com',
      liAddress: '[العنوان الفعلي في المملكة العربية السعودية]',
      liParagraph:
        'تشكل هذه الشروط الاتفاقية الكاملة بيننا فيما يتعلق بخدمتنا، وتلغي أي اتفاقيات سابقة قد تكون لدينا بشأن الخدمة.',
    },
    {
      lang: 'bm',
      mainTitle: 'Terma dan Syarat Medical AssistantAI',
      description1:
        'Sila baca Terma dan Syarat ini (Terma, Terma dan Syarat) dengan teliti sebelum menggunakan laman web dan aplikasi mudah alih Medical AssistantAI (secara kolektif, Perkhidmatan) yang dikendalikan oleh ZA Infotech (kami, kami, atau milik kami).',
      description2:
        'Akses anda kepada dan penggunaan Perkhidmatan ini adalah bersyarat kepada penerimaan dan pematuhan anda kepada Terma ini. Terma ini terpakai kepada semua pelawat, pengguna, dan lain-lain yang ingin mengakses atau menggunakan Perkhidmatan ini. Dengan mengakses atau menggunakan Perkhidmatan ini, anda bersetuju untuk terikat dengan Terma ini. Jika anda tidak bersetuju dengan mana-mana bahagian Terma ini, maka anda tidak mempunyai kebenaran untuk mengakses Perkhidmatan ini.',
      li: '1. **Akaun**',
      liDescription:
        'Tiada akaun atau maklumat peribadi diperlukan untuk menggunakan Perkhidmatan kami. Semua interaksi adalah berasaskan sesi dan data berkaitan sesi tidak disimpan selepas sesi berakhir.',
      li1: '2. **Harta Intelek**',
      li1Description:
        'Perkhidmatan ini dan kandungan asalnya, ciri-cirinya, dan fungsinya adalah dan akan kekal sebagai harta eksklusif ZA Infotech dan pemberi lesennya. Perkhidmatan ini dilindungi oleh hak cipta, tanda dagangan, dan undang-undang lain di Arab Saudi dan negara asing. Tanda dagangan dan penampilan perdagangan kami tidak boleh digunakan berkaitan dengan sebarang produk atau perkhidmatan tanpa kebenaran bertulis terlebih dahulu dari ZA Infotech.',
      li2: '3. **Pautan ke Laman Web Lain**',
      li2Description1:
        'Perkhidmatan kami mungkin mengandungi pautan ke laman web atau perkhidmatan pihak ketiga yang tidak dimiliki atau dikawal oleh ZA Infotech.',
      li2Description2:
        'ZA Infotech tidak mempunyai kawalan ke atas, dan tidak bertanggungjawab terhadap, kandungan, polisi privasi, atau amalan mana-mana laman web atau perkhidmatan pihak ketiga. Anda juga mengakui dan bersetuju bahawa ZA Infotech tidak akan bertanggungjawab atau berkewajipan, secara langsung atau tidak langsung, untuk sebarang kerosakan atau kerugian yang disebabkan atau didakwa disebabkan oleh atau berkaitan dengan penggunaan atau pergantungan pada kandungan, barangan, atau perkhidmatan yang tersedia di atau melalui mana-mana laman web atau perkhidmatan tersebut.',
      li2Description3:
        'Kami sangat mengesyorkan anda membaca terma dan syarat dan polisi privasi mana-mana laman web atau perkhidmatan pihak ketiga yang anda lawati.',
      li3: '4. **Penamatan**',
      li3Description:
        'Memandangkan tiada akaun yang dicipta, polisi penamatan hanya terpakai kepada pemberhentian penggunaan oleh individu. Pengguna boleh menghentikan penggunaan mengikut budi bicara mereka. Sebarang data interaksi dari sesi tidak disimpan selepas sesi tamat.',
      li4: '5. **Ganti Rugi**',
      li4Description:
        'Anda bersetuju untuk mempertahankan, memberi ganti rugi, dan melindungi ZA Infotech dan pemegang lesen serta pemberi lesennya, serta pekerja, kontraktor, ejen, pegawai, dan pengarah mereka daripada dan terhadap sebarang dan semua tuntutan, kerosakan, kewajipan, kerugian, liabiliti, kos atau hutang, dan perbelanjaan (termasuk tetapi tidak terhad kepada yuran peguam), yang timbul daripada atau berkaitan dengan penggunaan dan akses anda kepada Perkhidmatan ini, atau daripada pelanggaran anda terhadap Terma ini.',
      li5: '6. **Had Liabiliti**',
      li5Description:
        'Dalam keadaan apa pun ZA Infotech, atau pengarah, pekerja, rakan kongsi, ejen, pembekal, atau ahli gabungannya, tidak akan bertanggungjawab terhadap sebarang kerosakan tidak langsung, sampingan, khas, berbangkit atau punitif, termasuk tanpa had, kehilangan keuntungan, data, penggunaan, nama baik, atau kerugian tidak ketara lain, yang disebabkan oleh penggunaan Perkhidmatan ini.',
      li6: '7. **Penafian**',
      li6Description:
        'Penggunaan anda terhadap Perkhidmatan ini adalah atas risiko anda sendiri. Perkhidmatan ini disediakan berdasarkan "SEADANYA" dan "SEPERTI TERSEDIA", tanpa sebarang jaminan dari apa jua jenis, sama ada tersurat atau tersirat, termasuk tetapi tidak terhad kepada jaminan tersirat kebolehdagangan, kesesuaian untuk tujuan tertentu, tidak melanggar hak, atau prestasi.',
      li7: '8. **Undang-undang Pemerintahan**',
      li7Description:
        'Terma ini akan ditadbir dan ditafsirkan mengikut undang-undang Arab Saudi, tanpa menghiraukan konflik ketentuan undang-undangnya.',
      li8: '9. **Perubahan**',
      li8Description:
        'Kami berhak, mengikut budi bicara kami sendiri, untuk mengubah atau menggantikan Terma ini pada bila-bila masa. Apa yang membentuk perubahan material akan ditentukan mengikut budi bicara kami sendiri. Dengan terus mengakses atau menggunakan Perkhidmatan kami selepas perubahan menjadi berkesan, anda bersetuju untuk terikat dengan terma yang disemak.',
      li9: '10. **Hubungi Kami**',
      li9Description:
        'Jika anda mempunyai sebarang soalan tentang terma ini, sila hubungi kami:',
      liEmail: 'E-mel: info@zainfotech.com',
      liAddress: '[Alamat Fizikal di Arab Saudi]',
      liParagraph:
        'Terma ini merupakan keseluruhan perjanjian antara kami mengenai Perkhidmatan kami, dan menggantikan sebarang perjanjian sebelumnya yang mungkin ada antara kami mengenai Perkhidmatan ini.',
    },
    {
      lang: 'ud',
      mainTitle: ' صحت مددگار کی شرائط استعمال',
      description1:
        'براہ کرم Medical AssistantAI کی ویب سائٹ اور موبائل ایپلیکیشن (اجتماعی طور پر، سروس) استعمال کرنے سے پہلے ان شرائط و ضوابط (شرائط، شرائط و ضوابط) کو غور سے پڑھیں جو ZA Infotech (ہم، ہم، یا ہماری) کی طرف سے چلائی جاتی ہیں۔',
      description2:
        'آپ کی اس سروس تک رسائی اور اس کا استعمال ان شرائط کی قبولیت اور ان کی تعمیل پر مبنی ہے۔ یہ شرائط تمام وزیٹرز، صارفین، اور دیگر افراد پر لاگو ہوتی ہیں جو سروس تک رسائی یا استعمال کرنا چاہتے ہیں۔ سروس تک رسائی یا اس کا استعمال کرکے، آپ ان شرائط کے پابند ہونے سے اتفاق کرتے ہیں۔ اگر آپ ان شرائط کے کسی حصے سے متفق نہیں ہیں، تو آپ کو سروس تک رسائی کی اجازت نہیں ہے۔',
      li: '1. **اکاؤنٹس**',
      liDescription:
        'ہماری سروس استعمال کرنے کے لیے کسی اکاؤنٹ یا ذاتی معلومات کی ضرورت نہیں ہے۔ تمام تعاملات سیشن پر مبنی ہوتے ہیں اور سیشن کے ختم ہونے کے بعد سیشن سے متعلق ڈیٹا محفوظ نہیں کیا جاتا۔',
      li1: '2. **دانشورانہ املاک**',
      li1Description:
        'سروس اور اس کے اصل مواد، خصوصیات، اور فعالیت ZA Infotech اور اس کے لائسنس دہندگان کی ملکیت رہیں گے اور رہیں گے۔ سروس سعودی عرب اور غیر ملکی ممالک کے قوانین کے تحت کاپی رائٹ، ٹریڈ مارک، اور دیگر قوانین سے محفوظ ہے۔ ہمارے ٹریڈ مارکس اور تجارتی لباس کو کسی بھی پروڈکٹ یا سروس کے ساتھ ZA Infotech کی پیشگی تحریری اجازت کے بغیر استعمال نہیں کیا جا سکتا۔',
      li2: '3. **دیگر ویب سائٹس کے لنکس**',
      li2Description1:
        'ہماری سروس میں تیسرے فریق کی ویب سائٹس یا سروسز کے لنکس شامل ہو سکتے ہیں جو ZA Infotech کی ملکیت یا کنٹرول میں نہیں ہیں۔',
      li2Description2:
        'ZA Infotech کے پاس کسی بھی تیسرے فریق کی ویب سائٹس یا سروسز کے مواد، پرائیویسی پالیسیوں، یا طریقوں کا کوئی کنٹرول نہیں ہے، اور وہ ان کے لیے کوئی ذمہ داری نہیں لیتا۔ آپ مزید تسلیم کرتے ہیں اور اس بات سے اتفاق کرتے ہیں کہ ZA Infotech کسی بھی نقصان یا نقصان کے لیے، براہ راست یا بالواسطہ، ذمہ دار یا ذمہ دار نہیں ہوگا جو کسی بھی ایسے مواد، سامان، یا خدمات کے استعمال یا ان پر انحصار کرنے کے نتیجے میں یا اس کے ساتھ منسلک ہونے کے نتیجے میں ہونے کا دعویٰ کیا گیا ہو جو کسی بھی ایسی ویب سائٹس یا خدمات کے ذریعے دستیاب ہیں۔',
      li2Description3:
        'ہم آپ کو زور دے کر مشورہ دیتے ہیں کہ آپ کسی بھی تیسرے فریق کی ویب سائٹس یا خدمات کے شرائط و ضوابط اور پرائیویسی پالیسیوں کو پڑھیں جو آپ ملاحظہ کرتے ہیں۔',
      li3: '4. **خاتمہ**',
      li3Description:
        'چونکہ کوئی اکاؤنٹس نہیں بنائے جاتے، اس لیے اختتام کی پالیسیاں صرف افراد کی جانب سے استعمال کے بند کرنے پر لاگو ہوتی ہیں۔ صارفین اپنی صوابدید پر استعمال کو بند کر سکتے ہیں۔ سیشن کے ختم ہونے کے بعد سیشن کے تعامل کے ڈیٹا کو ذخیرہ نہیں کیا جاتا۔',
      li4: '5. **معاوضہ**',
      li4Description:
        'آپ ZA Infotech اور اس کے لائسنس دہندگان اور لائسنس دہندگان، اور ان کے ملازمین، کنٹریکٹرز، ایجنٹس، افسران، اور ڈائریکٹرز کو کسی بھی اور تمام دعووں، نقصانات، ذمہ داریوں، نقصانات، واجبات، اخراجات یا قرض، اور اخراجات (بشمول لیکن ان تک محدود نہیں وکلاء کی فیس)، جو آپ کے سروس کے استعمال اور رسائی یا ان شرائط کی خلاف ورزی سے پیدا ہونے یا اس سے منسلک ہوں، سے بچانے، معاوضہ دینے، اور انہیں بے ضرر رکھنے پر متفق ہیں۔',
      li5: '6. **ذمہ داری کی حد**',
      li5Description:
        'کسی بھی حالت میں ZA Infotech، اس کے ڈائریکٹرز، ملازمین، شراکت دار، ایجنٹس، سپلائرز، یا ملحقہ افراد کسی بھی بالواسطہ، حادثاتی، خصوصی، نتیجتی، یا تعزیری نقصانات، بشمول لیکن ان تک محدود نہیں، منافع کا نقصان، ڈیٹا، استعمال، نیک نامی، یا دیگر غیر محسوس نقصانات، جو آپ کے سروس کے استعمال کے نتیجے میں ہوتے ہیں، کے لیے ذمہ دار نہیں ہوں گے۔',
      li6: '7. **ڈسکلیمر**',
      li6Description:
        'آپ کے سروس کے استعمال کا خطرہ آپ پر ہے۔ سروس "جیسے ہے" اور "جیسا دستیاب ہے" کی بنیاد پر فراہم کی جاتی ہے، بغیر کسی قسم کی ضمانت کے، چاہے وہ اظہار کی گئی ہو یا مضمر، بشمول لیکن ان تک محدود نہیں، مضمر ضمانتیں تجارتی صلاحیت، کسی خاص مقصد کے لیے موزونیت، عدم خلاف ورزی، یا کارکردگی۔',
      li7: '8. **گورننگ قانون**',
      li7Description:
        'یہ شرائط سعودی عرب کے قوانین کے مطابق ہوں گی اور ان کی تعمیل کی جائے گی، اس کے قانون کی دفعات کے تنازعہ کو چھوڑ کر۔',
      li8: '9. **تبدیلیاں**',
      li8Description:
        'ہم اپنے صوابدید پر، ان شرائط کو کسی بھی وقت تبدیل یا ان کی جگہ لینے کا حق محفوظ رکھتے ہیں۔ کیا تشکیل دیتا ہے ایک مادی تبدیلی ہمارے صوابدید پر طے کیا جائے گا۔ ہماری سروس تک رسائی یا اس کا استعمال جاری رکھ کر، جب کہ تبدیلیاں موثر ہوجائیں، آپ متفق ہیں کہ نظرثانی شدہ شرائط کے پابند ہیں۔',
      li9: '10. **ہم سے رابطہ کریں**',
      li9Description:
        'اگر آپ کو ان شرائط کے بارے میں کوئی سوال ہے، تو براہ کرم ہم سے رابطہ کریں:',
      liEmail: 'ای میل: info@zainfotech.com',
      liAddress: '[سعودی عرب میں جسمانی پتہ]',
      liParagraph:
        'یہ شرائط ہمارے درمیان ہماری سروس کے بارے میں مکمل معاہدہ کرتی ہیں، اور کسی بھی پہلے کے معاہدوں کو جو ہماری سروس کے بارے میں ہو سکتی ہیں، منسوخ کرتی ہیں۔',
    },
  ];
  const selectedLangData =
    supportedLanguage.find((item) => item?.lang === currentLanguage) ||
    supportedLanguage[0];
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 py-8">
      <h1 className="text-lg font-bold my-6 text-[#02B1BF]">
        {selectedLangData.mainTitle}
      </h1>
      <p className="text-justify font-normal">
        {selectedLangData.description1}
        <br />
        <br />
        {selectedLangData.description2}
      </p>

      <ul>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li}
        </li>
        <p className="text-justify my-2">{selectedLangData.liDescription}</p>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li1}
        </li>
        <p className="text-justify my-2">{selectedLangData.li1Description}</p>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li2}
        </li>
        <p className="text-justify my-2">
          {selectedLangData.li2Description1}
          <br />
          <br />
          {selectedLangData.li2Description2}
          <br />
          <br />
          {selectedLangData.li2Description3}
        </p>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li3}
        </li>
        <p className="text-justify my-2">{selectedLangData.li3Description}</p>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li4}
        </li>
        <p className="text-justify my-2">{selectedLangData.li4Description}</p>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li5}
        </li>
        <p className="text-justify my-2">{selectedLangData.li5Description}</p>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li6}
        </li>
        <p className="text-justify my-2">{selectedLangData.li6Description}</p>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li7}
        </li>
        <p className="text-justify my-2">{selectedLangData.li7Description}</p>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li8}
        </li>
        <p className="text-justify my-2">{selectedLangData.li8Description}</p>
        <li className="font-semibold text-[#02B1BF] my-4">
          {selectedLangData.li9}
        </li>
        <p className="text-justify my-2">
          {selectedLangData.li9Description}
          <ul>
            <li className="font-semibold text-[#02B1BF] my-4">
              {selectedLangData.liEmail}
            </li>
            <li className="font-semibold text-[#02B1BF] my-4">
              {selectedLangData.liParagraph}
            </li>
          </ul>
        </p>

        {/* <h2 className="text-justify font-semibold">
          {selectedLangData.liParagraph}
        </h2> */}
      </ul>
    </div>
  );
}
