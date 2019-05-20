import React from "react";
import Search from "../../components/Search";
import Dropdown from "../../components/Dropdown";
import ImageCard from "../../components/ImageCard";
import SearchButton from "../../components/SearchButton";


const SearchPage = () => (
    <div>
        <Search />
        <Dropdown />
        <SearchButton />
        <br></br>
        <ImageCard />

    </div>
)

export default SearchPage;