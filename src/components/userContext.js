import React from "react";

const UserRoleContext = React.createContext("support")

const RoleProvider = UserRoleContext.Provider
const RoleConsumer = UserRoleContext.Consumer

export {RoleProvider, RoleConsumer}