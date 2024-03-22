import { getCollections } from "app/services/shopify/collection"
import { ProductsWrapper } from "../../../components/Store/ProductWrapper"
import { getProducts } from "../../../services/shopify/products"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const products = await getProducts()
  const { categories } = props.params

  return (
    <ProductsWrapper products={products} />
  )
}