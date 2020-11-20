import { makeStyles } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
    weaponButton: {
      background: "transparent",
      borderRadius: 3,
      borderColor: "white",
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: "7px",
      width: "100px",
    },
    resetButton: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
        borderColor: green[700],
      },
      borderRadius: 3,
      borderColor: green[500],
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: "7px",
      width: "100px",
    },
    resultText: {
      color: "white",
    }
  });

  export default useStyles;