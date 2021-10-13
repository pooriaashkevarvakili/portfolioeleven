import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link
              rel="shortcut icon"
              href="img/favicon.png"
              type="image/x-icon"
            />

            <link href="/css/bootstrap.min.css" rel="stylesheet" />

            <link href="/css/animate.css" rel="stylesheet" />

            <link href="/css/venobox.css" rel="stylesheet" />

            <link href="/css/owl.carousel.min.css" rel="stylesheet" />

            <link href="/css/chosen.css" rel="stylesheet" />

            <link href="/css/bootstrap-timepicker.min.css" rel="stylesheet" />

            <link href="/css/datepicker.css" rel="stylesheet" />

            <link
              rel="stylesheet"
              href="/fonts/font-awesome/css/font-awesome.min.css"
            />

            <link
              href="https://fonts.googleapis.com/css?family=Poppins:300,400,400i,500,600,700,800,900"
              rel="stylesheet"
            />

            <link href="/style.css" rel="stylesheet" />
          </head>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-3.3.1.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.counterup.min.js"></script>
          <script src="/js/waypoints.min.js"></script>
          <script src="/js/jquery.easing.min.js"></script>
          <script src="/js/wow.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/venobox.min.js"></script>
          <script src="/js/SmoothScroll.js"></script>
          <script src="/js/tilt.jquery.js"></script>
          <script src="/js/bootstrap-timepicker.min.js"></script>
          <script src="/js/bootstrap-datepicker.js"></script>
          <script src="/js/chosen.jquery.js"></script>
          <script src="/mail/js/form-validator.min.js"></script>
          <script src="/mail/js/contact-form-script.js"></script>
          <script src="/js/script.js"></script>
        </body>
      </Html>
    );
  }
}
