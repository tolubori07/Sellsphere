import axios from 'axios'


const API_URL = 'http://localhost:8000/api/items'

const getItems=async(token)=>{
 try{
  const config ={
    headers:{
    Authorization: `Bearer ${token}`
      }
    }
  const response = await axios.get(API_URL,config)
       return response.data 
  }catch(error){
      console.log(error)
  }
}

const getUserItems=async(token)=>{
  try{
   const config ={
     headers:{
     Authorization: `Bearer ${token}`
       }
     }
   const response = await axios.get(`${API_URL}/myproducts`,config)
        return response.data 
   }catch(error){
       console.log(error)
   }
 }

const uploadItem =async(itemsData,token)=>{
  try {
  const config ={
    headers:{
    Authorization: `Bearer ${token}`
      }
    }
  const response = await axios.post(API_URL,itemsData, config)
    return response.data
  } catch (error) {
    console.error(error) 
  }
}



const getItem = async(itemId,token)=>{ 
 try {
  const config ={
    headers:{
    Authorization: `Bearer ${token}`
      }
    }
 const response = await axios.get(`${API_URL}/${itemId}`,config)
    return response.data
 } catch (error) {
  console.error(error)
 }
}


const itemServices = {getItem,getItems,uploadItem,getUserItems}
export default itemServices
