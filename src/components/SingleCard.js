import { asinSelected, setAsinSelected } from '../states/singleCardState'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../styles/myCard.css'
import { Link } from 'react-router-dom'
import { appTheme } from "../states/appState"


const SingleCard = ({asin, title, img, price, category}) => {
  const dispatch = useDispatch()
  const theme = useSelector(appTheme)
  const selected = useSelector(asinSelected)
  const selectBook = () => {
    dispatch(setAsinSelected(asin))
  }
  
  return (
    <Card
      className={`${selected === asin ? 'border border-danger shadow' : null}`}
      key={asin} 
      style={{ width: '18rem' }}
      onClick={selectBook}
      bg={theme}
      >
      <Card.Img className='object-fit-cover w-100 imageHeight' variant="top" src={img} />
      <Card.Body>
        <Card.Title className='text-truncate'>{title}</Card.Title>
        <Card.Text>
          {category}
        </Card.Text>
        <Card.Text>
          {`asin: ${asin}`}
        </Card.Text>
        <Card.Text>
          {`${price} $`}
        </Card.Text>
        <Link to={`/details/${asin}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default SingleCard