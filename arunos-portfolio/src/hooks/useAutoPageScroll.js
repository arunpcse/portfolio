import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useAutoPageScroll = (nextPage) => {
  const navigate = useNavigate();
  const isNavigating = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (isNavigating.current) return;

      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;

      if (isBottom) {
        isNavigating.current = true;

        setTimeout(() => {
          navigate(nextPage);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate, nextPage]);
};

export default useAutoPageScroll;