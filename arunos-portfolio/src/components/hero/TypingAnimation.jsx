import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        2000,
        "Java & Python Programmer",
        2000,
        "AI Enthusiast",
        2000,
        "Problem Solver",
        2000,
        "Building Innovative Solutions",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-2xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent tracking-tight font-heading"
    />
  );
};

export default TypingAnimation;