// import { useDispatch } from "react-redux";
import { updateSetProfile } from "../../redux/register/registerAction"; 
import { useRouter } from 'next/router'



const RequestProfile = (token, userID, name, family, birthday, gender, picId, picPath, dispatch,address, router) => {
    // const dispatch = useDispatch();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    
    var raw ={
        "userId": userID,
        "name": name,
        "family": family,
        "profilepic": picId,
        "profiepicpath": picPath,
        "birthdaydatetime": birthday,
        "gender": +gender,
        // "address": address
};


var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
};
// console.log(myHeaders);
// console.log(raw);

fetch("https://api.tiolastyle.com/api/v1/User/UpdateProfile", requestOptions)
  .then(response => response.json())
  .then(json => {
      console.log(json)
      if(json.code === 200) {
          dispatch(updateSetProfile(JSON.parse(raw)));
          console.log(updateSetProfile(JSON.parse(raw)));
          console.log("worked");
          // router.push({pathname: '/'});
      }
    })
  .catch(error => console.log('error', error))
}

export default RequestProfile;