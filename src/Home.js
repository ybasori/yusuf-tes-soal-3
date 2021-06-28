import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./components/Modal";
import "./Home.scss";
import { getCustomer } from "./_redux/customer";

const Home = () => {
    const dispatch = useDispatch();
    const { customer: customerState } = useSelector((state) => state);
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [form, setForm] = useState({
        code: "",
        name: "",
        email: "",
        status: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
    };
    useEffect(() => {
        if (customerState.customer === null) {
            dispatch(getCustomer());
        }
    }, [customerState.customer]);
    return (
        <div className="home">
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
                <Modal onClose={(bool) => setIsModalAddOpen(bool)}>
                    <form onSubmit={onSubmit}>
                        {JSON.stringify(form)}
                        <input
                            placeholder="code"
                            name="code"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                            required
                        />
                        <input
                            placeholder="name"
                            name="name"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                            required
                        />
                        <input
                            placeholder="email"
                            name="email"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                            required
                        />
                        <input
                            placeholder="status"
                            name="status"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                            required
                        />
                        <button type="submit">submit</button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default Home;
