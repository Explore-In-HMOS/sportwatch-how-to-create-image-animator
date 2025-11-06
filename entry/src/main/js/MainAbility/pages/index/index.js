import app from '@system.app';

export default {
    data: {
        date: 'SUN 10/19',
        time:"12:25",
        frames: [
            { src: "/common/assets/frame_page_0002.png" },
            { src: "/common/assets/frame_page_0004.png" },
            { src: "/common/assets/frame_page_0007.png" },
            { src: "/common/assets/frame_page_0010.png" },
            { src: "/common/assets/frame_page_0013.png" },
            { src: "/common/assets/frame_page_0016.png" },
            { src: "/common/assets/frame_page_0019.png" },
            { src: "/common/assets/frame_page_0022.png" },
            { src: "/common/assets/frame_page_0025.png" },
            { src: "/common/assets/frame_page_0028.png" },
            { src: "/common/assets/frame_page_0031.png" },
            { src: "/common/assets/frame_page_0034.png" },
            { src: "/common/assets/frame_page_0037.png" },
            { src: "/common/assets/frame_page_0040.png" },
            { src: "/common/assets/frame_page_0043.png" },
            { src: "/common/assets/frame_page_0046.png" },
            { src: "/common/assets/frame_page_0049.png" },
            { src: "/common/assets/frame_page_0052.png" },
            { src: "/common/assets/frame_page_0055.png" },
            { src: "/common/assets/frame_page_0058.png" },
            { src: "/common/assets/frame_page_0061.png" },
            { src: "/common/assets/frame_page_0064.png" },
            { src: "/common/assets/frame_page_0067.png" },
            { src: "/common/assets/frame_page_0070.png" },
            { src: "/common/assets/frame_page_0073.png" },
            { src: "/common/assets/frame_page_0076.png" },
            { src: "/common/assets/frame_page_0079.png" },
            { src: "/common/assets/frame_page_0082.png" },
            { src: "/common/assets/frame_page_0085.png" },
            { src: "/common/assets/frame_page_0088.png" },
            { src: "/common/assets/frame_page_0091.png" },
            { src: "/common/assets/frame_page_0094.png" },
            { src: "/common/assets/frame_page_0097.png" },
            { src: "/common/assets/frame_page_0100.png" },
            { src: "/common/assets/frame_page_0103.png" },
            { src: "/common/assets/frame_page_0106.png" },
            { src: "/common/assets/frame_page_0109.png" },
            { src: "/common/assets/frame_page_0112.png" },
            { src: "/common/assets/frame_page_0115.png" },
            { src: "/common/assets/frame_page_0118.png" },
            { src: "/common/assets/frame_page_0121.png" },
            { src: "/common/assets/frame_page_0124.png" },
            { src: "/common/assets/frame_page_0127.png" },
            { src: "/common/assets/frame_page_0130.png" },
            { src: "/common/assets/frame_page_0133.png" },
            { src: "/common/assets/frame_page_0136.png" },
            { src: "/common/assets/frame_page_0139.png" },
            { src: "/common/assets/frame_page_0142.png" },
            { src: "/common/assets/frame_page_0145.png" },
            { src: "/common/assets/frame_page_0148.png" },
            { src: "/common/assets/frame_page_0151.png" },
            { src: "/common/assets/frame_page_0154.png" },
            { src: "/common/assets/frame_page_0157.png" },
            { src: "/common/assets/frame_page_0160.png" },
            { src: "/common/assets/frame_page_0163.png" },
            { src: "/common/assets/frame_page_0166.png" },
            { src: "/common/assets/frame_page_0169.png" },
            { src: "/common/assets/frame_page_0172.png" },
            { src: "/common/assets/frame_page_0175.png" },
        ],
    },

    // Starts to play the frame animation of an image. If this method is called again, the playback starts from the first frame.
    handleStart() {
        this.$refs.animator.start();
    },

    // Pauses the frame animation playback of an image.
    handlePause() {
        this.$refs.animator.pause();
    },

    // Resumes the frame animation playback of an image.
    handleResume() {
        this.$refs.animator.resume();
    },

    // Stops the frame animation playback of an image.
    handleStop() {
        this.$refs.animator.stop();
    },

    // Obtains the playback state. Available values are as follows: playing, paused, stopped
    getState(){
        this.$refs.animator.getState();
    },

    onInit(){
        this.$refs.animator.stop();
    },
    // exit app by swiping to right
    touchMove(e) {
        if (e.direction == 'right') {
            app.terminate();
        }
    }
};
