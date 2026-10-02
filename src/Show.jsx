import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import World from "./World";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
export default function Show() {
  const data = [
    {
      id: 1, top: "SPACE : THREAT -01 ", name: "CATACYSMIX X", description: " Extinction  level capacity capable of reducing mountain ranges to luquid magma", status: "LETHALITY ", percantage: "98%"
    }, {
      id: 2, top: "SPEC: AERO-02 ", name: "Crest Span", description: "Supersonic downforce generation creates hurricane gusts burning sulfur winds", status: "AIR SUPREMACY", percantage: "88.0%"
    },
    {
      id: 3, top: "SPEC: EMISSION-03", name: "Pyrolastic Hellfire", description: "Pressurized liquid granite infused with volatile Draconic mana cores.", status: "HEAT PRESSURE", percantage: "96.0%"
    },
    {
      id: 4, top: "SPEC: ARMOR-043", name: "Dragonite Plating", description: "Natural obsidian-carapace layered with crystallized molten minerals.", status: "BALLISTIC ABSORPTION", percantage: "91.0%"
    },


  ]

  const data2 = [
    {
      id: 1, icon: "https://res.cloudinary.com/dzvavsp8y/image/upload/q_auto,f_auto,w_50/ws_gliput.png", name: "Fire / Pyromancy", lower: "  Absorbs 100% into Core"
    },
    {
      id: 2, icon: "https://res.cloudinary.com/dzvavsp8y/image/upload/q_auto,f_auto,w_50/s_j8uln9.png", name: "Cryo / Glacial", lower: "Crystallizes molten seams"
    },
    {
      id: 3, icon: "https://res.cloudinary.com/dzvavsp8y/image/upload/q_auto,f_auto,w_50/screen_pepa8s.png", name: "Thunder / Voltaic", lower: "Scale deflection rated"
    },
    {
      id: 4, icon: "https://res.cloudinary.com/dzvavsp8y/image/upload/q_auto,f_auto,w_50/edfvb_vsu7ak.png", name: "Nether / Void", lower: "Bypasses dragonite plates"
    }

  ]

  const [count, setCount] = useState(29288)

  useEffect(() => {


    const timer = setInterval(() => {
      setCount((count) => count - 1)

    }, 1000);
    return () => clearInterval(timer)
  }, [])
  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  return (
    <main className="show">
      
      {/* <div className="model">
        <Canvas
          camera={{
            position: [1, 30, 1],
            fov: 45
          }}
        >
          <ambientLight intensity={2} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={5}
          />

          <World />
        </Canvas>
      </div> */}



      <section className="hero">
        <nav>
          <div className="left_link">
            <ul>
              <li>CHRONICLES</li>
              <li> BESTIARY</li>
              <li> FIREBASE</li>
            </ul>
          </div>
          <div className="right_link">
            <ul>
              <li> DRAGONFORCE</li>
              <li> GUILDS</li>
              <li> DRAGONWAR</li>
              {/* <li> <button>Enter Realm</button></li> */}

            </ul>
          </div>

        </nav>

        <div className="overlap_content">
          <h1>
            IGNIS THE  <span>
              SCARIET APEX
            </span>
          </h1>
          <h2>Slumbering for ten thousand winters beneath the sulfur mantle of Mount Caldera, the progenitor of cataclysmic pyres has uncoiled. Its wingspan blotted out the northern skies, bringing forth an era bathed in ash and cinder</h2>
        </div>

      </section>
      <section className="second">
        <div className="about">
          <p className="head1" >
            // TACTICAL BESTIARY DOSSIER //
          </p>
          <h1 className="headline" > ELDER DRAGON HUD & PHYSIOLOGY</h1>
          <div className="container">

            {
              data.map((item, index) => (
                <div className="first" key={index}>
                  <p>{item.top}     <span>🔥</span></p>
                  <div className="content">
                    <h1>
                      {item.name}
                    </h1>
                    <p>
                      {item.description}
                    </p>

                  </div>
                  <div className="loader"></div>
                  <p>{item.status}  <span>{item.percantage}</span></p>
                </div>

              ))
            }
          </div>

          <div className="details">
            <div className="line2">
              <div className="ele">
                <p>ELEMENTAL AFFINITY SPECTRUM</p>
                <h1>Resistances & Battle Vulnerabilities</h1>
              </div>
              <p>
                Immune / Absorb/ Neutral / Susceptible</p>
            </div>
            <div className="line">
              {
                data2.map((item, index) => (
                  <div className="box" key={index}>
                    <img src={item.icon} alt="" />
                    <div className="text">
                      <h1>{item.name}</h1>
                      <h2>
                        {item.lower}
                      </h2>

                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className="four">
        <div className="hunter">
          <div className="left1">
            <p className="top_sec">
              Global World Boss Campaign Event
            </p>

            <h1>
              Hunt the Scarlet Apex
            </h1>
            <h2>
              Valdras Realm Alert: Ignis has nested in the caldera peak. Rally your guild, prepare Frost-forged ballistas, and strike before its thermal shield incinerates the outer sanctuary.
            </h2>
            <div className="rate">
              <div className="rate2">
                <p>
                  ENLISTED DRAGONSLAYERS
                </p>
                <p>
                  14,892 Warriors
                </p>
              </div>
              <div className="rate2">
                <p> ESTIMATED SURVIVAL</p>
                <p> 3.2%</p>
              </div>
            </div>
          </div>
          <div className="right1">
            <div className="boxx">
              <h1 className="title">
                CALENDER ERUPTION COUNTDOWN
              </h1>
              <div className="counter">
                <div className="timer">{hours} <p>
                  Hourse</p> </div>
                <div className="timer"> <span className="min"> {minutes}  </span> <p> Min</p> </div>
                <div className="timer"> <span className="sec"> {seconds}</span> <p> Sec</p> </div>
              </div>
              <div className="drop">
                <img src="https://res.cloudinary.com/dzvavsp8y/image/upload/q_auto,f_auto,w_60/wdv_alcoyd.png" alt="" />
                <h1>
                  Heart of Ignis (Mythic) <span>
                    Guaranteed Legendary Core Drop
                  </span>
                </h1>
                <h2>
                  1x DROP
                </h2>
              </div>
              <button className="btn"> Pledge Blade to the Raid</button>
            </div>

          </div>

        </div>


      </section>
      <footer>
        <div className="foot">
          <div className="col1">
            <ul>
              <h1>
                CHRONICLES
              </h1>
              <li> The First Wyrmwar</li>
              <li> Scarlet Pantheon</li>
              <li> Mount Caldera Map</li>
              <li> Dragon Anatomy Index</li>
            </ul>
          </div>
          <div className="col1">
            <ul>
              <h1>
                Dragonforge
              </h1>
              <li> Slayer Specializations</li>
              <li>Dragonite Blacksmithing</li>
              <li> Pyrolastic Runes</li>
              <li> Guild Citadel Wars</li>
            </ul>
          </div>
          <div className="col1">
            <ul>
              <h1>
                Realm Portals
              </h1>
              <li> <span className="dot">●</span>  Valdras [US-East]</li>
              <li><span className="dot1">●</span>  Caldera [EU-West]</li>
              <li> <span className="dot3">●</span>  Drakon [Asia-Pacific]</li>
              <li className="red" > System Diagnostics</li>
            </ul>
          </div>

        </div>
        <div className="copyright">
          <p>
            @2026 Dragon Studio. ALL rights reserved . Registered in High Calender
          </p>
          <ol>
            <li> Realm Codex</li>
            <li> Privacy Shield</li>
            <li> Hunter Code</li>
          </ol>
        </div>
      </footer>
    </main>
  );
}