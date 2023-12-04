import styled from 'styled-components';

export const Styledbackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.1),
      rgba(46, 47, 66, 0.1)
    ),
    url(https://res.cloudinary.com/dhwh84bqq/image/upload/v1701649134/background/background_todo_iwg6vn.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #2e2f42;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  text-align: end;
  padding-top: 90px;
  padding-right: 30px;
  color: #fff;
  font-size: 50px;
`;

export const StyledWrapperText = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 60px;
  margin-right: 130px;
`;

export const StyledText = styled.p`
  width: 300px;
  color: #fff;
  text-align: start;
`;
