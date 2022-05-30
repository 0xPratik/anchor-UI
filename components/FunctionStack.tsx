import Image from "next/image";
import React from "react";

type Props = {};
const FunctionStackCard = ({}: Props) => {
  return (
    <div className="bg-[#1A1A1A] h-16 m-2 p-3">
      <div className="flex flex-row">
        <div className=" flex flex-row">
          <Image
            src="/icons/initialize.svg"
            height={14}
            width={14}
            alt="intialize"
          />
          <p className="text-white text-xs  font-semibold leading-4 font-inter pl-2">
            Initialize
          </p>
        </div>
        <div className="grow"></div>
        <button>
          <Image src="/icons/cross.svg" height={14} width={14} alt="cross" />
        </button>
      </div>

      <p className="font-normal text-[10px]  p-2 text-[#6C6C6C]">
        <span>user: </span>KgK7lFz5i2dqHhxgLu6nkLr9c
      </p>
    </div>
  );
};
const FunctionStack = (props: Props) => {
  return (
    <div className="text-white basis-1/2">
      <div className="flex flex-row">
        <div className="px-4 py-3 bg-[#94ABFF] flex flex-row">
          <Image
            src="/icons/functionstack.svg"
            height={14}
            width={14}
            alt="functionstack"
          />

          <p className="text-black text-xs uppercase font-medium leading-4 font-inter">
            function stack
          </p>
        </div>
        <div className="grow"></div>
        <div className="">
          <button className="flex flex-row py-3 px-1">
            {" "}
            <Image src="/icons/clear.svg" height={14} width={14} alt="clear" />
            <p className="px-3 text-xs font-medium leading-4 font-inter">
              Clear
            </p>
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-96">
        {[0, 1, 2].map((item, index) => (
          <FunctionStackCard key={index} />
        ))}

        <p className="p-2 py-3 font-inter font-medium text-[#636363] text-xs leading-4">
          3 instructions stacked
        </p>
      </div>
      <div className="mx-2 my-2">
        <button className="w-full h-8  font-inter font-medium  text-xs px-1 bg-[#4773E3] flex justify-center items-center space-x-1">
          <Image src="/icons/tick.svg" height={14} width={14} alt="tick" />
          Submit 3 transactions
        </button>
      </div>
    </div>
  );
};

export default FunctionStack;
