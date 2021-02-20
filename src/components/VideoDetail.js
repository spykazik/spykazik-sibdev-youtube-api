import React from "react";
import styled from "styled-components";

export default ({ video }) => {
  if (!video) return <div style={{display: 'flex', justifyContent: 'center'}}></div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <>
      <Wrap>
        <Div>
          <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src={videoSrc}
          />
        </Div>
        <DesWrap elevation={6} style={{ padding: "15px" }}>
          <h4>
            {video.snippet.title} - {video.snippet.channelTitle}
          </h4>
          <h5>
            {video.snippet.channelTitle}
          </h5>
          <h6>{video.snippet.description}</h6>
        </DesWrap>
      </Wrap>
    </>
  );
}

const Div = styled.div`
  
`
const DesWrap = styled.div`
  
`
const Wrap = styled.div`
  width: 245px;
  height: 226px;
`
//React.Fragment