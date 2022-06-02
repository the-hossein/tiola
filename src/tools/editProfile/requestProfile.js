import { updateSetProfile } from "../../redux/register/registerAction"; 
import { useRouter } from 'next/router'



const RequestProfile = (token, userID, name, family, birthday, gender, picId, router) => {
  // const router = useRouter();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var raw =JSON.stringify({
        "userId": userID,
        "name": name,
        "family": family,
        "profilepic": picId,
        "birthdaydatetime": birthday,
        "gender": +gender,
  });

  console.log(raw);
  console.log(router);

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
};

fetch("https://api.tiolastyle.com/api/v1/User/UpdateProfile", requestOptions)
  .then(response => response.json())
  .then(json => {
    console.log(json)
      if(json.code === 200) {
        console.log("worked")
        router.push({pathname: '/'});
          // dispatch(updateSetProfile(JSON.parse(raw)));
      }
    })
  .catch(error => console.log('error', error))
}

export default RequestProfile;