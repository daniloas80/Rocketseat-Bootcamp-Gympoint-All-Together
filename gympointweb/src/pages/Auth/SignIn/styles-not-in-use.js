import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    height: 100%;
    background: #ee4d64;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 40px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    img {
        margin: 0 0 10px 100px;
    }

    span {
        color: #444444;
        font-size: 14px;
        line-height: 16px;
        font-weight: 700;
        margin-top: 15px;
        text-align: left;
    }

    input {
        height: 40px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: 1px solid rgba(0, 0, 0, 0.1);
        color: #9999;
        margin-top: 8px;
        transition: border 0.15s ease;
        font-size: 16px;

        &:focus {
            border-color: #7289da;
        }

        &::placeholder {
            color: 1px solid rgba(0, 0, 0, 0.1);
        }
    }

    button {
        margin: 20px 0 0;
    }
`;
