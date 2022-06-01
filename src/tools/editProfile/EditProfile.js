import React, { useEffect, useRef, useState } from 'react';
import style from './EditProfile.module.css';
import Link from "next/link";
import ChangeImage from '../uploadImgUser/getUserProfile'
import { useRouter } from 'next/dist/client/router';
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";

//request 
import RequestProfile from './requestProfile';
import { useDispatch, useSelector } from 'react-redux';

const EditProfile = () => {

  const router = useRouter();


    const dispatch = useDispatch();

    const userData = useSelector(state => state.stateRegister);


    const [userToken, setToken] = useState();

    const [userFName , setUserFName] = useState();
    const subFName = (e) => {
        setUserFName(e.target.value)
    }

    const [userLName , setUserLName] = useState();
    const subLName = (e) => {
        setUserLName(e.target.value)
    }

    const [address, setAddress] = useState("");
    const subAddress = (e) => {
        setAddress(e.target.value);
    }

    const birthdayUser = userData.birthDayDateTime.split('T');
    const [userBirthday , setBirthday] = useState(birthdayUser);
    const subBirthday = (e) => {
        setBirthday(e.target.value)
    }

    const [gender , setGender] = useState();
    const subGender = (e) => {
        setGender(e.target.value)
    }

    const subHandler = (e) => {
        e.preventDefault();
        RequestProfile(
            userToken,userData.userid,userFName,userLName,userBirthday,gender,imageId,image,dispatch,address
            ,router
            );
    }

    //get image
    const [preload, setpreload] = useState(false);
    const [image, setImage] = useState("");
    const [imageId, setImageid] = useState()

    const ChangeImageAction = async (e) => {
      e.preventDefault();
      setpreload(true);
      var Image = await ChangeImage(e);
      if (Image !== null) {
        setImage(Image.data.filePath);
        setImageid(Image.data.id);
      } else {
          console.log("error")
      }
      setpreload(false);
    };

    const removeImg = () => {
        setImage('');
        setImageid(0)
    }

    useEffect(()=> {
        const tokenLocal = JSON.parse(localStorage.getItem('userToken'));
        if (tokenLocal) {
         setToken(tokenLocal.token);
        }
        setUserFName(userData.name);
        setUserLName(userData.family);
        setBirthday(birthdayUser[0]);
        setGender(userData.gender)
    },[userData])

    return (
        <div className={`container ${style.main}`}>
            <h1>Acount</h1>
            <form onSubmit={subHandler}>
                <div className='row'>
                    <div className={`col-12 ${style.imgField}`}>
                        <div className={`row ${style.imgField}`}>
                            <div className='col-12'>
                                <img 
                                    src={preload ? "/Assets/images/loader.gif" : image === '' ? "/Assets/images/userdefault.png" : image }
                                    alt="user profile"
                                />
                                <input
                                  type="file"
                                  id="userImage"
                                  accept="image/png, image/jpeg,"
                                  onChange={ChangeImageAction}
                                />
                                <span><label htmlFor='userImage'>Change</label></span>
                                <button onClick={removeImg}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row m-5'>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex flex-column '>
                            <label htmlFor='fname-in'>Enter your first name:</label>
                            <input
                                id='fname-in' 
                                type='text' 
                                placeholder='Full Name' 
                                value={userFName} 
                                onChange={subFName} 
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex flex-column '>
                            <label htmlFor='lname-in'>Enter your last name:</label>
                            <input 
                                id='lname-in' 
                                type='text' 
                                placeholder='Last Name' 
                                value={userLName} 
                                onChange={subLName}
                            />
                        </div>
                    </div>
                </div>
                <div className='row m-5 align-items-end'>
                    <div className='col-12'>
                        <div className='d-flex flex-column '>
                            <label htmlFor='address-in'>Enter your Address:</label>
                            <input 
                                type='text'
                                id='address-in'
                                placeholder='Address'
                                value={address}
                                onChange={subAddress}
                            />
                        </div>
                    </div>
                </div>
                <div className='row m-5 align-items-end'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='d-flex flex-column '>
                            <label htmlFor='birthday'>Enter your birthday</label>
                            <input
                                id='birthday'
                                type='date'
                                placeholder='day/mont/year'
                                value={userBirthday}
                                onChange={subBirthday}
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-5'>
                        <div className='row '>
                            <div className='d-flex align-items-center col-12 col-md-12 col-lg-12 mt-4 text-center'>
                                <label htmlFor="cars" >Choose your sex:</label>
                                    <select value={gender} id="cars" onChange={subGender}>
                                        <option value="0">Female</option>
                                        <option value="1">Male</option>
                                        <option value="2">not to say</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-3 text-center'>
                        <div className='mt-5'>
                            <button type='submit'>Submit</button>
                            <Link href='/' >
                                <span className={style.navigate}>Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;