import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShopingcart } from '../Context/ShopingCartcontext'
import Cartiteminsidebos from './Cartiteminsidebos'
import formatcurrency from './Formatcurrency'
import Storitems from "../data/Storeitems.json"

export default function Shoppingcart({op}) {
    const{Cartitem ,close}=useShopingcart()
    console.log(Cartitem)
  return (
    <Offcanvas show={op} onHide={close} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
            Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={2}>
        {Cartitem.map((item)=> (
            <Cartiteminsidebos key={item.id} {...item} /> 
        ))}
        <div>
        {formatcurrency(
          Cartitem.reduce((total,Cartitem)=>{
            const item=Storitems.find((i)=>i.id===Cartitem.id)
            return total +item.price*Cartitem.quantity
          },0)
        )}
        </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
