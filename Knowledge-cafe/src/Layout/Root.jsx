import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className=" max-w-6xl p-5 mx-auto">
            <Outlet/>
        </div>
    );
};

export default Root;