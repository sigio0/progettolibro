import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const CommentList = (props) =>{

    return (
        <><ListGroup style={{width:"18rem"}}>
        <h4>Comments</h4>
    {props.commenti.map((comment, index) => (
      <ListGroupItem>{comment}</ListGroupItem>        
            ))}
    </ListGroup>
    </>
    )
}

export default CommentList