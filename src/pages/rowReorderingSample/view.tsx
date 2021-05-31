import React, { useState } from 'react'

import { Table } from '@nokacreative/generic-react-table'
import { columns } from './data'
import { SamplePage } from '../../common/samplePage'
import { database } from '../../assets/database'
import { ProductModel } from '../../domain/product.model'

export const RowReorderingSample = () => {
  const [currDetails, setCurrDetails] =
    useState<{ productName: string; fromIndex: number; toIndex: number }>()

  function onRowReordred(row: ProductModel, fromIndex: number, toIndex: number) {
    setCurrDetails({
      productName: row.name,
      fromIndex,
      toIndex,
    })
  }

  return (
    <SamplePage
      headerText="Row Reordering Sample"
      description={
        <>
          <p>
            Rows can be ordered. This order persists through paging, as well as searching
            and filtering. A callback function can be optionally specified whenever a row
            is sorted--in this sample, it outputs the reordering action that just occured
            at the bottom of the table.
          </p>
          <p>
            Note that rows cannot be rordered when any column is sortable, as that would
            result in undefined behaviour.
          </p>
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
        useRowReordering
        onRowReordered={onRowReordred}
        isSearchable
        tableName="Orderable rows"
      />
      {currDetails && (
        <p>
          The &quot;{currDetails.productName}&quot; product has been moved from index{' '}
          {currDetails.fromIndex} to {currDetails.toIndex}.
        </p>
      )}
    </SamplePage>
  )
}
