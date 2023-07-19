import React from 'react'
import s from './Contacts.module.css'

function Contacts() {
  return (
    <form className={s.form}>
      <h3>Zarezerwuj rozmowę z agentem nieruchomości</h3>
      <input placeholder='Write your phone'/>
      <input placeholder='Write your Name'/>
      <button>Sent</button>
    </form>
  )
}

export default Contacts