import { Link } from "react-router-dom/dist"

const New = () => {
  return (
    <div>
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[100%] sm:w-[100%] lg:w-[1400px] mt-[100px] px-[20px] lg:p-0">
          <div className="mb-[60px] ">
            <h1 className="text-[20px] text-bgcontainer">Tin tức tài chính</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-x-[50px] gap-y-8 ">
            <div className="bg-gray-300 p-4 text-center w-[100%] h-[400px] rounded-lg">
              <Link className="w-[100%] h-[100%] block" to="/newItem">Item1</Link>
            </div>
            <div className="bg-gray-300 p-4 text-center w-[100%] h-[400px] rounded-lg">
              <Link className="w-[100%] h-[100%] block" to="/newItem">Item1</Link>
            </div> <div className="bg-gray-300 p-4 text-center w-[100%] h-[400px] rounded-lg">
              <Link className="w-[100%] h-[100%] block" to="/newItem">Item1</Link>
            </div> <div className="bg-gray-300 p-4 text-center w-[100%] h-[400px] rounded-lg">
              <Link className="w-[100%] h-[100%] block" to="/newItem">Item1</Link>
            </div> <div className="bg-gray-300 p-4 text-center w-[100%] h-[400px] rounded-lg">
              <Link className="w-[100%] h-[100%] block" to="/newItem">Item1</Link>
            </div> <div className="bg-gray-300 p-4 text-center w-[100%] h-[400px] rounded-lg">
              <Link className="w-[100%] h-[100%] block" to="/newItem">Item1</Link>
            </div> <div className="bg-gray-300 p-4 text-center w-[100%] h-[400px] rounded-lg">
              <Link className="w-[100%] h-[100%] block" to="/newItem">Item1</Link>
            </div> <div className="bg-gray-300 p-4 text-center w-[100%] h-[400px] rounded-lg">
              <Link className="w-[100%] h-[100%] block" to="/newItem">Item1</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default New