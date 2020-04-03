import React from 'react'
import { useDispatch } from 'react-redux';

// components
import { FaTrashAlt } from 'react-icons/fa'
import { Accordion, Card, Button } from 'react-bootstrap'

// redux actions
import { removeBookmark } from '../actions'

export default ({ repo }) => {
  const dispatch = useDispatch();
  return (
    <Accordion.Collapse eventKey="1">
      <Card.Body className="bookmark-body">
        <Card.Title>
          <Card.Link href={repo.html_url} target="_blank">{repo.owner.login}/{repo.name}</Card.Link>
          <Button onClick={() => dispatch(removeBookmark(repo.id))}
            className="bookmark-button"
            variant="danger" size="sm"> <FaTrashAlt /></Button>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {repo.description}
        </Card.Subtitle>
      </Card.Body>
    </Accordion.Collapse>
  )
}
