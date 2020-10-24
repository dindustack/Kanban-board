import React from "react";
import { Column } from "./Column";
import { AppContainer } from "./styles"
import { AddNewItem } from "./AddNewItem";
import  CustomDragLayer  from "../CustomDragLayer";
import { useAppState } from "../AppStateContext";

export const KanbanBoard = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
          <CustomDragLayer />
          {state.lists.map((list, i) => (
            
                  <Column id={list.id} text={list.text} key={list.id} index={i} />
               
          ))}
          
              <AddNewItem
                toggleButtonText="+ Start a list"
                onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
              />
            
       
    </AppContainer>
  );
};
