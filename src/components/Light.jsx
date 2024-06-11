import React, { useState } from "react";

export default function Light({ count, setCount }) {
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
    <div className="absolute">
      <img
        src="/images/light-image.jpg"
        alt="header-image"
        style={{ width: "100vw" }}
      />
      <div className="mx-auto w-[540px] relative -top-[240px]">
        <div className="flex justify-between">
          <div className="text-[40px] text-white font-bold">TODO</div>
          <img
            src="/images/moon.svg"
            alt=""
            onClick={() => setCount(false)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="shadow-2xl rounded mt-6 ">
          {tasks.map((task, index) => (
            <div
              key={index}
              style={{
                marginTop: index === 0 ? "40px" : index === 1 ? "24px" : 0,
                borderRadius: index === 0 ? "10px" : "0",
                textDecorationLine: checkedItems[index]
                  ? "line-through"
                  : "none",
                color: checkedItems[index] ? "#D1D2DA" : "black",
              }}
              className="bg-white py-4 px-6 flex items-center border-b border-lightGray"
            >
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                  //rounded-full არ მუშაობს
                  className="w-6 h-6 rounded-full cursor-pointer"
                />
              </label>
              <p className="ml-5">{task}</p>
            </div>
          ))}
          <div className="bg-white py-4 px-6 flex items-center justify-between">
            <span className="text-sm text-mediumGray cursor-pointer hover:text-darckGray">
              5 items left
            </span>
            <p>
              <span className="text-sm text-blue font-bold cursor-pointer">
                All
              </span>{" "}
              <span className="ml-5 text-sm text-mediumGray font-bold cursor-pointer hover:text-darckGray">
                Active
              </span>
              <span className="ml-5 text-sm text-mediumGray font-bold cursor-pointer hover:text-darckGray">
                Completed
              </span>
            </p>
            <span className="text-sm text-mediumGray cursor-pointer hover:text-darckGray">
              Clear Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
