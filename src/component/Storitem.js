import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatcurrency from './Formatcurrency'
import { useShopingcart } from '../Context/ShopingCartcontext'


export default function Storitem({items}) {
    const {getitemsquantity,increasecart,decreasecart,removefromcart}=useShopingcart()
    const quntity=getitemsquantity(items.id);
  return (
    <Card>
        <Card.Img src={items.imgUrl} variant='top' style={{height:"200px", objectFit:"cover"}}/>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline'>
                <span className='fs-2'>
                    {items.name}
                </span>
                <span className='text-muted me-2'>
                    {formatcurrency(items.price)}
                </span>
            </Card.Title>
            <div className='mt-auto'>
                {quntity===0?(
                    <Button className='w-100' onClick={()=>increasecart(items.id)}>Add to Cart</Button>
                ):<div className='d-flex align-items-center flex-column' >
                    <div className='d-flex justify-content-center align-items-center '>
                        <Button onClick={()=>increasecart(items.id)} className='m-2'>-</Button>
                        <span> {quntity} in cart</span>
                        <Button onClick={()=>decreasecart(items.id)} className='m-2'>+</Button>
                    </div>
                    <Button onClick={()=>removefromcart(items.id)} variant='danger' size='sm'>Remove</Button>
                    </div>}
            </div>
        </Card.Body>
        
    </Card>
    
      
    
  )
}
