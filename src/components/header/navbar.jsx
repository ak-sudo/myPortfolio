import "./navbar.css";
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [showNav, setShowNav] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 833);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 833);
            if (window.innerWidth >= 833) setShowNav(false);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleNavClick(section) {
        setActive(section);
        setShowNav(false);
    }

    if (isDesktop) {
        return (
            <div className="nav nav-font">
                <div className="left"><a href="#">AKSHAT</a></div>
                <div className="right">
                    <ul>
                        <li><a href="#home" className={active === "home" ? "active" : ""} onClick={() => handleNavClick("home")}>Home</a></li>
                        <li><a href="#about" className={active === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>About</a></li>
                        <li><a href="#resume" className={active === "resume" ? "active" : ""} onClick={() => handleNavClick("resume")}>Resume</a></li>
                        <li><a href="#skills" className={active === "skills" ? "active" : ""} onClick={() => handleNavClick("skills")}>Skills</a></li>
                        <li><a href="#projects" className={active === "projects" ? "active" : ""} onClick={() => handleNavClick("projects")}>Projects</a></li>
                        <li><a href="#contact" className={active === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="nav nav-font">
                <div className="left"><a href="#">AKSHAT</a></div>
                <div className="right">
                    <i className="fa-solid fa-ellipsis-vertical threedot" onClick={() => setShowNav(true)}></i>
                    <div className={showNav ? "slideNav" : "slideNavHidden"}>
                        <i className="fa-solid fa-xmark cross" onClick={() => setShowNav(false)}></i>
                        <ul className="unorderList">
                            <li><a href="#home" className={active === "home" ? "active" : ""} onClick={() => handleNavClick("home")}>Home</a></li>
                            <li><a href="#about" className={active === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>About</a></li>
                            <li><a href="#resume" className={active === "resume" ? "active" : ""} onClick={() => handleNavClick("resume")}>Resume</a></li>
                            <li><a href="#skills" className={active === "skills" ? "active" : ""} onClick={() => handleNavClick("skills")}>Skills</a></li>
                            <li><a href="#projects" className={active === "projects" ? "active" : ""} onClick={() => handleNavClick("projects")}>Projects</a></li>
                            <li><a href="#contact" className={active === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
