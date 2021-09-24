import { Link } from "react-router-dom";
import Blog from "./Blog";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";

export default function Home() {
    return (
        <div className=''>
           <Hero />
           <Blog />
           
        </div>
    )
}
