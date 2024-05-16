import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
};

export const Button = ({ children, size = "medium" }: Props) => {
  const sizeClassnames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-3 py-1",
    large: "text-lg px-4 py-2",
  };

  return (
    <button
      className={twMerge(
        " text-textBlack bg-white rounded-full",
        sizeClassnames[size]
      )}
    >
      {children}
    </button>
  );
};
