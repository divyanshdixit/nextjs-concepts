import {useRouter} from 'next/router';

const ReviewProduct = () => {
    const router = useRouter();
    console.log(router);
    const {reviewId, id} = router.query;
    return (
        <h1> review number - {reviewId} for product id - {id} </h1>
    )
}

export default ReviewProduct