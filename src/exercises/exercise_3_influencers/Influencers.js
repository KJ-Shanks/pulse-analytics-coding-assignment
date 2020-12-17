import React, { useState } from 'react'
import styled from 'styled-components'

import data from '../../data.json'

import uniqueBy from '../exercise_1_uniqueBy'
import filterBy from '../exercise_2_filterBy'

import SearchBar from './SearchBar'
import InfluencerDisplay from './InfluencerDisplay'

const PRIORITY_ORDER = ['High', 'Medium', 'Low']
const PAGE_LIMIT = 24

const Container = styled.div({
  border: '1px solid black',
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: '#E8EBEC',
  fontFamily: 'Helvetica, sans-serif',
})

// TODO: Make the buttons look nicer
const Button = styled.button`
  margin-right: 0.5rem;
`;

const Influencers = () => {
  const [search, setSearch] = useState('')
  const [prioritySort, setPrioritySort] = useState(false)
  const [page, setPage] = useState(0)

  const uniqueData = uniqueBy(data, 'member') // use the uniqueBy util to unique our data by member values

  const filteredData = filterBy(uniqueData, search, [
    'indicationCategory',
    'affiliation',
    'affiliationPosition',
  ]) // use the filterBy util to filter our data by the given search term

  const sortedData = prioritySort
    ? PRIORITY_ORDER.map(priority => (filteredData.filter(obj => obj.priority === priority))).flat()
    : filteredData

  const lastPage = Math.ceil(sortedData.length / PAGE_LIMIT)

  const updateSearch = (searchTerm) => {
    setSearch(searchTerm)
    setPage(0)
  }
  const togglePrioritySort = () => {
    setPrioritySort(!prioritySort)
    setPage(0)
  }

  const nextPage = () => { if (page < lastPage - 1) setPage(page + 1) }
  const prevPage = () => { if (page > 0) setPage(page - 1) }

  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment ✏️ </h1>
      <SearchBar setSearch={updateSearch} search={search} />
      <Button onClick={togglePrioritySort}>Sort by Priority</Button>
      <Button onClick={prevPage}>Prev</Button>
      <span style={{ paddingRight: 8 }}>Page {page + 1} of {lastPage}</span>
      <Button onClick={nextPage}>Next</Button>
      <InfluencerDisplay data={sortedData.slice(PAGE_LIMIT * page, PAGE_LIMIT * (page + 1))} />
    </Container>
  )
}

export default Influencers
