import React, { useState } from 'react';
import EnddoList from './feature/end-do-list/EnddoList';
import TodoList from './feature/to-do-list/TodoList';

function App(): JSX.Element {
  const [todoItem, setTodoItme] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const [endDoList, setEnddoList] = useState<string[]>([]);
  const [endTimeList, setEndTtimeList] = useState<string[]>([]);

  const createTodoItme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTodoItme(value);
  };

  const addTodoList = () => {
    const _todoList = [...todoList, todoItem];
    setTodoList(_todoList);
  };

  const removeDo = (idx: number) => {
    const _todoList = [...todoList];
    _todoList.splice(idx, 1);
    setTodoList(_todoList);
  };

  const addEndDo = (idx: number) => {
    const now = new Date();
    const endTimeTxt = now.toLocaleString();
    const _todoList = [...todoList];
    const _endDoList = [...endDoList, ..._todoList.splice(idx, 1)];
    setEndTtimeList([...endTimeList, endTimeTxt]);
    setEnddoList(_endDoList);
    setTodoList(_todoList);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="일정을 입력 해 주세요"
          onChange={(e) => createTodoItme(e)}
          style={{ width: '88%', height: '30px' }}
          value={todoItem}
        />
        <button
          onClick={addTodoList}
          style={{ height: '33px', margin: '0', width: '10%' }}
        >
          add job
        </button>
        <br />
        <br />
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        <div
          style={{
            borderRight: 'solid 1px #000',
            borderLeft: 'solid 1px #000',
            width: '50%',
            padding: '10px',
          }}
        >
          <div>todo list</div>
          <div style={{ height: '20px' }} />
          <hr />
          <ul style={{ padding: '0px' }}>
            <TodoList
              key="todolist"
              todoList={todoList}
              addEndDo={addEndDo}
              removeDo={removeDo}
            />
          </ul>
        </div>
        <div
          style={{
            borderRight: 'solid 1px #000',
            width: '50%',
            padding: '10px',
          }}
        >
          <div>end do list</div>
          <div style={{ height: '20px' }} />
          <hr />
          <ul style={{ padding: '0px' }}>
            <EnddoList endDoList={endDoList} endTimeList={endTimeList} />
          </ul>
        </div>
      </div>
    </>
  );
}
export default App;
