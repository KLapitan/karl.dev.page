import { Link } from "react-router-dom";

const NavBar  = () => {
return(
    <nav className="flex flex-row justify-between h-12 items-center">
        <p className="text-3xl ml-12 font-Roboto font-extrabold bg-gradient-to-r  from-black to-cyan-300  text-transparent bg-clip-text ">karl.dev</p>

        <ul className="flex flex-row gap-20 mr-10 font-Roboto   ">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/projects">Projects</Link>
            </li>
            <li>
           <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>

)
}
export default NavBar;