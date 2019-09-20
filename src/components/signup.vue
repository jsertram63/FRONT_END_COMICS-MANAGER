<template>
     <form class="form-control" @submit="formSubmit">
<fieldset>
         <legend>Créer un utilisateur</legend>
            <label>Nom</label>
            <input type="text" name="name" size="20" 
   maxlength="40" value="name" id="name" v-model="name"/>
            
            <label> E-Mail</label>
            <input type="text" name="email" size="20" 
   maxlength="40" value="email" id="email" v-model="email"/>
            <label> Password</label>
            <input type="password" name="password" size="20" 
   maxlength="40" value="password" id="password" v-model="password"/>
       
</fieldset>

 
 <button class="btn"> Enregistrer</button>


      </form>
 
   


</template>
   
<script>
import axios from 'axios'


export default {
   name: 'signup',

 data: function(){
             return {
                name:'',
                email:'',
                password:'',
                confirmpassword:'',
                url:'http://localhost:8080/comics-manager/signup/'      
         }
     },
     methods: {
         formSubmit(e){
             //console.error("Log an error level message.");
            

               let config = {
              
                 header : {
                    'Content-Type' : 'application/json',
                    
                 }
            }
             axios.put(this.url,config, {
                 name:this.name,
                 email:this.email,
                 password:this.password
             })
             .then(function(response) {
                console.log((response));
                 
             })
            .catch(function(err) {
             console.log(err);
            });

         }
     }
 

}

</script>


<style scoped>

@import './../assets/css/forms.css';

</style>