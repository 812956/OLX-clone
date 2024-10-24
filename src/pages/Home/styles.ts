import styled from "styled-components"
import logo from '../../images/Logo.png'

export const Header = styled.header`
  height:7.2rem;
  max-width:100%;
  background-color:#eff1f3;
  box-shadow: 0 1px 4px 0 #0000001a;
  padding:0 2rem;
  
  display:flex;
  align-items:center;
  justify-content:space-between;

  @media(max-width:1266px){
   padding:0 1rem; 
  }

`

export const Logo = styled.div`
 height:4.8rem;
 width:4.8rem;
 background-image:url(${logo});

 @media(max-width:1266px){
   height:4.8rem;
   width:4.8rem;
 }

`

export const DropDown = styled.div`
  width:27.2rem;
  height:4.8rem;
  border:2px solid black;
  border-radius:5px;

  background-color:white;

  @media(max-width:1141px){
    width:23rem;
  }

  @media screen and (min-width:950px) and (max-width:1090px){
   width:19rem;
  }

  @media screen and (min-width:600px) and (max-width:950px){
   width:15rem;
  }

   @media screen and (min-width:350px) and (max-width:600px){
   width:5rem;
  }

`

export const Search = styled.div`
 width:62.094rem;
 height:4.8rem;
 display:flex;

   input {
     width:93%;
     background-color:white;
     height:4.8rem;
     padding-left:15px;
     font-size:15px;
     border-style:solid;
     border-color:black;
     border-width:2px 0 2px 2px;
     border-radius:5px 0 0 5px;
   }

   button {
     width:10%;
     height:4.8rem;
     background-color:#002f34;
     border-radius:0 5px 5px 0;
   }
  
   @media(max-width:1266px){
    width:50rem;
   }

   @media screen and (min-width:950px) and (max-width:1090px){
   width:40rem;
  }
  
  @media screen and (min-width:600px) and (max-width:950px){
   width:30rem;
  }

`

export const Language = styled.div`
width:10rem;
height:4.8rem;

`
export const AddLogin = styled.div`
width:17.606rem;
height:4.8rem;
display:flex;

 #Login{
  height:4.8rem;
  width:40%;
  display:flex;
  justify-content:center;
  align-items:center;

  p {
    font-weight: 700;
    font-size:1.5rem;
    cursor:pointer;
    border-bottom:3px solid black;
  }
  
 }

 .custom-button{
  cursor:pointer;
 }

`

export const Nav = styled.div `
max-width:100%;
height:3.5rem;
padding:0 3rem;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
`

export const Main = styled.div `
max-width:100%;
padding:5px 4rem 0 4rem;  
`