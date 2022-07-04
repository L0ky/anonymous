<template>
  <div class="mt-20">
    <div class="flex justify-center">
      <div class="text-white bg-[#282828] w-[500px] p-4 rounded-md">
        <p>Dear Bengui,</p>
        <p class="mt-4">L'heure est grave !</p>
        <p class="mt-2">
          Un missile nucleaire vient d'être envoyé en direction de l'Europe.
        </p>
        <p class="mt-2">
          Tu dois absolument trouver le code secret pour pouvoir le désarmorcer
        </p>
        <p class="mt-2">
          Si tu echoue la mission, il detruira tout sur son passage...
        </p>
        <p>Good Luck !</p>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <button
        class="bg-blue-500 px-4 py-2 rounded-md text-white cursor-pointer"
      >
        <RouterLink to="/code">Commencer</RouterLink>
      </button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style></style>
