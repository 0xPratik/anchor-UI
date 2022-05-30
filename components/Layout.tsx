import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import classnames from "classnames";
import Downbar from "./common/Downbar";
import Onchain from "./Onchain";
import FunctionStack from "./FunctionStack";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const active = "border-l-[0.22rem] bg-[#2C2C2C] border-[#4A83EE]";
  console.log(router.pathname);
  return (
    <div className="bg-black">
      <Navbar />
      <div className="flex divide-x divide-[#2B2B2B]">
        {/* left  side bar */}
        <div className="w-[4.5rem] h-screen  flex flex-col">
          {/* IDL LINK */}
          <Link href="/">
            <a
              className={classnames(
                `w-full  h-[4.5rem]  text-white text-center flex mb-3 ${
                  router.pathname == "/" ? active : ""
                }`
              )}
            >
              <div className="m-auto">
                <Image src="/icons/idl.svg" alt="idl" height={25} width={25} />

                <p className="font-inter font-medium leading-3 text-[0.623rem] p-1">
                  IDL
                </p>
              </div>
            </a>
          </Link>
          {/* Test LINK */}
          <Link href="/test">
            <a
              className={classnames(
                `w-full  h-[4.5rem]  text-white text-center flex mb-3 ${
                  router.pathname == "/test" ? active : ""
                }`
              )}
            >
              <div className="m-auto">
                <Image
                  src="/icons/test.svg"
                  alt="test"
                  height={25}
                  width={25}
                />

                <p className="font-inter font-medium leading-3 text-[0.623rem] p-1">
                  Test
                </p>
              </div>
            </a>
          </Link>
          {/* DOCS LINK */}
          <Link href="/docs">
            <a
              className={classnames(
                `w-full  h-[4.5rem]  text-white text-center flex mb-3 ${
                  router.pathname == "/docs" ? active : ""
                }`
              )}
            >
              <div className="m-auto">
                <Image
                  src="/icons/docs.svg"
                  alt="docs"
                  height={25}
                  width={25}
                />
                <p className="font-inter font-medium leading-3 text-[0.623rem] p-1">
                  Docs
                </p>
              </div>
            </a>
          </Link>
        </div>
        {/* main middle bar fixes */}
        <div className="grow h-screen pb-2 bg-black   overflow-y-auto overflow-x-auto">
          {children}
        </div>
        {/* right side bar */}
        <div className="w-[26rem] h-screen bg-black flex flex-col  ">
          {/* On Chain Data */}
          <Onchain />
          {/* Function Stack */}
          <FunctionStack />
        </div>
      </div>
      <Downbar />
    </div>
  );
};

export default Layout;
