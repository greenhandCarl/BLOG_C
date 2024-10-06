import {
    useLocation,
    useNavigate,
    useSearchParams,
    useParams,
    NavigateFunction,
    Location
} from 'react-router-dom'
import { ComponentType } from 'react'

type ChildType = ComponentType<{
    navigate: NavigateFunction,
    location: Location,
    searchParams: ReturnType<typeof useSearchParams>
    params?: Record<string, string | undefined>,
}>;

const withRouter = (Child: ChildType) => {
    return (childProps: object) => {
        const location = useLocation();
        const navigate = useNavigate();
        const searchParams = useSearchParams();
        const params = useParams();
        return <Child
            { ...childProps }
            navigate={navigate}
            location={location}
            searchParams={searchParams}
            params={params}
        />;
    }
}

export default withRouter
