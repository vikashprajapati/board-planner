<template>
  <nav class="red-100">
    <a href="/" class="navbar-links">home</a>
    <div class="logo">
      <h1 class="text-red-200">Trello</h1>
    </div>
    <a href="#" class="navbar-links">user</a>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
nav {
  padding: 32px 16px;
  display: flex;
  justify-content: space-between;
}
nav .navbar-links {
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 4px;
}
</style>
