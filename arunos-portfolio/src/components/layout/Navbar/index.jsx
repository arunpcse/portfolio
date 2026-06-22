import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 10px #38bdf8;
            }
            50% {
              box-shadow: 0 0 25px #38bdf8;
            }
          }

          .nav-link:hover {
            color: #38bdf8 !important;
            transform: translateY(-4px);
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 0;
            height: 3px;
            background: #38bdf8;
            border-radius: 10px;
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .dashboard-btn:hover {
            transform: scale(1.08);
            animation: glow 1s infinite;
          }
        `}
      </style>

      <nav
        style={{
          width: "100%",
          padding: "18px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(2, 6, 23, 0.95)",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          animation: "slideDown 0.8s ease",
          boxShadow: "0 4px 20px rgba(56,189,248,0.15)",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "28px",
            fontWeight: "900",
            color: "#38bdf8",
            textDecoration: "none",
            letterSpacing: "1px",
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>

          Arun<span style={{ color: "white" }}>Dev</span>
          </motion.div>
        </Link>

        <div
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-link"
              style={{
                position: "relative",
                color: "#e2e8f0",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                transition: "0.3s ease",

              }}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                {item.name}
              </motion.div>
            </Link>
          ))}

          <Link
            to="/dashboard"
            className="dashboard-btn"
            style={{
              padding: "10px 24px",
              borderRadius: "30px",
              background: "linear-gradient(135deg, #38bdf8, #2563eb)",
              color: "white",
              textDecoration: "none",
              fontWeight: "700",
              transition: "0.3s ease",
              boxShadow: "0 0 15px rgba(56,189,248,0.5)",
            }}
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;