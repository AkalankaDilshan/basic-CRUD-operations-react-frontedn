import React, { useState } from "react";
import { Student } from "../types/Student";
import { createStudent, updateStudent } from "../services/studentService";

interface StudentFormProps {
     student?: Student; // Optional for edit
     onSuccess: () => void; // Callback for successful submission
}

const StudentForm: React.FC<StudentFormProps> = ({ student, onSuccess }) => {
     const [formData, setFormData] = useState<Student>({
          name: student?.name || "",
          email: student?.email || "",
     });

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          if (student?.id) {
               await updateStudent(student.id, formData);
          } else {
               await createStudent(formData);
          }
          onSuccess();
     };

     return (
          <form onSubmit={handleSubmit}>
               <div>
                    <label>Name</label>
                    <input
                         type="text"
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         required
                    />
               </div>
               <div>
                    <label>Email</label>
                    <input
                         type="email"
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         required
                    />
               </div>
               <button type="submit">{student?.id ? "Update" : "Create"} Student</button>
          </form>
     );
};

export default StudentForm;
