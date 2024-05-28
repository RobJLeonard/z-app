import type { Meta, StoryObj } from "@storybook/vue3"

import RedButton from "../components/RedButton.vue"
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
	title: "Example/RedButton",
	component: RedButton,

	// This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
	tags: ["autodocs"],
} satisfies Meta<typeof RedButton>

export default meta
type Story = StoryObj<typeof meta>

export const redButtonStory: Story = {
	args: {
		buttonText: "Hello World",
	},
	argTypes: {
		buttonText: {
			control: {
				type: "text",
			},
			description: "The text to display on the button",
		},
	},
}
