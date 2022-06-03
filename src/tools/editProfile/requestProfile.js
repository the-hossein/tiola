import { updateSetProfile } from "../../redux/register/registerAction"; 
import { useRouter } from 'next/router';
import { BASE_URL } from "../../api/urls";
import { notify } from "../toast/toast";



const RequestProfile = (token, userID, name, family, birthday, gender, picId, router) => {
  // const router = useRouter();
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

  console.log(birthday);
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
};
  if(name !== "" && family !== "" && birthday !== ""){
    fetch(`${BASE_URL}api/v1/User/UpdateProfile`, requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json)
          if(json.code === 200) {
            console.log("worked")
            router.push({pathname: '/profile'});
              dispatch(updateSetProfile(JSON.parse(raw)));
          }
        })
      .catch(error => console.log('error', error))
  }else{
    notify("compeleted your data", "warning")
  }
}

export default RequestProfile;