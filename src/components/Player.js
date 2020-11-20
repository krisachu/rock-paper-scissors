import React from "react";
import rock1 from "../images/rock1.png";
import paper1 from "../images/paper1.png";
import scissors1 from "../images/scissors1.png";

const Player = ({ weapon }) => {
  
    switch(weapon) {
        case "rock":
            return <img className="weapon-choice" src={rock1} alt={"rock"}></img>;
        case "paper":
            return <img className="weapon-choice" src={paper1} alt={"paper"}></img>;;
        case "scissors":
            return <img className="weapon-choice" src={scissors1} alt={"scissors"}></img>;
        default:
            return <img className="weapon-choice" src={rock1} alt={"rock"}></img>;
    }
};

export default Player;
