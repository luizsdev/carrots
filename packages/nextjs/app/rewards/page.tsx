"use client";

import { useState } from "react";
import { RewardCard } from "~~/components/rewards/RewardCard";

export default function Rewards() {
  const [isClaimed, setIsClaimed] = useState(false);

  function handleClaimTokens() {
    setIsClaimed(true);
  }

  return (
    <div className="flex flex-col w-full gap-[50px]">
      <RewardCard progress={100} disabled={isClaimed} onClaim={() => handleClaimTokens()} />
      <RewardCard progress={50} disabled={true} onClaim={() => handleClaimTokens()} />
      <RewardCard progress={70} disabled={true} onClaim={() => handleClaimTokens()} />
      <RewardCard progress={20} disabled={true} onClaim={() => handleClaimTokens()} />
      <RewardCard progress={10} disabled={true} onClaim={() => handleClaimTokens()} />
    </div>
  );
}
