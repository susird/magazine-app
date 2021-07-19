import React from 'react';
import './styles.css';

export function Main() {
  return (
    <main className="main">
      <p className="italys-finest">Italy's finest</p>
      <p className="chefs-list">from amalfi lemons & anchovies to pecorino... chefs giorgio locatelli, angela hartnett, francesco mazzei & more share their italian passions</p>
      <dl class="other-contents">
        <dt class="other-contents-title">Secret of sake</dt>
        <dd class="other-contents-description">a love letter to japan's national drink</dd>
        <dt class="other-contents-title">Polish smoked cheese</dt>
        <dd class="other-contents-description">the fresh taste of the carpathian mountains</dd>
        <dt class="other-contents-title">Key lines & lionfish</dt>
        <dd class="other-contents-description">seek out the flavours of the forida keys</dd>
    </dl>
    </main>
  )
}
