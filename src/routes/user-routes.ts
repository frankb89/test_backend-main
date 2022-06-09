import { Router } from 'express';
import { createUser} from '../controllers/user.controllers';

const router = Router();

/** 
 * @swagger
 *
 * /create:
 *  post:
 *      summary: create a new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                              description: the name of the user
 *                          password:
 *                              type: string
 *                              description: the secret password for the user
 *                      required:
 *                          - username
 *                          - password
 *                      example:
 *                          username: "frankb89"
 *                          password: "SuperPassword"
 *      responses:
 *          200:
 *              description: the user succesfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: integer
 *                                  description: status code
 *                              message:
 *                                  type: string
 *                                  description: description message
 *                          example:
 *                              status: 200
 *                              message: "El usuario se creó correctamente"
 *          400:
 *              description: the user dont have username or password in the body
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: integer
 *                                  description: status code
 *                              message:
 *                                  type: string
 *                                  description: description message
 *                          example:
 *                              status: 400
 *                              message: "En el objeto no está las keys username o password, o el tipo username o password no son string"
 *          500:
 *              description: the user cant create
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: integer
 *                                  description: status code
 *                              message:
 *                                  type: string
 *                                  description: description message
 *                          example:
 *                              status: 500
 *                              message: El usuario no se creó
 * 
 * 
 *  
*/ 
   
router.post('/create', createUser);


export default router;