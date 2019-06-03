const mongoose = require('mongoose')
const Student = require('./student.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/studentsDB"

const connectDb = () => {
       return  mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports = {
  connectDb,
  models: {
    Student
  }
}
