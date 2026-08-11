"use client";
import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

function useMsClarity() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
    ) {
      Clarity.init(process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID);
    }
  }, []);
}

export default function ClarityComponent() {
  useMsClarity();
  return null;
}
