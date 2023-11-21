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
  const [marked, setmarked] = useState<boolean>(false);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(4);


  useEffect(() => {
    let i: number = 0;
    const arr: Card[] = [];

    const timerAction = setInterval((): void => {
      i = i + 1;
      setCounter((prevCounter: number) => prevCounter + 1);
      arr.push(eventArray[i]);
      console.log(typeof (eventArray[i].Date))
      props.setIssues(arr)
    }, 5000);

    return () => clearInterval(timerAction);
  }, []);

  const onPageChange = (e: any) => {
    setFirst(e.first);
    setRows(e.rows);
  }


  return (
    <>
      < div className="container" >
        {props.issues.map((card, ind) => {
          return (
            <CardPrime key={ind} className={marked
              ? " bg-blue-100 cursor-pointer w-10 p-0  m-3"
              : " cursor-pointer w-10 p-0 m-3"}
              onClick={() => { setmarked(!marked) }}>
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
                  <Avatar label="" size="xlarge" shape="circle" />
                  <p>{card.Employee}</p>
                </div>
              </div>
            </CardPrime>
          )
        })
        }
      </div>
      <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[2, 4, 6]} onPageChange={onPageChange} className='pag'></Paginator>
    </>
  )
}
