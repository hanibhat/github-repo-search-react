import React from 'react'
import { useSelector } from 'react-redux';

// components
import Repository from './Repository'
import { ListGroup } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

export default () => {
  const { repositories } = useSelector(state => state)
  return (
    <ListGroup>
      {repositories.length > 0 ?
        repositories.map(r => <Repository key={r.id} repo={r} />)
        : <h3 className="search-now"><FaSearch /> Search now</h3>}
    </ListGroup>
  )
}
