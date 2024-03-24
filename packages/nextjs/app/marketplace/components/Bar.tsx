interface BarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number;
  size?: "small" | "default";
}
export function Bar({ progress, size = "default", ...props }: BarProps) {
  const MIN_PROGRESS_VALUE = 0;
  const MAX_PROGRESS_VALUE = 100;

  if (progress < MIN_PROGRESS_VALUE) {
    progress = MIN_PROGRESS_VALUE;
  }
  if (progress > MAX_PROGRESS_VALUE) {
    progress = MAX_PROGRESS_VALUE;
  }
  const sizeVariant = size === "small" ? "h-[20px]" : "h-[30px]";
  return (
    <div
      className={`w-full min-w-[339px] overflow-hidden bg-transparent ${sizeVariant} rounded-full border-2 border-yellow-950 `}
      {...props}
    >
      <div
        className="h-full  overflow-hidden bg-yellow-300 duration-500 rounded-full"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
