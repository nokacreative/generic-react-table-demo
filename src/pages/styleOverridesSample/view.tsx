import React from 'react'
import { Table } from '@noka/generic-react-table'

import { database } from '../../assets/database'
import { columns } from './data'
import { SamplePage } from '../../common/samplePage'

export const StyleOverridesSample = () => (
  <SamplePage headerText="Style Overrides Sample" description="How to override styles.">
    <Table pluralEntityName="tags" columns={columns} data={database.tags} />
  </SamplePage>
)
