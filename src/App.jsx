// import React, { useState } from "react";
// import {
//   Phone,
//   Mail,
//   ChevronLeft,
//   ChevronRight,
//   Menu,
// } from "lucide-react";

// import "./App.css";

// import logo from "./assets/logo.png";
// import conveyor from "./assets/qqq.png";
// import video from "./assets/cc.mp4";
// import companyImage from "./assets/company-building.jpg";
// const slides = [
//   {
//     eyebrow: "Assembly",
//     title: "Assembly Belt Conveyor",
//     text: "We are dedicatedly engaged in manufacturing and exporting a matchless range of Assembly Conveyors to our prestigious customers.",
//     image: conveyor,
//   },
//   {
//     eyebrow: "Conveyor",
//     title: "Industrial Conveyor Systems",
//     text: "We manufacture reliable conveyor solutions designed for industrial production and material handling applications.",
//     image: conveyor,
//   },
// ];

// export default function App() {
//   const [active, setActive] = useState(0);

//   const slide = slides[active];

//   const nextSlide = () => {
//     setActive((prev) => (prev + 1) % slides.length);
//   };

//   const previousSlide = () => {
//     setActive((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <>

//       <div className="site">

//         {/* ================= TOP BAR ================= */}

//         <div className="topbar">

//           <div className="topbar-address">
//             Plot No. 353, Sector -68, IMT Faridabad -121004, Haryana, India
//           </div>

//           <div className="topbar-time">
//             Mon - Fri: 09:00AM - 6:00PM
//           </div>

//         </div>


//         {/* ================= HEADER ================= */}

//         <header className="header">

//           <div className="header-logo">
//             <img src={logo} alt="TAPL Logo" />
//           </div>


//           <div className="header-contact">

//             {/* Contact */}

//             <div className="contact-item">

//               <Phone
//                 className="contact-icon"
//                 strokeWidth={1.5}
//               />

//               <div>
//                 <div className="contact-title">
//                   Contact Now
//                 </div>

//                 <div className="contact-value">
//                   +91-8053 650 222
//                 </div>
//               </div>

//             </div>


//             <div className="contact-divider"></div>


//             {/* Mail */}

//             <div className="contact-item">

//               <Mail
//                 className="contact-icon"
//                 strokeWidth={1.5}
//               />

//               <div>
//                 <div className="contact-title">
//                   Mail Us
//                 </div>

//                 <div className="contact-value">
//                   rahul@taplindia.net
//                 </div>
//               </div>

//             </div>


//             {/* Quote */}

//             <button className="quote-btn">
//               Get A Quote
//             </button>

//           </div>

//         </header>


//         {/* ================= NAVIGATION ================= */}

//         <nav className="navbar">

//           <button className="mobile-menu">
//             <Menu size={25} />
//           </button>

//           <div className="nav-inner">

//             <a
//               href="#home"
//               className="nav-link active"
//             >
//               Home
//             </a>

//             <a
//               href="#about"
//               className="nav-link"
//             >
//               About Us
//             </a>

//             <a
//               href="#products"
//               className="nav-link"
//             >
//               Products
//             </a>

//             <a
//               href="#profile"
//               className="nav-link"
//             >
//               Profile
//             </a>

//             <a
//               href="#career"
//               className="nav-link"
//             >
//               Career
//             </a>

//             <a
//               href="#clients"
//               className="nav-link"
//             >
//               Our Clients
//             </a>

//             <a
//               href="#contact"
//               className="nav-link"
//             >
//               Contact Us
//             </a>

//             <a
//               href="#enquiry"
//               className="nav-link enquiry"
//             >
//               Enquiry Now
//             </a>

//           </div>

//         </nav>


//         {/* ================= HERO ================= */}

//         <main className="hero" id="home">

//           {/* Product image */}

//           <div className="hero-machine">

//             <video
//               src={video}
//               width="100%"
//               autoPlay
//               loop
//               muted
//               playsInline
//             />

//             {/* Curved design */}

//             <div className="curve curve-blue"></div>

//             <div className="curve curve-orange"></div>

//           </div>




//         </main>

//       </div>
//       <section className="about-section" id="about">

//         {/* LEFT CONTENT */}
//         <div className="about-content">

//           <div className="about-small-title">
//             COMPANY
//           </div>

//           <h2>
//             About Us
//           </h2>

//           <p>
//             Incepted in the year 2004, Tej Autosystem Pvt. Ltd. is one of the
//             well-known organizations indulged in the business of manufacturing
//             and supplying a quality rich assured collection of Conveyors &
//             Assembly Line, Industrial Workstations & Material Handling Trolley
//           </p>

//           <p>
//             We are an excellence alert organization and deem in working with a
//             patron centric approach. For providing rapid elucidation to our
//             assorted patrons, we efficiently operate our sophisticated
//             technology, tied with our skilled employees to modify our products
//             as per our patrons’ necessities.
//           </p>

//           <button className="read-more-btn">
//             Read More
//           </button>

//         </div>


//         {/* RIGHT IMAGE */}
//         <div className="about-image-wrapper">

//           <div className="image-border">

//             <img
//               src={companyImage}
//               alt="Tej Autosystem Building"
//             />

//           </div>

//         </div>


//         {/* CATALOG TAB */}
//         <div className="catalog-tab">
//           CATALOG
//         </div>


//         {/* SCROLL TOP */}
//         <button
//           className="scroll-top"
//           onClick={() =>
//             window.scrollTo({
//               top: 0,
//               behavior: "smooth",
//             })
//           }
//         >
//           ↑
//         </button>

//       </section>
//     </>

//   );

// }


import React from 'react'

export default function App() {
  return (
  <>
   <primitive
              ref={modelRef}
              object={scene}
  
              scale={16}
  
              position={[0, 0, 0]}
  
              rotation={[
                  0,
                  THREE.MathUtils.degToRad(45),
                  0
              ]}
          />
  
  </>
  )
}
