const models = require("../data/models");

const jobModel = models.Job;

const getJobs = async () => {
  try {
    let jobs = await jobModel.findAll();
    // console.log(jobs);
    return {
      success: true,
      data: jobs,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(jobs)));
  }
};

const createJob = async (job) => {
  // console.log(job);
  try {
    let newJob = await jobModel.create(job);
    return {
      success: true,
      data: newJob,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(newJob)));
  }
};

module.exports = {
  getJobs,
  createJob,
};
