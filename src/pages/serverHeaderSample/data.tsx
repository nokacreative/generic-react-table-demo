import { Link } from 'react-router-dom'
import { database } from '../../assets/database'
import { ROUTES } from '../../assets/routes'
import { TableColumn, DataType, FilterType, CustomFilterType } from '@noka/generic-react-table'
import { PersonModel } from '../../domain/person.model'
import { UserModel } from '../../domain/user.model'

export const columns: TableColumn<PersonModel>[] = [
  {
    headerText: 'ID',
    type: DataType.CUSTOM,
    defaultWidth: '100px',
    render: (row: PersonModel) => <Link to={ROUTES.personDetails(row.id)}>{row.id}</Link>,
    searchMatcher: (row: PersonModel, searchTerm: string) => {
      const initials = row.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .toLowerCase()
      return initials.includes(searchTerm)
    },
    filter: {
      type: CustomFilterType.TEXT,
      matcher: (value: string, row: PersonModel) => row.id.includes(value),
      placeholder: 'Contains',
    },
  },
  {
    propertyPath: 'name',
    headerText: 'Name',
    type: DataType.PLAIN_TEXT,
    filterType: FilterType.EXACT_MATCH,
  },
  {
    propertyPath: 'age',
    headerText: 'Age',
    type: DataType.NUMBER,
    defaultWidth: '100px',
    filterType: FilterType.EXACT_MATCH,
  },
  {
    propertyPath: 'dateOfBirth',
    headerText: 'Date of Birth',
    type: DataType.DATE,
    defaultWidth: '160px',
    filterType: FilterType.RANGED,
  },
  {
    propertyPath: 'favColor',
    headerText: 'Favourite Colour',
    type: DataType.COLOR,
  },
  {
    propertyPath: 'income',
    headerText: 'Annual Income',
    type: DataType.MONEY,
    filterType: FilterType.RANGED,
  },
  {
    propertyPath: 'bio',
    headerText: 'Bio',
    type: DataType.RICH_TEXT,
    defaultWidth: 'minmax(220px, 2fr)',
  },
  {
    propertyPath: 'correspondingUserId',
    headerText: 'Corresponding User',
    type: DataType.RELATION,
    relatedDataList: database.users,
    render: (relatedData: UserModel) => (
      <Link to={ROUTES.userDetails(relatedData.id)}>{relatedData.userName}</Link>
    ),
    searchMatcher: (_row: PersonModel, searchTerm: string, relatedDataItem: UserModel) =>
      relatedDataItem.userName.toLowerCase().includes(searchTerm),
    filter: {
      type: CustomFilterType.DROPDOWN,
      options: [
        { text: 'In Group 1', value: '1' },
        { text: 'In Group 2', value: '2' },
      ],
      isMultiple: true,
      matcher: (value: string[], _row: PersonModel, relatedDataItem: UserModel) =>
        value.includes(relatedDataItem.groupId),
    },
  },
]
