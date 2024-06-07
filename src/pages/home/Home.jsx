import React, { useEffect, useState, useCallback } from "react";
import "./style.css";
import fetchDataFromAPi from "../../utils/axios";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/card/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadData = useCallback(async () => {
    try {
      const { results } = await fetchDataFromAPi(`/trending/all/week?page=1`);
      setMovies(results);
      if (results.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error Caught During Home Page Api call", error);
    }
  }, []);

  const loadMoreData = async () => {
    try {
      const nextPage = page + 1;
      setPage(nextPage);
      const { results } = await fetchDataFromAPi(`/trending/all/week?page=${nextPage}`);
      setMovies((prevMovies) => [...prevMovies, ...results]);
      if (results.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error Caught During Home Page Api call", error);
    }
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="home">
      <ContentWrapper>
        <InfiniteScroll
          dataLength={movies.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </InfiniteScroll>
      </ContentWrapper>
    </div>
  );
};

export default Home;
