import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
};

export const Button = ({ children, size = "medium" }: Props) => {
  const sizeClassnames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-base px-8 py-4",
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
