import React, { useState } from 'react';
import Button from '@mui/material/Button';
import '../App.css';
import { PiStudentBold } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { PiChalkboardTeacher } from "react-icons/pi";
import { SiCodementor } from "react-icons/si";
function AppBtns() {
  const [activeButton, setActiveButton] = useState("student");

  const changeButtonStates = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div className='btnGroup'>
      <div className='button'>
        <Button
          onClick={() => changeButtonStates("student")}
          className='reactBtn'
          variant={activeButton === "student" ? "outlined" : "contained"}
          sx={activeButton === "student" ? { color: "rgb(22, 36, 51)", borderColor: "rgb(22, 36, 51)" } : {}}
        >
          <PiStudentBold /> {"Öğrenci Girişi"}
        </Button>
      </div>
      <div className='button'>
        <Button
          onClick={() => changeButtonStates("parent")}
          className='reactBtn'
          variant={activeButton === "parent" ? "outlined" : "contained"}
          sx={activeButton === "parent" ? { color: "rgb(22, 36, 51)", borderColor: "rgb(22, 36, 51)" } : {}}
        >
          <RiParentLine /> {"Veli Girişi"}
        </Button>
      </div>
      <div className='button'>
        <Button
          onClick={() => changeButtonStates("teacher")}
          className='reactBtn'
          variant={activeButton === "teacher" ? "outlined" : "contained"}
          sx={activeButton === "teacher" ? { color: "rgb(22, 36, 51)", borderColor: "rgb(22, 36, 51)" } : {}}
        >
          <PiChalkboardTeacher /> {"Öğretmen Girişi"}
        </Button>
      </div>
      <div className='button'>
        <Button
          onClick={() => changeButtonStates("mentor")}
          className='reactBtn'
          variant={activeButton === "mentor" ? "outlined" : "contained"}
          sx={activeButton === "mentor" ? { color: "rgb(22, 36, 51)", borderColor: "rgb(22, 36, 51)" } : {}}
        >
          <SiCodementor /> {"Danışman Girişi"}
        </Button>
      </div>
    </div>
  );
}

export default AppBtns;
