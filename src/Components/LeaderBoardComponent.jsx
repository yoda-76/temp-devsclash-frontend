import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useStateValue } from "../context/stateProvider";
const LeaderBoardComponent = () => {
  const [{ fake }, dispatch] = useStateValue();
  return (
    <div className="bg-primary_gray_light font-poppins h-[100vh] w-[20rem] pt-[5rem] py-5 px-2 gap-4 flex text-[1rem] tracking-wide flex-col">
      <p className="text-primary_green text-[2rem]">Leader Board</p>
      <div className="flex gap-2 items-center">
        <p>Test Case 1</p>
        <RxCrossCircled className="text-white" />
      </div>
      <div className="flex gap-2 items-center">
        <p>Test Case 2</p>
        <RxCrossCircled className="text-white" />
      </div>
      <div className="flex gap-2 items-center">
        <p>Test Case 3</p>
        <RxCrossCircled className="text-white" />
      </div>
    </div>
  );
};

export default LeaderBoardComponent;
