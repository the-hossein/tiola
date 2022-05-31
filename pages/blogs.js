import Head from "next/head";
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import Blogs from "../src/Components/blogs/Blogs";
// import axios from "axios";
export default function blogs() {
  return (
    <div>
      <Head>
        <title>Tiola Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <Header backColor={"headerColor"} />
      </header>

      <main>
        <Blogs />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

// export async function getServerSideProps() {
//     const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     const blogs = data.date;
//     return { props:{ blogsFetched: blogs } }
// }