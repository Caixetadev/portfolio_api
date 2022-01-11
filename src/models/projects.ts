import mongoose, { Schema } from "mongoose";

interface IProjects {
  name: string;
  image: string;
  description: string;
  language: {
    name: string;
    image: string
  }
}

const ProjectsSchema = new Schema<IProjects>({
  name: String,
  image: String,
  description: String,
  language: ,
});

const Projects = mongoose.model("Projects", ProjectsSchema);

export default Projects;
