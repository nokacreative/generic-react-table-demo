import React from 'react'

import { Table } from '@nokacreative/generic-react-table'
import { columns } from './columns'
import { data } from './data'
import { SamplePage } from '../../common/samplePage'

export const MasterSample = () => {
  return (
    <SamplePage
      headerText="Master Sample"
      description={
        <>
          <p>
            This demo contains all the column types, and all previously listed
            functionality (aside from row reordering). It also contains all filter types
            that were previously not shown.
          </p>
          All data is randomly generated.
        </>
      }
    >
      <Table
        columns={columns}
        data={data}
        isSearchable
        tableName="People"
        showResultCount
        showFilteredResultCount
        isFilterable
        usePaging
        defaultPageSize={5}
        pageSizeOptions={[3, 5, 10, 15, 20]}
        canReorderColumns
        numPinnedColumns={1}
      />
    </SamplePage>
  )
}
