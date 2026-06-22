import { useEffect } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const GradientTextList = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".gradient-list li");

    const customEase = CustomEase.create(
      "custom",
      "M0,0 C0.548,0.032 0.63,1 1,1"
    );

    const introTween = gsap
      .timeline({
        defaults: {
          duration: 0.48,
        },
      })
      .to(".gradient-list li", {
        "--stop-active": "100%",
        stagger: {
          each: 0.1,
          ease: customEase,
        },
      })
      .to(".gradient-list li", {
        "--stop-hover": "100%",
        stagger: {
          each: 0.1,
        },
      })
      .to(
        ".gradient-list li",
        {
          "--stop-hover": "0%",
          stagger: {
            each: -0.1,
          },
        },
        "-=0.1"
      );

    gsap.set(items, {
      "--stop-hover": "0%",
    });

    const handleMouseEnter = (e) => {
      gsap.to(e.currentTarget, {
        "--stop-hover": "100%",
        ease: customEase,
        duration: 0.36,
      });
    };

    const handleMouseLeave = (e) => {
      gsap.to(e.currentTarget, {
        "--stop-hover": "0%",
        ease: customEase,
        duration: 0.36,
      });
    };

    items.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      introTween.kill();

      items.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <ul className="gradient-list">
      <li>WHO AM I</li>
      <li>FULL STACK DEVELOPER</li>
      <li>AI ENTHUSIAST</li>
      <li>PROBLEM SOLVER</li>
      <li>SOFTWARE ENGINEER</li>
    </ul>
  );
};

export default GradientTextList;