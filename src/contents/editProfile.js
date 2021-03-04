import React, {useContext} from 'react'
import { FaPlus } from "react-icons/fa";
import { Image, Row, Button, Col, Form } from 'react-bootstrap'
import Switch from "react-switch";

import { UserContext } from '../providers/UserProvider'

import AvatarImage from '../assets/images/icons/normal_avatar.png'

function EditProfile() {
    const user = useContext(UserContext);

    return (
        <div className="w-100">
            <div className="header chat-header align-items-center d-flex">
                <div className="position-absolute header-users d-flex">
                    <div className="header-avatar position-relative d-flex">
                        <Image
                            src={user.avatarUrl ? user.avatarUrl : AvatarImage} width={30} height={30}
                            fluid className="header-avatar bg-white" />
                        <div
                            className="badge-for-avatar bg-success rounded-circle border border-white"
                        ></div>
                    </div>
                    <div className="ml-1">
                        <FaPlus />
                    </div>
                </div>
            </div>
            <div className="content-body px-md-5 py-3">
                <div className="d-flex w-100 justify-content-end">
                    <Button variant="outline-secondary" className="mr-2">Cancel</Button>
                    <Button variant="success">Save Changes</Button>
                </div>
                <Row>
                    <Col md = {8} className="px-5">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="float-left">Display Name:</Form.Label>
                                <Form.Control
                                    type="text" placeholder="Display Name" value={''}
                                    // name="userEmail" onChange={(event) => onChangeHandler(event)}
                                />
                                <Form.Text className="text-muted">
                                This could be your first name, or a nickname — however you’d like people to refer to you in Slack.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="float-left">What I do:</Form.Label>
                                <Form.Control
                                    type="text" placeholder="What I do"
                                    name="userEmail"
                                />
                                <Form.Text className="text-muted">
                                Let people know what you do at ...
                                </Form.Text>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control
                                        type="tel" placeholder="01234 56789" pattern="[0-9]{5} [0-9]{5}"
                                        name="userPhone"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Country" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        type="text" placeholder="Age"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <span>Billing</span>
                            <Row className="d-flex">
                                <Col md={6}>
                                    <Form.Control type="text" placeholder="Card number" />
                                </Col>
                                <Col md={2}>
                                    <Form.Control type="text" placeholder="MM" />
                                </Col>
                                <Col md={2}>
                                    <Form.Control type="text" placeholder="YYYY" />
                                </Col>
                                <Col md={2}>
                                    <Form.Control type="text" placeholder="CVV" />
                                </Col>
                            </Row>
                            <Switch></Switch>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default EditProfile
