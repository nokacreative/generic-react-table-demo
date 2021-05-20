import { Link } from 'react-router-dom'
import { database } from '../../assets/database'
import { ROUTES } from '../../assets/routes'
import {
  TableColumn,
  DataType,
  FilterType,
  CustomFilterType,
} from '@nokacreative/generic-react-table'
import { MasterModel } from '../../domain/master.model'
import { PersonModel } from '../../domain/person.model'

export const columns: TableColumn<MasterModel>[] = [
  {
    propertyPath: 'plainText',
    headerText: 'Plain Text (Num sort)',
    type: DataType.PLAIN_TEXT,
    filterType: FilterType.PARTIAL_MATCH,
    isSortable: true,
    defaultWidth: '100px',
    sortAccessor: (row: MasterModel) => parseInt(row.plainText.slice(1)),
  },
  {
    propertyPath: 'richText',
    headerText: 'Rich Text',
    type: DataType.RICH_TEXT,
    isResizable: true,
  },
  {
    propertyPath: 'relation',
    headerText: 'Relation (Age match)',
    type: DataType.RELATION,
    relatedDataList: database.people,
    isResizable: true,
    render: (relatedData: PersonModel) => (
      <>
        <Link to={ROUTES.personDetails(relatedData.id)}>{relatedData.name}</Link>
        <br />
        <small>Age: {relatedData.age}</small>
      </>
    ),
    searchMatcher: (
      _row: MasterModel,
      searchTerm: string,
      relatedDataItem: PersonModel
    ) => relatedDataItem.name.toLowerCase().includes(searchTerm),
    filter: {
      type: CustomFilterType.NUMBER,
      isRanged: true,
      matcher: (
        min: number | '',
        max: number | '',
        _row: MasterModel,
        relatedDataItem: PersonModel
      ) =>
        (min ? relatedDataItem.age >= min : true) &&
        (max ? relatedDataItem.age <= max : true),
    },
  },
  {
    propertyPath: 'date.min',
    headerText: 'Date (Min Filter)',
    type: DataType.DATE,
    filterType: FilterType.MINIMUM,
    isSortable: true,
  },
  {
    propertyPath: 'date.max',
    headerText: 'Date (Max Filter)',
    type: DataType.DATE,
    filterType: FilterType.MAXIMUM,
    showTime: true,
    defaultWidth: 'max-content',
    isSortable: true,
  },
  {
    propertyPath: 'date.exact',
    headerText: 'Date (Exact Filter)',
    type: DataType.DATE,
    filterType: FilterType.EXACT_MATCH,
    showTime: true,
    showSeconds: true,
    defaultWidth: 'max-content',
    isSortable: true,
  },
  {
    propertyPath: 'color',
    headerText: 'Color',
    type: DataType.COLOR,
    defaultWidth: '130px',
    filterIsMultiple: true,
  },
  {
    propertyPath: 'numberMin',
    headerText: 'Number (Min Filter)',
    type: DataType.NUMBER,
    filterType: FilterType.MINIMUM,
    isSortable: true,
  },
  {
    propertyPath: 'numberMax',
    headerText: 'Number (Max Filter)',
    type: DataType.NUMBER,
    filterType: FilterType.MAXIMUM,
    isSortable: true,
  },
  {
    propertyPath: 'numberRanged',
    headerText: 'Number (Ranged Filter)',
    type: DataType.NUMBER,
    filterType: FilterType.RANGED,
    isSortable: true,
  },
  {
    propertyPath: 'moneyMin',
    headerText: 'Money (Min Filter)',
    type: DataType.MONEY,
    filterType: FilterType.MINIMUM,
    isSortable: true,
    defaultWidth: '115px',
  },
  {
    propertyPath: 'moneyMax',
    headerText: 'Money (Max Filter)',
    type: DataType.MONEY,
    filterType: FilterType.MAXIMUM,
    isSortable: true,
    defaultWidth: '115px',
  },
]
