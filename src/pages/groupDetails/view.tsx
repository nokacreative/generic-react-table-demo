import { useParams } from 'react-router'
import { database } from '../../assets/database'
import { IdRouteParams } from '../../common/models'

export const GroupDetalis = () => {
  const { id } = useParams<IdRouteParams>()
  const group = database.groups.find((g) => g.id === id)
  if (!group) {
    return <div>Could not find group</div>
  }
  return (
    <div>
      ID: {id} | Name: {group.name}
    </div>
  )
}
