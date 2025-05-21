import css from './layout.module.css'

export default function Home() {
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
     </div>
     <div className={css.main}>Content</div>
     <div className={css.rside}>Rside</div>
      
    </div>
    
    
  );
}
