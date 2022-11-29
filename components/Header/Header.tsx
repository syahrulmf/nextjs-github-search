import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row space-x-5 items-center justify-center">
      <Image alt="logo" src={"/logo.png"} width={100} height={100} />
      <div>
        <p className="text-5xl">Cari Orang</p>
        <p className="text-4xl font-bold">Github</p>
      </div>
    </div>
  );
}
