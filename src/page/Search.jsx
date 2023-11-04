import { useEffect,  useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState(''); // Từ khóa tìm kiếm mặc định
    const [searchResults, setSearchResults] = useState([]);
    const apiUrl = `https://admin.traveltreasurepro.site/api/list-post?search=${encodeURIComponent(searchTerm)}`;

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // Cập nhật kết quả tìm kiếm
                setSearchResults(data);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }, [apiUrl]);

    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    console.log(searchResults.data?.data.data);
    return (
        <div className=''>
            <div className='mt-[100px] w-[100%] lg:w-[1400px] mx-auto'>
                <div className='mb-[40px]'>
                    <h1 className='text-[32px]'>Search</h1>
                </div>
                <div className='text-center '>
                    <div className='flex items-center justify-center w-[100%] mb-[100px]'>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleInputChange}
                            className="text-colorBlack text-[20px] py-[6px] px-[48px] border border-[#22dddd] outline outline-offset-2 outline-4 search-item "
                        />
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4  lg:gap-[20px] sm:gap-[50px] gap-y-[40px]  rounded-lg p-[40px] bg-[#fff]"
                    >
                        {searchResults.data?.data.data.map((item) => (
                            <Link
                                className="hoverbgscale homelistitem item-search w-[100%] md:w-[100%] lg:w-[100%]   hover:shadow-2xl  hover:ease-in transition duration-500 "
                                to={`/detail/${item.id}`}
                                key={item.id}
                            >
                                <div
                                    className="rounded-s overflow-hidden mb-[20px] "
                                >
                                    <img
                                        src={`https://admin.traveltreasurepro.site/public/upload/articles/${item.picture}`}
                                        alt={item.picture}
                                        className="hoverbgscaleitem homelistitem-img hover:ease-in transition duration-500"
                                    />
                                </div>
                                <div className="p-[10px]">
                                    <div className="h-[60px] mb-[20px]">
                                        <div className="line-clamp-3 text-[12px] font-normal text-[#6C757D]  homelistitem-name">{item.name}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search