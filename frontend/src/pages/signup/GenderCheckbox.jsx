import React from "react";

function GenderCheckbox({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected": ""}`}>
          <input 
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === "male"}
            onChange={onCheckboxChange}
          />
          <span className="label-text">Male</span>
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected": ""}`}>
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={onCheckboxChange}
          />
          <span className="label-text">Female</span>
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
