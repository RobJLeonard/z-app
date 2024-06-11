import type { StorybookConfig } from "@storybook-vue/nuxt"

const config: StorybookConfig = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-mdx-gfm",
        "@chromatic-com/storybook"
    ],
	framework: {
		name: "@storybook-vue/nuxt",
		options: {},
	},
	docs: {},
}
export default config
