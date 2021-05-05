import Link from 'next/link';
import Layout from '../components/Layout';
import TodoList from '../components/TodoList';

const TodoPage = () => (
  <Layout title="Todo | Next.js + TypeScript Test">
    <h1>Todo</h1>
    <p>This is the todo page</p>
    <TodoList />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default TodoPage;
