import { useSelector, useDispatch } from "react-redux"
import { bookComments } from "../states/commentAreaState"
import { appTheme } from "../states/appState"
import { isAddCommentOpen, addCommentOpen } from "../states/commentListState"
import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import SingleCommnet from "./SingleCommnet"
import AddComment from "../components/AddComment"
import { nanoid } from "nanoid"
import '../styles/newCommentList.css'

const NewCommentList = () => {
  const dispatch = useDispatch()
  const theme = useSelector(appTheme)
  const comments = useSelector(bookComments)
  const openCommentWindow = useSelector(isAddCommentOpen)
  
  return (
    <>
      <Card style={{ width: "18rem" }} className="newCommentListCard" bg={theme}>
        <Card.Body>
          <Card.Title>Commenti</Card.Title>
          <ListGroup>
            {comments &&
              comments.map((comment) => {
                return <SingleCommnet key={nanoid()} comment={comment}/>;
              })}
          </ListGroup>
          <Button variant="primary" onClick={() => dispatch(addCommentOpen())} className="mt-2">
            Add Comment
          </Button>
        </Card.Body>
      </Card>
      {openCommentWindow &&
        <AddComment/>
      }
    </>
  );
};

export default NewCommentList
