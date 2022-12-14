import { GoSearch } from "react-icons/go";

function SearchForm() {
  // Olhar no Mirflix

  return (
    <>
      <div className="flex justify-center mt-8">
        <form className="w-1/3 shadow-lg">
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <GoSearch />
                </div>
                <input type="search" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by card name" required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
      </div>
      <div className="p-4">
        <p className="p-1 font-bold">Results:</p>
        <ul>
          <li className="p-1 hover:underline"><a href="#">Search Result #1</a></li>
          <li className="p-1 hover:underline"><a href="#">Search Result #2</a></li>
          <li className="p-1 hover:underline"><a href="#">Search Result #3</a></li>
          <li className="p-1 hover:underline"><a href="#">Search Result #4</a></li>
        </ul>
      </div>
    </>
  );
};

export default SearchForm;