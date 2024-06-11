/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import moment from 'moment';

import { useEffect, useState } from 'react';
import { isValidArray } from '../../../lib/func';
import API from '../../../lib/instance/instance';
const feedBack = () => {
  const [feedBacks, setFeedBacks] = useState([]);

  useEffect(() => {
    const fetchFeedBack = async () => {
      try {
        const res = await API.get('/api/feedback');
        console.log(res.data.data, 'result feedback');
        if (res.data?.success) {
          setFeedBacks(res?.data?.data);
        }
      } catch (error) {}
    };
    fetchFeedBack();
  }, []);
  return (
    <div className="pb-10">
      <h2 className="p-4 text-2xl font-bold font-inter">All Feedbacks</h2>
      <ul className="w-full lg:w-[600px] mx-auto">
        {isValidArray(feedBacks) &&
          feedBacks.map((feedback, index) => (
            <li key={index} className="border p-4 mt-3 rounded-md">
              <div>
                <p>
                  <span className="font-bold">Rating:</span> {feedback.rating}{' '}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold"> Message:</span>{' '}
                  {feedback.message}{' '}
                </p>
              </div>
              <p>
                <strong>Date:</strong>{' '}
                <span className="text-gray-400">
                  {' '}
                  {moment(feedback.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </span>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default feedBack;
