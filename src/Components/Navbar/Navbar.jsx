import React from 'react';
import NavPromo from './navpromo/NavPromo';
import NavLogo from './navlogo/NavLogo';
import NavHelp from './navhelp/NavHelp';
import NavProducts from './navproducts/NavProducts';


const Navbar = () => {
  return (
    <div className='navbar'>
      <NavPromo/>
      <NavHelp/>
      <NavLogo/>
      <NavProducts/>
    </div>
  )
}

export default Navbar

