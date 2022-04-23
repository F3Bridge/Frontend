export function DonateForm() {
	return (
		<div className="">
		<form >
  <div className="mb-6">
    <label htmlFor="Currency" className="block mb-2 text-md font-medium text-red-600 dark:text-gray-900">Currency</label>
    <input type="currency" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="WMATIC" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="amount" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-900">Amount</label>
    <input type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="amount" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-900">Per</label>
    <input type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  {/* Checkbox */}
  <div className="flex items-start mb-2">
    <div className="flex items-center h-5">
      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
  </div>

  <div className="mb-6">
    <label htmlFor="message" className="block mb-2 text-md font-medium text-red-600 dark:text-gray-900">Post on timeline</label>
    <input type="message" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hi, I would like to support your owrk with 10 WMATIC/month!" required/>
  </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[500px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
	)
}
