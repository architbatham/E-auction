import './App.css';
import { Routes , Route } from 'react-router-dom';

import Header from './components/HeaderComponent/Header';
import Banner from './components/BannerComponent/Banner';
import Home from './components/HomeComponent/Home';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Footer from './components/FooterComponent/Footer';
import Adminhome from './components/AdminhomeComponent/Adminhome';
import Manageusers from './components/ManageusersComponent/Manageusers';
import Userhome from './components/UserhomeComponent/Userhome';
import Logout from './components/LogoutComponent/Logout';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import Addcategory from './components/AddcategoryComponent/Addcategory';
import Addsubcategory from './components/AddsubcategoryComponent/Addsubcategory';
import Viewproductcategory from './components/ViewProductCategoryComponent/Viewproductcategory';
import Viewproductsubcategory from './components/ViewProductSubCategoryComponent/Viewproductsubcategory';
import Addproduct from './components/AddproductComponent/Addproduct';
import Viewproduct from './components/ViewProductComponent/Viewproduct';
import Bidproduct from './components/BidproductComponent/Bidproduct';
import Viewbid from './components/ViewbidComponent/Viewbid';
import ViewbidProduct from './components/ViewbidProductComponent/ViewbidProduct';
import Verifyuser from './components/VerifyuserComponent/Verifyuser';

function App() {

  return (
    <>

      <Header />

      <Banner />

      <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/verify/:email" element={<Verifyuser />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/admin" element={<Adminhome />} ></Route>
      <Route path="/manageusers" element={<Manageusers />} ></Route>
      <Route path="/epadmin" element={<EPAdmin />} ></Route>
      <Route path="/cpadmin" element={<CPAdmin />} ></Route>
      <Route path="/addcategory" element={<Addcategory />} ></Route>
      <Route path="/addsubcategory" element={<Addsubcategory />} ></Route>
      <Route path="/user" element={<Userhome />} ></Route>
      <Route path="/viewpc" element={<Viewproductcategory />} ></Route>
      <Route path="/viewpsc/:catnm" element={<Viewproductsubcategory />} ></Route>
      <Route path="/viewp/:subcatnm" element={ <Viewproduct />} ></Route>
      <Route path="/bidp/:_id" element={ <Bidproduct />} ></Route>
      <Route path="/addproduct" element={<Addproduct />} ></Route>
      <Route path="/viewbidp" element={ <ViewbidProduct />} ></Route>
      <Route path="/viewbid/:p_id" element={<Viewbid />} ></Route>
      <Route path="/logout" element={<Logout />} ></Route>
      </Routes>      

      <Footer />

    </>
  );
}

export default App;
