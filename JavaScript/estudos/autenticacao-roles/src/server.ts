import express from 'express'

const app = express();

app.listen(3333, () => {
    console.log("Running on port http://localhost:3333");
})