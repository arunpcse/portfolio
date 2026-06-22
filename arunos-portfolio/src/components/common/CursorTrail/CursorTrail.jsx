import { useEffect, useState } from "react";

const CursorTrail = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => p.id !== newParticle.id)
        );
      }, 1000);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <style>{`
        .particle {
          position: fixed;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          pointer-events: none;
          background: #38bdf8;
          box-shadow:
            0 0 10px #38bdf8,
            0 0 20px #38bdf8;
          animation: floatAway 1s ease-out forwards;
          z-index: 9999;
        }

        @keyframes floatAway {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }

          100% {
            opacity: 0;
            transform:
              translate(-50%, -90px)
              scale(0.2);
          }
        }
      `}</style>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;