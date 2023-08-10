import mongoose from 'mongoose';

const  Connection = async(username,password) => {

    const URL = `mongodb://${username}:${password}@ac-5yjwtrd-shard-00-00.lfo8nry.mongodb.net:27017,ac-5yjwtrd-shard-00-01.lfo8nry.mongodb.net:27017,ac-5yjwtrd-shard-00-02.lfo8nry.mongodb.net:27017/?ssl=true&replicaSet=atlas-k7gz98-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await  mongoose.connect(URL,{ useNewUrlParser: true });
       console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database',error); 
    }
}

export default Connection;