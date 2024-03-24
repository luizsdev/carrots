import { RewardCard } from "~~/components/rewards/RewardCard";

export default function Rewards() {
  return (
    <div className="flex flex-col w-full gap-[50px]">
      <RewardCard progress={50} />
      <RewardCard progress={100} />
      <RewardCard />
      <RewardCard />
      <RewardCard />
    </div>
  );
}
