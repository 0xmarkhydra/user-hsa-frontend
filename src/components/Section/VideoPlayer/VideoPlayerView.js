import React from "react";

export const isIframeValid = (code) => {
  const iframeRegex = /<iframe.*?src="(.*?)".*?>/;
  return iframeRegex.test(code);
};

const VideoPlayerView = ({ video }) => {
  return isIframeValid(video) ? (
    <div
      dangerouslySetInnerHTML={{
        __html: video.replace(
          "<iframe",
          '<iframe style="width: 100%; height: 350px;"'
        ),
      }}
    />
  ) : (
    <video width="100%" height="350" controls>
      <source src={video} type="video/mp4" />
      Trình duyệt của bạn không hỗ trợ video.
    </video>
  );
};

export default VideoPlayerView;
