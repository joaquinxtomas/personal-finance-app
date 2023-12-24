const express = require('express');
const app = express();
const port = 3000;

const appRouter = require('./src/routes/appRouter');

app.use('/', appRouter);

app.listen(port, () => {
  console.log(`server on in port http://localhost:${port}`);
});
