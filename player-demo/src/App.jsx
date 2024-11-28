//import ReactPlayer from 'react-player';


import YoutubePlayer from 'react-player/youtube';

function App() {
  const handleButton = () => {
    alert('Button clicked');  
  } 
  return (
    
    <div>
      <h2>React Player</h2>
      <YoutubePlayer url='https://youtu.be/aRDi7ep7bW4' 
      controls={true} playing={true} width={800} height={400} 
      />
      <br />
      <button onClick={handleButton}>Botón</button>
    </div>
  )   
}

export default App

//  <ReactPlayer url='https://www.youtube.com/watch?v=eFtiwNUDIcs&list=RDeFtiwNUDIcs&start_radio=1' 
//controls={true}