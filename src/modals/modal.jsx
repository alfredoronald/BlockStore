
import './modal.css'


export default function Modal({children,modal,setModal}){
   
    return(
        <>
            {modal &&  
                <section className='modal-movies'>  
                    <div className='wacth-movie'>
                        <div className='image-movie'>
                            <img 
                            src="../../public/Hard Kil-ejem.png" 
                            alt="hard kill"
                            className='rotated-card'
                            />
                        </div>   
                            <div className="description-movie">
                                <div className='header-modal'>
                                    <button 
                                        onClick={() => setModal(!modal)}
                                        className='button-delete'
                                        >
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon-tabler"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                                    </button>
                                </div>
                                    <h1>Title</h1> 
                                <p>{children}</p>
                                <p className='movie-date'> 2024 - Categoty - duration </p>
                                <button className='button-now'>VER AHORA</button>
                                <button className='button-after'>VER DESPUES</button>
                            </div>
                    </div>
                </section>   
            }    
        </>

    )
}