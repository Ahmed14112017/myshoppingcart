import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useShopingcart } from '../Context/ShopingCartcontext'
import Cartiteminsidebos from './Cartiteminsidebos'

export default function Shoppingcart() {
    const{Cartitem}=useShopingcart()
    console.log(Cartitem)
  return (
    <Offcanvas show={true}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
            Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {Cartitem.map((item)=> (
            <Cartiteminsidebos key={item.id} {...item} /> 
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  )
}
