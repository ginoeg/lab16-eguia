import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getProducts, updateProduct } from "../api/productsApi";

const Products = () => {
  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (data) => data.sort((a, b) => b.id - a.id),
  });
  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>{error.message}</div>;
  
  return products.map((product) => (
    
      
    <div key={product.id} style={{textAlign:"center"}} >
      <tr>
        <td width={"20%;"}>
          <h3>{product.id}</h3>
        </td>
        <td width={"15%;"}>
          <p>{product.createdAt}</p>
        </td>
        <td width={"10%;"} >
          <p>{product.name}</p>
        </td>
        <td width={"5%;"}>
          <p>{product.marca}</p>
        </td>
        <td width={"5%;"}>
          <p>{product.tipo}</p>
        </td>
        <td width={"15%;"}>
          <button style={{width:"100%"}}
          onClick={() => {
            editProductMutation.mutate(product.id);
          }}
          >
            Edit
            </button>
        </td>
        <td width={"15%;"}>
          <button style={{width:"100%"}} 
          onClick={() => {
            deleteProductMutation.mutate(product.id);
          }} 
          >
            Delete
            </button>
        </td>
      </tr>
    </div>
    
  ));
  
};

export default Products;
