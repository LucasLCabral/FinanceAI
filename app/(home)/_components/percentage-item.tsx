import { ReactNode } from "react";

interface PercentageItemProps {
  value: number;
  title: string;
  icon: ReactNode;
}

const PercentageItem = ({ value, title, icon }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-white bg-opacity-[0.05] p-2">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold">{value}%</p>
    </div>
  );
};

export default PercentageItem;
