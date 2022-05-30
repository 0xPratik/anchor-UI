import React from "react";
import Image from "next/image";
type Props = {};

const Downbar = (props: Props) => {
  return (
    <div className="sticky bottom-0 flex flex-row ">
      <div className="w-28 bg-[#7AA0FF] text-center flex flex-row p-2 pl-3.5 items-center">
        <span className="my-auto">
          <Image
            src="/icons/testnet.svg"
            alt="testnet"
            width={14}
            height={14}
          />
        </span>
        <span className="block truncate font-inter font-medium px-1 my-auto leading-3 text-xs uppercase tracking-wider">
          TestNet
        </span>
      </div>
      <div className="grow bg-[#232323] ">
        <p className="text-white px-4 py font-medium text-xs tracking-[.02em] inline-block align-middle">
          No current transactions
        </p>
      </div>
      <div className="flex flex-row bg-[#232323]">
        <span className="my-auto mr-2">
          <Image
            src="/icons/u_tennis-ball.svg"
            width={15}
            height={15}
            alt="ball"
          />
        </span>
        <span className="block truncate font-inter font-medium px-1 my-auto leading-3 text-xs uppercase tracking-wider text-white">
          Total 3,446 transactions
        </span>
      </div>
    </div>
  );
};

export default Downbar;
