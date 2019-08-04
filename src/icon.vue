<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "LfIcon",
  props: ["name"]
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>