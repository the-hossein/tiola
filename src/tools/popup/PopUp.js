import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import CountdownTimer from "react-component-countdown-timer";
import { validationNumber } from "../../Components/register/validationNumber";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import changePhoneNUmber from "../changephonenumber/changePhoneNUmber";

const useStyle = makeStyles({
  btn: {
    background: "#6a8eae",
    "&:hover": {
      backgroundColor: "#7b8eaf"
    }
  }
});

export default function PopUp() {
  const TypeNumber = (e) => {
    // console.log(e.ctrlKey)
    var code = e.keyCode || e.which;

    if (!e.ctrlKey) {
      if (code > 31 && (code < 48 || code > 57) && (code < 96 || code > 105)) {
        e.preventDefault();
        return false;
      }
    }
    return true;
  };

  const classes = useStyle();

  const { t } = useTranslation();

  //for show pop up user have token false
  //for accept phone number
  const [stepTwo, setStepTwo] = useState(false);

  const [phone, setPhone] = useState();
  const [valid, setValid] = useState(validationNumber(phone));
  const [again, setAgain] = useState(false);
  const [open,setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setStepTwo(false);
  };
  var check = Object.keys(valid);

  useEffect(() => {
    setValid(validationNumber(phone));
    console.log();
  }, [phone]);

  const acceptHandler = () => {
    phone && check.length === 0 ? setStepTwo(true) : console.log("po");
    console.log("cleaan state");
  };

  const againHandler = () => {
    setAgain(false);
  };
  const endTimerHandler = () => {
    setAgain(true);
    console.log(again);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>click</button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>{t("signupt")}</DialogTitle>
        <DialogContent sx={{ justifyContent: "center", alignItems: "end" }}>
          <DialogContentText>
            Enter your Numberphone for sign in
          </DialogContentText>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            variant="outlined"
            onChange={(e) => setPhone(e.target.value)}
            color={valid === {} ? "success" : "error"}
            onKeyDown={(e) => TypeNumber(e)}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-around" }}>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className={classes.btn}
            variant="contained"
            color="info"
            onClick={acceptHandler}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* handling get code */}
      <Dialog open={stepTwo} onClose={handleClose}>
        <DialogTitle>code</DialogTitle>
        <DialogContent sx={{ justifyContent: "center", alignItems: "end" }}>
          <DialogContentText>
            We send your numberphone please enter in felid
          </DialogContentText>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="code"
            label="Enter Code"
            type="text"
            variant="outlined"
            onChange={(e) => setPhone(e.target.value)}
            keyDown={(e) => TypeNumber(e)}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-around" }}>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <span>
            {again ? (
              <Button onClick={againHandler}>reset</Button>
            ) : (
              <CountdownTimer
                color="#6a8eae"
                count={10}
                backgroundColor={"none"}
                hideDay={true}
                hideHours={true}
                onEnd={endTimerHandler}
              />
            )}
          </span>
          <Button
            className={classes.btn}
            variant="contained"
            color="success"
            onClick={handleClose}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
