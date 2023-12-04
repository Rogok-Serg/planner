import {
  StyledWrapperText,
  StyledText,
  StyledTitle,
  Styledbackground,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Styledbackground>
      <StyledTitle>Програма Planner</StyledTitle>
      <StyledWrapperText>
        <StyledText>
          Найкраща програма для складання списків справ, яка стане вам у пригоді
          під час роботи й відпочинку.
        </StyledText>
      </StyledWrapperText>
    </Styledbackground>
  );
};

export default HomePage;
