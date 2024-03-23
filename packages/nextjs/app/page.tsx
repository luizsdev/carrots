"use client";

import { CooperativeCard } from "./marketplace/components/CooperativeCard";
import type { NextPage } from "next";
import { FunnelIcon, ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

const cooperatives = [
  {
    name: "Farm 1",
    location: "Kumasi",
    id: "1",
    description: "Farm 1 is a cooperative in Kumasi",
    members: 10,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop1.png",
    totalProgress: 88,
    currentProgress: "4.86K/6K",
    remaningTime: "7 days",
  },
  {
    name: "Farm 2",
    location: "Accra",
    id: "2",
    description: "Farm 2 is a cooperative in Accra",
    members: 20,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop2.png",
    totalProgress: 88,
    currentProgress: "4.86K/6K",
    remaningTime: "7 days",
  },
  {
    name: "Farm 3",
    location: "Takoradi",
    id: "3",
    description: "Farm 3 is a cooperative in Takoradi",
    members: 30,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop3.png",
    totalProgress: 88,
    currentProgress: "4.86K/6K",
    remaningTime: "7 days",
  },
  {
    name: "Farm 4",
    location: "Ho",
    id: "4",
    description: "Farm 4 is a cooperative in Ho",
    members: 40,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop1.png",
    totalProgress: 88,
    currentProgress: "4.86K/6K",
    remaningTime: "7 days",
  },
];
const Home: NextPage = () => {
  return (
    <main className="mx-20 py-[60px]">
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
    </main>
  );
};

export default Home;
