import React from 'react'
import { Container ,Row ,Col } from 'react-bootstrap'
import Storeitems from "../data/Storeitems.json"
import Storitem from './Storitem'

export default function Store() {
  return (
    <Container>
      <Row md={2} xs={1} lg={3} className='g-3'>
    {Storeitems.map((item)=>{
        return(
            <Col key={item.id}>
                <Storitem items={item} />
            </Col>
        )
    })}
      </Row>
    </Container>
  )
}
