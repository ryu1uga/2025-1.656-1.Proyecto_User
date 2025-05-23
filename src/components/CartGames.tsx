import { useState } from "react"
import { useNavigate } from "react-router-dom"

export interface Games { 
  id : number
  name : string
}

interface ListGames {
  data : Games[]
}

const CartGames = (props : ListGames) => { 
  const navigate = useNavigate();
  const saveCart = localStorage.getItem("guardar-carrito")
  const initialCart: Games[] = saveCart ? JSON.parse(saveCart) : props.data

  const [cart, setCart] = useState<Games[]>(initialCart) 

  const removeGame = (id : number) => {
    const updateCart = cart.filter((elemento) => elemento.id !== id)
    setCart(updateCart)
    localStorage.setItem("guardar-carrito", JSON.stringify(updateCart))
  }

  const resetCart = () => {
    setCart(props.data) 
    localStorage.removeItem("guardar-carrito")
  }

  return <footer className="footer">
    <div className="card-group-style">
      <h3>Shopping Cart</h3>
      {
        cart.map((elemento: Games) => {
          return <div className="card-style position-relative" key={elemento.id}>
            <button type="button" className="btn-close position-absolute top-0 end-0 m-1" aria-label="Close" onClick={() => removeGame(elemento.id)}></button>
            <div className="game-img d-flex align-items-center justify-content-center">Game Portrair</div>
            <p className="texto">{elemento.name}</p>
          </div>
        })
      }
    </div>

    <div className="botones">
      <button className="confirmar" type = "button" onClick={()=>navigate("/pago")}>Confirm Order</button>
      <button className="cancelar">Cancel Order</button>
      <button className="btn btn-secondary" onClick={resetCart}>
          Reset Cart
        </button>
    </div>
  </footer>
}

export default CartGames