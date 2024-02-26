import React from 'react'
import "./style.scss"
import {useSelector } from 'react-redux/es/hooks/useSelector'

export default function Genres({data}) {
    const {genres} = useSelector((state) => state.home);
  return (
    <div className="genres">
        {
            data?.map((g, index) =>{
                if(!genres[g]?.name) return;
                return (
                    <div className="genre" key={index}>
                        {genres[g]?.name}
                    </div>
                )
            })
        }
    </div>
  )
}
