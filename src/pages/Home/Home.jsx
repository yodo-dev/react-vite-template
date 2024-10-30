import React from "react";
import { IoMdHome } from "react-icons/io";
import { ReactSVG } from 'react-svg';
import DummySVG from "../../assets/amex-svgrepo-com.svg";
import FirstComponent from "./Components/FirstComponent/FirstComponent";
import "./Home.scss";

const Home = () => {
    return(
        <div id="home">
            Example React-icons (website : https://react-icons.github.io/react-icons/search/)
            <br/>
            <IoMdHome />
            <FirstComponent />
            <br/>
            <br/>

            Example React-svg
            <ReactSVG src={DummySVG} />
        </div>
    )
}

export default Home;