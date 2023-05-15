import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SingleCard from "./SingleCard"
import { nanoid } from "nanoid"
import { mainBooksList } from "../states/mainState"
import { navTerm } from "../states/navState"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const BooksList = () => {
  const term = useSelector(navTerm)
  const books = useSelector(mainBooksList)
  const [filterBooks, setFilterBooks] = useState([])
  const filterFunction = () => books.filter((book) => 
  book.title.toLowerCase().includes(term.toLowerCase()))
  const filter = () => setFilterBooks(filterFunction())

  useEffect(() => {
    filter()
  }, [term])
  
  return (
    <Container>
      <Row className="g-2">
        {filterBooks.map((book) => {
          return (
            <Col key={nanoid()} sm={12} lg={6} xl={3}>
              <SingleCard
                asin={book.asin}
                title={book.title}
                img={book.img}
                price={book.price}
                category={book.category}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BooksList
