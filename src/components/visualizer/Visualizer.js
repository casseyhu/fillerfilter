import { propTypes } from "react-bootstrap/esm/Image";


const Visualizer = (props) => {
    console.log(props.playing);
    if(props.playing){
    const myCanvas = document.getElementById("myCanvas");
    const ctx = myCanvas.getContext("2d");

    let freqs;

    navigator.mediaDevices.enumerateDevices().then((devices) => {
    devices.forEach((d, i) => console.log(d.label, i));
    navigator.mediaDevices
        .getUserMedia({
        audio: {
            deviceId: devices[0].deviceId
        }
        })
        .then((stream) => {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = context.createAnalyser();
        const source = context.createMediaStreamSource(stream);
        source.connect(analyser);
        // analyser.connect(context.destination);
        freqs = new Uint8Array(analyser.frequencyBinCount);

        function draw() {
            // let radius = 75;
            let bars = 400;

            // Draw Background. The color is specifically picked to blend with gradient. 
            // ctx.fillStyle = "#d3dced";
            // ctx.fillRect(0,50, 1920, 300);
            ctx.clearRect(0,52,1920, 300);
            ctx.beginPath();
            analyser.getByteFrequencyData(freqs);
            for (var i = 0; i < bars; i++) {
                let radians = (Math.PI * 2) / bars;
                let bar_height = freqs[i] * 0.5;
                let x = (i*5);
                let y = myCanvas.height;
                // Play with the color (r g b)s to randomize color scheme for Visuializer.
                // let color =
                //     "rgb(" + Math.abs(i * Math.sin(radians * i)) + ", " + Math.abs(i * Math.cos(radians * i)) + ", " + Math.abs(i * Math.sin(radians * i)) + ")";
                let color = "#6B4180"
                ctx.strokeStyle = color;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y - bar_height * 1.80);
                ctx.stroke();
            }
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
        });
    }); 
}
    return(null);
}

export default Visualizer