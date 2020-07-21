<template>
  <nav class="flex fixed w-full bg-gray-700 flex-row justify-between align-center px-8 py-4 h-16">
    <div class="logo">
      <router-link :to="{ name: 'home' }">
        <h1 class="text-2xl text-yellow-500 font-semibold tracking-wider">Trello</h1>
      </router-link>
    </div>
    <ul class="flex flex-row items-center">
      <router-link :to="{ name: 'login' }">
        <li class="text-yellow-500 text-lg mr-5">Log In</li>
      </router-link>
      <router-link :to="{ name: 'signup' }">
        <li class="px-2 py-1 rounded text-lg bg-yellow-500 text-white">Sign Up</li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.navbar-links {
  @apply bg-teal-500 text-white px-5 py-2;
}
</style>
