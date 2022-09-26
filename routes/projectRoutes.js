var express = require("express")
var router = express.Router();
let controller = require("../controller");

//retrieve projects route to projectController
router.get('/', (req, res) => {
    controller.projectController.retrieveProjects(req,res)
})

//create projects route to projectController
router.post('/', (req, res) => {
    controller.projectController.createProjects(req,res)
})

module.exports = router; 
