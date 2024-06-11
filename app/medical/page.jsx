'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import FeedBackModal from '../components/FeedBackModal';
import Map3 from '../components/Map3';

export default function MedicalLocation() {
  const [modelOpened, setModelOpened] = useState(false);
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  console.log(currentLanguage, 'lang selected');

  useEffect(() => {
    axios.get('/api/nearby').then((response) => {
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const hasRendered = localStorage.getItem('feedBackForInit');
    if (!hasRendered) {
      setTimeout(() => {
        setModelOpened(true);
        localStorage.setItem('feedBackForInit', true);
      }, 5000);
    }
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="m-2">
        <button
          onClick={() => {
            location.replace('/');
          }}
          type="button"
          class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:text-[#02B1BF] bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 font-semibold"
        >
          <RxArrowLeft size={28} />
          <span>Go back</span>
        </button>
      </div>
      <div className={`${modelOpened ? 'opacity-20' : ''}`}>
        <Map3 />
      </div>

      <FeedBackModal setIsOpen={setModelOpened} isOpen={modelOpened} />
    </div>
  );
}
