import React, { useState } from 'react'

import { Table } from '@noka/generic-react-table'
import { GroupModel } from '../../domain/group.model'
import { UserModel } from '../../domain/user.model'
import { columns } from './data'
import { SamplePage } from '../../common/samplePage'

type Props = {
  users: UserModel[]
  groups: GroupModel[]
}

export const SelectionSampleView = ({ users, groups }: Props) => {
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true)

  function onUserSelected1(user: UserModel) {
    alert(`You have selected the user with ID ${user.id}, name ${user.userName}`)
  }

  function onUserSelected2(_: UserModel, allSelections: UserModel[]) {
    setButtonDisabled(allSelections.length === 0)
  }

  return (
    <SamplePage
      headerText="Row Selection Sample"
      description="A custom function can be called when a row is selected. The first table shows a one-off selection (eg. fire and forget)."
    >
      <Table
        pluralEntityName="users"
        columns={columns(groups)}
        data={users}
        onRowSelected={onUserSelected1}
      />
      <p>The selections can also be kept and toggled.</p>
      <Table
        pluralEntityName="users"
        columns={columns(groups)}
        data={users}
        onRowSelected={onUserSelected2}
        keepSelections
      />
      <button
        className="primary"
        disabled={isButtonDisabled}
        onClick={() => alert('Congrats!')}
      >
        {isButtonDisabled ? 'Enabled when selections exist' : 'Enabled'}
      </button>
    </SamplePage>
  )
}
