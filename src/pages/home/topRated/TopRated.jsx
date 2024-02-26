import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetchs'
import Carousel from '../../../components/carousel/Carousel'


export default function TopRated() {
    const [endPoint, setEndPoint] = useState("movie");

    const { data, loading } = useFetch(`/${endPoint}/top_rated`);
    console.log(data)

    const onTabChange = (tab) =>{
        setEndPoint(tab === "Movies" ? "movie" : "tv");
    }




  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">
                Top Rated
            </span>
            <SwitchTabs data = {["Movies", "TV Shows"]} onTabChange = {onTabChange}/>
        </ContentWrapper>
        <Carousel data = {data?.results} loading = {loading} endpoint={endPoint}/>
    </div>
  )
}
