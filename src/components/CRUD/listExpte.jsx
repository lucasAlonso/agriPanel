import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table, Badge } from "reactstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ListBar = (props) => {
    return (
        <tr>
            <td>{props.expte.expte_name}</td>
            <td>{props.expte.expte_number}</td>
            <td>{props.expte.expte_date}</td>
            <td>
                {props.expte.expte_verification ? (
                    <Badge color="primary">Verified</Badge>
                ) : (
                    <Badge color="warning">Not Verified</Badge>
                )}
            </td>
            <td>
                <Link to={"/edit/" + props.expte._id}>
                    <AiOutlineEdit />
                </Link>
                <Link to={"/delete/" + props.expte._id}>
                    <AiOutlineDelete />
                </Link>
            </td>
        </tr>
    );
};

const ListExpte = () => {
    const [listData, setListData] = useState({ lists: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:4000/exptes/");
            setListData({ lists: result.data });
        };
        fetchData();
    }, []);

    return (
        <div>
            <h3>List Expte</h3>
            <Table striped style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Expte Name</th>
                        <th>Expte Number</th>
                        <th>Expte Date</th>
                        <th>Verification</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.lists.map((current, i) => (
                        <ListBar expte={current} key={i} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListExpte;
