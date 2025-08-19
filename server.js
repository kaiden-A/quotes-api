import express from 'express';
import readJsonFile from './getJson.js';
import randomnize from './shuffle.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/api/quotes' ,async (req , res) => {

    const data = await readJsonFile('./json/quotes.js');
    
    const limit = req.query.limit || data.length;

    const array = randomnize(data , limit);
    res.json(array);
})

app.listen(PORT , ()=> {
    console.log('server is run at port ' + PORT);
})