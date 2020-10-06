import React, { useState } from "react";
import { useFocus } from "../utils/useFocus";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus()

  return (
    <>
      <div className="col-12">
        <input
          ref={inputRef}
          type="text"
          className="form-control mb-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-success text-white mb-3" onClick={() => onAdd(text)}>
          Create
        </button>
      </div>
    </>
  );
};
