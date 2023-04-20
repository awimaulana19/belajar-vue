<template>
    <input type="text" v-model="subject">
    <br>
    <h1>Saya {{ subject }}</h1>
    <br>
    <button v-on:click="cocok()">Cek Cocok</button>
    <p>Nilai {{ score }}</p>
    <button v-on:click="hilang()">Default</button>
    <button v-on:click="ubah()">Default Lengkap</button>
    <br>
    <br>
    <counter></counter>
    <counter></counter>
    <counter></counter>
    <counter></counter>
</template>

<script>
    import counter from './component/Counter.vue'

    export default {
        components: {
            Subject: "apkAwi",
            counter
        },
        data(){
            return {
                subject: 'Awi',
                score: 0
            }
        },
        methods: {
            ubah(){
                this.subject = "Awi Maulana"
            },
            hilang(){
                this.subject = "Awi"
            },
            cocok(){
                if (this.subject === 'Awi Maulana') {
                    this.score = 100
                }
                else if (this.subject === 'Awi') {
                    this.score = 80
                }
                else{
                    this.score = 10
                }
            }
        }

    };
</script>

<style scoped>

</style>