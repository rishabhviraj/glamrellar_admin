import React from 'react';
const Login = React.lazy(() => import('../../../admin/views/pages/login/Login'))
const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the web dashboard!</p>
            {/* <Login /> */}
        </div>
    );
};

export default Dashboard;