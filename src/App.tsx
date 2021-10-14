import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "././types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea"


const App = () => {
  const [list, setlist] = useState<Item[]>([
    { id: 1, name: "Buy bread at the bakery", done: false },
    { id: 2, name: "Buy cake at the bakery", done: true },
  ]);

  const handleAddTask = (taskName: string) => {

    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setlist(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setlist(newList);
  }


  return (
    <C.Container>
      <C.Area>
        <C.Header>Tasks</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
