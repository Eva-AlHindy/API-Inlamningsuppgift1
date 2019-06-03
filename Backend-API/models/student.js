mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: String,
  name : String,
  address: {
     gata: String,
     postnummer:Number,
     ort: String
     }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
