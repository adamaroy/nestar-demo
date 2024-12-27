import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        <meta name="keyword" content={"nestar ,nestar.uz,devex mern,mern nestjs fullstack"} />
        <meta name="description" content={
          "Buy and Sell properties anywhere in South Korea.|" + 
          "부동산을 어디서나 사고 팔 수 있습니다|" + 
          "Покупайте и продавайте недвижимость в любом месте Южной Кореи" 
         }
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
