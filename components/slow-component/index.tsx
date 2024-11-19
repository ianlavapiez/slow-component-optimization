"use client";

import React, { memo } from "react";
import { block } from "@/lib";

const SlowComponent: React.FC = () => {
  block(200);

  return (
    <div className="px-4 py-2 font-bold text-center bg-orange-400 border border-orange-700 animate-pulse">
      🐌 I am very slowwwwwwww! 🐢
    </div>
  );
};

export default memo(SlowComponent);
