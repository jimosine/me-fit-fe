import keycloak from "../keycloak";

// export default function isUserRole(){
//     return keycloak.hasRealmRole("USER")
// }

export const isUserRole= ()=> keycloak.hasRealmRole("USER");

export const isContributorRole= ()=> keycloak.hasRealmRole("CONTRIBUTER");

