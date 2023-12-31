import { useState, useEffect } from 'react';
import { Card } from "../types";
import { eventArray } from "../data";
import "../style/EventCard.css";
import { Dispatch, SetStateAction } from 'react';
import { Card as CardPrime } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Paginator } from 'primereact/paginator';

type CurrentProps = {
  issues: Card[]
  setIssues: Dispatch<SetStateAction<Card[]>>
}



export default function EventCard(props: CurrentProps) {


  const [counter, setCounter] = useState<number>(0);
  const [clickArr, setClickArr] = useState<boolean[]>([]);
  const marked: boolean[] = [];
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(6);
  const [keyPress, setKeyPress] = useState<boolean>(false)


  useEffect(() => {
    let i: number = 0;
    const arr: Card[] = [];

    const timerAction = setInterval((): void => {
      i = i + 1;
      setCounter((prevCounter: number) => prevCounter + 1);
      arr.push(eventArray[i]);
      props.setIssues(arr)
    }, 5000);

    return () => clearInterval(timerAction);
  }, []);

  const onPressKey: any = (e: React.KeyboardEvent) => {
    if (e.key === " ") {
      setKeyPress((prev) => !prev);
    }
    
  }

  useEffect(() => {
    document.addEventListener("keydown", onPressKey);
    return () => {
      document.removeEventListener("keydown", onPressKey);
    };
  }, [keyPress]);



  return (
    <>
      < div className="container">
        {props.issues.slice(first, first + rows).map((card: Card, ind: number) => {
          marked[ind] = false;
          return (
            <CardPrime key={ind}
              className={
                clickArr[ind]
                  ? " bg-blue-100 cursor-pointer w-10 p-0 m-2"
                  : "bg-gray-200  cursor-pointer w-10 p-0 m-3"}
              onClick={() => {
                marked[ind] = true
                setClickArr(marked)
                setKeyPress(false)
              }}
            >
              <div
                className={keyPress && clickArr[ind] ? "bg-red-100 p-1" : ""}
              >
                <div className='list'>
                  <div className='rows'>
                    <p>Дата</p>
                    <p>Важность</p>
                    <p>Оборудование</p>
                    <p>Сообщение</p>
                  </div>
                  <div className='description'>
                    <p>{card.Date}</p>
                    <p>{card.Importance}</p>
                    <p>{card.Equipment}</p>
                    <p>{card.Message}</p>
                  </div>
                  <div className='person'>
                    <Avatar label="" size="xlarge" shape="circle" color='blue' />
                    <p>{card.Employee}</p>
                  </div>
                </div>
              </div>
            </CardPrime>
          )
        })
        }
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={props.issues.length}
        onPageChange={(e: any) => {
          setFirst(e.first);
          setRows(e.rows)
        }}
        rowsPerPageOptions={[6, 9, 12]}
        leftContent
      />
    </>
  )
}
