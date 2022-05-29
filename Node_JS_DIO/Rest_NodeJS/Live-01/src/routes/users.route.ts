import { Router } from "express";
import { StatusCodes } from "http-status-codes";

// get/users
// get/users/:uuid
// post/users
// put/users/:uuid
// delete/users:uuid

const userRouter = Router();
userRouter.get('/users', (req, res, next) => {
  const users = [{
    userName: "Carlos Roberto"
  }];
  res.status(StatusCodes.OK).send({users});
})

userRouter.get('/users/:uuid', (req, res, next) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({ uuid });
});

userRouter.post('/users', (req, res, next) => {
  const newUser = req.body;
  console.log(req.body);
  res.status(StatusCodes.CREATED).send(newUser);
});

export default userRouter;

