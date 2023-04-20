<template>
    <button v-on:click="count++">Telah Di Klik {{ count }} Kali</button>
</template>

<script>
export default {
    data(){
        return {
            count: 0
        }
    },
};
</script>
