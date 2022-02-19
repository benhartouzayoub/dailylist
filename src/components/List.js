/* eslint-disable no-unused-vars */
import ListItem from "./ListItem";

const List = ({ allMissions, handleDelete, handleEdit }) => {
  return (
    <>
      <ul>
        {allMissions.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </>
  );
};
export default List;
