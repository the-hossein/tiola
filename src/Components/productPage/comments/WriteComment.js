import { t } from "i18next";
import React, { useEffect, useState } from "react";
import Style from "./Comments.module.css";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { Rating } from "@mui/material";
import RateSlider from "../../../tools/rateSlider/RateSlider";
import { useDispatch, useSelector } from "react-redux";
import { writeFalse } from "../../../redux/comment/commentActions";
import { resetRate } from "../../../redux/rate/rateActions";
import { useRouter } from "next/dist/client/router";
import CloseIcon from '@mui/icons-material/Close';

//add comment 
import { createComment } from "../../../redux/comment/commentActions";
import { notify } from "../../../tools/toast/toast";

const WriteComment = () => {

  const router = useRouter();
  const state = useSelector((state) => state.stateRate);
  const user = useSelector(state => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);

  const [commentText, setCommentText] = useState("");
  const changeComment = event => {
    setCommentText(event.target.value);
  }
   
  const [total, setTotal] = useState((state.factor1 + state.factor2 + state.factor3) / 6);

  const dispatch = useDispatch();
  const doneHandler = () => {
    if(user.loginStatus){
      if(commentText === ''){
        let textShow ;
        if(lang === 'fa'){
          textShow = 'این فیلد نباید خالی باشد';
        }else{
          textShow = 'This field should not be empty'
        }
        notify(textShow, "warning")
        // dispatch(writeFalse());
      }else {
        if(!user.isConfirmed){
          let textShow ;
          if(lang === "fa"){
            textShow = "ابتدا در پروفایل خود اطلاعات حساب کاربری را تکمیل کنید."
          }else {
            textShow = "First fill in the account information in your profile"
          }
          
          notify(textShow, "warning");
        }else {
          dispatch(resetRate());
          dispatch(createComment(user.userid, commentText, total, router.query.productname, user.name,lang));
          // dispatch(writeFalse());
          dispatch(resetRate());
          setCommentText("")
        }
      }
    }else{
      let textShow2 ;
      if(lang === 'fa'){
        textShow2 = "ابتدا وارد حساب کاربری خود بشوید"
      }else{
        textShow2 = "You did not create an account" ;
      }
      notify(textShow2, "warning")
    }
  };


  useEffect(()=> {
    setTotal((state.factor1 + state.factor2 + state.factor3) / 6);
  }, [state])
  return (
    <div
      className={`d-flex flex-column justify-content-between  ${Style.writeCm}`}
    >
      <span className={Style.nameUser}>{user.userNameAvatar}</span>
      <div className={`form-floating ${Style.commentText}`}>
        <textarea
          type="text"
          className="form-control"
          id="floatingInputGrid"
          placeholder={t("writeYourCm")}
          value={commentText}
          onChange={changeComment}
        />
        <label to="floatingInputGrid">{t("writeYourCm")}</label>
      </div>
          <div className={
            `
            d-flex align-items-center justify-content-around mt-2 ${Style.ratinaition}`}
            >
                <ul className={Style.factorLi}>
                  <li>{t("factor") + " 1"}</li>
                  <li>{t("factor") + " 2"}</li>
                  <li>{t("factor") + " 3"}</li>
                </ul>
              
                  <Box width="30%" paddingX={1} className={Style.myBox} >
                    <ul>
                      <li>
                        <RateSlider name="factor1"/>
                        <span className={Style.amount}>{state.factor1}</span>
                      </li>
                      <li>
                        <RateSlider name="factor2" />

                        <span className={Style.amount}>{state.factor2}</span>
                      </li>
                      <li>
                        <RateSlider name="factor3" />

                        <span className={Style.amount}>{state.factor3}</span>
                      </li>
                    </ul>
                  </Box>
            <Box paddingX={2} className={Style.myBox}>
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center">
                      <span className={Style.total}>{t("total")}</span>
                      <span className={Style.rating}>
                        <Rating
                          name="product Rate"
                          value={(state.factor1 + state.factor2 + state.factor3) / 6}
                          readOnly
                          />
                        </span>
                    </div>
                      <button className={Style.doneBtn} onClick={doneHandler}>
                        {t("done")}
                      </button>
                  </div>
            </Box>
      </div>
      <div className={Style.closeBtn} >
        <CloseIcon fontSize="small" onClick={()=> dispatch(writeFalse())}/>
      </div>
    </div>
  );
};

export default WriteComment;
