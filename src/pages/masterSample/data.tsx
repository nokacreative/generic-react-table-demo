import { database } from '../../assets/database'
import { MasterModel } from '../../domain/master.model'
import { countries } from './countries'

// ====================================================================== //
// Utils
// ====================================================================== //

const MIN_RANDOM_DATE = new Date(1990, 1, 1).getTime()
const MAX_RANDOM_DATE = new Date().getTime()

function generateRandomDate() {
  return new Date(
    MIN_RANDOM_DATE + Math.random() * (MAX_RANDOM_DATE - MIN_RANDOM_DATE)
  ).getTime()
}

const MIN_RANDOM_NUMBER = 0
const MAX_RANDOM_NUMBER = 1000

function generateRandomNumber() {
  const n = Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER) + MIN_RANDOM_NUMBER
  return Math.round((n + Number.EPSILON) * 100) / 100
}

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function pickRandomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ====================================================================== //
// Generation
// ====================================================================== //

const peopleIds = database.people.map((p) => p.id)

export const data: MasterModel[] = Array.from({ length: 30 }).map((_, i) => {
  const randomCountry = pickRandomFromArray(countries)
  return {
    plainText: `#${i + 1}`,
    richText: `<b>${randomCountry.name}</b><br /><small>${randomCountry.code}</small>`,
    relation: pickRandomFromArray(peopleIds),
    date: {
      min: generateRandomDate(),
      max: generateRandomDate(),
      exact: generateRandomDate(),
    },
    custom: '',
    numberMin: generateRandomNumber(),
    numberMax: generateRandomNumber(),
    numberRanged: generateRandomNumber(),
    moneyMin: generateRandomNumber(),
    moneyMax: generateRandomNumber(),
    color: generateRandomColor(),
  }
})
