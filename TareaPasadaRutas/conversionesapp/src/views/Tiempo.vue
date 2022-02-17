<template>
    <div>
        <center>
            <h1>Convertir tiempo</h1>
            <calc-tiempo/>
        </center>
    </div>
</template>

<script>
import calcTiempo from '@/components/calcTiempo.vue'

export default {
    name:'Tiempo',
    components:{
        calcTiempo
    }
}
</script>