import React from 'react'

import { SortingRule, Table } from '@nokacreative/generic-react-table'
import { columns, DEFAULT_PAGE_SIZE } from './data'
import { SamplePage } from '../../common/samplePage'
import { ProductModel } from '../../domain/product.model'
import { Loader } from '../../common/loader'

type Props = {
  data: ProductModel[]
  onSort: (currentSortingRules: SortingRule<ProductModel>[]) => void
  onPage: (pageIndex: number, pageSize: number) => void
  totalNumPages: number
  totalNumResults: number
  isLoading: boolean
}

export const ServerSampleView = (props: Props) => (
  <SamplePage
    headerText="Server-side Paging and Sorting Sample"
    description={
      <>
        <p>
          Use <code>useServerSideSorting</code> and <code>onSort()</code> to run sorting
          on the server side. The loader is a custom element that can be specified per
          table.
        </p>
        <p>
          Server side paging is set independently of sorting, using{' '}
          <code>useServerSidePaging</code> and <code>onPage()</code>. To demonstrate that
          all paging-related data comes from the server, the second page will return more
          than 6 results,
        </p>
        This demo uses a fake server with a faked latency of 1 second. It also allows
        sorting by multiple columns.
      </>
    }
  >
    <Table
      pluralEntityName="products"
      columns={columns}
      data={props.data}
      minNumRows={5}
      showResultCount
      usePaging
      defaultPageSize={DEFAULT_PAGE_SIZE}
      useServerSideSorting
      useServerSidePaging
      onPage={props.onPage}
      totalNumPages={props.totalNumPages}
      totalNumResults={props.totalNumResults}
      onSort={props.onSort}
      isLoading={props.isLoading}
      loader={<Loader />}
      pageSizeOptions={[2, 3, 5]}
      canSortMultipleColumns
    />
  </SamplePage>
)
