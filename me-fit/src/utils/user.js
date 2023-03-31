import keycloak from "../keycloak";

export const isUserRole = () => keycloak.hasRealmRole("USER");

export const isContributorRole = () => keycloak.hasRealmRole("CONTRIBUTER");

