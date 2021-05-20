import React from 'react'
import { Table } from '@nokacreative/generic-react-table'

import './styles.scss'

import { database } from '../../assets/database'
import { columns } from './data'
import { SamplePage } from '../../common/samplePage'

const PopulatedTable = ({ id, name }: { id: string; name: string }) => (
  <Table
    pluralEntityName="tags"
    columns={columns}
    data={database.tags}
    tableName={name}
    usePaging
    pageSizeOptions={[1, 3]}
    defaultPageSize={3}
    showResultCount
    isSearchable
    isFilterable
    numPinnedColumns={1}
    id={id}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onRowSelected={() => {}}
    keepSelections
  />
)

export const StyleOverridesSample = () => (
  <SamplePage
    headerText="Style Overrides Sample"
    description={
      <>
        All colours are defined as CSS variables and scoped under the{' '}
        <code>noka-table-colors</code> class. By simply overriding that class&apos;s
        variables, the table&apos;s colours can be customized to your liking.
      </>
    }
  >
    <PopulatedTable name="Blue-Gray scheme" id="blue-gray-scheme" />
    <PopulatedTable name="Dark theme" id="dark-theme-table" />
  </SamplePage>
)
