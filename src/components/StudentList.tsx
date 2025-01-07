import React, { useEffect, useState } from "react";
import { Student } from "../types/Student";
import {
     getAllStudents,
     deleteStudent,
} from "../services/studentService";
import StudentForm from "./StudentForm";

const StudentList: React.FC = () => {
     const [students, setStudents] = useState<Student[]>([]);
     const [editStudent, setEditStudent] = useState<Student | null>(null);

     const fetchStudents = async () => {
          const data = await getAllStudents();
          setStudents(data);
     };

     useEffect(() => {
          fetchStudents();
     }, []);

     const handleDelete = async (id: string) => {
          await deleteStudent(id);
          fetchStudents();
     };

     const handleEdit = (student: Student) => {
          setEditStudent(student);
     };

     return (
          <div>
               <h2>Student List</h2>
               {editStudent && (
                    <StudentForm
                         student={editStudent}
                         onSuccess={() => {
                              setEditStudent(null);
                              fetchStudents();
                         }}
                    />
               )}
               <ul>
                    {students.map((student) => (
                         <li key={student.id}>
                              {student.name} ({student.email})
                              <button onClick={() => handleEdit(student)}>Edit</button>
                              <button onClick={() => handleDelete(student.id!)}>Delete</button>
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default StudentList;
