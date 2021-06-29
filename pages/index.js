import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pentagon Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-screen">
        <Image
          src="/pentagonStudioLogo.jpg"
          alt="pentagon studio logo"
          width={300}
          height={300}
        />
        <p className="mt-10 text-4xl font-comfortaa">
          Building digital products that <br />
          <span className="text-green-600">loves users</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-screen">
        <p className="mt-10 text-4xl font-comfortaa text-green-600">We are</p>
        <p className="mt-10 text-2xl font-comfortaa">
          A team of technology, design and marketing entusiasts who thinks about
          and builds great digital products.
        </p>
        <p className="mt-40 text-4xl font-comfortaa text-green-600">
          We specialize on building
        </p>
        <p className="mt-10 text-2xl font-comfortaa">
          Web and mobile applications <br />
          Virtual reality applications <br />
          Interactive websites AI powered user Interfaces <br />
          Human computer intreaction research
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-screen">
        <p className="mt-10 text-4xl font-comfortaa text-green-600">
          Our products
        </p>
        <div className="w-full flex flex-row justify-between">
          <div className="flex-1"></div>
          <div className="flex-1">Dream First</div>
          <div className="flex-1">
            Dream Firsts is your wellwisher, thinks about your dreams, life
            goals. She is one who is most happy when you achieved them.
          </div>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="flex-1">
            Learn First is your partner, teacher, your personal coach, who loves
            you, how evolves with your need. She will make you wiser daily.
          </div>
          <div className="flex-1">Learn First</div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-screen">
        <p className="mt-10 text-4xl font-comfortaa">
          We are excited to hear from you
        </p>
        <p className="mt-10 text-4xl font-comfortaa text-green-600">
          hello@pentagon.studio
        </p>
      </div>
    </div>
  );
}
