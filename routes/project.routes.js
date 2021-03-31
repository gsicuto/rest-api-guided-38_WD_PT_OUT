const { Router } = require('express');

const projectRepo = require('../repository/projects.dao');

const router = Router();

router.get('/list', async (req, res) => {
  try {
    const projects = await projectRepo.getAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error while get projects' });
  }
});

router.post('/', async (req, res) => {
  const { title, presentation } = req.body;
  try {
    const newProject = await projectRepo.create({ title, presentation });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Error While create new Project' });
  }
});

module.exports = router;
