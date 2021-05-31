import { DataType, FilterType, TableColumn } from '@nokacreative/generic-react-table'
import { PersonModel } from '../../domain/person.model'

export const headerCellTemplate = (
  headerText: string,
  columnDefinition: TableColumn<PersonModel>,
  sortIndicator: JSX.Element | undefined,
  onSort: (() => void) | undefined,
  filter: JSX.Element | undefined
) => (
  <div className="custom-header">
    <div onClick={onSort}>
      {sortIndicator}
      <span className={`header-text ${columnDefinition.isSortable ? 'sortable' : ''}`}>
        {headerText}
      </span>
    </div>
    <div className="filter-section">{filter && <>FILTER! {filter}</>}</div>
  </div>
)

export const columns: TableColumn<PersonModel>[] = [
  {
    propertyPath: 'id',
    headerText: 'ID',
    type: DataType.PLAIN_TEXT,
    defaultWidth: '100px',
    isSortable: true,
  },
  {
    propertyPath: 'name',
    headerText: 'Name',
    type: DataType.PLAIN_TEXT,
    filterType: FilterType.EXACT_MATCH,
    isSortable: true,
  },
  {
    propertyPath: 'age',
    headerText: 'Age',
    type: DataType.NUMBER,
    defaultWidth: '100px',
    filterType: FilterType.MINIMUM,
    isSortable: true,
  },
  {
    propertyPath: 'dateOfBirth',
    headerText: 'Date of Birth',
    type: DataType.DATE,
    defaultWidth: '160px',
    filterType: FilterType.EXACT_MATCH,
    isSortable: true,
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
    isSortable: true,
  },
  {
    propertyPath: 'bio',
    headerText: 'Bio',
    type: DataType.RICH_TEXT,
    defaultWidth: 'minmax(220px, 2fr)',
  },
]
