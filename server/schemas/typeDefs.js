const { gql } = require('apollo-server-express');

const typeDefs = gql`
    # Types
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username:String
        reactionCount: Int
        reactions: [Reaction]
    }

    #Inputs


    # Queries
    type Query {
        thoughts: [Thought]
    }

    # Mutations

    
`


module.exports = typeDefs;