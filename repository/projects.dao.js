const Project = require('../models/Project');

class ProjectRepository {
  constructor(ProjectModel) {
    this.project = ProjectModel;
  }

   getAll = async () => {
    try {
      const projects = await this.project.find()
        // .populate('students')
        // .populate('followUps');
      return projects
    } catch (error) {
      throw new Error();
    }
  };

   create = async (newProject) => {
    try {
      const createdProject = await this.project.create(newProject);
      return createdProject;
    } catch (error) {
      throw new Error()
    }
  }
}

module.exports = new ProjectRepository(Project)