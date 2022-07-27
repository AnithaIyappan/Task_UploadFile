import { Component } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Config extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accesskey: "",
            secretkey: "",
            selectedFile: null
        }
    }

    changeAccesskey = (event) => {
        this.setState({
            accesskey: event.target.value
        })
    }

    changeSecretKey = (event) => {
        this.setState({
            secretkey: event.target.value
        })
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, {
        })
            .then(res => {
                console.log(res.statusText);
                if (this.state.selectedFile) {
                    alert("file upload success")
                }
            })
    }



    render() {
        return (
            <div>
                <Container className='pt-5'>
                    <Row>
                        <Col lg={3} md={12} sm={12} xs={12}></Col>
                        <Col lg={4} md={12} sm={12} xs={12}>
                            <Card
                                style={{ width: '40rem', height: '28rem' }}
                                className="mt-5"
                            >
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-3 ps-5 pe-5 pt-2">
                                            <Form.Label>AccessKeyId</Form.Label>
                                            <Form.Control size="md" type="text" placeholder="accessKeyId" onChange={this.changeAccesskey} />
                                        </Form.Group>
                                        <Form.Group className="mb-3 ps-5 pe-5 pt-1">
                                            <Form.Label>SecretAccessKey</Form.Label>
                                            <Form.Control size="md" type="password" placeholder="secretAccessKey" onChange={this.changeSecretKey} />
                                        </Form.Group>
                                        <Form.Group className="mb-3 ps-5 pe-5 pt-1">
                                            <Form.Control size="md" type="file" onChange={this.onChangeHandler}
                                                disabled={!this.state.accesskey || !this.state.secretkey} />
                                        </Form.Group>
                                        <Form.Group className='mb-3 ps-5 pe-5 pt-1'>
                                            <Form.Label>Region</Form.Label>
                                            <Form.Select disabled={!this.state.accesskey || !this.state.secretkey}>
                                                <option>Region</option>
                                                <option value="1">us-east-1</option>
                                                <option value="2">us-east-2</option>
                                                <option value="3">us-east-3</option>
                                                <option value="3">us-east-4</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className='ms-5 ps-5 pe-5 pt-1'>
                                            <Button className='btn btn-info btn-lg text-white font-weight-bold'
                                                onClick={this.onClickHandler} disabled={!this.state.accesskey || !this.state.secretkey}
                                                style={{ "borderRadius": 25, "paddingLeft": 20, "paddingRight": 20, "marginLeft": 150 }}
                                            >Upload</Button>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Config;

