import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
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
      </main>
    </div>
  );
}
