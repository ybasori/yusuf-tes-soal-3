import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./components/Modal";
import "./Home.scss";
import {
    getCustomer,
    addCustomer,
    resetAddCustomer,
    editCustomer,
    resetEditCustomer,
    deleteCustomer,
    resetDeleteCustomer,
} from "./_redux/customer";

const Home = () => {
    const dispatch = useDispatch();
    const { customer: customerState } = useSelector((state) => state);
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [form, setForm] = useState({
        code: "",
        name: "",
        email: "",
        status: "",
    });
    const [editForm, setEditForm] = useState({
        id: "",
        code: "",
        name: "",
        email: "",
        status: "",
    });
    const [deleteId, setDeleteId] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSubmitEdit, setIsSubmitEdit] = useState(false);
    const [isSubmitDelete, setIsSubmitDelete] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
    };
    const onSubmitEdit = (e) => {
        e.preventDefault();
        setIsSubmitEdit(true);
    };
    useEffect(() => {
        if (isSubmit) {
            dispatch(addCustomer(form));
        }
    }, [isSubmit]);
    useEffect(() => {
        if (isSubmitEdit) {
            dispatch(editCustomer(editForm));
        }
    }, [isSubmitEdit]);
    useEffect(() => {
        if (isSubmitDelete) {
            dispatch(deleteCustomer(deleteId));
        }
    }, [isSubmitDelete]);

    useEffect(() => {
        if (customerState.successAddCustomer) {
            setIsSubmit(false);
            setIsModalAddOpen(false);
            dispatch(getCustomer());
            dispatch(resetAddCustomer());
        }
    }, [customerState.successAddCustomer]);

    useEffect(() => {
        if (customerState.successEditCustomer) {
            setIsSubmitEdit(false);
            setIsModalEditOpen(false);
            dispatch(getCustomer());
            dispatch(resetEditCustomer());
        }
    }, [customerState.successEditCustomer]);

    useEffect(() => {
        if (customerState.successDeleteCustomer) {
            setIsSubmitDelete(false);
            setIsModalDeleteOpen(false);
            dispatch(getCustomer());
            dispatch(resetDeleteCustomer());
        }
    }, [customerState.successDeleteCustomer]);

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
                    <div className="menu">
                        <button className="btn-orange btn-download">
                            Download Template
                        </button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>Code</td>
                                <td>Name</td>
                                <td>E mail</td>
                                <td>Status</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {customerState.customer &&
                                customerState.customer.map((data, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.code}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.status}</td>
                                        <td>
                                            <button
                                                className="btn-small"
                                                type="button"
                                                onClick={() => {
                                                    setIsModalEditOpen(true);
                                                    setEditForm({ ...data });
                                                }}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                                className="btn-small"
                                                type="button"
                                                onClick={() => {
                                                    setIsModalDeleteOpen(true);
                                                    setDeleteId(data.id);
                                                }}
                                            >
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalAddOpen && (
                <Modal onClose={(bool) => setIsModalAddOpen(bool)}>
                    <form onSubmit={onSubmit}>
                        <div>Add Customer</div>
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
            {isModalEditOpen && (
                <Modal onClose={(bool) => setIsModalEditOpen(bool)}>
                    <form onSubmit={onSubmitEdit}>
                        <div>Edit Customer</div>
                        <input
                            placeholder="code"
                            name="code"
                            onChange={(e) =>
                                setEditForm({
                                    ...editForm,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                            value={editForm.code}
                            required
                        />
                        <input
                            placeholder="name"
                            name="name"
                            onChange={(e) =>
                                setEditForm({
                                    ...editForm,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                            value={editForm.name}
                            required
                        />
                        <input
                            placeholder="email"
                            name="email"
                            onChange={(e) =>
                                setEditForm({
                                    ...editForm,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                            value={editForm.email}
                            required
                        />
                        <input
                            placeholder="status"
                            name="status"
                            onChange={(e) =>
                                setEditForm({
                                    ...editForm,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                            value={editForm.status}
                            required
                        />
                        <button type="submit">submit</button>
                    </form>
                </Modal>
            )}
            {isModalDeleteOpen && (
                <Modal onClose={(bool) => setIsModalDeleteOpen(bool)}>
                    <>
                        <div>Delete Customer</div>
                        <div>Are you sure?</div>
                        <button onClick={() => setIsSubmitDelete(true)}>
                            Yes
                        </button>
                        <button onClick={() => setIsModalDeleteOpen(false)}>
                            No
                        </button>
                    </>
                </Modal>
            )}
        </div>
    );
};

export default Home;
