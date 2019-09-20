<template>
     <form ref="myform" v-on:submit.prevent="onSubmit" class="form-control" @submit="formSubmit">
<fieldset>
         <legend>Connexion</legend>
            <label> E-Mail</label>
            <input type="text" name="email" size="20" 
   maxlength="40" value="email" id="email" v-model="email"/>
            <label> Password</label>
            <input type="password" name="password" size="20" 
   maxlength="40" value="password" id="password" v-model="password"/>
       
</fieldset>

 
 <button class="btn" @click="sendForm()"> Se connecter</button>


      </form>
 
   


</template>
   
<script>
import axios from 'axios'


export default {
   name: 'signIn',

 data: function(){
             return {
                email:'',
                password:'',
                testval:'',
                test: 'BEFORE SUBMIT',
                url:'http://localhost:8080/comics-manager/login/'      
         }
     },
    created(){
      // this.$bus.$emit('authenticated', true);
    },

     methods: {
          sendForm(){
            console.log("send form");
            //this.$bus.$emit('authenticated', true);
         }
         
         ,
         Updated(){
            console.log('before update');
            //this.$bus.$emit('authenticated', true);
         },onSubmit () {
            this.test = 'AFTER SUBMIT'
          },
         
         formSubmit(e){
               let config = {
                 header : {
                    'Content-Type' : 'application/json',
                    
                 }
            }
           
             axios.get(this.url, {
                 name:this.name,
                 email:this.email,
                 password:this.password
             })
              .then((response) => {
                 
                 console.log("received data")
                 this.testval = "YES";
               this.$bus.$emit('authenticated', true);
             console.log(response.data);
   
              this.$router.push({ name: 'comics', query: { redirect: '/comics-manager/comics' } });
            })
            .catch((err) => {
               console.log(err);
            })

     },
      
     }
 

}

</script>


<style scoped>

@import './../assets/css/forms.css';

</style>