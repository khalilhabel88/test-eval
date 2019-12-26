import React from 'react'
import {Card} from "react-bootstrap";

 function Details({mydetails}) {
    return (
        <div>
    <Card style={{ width: '18rem' }}>
  <Card.Body >
    <Card.Text>          
      Name:{mydetails.name}
    </Card.Text>
    <Card.Text>
     Email: {mydetails.email}
    </Card.Text>
    <Card.Text>
     Body: {mydetails.body}
    </Card.Text>
    

  </Card.Body>
</Card>    
        </div>
    )
}
export default Details;