import { ApolloServer } from '@apollo/server';
import {User} from './user/index'

async function createApolloGraphServer(){
    const gqlServer = new ApolloServer({
        typeDefs:`
        type Query{
        hello:String 
        }
        type Mutation{
         ${User.Mutation}
        }
        
        `,
        resolvers:{
            Query:{
            ...User.resolvers.queries,
            },
            Mutation:{
               ...User.resolvers.mutations,
            
            }
        }
    });
    await gqlServer.start();
    return gqlServer;
}
export default createApolloGraphServer;