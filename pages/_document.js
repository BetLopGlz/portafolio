import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta name="description" content="Beatriz López Portafolio Website" />
            <title>Portafolio</title>
          
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