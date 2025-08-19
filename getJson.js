import {readFile} from 'fs/promises';

export default async function readJsonFile(file){

    try{

        const rawData = await readFile(file , 'utf8');
        const data = JSON.parse(rawData);

        return data;

    }catch(err){
        console.error(err);
    }

}
