import React from 'react';
import './styles.css';
import ngLogo from './ng-logo.png'

export function Header() {
  return (
    <header className="header-container">
      <div className="logo-title-container">
        <img className="image-logo" src={ngLogo} alt="national geographic logo" />
        <h1 className="title-container">
          <span className="title">Traveller</span>
          <span className="title">food</span>
        </h1>
      </div>
      <aside className="other-section">
        <h4>peking duck</h4>
        <p>the story of a chinese classic</p>
      </aside>
    </header>
  )
}