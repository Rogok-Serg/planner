import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background: rgba(46, 47, 66, 0.4);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  padding: 45px 40px 40px 40px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.2),
    0px 1px 1px rgba(0, 0, 0, 0.14);
  border-radius: 24px;
  background: #fff;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledClose = styled.button`
  position: absolute;
  border: none;
  background: none;
  border-radius: 16px;
  top: 16px;
  right: 16px;
  font-size: 24px;
  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: rgba(18, 20, 23, 0.1);
  }
`;
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 12px 50px;
  margin-top: 28px;
  border-radius: 12px;
  background: #3470ff;
  border: #fff;
  color: #fff;
  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
`;
