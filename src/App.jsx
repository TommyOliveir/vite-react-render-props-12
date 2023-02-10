import Favorite from './Favorite'
import './App.css'
import Menu from './Menu'

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
    </>

  )
}

export default App
