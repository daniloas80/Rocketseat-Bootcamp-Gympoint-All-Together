import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    height: 100%;
    background: #ee4d64;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    background: #fff;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

    img {
        padding-top: 30px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            height: 40px;
            padding: 10px;
            border-radius: 3px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            background-color: 1px solid rgba(0, 0, 0, 0.1);
            color: 1px solid rgba(0, 0, 0, 0.3);
            margin: 8px 20px 0 20px;
            transition: border 0.15s ease;
            font-size: 16px;

            &:focus {
                border-color: #ee4d64;
            }

            &::placeholder {
                color: #9999;
            }
        }

        label {
            color: #444444;
            font-size: 14px;
            line-height: 16px;
            font-weight: 700;
            margin: 15px 20px 0 20px;
            text-align: left;
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 5px 0 5px 20px;
            font-weight: bold;
        }

        button {
            margin: 20px 20px 40px 20px;
            height: 40px;
            border-radius: 3px;
            transition: background-color 0.15s ease;
            background: #ee4d64;
            border: 0;
            color: #fff;
            font-size: 12px;
            padding: 0 10px;
            font-weight: 700;

            &:hover {
                background: #fa2241;
            }
        }
    }
`;
