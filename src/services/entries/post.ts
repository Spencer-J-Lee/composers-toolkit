import { EntryStatus } from "@/models/Entry/types";

import { API_PATHS } from "../constants/apiPaths";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";

type apiCreateEntryProps = {
  title: string;
  description: string;
  status: EntryStatus;
};

export const apiCreateEntry = async ({
  title,
  description,
  status,
}: apiCreateEntryProps) => {
  return await fetchWithErrorHandling(API_PATHS.ENTRIES.ROOT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      status,
    }),
  });
};
