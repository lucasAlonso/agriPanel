import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from "react-icons/ai";
import axios from "axios";
import datosExptes from "../common/datosExptes";
const CreateExpte = (props) => {
    const [data, setData] = useState({
        expte_name: "",
        expte_type: "",
        expte_number: "",
        expte_date: "",
        expte_description: "",
        expte_active: false,
    });

    const onChangeExpteData = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    };

    const onSubmitExpteData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/exptes/add", data).then((res) => console.log(res.data));
        setData({
            expte_name: "",
            expte_type: "",
            expte_number: "",
            expte_date: "",
            expte_description: "",
            expte_active: false,
        });
    };
    const tiposExptes = datosExptes.tiposExptes;

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
                            <AiOutlineExport /> Tipo{" "}
                        </Label>
                        <label for="exampleSelect1">Example select</label>
                        <Input type="select" name="expte_type" id="exampleSelectMulti" onChange={onChangeExpteData}>
                            {tiposExptes.map((value, index) => {
                                return <option key={index}>{value}</option>;
                            })}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label>
                            <AiOutlineExport /> Descripcion{" "}
                        </Label>
                        <Input
                            type="text"
                            name="expte_description"
                            className="form-control"
                            value={data.expte_description}
                            onChange={onChangeExpteData}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label>
                            <AiOutlineExport /> Fecha Inicio{" "}
                        </Label>
                        <Input
                            type="date"
                            name="expte_date"
                            className="form-control"
                            value={data.expte_date}
                            onChange={onChangeExpteData}
                        />
                    </Col>
                    <Col md={6}>
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
                <Button color="primary">
                    <AiOutlineForward /> Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreateExpte;
