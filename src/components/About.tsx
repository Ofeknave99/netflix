import { FunctionComponent } from "react";
import Navbar from "./Navbar";

interface AboutProps {
    
}
 
const About: FunctionComponent<AboutProps> = () => {
    return (  <>
      <Navbar />
    <div className="container" style={{textAlign:"center"}}>
    <h1>ofek nave</h1>
    <p>software developr</p>
    <img src="/ofek.jpg.png" alt="" width={130} className="ofek" />
    </div>
    </>);
}
 
export default About;