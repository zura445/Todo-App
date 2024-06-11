import React, { useState } from "react";

export default function Dark({ count, setCount }) {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const tasks = [
    "Create a new todo…",
    "Complete online JavaScript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo App on Frontend Mentor",
  ];

  return (
    <div className="absolute bg-black">
      <img
        src="/images/darck-image.jpg"
        alt="header-image"
        style={{ width: "100vw" }}
      />
      <div className="mx-auto w-[540px] relative -top-[240px]">
        <div className="flex justify-between">
          <div className="text-[40px] text-white font-bold">TODO</div>
          <img
            src="/images/sun.svg"
            alt=""
            onClick={() => setCount(true)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="rounded-2xl">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-darck text-white py-4 px-6 flex items-center border-b border-darckGray"
              style={{
                marginTop: index === 0 ? "40px" : index === 1 ? "24px" : 0,
                borderRadius: index === 0 ? "10px" : "0",
                textDecorationLine: checkedItems[index]
                  ? "line-through"
                  : "none",
                //აქ არ მუშაობს და light - ში მუშაობს
                color: checkedItems[index] ? "red" : "black",
              }}
            >
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                  className="w-6 h-6 rounded-full"
                />
              </label>
              <p className="ml-5  text-gray">{task}</p>
            </div>
          ))}
        </div>
        <div className="bg-darck text-white py-4 px-6 flex items-center justify-between">
          <span className="text-sm text-lightDark cursor-pointer hover:text-lightGray">
            5 items left
          </span>
          <p>
            <span className="text-sm text-blue font-bold cursor-pointer ">
              All
            </span>{" "}
            <span className="ml-5 text-sm text-lightDark font-bold cursor-pointer hover:text-lightGray">
              Active
            </span>
            <span className="ml-5 text-sm text-lightDark font-bold cursor-pointer hover:text-lightGray">
              Completed
            </span>
          </p>
          <span className="text-sm text-lightDark cursor-pointer hover:text-lightGray">
            Clear Completed
          </span>
        </div>
      </div>
    </div>
  );
}
