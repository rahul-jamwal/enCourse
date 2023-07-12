import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import NotFound from './components/Layout/NotFound/NotFound'
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast'
import { loadUser } from './Redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './components/Layout/Loader';



function App() {



  const { isAuthenticated, user, message, error, loading } = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])




  return <Router>
    {
      loading ? (<Loader />) : (

        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />

            <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Login /></ProtectedRoute>} />
            <Route path='/register' element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} >
                <Register />
              </ProtectedRoute>
            } />
            <Route path='/forgotPassword' element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                <ForgotPassword />
              </ProtectedRoute>
            } />
            <Route path='/resetPassword/:token' element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
              <ResetPassword />
            </ProtectedRoute>
            } />

            <Route path='/contact' element={<Contact />} />
            <Route path='/request' element={<Request />} />
            <Route path='/about' element={<About />} />

            <Route path='/subscribe' element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Subscribe user={user}/>
              </ProtectedRoute>
            } />
            <Route path='*' element={<NotFound />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfail" element={<PaymentFail />} />
            <Route path="/course/:id" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CoursePage user={user}/>
              </ProtectedRoute>
            } />

            <Route path="/profile" element={
              <ProtectedRoute isAuthenticated={isAuthenticated} >
                <Profile user={user} />
              </ProtectedRoute>
            } />
            <Route path="/changepassword" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ChangePassword />
              </ProtectedRoute>
            } />
            <Route path="/updateprofile" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UpdateProfile user={user} />
              </ProtectedRoute>
            } />

            {/* Admin Routes */}

            <Route path="/admin/dashboard" element={
              <ProtectedRoute isAuthenticated={isAuthenticated} adminRote={true} isAdmin={user && user.role === 'admin'}>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRote={true} isAdmin={user && user.role === 'admin'}>
              <Users />
            </ProtectedRoute>} />
            <Route path="/admin/createcourse" element={
              <ProtectedRoute isAuthenticated={isAuthenticated} adminRote={true} isAdmin={user && user.role === 'admin'}>
                <CreateCourse />
              </ProtectedRoute>
            } />
            <Route path="/admin/courses" element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRote={true} isAdmin={user && user.role === 'admin'}>
              <AdminCourses />
            </ProtectedRoute>} />
          </Routes>
          <Footer />
          <Toaster />
        </>

      )
    }
  </Router>
}
export default App;
