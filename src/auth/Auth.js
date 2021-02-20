import React from 'react'
import styled from 'styled-components'
import Logo from '../img/sibdev-logo-auth.png'

export default () => {
    return(
        <Wrapper>
            <AuthSqr>
                <img src={Logo} alt="sibdev-logo" />
                <h3>Вход</h3>
                <InputForm style={{marginTop: 20, marginBottom: 20 }}>
                    <label>Логин</label>
                    <input></input>
                </InputForm>
                <InputForm style={{marginBottom: 40 }}>
                    <label>Пароль</label>
                    <input></input>
                </InputForm>
                <button>Войти</button>
            </AuthSqr>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

`
const AuthSqr = styled.div`
    width: 510px;
    height: 520px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(39, 39, 39, 0.1);
    border-radius: 5px;
    img{
        width: 88px;
        height: 88px;
        margin: 40px 0 32px 0;
    }
    label{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: rgba(23, 23, 25, 0.3);
    }
    input{
        border: 1px solid rgba(23, 23, 25, 0.2);
        box-sizing: border-box;
        border-radius: 5px;
        height: 48px;
        width: 334px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        padding: 15px 12px 15px 12px;
    }
    button{
        width: 176px;
        height: 52px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #fff;
        background: #1390E5;
        border-radius: 5px;
        border: none;
    }
`
const InputForm = styled.div`
    display: flex;
    flex-direction: column;
`