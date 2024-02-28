import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCircleCheck, faComments, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import DashHeader from "./DashHeader";
import DashNav from "./DashNav";
import { Link } from "react-router-dom";

function Dashboard() {
    const [isNavClosed, setIsNavClosed] = useState(false);

    const handleMenuClick = () => {
      setIsNavClosed((prevIsNavClosed) => !prevIsNavClosed);
    };
    return (
        <div>
            <DashHeader handleMenuClick={handleMenuClick}/>
            <div className="main-dashbord">
                <DashNav isNavClosed={isNavClosed}/>
        <div className="dash-info">
            <div class="box-container">

                <div class="box box1">
                    <div class="text">
                        <h2 class="topic-heading">60.5k</h2>
                        <h2 class="topic">Article Views</h2>
                    </div>
                    <FontAwesomeIcon icon={faEye} className='icn' />
                </div>

                <div class="box box2">
                    <div class="text">
                        <h2 class="topic-heading">150</h2>
                        <h2 class="topic">Likes</h2>
                    </div>
                    <FontAwesomeIcon icon={faThumbsUp} className='icn' />
                </div>

                <div class="box box3">
                    <div class="text">
                        <h2 class="topic-heading">320</h2>
                        <h2 class="topic">Comments</h2>
                    </div>
                    <FontAwesomeIcon icon={faComments} className='icn' />
                </div>

                <div class="box box4">
                    <div class="text">
                        <h2 class="topic-heading">70</h2>
                        <h2 class="topic">Published</h2>
                    </div>
                    <FontAwesomeIcon icon={faCircleCheck} className='icn' />
                </div>
            </div>

            <div class="report-container">
                <div class="report-header">
                    <h1 class="recent-Articles">Recent Articles</h1>
                    <button class="view">View All</button>
                </div>

                <div class="report-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Scott Bryant</td>
                                <td>Active</td>
                                <td><button className="btn1"><Link to="/profile">View</Link></button><button className="btn2">Delete</button></td>
                            </tr>
                            <tr>
                                <td>User2</td>
                                <td>Not Active</td>
                                <td><button className="btn1">View</button><button className="btn2">Delete</button></td>
                            </tr>
                            <tr>
                                <td>User3</td>
                                <td>Active</td>
                                <td><button className="btn1">View</button><button className="btn2">Delete</button></td>
                            </tr>
                            <tr>
                                <td>User4</td>
                                <td>Active</td>
                                <td><button className="btn1">View</button><button className="btn2">Delete</button></td>
                            </tr>
                            <tr>
                                <td>User5</td>
                                <td>Active</td>
                                <td><button className="btn1">View</button><button className="btn2">Delete</button></td>
                            </tr>
                            <tr>
                                <td>User6</td>
                                <td>Active</td>
                                <td><button className="btn1">View</button><button className="btn2">Delete</button></td>
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
export default Dashboard