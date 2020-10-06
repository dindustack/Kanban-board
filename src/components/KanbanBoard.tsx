import React, { Children } from "react";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

export const KanbanBoard = () => {
  return (
    <>
      <div className="overflow-hidden theme-color">
        {/* -------- Kanban starts here */}
        <div className="kanban-board m-3">
          <div className="kanban-col">
            <div className="card-list card-list-flush">
              <div className="card-list-title row align-items-center mb-3 column-color p-2">
                <Column text="To do" />
              </div>
            </div>
          </div>
          <div className="kanban-col">
            <div className="card-text add-item shadow-lg text-white">
              <AddNewItem toggleButtonText="Add another list" onAdd={console.log} dark />

              {/* <AddNewItem toggleButtonText="Add another list" onAdd={console.log} dark /> */}
            </div>
          </div>
          {/*<div className="kanban-col">
            <div className="card-list card-list-flush">
              <div className="card-list-title row align-items-center mb-3 column-color p-2">
                <Column text="Done" />
              </div>
            </div>
          </div>
          <div className="kanban-col">
            <div className="card-list card-list-flush">
              <div className="card-list-title row align-items-center mb-3 column-color p-2">
                <Column text="Reviewed" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
