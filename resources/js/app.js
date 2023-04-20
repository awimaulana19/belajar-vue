import { createApp } from "vue";

import Awi from "./app/Dasar.vue";
import Kedua from "./app/LoopsMore.vue";
import All from "./app/All.vue";

const appAwi = createApp(Awi)
const kedua = createApp(Kedua)
const all = createApp(All)

appAwi.mount('#apkAwi')
kedua.mount('#kedua')
all.mount('#latihan')
