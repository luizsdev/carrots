"use client";

import { useState } from "react";
import { RewardCard } from "~~/components/rewards/RewardCard";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export default function Rewards() {
  const [isClaimed, setIsClaimed] = useState(false);
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "Cooperative",
    functionName: "transfer",
    args: ["0xC15Fb0eE972bd9934E92e51cD0F2b871B8dd2478", BigInt(165000000000000000000000)],
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });
  async function handleClaimTokens() {
    setTimeout(() => {
      setIsClaimed(true);
    }, 3500);
    await writeAsync();
  }

  return (
    <div className="flex flex-col w-full gap-[50px]">
      <RewardCard
        coopName="Cooperativa de Soja do Mato Grosso"
        quantity="165000 COOP"
        claimStatus={isClaimed ? "Claimed" : "Claim Tokens"}
        progress={100}
        disabled={isClaimed}
        onClaim={async () => await handleClaimTokens()}
      />
      <RewardCard
        coopName="Cooperativa de Café da Paraíba"
        quantity="92000 MTS"
        claimStatus="Claim Tokens"
        progress={50}
        disabled={true}
        onClaim={async () => await handleClaimTokens()}
      />
      <RewardCard
        coopName="Cooperativa de Milho Verde do Piaui"
        quantity="63000 LDN"
        claimStatus="Claimed"
        progress={100}
        disabled={true}
        onClaim={async () => await handleClaimTokens()}
      />
      <RewardCard
        coopName="Cooperativa Rio Sul"
        quantity="127000 BDP"
        claimStatus="Claimed"
        progress={100}
        disabled={true}
        onClaim={async () => await handleClaimTokens()}
      />
    </div>
  );
}
