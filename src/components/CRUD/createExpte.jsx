import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from "react-icons/ai";
import axios from "axios";

const CreateExpte = (props) => {
    const [data, setData] = useState({
        expte_name: "",
        expte_type: "",
        expte_number: "",
        expte_date: "",
        expte_descrition: "",
        expte_active: false,
    });

    const onChangeExpteData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitExpteData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/exptes/add", data).then((res) => console.log(res.data));
        setData({
            expte_name: "",
            expte_type: "",
            expte_number: "",
            expte_date: "",
            expte_descrition: "",
            expte_active: false,
        });
    };

    return (
        <div style={{ marginTop: 10 }}>
            <h3>
                <AiOutlineUserAdd /> Create Expte
            </h3>
            <Form onSubmit={onSubmitExpteData}>
                <FormGroup row>
                    <Col>
                        <Label>
                            <AiOutlineUser /> Expte Name{" "}
                        </Label>
                        <Input
                            type="text"
                            name="expte_name"
                            className="form-control"
                            value={data.expte_name}
                            onChange={onChangeExpteData}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label>
                            <AiOutlineExport /> Address{" "}
                        </Label>
                        <Input
                            type="text"
                            name="expte_type"
                            className="form-control"
                            value={data.expte_type}
                            onChange={onChangeExpteData}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label>
                            <AiOutlineExport /> Expte Number{" "}
                        </Label>
                        <Input
                            type="number"
                            name="expte_number"
                            className="form-control"
                            value={data.expte_number}
                            onChange={onChangeExpteData}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label>
                            <AiOutlineExport /> Entry Level{" "}
                        </Label>
                        <Input
                            type="text"
                            name="expte_date"
                            className="form-control"
                            value={data.expte_date}
                            onChange={onChangeExpteData}
                        />
                    </Col>
                    <Col md={6}>
                        <Label>
                            <AiOutlineExport /> Entry Year{" "}
                        </Label>
                        <Input
                            type="number"
                            name="expte_descrition"
                            className="form-control"
                            value={data.expte_descrition}
                            onChange={onChangeExpteData}
                        />
                    </Col>
                </FormGroup>
                <Button color="primary">
                    <AiOutlineForward /> Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreateExpte;
