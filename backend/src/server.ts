import express from 'express';

const app = express();

app.get('/', (request, response) => {
   return response.json({Message: 'Olá NLW'});
})

app.listen(3333, () => console.log('Server is running!'));