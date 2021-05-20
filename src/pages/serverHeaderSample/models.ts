import { FilterMap } from '@noka/generic-react-table'
import { PersonModel } from '../../domain/person.model'

export interface ServerSearchParams {
  searchTerm: string
  filters: FilterMap<PersonModel>
}

export interface ServerResponse {
  people: PersonModel[]
  totalNumResults: number
}
