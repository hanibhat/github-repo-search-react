import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// components
import { Accordion, Card, Badge, Button } from 'react-bootstrap'
import Bookmark from './Bookmark'

// redux actions
import { fetchBookmarks } from '../actions'

export default () => {
  const { bookmarks } = useSelector(state => state)
  const dispatch = useDispatch();

  // runs once on component initialization
  useEffect(() => {
    dispatch(fetchBookmarks())
  }, [dispatch])

  return (
    <Accordion className="bookmarks-accordion">
      <Card className="bookmarks-card">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Bookmarks <Badge variant="secondary">{bookmarks.length}</Badge>
          </Accordion.Toggle>
        </Card.Header>
        {bookmarks.map(b => <Bookmark key={'bookmark-' + b.id} repo={b} />)}
      </Card>
    </Accordion >
  )
}
