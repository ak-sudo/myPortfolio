import "./intro.css";
import profileLogo from "../../assets/profile.png";

export default function Intro() {
    function screenWidth(){
        if (window.innerWidth <= 833) {
            return (
                <div className="intro-section body-font" id="home">
                    <div className="right-pannel">
                        <div className="bgoval"></div>
                        <img src={profileLogo} alt="Akshat Kala" className="profile-pic"/>
                    </div>

                    <div className="left-pannel">
                        <p className="small-text">HELLO!</p>
                        <h2>I'm <span>Akshat Kala</span></h2>
                        <p className="description">a freelancing web developer helping out people round the globe</p>
                        <div className="cta-buttons">
                            <button><a href="#contact"></a>Hire Me</button>
                            <button><a href="#projects">My Works</a></button>
                        </div>
                    </div>


                </div>
            )

        }
        else{
            return (
                <div className="intro-section body-font" id="home">
                    <div className="left-pannel">
                        <p className="small-text">HELLO!</p>
                        <h2>I'm <span>Akshat Kala</span></h2>
                        <p className="description">a freelancing web developer helping out people round the globe</p>
                        <div className="cta-buttons">
                            <button><a href="#contact">Hire Me</a></button>
                            <button><a href="#projects">My Works</a></button>
                        </div>
                    </div>

                    <div className="right-pannel">
                        <div className="bgoval"></div>
                        <img src={profileLogo} alt="Akshat Kala" className="profile-pic"/>
                    </div>
                </div>
            )
        }
    }
    return(
        screenWidth()
    )
}