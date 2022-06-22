import React from "react";
import { useSelector } from "react-redux";
import style from "./UserFactor.module.css";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Delivery = ({ setPost, post }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <div className="row   justify-content-evenly">
          <div className={`col-lg-5 col-md-6 col-12 mb-2`}>
            <div
              className={`${style.ChosePost} ${
                post === "tehran" && style.active
              }`}
              onClick={()=>setPost("tehran")}
            >
              <div className={style.peyk}>
                <FormControlLabel
                  checked={post === "tehran"}
                  value="tehran"
                  onChange={() => setPost("tehran")}
                  control={
                    <Radio
                      checkedIcon={<CheckBoxIcon sx={{ fontSize: 30 }} />}
                      icon={
                        <CheckBoxOutlineBlankIcon
                          sx={{
                            fontSize: 30,
                            color: "#c7c7c7",
                            stroke: "white"
                          }}
                        />
                      }
                    />
                  }
                />

                <span>
                  {lang === "fa"
                    ? "ارسال با پیک تهران"
                    : "Send by Tehran courier"}
                </span>
              </div>
              <p>
                {lang === "fa"
                  ? "ارسال با پیک ویژه مشتریان ساکن در تهران ، هزینه ارسال به عهده مشتری می باشد  زمان ارسال ۱ الی ۲ روز کاری"
                  : "Shipping by special courier for customers living in Tehran, the shipping cost is the responsibility of the customer. Shipping time is 1-2 working days"}
              </p>
            </div>
          </div>
          <div className={`col-lg-5 col-md-6 col-12 mb-2`}>
            <div
              className={`${style.ChosePost} ${
                post === "pishtaz" && style.active
              }`}
              onClick={()=>setPost("pishtaz")}
            >
              <div className={style.peyk}>
                <FormControlLabel
                  checked={post === "pishtaz"}
                  value="pishtaz"
                  control={
                    <Radio
                      icon={
                        <CheckBoxOutlineBlankIcon
                          sx={{
                            fontSize: 30,
                            color: "#c7c7c7",
                            stroke: "white"
                          }}
                        />
                      }
                      checkedIcon={<CheckBoxIcon sx={{ fontSize: 30 }} />}
                    />
                  }
                  onChange={() => setPost("pishtaz")}
                />

                <span>
                  {lang === "fa"
                    ? "ارسال با  پست پیشتاز"
                    : "Send by Pishtaz Post"}
                </span>
              </div>
              <p>
                {lang === "fa"
                  ? " ارسال به سرار کشور با پست پیشتاز ،هزینه ارسال ۲۰ تومان می باشد و زمان ارسال ۳ تا ۶ روز کاری می باشد . "
                  : "Shipping to all over the country by Pishtaz post, the shipping cost is 20 Tomans and the shipping time is 3 to 6 working days."}
              </p>
            </div>
          </div>
        </div>
      </RadioGroup>
    </FormControl>
  );
};

export default Delivery;
