import React from 'react'
import Image from 'next/image'
type Props = {}

const Downbar = (props: Props) => {
  return (
    <div className="sticky bottom-0 flex flex-row ">
      <div className="w-28 bg-[#7AA0FF] text-center flex flex-row p-2 pl-3.5">
        <span className="my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 "
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
          <Image src="/icons/u_tennis-ball.svg" width={15} height={15} />
        </span>
        <span className="block truncate font-inter font-medium px-1 my-auto leading-3 text-xs uppercase tracking-wider text-white">
          Total 3,446 transactions
        </span>
      </div>
    </div>
  );
}

export default Downbar;