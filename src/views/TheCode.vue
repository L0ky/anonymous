<template>
  <div class="text-white h-screen">
    <div class="h-1/3 relative">
      <div class="absolute right-96 top-5">
        <p class="p-2 hover:text-white text-transparent">1</p>
      </div>
      <div class="absolute bottom-28 left-40">
        <p class="p-2 hover:text-white text-transparent">0</p>
      </div>
    </div>
    <div class="flex justify-center relative items-center h-1/3">
      <div class="absolute top-0 h-10 w-96">
        <p class="text-right w-10 p-2 hover:text-white text-transparent">8</p>
      </div>
      <div class="flex">
        <input v-model="msg" class="text-black py-2 rounded-md mr-2" />
        <button
          @click="checkCode"
          class="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-md"
        >
          <img src="/check-solid.svg" class="w-6 h-6" />
        </button>
      </div>
    </div>
    <div class="h-1/3">
      <div class="h-10">
        <p class="text-transparent hover:text-white p-2 w-10">0</p>
      </div>
      <div class="h-64 relative">
        <p
          class="hover:text-white text-transparent absolute bottom-10 right-48 p-4"
        >
          /
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    checkCode() {
      if (this.msg === "08/10") {
        this.$router.push("/congratulation");
      }
    },
  },
};
</script>

<style></style>
