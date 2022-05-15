import dynamic from "next/dynamic";
import React from "react";
import { useAuth } from "../context/IdlContext";
type Props = {};
const DynamicTestConnect = dynamic(
  () => import("../components/common/TestConnect"),
  { ssr: false }
);
const Test = (props: Props) => {
  const { idl, update } = useAuth();
  console.log(idl);
  return (
    <div className="text-white">
      <DynamicTestConnect />
    </div>
  );
};

export default Test;
