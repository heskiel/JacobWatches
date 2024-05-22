import {Route} from 'react-router-dom'

const importAll = (r) => {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../assets/images', false));

//Get Routs
const GetRoutes = (allRoutes) => 

    allRoutes.map((route) => {
        if (route.route) {
            return (
                <Route
                    exact
                    path={route.route}
                    element={route.page}
                    key={route.key}
                />
            );
        }

        return null;
    }) 
 


export { images,GetRoutes }