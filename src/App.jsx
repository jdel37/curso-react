
import './App.css'
import Card from './components/card'
function App() {
 

  return (
    <>
    
  <div className='border-[1px] m-[10px] border-slate-500 rounded-xl  py-[20px] bg-[#000000] flex flex-col'>
   <h1 className=' font-bold text-[25px] ml-[30px]'>Who to Follow</h1>
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
