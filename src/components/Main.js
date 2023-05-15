import { mainLoading, mainError } from '../states/mainState'
import { asinSelected } from '../states/singleCardState'
import { getBooks } from '../states/mainState'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { RingLoader } from 'react-spinners'
import BooksList from './BooksList'
import NewCommentArea from './NewCommentArea'
import '../styles/main.css'
import DisplayError from './DisplayError'

function Main() {
  const dispatch = useDispatch()
  const loading = useSelector(mainLoading)
  const error = useSelector(mainError)
  const selected = useSelector(asinSelected)

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <>
      {loading && !error && <RingLoader/>}
      {!loading && !error &&
        <Container fluid className='mt-3 mb-3'>
          <Row>
            <Col sm={6} lg={8} xl={9}>
              <BooksList/>
            </Col>
            <Col sm={6} lg={4} xl={3}>
              {!selected && <div className='commentsContainer'></div>}
              { selected && <NewCommentArea/>}
            </Col>
          </Row>
        </Container>
      }
      {error && <DisplayError error={error}/>}
    </>
  );
}

export default Main