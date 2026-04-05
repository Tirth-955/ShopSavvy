import { useMutation, useQuery } from "@tanstack/react-query";
import { createProduct, getAllProducts } from "../lib/api";

export const useProducts = () => {
  const result = useQuery({ queryKey: ["products"], queryFn: getAllProducts });
  return result;
}

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,

    // onSuccess: (data) => {
    //   console.log("Product created:", data);
    // },

    // onError: (error) => {
    //   console.error("Error creating product:", error);
    // },
  });
};