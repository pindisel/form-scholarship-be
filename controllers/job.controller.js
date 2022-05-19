const jobService = require("../services/job.service");

const getJobs = async (req, res) => {
  try {
    let jobs = await jobService.getJobs();
    res.send(jobs);
  } catch (err) {
    res.send(err);
  }
};

const getJob = async (req, res) => {
  try {
    let job = await jobService.getJob(req.params.id);
    res.send(job);
  } catch (err) {
    res.send(err);
  }
};

const createJob = async (req, res) => {
  try {
    let newJob = await jobService.createJob(req.body);
    res.send(newJob).status(newJob.status);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getJobs,
  createJob,
  getJob,
};
