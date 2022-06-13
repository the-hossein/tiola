import Head from "next/head";
import Footer from "../../src/Components/footer/Footer";
import Header from "../../src/Components/header/Header";
import BlogDetail from "../../src/Components/blogs/blogsDetail/BlogDetail";
import { useTranslation } from "react-i18next";
import callApi from "../../src/api/callApi";
import { BASE_URL, GET_TARGET_BLOG } from "../../src/api/urls";
export default function Blog({ blog }) {
  const { t } = useTranslation();
  console.log(blog);
  
  return (
    <div>
      <Head>
        <title>{t("tiolaBlogsTitle")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>

      <main>
        <BlogDetail data={blog} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

      export async function getServerSideProps(context) {
        const { params } = context;
        const { blog } = params;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        const data = await callApi(
          `${BASE_URL+GET_TARGET_BLOG}?id=${blog}`,
          "{}",
          myHeaders,
          "GET"
        );
      
        return {
          props: { blog: data[0].data } // will be passed to the page component as props
        };
      }
      