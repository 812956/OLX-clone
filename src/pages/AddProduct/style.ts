import styled from "styled-components";

export const AddHeader = styled.div`
  height:7.2rem;
  max-width:100%;
  background-color:#eff1f3;
  box-shadow: 0 1px 4px 0 #0000001a;
  
`
export const AddForm = styled.div`
  max-width:100%;
  #heading{
   text-align:center;
   padding:20px 0 ;
   font-size:24px;
  }
  
`

export const Form = styled.div`
  margin:auto;
  width:60%;
  height:100vh;
  border:1px solid black;
  border-radius:5px;

  form {
    display:flex;
    flex-direction:column;
    width:50%;
    margin:auto;
    line-height:5rem;
    font-size:14px; 

    input {
      width:100%;
      height:4.8rem;
      border:1px solid black;
      border-radius:5px; 
    }
  }
  
`
