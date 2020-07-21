<template>
  <div class="bg-gray-800 h-full w-full flex items-center">
    <div class="card flex flex-col py-4 px-8">
      <h3 class="font-bold my-6">Log in to Trello</h3>
      <form class="flex flex-col">
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input class="btn" type="button" value="Login" />
      </form>
      <p class="my-6 text-gray-800">
        don't have an account?
        <router-link :to="{ name: 'signup' }">
          <span class="text-grey-800 font-semibold">Sign Up</span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card {
  @apply bg-gray-500 rounded shadow-2xl m-auto;
  width: 30%;
}
form input {
  @apply w-full p-2 rounded border border-2 shadow my-2;
}
form input::placeholder {
  @apply font-light text-sm;
}
form input.btn {
  @apply bg-green-500 border-none shadow-none text-white cursor-pointer;
}
form input:focus {
  @apply border border-2 border-blue-600;
}
</style>
