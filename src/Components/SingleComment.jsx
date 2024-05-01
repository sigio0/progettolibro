import React from "react";
import { ListGroupItem } from "react-bootstrap";

const SingleComment = (props) =>{

    return ( 
        <>
        <ListGroupItem>
            {props.commento}
        </ListGroupItem>
        
        </>
    )
}

export default SingleComment