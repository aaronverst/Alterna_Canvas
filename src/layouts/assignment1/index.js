/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/


// @mui icons
// Material Dashboard 2 React components

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import "./index.css"
// Data


function Overview() {
  return (
    <DashboardLayout>
      <div>
        <h1 className='app__header-h1'>Select From One of the options below</h1>
      </div>
      <nav className='app__navbar'>
        <ul className='app__navbar-links'>
          <div>
            <li className='p__opensans'><a href='#home'>Search The Canvas Guide</a></li>
          </div>
          <li className='p__opensans'><a href='#about'>IT @UC Knowledge Base</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#awards'>Awards</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </DashboardLayout>
  );
}

export default Overview;
