import styled from "styled-components";
import { keyframes } from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const InfoLink = styled.p`
    font-size: 11px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
    pointer-events: none;
`;

export const BoldLink = styled.span`
    font-size: 11px;
    color: rgb(114, 171, 218);
    color: linear-gradient(
        58deg,
        rgba(114, 137, 218, 1) 20%,
        rgba(243, 172, 18, 1) 100%
    );

    font-weight: 500;
    text-decoration: none;
    margin: 0 4px;
    pointer-events: visible;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 12px;
    background-color: rgba(10, 10, 10, 0.3);
    color: rgba(200, 200, 200, 1);

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(114, 137, 218);
        border-bottom: 2px solid
            linear-gradient(
                58deg,
                rgba(114, 137, 218, 1) 20%,
                rgba(243, 172, 18, 1) 100%
            );
    }
`;

const ernicaniBG = keyframes`

  0% {
    background-position: 0% 50%;
    
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 15px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: 240ms;
    background: rgb(131, 114, 218);
    background: linear-gradient(
        58deg,
        rgba(131, 114, 218, 1) 20%,
        rgba(212, 176, 19, 1) 100%
    );
    background-size: 150% 150%;
    animation: ${ernicaniBG};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-play-state: paused;
    animation-iteration-count: infinite;
    &:hover {
        animation-play-state: running;
    }
`;

export const LabelInput = styled.label`
    font-size: 12px;
    color: rgba(200, 200, 200, 1);
    font-weight: 500;
    text-decoration: none;
    pointer-events: none;
    font-weight: 600;
    margin: 10px 0 10px 0px;
`;

export const ImportantSpan = styled.span`
    font-size: 12px;
    color: rgb(250, 119, 123);
    color: linear-gradient(
        58deg,
        rgba(250, 119, 123, 1) 20%,
        rgba(243, 172, 18, 1) 100%
    );
    margin: 0 2px;
    font-size: 10px;
    font-weight: 400;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 12px;
    background-color: rgba(10, 10, 10, 0.3);
    color: rgba(200, 200, 200, 1);

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(114, 137, 218);
        border-bottom: 2px solid
            linear-gradient(
                58deg,
                rgba(114, 137, 218, 1) 20%,
                rgba(243, 172, 18, 1) 100%
            );
    }
`;
