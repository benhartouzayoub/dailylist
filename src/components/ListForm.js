import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdAdd } from "react-icons/md";

const ListForm = ({ mission, handleMission, handleSubmit, edit }) => {
  return (
    <Form
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
      }}
      onSubmit={handleSubmit}
    >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Enter Your mission for today"
            value={mission}
            onChange={handleMission}
            style={{ width: 300 }}
          />
        </Col>
        <Col sm="2" className="px-0">
          <Button variant="primary" type="submit" className="px-4">
            {edit ? "Edit" : <MdAdd />}
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
export default ListForm;
