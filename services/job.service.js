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
    let newJob = await jobModel.create(job).catch((err) => {
      const error = new Error("Error creating job");
      error.status = 400;
      throw error;
    });
    console.log("createJob berhasil");
    return {
      success: true,
      status: 201,
      data: newJob,
    };
  } catch (err) {
    console.log("createJob gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getJobs,
  createJob,
};
