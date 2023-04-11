import React from "react";
import withSupportUser from "./withSupportUser";

class Apps extends React.Component {

    render() {
        const {userRole, toggleUserRole} = this.props
        return (
            <div>
                <button onClick={() => toggleUserRole()}>
                    Toggle User Role: {userRole}
                </button>
                {this.props.children}
            </div>
        );
    }
}

export default withSupportUser(Apps)
