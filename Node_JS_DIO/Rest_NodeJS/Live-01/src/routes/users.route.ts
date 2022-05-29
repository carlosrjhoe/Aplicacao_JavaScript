import { Router } from "express";

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
  res.status(200).send({users});
})

userRouter.get('/users/:uuid', (req, res, next) => {
  const uuid = req.params.uuid;
  res.status(200).send({ uuid });
});

export default userRouter;

