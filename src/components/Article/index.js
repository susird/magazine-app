import React from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import './styles.css';

export function Article () {
  return (
    <article className="container">
      <Header />
      <Main />
      <Footer />
    </article>
  )
}

