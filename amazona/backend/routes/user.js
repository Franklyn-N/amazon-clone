import express from "express";
import userController from "../controllers/user.js";
// import { body } from "express-validator";
// import User from "../models/user.js";

const userRouter = express.Router();

userRouter.get("/", userController.getUser);

userRouter.get("/add-user", userController.createUser);

userRouter.post(
  "/register",
//   [
//     body("email")
//       .isEmail()
//       .custom((value) => {
//         return User.findOne({ email: value }).then((userDoc) => {
//           if (userDoc) {
//             return Promise.reject("Email already exists!");
//           }
//         });
//       })
//       .body("confirmPassword")
//       .custom((value, { req }) => {
//         if (value !== req.body.password) {
//           throw new Error("Password mismatch!");
//         }
//         return true;
//       }),
//   ],
  userController.register
);

userRouter.post("/signin", userController.login);

export default userRouter;
