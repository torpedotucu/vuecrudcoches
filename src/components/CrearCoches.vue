<template>
  <div>
    <h1>Crear Coche</h1>
    <form v-on:submit.prevent="crearCoche()" style="width: 500px; margin: 0 auto;">
        <input v-model="nuevoCoche.idCoche" placeholder="Id del coche" class="form-control"  required />
        <input v-model="nuevoCoche.marca" placeholder="Marca del coche" class="form-control" required />
      <input v-model="nuevoCoche.modelo" placeholder="Modelo del coche" class="form-control" required />
      <input v-model="nuevoCoche.conductor" placeholder="Conductor" class="form-control" required />
      <input v-model="nuevoCoche.imagen" placeholder="imagen" class="form-control" required />
      <button class="btn btn-info">Crear Coche</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches';

const service=new ServiceCoches();
export default {
    name:"CrearCoches",
    data(){
        return{
            nuevoCoche:{
                idCoche:"",
                marca:"",
                modelo:"",
                conductor:"",
                imagen:""
            }
        }
    },
    methods:{
        crearCoche(){
            service.crearCoches(this.nuevoCoche).then(result=>{
               console.log(result);
               this.$router.push('/');
            })
        }
    }

}
</script>

<style>

</style>