
import express from 'express';
import { StudentController } from '../controller/studentController';
import { StudentService } from '../services/studentService';

const router = express.Router();
const studentService = new StudentService();
const studentController = new StudentController(studentService);

router.get('/students', (req, res) => studentController.getAllStudents(req, res));
router.get('/students/new', (req, res) => res.render('new'));
router.get('/students/:id', (req, res) => studentController.getStudentById(req, res));
router.post('/students', (req, res) => studentController.createStudent(req, res));
router.get('/students/:id/edit', (req,res)=>studentController.getEditStudent(req,res))
router.post('/students/:id', (req, res) => studentController.updateStudent(req, res));
router.post('/students/:id/delete', (req, res) => studentController.deleteStudent(req, res));

export default router;
