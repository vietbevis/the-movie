"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BackForward = () => {
  const router = useRouter();
  const handleBackForward = () => {
    router.back();
  };
  return (
    <Button variant={"ghost"} onClick={handleBackForward}>
      Trang trước
    </Button>
  );
};

export default BackForward;
