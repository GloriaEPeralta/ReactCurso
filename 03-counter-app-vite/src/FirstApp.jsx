import Proptypes from 'prop-types';


function Encabezado ()  {
    return 'Encabezado de la aplicación';
}   

export const FirstApp = ({title,subtitle}) => {
    
    return (
        <>
        <h1>{Encabezado()} </h1>      
        <h2>{title}</h2>
        <p>{subtitle}</p>
        </>
    );
    }   

FirstApp.propTypes = {
    title: Proptypes.string.isRequired,
    subtitle: Proptypes.string.isRequired  
}
FirstApp.defaultProps = {  
    title : 'titulo por defecto',
    subtitle: 'Soy un subtítulo'
}

