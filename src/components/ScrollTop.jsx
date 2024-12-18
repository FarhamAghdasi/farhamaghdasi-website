import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // اسکرول صفحه به بالاترین نقطه
    }, [pathname]);

    return null;
};

export default ScrollToTop;
