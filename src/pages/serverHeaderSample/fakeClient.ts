import { database } from '../../assets/database'
import { PersonModel } from '../../domain/person.model'
import { ServerResponse, ServerSearchParams } from './models'

const FAKE_RESULT = (message: string): PersonModel[] => [
  {
    id: 'fake',
    name: 'From Server',
    age: 1000,
    dateOfBirth: new Date().getTime(),
    favColor: 'orange',
    bio: `${message} This fake result comes from the server.`,
    correspondingUserId: '1',
    income: 500,
  },
]

function searchPeople(params: ServerSearchParams) {
  return new Promise<ServerResponse>((resolve) => {
    setTimeout(() => {
      const fakeResult = (() => {
        const hasSearchTerm = params.searchTerm.length > 0
        const numFilters = Object.keys(params.filters).length
        const hasFilters = numFilters > 0
        if (hasSearchTerm && hasFilters) {
          return FAKE_RESULT(
            `You have searched for <b>"${params.searchTerm}"</b> and applied ${numFilters} filter(s)!`
          )
        }
        if (hasSearchTerm) {
          return FAKE_RESULT(`You have searched for <b>"${params.searchTerm}"</b>!`)
        }
        if (hasFilters) {
          return FAKE_RESULT(`You have applied ${numFilters} filter(s)!`)
        }
        return database.people
      })()
      resolve({
        people: fakeResult,
        totalNumResults: database.people.length,
      })
    }, 1000)
  })
}

export const fakeClient = {
  searchPeople,
}
