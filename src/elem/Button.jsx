// import React from "react";
import styled, { css } from "styled-components";

// function LargeButton({ children, background }) {
//     return (
//         <div>
//             <LargeBtn background={background}>{children}</LargeBtn>
//         </div>
//     )
// }

// const LargeBtn = styled.button`
//   width: 343px;
//   height: 52px;
//   border-radius: 10px;
//   background-color: ${(props) => props.background || "black"};
//   color: white;
//   font-weight: bold;
// `

const Btn = css`
    font-weight: bold;
    cursor:pointer;
`
// large button
export const LargeButton = styled.button`
    ${Btn}
    color: white;
    background-color: ${(props) => props.background || "black"};
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "52px"};
    border-radius: 10px;
`
export const MediunButton = styled.button`
    ${Btn}
    width: 80px;
    height: 37px;
    background-color: ${(props) => props.background || "#C4C4C4"};
    color: ${(props) => props.color || "white"};
    border-radius: 6px;
    font-size: 10px;
`
export const SmallButton = styled.button`
    ${Btn}
    width: 68px;
    height: 26px;
    border: 1px solid ${(props) => props.bordercolor || "transparent"};
    background-color: ${(props) => props.background || "transparent"};
    color: ${(props) => props.color || "transparent"};
    border-radius: 6px;
    font-size: 9px;
`
export const M_PointBtn = styled.button`
    width: 80px;
    height: 37px;
    background: ${(props) => props.scolor};
    background: linear-gradient(90deg, ${(props) => props.scolor} 0%, ${(props) => props.ecolor} 100%);
    color: ${(props) => props.color || "transparent"};
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
`

// export default LargeButton
