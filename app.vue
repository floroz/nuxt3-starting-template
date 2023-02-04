<script setup>
import { useCounterStore } from "./stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <main class="h-screen">
    <div class="flex p6 justify-center mt-10 text-primary">
      <TailwindLink />
    </div>
    <div>
      <h1>Counter is {{ counterStore.count }}</h1>
      <h1>Double Count is {{ counterStore.doubleCount }}</h1>
      <button
        class="flex py-2 px-4 rounded-md bg-primary text-white"
        @click="counterStore.increment"
      >
        Increment
      </button>
    </div>
  </main>
</template>
