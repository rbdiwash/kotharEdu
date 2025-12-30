import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import upArrow from "../assets/images/upArrow.png";
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function backToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <button
        id="to-top-button"
        onClick={backToTop}
        title="Go To Top"
        className="fixed z-[100] bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md text-white text-3xl font-bold"
      >
        <img
          loading="lazy"
          fetchPriority="high"
          src={upArrow}
          alt="Scroll to top"
        />
      </button>
    </>
  );
}
