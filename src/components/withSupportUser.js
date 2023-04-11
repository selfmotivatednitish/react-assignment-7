import React, { Component } from "react";
import { RoleConsumer } from "./userContext";

const withSupportUser = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)

            this.state = {
                userRole: "support"
            }
        }

        toggleUserRole = () => {
            console.log("button pressed")
            const newUserRole = this.state.userRole === "support" ? "user" : "support";
            this.setState({ userRole: newUserRole });
        };

        render() {
            return (
                <RoleConsumer>
                    {role => {
                        if(role === "support") {
                            return <WrappedComponent userRole={this.state.userRole} toggleUserRole={this.toggleUserRole} />
                        }
                        else {
                            return null;
                        }
                    }}
                </RoleConsumer>
            )

            // <WrappedComponent userRole={this.state.userRole} toggleUserRole={this.toggleUserRole} />
        }
    }


};

export default withSupportUser;
