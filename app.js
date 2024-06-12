import axios from "./axios.js"; 
import {rederPotoIngrit} from "./reder.js";
const APIkey = "gNmvSlQY6yU4Z2Z4vmxIkmNI1RhDdA3uonxDMrjP5gfQpqwAhOb89Dba";

localStorage.setItem("key", APIkey);

const loadPoto = async () =>{

   try {
      const response = await axios('/search?query=nature&per_page=80')
       
    if (!response.status || response.status !== 200) {
         throw new Error(response)
    }
    
    const data = response.data;
    rederPotoIngrit(data.photos);
   } catch(error){
     console.log(error.message);
   }
   finally{}
}
loadPoto()
