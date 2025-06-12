import { useState } from "react";
import "./contact.css";
import axios from "axios";
import {
  Alert,
  AlertDescription,
} from "/src/components/modern-ui/alert";


export default function Contact() {
  function Sucess() {
    return (
      <Alert className="border-green-500 bg-green-900 h-10 w-100vh flex items-center justify-center">
        <AlertDescription>
          Your conneection request has been sent successfully.
        </AlertDescription>
      </Alert>
    );
  }

  function Failed() {
    return (
      <Alert className="border-red-500 bg-red-900 h-10 w-100vh flex items-center justify-center">
        <AlertDescription>
          Your conneection request could not be sent. Please try again later!
        </AlertDescription>
      </Alert>
    );
  }

  let [infoState, setInfoState] = useState(0);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://myportfolioo-qxps.onrender.com:3000/contact", { name, email, message })
      .then((result) => console.log(result), 
        setInfoState(infoState+1), setTimeout(() => {
        setInfoState(0);
      },5000))

      .catch((err) => console.log(err), infoState = 404);
  };

  function CheckStateAndShow(infoState) {
    if (infoState == 0) {
      return (<div className="dbInfo"></div>);
    }
    else if (infoState == 1){
        return (<div className="dbInfo">{Sucess()}</div>);}
    else if (infoState == 404)
        return (<><div className="dbInfo">{Failed()}</div></>);
    
  }
  return (
    <>
      {CheckStateAndShow(infoState)}
      <div className="contact body-font" id="contact">
        <h1 className="backText">Contact</h1>
        <h1 className="frontText">Contact Me</h1>

        <div className="contactContainer">
          <div className="contactText">
            <p>
              If you would like to get in touch, please feel free to reach out
              via email or connect with me on LinkedIn.
            </p>
            <p>
              I am always open to discussing new projects, collaborations, or
              opportunities.
            </p>
          </div>

          <div className="contactForm">
            <form onSubmit={handleSubmit} method="post" autoComplete="off">
              <div className="formGroup">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="May i know your good name please.."
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="formGroup">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="How may i contact you? Please enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="formGroup">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Wanna have a conversation? Compose your message here! Make sure to leave where i can contact u back..."
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit">Connect Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
