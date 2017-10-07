<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/jquery.dataTables.css">
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/jquery.dataTables.js"></script>
    <script>
    $(document).ready( function () {
        $('#table_id').DataTable({
            "processing" : true,
            "serverSide" : true,
            "ajax" : "server-processing.php"
        } );
     });
    </script>
    <title>(server side)jquery.data-table</title>
</head>
<body>
    <table id="table_id" class="display">
        <thead>
            <tr>
                <th>first name</th>
                <th>last name</th>
                <th>position</th>
                <th>office</th>
                <th>start date</th>
                <th>salary</th>
            </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
            <tr>
                <th>first name</th>
                <th>last name</th>
                <th>position</th>
                <th>office</th>
                <th>start date</th>
                <th>salary</th>
            </tr>
        </tfoot>
    </table>
</body>
</html>