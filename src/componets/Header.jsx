import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef(null);
  const linksRef = useRef([]);
  // const freelancingRef = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;
    const header = headerRef.current;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        gsap.to(header, { y: -100, duration: 0.5, ease: "power2.out" }); // Hide on scroll down
      } else {
        gsap.to(header, { y: 0, duration: 0.5, ease: "power2.out" }); // Show on scroll up
      }
      lastScrollTop = scrollTop;
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    linksRef.current.forEach((link) => {
      if (!link) return;
      const text = link.querySelector(".text");
      const clone = link.querySelector(".clone");

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

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full flex justify-between items-center px-10 pt-10 text-white z-50">
      <div className="text-[20px] flex items-center gap-2">
        <a href="/" className="flex items-center">
          <p>WEB</p>
          <span className="text-red-500 text-[1.5em] font-bold leading-none">X</span>
          <p>DEVELOPER</p>
        </a>
      </div>

      <nav>
        <ul className="flex items-center text-[15px] gap-8 uppercase">
          {["Projects", "About"].map((text, index) => (
            <li
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              className="relative overflow-hidden h-6 flex items-center cursor-pointer"
            >
              {/* Original text */}
              <span className="text relative block w-full">{text}</span>
              {/* Cloned text (appears from below) */}
              <span className="clone absolute left-0 w-full">{text}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div
         ref={(el) => (linksRef.current[2] = el)}
        className="relative text-[12.666px] uppercase p-2 px-6 border-[1px] border-gray-600 rounded-full overflow-hidden cursor-pointer h-6 flex items-center"
      >
        {/* Original Text */}
        <span className="text relative block w-full"><a href="/pro">Available For Freelance</a></span>
        {/* Cloned Text (Hidden below) */}
        <span className="clone absolute items-center w-full"><a href="/pro">Available For Freelance</a></span>
      </div>
    </header>
  );
};

export default Header;
