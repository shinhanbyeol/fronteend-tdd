import React from 'react';

interface props {
  endDoList: string[];
  endTimeList: string[];
}

const EnddoList: React.FunctionComponent<props> = ({
  endDoList,
  endTimeList,
}: props) => {
  const rendedList =
    endDoList.length > 0
      ? endDoList.map((end, index) => (
          <li key={`enddo-${index}`}>
            <span style={{ color: '#fff', backgroundColor: 'green' }}>
              {end}
            </span>
            &nbsp;
            <span>end time: {endTimeList[index]}</span>
          </li>
        ))
      : null;

  return <ul>{rendedList}</ul>;
};

export default EnddoList;
