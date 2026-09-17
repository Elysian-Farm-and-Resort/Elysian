const defineCliConfig = <T>(config: T): T => config;

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "d3baxh6w",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
  deployment: {
    appId: process.env.NEXT_PUBLIC_SANITY_DEPLOYMENT_APP_ID,
  }
});