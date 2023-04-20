<style>
.active {
    color: rgb(43, 46, 233);
}
</style>
<template>
    <h1>Saya Belajar</h1>
    <ol class="list" :class="{ active: isActive }" v-if="status">
        <li v-for="item in subjects" :key="item.id">
            {{ item.title }} Tipenya {{ item.type }}
        </li>
    </ol>
    <p :class="{ active: isActive }" v-else>Saya Tidak Belajar</p>
    <button @click="tampil()">Tampilkan</button>
    <button @click="active()">Ubah Warna</button>
    <br>
    <br>
    <h1>Profil Saya</h1>
    <input type="text" v-model="name">
    <input type="number" v-model="age">
    <p>Nama Saya : {{ name }}</p>
    <p>Umur Saya : {{ age }}</p>
    <p>Tergolong {{ tanggapan }}</p>
    <counter></counter>
    <counter></counter>
    <counter></counter>
    <br>
    <h1>Tambah</h1>
    <blogpost judul="Pemesanan" desk="ada pesan dari si awi" @nambah="tambah"></blogpost>
    <blogpost judul="Pembelian" desk="ada pembelian dari si awi" @nambah="tambah"></blogpost>
    <blogpost judul="Pengiriman" desk="ada pengiriman dari si awi" @nambah="tambah"></blogpost>
    <p>Total : {{ total }}</p>
</template>

<script>
import counter from './component/Counter.vue'
import blogpost from './component/BlogPost.vue'

export default {

    components: {
        subject: "kedua",
        counter,
        blogpost
    },
    data() {
        return {
            subjects: [
                { id: 1, title: "JavaScript", type: "Native" },
                { id: 2, title: "Vue", type: "Framework" },
                { id: 3, title: "PHP", type: "Native" },
                { id: 4, title: "Laravel", type: "Framework" },
            ],
            status: true,
            isActive: false,
            name: "awi",
            age: 20,
            total: 0
        };
    },
    methods: {
        tampil() {
            this.status = !this.status;
        },
        active() {
            this.isActive = !this.isActive;
        },
        tambah(berapa = 1){
            this.total = this.total + berapa
        }
    },
    computed: {
        tanggapan() {
            if (this.age < 21) {
                return "muda"
            }
            else if (this.age < 41) {
                return "tua"
            }
            else {
                return "tua sekali"
            }
        }
    },
};
</script>
