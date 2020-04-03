import React from 'react'
import { useDispatch } from 'react-redux';

// components
import { FaStar } from 'react-icons/fa'
import { GoRepoForked } from 'react-icons/go'
import { Card, Button, Badge, ListGroup } from 'react-bootstrap'

// redux actions
import { bookmarkRepository } from '../actions'

export default ({ repo }) => {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item>
      <Card className="repo-card">
        <Card.Body>
          <Card.Title>
            <Card.Link href={repo.html_url} target="_blank">{repo.owner.login}/{repo.name}</Card.Link>
            <Button onClick={() => dispatch(bookmarkRepository(repo.id))}
              className="bookmark-button"
              variant="warning" size="sm"> <FaStar /></Button>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {repo.description}
          </Card.Subtitle>
          <ListGroup horizontal className="repo-metadata">
            <ListGroup.Item>
              <GoRepoForked /> Forks <Badge variant="secondary">{repo.forks_count}</Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              <FaStar /> Stars <Badge variant="secondary">{repo.stargazers_count}</Badge>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </ListGroup.Item >
  )
}
