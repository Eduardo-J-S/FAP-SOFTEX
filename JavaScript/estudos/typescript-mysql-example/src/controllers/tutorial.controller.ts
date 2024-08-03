import { Request, Response } from "express";
import TutorialRepository from "../repositories/tutorial.repository";
import Tutorial from "../models/tutorial.model";

class TutorialController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const tutorial: Tutorial = req.body;
      const newTutorial = await TutorialRepository.save(tutorial);
      return res.status(201).json(newTutorial);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar o tutorial" });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const searchParams = {
        title: req.query.title as string,
        published: req.query.published === "true",
      };
      const tutorials = await TutorialRepository.retrieveAll(searchParams);
      return res.json(tutorials);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar tutoriais" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const tutorialId = parseInt(req.params.id, 10);
      const tutorial = await TutorialRepository.retrieveById(tutorialId);
      if (tutorial) {
        return res.json(tutorial);
      } else {
        return res.status(404).json({ message: "Tutorial não encontrado" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar o tutorial" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const tutorialId = parseInt(req.params.id, 10);
      const tutorialData: Tutorial = req.body;
      const affectedRows = await TutorialRepository.update({
        ...tutorialData,
        id: tutorialId,
      });
      if (affectedRows > 0) {
        return res.json({ message: "Tutorial atualizado com sucesso" });
      } else {
        return res.status(404).json({ message: "Tutorial não encontrado" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar o tutorial" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const tutorialId = parseInt(req.params.id, 10);
      const affectedRows = await TutorialRepository.delete(tutorialId);
      if (affectedRows > 0) {
        return res.json({ message: "Tutorial excluído com sucesso" });
      } else {
        return res.status(404).json({ message: "Tutorial não encontrado" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro ao excluir o tutorial" });
    }
  }

  async deleteAll(req: Request, res: Response): Promise<Response> {
    try {
      const affectedRows = await TutorialRepository.deleteAll();
      return res.json({
        message: `${affectedRows} tutoriais excluídos com sucesso`,
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao excluir tutoriais" });
    }
  }
}

export default new TutorialController();
