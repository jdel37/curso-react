
import {useState} from 'react'
function Card({userName,name,isFollowing})
    {
        
     
       
        const [isFollow, setIsFollowing] = useState(isFollowing)
        const buttonClass = isFollow? 'siguiendo' : 'active'
       const buttonText = isFollow? 'Siguiendo' : 'Seguir'
        const handleClick = () => {
          setIsFollowing(!isFollow)
        }
    
   

        return(
<>
         
            
 <article className='flex justify-between w-[29em] text-[15px] py-[20px] px-[30px] hover:bg-[#070707] '>

<header className='flex align-center gap-[10px]'>
<img class="m-auto rounded-full object-cover w-[48px] h-[48px]" src={`https://unavatar.io/${userName}`} />
<div className='flex flex-col '>
    <div className='flex flex-row content-center'>
    <strong class="text-white hover:underline inline-block m-auto">{name}</strong>
    <svg  style={{display:isFollow?"block":"none"}} class='my-auto fill-white ml-[5px] w-[15px] h-[15px] p-[2px] bg-blue-500 rounded-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
  
    </div>
    
    <span  className='  opacity-[.6] m-auto'>@{userName}</span>
</div>
</header>
<aside className='flex  justify-center align-middle'>
<button   onClick={handleClick} className={buttonClass} >
  <span className='stopFollow2'> {buttonText}</span>
 <span className='stopFollow'>Dejar de seguir</span>
</button>

</aside>


            </article>
            
  </>      
        )
    }
    export default Card