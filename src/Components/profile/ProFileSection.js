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
      setpreload(false)
      return;
    }
  }, [data])
  
  return (
    <>  
        <div className="row">
          <div className={style.profile}>
            <div className={style.avatar}>
              <img src={data.profileUser === null ? "/Assets/images/userdefault.png" : data.profileUser.filePath } alt="user profile image" />
            </div>
            <div className={style.profileText}>
              <h1 className={style.name}>{data.isConfirmed ? data.userNameAvatar : data.phoneNumber}</h1>
              <Link href='/editprofile'>
                <span
                  className={style.editPro}
                  >
                  {t("editProfile")}
                </span>
              </Link>
              <span className={style.remain}>{data.complatedPersent}% {t("remain")}</span>
            </div>
          </div>
        </div>
    </>
  );
};

export default ProFileSection;
