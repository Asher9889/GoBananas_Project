import React, { useEffect, useState } from "react";
import "./style.css"
import fetchDataFromAPi  from "../../utils/axios";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import MovieCard from "../../components/card/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";



const Home = ()=>{

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    const loadData = async()=>{
        setPage((prev)=> prev + 1)
        const {results} = await fetchDataFromAPi(`/trending/all/week?page=${page}`)
        setMovies((prevMovies)=> [...prevMovies, ...results])
        console.log(results)   
    }
    useEffect(()=>{
        loadData()

    },[])

    return (
        <div className="home">
          <ContentWrapper>
            {movies.map((movie, index)=>(<MovieCard key={index} data={movie}/>))}

            <InfiniteScroll
             dataLength={movies.length} //This is important field to render the next data
             next={loadData}
             hasMore={true}
             >

            </InfiniteScroll>
          </ContentWrapper>
        </div>
    )
}

export default Home;