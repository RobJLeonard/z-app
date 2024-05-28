// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/storybook"],
  typescript: {
    typeCheck: true,
    strict: true,
  }
})
