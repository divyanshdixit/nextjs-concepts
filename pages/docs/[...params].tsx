import { useRouter } from "next/router";

const DocsView = () => {
    const router = useRouter();
    // on first render params is undefined bcz of pre-rendering, to ignore it we give [] to params
    const {params = []} = router.query;
    console.log(params);

    return (
        <h1> {params.length === 2 ? `doc view for ${params[0]} ${params[1]}` : 'Doc view home page' }</h1>
    )
}

export default DocsView