"use client";

import React, { useEffect, useState } from "react";

type ColorPreviewProps = {
  color: string;
};

const ColorPreview: React.FC<ColorPreviewProps> = ({ color }) => {
  const [resolvedColor, setResolvedColor] = useState<string>("");

  useEffect(() => {
    // Synchronize the color on the client side to prevent hydration mismatch
    setResolvedColor(`#${color}`);
  }, [color]);

  return (
    <div className="h-96 w-96" style={{ backgroundColor: resolvedColor }} />
  );
};

export default ColorPreview;
