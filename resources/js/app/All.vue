<template>
    <link rel="stylesheet" href="css/all.css">
    <h1>Daftar Bank</h1>
    <p>Total Suka : {{ hitung }}</p>
    <button @click="cek()">Tambah Data</button>
    <div v-if="show" class="add">
        <h3>Tambah Data</h3>
        <form @submit.prevent="inputan">
            <input type="text" name="judul" placeholder="masukkan judul">
            <br>
            <input type="text" name="desk" placeholder="masukkan deskripsi">
            <br>
            <input type="text" name="image" placeholder="masukkan image">
            <br>
            <button type="submit">Tambahkan</button>
        </form>
    </div>
    <div v-for="item in bank" :key="item.judul" class="bungkus" :class="{ selesai: item.state }">
        <h2>{{ item.judul }}</h2>
        <p>{{ item.desk }}</p>
        <img :src="'img/'+item.image">
        <input type="checkbox" :checked="item.state" @change="item.state = !item.state">
    </div>
</template>

<script>
export default {
    data(){
        return {
            bank: [ 
                { judul: "BRI", desk: "Bank Rakyat Indonesia", image: "bri.png", state: false },    
                { judul: "BNI", desk: "Bank Negara Indonesia", image: "bni.png", state: false },    
                { judul: "BCA", desk: "Bank Central Asia", image: "bca.png", state: false },    
            ],
            show: false
        }
    },
    methods: {
        cek() {
            this.show = !this.show;
        },
        inputan(event){
            const ete = event.target.elements

            let judul = ete.judul.value
            let desk = ete.desk.value
            let image = ete.image.value

            if (judul == '' || desk == '' || image == '' ) {
                alert('Data Tidak Boleh Kosong')
            } else {
                this.bank.push({
                    judul: judul,
                    desk: desk,
                    image: image,
                    state: false,
                })
    
                this.show = false
            }
        }
    },
    computed: {
        hitung() {
            return this.bank.filter((item) => item.state == true).length
        },
    }
};
</script>
