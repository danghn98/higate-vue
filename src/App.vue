<template>
  <HeaderDefault />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
  <FooterDefault />
</template>

<script>
import HeaderDefault from "@/components/header/HeaderDefault.vue";
import FooterDefault from "@/components/footer/FooterDefault.vue";

export default {
  components: {
    HeaderDefault,
    FooterDefault,
  },
};
</script>
