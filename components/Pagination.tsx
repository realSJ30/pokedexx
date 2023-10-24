"use client";

import { MainContext } from "@/provider/MainProvider";
import React, { useContext } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "./Button";

const Pagination = () => {
  const { offSet, setOffset, limit, count } = useContext(MainContext);
  return (
    <div className="flex justify-between items-center text-black pb-8 px-8">
      <Button
        disabled={offSet === 0}
        className="hover:scale-105 transition"
        onClick={() => {
          if (offSet > 0) setOffset(offSet - limit);
        }}
      >
        <FiChevronLeft />
        <p>Previous</p>
      </Button>
      <Button
        disabled={offSet + limit === count}
        className="hover:scale-105 transition"
        onClick={() => {
          console.log(offSet + limit)
          if (offSet + limit < count) setOffset(offSet + limit);
        }}
      >
        <p>Next</p>
        <FiChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
