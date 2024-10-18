// src/controllers/studentController.ts
import { Request, Response } from 'express';
import { StudentService } from '../services/studentService';
import { CreateStudentRequest, UpdateStudentRequest } from '../models/studentModel';

export class StudentController {
  constructor(private studentService: StudentService) {}

  async getAllStudents(req: Request, res: Response) {
    try {
      const students = await this.studentService.getAllStudents();
      res.render('index', { students });
    } catch (error) {
      res.status(500).send('Error fetching students');
    }
  }

  async getStudentById(req: Request, res: Response) {
    try {
      const student = await this.studentService.getStudentById(Number(req.params.id));
      if (student) {
        res.render('show', { student });
      } else {
        res.status(404).send('Student not found');
      }
    } catch (error) {
      res.status(500).send('Error fetching student');
    }
  }

  async createStudent(req: Request, res: Response) {
    try {
      const studentData: CreateStudentRequest = req.body;
      const student = await this.studentService.createStudent(studentData);
      res.redirect(`/students/${student.id}`);
    } catch (error) {
      res.status(500).send('Error creating student');
    }
  }

  async getEditStudent(req: Request, res: Response){
    const student = await this.studentService.getStudentById(Number(req.params.id));
    if (student) {
      res.render('edit', { student });
    } else {
      res.status(404).send('Student not found');
    }
  };

  async updateStudent(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const studentData: UpdateStudentRequest = req.body;
      const student = await this.studentService.updateStudent(id, studentData);

      if (student) {
        res.redirect(`/students/${student.id}`);
      } else {
        res.status(404).send('Student not found');
      }
    } catch (error) {
      res.status(500).send('Error updating student');
    }
  }

  async deleteStudent(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const deleted = await this.studentService.deleteStudent(id);
      if (deleted) {
        res.redirect('/students');
      } else {
        res.status(404).send('Student not found');
      }
    } catch (error) {
      res.status(500).send('Error deleting student');
    }
  }
}
