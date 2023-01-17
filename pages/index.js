import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-10">
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
      <div className="flex flex-col items-center justify-center w-full flex-1 text-center h-screen">
        <Image
          src="/pentagonStudioLogo.jpg"
          alt="pentagon studio logo"
          width={300}
          height={300}
        />
        <p className="mt-10 md:text-4xl font-comfortaa">
          Building digital products that <br />
          <span className="text-green-600">loves users</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 text-center h-screen">
        <p className="mt-10 text-4xl font-comfortaa text-green-600">We are</p>
        <p className="mt-10 md:text-2xl font-comfortaa">
          A team of technology, design and marketing experts who thinks about
          and builds great digital products.
        </p>
        <p className="mt-40 text-4xl font-comfortaa text-green-600">
          We are specializing in building
        </p>
        <p className="mt-10 md:text-2xl font-comfortaa">
          Web Applications <br />
          Mobile Applications <br />
          Websites <br />
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 text-center h-screen">
        <p className="mt-10 text-4xl font-comfortaa text-green-600">
          Our products
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-between mt-20">
          <div className="flex-1"></div>
          <a
            className="flex-1 flex items-center flex-col"
            href="https://shaperoute.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/dreamFirst.png"
              alt="DreamFirst logo"
              width={100}
              height={100}
            />
            <p className="font-comfortaa font-bold mb-2">ShapeRoute</p>
          </a>
          <div className="flex-1 self-center">
            <div className="w-80 font-comfortaa lg:text-left">
              Crypto fitness tracker that inspires you to be healthy
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row lg:flex-row justify-between mt-10">
          <div className="flex-1 self-center flex justify-end">
            <div className="w-80 font-comfortaa lg:text-right">
              Management solutions for small sized property owners.
            </div>
          </div>
          <a
            className="flex flex-1 items-center flex-col"
            href="https://www.producthunt.com/products/manmeho"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/learnFirst.png"
              alt="DreamFirst logo"
              width={100}
              height={100}
            />
            <p className="font-comfortaa font-bold mb-2">Manmeho</p>
          </a>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 text-center h-screen relative">
        <div>
          <p className="mt-10 text-xl md:text-4xl font-comfortaa">
            We love to hear from you
          </p>
          <p className="mt-10 text-xl md:text-4xl font-comfortaa text-green-600">
            hello@pentagon.studio
          </p>
        </div>
        <div className="absolute bottom-5">
          <a
            className="m-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/pentagon_studio"
          >
            twitter
          </a>
          <a
            className="m-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/thepentagonstudio"
          >
            facebook
          </a>
          <a
            className="m-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/pentagon.studio"
          >
            instagram
          </a>
          <a
            className="m-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/pentagon-studio"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
