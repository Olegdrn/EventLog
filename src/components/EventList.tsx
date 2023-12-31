// With context
// import { useContext, createContext } from 'react';
// import { MyContext } from "../App";
import { useState, useEffect } from 'react';
import { Card } from "../types";
import { eventArray } from "../data";
import "../style/EventList.css";
import { Dispatch, SetStateAction } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';

type CurrentProps = {
  issues: Card[]
  setIssues: Dispatch<SetStateAction<Card[]>>
}

export default function EventList(props: CurrentProps) {
  // const { issues, setIssues } = useContext(MyContext)

  const [counter, setCounter] = useState<number>(0);
  const [selectedProducts, setSelectedProducts] = useState<any>(null)


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


  return (
    <div className="eventList">
      <div>
        <DataTable
          removableSort
          value={props.issues}
          responsiveLayout='stack'
          className='datatable'
          emptyMessage='Список событий пуст, дождитесь загрузки...'
          paginatorTemplate="FirstPageLink PrevPageLink  PageLinks  NextPageLink LastPageLink RowsPerPageDropdown"
          selectionMode="single"
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          //Optional
          // selectionMode="multiple"
          // selection={selectedProducts}
          // onSelectionChange={(e) => setSelectedProducts(e.value)}
          // dataKey="Importance"
          paginator
          rows={10}
          paginatorClassName='paginator'
          paginatorLeft
          rowsPerPageOptions={[5, 10, 25, 50]}
        >
          <Column field='Date' header='Дата' headerClassName='header' className='column'></Column>
          <Column field='Importance' header='Важность' headerClassName='header' className='column'></Column>
          <Column field='Equipment' header='Оборудование' headerClassName='header' className='column'></Column>
          <Column field='Message' header='Сообщение' headerClassName='header' className='column'></Column>
          <Column field='Employee' header='Ответственный' headerClassName='header' className='column'
            sortable
          >
          </Column>
        </DataTable>
      </div>
    </div>
  )
}

