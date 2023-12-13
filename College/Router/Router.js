import { Router } from "express";
import * as controller from '../Controller/Controller.js';
import Auth from "../middleware/Auth.js";


const router=Router();

// admmin
router.route("/addAdmin").post(controller.addAdmin);
router.route("/login").post(controller.login);
router.route("/home").get(Auth,controller.home);
// admmin


// staff
router.route("/staffregister").post(controller.addStaff);
router.route("/stafflogin").post(controller.staffLogin);
router.route("/staffhome").get(Auth,controller.staffHome);
router.route("/getstaffs").get(controller.getAllStaffs);
router.route("/delete/:id").delete(controller.removeStaff);
router.route("/staff/:id").get(controller.singleStaff);
router.route("/staffedit/:id").patch(controller.editStaff);
// staff



// student
router.route("/studentregister").post(controller.addStudent);
router.route("/studentlogin").post(controller.studentLogin);
// router.route("/studenthome").get(controller.studentHome);
router.route("/allstudents").get(controller.AllStudents);
router.route("/deletestudent/:id").delete(controller.removeStudent);
router.route("/student/:id").get(controller.singleStudent);
router.route("/studentedit/:id").patch(controller.editStudent);
// student



export default router;