import { Router } from "express";

// get/users
// get/users/:uuid
// post/users
// put/users/:uuid
// delete/users:uuid

const userRouter = Router();
userRouter.get('/users', (req, res, next) => {
  const users = [{
    userName: "Carlos"
  }];
  res.status(200).json({users});
})

export default userRouter;