import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { TextField } from '@mui/material';

const Home: NextPage = () => {
  const [netto, setNetto] = useState(0);
  const [stunden, setStunden] = useState(40);
  const [miete, setMiete] = useState(600);
  const [heizung, setHeizung] = useState(100);
  const [stundenlohn, setStundenlohn] = useState(NaN);

  const updateStundenlohn = () => {
    let regelleistung = 449;

    let lohn = (netto - (miete + heizung + regelleistung)) / (4 * stunden);

    setStundenlohn(lohn);
  };

  return (
    <div >
      <Head>
        <title>Lohntdat?</title>
      </Head>

      <main>
        <h1>Dein effektiver Stundenlohn { isFinite(stundenlohn) && <span>{stundenlohn.toPrecision(2)}€</span>}</h1>

        <TextField id="outlined-number" label="Netto Monatsgehalt" variant="standard"
          type="number"
          value={netto}
          onChange={(e) => {setNetto(Number(e.target.value)); updateStundenlohn() }} />

        <TextField id="outlined-number" label="Arbeitsstunden pro Woche" variant="standard"
          type="number"
          value={stunden}
          onChange={(e) => {setStunden(Number(e.target.value)); updateStundenlohn() }} />

        <TextField id="outlined-number" label="Kaltmiete und Nebenkosten pro Monat" variant="standard"
          type="number"
          value={miete}
          onChange={(e) => {setMiete(Number(e.target.value)); updateStundenlohn() }} />

        <TextField id="outlined-number" label="Heizkosten pro Monat" variant="standard"
          type="number"
          value={heizung}
          onChange={(e) => {setHeizung(Number(e.target.value)); updateStundenlohn() }} />
      </main>
    </div>
  )
}

export default Home
