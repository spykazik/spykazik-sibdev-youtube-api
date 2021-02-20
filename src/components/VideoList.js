import React from "react";
import styled from 'styled-components';
import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {

 if (!videos) return(
  <FilterPanel>
    <h3>Видео по запросу "video.id.videoId"</h3>
  </FilterPanel>);  

  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Div>
      {listOfVideos}
    </Div>
  );
}
const FilterPanel = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Div = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding-left: 200px;
  padding-right: 200px;
  justify-content: space-between;
  height: auto;
`
