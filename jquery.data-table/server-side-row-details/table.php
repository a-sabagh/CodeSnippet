<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/jquery.dataTables.css">
    <style>
    .details-control::before{
        content: "+";
        display: block;
        text-align:center;
    }
    .details .details-control::before{content: "-"}
    .details-control{ cursor: pointer; }
    </style>
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/jquery.dataTables.js"></script>
    <script>
    /*
    * show child row for each element row on click
    * you can use ajax to show content by using row information
    */ 
    function format ( d ) {
    return 'Full name: '+d.first_name+' '+d.last_name+'<br>'+
        'Salary: '+d.salary+'<br>'+
        'The child row can contain any data you wish, including links, images, inner tables etc.';
    }
    $(document).ready( function () {
        var dt = $('#example').DataTable({
            "processing" : true,
            "serverSide" : true,
            "ajax" : "server-processing.php",
            "columns": [
                {
                    "class":          "details-control",
                    "orderable":      false,
                    "data":           null,
                    "defaultContent": ""
                },
                {"data" : "first_name"},
                {"data" : "last_name"},
                {"data" : "position"},
                {"data" : "office"},
                {"data" : "start_date"},
                {"data" : "salary"}
            ],
            "order": [[1, 'asc']]
        } );
        var detailRows = [];

        $('#example tbody').on( 'click', 'tr td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = dt.row( tr );
            var idx = $.inArray( tr.attr('id'), detailRows );
            
            if ( row.child.isShown() ) {
                tr.removeClass( 'details' );
                row.child.hide();
    
                // Remove from the 'open' array
                detailRows.splice( idx, 1 );
            } else {
                tr.addClass( 'details' );
                row.child( format( row.data() ) ).show();
    
                // Add to the 'open' array
                if ( idx === -1 ) {
                    detailRows.push( tr.attr('id') );
                }
            }
        } );
 
        // On each draw, loop over the `detailRows` array and show any child rows
        dt.on( 'draw', function () {
            $.each( detailRows, function ( i, id ) {
                $('#'+id+' td.details-control').trigger( 'click' );
            } );
        } );
    });
    </script>
    <title>(server-side row detail)jquery.data-table</title>
</head>
<body>
    <table id="example" class="display">
        <thead>
            <tr>
                <th></th>
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
                <th></th>
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