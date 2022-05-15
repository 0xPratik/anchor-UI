import React, { Fragment, Dispatch, useState, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Image from "next/image";

type Props = {
  networks: Array<{
    name: string;
  }>;
  selected: {
    name: string;
  };
  setSelected: Dispatch<
    SetStateAction<{
      name: string;
      rpc: string;
    }>
  >;
};

const AddressSelect = ({ networks, selected, setSelected }: Props) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1 w-56 ">
        <Listbox.Button className="bg-[#232323] relative w-full rounded-sm cursor-default  text-white py-2 pl-3 pr-10 text-left flex flex-row  ">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </span>
          <span className="block truncate font-inter font-medium px-1 my-auto leading-[0.875rem]">
            {selected.name}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
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
