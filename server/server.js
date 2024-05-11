import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import bodyParser from "body-parser";
import enquiry from './models/enquiry.js';
import cors from "cors"

dotenv.config()

const PORT = process.env.PORT || 7000

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB()

app.post("/enquiry", (request, response) => {
    const { name, email, phone, program, date } = request.body;
    const newEnquiry = new enquiry({
        name, email, phone, program, date,
    });

    newEnquiry
    .save()
    .then((enquiry) => response.json(enquiry))
    .catch((error) => console.log(error));
})

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )