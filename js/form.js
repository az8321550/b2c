$(function(){
	init();
	$(".area").on("click",function(e){
		$(this).find(".area-list").toggle();
	});

	$(".area-item").on("click",function(e){
		$(".area-text").text($(this).text());
		$('#province').val($(this).text());
		$(".area-list").hide();
		//e.stopPropagation();
		return false;
	})

	$(document).on("click",function(e){
		if(!$(e.target).closest(".area").length){
			$(".area-list").hide();
		}
	});

	$('#form-btn').on('click', function(){
		var remark='';
		var ques1=$('input[name="ques1"]:checked').val();
		/*if (!ques1) {
			layer.tips('您是否对下面的小漫画感兴趣?', $(".ques1  label").eq(0) , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});			
			return false;
		}*/
		ques1=ques1?ques1:'';
		remark+=ques1
		var ques2=$('input[name="ques2"]:checked').val();
	/*	if (!ques2) {
			layer.tips(' 您最喜欢保险的哪种功能？', $(".ques2  label").eq(0) , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});			
			return false;
		}*/
		ques2=ques2?ques2:'';
		remark+='|'+ques2
		var ques3=$('input[name="ques3"]:checked').val();
		/*if (!ques3) {
			layer.tips('哪类保障是您最关注的？', $(".ques3  label").eq(0) , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});			
			return false;
		}*/
		ques3=ques3?ques3:'';
		remark+='|'+ques3
		remark=remark=='||'?'':remark;
		$('#remark').val(remark);
		var name = $("#name").val();
		name = name.replace(/(^\s*)|(\s*$)/, "");
		if (name.length >= 25 || name.length < 1) {
			layer.tips('请输入您的姓名', $("#name") , {guide: 0, time: 3, style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
			$("#name").focus();
			return false;
		}

		var sex=$(".sex-con :radio:checked").length
		if(!sex){
			layer.tips('请选择您的性别', $(".sex-con") , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
			return false;
		}

		var area=$(".area-text").text();
		if(area=="请选择"){
			layer.tips('请选择所在地', $(".area") , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
			return false;
		}

		var m1 = /^(1[3578][0-9]|14[57])\d{8}$/;
		var mobile = $("#mobile").val();
		mobile = mobile.replace(/(^\s*)|(\s*$)/, "");
		if(!mobile.length){
			layer.tips('请填写您的手机号码', $("#mobile") , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
			return false;
		}
		if (!(m1.test(mobile))) {
			layer.tips('请正确填写您的手机号码', $("#mobile") , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
			$("#mobile").focus();
			return false;
		}
		$(".fixed,.success-con").show();
		flag=true;

	});


	$(".success-close,.success-ok").click(function () {
		$(".fixed,.success-con").hide();
	});
	var iframe = document.getElementById("submitiframe");
	if (iframe.attachEvent) {
		iframe.attachEvent("onload", function() {
			
				var res = iframe.contentWindow.document.documentElement.outerHTML;
				if (res.indexOf("200") >= 0) {
					clearform();
					$(".fixed,.success-con").show();
				}
			
		});
	} else {
		iframe.onload = function() {
			var res = iframe.contentWindow.document.documentElement.outerHTML;
			if (res.indexOf("200") >= 0) {
				clearform();
					$(".fixed,.success-con").show();
			}
		};
	}




});


function init(){
	var host = location.host;
	var turl = "http://" + host +  "/hd/aio/thanks/get.php";
	var qdh = getUrlParam("qdh");
	var cc = getUrlParam("cc");
	var campaign = getUrlParam("campaign");
	var ccode = cc ? cc : campaign;
	var iq_id = getUrlParam("iq_id");
	var iq_id = (iq_id.replace(/(^\s*)|(\s*$)/g, "").length != 0) ? iq_id	: 'C20150101';
	$("#url").val(turl);	
	$("#iqId").val(iq_id);	

	if (ccode){
		$("#campaignCode").val(ccode);	
		
	} else {	
		$("#campaignCode").val('1LDG105AA1');	
		
	}
	
	if (host.indexOf(".cigna") > 0) {
		document.myform.action = "http://LG.cignacmb.com/cmc-lg/formCmc2Action_saveForm.action";
	} else {
		document.myform.action = "http://10.140.5.69/cmc-lg/formCmc2Action_saveForm.action";
	}
}

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return '';
}

function clearform(){
	$('input[type="text"],#remark,#province').val('');
	$('.area-text').html('请选择');
	$('input[type="radio"]').each(function(){	
		$(this).attr("checked",false);
	});
	
}