// src/services/studentService.ts
import { Student, CreateStudentRequest, UpdateStudentRequest } from '../models/studentModel';

export class StudentService {
  private students: Student[] = [];
  private idCounter: number = 1;

  async getAllStudents(): Promise<Student[]> {
    return this.students;
  }

  async getStudentById(id: number): Promise<Student | null> {
    const student = this.students.find(student => student.id === id);
    return student || null;
  }

  async createStudent(data: CreateStudentRequest): Promise<Student> {
    const newStudent: Student = {
      id: this.idCounter++,
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  async updateStudent(id: number, data: UpdateStudentRequest): Promise<Student | null> {
    const studentIndex = this.students.findIndex(student => student.id === id);
    if (studentIndex === -1) return null;

    this.students[studentIndex] = { ...this.students[studentIndex], ...data };
    return this.students[studentIndex];
  }

  async deleteStudent(id: number): Promise<boolean> {
    const studentIndex = this.students.findIndex(student => student.id === id);
    if (studentIndex === -1) return false;

    this.students.splice(studentIndex, 1);
    return true;
  }
}
