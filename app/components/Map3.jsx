'use client';
import GlobalApi from '../Shared/GlobalApi';
import BusinessList from '../components/BusinessList';

import GoogleMapView from '../components/GoogleMapView';

import SkeltonLoading from '../components/SkeltonLoading';
import { UserLocationContext } from '../context/UserLocationContext';

import { useContext, useEffect, useState } from 'react';

export default function Home() {
  const [category, setCategory] = useState('hospitals');
  const [radius, setRadius] = useState(1000);
  const [businessList, setBusinessList] = useState([]);
  const [businessListOrg, setBusinessListOrg] = useState([]);
  const [loading, setLoading] = useState(false);

  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const specificHospitals =[
    {
      name :"مركز صحي النوارية",
      geometry:{
        location:{
          lat: 21.563290788973944, 
          lng: 39.77369848650691 ,}
        
      },
       
       rating :3,
       formatted_address:"7733, Makkah Al Madinah Munawawrah Road, 24416, Makkah Saudi Arabia"},
    {
      
      name :"مركز صحي مخططات الشرايع 7",
      geometry:{
        location:{
          lat: 21.47171387151397, 
       lng: 39.92771572883564 ,}
        
      },
       
       
       rating :3.5,
       formatted_address:"8689 Muhammad Saleh Ibrahim Khouzami, Al Khadra, Makkah 24267, Saudi Arabia"},
    {

      name :'مستشفي الزاهر',
      geometry:{
        location:{
          lat: 21.443394620132544, 
       lng: 39.80678 ,}
        
      },

       
       rating :3.9,
       formatted_address:"Az Zahir, Makkah 24222, Saudi Arabia"},
    {
      name :"مركز صحي العزيزية الشرقية",
      geometry:{
        location:{
          lat: 21.403708415312682,  
       lng: 39.88039979815053 ,}
        
      },
       
       rating :4.2,
       formatted_address:"MEBA7930، 2600 Al Nakhil, حي المرسلات، 7930، Unnamed Road 24247, Makkah 24247, Saudi Arabia"},
  ]
  
  useEffect(() => {
    if (category && userLocation) { // Ensure both category and userLocation are available
      setLoading(true);
  
      GlobalApi.getGooglePlace(
        category,
        radius,
        userLocation.lat,
        userLocation.lng
      ).then((resp) => {
        const joinedPlaces = specificHospitals.concat(resp.data.hospitals.results);
  
        const placesWithDistance = joinedPlaces?.map((place) => {
          const distance = calculateDistance(
            place.geometry.location.lat,
            place.geometry.location.lng,
            userLocation.lat,
            userLocation.lng
          );
          return { ...place, distance };
        });
  
        const sortedPlaces = placesWithDistance?.sort((a, b) => a.distance - b.distance);
  
        setBusinessList(sortedPlaces);
        setBusinessListOrg(sortedPlaces); // Assuming you need an unsorted copy
        setLoading(false);
      });
    }
  }, [category, radius, userLocation])



  return (

    <div className="px-1 ">
      
      <GoogleMapView businessList={businessList} />
      <div className="mb-10">
        {!loading  ? (
          <BusinessList businessList={businessList} />
        ) : (
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <SkeltonLoading key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}




const calculateDistance = (lat1, lon1, lat2, lon2) => {
  
  const earthRadius = 6371; // in kilometers

  const degToRad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;
 
  return distance.toFixed(2); // Return the distance with 2 decimal places
};

