import { useMemo } from "react";
import clsx from "clsx";

import { ButtonSize, ButtonVariant } from "@/components/buttons/types";

type UseButtonClassNameProps = {
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
};

export const useButtonClassName = ({
  size,
  variant,
  fullWidth,
  disabled,
}: UseButtonClassNameProps) => {
  const sizeClassName = useMemo(() => {
    switch (size) {
      case "sm":
        return "px-2 py-1 text-xs";
      case "md":
        return "px-4 py-2 text-sm";
    }
  }, [size]);

  const variantClassName = useMemo(() => {
    switch (variant) {
      case "default":
        return "text-text bg-accent";
      case "positive":
        return "text-text bg-positive";
      case "negative":
        return "text-text bg-negative";
    }
  }, [variant]);

  const fullWidthClassName = useMemo(() => {
    return fullWidth ? "w-full" : "";
  }, [fullWidth]);

  const disabledClassName = useMemo(() => {
    return disabled ? "disabled:bg-disabled" : "";
  }, [disabled]);

  return {
    buttonClassName: clsx(
      "font-inter rounded-sm font-medium tracking-widest transition-all font-semibold active:brightness-90 disabled:pointer-events-none",
      sizeClassName,
      variantClassName,
      fullWidthClassName,
      disabledClassName,
    ),
  };
};
