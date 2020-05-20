<template>
  <div class="hello">
    <h1>{{ msg }}, {{ name }}</h1>
    <h1>{{ language }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    name: String,
    language: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/global-styles/colors.scss';
@import '@/global-styles/typography.scss';
</style>
