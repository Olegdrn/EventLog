import { useState, useEffect, FunctionComponent } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "../style/Header.css";
import { Card } from "../types";
import { Dispatch, SetStateAction } from 'react';

type CurrentProps = {
  issues: Card[]
  setIssues: Dispatch<SetStateAction<Card[]>>
}

interface NavItem {
  label: string;
  command: any;
}


export default function Header(props: CurrentProps) {
  const [value, setValue] = useState<string>('')

  const Navlist: NavItem[] = [
    {
      label: 'Таблица', command: () => {
        window.location.href = '/';
      },
    },
    {
      label: 'Карточки', command: () => {
        window.location.href = '/Cards'
      }
    }
  ]
  let filtered: Card[] = [];

  const searching = () => {
    let regexp: RegExp = new RegExp(value, 'mi');

    filtered = props.issues.filter((card: Card) => {
      return regexp.test(card.Message);
    });
    props.setIssues(filtered)
  }

  return (
    <div className="eventCard">
      <Menubar
        className='nav'
        model={Navlist}
      />
      <div className='rightSide'>
        <InputText placeholder="" type="text" className="input"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button label="Поиск" className="button" onClick={searching} />
      </div>
    </div>
  )
}