import corporateImg from './corporate.jpg'
function Main (props) { 
    return (
        <main>
            <section>
                <img src={corporateImg} alt="Corporate"/>
                <p>At {props.companyName} we leverage agile frameworks to provide 
                a robust synopsis for high-level overviews. 
                Iterative approaches to corporate strategy 
                foster collaborative thinking to further the 
                overall value proposition.</p>
            </section>
        </main>  
     )
 }
  
 export default Main;