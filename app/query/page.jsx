import React from "react";


import Suggestions from "../components/Suggestions"
const questions =[
    {
            question:" what are the forms of energy",
            answer : "Many forms "
        },
        {
            question:" how can you do experiments",
            answer : "Many forms dfghjn gdrgh  hgeh sh  gherthrth rt ertgerg wtryh rtyh rty wryh rt rttyhrth q 45y54y rty rwy45y "
        },
        {
            question:" who is the first one scored the goal",
            answer : "the player number 6 "
        },
        {
            question:" which color do you prefer",
            answer : "Red "
        },
        {
            question:" what about eating pizza",
            answer : "thats a good idea "
        },
        {
            question:" ماهي كيفية لبس الاحرام؟",
            answer : "شوف حد يقولك ياعم ماتوجعش دماغنا  "
        },
        {
            question:"ماهي شروط الاحرام؟",
            answer : "شوف حد يقولك ياعم ماتوجعش دماغنا  "
        }
]

export default function Querypage() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
   <Suggestions  questions={questions}/>
    </div>
  );
}


// {
//     question:" what are the forms of energy",
//     answer : "Many forms "
// },
// {
//     question:" how can you do experiments",
//     answer : "Many forms "
// },
// {
//     question:" who is the first one scored the goal",
//     answer : "the player number 6 "
// },
// {
//     question:" which color do you prefer",
//     answer : "Red "
// },
// {
//     question:" what about eating pizza",
//     answer : "thats a good idea "
// }
