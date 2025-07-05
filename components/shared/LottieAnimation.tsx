"use client";

import * as animationData from "./animationData.json";
import { useLottie } from "lottie-react";

export default function LottieAnimation() {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div>
        <div className="w-full">{View}</div>
      </div>
    </>
  );
}
