import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pentagon Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image
          src="/pentagonStudioLogo.jpg"
          alt="pentagon studio logo"
          width={300}
          height={300}
        />
        <p className="mt-3 text-2xl font-mono">
          Building digital products that <br />
          <span className="text-green-600">loves users</span>
        </p>
      </main>
    </div>
  );
}
