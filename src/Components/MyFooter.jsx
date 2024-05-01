import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const MyFooter = () =>{

    return (
        <ListGroup className="fixed-bottom d-flex flex-row justify-content-between">
            <ListGroupItem>copyright</ListGroupItem>
            <ListGroupItem>area legale</ListGroupItem>
            <ListGroupItem>social</ListGroupItem>
            <ListGroupItem>2010-2020</ListGroupItem>
        </ListGroup>
    )
}

export default MyFooter