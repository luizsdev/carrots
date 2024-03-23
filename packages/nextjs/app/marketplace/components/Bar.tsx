export function Bar({ progress }: { progress: number }) {
  const MIN_PROGRESS_VALUE = 0;
  const MAX_PROGRESS_VALUE = 100;

  if (progress < MIN_PROGRESS_VALUE) {
    progress = MIN_PROGRESS_VALUE;
  }
  if (progress > MAX_PROGRESS_VALUE) {
    progress = MAX_PROGRESS_VALUE;
  }

  return (
    <div className="w-full overflow-hidden bg-transparent h-[30px] rounded-full border-2 border-yellow-950">
      <div
        className="h-full overflow-hidden bg-yellow-300 duration-500 rounded-full"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
