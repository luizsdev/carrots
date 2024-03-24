import Image from "next/image";
import Link from "next/link";
import { Bar } from "./Bar";
import { CooperativeProps } from "~~/types/marketplace";

type CooperativeCardProps = {
  cooperative: CooperativeProps;
};

export function CooperativeCard({ cooperative }: CooperativeCardProps) {
  return (
    <Link href={`/cooperative/${cooperative.id}`} className="aspect-[1.125] rounded-lg shadow-xl py-10 px-5">
      <div className="aspect-[1.75] relative mb-10">
        <Image src={cooperative.image} alt={cooperative.name} width={517} height={295} layout="responsive" />
        <span className="z-50 text-yellow-50 absolute bottom-4 left-5 font-semibold text-2xl">{cooperative.name}</span>
      </div>

      <Bar progress={cooperative.totalProgress} />

      <div className="flex justify-between [&>span]:font-semibold [&>span]:text-2xl mt-5 [&>span]:text-yellow-950">
        <span>{cooperative.totalProgress}%</span>
        <span>${cooperative.currentProgress}</span>
        <span>{cooperative.remaningTime}</span>
      </div>
    </Link>
  );
}
