import {NextFunction, Request, Response} from 'express'

export interface IUsersController {
  login(req: Request, res: Response, next: NextFunction): Promise<void>
  join(req: Request, res: Response, next: NextFunction): Promise<void>
  info(req: Request, res: Response, next: NextFunction): Promise<void>
}
