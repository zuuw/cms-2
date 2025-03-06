import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "mkmkyko2",
  dataset: "head",
  apiVersion: "2024-01-01",
  useCdn: false,
});