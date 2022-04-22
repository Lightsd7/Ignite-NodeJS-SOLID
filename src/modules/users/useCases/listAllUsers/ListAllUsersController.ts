import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.headers
      const listUsers = this.listAllUsersUseCase.execute({ user_id: String(user_id) })

      if (listUsers) {
        return response.json(listUsers)
      }
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}

export { ListAllUsersController };
