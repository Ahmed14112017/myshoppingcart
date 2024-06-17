import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import Storeitems from "../data/Storeitems.json"
import formatcurrency from './Formatcurrency';
import { useShopingcart } from '../Context/ShopingCartcontext';

export default function Cartiteminsidebos({id,quantity}) {
  const {removefromcart} =useShopingcart()
  const item=Storeitems.find((i)=>i.id===id)
  console.log(item)
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-item-center'>
      <img src={item.imgUrl} alt='photo' style={{width:"125px",height:"75px",objectFit:"cover"}}/>
      <div className='me-auto'>
    <div>
      {item.name} {" "}
      {quantity>1&&<span className='text-muted' style={{fontSize:".65rem"}}>x{quantity}</span>}
    </div>
    <div className='text-muted' style={{fontSize:"0.75rem"}}>
      {formatcurrency(item.price)}
    </div>
    
      </div>
      <div>{formatcurrency(item.price*quantity)}</div>
     
      <Button variant='outline-danger' size='sm' onClick={()=>{removefromcart(id)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></Button>
    </Stack>
  )
}
