$(document).ready(function(){
    var webStream;
    var recorderObject;
    $("#recordButton").on('click',function(e){
        console.log('click record');
        var constraints = { audio: true, video:false }
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
            console.log('start streaming...');
            let audioContext = new AudioContext();
            webStream = stream;
            let input = audioContext.createMediaStreamSource(stream);
            recorderObject = new Recorder(input,{numChannels:1})
            recorderObject.record()
        }).catch(function(err) {
            console.error(err);
        });
    });
    console.log(serverObject);
    //stop recording
    $("#stopButton").on("click",function(){
        console.log('click stop');
        recorderObject.stop();
        let webAudioTracks = webStream.getAudioTracks();
        webAudioTracks[0].stop();
        console.log('stop streaming...');
        recorderObject.exportWAV(function(audioBolb){
            var formData = new FormData();
            formData.append('audio', audioBolb);
            $.ajax({
                url : serverObject.url,
                contentType: false,
                processData: false,
                type : "POST",
                data : formData,
                beforeSend: function(){},
                success : function(respons){
                    console.log(respons);
                },
                error: function (request, status, error) {
                    console.error(error);
                },
            });
        },'audio/wav');
    });
});
