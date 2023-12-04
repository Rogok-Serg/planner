import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding-right: 40px;
`;

export const StyledTitle = styled.h1`
  text-align: center;
`;

export const StyledButtonCreate = styled.button`
  padding: 20px 80px;
  background: #50c0e6;
  color: #000;
  border-radius: 5px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #fff;
    background: #0362fc;
  }
`;

export const StyledBlockButton = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    padding-left: 30px;
  }
`;
