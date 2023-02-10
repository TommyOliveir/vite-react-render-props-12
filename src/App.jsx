import Favorite from './Favorite'
import './App.css'
import Menu from './Menu'
import DataFetcher from '../DataFetcher'

function App() {


  return (
    <>
      <Menu />
      <Favorite />
      {/* 
another way children props = change renderprops to children in toggler component */}
      {/* <Toggler defaultOnValue={true}>
                {({on, toggle}) => {
                    return (
                    <Menu on={on} toggle={toggle}/>
                )}}
            </Toggler> */}
      <DataFetcher url="https://swapi.dev/api/people/1/">
        {(data, loading, ) => {
          return (
            loading ?
              <h1>Loading...</h1> : <p>{ JSON.stringify(data)} </p>

              
          )
        }}
      </DataFetcher>

    </>

  )
}

export default App
