import { useParams } from 'react-router'
import { database } from '../../assets/database'
import { IdRouteParams } from '../../common/models'

export const PersonDetalis = () => {
  const { id } = useParams<IdRouteParams>()
  const person = database.people.find((p) => p.id === id)
  if (!person) {
    return <div>Could not find person</div>
  }
  return (
    <div>
      ID: {id} | Name: {person.name}
    </div>
  )
}
