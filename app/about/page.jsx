'use client';
import { useSelector } from 'react-redux';

export default function AboutPage() {
  const currentLanguage = useSelector(
    (state) => state?.language?.currentLanguage
  );

  const supportedLanguage = [
    {
      lang: 'en',
      title1:
        'Revolutionizing Healthcare for Pilgrims with Medical AssistantAI',
      description1:
        'Medical AssistantAI is an innovative multilingual AI chatbot built to provide pilgrims with personalized healthcare assistance during their journey to Makkah for Hajj or Umrah. Powered by the latest advancements in OpenAIs language models, Medical AssistantAI offers real-time, efficient, and accessible health advice in multiple languages. Designed not only for pilgrims but also for medical professionals, volunteers, and local health authorities involved in the pilgrimage, Medical AssistantAI aims to ensure a safe and healthy pilgrimage experience for all.',
      title2: 'A Commitment to Transforming Global Pilgrimage Health',
      description2:
        'At Medical AssistantAI, our commitment goes beyond developing cutting-edge AI for healthcare. We focus on addressing the unique health challenges faced by pilgrims in the bustling environment of Makkah during Hajj and Umrah. By leveraging top-tier technology, we aim to improve health outcomes and elevate the overall pilgrimage experience on a global scale.',
      title3: 'DISCLAIMER:',
      description3:
        'The information and assistance provided by Medical AssistantAI are intended for general informational purposes only and do not serve as a substitute for professional medical advice, consultation, or services. By using Medical AssistantAI, you agree to our Privacy Policy and Terms & Conditions. Please consult these documents for more information on the limitations, usage, and responsibilities linked to the service.',
    },
    {
      lang: 'bn',
      title1: 'মেডিকেল অ্যাসিস্ট্যান্টএআই দিয়ে হাজীদের স্বাস্থ্যসেবা বিপ্লব',
      description1:
        'মেডিকেল অ্যাসিস্ট্যান্টএআই একটি উদ্ভাবনী বহুভাষিক এআই চ্যাটবট যা হাজী এবং উমরাহ যাত্রায় হাজীদের ব্যক্তিগত স্বাস্থ্যসেবা সহায়তা প্রদানের জন্য তৈরি করা হয়েছে। OpenAI-এর ভাষার মডেলের সর্বশেষ উন্নতিগুলির দ্বারা চালিত, মেডিকেল অ্যাসিস্ট্যান্টএআই একাধিক ভাষায় রিয়েল-টাইম, দক্ষ এবং সহজলভ্য স্বাস্থ্য পরামর্শ সরবরাহ করে। এটি কেবল হাজীদের জন্য নয়, মেডিকেল পেশাদার, স্বেচ্ছাসেবক এবং তীর্থযাত্রার সাথে জড়িত স্থানীয় স্বাস্থ্য কর্তৃপক্ষের জন্যও ডিজাইন করা হয়েছে, মেডিকেল অ্যাসিস্ট্যান্টএআই সকলের জন্য একটি নিরাপদ এবং সুস্থ তীর্থযাত্রা নিশ্চিত করার লক্ষ্যে কাজ করে।',
      title2: 'বিশ্বব্যাপী তীর্থযাত্রার স্বাস্থ্য রূপান্তর করার প্রতিশ্রুতি',
      description2:
        'মেডিকেল অ্যাসিস্ট্যান্টএআই-এ, আমাদের প্রতিশ্রুতি কেবল স্বাস্থ্যসেবার জন্য উন্নত এআই বিকাশের মধ্যেই সীমাবদ্ধ নয়। আমরা হজ এবং উমরাহ সময় মক্কার ব্যস্ত পরিবেশে হাজীদের মুখোমুখি হওয়া অনন্য স্বাস্থ্য চ্যালেঞ্জগুলির সমাধানে মনোনিবেশ করি। সর্বোত্তম প্রযুক্তি ব্যবহার করে, আমরা স্বাস্থ্য ফলাফলগুলি উন্নত করতে এবং বিশ্বব্যাপী তীর্থযাত্রার সামগ্রিক অভিজ্ঞতা উন্নত করার লক্ষ্যে কাজ করি।',
      title3: 'বিবৃতি:',
      description3:
        'মেডিকেল অ্যাসিস্ট্যান্টএআই দ্বারা প্রদত্ত তথ্য এবং সহায়তা শুধুমাত্র সাধারণ তথ্যগত উদ্দেশ্যে দেওয়া হয় এবং এটি পেশাদার চিকিৎসা পরামর্শ, পরামর্শ বা পরিষেবার বিকল্প হিসাবে কাজ করে না। মেডিকেল অ্যাসিস্ট্যান্টএআই ব্যবহার করে, আপনি আমাদের গোপনীয়তা নীতি এবং শর্তাবলী সম্মত হন। দয়া করে সেবার সাথে সম্পর্কিত সীমাবদ্ধতা, ব্যবহার এবং দায়িত্ব সম্পর্কে আরও তথ্যের জন্য এই নথিগুলি পরামর্শ করুন।',
    },
    {
      lang: 'ar',
      title1: 'ثورة في الرعاية الصحية للحجاج مع مساعد الطبي AI',
      description1:
        'مساعد الطبي AI هو روبوت محادثة مبتكر متعدد اللغات تم تصميمه لتوفير المساعدة الصحية الشخصية للحجاج أثناء رحلتهم إلى مكة المكرمة لأداء الحج أو العمرة. مدعومًا بأحدث التطورات في نماذج اللغة من OpenAI، يقدم مساعد الطبي AI نصائح صحية في الوقت الفعلي، بكفاءة وسهولة في الوصول، وبالعديد من اللغات. تم تصميمه ليس فقط للحجاج، ولكن أيضًا للمهنيين الطبيين والمتطوعين والسلطات الصحية المحلية المشاركة في الحج، يهدف مساعد الطبي AI إلى ضمان تجربة حج آمنة وصحية للجميع.',
      title2: 'التزام بتحويل صحة الحج العالمية',
      description2:
        'في مساعد الطبي AI، يذهب التزامنا إلى ما هو أبعد من تطوير الذكاء الاصطناعي المتقدم للرعاية الصحية. نحن نركز على معالجة التحديات الصحية الفريدة التي يواجهها الحجاج في البيئة المزدحمة لمكة المكرمة خلال الحج والعمرة. من خلال الاستفادة من التكنولوجيا المتقدمة، نسعى لتحسين النتائج الصحية ورفع التجربة العامة للحج على مستوى العالم.',
      title3: 'إخلاء المسؤولية:',
      description3:
        'المعلومات والمساعدة المقدمة من مساعد الطبي AI تهدف لأغراض معلوماتية عامة فقط ولا تعتبر بديلاً عن النصائح الطبية المهنية أو الاستشارات أو الخدمات. باستخدام مساعد الطبي AI، فإنك توافق على سياسة الخصوصية والشروط والأحكام الخاصة بنا. يرجى الرجوع إلى هذه الوثائق لمزيد من المعلومات حول القيود والاستخدام والمسؤوليات المرتبطة بالخدمة.',
    },
    {
      lang: 'bm',
      title1:
        'Merevolusikan Penjagaan Kesihatan untuk Jemaah dengan Medical AssistantAI',
      description1:
        'Medical AssistantAI adalah chatbot AI berbilang bahasa yang inovatif dibina untuk menyediakan bantuan penjagaan kesihatan peribadi kepada jemaah semasa perjalanan mereka ke Makkah untuk Haji atau Umrah. Dikuasakan oleh kemajuan terkini dalam model bahasa OpenAI, Medical AssistantAI menawarkan nasihat kesihatan masa nyata, cekap, dan mudah diakses dalam pelbagai bahasa. Direka bukan sahaja untuk jemaah tetapi juga untuk profesional perubatan, sukarelawan, dan pihak berkuasa kesihatan tempatan yang terlibat dalam ibadah haji, Medical AssistantAI bertujuan untuk memastikan pengalaman haji yang selamat dan sihat untuk semua.',
      title2: 'Komitmen untuk Mengubah Kesihatan Ibadah Haji Global',
      description2:
        'Di Medical AssistantAI, komitmen kami melangkaui pembangunan AI canggih untuk penjagaan kesihatan. Kami memberi tumpuan kepada menangani cabaran kesihatan unik yang dihadapi oleh jemaah dalam persekitaran yang sibuk di Makkah semasa Haji dan Umrah. Dengan memanfaatkan teknologi terkemuka, kami berusaha untuk memperbaiki hasil kesihatan dan meningkatkan pengalaman ibadah haji secara keseluruhan di peringkat global.',
      title3: 'PENAFIAN:',
      description3:
        'Maklumat dan bantuan yang disediakan oleh Medical AssistantAI adalah untuk tujuan maklumat am sahaja dan tidak menggantikan nasihat perubatan profesional, rundingan, atau perkhidmatan. Dengan menggunakan Medical AssistantAI, anda bersetuju dengan Dasar Privasi dan Terma & Syarat kami. Sila rujuk dokumen-dokumen ini untuk maklumat lanjut mengenai batasan, penggunaan, dan tanggungjawab yang berkaitan dengan perkhidmatan ini.',
    },
    {
      lang: 'ud',
      title1:
        'میڈیکل اسسٹنٹ اے آئی کے ساتھ حجاج کے لئے صحت کی دیکھ بھال میں انقلاب',
      description1:
        'میڈیکل اسسٹنٹ اے آئی ایک جدید متعدد زبانوں والا اے آئی چیٹ بوٹ ہے جو حجاج کو حج یا عمرہ کے دوران مکہ مکرمہ کے سفر میں ذاتی صحت کی دیکھ بھال کی معاونت فراہم کرنے کے لئے بنایا گیا ہے۔ اوپن اے آئی کی زبان کے ماڈلز میں تازہ ترین پیش رفتوں سے تقویت یافتہ، میڈیکل اسسٹنٹ اے آئی متعدد زبانوں میں حقیقی وقت میں، مؤثر اور قابل رسائی صحت کے مشورے فراہم کرتا ہے۔ یہ نہ صرف حجاج کے لئے بلکہ میڈیکل پیشہ وران، رضاکاروں، اور حج میں شامل مقامی صحت کے حکام کے لئے بھی ڈیزائن کیا گیا ہے، میڈیکل اسسٹنٹ اے آئی کا مقصد سب کے لئے محفوظ اور صحت مند حج کا تجربہ یقینی بنانا ہے۔',
      title2: 'عالمی حج صحت کو تبدیل کرنے کا عزم',
      description2:
        'میڈیکل اسسٹنٹ اے آئی میں، ہمارا عزم صحت کی دیکھ بھال کے لئے جدید ترین اے آئی کی ترقی سے آگے بڑھتا ہے۔ ہم حج اور عمرہ کے دوران مکہ مکرمہ کے مصروف ماحول میں حجاج کو درپیش منفرد صحت کے چیلنجوں کو حل کرنے پر توجہ مرکوز کرتے ہیں۔ اعلیٰ معیار کی ٹیکنالوجی کا استعمال کرتے ہوئے، ہم صحت کے نتائج کو بہتر بنانے اور عالمی سطح پر حج کے مجموعی تجربے کو بلند کرنے کے لئے کام کرتے ہیں۔',
      title3: 'دستبرداری:',
      description3:
        'میڈیکل اسسٹنٹ اے آئی کے ذریعہ فراہم کردہ معلومات اور معاونت صرف عمومی معلوماتی مقاصد کے لئے ہیں اور پیشہ ورانہ طبی مشورے، مشاورت، یا خدمات کا متبادل نہیں ہیں۔ میڈیکل اسسٹنٹ اے آئی کا استعمال کرتے ہوئے، آپ ہماری پرائیویسی پالیسی اور شرائط و ضوابط سے اتفاق کرتے ہیں۔ براہ کرم سروس سے منسلک حدود، استعمال، اور ذمہ داریوں کے بارے میں مزید معلومات کے لئے ان دستاویزات سے مشورہ کریں۔',
    },
  ];
  const selectedLangData =
    supportedLanguage.find((item) => item?.lang === currentLanguage) ||
    supportedLanguage[0];
  return (
    <div className="min-h-screen w-full px-6 py-8 flex flex-col justify-center ">
      <h1 className="text-xl font-bold my-6 text-[#02B1BF]">
        {selectedLangData.title1}
      </h1>
      <p className="text-justify text-lg">{selectedLangData.description1}</p>
      <h1 className="text-xl font-bold my-6 text-[#02B1BF]">
        {selectedLangData.title2}
      </h1>
      <p className="text-justify text-lg">{selectedLangData.description2}</p>

      <p className="text-justify text-lg my-6">
        <span className="text-[#02B1BF] font-bold">
          {selectedLangData.title3}
        </span>
        {selectedLangData.description3}
      </p>
    </div>
  );
}
