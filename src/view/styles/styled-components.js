import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
position: fixed;
top: 0;
width: 100%;
height: 30px;
background-color: white;
padding: 10px;
font-size: 25px;
text-align: center;
`;

export const StyledDiv = styled.div`
margin-Top: 40px;
padding: 20px;
flex: 9
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StyledContent = styled.div`
display: flex;
align-items: center;
padding-block: 5px;

& > #right {
    flex: 8;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
& > #right > #top {
    flex: 1;
    font-size: 20px;
}
& > #right > #down {
    flex: 1;
}
& > #left {
    flex: 2;
    text-align: right;
}
`;

export const StyledImg = styled.img`
height: 80px;
padding: 0 46%;
background-color: black;
`;

export const StyledUser = styled.div`
display:flex;
& > img {
  flex:1;
  height: 50px;
  margin: auto 20px auto auto;
}
& > #right2 {
  flex:29;
}
`;