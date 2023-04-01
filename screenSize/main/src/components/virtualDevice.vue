<script setup lang='ts'>
</script>

<template>
    <div class="virtual">
        <iframe src="https://www.typescriptlang.org/" frameborder="0"></iframe>
    </div>
</template>

<style lang="scss">
.virtual{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 0;
    height: 100vh;
    width: 30rem;
    // border-left: 2px solid #cdcee1;

    iframe {
        width: 80%;
        height: 80%;
    }
}
</style>