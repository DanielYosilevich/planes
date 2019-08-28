const typeDefs = `

input NewPlaneInput {
  type: String
  payload: String
}

input PlaneInput {
  id: Int
  type: String
  payload: String
}

input NewCustomerInput {
  first: String
  last: String
}

input NewOrderInput{
  plane_id: Int,
  customer_id: Int
}

type Plane {
  id: Int
  type: String
  payload: String
  updated_at: String
  created_at: String
}

type Customer {
  id: Int
  first: String
  last: String
  created_at: String
}

type Message {
  message: String
}

type Sold {
  plane_id: Int
  plane_type: String
  plane_payload: String
  customer_id: Int
  customer_first: String
  customer_last: String
}

# this schema allows the following query:
type Query {
  planes: [Plane] 
  customers: [Customer]
  solds: [Sold]
}
 
# this schema allows the following mutation:
type Mutation {
  addPlanesTable: Message
  removePlanesTable: Message
  addCustomersTable: Message
  removeCustomersTable: Message
  addPlane(plane: NewPlaneInput): Message
  removePlane(id: Int): Message
  updatePlane(plane: PlaneInput): Message 
  addCustomer(customer: NewCustomerInput): Message
  addSoldsTable: Message
  removeSoldsTable: Message
  makeOrder(order: NewOrderInput ): Message
}
 
# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
  mutation: Mutation
}
`;

module.exports = {
  typeDefs
}
