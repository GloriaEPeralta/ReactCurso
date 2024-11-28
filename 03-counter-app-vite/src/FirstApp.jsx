import Proptypes from 'prop-types';


function Encabezado ()  {
    return 'Encabezado de la aplicación';
}   

export const FirstApp = ({title,subtitle, name}) => {
    
    return (
        <>
        <h1>{Encabezado()} </h1>      
        {<h2>{title}</h2>}
        <p>{subtitle}</p>
        <p>{name}</p>   
        </>
    );
    }   

FirstApp.propTypes = {
    title: Proptypes.string.isRequired,
    subtitle: Proptypes.string.isRequired  
}
FirstApp.defaultProps = {  
   
    subtitle: 'Soy un subtítulo',
    name: 'Katy Peralta'
}

