import callApi from '../../api/callApi'; 
import axios from 'axios';
import { BASE_URL, UPLOAD_FILE_REQUEST } from '../../api/urls';
import { notify } from '../toast/toast';
const regex = /\.(jpeg|png|svg|bmp|jpg)$/mgi;

const ChangeImage = async (e) => {
    const target = e.target.files[0];
    let data = '';

    if(regex.test(target.name)){

      var ls = localStorage.getItem("userToken");
      const userToken = JSON.parse(ls);

      var usertoken = userToken.token;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${usertoken}`);
      myHeaders.append("Content-Type", "application/json");


      var formdata = new FormData();
      formdata.append("File", target, target.name);

      var requestOptions = {
        method: 'POST',
        Headers:myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      const response = await fetch('https://api.tiolastyle.com/api/v1/Files/Upload', requestOptions);
      const data = await response.json();
      const status = await response.status;
      
        
      return data;
       

      // var formdata = new FormData();
      // formdata.append("File", target, target.name);

      // var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");




      // var requestOptions = {
      //   method: 'POST',
      //   body: formdata,
      //   header: myHeaders,
      //   redirect: 'follow'
      // };
      
      // fetch("https://api.tiolastyle.com/api/v1/Files/Upload", requestOptions)
      //     .then(response => response.json)
      //     .then(json => console.log(json))
      //     .catch(err => console.log(err))
      
      // try {
      //   const result = await fetch("https://api.tiolastyle.com/api/v1/Files/Upload", requestOptions)
      //   console.log(result)
      //   if (result.code === 200) {
      //     return result.data;
      //   }
      //   else {
      //     return null
      //   }
      // } catch {
      //   return null
      // }
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

// fetch("https://api.tiolastyle.com/api/v1/User/UpdateProfile", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));