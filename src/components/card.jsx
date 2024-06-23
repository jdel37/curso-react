import porfile from '../assets/porfile2.jpeg'
import {useState} from 'react'
function Card({userName,name,isFollowing})
    {
        let famousPeopleWithUsernames = [
            { name: "Albert Einstein", username: "GeniusEinstein" },
            { name: "Leonardo da Vinci", username: "ArtisticInventor" },
            { name: "Martin Luther King Jr.", username: "DreamChaserMLK" },
            { name: "Nelson Mandela", username: "FreedomMandela" },
            { name: "Mahatma Gandhi", username: "PeacefulGandhi" },
            { name: "Mother Teresa", username: "KindHeartTeresa" },
            { name: "Abraham Lincoln", username: "HonestAbe1865" },
            { name: "Winston Churchill", username: "VictoryChurchill" },
            { name: "Charles Darwin", username: "EvolutionDarwin" },
            { name: "Pablo Picasso", username: "ArtisticPicasso" },
            { name: "Michael Jordan", username: "AirJordan23" },
            { name: "Stephen Hawking", username: "CosmicHawking" },
            { name: "Steve Jobs", username: "VisionaryJobs" },
            { name: "Elon Musk", username: "SpaceXplorerMusk" },
            { name: "Marie Curie", username: "RadiantCurie" },
            { name: "Vincent van Gogh", username: "StarryVanGogh" },
            { name: "Beethoven", username: "SymphonyBeethoven" },
            { name: "Marilyn Monroe", username: "IconicMonroe" },
            { name: "Coco Chanel", username: "ChicChanel" },
            { name: "Walt Disney", username: "MagicDisney" },
            { name: "J.K. Rowling", username: "WizardlyRowling" },
            { name: "Mark Zuckerberg", username: "SocialZuckerberg" },
            { name: "Oprah Winfrey", username: "InspirationalOprah" },
            { name: "Malala Yousafzai", username: "FearlessMalala" },
            { name: "Bill Gates", username: "TechGates" },
            { name: "Amelia Earhart", username: "SkywardEarhart" },
            { name: "Neil Armstrong", username: "MoonWalkerNeil" },
            { name: "Alexander Graham Bell", username: "PhoneInventor" },
            { name: "Jane Austen", username: "NovelAusten" },
            { name: "William Shakespeare", username: "BardShakespeare" },
            { name: "Frida Kahlo", username: "VivaFrida" },
            { name: "Albert Schweitzer", username: "HumanitarianAlbert" },
            { name: "Galileo Galilei", username: "StellarGalileo" },
            { name: "Rosa Parks", username: "CourageousRosa" },
            { name: "Emily Dickinson", username: "PoeticEmily" },
            { name: "Stephen King", username: "HorrorKing" },
            { name: "Dalai Lama", username: "PeacefulLama" },
            { name: "Salvador Dalí", username: "SurrealDalí" },
            { name: "Bruce Lee", username: "LegendaryLee" },
            { name: "Muhammad Ali", username: "ChampAli" },
            { name: "Marie Antoinette", username: "RegalMarie" },
            { name: "Cleopatra", username: "QueenCleopatra" },
            { name: "Alexander the Great", username: "ConquerorAlexander" },
            { name: "Joan of Arc", username: "BraveJoan" },
            { name: "Pope Francis", username: "HolyFrancis" },
            { name: "Madonna", username: "PopIconMadonna" },
            { name: "Elvis Presley", username: "RockKingElvis" },
            { name: "Bob Dylan", username: "LyricDylan" },
            { name: "Audrey Hepburn", username: "ElegantHepburn" }
        ]
        const ranUsername= () => {
            const randomIndex = Math.floor(Math.random() * famousPeopleWithUsernames.length);
            return famousPeopleWithUsernames[randomIndex];
        };
        const [randomPerson, setRandomPerson] = useState(ranUsername());
        const [buttonText, setButtonText] = useState('Follow');
        const [isFollow,setFollow]=useState(false)
    const handleClick = () => {
        setButtonText(buttonText === 'Follow' ? 'Following' : 'Follow');
        setFollow(isFollow=== false ? true:false)
    }
    


        return(
<>
         
            
 <article className='flex    justify-between text-[15px] py-[20px] px-[30px] hover:bg-[#070707] '>

<header className='flex align-center gap-[10px]'>
<img class="rounded-full object-cover w-[48px] h-[48px]" src={`https://serpapi.com/search.json?q=${randomPerson.name}=google_images&ijn=0`} />
<div className='flex flex-col'>
    <div className='flex flex-row content-center'>
    <strong class="text-white hover:underline inline-block">{randomPerson.name}</strong>
    <svg style={{display:isFollow?"block":"none"}} className='my-auto fill-white ml-[5px] w-[15px] h-[15px] p-[2px] bg-blue-500 rounded-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
  
    </div>
    
    <span  className='  opacity-[.6]'>@{randomPerson.username}</span>
</div>
</header>
<aside className='flex  justify-center align-middle'>
<button onClick={handleClick} class=" z-10 box-border bg-white  margin-auto cursor-pointer hover:bg-blue-700 transition ease duration-300 text-black text-[15px] text-center font-bold py-1 h-[30px] px-[30px] rounded-full ml-[16px]">
   {buttonText}
 
</button>

</aside>


            </article>
            
  </>      
        )
    }
    export default Card