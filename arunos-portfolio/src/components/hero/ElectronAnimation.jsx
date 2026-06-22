import ElectronAnimation from "./ElectronAnimation";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        {/* Your Name + Typing Effect */}
      </div>

      <div className="hero-right">
        <ElectronAnimation />
      </div>
    </section>
  );
};

export default Hero;