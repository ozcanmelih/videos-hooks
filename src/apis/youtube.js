import axios from "axios";

const KEY = 'AIzaSyA4YQmux_t87xlezLhNb0NqKTO7jDgRpz0';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});