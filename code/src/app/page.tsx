import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Link href="/signin" className="bg-orange-300 rounded-lg">
        <span>Signin</span>
      </Link>
    </div>
  );
}
