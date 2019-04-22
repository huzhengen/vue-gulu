<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
    <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon.vue";
export default {
  components: {
    "g-icon": Icon
  },
  //        props: ['icon', 'iconPosition'],
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        //                    return !(value !== 'left' && value !== 'right');
        return value === "left" || value === "right";
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
  }
  .loading {
    animation: 2s spin infinite linear;
  }
}
</style>