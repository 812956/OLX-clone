import styled from "styled-components";
import product2 from '../../images/product2.jpeg'

export const Container = styled.div`
 max-width:100%;
 height:100%;
 bakcground-color:black;
 

  ul {
   width:100%;
   display:flex;
   flex-wrap:wrap;
   padding:0;
   list-style:none;

   li {
     width:24%;
     height:266px;
     margin:5px;
     border:1px solid gray;
     border-radius:3px; 
   }

  }

  #image {
    width:100%;
    height:70%;
    img{
     width:100%;
     height:100%;
    }
  }

  #contant {
   width:100%;
   height:30%;
   padding-top:10px;
   padding-right:10px;
   padding-left:10px;
   line-height:20px;


   h3{
       font-size: 20px;
       font-weight: 700;
   }

   h4{
       font-size: 14px;
    }

    p{
      font-size:13px;
    }
  }


  @media(max-width:1082px){
   
   ul > li {
     width:23%;
   }

  }
`