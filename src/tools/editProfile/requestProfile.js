import { updateSetProfile } from "../../redux/register/registerAction"; 
import { useRouter } from 'next/router'



const RequestProfile = (token, userID, name, family, birthday, gender, picId, picPath, dispatch,address, router) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var raw =JSON.stringify({
        "userId": userID,
        "name": name,
        "family": family,
        "profilepic": picId,
        "profiepicpath": picPath,
        "birthdaydatetime": birthday,
        "gender": +gender,
        "address": address
});


var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
};

fetch("https://api.tiolastyle.com/api/v1/User/UpdateProfile", requestOptions)
  .then(response => response.json())
  .then(json => {
      if(json.code === 200) {
          dispatch(updateSetProfile(JSON.parse(raw)));
          router.push({pathname: '/'});
      }
    })
  .catch(error => console.log('error', error))
}

export default RequestProfile;