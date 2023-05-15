import {addCommentLoading, addCommentError } from '../states/addCommentState'
import {addComment, validateToFalse, validateToTrue} from '../states/addCommentState'
import { updateToTrue } from '../states/commentAreaState'
import { asinSelected } from "../states/singleCardState"
import { addCommentClose } from "../states/commentListState"
import { useSelector, useDispatch } from "react-redux"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { RingLoader } from 'react-spinners'
import DisplayError from './DisplayError'

const AddComment = () => {
  const dispatch = useDispatch()
  const bookId = useSelector(asinSelected)
  const [commentText, setCommentText] = useState('')
  const [rate, setRate] = useState('')
  const loading = useSelector(addCommentLoading)
  const error = useSelector(addCommentError)
  
  const validateFunction = () => {
    return (commentText && rate)
  }
  const saveButtonEvent = () => {
    if (validateFunction()) {
      const myComment = {
        comment: commentText,
        rate: rate,
        elementId: bookId
      }
      dispatch(addComment(myComment))
      dispatch(validateToTrue())
      dispatch(updateToTrue())
      dispatch(addCommentClose())
    } else {
      dispatch(validateToFalse())
    }
  }
  
  return (
    <div
      className="modal show"
      style={{ display: 'block' }}
    >
      <Modal.Dialog centered >
        <Modal.Header>
          <Modal.Title>Nuovo Commento</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Modal.Title>{`Id libro: ${bookId}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Testo del commento</h4>
            <textarea
              rows="5"
              cols="30"
              onChange={(e) => setCommentText(e.target.value)}
            >
            </textarea>
            <br></br>
            <label className='me-2'>Rate</label>
            <input
              type="number"
              name="rate"
              min="1"
              max="5"
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          {error && <DisplayError error={error}/>}
          {loading && !error && <RingLoader/>}
          
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="primary" 
            onClick={() => {
              dispatch(validateToTrue())
              dispatch(addCommentClose())
              }
            }
          >
            Close
          </Button>
          <Button variant="primary" onClick={saveButtonEvent}>
            Save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default AddComment