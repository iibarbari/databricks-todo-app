import classNames from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { TodoList } from '../components';
import { TodoContext } from '../contexts';

const Home: NextPage = () => {
    const { addTodo, reset } = useContext(TodoContext);

    return (
      <>
        <Head>
          <title>Databricks Todo App</title>
        </Head>

        <Navbar bg="dark" variant="dark" className={classNames('mb-3')}>
          <Container>
            <Link href="/" passHref>
              <Navbar.Brand>Databricks</Navbar.Brand>
            </Link>

            <Nav className={classNames('mr-0', 'd-flex', 'gap-3')}>
              <Button
                variant="outline-primary"
                onClick={() => reset()}
              >
                Load Data
              </Button>

              <Button
                onClick={() =>
                  addTodo({
                    title: 'New Todo',
                    userId: 1,
                    completed: false,
                  })}
              >
                Add new
              </Button>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <TodoList />
        </Container>
      </>
    );
  }
;

export default Home;
