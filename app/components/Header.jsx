'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modals from './Modals';
export default function Header() {
  const [lang, setLang] = useState('English');
  const path = usePathname();
  const router = useParams();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const currentLanguageFullName = useSelector(
    (state) => state.language.currentLanguageFullName
  );

  const appTitle = {
    en: 'AI Health Assistant for Guests of Allah',
    ar: 'المثقف الصحي لضيوف الرحمن',
    bn: 'আল্লাহর অতিথিদের জন্য এআই স্বাস্থ্য সহকারী',
    bm: 'Pembantu Kesihatan Kecerdasan Buatan untuk Tetamu Allah',
    ud: 'اللہ کے مہمانوں کے لیے اے آئی ہیلتھ اسسٹنٹ',
    fr: "Assistant Santé AI pour les Invités d'Allah",
    in: 'Asisten Kesehatan AI untuk Tamu Allah',
    tr: "Allah'ın Misafirleri için AI Sağlık Asistanı",
    hn: 'अल्लाह के मेहमानों के लिए एआई स्वास्थ्य सहायक',
    ks: 'Msaidizi wa Afya wa AI kwa Wageni wa Allah',
    fa: 'دستیار سلامت هوش مصنوعی برای مهمانان الله',
  };

  if (router?.id && path.startsWith('/healthcare')) {
    return null;
  }

  return (
    <div className=" shadow-sm flex gap-2 relative flex-col  pb-4  items-center bg-gray-50">
      <div className="flex items-center justify-center w-full ">
        <Link href="/" className="w-[50%] ">
          <Image
            src="/logoAI.svg"
            height={400}
            width={400}
            alt="logo"
            className=" mt-4 mb-2 w-full "
            priority
          />
        </Link>
        {/* <Image src="/diaf.png" alt="diaf" width={180} height={180} /> */}
      </div>
      <h1 className=" leading-5 my-1 text-[#085f63] px-2 font-semibold">
        {appTitle[currentLanguage]}
      </h1>
      <div>
        <div className="flex items-center justify-center gap-3 h-10">
          <p className=" rounded-md p-2 bg-[#dbeefd] text-[#02B1BF] text-center pt-[10px] px-4">
            {currentLanguageFullName}
          </p>
          <div>
            <Modals setLang={setLang} />
          </div>
        </div>
        {/* <select


        className="bg-gray-300 font-semibold p-2 rounded-md  mr-2 mt-4  "<
        fgg
      >
        <option value="en" className="flex  items-center  ">

          English
        </option>
        <option value="ar" className=""> Arabic</option>
        <option value="ur" className=" "> Urdu</option>
        <option value="fr" className=""> French</option>
        <option value="tu" className=" "> Turkish</option>
        <option value="de" className=" "> Deutsch</option>
      </select> */}
      </div>
      {/* <div className=" flex absolute left-8 items-center gap-2 mt-3 ">
        <button className="bg-[#E6EFEA] rounded-lg py-2  px-3 text-green-800 font-semibold">
          En
        </button>
        <button className="bg-[#E6EFEA] rounded-lg py-2 px-3 text-green-800 font-semibold">
          Ar
        </button>
      </div> */}
    </div>
  );
}
