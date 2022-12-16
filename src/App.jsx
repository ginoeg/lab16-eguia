import ProductForm from './components/ProductForm';
import Products from './components/Products';

const App = () => {
  return <>
    <ProductForm />
    <table width={"100%;"}>
    <tr width={"100%;"}>
        <td width={"20%;"}  >
          <h3>ID</h3>
        </td>
        <td width={"15%;"} >
          <p>Creacion</p>
        </td>
        <td width={"10%;"}>
          <p>Nombre</p>
        </td>
        <td width={"5%;"}>
          <p>marca</p>
        </td>
        <td width={"5%;"}>
          <p>tipo</p>
        </td>
        <td width={"40%;"}>
            Actions
        </td>
        
      </tr>
    </table>
    <Products />
    
  </>;
}

export default App
