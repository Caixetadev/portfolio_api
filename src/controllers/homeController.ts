import { Request, Response } from "express";
import Projects from "../models/projects";

export const Home = async (req: Request, res: Response) => {
  try {
    const products = await Projects.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const HomePost = async (req: Request, res: Response) => {
  const { name, date, image, description } = req.body;

  const projects = {
    name,
    date,
    image,
    description,
  };

  try {
    await Projects.create(projects);

    res.status(200).json({ message: "Projeto criado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const HomeDelete = async (req: Request, res: Response) => {
  const id = req.params.id;

  const project = await Projects.findOne({ _id: id });

  if (!project) {
    res.status(422).json({ message: "O projeto não foi encontrado" });
    return;
  }

  try {
    await Projects.deleteOne({ _id: id });

    res.status(200).json({ message: "Projeto removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const HomeUpdate = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, date, image, description } = req.body;

  const project = {
    name,
    date,
    image,
    description,
  };

  try {
    const updateProject = await Projects.updateOne({ _id: id }, project);

    if (updateProject.matchedCount === 0) {
      res.status(422).json({ message: "Projeto não encontrado" });
      return;
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
