import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useShopingcart } from '../Context/ShopingCartcontext'

export default function Cartsideitem() {
    const{Cartitem}=useShopingcart()
  return (
    <Offcanvas show={true}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
            Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

      </Offcanvas.Body>
    </Offcanvas>
  )
}
