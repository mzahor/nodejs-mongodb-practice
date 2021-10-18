const { Router } = require("express");
const UserController = require("../controllers/User");

const router = Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/:id", UserController.findUserById);
router.delete("/:id", UserController.deleteUser);
router.patch("/:id", UserController.updateUser);

module.exports = router;
