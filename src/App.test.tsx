import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('form area test', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    // todo list 제목 여부 확인
    const todoTextExist = getByText('todo list');
    expect(todoTextExist);
    // end do list 제목 여부 확인
    const enddoTextExist = getByText('end do list');
    expect(enddoTextExist);
    // button 여부 확인
    const addJobBtnExist = getByText('add job');
    expect(addJobBtnExist);
    expect(getByPlaceholderText('일정을 입력 해 주세요'));
  });

  it('changes input', () => {
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('일정을 입력 해 주세요');
    fireEvent.change(input, {
      target: {
        value: 'TDD TEST',
      },
    });
    expect(input.getAttribute('value')).toBe('TDD TEST');
  });

  it('calls onInsert and clears input', () => {
    const onInsert = jest.fn(); // mock함수 - 호출된 것을 쉽게 확인할 수 있는 함수
    const { getByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('할 일을 입력하세요');
    const button = getByText('등록');
    // 수정하고
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });
    // 버튼 클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith('TDD 배우기'); // onInsert 가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(input).toHaveAttribute('value', ''); // input이 비워져야함
  });
});
