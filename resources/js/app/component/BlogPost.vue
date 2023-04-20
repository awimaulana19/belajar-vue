<template>
    <h3>{{ judul }}</h3>
    <p>{{ desk }}</p>
    <button @click="$emit('nambah')">Tambah 1</button>
    <button @click="$emit('nambah', 5)">Tambah 5</button>
    <button @click="$emit('nambah', 10)">Tambah 10</button>
</template>

<script>
export default {
    props: ['judul', 'desk'],
};
</script>
