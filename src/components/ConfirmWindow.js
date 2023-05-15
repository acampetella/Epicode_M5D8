import { deleteComment } from "../states/singleCommentState"
import { closeConfirmWindow } from "../states/singleCommentState"
import { updateToTrue, updateToFalse } from "../states/commentAreaState"
import { useDispatch } from "react-redux"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const ConfirmWindow = ({ question, commentId }) => {
  const dispatch = useDispatch()
  const noFunction = () => {
    dispatch(updateToFalse())
    dispatch(closeConfirmWindow())
  }
  const yesFunction = () => {
    dispatch(deleteComment(commentId))
    dispatch(updateToTrue())
    dispatch(closeConfirmWindow())
  }
  
  return (
    <div
      className="modal show"
      style={{ display: "block"}}
    >
      <Modal.Dialog centered>
        <Modal.Body className="fs-4">
          <p>{question}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={noFunction}>
            No
          </Button>
          <Button variant="primary" onClick={yesFunction}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ConfirmWindow
