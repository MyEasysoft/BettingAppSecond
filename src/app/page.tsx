import Image from 'next/image';
import css from './layout.module.css'

export default function Home() {
  const data:any = [
    {title:"Footbball",src:"https://static-assets.nexray.app/assets/sports/1.svg"},
    {title:"Basketball",src:"https://static-assets.nexray.app/assets/sports/1.svg"},
    {title:"Volleyball",src:"https://static-assets.nexray.app/assets/sports/1.svg"},
    {title:"Tennis",src:"https://static-assets.nexray.app/assets/sports/1.svg"},
    {title:"Formula 1",src:"https://static-assets.nexray.app/assets/sports/1.svg"},
  ];
  return (
    
    <div className={css.main_content}>
      
     <div className={css.aside}>
        <div className="p-4 pt-8">
          <select className={css.no_border}>
            <option>Events By Date</option>
          </select>
        </div>
        <div className="pl-4">
          <span className={css.small_header}>FULL LIST</span>
        </div>
        <div>
         <LinkItems data={data}/>
        </div>
     </div>
     <div className={css.main}></div>
     <div className={css.rside}></div>
      
    </div>
    
    
  );
}


function LinkItems({ data }: { data: object []}){
  return (
    <div>
      {data.map((itm:any,key:any)=>{
        return(
                <div key={key} className={css.flex_row_links}>
                  <Image
                    src={itm.src}
                    alt="Picture of the author"
                    width={15}
                    height={15}
                  />
                  <span>{itm.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"><title>Group 5</title><g fill="none"><path d="M6.5 10.779L2.482 13l.768-4.705L0 4.964l4.491-.686L6.5 0l2.009 4.278L13 4.964 9.75 8.295 10.516 13z"/><path d="M6.5 0l2.008 4.278L13 4.964 9.75 8.295 10.516 13 6.5 10.779 2.482 13l.768-4.705L0 4.964l4.491-.686L6.5 0zm1.33 5.186L6.498 2.352l-1.33 2.834-3.095.472 2.244 2.3-.518 3.17 2.7-1.492 2.697 1.491-.514-3.17 2.242-2.299-3.096-.472z" fill="#888"/></g></svg>
                
                </div>
              )
      })}
          
    </div>
    
  )
}