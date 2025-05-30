import { ELEMENT_IDS } from "@/constants/elementIds";

import { VerifyEmailForm } from "./VerifyEmailForm";

export const VerifyEmailContent = () => {
  return (
    <main id={ELEMENT_IDS.MAIN_CONTENT} className="flex flex-col items-center">
      <div className="w-full max-w-md">
        <p>{"Didn't"} receive an email?</p>
        <VerifyEmailForm />
      </div>
    </main>
  );
};
