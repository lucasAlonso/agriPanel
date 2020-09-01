import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

const DeleteExpte = (props) => {
    const [data, setData] = useState({
        expte_name: "",
        expte_type: "",
        expte_number: "",
        expte_date: "",
        expte_descrition: "",
        expte_active: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:4000/exptes/${props.match.params.id}`);
            setData({ ...result.data });
        };
        fetchData();
    }, []);

    const onDeleteExpteData = (e) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:4000/exptes/delete/${props.match.params.id}`, data)
            .then((res) => console.log(res.data));
        props.history.push("/");
    };

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Delete Expte</h3>
            <Form onSubmit={onDeleteExpteData}>
                <FormGroup row>
                    <Col>
                        <Label>
                            <AiOutlineUser /> Expte Name{" "}
                        </Label>
                        <Input
                            readOnly
                            type="text"
                            name="expte_name"
                            className="form-control"
                            value={data.expte_name}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label>
                            <AiOutlineExport /> Address{" "}
                        </Label>
                        <Input
                            readOnly
                            type="text"
                            name="expte_type"
                            className="form-control"
                            value={data.expte_type}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label>
                            <AiOutlineExport /> Expte Number{" "}
                        </Label>
                        <Input
                            readOnly
                            type="number"
                            name="expte_number"
                            className="form-control"
                            value={data.expte_number}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label>
                            <AiOutlineExport /> Entry Level{" "}
                        </Label>
                        <Input
                            readOnly
                            type="text"
                            name="expte_date"
                            className="form-control"
                            value={data.expte_date}
                        />
                    </Col>
                    <Col md={6}>
                        <Label>
                            <AiOutlineExport /> Entry Year{" "}
                        </Label>
                        <Input
                            readOnly
                            type="number"
                            name="expte_descrition"
                            className="form-control"
                            value={data.expte_descrition}
                        />
                    </Col>
                </FormGroup>
                <Button color="danger">
                    <AiOutlineDelete /> Delete Data
                </Button>
            </Form>
        </div>
    );
};

export default DeleteExpte;
