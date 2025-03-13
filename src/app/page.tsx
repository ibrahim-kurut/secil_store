import Link from "next/link";

export default function Home() {
  return (
    <h1 className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-1/2 bg-gray-200 py-5 rounded text-center capitalize ">
        <p className="text-2xl">hello secil store</p>
        <Link href="/login">login</Link>
      </div>
    </h1>
  );
}
