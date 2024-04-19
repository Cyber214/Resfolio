function deleteApplication
  Job.fidbyidanddelete(req.paramw.jobid)
  .then(job => {
    res.redirect('/jobs')
  })