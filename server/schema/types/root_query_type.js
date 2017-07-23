const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyFields: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        // if user is signed in, then req.user exists
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
