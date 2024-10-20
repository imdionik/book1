pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 13314;
pubcoder.page.title = pubcoder.page.title || "18";
pubcoder.page.number = pubcoder.page.number || 18;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;



/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj13334_onTap_activeActionGroupIndex = -1;
var obj13334_onTap_runningActionsCount = 0;
var obj13334_onTap_loopCount = 0;
var obj13402_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13402_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13402_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13410_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13410_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13410_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13413_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13413_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13413_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13416_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13416_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13416_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13419_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13419_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13422_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13422_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13422_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13573_onTap_activeActionGroupIndex = -1;
var obj13573_onTap_runningActionsCount = 0;
var obj13573_onTap_loopCount = 0;
var obj13575_onTap_activeActionGroupIndex = -1;
var obj13575_onTap_runningActionsCount = 0;
var obj13575_onTap_loopCount = 0;
var obj13577_onTap_activeActionGroupIndex = -1;
var obj13577_onTap_runningActionsCount = 0;
var obj13577_onTap_loopCount = 0;
var obj13584_onTap_activeActionGroupIndex = -1;
var obj13584_onTap_runningActionsCount = 0;
var obj13584_onTap_loopCount = 0;
var obj13645_onTap_activeActionGroupIndex = -1;
var obj13645_onTap_runningActionsCount = 0;
var obj13645_onTap_loopCount = 0;
var obj13633_onTap_activeActionGroupIndex = -1;
var obj13633_onTap_runningActionsCount = 0;
var obj13633_onTap_loopCount = 0;
var obj13628_onTap_activeActionGroupIndex = -1;
var obj13628_onTap_runningActionsCount = 0;
var obj13628_onTap_loopCount = 0;
var obj13623_onTap_activeActionGroupIndex = -1;
var obj13623_onTap_runningActionsCount = 0;
var obj13623_onTap_loopCount = 0;
var obj13687_onTap_activeActionGroupIndex = -1;
var obj13687_onTap_runningActionsCount = 0;
var obj13687_onTap_loopCount = 0;
var obj13675_onTap_activeActionGroupIndex = -1;
var obj13675_onTap_runningActionsCount = 0;
var obj13675_onTap_loopCount = 0;
var obj13670_onTap_activeActionGroupIndex = -1;
var obj13670_onTap_runningActionsCount = 0;
var obj13670_onTap_loopCount = 0;
var obj13665_onTap_activeActionGroupIndex = -1;
var obj13665_onTap_runningActionsCount = 0;
var obj13665_onTap_loopCount = 0;
var obj13729_onTap_activeActionGroupIndex = -1;
var obj13729_onTap_runningActionsCount = 0;
var obj13729_onTap_loopCount = 0;
var obj13717_onTap_activeActionGroupIndex = -1;
var obj13717_onTap_runningActionsCount = 0;
var obj13717_onTap_loopCount = 0;
var obj13712_onTap_activeActionGroupIndex = -1;
var obj13712_onTap_runningActionsCount = 0;
var obj13712_onTap_loopCount = 0;
var obj13707_onTap_activeActionGroupIndex = -1;
var obj13707_onTap_runningActionsCount = 0;
var obj13707_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj13402_counterValue = 0;
var obj13402_counterTargetValue = 4;
var obj13402_counterCanExceedTargetValue = false;
var obj13410_counterValue = 0;
var obj13410_counterTargetValue = 1;
var obj13410_counterCanExceedTargetValue = false;
var obj13413_counterValue = 0;
var obj13413_counterTargetValue = 2;
var obj13413_counterCanExceedTargetValue = false;
var obj13416_counterValue = 0;
var obj13416_counterTargetValue = 3;
var obj13416_counterCanExceedTargetValue = false;
var obj13419_counterValue = 0;
var obj13419_counterTargetValue = 4;
var obj13419_counterCanExceedTargetValue = false;
var obj13422_counterValue = 0;
var obj13422_counterTargetValue = 1;
var obj13422_counterCanExceedTargetValue = false;

 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	

	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 

 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    

	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj13334_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13334_onTap_activeActionGroupIndex = -1;
		$("#obj13334").trigger("obj13334_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13334) {
				console.warn("de-queueing event obj13334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13334_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13336();
function goToPage_13336() {
	window.obj13334_onTap_runningActionsCount = obj13334_onTap_runningActionsCount + 1;

	$("#anchor293")[0].click();
	window.obj13334_onTap_runningActionsCount = window.obj13334_onTap_runningActionsCount - 1;

if (window.obj13334_onTap_runningActionsCount < 0) {
	window.obj13334_onTap_runningActionsCount = 0;
} else if (window.obj13334_onTap_runningActionsCount == 0) {
	obj13334_onTap_actionGroup1();
}
}










































};
obj13334_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13334_onTap_activeActionGroupIndex = -1;
		$("#obj13334").trigger("obj13334_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13334) {
				console.warn("de-queueing event obj13334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13334_onTap_activeActionGroupIndex = 1;
	











































};
obj13402_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13402_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13402").trigger("obj13402_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13402) {
				console.warn("de-queueing event obj13402." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13402").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13402_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_13404();
function wait_13404() {
	window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount = obj13402_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13402_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj13402_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13402_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13402").trigger("obj13402_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13402) {
				console.warn("de-queueing event obj13402." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13402").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13402_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_13405();
function goToPage_13405() {
	window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount = obj13402_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor294")[0].click();
	window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13402_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13402_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj13402_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13402_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13402").trigger("obj13402_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13402) {
				console.warn("de-queueing event obj13402." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13402").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13402_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj13410_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13410_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13410").trigger("obj13410_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13410) {
				console.warn("de-queueing event obj13410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13410_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13412();
function switchText_13412() {
	window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount = obj13410_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/8</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13408_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13408_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13408").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13408_content");
			setTimeout(function () {
				window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13410_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13408 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13410_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13410_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13410_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13410_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13410").trigger("obj13410_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13410) {
				console.warn("de-queueing event obj13410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13410_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13413_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13413_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13413").trigger("obj13413_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13413) {
				console.warn("de-queueing event obj13413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13413_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13415();
function switchText_13415() {
	window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount = obj13413_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/8</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13408_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13408_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13408").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13408_content");
			setTimeout(function () {
				window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13413_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13408 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13413_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13413_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13413_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13413_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13413").trigger("obj13413_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13413) {
				console.warn("de-queueing event obj13413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13413_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13416_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13416_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13416").trigger("obj13416_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13416) {
				console.warn("de-queueing event obj13416." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13416").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13416_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13418();
function switchText_13418() {
	window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount = obj13416_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/8</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13408_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13408_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13408").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13408_content");
			setTimeout(function () {
				window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13416_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13408 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13416_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13416_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13416_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13416_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13416").trigger("obj13416_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13416) {
				console.warn("de-queueing event obj13416." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13416").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13416_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13419_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13419").trigger("obj13419_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13419) {
				console.warn("de-queueing event obj13419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13421();
function switchText_13421() {
	window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = obj13419_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>4/8</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13408_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13408_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13408").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13408_content");
			setTimeout(function () {
				window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13419_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13408 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13419_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13419_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13419").trigger("obj13419_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13419) {
				console.warn("de-queueing event obj13419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
















//	action: wait
wait_13967();
function wait_13967() {
	window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = obj13419_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13419_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1000);
}


























};
obj13419_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13419").trigger("obj13419_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13419) {
				console.warn("de-queueing event obj13419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_13968();
function goToPage_13968() {
	window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = obj13419_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor295")[0].click();
	window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13419_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13419_SCEventCounterReachedTargetValue_actionGroup3();
}
}










































};
obj13419_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13419").trigger("obj13419_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13419) {
				console.warn("de-queueing event obj13419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj13422_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13422_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13422").trigger("obj13422_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13422) {
				console.warn("de-queueing event obj13422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13422_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj13410 
incrementCounter_13424();
function incrementCounter_13424() {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = obj13422_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13410_counterValue;
	obj13410_counterValue = obj13410_counterValue + 1;
	if (! obj13410_counterCanExceedTargetValue && obj13410_counterValue > obj13410_counterTargetValue) {
		obj13410_counterValue = obj13410_counterTargetValue;
	}

	if (oldValue != obj13410_counterValue) {
		$("#obj13410").trigger('SCEventCounterValueChange');
		$("#obj13410").trigger('SCEventCounterIncrease');
		if (obj13410_counterValue == obj13410_counterTargetValue)
			$("#obj13410").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13422_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13413 
incrementCounter_13425();
function incrementCounter_13425() {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = obj13422_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13413_counterValue;
	obj13413_counterValue = obj13413_counterValue + 1;
	if (! obj13413_counterCanExceedTargetValue && obj13413_counterValue > obj13413_counterTargetValue) {
		obj13413_counterValue = obj13413_counterTargetValue;
	}

	if (oldValue != obj13413_counterValue) {
		$("#obj13413").trigger('SCEventCounterValueChange');
		$("#obj13413").trigger('SCEventCounterIncrease');
		if (obj13413_counterValue == obj13413_counterTargetValue)
			$("#obj13413").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13422_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13416 
incrementCounter_13426();
function incrementCounter_13426() {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = obj13422_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13416_counterValue;
	obj13416_counterValue = obj13416_counterValue + 1;
	if (! obj13416_counterCanExceedTargetValue && obj13416_counterValue > obj13416_counterTargetValue) {
		obj13416_counterValue = obj13416_counterTargetValue;
	}

	if (oldValue != obj13416_counterValue) {
		$("#obj13416").trigger('SCEventCounterValueChange');
		$("#obj13416").trigger('SCEventCounterIncrease');
		if (obj13416_counterValue == obj13416_counterTargetValue)
			$("#obj13416").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13422_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13419 
incrementCounter_13427();
function incrementCounter_13427() {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = obj13422_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13419_counterValue;
	obj13419_counterValue = obj13419_counterValue + 1;
	if (! obj13419_counterCanExceedTargetValue && obj13419_counterValue > obj13419_counterTargetValue) {
		obj13419_counterValue = obj13419_counterTargetValue;
	}

	if (oldValue != obj13419_counterValue) {
		$("#obj13419").trigger('SCEventCounterValueChange');
		$("#obj13419").trigger('SCEventCounterIncrease');
		if (obj13419_counterValue == obj13419_counterTargetValue)
			$("#obj13419").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13422_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj13422_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13422_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13422").trigger("obj13422_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13422) {
				console.warn("de-queueing event obj13422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13422_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj13422 
decrementCounter_13428();
function decrementCounter_13428() {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = obj13422_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13422_counterValue;
	obj13422_counterValue = obj13422_counterValue - 1;
	if (obj13422_counterValue < 0) {
		obj13422_counterValue = 0;
	}

	if (oldValue != obj13422_counterValue) {
		$("#obj13422").trigger('SCEventCounterValueChange');
		$("#obj13422").trigger('SCEventCounterDecrease');
		if (obj13422_counterValue == obj13422_counterTargetValue)
			$("#obj13422").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13422_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13422_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj13422_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13422_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13422").trigger("obj13422_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13422) {
				console.warn("de-queueing event obj13422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13422_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj13573_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13573_onTap_activeActionGroupIndex = -1;
		$("#obj13573").trigger("obj13573_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13573) {
				console.warn("de-queueing event obj13573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13573_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13573 
hide_13604();
function hide_13604() {
	var selector = "#obj13573";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13573_onTap_runningActionsCount = obj13573_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13604(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13573_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13573_onTap_activeActionGroupIndex = -1;
		$("#obj13573").trigger("obj13573_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13573) {
				console.warn("de-queueing event obj13573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13573_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13615();
function playAudioFile_13615() {
	window.obj13573_onTap_runningActionsCount = obj13573_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13615")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13615");
			$("#obj_audio_playSoundFile13615").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13573_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13573_onTap_activeActionGroupIndex = -1;
		$("#obj13573").trigger("obj13573_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13573) {
				console.warn("de-queueing event obj13573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13573_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13571 
hide_13603();
function hide_13603() {
	var selector = "#obj13571";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13573_onTap_runningActionsCount = obj13573_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13603(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13573_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13573_onTap_activeActionGroupIndex = -1;
		$("#obj13573").trigger("obj13573_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13573) {
				console.warn("de-queueing event obj13573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13573_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj13584
(function(){
	window.obj13573_onTap_runningActionsCount = obj13573_onTap_runningActionsCount + 1;


	var selector = "#obj13584";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13575
(function(){
	window.obj13573_onTap_runningActionsCount = obj13573_onTap_runningActionsCount + 1;


	var selector = "#obj13575";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13577
(function(){
	window.obj13573_onTap_runningActionsCount = obj13573_onTap_runningActionsCount + 1;


	var selector = "#obj13577";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;

if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13573_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13573_onTap_activeActionGroupIndex = -1;
		$("#obj13573").trigger("obj13573_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13573) {
				console.warn("de-queueing event obj13573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13573_onTap_activeActionGroupIndex = 4;
	











































};
obj13575_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13575_onTap_activeActionGroupIndex = -1;
		$("#obj13575").trigger("obj13575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13575) {
				console.warn("de-queueing event obj13575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13575_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13590
(function(){
	window.obj13575_onTap_runningActionsCount = obj13575_onTap_runningActionsCount + 1;


	var selector = "#obj13590";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13575_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13575_onTap_activeActionGroupIndex = -1;
		$("#obj13575").trigger("obj13575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13575) {
				console.warn("de-queueing event obj13575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13575_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13592();
function playAudioFile_13592() {
	window.obj13575_onTap_runningActionsCount = obj13575_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13592")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13592");
			$("#obj_audio_playSoundFile13592").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13575_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13575_onTap_activeActionGroupIndex = -1;
		$("#obj13575").trigger("obj13575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13575) {
				console.warn("de-queueing event obj13575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13575_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13575 
hide_13593();
function hide_13593() {
	var selector = "#obj13575";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13575_onTap_runningActionsCount = obj13575_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13593(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13577 
hide_13594();
function hide_13594() {
	var selector = "#obj13577";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13575_onTap_runningActionsCount = obj13575_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13594(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13584 
hide_13595();
function hide_13595() {
	var selector = "#obj13584";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13575_onTap_runningActionsCount = obj13575_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13595(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13575_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13575_onTap_activeActionGroupIndex = -1;
		$("#obj13575").trigger("obj13575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13575) {
				console.warn("de-queueing event obj13575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13575_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_13746();
function wait_13746() {
	window.obj13575_onTap_runningActionsCount = obj13575_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup4();
}
	}, 200);
}


























};
obj13575_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13575_onTap_activeActionGroupIndex = -1;
		$("#obj13575").trigger("obj13575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13575) {
				console.warn("de-queueing event obj13575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13575_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj13571
(function(){
	window.obj13575_onTap_runningActionsCount = obj13575_onTap_runningActionsCount + 1;


	var selector = "#obj13571";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13597
(function(){
	window.obj13575_onTap_runningActionsCount = obj13575_onTap_runningActionsCount + 1;


	var selector = "#obj13597";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13575_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13575_onTap_activeActionGroupIndex = -1;
		$("#obj13575").trigger("obj13575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13575) {
				console.warn("de-queueing event obj13575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13575_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj13422 
incrementCounter_13616();
function incrementCounter_13616() {
	window.obj13575_onTap_runningActionsCount = obj13575_onTap_runningActionsCount + 1;


	var oldValue = obj13422_counterValue;
	obj13422_counterValue = obj13422_counterValue + 1;
	if (! obj13422_counterCanExceedTargetValue && obj13422_counterValue > obj13422_counterTargetValue) {
		obj13422_counterValue = obj13422_counterTargetValue;
	}

	if (oldValue != obj13422_counterValue) {
		$("#obj13422").trigger('SCEventCounterValueChange');
		$("#obj13422").trigger('SCEventCounterIncrease');
		if (obj13422_counterValue == obj13422_counterTargetValue)
			$("#obj13422").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13575_onTap_runningActionsCount = window.obj13575_onTap_runningActionsCount - 1;

if (window.obj13575_onTap_runningActionsCount < 0) {
	window.obj13575_onTap_runningActionsCount = 0;
} else if (window.obj13575_onTap_runningActionsCount == 0) {
	obj13575_onTap_actionGroup6();
} }, 1);
}











};
obj13575_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13575_onTap_activeActionGroupIndex = -1;
		$("#obj13575").trigger("obj13575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13575) {
				console.warn("de-queueing event obj13575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13575_onTap_activeActionGroupIndex = 6;
	











































};
obj13577_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13577_onTap_activeActionGroupIndex = -1;
		$("#obj13577").trigger("obj13577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13577) {
				console.warn("de-queueing event obj13577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13577_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13579();
function playAudioFile_13579() {
	window.obj13577_onTap_runningActionsCount = obj13577_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13579")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13579");
			$("#obj_audio_playSoundFile13579").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13577_onTap_runningActionsCount = window.obj13577_onTap_runningActionsCount - 1;

if (window.obj13577_onTap_runningActionsCount < 0) {
	window.obj13577_onTap_runningActionsCount = 0;
} else if (window.obj13577_onTap_runningActionsCount == 0) {
	obj13577_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13577_onTap_runningActionsCount = window.obj13577_onTap_runningActionsCount - 1;

if (window.obj13577_onTap_runningActionsCount < 0) {
	window.obj13577_onTap_runningActionsCount = 0;
} else if (window.obj13577_onTap_runningActionsCount == 0) {
	obj13577_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13577_onTap_runningActionsCount = window.obj13577_onTap_runningActionsCount - 1;

if (window.obj13577_onTap_runningActionsCount < 0) {
	window.obj13577_onTap_runningActionsCount = 0;
} else if (window.obj13577_onTap_runningActionsCount == 0) {
	obj13577_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13577_onTap_runningActionsCount = window.obj13577_onTap_runningActionsCount - 1;

if (window.obj13577_onTap_runningActionsCount < 0) {
	window.obj13577_onTap_runningActionsCount = 0;
} else if (window.obj13577_onTap_runningActionsCount == 0) {
	obj13577_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13577_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13577_onTap_activeActionGroupIndex = -1;
		$("#obj13577").trigger("obj13577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13577) {
				console.warn("de-queueing event obj13577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13577_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13577 
hide_13581();
function hide_13581() {
	var selector = "#obj13577";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13577_onTap_runningActionsCount = obj13577_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13577_onTap_runningActionsCount = window.obj13577_onTap_runningActionsCount - 1;

if (window.obj13577_onTap_runningActionsCount < 0) {
	window.obj13577_onTap_runningActionsCount = 0;
} else if (window.obj13577_onTap_runningActionsCount == 0) {
	obj13577_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13581(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13577_onTap_runningActionsCount = window.obj13577_onTap_runningActionsCount - 1;

if (window.obj13577_onTap_runningActionsCount < 0) {
	window.obj13577_onTap_runningActionsCount = 0;
} else if (window.obj13577_onTap_runningActionsCount == 0) {
	obj13577_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13577_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13577_onTap_activeActionGroupIndex = -1;
		$("#obj13577").trigger("obj13577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13577) {
				console.warn("de-queueing event obj13577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13577_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13577
(function(){
	window.obj13577_onTap_runningActionsCount = obj13577_onTap_runningActionsCount + 1;


	var selector = "#obj13577";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "shake";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13577_onTap_runningActionsCount = window.obj13577_onTap_runningActionsCount - 1;

if (window.obj13577_onTap_runningActionsCount < 0) {
	window.obj13577_onTap_runningActionsCount = 0;
} else if (window.obj13577_onTap_runningActionsCount == 0) {
	obj13577_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13577_onTap_runningActionsCount = window.obj13577_onTap_runningActionsCount - 1;

if (window.obj13577_onTap_runningActionsCount < 0) {
	window.obj13577_onTap_runningActionsCount = 0;
} else if (window.obj13577_onTap_runningActionsCount == 0) {
	obj13577_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13577_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13577_onTap_activeActionGroupIndex = -1;
		$("#obj13577").trigger("obj13577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13577) {
				console.warn("de-queueing event obj13577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13577_onTap_activeActionGroupIndex = 3;
	











































};
obj13584_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13584_onTap_activeActionGroupIndex = -1;
		$("#obj13584").trigger("obj13584_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13584) {
				console.warn("de-queueing event obj13584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13584_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13586();
function playAudioFile_13586() {
	window.obj13584_onTap_runningActionsCount = obj13584_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13586")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13586");
			$("#obj_audio_playSoundFile13586").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13584_onTap_runningActionsCount = window.obj13584_onTap_runningActionsCount - 1;

if (window.obj13584_onTap_runningActionsCount < 0) {
	window.obj13584_onTap_runningActionsCount = 0;
} else if (window.obj13584_onTap_runningActionsCount == 0) {
	obj13584_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13584_onTap_runningActionsCount = window.obj13584_onTap_runningActionsCount - 1;

if (window.obj13584_onTap_runningActionsCount < 0) {
	window.obj13584_onTap_runningActionsCount = 0;
} else if (window.obj13584_onTap_runningActionsCount == 0) {
	obj13584_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13584_onTap_runningActionsCount = window.obj13584_onTap_runningActionsCount - 1;

if (window.obj13584_onTap_runningActionsCount < 0) {
	window.obj13584_onTap_runningActionsCount = 0;
} else if (window.obj13584_onTap_runningActionsCount == 0) {
	obj13584_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13584_onTap_runningActionsCount = window.obj13584_onTap_runningActionsCount - 1;

if (window.obj13584_onTap_runningActionsCount < 0) {
	window.obj13584_onTap_runningActionsCount = 0;
} else if (window.obj13584_onTap_runningActionsCount == 0) {
	obj13584_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13584_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13584_onTap_activeActionGroupIndex = -1;
		$("#obj13584").trigger("obj13584_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13584) {
				console.warn("de-queueing event obj13584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13584_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13584 
hide_13587();
function hide_13587() {
	var selector = "#obj13584";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13584_onTap_runningActionsCount = obj13584_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13584_onTap_runningActionsCount = window.obj13584_onTap_runningActionsCount - 1;

if (window.obj13584_onTap_runningActionsCount < 0) {
	window.obj13584_onTap_runningActionsCount = 0;
} else if (window.obj13584_onTap_runningActionsCount == 0) {
	obj13584_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13587(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13584_onTap_runningActionsCount = window.obj13584_onTap_runningActionsCount - 1;

if (window.obj13584_onTap_runningActionsCount < 0) {
	window.obj13584_onTap_runningActionsCount = 0;
} else if (window.obj13584_onTap_runningActionsCount == 0) {
	obj13584_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13584_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13584_onTap_activeActionGroupIndex = -1;
		$("#obj13584").trigger("obj13584_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13584) {
				console.warn("de-queueing event obj13584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13584_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13584
(function(){
	window.obj13584_onTap_runningActionsCount = obj13584_onTap_runningActionsCount + 1;


	var selector = "#obj13584";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "shake";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13584_onTap_runningActionsCount = window.obj13584_onTap_runningActionsCount - 1;

if (window.obj13584_onTap_runningActionsCount < 0) {
	window.obj13584_onTap_runningActionsCount = 0;
} else if (window.obj13584_onTap_runningActionsCount == 0) {
	obj13584_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13584_onTap_runningActionsCount = window.obj13584_onTap_runningActionsCount - 1;

if (window.obj13584_onTap_runningActionsCount < 0) {
	window.obj13584_onTap_runningActionsCount = 0;
} else if (window.obj13584_onTap_runningActionsCount == 0) {
	obj13584_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13584_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13584_onTap_activeActionGroupIndex = -1;
		$("#obj13584").trigger("obj13584_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13584) {
				console.warn("de-queueing event obj13584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13584_onTap_activeActionGroupIndex = 3;
	











































};
obj13645_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13645_onTap_activeActionGroupIndex = -1;
		$("#obj13645").trigger("obj13645_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13645) {
				console.warn("de-queueing event obj13645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13645_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13645 
hide_13649();
function hide_13649() {
	var selector = "#obj13645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13645_onTap_runningActionsCount = obj13645_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13649(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13645_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13645_onTap_activeActionGroupIndex = -1;
		$("#obj13645").trigger("obj13645_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13645) {
				console.warn("de-queueing event obj13645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13645_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13647();
function playAudioFile_13647() {
	window.obj13645_onTap_runningActionsCount = obj13645_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13647")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13647");
			$("#obj_audio_playSoundFile13647").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13645_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13645_onTap_activeActionGroupIndex = -1;
		$("#obj13645").trigger("obj13645_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13645) {
				console.warn("de-queueing event obj13645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13645_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13653 
hide_13648();
function hide_13648() {
	var selector = "#obj13653";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13645_onTap_runningActionsCount = obj13645_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13648(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13645_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13645_onTap_activeActionGroupIndex = -1;
		$("#obj13645").trigger("obj13645_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13645) {
				console.warn("de-queueing event obj13645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13645_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj13623
(function(){
	window.obj13645_onTap_runningActionsCount = obj13645_onTap_runningActionsCount + 1;


	var selector = "#obj13623";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13633
(function(){
	window.obj13645_onTap_runningActionsCount = obj13645_onTap_runningActionsCount + 1;


	var selector = "#obj13633";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13628
(function(){
	window.obj13645_onTap_runningActionsCount = obj13645_onTap_runningActionsCount + 1;


	var selector = "#obj13628";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13645_onTap_runningActionsCount = window.obj13645_onTap_runningActionsCount - 1;

if (window.obj13645_onTap_runningActionsCount < 0) {
	window.obj13645_onTap_runningActionsCount = 0;
} else if (window.obj13645_onTap_runningActionsCount == 0) {
	obj13645_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13645_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13645_onTap_activeActionGroupIndex = -1;
		$("#obj13645").trigger("obj13645_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13645) {
				console.warn("de-queueing event obj13645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13645_onTap_activeActionGroupIndex = 4;
	











































};
obj13633_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13633_onTap_activeActionGroupIndex = -1;
		$("#obj13633").trigger("obj13633_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13633) {
				console.warn("de-queueing event obj13633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13633_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13621
(function(){
	window.obj13633_onTap_runningActionsCount = obj13633_onTap_runningActionsCount + 1;


	var selector = "#obj13621";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13633_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13633_onTap_activeActionGroupIndex = -1;
		$("#obj13633").trigger("obj13633_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13633) {
				console.warn("de-queueing event obj13633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13633_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13636();
function playAudioFile_13636() {
	window.obj13633_onTap_runningActionsCount = obj13633_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13636")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13636");
			$("#obj_audio_playSoundFile13636").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13633_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13633_onTap_activeActionGroupIndex = -1;
		$("#obj13633").trigger("obj13633_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13633) {
				console.warn("de-queueing event obj13633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13633_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13633 
hide_13637();
function hide_13637() {
	var selector = "#obj13633";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13633_onTap_runningActionsCount = obj13633_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13637(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13628 
hide_13638();
function hide_13638() {
	var selector = "#obj13628";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13633_onTap_runningActionsCount = obj13633_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13638(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13623 
hide_13639();
function hide_13639() {
	var selector = "#obj13623";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13633_onTap_runningActionsCount = obj13633_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13639(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13633_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13633_onTap_activeActionGroupIndex = -1;
		$("#obj13633").trigger("obj13633_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13633) {
				console.warn("de-queueing event obj13633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13633_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_13743();
function wait_13743() {
	window.obj13633_onTap_runningActionsCount = obj13633_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup4();
}
	}, 200);
}


























};
obj13633_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13633_onTap_activeActionGroupIndex = -1;
		$("#obj13633").trigger("obj13633_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13633) {
				console.warn("de-queueing event obj13633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13633_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj13653
(function(){
	window.obj13633_onTap_runningActionsCount = obj13633_onTap_runningActionsCount + 1;


	var selector = "#obj13653";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13643
(function(){
	window.obj13633_onTap_runningActionsCount = obj13633_onTap_runningActionsCount + 1;


	var selector = "#obj13643";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13633_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13633_onTap_activeActionGroupIndex = -1;
		$("#obj13633").trigger("obj13633_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13633) {
				console.warn("de-queueing event obj13633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13633_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj13422 
incrementCounter_13642();
function incrementCounter_13642() {
	window.obj13633_onTap_runningActionsCount = obj13633_onTap_runningActionsCount + 1;


	var oldValue = obj13422_counterValue;
	obj13422_counterValue = obj13422_counterValue + 1;
	if (! obj13422_counterCanExceedTargetValue && obj13422_counterValue > obj13422_counterTargetValue) {
		obj13422_counterValue = obj13422_counterTargetValue;
	}

	if (oldValue != obj13422_counterValue) {
		$("#obj13422").trigger('SCEventCounterValueChange');
		$("#obj13422").trigger('SCEventCounterIncrease');
		if (obj13422_counterValue == obj13422_counterTargetValue)
			$("#obj13422").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13633_onTap_runningActionsCount = window.obj13633_onTap_runningActionsCount - 1;

if (window.obj13633_onTap_runningActionsCount < 0) {
	window.obj13633_onTap_runningActionsCount = 0;
} else if (window.obj13633_onTap_runningActionsCount == 0) {
	obj13633_onTap_actionGroup6();
} }, 1);
}











};
obj13633_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13633_onTap_activeActionGroupIndex = -1;
		$("#obj13633").trigger("obj13633_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13633) {
				console.warn("de-queueing event obj13633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13633_onTap_activeActionGroupIndex = 6;
	











































};
obj13628_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13628_onTap_activeActionGroupIndex = -1;
		$("#obj13628").trigger("obj13628_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13628) {
				console.warn("de-queueing event obj13628." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13628").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13628_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13630();
function playAudioFile_13630() {
	window.obj13628_onTap_runningActionsCount = obj13628_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13630")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13630");
			$("#obj_audio_playSoundFile13630").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13628_onTap_runningActionsCount = window.obj13628_onTap_runningActionsCount - 1;

if (window.obj13628_onTap_runningActionsCount < 0) {
	window.obj13628_onTap_runningActionsCount = 0;
} else if (window.obj13628_onTap_runningActionsCount == 0) {
	obj13628_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13628_onTap_runningActionsCount = window.obj13628_onTap_runningActionsCount - 1;

if (window.obj13628_onTap_runningActionsCount < 0) {
	window.obj13628_onTap_runningActionsCount = 0;
} else if (window.obj13628_onTap_runningActionsCount == 0) {
	obj13628_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13628_onTap_runningActionsCount = window.obj13628_onTap_runningActionsCount - 1;

if (window.obj13628_onTap_runningActionsCount < 0) {
	window.obj13628_onTap_runningActionsCount = 0;
} else if (window.obj13628_onTap_runningActionsCount == 0) {
	obj13628_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13628_onTap_runningActionsCount = window.obj13628_onTap_runningActionsCount - 1;

if (window.obj13628_onTap_runningActionsCount < 0) {
	window.obj13628_onTap_runningActionsCount = 0;
} else if (window.obj13628_onTap_runningActionsCount == 0) {
	obj13628_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13628_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13628_onTap_activeActionGroupIndex = -1;
		$("#obj13628").trigger("obj13628_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13628) {
				console.warn("de-queueing event obj13628." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13628").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13628_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13628 
hide_13631();
function hide_13631() {
	var selector = "#obj13628";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13628_onTap_runningActionsCount = obj13628_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13628_onTap_runningActionsCount = window.obj13628_onTap_runningActionsCount - 1;

if (window.obj13628_onTap_runningActionsCount < 0) {
	window.obj13628_onTap_runningActionsCount = 0;
} else if (window.obj13628_onTap_runningActionsCount == 0) {
	obj13628_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13631(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13628_onTap_runningActionsCount = window.obj13628_onTap_runningActionsCount - 1;

if (window.obj13628_onTap_runningActionsCount < 0) {
	window.obj13628_onTap_runningActionsCount = 0;
} else if (window.obj13628_onTap_runningActionsCount == 0) {
	obj13628_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13628_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13628_onTap_activeActionGroupIndex = -1;
		$("#obj13628").trigger("obj13628_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13628) {
				console.warn("de-queueing event obj13628." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13628").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13628_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13628
(function(){
	window.obj13628_onTap_runningActionsCount = obj13628_onTap_runningActionsCount + 1;


	var selector = "#obj13628";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "shake";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13628_onTap_runningActionsCount = window.obj13628_onTap_runningActionsCount - 1;

if (window.obj13628_onTap_runningActionsCount < 0) {
	window.obj13628_onTap_runningActionsCount = 0;
} else if (window.obj13628_onTap_runningActionsCount == 0) {
	obj13628_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13628_onTap_runningActionsCount = window.obj13628_onTap_runningActionsCount - 1;

if (window.obj13628_onTap_runningActionsCount < 0) {
	window.obj13628_onTap_runningActionsCount = 0;
} else if (window.obj13628_onTap_runningActionsCount == 0) {
	obj13628_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13628_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13628_onTap_activeActionGroupIndex = -1;
		$("#obj13628").trigger("obj13628_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13628) {
				console.warn("de-queueing event obj13628." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13628").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13628_onTap_activeActionGroupIndex = 3;
	











































};
obj13623_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13623_onTap_activeActionGroupIndex = -1;
		$("#obj13623").trigger("obj13623_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13623) {
				console.warn("de-queueing event obj13623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13623_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13625();
function playAudioFile_13625() {
	window.obj13623_onTap_runningActionsCount = obj13623_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13625")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13625");
			$("#obj_audio_playSoundFile13625").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13623_onTap_runningActionsCount = window.obj13623_onTap_runningActionsCount - 1;

if (window.obj13623_onTap_runningActionsCount < 0) {
	window.obj13623_onTap_runningActionsCount = 0;
} else if (window.obj13623_onTap_runningActionsCount == 0) {
	obj13623_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13623_onTap_runningActionsCount = window.obj13623_onTap_runningActionsCount - 1;

if (window.obj13623_onTap_runningActionsCount < 0) {
	window.obj13623_onTap_runningActionsCount = 0;
} else if (window.obj13623_onTap_runningActionsCount == 0) {
	obj13623_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13623_onTap_runningActionsCount = window.obj13623_onTap_runningActionsCount - 1;

if (window.obj13623_onTap_runningActionsCount < 0) {
	window.obj13623_onTap_runningActionsCount = 0;
} else if (window.obj13623_onTap_runningActionsCount == 0) {
	obj13623_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13623_onTap_runningActionsCount = window.obj13623_onTap_runningActionsCount - 1;

if (window.obj13623_onTap_runningActionsCount < 0) {
	window.obj13623_onTap_runningActionsCount = 0;
} else if (window.obj13623_onTap_runningActionsCount == 0) {
	obj13623_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13623_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13623_onTap_activeActionGroupIndex = -1;
		$("#obj13623").trigger("obj13623_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13623) {
				console.warn("de-queueing event obj13623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13623_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13623 
hide_13626();
function hide_13626() {
	var selector = "#obj13623";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13623_onTap_runningActionsCount = obj13623_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13623_onTap_runningActionsCount = window.obj13623_onTap_runningActionsCount - 1;

if (window.obj13623_onTap_runningActionsCount < 0) {
	window.obj13623_onTap_runningActionsCount = 0;
} else if (window.obj13623_onTap_runningActionsCount == 0) {
	obj13623_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13626(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13623_onTap_runningActionsCount = window.obj13623_onTap_runningActionsCount - 1;

if (window.obj13623_onTap_runningActionsCount < 0) {
	window.obj13623_onTap_runningActionsCount = 0;
} else if (window.obj13623_onTap_runningActionsCount == 0) {
	obj13623_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13623_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13623_onTap_activeActionGroupIndex = -1;
		$("#obj13623").trigger("obj13623_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13623) {
				console.warn("de-queueing event obj13623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13623_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13623
(function(){
	window.obj13623_onTap_runningActionsCount = obj13623_onTap_runningActionsCount + 1;


	var selector = "#obj13623";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "shake";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13623_onTap_runningActionsCount = window.obj13623_onTap_runningActionsCount - 1;

if (window.obj13623_onTap_runningActionsCount < 0) {
	window.obj13623_onTap_runningActionsCount = 0;
} else if (window.obj13623_onTap_runningActionsCount == 0) {
	obj13623_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13623_onTap_runningActionsCount = window.obj13623_onTap_runningActionsCount - 1;

if (window.obj13623_onTap_runningActionsCount < 0) {
	window.obj13623_onTap_runningActionsCount = 0;
} else if (window.obj13623_onTap_runningActionsCount == 0) {
	obj13623_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13623_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13623_onTap_activeActionGroupIndex = -1;
		$("#obj13623").trigger("obj13623_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13623) {
				console.warn("de-queueing event obj13623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13623_onTap_activeActionGroupIndex = 3;
	











































};
obj13687_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13687_onTap_activeActionGroupIndex = -1;
		$("#obj13687").trigger("obj13687_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13687) {
				console.warn("de-queueing event obj13687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13687_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13687 
hide_13691();
function hide_13691() {
	var selector = "#obj13687";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13687_onTap_runningActionsCount = obj13687_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13691(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13687_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13687_onTap_activeActionGroupIndex = -1;
		$("#obj13687").trigger("obj13687_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13687) {
				console.warn("de-queueing event obj13687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13687_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13689();
function playAudioFile_13689() {
	window.obj13687_onTap_runningActionsCount = obj13687_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13689")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13689");
			$("#obj_audio_playSoundFile13689").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13687_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13687_onTap_activeActionGroupIndex = -1;
		$("#obj13687").trigger("obj13687_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13687) {
				console.warn("de-queueing event obj13687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13687_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13695 
hide_13690();
function hide_13690() {
	var selector = "#obj13695";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13687_onTap_runningActionsCount = obj13687_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13690(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13687_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13687_onTap_activeActionGroupIndex = -1;
		$("#obj13687").trigger("obj13687_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13687) {
				console.warn("de-queueing event obj13687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13687_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj13665
(function(){
	window.obj13687_onTap_runningActionsCount = obj13687_onTap_runningActionsCount + 1;


	var selector = "#obj13665";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13675
(function(){
	window.obj13687_onTap_runningActionsCount = obj13687_onTap_runningActionsCount + 1;


	var selector = "#obj13675";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13670
(function(){
	window.obj13687_onTap_runningActionsCount = obj13687_onTap_runningActionsCount + 1;


	var selector = "#obj13670";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13687_onTap_runningActionsCount = window.obj13687_onTap_runningActionsCount - 1;

if (window.obj13687_onTap_runningActionsCount < 0) {
	window.obj13687_onTap_runningActionsCount = 0;
} else if (window.obj13687_onTap_runningActionsCount == 0) {
	obj13687_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13687_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13687_onTap_activeActionGroupIndex = -1;
		$("#obj13687").trigger("obj13687_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13687) {
				console.warn("de-queueing event obj13687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13687_onTap_activeActionGroupIndex = 4;
	











































};
obj13675_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13675_onTap_activeActionGroupIndex = -1;
		$("#obj13675").trigger("obj13675_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13675) {
				console.warn("de-queueing event obj13675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13675_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13663
(function(){
	window.obj13675_onTap_runningActionsCount = obj13675_onTap_runningActionsCount + 1;


	var selector = "#obj13663";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13675_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13675_onTap_activeActionGroupIndex = -1;
		$("#obj13675").trigger("obj13675_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13675) {
				console.warn("de-queueing event obj13675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13675_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13678();
function playAudioFile_13678() {
	window.obj13675_onTap_runningActionsCount = obj13675_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13678")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13678");
			$("#obj_audio_playSoundFile13678").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13675_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13675_onTap_activeActionGroupIndex = -1;
		$("#obj13675").trigger("obj13675_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13675) {
				console.warn("de-queueing event obj13675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13675_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13675 
hide_13679();
function hide_13679() {
	var selector = "#obj13675";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13675_onTap_runningActionsCount = obj13675_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13679(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13670 
hide_13680();
function hide_13680() {
	var selector = "#obj13670";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13675_onTap_runningActionsCount = obj13675_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13680(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13665 
hide_13681();
function hide_13681() {
	var selector = "#obj13665";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13675_onTap_runningActionsCount = obj13675_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13681(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13675_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13675_onTap_activeActionGroupIndex = -1;
		$("#obj13675").trigger("obj13675_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13675) {
				console.warn("de-queueing event obj13675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13675_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_13744();
function wait_13744() {
	window.obj13675_onTap_runningActionsCount = obj13675_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup4();
}
	}, 200);
}


























};
obj13675_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13675_onTap_activeActionGroupIndex = -1;
		$("#obj13675").trigger("obj13675_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13675) {
				console.warn("de-queueing event obj13675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13675_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj13695
(function(){
	window.obj13675_onTap_runningActionsCount = obj13675_onTap_runningActionsCount + 1;


	var selector = "#obj13695";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13685
(function(){
	window.obj13675_onTap_runningActionsCount = obj13675_onTap_runningActionsCount + 1;


	var selector = "#obj13685";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13675_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13675_onTap_activeActionGroupIndex = -1;
		$("#obj13675").trigger("obj13675_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13675) {
				console.warn("de-queueing event obj13675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13675_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj13422 
incrementCounter_13684();
function incrementCounter_13684() {
	window.obj13675_onTap_runningActionsCount = obj13675_onTap_runningActionsCount + 1;


	var oldValue = obj13422_counterValue;
	obj13422_counterValue = obj13422_counterValue + 1;
	if (! obj13422_counterCanExceedTargetValue && obj13422_counterValue > obj13422_counterTargetValue) {
		obj13422_counterValue = obj13422_counterTargetValue;
	}

	if (oldValue != obj13422_counterValue) {
		$("#obj13422").trigger('SCEventCounterValueChange');
		$("#obj13422").trigger('SCEventCounterIncrease');
		if (obj13422_counterValue == obj13422_counterTargetValue)
			$("#obj13422").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13675_onTap_runningActionsCount = window.obj13675_onTap_runningActionsCount - 1;

if (window.obj13675_onTap_runningActionsCount < 0) {
	window.obj13675_onTap_runningActionsCount = 0;
} else if (window.obj13675_onTap_runningActionsCount == 0) {
	obj13675_onTap_actionGroup6();
} }, 1);
}











};
obj13675_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13675_onTap_activeActionGroupIndex = -1;
		$("#obj13675").trigger("obj13675_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13675) {
				console.warn("de-queueing event obj13675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13675_onTap_activeActionGroupIndex = 6;
	











































};
obj13670_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13670_onTap_activeActionGroupIndex = -1;
		$("#obj13670").trigger("obj13670_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13670) {
				console.warn("de-queueing event obj13670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13670_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13672();
function playAudioFile_13672() {
	window.obj13670_onTap_runningActionsCount = obj13670_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13672")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13672");
			$("#obj_audio_playSoundFile13672").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13670_onTap_runningActionsCount = window.obj13670_onTap_runningActionsCount - 1;

if (window.obj13670_onTap_runningActionsCount < 0) {
	window.obj13670_onTap_runningActionsCount = 0;
} else if (window.obj13670_onTap_runningActionsCount == 0) {
	obj13670_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13670_onTap_runningActionsCount = window.obj13670_onTap_runningActionsCount - 1;

if (window.obj13670_onTap_runningActionsCount < 0) {
	window.obj13670_onTap_runningActionsCount = 0;
} else if (window.obj13670_onTap_runningActionsCount == 0) {
	obj13670_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13670_onTap_runningActionsCount = window.obj13670_onTap_runningActionsCount - 1;

if (window.obj13670_onTap_runningActionsCount < 0) {
	window.obj13670_onTap_runningActionsCount = 0;
} else if (window.obj13670_onTap_runningActionsCount == 0) {
	obj13670_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13670_onTap_runningActionsCount = window.obj13670_onTap_runningActionsCount - 1;

if (window.obj13670_onTap_runningActionsCount < 0) {
	window.obj13670_onTap_runningActionsCount = 0;
} else if (window.obj13670_onTap_runningActionsCount == 0) {
	obj13670_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13670_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13670_onTap_activeActionGroupIndex = -1;
		$("#obj13670").trigger("obj13670_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13670) {
				console.warn("de-queueing event obj13670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13670_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13670 
hide_13673();
function hide_13673() {
	var selector = "#obj13670";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13670_onTap_runningActionsCount = obj13670_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13670_onTap_runningActionsCount = window.obj13670_onTap_runningActionsCount - 1;

if (window.obj13670_onTap_runningActionsCount < 0) {
	window.obj13670_onTap_runningActionsCount = 0;
} else if (window.obj13670_onTap_runningActionsCount == 0) {
	obj13670_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13673(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13670_onTap_runningActionsCount = window.obj13670_onTap_runningActionsCount - 1;

if (window.obj13670_onTap_runningActionsCount < 0) {
	window.obj13670_onTap_runningActionsCount = 0;
} else if (window.obj13670_onTap_runningActionsCount == 0) {
	obj13670_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13670_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13670_onTap_activeActionGroupIndex = -1;
		$("#obj13670").trigger("obj13670_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13670) {
				console.warn("de-queueing event obj13670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13670_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13670
(function(){
	window.obj13670_onTap_runningActionsCount = obj13670_onTap_runningActionsCount + 1;


	var selector = "#obj13670";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "shake";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13670_onTap_runningActionsCount = window.obj13670_onTap_runningActionsCount - 1;

if (window.obj13670_onTap_runningActionsCount < 0) {
	window.obj13670_onTap_runningActionsCount = 0;
} else if (window.obj13670_onTap_runningActionsCount == 0) {
	obj13670_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13670_onTap_runningActionsCount = window.obj13670_onTap_runningActionsCount - 1;

if (window.obj13670_onTap_runningActionsCount < 0) {
	window.obj13670_onTap_runningActionsCount = 0;
} else if (window.obj13670_onTap_runningActionsCount == 0) {
	obj13670_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13670_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13670_onTap_activeActionGroupIndex = -1;
		$("#obj13670").trigger("obj13670_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13670) {
				console.warn("de-queueing event obj13670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13670_onTap_activeActionGroupIndex = 3;
	











































};
obj13665_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13665_onTap_activeActionGroupIndex = -1;
		$("#obj13665").trigger("obj13665_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13665) {
				console.warn("de-queueing event obj13665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13665_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13667();
function playAudioFile_13667() {
	window.obj13665_onTap_runningActionsCount = obj13665_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13667")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13667");
			$("#obj_audio_playSoundFile13667").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13665_onTap_runningActionsCount = window.obj13665_onTap_runningActionsCount - 1;

if (window.obj13665_onTap_runningActionsCount < 0) {
	window.obj13665_onTap_runningActionsCount = 0;
} else if (window.obj13665_onTap_runningActionsCount == 0) {
	obj13665_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13665_onTap_runningActionsCount = window.obj13665_onTap_runningActionsCount - 1;

if (window.obj13665_onTap_runningActionsCount < 0) {
	window.obj13665_onTap_runningActionsCount = 0;
} else if (window.obj13665_onTap_runningActionsCount == 0) {
	obj13665_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13665_onTap_runningActionsCount = window.obj13665_onTap_runningActionsCount - 1;

if (window.obj13665_onTap_runningActionsCount < 0) {
	window.obj13665_onTap_runningActionsCount = 0;
} else if (window.obj13665_onTap_runningActionsCount == 0) {
	obj13665_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13665_onTap_runningActionsCount = window.obj13665_onTap_runningActionsCount - 1;

if (window.obj13665_onTap_runningActionsCount < 0) {
	window.obj13665_onTap_runningActionsCount = 0;
} else if (window.obj13665_onTap_runningActionsCount == 0) {
	obj13665_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13665_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13665_onTap_activeActionGroupIndex = -1;
		$("#obj13665").trigger("obj13665_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13665) {
				console.warn("de-queueing event obj13665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13665_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13665 
hide_13668();
function hide_13668() {
	var selector = "#obj13665";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13665_onTap_runningActionsCount = obj13665_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13665_onTap_runningActionsCount = window.obj13665_onTap_runningActionsCount - 1;

if (window.obj13665_onTap_runningActionsCount < 0) {
	window.obj13665_onTap_runningActionsCount = 0;
} else if (window.obj13665_onTap_runningActionsCount == 0) {
	obj13665_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13668(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13665_onTap_runningActionsCount = window.obj13665_onTap_runningActionsCount - 1;

if (window.obj13665_onTap_runningActionsCount < 0) {
	window.obj13665_onTap_runningActionsCount = 0;
} else if (window.obj13665_onTap_runningActionsCount == 0) {
	obj13665_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13665_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13665_onTap_activeActionGroupIndex = -1;
		$("#obj13665").trigger("obj13665_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13665) {
				console.warn("de-queueing event obj13665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13665_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13665
(function(){
	window.obj13665_onTap_runningActionsCount = obj13665_onTap_runningActionsCount + 1;


	var selector = "#obj13665";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "shake";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13665_onTap_runningActionsCount = window.obj13665_onTap_runningActionsCount - 1;

if (window.obj13665_onTap_runningActionsCount < 0) {
	window.obj13665_onTap_runningActionsCount = 0;
} else if (window.obj13665_onTap_runningActionsCount == 0) {
	obj13665_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13665_onTap_runningActionsCount = window.obj13665_onTap_runningActionsCount - 1;

if (window.obj13665_onTap_runningActionsCount < 0) {
	window.obj13665_onTap_runningActionsCount = 0;
} else if (window.obj13665_onTap_runningActionsCount == 0) {
	obj13665_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13665_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13665_onTap_activeActionGroupIndex = -1;
		$("#obj13665").trigger("obj13665_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13665) {
				console.warn("de-queueing event obj13665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13665_onTap_activeActionGroupIndex = 3;
	











































};
obj13729_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13729_onTap_activeActionGroupIndex = -1;
		$("#obj13729").trigger("obj13729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13729) {
				console.warn("de-queueing event obj13729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13729_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13729 
hide_13733();
function hide_13733() {
	var selector = "#obj13729";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13729_onTap_runningActionsCount = obj13729_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13733(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13729_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13729_onTap_activeActionGroupIndex = -1;
		$("#obj13729").trigger("obj13729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13729) {
				console.warn("de-queueing event obj13729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13729_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13731();
function playAudioFile_13731() {
	window.obj13729_onTap_runningActionsCount = obj13729_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13731")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13731");
			$("#obj_audio_playSoundFile13731").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13729_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13729_onTap_activeActionGroupIndex = -1;
		$("#obj13729").trigger("obj13729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13729) {
				console.warn("de-queueing event obj13729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13729_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13737 
hide_13732();
function hide_13732() {
	var selector = "#obj13737";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13729_onTap_runningActionsCount = obj13729_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13732(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13729_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13729_onTap_activeActionGroupIndex = -1;
		$("#obj13729").trigger("obj13729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13729) {
				console.warn("de-queueing event obj13729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13729_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj13707
(function(){
	window.obj13729_onTap_runningActionsCount = obj13729_onTap_runningActionsCount + 1;


	var selector = "#obj13707";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13717
(function(){
	window.obj13729_onTap_runningActionsCount = obj13729_onTap_runningActionsCount + 1;


	var selector = "#obj13717";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13712
(function(){
	window.obj13729_onTap_runningActionsCount = obj13729_onTap_runningActionsCount + 1;


	var selector = "#obj13712";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13729_onTap_runningActionsCount = window.obj13729_onTap_runningActionsCount - 1;

if (window.obj13729_onTap_runningActionsCount < 0) {
	window.obj13729_onTap_runningActionsCount = 0;
} else if (window.obj13729_onTap_runningActionsCount == 0) {
	obj13729_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13729_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13729_onTap_activeActionGroupIndex = -1;
		$("#obj13729").trigger("obj13729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13729) {
				console.warn("de-queueing event obj13729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13729_onTap_activeActionGroupIndex = 4;
	











































};
obj13717_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13717_onTap_activeActionGroupIndex = -1;
		$("#obj13717").trigger("obj13717_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13717) {
				console.warn("de-queueing event obj13717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13717_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13705
(function(){
	window.obj13717_onTap_runningActionsCount = obj13717_onTap_runningActionsCount + 1;


	var selector = "#obj13705";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13717_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13717_onTap_activeActionGroupIndex = -1;
		$("#obj13717").trigger("obj13717_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13717) {
				console.warn("de-queueing event obj13717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13717_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13720();
function playAudioFile_13720() {
	window.obj13717_onTap_runningActionsCount = obj13717_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13720")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13720");
			$("#obj_audio_playSoundFile13720").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13717_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13717_onTap_activeActionGroupIndex = -1;
		$("#obj13717").trigger("obj13717_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13717) {
				console.warn("de-queueing event obj13717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13717_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13717 
hide_13721();
function hide_13721() {
	var selector = "#obj13717";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13717_onTap_runningActionsCount = obj13717_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13721(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13712 
hide_13722();
function hide_13722() {
	var selector = "#obj13712";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13717_onTap_runningActionsCount = obj13717_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13722(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13707 
hide_13723();
function hide_13723() {
	var selector = "#obj13707";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13717_onTap_runningActionsCount = obj13717_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13723(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13717_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13717_onTap_activeActionGroupIndex = -1;
		$("#obj13717").trigger("obj13717_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13717) {
				console.warn("de-queueing event obj13717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13717_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_13745();
function wait_13745() {
	window.obj13717_onTap_runningActionsCount = obj13717_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup4();
}
	}, 200);
}


























};
obj13717_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13717_onTap_activeActionGroupIndex = -1;
		$("#obj13717").trigger("obj13717_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13717) {
				console.warn("de-queueing event obj13717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13717_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj13737
(function(){
	window.obj13717_onTap_runningActionsCount = obj13717_onTap_runningActionsCount + 1;


	var selector = "#obj13737";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13727
(function(){
	window.obj13717_onTap_runningActionsCount = obj13717_onTap_runningActionsCount + 1;


	var selector = "#obj13727";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13717_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13717_onTap_activeActionGroupIndex = -1;
		$("#obj13717").trigger("obj13717_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13717) {
				console.warn("de-queueing event obj13717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13717_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj13422 
incrementCounter_13726();
function incrementCounter_13726() {
	window.obj13717_onTap_runningActionsCount = obj13717_onTap_runningActionsCount + 1;


	var oldValue = obj13422_counterValue;
	obj13422_counterValue = obj13422_counterValue + 1;
	if (! obj13422_counterCanExceedTargetValue && obj13422_counterValue > obj13422_counterTargetValue) {
		obj13422_counterValue = obj13422_counterTargetValue;
	}

	if (oldValue != obj13422_counterValue) {
		$("#obj13422").trigger('SCEventCounterValueChange');
		$("#obj13422").trigger('SCEventCounterIncrease');
		if (obj13422_counterValue == obj13422_counterTargetValue)
			$("#obj13422").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13717_onTap_runningActionsCount = window.obj13717_onTap_runningActionsCount - 1;

if (window.obj13717_onTap_runningActionsCount < 0) {
	window.obj13717_onTap_runningActionsCount = 0;
} else if (window.obj13717_onTap_runningActionsCount == 0) {
	obj13717_onTap_actionGroup6();
} }, 1);
}











};
obj13717_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13717_onTap_activeActionGroupIndex = -1;
		$("#obj13717").trigger("obj13717_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13717) {
				console.warn("de-queueing event obj13717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13717_onTap_activeActionGroupIndex = 6;
	











































};
obj13712_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13712_onTap_activeActionGroupIndex = -1;
		$("#obj13712").trigger("obj13712_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13712) {
				console.warn("de-queueing event obj13712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13712_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13714();
function playAudioFile_13714() {
	window.obj13712_onTap_runningActionsCount = obj13712_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13714")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13714");
			$("#obj_audio_playSoundFile13714").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13712_onTap_runningActionsCount = window.obj13712_onTap_runningActionsCount - 1;

if (window.obj13712_onTap_runningActionsCount < 0) {
	window.obj13712_onTap_runningActionsCount = 0;
} else if (window.obj13712_onTap_runningActionsCount == 0) {
	obj13712_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13712_onTap_runningActionsCount = window.obj13712_onTap_runningActionsCount - 1;

if (window.obj13712_onTap_runningActionsCount < 0) {
	window.obj13712_onTap_runningActionsCount = 0;
} else if (window.obj13712_onTap_runningActionsCount == 0) {
	obj13712_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13712_onTap_runningActionsCount = window.obj13712_onTap_runningActionsCount - 1;

if (window.obj13712_onTap_runningActionsCount < 0) {
	window.obj13712_onTap_runningActionsCount = 0;
} else if (window.obj13712_onTap_runningActionsCount == 0) {
	obj13712_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13712_onTap_runningActionsCount = window.obj13712_onTap_runningActionsCount - 1;

if (window.obj13712_onTap_runningActionsCount < 0) {
	window.obj13712_onTap_runningActionsCount = 0;
} else if (window.obj13712_onTap_runningActionsCount == 0) {
	obj13712_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13712_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13712_onTap_activeActionGroupIndex = -1;
		$("#obj13712").trigger("obj13712_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13712) {
				console.warn("de-queueing event obj13712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13712_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13712 
hide_13715();
function hide_13715() {
	var selector = "#obj13712";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13712_onTap_runningActionsCount = obj13712_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13712_onTap_runningActionsCount = window.obj13712_onTap_runningActionsCount - 1;

if (window.obj13712_onTap_runningActionsCount < 0) {
	window.obj13712_onTap_runningActionsCount = 0;
} else if (window.obj13712_onTap_runningActionsCount == 0) {
	obj13712_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13715(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13712_onTap_runningActionsCount = window.obj13712_onTap_runningActionsCount - 1;

if (window.obj13712_onTap_runningActionsCount < 0) {
	window.obj13712_onTap_runningActionsCount = 0;
} else if (window.obj13712_onTap_runningActionsCount == 0) {
	obj13712_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13712_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13712_onTap_activeActionGroupIndex = -1;
		$("#obj13712").trigger("obj13712_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13712) {
				console.warn("de-queueing event obj13712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13712_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13712
(function(){
	window.obj13712_onTap_runningActionsCount = obj13712_onTap_runningActionsCount + 1;


	var selector = "#obj13712";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "shake";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13712_onTap_runningActionsCount = window.obj13712_onTap_runningActionsCount - 1;

if (window.obj13712_onTap_runningActionsCount < 0) {
	window.obj13712_onTap_runningActionsCount = 0;
} else if (window.obj13712_onTap_runningActionsCount == 0) {
	obj13712_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13712_onTap_runningActionsCount = window.obj13712_onTap_runningActionsCount - 1;

if (window.obj13712_onTap_runningActionsCount < 0) {
	window.obj13712_onTap_runningActionsCount = 0;
} else if (window.obj13712_onTap_runningActionsCount == 0) {
	obj13712_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13712_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13712_onTap_activeActionGroupIndex = -1;
		$("#obj13712").trigger("obj13712_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13712) {
				console.warn("de-queueing event obj13712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13712_onTap_activeActionGroupIndex = 3;
	











































};
obj13707_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13707_onTap_activeActionGroupIndex = -1;
		$("#obj13707").trigger("obj13707_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13707) {
				console.warn("de-queueing event obj13707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13707_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13709();
function playAudioFile_13709() {
	window.obj13707_onTap_runningActionsCount = obj13707_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13709")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13709");
			$("#obj_audio_playSoundFile13709").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13707_onTap_runningActionsCount = window.obj13707_onTap_runningActionsCount - 1;

if (window.obj13707_onTap_runningActionsCount < 0) {
	window.obj13707_onTap_runningActionsCount = 0;
} else if (window.obj13707_onTap_runningActionsCount == 0) {
	obj13707_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13707_onTap_runningActionsCount = window.obj13707_onTap_runningActionsCount - 1;

if (window.obj13707_onTap_runningActionsCount < 0) {
	window.obj13707_onTap_runningActionsCount = 0;
} else if (window.obj13707_onTap_runningActionsCount == 0) {
	obj13707_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj13707_onTap_runningActionsCount = window.obj13707_onTap_runningActionsCount - 1;

if (window.obj13707_onTap_runningActionsCount < 0) {
	window.obj13707_onTap_runningActionsCount = 0;
} else if (window.obj13707_onTap_runningActionsCount == 0) {
	obj13707_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13707_onTap_runningActionsCount = window.obj13707_onTap_runningActionsCount - 1;

if (window.obj13707_onTap_runningActionsCount < 0) {
	window.obj13707_onTap_runningActionsCount = 0;
} else if (window.obj13707_onTap_runningActionsCount == 0) {
	obj13707_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13707_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13707_onTap_activeActionGroupIndex = -1;
		$("#obj13707").trigger("obj13707_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13707) {
				console.warn("de-queueing event obj13707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13707_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13707 
hide_13710();
function hide_13710() {
	var selector = "#obj13707";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13707_onTap_runningActionsCount = obj13707_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13707_onTap_runningActionsCount = window.obj13707_onTap_runningActionsCount - 1;

if (window.obj13707_onTap_runningActionsCount < 0) {
	window.obj13707_onTap_runningActionsCount = 0;
} else if (window.obj13707_onTap_runningActionsCount == 0) {
	obj13707_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13710(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13707_onTap_runningActionsCount = window.obj13707_onTap_runningActionsCount - 1;

if (window.obj13707_onTap_runningActionsCount < 0) {
	window.obj13707_onTap_runningActionsCount = 0;
} else if (window.obj13707_onTap_runningActionsCount == 0) {
	obj13707_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13707_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13707_onTap_activeActionGroupIndex = -1;
		$("#obj13707").trigger("obj13707_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13707) {
				console.warn("de-queueing event obj13707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13707_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13707
(function(){
	window.obj13707_onTap_runningActionsCount = obj13707_onTap_runningActionsCount + 1;


	var selector = "#obj13707";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "shake";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj13707_onTap_runningActionsCount = window.obj13707_onTap_runningActionsCount - 1;

if (window.obj13707_onTap_runningActionsCount < 0) {
	window.obj13707_onTap_runningActionsCount = 0;
} else if (window.obj13707_onTap_runningActionsCount == 0) {
	obj13707_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13707_onTap_runningActionsCount = window.obj13707_onTap_runningActionsCount - 1;

if (window.obj13707_onTap_runningActionsCount < 0) {
	window.obj13707_onTap_runningActionsCount = 0;
} else if (window.obj13707_onTap_runningActionsCount == 0) {
	obj13707_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13707_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13707_onTap_activeActionGroupIndex = -1;
		$("#obj13707").trigger("obj13707_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13707) {
				console.warn("de-queueing event obj13707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13707_onTap_activeActionGroupIndex = 3;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




































































































/*
 *
 *   obj13334: Event Touch Down
 *
 */

$("#obj13334").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13334_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13334_onTap is still running");
	return;
}
var obj13334_onTap_runningActionsCount = 0;
var obj13334_onTap_loopCount = 0;
obj13334_onTap_actionGroup0();
});



























/*
 *
 *   obj13402: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13402").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13402_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13402_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13402_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13402_SCEventCounterReachedTargetValue_loopCount = 0;
obj13402_SCEventCounterReachedTargetValue_actionGroup0();
});
























































/*
 *
 *   obj13410: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13410").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13410_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13410_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13410_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13410_SCEventCounterReachedTargetValue_loopCount = 0;
obj13410_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13413: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13413").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13413_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13413_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13413_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13413_SCEventCounterReachedTargetValue_loopCount = 0;
obj13413_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13416: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13416").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13416_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13416_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13416_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13416_SCEventCounterReachedTargetValue_loopCount = 0;
obj13416_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13419: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13419").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13419_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13419_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13419_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13419_SCEventCounterReachedTargetValue_loopCount = 0;
obj13419_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13422: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13422").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13422_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13422_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13422_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13422_SCEventCounterReachedTargetValue_loopCount = 0;
obj13422_SCEventCounterReachedTargetValue_actionGroup0();
});








































































































/*
 *
 *   obj13573: Event Touch Down
 *
 */

$("#obj13573").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13573_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13573_onTap is still running");
	return;
}
var obj13573_onTap_runningActionsCount = 0;
var obj13573_onTap_loopCount = 0;
obj13573_onTap_actionGroup0();
});





































/*
 *
 *   obj13575: Event Touch Down
 *
 */

$("#obj13575").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13575_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13575_onTap is still running");
	return;
}
var obj13575_onTap_runningActionsCount = 0;
var obj13575_onTap_loopCount = 0;
obj13575_onTap_actionGroup0();
});


















/*
 *
 *   obj13577: Event Touch Down
 *
 */

$("#obj13577").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13577_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13577_onTap is still running");
	return;
}
var obj13577_onTap_runningActionsCount = 0;
var obj13577_onTap_loopCount = 0;
obj13577_onTap_actionGroup0();
});


















/*
 *
 *   obj13584: Event Touch Down
 *
 */

$("#obj13584").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13584_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13584_onTap is still running");
	return;
}
var obj13584_onTap_runningActionsCount = 0;
var obj13584_onTap_loopCount = 0;
obj13584_onTap_actionGroup0();
});




































































































































/*
 *
 *   obj13645: Event Touch Down
 *
 */

$("#obj13645").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13645_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13645_onTap is still running");
	return;
}
var obj13645_onTap_runningActionsCount = 0;
var obj13645_onTap_loopCount = 0;
obj13645_onTap_actionGroup0();
});





































/*
 *
 *   obj13633: Event Touch Down
 *
 */

$("#obj13633").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13633_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13633_onTap is still running");
	return;
}
var obj13633_onTap_runningActionsCount = 0;
var obj13633_onTap_loopCount = 0;
obj13633_onTap_actionGroup0();
});


















/*
 *
 *   obj13628: Event Touch Down
 *
 */

$("#obj13628").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13628_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13628_onTap is still running");
	return;
}
var obj13628_onTap_runningActionsCount = 0;
var obj13628_onTap_loopCount = 0;
obj13628_onTap_actionGroup0();
});


















/*
 *
 *   obj13623: Event Touch Down
 *
 */

$("#obj13623").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13623_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13623_onTap is still running");
	return;
}
var obj13623_onTap_runningActionsCount = 0;
var obj13623_onTap_loopCount = 0;
obj13623_onTap_actionGroup0();
});




































































































































/*
 *
 *   obj13687: Event Touch Down
 *
 */

$("#obj13687").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13687_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13687_onTap is still running");
	return;
}
var obj13687_onTap_runningActionsCount = 0;
var obj13687_onTap_loopCount = 0;
obj13687_onTap_actionGroup0();
});





































/*
 *
 *   obj13675: Event Touch Down
 *
 */

$("#obj13675").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13675_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13675_onTap is still running");
	return;
}
var obj13675_onTap_runningActionsCount = 0;
var obj13675_onTap_loopCount = 0;
obj13675_onTap_actionGroup0();
});


















/*
 *
 *   obj13670: Event Touch Down
 *
 */

$("#obj13670").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13670_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13670_onTap is still running");
	return;
}
var obj13670_onTap_runningActionsCount = 0;
var obj13670_onTap_loopCount = 0;
obj13670_onTap_actionGroup0();
});


















/*
 *
 *   obj13665: Event Touch Down
 *
 */

$("#obj13665").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13665_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13665_onTap is still running");
	return;
}
var obj13665_onTap_runningActionsCount = 0;
var obj13665_onTap_loopCount = 0;
obj13665_onTap_actionGroup0();
});




































































































































/*
 *
 *   obj13729: Event Touch Down
 *
 */

$("#obj13729").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13729_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13729_onTap is still running");
	return;
}
var obj13729_onTap_runningActionsCount = 0;
var obj13729_onTap_loopCount = 0;
obj13729_onTap_actionGroup0();
});





































/*
 *
 *   obj13717: Event Touch Down
 *
 */

$("#obj13717").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13717_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13717_onTap is still running");
	return;
}
var obj13717_onTap_runningActionsCount = 0;
var obj13717_onTap_loopCount = 0;
obj13717_onTap_actionGroup0();
});


















/*
 *
 *   obj13712: Event Touch Down
 *
 */

$("#obj13712").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13712_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13712_onTap is still running");
	return;
}
var obj13712_onTap_runningActionsCount = 0;
var obj13712_onTap_loopCount = 0;
obj13712_onTap_actionGroup0();
});


















/*
 *
 *   obj13707: Event Touch Down
 *
 */

$("#obj13707").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13707_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13707_onTap is still running");
	return;
}
var obj13707_onTap_runningActionsCount = 0;
var obj13707_onTap_loopCount = 0;
obj13707_onTap_actionGroup0();
});







































































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});

$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj13315").trigger('SCEventShow');
$("#obj13320").trigger('SCEventShow');
$("#obj13322").trigger('SCEventShow');
$("#obj13330").trigger('SCEventShow');
$("#obj13332").trigger('SCEventShow');
$("#obj13334").trigger('SCEventShow');
$("#obj13406").trigger('SCEventShow');
$("#obj13408").trigger('SCEventShow');
$("#obj13564").trigger('SCEventShow');
$("#obj13567").trigger('SCEventShow');
$("#obj13569").trigger('SCEventShow');
$("#obj13571").trigger('SCEventShow');
$("#obj13573").trigger('SCEventShow');
$("#obj13607").trigger('SCEventShow');
$("#obj13609").trigger('SCEventShow');
$("#obj13657").trigger('SCEventShow');
$("#obj13655").trigger('SCEventShow');
$("#obj13653").trigger('SCEventShow');
$("#obj13645").trigger('SCEventShow');
$("#obj13619").trigger('SCEventShow');
$("#obj13617").trigger('SCEventShow');
$("#obj13699").trigger('SCEventShow');
$("#obj13697").trigger('SCEventShow');
$("#obj13695").trigger('SCEventShow');
$("#obj13687").trigger('SCEventShow');
$("#obj13661").trigger('SCEventShow');
$("#obj13659").trigger('SCEventShow');
$("#obj13741").trigger('SCEventShow');
$("#obj13739").trigger('SCEventShow');
$("#obj13737").trigger('SCEventShow');
$("#obj13729").trigger('SCEventShow');
$("#obj13703").trigger('SCEventShow');
$("#obj13701").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});