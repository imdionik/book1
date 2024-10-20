pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 5535;
pubcoder.page.title = pubcoder.page.title || "60";
pubcoder.page.number = pubcoder.page.number || 60;
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
var obj5611_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5611_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5611_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5614_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5614_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5614_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5617_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5617_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5617_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5620_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5620_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5620_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5623_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5623_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5623_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5841_onTap_activeActionGroupIndex = -1;
var obj5841_onTap_runningActionsCount = 0;
var obj5841_onTap_loopCount = 0;
var obj5843_onTap_activeActionGroupIndex = -1;
var obj5843_onTap_runningActionsCount = 0;
var obj5843_onTap_loopCount = 0;
var obj5845_onTap_activeActionGroupIndex = -1;
var obj5845_onTap_runningActionsCount = 0;
var obj5845_onTap_loopCount = 0;
var obj5847_onTap_activeActionGroupIndex = -1;
var obj5847_onTap_runningActionsCount = 0;
var obj5847_onTap_loopCount = 0;
var obj5871_onTap_activeActionGroupIndex = -1;
var obj5871_onTap_runningActionsCount = 0;
var obj5871_onTap_loopCount = 0;
var obj5869_onTap_activeActionGroupIndex = -1;
var obj5869_onTap_runningActionsCount = 0;
var obj5869_onTap_loopCount = 0;
var obj5867_onTap_activeActionGroupIndex = -1;
var obj5867_onTap_runningActionsCount = 0;
var obj5867_onTap_loopCount = 0;
var obj5865_onTap_activeActionGroupIndex = -1;
var obj5865_onTap_runningActionsCount = 0;
var obj5865_onTap_loopCount = 0;
var obj5903_onTap_activeActionGroupIndex = -1;
var obj5903_onTap_runningActionsCount = 0;
var obj5903_onTap_loopCount = 0;
var obj5901_onTap_activeActionGroupIndex = -1;
var obj5901_onTap_runningActionsCount = 0;
var obj5901_onTap_loopCount = 0;
var obj5899_onTap_activeActionGroupIndex = -1;
var obj5899_onTap_runningActionsCount = 0;
var obj5899_onTap_loopCount = 0;
var obj5897_onTap_activeActionGroupIndex = -1;
var obj5897_onTap_runningActionsCount = 0;
var obj5897_onTap_loopCount = 0;
var obj5911_onTap_activeActionGroupIndex = -1;
var obj5911_onTap_runningActionsCount = 0;
var obj5911_onTap_loopCount = 0;
var obj5909_onTap_activeActionGroupIndex = -1;
var obj5909_onTap_runningActionsCount = 0;
var obj5909_onTap_loopCount = 0;
var obj5907_onTap_activeActionGroupIndex = -1;
var obj5907_onTap_runningActionsCount = 0;
var obj5907_onTap_loopCount = 0;
var obj5905_onTap_activeActionGroupIndex = -1;
var obj5905_onTap_runningActionsCount = 0;
var obj5905_onTap_loopCount = 0;
var obj5919_onTap_activeActionGroupIndex = -1;
var obj5919_onTap_runningActionsCount = 0;
var obj5919_onTap_loopCount = 0;
var obj5917_onTap_activeActionGroupIndex = -1;
var obj5917_onTap_runningActionsCount = 0;
var obj5917_onTap_loopCount = 0;
var obj5915_onTap_activeActionGroupIndex = -1;
var obj5915_onTap_runningActionsCount = 0;
var obj5915_onTap_loopCount = 0;
var obj5913_onTap_activeActionGroupIndex = -1;
var obj5913_onTap_runningActionsCount = 0;
var obj5913_onTap_loopCount = 0;
var obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5935_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5992_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5992_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5992_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6057_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6123_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6179_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6204_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6264_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6290_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6290_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6290_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6292_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6292_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6292_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6310_SCEventCounterReachedTargetValue_loopCount = 0;
var obj7455_onTap_activeActionGroupIndex = -1;
var obj7455_onTap_runningActionsCount = 0;
var obj7455_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj5611_counterValue = 0;
var obj5611_counterTargetValue = 2;
var obj5611_counterCanExceedTargetValue = false;
var obj5614_counterValue = 0;
var obj5614_counterTargetValue = 4;
var obj5614_counterCanExceedTargetValue = false;
var obj5617_counterValue = 0;
var obj5617_counterTargetValue = 3;
var obj5617_counterCanExceedTargetValue = false;
var obj5620_counterValue = 0;
var obj5620_counterTargetValue = 1;
var obj5620_counterCanExceedTargetValue = false;
var obj5623_counterValue = 0;
var obj5623_counterTargetValue = 5;
var obj5623_counterCanExceedTargetValue = false;
var obj5935_counterValue = 0;
var obj5935_counterTargetValue = 1;
var obj5935_counterCanExceedTargetValue = false;
var obj5992_counterValue = 0;
var obj5992_counterTargetValue = 1;
var obj5992_counterCanExceedTargetValue = false;
var obj6057_counterValue = 0;
var obj6057_counterTargetValue = 1;
var obj6057_counterCanExceedTargetValue = false;
var obj6123_counterValue = 0;
var obj6123_counterTargetValue = 1;
var obj6123_counterCanExceedTargetValue = false;
var obj6179_counterValue = 0;
var obj6179_counterTargetValue = 1;
var obj6179_counterCanExceedTargetValue = false;
var obj6204_counterValue = 0;
var obj6204_counterTargetValue = 1;
var obj6204_counterCanExceedTargetValue = false;
var obj6264_counterValue = 0;
var obj6264_counterTargetValue = 1;
var obj6264_counterCanExceedTargetValue = false;
var obj6290_counterValue = 0;
var obj6290_counterTargetValue = 5;
var obj6290_counterCanExceedTargetValue = false;
var obj6292_counterValue = 0;
var obj6292_counterTargetValue = 5;
var obj6292_counterCanExceedTargetValue = false;
var obj6310_counterValue = 0;
var obj6310_counterTargetValue = 1;
var obj6310_counterCanExceedTargetValue = false;

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
		
obj5611_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5611_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5611").trigger("obj5611_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5611) {
				console.warn("de-queueing event obj5611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5611_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_5613();
function switchText_5613() {
	window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount = obj5611_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/5</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5551_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5551_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5551").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5551_content");
			setTimeout(function () {
				window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5611_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5551 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5611_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5611_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj5611_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5611_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5611").trigger("obj5611_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5611) {
				console.warn("de-queueing event obj5611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5611_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj5614_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5614_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5614").trigger("obj5614_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5614) {
				console.warn("de-queueing event obj5614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5614_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_5616();
function switchText_5616() {
	window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount = obj5614_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>4/5</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5551_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5551_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5551").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5551_content");
			setTimeout(function () {
				window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5614_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5551 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5614_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5614_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj5614_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5614_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5614").trigger("obj5614_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5614) {
				console.warn("de-queueing event obj5614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5614_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj5617_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5617_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5617").trigger("obj5617_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5617) {
				console.warn("de-queueing event obj5617." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5617").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5617_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_5619();
function switchText_5619() {
	window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount = obj5617_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/5</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5551_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5551_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5551").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5551_content");
			setTimeout(function () {
				window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5617_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5551 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5617_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5617_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj5617_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5617_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5617").trigger("obj5617_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5617) {
				console.warn("de-queueing event obj5617." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5617").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5617_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj5620_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5620_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5620").trigger("obj5620_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5620) {
				console.warn("de-queueing event obj5620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5620_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_5622();
function switchText_5622() {
	window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount = obj5620_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/5</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5551_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5551_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5551").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5551_content");
			setTimeout(function () {
				window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5620_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5551 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5620_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5620_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj5620_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5620_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5620").trigger("obj5620_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5620) {
				console.warn("de-queueing event obj5620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5620_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj5623_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5623_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5623").trigger("obj5623_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5623) {
				console.warn("de-queueing event obj5623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5623_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_5625();
function switchText_5625() {
	window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount = obj5623_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>5/5</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5551_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5551_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5551").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5551_content");
			setTimeout(function () {
				window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5623_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5551 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5623_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5623_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj5623_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5623_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5623").trigger("obj5623_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5623) {
				console.warn("de-queueing event obj5623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5623_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj5841_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5841_onTap_activeActionGroupIndex = -1;
		$("#obj5841").trigger("obj5841_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5841) {
				console.warn("de-queueing event obj5841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5841_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5851
(function(){
	window.obj5841_onTap_runningActionsCount = obj5841_onTap_runningActionsCount + 1;


	var selector = "#obj5851";
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
					window.obj5841_onTap_runningActionsCount = window.obj5841_onTap_runningActionsCount - 1;

if (window.obj5841_onTap_runningActionsCount < 0) {
	window.obj5841_onTap_runningActionsCount = 0;
} else if (window.obj5841_onTap_runningActionsCount == 0) {
	obj5841_onTap_actionGroup1();
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
				window.obj5841_onTap_runningActionsCount = window.obj5841_onTap_runningActionsCount - 1;

if (window.obj5841_onTap_runningActionsCount < 0) {
	window.obj5841_onTap_runningActionsCount = 0;
} else if (window.obj5841_onTap_runningActionsCount == 0) {
	obj5841_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj5935 
setCounterValue_5950();
function setCounterValue_5950() {
	window.obj5841_onTap_runningActionsCount = obj5841_onTap_runningActionsCount + 1;


	var oldValue = obj5935_counterValue;
	obj5935_counterValue = 1;
	if (obj5935_counterValue < 0) {
		obj5935_counterValue = 0;
	} else if (! obj5935_counterCanExceedTargetValue && obj5935_counterValue > obj5935_counterTargetValue) {
		obj5935_counterValue = obj5935_counterTargetValue;
	}

	if (oldValue != obj5935_counterValue) {
		$("#obj5935").trigger('SCEventCounterValueChange');
		if (obj5935_counterValue == obj5935_counterTargetValue)
			$("#obj5935").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5841_onTap_runningActionsCount = window.obj5841_onTap_runningActionsCount - 1;

if (window.obj5841_onTap_runningActionsCount < 0) {
	window.obj5841_onTap_runningActionsCount = 0;
} else if (window.obj5841_onTap_runningActionsCount == 0) {
	obj5841_onTap_actionGroup1();
} }, 1);
}









};
obj5841_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5841_onTap_activeActionGroupIndex = -1;
		$("#obj5841").trigger("obj5841_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5841) {
				console.warn("de-queueing event obj5841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5841_onTap_activeActionGroupIndex = 1;
	











































};
obj5843_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup1();
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
				window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5843_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_5960();
function playAudioFile_5960() {
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5960")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5960");
			$("#obj_audio_playSoundFile5960").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup2();
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
				window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj5843_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj5849
(function(){
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var selector = "#obj5849";
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
					window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup3();
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
				window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5843_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 3;
	

































//	action: set counter value
//	target: obj5992 
setCounterValue_6091();
function setCounterValue_6091() {
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var oldValue = obj5992_counterValue;
	obj5992_counterValue = 1;
	if (obj5992_counterValue < 0) {
		obj5992_counterValue = 0;
	} else if (! obj5992_counterCanExceedTargetValue && obj5992_counterValue > obj5992_counterTargetValue) {
		obj5992_counterValue = obj5992_counterTargetValue;
	}

	if (oldValue != obj5992_counterValue) {
		$("#obj5992").trigger('SCEventCounterValueChange');
		if (obj5992_counterValue == obj5992_counterTargetValue)
			$("#obj5992").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup4();
} }, 1);
}









};
obj5843_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 4;
	
















//	action: wait
wait_6009();
function wait_6009() {
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup5();
}
	}, 1000);
}


























};
obj5843_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj5849 
hide_6018();
function hide_6018() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6018(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6019();
function hide_6019() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6019(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6020();
function hide_6020() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6020(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6021();
function hide_6021() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6021(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6022();
function hide_6022() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6022(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6023();
function hide_6023() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6023(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6024();
function hide_6024() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6024(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6025();
function hide_6025() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6025(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5843_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 6;
	

//	action: hide
//	selector: obj#obj5841 
hide_5999();
function hide_5999() {
	var selector = "#obj5841";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5999(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5843 
hide_6000();
function hide_6000() {
	var selector = "#obj5843";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6000(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5845 
hide_6001();
function hide_6001() {
	var selector = "#obj5845";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6001(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5847 
hide_6002();
function hide_6002() {
	var selector = "#obj5847";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6002(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5839 
hide_6003();
function hide_6003() {
	var selector = "#obj5839";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6003(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5843_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 7;
	


//	action: show 
//	selector: #obj5865
(function(){
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var selector = "#obj5865";
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
					window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
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
				window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5871
(function(){
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var selector = "#obj5871";
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
					window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
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
				window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5869
(function(){
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var selector = "#obj5869";
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
					window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
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
				window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5867
(function(){
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var selector = "#obj5867";
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
					window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
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
				window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5921
(function(){
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var selector = "#obj5921";
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
					window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
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
				window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5843_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 8;
	

//	action: hide
//	selector: obj#obj6080 
hide_6086();
function hide_6086() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup9();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6086(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup9();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5843_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 9;
	































//	action: increment counter
//	target: obj6290 
incrementCounter_6296();
function incrementCounter_6296() {
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var oldValue = obj6290_counterValue;
	obj6290_counterValue = obj6290_counterValue + 1;
	if (! obj6290_counterCanExceedTargetValue && obj6290_counterValue > obj6290_counterTargetValue) {
		obj6290_counterValue = obj6290_counterTargetValue;
	}

	if (oldValue != obj6290_counterValue) {
		$("#obj6290").trigger('SCEventCounterValueChange');
		$("#obj6290").trigger('SCEventCounterIncrease');
		if (obj6290_counterValue == obj6290_counterTargetValue)
			$("#obj6290").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup10();
} }, 1);
}











};
obj5843_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 10;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6297();
function incrementCounter_6297() {
	window.obj5843_onTap_runningActionsCount = obj5843_onTap_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5843_onTap_runningActionsCount = window.obj5843_onTap_runningActionsCount - 1;

if (window.obj5843_onTap_runningActionsCount < 0) {
	window.obj5843_onTap_runningActionsCount = 0;
} else if (window.obj5843_onTap_runningActionsCount == 0) {
	obj5843_onTap_actionGroup11();
} }, 1);
}











};
obj5843_onTap_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5843_onTap_activeActionGroupIndex = -1;
		$("#obj5843").trigger("obj5843_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5843) {
				console.warn("de-queueing event obj5843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5843_onTap_activeActionGroupIndex = 11;
	











































};
obj5845_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5845_onTap_activeActionGroupIndex = -1;
		$("#obj5845").trigger("obj5845_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5845) {
				console.warn("de-queueing event obj5845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5845_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5855
(function(){
	window.obj5845_onTap_runningActionsCount = obj5845_onTap_runningActionsCount + 1;


	var selector = "#obj5855";
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
					window.obj5845_onTap_runningActionsCount = window.obj5845_onTap_runningActionsCount - 1;

if (window.obj5845_onTap_runningActionsCount < 0) {
	window.obj5845_onTap_runningActionsCount = 0;
} else if (window.obj5845_onTap_runningActionsCount == 0) {
	obj5845_onTap_actionGroup1();
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
				window.obj5845_onTap_runningActionsCount = window.obj5845_onTap_runningActionsCount - 1;

if (window.obj5845_onTap_runningActionsCount < 0) {
	window.obj5845_onTap_runningActionsCount = 0;
} else if (window.obj5845_onTap_runningActionsCount == 0) {
	obj5845_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj5935 
setCounterValue_5953();
function setCounterValue_5953() {
	window.obj5845_onTap_runningActionsCount = obj5845_onTap_runningActionsCount + 1;


	var oldValue = obj5935_counterValue;
	obj5935_counterValue = 1;
	if (obj5935_counterValue < 0) {
		obj5935_counterValue = 0;
	} else if (! obj5935_counterCanExceedTargetValue && obj5935_counterValue > obj5935_counterTargetValue) {
		obj5935_counterValue = obj5935_counterTargetValue;
	}

	if (oldValue != obj5935_counterValue) {
		$("#obj5935").trigger('SCEventCounterValueChange');
		if (obj5935_counterValue == obj5935_counterTargetValue)
			$("#obj5935").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5845_onTap_runningActionsCount = window.obj5845_onTap_runningActionsCount - 1;

if (window.obj5845_onTap_runningActionsCount < 0) {
	window.obj5845_onTap_runningActionsCount = 0;
} else if (window.obj5845_onTap_runningActionsCount == 0) {
	obj5845_onTap_actionGroup1();
} }, 1);
}









};
obj5845_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5845_onTap_activeActionGroupIndex = -1;
		$("#obj5845").trigger("obj5845_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5845) {
				console.warn("de-queueing event obj5845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5845_onTap_activeActionGroupIndex = 1;
	











































};
obj5847_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5847_onTap_activeActionGroupIndex = -1;
		$("#obj5847").trigger("obj5847_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5847) {
				console.warn("de-queueing event obj5847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5847_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5853
(function(){
	window.obj5847_onTap_runningActionsCount = obj5847_onTap_runningActionsCount + 1;


	var selector = "#obj5853";
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
					window.obj5847_onTap_runningActionsCount = window.obj5847_onTap_runningActionsCount - 1;

if (window.obj5847_onTap_runningActionsCount < 0) {
	window.obj5847_onTap_runningActionsCount = 0;
} else if (window.obj5847_onTap_runningActionsCount == 0) {
	obj5847_onTap_actionGroup1();
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
				window.obj5847_onTap_runningActionsCount = window.obj5847_onTap_runningActionsCount - 1;

if (window.obj5847_onTap_runningActionsCount < 0) {
	window.obj5847_onTap_runningActionsCount = 0;
} else if (window.obj5847_onTap_runningActionsCount == 0) {
	obj5847_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj5935 
setCounterValue_5955();
function setCounterValue_5955() {
	window.obj5847_onTap_runningActionsCount = obj5847_onTap_runningActionsCount + 1;


	var oldValue = obj5935_counterValue;
	obj5935_counterValue = 1;
	if (obj5935_counterValue < 0) {
		obj5935_counterValue = 0;
	} else if (! obj5935_counterCanExceedTargetValue && obj5935_counterValue > obj5935_counterTargetValue) {
		obj5935_counterValue = obj5935_counterTargetValue;
	}

	if (oldValue != obj5935_counterValue) {
		$("#obj5935").trigger('SCEventCounterValueChange');
		if (obj5935_counterValue == obj5935_counterTargetValue)
			$("#obj5935").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5847_onTap_runningActionsCount = window.obj5847_onTap_runningActionsCount - 1;

if (window.obj5847_onTap_runningActionsCount < 0) {
	window.obj5847_onTap_runningActionsCount = 0;
} else if (window.obj5847_onTap_runningActionsCount == 0) {
	obj5847_onTap_actionGroup1();
} }, 1);
}









};
obj5847_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5847_onTap_activeActionGroupIndex = -1;
		$("#obj5847").trigger("obj5847_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5847) {
				console.warn("de-queueing event obj5847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5847_onTap_activeActionGroupIndex = 1;
	











































};
obj5871_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5871_onTap_activeActionGroupIndex = -1;
		$("#obj5871").trigger("obj5871_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5871) {
				console.warn("de-queueing event obj5871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5871_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5851
(function(){
	window.obj5871_onTap_runningActionsCount = obj5871_onTap_runningActionsCount + 1;


	var selector = "#obj5851";
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
					window.obj5871_onTap_runningActionsCount = window.obj5871_onTap_runningActionsCount - 1;

if (window.obj5871_onTap_runningActionsCount < 0) {
	window.obj5871_onTap_runningActionsCount = 0;
} else if (window.obj5871_onTap_runningActionsCount == 0) {
	obj5871_onTap_actionGroup1();
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
				window.obj5871_onTap_runningActionsCount = window.obj5871_onTap_runningActionsCount - 1;

if (window.obj5871_onTap_runningActionsCount < 0) {
	window.obj5871_onTap_runningActionsCount = 0;
} else if (window.obj5871_onTap_runningActionsCount == 0) {
	obj5871_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6057 
setCounterValue_6056();
function setCounterValue_6056() {
	window.obj5871_onTap_runningActionsCount = obj5871_onTap_runningActionsCount + 1;


	var oldValue = obj6057_counterValue;
	obj6057_counterValue = 1;
	if (obj6057_counterValue < 0) {
		obj6057_counterValue = 0;
	} else if (! obj6057_counterCanExceedTargetValue && obj6057_counterValue > obj6057_counterTargetValue) {
		obj6057_counterValue = obj6057_counterTargetValue;
	}

	if (oldValue != obj6057_counterValue) {
		$("#obj6057").trigger('SCEventCounterValueChange');
		if (obj6057_counterValue == obj6057_counterTargetValue)
			$("#obj6057").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5871_onTap_runningActionsCount = window.obj5871_onTap_runningActionsCount - 1;

if (window.obj5871_onTap_runningActionsCount < 0) {
	window.obj5871_onTap_runningActionsCount = 0;
} else if (window.obj5871_onTap_runningActionsCount == 0) {
	obj5871_onTap_actionGroup1();
} }, 1);
}









};
obj5871_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5871_onTap_activeActionGroupIndex = -1;
		$("#obj5871").trigger("obj5871_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5871) {
				console.warn("de-queueing event obj5871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5871_onTap_activeActionGroupIndex = 1;
	











































};
obj5869_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5869_onTap_activeActionGroupIndex = -1;
		$("#obj5869").trigger("obj5869_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5869) {
				console.warn("de-queueing event obj5869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5869_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5857
(function(){
	window.obj5869_onTap_runningActionsCount = obj5869_onTap_runningActionsCount + 1;


	var selector = "#obj5857";
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
					window.obj5869_onTap_runningActionsCount = window.obj5869_onTap_runningActionsCount - 1;

if (window.obj5869_onTap_runningActionsCount < 0) {
	window.obj5869_onTap_runningActionsCount = 0;
} else if (window.obj5869_onTap_runningActionsCount == 0) {
	obj5869_onTap_actionGroup1();
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
				window.obj5869_onTap_runningActionsCount = window.obj5869_onTap_runningActionsCount - 1;

if (window.obj5869_onTap_runningActionsCount < 0) {
	window.obj5869_onTap_runningActionsCount = 0;
} else if (window.obj5869_onTap_runningActionsCount == 0) {
	obj5869_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6057 
setCounterValue_6054();
function setCounterValue_6054() {
	window.obj5869_onTap_runningActionsCount = obj5869_onTap_runningActionsCount + 1;


	var oldValue = obj6057_counterValue;
	obj6057_counterValue = 1;
	if (obj6057_counterValue < 0) {
		obj6057_counterValue = 0;
	} else if (! obj6057_counterCanExceedTargetValue && obj6057_counterValue > obj6057_counterTargetValue) {
		obj6057_counterValue = obj6057_counterTargetValue;
	}

	if (oldValue != obj6057_counterValue) {
		$("#obj6057").trigger('SCEventCounterValueChange');
		if (obj6057_counterValue == obj6057_counterTargetValue)
			$("#obj6057").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5869_onTap_runningActionsCount = window.obj5869_onTap_runningActionsCount - 1;

if (window.obj5869_onTap_runningActionsCount < 0) {
	window.obj5869_onTap_runningActionsCount = 0;
} else if (window.obj5869_onTap_runningActionsCount == 0) {
	obj5869_onTap_actionGroup1();
} }, 1);
}









};
obj5869_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5869_onTap_activeActionGroupIndex = -1;
		$("#obj5869").trigger("obj5869_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5869) {
				console.warn("de-queueing event obj5869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5869_onTap_activeActionGroupIndex = 1;
	











































};
obj5867_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5867_onTap_activeActionGroupIndex = -1;
		$("#obj5867").trigger("obj5867_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5867) {
				console.warn("de-queueing event obj5867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5867_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5855
(function(){
	window.obj5867_onTap_runningActionsCount = obj5867_onTap_runningActionsCount + 1;


	var selector = "#obj5855";
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
					window.obj5867_onTap_runningActionsCount = window.obj5867_onTap_runningActionsCount - 1;

if (window.obj5867_onTap_runningActionsCount < 0) {
	window.obj5867_onTap_runningActionsCount = 0;
} else if (window.obj5867_onTap_runningActionsCount == 0) {
	obj5867_onTap_actionGroup1();
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
				window.obj5867_onTap_runningActionsCount = window.obj5867_onTap_runningActionsCount - 1;

if (window.obj5867_onTap_runningActionsCount < 0) {
	window.obj5867_onTap_runningActionsCount = 0;
} else if (window.obj5867_onTap_runningActionsCount == 0) {
	obj5867_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6057 
setCounterValue_6052();
function setCounterValue_6052() {
	window.obj5867_onTap_runningActionsCount = obj5867_onTap_runningActionsCount + 1;


	var oldValue = obj6057_counterValue;
	obj6057_counterValue = 1;
	if (obj6057_counterValue < 0) {
		obj6057_counterValue = 0;
	} else if (! obj6057_counterCanExceedTargetValue && obj6057_counterValue > obj6057_counterTargetValue) {
		obj6057_counterValue = obj6057_counterTargetValue;
	}

	if (oldValue != obj6057_counterValue) {
		$("#obj6057").trigger('SCEventCounterValueChange');
		if (obj6057_counterValue == obj6057_counterTargetValue)
			$("#obj6057").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5867_onTap_runningActionsCount = window.obj5867_onTap_runningActionsCount - 1;

if (window.obj5867_onTap_runningActionsCount < 0) {
	window.obj5867_onTap_runningActionsCount = 0;
} else if (window.obj5867_onTap_runningActionsCount == 0) {
	obj5867_onTap_actionGroup1();
} }, 1);
}









};
obj5867_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5867_onTap_activeActionGroupIndex = -1;
		$("#obj5867").trigger("obj5867_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5867) {
				console.warn("de-queueing event obj5867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5867_onTap_activeActionGroupIndex = 1;
	











































};
obj5865_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup1();
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
				window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5865_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6028();
function playAudioFile_6028() {
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6028")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6028");
			$("#obj_audio_playSoundFile6028").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup2();
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
				window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj5865_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj5861
(function(){
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var selector = "#obj5861";
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
					window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup3();
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
				window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5865_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 3;
	

































//	action: set counter value
//	target: obj5992 
setCounterValue_6090();
function setCounterValue_6090() {
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var oldValue = obj5992_counterValue;
	obj5992_counterValue = 1;
	if (obj5992_counterValue < 0) {
		obj5992_counterValue = 0;
	} else if (! obj5992_counterCanExceedTargetValue && obj5992_counterValue > obj5992_counterTargetValue) {
		obj5992_counterValue = obj5992_counterTargetValue;
	}

	if (oldValue != obj5992_counterValue) {
		$("#obj5992").trigger('SCEventCounterValueChange');
		if (obj5992_counterValue == obj5992_counterTargetValue)
			$("#obj5992").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup4();
} }, 1);
}









};
obj5865_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 4;
	
















//	action: wait
wait_6032();
function wait_6032() {
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup5();
}
	}, 1000);
}


























};
obj5865_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj5849 
hide_6033();
function hide_6033() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6033(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6034();
function hide_6034() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6034(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6035();
function hide_6035() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6035(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6036();
function hide_6036() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6036(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6037();
function hide_6037() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6037(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6038();
function hide_6038() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6038(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6039();
function hide_6039() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6039(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6040();
function hide_6040() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6040(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5865_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 6;
	

//	action: hide
//	selector: obj#obj5871 
hide_6041();
function hide_6041() {
	var selector = "#obj5871";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6041(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5869 
hide_6042();
function hide_6042() {
	var selector = "#obj5869";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6042(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5867 
hide_6043();
function hide_6043() {
	var selector = "#obj5867";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6043(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5865 
hide_6044();
function hide_6044() {
	var selector = "#obj5865";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6044(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5921 
hide_6045();
function hide_6045() {
	var selector = "#obj5921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6045(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5865_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 7;
	


//	action: show 
//	selector: #obj5903
(function(){
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var selector = "#obj5903";
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
					window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
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
				window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5901
(function(){
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var selector = "#obj5901";
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
					window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
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
				window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5899
(function(){
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var selector = "#obj5899";
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
					window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
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
				window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5897
(function(){
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var selector = "#obj5897";
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
					window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
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
				window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5929
(function(){
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var selector = "#obj5929";
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
					window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
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
				window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5865_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 8;
	

//	action: hide
//	selector: obj#obj6080 
hide_6089();
function hide_6089() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup9();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6089(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup9();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5865_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 9;
	































//	action: increment counter
//	target: obj6290 
incrementCounter_6298();
function incrementCounter_6298() {
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var oldValue = obj6290_counterValue;
	obj6290_counterValue = obj6290_counterValue + 1;
	if (! obj6290_counterCanExceedTargetValue && obj6290_counterValue > obj6290_counterTargetValue) {
		obj6290_counterValue = obj6290_counterTargetValue;
	}

	if (oldValue != obj6290_counterValue) {
		$("#obj6290").trigger('SCEventCounterValueChange');
		$("#obj6290").trigger('SCEventCounterIncrease');
		if (obj6290_counterValue == obj6290_counterTargetValue)
			$("#obj6290").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup10();
} }, 1);
}











};
obj5865_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 10;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6299();
function incrementCounter_6299() {
	window.obj5865_onTap_runningActionsCount = obj5865_onTap_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5865_onTap_runningActionsCount = window.obj5865_onTap_runningActionsCount - 1;

if (window.obj5865_onTap_runningActionsCount < 0) {
	window.obj5865_onTap_runningActionsCount = 0;
} else if (window.obj5865_onTap_runningActionsCount == 0) {
	obj5865_onTap_actionGroup11();
} }, 1);
}











};
obj5865_onTap_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5865_onTap_activeActionGroupIndex = -1;
		$("#obj5865").trigger("obj5865_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5865) {
				console.warn("de-queueing event obj5865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5865_onTap_activeActionGroupIndex = 11;
	











































};
obj5903_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5903_onTap_activeActionGroupIndex = -1;
		$("#obj5903").trigger("obj5903_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5903) {
				console.warn("de-queueing event obj5903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5903_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5851
(function(){
	window.obj5903_onTap_runningActionsCount = obj5903_onTap_runningActionsCount + 1;


	var selector = "#obj5851";
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
					window.obj5903_onTap_runningActionsCount = window.obj5903_onTap_runningActionsCount - 1;

if (window.obj5903_onTap_runningActionsCount < 0) {
	window.obj5903_onTap_runningActionsCount = 0;
} else if (window.obj5903_onTap_runningActionsCount == 0) {
	obj5903_onTap_actionGroup1();
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
				window.obj5903_onTap_runningActionsCount = window.obj5903_onTap_runningActionsCount - 1;

if (window.obj5903_onTap_runningActionsCount < 0) {
	window.obj5903_onTap_runningActionsCount = 0;
} else if (window.obj5903_onTap_runningActionsCount == 0) {
	obj5903_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6123 
setCounterValue_6120();
function setCounterValue_6120() {
	window.obj5903_onTap_runningActionsCount = obj5903_onTap_runningActionsCount + 1;


	var oldValue = obj6123_counterValue;
	obj6123_counterValue = 1;
	if (obj6123_counterValue < 0) {
		obj6123_counterValue = 0;
	} else if (! obj6123_counterCanExceedTargetValue && obj6123_counterValue > obj6123_counterTargetValue) {
		obj6123_counterValue = obj6123_counterTargetValue;
	}

	if (oldValue != obj6123_counterValue) {
		$("#obj6123").trigger('SCEventCounterValueChange');
		if (obj6123_counterValue == obj6123_counterTargetValue)
			$("#obj6123").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5903_onTap_runningActionsCount = window.obj5903_onTap_runningActionsCount - 1;

if (window.obj5903_onTap_runningActionsCount < 0) {
	window.obj5903_onTap_runningActionsCount = 0;
} else if (window.obj5903_onTap_runningActionsCount == 0) {
	obj5903_onTap_actionGroup1();
} }, 1);
}









};
obj5903_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5903_onTap_activeActionGroupIndex = -1;
		$("#obj5903").trigger("obj5903_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5903) {
				console.warn("de-queueing event obj5903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5903_onTap_activeActionGroupIndex = 1;
	











































};
obj5901_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5901_onTap_activeActionGroupIndex = -1;
		$("#obj5901").trigger("obj5901_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5901) {
				console.warn("de-queueing event obj5901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5901_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5857
(function(){
	window.obj5901_onTap_runningActionsCount = obj5901_onTap_runningActionsCount + 1;


	var selector = "#obj5857";
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
					window.obj5901_onTap_runningActionsCount = window.obj5901_onTap_runningActionsCount - 1;

if (window.obj5901_onTap_runningActionsCount < 0) {
	window.obj5901_onTap_runningActionsCount = 0;
} else if (window.obj5901_onTap_runningActionsCount == 0) {
	obj5901_onTap_actionGroup1();
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
				window.obj5901_onTap_runningActionsCount = window.obj5901_onTap_runningActionsCount - 1;

if (window.obj5901_onTap_runningActionsCount < 0) {
	window.obj5901_onTap_runningActionsCount = 0;
} else if (window.obj5901_onTap_runningActionsCount == 0) {
	obj5901_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6123 
setCounterValue_6118();
function setCounterValue_6118() {
	window.obj5901_onTap_runningActionsCount = obj5901_onTap_runningActionsCount + 1;


	var oldValue = obj6123_counterValue;
	obj6123_counterValue = 1;
	if (obj6123_counterValue < 0) {
		obj6123_counterValue = 0;
	} else if (! obj6123_counterCanExceedTargetValue && obj6123_counterValue > obj6123_counterTargetValue) {
		obj6123_counterValue = obj6123_counterTargetValue;
	}

	if (oldValue != obj6123_counterValue) {
		$("#obj6123").trigger('SCEventCounterValueChange');
		if (obj6123_counterValue == obj6123_counterTargetValue)
			$("#obj6123").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5901_onTap_runningActionsCount = window.obj5901_onTap_runningActionsCount - 1;

if (window.obj5901_onTap_runningActionsCount < 0) {
	window.obj5901_onTap_runningActionsCount = 0;
} else if (window.obj5901_onTap_runningActionsCount == 0) {
	obj5901_onTap_actionGroup1();
} }, 1);
}









};
obj5901_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5901_onTap_activeActionGroupIndex = -1;
		$("#obj5901").trigger("obj5901_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5901) {
				console.warn("de-queueing event obj5901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5901_onTap_activeActionGroupIndex = 1;
	











































};
obj5899_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5899_onTap_activeActionGroupIndex = -1;
		$("#obj5899").trigger("obj5899_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5899) {
				console.warn("de-queueing event obj5899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5899_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5855
(function(){
	window.obj5899_onTap_runningActionsCount = obj5899_onTap_runningActionsCount + 1;


	var selector = "#obj5855";
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
					window.obj5899_onTap_runningActionsCount = window.obj5899_onTap_runningActionsCount - 1;

if (window.obj5899_onTap_runningActionsCount < 0) {
	window.obj5899_onTap_runningActionsCount = 0;
} else if (window.obj5899_onTap_runningActionsCount == 0) {
	obj5899_onTap_actionGroup1();
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
				window.obj5899_onTap_runningActionsCount = window.obj5899_onTap_runningActionsCount - 1;

if (window.obj5899_onTap_runningActionsCount < 0) {
	window.obj5899_onTap_runningActionsCount = 0;
} else if (window.obj5899_onTap_runningActionsCount == 0) {
	obj5899_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6123 
setCounterValue_6122();
function setCounterValue_6122() {
	window.obj5899_onTap_runningActionsCount = obj5899_onTap_runningActionsCount + 1;


	var oldValue = obj6123_counterValue;
	obj6123_counterValue = 1;
	if (obj6123_counterValue < 0) {
		obj6123_counterValue = 0;
	} else if (! obj6123_counterCanExceedTargetValue && obj6123_counterValue > obj6123_counterTargetValue) {
		obj6123_counterValue = obj6123_counterTargetValue;
	}

	if (oldValue != obj6123_counterValue) {
		$("#obj6123").trigger('SCEventCounterValueChange');
		if (obj6123_counterValue == obj6123_counterTargetValue)
			$("#obj6123").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5899_onTap_runningActionsCount = window.obj5899_onTap_runningActionsCount - 1;

if (window.obj5899_onTap_runningActionsCount < 0) {
	window.obj5899_onTap_runningActionsCount = 0;
} else if (window.obj5899_onTap_runningActionsCount == 0) {
	obj5899_onTap_actionGroup1();
} }, 1);
}









};
obj5899_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5899_onTap_activeActionGroupIndex = -1;
		$("#obj5899").trigger("obj5899_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5899) {
				console.warn("de-queueing event obj5899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5899_onTap_activeActionGroupIndex = 1;
	











































};
obj5897_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup1();
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
				window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5897_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6094();
function playAudioFile_6094() {
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6094")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6094");
			$("#obj_audio_playSoundFile6094").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup2();
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
				window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj5897_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj5861
(function(){
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var selector = "#obj5861";
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
					window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup3();
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
				window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5897_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 3;
	

































//	action: set counter value
//	target: obj5992 
setCounterValue_6096();
function setCounterValue_6096() {
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var oldValue = obj5992_counterValue;
	obj5992_counterValue = 1;
	if (obj5992_counterValue < 0) {
		obj5992_counterValue = 0;
	} else if (! obj5992_counterCanExceedTargetValue && obj5992_counterValue > obj5992_counterTargetValue) {
		obj5992_counterValue = obj5992_counterTargetValue;
	}

	if (oldValue != obj5992_counterValue) {
		$("#obj5992").trigger('SCEventCounterValueChange');
		if (obj5992_counterValue == obj5992_counterTargetValue)
			$("#obj5992").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup4();
} }, 1);
}









};
obj5897_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 4;
	
















//	action: wait
wait_6097();
function wait_6097() {
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup5();
}
	}, 1000);
}


























};
obj5897_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj5849 
hide_6098();
function hide_6098() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6098(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6099();
function hide_6099() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6099(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6100();
function hide_6100() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6100(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6101();
function hide_6101() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6101(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6102();
function hide_6102() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6102(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6103();
function hide_6103() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6103(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6104();
function hide_6104() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6104(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6105();
function hide_6105() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6105(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5897_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 6;
	

//	action: hide
//	selector: obj#obj5903 
hide_6106();
function hide_6106() {
	var selector = "#obj5903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6106(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5901 
hide_6107();
function hide_6107() {
	var selector = "#obj5901";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6107(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5899 
hide_6108();
function hide_6108() {
	var selector = "#obj5899";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6108(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5897 
hide_6109();
function hide_6109() {
	var selector = "#obj5897";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6109(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5929 
hide_6110();
function hide_6110() {
	var selector = "#obj5929";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6110(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5897_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 7;
	


//	action: show 
//	selector: #obj5911
(function(){
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var selector = "#obj5911";
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
					window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
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
				window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5909
(function(){
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var selector = "#obj5909";
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
					window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
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
				window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5907
(function(){
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var selector = "#obj5907";
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
					window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
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
				window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5905
(function(){
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var selector = "#obj5905";
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
					window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
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
				window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5931
(function(){
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var selector = "#obj5931";
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
					window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
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
				window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5897_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 8;
	

//	action: hide
//	selector: obj#obj6080 
hide_6116();
function hide_6116() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup9();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6116(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup9();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5897_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 9;
	































//	action: increment counter
//	target: obj6290 
incrementCounter_6300();
function incrementCounter_6300() {
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var oldValue = obj6290_counterValue;
	obj6290_counterValue = obj6290_counterValue + 1;
	if (! obj6290_counterCanExceedTargetValue && obj6290_counterValue > obj6290_counterTargetValue) {
		obj6290_counterValue = obj6290_counterTargetValue;
	}

	if (oldValue != obj6290_counterValue) {
		$("#obj6290").trigger('SCEventCounterValueChange');
		$("#obj6290").trigger('SCEventCounterIncrease');
		if (obj6290_counterValue == obj6290_counterTargetValue)
			$("#obj6290").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup10();
} }, 1);
}











};
obj5897_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 10;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6301();
function incrementCounter_6301() {
	window.obj5897_onTap_runningActionsCount = obj5897_onTap_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5897_onTap_runningActionsCount = window.obj5897_onTap_runningActionsCount - 1;

if (window.obj5897_onTap_runningActionsCount < 0) {
	window.obj5897_onTap_runningActionsCount = 0;
} else if (window.obj5897_onTap_runningActionsCount == 0) {
	obj5897_onTap_actionGroup11();
} }, 1);
}











};
obj5897_onTap_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5897_onTap_activeActionGroupIndex = -1;
		$("#obj5897").trigger("obj5897_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5897) {
				console.warn("de-queueing event obj5897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5897_onTap_activeActionGroupIndex = 11;
	











































};
obj5911_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5911_onTap_activeActionGroupIndex = -1;
		$("#obj5911").trigger("obj5911_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5911) {
				console.warn("de-queueing event obj5911." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5911").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5911_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5851
(function(){
	window.obj5911_onTap_runningActionsCount = obj5911_onTap_runningActionsCount + 1;


	var selector = "#obj5851";
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
					window.obj5911_onTap_runningActionsCount = window.obj5911_onTap_runningActionsCount - 1;

if (window.obj5911_onTap_runningActionsCount < 0) {
	window.obj5911_onTap_runningActionsCount = 0;
} else if (window.obj5911_onTap_runningActionsCount == 0) {
	obj5911_onTap_actionGroup1();
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
				window.obj5911_onTap_runningActionsCount = window.obj5911_onTap_runningActionsCount - 1;

if (window.obj5911_onTap_runningActionsCount < 0) {
	window.obj5911_onTap_runningActionsCount = 0;
} else if (window.obj5911_onTap_runningActionsCount == 0) {
	obj5911_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6204 
setCounterValue_6173();
function setCounterValue_6173() {
	window.obj5911_onTap_runningActionsCount = obj5911_onTap_runningActionsCount + 1;


	var oldValue = obj6204_counterValue;
	obj6204_counterValue = 1;
	if (obj6204_counterValue < 0) {
		obj6204_counterValue = 0;
	} else if (! obj6204_counterCanExceedTargetValue && obj6204_counterValue > obj6204_counterTargetValue) {
		obj6204_counterValue = obj6204_counterTargetValue;
	}

	if (oldValue != obj6204_counterValue) {
		$("#obj6204").trigger('SCEventCounterValueChange');
		if (obj6204_counterValue == obj6204_counterTargetValue)
			$("#obj6204").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5911_onTap_runningActionsCount = window.obj5911_onTap_runningActionsCount - 1;

if (window.obj5911_onTap_runningActionsCount < 0) {
	window.obj5911_onTap_runningActionsCount = 0;
} else if (window.obj5911_onTap_runningActionsCount == 0) {
	obj5911_onTap_actionGroup1();
} }, 1);
}









};
obj5911_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5911_onTap_activeActionGroupIndex = -1;
		$("#obj5911").trigger("obj5911_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5911) {
				console.warn("de-queueing event obj5911." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5911").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5911_onTap_activeActionGroupIndex = 1;
	











































};
obj5909_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup1();
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
				window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5909_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6149();
function playAudioFile_6149() {
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6149")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6149");
			$("#obj_audio_playSoundFile6149").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup2();
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
				window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj5909_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj5849
(function(){
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var selector = "#obj5849";
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
					window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup3();
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
				window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5909_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 3;
	

































//	action: set counter value
//	target: obj5992 
setCounterValue_6151();
function setCounterValue_6151() {
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var oldValue = obj5992_counterValue;
	obj5992_counterValue = 1;
	if (obj5992_counterValue < 0) {
		obj5992_counterValue = 0;
	} else if (! obj5992_counterCanExceedTargetValue && obj5992_counterValue > obj5992_counterTargetValue) {
		obj5992_counterValue = obj5992_counterTargetValue;
	}

	if (oldValue != obj5992_counterValue) {
		$("#obj5992").trigger('SCEventCounterValueChange');
		if (obj5992_counterValue == obj5992_counterTargetValue)
			$("#obj5992").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup4();
} }, 1);
}









};
obj5909_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 4;
	
















//	action: wait
wait_6152();
function wait_6152() {
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup5();
}
	}, 1000);
}


























};
obj5909_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj5849 
hide_6153();
function hide_6153() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6153(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6154();
function hide_6154() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6154(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6155();
function hide_6155() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6155(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6156();
function hide_6156() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6156(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6157();
function hide_6157() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6157(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6158();
function hide_6158() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6158(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6159();
function hide_6159() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6159(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6160();
function hide_6160() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6160(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5909_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 6;
	

//	action: hide
//	selector: obj#obj5909 
hide_6161();
function hide_6161() {
	var selector = "#obj5909";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6161(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5911 
hide_6162();
function hide_6162() {
	var selector = "#obj5911";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6162(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5907 
hide_6163();
function hide_6163() {
	var selector = "#obj5907";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6163(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5905 
hide_6164();
function hide_6164() {
	var selector = "#obj5905";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6164(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5931 
hide_6165();
function hide_6165() {
	var selector = "#obj5931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6165(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5909_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 7;
	


//	action: show 
//	selector: #obj5919
(function(){
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var selector = "#obj5919";
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
					window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
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
				window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5917
(function(){
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var selector = "#obj5917";
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
					window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
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
				window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5915
(function(){
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var selector = "#obj5915";
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
					window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
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
				window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5913
(function(){
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var selector = "#obj5913";
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
					window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
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
				window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5933
(function(){
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var selector = "#obj5933";
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
					window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
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
				window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5909_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 8;
	

//	action: hide
//	selector: obj#obj6080 
hide_6171();
function hide_6171() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup9();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6171(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup9();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5909_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 9;
	































//	action: increment counter
//	target: obj6290 
incrementCounter_6302();
function incrementCounter_6302() {
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var oldValue = obj6290_counterValue;
	obj6290_counterValue = obj6290_counterValue + 1;
	if (! obj6290_counterCanExceedTargetValue && obj6290_counterValue > obj6290_counterTargetValue) {
		obj6290_counterValue = obj6290_counterTargetValue;
	}

	if (oldValue != obj6290_counterValue) {
		$("#obj6290").trigger('SCEventCounterValueChange');
		$("#obj6290").trigger('SCEventCounterIncrease');
		if (obj6290_counterValue == obj6290_counterTargetValue)
			$("#obj6290").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup10();
} }, 1);
}











};
obj5909_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 10;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6303();
function incrementCounter_6303() {
	window.obj5909_onTap_runningActionsCount = obj5909_onTap_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5909_onTap_runningActionsCount = window.obj5909_onTap_runningActionsCount - 1;

if (window.obj5909_onTap_runningActionsCount < 0) {
	window.obj5909_onTap_runningActionsCount = 0;
} else if (window.obj5909_onTap_runningActionsCount == 0) {
	obj5909_onTap_actionGroup11();
} }, 1);
}











};
obj5909_onTap_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5909_onTap_activeActionGroupIndex = -1;
		$("#obj5909").trigger("obj5909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5909) {
				console.warn("de-queueing event obj5909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5909_onTap_activeActionGroupIndex = 11;
	











































};
obj5907_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5907_onTap_activeActionGroupIndex = -1;
		$("#obj5907").trigger("obj5907_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5907) {
				console.warn("de-queueing event obj5907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5907_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5855
(function(){
	window.obj5907_onTap_runningActionsCount = obj5907_onTap_runningActionsCount + 1;


	var selector = "#obj5855";
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
					window.obj5907_onTap_runningActionsCount = window.obj5907_onTap_runningActionsCount - 1;

if (window.obj5907_onTap_runningActionsCount < 0) {
	window.obj5907_onTap_runningActionsCount = 0;
} else if (window.obj5907_onTap_runningActionsCount == 0) {
	obj5907_onTap_actionGroup1();
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
				window.obj5907_onTap_runningActionsCount = window.obj5907_onTap_runningActionsCount - 1;

if (window.obj5907_onTap_runningActionsCount < 0) {
	window.obj5907_onTap_runningActionsCount = 0;
} else if (window.obj5907_onTap_runningActionsCount == 0) {
	obj5907_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6204 
setCounterValue_6175();
function setCounterValue_6175() {
	window.obj5907_onTap_runningActionsCount = obj5907_onTap_runningActionsCount + 1;


	var oldValue = obj6204_counterValue;
	obj6204_counterValue = 1;
	if (obj6204_counterValue < 0) {
		obj6204_counterValue = 0;
	} else if (! obj6204_counterCanExceedTargetValue && obj6204_counterValue > obj6204_counterTargetValue) {
		obj6204_counterValue = obj6204_counterTargetValue;
	}

	if (oldValue != obj6204_counterValue) {
		$("#obj6204").trigger('SCEventCounterValueChange');
		if (obj6204_counterValue == obj6204_counterTargetValue)
			$("#obj6204").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5907_onTap_runningActionsCount = window.obj5907_onTap_runningActionsCount - 1;

if (window.obj5907_onTap_runningActionsCount < 0) {
	window.obj5907_onTap_runningActionsCount = 0;
} else if (window.obj5907_onTap_runningActionsCount == 0) {
	obj5907_onTap_actionGroup1();
} }, 1);
}









};
obj5907_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5907_onTap_activeActionGroupIndex = -1;
		$("#obj5907").trigger("obj5907_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5907) {
				console.warn("de-queueing event obj5907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5907_onTap_activeActionGroupIndex = 1;
	











































};
obj5905_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5905_onTap_activeActionGroupIndex = -1;
		$("#obj5905").trigger("obj5905_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5905) {
				console.warn("de-queueing event obj5905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5905_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5853
(function(){
	window.obj5905_onTap_runningActionsCount = obj5905_onTap_runningActionsCount + 1;


	var selector = "#obj5853";
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
					window.obj5905_onTap_runningActionsCount = window.obj5905_onTap_runningActionsCount - 1;

if (window.obj5905_onTap_runningActionsCount < 0) {
	window.obj5905_onTap_runningActionsCount = 0;
} else if (window.obj5905_onTap_runningActionsCount == 0) {
	obj5905_onTap_actionGroup1();
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
				window.obj5905_onTap_runningActionsCount = window.obj5905_onTap_runningActionsCount - 1;

if (window.obj5905_onTap_runningActionsCount < 0) {
	window.obj5905_onTap_runningActionsCount = 0;
} else if (window.obj5905_onTap_runningActionsCount == 0) {
	obj5905_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6204 
setCounterValue_6177();
function setCounterValue_6177() {
	window.obj5905_onTap_runningActionsCount = obj5905_onTap_runningActionsCount + 1;


	var oldValue = obj6204_counterValue;
	obj6204_counterValue = 1;
	if (obj6204_counterValue < 0) {
		obj6204_counterValue = 0;
	} else if (! obj6204_counterCanExceedTargetValue && obj6204_counterValue > obj6204_counterTargetValue) {
		obj6204_counterValue = obj6204_counterTargetValue;
	}

	if (oldValue != obj6204_counterValue) {
		$("#obj6204").trigger('SCEventCounterValueChange');
		if (obj6204_counterValue == obj6204_counterTargetValue)
			$("#obj6204").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5905_onTap_runningActionsCount = window.obj5905_onTap_runningActionsCount - 1;

if (window.obj5905_onTap_runningActionsCount < 0) {
	window.obj5905_onTap_runningActionsCount = 0;
} else if (window.obj5905_onTap_runningActionsCount == 0) {
	obj5905_onTap_actionGroup1();
} }, 1);
}









};
obj5905_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5905_onTap_activeActionGroupIndex = -1;
		$("#obj5905").trigger("obj5905_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5905) {
				console.warn("de-queueing event obj5905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5905_onTap_activeActionGroupIndex = 1;
	











































};
obj5919_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5919_onTap_activeActionGroupIndex = -1;
		$("#obj5919").trigger("obj5919_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5919) {
				console.warn("de-queueing event obj5919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5919_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5851
(function(){
	window.obj5919_onTap_runningActionsCount = obj5919_onTap_runningActionsCount + 1;


	var selector = "#obj5851";
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
					window.obj5919_onTap_runningActionsCount = window.obj5919_onTap_runningActionsCount - 1;

if (window.obj5919_onTap_runningActionsCount < 0) {
	window.obj5919_onTap_runningActionsCount = 0;
} else if (window.obj5919_onTap_runningActionsCount == 0) {
	obj5919_onTap_actionGroup1();
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
				window.obj5919_onTap_runningActionsCount = window.obj5919_onTap_runningActionsCount - 1;

if (window.obj5919_onTap_runningActionsCount < 0) {
	window.obj5919_onTap_runningActionsCount = 0;
} else if (window.obj5919_onTap_runningActionsCount == 0) {
	obj5919_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6264 
setCounterValue_6259();
function setCounterValue_6259() {
	window.obj5919_onTap_runningActionsCount = obj5919_onTap_runningActionsCount + 1;


	var oldValue = obj6264_counterValue;
	obj6264_counterValue = 1;
	if (obj6264_counterValue < 0) {
		obj6264_counterValue = 0;
	} else if (! obj6264_counterCanExceedTargetValue && obj6264_counterValue > obj6264_counterTargetValue) {
		obj6264_counterValue = obj6264_counterTargetValue;
	}

	if (oldValue != obj6264_counterValue) {
		$("#obj6264").trigger('SCEventCounterValueChange');
		if (obj6264_counterValue == obj6264_counterTargetValue)
			$("#obj6264").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5919_onTap_runningActionsCount = window.obj5919_onTap_runningActionsCount - 1;

if (window.obj5919_onTap_runningActionsCount < 0) {
	window.obj5919_onTap_runningActionsCount = 0;
} else if (window.obj5919_onTap_runningActionsCount == 0) {
	obj5919_onTap_actionGroup1();
} }, 1);
}









};
obj5919_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5919_onTap_activeActionGroupIndex = -1;
		$("#obj5919").trigger("obj5919_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5919) {
				console.warn("de-queueing event obj5919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5919_onTap_activeActionGroupIndex = 1;
	











































};
obj5917_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup1();
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
				window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5917_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6230();
function playAudioFile_6230() {
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6230")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6230");
			$("#obj_audio_playSoundFile6230").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup2();
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
				window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj5917_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj5849
(function(){
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;


	var selector = "#obj5849";
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
					window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup3();
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
				window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5917_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 3;
	

































//	action: set counter value
//	target: obj5992 
setCounterValue_6232();
function setCounterValue_6232() {
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;


	var oldValue = obj5992_counterValue;
	obj5992_counterValue = 1;
	if (obj5992_counterValue < 0) {
		obj5992_counterValue = 0;
	} else if (! obj5992_counterCanExceedTargetValue && obj5992_counterValue > obj5992_counterTargetValue) {
		obj5992_counterValue = obj5992_counterTargetValue;
	}

	if (oldValue != obj5992_counterValue) {
		$("#obj5992").trigger('SCEventCounterValueChange');
		if (obj5992_counterValue == obj5992_counterTargetValue)
			$("#obj5992").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup4();
} }, 1);
}









};
obj5917_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 4;
	
















//	action: wait
wait_6350();
function wait_6350() {
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup5();
}
	}, 1000);
}


























};
obj5917_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj6080 
hide_6252();
function hide_6252() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6252(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5917_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 6;
	

//	action: hide
//	selector: obj#obj5849 
hide_6342();
function hide_6342() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6342(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6343();
function hide_6343() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6343(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6344();
function hide_6344() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6344(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6345();
function hide_6345() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6345(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6346();
function hide_6346() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6346(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6347();
function hide_6347() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6347(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6348();
function hide_6348() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6348(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6349();
function hide_6349() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6349(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5917_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj6290 
incrementCounter_6304();
function incrementCounter_6304() {
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;


	var oldValue = obj6290_counterValue;
	obj6290_counterValue = obj6290_counterValue + 1;
	if (! obj6290_counterCanExceedTargetValue && obj6290_counterValue > obj6290_counterTargetValue) {
		obj6290_counterValue = obj6290_counterTargetValue;
	}

	if (oldValue != obj6290_counterValue) {
		$("#obj6290").trigger('SCEventCounterValueChange');
		$("#obj6290").trigger('SCEventCounterIncrease');
		if (obj6290_counterValue == obj6290_counterTargetValue)
			$("#obj6290").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup8();
} }, 1);
}











};
obj5917_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6305();
function incrementCounter_6305() {
	window.obj5917_onTap_runningActionsCount = obj5917_onTap_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5917_onTap_runningActionsCount = window.obj5917_onTap_runningActionsCount - 1;

if (window.obj5917_onTap_runningActionsCount < 0) {
	window.obj5917_onTap_runningActionsCount = 0;
} else if (window.obj5917_onTap_runningActionsCount == 0) {
	obj5917_onTap_actionGroup9();
} }, 1);
}











};
obj5917_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5917_onTap_activeActionGroupIndex = -1;
		$("#obj5917").trigger("obj5917_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5917) {
				console.warn("de-queueing event obj5917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5917_onTap_activeActionGroupIndex = 9;
	











































};
obj5915_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5915_onTap_activeActionGroupIndex = -1;
		$("#obj5915").trigger("obj5915_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5915) {
				console.warn("de-queueing event obj5915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5915_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5855
(function(){
	window.obj5915_onTap_runningActionsCount = obj5915_onTap_runningActionsCount + 1;


	var selector = "#obj5855";
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
					window.obj5915_onTap_runningActionsCount = window.obj5915_onTap_runningActionsCount - 1;

if (window.obj5915_onTap_runningActionsCount < 0) {
	window.obj5915_onTap_runningActionsCount = 0;
} else if (window.obj5915_onTap_runningActionsCount == 0) {
	obj5915_onTap_actionGroup1();
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
				window.obj5915_onTap_runningActionsCount = window.obj5915_onTap_runningActionsCount - 1;

if (window.obj5915_onTap_runningActionsCount < 0) {
	window.obj5915_onTap_runningActionsCount = 0;
} else if (window.obj5915_onTap_runningActionsCount == 0) {
	obj5915_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6264 
setCounterValue_6261();
function setCounterValue_6261() {
	window.obj5915_onTap_runningActionsCount = obj5915_onTap_runningActionsCount + 1;


	var oldValue = obj6264_counterValue;
	obj6264_counterValue = 1;
	if (obj6264_counterValue < 0) {
		obj6264_counterValue = 0;
	} else if (! obj6264_counterCanExceedTargetValue && obj6264_counterValue > obj6264_counterTargetValue) {
		obj6264_counterValue = obj6264_counterTargetValue;
	}

	if (oldValue != obj6264_counterValue) {
		$("#obj6264").trigger('SCEventCounterValueChange');
		if (obj6264_counterValue == obj6264_counterTargetValue)
			$("#obj6264").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5915_onTap_runningActionsCount = window.obj5915_onTap_runningActionsCount - 1;

if (window.obj5915_onTap_runningActionsCount < 0) {
	window.obj5915_onTap_runningActionsCount = 0;
} else if (window.obj5915_onTap_runningActionsCount == 0) {
	obj5915_onTap_actionGroup1();
} }, 1);
}









};
obj5915_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5915_onTap_activeActionGroupIndex = -1;
		$("#obj5915").trigger("obj5915_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5915) {
				console.warn("de-queueing event obj5915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5915_onTap_activeActionGroupIndex = 1;
	











































};
obj5913_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5913_onTap_activeActionGroupIndex = -1;
		$("#obj5913").trigger("obj5913_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5913) {
				console.warn("de-queueing event obj5913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5913_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5853
(function(){
	window.obj5913_onTap_runningActionsCount = obj5913_onTap_runningActionsCount + 1;


	var selector = "#obj5853";
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
					window.obj5913_onTap_runningActionsCount = window.obj5913_onTap_runningActionsCount - 1;

if (window.obj5913_onTap_runningActionsCount < 0) {
	window.obj5913_onTap_runningActionsCount = 0;
} else if (window.obj5913_onTap_runningActionsCount == 0) {
	obj5913_onTap_actionGroup1();
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
				window.obj5913_onTap_runningActionsCount = window.obj5913_onTap_runningActionsCount - 1;

if (window.obj5913_onTap_runningActionsCount < 0) {
	window.obj5913_onTap_runningActionsCount = 0;
} else if (window.obj5913_onTap_runningActionsCount == 0) {
	obj5913_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();






























//	action: set counter value
//	target: obj6264 
setCounterValue_6263();
function setCounterValue_6263() {
	window.obj5913_onTap_runningActionsCount = obj5913_onTap_runningActionsCount + 1;


	var oldValue = obj6264_counterValue;
	obj6264_counterValue = 1;
	if (obj6264_counterValue < 0) {
		obj6264_counterValue = 0;
	} else if (! obj6264_counterCanExceedTargetValue && obj6264_counterValue > obj6264_counterTargetValue) {
		obj6264_counterValue = obj6264_counterTargetValue;
	}

	if (oldValue != obj6264_counterValue) {
		$("#obj6264").trigger('SCEventCounterValueChange');
		if (obj6264_counterValue == obj6264_counterTargetValue)
			$("#obj6264").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5913_onTap_runningActionsCount = window.obj5913_onTap_runningActionsCount - 1;

if (window.obj5913_onTap_runningActionsCount < 0) {
	window.obj5913_onTap_runningActionsCount = 0;
} else if (window.obj5913_onTap_runningActionsCount == 0) {
	obj5913_onTap_actionGroup1();
} }, 1);
}









};
obj5913_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5913_onTap_activeActionGroupIndex = -1;
		$("#obj5913").trigger("obj5913_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5913) {
				console.warn("de-queueing event obj5913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5913_onTap_activeActionGroupIndex = 1;
	











































};
obj5935_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5935_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_5940();
function playAudioFile_5940() {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5940")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5940");
			$("#obj_audio_playSoundFile5940").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, false);
		} else {
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj5935_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
















//	action: wait
wait_6026();
function wait_6026() {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 1000);
}


























};
obj5935_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5849 
hide_6010();
function hide_6010() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6010(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6011();
function hide_6011() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6011(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6012();
function hide_6012() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6012(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6013();
function hide_6013() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6013(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6014();
function hide_6014() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6014(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6015();
function hide_6015() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6015(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6016();
function hide_6016() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6016(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6017();
function hide_6017() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6017(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5935_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj5841 
hide_5941();
function hide_5941() {
	var selector = "#obj5841";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5941(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5843 
hide_5942();
function hide_5942() {
	var selector = "#obj5843";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5942(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5845 
hide_5943();
function hide_5943() {
	var selector = "#obj5845";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5943(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5847 
hide_5944();
function hide_5944() {
	var selector = "#obj5847";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5944(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5839 
hide_5957();
function hide_5957() {
	var selector = "#obj5839";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5957(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5935_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	


//	action: show 
//	selector: #obj5865
(function(){
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5865";
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
					window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5871
(function(){
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5871";
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
					window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5869
(function(){
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5869";
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
					window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5867
(function(){
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5867";
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
					window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5921
(function(){
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5921";
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
					window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5935_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	
































//	action: decrement counter
//	target: obj5935 
decrementCounter_5951();
function decrementCounter_5951() {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5935_counterValue;
	obj5935_counterValue = obj5935_counterValue - 1;
	if (obj5935_counterValue < 0) {
		obj5935_counterValue = 0;
	}

	if (oldValue != obj5935_counterValue) {
		$("#obj5935").trigger('SCEventCounterValueChange');
		$("#obj5935").trigger('SCEventCounterDecrease');
		if (obj5935_counterValue == obj5935_counterTargetValue)
			$("#obj5935").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup7();
} }, 1);
}










};
obj5935_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	

//	action: hide
//	selector: obj#obj6080 
hide_6087();
function hide_6087() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup8();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6087(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup8();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5935_SCEventCounterReachedTargetValue_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6306();
function incrementCounter_6306() {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = obj5935_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5935_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5935_SCEventCounterReachedTargetValue_actionGroup9();
} }, 1);
}











};
obj5935_SCEventCounterReachedTargetValue_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5935").trigger("obj5935_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5935) {
				console.warn("de-queueing event obj5935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex = 9;
	











































};
obj5992_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5992_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5992").trigger("obj5992_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5992) {
				console.warn("de-queueing event obj5992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5992_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj5620 
incrementCounter_5994();
function incrementCounter_5994() {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = obj5992_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5620_counterValue;
	obj5620_counterValue = obj5620_counterValue + 1;
	if (! obj5620_counterCanExceedTargetValue && obj5620_counterValue > obj5620_counterTargetValue) {
		obj5620_counterValue = obj5620_counterTargetValue;
	}

	if (oldValue != obj5620_counterValue) {
		$("#obj5620").trigger('SCEventCounterValueChange');
		$("#obj5620").trigger('SCEventCounterIncrease');
		if (obj5620_counterValue == obj5620_counterTargetValue)
			$("#obj5620").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5992_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj5611 
incrementCounter_5995();
function incrementCounter_5995() {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = obj5992_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5611_counterValue;
	obj5611_counterValue = obj5611_counterValue + 1;
	if (! obj5611_counterCanExceedTargetValue && obj5611_counterValue > obj5611_counterTargetValue) {
		obj5611_counterValue = obj5611_counterTargetValue;
	}

	if (oldValue != obj5611_counterValue) {
		$("#obj5611").trigger('SCEventCounterValueChange');
		$("#obj5611").trigger('SCEventCounterIncrease');
		if (obj5611_counterValue == obj5611_counterTargetValue)
			$("#obj5611").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5992_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj5617 
incrementCounter_5996();
function incrementCounter_5996() {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = obj5992_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5617_counterValue;
	obj5617_counterValue = obj5617_counterValue + 1;
	if (! obj5617_counterCanExceedTargetValue && obj5617_counterValue > obj5617_counterTargetValue) {
		obj5617_counterValue = obj5617_counterTargetValue;
	}

	if (oldValue != obj5617_counterValue) {
		$("#obj5617").trigger('SCEventCounterValueChange');
		$("#obj5617").trigger('SCEventCounterIncrease');
		if (obj5617_counterValue == obj5617_counterTargetValue)
			$("#obj5617").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5992_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj5614 
incrementCounter_5997();
function incrementCounter_5997() {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = obj5992_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5614_counterValue;
	obj5614_counterValue = obj5614_counterValue + 1;
	if (! obj5614_counterCanExceedTargetValue && obj5614_counterValue > obj5614_counterTargetValue) {
		obj5614_counterValue = obj5614_counterTargetValue;
	}

	if (oldValue != obj5614_counterValue) {
		$("#obj5614").trigger('SCEventCounterValueChange');
		$("#obj5614").trigger('SCEventCounterIncrease');
		if (obj5614_counterValue == obj5614_counterTargetValue)
			$("#obj5614").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5992_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj5623 
incrementCounter_5998();
function incrementCounter_5998() {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = obj5992_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5623_counterValue;
	obj5623_counterValue = obj5623_counterValue + 1;
	if (! obj5623_counterCanExceedTargetValue && obj5623_counterValue > obj5623_counterTargetValue) {
		obj5623_counterValue = obj5623_counterTargetValue;
	}

	if (oldValue != obj5623_counterValue) {
		$("#obj5623").trigger('SCEventCounterValueChange');
		$("#obj5623").trigger('SCEventCounterIncrease');
		if (obj5623_counterValue == obj5623_counterTargetValue)
			$("#obj5623").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5992_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj5992_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5992_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5992").trigger("obj5992_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5992) {
				console.warn("de-queueing event obj5992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5992_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj5992 
decrementCounter_6092();
function decrementCounter_6092() {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = obj5992_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5992_counterValue;
	obj5992_counterValue = obj5992_counterValue - 1;
	if (obj5992_counterValue < 0) {
		obj5992_counterValue = 0;
	}

	if (oldValue != obj5992_counterValue) {
		$("#obj5992").trigger('SCEventCounterValueChange');
		$("#obj5992").trigger('SCEventCounterDecrease');
		if (obj5992_counterValue == obj5992_counterTargetValue)
			$("#obj5992").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5992_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5992_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj5992_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5992_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5992").trigger("obj5992_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5992) {
				console.warn("de-queueing event obj5992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5992_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj6057_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6057_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6059();
function playAudioFile_6059() {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6059")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6059");
			$("#obj_audio_playSoundFile6059").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, false);
		} else {
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj6057_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
















//	action: wait
wait_6060();
function wait_6060() {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 1000);
}


























};
obj6057_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5849 
hide_6061();
function hide_6061() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6061(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6062();
function hide_6062() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6062(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6063();
function hide_6063() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6063(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6064();
function hide_6064() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6064(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6065();
function hide_6065() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6065(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6066();
function hide_6066() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6066(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6067();
function hide_6067() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6067(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6068();
function hide_6068() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6068(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6057_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj5871 
hide_6069();
function hide_6069() {
	var selector = "#obj5871";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6069(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5869 
hide_6070();
function hide_6070() {
	var selector = "#obj5869";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6070(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5867 
hide_6071();
function hide_6071() {
	var selector = "#obj5867";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6071(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5865 
hide_6072();
function hide_6072() {
	var selector = "#obj5865";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6072(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5921 
hide_6073();
function hide_6073() {
	var selector = "#obj5921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6073(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6057_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	


//	action: show 
//	selector: #obj5903
(function(){
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5903";
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
					window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5901
(function(){
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5901";
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
					window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5899
(function(){
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5899";
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
					window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5897
(function(){
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5897";
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
					window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5929
(function(){
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5929";
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
					window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6057_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	
































//	action: decrement counter
//	target: obj6057 
decrementCounter_6079();
function decrementCounter_6079() {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6057_counterValue;
	obj6057_counterValue = obj6057_counterValue - 1;
	if (obj6057_counterValue < 0) {
		obj6057_counterValue = 0;
	}

	if (oldValue != obj6057_counterValue) {
		$("#obj6057").trigger('SCEventCounterValueChange');
		$("#obj6057").trigger('SCEventCounterDecrease');
		if (obj6057_counterValue == obj6057_counterTargetValue)
			$("#obj6057").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup7();
} }, 1);
}










};
obj6057_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	

//	action: hide
//	selector: obj#obj6080 
hide_6088();
function hide_6088() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup8();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6088(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup8();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6057_SCEventCounterReachedTargetValue_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6351();
function incrementCounter_6351() {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = obj6057_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6057_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6057_SCEventCounterReachedTargetValue_actionGroup9();
} }, 1);
}











};
obj6057_SCEventCounterReachedTargetValue_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6057").trigger("obj6057_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6057) {
				console.warn("de-queueing event obj6057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex = 9;
	











































};
obj6123_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6123_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6126();
function playAudioFile_6126() {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6126")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6126");
			$("#obj_audio_playSoundFile6126").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, false);
		} else {
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj6123_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
















//	action: wait
wait_6127();
function wait_6127() {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 1000);
}


























};
obj6123_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5849 
hide_6128();
function hide_6128() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6128(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6129();
function hide_6129() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6129(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6130();
function hide_6130() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6130(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6131();
function hide_6131() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6131(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6132();
function hide_6132() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6132(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6133();
function hide_6133() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6133(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6134();
function hide_6134() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6134(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6135();
function hide_6135() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6135(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6123_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj5903 
hide_6136();
function hide_6136() {
	var selector = "#obj5903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6136(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5901 
hide_6137();
function hide_6137() {
	var selector = "#obj5901";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6137(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5899 
hide_6138();
function hide_6138() {
	var selector = "#obj5899";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6138(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5897 
hide_6139();
function hide_6139() {
	var selector = "#obj5897";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6139(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5929 
hide_6140();
function hide_6140() {
	var selector = "#obj5929";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6140(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6123_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	


//	action: show 
//	selector: #obj5911
(function(){
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5911";
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
					window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5909
(function(){
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5909";
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
					window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5907
(function(){
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5907";
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
					window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5905
(function(){
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5905";
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
					window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5931
(function(){
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5931";
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
					window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6123_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	
































//	action: decrement counter
//	target: obj6123 
decrementCounter_6146();
function decrementCounter_6146() {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6123_counterValue;
	obj6123_counterValue = obj6123_counterValue - 1;
	if (obj6123_counterValue < 0) {
		obj6123_counterValue = 0;
	}

	if (oldValue != obj6123_counterValue) {
		$("#obj6123").trigger('SCEventCounterValueChange');
		$("#obj6123").trigger('SCEventCounterDecrease');
		if (obj6123_counterValue == obj6123_counterTargetValue)
			$("#obj6123").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup7();
} }, 1);
}










};
obj6123_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	

//	action: hide
//	selector: obj#obj6080 
hide_6147();
function hide_6147() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup8();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6147(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup8();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6123_SCEventCounterReachedTargetValue_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6353();
function incrementCounter_6353() {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = obj6123_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6123_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6123_SCEventCounterReachedTargetValue_actionGroup9();
} }, 1);
}











};
obj6123_SCEventCounterReachedTargetValue_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6123").trigger("obj6123_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6123) {
				console.warn("de-queueing event obj6123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex = 9;
	











































};
obj6179_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6179_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6182();
function playAudioFile_6182() {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6182")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6182");
			$("#obj_audio_playSoundFile6182").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, false);
		} else {
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj6179_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
















//	action: wait
wait_6183();
function wait_6183() {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 1000);
}


























};
obj6179_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5849 
hide_6184();
function hide_6184() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6184(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6185();
function hide_6185() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6185(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6186();
function hide_6186() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6186(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6187();
function hide_6187() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6187(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6188();
function hide_6188() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6188(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6189();
function hide_6189() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6189(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6190();
function hide_6190() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6190(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6191();
function hide_6191() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6191(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6179_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj5903 
hide_6192();
function hide_6192() {
	var selector = "#obj5903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6192(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5901 
hide_6193();
function hide_6193() {
	var selector = "#obj5901";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6193(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5899 
hide_6194();
function hide_6194() {
	var selector = "#obj5899";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6194(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5897 
hide_6195();
function hide_6195() {
	var selector = "#obj5897";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6195(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5929 
hide_6196();
function hide_6196() {
	var selector = "#obj5929";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6196(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6179_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	


//	action: show 
//	selector: #obj5911
(function(){
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5911";
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
					window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5909
(function(){
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5909";
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
					window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5907
(function(){
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5907";
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
					window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5905
(function(){
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5905";
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
					window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5931
(function(){
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5931";
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
					window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6179_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	
































//	action: decrement counter
//	target: obj6179 
decrementCounter_6202();
function decrementCounter_6202() {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6179_counterValue;
	obj6179_counterValue = obj6179_counterValue - 1;
	if (obj6179_counterValue < 0) {
		obj6179_counterValue = 0;
	}

	if (oldValue != obj6179_counterValue) {
		$("#obj6179").trigger('SCEventCounterValueChange');
		$("#obj6179").trigger('SCEventCounterDecrease');
		if (obj6179_counterValue == obj6179_counterTargetValue)
			$("#obj6179").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup7();
} }, 1);
}










};
obj6179_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	

//	action: hide
//	selector: obj#obj6080 
hide_6203();
function hide_6203() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup8();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6203(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup8();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6179_SCEventCounterReachedTargetValue_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6307();
function incrementCounter_6307() {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup9();
} }, 1);
}











};
obj6179_SCEventCounterReachedTargetValue_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 9;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6352();
function incrementCounter_6352() {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = obj6179_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6179_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6179_SCEventCounterReachedTargetValue_actionGroup10();
} }, 1);
}











};
obj6179_SCEventCounterReachedTargetValue_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6179").trigger("obj6179_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6179) {
				console.warn("de-queueing event obj6179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex = 10;
	











































};
obj6204_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6204_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6207();
function playAudioFile_6207() {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6207")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6207");
			$("#obj_audio_playSoundFile6207").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, false);
		} else {
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj6204_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
















//	action: wait
wait_6208();
function wait_6208() {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 1000);
}


























};
obj6204_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5849 
hide_6209();
function hide_6209() {
	var selector = "#obj5849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6209(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5853 
hide_6210();
function hide_6210() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6210(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6211();
function hide_6211() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6211(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6212();
function hide_6212() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6212(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6213();
function hide_6213() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6213(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6214();
function hide_6214() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6214(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6215();
function hide_6215() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6215(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6216();
function hide_6216() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6216(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6204_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj5911 
hide_6217();
function hide_6217() {
	var selector = "#obj5911";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6217(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5909 
hide_6218();
function hide_6218() {
	var selector = "#obj5909";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6218(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5907 
hide_6219();
function hide_6219() {
	var selector = "#obj5907";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6219(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5905 
hide_6220();
function hide_6220() {
	var selector = "#obj5905";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6220(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5931 
hide_6221();
function hide_6221() {
	var selector = "#obj5931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6221(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6204_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	


//	action: show 
//	selector: #obj5913
(function(){
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5913";
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
					window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5919
(function(){
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5919";
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
					window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5917
(function(){
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5917";
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
					window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5915
(function(){
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5915";
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
					window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5933
(function(){
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5933";
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
					window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6204_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	
































//	action: decrement counter
//	target: obj6204 
decrementCounter_6227();
function decrementCounter_6227() {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6204_counterValue;
	obj6204_counterValue = obj6204_counterValue - 1;
	if (obj6204_counterValue < 0) {
		obj6204_counterValue = 0;
	}

	if (oldValue != obj6204_counterValue) {
		$("#obj6204").trigger('SCEventCounterValueChange');
		$("#obj6204").trigger('SCEventCounterDecrease');
		if (obj6204_counterValue == obj6204_counterTargetValue)
			$("#obj6204").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup7();
} }, 1);
}










};
obj6204_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	

//	action: hide
//	selector: obj#obj6080 
hide_6228();
function hide_6228() {
	var selector = "#obj6080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup8();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6228(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup8();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6204_SCEventCounterReachedTargetValue_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6308();
function incrementCounter_6308() {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = obj6204_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6204_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6204_SCEventCounterReachedTargetValue_actionGroup9();
} }, 1);
}











};
obj6204_SCEventCounterReachedTargetValue_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6204").trigger("obj6204_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6204) {
				console.warn("de-queueing event obj6204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex = 9;
	











































};
obj6264_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6264").trigger("obj6264_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6264) {
				console.warn("de-queueing event obj6264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6080
(function(){
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj6080";
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
					window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6264_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6264").trigger("obj6264_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6264) {
				console.warn("de-queueing event obj6264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6267();
function playAudioFile_6267() {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6267")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6267");
			$("#obj_audio_playSoundFile6267").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, false);
		} else {
			window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj6264_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6264").trigger("obj6264_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6264) {
				console.warn("de-queueing event obj6264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
















//	action: wait
wait_6268();
function wait_6268() {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 1000);
}


























};
obj6264_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6264").trigger("obj6264_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6264) {
				console.warn("de-queueing event obj6264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5853 
hide_6270();
function hide_6270() {
	var selector = "#obj5853";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6270(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5851 
hide_6271();
function hide_6271() {
	var selector = "#obj5851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6271(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5855 
hide_6272();
function hide_6272() {
	var selector = "#obj5855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6272(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5859 
hide_6273();
function hide_6273() {
	var selector = "#obj5859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6273(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5857 
hide_6274();
function hide_6274() {
	var selector = "#obj5857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6274(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5863 
hide_6275();
function hide_6275() {
	var selector = "#obj5863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6275(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5861 
hide_6276();
function hide_6276() {
	var selector = "#obj5861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6276(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6264_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6264").trigger("obj6264_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6264) {
				console.warn("de-queueing event obj6264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	
































//	action: decrement counter
//	target: obj6264 
decrementCounter_6289();
function decrementCounter_6289() {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6264_counterValue;
	obj6264_counterValue = obj6264_counterValue - 1;
	if (obj6264_counterValue < 0) {
		obj6264_counterValue = 0;
	}

	if (oldValue != obj6264_counterValue) {
		$("#obj6264").trigger('SCEventCounterValueChange');
		$("#obj6264").trigger('SCEventCounterDecrease');
		if (obj6264_counterValue == obj6264_counterTargetValue)
			$("#obj6264").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup5();
} }, 1);
}










};
obj6264_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6264").trigger("obj6264_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6264) {
				console.warn("de-queueing event obj6264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj6292 
incrementCounter_6309();
function incrementCounter_6309() {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = obj6264_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = obj6292_counterValue + 1;
	if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		$("#obj6292").trigger('SCEventCounterIncrease');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6264_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6264_SCEventCounterReachedTargetValue_actionGroup6();
} }, 1);
}











};
obj6264_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6264").trigger("obj6264_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6264) {
				console.warn("de-queueing event obj6264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	











































};
obj6290_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6290_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6290").trigger("obj6290_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6290) {
				console.warn("de-queueing event obj6290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6290_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_6360();
function wait_6360() {
	window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount = obj6290_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6290_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1500);
}


























};
obj6290_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6290_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6290").trigger("obj6290_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6290) {
				console.warn("de-queueing event obj6290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6290_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_6362();
function goToPage_6362() {
	window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount = obj6290_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor940")[0].click();
	window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6290_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6290_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj6290_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6290_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6290").trigger("obj6290_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6290) {
				console.warn("de-queueing event obj6290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6290_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj6292_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6292_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6292").trigger("obj6292_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6292) {
				console.warn("de-queueing event obj6292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6292_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_6354();
function wait_6354() {
	window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount = obj6292_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6292_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 2000);
}


























};
obj6292_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6292_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6292").trigger("obj6292_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6292) {
				console.warn("de-queueing event obj6292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6292_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_7814();
function goToPage_7814() {
	window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount = obj6292_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor941")[0].click();
	window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6292_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6292_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj6292_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6292_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6292").trigger("obj6292_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6292) {
				console.warn("de-queueing event obj6292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6292_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj6310_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6310").trigger("obj6310_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6310) {
				console.warn("de-queueing event obj6310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5917 
hide_6317();
function hide_6317() {
	var selector = "#obj5917";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6317(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5919 
hide_6318();
function hide_6318() {
	var selector = "#obj5919";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6318(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5915 
hide_6319();
function hide_6319() {
	var selector = "#obj5915";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6319(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5913 
hide_6320();
function hide_6320() {
	var selector = "#obj5913";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6320(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5933 
hide_6326();
function hide_6326() {
	var selector = "#obj5933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6326(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}




























//	action: Switch Text
switchText_6316();
function switchText_6316() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p>0/5</p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5551_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5551_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5551").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5551_content");
			setTimeout(function () {
				window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5551 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj6310_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6310").trigger("obj6310_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6310) {
				console.warn("de-queueing event obj6310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj5841
(function(){
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5841";
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
					window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5843
(function(){
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5843";
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
					window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5845
(function(){
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5845";
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
					window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5847
(function(){
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5847";
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
					window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5839
(function(){
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5839";
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
					window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6310_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6310").trigger("obj6310_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6310) {
				console.warn("de-queueing event obj6310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
































//	action: decrement counter
//	target: obj6310 
decrementCounter_6315();
function decrementCounter_6315() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6310_counterValue;
	obj6310_counterValue = obj6310_counterValue - 1;
	if (obj6310_counterValue < 0) {
		obj6310_counterValue = 0;
	}

	if (oldValue != obj6310_counterValue) {
		$("#obj6310").trigger('SCEventCounterValueChange');
		$("#obj6310").trigger('SCEventCounterDecrease');
		if (obj6310_counterValue == obj6310_counterTargetValue)
			$("#obj6310").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}










};
obj6310_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6310").trigger("obj6310_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6310) {
				console.warn("de-queueing event obj6310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

































//	action: set counter value
//	target: obj5620 
setCounterValue_6327();
function setCounterValue_6327() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5620_counterValue;
	obj5620_counterValue = 0;
	if (obj5620_counterValue < 0) {
		obj5620_counterValue = 0;
	} else if (! obj5620_counterCanExceedTargetValue && obj5620_counterValue > obj5620_counterTargetValue) {
		obj5620_counterValue = obj5620_counterTargetValue;
	}

	if (oldValue != obj5620_counterValue) {
		$("#obj5620").trigger('SCEventCounterValueChange');
		if (obj5620_counterValue == obj5620_counterTargetValue)
			$("#obj5620").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj5611 
setCounterValue_6328();
function setCounterValue_6328() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5611_counterValue;
	obj5611_counterValue = 0;
	if (obj5611_counterValue < 0) {
		obj5611_counterValue = 0;
	} else if (! obj5611_counterCanExceedTargetValue && obj5611_counterValue > obj5611_counterTargetValue) {
		obj5611_counterValue = obj5611_counterTargetValue;
	}

	if (oldValue != obj5611_counterValue) {
		$("#obj5611").trigger('SCEventCounterValueChange');
		if (obj5611_counterValue == obj5611_counterTargetValue)
			$("#obj5611").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj5617 
setCounterValue_6329();
function setCounterValue_6329() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5617_counterValue;
	obj5617_counterValue = 0;
	if (obj5617_counterValue < 0) {
		obj5617_counterValue = 0;
	} else if (! obj5617_counterCanExceedTargetValue && obj5617_counterValue > obj5617_counterTargetValue) {
		obj5617_counterValue = obj5617_counterTargetValue;
	}

	if (oldValue != obj5617_counterValue) {
		$("#obj5617").trigger('SCEventCounterValueChange');
		if (obj5617_counterValue == obj5617_counterTargetValue)
			$("#obj5617").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj5614 
setCounterValue_6330();
function setCounterValue_6330() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5614_counterValue;
	obj5614_counterValue = 0;
	if (obj5614_counterValue < 0) {
		obj5614_counterValue = 0;
	} else if (! obj5614_counterCanExceedTargetValue && obj5614_counterValue > obj5614_counterTargetValue) {
		obj5614_counterValue = obj5614_counterTargetValue;
	}

	if (oldValue != obj5614_counterValue) {
		$("#obj5614").trigger('SCEventCounterValueChange');
		if (obj5614_counterValue == obj5614_counterTargetValue)
			$("#obj5614").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj5623 
setCounterValue_6331();
function setCounterValue_6331() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5623_counterValue;
	obj5623_counterValue = 0;
	if (obj5623_counterValue < 0) {
		obj5623_counterValue = 0;
	} else if (! obj5623_counterCanExceedTargetValue && obj5623_counterValue > obj5623_counterTargetValue) {
		obj5623_counterValue = obj5623_counterTargetValue;
	}

	if (oldValue != obj5623_counterValue) {
		$("#obj5623").trigger('SCEventCounterValueChange');
		if (obj5623_counterValue == obj5623_counterTargetValue)
			$("#obj5623").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj5935 
setCounterValue_6332();
function setCounterValue_6332() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5935_counterValue;
	obj5935_counterValue = 0;
	if (obj5935_counterValue < 0) {
		obj5935_counterValue = 0;
	} else if (! obj5935_counterCanExceedTargetValue && obj5935_counterValue > obj5935_counterTargetValue) {
		obj5935_counterValue = obj5935_counterTargetValue;
	}

	if (oldValue != obj5935_counterValue) {
		$("#obj5935").trigger('SCEventCounterValueChange');
		if (obj5935_counterValue == obj5935_counterTargetValue)
			$("#obj5935").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj5992 
setCounterValue_6333();
function setCounterValue_6333() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj5992_counterValue;
	obj5992_counterValue = 0;
	if (obj5992_counterValue < 0) {
		obj5992_counterValue = 0;
	} else if (! obj5992_counterCanExceedTargetValue && obj5992_counterValue > obj5992_counterTargetValue) {
		obj5992_counterValue = obj5992_counterTargetValue;
	}

	if (oldValue != obj5992_counterValue) {
		$("#obj5992").trigger('SCEventCounterValueChange');
		if (obj5992_counterValue == obj5992_counterTargetValue)
			$("#obj5992").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj6057 
setCounterValue_6334();
function setCounterValue_6334() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6057_counterValue;
	obj6057_counterValue = 0;
	if (obj6057_counterValue < 0) {
		obj6057_counterValue = 0;
	} else if (! obj6057_counterCanExceedTargetValue && obj6057_counterValue > obj6057_counterTargetValue) {
		obj6057_counterValue = obj6057_counterTargetValue;
	}

	if (oldValue != obj6057_counterValue) {
		$("#obj6057").trigger('SCEventCounterValueChange');
		if (obj6057_counterValue == obj6057_counterTargetValue)
			$("#obj6057").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj6123 
setCounterValue_6335();
function setCounterValue_6335() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6123_counterValue;
	obj6123_counterValue = 0;
	if (obj6123_counterValue < 0) {
		obj6123_counterValue = 0;
	} else if (! obj6123_counterCanExceedTargetValue && obj6123_counterValue > obj6123_counterTargetValue) {
		obj6123_counterValue = obj6123_counterTargetValue;
	}

	if (oldValue != obj6123_counterValue) {
		$("#obj6123").trigger('SCEventCounterValueChange');
		if (obj6123_counterValue == obj6123_counterTargetValue)
			$("#obj6123").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj6179 
setCounterValue_6336();
function setCounterValue_6336() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6179_counterValue;
	obj6179_counterValue = 0;
	if (obj6179_counterValue < 0) {
		obj6179_counterValue = 0;
	} else if (! obj6179_counterCanExceedTargetValue && obj6179_counterValue > obj6179_counterTargetValue) {
		obj6179_counterValue = obj6179_counterTargetValue;
	}

	if (oldValue != obj6179_counterValue) {
		$("#obj6179").trigger('SCEventCounterValueChange');
		if (obj6179_counterValue == obj6179_counterTargetValue)
			$("#obj6179").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj6204 
setCounterValue_6337();
function setCounterValue_6337() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6204_counterValue;
	obj6204_counterValue = 0;
	if (obj6204_counterValue < 0) {
		obj6204_counterValue = 0;
	} else if (! obj6204_counterCanExceedTargetValue && obj6204_counterValue > obj6204_counterTargetValue) {
		obj6204_counterValue = obj6204_counterTargetValue;
	}

	if (oldValue != obj6204_counterValue) {
		$("#obj6204").trigger('SCEventCounterValueChange');
		if (obj6204_counterValue == obj6204_counterTargetValue)
			$("#obj6204").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj6290 
setCounterValue_6338();
function setCounterValue_6338() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6290_counterValue;
	obj6290_counterValue = 0;
	if (obj6290_counterValue < 0) {
		obj6290_counterValue = 0;
	} else if (! obj6290_counterCanExceedTargetValue && obj6290_counterValue > obj6290_counterTargetValue) {
		obj6290_counterValue = obj6290_counterTargetValue;
	}

	if (oldValue != obj6290_counterValue) {
		$("#obj6290").trigger('SCEventCounterValueChange');
		if (obj6290_counterValue == obj6290_counterTargetValue)
			$("#obj6290").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj6292 
setCounterValue_6339();
function setCounterValue_6339() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6292_counterValue;
	obj6292_counterValue = 0;
	if (obj6292_counterValue < 0) {
		obj6292_counterValue = 0;
	} else if (! obj6292_counterCanExceedTargetValue && obj6292_counterValue > obj6292_counterTargetValue) {
		obj6292_counterValue = obj6292_counterTargetValue;
	}

	if (oldValue != obj6292_counterValue) {
		$("#obj6292").trigger('SCEventCounterValueChange');
		if (obj6292_counterValue == obj6292_counterTargetValue)
			$("#obj6292").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj6264 
setCounterValue_6340();
function setCounterValue_6340() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6264_counterValue;
	obj6264_counterValue = 0;
	if (obj6264_counterValue < 0) {
		obj6264_counterValue = 0;
	} else if (! obj6264_counterCanExceedTargetValue && obj6264_counterValue > obj6264_counterTargetValue) {
		obj6264_counterValue = obj6264_counterTargetValue;
	}

	if (oldValue != obj6264_counterValue) {
		$("#obj6264").trigger('SCEventCounterValueChange');
		if (obj6264_counterValue == obj6264_counterTargetValue)
			$("#obj6264").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}
//	action: set counter value
//	target: obj6310 
setCounterValue_6341();
function setCounterValue_6341() {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = obj6310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6310_counterValue;
	obj6310_counterValue = 0;
	if (obj6310_counterValue < 0) {
		obj6310_counterValue = 0;
	} else if (! obj6310_counterCanExceedTargetValue && obj6310_counterValue > obj6310_counterTargetValue) {
		obj6310_counterValue = obj6310_counterTargetValue;
	}

	if (oldValue != obj6310_counterValue) {
		$("#obj6310").trigger('SCEventCounterValueChange');
		if (obj6310_counterValue == obj6310_counterTargetValue)
			$("#obj6310").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6310_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}









};
obj6310_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6310").trigger("obj6310_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6310) {
				console.warn("de-queueing event obj6310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	











































};
obj7455_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7455_onTap_activeActionGroupIndex = -1;
		$("#obj7455").trigger("obj7455_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7455) {
				console.warn("de-queueing event obj7455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7455_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7457();
function goToPage_7457() {
	window.obj7455_onTap_runningActionsCount = obj7455_onTap_runningActionsCount + 1;

	$("#anchor942")[0].click();
	window.obj7455_onTap_runningActionsCount = window.obj7455_onTap_runningActionsCount - 1;

if (window.obj7455_onTap_runningActionsCount < 0) {
	window.obj7455_onTap_runningActionsCount = 0;
} else if (window.obj7455_onTap_runningActionsCount == 0) {
	obj7455_onTap_actionGroup1();
}
}










































};
obj7455_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7455_onTap_activeActionGroupIndex = -1;
		$("#obj7455").trigger("obj7455_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7455) {
				console.warn("de-queueing event obj7455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7455_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		







































































/*
 *
 *   obj5611: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj5611").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5611_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5611_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj5611_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5611_SCEventCounterReachedTargetValue_loopCount = 0;
obj5611_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj5614: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj5614").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5614_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5614_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj5614_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5614_SCEventCounterReachedTargetValue_loopCount = 0;
obj5614_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj5617: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj5617").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5617_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5617_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj5617_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5617_SCEventCounterReachedTargetValue_loopCount = 0;
obj5617_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj5620: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj5620").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5620_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5620_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj5620_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5620_SCEventCounterReachedTargetValue_loopCount = 0;
obj5620_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj5623: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj5623").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5623_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5623_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj5623_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5623_SCEventCounterReachedTargetValue_loopCount = 0;
obj5623_SCEventCounterReachedTargetValue_actionGroup0();
});








































































































/*
 *
 *   obj5841: Event Touch Down
 *
 */

$("#obj5841").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5841_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5841_onTap is still running");
	return;
}
var obj5841_onTap_runningActionsCount = 0;
var obj5841_onTap_loopCount = 0;
obj5841_onTap_actionGroup0();
});


















/*
 *
 *   obj5843: Event Touch Down
 *
 */

$("#obj5843").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5843_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5843_onTap is still running");
	return;
}
var obj5843_onTap_runningActionsCount = 0;
var obj5843_onTap_loopCount = 0;
obj5843_onTap_actionGroup0();
});


















/*
 *
 *   obj5845: Event Touch Down
 *
 */

$("#obj5845").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5845_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5845_onTap is still running");
	return;
}
var obj5845_onTap_runningActionsCount = 0;
var obj5845_onTap_loopCount = 0;
obj5845_onTap_actionGroup0();
});


















/*
 *
 *   obj5847: Event Touch Down
 *
 */

$("#obj5847").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5847_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5847_onTap is still running");
	return;
}
var obj5847_onTap_runningActionsCount = 0;
var obj5847_onTap_loopCount = 0;
obj5847_onTap_actionGroup0();
});










































































































































































/*
 *
 *   obj5871: Event Touch Down
 *
 */

$("#obj5871").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5871_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5871_onTap is still running");
	return;
}
var obj5871_onTap_runningActionsCount = 0;
var obj5871_onTap_loopCount = 0;
obj5871_onTap_actionGroup0();
});


















/*
 *
 *   obj5869: Event Touch Down
 *
 */

$("#obj5869").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5869_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5869_onTap is still running");
	return;
}
var obj5869_onTap_runningActionsCount = 0;
var obj5869_onTap_loopCount = 0;
obj5869_onTap_actionGroup0();
});


















/*
 *
 *   obj5867: Event Touch Down
 *
 */

$("#obj5867").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5867_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5867_onTap is still running");
	return;
}
var obj5867_onTap_runningActionsCount = 0;
var obj5867_onTap_loopCount = 0;
obj5867_onTap_actionGroup0();
});


















/*
 *
 *   obj5865: Event Touch Down
 *
 */

$("#obj5865").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5865_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5865_onTap is still running");
	return;
}
var obj5865_onTap_runningActionsCount = 0;
var obj5865_onTap_loopCount = 0;
obj5865_onTap_actionGroup0();
});


















/*
 *
 *   obj5903: Event Touch Down
 *
 */

$("#obj5903").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5903_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5903_onTap is still running");
	return;
}
var obj5903_onTap_runningActionsCount = 0;
var obj5903_onTap_loopCount = 0;
obj5903_onTap_actionGroup0();
});


















/*
 *
 *   obj5901: Event Touch Down
 *
 */

$("#obj5901").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5901_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5901_onTap is still running");
	return;
}
var obj5901_onTap_runningActionsCount = 0;
var obj5901_onTap_loopCount = 0;
obj5901_onTap_actionGroup0();
});


















/*
 *
 *   obj5899: Event Touch Down
 *
 */

$("#obj5899").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5899_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5899_onTap is still running");
	return;
}
var obj5899_onTap_runningActionsCount = 0;
var obj5899_onTap_loopCount = 0;
obj5899_onTap_actionGroup0();
});


















/*
 *
 *   obj5897: Event Touch Down
 *
 */

$("#obj5897").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5897_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5897_onTap is still running");
	return;
}
var obj5897_onTap_runningActionsCount = 0;
var obj5897_onTap_loopCount = 0;
obj5897_onTap_actionGroup0();
});


















/*
 *
 *   obj5911: Event Touch Down
 *
 */

$("#obj5911").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5911_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5911_onTap is still running");
	return;
}
var obj5911_onTap_runningActionsCount = 0;
var obj5911_onTap_loopCount = 0;
obj5911_onTap_actionGroup0();
});


















/*
 *
 *   obj5909: Event Touch Down
 *
 */

$("#obj5909").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5909_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5909_onTap is still running");
	return;
}
var obj5909_onTap_runningActionsCount = 0;
var obj5909_onTap_loopCount = 0;
obj5909_onTap_actionGroup0();
});


















/*
 *
 *   obj5907: Event Touch Down
 *
 */

$("#obj5907").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5907_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5907_onTap is still running");
	return;
}
var obj5907_onTap_runningActionsCount = 0;
var obj5907_onTap_loopCount = 0;
obj5907_onTap_actionGroup0();
});


















/*
 *
 *   obj5905: Event Touch Down
 *
 */

$("#obj5905").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5905_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5905_onTap is still running");
	return;
}
var obj5905_onTap_runningActionsCount = 0;
var obj5905_onTap_loopCount = 0;
obj5905_onTap_actionGroup0();
});


















/*
 *
 *   obj5919: Event Touch Down
 *
 */

$("#obj5919").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5919_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5919_onTap is still running");
	return;
}
var obj5919_onTap_runningActionsCount = 0;
var obj5919_onTap_loopCount = 0;
obj5919_onTap_actionGroup0();
});


















/*
 *
 *   obj5917: Event Touch Down
 *
 */

$("#obj5917").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5917_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5917_onTap is still running");
	return;
}
var obj5917_onTap_runningActionsCount = 0;
var obj5917_onTap_loopCount = 0;
obj5917_onTap_actionGroup0();
});


















/*
 *
 *   obj5915: Event Touch Down
 *
 */

$("#obj5915").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5915_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5915_onTap is still running");
	return;
}
var obj5915_onTap_runningActionsCount = 0;
var obj5915_onTap_loopCount = 0;
obj5915_onTap_actionGroup0();
});


















/*
 *
 *   obj5913: Event Touch Down
 *
 */

$("#obj5913").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5913_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5913_onTap is still running");
	return;
}
var obj5913_onTap_runningActionsCount = 0;
var obj5913_onTap_loopCount = 0;
obj5913_onTap_actionGroup0();
});







































































































/*
 *
 *   obj5935: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj5935").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5935_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5935_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj5935_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5935_SCEventCounterReachedTargetValue_loopCount = 0;
obj5935_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj5992: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj5992").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5992_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5992_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj5992_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5992_SCEventCounterReachedTargetValue_loopCount = 0;
obj5992_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj6057: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj6057").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6057_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6057_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj6057_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6057_SCEventCounterReachedTargetValue_loopCount = 0;
obj6057_SCEventCounterReachedTargetValue_actionGroup0();
});





































/*
 *
 *   obj6123: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj6123").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6123_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6123_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj6123_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6123_SCEventCounterReachedTargetValue_loopCount = 0;
obj6123_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj6179: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj6179").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6179_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6179_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj6179_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6179_SCEventCounterReachedTargetValue_loopCount = 0;
obj6179_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj6204: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj6204").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6204_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6204_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj6204_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6204_SCEventCounterReachedTargetValue_loopCount = 0;
obj6204_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj6264: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj6264").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6264_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6264_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj6264_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6264_SCEventCounterReachedTargetValue_loopCount = 0;
obj6264_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj6290: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj6290").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6290_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6290_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj6290_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6290_SCEventCounterReachedTargetValue_loopCount = 0;
obj6290_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj6292: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj6292").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6292_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6292_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj6292_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6292_SCEventCounterReachedTargetValue_loopCount = 0;
obj6292_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj6310: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj6310").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6310_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6310_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj6310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6310_SCEventCounterReachedTargetValue_loopCount = 0;
obj6310_SCEventCounterReachedTargetValue_actionGroup0();
});















































/*
 *
 *   obj7455: Event Touch Down
 *
 */

$("#obj7455").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7455_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7455_onTap is still running");
	return;
}
var obj7455_onTap_runningActionsCount = 0;
var obj7455_onTap_loopCount = 0;
obj7455_onTap_actionGroup0();
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
	
$("#obj7468").trigger('SCEventShow');
$("#obj5549").trigger('SCEventShow');
$("#obj5551").trigger('SCEventShow');
$("#obj5831").trigger('SCEventShow');
$("#obj5833").trigger('SCEventShow');
$("#obj5835").trigger('SCEventShow');
$("#obj5837").trigger('SCEventShow');
$("#obj5839").trigger('SCEventShow');
$("#obj5841").trigger('SCEventShow');
$("#obj5843").trigger('SCEventShow');
$("#obj5845").trigger('SCEventShow');
$("#obj5847").trigger('SCEventShow');
$("#obj7460").trigger('SCEventShow');
$("#obj7458").trigger('SCEventShow');
$("#obj7455").trigger('SCEventShow');
$("#obj7453").trigger('SCEventShow');
$("#obj7451").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});