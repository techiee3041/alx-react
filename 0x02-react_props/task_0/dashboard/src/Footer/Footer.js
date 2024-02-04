import React from 'react'
import './Footer.css'
import { getFooterCopy, getFullYear } from '../utils/utils'

export const Footer = () => {
  return (
    <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
    </div>
  )
}