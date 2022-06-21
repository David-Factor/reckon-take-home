import * as z from "myzod";

export type Remote<T> =
  | { type: "loading" }
  | { type: "loaded"; data: T }
  | { type: "failed"; error: string };

export const fetchRemote = async <T>(
  url: string,
  schema: z.Type<T>
): Promise<Remote<T>> =>
  fetch(url)
    .then<Remote<T>>(async (response) => {
      if (!response.ok) {
        return { type: "failed", error: response.statusText };
      }

      const parsed = schema.parse(await response.json());
      return { type: "loaded", data: parsed };
    })
    .catch((error: unknown) => {
      if (error instanceof z.ValidationError) {
        return { type: "failed", error: error.message };
      }

      return { type: "failed", error: JSON.stringify(error) };
    });
