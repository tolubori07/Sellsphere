import axios from 'axios'
const Bag_url = 'http://localhost:8000/api/bag'
const getBag = async(token)=>{
 try {
  const config ={
    headers:{
    Authorization: `Bearer ${token}`
      }
    }
 
 const response = await axios.get(Bag_url,config)
    return response.data
 } catch (error) {
  console.error(error)
 }
}

const addToBag = async(itemData,token)=>{
  try {
     const config ={
    headers:{
    Authorization: `Bearer ${token}`
      }
    }
 
 const response = await axios.post(Bag_url,itemData,config)
    return response.data.items

  } catch (error) {
   console.error(error) 
  }
}

const bagServices = {getBag,addToBag}
export default bagServices
