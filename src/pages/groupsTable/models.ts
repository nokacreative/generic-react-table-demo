import { GroupModel } from '../../domain/group.model'

export interface HydratedGroupModel extends GroupModel {
  numUsers: number
}
