 import Home from "./pages/Home";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentRegistration from "./pages/StudentRegistration";
import TeacherRegistration from './pages/TeacherRegistration'
import TeacherLogin from "./pages/TeacherLogin";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import Fee from "./components/Fee";
import AttendenceMarking from './Teacher/AttendenceMarking'

function App() {
  return (
    < >
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/studentlogin" element={<StudentLogin />}/>
        <Route path="/teacherlogin" element={<TeacherLogin />}/>

        <Route path="/studentregistration" element={<StudentRegistration />}/>
        <Route path="/teacherregistration" element={<TeacherRegistration />}/>

//after teacher login //
        <Route path="/teacherdashboard" element={<TeacherDashboard />}/>
        <Route path="/fee" element={<Fee />}/>
        <Route path="/attendencemarking" element={<AttendenceMarking/>}/>



      </Routes>
    </BrowserRouter>
    <Footer/>
    
    </>
  );
}

export default App;
