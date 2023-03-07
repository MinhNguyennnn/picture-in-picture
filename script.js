const videoElm = document.getElementById('video')
const btnStart = document.getElementById('btn-start');

//prompt to select media stream, pass to videoElm, then play

async function selectMediaStream () {
 try {
    //call the api to select the media screen
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElm.srcObject = mediaStream;
    videoElm.onloadedmetadata = () => {
        videoElm.play();
    }
 } catch(e) {
    console.log('oops, you get an error', e);
 }
}

btnStart.addEventListener('click', async () => {
    //disable the btn
    btnStart.disable = true;

    // request start pip
    await videoElm.requestPictureInPicture();

    //reset btn
    btnStart.disable = false;
})

selectMediaStream()