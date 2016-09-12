		 <script type="text/javascript"> 
		  $(document).ready(function(){
            $("a").click(function(e){
			e.preventDefault();
			var url = $(this).attr("href") ;
			//alert(url);
                $("#include").load(url); 
            });
		});
        </script> 