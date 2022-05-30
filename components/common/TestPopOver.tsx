import React from "react";
import { Popover } from "@headlessui/react";
import SeedCard from "./SeedCard";
import Image from "next/image";
type Props = {};

const TestPopOver = (props: Props) => {
  return (
    <Popover className="absolute inset-y-0 right-0 flex items-center p-2">
      <Popover.Button className="absolute inset-y-0 right-0 flex items-center p-2">
        <span className="">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <Image src="/icons/pin.svg" alt="pin" width={14} height={14} />
          </button>
        </span>
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <SeedCard />
      </Popover.Panel>
    </Popover>
  );
};

export default TestPopOver;
