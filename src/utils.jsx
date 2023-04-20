import {
    lazy, Suspense, useEffect, useState
} from "react";

const LoadingComponent = () => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }, []);

        if (loading) {
            return (
                <div>
                    Loading....
                </div>
            );
        }
        return null;
    },
    loadable = (importFunc) => {
        const LazyComponent = lazy(importFunc);

        return (props) => (
            <Suspense fallback={LoadingComponent}>
                <LazyComponent {...props} />
            </Suspense>
        );
    };

export default loadable;
