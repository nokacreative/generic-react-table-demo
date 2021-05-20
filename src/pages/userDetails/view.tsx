import { useParams } from 'react-router'
import { database } from '../../assets/database'
import { IdRouteParams } from '../../common/models'

export const UserDetalis = () => {
  const { id } = useParams<IdRouteParams>()
  const user = database.users.find((u) => u.id === id)
  if (!user) {
    return <div>Could not find user</div>
  }
  return (
    <div>
      ID: {id} | Name: {user.userName}
    </div>
  )
}
