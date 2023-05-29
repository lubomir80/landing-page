import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import Logo1 from "./img/Contuct_us/Microsoft.png"
import Logo2 from "./img/Contuct_us/Shape.png"
import Logo3 from "./img/Contuct_us/Spotufy.png"
import Logo4 from "./img/Contuct_us/Tesla.png"


import Mercedes1 from "./img/Projects/4.mercedes/1mercedes.jpg"
import Mercedes2 from "./img/Projects/4.mercedes/2mercedes.jpg"
import Mercedes3 from "./img/Projects/4.mercedes/3mercedes.jpg"
import Mercedes4 from "./img/Projects/4.mercedes/4mercedes.jpg"

import BMW1 from "./img/Projects/2.bmw/1bmw.jpg"
import BMW2 from "./img/Projects/2.bmw/2bmw.jpg"
import BMW3 from "./img/Projects/2.bmw/3bmw.jpg"
import BMW4 from "./img/Projects/2.bmw/4bmw.jpg"
import BMW5 from "./img/Projects/2.bmw/5bmw.jpg"

import Audi1 from "./img/Projects/3.audi/1audi.jpg"
import Audi2 from "./img/Projects/3.audi/2audi.jpg"
import Audi3 from "./img/Projects/3.audi/3audi.jpg"
import Audi4 from "./img/Projects/3.audi/4audi.jpg"


import Volvo1 from "./img/Projects/1.Volvo/1volvo.jpg"
import Volvo2 from "./img/Projects/1.Volvo/2volvo.jpg"
import Volvo3 from "./img/Projects/1.Volvo/3volvo.png"
import Volvo4 from "./img/Projects/1.Volvo/4volvo.jpg"



// .............................Social links......................................

export const icons = [
   {
      id: 1,
      icon: <BsInstagram />,
      link: "https://www.instagram.com/",
   },
   {
      id: 2,
      icon: <BsFacebook />,
      link: "https://www.facebook.com/",
   },
   {
      id: 3,
      icon: <BsTwitter />,
      link: "https://twitter.com/?lang=pl",
   },
];





// ...............................Navbar Navigation..................................

export const navbarHome = [
   {
      id: 100,
      name: "About",
      link: "#preferences"
   },
   {
      id: 200,
      name: "Works",
      link: "#works"
   },
   {
      id: 300,
      name: "Contact",
      link: "#partner"
   },

]

export const navbarProject = [
   {
      id: 1,
      name: "Price",
      link: "#price"
   },
   {
      id: 2,
      name: "More",
      link: "#more"
   },
]

// ...................................LOGOS....................................

export const logos = [
   {
      id: 11,
      logo: Logo1,
   },
   {
      id: 22,
      logo: Logo2,
   },
   {
      id: 33,
      logo: Logo3,
   },
   {
      id: 44,
      logo: Logo4,
   },

]
// ....................................OUR PROJECTS DATA.................................

export const projects = [
   {
      projectId: 1,
      name: "Mercedes",
      image: Mercedes2,
      imageMain: Mercedes1,
      title: "Mercedes is one of the best car at the moment",
      text1: "The special fascination of the BMW Group not only lies in its products and technology, but also in the company’s history, written by inventors, pioneers and brilliant designers. Today, the BMW Group, with its 31 production and assembly facilities in 15 countries as well as a global sales network, is the world’s leading manufacturer of premium automobiles and motorcycles, and provider of premium financial and mobility services.",
      text2: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      mobileImage1: Mercedes2,
      mobileImage2: Mercedes3,
      text3: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text4: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      footerImage: Mercedes4,
      text5: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text6: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket  equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      numbers: [{ number: "350", title: "hours" }, { number: "$1520", title: "price" }, { number: "$190", title: "minervaview" }],

      link: "#",
   },
   {
      projectId: 2,
      name: "BMW",
      image: BMW3,
      imageMain: BMW5,
      title: "The BMW Group company profile",
      text1: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text2: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      mobileImage1: BMW2,
      mobileImage2: BMW1,
      text3: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text4: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      footerImage: BMW4,
      text5: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text6: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket  equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      numbers: [{ number: "450", title: "hours" }, { number: "$1820", title: "price" }, { number: "254", title: "minervaview" }],

      link: "#",
   },
   {
      projectId: 3,
      name: "Audi",
      image: Audi4,
      imageMain: Audi1,
      title: "Audi is one of the best car at the moment",
      text1: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text2: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      mobileImage1: Audi4,
      mobileImage2: Audi3,
      text3: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text4: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      footerImage: Audi2,
      text5: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text6: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket  equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      numbers: [{ number: "420", title: "hours" }, { number: "$940", title: "price" }, { number: "160", title: "minervaview" }],

      link: "#",
   },
   {
      projectId: 4,
      name: "Volvo",
      image: Volvo1,
      imageMain: Volvo2,
      title: "Volvo is one of the best car at the moment",
      text1: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text2: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      mobileImage1: Volvo1,
      mobileImage2: Volvo3,
      text3: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text4: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      footerImage: Volvo4,
      text5: "The SpaceX rocket booster that carried two NASA astronauts on a historic journey to the International Space Station two months ago took flight once again on Monday evening — this time to launch a hefty communications satellite into orbit. The rocket took off from Florida's Cape Canaveral Air Force Station around 5:30 pm ET. Inside the bulbous nose cone at the rocket's tip was a communications satellite that belongs to the South Korean military.SpaceX did not show the satellite deploying from rocket, something the company typically leaves out of its webcasts when taking sensitive national security- related cargo to space.  ",
      text6: "But the company did show the landing of its first - stage booster, the bottom - most portion of the rocket  equipped with nine massive engines that provided the Falcon 9 rocket's initial thrust at liftoff. The rocket booster SpaceX used for Monday's mission was previously flown on SpaceX's first-ever mission with humans on board.",
      numbers: [{ number: "550", title: "hours" }, { number: "$2520", title: "price" }, { number: "310", title: "minervaview" }],

      link: "#",
   },

];

