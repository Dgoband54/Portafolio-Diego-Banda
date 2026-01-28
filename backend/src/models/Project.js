const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  repoLink: String,
  demoLink: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);