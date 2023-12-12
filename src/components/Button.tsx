import React, { Component } from 'react'

interface Props {
  children: string;
  onClick: () => void;
  // a notação abaixo permite que a prop só aceite as opções especificadas, acusando erro em tempo de compilação caso outro valor seja utilizado.
  color?: 'primary' | 'danger' | 'success' ;
}

const Button=({ children, onClick, color = 'primary' }: Props) => {
    return (
      <button className={'btn btn-'+ color} onClick={onClick}>{children}</button>
    )
  }

export default Button