const Loading = () => {
  return (
    <div className="loading-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      .loading-title {
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  color: white;
  line-height: 1.3;
  margin-top: 20px;
  
}

.subtitle {
  font-size: 22px;
  font-weight: 600;
  color: #38bdf8;
  letter-spacing: 4px;
}
        .loading-page {
          width: 100%;
          height: 100vh;
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: Arial, sans-serif;
        }

        .loading-section {
          display: flex;
          align-items: center;
          gap: 120px;
        }

        .loading-title {
          font-weight: 800;
          text-align: center;
          font-size: 48px;
          text-transform: uppercase;
          background: linear-gradient(90deg, #000, #fff, #000);
          letter-spacing: 5px;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-repeat: no-repeat;
          background-size: 80%;
          animation: shine 5s linear infinite;
          margin-bottom: 25px;
        }

        @keyframes shine {
          0% {
            background-position-x: -500%;
          }
          100% {
            background-position-x: 500%;
          }
        }

        .loading-truck-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .loading-text {
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          white-space: nowrap;
          font-style: italic;
        }

        .truckWrapper {
          width: 260px;
          height: 130px;
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;
          justify-content: flex-end;
          overflow-x: hidden;
        }

        .truckBody {
          width: 170px;
          margin-bottom: 8px;
          animation: motion 1s linear infinite;
        }

        @keyframes motion {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(4px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .truckTires {
          width: 170px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px 0 20px;
          position: absolute;
          bottom: 0;
        }

        .truckTires svg {
          width: 32px;
        }

        .road {
          width: 100%;
          height: 3px;
          background: #ffffff;
          position: relative;
          border-radius: 3px;
        }

        .road::before {
          content: "";
          position: absolute;
          width: 30px;
          height: 100%;
          background: #ffffff;
          right: -50%;
          border-radius: 3px;
          animation: roadAnimation 1.4s linear infinite;
          border-left: 12px solid #000;
        }

        .road::after {
          content: "";
          position: absolute;
          width: 15px;
          height: 100%;
          background: #ffffff;
          right: -65%;
          border-radius: 3px;
          animation: roadAnimation 1.4s linear infinite;
          border-left: 6px solid #000;
        }

        @keyframes roadAnimation {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(-400px);
          }
        }

        .sphere-loader {
          width: 320px;
          height: 320px;
          position: relative;
          transform-style: preserve-3d;
          perspective: 10000px;
  animation: spin3d 4s ease-in-out infinite;
        }

        .sphere,
        .sphere-item {
          width: 320px;
          height: 320px;
          position: absolute;
          top: 0;
          left: 0;
          transform-style: preserve-3d;
        }

        .sphere {
          transform: rotateX(calc(var(--rot) * 20deg));
        }

        .sphere1 { --bg: rgba(255, 0, 0, 0.35); }
        .sphere2 { --bg: rgba(255, 0, 255, 0.35); }
        .sphere3 { --bg: rgba(255, 255, 0, 0.35); }
        .sphere4 { --bg: rgba(0, 255, 0, 0.35); }
        .sphere5 { --bg: rgba(0, 255, 255, 0.35); }
        .sphere6 { --bg: rgba(0, 0, 255, 0.35); }
        .sphere7 { --bg: rgba(220, 29, 223, 0.35); }
        .sphere8 { --bg: rgba(255, 165, 0, 0.35); }
        .sphere9 { --bg: rgba(14, 165, 233, 0.35); }

        .sphere-item {
          border-radius: 50%;
          background: var(--bg);
          transform: rotateY(calc(var(--rot-y) * 40deg));
        }

        @keyframes spin3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @media (max-width: 768px) {
          .loading-section {
            flex-direction: column;
            gap: 50px;
          }

          .loading-title {
            font-size: 32px;
            animation: shine 5s linear infinite;
          }

          .loading-truck-row {
            flex-direction: column;
          }

          .sphere-loader,
          .sphere,
          .sphere-item {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>

      <div className="loading-section">
        <div>
          <h1 className="loading-title">
  Arun Portfolio
  <br />
  <span className="subtitle">FULL STACK DEVELOPER</span>
</h1>

          <div className="loading-truck-row">
            <span className="loading-text">Loading Experience...</span>

            <div className="truckWrapper">
              <div className="truckBody">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 198 93">
                  <path strokeWidth="3" stroke="#282828" fill="#F83D3D" d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z" />
                  <path strokeWidth="3" stroke="#282828" fill="#7D7C7C" d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z" />
                  <path strokeWidth="2" stroke="#282828" fill="#282828" d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z" />
                  <rect strokeWidth="2" stroke="#282828" fill="#FFFCAB" rx="1" height="7" width="5" y="63" x="187" />
                  <rect strokeWidth="2" stroke="#282828" fill="#282828" rx="1" height="11" width="4" y="81" x="193" />
                  <rect strokeWidth="3" stroke="#282828" fill="#DFDFDF" rx="2.5" height="90" width="121" y="1.5" x="6.5" />
                  <rect strokeWidth="2" stroke="#282828" fill="#DFDFDF" rx="2" height="4" width="6" y="84" x="1" />
                </svg>
              </div>

              <div className="truckTires">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
                  <circle strokeWidth="3" stroke="#282828" fill="#282828" r="13.5" cy="15" cx="15" />
                  <circle fill="#DFDFDF" r="7" cy="15" cx="15" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
                  <circle strokeWidth="3" stroke="#282828" fill="#282828" r="13.5" cy="15" cx="15" />
                  <circle fill="#DFDFDF" r="7" cy="15" cx="15" />
                </svg>
              </div>

              <div className="road"></div>
            </div>
          </div>
        </div>

        <div className="sphere-loader">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`sphere sphere${i + 1}`}
              style={{ "--rot": i }}
            >
              {Array.from({ length: 9 }).map((_, j) => (
                <div
                  key={j}
                  className="sphere-item"
                  style={{ "--rot-y": j }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;