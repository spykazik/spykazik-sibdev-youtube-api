import React, {useState} from 'react'
import youtube from '../api/youtube';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

export default () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    // const KEY = 'AIzaSyAfrWeEsFvzBsj_5R7vzRgylwMU2Pec2BI';
    const KEY = 'AIzaSyDQ2u0cK99bUtbMRj2DgkRr5L2bFbWBTGw';

    return (
        <>
            <Body>
                <SearchBar onSubmit={handleSubmit} videos={videos}/>
                <br/>
                <VideoDetail video={selectedVideo} />
                <br/>
                <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Body>
        </>
    );
    
    async function handleSubmit(searchTerm) {
        const { data: { items: videos } } = await youtube.get("search", {
          params: {
            part: "snippet",
            maxResults: 8,
            key: KEY,
            q: searchTerm,
          }
        });
        
        setVideos(videos);
        // setSelectedVideo(videos[0]);
    }
    
}

const Body = styled.div`
    margin: 0 200px 200px 0 ;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`