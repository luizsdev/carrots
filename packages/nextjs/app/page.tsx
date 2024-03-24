"use client";

import { CooperativeCard } from "./marketplace/components/CooperativeCard";
import type { NextPage } from "next";
import { FunnelIcon, ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { CooperativeProps } from "~~/types/marketplace";

const cooperatives: CooperativeProps[] = [
  {
    name: "Cooperativa de Café da Paraíba",
    location: "Kumasi",
    id: "1",
    members: 10,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop1.png",
    totalProgress: 91.6,
    currentProgress: "5.5K/6K",
    remaningTime: "7 days",
  },
  {
    name: "Cooperativa de Milho Verde",
    location: "Accra",
    id: "2",
    members: 20,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop2.png",
    totalProgress: 25,
    currentProgress: "2.5K/10K",
    remaningTime: "13 days",
  },
  {
    name: "Cooperativa de Soja do Mato Grosso",
    location: "Takoradi",
    id: "3",
    members: 30,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop3.png",
    totalProgress: 75,
    currentProgress: "18K/22K",
    remaningTime: "4 days",
  },
  {
    name: "Cooperativa de Soja do Mato Grosso",
    location: "Ho",
    id: "4",
    members: 40,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop3.png",
    totalProgress: 97,
    currentProgress: "2.86K/3K",
    remaningTime: "1 day",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-between pb-[60px]">
        <div className="flex items-center gap-[10px]">
          <Squares2X2Icon width={30} className="stroke-yellow-500" />
          <ListBulletIcon width={30} />
        </div>

        <FunnelIcon width={30} />
      </div>

      <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
        {cooperatives.map(cooperative => {
          return <CooperativeCard key={cooperative.id} cooperative={cooperative} />;
        })}
      </div>
    </>
  );
};

export default Home;
