
getStudents = (req, res, next) => {
  var query;
  if(req.query.name) {
    query = req.models.Student.find({name: req.query.name})
  }
  else
  {
    query = req.models.Student.find()
  }

  query.exec().then((student) => {
      return res.send(student);
    }).catch((error) => {
      next(error)
    })
}

getStudentById = (req, res, next) => {
  console.log(req.params._id);
  req.models.Student.findById(req.params._id,req.body)
    .then((student) => {
              return res.send(student);
          }).catch((error) => {
              next(error)
          })
}


postStudent = (req, res, next) => {
  req.models.Student.create({
    email: req.body.email,
    name: req.body.name,
    address: {
      gata: req.body.address.gata,
      postnummer: req.body.address.postnummer,
      ort: req.body.address.ort,
    }
  }).then((student) => {
    return res.status(201).send(student)
  }).catch((error) => {
    next(error)
  })
}

putStudent = (req, res, next) => {
  req.models.Student.updateOne({_id: req.params.studentId},
    {
          email: req.body.email,
          name: req.body.name,
          address: {
            gata: req.body.address.gata,
            postnummer: req.body.address.postnummer,
            ort: req.body.address.ort,
          },
      },
    {
      new: true,
      upsert: true,
      runvalidators: true,
    }).then((status) => {
      console.log("status: ", status)
      if (status.upserted)
        res.status(201)
      else if (status.nModified)
        res.status(200)
      else
        res.status(204)
    res.send()
    }).catch((error) => next(error))
}

deleteStudent = (req, res, next) => {
  req.models.Student.findByIdAndDelete(req.params._id).then((student)=> {
    if (student)
      return res.send(student).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}

module.exports = {
postStudent,
getStudents,
getStudentById,
putStudent,
deleteStudent
}
