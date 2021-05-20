import React from 'react'

import { Table } from '@noka/generic-react-table'
import { columns } from './data'
import { SamplePage } from '../../common/samplePage'
import { database } from '../../assets/database'

export const ProductsTable = () => {
  return (
    <SamplePage
      headerText="Minimum Number of Rows and Paging Sample"
      description={
        <>
          <p>
            A minimum number of rows forces the table to have a minimum number of rows--5
            in this case. Useful for keeping the table a consistent length when paging.
          </p>
          <p>
            Page size options are customizable. The dropdown will not show up if size
            options are not given.
          </p>
          The Money column type and number of results text is also shown here.
        </>
      }
    >
      <Table
        pluralEntityName="products"
        columns={columns}
        data={database.products}
        minNumRows={5}
        showResultCount
        usePaging
        defaultPageSize={5}
        pageSizeOptions={[1, 2, 5, 10]}
      />
    </SamplePage>
  )
}
