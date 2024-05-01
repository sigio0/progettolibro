import React from "react";
import { Card, Button } from "react-bootstrap";
import romance from '../data/romance.json';
import SingleBook from "./SingleBook";

const AllTheBooks = () => {


  return (
    <>
      {romance.map((book, index) => (
        <SingleBook book={book}/>
      ))}
    </>
  );
}

export default AllTheBooks;
