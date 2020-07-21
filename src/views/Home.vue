<template>
  <div class="banner-container bg-white flex flex-row h-full w-full">
    <div class="w-1/2 mt-32">
      <img src="../../public/images/banner.png" class="banner" />
    </div>
    <div class="h-full w-1/2 flex flex-col justify-center px-8 text-left">
      <h2
        class="text-gray-800 text-4xl font-bold"
      >Trello lets you work more collaboratively and get more done.</h2>
      <p class="text-xl mt-4">
        Trello’s boards, lists, and cards enable you to organize and prioritize
        your projects in a fun, flexible, and rewarding way.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  background: url("../../public/images/banner.png");
  widows: 100%;
  margin: auto;
}
</style>
