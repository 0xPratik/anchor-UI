import type { NextPage } from "next";
import { useState } from "react";
import AddressSelect from "../components/common/AddressSelect";


const WalletConnect: NextPage = () => {
  const networks = [
    { name: "Testnet" },
    { name: "mainnet" },
    { name: "rinkyby" },
    { name: "ropston" },
    { name: "polygon" },
    { name: "solana" },
  ];
  const [selected, setSelected] = useState(networks[0]);
  return (
    <div className="flex flex-row items-center justify-center h-3/5">
      <div className="bg-[#1A1A1A] w-64 h-36 p-4">
        <div className="flex flex-col space-y-1.5">
          <div className="flex mb-2">
            <svg
              className="my-auto"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 7H18V6C18 5.20435 17.6839 4.44129 17.1213 3.87868C16.5587 3.31607 15.7956 3 15 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V10C22 9.20435 21.6839 8.44129 21.1213 7.87868C20.5587 7.31607 19.7956 7 19 7ZM5 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5ZM20 15H19C18.7348 15 18.4804 14.8946 18.2929 14.7071C18.1054 14.5196 18 14.2652 18 14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13H20V15ZM20 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14C16 14.7956 16.3161 15.5587 16.8787 16.1213C17.4413 16.6839 18.2044 17 19 17H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V8.83C4.32127 8.94302 4.65943 9.00051 5 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V11Z"
                fill="white"
              />
            </svg>

            <p className="text-white font-inter font-medium text-sm px-1">
              Connect Wallet
            </p>
          </div>
      
          <button
            className={`bg-[#4773E3]  font-medium text-xs mt-1 py-2 px-1 rounded-sm space-x-3 flex justify-center items-center h-fit`}
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3719 6.90348H14.5009C14.5009 3.0907 11.3993 0 7.57291 0C3.79395 0 0.72159 3.01504 0.646395 6.76251C0.568602 10.6362 4.21577 14 8.10374 14H8.59281C12.0205 14 16.6147 11.3262 17.3325 8.06846C17.4651 7.46796 16.989 6.90348 16.3719 6.90348ZM4.79265 7.07334C4.79265 7.5832 4.37414 8.00022 3.86245 8.00022C3.35076 8.00022 2.93228 7.58301 2.93228 7.07334V5.57387C2.93228 5.06401 3.35076 4.64699 3.86245 4.64699C4.37414 4.64699 4.79265 5.06401 4.79265 5.57387V7.07334ZM8.02259 7.07334C8.02259 7.5832 7.60413 8.00022 7.09246 8.00022C6.58073 8.00022 6.16227 7.58301 6.16227 7.07334V5.57387C6.16227 5.06401 6.58092 4.64699 7.09246 4.64699C7.60413 4.64699 8.02259 5.06401 8.02259 5.57387V7.07334Z"
                fill="white"
              />
            </svg>

            <span className="font-inter text-white">Connect wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
