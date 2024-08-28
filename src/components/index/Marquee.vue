
<template>
<div id="marquee_wrapper">
  <h2 class="marquee" v-for="n in count">{{text}}</h2>
</div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  }
})
</script>

<style scoped lang="scss">
#marquee_wrapper {
  margin: 0 auto;
  white-space: nowrap;
  overflow-x: hidden;
  position: relative;
  border-top: dotted 4px;
  border-bottom: dotted 4px;
}

.marquee {
  display: inline-block;
  //position: relative;
  padding-left: 25%;
  animation: slide 12s infinite linear;
  font-weight: normal;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  //content: attr(data-length) "em";
}

@keyframes slide
{
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-201%);
  }
}
</style>