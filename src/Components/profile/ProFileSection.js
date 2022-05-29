import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./UserProfile.module.css";
import { notify } from "../../tools/toast/toast";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";
import ChangeImage from "../../tools/uploadImgUser/getUserProfile";
import Loader from "../../tools/loader/Loader";
const ProFileSection = () => {
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
  return (
    <>
      {preload === true ? (
        <Loader />
      ) : (
        <div className={style.profile}>
          <div className={style.avatar}>
            <img src={image === '' ? "/Assets/images/1.jpeg" :image } alt="user profile image" />
            <label htmlFor="userImage">
              <AddAPhotoRoundedIcon
                fontSize={"large"}
                className={style.addPhoto}
                
              />
            </label>
            <input
              type="file"
              id="userImage"
              accept="image/png, image/jpeg,"
              onChange={(e) => {
                ChangeImageAction(e);
              }}
            />
          </div>
          <div>
            <h1 className={style.name}>Melina Rodiguz</h1>
            <span
              className={style.editPro}
              onClick={() => notify("worked", "success")}
            >
              {t("editProfile")}
            </span>
            <span className="d-block">20%{t("remain")}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProFileSection;
