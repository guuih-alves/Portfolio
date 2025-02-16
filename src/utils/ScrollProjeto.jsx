import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollProjeto = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,850)
    }, [location.pathname])

    return null
}


export default ScrollProjeto