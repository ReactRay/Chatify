
import { useParams } from "react-router-dom";

export function AlbumPage() {

    const params = useParams()

    console.log(params)


    return <div>AlbumPage</div>;
}