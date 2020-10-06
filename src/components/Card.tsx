import React from "react";

interface CardProps {
  text: string;
}
export const Card = ({ text }: CardProps) => {
  return (
    <>
      <div className="card mb-2 border shadow-none">
        <div className="card-body p-2 text-justify">
          <h6 className="text-black card-text">{text}</h6>
        </div>
      </div>
    </>
  );
};
