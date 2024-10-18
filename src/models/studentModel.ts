
export interface Student {
  id: number;
  name: string;
  email: string;
  age: number;
}

export interface CreateStudentRequest {
  name: string;
  email: string;
  age: number;
}

export interface UpdateStudentRequest {
  name?: string;
  email?: string;
  age?: number;
}
