import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

export const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Google Analytics is initialized in index.html
        // We only need to track page views on route changes here
        if (typeof window.gtag !== 'undefined') {
            window.gtag('config', 'G-57EL2DFDC0', {
                page_path: location.pathname + location.search
            });
        }
    }, [location]);

    return null;
};
