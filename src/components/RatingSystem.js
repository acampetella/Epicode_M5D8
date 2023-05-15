import React from 'react'
import { StarFill } from 'react-bootstrap-icons'
import { nanoid } from 'nanoid'

const RatingSystem = ({stars}) => {
  return (
    <>
        {
            [...Array(stars)].map((star) => {
                return <StarFill key={nanoid()}/>
            })
        }
    </>
  )
}

export default RatingSystem