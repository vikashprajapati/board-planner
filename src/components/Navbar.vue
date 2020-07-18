<template>
  <nav
    class="flex bg-gray-800 border-b border-teal-500 flex-row w-100 justify-between align-center px-8 py-4"
  >
    <div class="logo">
      <h1 class="text-2xl text-teal-500 font-semibold tracking-wider">Trello</h1>
    </div>
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
