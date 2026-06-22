import TypingAnimation from "./TypingAnimation";
import LiquidEther from "../LiquidEther/LiquidEther";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-black"
      style={{
        width: "100vw",
        height: "800px",
        marginLeft: "calc(50% - 50vw)",
      }}
    >
      <LiquidEther
        colors={["#00F5FF", "#8B5CF6", "#EC4899"]}
        mouseForce={60}
        cursorSize={300}
        resolution={0.7}
        autoDemo={true}
        autoSpeed={1}
        autoIntensity={5}
        style={{
          position: "absolute",
          top: "-200px",
          left: 0,
          width: "100%",
          height: "calc(100% + 200px)",
          zIndex: 0,
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{
          paddingTop: "120px",
        }}
      >
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-none">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">Arun P</span> 👋
        </h1>

        <p className="text-lg md:text-2xl mt-6 text-slate-300 font-bold uppercase tracking-widest font-tech">
          Computer Science Engineering Student
        </p>

        <div className="mt-6 h-16">
          <TypingAnimation />
        </div>

        <p className="mt-6 max-w-2xl text-slate-400 text-base md:text-lg font-medium leading-relaxed">
          Passionate about developing scalable applications, AI-powered
          solutions, and impactful software products.
        </p>
      </div>
    </section>
  );
};

export default Hero;