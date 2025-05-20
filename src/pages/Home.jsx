import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import aboutImg from "../assets/prj-4.png";
// import { useRef, useEffect } from "react";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);


const Home = () => {

  const textContainer = useRef(null);
  const textRefs = useRef([]);
  const text1Refs = useRef([]);

  const containerRef = useRef(null);
  const text2Refs = useRef([]);
  const arrowRef = useRef(null);
  const footerRef = useRef(null);
  const linksRef = useRef([]);
 
  


  useEffect(() => {
    // Fade in and scale container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          
          toggleActions: "play none none reverse",
        },
      }
    );

    // Staggered text animation
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          
        },
      }
    );

    // Floating arrow effect
    gsap.to(arrowRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });     
  }, []);

  useEffect(() => {
    linksRef.current.forEach((link) => {
      const text = link.querySelector(".text"); // Original text
      const clone = link.querySelector(".clone"); // Cloned text

      gsap.set(clone, { y: "100%" }); // Clone starts below

      link.addEventListener("mouseenter", () => {
        gsap.to(text, { y: "-100%", duration: 0.4, ease: "power2.out" });
        gsap.to(clone, { y: "0%", duration: 0.4, ease: "power2.out" });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(text, { y: "0%", duration: 0.4, ease: "power2.in" });
        gsap.to(clone, { y: "100%", duration: 0.4, ease: "power2.in" });
      });
    });
  }, []);

  // Floating animation effect
  useEffect(() => {
    textRefs.current.forEach((el) => {
      gsap.to(el, {
        y: gsap.utils.random(-40, 40),
        x: gsap.utils.random(-30, 30),
        duration: gsap.utils.random(1, 6),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  // Magnetic Hover Effect
  const handleMouseMove = (event) => {
    text1Refs.current.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        gsap.to(el, { x: dx * 0.3, y: dy * 0.3, scale: 1.2, duration: 0.3 });
      } else {
        gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.5 });
      }
    });
  };

  // Make text draggable
  useEffect(() => {
    text1Refs.current.forEach((el) => {
      Draggable.create(el, {
        type: "x,y",
        bounds: textContainer.current,
        inertia: true,
        onRelease: function () {
          gsap.to(el, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.5)" });
        },
      });
    });
  }, []);

  const words = [
    "Creative Direction",
    "Brand Identity",
    "Digital Design",
    "User Experience",
    "Motion Graphics",
    "3D Animation",
    "Frontend Dev",
    "Webflow Expert",
  ];
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 50%",
              scrub: true,markers: true,
            },
          }
        );
      }
    });
  }, []);

  const textRef = useRef(null);
  useEffect(() => {
    const textElement = textRef.current;
    const textWidth = textRef.current.scrollWidth / 2; // Get half of the text width
    gsap.to(textElement, {
      x: `-${textWidth}px`, // Move exactly by its own width
      duration: 15, // Adjust speed as needed
      ease: "none",
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <>
      <div>
        <section className="pt-[9rem] overflow-x-hidden ">
          <div className="w-full min-h-[calc(100vh-9rem)] mb-[2rem] overflow-hidden relative">

            {/* Scroll Indicator */}
            <div className="text-[15px] absolute top-[25%] left-[3rem] -translate-y-1/2 flex h-[220px]">
              <p className="overflow-hidden w-[15rem]">
                <span className="items-center inline-flex leading-none">
                  01//04
                  <span className="w-[10px] h-[1px] bg-white mx-2"></span>
                  <span>SCROLL</span>
                </span>
                <span className="inline-block mx-2">
                  <svg width="12px" height="12px" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
              </p>
            </div>

            {/* Main Heading */}
            <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold flex flex-col justify-center items-center text-[128px] text-center leading-25">
              <span className="flex items-center -ml-60">
                MULTI
                <span className="w-[30px] h-[5px]  bg-white mx-2"></span>
              </span>
              <span>DISCIPLINARY</span>
              <span className="inline-flex items-start ml-68">
                DESIGNER
                <span className="flex flex-col text-[14px] h-[5rem] w-[18rem] items-start leading-tight ml-4 ">
                  <span className="ml-10">CREATIVE THINKING AND PROBLEM</span>
                  <span>SOLVING ARE WHERE MY MIND WANDERS,</span>
                  <span>USING MY KNOWLEDGE AND PASSION FOR</span>
                  <span>DESIGN AS MY MEDIUM</span>
                </span>
              </span>
            </div>

            <div>
              <div className="circle w-25 h-25 rounded-full border-2 border-white absolute bottom-0 left-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                <span className="arrow">
                  <svg width="30px" height="30px" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div>
            </div>
          </div>
        </section>

        <div className=" flex px-15 py-10">
          <span className="line h-[1px] w-full bg-white"></span>
        </div>

        <section className="h-[130vh] w-full overflow-hidden">
          <div className="header w-[100%] flex justify-between px-15 uppercase text-[14px]">
            <div><span>02/</span></div>
            <div className="ml-45"><span>About</span></div>
            <nav>
              <ul className="flex justify-between items-center gap-2 ml-25">
                <li><a href="">Email &nbsp;/</a></li>
                <li><a href="">Linkdin &nbsp;/</a></li>
                <li><a href="">GitHub &nbsp;/</a></li>
                <li><a href="">Twitter </a></li>
              </ul>
            </nav>
            <div><span>/04</span></div>
          </div>

          <div className="px-24 pt-25 relative flex flex-col items-center justify-center">
            <div className="absolute top-25 left-14 uppercase text-[14px]">
              <span className="ml-8 block">Hello, My Name Is Robot, I am a senior</span>
              <span className="block">designer at envoy where I create</span>
              <span className="block">products, websites, and brands.</span>
            </div>
            <div className="relative w-145 h-140 bg-gray-300 rounded-4xl flex justify-center items-center">
              <img
                className="h-64 w-52 object-cover shadow-lg"
                src={aboutImg}
                alt="profile"
              />
            </div>
            <div className="absolute right-1/5 w-25 h-25 rounded-full border-2 border-white flex justify-center items-center">
              <span className="arrow">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="absolute w-full top-[83.3rem] overflow-hidden">
            <div className="whitespace-nowrap text-[15rem] uppercase font-bold flex gap-16" ref={textRef}>
              {Array(10)
                .fill("SHANTANU-JAMBHULE.")
                .map((text, index) => (
                  <span key={index} className="mx-8">{text}</span>
                ))}
            </div>
          </div>

        </section>

        <div className=" flex px-15 py-10">
          <span className="line h-[1px] w-full bg-white"></span>
        </div>

        <section className="h-screen w-full overflow-hidden px-15">
          <div className="header w-[100%] flex justify-between  uppercase text-[14px]">
            <div><span>03/</span></div>
            <div><p className="mr-105">PROJECTS</p></div>
            <div>/04</div>
          </div>
          <div className="relative h-screen w-full overflow-hidden ">
            <div className="absolute left-0 top-15 w-25 h-25 rounded-full border-2 border-white flex justify-center items-center">
              <span className="arrow">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="absolute top-15 left-1/3 flex flex-col text-[30.6667px] uppercase leading-10">
              <span className="ml-20">here are my some slected projects that showcase</span>
              <span>my passion for creating memorable web experiences, </span>
              <span>product, and brands to life</span>
            </div>
          </div>
        </section>

        <div className=" flex px-15 py-10">
          <span className="line h-[1px] w-full bg-white"></span>
        </div>

        <section className="h-screen w-full overflow-hidden px-15 relative">
          <div className="header w-[100%] flex justify-between  uppercase text-[14px]">
            <div><span>04/</span></div>
            <div><p className="mr-105">CAPABILITIES</p></div>
            <div>/04</div>
          </div>
          <div
            className="relative h-130 top-25 flex justify-center items-center overflow-hidden bg-black text-white border-2 border-gray-600 rounded-[40px] mx-10 p-10 mb-10"
            ref={textContainer}
            onMouseMove={handleMouseMove}
          >
            {/* Section Title */}
            <h2 className="absolute top-5 text-[2vw] font-semibold uppercase text-gray-400">
              Capabilities
            </h2>

            {/* Floating Text Bubbles */}
            <div className="relative w-full h-full flex justify-center items-center">
              {words.map((word, index) => (
                <div
                  key={index}
                  ref={(el) => (text1Refs.current[index] = el)}
                  className="absolute text-[1.2vw] uppercase px-6 py-4 bg-transparent text-white rounded-full shadow-lg flex justify-center items-center w-[10vw] h-[10vw] border-1 border-gray-300 cursor-pointer"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="h-screen w-full overflow-hidden relative px-14 flex flex-col justify-center items-center">
      {/* Contact Container */}
      <div
        ref={containerRef}
        className="container relative h-130 flex justify-center items-center overflow-hidden bg-black text-white border-2 border-gray-600 rounded-[40px] px-10 py-14"
      >
        {/* Centered Text */}
        <div className="flex flex-col justify-center items-center uppercase leading-20 text-center">
          <p ref={(el) => (text2Refs.current[0] = el)} className="text-[19.3px]">
            got project in mind
          </p>
          <p ref={(el) => (text2Refs.current[1] = el)} className="text-[95px] mb-10">
            let's connect
          </p>
          {/* Floating Arrow */}
          <div
            ref={arrowRef}
            className="w-25 h-25 rounded-full border-2 border-white flex justify-center items-center"
          >
            <span className="arrow">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer ref={footerRef} className="absolute bottom-5 w-full flex justify-between items-center uppercase px-14">
      <p>Feel free to connect with me on social media</p>
      <ul className="flex gap-8">
        {["EMAIL", "LINKEDIN", "INSTAGRAM", "TWITTER"].map((text, index) => (
          <li
            key={index}
            ref={(el) => (linksRef.current[index] = el)}
            className="relative overflow-hidden h-6 flex items-center cursor-pointer"
          >
            {/* Original text */}
            <span className="text  top-0 left-0 w-full">{text}</span>
            {/* Cloned text (comes in from below) */}
            <span className="clone top-10 left-0 w-full">{text}</span>
          </li>
        ))}
      </ul>
    </footer>
    </section>
      </div>
    </>
  );
};

export default Home;
