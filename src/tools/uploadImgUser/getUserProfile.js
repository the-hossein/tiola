import callApi from '../../api/callApi'; 
import { BASE_URL, UPLOAD_FILE_REQUEST } from '../../api/urls';
import { notify } from '../toast/toast';
const regex = /\.(jpe?g|png|svg|bmp)$/mgi;

const ChangeImage = async (e) => {
    const target = e.target.files[0];
    console.log(target.name)

    if(regex.test(target.name)){
      var formdata = new FormData();
      formdata.append("File", e.target.files[0], e.target.files[0].name);
      
      var requestOptions = {
        body: formdata,
      };
      
      try {
        const result = await callApi(BASE_URL+UPLOAD_FILE_REQUEST,"POST", formdata);
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