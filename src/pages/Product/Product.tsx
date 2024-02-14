import { useParams } from "react-router-dom";

export function Product() {
    const {id} = useParams();

    console.log('hi');
    console.log('hito');

    return <>
        Product - {id}
    </>;
}