import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const FormDefault = styled.div`
    div {
        background: #f5f5f5;
        padding: 20px;
        margin-top: -60px;
        border-radius: 4px;
        align-items: center;
        form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 10px;

            header {
                background: #f5f5f5;
                display: flex;
                flex-direction: row;
                width: 100%;
                justify-content: space-between;
                align-items: baseline;
                padding: 0;
                margin: 0;
                aside {
                    display: flex;
                    align-items: center;
                }
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 10px;
                    border: 0;
                    height: 35px;
                    min-width: 110px;
                    width: auto;
                    background: #ee4d64;
                    border-radius: 4px;
                    font-size: 14px;
                    color: #fff;
                    font-weight: bold;
                    margin-right: 10px;
                    &:hover {
                        background: ${darken(0.1, '#ee4d64')};
                    }
                    &.greyButton {
                        background: #cccccc;
                        border: 1px solid #a9a9a9;
                        color: #fff;
                        &:hover {
                            background: ${lighten(0.2, '#a9a9a9')};
                        }
                    }
                }
                input {
                    height: 35px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    color: rgba(0, 0, 0, 0.5);
                    padding: 0 5px;
                    &::placeholder {
                        color: rgba(0, 0, 0, 0.5);
                    }
                }
                strong {
                    font-size: 24px;
                    color: #fff;
                    margin: 0 13px;
                }
            }
            p {
                margin: 8px 0 16px 0;
                font-size: 16px;
                color: #777;
                font-style: italic;
                &::before {
                    content: '"';
                }
                &::after {
                    content: '"';
                }
            }
            label {
                font-size: 12px;
                font-weight: bold;
                color: #777;
                width: 100%;
            }
            textarea {
                border: 1px solid #ddd;
                border-radius: 4px;
                width: 100%;
                min-height: 160px;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                padding: 4px;
                &.invalid {
                    border: 1px solid red;
                    color: red;
                    &::placeholder {
                        color: red;
                    }
                }
            }
            input,
            select {
                font-size: 14px;
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 4px;
                width: 100%;
                height: 32px;
                padding: 0 5px;
                color: rgba(0, 0, 0, 0.5);
                margin: 0 0 20px;
                &.invalid {
                    border: 1px solid red;
                    color: red;
                    &::placeholder {
                        color: red;
                    }
                }
                &::placeholder {
                    color: rgba(0, 0, 0, 0.5);
                }
                &:disabled {
                    background: #eee;
                }
                &#studentsList {
                    width: 400px;
                    height: auto;
                    max-height: 400px;
                    position: absolute;
                    margin-top: 45px;
                    color: #ee4d64;
                    padding: 10px;
                    overflow-y: auto;
                    border-top: none;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    option {
                        padding: 5px 0;
                    }
                }
            }
            div {
                background: #fff;
                display: flex;
                flex-direction: column;
                margin-top: 15px;
                padding: 30px 30px 0 30px;
                justify-content: space-between;
                & div:not(:first-child) {
                    margin-left: 15px;
                }
                div {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    margin: 0 5px 0 -5px;
                    padding: 0;
                    justify-content: space-evenly;
                }
                label {
                    display: block;
                }
                input {
                    display: block;
                    width: 100%;
                }
            }
            span {
                color: #f27894;
                align-self: flex-start;
                font-size: 12px;
                font-weight: bold;
                margin-bottom: 15px;
            }
            button {
                margin: 25px 0 0;
                height: 33px;
                width: 210px;
                background: #ee4d64;
                font-weight: bold;
                color: #fff;
                border: 0;
                border-radius: 4px;
                font-size: 14px;
                transition: background 0.2s;
                &:disabled {
                    background: #ddd;
                    color: #fff;
                    cursor: auto;
                    &:hover {
                        background: #ddd;
                        color: #fff;
                    }
                }
                &.greyButton {
                    background: transparent;
                    border: 1px solid #ee4d64;
                    color: #ee4d64;
                    &:hover {
                        background: ${lighten(0.35, '#ee4d64')};
                    }
                }
                &:hover {
                    background: ${darken(0.05, '#ee4d64')};
                }
            }
            a {
                color: #ee4d64;
                margin-top: 15px;
                font-size: 16px;
                opacity: 0.8;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
`;
