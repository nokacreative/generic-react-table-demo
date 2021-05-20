import React, { useEffect, useRef, useState } from 'react'
import { FilterMap } from '@nokacreative/generic-react-table'

import { PersonModel } from '../../domain/person.model'
import { fakeClient } from './fakeClient'
import { ServerResponse, ServerSearchParams } from './models'
import { ServerHeaderSampleView } from './view'

export const ServerHeaderSampleContainer = () => {
  const [data, setData] = useState<PersonModel[]>([])
  const [totalNumResults, setTotalNumResults] = useState<number>(0)
  const [isLoading, setLoading] = useState<boolean>(true)
  const currParams = useRef<ServerSearchParams>({
    searchTerm: '',
    filters: {},
  })

  function doFetch() {
    fakeClient.searchPeople(currParams.current).then((response: ServerResponse) => {
      setData(response.people)
      setTotalNumResults(response.totalNumResults)
      setLoading(false)
    })
  }

  useEffect(() => {
    doFetch()
  }, [])

  function onSearch(searchTerm: string) {
    setLoading(true)
    currParams.current.searchTerm = searchTerm
    doFetch()
  }

  function onFilter(currentFilters: FilterMap<PersonModel>) {
    setLoading(true)
    currParams.current.filters = currentFilters
    doFetch()
  }

  return (
    <ServerHeaderSampleView
      data={data}
      onSearch={onSearch}
      onFilter={onFilter}
      isLoading={isLoading}
      totalNumResults={totalNumResults}
    />
  )
}
