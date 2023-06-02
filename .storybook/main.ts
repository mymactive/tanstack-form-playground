import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { loadConfigFromFile, mergeConfig } from "vite";

const configEnv = {
  mode: "production",
  command: "build",
  ssrBuild: false,
} as const;

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    const original = await loadConfigFromFile(
      configEnv,
      path.resolve(__dirname, "../vite.config.ts")
    );

    return mergeConfig(config, {
      ...original?.config,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
};
export default config;
