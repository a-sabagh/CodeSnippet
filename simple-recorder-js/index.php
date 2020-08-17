<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <title>Simple Recorder.js</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Simple Recorder.js</h1>
        <ul>
            <li>recorder.js library</li>
            <li>script.js is main script</li>
            <li>server.php is server script for upload audio</li>
        </ul>
        <div id="controls">
            <button id="recordButton">Record</button>
            <button id="stopButton">Stop</button>
        </div>
        <script src="js/jquery-3.5.1.min.js"></script>
        <script src="js/recorder.js"></script>
        <script>
            var serverObject = <?php echo json_encode([
            'url' => "http://{$_SERVER['HTTP_HOST']}/{$_SERVER['REQUEST_URI']}server.php"
            ]); ?>
        </script>
        <script src="js/script.js"></script>
    </body>
</html>
