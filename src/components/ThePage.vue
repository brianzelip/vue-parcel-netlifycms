<template>
  <component :is="page"></component>
</template>

<script>
import Home from "../layouts/Home.vue";
import About from "../layouts/About.vue";
import Contact from "../layouts/Contact.vue";

export default {
  props: ["page"],
  components: {
    Home,
    About,
    Contact
  }
};
</script>
