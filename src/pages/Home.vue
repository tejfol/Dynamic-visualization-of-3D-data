<template>
  <div class="container px-4 mx-auto space-y-4 text-white relative">
    <Header class="sticky top-0 w-full" />
    <div class="grid grid-cols-2 h-screen items-center">
      <div class="space-y-4">
        <p class="text-5xl">
          My name is <span class="font-semibold">Matei Mark</span>
        </p>
        <p class="text-4xl">
          <span class="text-gray-400">I'm a </span>frontend developer
        </p>
        <button
          class="
            bg-gray-400
            font-semibold
            px-5
            py-4
            rounded
            hover:bg-gray-500
            transition-all
          "
        >
          Contact with me
        </button>
      </div>
      <div class="justify-self-center">
        <img
          class="max-w-sm rounded"
          src="https://s11.favim.com/orig/7/721/7215/72153/gif-tumblr-chuva-Favim.com-7215355.gif"
          alt="profile picture"
        />
      </div>
    </div>
    <div class="bg-white">next seciton</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Header: () => import("components/Header.vue"),
  },
};
</script>

<style>
</style>