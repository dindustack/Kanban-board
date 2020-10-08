import React, { Children } from "react";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../AppStateContext";

export const KanbanBoard = () => {
  const { state, dispatch } = useAppState();
  return (
    <>
      <div className="overflow-hidden theme-color">
        {/* -------- Kanban starts here */}
        <div className="kanban-board m-3">
          {state.lists.map((list, i) => (
            <div className="kanban-col">
              <div className="card-list card-list-flush">
                <div className="card-list-title row align-items-center mb-3 column-color p-2">
                  <Column text={list.text} key={list.id} index={i} />
                </div>
              </div>
            </div>
          ))}
          <div className="kanban-col">
            <div className="card-text add-item shadow-lg text-white">
              <AddNewItem
                toggleButtonText="Add another list"
                onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
