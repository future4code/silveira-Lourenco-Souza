import React from 'react';
import styled from 'styled-components'


const MyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 150px;
        :hover {
            background-color: #efcdf7;
            box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.51);
        }
`

const MyLi = styled.li`
    margin-left: 40px;
`

let Competencias = (props) => {
    return (
        <MyContainer>
            {props.items.map((competencia) => {
                return (
                    <ul>
                        <MyLi>{competencia}</MyLi>
                    </ul>
                )
            })}
            
        </MyContainer>
    )
}

export default Competencias