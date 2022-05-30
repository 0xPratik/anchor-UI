import React, { Fragment, Dispatch, useState, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Image from "next/image";

type Props = {
  networks: Array<{
    name: string;
    endpoint: string;
  }>;
  selected: {
    name: string;
    endpoint: string;
  };
  setSelected: Dispatch<
    SetStateAction<{
      name: string;
      endpoint: string;
    }>
  >;
};

const AddressSelect = ({ networks, selected, setSelected }: Props) => {
  console.log("SELECT ADDRESS", networks);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1 w-56 ">
        <Listbox.Button className="bg-[#232323] relative w-full rounded-sm cursor-default  text-white py-2 pl-3 pr-10 text-left flex flex-row items-center space-x-2 ">
          <span className="">
            <Image
              src="/icons/selectnetwork.svg"
              alt="selectnetwork"
              width={24}
              height={22}
            />
          </span>
          <span className="block truncate font-inter font-medium px-1 my-auto leading-[0.875rem]">
            {selected.name ? selected.name : "Select Network"}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <Image
              src="/icons/dropdown.svg"
              alt="dropdown"
              width={24}
              height={24}
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#232323] py-1 text-base  ring-1 ring-black ring-opacity-5 sm:text-sm">
            {networks.map((network, networkIdx) => (
              <Listbox.Option
                key={networkIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-white text-black" : "text-white"
                  }`
                }
                value={network}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate font-inter font-medium hover:text-black`}
                    >
                      {network.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default AddressSelect;
