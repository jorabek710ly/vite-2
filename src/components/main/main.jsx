// import Gadget from "../gadget/gadget";
import React from 'react';
import Gadget from '../gadget/gatged'
import { gadgetData } from "../../static/index";

const Main = () => {
    return (
        <main className="site_main">
            {
                gadgetData?.map((data) => (
                    <Gadget key={data.id} {...data} />
                ))
            }
        </main>
    )
}
export default Main;