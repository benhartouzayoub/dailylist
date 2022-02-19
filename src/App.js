/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ListForm from "./components/ListForm";
import List from "./components/List";
import uniqid from "uniqid";
import monster from "./images/monster.png";
import happymonster from "./images/giphy.gif";
import { MdAdd } from "react-icons/md";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initialList = localStorage.getItem("missions")
  ? JSON.parse(localStorage.getItem("missions"))
  : [];

function App() {
  //state values
  const [allMissions, setAllMission] = useState(initialList);
  const [showMonster, setShowMonster] = useState(true);
  const [mission, setMission] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  //useEffect
  useEffect(() => {
    if (initialList.length) {
      setShowMonster(false);
    } else if (!initialList.length) {
      setShowMonster(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("missions", JSON.stringify(allMissions));
  }, [allMissions]);
  //functionality
  //***handle mission
  const handleMission = (e) => {
    setMission(e.target.value);
  };
  //***handle bool
  const handleBool = () => {
    setShowMonster(false);
    setAllMission(allMissions);
  };
  //*** handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mission !== "") {
      if (edit) {
        let tempMissions = allMissions.map((item) => {
          return item.id === id ? { ...item, mission } : item;
        });
        setAllMission(tempMissions);
        setEdit(false);
        setMission("");
      } else {
        const singleMission = {
          id: uniqid(),
          mission: mission,
        };
        setAllMission([...allMissions, singleMission]);
        setMission("");
      }
    }
  };
  //clear all missions
  const clearItems = () => {
    setAllMission([]);
    setShowMonster(true);
    setMission("");
  };
  //handleDelete

  const handleDelete = (id) => {
    console.log(`item deleted${id}`);
    const newMissions = allMissions.filter((mission) => {
      return mission.id !== id;
    });
    setAllMission(newMissions);
  };
  //handle edit
  const handleEdit = (id) => {
    console.log(`edit :${id}`);
    let missionX = allMissions.find((item) => item.id === id);
    let { mission } = missionX;
    setMission(mission);
    setEdit(true);
    setId(id);
  };
  return (
    <main className="App">
      <Container>
        <h1>DAILYLIST</h1>

        {!showMonster ? (
          <div>
            <ListForm
              mission={mission}
              handleMission={handleMission}
              handleSubmit={handleSubmit}
              edit={edit}
            />
            <List
              allMissions={allMissions}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {allMissions.length > 0 ? (
                <Button onClick={clearItems}>Clear All Missions</Button>
              ) : (
                <img src={happymonster} alt="" style={{ width: 300 }} />
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        {showMonster && (
          <div className="warning-box">
            <p className="warning-msg first-warning">Seems like</p>
            <p className="warning-msg seconde-warning">You have no mission</p>
            <div className="warning-img-box">
              <img src={monster} alt="monster" className="warning-img" />
            </div>
            <button className="add" onClick={handleBool}>
              <MdAdd />
            </button>
          </div>
        )}
      </Container>
    </main>
  );
}

export default App;
