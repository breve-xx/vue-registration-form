<template>
    <transition name="fade">
        <img alt="Step complete" src="../assets/logo.png">
    </transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
    name: "StepComplete"
}
</script>
