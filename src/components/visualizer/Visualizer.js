
const Visualizer = (props) => {
    if(props.playing){
        console.log('playing');
    const myCanvas = document.getElementById("myCanvas");
    const ctx = myCanvas.getContext("2d");

    let freqs;

    navigator.mediaDevices.enumerateDevices().then((devices) => {
    // devices.forEach((d, i) => console.log(d.label, i));
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
            let bars = 200;

            // Draw Background. The color is specifically picked to blend with gradient. 
            ctx.clearRect(0,0,1920, 355);
            ctx.beginPath();
            analyser.getByteFrequencyData(freqs);
            for (var i = 0; i < bars; i++) {
                // let radians = (Math.PI * 2) / bars;
                let bar_height = freqs[i] * 0.7;
                let x = (i*10);
                let y = myCanvas.height;
                // Play with the color (r g b)s to randomize color scheme for Visuializer.
                // let colr =
                //     "rgb(" + Math.abs(i * Math.sin(radians * i))-10 + ", " + Math.abs(i * Math.cos(radians * i))-10 + ", " + Math.abs(i * Math.sin(radians * i))+90 + ")";
                // document.body.style.background = "linear-gradient(" + colr +",transparent)";
                let color = "#668BC4"
                ctx.strokeStyle = color;
                ctx.lineWidth = 6;
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
else {
    console.log('NOTT playing');
}
    return(null);
}

export default Visualizer