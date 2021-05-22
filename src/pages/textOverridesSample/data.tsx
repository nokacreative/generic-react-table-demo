import {
  TableColumn,
  DataType,
  CustomFilterType,
  MessageOverrides,
  FormatterOverrides,
} from '@nokacreative/generic-react-table'
import { registerLocale } from 'react-datepicker'
import fr from 'date-fns/locale/fr'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../assets/routes'
import { PersonModel } from '../../domain/person.model'
import { columns as baseColumns } from '../headerSample/data'

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
      placeholder: 'contient',
    },
  },
  ...baseColumns.slice(1),
]

registerLocale('fr', fr)

export const messageOverrides: MessageOverrides = {
  noData: (pluralEntityName?: string) => `il n'y a pas de ${pluralEntityName}`,
  noFilterResults: "Il n'y a aucun résultat pour les filtres donnés!",
  noSearchResults: "Il n'y a aucun résultat pour le terme de recherche donné!",
  filters: {
    moneySymbol: '€',
    togglerButtonTooltip: 'Filtre',
    clearButtonTooltip: 'Effacer tous les filtres',
    placeholders: {
      genericFilter: 'Filtre',
      exactMatch: 'exactement',
      partialMatch: 'contient',
      dateRangeFrom: 'à partir de',
      dateRangeTo: 'à ce jour',
      dropdownSingle: 'unique',
      dropdownMultiple: 'plusieurs',
      numericExact: 'exact',
      numericRangeFrom: 'minimum',
      numericRangeTo: 'maximum',
    },
    datePicker: {
      dateFormat: 'dd MMMM yyyy',
      locale: 'fr',
    },
  },
  xResults: (x: number, pluralEntityName?: string) => `${x} ${pluralEntityName}`,
  showingXofYResults: (x: number, y: number, pluralEntityName?: string) =>
    `Affichage des ${pluralEntityName} ${x} sur ${y}`,
  resultsFilteredFrom: (from: number, pluralEntityName?: string) =>
    `(filtré à partir de ${from} ${pluralEntityName})`,
  searchTogglerButton: 'examiner',
}

export const formatterOverrides: FormatterOverrides = {
  date: (timeValue: number) =>
    new Date(timeValue).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  money: (value: number) => `€${value}`,
}
