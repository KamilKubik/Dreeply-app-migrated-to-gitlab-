import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <title>Startup Page</title> */}
          <link rel="icon" href="/monsters/monster-two.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap" rel="stylesheet" />
          {/* <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" /> */}
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Vollkorn&display=swap" rel="stylesheet" />
          {/* test */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/react-quill/0.4.1/react-quill.min.js"
            integrity="sha512-80TTUBnmpWABak9tJEQUf6ArzwJd5tMmiwo5VBcMS2DthMGhlg7bnZ3po/mkSBwQhCmcwtBxlHnf95R5s04Myg=="
            crossorigin="anonymous"
          ></script>

          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"
            integrity="sha512-pdCVFUWsxl1A4g0uV6fyJ3nrnTGeWnZN2Tl/56j45UvZ1OMdm9CIbctuIHj+yBIRTUUyv6I9+OivXj4i0LPEYA=="
            crossorigin="anonymous"
          ></script>
          {/* <script
            src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"
            integrity="sha512-d9xgZrVZpmmQlfonhQUvTR7lMPtO7NkZMkA0ABN3PHCbKA5nqylQ/yWlFAyY6hYgdF1Qh6nYiuADWwKB4C2WSw=="
            crossorigin="anonymous"
          ></script> */}
          {/* <script
            src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.0/chart.min.js"
            integrity="sha512-RGbSeD/jDcZBWNsI1VCvdjcDULuSfWTtIva2ek5FtteXeSjLfXac4kqkDRHVGf1TwsXCAqPTF7/EYITD0/CTqw=="
            crossorigin="anonymous"
          ></script> */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js"
            integrity="sha512-VMsZqo0ar06BMtg0tPsdgRADvl0kDHpTbugCBBrL55KmucH6hP9zWdLIWY//OTfMnzz6xWQRxQqsUFefwHuHyg=="
            crossorigin="anonymous"
          ></script>
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
