import React, { useState } from "react";
import styled from "styled-components";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <Div>
      <h1>Поиск видео</h1>
      <div className="input-form">
        <Input
            fullWidth
            label="Search..."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={onKeyPress}
            placeholder="Что хотите посмотреть?"
        />
        <Button onClick={() => onSubmit(searchTerm)}>Найти</Button>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 50vh;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0 177px 0 177px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  h1{
    margin-bottom: 40px;
  }
  .input-form{
    max-width: 686px;
    margin-top: 40px;
    height: 52px;
    border: 1px solid rgba(23, 23, 25, 0.2);
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
  }
`
const Input = styled.input`
  justify-content: flex-start;
  width: 80%;
  outline: none;
  height: 100%;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #272727;
  opacity: 0.3;
  padding-left: 15px;
`
const Button = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: #1390E5;
    border-radius: 0px 5px 5px 0px;
    border: none;
    width: 20%;
`