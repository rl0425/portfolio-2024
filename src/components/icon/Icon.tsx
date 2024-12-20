import React from "react";
import { SVGIcons } from "./svgs";

type IconName = keyof typeof SVGIcons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {SVGIcons[name]}
    </svg>
  );
};
