import React from "react";
import style from "./BuyList.module.css";
import { useSelector } from "react-redux";
const Rule = ({ openRule, setopenRule, setFaQ }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    openRule === true && (
      <div className={style.popoup}>
        <div className={style.popoupContent}>
          <h5>{lang === "fa" ? " قوانین:" : "Rules: "}</h5>
          <p>
            {lang === "fa"
              ? "قوانین و مقررات مربوط به فروشگاه اینترنتی تیولا ضمن تشکر بابت اعتماد و خرید از سایت فروشگاهی تیولا احترما به استحضار میرساند:"
              : "Terms and Conditions of Tiola Online Store Thank you for your trust and purchase from the Tiola store site."}
          </p>
          <ol>
            <li>
              {lang === "fa"
                ? "با توجه به تفاوت در نمایشگرهای مبایل و کامپیوتر های کاربران ، وجود اختلاف رنگی با اصل کار ممکن است و متاسفانه امکان به صفر رساندن این اختلاف ممکن نیست لذا تیم عکاسی فروشگاه اینترنتی تیولا تمام سعی و تلاش خود را برای نشان دادن رنگ واقعی محصولات به کار خواهد گرفت تا کاربران با خیال آسوده تری خرید اینترنتی انجام دهند و از اینکه به این موضوع توجه مینمایید بسیار سپاس گزاریم ."
                : "Due to the difference in the screens of users' mobiles and computers, it is possible to have a color difference with the original work, and unfortunately it is not possible to reduce this difference to zero, so the photography team of Tiola online store does its best to show the true color of products. It will take users to shop online more easily and thank you very much for paying attention to this issue."}
            </li>
            <li>
              {lang === "fa"
                ? "با کمال احترام متاسفانه جنس فروخته شده به هیچ عنوان پس گرفته و تعویض نمیشود مگر در حالتیکه جنس خریداری شده مشکل تولیدی داشته باشد."
                : "With all due respect, unfortunately, the sold item will not be returned or exchanged in any way, unless the purchased item has a production problem."}
            </li>
            <li>
              {lang === "fa"
                ? "بنابراین خواهشمندیم در زمان خرید حتما دقت کافی داشته باشید."
                : "Therefore, please be careful when buying."}
            </li>
            <li>
              {lang === "fa"
                ? "در صورتی که کار خریداری شده مشکل تولیدی داشته باشد(مشروط  برتاییدیه مدیریت سایت تیولا ) هزینه پستی  تعویض کار بر عهده فروشگاه اینترنتی تیولا خواهد بود .ضمنا کار ایراددار صرفا تعویض میشود و امکان عودت و استرداد وجه تحت هیچ عنوان وجود ندارد ."
                : "If the purchased work has a production problem (subject to the approval of the Tiola site management), the postage cost of the work replacement will be borne by the Ado online store."}
            </li>
            <li>
              {lang === "fa"
                ? "بنابراین خرید از فروشگاه اینترنتی تیولا به منزله قبول کلیه قوانین مربوط به این سایت می باشد و کاربران امکان هرگونه اعتراض را از خود سلب می نمایند."
                : "Therefore, buying from Tiola online store means accepting all the rules related to this site and users are deprived of the possibility of any objection."}
            </li>
          </ol>
          <button
            className={style.accept}
            onClick={() => {
              setFaQ(true);
              setopenRule(false);
            }}
          >
            {lang === "fa" ? "قبول میکنم" : "Accept"}
          </button>
        </div>
      </div>
    )
  );
};

export default Rule;
