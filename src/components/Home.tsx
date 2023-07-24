import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return (  <>
      <Navbar />
    <div className="container">
         <Link to="/login"></Link>
    <img src="https://i.pinimg.com/originals/20/db/6c/20db6c90d1cd61e428e5d1b92c5732df.jpg"  alt="" />
    </div>
    </>);
}
 
export default Home;