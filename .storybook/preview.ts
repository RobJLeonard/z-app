import type { Preview } from "@storybook-vue/nuxt"
import "../assets/css/tailwind.css"

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
