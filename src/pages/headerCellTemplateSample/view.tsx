import React from 'react'
import { Table } from '@nokacreative/generic-react-table'

import './styles.scss'

import { SamplePage } from '../../common/samplePage'
import { database } from '../../assets/database'
import { columns, headerCellTemplate } from './data'

export const HeaderCellTemplateSample = () => (
  <SamplePage
    headerText="Header Cell Template Sample"
    description="A header cell template can be used to customize how the header looks. The sort indicator and filter is passed in to be placed wherever you desire."
  >
    <Table
      pluralEntityName="people"
      columns={columns}
      data={database.people}
      tableName="Custom Headers"
      showResultCount
      isFilterable
      headerCellTemplate={headerCellTemplate}
    />
  </SamplePage>
)
