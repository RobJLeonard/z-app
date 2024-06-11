import type { Meta, StoryObj } from "@storybook/vue3"

import MenuBar from "../components/MenuBar.vue"
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
	title: "Example/MenuBar",
	component: MenuBar,

	// This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
	tags: ["autodocs"],
} satisfies Meta<typeof MenuBar>

export default meta
type Story = StoryObj<typeof meta>

export const menuBar: Story = {
	args: {},
}
