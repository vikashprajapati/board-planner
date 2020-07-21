<template>
  <div class="bg-gray-800 h-full w-full flex items-center">
    <div class="card flex flex-col py-4 px-8">
      <h3 class="font-bold my-6">Sign Up for your account</h3>
      <form class="flex flex-col">
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="password" name="conformPassword" placeholder="Confirm Password" />
        <input class="btn" type="button" value="Sign Up" />
      </form>
      <p class="my-6 text-gray-800">
        already have an account
        <router-link :to="{ name: 'login' }">
          <span class="text-grey-800 font-semibold">Log In</span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
