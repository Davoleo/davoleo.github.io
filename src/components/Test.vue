<template>
    <div>{{ message }}</div>
</template>

<script setup lang="ts">
    defineProps({
        message: {
            type: String,
            required: true,
        },
    });
</script>

<style scoped>
    div {
        padding: 8px;
        border: 1px solid #aaa;
        border-radius: 4px;
        background-color: #eee;
    }
</style>