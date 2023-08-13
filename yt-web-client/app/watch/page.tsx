'use client';
import {useSearchParams} from 'next/navigation';


export default function Watch(){
    const videoSrc= useSearchParams().get('v');
    const videoPrefix= 'https://storage.googleapis.com/julz-processed-movies/';


    
    return (
        <div>
            <h1>Watch page</h1>
            <video controls src={videoPrefix + videoSrc}></video>
        </div>
    )
}