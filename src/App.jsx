
import './App.css'
import Card from './components/card'
function App() {
 

  return (
    <>
    <div className='border-2 border-slate-500 py-[20px] px-[15px] rounded-md bg-[#000000] flex flex-col gap-[16px]'>
    <Card  userName="hotdog" name="chantre"/>
    <Card  userName="ariana grande" name="chantre"/>
    <Card  userName="lco" name="chantre"/>
    <Card  userName="colombia" name="chantre"/>
    <Card  userName="happy" name="chantre"/>
    </div>
     
    </>
  )
}

export default App
