import 'reflect-metadata'
import app from './app'
import {AppDataSource} from './db'

const port = 3000; // default port to listen

async function main(){
    try{
        await AppDataSource.initialize();
        // start the Express server
        app.listen( port, () => {
        console.log( `server started at http://localhost:${ port }` )}); 
    } catch(error){
        console.error(error)
    }
}

main();

