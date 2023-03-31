import { Navigate } from "react-router-dom";
import keycloak from "../keycloak"

function KeycloakRoute({ children, role, redirectTo = "/login" }) {
    if (!keycloak.authenticated) {
        return <Navigate replace to={redirectTo} />;
    } else {
        return <>{children}</>;
    }

}
export default KeycloakRoute
