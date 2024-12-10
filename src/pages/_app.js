import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
