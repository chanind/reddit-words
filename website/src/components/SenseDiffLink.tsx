import React, { FC } from "react";
import { Link } from "react-router-dom";
import splitWordAndPos from "../util/splitWordAndPos";

export interface SenseDiffLinkProps {
  leftSense: string;
  rightSense: string;
}

const SenseDiffLink: FC<SenseDiffLinkProps> = ({ leftSense, rightSense }) => {
  const dest = `/diff?left=${leftSense}&right=${rightSense}`;
  const leftData = splitWordAndPos(leftSense);
  const rightData = splitWordAndPos(rightSense);
  return (
    <Link
      to={dest}
      className="flex p-3 rounded border border-blue-100 bg-opacity-5 bg-gray-400 hover:bg-opacity-10"
    >
      <div>
        <span className="inline-block pr-1">{leftData.word}</span>
        <span className="text-gray-400 text-xs">{leftData.pos}</span>
      </div>
      <div className="px-2"> &minus; </div>
      <div>
        <span className="inline-block pr-1">{rightData.word}</span>
        <span className="text-gray-400 text-xs">{rightData.pos}</span>
      </div>
    </Link>
  );
};

export default SenseDiffLink;
