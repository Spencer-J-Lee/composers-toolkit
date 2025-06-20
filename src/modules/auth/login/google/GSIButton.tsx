"use client";

import { GSISetup } from "./GSISetup";

type GSIButtonProps = {
  variant?: "white" | "blue" | "black";
};

const dataTheme = {
  white: "outline",
  blue: "filled_blue",
  black: "filled_black",
};

// TODO: Fix issue where button doesn't render if coming from another page
// TODO: Redirect user to authed page on successful login
export const GSIButton = ({ variant = "white" }: GSIButtonProps) => {
  return (
    <>
      <GSISetup />
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme={dataTheme[variant]}
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      />
    </>
  );
};
