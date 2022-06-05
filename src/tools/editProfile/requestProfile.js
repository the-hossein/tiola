import { updateSetProfile } from "../../redux/register/registerAction"; 
import { useRouter } from 'next/router';
import { BASE_URL } from "../../api/urls";
import { notify } from "../toast/toast";
import { useDispatch } from "react-redux";



const RequestProfile = (token, userID, name, family, birthday, gender, picId, router, lang, dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var raw =JSON.stringify({
        "userId": userID,
        "name": name,
        "family": family,
        "profilepicid": picId,
        "birthdaydatetime": birthday,
        "gender": +gender,
  });

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
};
  if(name !== "" && family !== "" && birthday !== ""){
    fetch(`${BASE_URL}api/v1/User/UpdateProfile`, requestOptions)
      .then(response => response.json())
      .then(json => {
          if(json.code === 200) {
            router.push({pathname: '/profile'});
              dispatch(updateSetProfile(JSON.parse(raw)));
          }
        })
      .catch(error => console.log('error', error))
  }else{
    let textShow ;
    if(lang === 'fa'){
      textShow = "فرم ها را کامل پر کنید"
    }else{
      textShow = 'please completed forms'
    }
    notify(textShow, "warning")
  }
}

export default RequestProfile;