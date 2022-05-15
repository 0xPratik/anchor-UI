import classnames from "classnames";
import React from "react";
import Image from "next/image";
type Props = {
  size?: string;
  textColor?: string;
  children?: React.ReactNode;
};

const AddressButton = ({ size, textColor = "white", children }: Props) => {
  return (
    <button
      className={classnames(
        `bg-[#4773E3]  font-medium text-xs  py-3 px-3 rounded-sm space-x-3 flex justify-center items-center h-fit`,
        {
          "text-xs": size === "sm",
          "text-xl": size === "lg",
        }
      )}
    >
      <Image alt="addressIcon" src="/icons/addressIcon.svg" height={18} width={18} />
      {/* addressIcon */}
      <span className={classnames(`font-inter text-${textColor}`)}>
        {children}
      </span>
    </button>
  );
};

export default AddressButton;
