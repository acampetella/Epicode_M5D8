import { singleCommentLoading, singleCommentError } from "../states/singleCommentState";
import { showConfirmWindow, openConfirmWindow } from "../states/singleCommentState";
import { useSelector, useDispatch } from "react-redux";
import React from "react"
import { ListGroup, Button } from "react-bootstrap"
import RatingSystem from "../components/RatingSystem"
import { RingLoader } from "react-spinners"
import ConfirmWindow from "./ConfirmWindow"
import DisplayError from "./DisplayError"

const SingleCommnet = ({ comment }) => {
  const dispatch = useDispatch()
  const loading = useSelector(singleCommentLoading)
  const error = useSelector(singleCommentError)
  const confirmWindowOpen = useSelector(showConfirmWindow)

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div>{comment.comment}</div>
        <div>
          relativo al libro: {comment.elementId}
          <div>
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => dispatch(openConfirmWindow())}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <RatingSystem stars={comment.rate} />
      {loading && !error && <RingLoader />}
      {error && <DisplayError error={error}/>}
      {confirmWindowOpen && (
        <ConfirmWindow 
          question="Sicuro di eliminare il commento ?"
          commentId={comment._id}
        />
      )}
    </ListGroup.Item>
  );
};

export default SingleCommnet
