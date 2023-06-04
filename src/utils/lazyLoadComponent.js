import LoadingSpinner from "components/LoadingSpinner";
import { Suspense } from "react";

function LazyLoadComponent(Component) {
    return function SuspenseComponent(props) {
        return (
            <Suspense fallback={<LoadingSpinner />}>
                <Component {...props} />
            </Suspense>
        );
    };
}

export default LazyLoadComponent;
