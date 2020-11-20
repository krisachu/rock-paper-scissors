import React, { useState } from "react";
import Player from "./components/Player";
import Computer from "./components/Computer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";



const App = () => {
  
  const classes = useStyles();

  const weapons = ["rock", "paper", "scissors"];

  const [choice, setChoice] = useState({
    player: "",
    computer: "",
    winner: "",
  });

  const [score, setScore] = useState({
    wins: 0,
    losses: 0,
    draws: 0,
  });

  const calculateResult = (weapon) => {
    const player = weapon;
    const computer = weapons[Math.floor(Math.random() * weapons.length)];
    const winner = selectWinner(player, computer);
    const updatedScore = getUpdatedScore(player, computer);

    let counter = 0;
    const myInterval = setInterval(() => {
      counter++;
      
      // On lines 78 to 80, at first we spin images and put them to state
      // On lines 69 to 74, when the last image is shown, in other words when we have > 7,
      // then we put the last image to state, which is the final result

      if (counter > 7) {
        setChoice({
          player,
          computer,
          winner,
        });
        setScore(updatedScore);
        clearInterval(myInterval);
      } else {
        setChoice({
          player: player,
          computer: weapons[Math.floor(Math.random() * weapons.length)],
        });
      }
    }, 150);
  };

  const selectWinner = (p1, p2) => {
    console.log(p1, p2);
    if (
      (p1 === "rock" && p2 === "scissors") ||
      (p1 === "scissors" && p2 === "paper") ||
      (p1 === "paper" && p2 === "rock")
    ) {
      return "You won!";
    } else if (p1 === p2) {
      return "It's a tie!";
    } else {
      return "You lost!";
    }
  };

  const getUpdatedScore = (p1, p2) => {
    if (
      (p1 === "rock" && p2 === "scissors") ||
      (p1 === "scissors" && p2 === "paper") ||
      (p1 === "paper" && p2 === "rock")
    ) {
      return {
        ...score,
        wins: score.wins + 1,
      };
    } else if (p1 === p2) {
      return {
        ...score,
        draws: score.draws + 1,
      };
    } else {
      return {
        ...score,
        losses: score.losses + 1,
      };
    }
  };

  console.log(choice);
  console.log(score);

  return (
    <div className="grid-container">
      <div className="grid-item item1">
        <Typography variant="h2">Rock Paper Scissors</Typography>
      </div>
      <div className="grid-item item2">
        <Player weapon={choice.player} />
      </div>
      <div className="grid-item item4">
        <Computer weapon={choice.computer} />
      </div>
      <div className="grid-item item5">
        <Button
          onClick={() => calculateResult("rock")}
          classes={{ root: classes.weaponButton }}
          variant="outlined"
        >
          Rock
        </Button>
        <Button
          onClick={() => calculateResult("paper")}
          classes={{ root: classes.weaponButton }}
          variant="outlined"
        >
          Paper
        </Button>
        <Button
          onClick={() => calculateResult("scissors")}
          classes={{ root: classes.weaponButton }}
          variant="outlined"
        >
          Scissors
        </Button>
      </div>
      <div className="grid-item item3">
      <Typography variant="overline" classes={{ root: classes.resultText }}>{choice.winner}</Typography>
      </div>
      <div className="grid-item item6">
        <Typography variant="overline" display="block">
          Wins {score.wins}
        </Typography>
        <Typography variant="overline" display="block">
          Ties {score.draws}
        </Typography>
        <Typography variant="overline" display="block">
          Losses {score.losses}
        </Typography>  
      </div>
      <div className="grid-item item7">
      <Button
          onClick={() => {
            setScore({
              wins: 0,
              losses: 0,
              draws: 0,
            });
            setChoice({
              player: "",
              computer: "",
              winner: "",
            });
          }}
          classes={{ root: classes.resetButton }}
          variant="outlined"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default App;
