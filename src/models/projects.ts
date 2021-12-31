import mongoose, { Schema } from "mongoose";

interface IProjects {
  name: string;
  date: string;
  image: string;
  description: string;
}

const ProjectsSchema = new Schema<IProjects>({
  name: String,
  date: String,
  image: String,
  description: String,
});

const Projects = mongoose.model("Projects", ProjectsSchema);

export default Projects;
