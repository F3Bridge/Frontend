import {FaDiscord} from "react-icons/fa"
import { HiUserAdd } from "react-icons/hi"
import { DonateForm } from "../components/FriendsPage/DonateForm";
import { FaDonate } from "react-icons/fa";
//import { const } from '../connectors/coinbaseWallet';

// hard coded demo
const Friends = [
	{
		id: 1,
		discordhandle: "rane#123",
		avatar: FaDiscord,
		donateButton: "xd",
	},
	{
		id: 2,
		discordhandle: "rane#123",
		avatar: FaDiscord,
		donateButton: "xd",
	},
	{
		id: 3,
		discordhandle: "rane#123",
		avatar: FaDiscord,
		donateButton: "xd",
	},
]

export function FriendsPage() {
  return (
    <>
	<div className=" w-full h-screen bg-gradient-to-b from-slate-600 via-cyan-600 to-blue-400 ">
		  <h2 className="font-bold h-min pt-8 ml-6">Discord Friends</h2>
			<div className="flex">

			<div className=" ml-6 space-y-1 bg-blue-300/30 w-[300px] h-[500px] rounded-md shadow-md">
				{Friends.map(friend => (
					<div className="flex bg-green-400/20 border-2 border-black w-[300px] text-black rounded-md shadow-sm">
						{friend.avatar} {friend.id}.{friend.discordhandle}
						<button className="ml-14 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
							<span className=" px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ml-1">
								Follow
							</span>
						</button>
						{/*<FaDonate className="flex ml-8 mt-3 "/>*/}
					</div>
				))}

			</div>
			<div className="flex-col ml-8 bg-blue-300/30 shadow-md rounded-md">
				  <DonateForm />
		  </div>
			</div>
		  </div>
		  </>
  );
}
