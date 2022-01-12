import mongoose, { Schema } from "mongoose";

interface IProjects {
  name: string;
  image: string;
  description: string;
  language: string;
  language2: string;
  icons: {
    icon: string;
    icon2: string
  };
}

const ProjectsSchema = new Schema<IProjects>({
  name: String,
  image: String,
  description: String,
  language: String,
  language2: String,
  icons: Object,
});

const Projects = mongoose.model("Projects", ProjectsSchema);

export default Projects;
