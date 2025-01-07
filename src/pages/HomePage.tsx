import React from "react";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";

const HomePage: React.FC = () => {
     return (
          <div>
               <h1>Student Management</h1>
               <StudentForm onSuccess={() => window.location.reload()} />
               <StudentList />
          </div>
     );
};

export default HomePage;
