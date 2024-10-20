pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 13747;
pubcoder.page.title = pubcoder.page.title || "19";
pubcoder.page.number = pubcoder.page.number || 19;
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
var obj13761_onTap_activeActionGroupIndex = -1;
var obj13761_onTap_runningActionsCount = 0;
var obj13761_onTap_loopCount = 0;
var obj13764_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13764_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13764_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13772_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13772_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13772_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13775_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13775_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13775_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13778_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13778_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13778_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13781_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13781_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13784_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13784_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13784_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13811_onTap_activeActionGroupIndex = -1;
var obj13811_onTap_runningActionsCount = 0;
var obj13811_onTap_loopCount = 0;
var obj13822_onTap_activeActionGroupIndex = -1;
var obj13822_onTap_runningActionsCount = 0;
var obj13822_onTap_loopCount = 0;
var obj13827_onTap_activeActionGroupIndex = -1;
var obj13827_onTap_runningActionsCount = 0;
var obj13827_onTap_loopCount = 0;
var obj13987_onTap_activeActionGroupIndex = -1;
var obj13987_onTap_runningActionsCount = 0;
var obj13987_onTap_loopCount = 0;
var obj14029_onTap_activeActionGroupIndex = -1;
var obj14029_onTap_runningActionsCount = 0;
var obj14029_onTap_loopCount = 0;
var obj14024_onTap_activeActionGroupIndex = -1;
var obj14024_onTap_runningActionsCount = 0;
var obj14024_onTap_loopCount = 0;
var obj14019_onTap_activeActionGroupIndex = -1;
var obj14019_onTap_runningActionsCount = 0;
var obj14019_onTap_loopCount = 0;
var obj14001_onTap_activeActionGroupIndex = -1;
var obj14001_onTap_runningActionsCount = 0;
var obj14001_onTap_loopCount = 0;
var obj14072_onTap_activeActionGroupIndex = -1;
var obj14072_onTap_runningActionsCount = 0;
var obj14072_onTap_loopCount = 0;
var obj14067_onTap_activeActionGroupIndex = -1;
var obj14067_onTap_runningActionsCount = 0;
var obj14067_onTap_loopCount = 0;
var obj14062_onTap_activeActionGroupIndex = -1;
var obj14062_onTap_runningActionsCount = 0;
var obj14062_onTap_loopCount = 0;
var obj14044_onTap_activeActionGroupIndex = -1;
var obj14044_onTap_runningActionsCount = 0;
var obj14044_onTap_loopCount = 0;
var obj14115_onTap_activeActionGroupIndex = -1;
var obj14115_onTap_runningActionsCount = 0;
var obj14115_onTap_loopCount = 0;
var obj14110_onTap_activeActionGroupIndex = -1;
var obj14110_onTap_runningActionsCount = 0;
var obj14110_onTap_loopCount = 0;
var obj14105_onTap_activeActionGroupIndex = -1;
var obj14105_onTap_runningActionsCount = 0;
var obj14105_onTap_loopCount = 0;
var obj14087_onTap_activeActionGroupIndex = -1;
var obj14087_onTap_runningActionsCount = 0;
var obj14087_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj13764_counterValue = 0;
var obj13764_counterTargetValue = 4;
var obj13764_counterCanExceedTargetValue = false;
var obj13772_counterValue = 0;
var obj13772_counterTargetValue = 1;
var obj13772_counterCanExceedTargetValue = false;
var obj13775_counterValue = 0;
var obj13775_counterTargetValue = 2;
var obj13775_counterCanExceedTargetValue = false;
var obj13778_counterValue = 0;
var obj13778_counterTargetValue = 3;
var obj13778_counterCanExceedTargetValue = false;
var obj13781_counterValue = 0;
var obj13781_counterTargetValue = 4;
var obj13781_counterCanExceedTargetValue = false;
var obj13784_counterValue = 0;
var obj13784_counterTargetValue = 1;
var obj13784_counterCanExceedTargetValue = false;

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
		
obj13761_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13761_onTap_activeActionGroupIndex = -1;
		$("#obj13761").trigger("obj13761_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13761) {
				console.warn("de-queueing event obj13761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13761_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13763();
function goToPage_13763() {
	window.obj13761_onTap_runningActionsCount = obj13761_onTap_runningActionsCount + 1;

	$("#anchor312")[0].click();
	window.obj13761_onTap_runningActionsCount = window.obj13761_onTap_runningActionsCount - 1;

if (window.obj13761_onTap_runningActionsCount < 0) {
	window.obj13761_onTap_runningActionsCount = 0;
} else if (window.obj13761_onTap_runningActionsCount == 0) {
	obj13761_onTap_actionGroup1();
}
}










































};
obj13761_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13761_onTap_activeActionGroupIndex = -1;
		$("#obj13761").trigger("obj13761_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13761) {
				console.warn("de-queueing event obj13761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13761_onTap_activeActionGroupIndex = 1;
	











































};
obj13764_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13764_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13764").trigger("obj13764_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13764) {
				console.warn("de-queueing event obj13764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13764_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_13766();
function wait_13766() {
	window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount = obj13764_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13764_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj13764_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13764_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13764").trigger("obj13764_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13764) {
				console.warn("de-queueing event obj13764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13764_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_13767();
function goToPage_13767() {
	window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount = obj13764_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor313")[0].click();
	window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13764_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13764_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj13764_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13764_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13764").trigger("obj13764_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13764) {
				console.warn("de-queueing event obj13764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13764_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj13772_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13772_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13772").trigger("obj13772_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13772) {
				console.warn("de-queueing event obj13772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13772_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13774();
function switchText_13774() {
	window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount = obj13772_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>5/8</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13770_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13770_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13770").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13770_content");
			setTimeout(function () {
				window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13772_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13770 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13772_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13772_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13772_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13772_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13772").trigger("obj13772_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13772) {
				console.warn("de-queueing event obj13772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13772_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13775_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13775_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13775").trigger("obj13775_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13775) {
				console.warn("de-queueing event obj13775." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13775").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13775_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13777();
function switchText_13777() {
	window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount = obj13775_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>6/8</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13770_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13770_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13770").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13770_content");
			setTimeout(function () {
				window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13775_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13770 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13775_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13775_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13775_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13775_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13775").trigger("obj13775_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13775) {
				console.warn("de-queueing event obj13775." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13775").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13775_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13778_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13778_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13778").trigger("obj13778_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13778) {
				console.warn("de-queueing event obj13778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13778_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13780();
function switchText_13780() {
	window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount = obj13778_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>7/8</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13770_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13770_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13770").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13770_content");
			setTimeout(function () {
				window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13778_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13770 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13778_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13778_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13778_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13778_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13778").trigger("obj13778_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13778) {
				console.warn("de-queueing event obj13778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13778_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13781_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13781").trigger("obj13781_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13781) {
				console.warn("de-queueing event obj13781." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13781").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13783();
function switchText_13783() {
	window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = obj13781_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>8/8</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13770_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13770_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13770").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13770_content");
			setTimeout(function () {
				window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13781_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13770 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13781_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13781_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13781").trigger("obj13781_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13781) {
				console.warn("de-queueing event obj13781." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13781").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
















//	action: wait
wait_14128();
function wait_14128() {
	window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = obj13781_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13781_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1000);
}


























};
obj13781_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13781").trigger("obj13781_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13781) {
				console.warn("de-queueing event obj13781." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13781").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_14129();
function goToPage_14129() {
	window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = obj13781_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor314")[0].click();
	window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13781_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13781_SCEventCounterReachedTargetValue_actionGroup3();
}
}










































};
obj13781_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13781").trigger("obj13781_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13781) {
				console.warn("de-queueing event obj13781." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13781").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj13784_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13784_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13784").trigger("obj13784_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13784) {
				console.warn("de-queueing event obj13784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13784_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj13772 
incrementCounter_13786();
function incrementCounter_13786() {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = obj13784_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13772_counterValue;
	obj13772_counterValue = obj13772_counterValue + 1;
	if (! obj13772_counterCanExceedTargetValue && obj13772_counterValue > obj13772_counterTargetValue) {
		obj13772_counterValue = obj13772_counterTargetValue;
	}

	if (oldValue != obj13772_counterValue) {
		$("#obj13772").trigger('SCEventCounterValueChange');
		$("#obj13772").trigger('SCEventCounterIncrease');
		if (obj13772_counterValue == obj13772_counterTargetValue)
			$("#obj13772").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13784_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13775 
incrementCounter_13787();
function incrementCounter_13787() {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = obj13784_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13775_counterValue;
	obj13775_counterValue = obj13775_counterValue + 1;
	if (! obj13775_counterCanExceedTargetValue && obj13775_counterValue > obj13775_counterTargetValue) {
		obj13775_counterValue = obj13775_counterTargetValue;
	}

	if (oldValue != obj13775_counterValue) {
		$("#obj13775").trigger('SCEventCounterValueChange');
		$("#obj13775").trigger('SCEventCounterIncrease');
		if (obj13775_counterValue == obj13775_counterTargetValue)
			$("#obj13775").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13784_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13778 
incrementCounter_13788();
function incrementCounter_13788() {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = obj13784_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13778_counterValue;
	obj13778_counterValue = obj13778_counterValue + 1;
	if (! obj13778_counterCanExceedTargetValue && obj13778_counterValue > obj13778_counterTargetValue) {
		obj13778_counterValue = obj13778_counterTargetValue;
	}

	if (oldValue != obj13778_counterValue) {
		$("#obj13778").trigger('SCEventCounterValueChange');
		$("#obj13778").trigger('SCEventCounterIncrease');
		if (obj13778_counterValue == obj13778_counterTargetValue)
			$("#obj13778").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13784_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13781 
incrementCounter_13789();
function incrementCounter_13789() {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = obj13784_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13781_counterValue;
	obj13781_counterValue = obj13781_counterValue + 1;
	if (! obj13781_counterCanExceedTargetValue && obj13781_counterValue > obj13781_counterTargetValue) {
		obj13781_counterValue = obj13781_counterTargetValue;
	}

	if (oldValue != obj13781_counterValue) {
		$("#obj13781").trigger('SCEventCounterValueChange');
		$("#obj13781").trigger('SCEventCounterIncrease');
		if (obj13781_counterValue == obj13781_counterTargetValue)
			$("#obj13781").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13784_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj13784_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13784_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13784").trigger("obj13784_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13784) {
				console.warn("de-queueing event obj13784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13784_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj13784 
decrementCounter_13790();
function decrementCounter_13790() {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = obj13784_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13784_counterValue;
	obj13784_counterValue = obj13784_counterValue - 1;
	if (obj13784_counterValue < 0) {
		obj13784_counterValue = 0;
	}

	if (oldValue != obj13784_counterValue) {
		$("#obj13784").trigger('SCEventCounterValueChange');
		$("#obj13784").trigger('SCEventCounterDecrease');
		if (obj13784_counterValue == obj13784_counterTargetValue)
			$("#obj13784").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13784_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13784_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj13784_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13784_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13784").trigger("obj13784_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13784) {
				console.warn("de-queueing event obj13784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13784_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj13811_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13811_onTap_activeActionGroupIndex = -1;
		$("#obj13811").trigger("obj13811_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13811) {
				console.warn("de-queueing event obj13811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13811_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13832
(function(){
	window.obj13811_onTap_runningActionsCount = obj13811_onTap_runningActionsCount + 1;


	var selector = "#obj13832";
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
					window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup1();
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
				window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13811_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13811_onTap_activeActionGroupIndex = -1;
		$("#obj13811").trigger("obj13811_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13811) {
				console.warn("de-queueing event obj13811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13811_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13814();
function playAudioFile_13814() {
	window.obj13811_onTap_runningActionsCount = obj13811_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13814")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13814");
			$("#obj_audio_playSoundFile13814").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup2();
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
				window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13811_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13811_onTap_activeActionGroupIndex = -1;
		$("#obj13811").trigger("obj13811_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13811) {
				console.warn("de-queueing event obj13811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13811_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13822 
hide_24527();
function hide_24527() {
	var selector = "#obj13822";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13811_onTap_runningActionsCount = obj13811_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24527(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13827 
hide_24528();
function hide_24528() {
	var selector = "#obj13827";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13811_onTap_runningActionsCount = obj13811_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24528(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13811 
hide_24529();
function hide_24529() {
	var selector = "#obj13811";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13811_onTap_runningActionsCount = obj13811_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24529(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13985 
hide_13994();
function hide_13994() {
	var selector = "#obj13985";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13811_onTap_runningActionsCount = obj13811_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13994(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13811_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13811_onTap_activeActionGroupIndex = -1;
		$("#obj13811").trigger("obj13811_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13811) {
				console.warn("de-queueing event obj13811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13811_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_13818();
function wait_13818() {
	window.obj13811_onTap_runningActionsCount = obj13811_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup4();
}
	}, 200);
}


























};
obj13811_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13811_onTap_activeActionGroupIndex = -1;
		$("#obj13811").trigger("obj13811_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13811) {
				console.warn("de-queueing event obj13811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13811_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj13809
(function(){
	window.obj13811_onTap_runningActionsCount = obj13811_onTap_runningActionsCount + 1;


	var selector = "#obj13809";
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
					window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup5();
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
				window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13811_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13811_onTap_activeActionGroupIndex = -1;
		$("#obj13811").trigger("obj13811_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13811) {
				console.warn("de-queueing event obj13811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13811_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj13784 
incrementCounter_13821();
function incrementCounter_13821() {
	window.obj13811_onTap_runningActionsCount = obj13811_onTap_runningActionsCount + 1;


	var oldValue = obj13784_counterValue;
	obj13784_counterValue = obj13784_counterValue + 1;
	if (! obj13784_counterCanExceedTargetValue && obj13784_counterValue > obj13784_counterTargetValue) {
		obj13784_counterValue = obj13784_counterTargetValue;
	}

	if (oldValue != obj13784_counterValue) {
		$("#obj13784").trigger('SCEventCounterValueChange');
		$("#obj13784").trigger('SCEventCounterIncrease');
		if (obj13784_counterValue == obj13784_counterTargetValue)
			$("#obj13784").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13811_onTap_runningActionsCount = window.obj13811_onTap_runningActionsCount - 1;

if (window.obj13811_onTap_runningActionsCount < 0) {
	window.obj13811_onTap_runningActionsCount = 0;
} else if (window.obj13811_onTap_runningActionsCount == 0) {
	obj13811_onTap_actionGroup6();
} }, 1);
}











};
obj13811_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13811_onTap_activeActionGroupIndex = -1;
		$("#obj13811").trigger("obj13811_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13811) {
				console.warn("de-queueing event obj13811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13811_onTap_activeActionGroupIndex = 6;
	











































};
obj13822_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13822_onTap_activeActionGroupIndex = -1;
		$("#obj13822").trigger("obj13822_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13822) {
				console.warn("de-queueing event obj13822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13822_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13824();
function playAudioFile_13824() {
	window.obj13822_onTap_runningActionsCount = obj13822_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13824")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13824");
			$("#obj_audio_playSoundFile13824").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13822_onTap_runningActionsCount = window.obj13822_onTap_runningActionsCount - 1;

if (window.obj13822_onTap_runningActionsCount < 0) {
	window.obj13822_onTap_runningActionsCount = 0;
} else if (window.obj13822_onTap_runningActionsCount == 0) {
	obj13822_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13822_onTap_runningActionsCount = window.obj13822_onTap_runningActionsCount - 1;

if (window.obj13822_onTap_runningActionsCount < 0) {
	window.obj13822_onTap_runningActionsCount = 0;
} else if (window.obj13822_onTap_runningActionsCount == 0) {
	obj13822_onTap_actionGroup1();
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
				window.obj13822_onTap_runningActionsCount = window.obj13822_onTap_runningActionsCount - 1;

if (window.obj13822_onTap_runningActionsCount < 0) {
	window.obj13822_onTap_runningActionsCount = 0;
} else if (window.obj13822_onTap_runningActionsCount == 0) {
	obj13822_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13822_onTap_runningActionsCount = window.obj13822_onTap_runningActionsCount - 1;

if (window.obj13822_onTap_runningActionsCount < 0) {
	window.obj13822_onTap_runningActionsCount = 0;
} else if (window.obj13822_onTap_runningActionsCount == 0) {
	obj13822_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13822_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13822_onTap_activeActionGroupIndex = -1;
		$("#obj13822").trigger("obj13822_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13822) {
				console.warn("de-queueing event obj13822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13822_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13822 
hide_13825();
function hide_13825() {
	var selector = "#obj13822";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13822_onTap_runningActionsCount = obj13822_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13822_onTap_runningActionsCount = window.obj13822_onTap_runningActionsCount - 1;

if (window.obj13822_onTap_runningActionsCount < 0) {
	window.obj13822_onTap_runningActionsCount = 0;
} else if (window.obj13822_onTap_runningActionsCount == 0) {
	obj13822_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13825(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13822_onTap_runningActionsCount = window.obj13822_onTap_runningActionsCount - 1;

if (window.obj13822_onTap_runningActionsCount < 0) {
	window.obj13822_onTap_runningActionsCount = 0;
} else if (window.obj13822_onTap_runningActionsCount == 0) {
	obj13822_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13822_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13822_onTap_activeActionGroupIndex = -1;
		$("#obj13822").trigger("obj13822_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13822) {
				console.warn("de-queueing event obj13822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13822_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13822
(function(){
	window.obj13822_onTap_runningActionsCount = obj13822_onTap_runningActionsCount + 1;


	var selector = "#obj13822";
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
					window.obj13822_onTap_runningActionsCount = window.obj13822_onTap_runningActionsCount - 1;

if (window.obj13822_onTap_runningActionsCount < 0) {
	window.obj13822_onTap_runningActionsCount = 0;
} else if (window.obj13822_onTap_runningActionsCount == 0) {
	obj13822_onTap_actionGroup3();
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
				window.obj13822_onTap_runningActionsCount = window.obj13822_onTap_runningActionsCount - 1;

if (window.obj13822_onTap_runningActionsCount < 0) {
	window.obj13822_onTap_runningActionsCount = 0;
} else if (window.obj13822_onTap_runningActionsCount == 0) {
	obj13822_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13822_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13822_onTap_activeActionGroupIndex = -1;
		$("#obj13822").trigger("obj13822_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13822) {
				console.warn("de-queueing event obj13822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13822_onTap_activeActionGroupIndex = 3;
	











































};
obj13827_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13827_onTap_activeActionGroupIndex = -1;
		$("#obj13827").trigger("obj13827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13827) {
				console.warn("de-queueing event obj13827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13827_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13829();
function playAudioFile_13829() {
	window.obj13827_onTap_runningActionsCount = obj13827_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13829")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13829");
			$("#obj_audio_playSoundFile13829").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13827_onTap_runningActionsCount = window.obj13827_onTap_runningActionsCount - 1;

if (window.obj13827_onTap_runningActionsCount < 0) {
	window.obj13827_onTap_runningActionsCount = 0;
} else if (window.obj13827_onTap_runningActionsCount == 0) {
	obj13827_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13827_onTap_runningActionsCount = window.obj13827_onTap_runningActionsCount - 1;

if (window.obj13827_onTap_runningActionsCount < 0) {
	window.obj13827_onTap_runningActionsCount = 0;
} else if (window.obj13827_onTap_runningActionsCount == 0) {
	obj13827_onTap_actionGroup1();
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
				window.obj13827_onTap_runningActionsCount = window.obj13827_onTap_runningActionsCount - 1;

if (window.obj13827_onTap_runningActionsCount < 0) {
	window.obj13827_onTap_runningActionsCount = 0;
} else if (window.obj13827_onTap_runningActionsCount == 0) {
	obj13827_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13827_onTap_runningActionsCount = window.obj13827_onTap_runningActionsCount - 1;

if (window.obj13827_onTap_runningActionsCount < 0) {
	window.obj13827_onTap_runningActionsCount = 0;
} else if (window.obj13827_onTap_runningActionsCount == 0) {
	obj13827_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13827_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13827_onTap_activeActionGroupIndex = -1;
		$("#obj13827").trigger("obj13827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13827) {
				console.warn("de-queueing event obj13827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13827_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13827 
hide_13830();
function hide_13830() {
	var selector = "#obj13827";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13827_onTap_runningActionsCount = obj13827_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13827_onTap_runningActionsCount = window.obj13827_onTap_runningActionsCount - 1;

if (window.obj13827_onTap_runningActionsCount < 0) {
	window.obj13827_onTap_runningActionsCount = 0;
} else if (window.obj13827_onTap_runningActionsCount == 0) {
	obj13827_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13830(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13827_onTap_runningActionsCount = window.obj13827_onTap_runningActionsCount - 1;

if (window.obj13827_onTap_runningActionsCount < 0) {
	window.obj13827_onTap_runningActionsCount = 0;
} else if (window.obj13827_onTap_runningActionsCount == 0) {
	obj13827_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13827_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13827_onTap_activeActionGroupIndex = -1;
		$("#obj13827").trigger("obj13827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13827) {
				console.warn("de-queueing event obj13827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13827_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13827
(function(){
	window.obj13827_onTap_runningActionsCount = obj13827_onTap_runningActionsCount + 1;


	var selector = "#obj13827";
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
					window.obj13827_onTap_runningActionsCount = window.obj13827_onTap_runningActionsCount - 1;

if (window.obj13827_onTap_runningActionsCount < 0) {
	window.obj13827_onTap_runningActionsCount = 0;
} else if (window.obj13827_onTap_runningActionsCount == 0) {
	obj13827_onTap_actionGroup3();
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
				window.obj13827_onTap_runningActionsCount = window.obj13827_onTap_runningActionsCount - 1;

if (window.obj13827_onTap_runningActionsCount < 0) {
	window.obj13827_onTap_runningActionsCount = 0;
} else if (window.obj13827_onTap_runningActionsCount == 0) {
	obj13827_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13827_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13827_onTap_activeActionGroupIndex = -1;
		$("#obj13827").trigger("obj13827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13827) {
				console.warn("de-queueing event obj13827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13827_onTap_activeActionGroupIndex = 3;
	











































};
obj13987_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13987_onTap_activeActionGroupIndex = -1;
		$("#obj13987").trigger("obj13987_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13987) {
				console.warn("de-queueing event obj13987." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13987").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13987_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13998();
function playAudioFile_13998() {
	window.obj13987_onTap_runningActionsCount = obj13987_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13998")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13998");
			$("#obj_audio_playSoundFile13998").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup1();
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
				window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13987_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13987_onTap_activeActionGroupIndex = -1;
		$("#obj13987").trigger("obj13987_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13987) {
				console.warn("de-queueing event obj13987." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13987").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13987_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13987 
hide_13989();
function hide_13989() {
	var selector = "#obj13987";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13987_onTap_runningActionsCount = obj13987_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13989(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13985
(function(){
	window.obj13987_onTap_runningActionsCount = obj13987_onTap_runningActionsCount + 1;


	var selector = "#obj13985";
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
					window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup2();
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
				window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13987_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13987_onTap_activeActionGroupIndex = -1;
		$("#obj13987").trigger("obj13987_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13987) {
				console.warn("de-queueing event obj13987." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13987").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13987_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13811
(function(){
	window.obj13987_onTap_runningActionsCount = obj13987_onTap_runningActionsCount + 1;


	var selector = "#obj13811";
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
					window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup3();
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
				window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13822
(function(){
	window.obj13987_onTap_runningActionsCount = obj13987_onTap_runningActionsCount + 1;


	var selector = "#obj13822";
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
					window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup3();
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
				window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13827
(function(){
	window.obj13987_onTap_runningActionsCount = obj13987_onTap_runningActionsCount + 1;


	var selector = "#obj13827";
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
					window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup3();
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
				window.obj13987_onTap_runningActionsCount = window.obj13987_onTap_runningActionsCount - 1;

if (window.obj13987_onTap_runningActionsCount < 0) {
	window.obj13987_onTap_runningActionsCount = 0;
} else if (window.obj13987_onTap_runningActionsCount == 0) {
	obj13987_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13987_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13987_onTap_activeActionGroupIndex = -1;
		$("#obj13987").trigger("obj13987_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13987) {
				console.warn("de-queueing event obj13987." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13987").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13987_onTap_activeActionGroupIndex = 3;
	











































};
obj14029_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14029_onTap_activeActionGroupIndex = -1;
		$("#obj14029").trigger("obj14029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14029) {
				console.warn("de-queueing event obj14029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14029_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13999
(function(){
	window.obj14029_onTap_runningActionsCount = obj14029_onTap_runningActionsCount + 1;


	var selector = "#obj13999";
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
					window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup1();
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
				window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14029_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14029_onTap_activeActionGroupIndex = -1;
		$("#obj14029").trigger("obj14029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14029) {
				console.warn("de-queueing event obj14029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14029_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14032();
function playAudioFile_14032() {
	window.obj14029_onTap_runningActionsCount = obj14029_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14032")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14032");
			$("#obj_audio_playSoundFile14032").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup2();
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
				window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14029_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14029_onTap_activeActionGroupIndex = -1;
		$("#obj14029").trigger("obj14029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14029) {
				console.warn("de-queueing event obj14029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14029_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj14024 
hide_24530();
function hide_24530() {
	var selector = "#obj14024";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14029_onTap_runningActionsCount = obj14029_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24530(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14019 
hide_24531();
function hide_24531() {
	var selector = "#obj14019";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14029_onTap_runningActionsCount = obj14029_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24531(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14029 
hide_24532();
function hide_24532() {
	var selector = "#obj14029";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14029_onTap_runningActionsCount = obj14029_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24532(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14009 
hide_14036();
function hide_14036() {
	var selector = "#obj14009";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14029_onTap_runningActionsCount = obj14029_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14036(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14029_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14029_onTap_activeActionGroupIndex = -1;
		$("#obj14029").trigger("obj14029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14029) {
				console.warn("de-queueing event obj14029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14029_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_14037();
function wait_14037() {
	window.obj14029_onTap_runningActionsCount = obj14029_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup4();
}
	}, 200);
}


























};
obj14029_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14029_onTap_activeActionGroupIndex = -1;
		$("#obj14029").trigger("obj14029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14029) {
				console.warn("de-queueing event obj14029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14029_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj14011
(function(){
	window.obj14029_onTap_runningActionsCount = obj14029_onTap_runningActionsCount + 1;


	var selector = "#obj14011";
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
					window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup5();
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
				window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14029_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14029_onTap_activeActionGroupIndex = -1;
		$("#obj14029").trigger("obj14029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14029) {
				console.warn("de-queueing event obj14029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14029_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj13784 
incrementCounter_14039();
function incrementCounter_14039() {
	window.obj14029_onTap_runningActionsCount = obj14029_onTap_runningActionsCount + 1;


	var oldValue = obj13784_counterValue;
	obj13784_counterValue = obj13784_counterValue + 1;
	if (! obj13784_counterCanExceedTargetValue && obj13784_counterValue > obj13784_counterTargetValue) {
		obj13784_counterValue = obj13784_counterTargetValue;
	}

	if (oldValue != obj13784_counterValue) {
		$("#obj13784").trigger('SCEventCounterValueChange');
		$("#obj13784").trigger('SCEventCounterIncrease');
		if (obj13784_counterValue == obj13784_counterTargetValue)
			$("#obj13784").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14029_onTap_runningActionsCount = window.obj14029_onTap_runningActionsCount - 1;

if (window.obj14029_onTap_runningActionsCount < 0) {
	window.obj14029_onTap_runningActionsCount = 0;
} else if (window.obj14029_onTap_runningActionsCount == 0) {
	obj14029_onTap_actionGroup6();
} }, 1);
}











};
obj14029_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14029_onTap_activeActionGroupIndex = -1;
		$("#obj14029").trigger("obj14029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14029) {
				console.warn("de-queueing event obj14029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14029_onTap_activeActionGroupIndex = 6;
	











































};
obj14024_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14024_onTap_activeActionGroupIndex = -1;
		$("#obj14024").trigger("obj14024_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14024) {
				console.warn("de-queueing event obj14024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14024_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14026();
function playAudioFile_14026() {
	window.obj14024_onTap_runningActionsCount = obj14024_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14026")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14026");
			$("#obj_audio_playSoundFile14026").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;

if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;

if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup1();
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
				window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;

if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;

if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14024_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14024_onTap_activeActionGroupIndex = -1;
		$("#obj14024").trigger("obj14024_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14024) {
				console.warn("de-queueing event obj14024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14024_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj14024 
hide_14027();
function hide_14027() {
	var selector = "#obj14024";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14024_onTap_runningActionsCount = obj14024_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;

if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14027(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;

if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14024_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14024_onTap_activeActionGroupIndex = -1;
		$("#obj14024").trigger("obj14024_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14024) {
				console.warn("de-queueing event obj14024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14024_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14024
(function(){
	window.obj14024_onTap_runningActionsCount = obj14024_onTap_runningActionsCount + 1;


	var selector = "#obj14024";
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
					window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;

if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup3();
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
				window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;

if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14024_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14024_onTap_activeActionGroupIndex = -1;
		$("#obj14024").trigger("obj14024_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14024) {
				console.warn("de-queueing event obj14024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14024_onTap_activeActionGroupIndex = 3;
	











































};
obj14019_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14019_onTap_activeActionGroupIndex = -1;
		$("#obj14019").trigger("obj14019_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14019) {
				console.warn("de-queueing event obj14019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14019_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14021();
function playAudioFile_14021() {
	window.obj14019_onTap_runningActionsCount = obj14019_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14021")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14021");
			$("#obj_audio_playSoundFile14021").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14019_onTap_runningActionsCount = window.obj14019_onTap_runningActionsCount - 1;

if (window.obj14019_onTap_runningActionsCount < 0) {
	window.obj14019_onTap_runningActionsCount = 0;
} else if (window.obj14019_onTap_runningActionsCount == 0) {
	obj14019_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14019_onTap_runningActionsCount = window.obj14019_onTap_runningActionsCount - 1;

if (window.obj14019_onTap_runningActionsCount < 0) {
	window.obj14019_onTap_runningActionsCount = 0;
} else if (window.obj14019_onTap_runningActionsCount == 0) {
	obj14019_onTap_actionGroup1();
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
				window.obj14019_onTap_runningActionsCount = window.obj14019_onTap_runningActionsCount - 1;

if (window.obj14019_onTap_runningActionsCount < 0) {
	window.obj14019_onTap_runningActionsCount = 0;
} else if (window.obj14019_onTap_runningActionsCount == 0) {
	obj14019_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14019_onTap_runningActionsCount = window.obj14019_onTap_runningActionsCount - 1;

if (window.obj14019_onTap_runningActionsCount < 0) {
	window.obj14019_onTap_runningActionsCount = 0;
} else if (window.obj14019_onTap_runningActionsCount == 0) {
	obj14019_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14019_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14019_onTap_activeActionGroupIndex = -1;
		$("#obj14019").trigger("obj14019_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14019) {
				console.warn("de-queueing event obj14019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14019_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj14019 
hide_14022();
function hide_14022() {
	var selector = "#obj14019";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14019_onTap_runningActionsCount = obj14019_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14019_onTap_runningActionsCount = window.obj14019_onTap_runningActionsCount - 1;

if (window.obj14019_onTap_runningActionsCount < 0) {
	window.obj14019_onTap_runningActionsCount = 0;
} else if (window.obj14019_onTap_runningActionsCount == 0) {
	obj14019_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14022(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14019_onTap_runningActionsCount = window.obj14019_onTap_runningActionsCount - 1;

if (window.obj14019_onTap_runningActionsCount < 0) {
	window.obj14019_onTap_runningActionsCount = 0;
} else if (window.obj14019_onTap_runningActionsCount == 0) {
	obj14019_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14019_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14019_onTap_activeActionGroupIndex = -1;
		$("#obj14019").trigger("obj14019_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14019) {
				console.warn("de-queueing event obj14019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14019_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14019
(function(){
	window.obj14019_onTap_runningActionsCount = obj14019_onTap_runningActionsCount + 1;


	var selector = "#obj14019";
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
					window.obj14019_onTap_runningActionsCount = window.obj14019_onTap_runningActionsCount - 1;

if (window.obj14019_onTap_runningActionsCount < 0) {
	window.obj14019_onTap_runningActionsCount = 0;
} else if (window.obj14019_onTap_runningActionsCount == 0) {
	obj14019_onTap_actionGroup3();
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
				window.obj14019_onTap_runningActionsCount = window.obj14019_onTap_runningActionsCount - 1;

if (window.obj14019_onTap_runningActionsCount < 0) {
	window.obj14019_onTap_runningActionsCount = 0;
} else if (window.obj14019_onTap_runningActionsCount == 0) {
	obj14019_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14019_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14019_onTap_activeActionGroupIndex = -1;
		$("#obj14019").trigger("obj14019_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14019) {
				console.warn("de-queueing event obj14019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14019_onTap_activeActionGroupIndex = 3;
	











































};
obj14001_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14001_onTap_activeActionGroupIndex = -1;
		$("#obj14001").trigger("obj14001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14001) {
				console.warn("de-queueing event obj14001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14001_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14003();
function playAudioFile_14003() {
	window.obj14001_onTap_runningActionsCount = obj14001_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14003")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14003");
			$("#obj_audio_playSoundFile14003").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup1();
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
				window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14001_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14001_onTap_activeActionGroupIndex = -1;
		$("#obj14001").trigger("obj14001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14001) {
				console.warn("de-queueing event obj14001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14001_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj14001 
hide_14004();
function hide_14004() {
	var selector = "#obj14001";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14001_onTap_runningActionsCount = obj14001_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14004(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14009
(function(){
	window.obj14001_onTap_runningActionsCount = obj14001_onTap_runningActionsCount + 1;


	var selector = "#obj14009";
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
					window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup2();
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
				window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14001_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14001_onTap_activeActionGroupIndex = -1;
		$("#obj14001").trigger("obj14001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14001) {
				console.warn("de-queueing event obj14001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14001_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14029
(function(){
	window.obj14001_onTap_runningActionsCount = obj14001_onTap_runningActionsCount + 1;


	var selector = "#obj14029";
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
					window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup3();
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
				window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14024
(function(){
	window.obj14001_onTap_runningActionsCount = obj14001_onTap_runningActionsCount + 1;


	var selector = "#obj14024";
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
					window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup3();
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
				window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14019
(function(){
	window.obj14001_onTap_runningActionsCount = obj14001_onTap_runningActionsCount + 1;


	var selector = "#obj14019";
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
					window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup3();
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
				window.obj14001_onTap_runningActionsCount = window.obj14001_onTap_runningActionsCount - 1;

if (window.obj14001_onTap_runningActionsCount < 0) {
	window.obj14001_onTap_runningActionsCount = 0;
} else if (window.obj14001_onTap_runningActionsCount == 0) {
	obj14001_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14001_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14001_onTap_activeActionGroupIndex = -1;
		$("#obj14001").trigger("obj14001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14001) {
				console.warn("de-queueing event obj14001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14001_onTap_activeActionGroupIndex = 3;
	











































};
obj14072_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14072_onTap_activeActionGroupIndex = -1;
		$("#obj14072").trigger("obj14072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14072) {
				console.warn("de-queueing event obj14072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14072_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj14042
(function(){
	window.obj14072_onTap_runningActionsCount = obj14072_onTap_runningActionsCount + 1;


	var selector = "#obj14042";
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
					window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup1();
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
				window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14072_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14072_onTap_activeActionGroupIndex = -1;
		$("#obj14072").trigger("obj14072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14072) {
				console.warn("de-queueing event obj14072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14072_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14075();
function playAudioFile_14075() {
	window.obj14072_onTap_runningActionsCount = obj14072_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14075")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14075");
			$("#obj_audio_playSoundFile14075").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup2();
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
				window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14072_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14072_onTap_activeActionGroupIndex = -1;
		$("#obj14072").trigger("obj14072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14072) {
				console.warn("de-queueing event obj14072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14072_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj14062 
hide_24533();
function hide_24533() {
	var selector = "#obj14062";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14072_onTap_runningActionsCount = obj14072_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24533(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14067 
hide_24534();
function hide_24534() {
	var selector = "#obj14067";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14072_onTap_runningActionsCount = obj14072_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24534(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14072 
hide_24535();
function hide_24535() {
	var selector = "#obj14072";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14072_onTap_runningActionsCount = obj14072_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24535(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14052 
hide_14079();
function hide_14079() {
	var selector = "#obj14052";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14072_onTap_runningActionsCount = obj14072_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14079(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14072_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14072_onTap_activeActionGroupIndex = -1;
		$("#obj14072").trigger("obj14072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14072) {
				console.warn("de-queueing event obj14072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14072_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_14080();
function wait_14080() {
	window.obj14072_onTap_runningActionsCount = obj14072_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup4();
}
	}, 200);
}


























};
obj14072_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14072_onTap_activeActionGroupIndex = -1;
		$("#obj14072").trigger("obj14072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14072) {
				console.warn("de-queueing event obj14072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14072_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj14054
(function(){
	window.obj14072_onTap_runningActionsCount = obj14072_onTap_runningActionsCount + 1;


	var selector = "#obj14054";
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
					window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup5();
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
				window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14072_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14072_onTap_activeActionGroupIndex = -1;
		$("#obj14072").trigger("obj14072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14072) {
				console.warn("de-queueing event obj14072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14072_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj13784 
incrementCounter_14082();
function incrementCounter_14082() {
	window.obj14072_onTap_runningActionsCount = obj14072_onTap_runningActionsCount + 1;


	var oldValue = obj13784_counterValue;
	obj13784_counterValue = obj13784_counterValue + 1;
	if (! obj13784_counterCanExceedTargetValue && obj13784_counterValue > obj13784_counterTargetValue) {
		obj13784_counterValue = obj13784_counterTargetValue;
	}

	if (oldValue != obj13784_counterValue) {
		$("#obj13784").trigger('SCEventCounterValueChange');
		$("#obj13784").trigger('SCEventCounterIncrease');
		if (obj13784_counterValue == obj13784_counterTargetValue)
			$("#obj13784").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14072_onTap_runningActionsCount = window.obj14072_onTap_runningActionsCount - 1;

if (window.obj14072_onTap_runningActionsCount < 0) {
	window.obj14072_onTap_runningActionsCount = 0;
} else if (window.obj14072_onTap_runningActionsCount == 0) {
	obj14072_onTap_actionGroup6();
} }, 1);
}











};
obj14072_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14072_onTap_activeActionGroupIndex = -1;
		$("#obj14072").trigger("obj14072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14072) {
				console.warn("de-queueing event obj14072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14072_onTap_activeActionGroupIndex = 6;
	











































};
obj14067_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14067_onTap_activeActionGroupIndex = -1;
		$("#obj14067").trigger("obj14067_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14067) {
				console.warn("de-queueing event obj14067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14067_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14069();
function playAudioFile_14069() {
	window.obj14067_onTap_runningActionsCount = obj14067_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14069")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14069");
			$("#obj_audio_playSoundFile14069").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14067_onTap_runningActionsCount = window.obj14067_onTap_runningActionsCount - 1;

if (window.obj14067_onTap_runningActionsCount < 0) {
	window.obj14067_onTap_runningActionsCount = 0;
} else if (window.obj14067_onTap_runningActionsCount == 0) {
	obj14067_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14067_onTap_runningActionsCount = window.obj14067_onTap_runningActionsCount - 1;

if (window.obj14067_onTap_runningActionsCount < 0) {
	window.obj14067_onTap_runningActionsCount = 0;
} else if (window.obj14067_onTap_runningActionsCount == 0) {
	obj14067_onTap_actionGroup1();
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
				window.obj14067_onTap_runningActionsCount = window.obj14067_onTap_runningActionsCount - 1;

if (window.obj14067_onTap_runningActionsCount < 0) {
	window.obj14067_onTap_runningActionsCount = 0;
} else if (window.obj14067_onTap_runningActionsCount == 0) {
	obj14067_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14067_onTap_runningActionsCount = window.obj14067_onTap_runningActionsCount - 1;

if (window.obj14067_onTap_runningActionsCount < 0) {
	window.obj14067_onTap_runningActionsCount = 0;
} else if (window.obj14067_onTap_runningActionsCount == 0) {
	obj14067_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14067_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14067_onTap_activeActionGroupIndex = -1;
		$("#obj14067").trigger("obj14067_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14067) {
				console.warn("de-queueing event obj14067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14067_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj14067 
hide_14070();
function hide_14070() {
	var selector = "#obj14067";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14067_onTap_runningActionsCount = obj14067_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14067_onTap_runningActionsCount = window.obj14067_onTap_runningActionsCount - 1;

if (window.obj14067_onTap_runningActionsCount < 0) {
	window.obj14067_onTap_runningActionsCount = 0;
} else if (window.obj14067_onTap_runningActionsCount == 0) {
	obj14067_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14070(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14067_onTap_runningActionsCount = window.obj14067_onTap_runningActionsCount - 1;

if (window.obj14067_onTap_runningActionsCount < 0) {
	window.obj14067_onTap_runningActionsCount = 0;
} else if (window.obj14067_onTap_runningActionsCount == 0) {
	obj14067_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14067_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14067_onTap_activeActionGroupIndex = -1;
		$("#obj14067").trigger("obj14067_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14067) {
				console.warn("de-queueing event obj14067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14067_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14067
(function(){
	window.obj14067_onTap_runningActionsCount = obj14067_onTap_runningActionsCount + 1;


	var selector = "#obj14067";
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
					window.obj14067_onTap_runningActionsCount = window.obj14067_onTap_runningActionsCount - 1;

if (window.obj14067_onTap_runningActionsCount < 0) {
	window.obj14067_onTap_runningActionsCount = 0;
} else if (window.obj14067_onTap_runningActionsCount == 0) {
	obj14067_onTap_actionGroup3();
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
				window.obj14067_onTap_runningActionsCount = window.obj14067_onTap_runningActionsCount - 1;

if (window.obj14067_onTap_runningActionsCount < 0) {
	window.obj14067_onTap_runningActionsCount = 0;
} else if (window.obj14067_onTap_runningActionsCount == 0) {
	obj14067_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14067_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14067_onTap_activeActionGroupIndex = -1;
		$("#obj14067").trigger("obj14067_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14067) {
				console.warn("de-queueing event obj14067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14067_onTap_activeActionGroupIndex = 3;
	











































};
obj14062_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14062_onTap_activeActionGroupIndex = -1;
		$("#obj14062").trigger("obj14062_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14062) {
				console.warn("de-queueing event obj14062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14062_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14064();
function playAudioFile_14064() {
	window.obj14062_onTap_runningActionsCount = obj14062_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14064")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14064");
			$("#obj_audio_playSoundFile14064").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14062_onTap_runningActionsCount = window.obj14062_onTap_runningActionsCount - 1;

if (window.obj14062_onTap_runningActionsCount < 0) {
	window.obj14062_onTap_runningActionsCount = 0;
} else if (window.obj14062_onTap_runningActionsCount == 0) {
	obj14062_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14062_onTap_runningActionsCount = window.obj14062_onTap_runningActionsCount - 1;

if (window.obj14062_onTap_runningActionsCount < 0) {
	window.obj14062_onTap_runningActionsCount = 0;
} else if (window.obj14062_onTap_runningActionsCount == 0) {
	obj14062_onTap_actionGroup1();
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
				window.obj14062_onTap_runningActionsCount = window.obj14062_onTap_runningActionsCount - 1;

if (window.obj14062_onTap_runningActionsCount < 0) {
	window.obj14062_onTap_runningActionsCount = 0;
} else if (window.obj14062_onTap_runningActionsCount == 0) {
	obj14062_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14062_onTap_runningActionsCount = window.obj14062_onTap_runningActionsCount - 1;

if (window.obj14062_onTap_runningActionsCount < 0) {
	window.obj14062_onTap_runningActionsCount = 0;
} else if (window.obj14062_onTap_runningActionsCount == 0) {
	obj14062_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14062_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14062_onTap_activeActionGroupIndex = -1;
		$("#obj14062").trigger("obj14062_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14062) {
				console.warn("de-queueing event obj14062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14062_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj14062 
hide_14065();
function hide_14065() {
	var selector = "#obj14062";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14062_onTap_runningActionsCount = obj14062_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14062_onTap_runningActionsCount = window.obj14062_onTap_runningActionsCount - 1;

if (window.obj14062_onTap_runningActionsCount < 0) {
	window.obj14062_onTap_runningActionsCount = 0;
} else if (window.obj14062_onTap_runningActionsCount == 0) {
	obj14062_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14065(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14062_onTap_runningActionsCount = window.obj14062_onTap_runningActionsCount - 1;

if (window.obj14062_onTap_runningActionsCount < 0) {
	window.obj14062_onTap_runningActionsCount = 0;
} else if (window.obj14062_onTap_runningActionsCount == 0) {
	obj14062_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14062_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14062_onTap_activeActionGroupIndex = -1;
		$("#obj14062").trigger("obj14062_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14062) {
				console.warn("de-queueing event obj14062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14062_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14062
(function(){
	window.obj14062_onTap_runningActionsCount = obj14062_onTap_runningActionsCount + 1;


	var selector = "#obj14062";
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
					window.obj14062_onTap_runningActionsCount = window.obj14062_onTap_runningActionsCount - 1;

if (window.obj14062_onTap_runningActionsCount < 0) {
	window.obj14062_onTap_runningActionsCount = 0;
} else if (window.obj14062_onTap_runningActionsCount == 0) {
	obj14062_onTap_actionGroup3();
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
				window.obj14062_onTap_runningActionsCount = window.obj14062_onTap_runningActionsCount - 1;

if (window.obj14062_onTap_runningActionsCount < 0) {
	window.obj14062_onTap_runningActionsCount = 0;
} else if (window.obj14062_onTap_runningActionsCount == 0) {
	obj14062_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14062_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14062_onTap_activeActionGroupIndex = -1;
		$("#obj14062").trigger("obj14062_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14062) {
				console.warn("de-queueing event obj14062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14062_onTap_activeActionGroupIndex = 3;
	











































};
obj14044_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14044_onTap_activeActionGroupIndex = -1;
		$("#obj14044").trigger("obj14044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14044) {
				console.warn("de-queueing event obj14044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14044_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14046();
function playAudioFile_14046() {
	window.obj14044_onTap_runningActionsCount = obj14044_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14046")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14046");
			$("#obj_audio_playSoundFile14046").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup1();
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
				window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14044_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14044_onTap_activeActionGroupIndex = -1;
		$("#obj14044").trigger("obj14044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14044) {
				console.warn("de-queueing event obj14044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14044_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj14044 
hide_14047();
function hide_14047() {
	var selector = "#obj14044";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14044_onTap_runningActionsCount = obj14044_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14047(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14052
(function(){
	window.obj14044_onTap_runningActionsCount = obj14044_onTap_runningActionsCount + 1;


	var selector = "#obj14052";
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
					window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup2();
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
				window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14044_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14044_onTap_activeActionGroupIndex = -1;
		$("#obj14044").trigger("obj14044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14044) {
				console.warn("de-queueing event obj14044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14044_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14072
(function(){
	window.obj14044_onTap_runningActionsCount = obj14044_onTap_runningActionsCount + 1;


	var selector = "#obj14072";
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
					window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup3();
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
				window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14067
(function(){
	window.obj14044_onTap_runningActionsCount = obj14044_onTap_runningActionsCount + 1;


	var selector = "#obj14067";
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
					window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup3();
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
				window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14062
(function(){
	window.obj14044_onTap_runningActionsCount = obj14044_onTap_runningActionsCount + 1;


	var selector = "#obj14062";
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
					window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup3();
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
				window.obj14044_onTap_runningActionsCount = window.obj14044_onTap_runningActionsCount - 1;

if (window.obj14044_onTap_runningActionsCount < 0) {
	window.obj14044_onTap_runningActionsCount = 0;
} else if (window.obj14044_onTap_runningActionsCount == 0) {
	obj14044_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14044_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14044_onTap_activeActionGroupIndex = -1;
		$("#obj14044").trigger("obj14044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14044) {
				console.warn("de-queueing event obj14044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14044_onTap_activeActionGroupIndex = 3;
	











































};
obj14115_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14115_onTap_activeActionGroupIndex = -1;
		$("#obj14115").trigger("obj14115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14115) {
				console.warn("de-queueing event obj14115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14115_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj14085
(function(){
	window.obj14115_onTap_runningActionsCount = obj14115_onTap_runningActionsCount + 1;


	var selector = "#obj14085";
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
					window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup1();
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
				window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14115_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14115_onTap_activeActionGroupIndex = -1;
		$("#obj14115").trigger("obj14115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14115) {
				console.warn("de-queueing event obj14115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14115_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14118();
function playAudioFile_14118() {
	window.obj14115_onTap_runningActionsCount = obj14115_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14118")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14118");
			$("#obj_audio_playSoundFile14118").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup2();
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
				window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14115_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14115_onTap_activeActionGroupIndex = -1;
		$("#obj14115").trigger("obj14115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14115) {
				console.warn("de-queueing event obj14115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14115_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj14110 
hide_24536();
function hide_24536() {
	var selector = "#obj14110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14115_onTap_runningActionsCount = obj14115_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24536(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14105 
hide_24537();
function hide_24537() {
	var selector = "#obj14105";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14115_onTap_runningActionsCount = obj14115_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24537(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14115 
hide_24538();
function hide_24538() {
	var selector = "#obj14115";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14115_onTap_runningActionsCount = obj14115_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24538(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14095 
hide_14122();
function hide_14122() {
	var selector = "#obj14095";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14115_onTap_runningActionsCount = obj14115_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14122(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14115_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14115_onTap_activeActionGroupIndex = -1;
		$("#obj14115").trigger("obj14115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14115) {
				console.warn("de-queueing event obj14115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14115_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_14123();
function wait_14123() {
	window.obj14115_onTap_runningActionsCount = obj14115_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup4();
}
	}, 200);
}


























};
obj14115_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14115_onTap_activeActionGroupIndex = -1;
		$("#obj14115").trigger("obj14115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14115) {
				console.warn("de-queueing event obj14115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14115_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj14097
(function(){
	window.obj14115_onTap_runningActionsCount = obj14115_onTap_runningActionsCount + 1;


	var selector = "#obj14097";
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
					window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup5();
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
				window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14115_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14115_onTap_activeActionGroupIndex = -1;
		$("#obj14115").trigger("obj14115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14115) {
				console.warn("de-queueing event obj14115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14115_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj13784 
incrementCounter_14125();
function incrementCounter_14125() {
	window.obj14115_onTap_runningActionsCount = obj14115_onTap_runningActionsCount + 1;


	var oldValue = obj13784_counterValue;
	obj13784_counterValue = obj13784_counterValue + 1;
	if (! obj13784_counterCanExceedTargetValue && obj13784_counterValue > obj13784_counterTargetValue) {
		obj13784_counterValue = obj13784_counterTargetValue;
	}

	if (oldValue != obj13784_counterValue) {
		$("#obj13784").trigger('SCEventCounterValueChange');
		$("#obj13784").trigger('SCEventCounterIncrease');
		if (obj13784_counterValue == obj13784_counterTargetValue)
			$("#obj13784").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14115_onTap_runningActionsCount = window.obj14115_onTap_runningActionsCount - 1;

if (window.obj14115_onTap_runningActionsCount < 0) {
	window.obj14115_onTap_runningActionsCount = 0;
} else if (window.obj14115_onTap_runningActionsCount == 0) {
	obj14115_onTap_actionGroup6();
} }, 1);
}











};
obj14115_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14115_onTap_activeActionGroupIndex = -1;
		$("#obj14115").trigger("obj14115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14115) {
				console.warn("de-queueing event obj14115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14115_onTap_activeActionGroupIndex = 6;
	











































};
obj14110_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14110_onTap_activeActionGroupIndex = -1;
		$("#obj14110").trigger("obj14110_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14110) {
				console.warn("de-queueing event obj14110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14110_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14112();
function playAudioFile_14112() {
	window.obj14110_onTap_runningActionsCount = obj14110_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14112")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14112");
			$("#obj_audio_playSoundFile14112").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14110_onTap_runningActionsCount = window.obj14110_onTap_runningActionsCount - 1;

if (window.obj14110_onTap_runningActionsCount < 0) {
	window.obj14110_onTap_runningActionsCount = 0;
} else if (window.obj14110_onTap_runningActionsCount == 0) {
	obj14110_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14110_onTap_runningActionsCount = window.obj14110_onTap_runningActionsCount - 1;

if (window.obj14110_onTap_runningActionsCount < 0) {
	window.obj14110_onTap_runningActionsCount = 0;
} else if (window.obj14110_onTap_runningActionsCount == 0) {
	obj14110_onTap_actionGroup1();
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
				window.obj14110_onTap_runningActionsCount = window.obj14110_onTap_runningActionsCount - 1;

if (window.obj14110_onTap_runningActionsCount < 0) {
	window.obj14110_onTap_runningActionsCount = 0;
} else if (window.obj14110_onTap_runningActionsCount == 0) {
	obj14110_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14110_onTap_runningActionsCount = window.obj14110_onTap_runningActionsCount - 1;

if (window.obj14110_onTap_runningActionsCount < 0) {
	window.obj14110_onTap_runningActionsCount = 0;
} else if (window.obj14110_onTap_runningActionsCount == 0) {
	obj14110_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14110_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14110_onTap_activeActionGroupIndex = -1;
		$("#obj14110").trigger("obj14110_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14110) {
				console.warn("de-queueing event obj14110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14110_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj14110 
hide_14113();
function hide_14113() {
	var selector = "#obj14110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14110_onTap_runningActionsCount = obj14110_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14110_onTap_runningActionsCount = window.obj14110_onTap_runningActionsCount - 1;

if (window.obj14110_onTap_runningActionsCount < 0) {
	window.obj14110_onTap_runningActionsCount = 0;
} else if (window.obj14110_onTap_runningActionsCount == 0) {
	obj14110_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14113(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14110_onTap_runningActionsCount = window.obj14110_onTap_runningActionsCount - 1;

if (window.obj14110_onTap_runningActionsCount < 0) {
	window.obj14110_onTap_runningActionsCount = 0;
} else if (window.obj14110_onTap_runningActionsCount == 0) {
	obj14110_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14110_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14110_onTap_activeActionGroupIndex = -1;
		$("#obj14110").trigger("obj14110_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14110) {
				console.warn("de-queueing event obj14110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14110_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14110
(function(){
	window.obj14110_onTap_runningActionsCount = obj14110_onTap_runningActionsCount + 1;


	var selector = "#obj14110";
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
					window.obj14110_onTap_runningActionsCount = window.obj14110_onTap_runningActionsCount - 1;

if (window.obj14110_onTap_runningActionsCount < 0) {
	window.obj14110_onTap_runningActionsCount = 0;
} else if (window.obj14110_onTap_runningActionsCount == 0) {
	obj14110_onTap_actionGroup3();
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
				window.obj14110_onTap_runningActionsCount = window.obj14110_onTap_runningActionsCount - 1;

if (window.obj14110_onTap_runningActionsCount < 0) {
	window.obj14110_onTap_runningActionsCount = 0;
} else if (window.obj14110_onTap_runningActionsCount == 0) {
	obj14110_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14110_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14110_onTap_activeActionGroupIndex = -1;
		$("#obj14110").trigger("obj14110_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14110) {
				console.warn("de-queueing event obj14110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14110_onTap_activeActionGroupIndex = 3;
	











































};
obj14105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14105_onTap_activeActionGroupIndex = -1;
		$("#obj14105").trigger("obj14105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14105) {
				console.warn("de-queueing event obj14105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14105_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14107();
function playAudioFile_14107() {
	window.obj14105_onTap_runningActionsCount = obj14105_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14107")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14107");
			$("#obj_audio_playSoundFile14107").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14105_onTap_runningActionsCount = window.obj14105_onTap_runningActionsCount - 1;

if (window.obj14105_onTap_runningActionsCount < 0) {
	window.obj14105_onTap_runningActionsCount = 0;
} else if (window.obj14105_onTap_runningActionsCount == 0) {
	obj14105_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14105_onTap_runningActionsCount = window.obj14105_onTap_runningActionsCount - 1;

if (window.obj14105_onTap_runningActionsCount < 0) {
	window.obj14105_onTap_runningActionsCount = 0;
} else if (window.obj14105_onTap_runningActionsCount == 0) {
	obj14105_onTap_actionGroup1();
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
				window.obj14105_onTap_runningActionsCount = window.obj14105_onTap_runningActionsCount - 1;

if (window.obj14105_onTap_runningActionsCount < 0) {
	window.obj14105_onTap_runningActionsCount = 0;
} else if (window.obj14105_onTap_runningActionsCount == 0) {
	obj14105_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14105_onTap_runningActionsCount = window.obj14105_onTap_runningActionsCount - 1;

if (window.obj14105_onTap_runningActionsCount < 0) {
	window.obj14105_onTap_runningActionsCount = 0;
} else if (window.obj14105_onTap_runningActionsCount == 0) {
	obj14105_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14105_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14105_onTap_activeActionGroupIndex = -1;
		$("#obj14105").trigger("obj14105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14105) {
				console.warn("de-queueing event obj14105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14105_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj14105 
hide_14108();
function hide_14108() {
	var selector = "#obj14105";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14105_onTap_runningActionsCount = obj14105_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14105_onTap_runningActionsCount = window.obj14105_onTap_runningActionsCount - 1;

if (window.obj14105_onTap_runningActionsCount < 0) {
	window.obj14105_onTap_runningActionsCount = 0;
} else if (window.obj14105_onTap_runningActionsCount == 0) {
	obj14105_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14108(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14105_onTap_runningActionsCount = window.obj14105_onTap_runningActionsCount - 1;

if (window.obj14105_onTap_runningActionsCount < 0) {
	window.obj14105_onTap_runningActionsCount = 0;
} else if (window.obj14105_onTap_runningActionsCount == 0) {
	obj14105_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14105_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14105_onTap_activeActionGroupIndex = -1;
		$("#obj14105").trigger("obj14105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14105) {
				console.warn("de-queueing event obj14105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14105_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14105
(function(){
	window.obj14105_onTap_runningActionsCount = obj14105_onTap_runningActionsCount + 1;


	var selector = "#obj14105";
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
					window.obj14105_onTap_runningActionsCount = window.obj14105_onTap_runningActionsCount - 1;

if (window.obj14105_onTap_runningActionsCount < 0) {
	window.obj14105_onTap_runningActionsCount = 0;
} else if (window.obj14105_onTap_runningActionsCount == 0) {
	obj14105_onTap_actionGroup3();
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
				window.obj14105_onTap_runningActionsCount = window.obj14105_onTap_runningActionsCount - 1;

if (window.obj14105_onTap_runningActionsCount < 0) {
	window.obj14105_onTap_runningActionsCount = 0;
} else if (window.obj14105_onTap_runningActionsCount == 0) {
	obj14105_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14105_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14105_onTap_activeActionGroupIndex = -1;
		$("#obj14105").trigger("obj14105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14105) {
				console.warn("de-queueing event obj14105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14105_onTap_activeActionGroupIndex = 3;
	











































};
obj14087_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14087_onTap_activeActionGroupIndex = -1;
		$("#obj14087").trigger("obj14087_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14087) {
				console.warn("de-queueing event obj14087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14087_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14089();
function playAudioFile_14089() {
	window.obj14087_onTap_runningActionsCount = obj14087_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14089")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14089");
			$("#obj_audio_playSoundFile14089").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup1();
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
				window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14087_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14087_onTap_activeActionGroupIndex = -1;
		$("#obj14087").trigger("obj14087_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14087) {
				console.warn("de-queueing event obj14087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14087_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj14087 
hide_14090();
function hide_14090() {
	var selector = "#obj14087";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14087_onTap_runningActionsCount = obj14087_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14090(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14095
(function(){
	window.obj14087_onTap_runningActionsCount = obj14087_onTap_runningActionsCount + 1;


	var selector = "#obj14095";
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
					window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup2();
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
				window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14087_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14087_onTap_activeActionGroupIndex = -1;
		$("#obj14087").trigger("obj14087_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14087) {
				console.warn("de-queueing event obj14087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14087_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14115
(function(){
	window.obj14087_onTap_runningActionsCount = obj14087_onTap_runningActionsCount + 1;


	var selector = "#obj14115";
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
					window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup3();
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
				window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14110
(function(){
	window.obj14087_onTap_runningActionsCount = obj14087_onTap_runningActionsCount + 1;


	var selector = "#obj14110";
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
					window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup3();
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
				window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14105
(function(){
	window.obj14087_onTap_runningActionsCount = obj14087_onTap_runningActionsCount + 1;


	var selector = "#obj14105";
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
					window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup3();
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
				window.obj14087_onTap_runningActionsCount = window.obj14087_onTap_runningActionsCount - 1;

if (window.obj14087_onTap_runningActionsCount < 0) {
	window.obj14087_onTap_runningActionsCount = 0;
} else if (window.obj14087_onTap_runningActionsCount == 0) {
	obj14087_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14087_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14087_onTap_activeActionGroupIndex = -1;
		$("#obj14087").trigger("obj14087_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14087) {
				console.warn("de-queueing event obj14087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14087_onTap_activeActionGroupIndex = 3;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




































































































/*
 *
 *   obj13761: Event Touch Down
 *
 */

$("#obj13761").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13761_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13761_onTap is still running");
	return;
}
var obj13761_onTap_runningActionsCount = 0;
var obj13761_onTap_loopCount = 0;
obj13761_onTap_actionGroup0();
});



























/*
 *
 *   obj13764: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13764").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13764_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13764_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13764_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13764_SCEventCounterReachedTargetValue_loopCount = 0;
obj13764_SCEventCounterReachedTargetValue_actionGroup0();
});
























































/*
 *
 *   obj13772: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13772").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13772_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13772_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13772_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13772_SCEventCounterReachedTargetValue_loopCount = 0;
obj13772_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13775: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13775").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13775_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13775_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13775_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13775_SCEventCounterReachedTargetValue_loopCount = 0;
obj13775_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13778: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13778").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13778_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13778_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13778_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13778_SCEventCounterReachedTargetValue_loopCount = 0;
obj13778_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13781: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13781").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13781_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13781_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13781_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13781_SCEventCounterReachedTargetValue_loopCount = 0;
obj13781_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13784: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13784").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13784_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13784_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13784_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13784_SCEventCounterReachedTargetValue_loopCount = 0;
obj13784_SCEventCounterReachedTargetValue_actionGroup0();
});















































/*
 *
 *   obj13811: Event Touch Down
 *
 */

$("#obj13811").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13811_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13811_onTap is still running");
	return;
}
var obj13811_onTap_runningActionsCount = 0;
var obj13811_onTap_loopCount = 0;
obj13811_onTap_actionGroup0();
});


















/*
 *
 *   obj13822: Event Touch Down
 *
 */

$("#obj13822").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13822_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13822_onTap is still running");
	return;
}
var obj13822_onTap_runningActionsCount = 0;
var obj13822_onTap_loopCount = 0;
obj13822_onTap_actionGroup0();
});


















/*
 *
 *   obj13827: Event Touch Down
 *
 */

$("#obj13827").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13827_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13827_onTap is still running");
	return;
}
var obj13827_onTap_runningActionsCount = 0;
var obj13827_onTap_loopCount = 0;
obj13827_onTap_actionGroup0();
});

















































































































/*
 *
 *   obj13987: Event Touch Down
 *
 */

$("#obj13987").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13987_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13987_onTap is still running");
	return;
}
var obj13987_onTap_runningActionsCount = 0;
var obj13987_onTap_loopCount = 0;
obj13987_onTap_actionGroup0();
});
























































/*
 *
 *   obj14029: Event Touch Down
 *
 */

$("#obj14029").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14029_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14029_onTap is still running");
	return;
}
var obj14029_onTap_runningActionsCount = 0;
var obj14029_onTap_loopCount = 0;
obj14029_onTap_actionGroup0();
});


















/*
 *
 *   obj14024: Event Touch Down
 *
 */

$("#obj14024").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14024_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14024_onTap is still running");
	return;
}
var obj14024_onTap_runningActionsCount = 0;
var obj14024_onTap_loopCount = 0;
obj14024_onTap_actionGroup0();
});


















/*
 *
 *   obj14019: Event Touch Down
 *
 */

$("#obj14019").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14019_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14019_onTap is still running");
	return;
}
var obj14019_onTap_runningActionsCount = 0;
var obj14019_onTap_loopCount = 0;
obj14019_onTap_actionGroup0();
});

















































































































/*
 *
 *   obj14001: Event Touch Down
 *
 */

$("#obj14001").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14001_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14001_onTap is still running");
	return;
}
var obj14001_onTap_runningActionsCount = 0;
var obj14001_onTap_loopCount = 0;
obj14001_onTap_actionGroup0();
});
























































/*
 *
 *   obj14072: Event Touch Down
 *
 */

$("#obj14072").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14072_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14072_onTap is still running");
	return;
}
var obj14072_onTap_runningActionsCount = 0;
var obj14072_onTap_loopCount = 0;
obj14072_onTap_actionGroup0();
});


















/*
 *
 *   obj14067: Event Touch Down
 *
 */

$("#obj14067").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14067_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14067_onTap is still running");
	return;
}
var obj14067_onTap_runningActionsCount = 0;
var obj14067_onTap_loopCount = 0;
obj14067_onTap_actionGroup0();
});


















/*
 *
 *   obj14062: Event Touch Down
 *
 */

$("#obj14062").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14062_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14062_onTap is still running");
	return;
}
var obj14062_onTap_runningActionsCount = 0;
var obj14062_onTap_loopCount = 0;
obj14062_onTap_actionGroup0();
});

















































































































/*
 *
 *   obj14044: Event Touch Down
 *
 */

$("#obj14044").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14044_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14044_onTap is still running");
	return;
}
var obj14044_onTap_runningActionsCount = 0;
var obj14044_onTap_loopCount = 0;
obj14044_onTap_actionGroup0();
});
























































/*
 *
 *   obj14115: Event Touch Down
 *
 */

$("#obj14115").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14115_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14115_onTap is still running");
	return;
}
var obj14115_onTap_runningActionsCount = 0;
var obj14115_onTap_loopCount = 0;
obj14115_onTap_actionGroup0();
});


















/*
 *
 *   obj14110: Event Touch Down
 *
 */

$("#obj14110").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14110_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14110_onTap is still running");
	return;
}
var obj14110_onTap_runningActionsCount = 0;
var obj14110_onTap_loopCount = 0;
obj14110_onTap_actionGroup0();
});


















/*
 *
 *   obj14105: Event Touch Down
 *
 */

$("#obj14105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14105_onTap is still running");
	return;
}
var obj14105_onTap_runningActionsCount = 0;
var obj14105_onTap_loopCount = 0;
obj14105_onTap_actionGroup0();
});

















































































































/*
 *
 *   obj14087: Event Touch Down
 *
 */

$("#obj14087").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14087_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14087_onTap is still running");
	return;
}
var obj14087_onTap_runningActionsCount = 0;
var obj14087_onTap_loopCount = 0;
obj14087_onTap_actionGroup0();
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
	
$("#obj13748").trigger('SCEventShow');
$("#obj13753").trigger('SCEventShow');
$("#obj13755").trigger('SCEventShow');
$("#obj13757").trigger('SCEventShow');
$("#obj13759").trigger('SCEventShow');
$("#obj13761").trigger('SCEventShow');
$("#obj13768").trigger('SCEventShow');
$("#obj13770").trigger('SCEventShow');
$("#obj13793").trigger('SCEventShow');
$("#obj13834").trigger('SCEventShow');
$("#obj13836").trigger('SCEventShow');
$("#obj13975").trigger('SCEventShow');
$("#obj13985").trigger('SCEventShow');
$("#obj13987").trigger('SCEventShow');
$("#obj14040").trigger('SCEventShow');
$("#obj14017").trigger('SCEventShow');
$("#obj14015").trigger('SCEventShow');
$("#obj14013").trigger('SCEventShow');
$("#obj14009").trigger('SCEventShow');
$("#obj14001").trigger('SCEventShow');
$("#obj14083").trigger('SCEventShow');
$("#obj14060").trigger('SCEventShow');
$("#obj14058").trigger('SCEventShow');
$("#obj14056").trigger('SCEventShow');
$("#obj14052").trigger('SCEventShow');
$("#obj14044").trigger('SCEventShow');
$("#obj14126").trigger('SCEventShow');
$("#obj14103").trigger('SCEventShow');
$("#obj14101").trigger('SCEventShow');
$("#obj14099").trigger('SCEventShow');
$("#obj14095").trigger('SCEventShow');
$("#obj14087").trigger('SCEventShow');
$("#obj14131").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});