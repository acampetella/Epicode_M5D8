import { asinSelected } from "../states/singleCardState"
import { commentAreaLoading, commentAreaError} from "../states/commentAreaState"
import { getCommentsFromBook, commentAreaUpdate, updateToFalse } from "../states/commentAreaState"
import {useDispatch, useSelector } from "react-redux"
import React from "react"
import { useEffect } from "react"
import { RingLoader } from "react-spinners"
import NewCommentList from "./NewCommentList"
import "../styles/newCommentArea.css"
import DisplayError from "./DisplayError"

const NewCommentArea = () => {
  const dispatch = useDispatch()
  const bookId = useSelector(asinSelected)
  const loading = useSelector(commentAreaLoading)
  const error = useSelector(commentAreaError)
  const update = useSelector(commentAreaUpdate)
  
  useEffect(() => {
    if (bookId !== '' || update) {
      dispatch(getCommentsFromBook(bookId))
      if (update) {
        dispatch(updateToFalse())
      }
    }
  }, [dispatch, bookId, update])
  
  return (
    <div className="newCommentAreaContainer">
      {loading && !error && <RingLoader />}
      {!loading && !error && (
        <NewCommentList/>
      )}
      {error && <DisplayError error={error}/>}
    </div>
  );
};

export default NewCommentArea
