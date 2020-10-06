import React from "react";

interface CardProps {
  text: string;
}
export const Card = ({ text }: CardProps) => {
  return (
    <>
      <div className="card mb-2 border shadow-none">
        <div className="card-text p-2 align-items-start">
          <h5 className="text-black">{text}</h5>
        </div>
      </div>
    </>
  );
};
