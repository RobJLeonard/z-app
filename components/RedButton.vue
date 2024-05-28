<template>
	<div class="red-button" @click="handleClick">
		{{ buttonText }}
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ buttonText: string }>()

const handleClick = () => {
	alert("Button clicked!")
}
</script>

<style scoped>
.red-button {
	background-color: red;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}
</style>
