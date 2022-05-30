import Image from "next/image";
import React from "react";

type Props = {};

const SeedCard = (props: Props) => {
  return (
    <div
      className={`m-2 shadow-md p-3 bg-[#1A1A1A] w-64 flex flex-col justify-start align-middle space-y-2 font-inter`}
    >
      <div>
        <div className={`flex flex-col space-y-1 `}>
          <label className="uppercase font-inter font-medium text-[10px]">
            enter seed1
          </label>
          <div className="relative bg-[#232323]">
            <input
              className="bg-[#232323] text-white font-medium text-sm p-1.5 focus:outline-none"
              type="text"
            />
            <span className="absolute inset-y-0 right-0 flex items-center p-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <Image
                  src="/icons/refersh2.svg"
                  alt="refresh"
                  width={14}
                  height={14}
                />
              </button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className={`flex flex-col space-y-1 `}>
          <label className="uppercase font-inter font-medium text-[10px]">
            enter seed1
          </label>
          <div className="relative bg-[#232323]">
            <input
              className="bg-[#232323] text-white font-medium text-sm p-1.5 focus:outline-none"
              type="text"
            />
            <span className="absolute inset-y-0 right-0 flex items-center p-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <Image
                  src="/icons/refersh2.svg"
                  alt="refresh"
                  width={14}
                  height={14}
                />
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button className="px-2.5 py-3 bg-[#252525] flex flex-row">
          <Image src="/icons/add.svg" alt="add" width={14} height={14} />

          <p className="text-white text-xs uppercase font-medium leading-4 font-inter">
            Add Seed
          </p>
        </button>
        <div className="grow"></div>
        <button className="px-2.5 py-3 bg-[#4773E3] flex flex-row">
          <Image
            src="/icons/doublearrow.svg"
            alt="doublearrow"
            width={14}
            height={14}
          />

          <p className="text-white text-xs uppercase font-medium leading-4 font-inter">
            Generate
          </p>
        </button>
      </div>
    </div>
  );
};

export default SeedCard;
