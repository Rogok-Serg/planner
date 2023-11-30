import { Loader } from 'components/Loader/Loader';
import { Suspense, lazy, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodo } from 'redux/operations';
import { StyledHeader, StyledMain, StyledNav, StyledNavLink } from 'App.styled';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const TodoListPage = lazy(() => import('page/TodoListPage/TodoListPage'));

const App = () => {
  const dispatch = useDispatch();

  const getTasks = useCallback(() => {
    dispatch(getTodo());
  }, [dispatch]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

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
            <Route path="/todo" element={<TodoListPage />} />
          </Routes>
        </Suspense>
      </StyledMain>
    </>
  );
};

export default App;
