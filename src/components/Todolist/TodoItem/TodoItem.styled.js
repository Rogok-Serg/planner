import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  border-bottom: 2px solid #000;
  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: rgba(18, 20, 23, 0.1);
  }
`;

export const StyledWrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledWrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  color: #000;
  border-radius: 5px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #fff;
    background: #0362fc;
  }
`;
