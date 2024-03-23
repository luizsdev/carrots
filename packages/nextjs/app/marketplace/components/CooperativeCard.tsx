import Image from "next/image";
import Link from "next/link";
import { Bar } from "./Bar";

type CooperativeCardProps = {
  cooperative: {
    name: string;
    location: string;
    id: string;
    description: string;
    members: number;
    crops: string[];
    image: string;
    totalProgress: number;
    currentProgress: string;
    remaningTime: string;
  };
};

export function CooperativeCard({ cooperative }: CooperativeCardProps) {
  return (
    <Link href={`/cooperative/${cooperative.id}`} className="aspect-[1.125] rounded-lg shadow-xl py-10 px-5">
      <div className="aspect-[1.75] relative">
        <Image src={cooperative.image} alt={cooperative.name} width={517} height={295} layout="responsive" />
        <span className="z-50 text-yellow-50 absolute bottom-4 left-5 font-semibold text-2xl">{cooperative.name}</span>
      </div>

      <Bar progress={cooperative.totalProgress} />

      <div className="flex justify-between [&>span]:font-semibold [&>span]:text-2xl mt-5">
        <span>{cooperative.totalProgress}%</span>
        <span>${cooperative.currentProgress}</span>
        <span>{cooperative.remaningTime}</span>
      </div>
    </Link>
  );
}
