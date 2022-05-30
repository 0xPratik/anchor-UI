import Link from "next/link";
import React, { useState } from "react";
import AddressButton from "./common/AddressButton";
import AddressSelect from "./common/AddressSelect";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

type Props = {};

const Navbar = (props: Props) => {
  const networks = [
    { name: "devnet", rpc: "https://metaplex.devnet.rpcpool.com/" },
    { name: "mainnet", rpc: "https://api.mainnet-beta.solana.com" },
    { name: "localnet", rpc: "http://localhost:8899" },
  ];
  const [selected, setSelected] = useState(networks[0]);
  return (
    <nav className="px-4 py-3  bg-black border-b border-[#2B2B2B]">
      <div className="flex flex-row  justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <div className="flex flex-row space-x-1 mr-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22V8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 12H2C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="my-auto"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 2.5V9.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 6H9.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12L6.49998 20.5C5.66998 21.33 4.32998 21.33 3.49998 20.5C3.30284 20.3031 3.14645 20.0693 3.03974 19.8119C2.93304 19.5545 2.87811 19.2786 2.87811 19C2.87811 18.7214 2.93304 18.4455 3.03974 18.1881C3.14645 17.9307 3.30284 17.6969 3.49998 17.5L12 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.64 15L22 10.64"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.91 11.7L19.66 10.45C19.06 9.84996 18.73 9.04996 18.73 8.19996V7.33996L16.01 4.59996C15.4936 4.08058 14.8798 3.66832 14.2036 3.38688C13.5275 3.10544 12.8024 2.96036 12.07 2.95996H9L9.92 3.77996C10.5735 4.35935 11.0967 5.07066 11.4552 5.867C11.8137 6.66335 11.9994 7.52663 12 8.39996V9.95996L14 11.96H16.47L18.73 13.87"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_23_97" fill="white">
                    <path d="M21.6642 20.8359L19.5 18.6892C20.3401 17.6418 20.7469 16.3123 20.6368 14.9742C20.5267 13.636 19.9081 12.3909 18.9082 11.4948C17.9083 10.5987 16.6031 10.1198 15.2609 10.1565C13.9187 10.1932 12.6416 10.7428 11.6922 11.6922C10.7427 12.6417 10.1932 13.9188 10.1564 15.2609C10.1197 16.6031 10.5986 17.9084 11.4947 18.9083C12.3908 19.9082 13.6359 20.5268 14.9741 20.6369C16.3123 20.7469 17.6417 20.3401 18.6892 19.5001L20.8358 21.6467C20.8901 21.7014 20.9546 21.7448 21.0257 21.7744C21.0968 21.804 21.173 21.8193 21.25 21.8193C21.327 21.8193 21.4033 21.804 21.4743 21.7744C21.5454 21.7448 21.6099 21.7014 21.6642 21.6467C21.7693 21.538 21.8281 21.3926 21.8281 21.2413C21.8281 21.09 21.7693 20.9447 21.6642 20.8359ZM15.4167 19.5001C14.6091 19.5001 13.8196 19.2606 13.1481 18.8119C12.4766 18.3632 11.9532 17.7255 11.6442 16.9794C11.3351 16.2332 11.2542 15.4122 11.4118 14.6201C11.5694 13.828 11.9583 13.1004 12.5293 12.5294C13.1004 11.9583 13.828 11.5694 14.6201 11.4119C15.4121 11.2543 16.2332 11.3352 16.9793 11.6442C17.7254 11.9533 18.3632 12.4767 18.8118 13.1482C19.2605 13.8197 19.5 14.6091 19.5 15.4167C19.5 16.4997 19.0698 17.5383 18.304 18.3041C17.5383 19.0699 16.4996 19.5001 15.4167 19.5001Z" />
                  </mask>
                  <path
                    d="M19.5 18.6892L18.5444 17.9228L17.8547 18.7827L18.6373 19.5589L19.5 18.6892ZM18.6892 19.5001L19.5554 18.6339L18.7791 17.8576L17.9227 18.5444L18.6892 19.5001ZM20.8358 21.6467L21.7056 20.7841L21.702 20.7805L20.8358 21.6467ZM21.6642 21.6467L22.5339 22.5094L22.5395 22.5038L22.545 22.4981L21.6642 21.6467ZM22.5269 19.9662L20.3627 17.8195L18.6373 19.5589L20.8015 21.7056L22.5269 19.9662ZM20.4556 19.4557C21.4917 18.1638 21.9934 16.5241 21.8577 14.8737L19.4159 15.0746C19.5003 16.1005 19.1884 17.1198 18.5444 17.9228L20.4556 19.4557ZM21.8577 14.8737C21.7219 13.2233 20.959 11.6877 19.7258 10.5825L18.0907 12.4071C18.8573 13.094 19.3315 14.0487 19.4159 15.0746L21.8577 14.8737ZM19.7258 10.5825C18.4925 9.47733 16.8827 8.88667 15.2274 8.93197L15.2944 11.381C16.3234 11.3529 17.3241 11.7201 18.0907 12.4071L19.7258 10.5825ZM15.2274 8.93197C13.572 8.97726 11.9969 9.65507 10.826 10.826L12.5584 12.5584C13.2863 11.8305 14.2654 11.4092 15.2944 11.381L15.2274 8.93197ZM10.826 10.826C9.65501 11.997 8.9772 13.5721 8.9319 15.2274L11.381 15.2944C11.4091 14.2654 11.8305 13.2863 12.5584 12.5584L10.826 10.826ZM8.9319 15.2274C8.88661 16.8828 9.47727 18.4926 10.5824 19.7258L12.407 18.0907C11.72 17.3241 11.3528 16.3235 11.381 15.2944L8.9319 15.2274ZM10.5824 19.7258C11.6876 20.9591 13.2233 21.722 14.8737 21.8577L15.0745 19.416C14.0486 19.3316 13.094 18.8574 12.407 18.0907L10.5824 19.7258ZM14.8737 21.8577C16.5241 21.9935 18.1638 21.4918 19.4556 20.4557L17.9227 18.5444C17.1197 19.1885 16.1004 19.5004 15.0745 19.416L14.8737 21.8577ZM17.823 20.3663L19.9696 22.5129L21.702 20.7805L19.5554 18.6339L17.823 20.3663ZM19.9661 22.5094C20.1342 22.6789 20.3342 22.8134 20.5546 22.9052L21.4968 20.6436C21.575 20.6762 21.6459 20.7239 21.7056 20.7841L19.9661 22.5094ZM20.5546 22.9052C20.7749 22.997 21.0113 23.0443 21.25 23.0443V20.5943C21.3347 20.5943 21.4186 20.6111 21.4968 20.6436L20.5546 22.9052ZM21.25 23.0443C21.4887 23.0443 21.7251 22.997 21.9454 22.9052L21.0032 20.6436C21.0814 20.6111 21.1653 20.5943 21.25 20.5943V23.0443ZM21.9454 22.9052C22.1658 22.8134 22.3658 22.6789 22.5339 22.5094L20.7944 20.7841C20.8541 20.7239 20.925 20.6762 21.0032 20.6436L21.9454 22.9052ZM22.545 22.4981C22.8709 22.1609 23.0531 21.7103 23.0531 21.2413H20.6031C20.6031 21.0749 20.6677 20.915 20.7834 20.7954L22.545 22.4981ZM23.0531 21.2413C23.0531 20.7723 22.8709 20.3217 22.545 19.9845L20.7834 21.6873C20.6677 21.5676 20.6031 21.4077 20.6031 21.2413H23.0531ZM15.4167 18.2751C14.8513 18.2751 14.2987 18.1074 13.8287 17.7934L12.4675 19.8305C13.3405 20.4137 14.3668 20.7251 15.4167 20.7251V18.2751ZM13.8287 17.7934C13.3586 17.4793 12.9923 17.0329 12.7759 16.5106L10.5124 17.4481C10.9142 18.4181 11.5946 19.2472 12.4675 19.8305L13.8287 17.7934ZM12.7759 16.5106C12.5596 15.9883 12.503 15.4136 12.6133 14.8591L10.2103 14.3811C10.0055 15.4108 10.1106 16.4782 10.5124 17.4481L12.7759 16.5106ZM12.6133 14.8591C12.7236 14.3046 12.9958 13.7953 13.3955 13.3956L11.6631 11.6632C10.9207 12.4056 10.4152 13.3514 10.2103 14.3811L12.6133 14.8591ZM13.3955 13.3956C13.7953 12.9958 14.3046 12.7236 14.859 12.6133L14.3811 10.2104C13.3514 10.4152 12.4055 10.9208 11.6631 11.6632L13.3955 13.3956ZM14.859 12.6133C15.4135 12.503 15.9882 12.5596 16.5105 12.776L17.4481 10.5125C16.4781 10.1107 15.4108 10.0056 14.3811 10.2104L14.859 12.6133ZM16.5105 12.776C17.0328 12.9923 17.4792 13.3587 17.7933 13.8287L19.8304 12.4676C19.2471 11.5946 18.4181 10.9142 17.4481 10.5125L16.5105 12.776ZM17.7933 13.8287C18.1074 14.2988 18.275 14.8514 18.275 15.4167H20.725C20.725 14.3668 20.4137 13.3405 19.8304 12.4676L17.7933 13.8287ZM18.275 15.4167C18.275 16.1748 17.9739 16.9018 17.4378 17.4379L19.1702 19.1703C20.1657 18.1748 20.725 16.8246 20.725 15.4167H18.275ZM17.4378 17.4379C16.9018 17.9739 16.1747 18.2751 15.4167 18.2751V20.7251C16.8245 20.7251 18.1747 20.1658 19.1702 19.1703L17.4378 17.4379Z"
                    fill="white"
                    mask="url(#path-1-inside-1_23_97)"
                  />
                </svg>
              </button>
            </li>
            <li className="flex justify-center items-center">
              <button>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5833 10.1667L10.75 17.1667H16L15.4167 21.8334L21.25 14.8334H16L16.5833 10.1667Z"
                    stroke="white"
                    strokeWidth="1.225"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li>
              <AddressSelect
                networks={networks}
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