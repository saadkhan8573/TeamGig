import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="sticky top-0 h-screen bg-white shadow-md">
                <div className="px-5">
                    <h2 className="font-bold text-gray-300 my-4">Dashboard</h2>
                    <ul className="pl-2 ">
                        <NavLink exact to="/" className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer" activeClassName="bg-blue-200">
                            <li className="flex gap-3">
                                {/* <LineStyle /> */}
                                <p>Home</p>
                            </li>
                        </NavLink>
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            {/* <TrendingUp /> */}
                            <p>Analytics</p>
                        </li>
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            {/* <Timeline /> */}
                            <p>Sales</p>
                        </li>
                    </ul>
                </div>

                {/* <div className="px-5">
                    <h2 className="font-bold text-gray-300 my-4">Quick Menu</h2>
                    <ul className="pl-2 ">
                        <NavLink exact to="/users" className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer" activeClassName="bg-blue-200">
                            <li className="flex gap-3">
                                <Person />
                                <p>Users</p>
                            </li>
                        </NavLink>
                        <NavLink exact to="/products" className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer" activeClassName="bg-blue-200">
                            <li className="flex gap-3">
                                <Storefront />
                                <p>Products</p>
                            </li>
                        </NavLink>
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <AttachMoney />
                            <p>Transactions</p>
                        </li>
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <BarChart />
                            <p>Reports</p>
                        </li>
                    </ul>
                </div>

                <div className="px-5">
                    <h2 className="font-bold text-gray-300 my-4">Notifications</h2>
                    <ul className="pl-2 ">
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <MailOutline />
                            <p>Mail</p>
                        </li>
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <DynamicFeed />
                            <p>Feedback</p>
                        </li>
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <ChatBubbleOutline />
                            <p>Message</p>
                        </li>
                    </ul>
                </div>

                <div className="px-5">
                    <h2 className="font-bold text-gray-300 my-4">Staff</h2>
                    <ul className="pl-2 ">
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <WorkOutline />
                            <p>Manage</p>
                        </li>
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <Timeline />
                            <p>Analytics</p>
                        </li>
                        <li className="flex py-1 px-2 gap-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <Report />
                            <p>Reports</p>
                        </li>
                    </ul>
                </div> */}

            </div>
        </>
    )
}

export default Sidebar