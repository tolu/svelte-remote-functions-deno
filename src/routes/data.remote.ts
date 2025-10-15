import { query } from "$app/server";

export const myExperimentalRemoteFunction = query(async () => {
  await (new Promise((resolve) => setTimeout(resolve, 500)));
  return { message: "Hello from the remote function!" };
});