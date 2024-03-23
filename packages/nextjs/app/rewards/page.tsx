"use client";

import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Rewards() {
  const { isDisconnected } = useAccount();
  const router = useRouter();
  if (isDisconnected) router.push("/");

  return (
    <div className="py-14 grid grid-cols-3 mx-16 gap-8">
      <h1>Rewards</h1>
    </div>
  );
}
