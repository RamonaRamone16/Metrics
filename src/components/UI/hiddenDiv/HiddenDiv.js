import { React } from 'react';
import classes from './HiddenDiv.module.css'

export const HiddenDiv = ({children, visible, setVisible}) => {

  const rootClasses = [classes.hiddenDiv]

  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div
      className={rootClasses.join(' ')}
    >
      {children}
    </div>
  )
}