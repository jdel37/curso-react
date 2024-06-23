import porfile from '../assets/porfile2.jpeg'

function Card({userName,name,isFollowing})
    {
        return(

            
            <article className='flex align-center justify-between  '>

<header className='flex align-center gap-[4px]'>
<img class="rounded-full object-cover w-[48px] h-[48px]" src={`https://unavatar.io/${userName}`} />
<div className='flex flex-col'>
    <strong class="text-white">{userName}</strong>
    <span >{name}</span>
</div>
</header>
<aside className='flex align-center'>
<button class="bg-white text-black font-bold py-[3px] px-[8px] rounded-full ml-[16px]">
  Seguir
</button>

</aside>


            </article>
            
        
        )
    }
    export default Card