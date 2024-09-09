export const API_KEY = "AIzaSyAq7owgLQA25uGWQMoiPgtYxC0vEnrCz74"
// export const API_KEY = "AIzaSyDD5BpZSzVz_mh1w079o8sZ2mpvsa6_gt8"
export  const YouTube_Videos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${API_KEY}`;

export const channel = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="UC5c9VlYTSvBSCaoMu_GI6gQ"&key=${API_KEY}`

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAq7owgLQA25uGWQMoiPgtYxC0vEnrCz74


const getdeatailbyvideoID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key="