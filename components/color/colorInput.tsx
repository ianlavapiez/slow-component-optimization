"use client";

import React, { ComponentPropsWithoutRef } from "react";

type ColorInputProps = ComponentPropsWithoutRef<"input"> & {
  disabled: boolean;
  onSubmit: () => void;
};

const ColorInput: React.FC<ColorInputProps> = ({
  disabled,
  onSubmit,
  ...props
}) => {
  return (
    <form
      className="flex items-end"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) onSubmit();
      }}
    >
      <label htmlFor="color-input">
        Guess the color
        <input
          id="color-input"
          disabled={disabled}
          maxLength={6}
          pattern="[a-f|A-F|0-9]{6}"
          placeholder="C0FF33"
          type="text"
          {...props}
        />
      </label>
      <button className="whitespace-nowrap" type="submit" disabled={disabled}>
        Take a Guess
      </button>
    </form>
  );
};

export default ColorInput;
