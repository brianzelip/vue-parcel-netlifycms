<template>
  <ul>
    <li v-if="show('home')">
      <router-link to="/">Home</router-link>
    </li>
    <li v-if="show('about')">
      <router-link to="/about">About</router-link>
    </li>
    <li v-if="show('contact')">
      <router-link to="/contact">Contact</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    show(page) {
      return this.$route.name === page ? false : true;
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  display: inline-block;
  padding: 0.5rem 1rem;
}
</style>
