import { Route, Routes} from "react-router-dom";
import { router } from "./router";




const AppRouter = ()=> { 
    return(
        <Routes>
            {router.map((route, idx) => {
                return (
                    route.element && (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={(props) => 
                                <route.element {...props} />
                            }
                        />
                    )
                )
            })}
        </Routes>
    )
}

export default AppRouter