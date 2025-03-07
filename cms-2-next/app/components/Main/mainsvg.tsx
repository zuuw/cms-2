import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-2">
      <Image src="/cody-web.svg" alt="Logo" width={154} height={72} />
    </div>
  );
}