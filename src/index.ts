import express from 'express';
import createApolloGraphServer from './graphql/index';
import {expressMiddleware} from '@apollo/server/express4';


async function init(){

const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.use(express.json())
app.get("/",(req,res)=>{
    console.log(`Server is up and running at port ${PORT}`);
    return res.status(200).json("Hello")
});
app.use('/graphql',expressMiddleware(await  createApolloGraphServer()),()=>{
    console.log("server is running on port 8080")
})
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});
}
init();