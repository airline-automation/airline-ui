import { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

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
