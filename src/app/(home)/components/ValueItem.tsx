import React from "react";

interface ValueItemProps {
  title: string;
  description: string;
}

const ValueItem = ({ title, description }: ValueItemProps) => {
  return (
    <div className="max-w-[450px]">
      <div className="w-full h-[0.5px] bg-gray-200 mb-5"></div>
      <p className="font-bold text-xl mb-2">{title}</p>
      {description}
    </div>
  );
};

export default ValueItem;
