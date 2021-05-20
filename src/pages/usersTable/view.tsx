import React from 'react'

import { Table } from '@nokacreative/generic-react-table'
import { GroupModel } from '../../domain/group.model'
import { UserModel } from '../../domain/user.model'
import { columns } from './data'
import { SamplePage } from '../../common/samplePage'

type Props = {
  users: UserModel[]
  groups: GroupModel[]
}

export const UsersTableView = ({ users, groups }: Props) => {
  return (
    <SamplePage
      headerText="Simple (static) Table Sample"
      description={
        <>
          <p>
            Plain text, date, and custom (link-rendering) columns are displayed here. Date
            columns can choose whether to display the time or not.
          </p>
          By default, columns will size themselves to be at least as large as the
          smallest-sized content. Column widths can be customized with any{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
            target="_blank"
            rel="noreferrer"
          >
            Grid Layout
          </a>{' '}
          property. In this example, the <em>Date Joined</em> column is given the largest
          possible size in regards to its content.
        </>
      }
    >
      <Table pluralEntityName="users" columns={columns(groups)} data={users} />
    </SamplePage>
  )
}
