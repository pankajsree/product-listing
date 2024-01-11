import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="grid w-full gap-6 grid-cols-2 py-4 px-6 shadow-lg mb-8">
        <Link href="/" className="flex">
          <Image
            src="/static/images/logo.svg"
            alt="logo"
            width="72"
            height="24"
          />
        </Link>
      </header>
      <main className="text-center text-gray-800">
        <h2 className="text-6xl mb-4 mt-32">Hello Customer</h2>
        <div className="text-4xl">
          Please check our products <Link href="/products" className='underline text-blue-700'>here</Link>
        </div>
      </main>
    </>
  );
}
