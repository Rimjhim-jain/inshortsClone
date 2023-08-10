
import {data} from './constants/data.js';

import News from './model/news-schema.js'

const DefaultData = async() =>{
    try{
        await News.insertMany(data);
        console.log('Data imported succesfully');
    }catch(error){
        console.log('Faidemand Error: to stop duplicacy of data',error.message);
    }
}

export default DefaultData;