
import './App.css'
import Card from './components/card'
import people from './assets/people.json'
function App() {
 

  return (
    <>
    <div className='border-[1px] m-[10px] border-slate-500 rounded-xl  py-[20px] bg-[#000000]'>
   
    <h1 className=' font-bold grid grid-flow-col text-[25px] ml-[40px]'>Who to Follow</h1>
    <div className=' grid grid-cols-2 grid-rows-1  max-[640px]:grid-cols-1'>
  
  

   {people.map(person => (
        <div key={person.username} className="person">
         <Card    userName={person.username} name={person.name} isFollowing={person.isFollowing}/>
        </div>
      ))}
   
    
    </div>
     
    </div>
 
  
    </>
  )
}

export default App
