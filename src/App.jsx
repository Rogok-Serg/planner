import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledHeader, StyledMain, StyledNav, StyledNavLink } from 'App.styled';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const TodoListPage = lazy(() => import('page/TodoListPage/TodoListPage'));

const App = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/todo">Todo</StyledNavLink>
        </StyledNav>
      </StyledHeader>
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoListPage />}></Route>
          </Routes>
        </Suspense>
      </StyledMain>
    </>
  );
};

export default App;
