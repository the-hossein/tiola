import callApi from '../../api/callApi'; 
import axios from 'axios';
import { BASE_URL, UPLOAD_FILE_REQUEST } from '../../api/urls';
import { notify } from '../toast/toast';
const regex = /\.(jpe?g|png|svg|bmp)$/mgi;

const ChangeImage = async (e, token) => {
    const target = e.target.files[0];
    // console.log(target.name)

    if(regex.test(target.name)){
      var formdata = new FormData();
      formdata.append("File", e.target.files[0], e.target.files[0].name);

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}` );
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "userId": token,
        "name": "",
        "family": "",
        "profilepic": 0,
        "birthdaydatetime": "2022-05-30T17:55:14.382Z",
        "gender": 1,
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      try {
        const result = await callApi(BASE_URL+UPLOAD_FILE_REQUEST,)
        console.log(result)
        if (result.code === 200) {
          return result.data;
        }
        else {
          return null
        }
      } catch {
        return null
      }
    } else {
      notify("pleas enter true format image" , 'error');
      return null; 
    }

}


  export default ChangeImage;


//   var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOTIyMzkxMTQ4NSIsImp0aSI6IjE2ZmVmN2FmLWU3YTktNDdkMy1hNjYyLWM0OTY3M2E0ZTBjNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMDkyMjM5MTE0ODUiLCJleHAiOjE2NTQzMTk3NDQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTgxNzkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjU4MTc5In0.Qla1Eaz7NJmL_Vc7YuoK7ph7pCfMdxdN7y56VgaVX7M");
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "userId": "574e267f-c022-49d3-55a5-08da4099dd54",
//   "name": "حسین",
//   "family": "خسروی",
//   "profilepic": 0,
//   "birthdaydatetime": "2022-05-30T17:55:14.382Z",
//   "gender": 1
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

fetch("https://api.tiolastyle.com/api/v1/User/UpdateProfile", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));