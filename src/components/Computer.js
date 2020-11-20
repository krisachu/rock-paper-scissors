import React from "react";
import rock2 from "../images/rock2.png";
import paper2 from "../images/paper2.png";
import scissors2 from "../images/scissors2.png";

const Computer = ({ weapon }) => {

    switch(weapon) {
        case "rock":
            return <img className="weapon-choice" src={rock2} alt={"rock"}></img>;
        case "paper":
            return <img className="weapon-choice" src={paper2} alt={"paper"}></img>;;
        case "scissors":
            return <img className="weapon-choice" src={scissors2} alt={"scissors"}></img>;
        default:
            return <img className="weapon-choice" src={rock2} alt={"rock"}></img>;
    }
};

export default Computer;