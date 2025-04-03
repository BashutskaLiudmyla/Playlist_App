import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://vite-react-alpha-lemon.vercel.app",
    
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",

    video: true,
    videoCompression: 32,
    videoUploadOnPasses: false,

    defaultCommandTimeout: 8000,

    retries: {
      runMode: 2,
      openMode: 1
    },

    setupNodeEvents(on, config) {
      
    },
  },
});
