import { useState, useEffect, FunctionComponent } from 'react';

const NavItem: FunctionComponent<{
  active: string
  setActive: Function
  name: string
  route: string
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <a>
      <span
        className='mx-2 cursor-pointer hover:border-b-4 hover:text-blue-500'
        onClick={() => setActive(name)}>
        {name}
      </span>
    </a>
  ) : null
}



export default function Header() {

  const [active, setActive] = useState('')

  //later
  // useEffect(() => {
  //   if (pathname === '/') setActive('About')
  //   else if (pathname === '/projects') setActive('Projects')
  // }, [])

  return (
    <div className="eventCard">
      <span className='font-bold border-b-4 text-2xl border-blue-500'>
        {active}
      </span>

      <div className='text-2xl font-bold'>
        <NavItem
          active={active}
          setActive={setActive}
          name='About'
          route='/'
        />
        <NavItem
          active={active}
          setActive={setActive}
          name='Projects'
          route='/projects'
        />
      </div>
    </div>
  )
}