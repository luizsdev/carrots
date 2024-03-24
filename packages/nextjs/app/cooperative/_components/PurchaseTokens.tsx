import { useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const PurchaseTokens = ({ onComplete }: { onComplete: () => void }) => {
  const [value, setValue] = useState(0);
  const { writeAsync, isSuccess } = useScaffoldContractWrite({
    contractName: "Cooperative",
    functionName: "transfer",
    args: ["0xC15Fb0eE972bd9934E92e51cD0F2b871B8dd2478", BigInt(165000000000000000000000)],
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });
  if (isSuccess) {
    setTimeout(() => {
      onComplete();
    }, 3500);
  }
  return (
    <>
      <div className="flex gap-6 mt-auto">
        <input
          className="bg-transparent text-2xl text-right rounded placeholder:absolute placeholder:right-6 placeholder:top-6 placeholder:text-2xl w-full placeholder:text-yellow-950 focus:outline-none bg-yellow-100 px-4 h-20"
          placeholder="Amount ETH"
          onChange={e => setValue(parseFloat(e.target.value))}
        />

        <button
          onClick={async () => {
            await writeAsync();
          }}
          className="text-2xl w-[211px] font-semibold h-[80px] border-2 rounded-[10px] hover:bg-yellow-900 text-yellow-50 bg-yellow-950"
        >
          Comprar
        </button>
      </div>
      <span className="pt-1">
        {value} ETH ± {value * 110000} COOP
      </span>
    </>
  );
};
