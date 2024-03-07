import React from "react";
import { useState } from "react";
import profile from '../DashBord/profile.jpg'
import DashNav from "./DashNav";
import DashHeader from "./DashHeader";
function Profile() {
    const [isNavClosed, setIsNavClosed] = useState(false);

    const handleMenuClick = () => {
      setIsNavClosed((prevIsNavClosed) => !prevIsNavClosed);
    };
  
    return (
        <div> 
        <DashHeader handleMenuClick={handleMenuClick}/>
        <div class="main-dashbord">
            <DashNav isNavClosed={isNavClosed}/>
        <div className="Profile">
            <div className="information">
                <div className="image">
                    <img src={profile} className="img-profile" alt="profile pic"/>
                </div>
                <div className="description">
                    <h3>Scott Bryant</h3>
                    <h5>Lower back Exercise pain specialist</h5>
                    <h4>United Kingdom</h4>
                    <p>I am Looking for a web guy that know that they are doing for seo and web site  fixes</p>
                </div>
            </div>
            <div className="report-container">
            <div class="report-header">
            <h3>Client Information</h3>
                </div>
                <div className="report-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Info</th>
                                <th>Desc.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Services:</td>
                                <td>Web Devlpoer</td>
                            </tr>
                            <tr>
                                <td>Post Link:</td>
                                <td>click here to view original post</td>
                            </tr>
                            <tr>
                                <td>LinkedIn Id:</td>
                                <td>visit Scott Bryant's Profile</td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>Scott Bryant</td>
                            </tr>
                            <tr>
                                <td>Email Id:</td>
                                <td>scottbryant@gamil.com</td>
                            </tr>
                            <tr>
                                <td>Country:</td>
                                <td>United Kingdom</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}
export default Profile
