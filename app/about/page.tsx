import Image from "next/image";
import raviImg from "@/assets/img/ravi.png";

export default function About() {
  return (
    <div className="container h-screen mx-auto p-4 md:p-8">
      <div className="relative aspect-square w-48 md:w-72 rounded-full overflow-hidden shadow-primary/70 shadow-lg">
        <Image src={raviImg} alt="Ravi Farhan" fill className="object-cover" />
      </div>
    </div>
  );
}
