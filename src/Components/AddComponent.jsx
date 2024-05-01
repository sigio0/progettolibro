import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComponent extends Component {

     addComment = (props)=>{
fetch("https://striveschool-api.herokuapp.com/api/comments/" +props.id, {
    method:"POST",
    
})
    }

    render() {

        return (

            <>
             <Form style={{width:"18rem"}}>
      <Form.Group className="mb-3">
        <Form.Control style={{height:"6rem"}} type="text" placeholder="Aggiungi commento" />
      </Form.Group>
      <Button type="submit">Aggiungi</Button>
      </Form>
            </>
        )
    }
}

export default AddComponent