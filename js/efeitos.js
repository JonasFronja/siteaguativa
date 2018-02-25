$(document).ready(function(){

				$("#logotipo").on("mouseover",function (){

					 $("#banner h1").addClass("efeito"); 

				}).on("mouseout",function(){

                      $("#banner h1").removeClass("efeito"); 
				});

				$("#input-search").on("focus",function(){

					$("li.search").addClass("ativo");

				}).on("blur" , function(){

					$("li.search").removeClass("ativo");
				});

				$(".thumbnails").owlCarousel({
					loop: true,
					nav: true,
					navText:["Anterior","Próximo"],
					autoPlay: 3000,
                    items: 3

                        
						
							
						
					

				});

				var owl = $(".thumbnails").data('owlCarousel');

				$('#prev').on("click",function(){

					owl.prev();
				});

				$('#next').on("click",function(){

					owl.next();
				});


				$("#btn-bars").on("click",function(){

					$("header").toggleClass("open-menu");
				});

				$("#menu-mobile-mask, .btn-close").on("click",function(){

					$("header").removeClass("open-menu");
				});

				$("#btn-search").on("click",function(){

					$("header").toggleClass("open-search");
					$("#input-search-mobile").focus();
				});

				
			});