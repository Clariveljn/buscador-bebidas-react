import { Modal, Image, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando} = useBebidas()

    const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i = 1; i < 16; i++) {
            if(receta[`strIngredient${i}`])
            ingredientes.push(
                <li key={i}> 
                    {receta[`strMeasure${i}`]} {receta[`strIngredient${i}`]}
                </li>
            )
        }
        return ingredientes
    }
  return (

    !cargando && (
    
    <Modal show={modal} onHide={handleModalClick}>
        < Image
            src={receta.strDrinkThumb}
            alt={`Imagen receta ${receta.strDrink}`} 
        />
        <ModalHeader>
            <ModalTitle>{receta.strDrink}</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <div className="p-3">
                <h2>Instrucciones</h2>
                {receta.strInstructions}
                <h2>Ingredientes</h2>
                {mostrarIngredientes()}
            </div>
        </ModalBody>

    </Modal>
    )
  )
}

export default ModalBebida