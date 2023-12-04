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
  color: #fff;

  @media screen and (max-width: 767px) {
    padding-top: 75px;
    padding-right: 15px;
    font-size: 25px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-right: 15px;
    font-size: 35px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 50px;
    padding-top: 90px;
    padding-right: 30px;
  }
`;

export const StyledWrapperText = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 767px) {
    padding-top: 30px;
    padding-right: 15px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-right: 15px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 60px;
    margin-right: 130px;
  }
`;

export const StyledText = styled.p`
  width: 300px;
  color: #fff;
  text-align: start;

  @media screen and (max-width: 767px) {
    width: 220px;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    width: 320px;
    font-size: 24px;
  }
`;
