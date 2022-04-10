import React from 'react'

import '../styles/App.css';
const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {
  const years=Object.keys(data)
  const [selected, setSelected] = React.useState(null)
  const [movielist,setMovieList] = React.useState([])
  
  const handleChange = (event) =>{
    setSelected(event.target.value)
    
  }

  function handleList (){
    if(selected!==null)
    {
      setMovieList(data[selected]);
    }

    console.log(movielist)
  }

  React.useEffect(() => {
    handleList();
  
  }, [selected])
  
  return (
    <div className='App' id="main">
      <select  onChange={handleChange}>
        <option value={null}> </option>
        {
          years.map((year)=>(
            <option key={year} value={year}>{year}</option>
          ))
        }
      </select>
        <div id="selected-year">{selected?
        (<p>selected year-{selected}</p>):
        (<p>No year Selected</p>)}
        </div>
        <ul>
          {movielist.map((movie,index)=>(
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
  )
}


export default App;
