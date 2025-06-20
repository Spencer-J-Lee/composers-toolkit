import { Notebook } from "@/models/Notebook";

import { API_PATHS } from "../constants/apiPaths";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";

type apiCreateNotebookProps = Pick<Notebook, "name" | "status">;

// TODO: setup redux
export const apiCreateNotebook = async (
  props: apiCreateNotebookProps,
): Promise<Notebook> => {
  return await fetchWithErrorHandling<Notebook>(API_PATHS.NOTEBOOKS.ROOT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
};
