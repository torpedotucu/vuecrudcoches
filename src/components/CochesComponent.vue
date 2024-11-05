<template>
  <div>
    <h1>Coches</h1>
    <table class="table table-dark table-stripped">
        <thead>
            <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Conductor</th>
                <th>Imagen</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coche in coches" :key="coche">
                <td>{{ coche.marca }}</td>
                <td>{{ coche.modelo }}</td>
                <td>{{ coche.conductor }}</td>
                <td><img :src="coche.imagen" style="height: 90px; width: 120px;"></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches';

const service=new ServiceCoches();

export default {
    name:"CochesComponent",
    data(){
        return{
            coches:[]
        }
    },
    mounted(){
       service.getCoches().then(result=>{
        this.coches=result;
       })
    },
    
}
</script>

<style>

</style>