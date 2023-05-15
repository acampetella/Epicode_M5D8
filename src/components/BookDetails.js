import { bookDetails, bookDetailsLoading, bookDetailsError } from "../states/bookDetailsState"
import { getBook } from "../states/bookDetailsState"
import { getCommentsFromBook, bookComments } from "../states/commentAreaState"
import { useSelector, useDispatch } from "react-redux"
import React from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import "../styles/myCard.css"
import RatingSystem from "./RatingSystem"
import { RingLoader } from "react-spinners"
import DisplayError from "./DisplayError"

const BookDetails = () => {
  const { asin } = useParams();
  const dispatch = useDispatch()
  const book = useSelector(bookDetails)
  const comments = useSelector(bookComments)
  const loading = useSelector(bookDetailsLoading)
  const error = useSelector(bookDetailsError)
  
  useEffect(() => {
    dispatch(getBook(asin))
    dispatch(getCommentsFromBook(asin))
  }, [dispatch, asin])
  return (
    <>
      {loading && !error && <RingLoader />}
      {!loading && !error && book && comments && (
        <>
          <div className=" d-flex p-3">
            <div className="me-3">
              <img src={book[0].img} className="imageHeight" alt={book[0].title} />
            </div>
            <div>
              <div>
                <h2>{book[0].title}</h2>
              </div>
              <div className="fs-4">
                <p>{`Category: ${book[0].category}`}</p>
              </div>
              <div className="fs-4">
                <p>{`Price: ${book[0].price} $`}</p>
              </div>
              <div className="fs-4">
                <p>{`Asin: ${book[0].asin}`}</p>
              </div>
            </div>
          </div>
          <div className="fs-4 p-3">
            <hr />
            <h2 className="mb-5">Commenti</h2>
            {comments.map((comment) => {
              return (
                <div key={comment._id} className="d-flex">
                  <p className="me-3">{comment.comment}</p>
                  <p>
                    <RatingSystem stars={comment.rate} />
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}
      {error && <DisplayError error={error}/>}
    </>
  );
};

export default BookDetails;
