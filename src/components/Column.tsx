import React from "react";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

interface ColumnProps {
  text: string;
}

export const Column = ({ text }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <>
      <div className="col mb-2">
        {/* ------- Todo board starts here */}
        <h4 className="mb-0 font-weight-bold">{text}</h4>
      </div>
      <div className="col text-right mb-2">
        <div className="actions">
          <a className="action-item mr-2" href="action">
            <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a className="action-item" href="action">
            <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </a>
        </div>
      </div>
      {/* ---------------- Content for Todo -------- */}
      <div className="card-list-body mt-md-3">
        <Card text="Call Mr. Damiete" />
        <AddNewItem 
          toggleButtonText="Add another task" 
          onAdd={console.log} 
          dark 
        />
      </div>
    </>
  );
};
