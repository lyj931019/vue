<style lang="scss" scoped>
  @mixin make-container() {
    width: 100%;
    padding-right: ($grid-gutter-width / 2);
    padding-left: ($grid-gutter-width / 2);
    margin-right: auto;
    margin-left: auto;
  }
  @mixin make-container-max-widths($max-widths: $container-max-widths, $breakpoints: $grid-breakpoints) {
    @each $breakpoint, $container-max-width in $max-widths {
      @include media-breakpoint-up($breakpoint, $breakpoints) {
        max-width: $container-max-width;
      }
    }
  }

  // Container widths
  //
  // Set the container width, and override it for fixed navbars in media queries.

  @if $enable-grid-classes {
    .container {
      @include make-container();
      @include make-container-max-widths();
    }
  }
</style>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls= 'col';
  export default {
    name:'myContainer',
  }
</script>
