import Link from "next/link";
import React, { useState } from "react";
import AddressButton from "./common/AddressButton";
import AddressSelect from "./common/AddressSelect";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { NETWORKS } from "../constants/connections";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [selected, setSelected] = useState(NETWORKS[0]);

  console.log("CHEKC", selected);
  return (
    <nav className="px-4 py-3  bg-black border-b border-[#2B2B2B]">
      <div className="flex flex-row  justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <div className="flex flex-row  gap-x-1 mr-2">
              <Image
                src="/icons/anchor.svg"
                alt="anchor"
                height={25}
                width={25}
              />

              <Image src="/icons/add.svg" alt="add" height={15} width={15} />
              <Image
                src="/icons/hammer.svg"
                alt="hammer"
                height={25}
                width={25}
              />
            </div>
            <span className="self-center  text-sm font-medium leading-4 font-inter whitespace-nowrap text-white">
              ANCHOR
            </span>
            <span className="ml-2 rounded-full text-xs bg-[#252525] px-2 py-1 text-white">
              BETA
            </span>
          </a>
        </Link>
        <div className="grow"></div>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li className="flex justify-center items-center">
              <button>
                <Image
                  src="/icons/search.svg"
                  alt="search"
                  height={32}
                  width={32}
                />
              </button>
            </li>
            <li className="flex justify-center items-center">
              <button>
                <Image
                  src="/icons/flash.svg"
                  alt="flash"
                  height={32}
                  width={32}
                />
              </button>
            </li>
            <li>
              <AddressSelect
                networks={NETWORKS}
                selected={selected}
                setSelected={setSelected}
              />
            </li>
            <li>
              <WalletMultiButton style={{ backgroundColor: "#4773E3" }} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
