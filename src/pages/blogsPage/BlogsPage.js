import {useNavigate} from "react-router-dom";


export default function () {

    const navigate = useNavigate()
    const goToBack = () => {
        navigate(-1)
    }

    return(
        <>
            <button onClick={goToBack}>Back</button>
            <h1>Blogs Pagen</h1>
        </>
    )
}