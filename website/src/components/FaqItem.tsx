import React, { FC, ReactNode } from "react";

interface FaqItemProps {
  title: string;
  children: ReactNode;
}

const FaqItem: FC<FaqItemProps> = ({ title, children }) => (
  <div>
    <div className="text-xl mb-2">{title}</div>
    <p className="text-sm text-gray-400">{children}</p>
  </div>
);

export default FaqItem;
