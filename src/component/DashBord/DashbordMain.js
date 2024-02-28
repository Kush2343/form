import React from 'react';
import { useState } from 'react';
import '../DashBord/styled.css';
import Dashboard from './Dashbord';

function DashbordMain() {
    const [isNavClosed, setIsNavClosed] = useState(false);
    const handleMenuClick = () => {
      setIsNavClosed((prevIsNavClosed) => !prevIsNavClosed);
    };
	return (
		<Dashboard/>
	);
}
export default DashbordMain
