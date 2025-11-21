import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "./LayoutStyles";
import { useEffect } from "react";

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        //window.scrollTo(0, 0);

        /*
        window.scrollTo({
            top: 0,
            //left: 0,
            //behavior: "auto"
        });
        */

        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    }, [pathname]);

    return <LayoutWrapper> {children} </LayoutWrapper>;
};

export default Layout;