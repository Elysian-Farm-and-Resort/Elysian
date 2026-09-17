// The Sanity package is provided by the project's dependency installation.
// @ts-expect-error Sanity may be unavailable to TypeScript until dependencies are installed.
import { defineConfig } from "sanity";
// @ts-expect-error Sanity may be unavailable to TypeScript until dependencies are installed.
import { structureTool } from "sanity/structure";
// @ts-expect-error Sanity Vision may be unavailable to TypeScript until dependencies are installed.
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "elysian-farm-resorts",
  title: "Elysian Farms & Resort",

  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
    // Vision lets you run raw GROQ queries from inside the Studio —
    // handy for debugging, safe to leave in for non-production use.
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schemaTypes,
  },
});
