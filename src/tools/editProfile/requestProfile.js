import { updateSetProfile } from "../../redux/register/registerAction";
import { useRouter } from "next/router";
import { BASE_URL, UPDATE_PROFILE } from "../../api/urls";
import { notify } from "../toast/toast";
import { useDispatch } from "react-redux";

const RequestProfile = (
  token,
  userID,
  name,
  family,
  birthday,
  gender,
  picId,
  router,
  lang,
  dispatch
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    userId: userID,
    name: name,
    family: family,
    profilepicid: picId,
    birthdaydatetime: birthday,
    gender: +gender
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  };
  if (name !== "" && family !== "") {
    fetch(BASE_URL + UPDATE_PROFILE, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        console.log(raw)

        if (json.code === 200) {
          router.push({ pathname: "/profile" });
          dispatch(updateSetProfile(JSON.parse(raw)));
        }
      })
      .catch((error) => console.log("error", error));
  } else {
    let textShow;
    if (lang === "fa") {
      textShow = "اطلاعات حساب کاربری خود را کامل وارد کنید";
    } else {
      textShow = "Enter your full account information";
    }
    notify(textShow, "warning");
  }
};

export default RequestProfile;
