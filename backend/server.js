import express from 'express';

const app = express();

app.listen(5000, () => {
    console.log("Server stated at http://localhost:5000");
});