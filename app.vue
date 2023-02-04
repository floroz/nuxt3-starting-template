<script setup>
const runtime = useRuntimeConfig();
console.log(runtime);
</script>

<template>
  <div>
    <code>
      <pre>{{ runtime }}</pre>
    </code>
  </div>
</template>
