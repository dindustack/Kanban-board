import React, { useState } from "react";
import { NewItemForm } from "./NewItemForm";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <>
      <button
        style={{
          color: props.dark ? "000" : "#fff",
        }}
        onClick={() => setShowForm(true)}
        className="btn btn-block btn-transparent text-left">
        <a className="action-item mr-2 text-decoration-none" href="action">
          <svg viewBox="0 0 20 20" fill="#000000" width="15px" height="15px">
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="text-dark ml-2">{toggleButtonText}</span>
        </a>
      </button>
    </>
  );
};
