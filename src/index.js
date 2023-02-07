//console.log('Hello World')

import { createRoot } from 'react-dom/client';
import React from 'react';
const App = () =>{
    return (
        <div>
            <header>
                Hello World
            </header>
        </div>
    )
}




const container = document.getElementById('app')
const root = createRoot(container); 
root.render(<App />)