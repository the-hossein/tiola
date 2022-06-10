import React, { useEffect, useRef, useState } from "react";
import style from "./EditProfile.module.css";
import Link from "next/link";
import ChangeImage from "../uploadImgUser/getUserProfile";
import { useRouter } from "next/dist/client/router";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";

//request
import RequestProfile from "./requestProfile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getProfile } from "../../redux/register/registerAction";
import { useTranslation } from "react-i18next";
import { BASE_URL, REMOVE_USER_IMAGE } from "../../api/urls";
import { notify } from "../toast/toast";

//persian birthday
import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker
} from "react-advance-jalaali-datepicker";

//convert date


const EditProfile = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.stateRegister);
  const lang = useSelector(state => state.stateLang.lng);

  const [userToken, setToken] = useState();

  const [userFName, setUserFName] = useState();
  const subFName = (e) => {
    setUserFName(e.target.value);
  };

  const [userLName, setUserLName] = useState();
  const subLName = (e) => {
    setUserLName(e.target.value);
  };

  const [address, setAddress] = useState("");
  const subAddress = date => {
    const valueOfInput = date.format();
    setAddress(valueOfInput);
  };

  const [userBirthday, setBirthday] = useState();
  const subBirthday = (unix, formatted) => {
    console.log(unix);
    console.log(formatted); 
    var date = new Date(unix * 1000);
    console.log(date.getTime())
    console.log(date)
    setBirthday(date);

    // console.log(value) 
    // console.log(e.target.value)
    // const valueOfInput = e.format();
    // setAddress(valueOfInput);
  };

  const [gender, setGender] = useState(2);
  const subGender = (e) => {
    setGender(e.target.value);
  };

  const subHandler = (e) => {
    e.preventDefault();
    console.log(typeof userFName === "undefined")
    console.log(typeof userLName)
    console.log(userBirthday)
    let textShow ;
    if(typeof userBirthday !== "undefined" && typeof userLName !== "undefined" && typeof userFName !== "undefined"){
      if(userFName === ""){
        if(lang === "fa"){
          textShow = "لطفا نام خود را وارد کنید";
        }else{
          textShow = "Please enter your name";
        }
        notify(textShow, "warning")
      }else if(userLName === "" ){
        if(lang === "fa"){
          textShow = "لطفا نام خانوادگی خود را وارد کنید";
        }else{
          textShow = "Please enter your last name";
        }
        notify(textShow, "warning");
      }else if(userBirthday === "" ){
        if(lang === "fa"){
          textShow = "لطفا تاریخ تولد خود را وارد کنید";
        }else{
          textShow = "Please enter your date of birth";
        }
        notify(textShow, "warning");
        }else {
          RequestProfile(
            userToken,
            userData.userid,
            userFName,
            userLName,
            userBirthday,
            gender,
            imageId,
            router,
            lang,
            dispatch
          );
        }
    }else{
      console.log("worked allllllllli")
      if(lang === "fa"){
        textShow = "اطلاعات حساب کاربری خود را کامل وارد کنید"
      }else{
        textShow = "Enter your full account information"
      }
      notify(textShow, "error");
      
    }
  };

  //get image
  const [preload, setpreload] = useState(false);
  const [image, setImage] = useState("");
  const [imageId, setImageid] = useState();

  const ChangeImageAction = async (e) => {
    e.preventDefault();
    setpreload(true);
    var Image = await ChangeImage(e);
    if (Image !== null) {
      setImage(Image.data.filePath);
      setImageid(Image.data.id);
    } else {
      console.log("error");
    }
    setpreload(false);
  };

  const removeImg = (e) => {
    e.preventDefault();

    // setImage("");
    // setImageid(null);

    var config = {
      method: "post",
      url: `${BASE_URL+REMOVE_USER_IMAGE}?id=${userData.profilePicId}&UserId=${userData.userid}`,
      headers: { Authorization: `Bearer ${userToken}` }
    };

    setpreload(true);
    axios(config).then((res) => {
      dispatch(getProfile());
      setImage("");
      setImageid(null);
      setpreload(false);
    });
  };

  useEffect(() => {
    const tokenLocal = JSON.parse(localStorage.getItem("userToken"));
    if(tokenLocal === null){
      router.push({pathname: "/"})
    }
    if (tokenLocal) {
      setToken(tokenLocal.token);
    }
    if (userData.birthDayDateTime !== null) {
      const birthdayUser = userData.birthDayDateTime.split("T");
      setUserFName(userData.name);
      setUserLName(userData.family);
      setGender(userData.gender);
      setBirthday(birthdayUser[0]);
    }
    if(userData.profileUser !== null){
      setImageid(userData.profileUser.id)
    }
  }, [userData]);

  const picHandler = () => {
    if (userData.profileUser !== null) {
      return userData.profileUser.filePath;
    } else if (image !== "") {
      return image;
    } else {
      return "/Assets/images/userdefault.png";
    }
  };

  return (
    <div className={`container ${style.main}`}>
      <h1>{t("accont")}</h1>
      <form onSubmit={subHandler}>
        <div className="row">
          <div className={`col-12 ${style.imgField}`}>
            <div className={`row ${style.imgField}`}>
              <div className="col-12">
                {/* preload ? "/Assets/images/loader.gif" : "/Assets/images/userdefault.png" */}
                <img
                  src={
                    preload
                      ? "/Assets/images/loader.gif"
                      : image !== ""
                      ? image
                      : userData.profileUser === null
                      ? "/Assets/images/userdefault.png"
                      : userData.profileUser.filePath
                  }
                  alt="user profile"
                />
                <input 
                  type="file"
                  id="userImage"
                  accept="image/png, image/jpeg,"
                  onChange={ChangeImageAction}
                />
                <span>
                  <label htmlFor="userImage" className={style.buttonStyle}>
                    {t("Change")}
                  </label>
                </span>
                <button onClick={removeImg} className={style.buttonStyle} type="button">
                  {t("remove")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`row m-5 ${style.formContainer}`}>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column ">
              <label htmlFor="fname-in">{t("enterName")}</label>
              <input
                id="fname-in"
                type="text"
                placeholder={lang === "fa" ? "نام" : "First name"}
                value={userFName}
                onChange={subFName}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column ">
              <label htmlFor="lname-in">{t("enterfamily")}</label>
              <input
                id="lname-in"
                type="text"
                placeholder={lang === "fa" ? "نام خانوادگی" : "Last name"}
                value={userLName}
                onChange={subLName}
              />
            </div>
          </div>
        </div>
        {/* <div className='row m-5 align-items-end'>
                    <div className='col-12'>
                        <div className='d-flex flex-column '>
                            <label htmlFor='address-in'>Enter your Address:</label>
                            <input 
                                type='text'
                                id='address-in'
                                placeholder='Address'
                                value={address}
                                onChange={subAddress}
                            />
                        </div>
                    </div>
                </div> */}
        <div className={`row m-5 align-items-end ${style.formContainer}`}>
          {
            !userData.birthDayDateTime && <div className="col-12 col-md-6 col-lg-4">
            <div className="d-flex flex-column ">
              <label htmlFor="birthday">{t("enterBirth")+ " : "}</label>
              {/* <input
                id="birthday"
                placeholder="day/mont/year"
                type="date"
                value={userBirthday}
                onChange={subBirthday}
              /> */}
              <DatePicker
                placeholder={lang === 'fa' ? "لطفا تاریخ تولد خود را وارد کنید" : "Please enter your date of birth"}
                format="jYYYY-jMM-jDD"
                onChange={subBirthday}
                id="datePicker"
                preSelected={userBirthday}
              />
            </div>
          </div>
          }
          
          
          <div className="col-12 col-md-6 col-lg-5">
            <div className="row ">
              <div className="d-flex align-items-center col-12 col-md-12 col-lg-12 mt-4 text-center">
                <label htmlFor="cars">{t("choseGender")+ " :  "}</label>
                <select value={gender} id="cars" onChange={subGender}>
                  <option value="0">{t("Female")}</option>
                  <option value="1">{t("Male")}</option>
                  <option value="2">{t("nottosay")}</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-3 text-center">
            <div className={`mt-5 ${style.btnHandel}`}>
              <button type="submit" onClick={subHandler}>{t("submit")}</button>
              <Link href="/">
                <span className={style.navigate}>{t("home")}</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
