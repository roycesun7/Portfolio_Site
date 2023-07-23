import React from 'react';

export default function Navbar(props) {
  return (
    <nav className="bg-blue-900 fixed top-0 left-0 right-0 h-20 text-white">
      <div className="container mx-auto flex items-center justify-around h-full">
        <NavItem currentPage={props.page} keyVal={0} handleClick={props.handleClick}>Home</NavItem>
        <NavItem currentPage={props.page} keyVal={1} handleClick={props.handleClick}>Experience</NavItem>
        <NavItem currentPage={props.page} keyVal={3} handleClick={props.handleClick}>Projects</NavItem>
        <NavItem currentPage={props.page} keyVal={4} handleClick={props.handleClick}>Contact</NavItem>
      </div>
    </nav>
  );
}

function NavItem(props) {
  let styling = "text-xl font-medium cursor-pointer py-4 px-8 border-b-4 border-transparent";
  if (props.keyVal === props.currentPage) {
    styling += " border-white";
  } else {
    styling += " hover:border-white";
  }

  return (
    <div className={styling} onClick={() => { if (props.keyVal !== props.currentPage) { props.handleClick(props.keyVal) } }}>
      {props.children}
    </div>
  );
}
