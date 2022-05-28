import callApi from '../../api/callApi'; 
import { BASE_URL, UPLOAD_FILE_REQUEST } from '../../api/urls';
import { notify } from '../toast/toast';

const ChangeImage = async (e) => {
    const target = e.target.files[0];
    
    var formdata = new FormData();
    formdata.append("File", e.target.files[0], e.target.files[0].name);

    var requestOptions = {
    //   method: 'POST',
      body: formdata,
    //   redirect: 'follow'
    };

    // fetch("https://api.tiolastyle.com/api/v1/Files/Upload", requestOptions)
    //   .then(response => console.log(response))
    //   .catch(error => console.log('error', error));
    try {
      const result = await callApi(BASE_URL+UPLOAD_FILE_REQUEST,"POST", formdata);
     /*  console.log(result.data.id);
      console.log(result.data.filePath); */
      if (result.code === 200) {
        return result.data;
         /*  notify("ok", "success"); */
          /* setImageSid(result.data.id);
          setImage(result.data.filePath); */
        // setpreload(false);
      }
      else {
          return null
        // setpreload(false);
        /* alert("not ok") */
      }
    } catch {
        return null
    }

  }


  export default ChangeImage;