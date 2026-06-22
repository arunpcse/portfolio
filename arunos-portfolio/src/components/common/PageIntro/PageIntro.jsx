const PageIntro = ({ title = "HOME" }) => {
  return (
    <div className="page-intro">
      <style>{`
        .page-intro {
          position: fixed;
          inset: 0;
          background: #000;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: introExit 3s ease forwards;
        }

        .intro-box {
          text-align: center;
        }

        .intro-logo {
          font-size: 180px;
          font-weight: 900;
          color: #e50914;
          letter-spacing: 8px;
          text-transform: uppercase;
          text-shadow:
            0 0 20px #e50914,
            0 0 60px rgba(229, 9, 20, 0.8);
          animation: netflixZoom 2.7s ease forwards;
        }

        .intro-title {
          margin-top: 20px;
          color: white;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 10px;
          text-transform: uppercase;
          animation: titleFade 2.4s ease forwards;
        }

        .intro-light {
          position: absolute;
          width: 180px;
          height: 100vh;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 0, 0, 0.7),
            transparent
          );
          transform: skewX(-20deg);
          animation: lightMove 2.3s ease forwards;
        }

        @keyframes netflixZoom {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }

          35% {
            opacity: 1;
            transform: scale(1);
          }

          75% {
            opacity: 1;
            transform: scale(1.2);
          }

          100% {
            opacity: 0;
            transform: scale(12);
          }
        }

        @keyframes titleFade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          40% {
            opacity: 1;
            transform: translateY(0);
          }

          80% {
            opacity: 1;
          }

          100% {
            opacity: 0;
          }
        }

        @keyframes lightMove {
          0% {
            left: -250px;
            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          100% {
            left: 120%;
            opacity: 0;
          }
        }

        @keyframes introExit {
          0% {
            visibility: visible;
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            visibility: hidden;
            opacity: 0;
          }
        }
      `}</style>

      <div className="intro-light"></div>

      <div className="intro-box">
        <div className="intro-logo">{title[0]}</div>
        <div className="intro-title">{title}</div>
      </div>
    </div>
  );
};

export default PageIntro;