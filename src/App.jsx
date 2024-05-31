import React from 'react';
import { FlexContent, Footer, Hero, Sales, Stories } from './components';
import { 
  heroapi, 
  popularsales, 
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI
} from './data/data.js'; 

const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExist />
        <FlexContent endpoint={highlight} ifExist/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
)
}

export default App