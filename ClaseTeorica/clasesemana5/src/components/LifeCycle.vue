<template>
    <div>
        <h1>
            {{message}}
        </h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: 'Ciclo de vida'
        }
    },
    //hooks de creacion (inicializacion) sin acesso al DOM
    beforeCreate(){
        console.log('En este punto se inicia el ciclo de vida')
    },
    computed:{
        propiedadComputada(){
            return this.message
        }
    },
    created(){
        console.log('this.message es reactivo y la propiedad computada se actualiza');
        this.message="Ciclo de vida actualizado"
    },

    //hooks de montaje (insercion DOM)
    beforeMount(){ //antes de renderizar
        console.log('En este punto vm.$el no ha sido creado');
    },
    //acceso al componente
    mounted(){
        console.log('En este punto vm.$el ha sido creado');
        console.log(this.$el.textContent)
    }
}
</script>