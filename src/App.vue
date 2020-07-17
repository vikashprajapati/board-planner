<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <div class="container mx-auto py-10">
        <div
          class="border m-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
        >
          <div class="sm:flex sm:items-center px-6 py-4">
            <img
              class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
              src="https://api.adorable.io/avatars/196/abott@adorable.png"
              alt
            />
            <div class="text-center sm:text-left sm:flex-grow">
              <div class="mb-4">
                <p class="text-xl leading-tight">Jane Doe</p>
                <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
              </div>
              <div class="flex flex-wrap">
                <button
                  class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white"
                >Call</button>
                <button
                  class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"
                >Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  background: #282828;
}
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px 30px;
}
</style>
