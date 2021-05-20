import React, { useEffect, useRef, useState } from 'react'

import { SortingRule } from '@nokacreative/generic-react-table'
import { ProductModel } from '../../domain/product.model'
import { DEFAULT_PAGE_SIZE } from './data'
import { fakeClient } from './fakeClient'
import { ServerResponse, ServerSearchParams } from './models'
import { ServerSampleView } from './view'

export const ServerSampleContainer = () => {
  const [data, setData] = useState<ProductModel[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)
  const currParams = useRef<ServerSearchParams>({
    sortingRules: [],
    pageIndex: 0,
    pageSize: DEFAULT_PAGE_SIZE,
  })
  const [totalNumPages, setTotalNumPages] = useState<number>(0)
  const [totalNumResults, setTotalNumResults] = useState<number>(0)

  function doFetch() {
    fakeClient.fetchProducts(currParams.current).then((response: ServerResponse) => {
      setData(response.products)
      setTotalNumPages(response.totalNumPages)
      setTotalNumResults(response.totalNumResults)
      setLoading(false)
    })
  }

  useEffect(() => {
    doFetch()
  }, [])

  function onSort(currentSortingRules: SortingRule<ProductModel>[]) {
    setLoading(true)
    currParams.current.sortingRules = currentSortingRules
    doFetch()
  }

  function onPage(pageIndex: number, pageSize: number) {
    setLoading(true)
    currParams.current.pageIndex = pageIndex
    currParams.current.pageSize = pageSize
    doFetch()
  }

  return (
    <ServerSampleView
      data={data}
      onSort={onSort}
      isLoading={isLoading}
      onPage={onPage}
      totalNumPages={totalNumPages}
      totalNumResults={totalNumResults}
    />
  )
}
