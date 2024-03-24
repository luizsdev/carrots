import { Bar } from "~~/app/marketplace/components/Bar";

type RewardCardProps = {
  progress?: number;
  disabled?: boolean;
  onClaim: () => void;
  claimStatus: string;
  coopName: string;
  quantity?: string;
};

export function RewardCard({
  progress = 100,
  disabled = false,
  onClaim,
  claimStatus,
  quantity,
  coopName,
}: RewardCardProps) {
  return (
    <div className="w-full flex justify-between shadow-lg h-[134px] px-4 py-8 items-center text-yellow-950 text-2xl rounded-lg bg-yellow-50">
      <div className="flex gap-[150px] items-end h-full ">
        <div className="flex flex-col  justify-start">
          <span className="font-semibold text-2xl">{coopName}</span>
          <div className="flex items-center justify-center gap-6 w-full">
            <Bar size="small" progress={progress} />
            <span className="text-2xl min-w-[118px]">{progress < 100 ? "Rising" : "Completed"}</span>
          </div>
        </div>
        <span>
          <span className="text-yellow-950 text-2xl font-semibold">Acquired amount: </span>
          {quantity}
        </span>
      </div>
      <div className="flex gap-5 h-full items-center">
        <button
          disabled={progress < 100 || disabled}
          className="bg-yellow-950 disabled:bg-opacity-50 disabled:hover:bg-yellow-950/50 disabled:cursor-not-allowed rounded-lg w-[192px] h-10 font-semibold text-lg text-yellow-50 hover:bg-yellow-900 transition-colors"
          type="button"
          onClick={onClaim}
        >
          {claimStatus}
        </button>
      </div>
    </div>
  );
}
