import Document, { Html, Main,Head, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta name="description" content="Beatriz López Portafolio Website" />
           
         {/* Nprogress css */}
         <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          /> 
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
       </body> 
      </Html>
    );
  }
}

export default MyDocument;