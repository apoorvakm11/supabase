// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://your-supabase-url.supabase.co';
// const supabaseKey = 'https://yszhdlbvftqiulebdzcv.supabase.co';
// const supabaseSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzemhkbGJ2ZnRxaXVsZWJkemN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MDUxNTQsImV4cCI6MjA1MDI4MTE1NH0.eBvJCjWABPLecGclmV0kxifuz1OvN0jwXPx2odmITBI';
// const supabase = createClient(supabaseUrl, supabaseKey, supabaseSecret);

// const App = () => {
//   const [users, setusers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredusers, setFilteredusers] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const { data, error } = await supabase
//         .from('users')
//         .select('*');
//       if (error) {
//         console.error(error);
//       } else {
//         setStudents(data);
//       }
//     };
//     fetchStudents();
//   }, []);

//   useEffect(() => {
//     const filtered = users.filter((users) => {
//       return (
//         student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         student.cohort.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     });
//     setFilteredStudents(filtered);
//   }, [searchTerm, students]);

//   return (
//     <BrowserRouter>
//       <div className="flex flex-col h-screen">
//         <Header />
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/students" element={<Students students={filteredStudents} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/settings" element={<Settings />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// const Header = () => {
//   return (
//     <div className="bg-blue-500 text-white p-4">
//       <h1 className="text-3xl font-bold">Student Management</h1>
//     </div>
//   );
// };

// const Navigation = () => {
//   return (
//     <div className="bg-gray-200 p-4 flex justify-between">
//       <Link to="/" className="text-blue-500 hover:text-blue-700">
//         Dashboard
//       </Link>
//       <Link to="/students" className="text-blue-500 hover:text-blue-700">
//         Students
//       </Link>
//       <Link to="/reports" className="text-blue-500 hover:text-blue-700">
//         Reports
//       </Link>
//       <Link to="/settings" className="text-blue-500 hover:text-blue-700">
//         Settings
//       </Link>
//     </div>
//   );
// };

// const Dashboard = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold">Dashboard</h1>
//     </div>
//   );
// };

// const Students = ({ students, searchTerm, setSearchTerm }) => {
//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold">Students</h1>
//       <input
//         type="search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search by course or cohort"
//         className="w-full p-2 mb-4 border border-gray-400 rounded-lg"
//       />
//       <table className="w-full table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Student Name</th>
//             <th className="px-4 py-2">Course</th>
//             <th className="px-4 py-2">Cohort</th>
//             <th className="px-4 py-2">Date Joined</th>
//             <th className="px-4 py-2">Last Login Date and Time</th>
//             <th className="px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((users) => (
//             <tr key={users.id}>
//               <td className="px-4 py-2">{users.name}</td>
//               <td className="px-4 py-2">{users.course}</td>
//               <td className="px-4 py-2">{users.cohort}</td>
//               <td className="px-4 py-2">{users.date_joined}</td>
//               <td className="px-4 py-2">{users.last_login}</td>
//               <td className="px-4 py-2">
//                 {users.status === 'active' ? (
//                   <span className="bg-green-500 text-white p-2 rounded-lg">Active</span>
//                 ) : (
//                   <span className="bg-red-500 text-white p-2 rounded-lg">Not Active</span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const Reports = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold">Reports</h1>
//     </div>
//   );
// };

// const Settings = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold">Settings</h1>
//     </div>
//   );
// };

// export default App;






















import React, { useState, useEffect } from 'react';
import { supabase } from './createClient';
import './App.css';
import './index.css';



const App = () => {
  const [users, setUsers] = useState([]);
  
  const [user, setUser] = useState({
    StudentName: '',
    cohorent: '',
    courses: '',
    dateJoined: null,
    lastLogin: null,
    status: ''
  });

  console.log(user)

  const [user2, setUser2] = useState({
    StudentName: '',
    cohorent: '',
    courses: '',
    dateJoined: null,
    lastLogin: null,
    status: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data, error } = await supabase.from('users').select('*');
    if (error) console.error('Error fetching users:', error);
    else setUsers(data || []);
  }

  function handleChange(event) {
    
    setUser(prevFormData=>{
      return{
         ...prevFormData,
         [event.target.name]: event.target.value || null
       }
      
    } );
  }

  function handleChange2(event) {
    const { name, value } = event.target;
    setUser2((prev) => ({ ...prev, [name]: value || null }));
  }

  async function createUser() {

    await supabase
    .from('users')
    .insert({StudentName:users.StudentName,
      cohorent: users.cohorent,
      courses: users.courses,
      dateJoined: users.dateJoined,
      lastLogin: users.lastLogin,
      status: users.status
    })
 

  }

  async function deleteUser(StudentName) {
    const { error } = await supabase.from('users').delete().eq('StudentName', StudentName);
    if (error) console.error('Error deleting user:', error);
    else fetchUsers();
  }

  function displayUser(StudentName) {
    const selectedUser = users.find((u) => u.StudentName === StudentName);
    if (selectedUser) {
      setUser2(selectedUser);
    }
  }

  async function updateUser(event) {
    event.preventDefault();
    const { error } = await supabase
      .from('users')
      .update(user2)
      .eq('StudentName', user2.StudentName); // Match based on unique field
    if (error) console.error('Error updating user:', error);
    else fetchUsers();
  }


  return (
    <div>
      {/* Create User Form */}
      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="StudentName"
          name='StudentName'
          value={user.StudentName}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="cohorent"
          name='cohorent'
          value={user.cohorent}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="courses"
          name='courses'
          value={user.courses}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="dateJoined"
          name='dateJoined'
          value={user.dateJoined}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Last Login"
          name='lastLogin'
          value={user.lastLogin}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Status"
          name='status'
          value={user.status}
          onChange={handleChange}
        />
        <button type='submit'>Add New Student</button>
      </form>

      {/* Edit User Form */}
      <form>
        <input
          type="text"
          name="StudentName"
          value={user2.StudentName}
          onChange={handleChange2}
          placeholder="Student Name"
        />
        <input
          type="number"
          name="cohorent"
          value={user2.cohorent}
          onChange={handleChange2}
          placeholder="Cohorent"
        />
        <input
          type="text"
          name="courses"
          value={user2.courses}
          onChange={handleChange2}
          placeholder="Courses"
        />
        <input
          type="date"
          name="dateJoined"
          value={user2.dateJoined}
          onChange={handleChange2}
          placeholder="Date Joined"
        />
        <input
          type="date"
          name="lastLogin"
          value={user2.lastLogin}
          onChange={handleChange2}
          placeholder="Last Login"
        />
        <input
          type="text"
          name="status"
          value={user2.status}
          onChange={handleChange2}
          placeholder="Status"
        />
        <button type="button" onClick={updateUser}>Save Changes</button>

      </form>

      {/* Display Users */}
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Cohorent</th>
            <th>Courses</th>
            <th>Date Joined</th>
            <th>Last Login</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.StudentName}>
              <td>{user.StudentName}</td>
              <td>{user.cohorent}</td>
              <td>{user.courses}</td>
              <td>{user.dateJoined}</td>
              <td>{user.lastLogin}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => deleteUser(user.StudentName)}>Delete</button>
              </td>
              <td>
                <button onClick={() => displayUser(user.StudentName)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
