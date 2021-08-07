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
    const addJobBtnExist = getByText('등록');
    expect(addJobBtnExist);
    expect(getByPlaceholderText('할 일을 입력하세요'));
  });

  it('changes input', () => {
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('할 일을 입력하세요');
    fireEvent.change(input, {
      target: {
        value: 'TDD TEST',
      },
    });
    expect(input.getAttribute('value')).toBe('TDD TEST');
  });

  it('calls onInsert and clears input', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('할 일을 입력하세요');
    const button = getByText('등록');
    const onRemove = jest.fn();
    button.onclick = onRemove;

    // 수정하고
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });

    expect(input.textContent === 'TDD 배우기'); // input 내용 검증
    // 버튼 클릭
    fireEvent.click(button);
    expect(input).toHaveAttribute('value', ''); // input이 비워져야함
  });
});
