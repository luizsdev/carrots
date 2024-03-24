export const PurchaseTokens = () => {
  return (
    <div className="flex gap-6 mt-auto">
      <input
        className="bg-transparent text-2xl text-right rounded placeholder:absolute placeholder:right-6 placeholder:top-6 placeholder:text-2xl w-full placeholder:text-yellow-950 focus:outline-none bg-yellow-100 px-4 h-20"
        placeholder="Amount USDC"
      />

      <button className="text-2xl w-[211px] font-semibold h-[80px] border-2 rounded-[10px] hover:bg-yellow-900 text-yellow-50 bg-yellow-950">
        Comprar
      </button>
    </div>
  );
};
