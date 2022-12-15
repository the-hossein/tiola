import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import style from "./AboutUsTiola.module.css";

const AboutUsTiola = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);

  return (
    <div className={`container-fluid  ${style.tiola}`}>
      <div className={`row m-0 p-0`}>
        <div className="col-lg-5 col-12">
          <h4 className={style.aboutUstitle}>{t("tiolaStory")}</h4>
          {lang.lng === "fa" ? (
            <p className={`text-justify ${style.lineHeight}`}>
              همه ما حداقل برای یه بارم شده تو زندگیمون حس تکرار و ایستادن تو
              نقطه‌ای از گذشته، قرار گرفتیم، جوری که دیگه هیچ تنوعی خوشحالمون
              نکرده و داشتن همچین حس‌هایی برامون آزاردهنده بوده. نیاز شدیدی برای
              تغییر احساس کردیم و با فکر کردن به کارهای گذشته، متوجه شدیم که
              چقدر حس متفاوت‌تری نسبت به قبل داریم. از کافه رفتن با دوستامون و
              گپ زدنای طولانی مدت گرفته تا خریدای یهویی و قشنگی که یه زمانی با
              هر بار انجام دادنش خوشحال بودیم. اما خوب یا بد، تو همین لحظه‌ این
              حس و حال برامون عجیبه و متفاوت. توی تنهایی‌هامون دنبال دلیل و منطق
              براش می‌گردیم و یه آن متوجه می‌شیم که این حسی که الان داریم یه حس
              کودکانه و لحظه‌ای نیست. یه حس کاملا واقعیهِ. همونجاست که، ایده‌ای
              تو ذهنمون شکل میگیره و نیرویی هزار برابر بیشتر تو تمام وجودمون جمع
              میشه، بلند میشیم و یه تغییر اساسی، خودمون برای خودمون و برای زندگی
              که دوسش داریم به وجود میاریم. دقیقا این نقطه برای تیم تیولا شروع
              همه چیز بود. دنیایی که تو الان داری می‌بینی و از دیدنش لذت می‌بری.
              یه زیبایی جاودانه و تکرارنشدنی، که برای رسیدن بهش لازم بود خیلی
              اتفاق‌ها بیوفته و سرنوشت تیم تیولا رو برای همیشه تغییر بده. حتی
              همین متنی که داری می‌خونی و انتظار داشتی مثل تمام درباره ماهایی که
              قبلا خوندی، به سایتمون سر بزنی، یه سری جمله‌های به صف شده از
              فعالیت‌ها و تجربیات مدیران و اهداف بلند مدت برنامه‌ریزی شده بخونی
              و بعد پیش خودت بگی: من می‌تونم دنیامو با تیولا تغییر بدم یا نه؟!
              من میگم می‌تونی، چون تیولا از جنس و رنگ و لعاب خودته. اینجا نه
              خبری از یه محیط خشک و اداری هست، نه یه سری محصول بی‌روح که با
              دیدنش هیچ حسی بهت دست نده. اینجا تیولاست؛ دنیای آرزوها، و تو
              می‌تونی با تمام وجود لقب زیبایی رو تقدیمش کنی. ما یه تیم 100 نفره
              از نیروی‌های جوان و پرتلاش هستیم، شال و روسری‌هایی که تولید
              می‌کنیم کاملا یونیک هستن و مراحل کار از تولید پارچه گرفته تا
              طراحی‌های خاصِ روی پارچه، مراحل چاپ،‌ برش، دوخت و بسته‌بندی همگی
              تو کارخونه و کارگاه‌هامون از طریق همین بچه‌های خلاق تولید و آماده
              میشه. تیولا؛ دنیای قشنگ صدها دوستِ خلاق و مسئولیت‌پذیریهِ که برای
              خوشحال کردن تو، ساعت‌ها با جون و دل تلاش می‌کنن و می‌خوان که تو به
              اهدافی که دنبالش هستی برسی، برای جاودانه کردن زیبایی‌هات. تیولا هر
              روز داره بزرگتر میشه و حس مسئولیتش نسبت به شما بیشتر. دوست داریم
              کنارمون باشی و با بچه‌هایی که واسه لبخند تو تمام انرژیشون رو
              گذاشتن آشنا بشی. هدفامون واضح، شفاف و کاملا ساده ست. اول خوشحال
              کردن تو، دوم نشون دادن یه ورژن جدیدی از زیبایی‌ها. زیبایی‌هایی که
              وقتی حسشون می‌کنی تازه می‌فهمی چقدر خوبه که یکی مثل خودتو پیدا
              کردی، نیازت رو می‌دونه و تا آخرین مسیر همراهت هست درست مثل یه دوست
              واقعی ...
            </p>
          ) : (
            <p className="text-justify">
              We have all felt at least once in our lives the feeling of
              repetition and standing in a place of the past, so that no
              diversity has made us happy anymore and having such feelings has
              been annoying to us. We felt a strong need for change, and by
              thinking about our past, we realized how much different we felt
              than before. From going to a cafe with our friends and chatting
              for a long time to buying a beautiful Yahweh that we were once
              happy to do every time. But good or bad, at the moment this
              feeling is strange and different for us. In our loneliness, we
              look for reason and logic, and one day we realize that the feeling
              we have now is not a childish and momentary feeling. A very real
              feeling. It is there that an idea is formed in our mind and a
              thousand times more force is gathered in our whole being, we rise
              and create a fundamental change, for ourselves and for the life we
              love. This was exactly the starting point for Tiola&apos;s team. You
              see the world you have now and you enjoy seeing it. An eternal and
              unrepeatable beauty that needed to happen to achieve many things
              and change the fate of the Tiola team forever. Even the same text
              that you are reading and you expected, like everyone about the
              months you have read before, to visit our site, read a series of
              sentences lined up by the activities and experiences of managers
              and long-term planned goals, and then say to yourself: Can I
              change my world with Tiola or not ?! I say you can, because Tiola
              is made of your own material, color and glaze. There is no news of
              a dry and office environment, nor a series of soulless products
              that you will not feel when you see it. Here is the thiol; The
              world of dreams, and you can give it the title of beauty with all
              your being. We are a team of 100 young and hard-working people,
              the scarves and shawls we produce are completely unique and the
              work process from fabric production to special designs on fabric,
              printing, cutting, sewing and packaging are all It is produced and
              prepared in our factory and workshop through these creative
              children. Tiola; The beautiful world of hundreds of creative and
              responsible friends who work hard for hours to make you happy and
              want you to reach the goals you are looking for, to immortalize
              your beauty. Tiola is getting bigger every day and has a greater
              sense of responsibility towards you. We would like you to be with
              us and get acquainted with children who put all their energy into
              smiling. Our goal is clear, transparent and quite simple. The
              first is to make you happy, the second is to show a new version of
              beauty. The beauties that when you feel them, you just realize how
              good it is that you have found someone like yourself, knows your
              needs and accompanies you to the last path, just like a real
              friend ...
            </p>
          )}
        </div>
        <div className={style.pic}></div>
      </div>
    </div>
  );
};

export default AboutUsTiola;
