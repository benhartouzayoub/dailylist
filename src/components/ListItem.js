/* eslint-disable no-unused-vars */
import { MdEdit, MdDelete } from "react-icons/md";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ListItem = ({ item, handleDelete, handleEdit }) => {
  const { id, mission } = item;
  return (
    <li className="item">
      <div>{mission}</div>
      <div>
        <Button
          variant="warning"
          className="mx-2"
          onClick={() => handleEdit(id)}
        >
          {" "}
          <MdEdit />{" "}
        </Button>
        <Button variant="danger" onClick={() => handleDelete(id)}>
          {" "}
          <MdDelete />{" "}
        </Button>
      </div>
    </li>
  );
};
export default ListItem;
