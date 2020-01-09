<template>
  <div>
    <TheHeader></TheHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import Home from "./layouts/Home.vue";
import About from "./layouts/About.vue";
import Contact from "./layouts/Contact.vue";

export default {
  props: ["page"],
  components: {
    TheHeader,
    Home,
    About,
    Contact
  }
};
</script>
