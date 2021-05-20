import { GroupModel } from '../domain/group.model'
import { PersonModel } from '../domain/person.model'
import { ProductModel } from '../domain/product.model'
import { TagModel } from '../domain/tag.model'
import { UserModel } from '../domain/user.model'

// Fake document DB
export interface Database {
  users: UserModel[]
  groups: GroupModel[]
  tags: TagModel[]
  products: ProductModel[]
  people: PersonModel[]
}

export const database: Database = {
  users: [
    {
      id: '1',
      userName: 'user1',
      displayName: 'User 1',
      dateJoined: new Date(2021, 1, 2, 8, 30, 22).getTime(),
      groupId: '1',
    },
    {
      id: '2',
      userName: 'user2',
      displayName: 'User 2',
      dateJoined: new Date(2021, 3, 15, 9, 50, 30).getTime(),
      groupId: '2',
    },
    {
      id: '3',
      userName: 'iHaveAName',
      displayName: 'Some Person',
      dateJoined: new Date(2021, 5, 1, 10, 15, 5).getTime(),
      groupId: '2',
    },
  ],
  groups: [
    {
      id: '1',
      name: 'Group 1',
      description: 'I exist',
    },
    {
      id: '2',
      name: 'Amazing group',
      description: "We're great join us.<br />Also we have an <b>actual name</b>",
    },
    {
      id: '3',
      name: 'Group three',
      description: '<i>Rich text</i> support',
    },
  ],
  tags: [
    {
      id: '1',
      name: 'Tag 1',
      color: 'red',
      description: 'I am a tag',
    },
    {
      id: '2',
      name: 'Tag 2',
      color: 'green',
      description: 'This tag is green',
    },
    {
      id: '3',
      name: 'Tag 3',
      color: 'blue',
      description: 'Great tag',
    },
  ],
  products: [
    {
      id: '1',
      name: 'Book',
      description: 'Random book',
      price: 30,
      dateAdded: new Date(2021, 1, 2, 8, 30, 22).getTime(),
    },
    {
      id: '2',
      name: 'Cheese',
      description: 'Very delicious',
      price: 75360.57,
      dateAdded: new Date(2021, 3, 30, 17, 28, 32).getTime(),
    },
    {
      id: '3',
      name: 'Mystery',
      description: 'Buy it',
      price: 20.99,
      dateAdded: new Date(2021, 4, 12, 10, 35, 53).getTime(),
    },
    {
      id: '4',
      name: 'Item 4',
      description: 'This is an item',
      price: 50,
      dateAdded: new Date(2021, 3, 30, 17, 28, 32).getTime(),
    },
    {
      id: '5',
      name: 'Item 5',
      description: 'Hurray',
      price: 50,
      dateAdded: new Date(2021, 3, 30, 17, 28, 32).getTime(),
    },
    {
      id: '6',
      name: 'Item 6',
      description: 'Commerce',
      price: 50,
      dateAdded: new Date(2021, 3, 30, 17, 28, 32).getTime(),
    },
  ],
  people: [
    {
      id: '1',
      name: 'John Doe',
      age: 30,
      dateOfBirth: new Date(1990, 9, 5).getTime(),
      favColor: 'blue',
      bio: 'Hi guys <b><i>I exist</i></b>',
      correspondingUserId: '1',
      income: 12345,
    },
    {
      id: '12',
      name: 'Jane Doe',
      age: 20,
      dateOfBirth: new Date(1993, 8, 3).getTime(),
      favColor: 'green',
      bio: 'Did not bother to match DoB to the age',
      correspondingUserId: '2',
      income: 85000,
    },
    {
      id: '23',
      name: 'Some Person',
      age: 53,
      dateOfBirth: new Date(1995, 4, 20).getTime(),
      favColor: 'pink',
      bio: 'asdf',
      correspondingUserId: '3',
      income: 2.99,
    },
  ],
}
