<template>
<div>
    <button @click="thief(hello)">数据传递</button>
    <slot name="slot-1"></slot>
</div>
	
</template>

<script>
export default {
	name: "children",
	data() {
		return {
			hello: "这是子组件要传递的数据",
		};
	},
    props: ['thief'],
    
};
</script>

<style scoped></style>>
