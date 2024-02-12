import "./videoplayer.css";

const VideoPlayer = () => {
  return (
    <div className='vid-con'>
      <video className='' controls>
        <source src='./' type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoPlayer;
