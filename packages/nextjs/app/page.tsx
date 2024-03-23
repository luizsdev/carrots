"use client";

import Link from "next/link";
import type { NextPage } from "next";

const cooperatives = [
  {
    name: "Farm 1",
    location: "Kumasi",
    id: "1",
    description: "Farm 1 is a cooperative in Kumasi",
    members: 10,
    crops: ["Cassava", "Maize", "Tomato"],
  },
  {
    name: "Farm 2",
    location: "Accra",
    id: "2",
    description: "Farm 2 is a cooperative in Accra",
    members: 20,
    crops: ["Cassava", "Maize", "Tomato"],
  },
  {
    name: "Farm 3",
    location: "Takoradi",
    id: "3",
    description: "Farm 3 is a cooperative in Takoradi",
    members: 30,
    crops: ["Cassava", "Maize", "Tomato"],
  },
  {
    name: "Farm 4",
    location: "Ho",
    id: "4",
    description: "Farm 4 is a cooperative in Ho",
    members: 40,
    crops: ["Cassava", "Maize", "Tomato"],
  },
];
const Home: NextPage = () => {
  return (
    <>
      <div className="py-14 grid grid-cols-3 mx-16 gap-8">
        {cooperatives.map(cooperative => {
          return (
            <div className="aspect-video border-red-500 border" key={cooperative.id}>
              <Link href={`/cooperative/${cooperative.id}`} className="aspect-video border-red-500 border">
                {cooperative.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
