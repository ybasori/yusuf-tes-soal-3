import React, { useState } from "react";

import Modal from "./components/Modal";
import "./App.scss";

const App = () => {
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    return (
        <div className="app">
            <div className="sidebar">
                <div className="app-name">JARI VISIBILITY</div>
                <div className="description">Team Jarvis Development</div>
                <div className="sparator"></div>
                <div className="menu">
                    <ul>
                        <li>
                            <i className="fas fa-chart-pie"></i> Dashboard
                        </li>
                        <li>
                            <i className="fas fa-chart-area"></i>Member Journey
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>Last
                            Location
                        </li>
                        <li>
                            <i className="fas fa-briefcase"></i>Customer
                        </li>
                        <li>
                            <i className="fas fa-edit"></i>Task
                        </li>
                        <li>
                            <i className="fas fa-sliders-h"></i>Configuration
                        </li>
                        <li>
                            <i className="fas fa-list-alt"></i>Report
                        </li>
                        <li>
                            <i className="fas fa-sign-out-alt"></i>Sign Out
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content">
                <div className="navbar">
                    <div className="lang"></div>
                    <div className="account">
                        <div className="photo">A</div>
                        Agus
                    </div>
                </div>
                <div className="page-name">Customer</div>
                <div className="action">
                    <button
                        className="btn-blue"
                        onClick={() => setIsModalAddOpen(true)}
                    >
                        Add
                    </button>
                    <button className="btn-green">Upload</button>

                    <form>
                        <input placeholder="Search Customer" />
                    </form>
                </div>

                <div className="datatable">
                    <button className="btn-orange btn-download">
                        Download Template
                    </button>
                </div>
            </div>
            {isModalAddOpen && (
                <Modal onClose={(bool) => setIsModalAddOpen(bool)}></Modal>
            )}
        </div>
    );
};

export default App;
