$(function(){
	
	/*外包服务效果*/
	var a = $(window).width()/2;    /*获取浏览器的宽度除以2*/
	$('.waibaofuwu_text').css('left',a+40);    /*定位为浏览器宽度一半再+40px*/
	$(window).resize(function(){
		
		if($(window).width() > 1240){
			var a = $(window).width()/2;
			$('.waibaofuwu_text').css('left',a+40); 
		}
	})
	/*end*/
	
	
	
	

	/*header效果*/
	function header_show(){
		
		var $chuangkou = $(window).scrollTop();
		var $banner = $('.banner');
		if ($chuangkou > $banner.height() ){
			$('#header_mobile').slideDown(300);
		}else{
			$('#header_mobile').slideUp(300);
		}
		
		$(window).scroll(function(){
		if($(this).scrollTop() > $banner.height() ){
			$('#header_mobile').slideDown(300);
		}else{
			$('#header_mobile').slideUp(300);
		}
		
	})
		
		
	}
	header_show();
	/*end*/
	
	
	
	
	
	/*banner随机图片*/
		function banner_random(){
			var banner_img = [];
			banner_img[0]="images/banner_1.jpg";
			banner_img[2]="images/banner_2.jpg";
			banner_img[3]="images/banner_3.jpg";
			banner_img[4]="images/banner_4.jpg";
			banner_img[5]="images/banner_5.jpg";
			banner_img[6]="images/banner_6.jpg";
			
			
		var randomBgIndex = Math.round( Math.random() * banner_img.length );
		
		$('#banner_background').attr('src',banner_img[randomBgIndex]);
			
		var $img_src = $('#banner_background');
		
		if($img_src.attr('src') == ""){
			
			$img_src.attr('src',banner_img[0]);
		}
		}
		
		window.onload=banner_random();
		
	/*end*/
		 
		$(window).scroll(function(){

			if($(window).width() > 981){

				var b = $(window).scrollTop();
				var c = $('.banner').height();
				if(b < c){

				 $('.banner_background').css('top', b-b/2.5 +'px');
				
				 
				}
			}
			
	
			
		})
	
	
	/*了解更多按钮*/
	
		function know_more (){
			var $shenqingshiyong = $('#shenqingshiyong').offset().top;
			 $('body').animate({ scrollTop : $shenqingshiyong},500);
		}
		$('#know_more').click(know_more);
		
	/*end*/
	
	/*合作伙伴效果*/	
		function hezuohuobanxiaoguo(){
			$('#hezuohuoban i').hover(function(){
			$(this).stop().animate({ opacity:  "1" },100);
			
		},function(){
			$(this).stop().animate({ opacity:  "0.5" },100);
		})
	
			
		}
		hezuohuobanxiaoguo();
	/*end*/
	
	
	
	
	
	/*呼叫中心效果*/
		function callcenter_xiaoguo(){
			$('.fangda').hover(function(){
				$(this).stop().animate({backgroundSize:'120%'},300);
			},function(){
				$(this).stop().animate({backgroundSize:'100%'},300);
			})
		}
		window.onload=callcenter_xiaoguo();
	
	/*end*/
	
	
	
	
	
	/*fadein效果*/
		function fadeIn(){
			
			if($(this).width()>981){
				
				$('.helpdesk').css('visibility','hidden');
			
				$('.waibaofuwu').css('visibility','hidden');
			
				$(window).scroll(function(){
				
				var $window_scroll = $(this).scrollTop();
			
				var $helpdesk = $('.helpdesk').offset().top;
				
				var $waibaofuwu = $('.waibaofuwu').offset().top;
				
				
				
				if($window_scroll >= ($helpdesk-900)){
					$('.helpdesk').css('visibility','visible');
					$('.helpdesk_waikuang').addClass('fadeInDown');
				}
				
				if($window_scroll >= ($waibaofuwu-750)){
					$('.waibaofuwu').css('visibility','visible');
					$('.computer').addClass('fadeInLeft');
					$('.waibaofuwu_text').addClass('fadeInRight');
				}
				
					
			
		})
		}
		}
		window.onload=fadeIn();
	/*end*/
	
	
	
	
		
	
		
			
	/*表单验证*/

		/*获取焦点*/
		$('input').focus(function(){
			$(this).removeAttr('value','');
		})
		/*end*/	
	
	
	
		/*失去焦点*/
		$('input').blur(form_test);
		/*end*/
		
		
		/*提交表单*/
		$('#tijiao').click(function(){
			$('input').trigger('focus').trigger('blur');
			
			var text_span = $('.text_text h4').find('.cuowutishi');
			
			if(text_span.length <=0){
				alert('提交成功');
			}
			else{
				return false;
			}
			
		})
		/*end*/
		
		
		/*重置表单*/
		$('#chongzhi').click(function(){
			$('input').css('border','none')
			.prev().find('span').hide();	
		})
		
		/*end*/
		
		
		
		/*验证函数*/
		function form_test(){
			
			var kongge = /\s/i;
			
			
			
			
			
			if($(this).is('#email')){
				var re = /@/i;
				var email = $('input').eq(2);
				
				if(re.test(email.val()) == false || email.val()=="" || kongge.test($(this).val())==true){
					$(this).css('border','.02rem solid #f98851');
					$(this).prev('h4').find('span').show().addClass('cuowutishi');	
				}
				else{
				$(this).css('border','.02rem solid #a4cc47')
				.prev('h4').find('span').hide().removeClass('cuowutishi');
				
				}
				
			}
			
			if($(this).is('.empty_value')){
				
				
				var zimu = /\d/i;
				
				if($(this).val()=="" || zimu.test($(this).val())==true || kongge.test($(this).val())==true){
					$(this).css('border','.02rem solid #f98851');
					$(this).prev('h4').find('span').show().addClass('cuowutishi');
				}
				else{
				$(this).css('border','.02rem solid #a4cc47')
				.prev('h4').find('span').hide().removeClass('cuowutishi');
				
				}
			}
			
			if($(this).is('#tel')){
				
				var shuzi = /[^0-9]/i;
				var num_tel = $(this).val();
				
				if(num_tel.length > 11 || num_tel == "" ||shuzi.test(num_tel) == true || kongge.test($(this).val())==true ){
					$(this).css('border','.02rem solid #f98851');
					$(this).prev('h4').find('span').show().addClass('cuowutishi');
				}
				else{
				$(this).css('border','.02rem solid #a4cc47')
				.prev('h4').find('span').hide().removeClass('cuowutishi');
				}
			}
			
			
		}
		/*end*/	
		
		
		
		
		
		
		
		
			
			
			
	

	
			
			
			
			
			
		/*百度地图*/
		function map(){
			var map = new BMap.Map("map");    // 创建Map实例
			map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
			var point = new BMap.Point(113.290224, 23.123794);
			map.centerAndZoom(point, 20);
			var marker = new BMap.Marker(point);  // 创建标注
			map.addOverlay(marker);               // 将标注添加到地图中
			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画  	
		}  
		window.onload=map();
	/*end*/	
				
			
			
			
		
		
		
		
		
			
			
	
	
	
	
	
	
	
	
	
	
	
})