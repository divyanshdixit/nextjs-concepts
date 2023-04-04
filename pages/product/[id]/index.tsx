// file for dynamic route page which have id:
import { useRouter } from "next/router";

const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.id; // 
    return <h1> Product detail page - {productId} </h1>
}

export default ProductDetail;