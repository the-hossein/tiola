import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./UserProfile.module.css";
import { notify } from "../../tools/toast/toast";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";
import ChangeImage from "../../tools/uploadImgUser/getUserProfile";
import Link from "next/link";
import { useSelector } from 'react-redux';

// import Loader from "../../tools/loader/Loader";
const ProFileSection = () => {
  const data = useSelector(state => state.stateRegister);
  const { t } = useTranslation();
  const [imageid, setImageid] = useState("");
  const [preload, setpreload] = useState(false);
  const [image, setImage] = useState("");

  const ChangeImageAction = async (e) => {
    setpreload(true);
    var Image = await ChangeImage(e);
    if (Image !== null) {
      setImage(Image.filePath);
      setImageid(Image.id);
    } else {
    }
    setpreload(false);
  };
  
  useEffect(()=> {
    setpreload(true)
    if(data.profileUser) {
      // console.log(data.profileUser.filePath);
      setpreload(false)
      return;
    }
  }, [data])
  
  return (
    <>
          <div className={style.profile}>
            <div className={style.avatar}>
              <img src={data.profileUser === null ? "/Assets/images/userdefault.png" : data.profileUser.filePath } alt="user profile image" />
            </div>
            <div>
              <h1 className={style.name}>{data.userNameAvatar === "" ? data.phoneNumber : data.userNameAvatar}</h1>
              <Link href='/editprofile'>
                <span
                  className={style.editPro}
                >
                  {t("editProfile")}
                </span>
              </Link>
              {/* <span className="d-block">20%{t("remain")}</span> */}
            </div>
          </div>
    </>
  );
};

export default ProFileSection;
