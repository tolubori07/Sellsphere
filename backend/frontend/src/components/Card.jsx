/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
 const Card = ({item,id,category}) => {
  const[setSearchParam]= useSearchParams()
   return (
    
    <figure className="w-[250px] overflow-hidden rounded-md border-2 border-black bg-[#96E6B3] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <img className="w-full h-64" src={item.Image} alt="image"/>
      <figcaption className="border-t-2 border-black p-4 break-words">
      <Link to={`/product/${id}`}><h2 className="text-black">{item.Name}</h2></Link>
        <h3 className="text-black price">£{item.Price}</h3>
        <h3 className="text-black price">{item.quantity}</h3> 
        <Link to={`/all/?category=${category.toLowerCase()}`} onClick={()=>setSearchParam({category:item.Category.toLowerCase()})}><div className="w-min rounded-full border-2 border-black bg-main px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
      {item.Category}
    </div></Link>
      </figcaption>
    </figure>
   )
 }

 export default Card
 
    