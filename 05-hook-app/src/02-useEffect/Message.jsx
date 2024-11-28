import { useEffect,useState } from "react"


export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0});    

    useEffect(() => {       
       // console.log('Componente montado: Message');
            const onMouseMove = ({x,y}) => {
                //const coors = {x,y};
                //console.log(coors);
                setCoords({x,y});
            }
                
            window.addEventListener('mousemove', onMouseMove);

            
        return () => {
          //  console.log('Componente desmontado: Message');
            window.removeEventListener('mousemove', onMouseMove);   
        }
    },[]);

  return (
    <>
        <h3>Usuario Ya Existe</h3>
        { JSON.stringify(coords) }

    </>
  )
}
