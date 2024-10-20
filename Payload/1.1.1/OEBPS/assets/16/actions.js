pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 12947;
pubcoder.page.title = pubcoder.page.title || "16";
pubcoder.page.number = pubcoder.page.number || 16;
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
var obj12957_onTap_activeActionGroupIndex = -1;
var obj12957_onTap_runningActionsCount = 0;
var obj12957_onTap_loopCount = 0;
var obj12967_onTap_activeActionGroupIndex = -1;
var obj12967_onTap_runningActionsCount = 0;
var obj12967_onTap_loopCount = 0;
var obj12974_onTap_activeActionGroupIndex = -1;
var obj12974_onTap_runningActionsCount = 0;
var obj12974_onTap_loopCount = 0;
var obj13012_onTap_activeActionGroupIndex = -1;
var obj13012_onTap_runningActionsCount = 0;
var obj13012_onTap_loopCount = 0;
var obj13024_onTap_activeActionGroupIndex = -1;
var obj13024_onTap_runningActionsCount = 0;
var obj13024_onTap_loopCount = 0;
var obj13029_onTap_activeActionGroupIndex = -1;
var obj13029_onTap_runningActionsCount = 0;
var obj13029_onTap_loopCount = 0;
var obj13034_onTap_activeActionGroupIndex = -1;
var obj13034_onTap_runningActionsCount = 0;
var obj13034_onTap_loopCount = 0;
var obj13235_onTap_activeActionGroupIndex = -1;
var obj13235_onTap_runningActionsCount = 0;
var obj13235_onTap_loopCount = 0;
var obj13039_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13039_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13039_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13047_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13047_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13047_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13050_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13050_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13050_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13053_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13053_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13053_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13056_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13056_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13056_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13059_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13059_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13059_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13066_onTap_activeActionGroupIndex = -1;
var obj13066_onTap_runningActionsCount = 0;
var obj13066_onTap_loopCount = 0;
var obj13078_onTap_activeActionGroupIndex = -1;
var obj13078_onTap_runningActionsCount = 0;
var obj13078_onTap_loopCount = 0;
var obj13090_onTap_activeActionGroupIndex = -1;
var obj13090_onTap_runningActionsCount = 0;
var obj13090_onTap_loopCount = 0;
var obj13095_onTap_activeActionGroupIndex = -1;
var obj13095_onTap_runningActionsCount = 0;
var obj13095_onTap_loopCount = 0;
var obj13100_onTap_activeActionGroupIndex = -1;
var obj13100_onTap_runningActionsCount = 0;
var obj13100_onTap_loopCount = 0;
var obj13216_onTap_activeActionGroupIndex = -1;
var obj13216_onTap_runningActionsCount = 0;
var obj13216_onTap_loopCount = 0;
var obj13105_onTap_activeActionGroupIndex = -1;
var obj13105_onTap_runningActionsCount = 0;
var obj13105_onTap_loopCount = 0;
var obj13117_onTap_activeActionGroupIndex = -1;
var obj13117_onTap_runningActionsCount = 0;
var obj13117_onTap_loopCount = 0;
var obj13129_onTap_activeActionGroupIndex = -1;
var obj13129_onTap_runningActionsCount = 0;
var obj13129_onTap_loopCount = 0;
var obj13134_onTap_activeActionGroupIndex = -1;
var obj13134_onTap_runningActionsCount = 0;
var obj13134_onTap_loopCount = 0;
var obj13139_onTap_activeActionGroupIndex = -1;
var obj13139_onTap_runningActionsCount = 0;
var obj13139_onTap_loopCount = 0;
var obj13223_onTap_activeActionGroupIndex = -1;
var obj13223_onTap_runningActionsCount = 0;
var obj13223_onTap_loopCount = 0;
var obj13144_onTap_activeActionGroupIndex = -1;
var obj13144_onTap_runningActionsCount = 0;
var obj13144_onTap_loopCount = 0;
var obj13158_onTap_activeActionGroupIndex = -1;
var obj13158_onTap_runningActionsCount = 0;
var obj13158_onTap_loopCount = 0;
var obj13170_onTap_activeActionGroupIndex = -1;
var obj13170_onTap_runningActionsCount = 0;
var obj13170_onTap_loopCount = 0;
var obj13175_onTap_activeActionGroupIndex = -1;
var obj13175_onTap_runningActionsCount = 0;
var obj13175_onTap_loopCount = 0;
var obj13180_onTap_activeActionGroupIndex = -1;
var obj13180_onTap_runningActionsCount = 0;
var obj13180_onTap_loopCount = 0;
var obj13211_onTap_activeActionGroupIndex = -1;
var obj13211_onTap_runningActionsCount = 0;
var obj13211_onTap_loopCount = 0;
var obj13185_onTap_activeActionGroupIndex = -1;
var obj13185_onTap_runningActionsCount = 0;
var obj13185_onTap_loopCount = 0;
var obj13197_onTap_activeActionGroupIndex = -1;
var obj13197_onTap_runningActionsCount = 0;
var obj13197_onTap_loopCount = 0;
var obj13288_onTap_activeActionGroupIndex = -1;
var obj13288_onTap_runningActionsCount = 0;
var obj13288_onTap_loopCount = 0;
var obj13283_onTap_activeActionGroupIndex = -1;
var obj13283_onTap_runningActionsCount = 0;
var obj13283_onTap_loopCount = 0;
var obj13278_onTap_activeActionGroupIndex = -1;
var obj13278_onTap_runningActionsCount = 0;
var obj13278_onTap_loopCount = 0;
var obj13273_onTap_activeActionGroupIndex = -1;
var obj13273_onTap_runningActionsCount = 0;
var obj13273_onTap_loopCount = 0;
var obj13268_onTap_activeActionGroupIndex = -1;
var obj13268_onTap_runningActionsCount = 0;
var obj13268_onTap_loopCount = 0;
var obj13253_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13253_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13253_SCEventCounterReachedTargetValue_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj13039_counterValue = 0;
var obj13039_counterTargetValue = 5;
var obj13039_counterCanExceedTargetValue = false;
var obj13047_counterValue = 0;
var obj13047_counterTargetValue = 1;
var obj13047_counterCanExceedTargetValue = false;
var obj13050_counterValue = 0;
var obj13050_counterTargetValue = 2;
var obj13050_counterCanExceedTargetValue = false;
var obj13053_counterValue = 0;
var obj13053_counterTargetValue = 3;
var obj13053_counterCanExceedTargetValue = false;
var obj13056_counterValue = 0;
var obj13056_counterTargetValue = 4;
var obj13056_counterCanExceedTargetValue = false;
var obj13059_counterValue = 0;
var obj13059_counterTargetValue = 1;
var obj13059_counterCanExceedTargetValue = false;
var obj13253_counterValue = 0;
var obj13253_counterTargetValue = 5;
var obj13253_counterCanExceedTargetValue = false;

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
		
obj12957_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12957_onTap_activeActionGroupIndex = -1;
		$("#obj12957").trigger("obj12957_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12957) {
				console.warn("de-queueing event obj12957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12957_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12974
(function(){
	window.obj12957_onTap_runningActionsCount = obj12957_onTap_runningActionsCount + 1;


	var selector = "#obj12974";
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
					window.obj12957_onTap_runningActionsCount = window.obj12957_onTap_runningActionsCount - 1;

if (window.obj12957_onTap_runningActionsCount < 0) {
	window.obj12957_onTap_runningActionsCount = 0;
} else if (window.obj12957_onTap_runningActionsCount == 0) {
	obj12957_onTap_actionGroup1();
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
				window.obj12957_onTap_runningActionsCount = window.obj12957_onTap_runningActionsCount - 1;

if (window.obj12957_onTap_runningActionsCount < 0) {
	window.obj12957_onTap_runningActionsCount = 0;
} else if (window.obj12957_onTap_runningActionsCount == 0) {
	obj12957_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12957_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12957_onTap_activeActionGroupIndex = -1;
		$("#obj12957").trigger("obj12957_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12957) {
				console.warn("de-queueing event obj12957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12957_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj12970
(function(){
	window.obj12957_onTap_runningActionsCount = obj12957_onTap_runningActionsCount + 1;


	var selector = "#obj12970";
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
	
		var animationType = "slideInRight";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12957_onTap_runningActionsCount = window.obj12957_onTap_runningActionsCount - 1;

if (window.obj12957_onTap_runningActionsCount < 0) {
	window.obj12957_onTap_runningActionsCount = 0;
} else if (window.obj12957_onTap_runningActionsCount == 0) {
	obj12957_onTap_actionGroup2();
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
				window.obj12957_onTap_runningActionsCount = window.obj12957_onTap_runningActionsCount - 1;

if (window.obj12957_onTap_runningActionsCount < 0) {
	window.obj12957_onTap_runningActionsCount = 0;
} else if (window.obj12957_onTap_runningActionsCount == 0) {
	obj12957_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12972
(function(){
	window.obj12957_onTap_runningActionsCount = obj12957_onTap_runningActionsCount + 1;


	var selector = "#obj12972";
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
	
		var animationType = "slideInRight";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12957_onTap_runningActionsCount = window.obj12957_onTap_runningActionsCount - 1;

if (window.obj12957_onTap_runningActionsCount < 0) {
	window.obj12957_onTap_runningActionsCount = 0;
} else if (window.obj12957_onTap_runningActionsCount == 0) {
	obj12957_onTap_actionGroup2();
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
				window.obj12957_onTap_runningActionsCount = window.obj12957_onTap_runningActionsCount - 1;

if (window.obj12957_onTap_runningActionsCount < 0) {
	window.obj12957_onTap_runningActionsCount = 0;
} else if (window.obj12957_onTap_runningActionsCount == 0) {
	obj12957_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12957_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12957_onTap_activeActionGroupIndex = -1;
		$("#obj12957").trigger("obj12957_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12957) {
				console.warn("de-queueing event obj12957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12957_onTap_activeActionGroupIndex = 2;
	











































};
obj12967_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12967_onTap_activeActionGroupIndex = -1;
		$("#obj12967").trigger("obj12967_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12967) {
				console.warn("de-queueing event obj12967." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12967").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12967_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12969();
function goToPage_12969() {
	window.obj12967_onTap_runningActionsCount = obj12967_onTap_runningActionsCount + 1;

	$("#anchor260")[0].click();
	window.obj12967_onTap_runningActionsCount = window.obj12967_onTap_runningActionsCount - 1;

if (window.obj12967_onTap_runningActionsCount < 0) {
	window.obj12967_onTap_runningActionsCount = 0;
} else if (window.obj12967_onTap_runningActionsCount == 0) {
	obj12967_onTap_actionGroup1();
}
}










































};
obj12967_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12967_onTap_activeActionGroupIndex = -1;
		$("#obj12967").trigger("obj12967_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12967) {
				console.warn("de-queueing event obj12967." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12967").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12967_onTap_activeActionGroupIndex = 1;
	











































};
obj12974_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12974_onTap_activeActionGroupIndex = -1;
		$("#obj12974").trigger("obj12974_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12974) {
				console.warn("de-queueing event obj12974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12974_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12974 
hide_12977();
function hide_12977() {
	var selector = "#obj12974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12974_onTap_runningActionsCount = obj12974_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12974_onTap_runningActionsCount = window.obj12974_onTap_runningActionsCount - 1;

if (window.obj12974_onTap_runningActionsCount < 0) {
	window.obj12974_onTap_runningActionsCount = 0;
} else if (window.obj12974_onTap_runningActionsCount == 0) {
	obj12974_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12977(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12974_onTap_runningActionsCount = window.obj12974_onTap_runningActionsCount - 1;

if (window.obj12974_onTap_runningActionsCount < 0) {
	window.obj12974_onTap_runningActionsCount = 0;
} else if (window.obj12974_onTap_runningActionsCount == 0) {
	obj12974_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12957
(function(){
	window.obj12974_onTap_runningActionsCount = obj12974_onTap_runningActionsCount + 1;


	var selector = "#obj12957";
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
					window.obj12974_onTap_runningActionsCount = window.obj12974_onTap_runningActionsCount - 1;

if (window.obj12974_onTap_runningActionsCount < 0) {
	window.obj12974_onTap_runningActionsCount = 0;
} else if (window.obj12974_onTap_runningActionsCount == 0) {
	obj12974_onTap_actionGroup1();
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
				window.obj12974_onTap_runningActionsCount = window.obj12974_onTap_runningActionsCount - 1;

if (window.obj12974_onTap_runningActionsCount < 0) {
	window.obj12974_onTap_runningActionsCount = 0;
} else if (window.obj12974_onTap_runningActionsCount == 0) {
	obj12974_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12974_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12974_onTap_activeActionGroupIndex = -1;
		$("#obj12974").trigger("obj12974_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12974) {
				console.warn("de-queueing event obj12974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12974_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12972 
hide_12978();
function hide_12978() {
	var selector = "#obj12972";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12974_onTap_runningActionsCount = obj12974_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12974_onTap_runningActionsCount = window.obj12974_onTap_runningActionsCount - 1;

if (window.obj12974_onTap_runningActionsCount < 0) {
	window.obj12974_onTap_runningActionsCount = 0;
} else if (window.obj12974_onTap_runningActionsCount == 0) {
	obj12974_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12978(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12974_onTap_runningActionsCount = window.obj12974_onTap_runningActionsCount - 1;

if (window.obj12974_onTap_runningActionsCount < 0) {
	window.obj12974_onTap_runningActionsCount = 0;
} else if (window.obj12974_onTap_runningActionsCount == 0) {
	obj12974_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12970 
hide_12979();
function hide_12979() {
	var selector = "#obj12970";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12974_onTap_runningActionsCount = obj12974_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12974_onTap_runningActionsCount = window.obj12974_onTap_runningActionsCount - 1;

if (window.obj12974_onTap_runningActionsCount < 0) {
	window.obj12974_onTap_runningActionsCount = 0;
} else if (window.obj12974_onTap_runningActionsCount == 0) {
	obj12974_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12979(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12974_onTap_runningActionsCount = window.obj12974_onTap_runningActionsCount - 1;

if (window.obj12974_onTap_runningActionsCount < 0) {
	window.obj12974_onTap_runningActionsCount = 0;
} else if (window.obj12974_onTap_runningActionsCount == 0) {
	obj12974_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12974_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12974_onTap_activeActionGroupIndex = -1;
		$("#obj12974").trigger("obj12974_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12974) {
				console.warn("de-queueing event obj12974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12974_onTap_activeActionGroupIndex = 2;
	











































};
obj13012_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13012_onTap_activeActionGroupIndex = -1;
		$("#obj13012").trigger("obj13012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13012) {
				console.warn("de-queueing event obj13012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13012_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13012 
hide_13015();
function hide_13015() {
	var selector = "#obj13012";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13015(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13024 
hide_13016();
function hide_13016() {
	var selector = "#obj13024";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13016(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13029 
hide_13017();
function hide_13017() {
	var selector = "#obj13029";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13017(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13034 
hide_13018();
function hide_13018() {
	var selector = "#obj13034";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13018(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13235 
hide_13252();
function hide_13252() {
	var selector = "#obj13235";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13252(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13076
(function(){
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;


	var selector = "#obj13076";
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
					window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
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
				window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13012_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13012_onTap_activeActionGroupIndex = -1;
		$("#obj13012").trigger("obj13012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13012) {
				console.warn("de-queueing event obj13012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13012_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13019();
function playAudioFile_13019() {
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13019")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13019");
			$("#obj_audio_playSoundFile13019").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup2();
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
				window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13012_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13012_onTap_activeActionGroupIndex = -1;
		$("#obj13012").trigger("obj13012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13012) {
				console.warn("de-queueing event obj13012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13012_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13020();
function runjs_13020() {
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;


	$("#obj13242").css("background-color", "#EA9284");
	
	setTimeout(function() {
		window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup3();
}
	}, 1);
}














};
obj13012_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13012_onTap_activeActionGroupIndex = -1;
		$("#obj13012").trigger("obj13012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13012) {
				console.warn("de-queueing event obj13012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13012_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj13156 
hide_13021();
function hide_13021() {
	var selector = "#obj13156";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13021(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13012_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13012_onTap_activeActionGroupIndex = -1;
		$("#obj13012").trigger("obj13012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13012) {
				console.warn("de-queueing event obj13012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13012_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj13059 
incrementCounter_13022();
function incrementCounter_13022() {
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;


	var oldValue = obj13059_counterValue;
	obj13059_counterValue = obj13059_counterValue + 1;
	if (! obj13059_counterCanExceedTargetValue && obj13059_counterValue > obj13059_counterTargetValue) {
		obj13059_counterValue = obj13059_counterTargetValue;
	}

	if (oldValue != obj13059_counterValue) {
		$("#obj13059").trigger('SCEventCounterValueChange');
		$("#obj13059").trigger('SCEventCounterIncrease');
		if (obj13059_counterValue == obj13059_counterTargetValue)
			$("#obj13059").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj13039 
incrementCounter_13023();
function incrementCounter_13023() {
	window.obj13012_onTap_runningActionsCount = obj13012_onTap_runningActionsCount + 1;


	var oldValue = obj13039_counterValue;
	obj13039_counterValue = obj13039_counterValue + 1;
	if (! obj13039_counterCanExceedTargetValue && obj13039_counterValue > obj13039_counterTargetValue) {
		obj13039_counterValue = obj13039_counterTargetValue;
	}

	if (oldValue != obj13039_counterValue) {
		$("#obj13039").trigger('SCEventCounterValueChange');
		$("#obj13039").trigger('SCEventCounterIncrease');
		if (obj13039_counterValue == obj13039_counterTargetValue)
			$("#obj13039").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13012_onTap_runningActionsCount = window.obj13012_onTap_runningActionsCount - 1;

if (window.obj13012_onTap_runningActionsCount < 0) {
	window.obj13012_onTap_runningActionsCount = 0;
} else if (window.obj13012_onTap_runningActionsCount == 0) {
	obj13012_onTap_actionGroup5();
} }, 1);
}











};
obj13012_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13012_onTap_activeActionGroupIndex = -1;
		$("#obj13012").trigger("obj13012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13012) {
				console.warn("de-queueing event obj13012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13012_onTap_activeActionGroupIndex = 5;
	











































};
obj13024_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13024_onTap_activeActionGroupIndex = -1;
		$("#obj13024").trigger("obj13024_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13024) {
				console.warn("de-queueing event obj13024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13024_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13026();
function playAudioFile_13026() {
	window.obj13024_onTap_runningActionsCount = obj13024_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13026")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13026");
			$("#obj_audio_playSoundFile13026").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13024_onTap_runningActionsCount = window.obj13024_onTap_runningActionsCount - 1;

if (window.obj13024_onTap_runningActionsCount < 0) {
	window.obj13024_onTap_runningActionsCount = 0;
} else if (window.obj13024_onTap_runningActionsCount == 0) {
	obj13024_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13024_onTap_runningActionsCount = window.obj13024_onTap_runningActionsCount - 1;

if (window.obj13024_onTap_runningActionsCount < 0) {
	window.obj13024_onTap_runningActionsCount = 0;
} else if (window.obj13024_onTap_runningActionsCount == 0) {
	obj13024_onTap_actionGroup1();
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
				window.obj13024_onTap_runningActionsCount = window.obj13024_onTap_runningActionsCount - 1;

if (window.obj13024_onTap_runningActionsCount < 0) {
	window.obj13024_onTap_runningActionsCount = 0;
} else if (window.obj13024_onTap_runningActionsCount == 0) {
	obj13024_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13024_onTap_runningActionsCount = window.obj13024_onTap_runningActionsCount - 1;

if (window.obj13024_onTap_runningActionsCount < 0) {
	window.obj13024_onTap_runningActionsCount = 0;
} else if (window.obj13024_onTap_runningActionsCount == 0) {
	obj13024_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13024_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13024_onTap_activeActionGroupIndex = -1;
		$("#obj13024").trigger("obj13024_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13024) {
				console.warn("de-queueing event obj13024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13024_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13000 
hide_13027();
function hide_13027() {
	var selector = "#obj13000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13024_onTap_runningActionsCount = obj13024_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13024_onTap_runningActionsCount = window.obj13024_onTap_runningActionsCount - 1;

if (window.obj13024_onTap_runningActionsCount < 0) {
	window.obj13024_onTap_runningActionsCount = 0;
} else if (window.obj13024_onTap_runningActionsCount == 0) {
	obj13024_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13027(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13024_onTap_runningActionsCount = window.obj13024_onTap_runningActionsCount - 1;

if (window.obj13024_onTap_runningActionsCount < 0) {
	window.obj13024_onTap_runningActionsCount = 0;
} else if (window.obj13024_onTap_runningActionsCount == 0) {
	obj13024_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13024_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13024_onTap_activeActionGroupIndex = -1;
		$("#obj13024").trigger("obj13024_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13024) {
				console.warn("de-queueing event obj13024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13024_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13000
(function(){
	window.obj13024_onTap_runningActionsCount = obj13024_onTap_runningActionsCount + 1;


	var selector = "#obj13000";
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
					window.obj13024_onTap_runningActionsCount = window.obj13024_onTap_runningActionsCount - 1;

if (window.obj13024_onTap_runningActionsCount < 0) {
	window.obj13024_onTap_runningActionsCount = 0;
} else if (window.obj13024_onTap_runningActionsCount == 0) {
	obj13024_onTap_actionGroup3();
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
				window.obj13024_onTap_runningActionsCount = window.obj13024_onTap_runningActionsCount - 1;

if (window.obj13024_onTap_runningActionsCount < 0) {
	window.obj13024_onTap_runningActionsCount = 0;
} else if (window.obj13024_onTap_runningActionsCount == 0) {
	obj13024_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13024_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13024_onTap_activeActionGroupIndex = -1;
		$("#obj13024").trigger("obj13024_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13024) {
				console.warn("de-queueing event obj13024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13024_onTap_activeActionGroupIndex = 3;
	











































};
obj13029_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13029_onTap_activeActionGroupIndex = -1;
		$("#obj13029").trigger("obj13029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13029) {
				console.warn("de-queueing event obj13029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13029_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13031();
function playAudioFile_13031() {
	window.obj13029_onTap_runningActionsCount = obj13029_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13031")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13031");
			$("#obj_audio_playSoundFile13031").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13029_onTap_runningActionsCount = window.obj13029_onTap_runningActionsCount - 1;

if (window.obj13029_onTap_runningActionsCount < 0) {
	window.obj13029_onTap_runningActionsCount = 0;
} else if (window.obj13029_onTap_runningActionsCount == 0) {
	obj13029_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13029_onTap_runningActionsCount = window.obj13029_onTap_runningActionsCount - 1;

if (window.obj13029_onTap_runningActionsCount < 0) {
	window.obj13029_onTap_runningActionsCount = 0;
} else if (window.obj13029_onTap_runningActionsCount == 0) {
	obj13029_onTap_actionGroup1();
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
				window.obj13029_onTap_runningActionsCount = window.obj13029_onTap_runningActionsCount - 1;

if (window.obj13029_onTap_runningActionsCount < 0) {
	window.obj13029_onTap_runningActionsCount = 0;
} else if (window.obj13029_onTap_runningActionsCount == 0) {
	obj13029_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13029_onTap_runningActionsCount = window.obj13029_onTap_runningActionsCount - 1;

if (window.obj13029_onTap_runningActionsCount < 0) {
	window.obj13029_onTap_runningActionsCount = 0;
} else if (window.obj13029_onTap_runningActionsCount == 0) {
	obj13029_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13029_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13029_onTap_activeActionGroupIndex = -1;
		$("#obj13029").trigger("obj13029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13029) {
				console.warn("de-queueing event obj13029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13029_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13004 
hide_13032();
function hide_13032() {
	var selector = "#obj13004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13029_onTap_runningActionsCount = obj13029_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13029_onTap_runningActionsCount = window.obj13029_onTap_runningActionsCount - 1;

if (window.obj13029_onTap_runningActionsCount < 0) {
	window.obj13029_onTap_runningActionsCount = 0;
} else if (window.obj13029_onTap_runningActionsCount == 0) {
	obj13029_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13032(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13029_onTap_runningActionsCount = window.obj13029_onTap_runningActionsCount - 1;

if (window.obj13029_onTap_runningActionsCount < 0) {
	window.obj13029_onTap_runningActionsCount = 0;
} else if (window.obj13029_onTap_runningActionsCount == 0) {
	obj13029_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13029_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13029_onTap_activeActionGroupIndex = -1;
		$("#obj13029").trigger("obj13029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13029) {
				console.warn("de-queueing event obj13029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13029_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13004
(function(){
	window.obj13029_onTap_runningActionsCount = obj13029_onTap_runningActionsCount + 1;


	var selector = "#obj13004";
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
					window.obj13029_onTap_runningActionsCount = window.obj13029_onTap_runningActionsCount - 1;

if (window.obj13029_onTap_runningActionsCount < 0) {
	window.obj13029_onTap_runningActionsCount = 0;
} else if (window.obj13029_onTap_runningActionsCount == 0) {
	obj13029_onTap_actionGroup3();
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
				window.obj13029_onTap_runningActionsCount = window.obj13029_onTap_runningActionsCount - 1;

if (window.obj13029_onTap_runningActionsCount < 0) {
	window.obj13029_onTap_runningActionsCount = 0;
} else if (window.obj13029_onTap_runningActionsCount == 0) {
	obj13029_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13029_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13029_onTap_activeActionGroupIndex = -1;
		$("#obj13029").trigger("obj13029_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13029) {
				console.warn("de-queueing event obj13029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13029_onTap_activeActionGroupIndex = 3;
	











































};
obj13034_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13034_onTap_activeActionGroupIndex = -1;
		$("#obj13034").trigger("obj13034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13034) {
				console.warn("de-queueing event obj13034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13034_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13036();
function playAudioFile_13036() {
	window.obj13034_onTap_runningActionsCount = obj13034_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13036")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13036");
			$("#obj_audio_playSoundFile13036").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13034_onTap_runningActionsCount = window.obj13034_onTap_runningActionsCount - 1;

if (window.obj13034_onTap_runningActionsCount < 0) {
	window.obj13034_onTap_runningActionsCount = 0;
} else if (window.obj13034_onTap_runningActionsCount == 0) {
	obj13034_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13034_onTap_runningActionsCount = window.obj13034_onTap_runningActionsCount - 1;

if (window.obj13034_onTap_runningActionsCount < 0) {
	window.obj13034_onTap_runningActionsCount = 0;
} else if (window.obj13034_onTap_runningActionsCount == 0) {
	obj13034_onTap_actionGroup1();
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
				window.obj13034_onTap_runningActionsCount = window.obj13034_onTap_runningActionsCount - 1;

if (window.obj13034_onTap_runningActionsCount < 0) {
	window.obj13034_onTap_runningActionsCount = 0;
} else if (window.obj13034_onTap_runningActionsCount == 0) {
	obj13034_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13034_onTap_runningActionsCount = window.obj13034_onTap_runningActionsCount - 1;

if (window.obj13034_onTap_runningActionsCount < 0) {
	window.obj13034_onTap_runningActionsCount = 0;
} else if (window.obj13034_onTap_runningActionsCount == 0) {
	obj13034_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13034_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13034_onTap_activeActionGroupIndex = -1;
		$("#obj13034").trigger("obj13034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13034) {
				console.warn("de-queueing event obj13034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13034_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13008 
hide_13037();
function hide_13037() {
	var selector = "#obj13008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13034_onTap_runningActionsCount = obj13034_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13034_onTap_runningActionsCount = window.obj13034_onTap_runningActionsCount - 1;

if (window.obj13034_onTap_runningActionsCount < 0) {
	window.obj13034_onTap_runningActionsCount = 0;
} else if (window.obj13034_onTap_runningActionsCount == 0) {
	obj13034_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13037(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13034_onTap_runningActionsCount = window.obj13034_onTap_runningActionsCount - 1;

if (window.obj13034_onTap_runningActionsCount < 0) {
	window.obj13034_onTap_runningActionsCount = 0;
} else if (window.obj13034_onTap_runningActionsCount == 0) {
	obj13034_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13034_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13034_onTap_activeActionGroupIndex = -1;
		$("#obj13034").trigger("obj13034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13034) {
				console.warn("de-queueing event obj13034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13034_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13008
(function(){
	window.obj13034_onTap_runningActionsCount = obj13034_onTap_runningActionsCount + 1;


	var selector = "#obj13008";
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
					window.obj13034_onTap_runningActionsCount = window.obj13034_onTap_runningActionsCount - 1;

if (window.obj13034_onTap_runningActionsCount < 0) {
	window.obj13034_onTap_runningActionsCount = 0;
} else if (window.obj13034_onTap_runningActionsCount == 0) {
	obj13034_onTap_actionGroup3();
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
				window.obj13034_onTap_runningActionsCount = window.obj13034_onTap_runningActionsCount - 1;

if (window.obj13034_onTap_runningActionsCount < 0) {
	window.obj13034_onTap_runningActionsCount = 0;
} else if (window.obj13034_onTap_runningActionsCount == 0) {
	obj13034_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13034_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13034_onTap_activeActionGroupIndex = -1;
		$("#obj13034").trigger("obj13034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13034) {
				console.warn("de-queueing event obj13034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13034_onTap_activeActionGroupIndex = 3;
	











































};
obj13235_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13235_onTap_activeActionGroupIndex = -1;
		$("#obj13235").trigger("obj13235_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13235) {
				console.warn("de-queueing event obj13235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13235_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13237();
function playAudioFile_13237() {
	window.obj13235_onTap_runningActionsCount = obj13235_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13237")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13237");
			$("#obj_audio_playSoundFile13237").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13235_onTap_runningActionsCount = window.obj13235_onTap_runningActionsCount - 1;

if (window.obj13235_onTap_runningActionsCount < 0) {
	window.obj13235_onTap_runningActionsCount = 0;
} else if (window.obj13235_onTap_runningActionsCount == 0) {
	obj13235_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13235_onTap_runningActionsCount = window.obj13235_onTap_runningActionsCount - 1;

if (window.obj13235_onTap_runningActionsCount < 0) {
	window.obj13235_onTap_runningActionsCount = 0;
} else if (window.obj13235_onTap_runningActionsCount == 0) {
	obj13235_onTap_actionGroup1();
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
				window.obj13235_onTap_runningActionsCount = window.obj13235_onTap_runningActionsCount - 1;

if (window.obj13235_onTap_runningActionsCount < 0) {
	window.obj13235_onTap_runningActionsCount = 0;
} else if (window.obj13235_onTap_runningActionsCount == 0) {
	obj13235_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13235_onTap_runningActionsCount = window.obj13235_onTap_runningActionsCount - 1;

if (window.obj13235_onTap_runningActionsCount < 0) {
	window.obj13235_onTap_runningActionsCount = 0;
} else if (window.obj13235_onTap_runningActionsCount == 0) {
	obj13235_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13235_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13235_onTap_activeActionGroupIndex = -1;
		$("#obj13235").trigger("obj13235_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13235) {
				console.warn("de-queueing event obj13235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13235_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12996 
hide_13238();
function hide_13238() {
	var selector = "#obj12996";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13235_onTap_runningActionsCount = obj13235_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13235_onTap_runningActionsCount = window.obj13235_onTap_runningActionsCount - 1;

if (window.obj13235_onTap_runningActionsCount < 0) {
	window.obj13235_onTap_runningActionsCount = 0;
} else if (window.obj13235_onTap_runningActionsCount == 0) {
	obj13235_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13238(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13235_onTap_runningActionsCount = window.obj13235_onTap_runningActionsCount - 1;

if (window.obj13235_onTap_runningActionsCount < 0) {
	window.obj13235_onTap_runningActionsCount = 0;
} else if (window.obj13235_onTap_runningActionsCount == 0) {
	obj13235_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13235_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13235_onTap_activeActionGroupIndex = -1;
		$("#obj13235").trigger("obj13235_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13235) {
				console.warn("de-queueing event obj13235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13235_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12996
(function(){
	window.obj13235_onTap_runningActionsCount = obj13235_onTap_runningActionsCount + 1;


	var selector = "#obj12996";
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
					window.obj13235_onTap_runningActionsCount = window.obj13235_onTap_runningActionsCount - 1;

if (window.obj13235_onTap_runningActionsCount < 0) {
	window.obj13235_onTap_runningActionsCount = 0;
} else if (window.obj13235_onTap_runningActionsCount == 0) {
	obj13235_onTap_actionGroup3();
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
				window.obj13235_onTap_runningActionsCount = window.obj13235_onTap_runningActionsCount - 1;

if (window.obj13235_onTap_runningActionsCount < 0) {
	window.obj13235_onTap_runningActionsCount = 0;
} else if (window.obj13235_onTap_runningActionsCount == 0) {
	obj13235_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13235_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13235_onTap_activeActionGroupIndex = -1;
		$("#obj13235").trigger("obj13235_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13235) {
				console.warn("de-queueing event obj13235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13235_onTap_activeActionGroupIndex = 3;
	











































};
obj13039_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13039_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13039").trigger("obj13039_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13039) {
				console.warn("de-queueing event obj13039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13039_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_13041();
function wait_13041() {
	window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount = obj13039_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13039_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 2000);
}


























};
obj13039_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13039_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13039").trigger("obj13039_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13039) {
				console.warn("de-queueing event obj13039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13039_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_13042();
function goToPage_13042() {
	window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount = obj13039_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor266")[0].click();
	window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13039_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13039_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj13039_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13039_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13039").trigger("obj13039_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13039) {
				console.warn("de-queueing event obj13039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13039_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj13047_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13047_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13047").trigger("obj13047_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13047) {
				console.warn("de-queueing event obj13047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13047_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13049();
function switchText_13049() {
	window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount = obj13047_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>5/9</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13045_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13045_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13045").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13045_content");
			setTimeout(function () {
				window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13047_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13045 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13047_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13047_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13047_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13047_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13047").trigger("obj13047_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13047) {
				console.warn("de-queueing event obj13047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13047_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13050_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13050_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13050").trigger("obj13050_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13050) {
				console.warn("de-queueing event obj13050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13050_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13052();
function switchText_13052() {
	window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount = obj13050_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>6/9</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13045_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13045_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13045").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13045_content");
			setTimeout(function () {
				window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13050_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13045 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13050_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13050_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13050_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13050_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13050").trigger("obj13050_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13050) {
				console.warn("de-queueing event obj13050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13050_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13053_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13053_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13053").trigger("obj13053_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13053) {
				console.warn("de-queueing event obj13053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13053_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13055();
function switchText_13055() {
	window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount = obj13053_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>7/9</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13045_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13045_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13045").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13045_content");
			setTimeout(function () {
				window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13053_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13045 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13053_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13053_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13053_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13053_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13053").trigger("obj13053_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13053) {
				console.warn("de-queueing event obj13053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13053_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13056_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13056_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13056").trigger("obj13056_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13056) {
				console.warn("de-queueing event obj13056." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13056").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13056_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13058();
function switchText_13058() {
	window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount = obj13056_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>8/9</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13045_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13045_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13045").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13045_content");
			setTimeout(function () {
				window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13056_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13045 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13056_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13056_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13056_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13056_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13056").trigger("obj13056_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13056) {
				console.warn("de-queueing event obj13056." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13056").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13056_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj13059_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13059_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13059").trigger("obj13059_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13059) {
				console.warn("de-queueing event obj13059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13059_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj13047 
incrementCounter_13061();
function incrementCounter_13061() {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = obj13059_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13047_counterValue;
	obj13047_counterValue = obj13047_counterValue + 1;
	if (! obj13047_counterCanExceedTargetValue && obj13047_counterValue > obj13047_counterTargetValue) {
		obj13047_counterValue = obj13047_counterTargetValue;
	}

	if (oldValue != obj13047_counterValue) {
		$("#obj13047").trigger('SCEventCounterValueChange');
		$("#obj13047").trigger('SCEventCounterIncrease');
		if (obj13047_counterValue == obj13047_counterTargetValue)
			$("#obj13047").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13059_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13050 
incrementCounter_13062();
function incrementCounter_13062() {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = obj13059_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13050_counterValue;
	obj13050_counterValue = obj13050_counterValue + 1;
	if (! obj13050_counterCanExceedTargetValue && obj13050_counterValue > obj13050_counterTargetValue) {
		obj13050_counterValue = obj13050_counterTargetValue;
	}

	if (oldValue != obj13050_counterValue) {
		$("#obj13050").trigger('SCEventCounterValueChange');
		$("#obj13050").trigger('SCEventCounterIncrease');
		if (obj13050_counterValue == obj13050_counterTargetValue)
			$("#obj13050").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13059_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13053 
incrementCounter_13063();
function incrementCounter_13063() {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = obj13059_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13053_counterValue;
	obj13053_counterValue = obj13053_counterValue + 1;
	if (! obj13053_counterCanExceedTargetValue && obj13053_counterValue > obj13053_counterTargetValue) {
		obj13053_counterValue = obj13053_counterTargetValue;
	}

	if (oldValue != obj13053_counterValue) {
		$("#obj13053").trigger('SCEventCounterValueChange');
		$("#obj13053").trigger('SCEventCounterIncrease');
		if (obj13053_counterValue == obj13053_counterTargetValue)
			$("#obj13053").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13059_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13056 
incrementCounter_13064();
function incrementCounter_13064() {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = obj13059_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13056_counterValue;
	obj13056_counterValue = obj13056_counterValue + 1;
	if (! obj13056_counterCanExceedTargetValue && obj13056_counterValue > obj13056_counterTargetValue) {
		obj13056_counterValue = obj13056_counterTargetValue;
	}

	if (oldValue != obj13056_counterValue) {
		$("#obj13056").trigger('SCEventCounterValueChange');
		$("#obj13056").trigger('SCEventCounterIncrease');
		if (obj13056_counterValue == obj13056_counterTargetValue)
			$("#obj13056").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13059_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj13253 
incrementCounter_13256();
function incrementCounter_13256() {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = obj13059_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13253_counterValue;
	obj13253_counterValue = obj13253_counterValue + 1;
	if (! obj13253_counterCanExceedTargetValue && obj13253_counterValue > obj13253_counterTargetValue) {
		obj13253_counterValue = obj13253_counterTargetValue;
	}

	if (oldValue != obj13253_counterValue) {
		$("#obj13253").trigger('SCEventCounterValueChange');
		$("#obj13253").trigger('SCEventCounterIncrease');
		if (obj13253_counterValue == obj13253_counterTargetValue)
			$("#obj13253").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13059_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj13059_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13059_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13059").trigger("obj13059_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13059) {
				console.warn("de-queueing event obj13059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13059_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj13059 
decrementCounter_13065();
function decrementCounter_13065() {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = obj13059_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj13059_counterValue;
	obj13059_counterValue = obj13059_counterValue - 1;
	if (obj13059_counterValue < 0) {
		obj13059_counterValue = 0;
	}

	if (oldValue != obj13059_counterValue) {
		$("#obj13059").trigger('SCEventCounterValueChange');
		$("#obj13059").trigger('SCEventCounterDecrease');
		if (obj13059_counterValue == obj13059_counterTargetValue)
			$("#obj13059").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13059_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13059_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj13059_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13059_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13059").trigger("obj13059_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13059) {
				console.warn("de-queueing event obj13059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13059_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj13066_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13066_onTap_activeActionGroupIndex = -1;
		$("#obj13066").trigger("obj13066_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13066) {
				console.warn("de-queueing event obj13066." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13066").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13066_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13066 
hide_13069();
function hide_13069() {
	var selector = "#obj13066";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13066_onTap_runningActionsCount = obj13066_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13069(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13156
(function(){
	window.obj13066_onTap_runningActionsCount = obj13066_onTap_runningActionsCount + 1;


	var selector = "#obj13156";
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
					window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup1();
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
				window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13066_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13066_onTap_activeActionGroupIndex = -1;
		$("#obj13066").trigger("obj13066_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13066) {
				console.warn("de-queueing event obj13066." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13066").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13066_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13070();
function playAudioFile_13070() {
	window.obj13066_onTap_runningActionsCount = obj13066_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13070")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13070");
			$("#obj_audio_playSoundFile13070").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup2();
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
				window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13066_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13066_onTap_activeActionGroupIndex = -1;
		$("#obj13066").trigger("obj13066_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13066) {
				console.warn("de-queueing event obj13066." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13066").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13066_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13071();
function runjs_13071() {
	window.obj13066_onTap_runningActionsCount = obj13066_onTap_runningActionsCount + 1;


	$("#obj12988").css("background-color", "#F0803C");
	
	setTimeout(function() {
		window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup3();
}
	}, 1);
}














};
obj13066_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13066_onTap_activeActionGroupIndex = -1;
		$("#obj13066").trigger("obj13066_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13066) {
				console.warn("de-queueing event obj13066." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13066").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13066_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj13158
(function(){
	window.obj13066_onTap_runningActionsCount = obj13066_onTap_runningActionsCount + 1;


	var selector = "#obj13158";
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
					window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
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
				window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13170
(function(){
	window.obj13066_onTap_runningActionsCount = obj13066_onTap_runningActionsCount + 1;


	var selector = "#obj13170";
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
					window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
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
				window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13175
(function(){
	window.obj13066_onTap_runningActionsCount = obj13066_onTap_runningActionsCount + 1;


	var selector = "#obj13175";
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
					window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
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
				window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13180
(function(){
	window.obj13066_onTap_runningActionsCount = obj13066_onTap_runningActionsCount + 1;


	var selector = "#obj13180";
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
					window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
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
				window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13211
(function(){
	window.obj13066_onTap_runningActionsCount = obj13066_onTap_runningActionsCount + 1;


	var selector = "#obj13211";
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
					window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
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
				window.obj13066_onTap_runningActionsCount = window.obj13066_onTap_runningActionsCount - 1;

if (window.obj13066_onTap_runningActionsCount < 0) {
	window.obj13066_onTap_runningActionsCount = 0;
} else if (window.obj13066_onTap_runningActionsCount == 0) {
	obj13066_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13066_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13066_onTap_activeActionGroupIndex = -1;
		$("#obj13066").trigger("obj13066_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13066) {
				console.warn("de-queueing event obj13066." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13066").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13066_onTap_activeActionGroupIndex = 4;
	











































};
obj13078_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13078_onTap_activeActionGroupIndex = -1;
		$("#obj13078").trigger("obj13078_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13078) {
				console.warn("de-queueing event obj13078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13078_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13078 
hide_13081();
function hide_13081() {
	var selector = "#obj13078";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13081(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13090 
hide_13082();
function hide_13082() {
	var selector = "#obj13090";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13082(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13095 
hide_13083();
function hide_13083() {
	var selector = "#obj13095";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13083(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13100 
hide_13084();
function hide_13084() {
	var selector = "#obj13100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13084(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13216 
hide_13263();
function hide_13263() {
	var selector = "#obj13216";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13263(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13115
(function(){
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;


	var selector = "#obj13115";
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
					window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
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
				window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13078_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13078_onTap_activeActionGroupIndex = -1;
		$("#obj13078").trigger("obj13078_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13078) {
				console.warn("de-queueing event obj13078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13078_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13085();
function playAudioFile_13085() {
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13085")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13085");
			$("#obj_audio_playSoundFile13085").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup2();
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
				window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13078_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13078_onTap_activeActionGroupIndex = -1;
		$("#obj13078").trigger("obj13078_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13078) {
				console.warn("de-queueing event obj13078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13078_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13086();
function runjs_13086() {
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;


	$("#obj13004").css("background-color", "#90AFDB");
	
	setTimeout(function() {
		window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup3();
}
	}, 1);
}














};
obj13078_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13078_onTap_activeActionGroupIndex = -1;
		$("#obj13078").trigger("obj13078_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13078) {
				console.warn("de-queueing event obj13078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13078_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj13156 
hide_13087();
function hide_13087() {
	var selector = "#obj13156";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13087(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13078_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13078_onTap_activeActionGroupIndex = -1;
		$("#obj13078").trigger("obj13078_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13078) {
				console.warn("de-queueing event obj13078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13078_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj13059 
incrementCounter_13088();
function incrementCounter_13088() {
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;


	var oldValue = obj13059_counterValue;
	obj13059_counterValue = obj13059_counterValue + 1;
	if (! obj13059_counterCanExceedTargetValue && obj13059_counterValue > obj13059_counterTargetValue) {
		obj13059_counterValue = obj13059_counterTargetValue;
	}

	if (oldValue != obj13059_counterValue) {
		$("#obj13059").trigger('SCEventCounterValueChange');
		$("#obj13059").trigger('SCEventCounterIncrease');
		if (obj13059_counterValue == obj13059_counterTargetValue)
			$("#obj13059").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj13039 
incrementCounter_13089();
function incrementCounter_13089() {
	window.obj13078_onTap_runningActionsCount = obj13078_onTap_runningActionsCount + 1;


	var oldValue = obj13039_counterValue;
	obj13039_counterValue = obj13039_counterValue + 1;
	if (! obj13039_counterCanExceedTargetValue && obj13039_counterValue > obj13039_counterTargetValue) {
		obj13039_counterValue = obj13039_counterTargetValue;
	}

	if (oldValue != obj13039_counterValue) {
		$("#obj13039").trigger('SCEventCounterValueChange');
		$("#obj13039").trigger('SCEventCounterIncrease');
		if (obj13039_counterValue == obj13039_counterTargetValue)
			$("#obj13039").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13078_onTap_runningActionsCount = window.obj13078_onTap_runningActionsCount - 1;

if (window.obj13078_onTap_runningActionsCount < 0) {
	window.obj13078_onTap_runningActionsCount = 0;
} else if (window.obj13078_onTap_runningActionsCount == 0) {
	obj13078_onTap_actionGroup5();
} }, 1);
}











};
obj13078_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13078_onTap_activeActionGroupIndex = -1;
		$("#obj13078").trigger("obj13078_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13078) {
				console.warn("de-queueing event obj13078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13078_onTap_activeActionGroupIndex = 5;
	











































};
obj13090_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13090_onTap_activeActionGroupIndex = -1;
		$("#obj13090").trigger("obj13090_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13090) {
				console.warn("de-queueing event obj13090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13090_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13092();
function playAudioFile_13092() {
	window.obj13090_onTap_runningActionsCount = obj13090_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13092")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13092");
			$("#obj_audio_playSoundFile13092").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13090_onTap_runningActionsCount = window.obj13090_onTap_runningActionsCount - 1;

if (window.obj13090_onTap_runningActionsCount < 0) {
	window.obj13090_onTap_runningActionsCount = 0;
} else if (window.obj13090_onTap_runningActionsCount == 0) {
	obj13090_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13090_onTap_runningActionsCount = window.obj13090_onTap_runningActionsCount - 1;

if (window.obj13090_onTap_runningActionsCount < 0) {
	window.obj13090_onTap_runningActionsCount = 0;
} else if (window.obj13090_onTap_runningActionsCount == 0) {
	obj13090_onTap_actionGroup1();
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
				window.obj13090_onTap_runningActionsCount = window.obj13090_onTap_runningActionsCount - 1;

if (window.obj13090_onTap_runningActionsCount < 0) {
	window.obj13090_onTap_runningActionsCount = 0;
} else if (window.obj13090_onTap_runningActionsCount == 0) {
	obj13090_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13090_onTap_runningActionsCount = window.obj13090_onTap_runningActionsCount - 1;

if (window.obj13090_onTap_runningActionsCount < 0) {
	window.obj13090_onTap_runningActionsCount = 0;
} else if (window.obj13090_onTap_runningActionsCount == 0) {
	obj13090_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13090_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13090_onTap_activeActionGroupIndex = -1;
		$("#obj13090").trigger("obj13090_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13090) {
				console.warn("de-queueing event obj13090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13090_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13000 
hide_13093();
function hide_13093() {
	var selector = "#obj13000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13090_onTap_runningActionsCount = obj13090_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13090_onTap_runningActionsCount = window.obj13090_onTap_runningActionsCount - 1;

if (window.obj13090_onTap_runningActionsCount < 0) {
	window.obj13090_onTap_runningActionsCount = 0;
} else if (window.obj13090_onTap_runningActionsCount == 0) {
	obj13090_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13093(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13090_onTap_runningActionsCount = window.obj13090_onTap_runningActionsCount - 1;

if (window.obj13090_onTap_runningActionsCount < 0) {
	window.obj13090_onTap_runningActionsCount = 0;
} else if (window.obj13090_onTap_runningActionsCount == 0) {
	obj13090_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13090_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13090_onTap_activeActionGroupIndex = -1;
		$("#obj13090").trigger("obj13090_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13090) {
				console.warn("de-queueing event obj13090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13090_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13000
(function(){
	window.obj13090_onTap_runningActionsCount = obj13090_onTap_runningActionsCount + 1;


	var selector = "#obj13000";
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
					window.obj13090_onTap_runningActionsCount = window.obj13090_onTap_runningActionsCount - 1;

if (window.obj13090_onTap_runningActionsCount < 0) {
	window.obj13090_onTap_runningActionsCount = 0;
} else if (window.obj13090_onTap_runningActionsCount == 0) {
	obj13090_onTap_actionGroup3();
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
				window.obj13090_onTap_runningActionsCount = window.obj13090_onTap_runningActionsCount - 1;

if (window.obj13090_onTap_runningActionsCount < 0) {
	window.obj13090_onTap_runningActionsCount = 0;
} else if (window.obj13090_onTap_runningActionsCount == 0) {
	obj13090_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13090_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13090_onTap_activeActionGroupIndex = -1;
		$("#obj13090").trigger("obj13090_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13090) {
				console.warn("de-queueing event obj13090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13090_onTap_activeActionGroupIndex = 3;
	











































};
obj13095_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13095_onTap_activeActionGroupIndex = -1;
		$("#obj13095").trigger("obj13095_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13095) {
				console.warn("de-queueing event obj13095." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13095").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13095_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13097();
function playAudioFile_13097() {
	window.obj13095_onTap_runningActionsCount = obj13095_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13097")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13097");
			$("#obj_audio_playSoundFile13097").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13095_onTap_runningActionsCount = window.obj13095_onTap_runningActionsCount - 1;

if (window.obj13095_onTap_runningActionsCount < 0) {
	window.obj13095_onTap_runningActionsCount = 0;
} else if (window.obj13095_onTap_runningActionsCount == 0) {
	obj13095_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13095_onTap_runningActionsCount = window.obj13095_onTap_runningActionsCount - 1;

if (window.obj13095_onTap_runningActionsCount < 0) {
	window.obj13095_onTap_runningActionsCount = 0;
} else if (window.obj13095_onTap_runningActionsCount == 0) {
	obj13095_onTap_actionGroup1();
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
				window.obj13095_onTap_runningActionsCount = window.obj13095_onTap_runningActionsCount - 1;

if (window.obj13095_onTap_runningActionsCount < 0) {
	window.obj13095_onTap_runningActionsCount = 0;
} else if (window.obj13095_onTap_runningActionsCount == 0) {
	obj13095_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13095_onTap_runningActionsCount = window.obj13095_onTap_runningActionsCount - 1;

if (window.obj13095_onTap_runningActionsCount < 0) {
	window.obj13095_onTap_runningActionsCount = 0;
} else if (window.obj13095_onTap_runningActionsCount == 0) {
	obj13095_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13095_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13095_onTap_activeActionGroupIndex = -1;
		$("#obj13095").trigger("obj13095_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13095) {
				console.warn("de-queueing event obj13095." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13095").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13095_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13008 
hide_13098();
function hide_13098() {
	var selector = "#obj13008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13095_onTap_runningActionsCount = obj13095_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13095_onTap_runningActionsCount = window.obj13095_onTap_runningActionsCount - 1;

if (window.obj13095_onTap_runningActionsCount < 0) {
	window.obj13095_onTap_runningActionsCount = 0;
} else if (window.obj13095_onTap_runningActionsCount == 0) {
	obj13095_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13098(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13095_onTap_runningActionsCount = window.obj13095_onTap_runningActionsCount - 1;

if (window.obj13095_onTap_runningActionsCount < 0) {
	window.obj13095_onTap_runningActionsCount = 0;
} else if (window.obj13095_onTap_runningActionsCount == 0) {
	obj13095_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13095_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13095_onTap_activeActionGroupIndex = -1;
		$("#obj13095").trigger("obj13095_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13095) {
				console.warn("de-queueing event obj13095." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13095").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13095_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13008
(function(){
	window.obj13095_onTap_runningActionsCount = obj13095_onTap_runningActionsCount + 1;


	var selector = "#obj13008";
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
					window.obj13095_onTap_runningActionsCount = window.obj13095_onTap_runningActionsCount - 1;

if (window.obj13095_onTap_runningActionsCount < 0) {
	window.obj13095_onTap_runningActionsCount = 0;
} else if (window.obj13095_onTap_runningActionsCount == 0) {
	obj13095_onTap_actionGroup3();
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
				window.obj13095_onTap_runningActionsCount = window.obj13095_onTap_runningActionsCount - 1;

if (window.obj13095_onTap_runningActionsCount < 0) {
	window.obj13095_onTap_runningActionsCount = 0;
} else if (window.obj13095_onTap_runningActionsCount == 0) {
	obj13095_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13095_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13095_onTap_activeActionGroupIndex = -1;
		$("#obj13095").trigger("obj13095_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13095) {
				console.warn("de-queueing event obj13095." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13095").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13095_onTap_activeActionGroupIndex = 3;
	











































};
obj13100_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13100_onTap_activeActionGroupIndex = -1;
		$("#obj13100").trigger("obj13100_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13100) {
				console.warn("de-queueing event obj13100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13100_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13102();
function playAudioFile_13102() {
	window.obj13100_onTap_runningActionsCount = obj13100_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13102")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13102");
			$("#obj_audio_playSoundFile13102").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13100_onTap_runningActionsCount = window.obj13100_onTap_runningActionsCount - 1;

if (window.obj13100_onTap_runningActionsCount < 0) {
	window.obj13100_onTap_runningActionsCount = 0;
} else if (window.obj13100_onTap_runningActionsCount == 0) {
	obj13100_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13100_onTap_runningActionsCount = window.obj13100_onTap_runningActionsCount - 1;

if (window.obj13100_onTap_runningActionsCount < 0) {
	window.obj13100_onTap_runningActionsCount = 0;
} else if (window.obj13100_onTap_runningActionsCount == 0) {
	obj13100_onTap_actionGroup1();
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
				window.obj13100_onTap_runningActionsCount = window.obj13100_onTap_runningActionsCount - 1;

if (window.obj13100_onTap_runningActionsCount < 0) {
	window.obj13100_onTap_runningActionsCount = 0;
} else if (window.obj13100_onTap_runningActionsCount == 0) {
	obj13100_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13100_onTap_runningActionsCount = window.obj13100_onTap_runningActionsCount - 1;

if (window.obj13100_onTap_runningActionsCount < 0) {
	window.obj13100_onTap_runningActionsCount = 0;
} else if (window.obj13100_onTap_runningActionsCount == 0) {
	obj13100_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13100_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13100_onTap_activeActionGroupIndex = -1;
		$("#obj13100").trigger("obj13100_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13100) {
				console.warn("de-queueing event obj13100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13100_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12996 
hide_13103();
function hide_13103() {
	var selector = "#obj12996";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13100_onTap_runningActionsCount = obj13100_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13100_onTap_runningActionsCount = window.obj13100_onTap_runningActionsCount - 1;

if (window.obj13100_onTap_runningActionsCount < 0) {
	window.obj13100_onTap_runningActionsCount = 0;
} else if (window.obj13100_onTap_runningActionsCount == 0) {
	obj13100_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13103(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13100_onTap_runningActionsCount = window.obj13100_onTap_runningActionsCount - 1;

if (window.obj13100_onTap_runningActionsCount < 0) {
	window.obj13100_onTap_runningActionsCount = 0;
} else if (window.obj13100_onTap_runningActionsCount == 0) {
	obj13100_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13100_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13100_onTap_activeActionGroupIndex = -1;
		$("#obj13100").trigger("obj13100_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13100) {
				console.warn("de-queueing event obj13100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13100_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12996
(function(){
	window.obj13100_onTap_runningActionsCount = obj13100_onTap_runningActionsCount + 1;


	var selector = "#obj12996";
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
					window.obj13100_onTap_runningActionsCount = window.obj13100_onTap_runningActionsCount - 1;

if (window.obj13100_onTap_runningActionsCount < 0) {
	window.obj13100_onTap_runningActionsCount = 0;
} else if (window.obj13100_onTap_runningActionsCount == 0) {
	obj13100_onTap_actionGroup3();
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
				window.obj13100_onTap_runningActionsCount = window.obj13100_onTap_runningActionsCount - 1;

if (window.obj13100_onTap_runningActionsCount < 0) {
	window.obj13100_onTap_runningActionsCount = 0;
} else if (window.obj13100_onTap_runningActionsCount == 0) {
	obj13100_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13100_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13100_onTap_activeActionGroupIndex = -1;
		$("#obj13100").trigger("obj13100_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13100) {
				console.warn("de-queueing event obj13100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13100_onTap_activeActionGroupIndex = 3;
	











































};
obj13216_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13216_onTap_activeActionGroupIndex = -1;
		$("#obj13216").trigger("obj13216_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13216) {
				console.warn("de-queueing event obj13216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13216_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13218();
function playAudioFile_13218() {
	window.obj13216_onTap_runningActionsCount = obj13216_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13218")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13218");
			$("#obj_audio_playSoundFile13218").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13216_onTap_runningActionsCount = window.obj13216_onTap_runningActionsCount - 1;

if (window.obj13216_onTap_runningActionsCount < 0) {
	window.obj13216_onTap_runningActionsCount = 0;
} else if (window.obj13216_onTap_runningActionsCount == 0) {
	obj13216_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13216_onTap_runningActionsCount = window.obj13216_onTap_runningActionsCount - 1;

if (window.obj13216_onTap_runningActionsCount < 0) {
	window.obj13216_onTap_runningActionsCount = 0;
} else if (window.obj13216_onTap_runningActionsCount == 0) {
	obj13216_onTap_actionGroup1();
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
				window.obj13216_onTap_runningActionsCount = window.obj13216_onTap_runningActionsCount - 1;

if (window.obj13216_onTap_runningActionsCount < 0) {
	window.obj13216_onTap_runningActionsCount = 0;
} else if (window.obj13216_onTap_runningActionsCount == 0) {
	obj13216_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13216_onTap_runningActionsCount = window.obj13216_onTap_runningActionsCount - 1;

if (window.obj13216_onTap_runningActionsCount < 0) {
	window.obj13216_onTap_runningActionsCount = 0;
} else if (window.obj13216_onTap_runningActionsCount == 0) {
	obj13216_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13216_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13216_onTap_activeActionGroupIndex = -1;
		$("#obj13216").trigger("obj13216_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13216) {
				console.warn("de-queueing event obj13216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13216_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13242 
hide_13219();
function hide_13219() {
	var selector = "#obj13242";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13216_onTap_runningActionsCount = obj13216_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13216_onTap_runningActionsCount = window.obj13216_onTap_runningActionsCount - 1;

if (window.obj13216_onTap_runningActionsCount < 0) {
	window.obj13216_onTap_runningActionsCount = 0;
} else if (window.obj13216_onTap_runningActionsCount == 0) {
	obj13216_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13219(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13216_onTap_runningActionsCount = window.obj13216_onTap_runningActionsCount - 1;

if (window.obj13216_onTap_runningActionsCount < 0) {
	window.obj13216_onTap_runningActionsCount = 0;
} else if (window.obj13216_onTap_runningActionsCount == 0) {
	obj13216_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13216_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13216_onTap_activeActionGroupIndex = -1;
		$("#obj13216").trigger("obj13216_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13216) {
				console.warn("de-queueing event obj13216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13216_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13242
(function(){
	window.obj13216_onTap_runningActionsCount = obj13216_onTap_runningActionsCount + 1;


	var selector = "#obj13242";
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
					window.obj13216_onTap_runningActionsCount = window.obj13216_onTap_runningActionsCount - 1;

if (window.obj13216_onTap_runningActionsCount < 0) {
	window.obj13216_onTap_runningActionsCount = 0;
} else if (window.obj13216_onTap_runningActionsCount == 0) {
	obj13216_onTap_actionGroup3();
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
				window.obj13216_onTap_runningActionsCount = window.obj13216_onTap_runningActionsCount - 1;

if (window.obj13216_onTap_runningActionsCount < 0) {
	window.obj13216_onTap_runningActionsCount = 0;
} else if (window.obj13216_onTap_runningActionsCount == 0) {
	obj13216_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13216_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13216_onTap_activeActionGroupIndex = -1;
		$("#obj13216").trigger("obj13216_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13216) {
				console.warn("de-queueing event obj13216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13216_onTap_activeActionGroupIndex = 3;
	











































};
obj13105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13105_onTap_activeActionGroupIndex = -1;
		$("#obj13105").trigger("obj13105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13105) {
				console.warn("de-queueing event obj13105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13105_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13105 
hide_13108();
function hide_13108() {
	var selector = "#obj13105";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13105_onTap_runningActionsCount = obj13105_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13108(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13156
(function(){
	window.obj13105_onTap_runningActionsCount = obj13105_onTap_runningActionsCount + 1;


	var selector = "#obj13156";
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
					window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup1();
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
				window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13105_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13105_onTap_activeActionGroupIndex = -1;
		$("#obj13105").trigger("obj13105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13105) {
				console.warn("de-queueing event obj13105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13105_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13109();
function playAudioFile_13109() {
	window.obj13105_onTap_runningActionsCount = obj13105_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13109")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13109");
			$("#obj_audio_playSoundFile13109").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup2();
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
				window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13105_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13105_onTap_activeActionGroupIndex = -1;
		$("#obj13105").trigger("obj13105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13105) {
				console.warn("de-queueing event obj13105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13105_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13110();
function runjs_13110() {
	window.obj13105_onTap_runningActionsCount = obj13105_onTap_runningActionsCount + 1;


	$("#obj12984").css("background-color", "#90AFDB");
	
	setTimeout(function() {
		window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup3();
}
	}, 1);
}














};
obj13105_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13105_onTap_activeActionGroupIndex = -1;
		$("#obj13105").trigger("obj13105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13105) {
				console.warn("de-queueing event obj13105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13105_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj13078
(function(){
	window.obj13105_onTap_runningActionsCount = obj13105_onTap_runningActionsCount + 1;


	var selector = "#obj13078";
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
					window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
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
				window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13090
(function(){
	window.obj13105_onTap_runningActionsCount = obj13105_onTap_runningActionsCount + 1;


	var selector = "#obj13090";
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
					window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
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
				window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13095
(function(){
	window.obj13105_onTap_runningActionsCount = obj13105_onTap_runningActionsCount + 1;


	var selector = "#obj13095";
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
					window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
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
				window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13100
(function(){
	window.obj13105_onTap_runningActionsCount = obj13105_onTap_runningActionsCount + 1;


	var selector = "#obj13100";
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
					window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
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
				window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13216
(function(){
	window.obj13105_onTap_runningActionsCount = obj13105_onTap_runningActionsCount + 1;


	var selector = "#obj13216";
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
					window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
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
				window.obj13105_onTap_runningActionsCount = window.obj13105_onTap_runningActionsCount - 1;

if (window.obj13105_onTap_runningActionsCount < 0) {
	window.obj13105_onTap_runningActionsCount = 0;
} else if (window.obj13105_onTap_runningActionsCount == 0) {
	obj13105_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13105_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13105_onTap_activeActionGroupIndex = -1;
		$("#obj13105").trigger("obj13105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13105) {
				console.warn("de-queueing event obj13105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13105_onTap_activeActionGroupIndex = 4;
	











































};
obj13117_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13117_onTap_activeActionGroupIndex = -1;
		$("#obj13117").trigger("obj13117_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13117) {
				console.warn("de-queueing event obj13117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13117_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13117 
hide_13120();
function hide_13120() {
	var selector = "#obj13117";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13120(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13129 
hide_13121();
function hide_13121() {
	var selector = "#obj13129";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13121(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13134 
hide_13122();
function hide_13122() {
	var selector = "#obj13134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13122(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13139 
hide_13123();
function hide_13123() {
	var selector = "#obj13139";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13123(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13223 
hide_13261();
function hide_13261() {
	var selector = "#obj13223";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13261(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13154
(function(){
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;


	var selector = "#obj13154";
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
					window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
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
				window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13117_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13117_onTap_activeActionGroupIndex = -1;
		$("#obj13117").trigger("obj13117_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13117) {
				console.warn("de-queueing event obj13117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13117_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13124();
function playAudioFile_13124() {
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13124")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13124");
			$("#obj_audio_playSoundFile13124").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup2();
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
				window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13117_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13117_onTap_activeActionGroupIndex = -1;
		$("#obj13117").trigger("obj13117_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13117) {
				console.warn("de-queueing event obj13117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13117_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13125();
function runjs_13125() {
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;


	$("#obj12996").css("background-color", "#8AC440");
	
	setTimeout(function() {
		window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup3();
}
	}, 1);
}














};
obj13117_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13117_onTap_activeActionGroupIndex = -1;
		$("#obj13117").trigger("obj13117_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13117) {
				console.warn("de-queueing event obj13117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13117_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj13156 
hide_13126();
function hide_13126() {
	var selector = "#obj13156";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13126(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13117_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13117_onTap_activeActionGroupIndex = -1;
		$("#obj13117").trigger("obj13117_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13117) {
				console.warn("de-queueing event obj13117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13117_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj13059 
incrementCounter_13127();
function incrementCounter_13127() {
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;


	var oldValue = obj13059_counterValue;
	obj13059_counterValue = obj13059_counterValue + 1;
	if (! obj13059_counterCanExceedTargetValue && obj13059_counterValue > obj13059_counterTargetValue) {
		obj13059_counterValue = obj13059_counterTargetValue;
	}

	if (oldValue != obj13059_counterValue) {
		$("#obj13059").trigger('SCEventCounterValueChange');
		$("#obj13059").trigger('SCEventCounterIncrease');
		if (obj13059_counterValue == obj13059_counterTargetValue)
			$("#obj13059").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj13039 
incrementCounter_13128();
function incrementCounter_13128() {
	window.obj13117_onTap_runningActionsCount = obj13117_onTap_runningActionsCount + 1;


	var oldValue = obj13039_counterValue;
	obj13039_counterValue = obj13039_counterValue + 1;
	if (! obj13039_counterCanExceedTargetValue && obj13039_counterValue > obj13039_counterTargetValue) {
		obj13039_counterValue = obj13039_counterTargetValue;
	}

	if (oldValue != obj13039_counterValue) {
		$("#obj13039").trigger('SCEventCounterValueChange');
		$("#obj13039").trigger('SCEventCounterIncrease');
		if (obj13039_counterValue == obj13039_counterTargetValue)
			$("#obj13039").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13117_onTap_runningActionsCount = window.obj13117_onTap_runningActionsCount - 1;

if (window.obj13117_onTap_runningActionsCount < 0) {
	window.obj13117_onTap_runningActionsCount = 0;
} else if (window.obj13117_onTap_runningActionsCount == 0) {
	obj13117_onTap_actionGroup5();
} }, 1);
}











};
obj13117_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13117_onTap_activeActionGroupIndex = -1;
		$("#obj13117").trigger("obj13117_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13117) {
				console.warn("de-queueing event obj13117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13117_onTap_activeActionGroupIndex = 5;
	











































};
obj13129_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13129_onTap_activeActionGroupIndex = -1;
		$("#obj13129").trigger("obj13129_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13129) {
				console.warn("de-queueing event obj13129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13129_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13131();
function playAudioFile_13131() {
	window.obj13129_onTap_runningActionsCount = obj13129_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13131")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13131");
			$("#obj_audio_playSoundFile13131").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13129_onTap_runningActionsCount = window.obj13129_onTap_runningActionsCount - 1;

if (window.obj13129_onTap_runningActionsCount < 0) {
	window.obj13129_onTap_runningActionsCount = 0;
} else if (window.obj13129_onTap_runningActionsCount == 0) {
	obj13129_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13129_onTap_runningActionsCount = window.obj13129_onTap_runningActionsCount - 1;

if (window.obj13129_onTap_runningActionsCount < 0) {
	window.obj13129_onTap_runningActionsCount = 0;
} else if (window.obj13129_onTap_runningActionsCount == 0) {
	obj13129_onTap_actionGroup1();
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
				window.obj13129_onTap_runningActionsCount = window.obj13129_onTap_runningActionsCount - 1;

if (window.obj13129_onTap_runningActionsCount < 0) {
	window.obj13129_onTap_runningActionsCount = 0;
} else if (window.obj13129_onTap_runningActionsCount == 0) {
	obj13129_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13129_onTap_runningActionsCount = window.obj13129_onTap_runningActionsCount - 1;

if (window.obj13129_onTap_runningActionsCount < 0) {
	window.obj13129_onTap_runningActionsCount = 0;
} else if (window.obj13129_onTap_runningActionsCount == 0) {
	obj13129_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13129_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13129_onTap_activeActionGroupIndex = -1;
		$("#obj13129").trigger("obj13129_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13129) {
				console.warn("de-queueing event obj13129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13129_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13000 
hide_13132();
function hide_13132() {
	var selector = "#obj13000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13129_onTap_runningActionsCount = obj13129_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13129_onTap_runningActionsCount = window.obj13129_onTap_runningActionsCount - 1;

if (window.obj13129_onTap_runningActionsCount < 0) {
	window.obj13129_onTap_runningActionsCount = 0;
} else if (window.obj13129_onTap_runningActionsCount == 0) {
	obj13129_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13132(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13129_onTap_runningActionsCount = window.obj13129_onTap_runningActionsCount - 1;

if (window.obj13129_onTap_runningActionsCount < 0) {
	window.obj13129_onTap_runningActionsCount = 0;
} else if (window.obj13129_onTap_runningActionsCount == 0) {
	obj13129_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13129_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13129_onTap_activeActionGroupIndex = -1;
		$("#obj13129").trigger("obj13129_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13129) {
				console.warn("de-queueing event obj13129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13129_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13000
(function(){
	window.obj13129_onTap_runningActionsCount = obj13129_onTap_runningActionsCount + 1;


	var selector = "#obj13000";
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
					window.obj13129_onTap_runningActionsCount = window.obj13129_onTap_runningActionsCount - 1;

if (window.obj13129_onTap_runningActionsCount < 0) {
	window.obj13129_onTap_runningActionsCount = 0;
} else if (window.obj13129_onTap_runningActionsCount == 0) {
	obj13129_onTap_actionGroup3();
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
				window.obj13129_onTap_runningActionsCount = window.obj13129_onTap_runningActionsCount - 1;

if (window.obj13129_onTap_runningActionsCount < 0) {
	window.obj13129_onTap_runningActionsCount = 0;
} else if (window.obj13129_onTap_runningActionsCount == 0) {
	obj13129_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13129_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13129_onTap_activeActionGroupIndex = -1;
		$("#obj13129").trigger("obj13129_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13129) {
				console.warn("de-queueing event obj13129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13129_onTap_activeActionGroupIndex = 3;
	











































};
obj13134_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13134_onTap_activeActionGroupIndex = -1;
		$("#obj13134").trigger("obj13134_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13134) {
				console.warn("de-queueing event obj13134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13134_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13136();
function playAudioFile_13136() {
	window.obj13134_onTap_runningActionsCount = obj13134_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13136")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13136");
			$("#obj_audio_playSoundFile13136").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13134_onTap_runningActionsCount = window.obj13134_onTap_runningActionsCount - 1;

if (window.obj13134_onTap_runningActionsCount < 0) {
	window.obj13134_onTap_runningActionsCount = 0;
} else if (window.obj13134_onTap_runningActionsCount == 0) {
	obj13134_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13134_onTap_runningActionsCount = window.obj13134_onTap_runningActionsCount - 1;

if (window.obj13134_onTap_runningActionsCount < 0) {
	window.obj13134_onTap_runningActionsCount = 0;
} else if (window.obj13134_onTap_runningActionsCount == 0) {
	obj13134_onTap_actionGroup1();
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
				window.obj13134_onTap_runningActionsCount = window.obj13134_onTap_runningActionsCount - 1;

if (window.obj13134_onTap_runningActionsCount < 0) {
	window.obj13134_onTap_runningActionsCount = 0;
} else if (window.obj13134_onTap_runningActionsCount == 0) {
	obj13134_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13134_onTap_runningActionsCount = window.obj13134_onTap_runningActionsCount - 1;

if (window.obj13134_onTap_runningActionsCount < 0) {
	window.obj13134_onTap_runningActionsCount = 0;
} else if (window.obj13134_onTap_runningActionsCount == 0) {
	obj13134_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13134_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13134_onTap_activeActionGroupIndex = -1;
		$("#obj13134").trigger("obj13134_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13134) {
				console.warn("de-queueing event obj13134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13134_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13004 
hide_13137();
function hide_13137() {
	var selector = "#obj13004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13134_onTap_runningActionsCount = obj13134_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13134_onTap_runningActionsCount = window.obj13134_onTap_runningActionsCount - 1;

if (window.obj13134_onTap_runningActionsCount < 0) {
	window.obj13134_onTap_runningActionsCount = 0;
} else if (window.obj13134_onTap_runningActionsCount == 0) {
	obj13134_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13137(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13134_onTap_runningActionsCount = window.obj13134_onTap_runningActionsCount - 1;

if (window.obj13134_onTap_runningActionsCount < 0) {
	window.obj13134_onTap_runningActionsCount = 0;
} else if (window.obj13134_onTap_runningActionsCount == 0) {
	obj13134_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13134_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13134_onTap_activeActionGroupIndex = -1;
		$("#obj13134").trigger("obj13134_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13134) {
				console.warn("de-queueing event obj13134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13134_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13004
(function(){
	window.obj13134_onTap_runningActionsCount = obj13134_onTap_runningActionsCount + 1;


	var selector = "#obj13004";
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
					window.obj13134_onTap_runningActionsCount = window.obj13134_onTap_runningActionsCount - 1;

if (window.obj13134_onTap_runningActionsCount < 0) {
	window.obj13134_onTap_runningActionsCount = 0;
} else if (window.obj13134_onTap_runningActionsCount == 0) {
	obj13134_onTap_actionGroup3();
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
				window.obj13134_onTap_runningActionsCount = window.obj13134_onTap_runningActionsCount - 1;

if (window.obj13134_onTap_runningActionsCount < 0) {
	window.obj13134_onTap_runningActionsCount = 0;
} else if (window.obj13134_onTap_runningActionsCount == 0) {
	obj13134_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13134_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13134_onTap_activeActionGroupIndex = -1;
		$("#obj13134").trigger("obj13134_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13134) {
				console.warn("de-queueing event obj13134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13134_onTap_activeActionGroupIndex = 3;
	











































};
obj13139_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13139_onTap_activeActionGroupIndex = -1;
		$("#obj13139").trigger("obj13139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13139) {
				console.warn("de-queueing event obj13139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13139_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13141();
function playAudioFile_13141() {
	window.obj13139_onTap_runningActionsCount = obj13139_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13141")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13141");
			$("#obj_audio_playSoundFile13141").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13139_onTap_runningActionsCount = window.obj13139_onTap_runningActionsCount - 1;

if (window.obj13139_onTap_runningActionsCount < 0) {
	window.obj13139_onTap_runningActionsCount = 0;
} else if (window.obj13139_onTap_runningActionsCount == 0) {
	obj13139_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13139_onTap_runningActionsCount = window.obj13139_onTap_runningActionsCount - 1;

if (window.obj13139_onTap_runningActionsCount < 0) {
	window.obj13139_onTap_runningActionsCount = 0;
} else if (window.obj13139_onTap_runningActionsCount == 0) {
	obj13139_onTap_actionGroup1();
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
				window.obj13139_onTap_runningActionsCount = window.obj13139_onTap_runningActionsCount - 1;

if (window.obj13139_onTap_runningActionsCount < 0) {
	window.obj13139_onTap_runningActionsCount = 0;
} else if (window.obj13139_onTap_runningActionsCount == 0) {
	obj13139_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13139_onTap_runningActionsCount = window.obj13139_onTap_runningActionsCount - 1;

if (window.obj13139_onTap_runningActionsCount < 0) {
	window.obj13139_onTap_runningActionsCount = 0;
} else if (window.obj13139_onTap_runningActionsCount == 0) {
	obj13139_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13139_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13139_onTap_activeActionGroupIndex = -1;
		$("#obj13139").trigger("obj13139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13139) {
				console.warn("de-queueing event obj13139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13139_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13008 
hide_13142();
function hide_13142() {
	var selector = "#obj13008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13139_onTap_runningActionsCount = obj13139_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13139_onTap_runningActionsCount = window.obj13139_onTap_runningActionsCount - 1;

if (window.obj13139_onTap_runningActionsCount < 0) {
	window.obj13139_onTap_runningActionsCount = 0;
} else if (window.obj13139_onTap_runningActionsCount == 0) {
	obj13139_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13142(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13139_onTap_runningActionsCount = window.obj13139_onTap_runningActionsCount - 1;

if (window.obj13139_onTap_runningActionsCount < 0) {
	window.obj13139_onTap_runningActionsCount = 0;
} else if (window.obj13139_onTap_runningActionsCount == 0) {
	obj13139_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13139_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13139_onTap_activeActionGroupIndex = -1;
		$("#obj13139").trigger("obj13139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13139) {
				console.warn("de-queueing event obj13139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13139_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13008
(function(){
	window.obj13139_onTap_runningActionsCount = obj13139_onTap_runningActionsCount + 1;


	var selector = "#obj13008";
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
					window.obj13139_onTap_runningActionsCount = window.obj13139_onTap_runningActionsCount - 1;

if (window.obj13139_onTap_runningActionsCount < 0) {
	window.obj13139_onTap_runningActionsCount = 0;
} else if (window.obj13139_onTap_runningActionsCount == 0) {
	obj13139_onTap_actionGroup3();
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
				window.obj13139_onTap_runningActionsCount = window.obj13139_onTap_runningActionsCount - 1;

if (window.obj13139_onTap_runningActionsCount < 0) {
	window.obj13139_onTap_runningActionsCount = 0;
} else if (window.obj13139_onTap_runningActionsCount == 0) {
	obj13139_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13139_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13139_onTap_activeActionGroupIndex = -1;
		$("#obj13139").trigger("obj13139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13139) {
				console.warn("de-queueing event obj13139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13139_onTap_activeActionGroupIndex = 3;
	











































};
obj13223_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13223_onTap_activeActionGroupIndex = -1;
		$("#obj13223").trigger("obj13223_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13223) {
				console.warn("de-queueing event obj13223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13223_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13258();
function playAudioFile_13258() {
	window.obj13223_onTap_runningActionsCount = obj13223_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13258")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13258");
			$("#obj_audio_playSoundFile13258").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13223_onTap_runningActionsCount = window.obj13223_onTap_runningActionsCount - 1;

if (window.obj13223_onTap_runningActionsCount < 0) {
	window.obj13223_onTap_runningActionsCount = 0;
} else if (window.obj13223_onTap_runningActionsCount == 0) {
	obj13223_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13223_onTap_runningActionsCount = window.obj13223_onTap_runningActionsCount - 1;

if (window.obj13223_onTap_runningActionsCount < 0) {
	window.obj13223_onTap_runningActionsCount = 0;
} else if (window.obj13223_onTap_runningActionsCount == 0) {
	obj13223_onTap_actionGroup1();
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
				window.obj13223_onTap_runningActionsCount = window.obj13223_onTap_runningActionsCount - 1;

if (window.obj13223_onTap_runningActionsCount < 0) {
	window.obj13223_onTap_runningActionsCount = 0;
} else if (window.obj13223_onTap_runningActionsCount == 0) {
	obj13223_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13223_onTap_runningActionsCount = window.obj13223_onTap_runningActionsCount - 1;

if (window.obj13223_onTap_runningActionsCount < 0) {
	window.obj13223_onTap_runningActionsCount = 0;
} else if (window.obj13223_onTap_runningActionsCount == 0) {
	obj13223_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13223_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13223_onTap_activeActionGroupIndex = -1;
		$("#obj13223").trigger("obj13223_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13223) {
				console.warn("de-queueing event obj13223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13223_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13242 
hide_13259();
function hide_13259() {
	var selector = "#obj13242";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13223_onTap_runningActionsCount = obj13223_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13223_onTap_runningActionsCount = window.obj13223_onTap_runningActionsCount - 1;

if (window.obj13223_onTap_runningActionsCount < 0) {
	window.obj13223_onTap_runningActionsCount = 0;
} else if (window.obj13223_onTap_runningActionsCount == 0) {
	obj13223_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13259(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13223_onTap_runningActionsCount = window.obj13223_onTap_runningActionsCount - 1;

if (window.obj13223_onTap_runningActionsCount < 0) {
	window.obj13223_onTap_runningActionsCount = 0;
} else if (window.obj13223_onTap_runningActionsCount == 0) {
	obj13223_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13223_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13223_onTap_activeActionGroupIndex = -1;
		$("#obj13223").trigger("obj13223_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13223) {
				console.warn("de-queueing event obj13223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13223_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13242
(function(){
	window.obj13223_onTap_runningActionsCount = obj13223_onTap_runningActionsCount + 1;


	var selector = "#obj13242";
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
					window.obj13223_onTap_runningActionsCount = window.obj13223_onTap_runningActionsCount - 1;

if (window.obj13223_onTap_runningActionsCount < 0) {
	window.obj13223_onTap_runningActionsCount = 0;
} else if (window.obj13223_onTap_runningActionsCount == 0) {
	obj13223_onTap_actionGroup3();
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
				window.obj13223_onTap_runningActionsCount = window.obj13223_onTap_runningActionsCount - 1;

if (window.obj13223_onTap_runningActionsCount < 0) {
	window.obj13223_onTap_runningActionsCount = 0;
} else if (window.obj13223_onTap_runningActionsCount == 0) {
	obj13223_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13223_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13223_onTap_activeActionGroupIndex = -1;
		$("#obj13223").trigger("obj13223_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13223) {
				console.warn("de-queueing event obj13223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13223_onTap_activeActionGroupIndex = 3;
	











































};
obj13144_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13144_onTap_activeActionGroupIndex = -1;
		$("#obj13144").trigger("obj13144_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13144) {
				console.warn("de-queueing event obj13144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13144_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13144 
hide_13147();
function hide_13147() {
	var selector = "#obj13144";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13144_onTap_runningActionsCount = obj13144_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13147(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13156
(function(){
	window.obj13144_onTap_runningActionsCount = obj13144_onTap_runningActionsCount + 1;


	var selector = "#obj13156";
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
					window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup1();
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
				window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13144_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13144_onTap_activeActionGroupIndex = -1;
		$("#obj13144").trigger("obj13144_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13144) {
				console.warn("de-queueing event obj13144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13144_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13148();
function playAudioFile_13148() {
	window.obj13144_onTap_runningActionsCount = obj13144_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13148")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13148");
			$("#obj_audio_playSoundFile13148").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup2();
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
				window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13144_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13144_onTap_activeActionGroupIndex = -1;
		$("#obj13144").trigger("obj13144_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13144) {
				console.warn("de-queueing event obj13144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13144_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13149();
function runjs_13149() {
	window.obj13144_onTap_runningActionsCount = obj13144_onTap_runningActionsCount + 1;


	$("#obj12980").css("background-color", "#8AC440");
	
	setTimeout(function() {
		window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup3();
}
	}, 1);
}














};
obj13144_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13144_onTap_activeActionGroupIndex = -1;
		$("#obj13144").trigger("obj13144_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13144) {
				console.warn("de-queueing event obj13144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13144_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj13117
(function(){
	window.obj13144_onTap_runningActionsCount = obj13144_onTap_runningActionsCount + 1;


	var selector = "#obj13117";
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
					window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
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
				window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13129
(function(){
	window.obj13144_onTap_runningActionsCount = obj13144_onTap_runningActionsCount + 1;


	var selector = "#obj13129";
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
					window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
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
				window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13134
(function(){
	window.obj13144_onTap_runningActionsCount = obj13144_onTap_runningActionsCount + 1;


	var selector = "#obj13134";
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
					window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
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
				window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13139
(function(){
	window.obj13144_onTap_runningActionsCount = obj13144_onTap_runningActionsCount + 1;


	var selector = "#obj13139";
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
					window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
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
				window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13223
(function(){
	window.obj13144_onTap_runningActionsCount = obj13144_onTap_runningActionsCount + 1;


	var selector = "#obj13223";
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
					window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
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
				window.obj13144_onTap_runningActionsCount = window.obj13144_onTap_runningActionsCount - 1;

if (window.obj13144_onTap_runningActionsCount < 0) {
	window.obj13144_onTap_runningActionsCount = 0;
} else if (window.obj13144_onTap_runningActionsCount == 0) {
	obj13144_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13144_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13144_onTap_activeActionGroupIndex = -1;
		$("#obj13144").trigger("obj13144_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13144) {
				console.warn("de-queueing event obj13144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13144_onTap_activeActionGroupIndex = 4;
	











































};
obj13158_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13158_onTap_activeActionGroupIndex = -1;
		$("#obj13158").trigger("obj13158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13158) {
				console.warn("de-queueing event obj13158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13158_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13158 
hide_13161();
function hide_13161() {
	var selector = "#obj13158";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13161(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13170 
hide_13162();
function hide_13162() {
	var selector = "#obj13170";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13162(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13175 
hide_13163();
function hide_13163() {
	var selector = "#obj13175";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13163(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13180 
hide_13164();
function hide_13164() {
	var selector = "#obj13180";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13164(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13211 
hide_13265();
function hide_13265() {
	var selector = "#obj13211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13265(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13195
(function(){
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;


	var selector = "#obj13195";
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
					window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
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
				window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13158_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13158_onTap_activeActionGroupIndex = -1;
		$("#obj13158").trigger("obj13158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13158) {
				console.warn("de-queueing event obj13158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13158_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13165();
function playAudioFile_13165() {
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13165")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13165");
			$("#obj_audio_playSoundFile13165").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup2();
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
				window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13158_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13158_onTap_activeActionGroupIndex = -1;
		$("#obj13158").trigger("obj13158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13158) {
				console.warn("de-queueing event obj13158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13158_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13166();
function runjs_13166() {
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;


	$("#obj13000").css("background-color", "#F0803C");
	
	setTimeout(function() {
		window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup3();
}
	}, 1);
}














};
obj13158_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13158_onTap_activeActionGroupIndex = -1;
		$("#obj13158").trigger("obj13158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13158) {
				console.warn("de-queueing event obj13158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13158_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj13156 
hide_13167();
function hide_13167() {
	var selector = "#obj13156";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13167(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13158_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13158_onTap_activeActionGroupIndex = -1;
		$("#obj13158").trigger("obj13158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13158) {
				console.warn("de-queueing event obj13158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13158_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj13059 
incrementCounter_13168();
function incrementCounter_13168() {
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;


	var oldValue = obj13059_counterValue;
	obj13059_counterValue = obj13059_counterValue + 1;
	if (! obj13059_counterCanExceedTargetValue && obj13059_counterValue > obj13059_counterTargetValue) {
		obj13059_counterValue = obj13059_counterTargetValue;
	}

	if (oldValue != obj13059_counterValue) {
		$("#obj13059").trigger('SCEventCounterValueChange');
		$("#obj13059").trigger('SCEventCounterIncrease');
		if (obj13059_counterValue == obj13059_counterTargetValue)
			$("#obj13059").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj13039 
incrementCounter_13169();
function incrementCounter_13169() {
	window.obj13158_onTap_runningActionsCount = obj13158_onTap_runningActionsCount + 1;


	var oldValue = obj13039_counterValue;
	obj13039_counterValue = obj13039_counterValue + 1;
	if (! obj13039_counterCanExceedTargetValue && obj13039_counterValue > obj13039_counterTargetValue) {
		obj13039_counterValue = obj13039_counterTargetValue;
	}

	if (oldValue != obj13039_counterValue) {
		$("#obj13039").trigger('SCEventCounterValueChange');
		$("#obj13039").trigger('SCEventCounterIncrease');
		if (obj13039_counterValue == obj13039_counterTargetValue)
			$("#obj13039").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13158_onTap_runningActionsCount = window.obj13158_onTap_runningActionsCount - 1;

if (window.obj13158_onTap_runningActionsCount < 0) {
	window.obj13158_onTap_runningActionsCount = 0;
} else if (window.obj13158_onTap_runningActionsCount == 0) {
	obj13158_onTap_actionGroup5();
} }, 1);
}











};
obj13158_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13158_onTap_activeActionGroupIndex = -1;
		$("#obj13158").trigger("obj13158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13158) {
				console.warn("de-queueing event obj13158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13158_onTap_activeActionGroupIndex = 5;
	











































};
obj13170_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13170_onTap_activeActionGroupIndex = -1;
		$("#obj13170").trigger("obj13170_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13170) {
				console.warn("de-queueing event obj13170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13170_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13172();
function playAudioFile_13172() {
	window.obj13170_onTap_runningActionsCount = obj13170_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13172")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13172");
			$("#obj_audio_playSoundFile13172").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13170_onTap_runningActionsCount = window.obj13170_onTap_runningActionsCount - 1;

if (window.obj13170_onTap_runningActionsCount < 0) {
	window.obj13170_onTap_runningActionsCount = 0;
} else if (window.obj13170_onTap_runningActionsCount == 0) {
	obj13170_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13170_onTap_runningActionsCount = window.obj13170_onTap_runningActionsCount - 1;

if (window.obj13170_onTap_runningActionsCount < 0) {
	window.obj13170_onTap_runningActionsCount = 0;
} else if (window.obj13170_onTap_runningActionsCount == 0) {
	obj13170_onTap_actionGroup1();
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
				window.obj13170_onTap_runningActionsCount = window.obj13170_onTap_runningActionsCount - 1;

if (window.obj13170_onTap_runningActionsCount < 0) {
	window.obj13170_onTap_runningActionsCount = 0;
} else if (window.obj13170_onTap_runningActionsCount == 0) {
	obj13170_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13170_onTap_runningActionsCount = window.obj13170_onTap_runningActionsCount - 1;

if (window.obj13170_onTap_runningActionsCount < 0) {
	window.obj13170_onTap_runningActionsCount = 0;
} else if (window.obj13170_onTap_runningActionsCount == 0) {
	obj13170_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13170_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13170_onTap_activeActionGroupIndex = -1;
		$("#obj13170").trigger("obj13170_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13170) {
				console.warn("de-queueing event obj13170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13170_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13004 
hide_13173();
function hide_13173() {
	var selector = "#obj13004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13170_onTap_runningActionsCount = obj13170_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13170_onTap_runningActionsCount = window.obj13170_onTap_runningActionsCount - 1;

if (window.obj13170_onTap_runningActionsCount < 0) {
	window.obj13170_onTap_runningActionsCount = 0;
} else if (window.obj13170_onTap_runningActionsCount == 0) {
	obj13170_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13173(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13170_onTap_runningActionsCount = window.obj13170_onTap_runningActionsCount - 1;

if (window.obj13170_onTap_runningActionsCount < 0) {
	window.obj13170_onTap_runningActionsCount = 0;
} else if (window.obj13170_onTap_runningActionsCount == 0) {
	obj13170_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13170_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13170_onTap_activeActionGroupIndex = -1;
		$("#obj13170").trigger("obj13170_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13170) {
				console.warn("de-queueing event obj13170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13170_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13004
(function(){
	window.obj13170_onTap_runningActionsCount = obj13170_onTap_runningActionsCount + 1;


	var selector = "#obj13004";
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
					window.obj13170_onTap_runningActionsCount = window.obj13170_onTap_runningActionsCount - 1;

if (window.obj13170_onTap_runningActionsCount < 0) {
	window.obj13170_onTap_runningActionsCount = 0;
} else if (window.obj13170_onTap_runningActionsCount == 0) {
	obj13170_onTap_actionGroup3();
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
				window.obj13170_onTap_runningActionsCount = window.obj13170_onTap_runningActionsCount - 1;

if (window.obj13170_onTap_runningActionsCount < 0) {
	window.obj13170_onTap_runningActionsCount = 0;
} else if (window.obj13170_onTap_runningActionsCount == 0) {
	obj13170_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13170_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13170_onTap_activeActionGroupIndex = -1;
		$("#obj13170").trigger("obj13170_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13170) {
				console.warn("de-queueing event obj13170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13170_onTap_activeActionGroupIndex = 3;
	











































};
obj13175_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13175_onTap_activeActionGroupIndex = -1;
		$("#obj13175").trigger("obj13175_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13175) {
				console.warn("de-queueing event obj13175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13175_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13177();
function playAudioFile_13177() {
	window.obj13175_onTap_runningActionsCount = obj13175_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13177")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13177");
			$("#obj_audio_playSoundFile13177").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13175_onTap_runningActionsCount = window.obj13175_onTap_runningActionsCount - 1;

if (window.obj13175_onTap_runningActionsCount < 0) {
	window.obj13175_onTap_runningActionsCount = 0;
} else if (window.obj13175_onTap_runningActionsCount == 0) {
	obj13175_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13175_onTap_runningActionsCount = window.obj13175_onTap_runningActionsCount - 1;

if (window.obj13175_onTap_runningActionsCount < 0) {
	window.obj13175_onTap_runningActionsCount = 0;
} else if (window.obj13175_onTap_runningActionsCount == 0) {
	obj13175_onTap_actionGroup1();
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
				window.obj13175_onTap_runningActionsCount = window.obj13175_onTap_runningActionsCount - 1;

if (window.obj13175_onTap_runningActionsCount < 0) {
	window.obj13175_onTap_runningActionsCount = 0;
} else if (window.obj13175_onTap_runningActionsCount == 0) {
	obj13175_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13175_onTap_runningActionsCount = window.obj13175_onTap_runningActionsCount - 1;

if (window.obj13175_onTap_runningActionsCount < 0) {
	window.obj13175_onTap_runningActionsCount = 0;
} else if (window.obj13175_onTap_runningActionsCount == 0) {
	obj13175_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13175_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13175_onTap_activeActionGroupIndex = -1;
		$("#obj13175").trigger("obj13175_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13175) {
				console.warn("de-queueing event obj13175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13175_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12996 
hide_13178();
function hide_13178() {
	var selector = "#obj12996";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13175_onTap_runningActionsCount = obj13175_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13175_onTap_runningActionsCount = window.obj13175_onTap_runningActionsCount - 1;

if (window.obj13175_onTap_runningActionsCount < 0) {
	window.obj13175_onTap_runningActionsCount = 0;
} else if (window.obj13175_onTap_runningActionsCount == 0) {
	obj13175_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13178(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13175_onTap_runningActionsCount = window.obj13175_onTap_runningActionsCount - 1;

if (window.obj13175_onTap_runningActionsCount < 0) {
	window.obj13175_onTap_runningActionsCount = 0;
} else if (window.obj13175_onTap_runningActionsCount == 0) {
	obj13175_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13175_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13175_onTap_activeActionGroupIndex = -1;
		$("#obj13175").trigger("obj13175_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13175) {
				console.warn("de-queueing event obj13175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13175_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12996
(function(){
	window.obj13175_onTap_runningActionsCount = obj13175_onTap_runningActionsCount + 1;


	var selector = "#obj12996";
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
					window.obj13175_onTap_runningActionsCount = window.obj13175_onTap_runningActionsCount - 1;

if (window.obj13175_onTap_runningActionsCount < 0) {
	window.obj13175_onTap_runningActionsCount = 0;
} else if (window.obj13175_onTap_runningActionsCount == 0) {
	obj13175_onTap_actionGroup3();
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
				window.obj13175_onTap_runningActionsCount = window.obj13175_onTap_runningActionsCount - 1;

if (window.obj13175_onTap_runningActionsCount < 0) {
	window.obj13175_onTap_runningActionsCount = 0;
} else if (window.obj13175_onTap_runningActionsCount == 0) {
	obj13175_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13175_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13175_onTap_activeActionGroupIndex = -1;
		$("#obj13175").trigger("obj13175_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13175) {
				console.warn("de-queueing event obj13175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13175_onTap_activeActionGroupIndex = 3;
	











































};
obj13180_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13180_onTap_activeActionGroupIndex = -1;
		$("#obj13180").trigger("obj13180_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13180) {
				console.warn("de-queueing event obj13180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13180_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13182();
function playAudioFile_13182() {
	window.obj13180_onTap_runningActionsCount = obj13180_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13182")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13182");
			$("#obj_audio_playSoundFile13182").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13180_onTap_runningActionsCount = window.obj13180_onTap_runningActionsCount - 1;

if (window.obj13180_onTap_runningActionsCount < 0) {
	window.obj13180_onTap_runningActionsCount = 0;
} else if (window.obj13180_onTap_runningActionsCount == 0) {
	obj13180_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13180_onTap_runningActionsCount = window.obj13180_onTap_runningActionsCount - 1;

if (window.obj13180_onTap_runningActionsCount < 0) {
	window.obj13180_onTap_runningActionsCount = 0;
} else if (window.obj13180_onTap_runningActionsCount == 0) {
	obj13180_onTap_actionGroup1();
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
				window.obj13180_onTap_runningActionsCount = window.obj13180_onTap_runningActionsCount - 1;

if (window.obj13180_onTap_runningActionsCount < 0) {
	window.obj13180_onTap_runningActionsCount = 0;
} else if (window.obj13180_onTap_runningActionsCount == 0) {
	obj13180_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13180_onTap_runningActionsCount = window.obj13180_onTap_runningActionsCount - 1;

if (window.obj13180_onTap_runningActionsCount < 0) {
	window.obj13180_onTap_runningActionsCount = 0;
} else if (window.obj13180_onTap_runningActionsCount == 0) {
	obj13180_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13180_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13180_onTap_activeActionGroupIndex = -1;
		$("#obj13180").trigger("obj13180_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13180) {
				console.warn("de-queueing event obj13180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13180_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13008 
hide_13183();
function hide_13183() {
	var selector = "#obj13008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13180_onTap_runningActionsCount = obj13180_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13180_onTap_runningActionsCount = window.obj13180_onTap_runningActionsCount - 1;

if (window.obj13180_onTap_runningActionsCount < 0) {
	window.obj13180_onTap_runningActionsCount = 0;
} else if (window.obj13180_onTap_runningActionsCount == 0) {
	obj13180_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13183(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13180_onTap_runningActionsCount = window.obj13180_onTap_runningActionsCount - 1;

if (window.obj13180_onTap_runningActionsCount < 0) {
	window.obj13180_onTap_runningActionsCount = 0;
} else if (window.obj13180_onTap_runningActionsCount == 0) {
	obj13180_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13180_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13180_onTap_activeActionGroupIndex = -1;
		$("#obj13180").trigger("obj13180_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13180) {
				console.warn("de-queueing event obj13180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13180_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13008
(function(){
	window.obj13180_onTap_runningActionsCount = obj13180_onTap_runningActionsCount + 1;


	var selector = "#obj13008";
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
					window.obj13180_onTap_runningActionsCount = window.obj13180_onTap_runningActionsCount - 1;

if (window.obj13180_onTap_runningActionsCount < 0) {
	window.obj13180_onTap_runningActionsCount = 0;
} else if (window.obj13180_onTap_runningActionsCount == 0) {
	obj13180_onTap_actionGroup3();
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
				window.obj13180_onTap_runningActionsCount = window.obj13180_onTap_runningActionsCount - 1;

if (window.obj13180_onTap_runningActionsCount < 0) {
	window.obj13180_onTap_runningActionsCount = 0;
} else if (window.obj13180_onTap_runningActionsCount == 0) {
	obj13180_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13180_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13180_onTap_activeActionGroupIndex = -1;
		$("#obj13180").trigger("obj13180_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13180) {
				console.warn("de-queueing event obj13180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13180_onTap_activeActionGroupIndex = 3;
	











































};
obj13211_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13211_onTap_activeActionGroupIndex = -1;
		$("#obj13211").trigger("obj13211_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13211) {
				console.warn("de-queueing event obj13211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13211_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13213();
function playAudioFile_13213() {
	window.obj13211_onTap_runningActionsCount = obj13211_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13213")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13213");
			$("#obj_audio_playSoundFile13213").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13211_onTap_runningActionsCount = window.obj13211_onTap_runningActionsCount - 1;

if (window.obj13211_onTap_runningActionsCount < 0) {
	window.obj13211_onTap_runningActionsCount = 0;
} else if (window.obj13211_onTap_runningActionsCount == 0) {
	obj13211_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13211_onTap_runningActionsCount = window.obj13211_onTap_runningActionsCount - 1;

if (window.obj13211_onTap_runningActionsCount < 0) {
	window.obj13211_onTap_runningActionsCount = 0;
} else if (window.obj13211_onTap_runningActionsCount == 0) {
	obj13211_onTap_actionGroup1();
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
				window.obj13211_onTap_runningActionsCount = window.obj13211_onTap_runningActionsCount - 1;

if (window.obj13211_onTap_runningActionsCount < 0) {
	window.obj13211_onTap_runningActionsCount = 0;
} else if (window.obj13211_onTap_runningActionsCount == 0) {
	obj13211_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13211_onTap_runningActionsCount = window.obj13211_onTap_runningActionsCount - 1;

if (window.obj13211_onTap_runningActionsCount < 0) {
	window.obj13211_onTap_runningActionsCount = 0;
} else if (window.obj13211_onTap_runningActionsCount == 0) {
	obj13211_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13211_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13211_onTap_activeActionGroupIndex = -1;
		$("#obj13211").trigger("obj13211_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13211) {
				console.warn("de-queueing event obj13211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13211_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13242 
hide_13214();
function hide_13214() {
	var selector = "#obj13242";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13211_onTap_runningActionsCount = obj13211_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13211_onTap_runningActionsCount = window.obj13211_onTap_runningActionsCount - 1;

if (window.obj13211_onTap_runningActionsCount < 0) {
	window.obj13211_onTap_runningActionsCount = 0;
} else if (window.obj13211_onTap_runningActionsCount == 0) {
	obj13211_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13214(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13211_onTap_runningActionsCount = window.obj13211_onTap_runningActionsCount - 1;

if (window.obj13211_onTap_runningActionsCount < 0) {
	window.obj13211_onTap_runningActionsCount = 0;
} else if (window.obj13211_onTap_runningActionsCount == 0) {
	obj13211_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13211_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13211_onTap_activeActionGroupIndex = -1;
		$("#obj13211").trigger("obj13211_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13211) {
				console.warn("de-queueing event obj13211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13211_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13242
(function(){
	window.obj13211_onTap_runningActionsCount = obj13211_onTap_runningActionsCount + 1;


	var selector = "#obj13242";
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
					window.obj13211_onTap_runningActionsCount = window.obj13211_onTap_runningActionsCount - 1;

if (window.obj13211_onTap_runningActionsCount < 0) {
	window.obj13211_onTap_runningActionsCount = 0;
} else if (window.obj13211_onTap_runningActionsCount == 0) {
	obj13211_onTap_actionGroup3();
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
				window.obj13211_onTap_runningActionsCount = window.obj13211_onTap_runningActionsCount - 1;

if (window.obj13211_onTap_runningActionsCount < 0) {
	window.obj13211_onTap_runningActionsCount = 0;
} else if (window.obj13211_onTap_runningActionsCount == 0) {
	obj13211_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13211_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13211_onTap_activeActionGroupIndex = -1;
		$("#obj13211").trigger("obj13211_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13211) {
				console.warn("de-queueing event obj13211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13211_onTap_activeActionGroupIndex = 3;
	











































};
obj13185_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13185_onTap_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13185 
hide_13188();
function hide_13188() {
	var selector = "#obj13185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13185_onTap_runningActionsCount = obj13185_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13188(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13156
(function(){
	window.obj13185_onTap_runningActionsCount = obj13185_onTap_runningActionsCount + 1;


	var selector = "#obj13156";
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
					window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup1();
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
				window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13185_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13185_onTap_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13189();
function playAudioFile_13189() {
	window.obj13185_onTap_runningActionsCount = obj13185_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13189")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13189");
			$("#obj_audio_playSoundFile13189").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup2();
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
				window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13185_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13185_onTap_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13190();
function runjs_13190() {
	window.obj13185_onTap_runningActionsCount = obj13185_onTap_runningActionsCount + 1;


	$("#obj12992").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup3();
}
	}, 1);
}














};
obj13185_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13185_onTap_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj13288
(function(){
	window.obj13185_onTap_runningActionsCount = obj13185_onTap_runningActionsCount + 1;


	var selector = "#obj13288";
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
					window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
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
				window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13283
(function(){
	window.obj13185_onTap_runningActionsCount = obj13185_onTap_runningActionsCount + 1;


	var selector = "#obj13283";
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
					window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
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
				window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13278
(function(){
	window.obj13185_onTap_runningActionsCount = obj13185_onTap_runningActionsCount + 1;


	var selector = "#obj13278";
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
					window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
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
				window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13273
(function(){
	window.obj13185_onTap_runningActionsCount = obj13185_onTap_runningActionsCount + 1;


	var selector = "#obj13273";
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
					window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
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
				window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13268
(function(){
	window.obj13185_onTap_runningActionsCount = obj13185_onTap_runningActionsCount + 1;


	var selector = "#obj13268";
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
					window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
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
				window.obj13185_onTap_runningActionsCount = window.obj13185_onTap_runningActionsCount - 1;

if (window.obj13185_onTap_runningActionsCount < 0) {
	window.obj13185_onTap_runningActionsCount = 0;
} else if (window.obj13185_onTap_runningActionsCount == 0) {
	obj13185_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13185_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13185_onTap_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_onTap_activeActionGroupIndex = 4;
	











































};
obj13197_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13197_onTap_activeActionGroupIndex = -1;
		$("#obj13197").trigger("obj13197_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13197) {
				console.warn("de-queueing event obj13197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13197_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13197 
hide_13200();
function hide_13200() {
	var selector = "#obj13197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13197_onTap_runningActionsCount = obj13197_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13200(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13156
(function(){
	window.obj13197_onTap_runningActionsCount = obj13197_onTap_runningActionsCount + 1;


	var selector = "#obj13156";
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
					window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup1();
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
				window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13197_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13197_onTap_activeActionGroupIndex = -1;
		$("#obj13197").trigger("obj13197_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13197) {
				console.warn("de-queueing event obj13197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13197_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13201();
function playAudioFile_13201() {
	window.obj13197_onTap_runningActionsCount = obj13197_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13201")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13201");
			$("#obj_audio_playSoundFile13201").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup2();
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
				window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13197_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13197_onTap_activeActionGroupIndex = -1;
		$("#obj13197").trigger("obj13197_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13197) {
				console.warn("de-queueing event obj13197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13197_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13202();
function runjs_13202() {
	window.obj13197_onTap_runningActionsCount = obj13197_onTap_runningActionsCount + 1;


	$("#obj13209").css("background-color", "#EA9284");
	
	setTimeout(function() {
		window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup3();
}
	}, 1);
}














};
obj13197_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13197_onTap_activeActionGroupIndex = -1;
		$("#obj13197").trigger("obj13197_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13197) {
				console.warn("de-queueing event obj13197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13197_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj13012
(function(){
	window.obj13197_onTap_runningActionsCount = obj13197_onTap_runningActionsCount + 1;


	var selector = "#obj13012";
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
					window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
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
				window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13024
(function(){
	window.obj13197_onTap_runningActionsCount = obj13197_onTap_runningActionsCount + 1;


	var selector = "#obj13024";
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
					window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
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
				window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13029
(function(){
	window.obj13197_onTap_runningActionsCount = obj13197_onTap_runningActionsCount + 1;


	var selector = "#obj13029";
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
					window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
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
				window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13034
(function(){
	window.obj13197_onTap_runningActionsCount = obj13197_onTap_runningActionsCount + 1;


	var selector = "#obj13034";
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
					window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
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
				window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13235
(function(){
	window.obj13197_onTap_runningActionsCount = obj13197_onTap_runningActionsCount + 1;


	var selector = "#obj13235";
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
					window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
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
				window.obj13197_onTap_runningActionsCount = window.obj13197_onTap_runningActionsCount - 1;

if (window.obj13197_onTap_runningActionsCount < 0) {
	window.obj13197_onTap_runningActionsCount = 0;
} else if (window.obj13197_onTap_runningActionsCount == 0) {
	obj13197_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13197_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13197_onTap_activeActionGroupIndex = -1;
		$("#obj13197").trigger("obj13197_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13197) {
				console.warn("de-queueing event obj13197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13197_onTap_activeActionGroupIndex = 4;
	











































};
obj13288_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13288_onTap_activeActionGroupIndex = -1;
		$("#obj13288").trigger("obj13288_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13288) {
				console.warn("de-queueing event obj13288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13288_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj13288 
hide_13291();
function hide_13291() {
	var selector = "#obj13288";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13291(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13283 
hide_13292();
function hide_13292() {
	var selector = "#obj13283";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13292(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13278 
hide_13293();
function hide_13293() {
	var selector = "#obj13278";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13293(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13273 
hide_13294();
function hide_13294() {
	var selector = "#obj13273";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13294(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13268 
hide_13295();
function hide_13295() {
	var selector = "#obj13268";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13295(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj13266
(function(){
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;


	var selector = "#obj13266";
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
					window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
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
				window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13288_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13288_onTap_activeActionGroupIndex = -1;
		$("#obj13288").trigger("obj13288_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13288) {
				console.warn("de-queueing event obj13288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13288_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_13296();
function playAudioFile_13296() {
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13296")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13296");
			$("#obj_audio_playSoundFile13296").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup2();
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
				window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj13288_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13288_onTap_activeActionGroupIndex = -1;
		$("#obj13288").trigger("obj13288_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13288) {
				console.warn("de-queueing event obj13288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13288_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_13297();
function runjs_13297() {
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;


	$("#obj13008").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup3();
}
	}, 1);
}














};
obj13288_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13288_onTap_activeActionGroupIndex = -1;
		$("#obj13288").trigger("obj13288_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13288) {
				console.warn("de-queueing event obj13288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13288_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj13156 
hide_13298();
function hide_13298() {
	var selector = "#obj13156";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13298(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13288_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13288_onTap_activeActionGroupIndex = -1;
		$("#obj13288").trigger("obj13288_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13288) {
				console.warn("de-queueing event obj13288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13288_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj13059 
incrementCounter_13299();
function incrementCounter_13299() {
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;


	var oldValue = obj13059_counterValue;
	obj13059_counterValue = obj13059_counterValue + 1;
	if (! obj13059_counterCanExceedTargetValue && obj13059_counterValue > obj13059_counterTargetValue) {
		obj13059_counterValue = obj13059_counterTargetValue;
	}

	if (oldValue != obj13059_counterValue) {
		$("#obj13059").trigger('SCEventCounterValueChange');
		$("#obj13059").trigger('SCEventCounterIncrease');
		if (obj13059_counterValue == obj13059_counterTargetValue)
			$("#obj13059").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj13039 
incrementCounter_13300();
function incrementCounter_13300() {
	window.obj13288_onTap_runningActionsCount = obj13288_onTap_runningActionsCount + 1;


	var oldValue = obj13039_counterValue;
	obj13039_counterValue = obj13039_counterValue + 1;
	if (! obj13039_counterCanExceedTargetValue && obj13039_counterValue > obj13039_counterTargetValue) {
		obj13039_counterValue = obj13039_counterTargetValue;
	}

	if (oldValue != obj13039_counterValue) {
		$("#obj13039").trigger('SCEventCounterValueChange');
		$("#obj13039").trigger('SCEventCounterIncrease');
		if (obj13039_counterValue == obj13039_counterTargetValue)
			$("#obj13039").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13288_onTap_runningActionsCount = window.obj13288_onTap_runningActionsCount - 1;

if (window.obj13288_onTap_runningActionsCount < 0) {
	window.obj13288_onTap_runningActionsCount = 0;
} else if (window.obj13288_onTap_runningActionsCount == 0) {
	obj13288_onTap_actionGroup5();
} }, 1);
}











};
obj13288_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13288_onTap_activeActionGroupIndex = -1;
		$("#obj13288").trigger("obj13288_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13288) {
				console.warn("de-queueing event obj13288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13288_onTap_activeActionGroupIndex = 5;
	











































};
obj13283_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13283_onTap_activeActionGroupIndex = -1;
		$("#obj13283").trigger("obj13283_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13283) {
				console.warn("de-queueing event obj13283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13283_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13285();
function playAudioFile_13285() {
	window.obj13283_onTap_runningActionsCount = obj13283_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13285")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13285");
			$("#obj_audio_playSoundFile13285").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13283_onTap_runningActionsCount = window.obj13283_onTap_runningActionsCount - 1;

if (window.obj13283_onTap_runningActionsCount < 0) {
	window.obj13283_onTap_runningActionsCount = 0;
} else if (window.obj13283_onTap_runningActionsCount == 0) {
	obj13283_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13283_onTap_runningActionsCount = window.obj13283_onTap_runningActionsCount - 1;

if (window.obj13283_onTap_runningActionsCount < 0) {
	window.obj13283_onTap_runningActionsCount = 0;
} else if (window.obj13283_onTap_runningActionsCount == 0) {
	obj13283_onTap_actionGroup1();
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
				window.obj13283_onTap_runningActionsCount = window.obj13283_onTap_runningActionsCount - 1;

if (window.obj13283_onTap_runningActionsCount < 0) {
	window.obj13283_onTap_runningActionsCount = 0;
} else if (window.obj13283_onTap_runningActionsCount == 0) {
	obj13283_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13283_onTap_runningActionsCount = window.obj13283_onTap_runningActionsCount - 1;

if (window.obj13283_onTap_runningActionsCount < 0) {
	window.obj13283_onTap_runningActionsCount = 0;
} else if (window.obj13283_onTap_runningActionsCount == 0) {
	obj13283_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13283_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13283_onTap_activeActionGroupIndex = -1;
		$("#obj13283").trigger("obj13283_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13283) {
				console.warn("de-queueing event obj13283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13283_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13004 
hide_13286();
function hide_13286() {
	var selector = "#obj13004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13283_onTap_runningActionsCount = obj13283_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13283_onTap_runningActionsCount = window.obj13283_onTap_runningActionsCount - 1;

if (window.obj13283_onTap_runningActionsCount < 0) {
	window.obj13283_onTap_runningActionsCount = 0;
} else if (window.obj13283_onTap_runningActionsCount == 0) {
	obj13283_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13286(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13283_onTap_runningActionsCount = window.obj13283_onTap_runningActionsCount - 1;

if (window.obj13283_onTap_runningActionsCount < 0) {
	window.obj13283_onTap_runningActionsCount = 0;
} else if (window.obj13283_onTap_runningActionsCount == 0) {
	obj13283_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13283_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13283_onTap_activeActionGroupIndex = -1;
		$("#obj13283").trigger("obj13283_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13283) {
				console.warn("de-queueing event obj13283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13283_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13004
(function(){
	window.obj13283_onTap_runningActionsCount = obj13283_onTap_runningActionsCount + 1;


	var selector = "#obj13004";
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
					window.obj13283_onTap_runningActionsCount = window.obj13283_onTap_runningActionsCount - 1;

if (window.obj13283_onTap_runningActionsCount < 0) {
	window.obj13283_onTap_runningActionsCount = 0;
} else if (window.obj13283_onTap_runningActionsCount == 0) {
	obj13283_onTap_actionGroup3();
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
				window.obj13283_onTap_runningActionsCount = window.obj13283_onTap_runningActionsCount - 1;

if (window.obj13283_onTap_runningActionsCount < 0) {
	window.obj13283_onTap_runningActionsCount = 0;
} else if (window.obj13283_onTap_runningActionsCount == 0) {
	obj13283_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13283_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13283_onTap_activeActionGroupIndex = -1;
		$("#obj13283").trigger("obj13283_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13283) {
				console.warn("de-queueing event obj13283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13283_onTap_activeActionGroupIndex = 3;
	











































};
obj13278_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13278_onTap_activeActionGroupIndex = -1;
		$("#obj13278").trigger("obj13278_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13278) {
				console.warn("de-queueing event obj13278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13278_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13280();
function playAudioFile_13280() {
	window.obj13278_onTap_runningActionsCount = obj13278_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13280")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13280");
			$("#obj_audio_playSoundFile13280").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13278_onTap_runningActionsCount = window.obj13278_onTap_runningActionsCount - 1;

if (window.obj13278_onTap_runningActionsCount < 0) {
	window.obj13278_onTap_runningActionsCount = 0;
} else if (window.obj13278_onTap_runningActionsCount == 0) {
	obj13278_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13278_onTap_runningActionsCount = window.obj13278_onTap_runningActionsCount - 1;

if (window.obj13278_onTap_runningActionsCount < 0) {
	window.obj13278_onTap_runningActionsCount = 0;
} else if (window.obj13278_onTap_runningActionsCount == 0) {
	obj13278_onTap_actionGroup1();
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
				window.obj13278_onTap_runningActionsCount = window.obj13278_onTap_runningActionsCount - 1;

if (window.obj13278_onTap_runningActionsCount < 0) {
	window.obj13278_onTap_runningActionsCount = 0;
} else if (window.obj13278_onTap_runningActionsCount == 0) {
	obj13278_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13278_onTap_runningActionsCount = window.obj13278_onTap_runningActionsCount - 1;

if (window.obj13278_onTap_runningActionsCount < 0) {
	window.obj13278_onTap_runningActionsCount = 0;
} else if (window.obj13278_onTap_runningActionsCount == 0) {
	obj13278_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13278_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13278_onTap_activeActionGroupIndex = -1;
		$("#obj13278").trigger("obj13278_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13278) {
				console.warn("de-queueing event obj13278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13278_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12996 
hide_13281();
function hide_13281() {
	var selector = "#obj12996";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13278_onTap_runningActionsCount = obj13278_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13278_onTap_runningActionsCount = window.obj13278_onTap_runningActionsCount - 1;

if (window.obj13278_onTap_runningActionsCount < 0) {
	window.obj13278_onTap_runningActionsCount = 0;
} else if (window.obj13278_onTap_runningActionsCount == 0) {
	obj13278_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13281(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13278_onTap_runningActionsCount = window.obj13278_onTap_runningActionsCount - 1;

if (window.obj13278_onTap_runningActionsCount < 0) {
	window.obj13278_onTap_runningActionsCount = 0;
} else if (window.obj13278_onTap_runningActionsCount == 0) {
	obj13278_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13278_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13278_onTap_activeActionGroupIndex = -1;
		$("#obj13278").trigger("obj13278_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13278) {
				console.warn("de-queueing event obj13278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13278_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12996
(function(){
	window.obj13278_onTap_runningActionsCount = obj13278_onTap_runningActionsCount + 1;


	var selector = "#obj12996";
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
					window.obj13278_onTap_runningActionsCount = window.obj13278_onTap_runningActionsCount - 1;

if (window.obj13278_onTap_runningActionsCount < 0) {
	window.obj13278_onTap_runningActionsCount = 0;
} else if (window.obj13278_onTap_runningActionsCount == 0) {
	obj13278_onTap_actionGroup3();
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
				window.obj13278_onTap_runningActionsCount = window.obj13278_onTap_runningActionsCount - 1;

if (window.obj13278_onTap_runningActionsCount < 0) {
	window.obj13278_onTap_runningActionsCount = 0;
} else if (window.obj13278_onTap_runningActionsCount == 0) {
	obj13278_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13278_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13278_onTap_activeActionGroupIndex = -1;
		$("#obj13278").trigger("obj13278_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13278) {
				console.warn("de-queueing event obj13278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13278_onTap_activeActionGroupIndex = 3;
	











































};
obj13273_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13273_onTap_activeActionGroupIndex = -1;
		$("#obj13273").trigger("obj13273_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13273) {
				console.warn("de-queueing event obj13273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13273_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13275();
function playAudioFile_13275() {
	window.obj13273_onTap_runningActionsCount = obj13273_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13275")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13275");
			$("#obj_audio_playSoundFile13275").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13273_onTap_runningActionsCount = window.obj13273_onTap_runningActionsCount - 1;

if (window.obj13273_onTap_runningActionsCount < 0) {
	window.obj13273_onTap_runningActionsCount = 0;
} else if (window.obj13273_onTap_runningActionsCount == 0) {
	obj13273_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13273_onTap_runningActionsCount = window.obj13273_onTap_runningActionsCount - 1;

if (window.obj13273_onTap_runningActionsCount < 0) {
	window.obj13273_onTap_runningActionsCount = 0;
} else if (window.obj13273_onTap_runningActionsCount == 0) {
	obj13273_onTap_actionGroup1();
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
				window.obj13273_onTap_runningActionsCount = window.obj13273_onTap_runningActionsCount - 1;

if (window.obj13273_onTap_runningActionsCount < 0) {
	window.obj13273_onTap_runningActionsCount = 0;
} else if (window.obj13273_onTap_runningActionsCount == 0) {
	obj13273_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13273_onTap_runningActionsCount = window.obj13273_onTap_runningActionsCount - 1;

if (window.obj13273_onTap_runningActionsCount < 0) {
	window.obj13273_onTap_runningActionsCount = 0;
} else if (window.obj13273_onTap_runningActionsCount == 0) {
	obj13273_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13273_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13273_onTap_activeActionGroupIndex = -1;
		$("#obj13273").trigger("obj13273_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13273) {
				console.warn("de-queueing event obj13273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13273_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13000 
hide_13276();
function hide_13276() {
	var selector = "#obj13000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13273_onTap_runningActionsCount = obj13273_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13273_onTap_runningActionsCount = window.obj13273_onTap_runningActionsCount - 1;

if (window.obj13273_onTap_runningActionsCount < 0) {
	window.obj13273_onTap_runningActionsCount = 0;
} else if (window.obj13273_onTap_runningActionsCount == 0) {
	obj13273_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13276(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13273_onTap_runningActionsCount = window.obj13273_onTap_runningActionsCount - 1;

if (window.obj13273_onTap_runningActionsCount < 0) {
	window.obj13273_onTap_runningActionsCount = 0;
} else if (window.obj13273_onTap_runningActionsCount == 0) {
	obj13273_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13273_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13273_onTap_activeActionGroupIndex = -1;
		$("#obj13273").trigger("obj13273_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13273) {
				console.warn("de-queueing event obj13273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13273_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13000
(function(){
	window.obj13273_onTap_runningActionsCount = obj13273_onTap_runningActionsCount + 1;


	var selector = "#obj13000";
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
					window.obj13273_onTap_runningActionsCount = window.obj13273_onTap_runningActionsCount - 1;

if (window.obj13273_onTap_runningActionsCount < 0) {
	window.obj13273_onTap_runningActionsCount = 0;
} else if (window.obj13273_onTap_runningActionsCount == 0) {
	obj13273_onTap_actionGroup3();
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
				window.obj13273_onTap_runningActionsCount = window.obj13273_onTap_runningActionsCount - 1;

if (window.obj13273_onTap_runningActionsCount < 0) {
	window.obj13273_onTap_runningActionsCount = 0;
} else if (window.obj13273_onTap_runningActionsCount == 0) {
	obj13273_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13273_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13273_onTap_activeActionGroupIndex = -1;
		$("#obj13273").trigger("obj13273_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13273) {
				console.warn("de-queueing event obj13273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13273_onTap_activeActionGroupIndex = 3;
	











































};
obj13268_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13268_onTap_activeActionGroupIndex = -1;
		$("#obj13268").trigger("obj13268_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13268) {
				console.warn("de-queueing event obj13268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13268_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_13270();
function playAudioFile_13270() {
	window.obj13268_onTap_runningActionsCount = obj13268_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13270")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13270");
			$("#obj_audio_playSoundFile13270").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13268_onTap_runningActionsCount = window.obj13268_onTap_runningActionsCount - 1;

if (window.obj13268_onTap_runningActionsCount < 0) {
	window.obj13268_onTap_runningActionsCount = 0;
} else if (window.obj13268_onTap_runningActionsCount == 0) {
	obj13268_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13268_onTap_runningActionsCount = window.obj13268_onTap_runningActionsCount - 1;

if (window.obj13268_onTap_runningActionsCount < 0) {
	window.obj13268_onTap_runningActionsCount = 0;
} else if (window.obj13268_onTap_runningActionsCount == 0) {
	obj13268_onTap_actionGroup1();
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
				window.obj13268_onTap_runningActionsCount = window.obj13268_onTap_runningActionsCount - 1;

if (window.obj13268_onTap_runningActionsCount < 0) {
	window.obj13268_onTap_runningActionsCount = 0;
} else if (window.obj13268_onTap_runningActionsCount == 0) {
	obj13268_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj13268_onTap_runningActionsCount = window.obj13268_onTap_runningActionsCount - 1;

if (window.obj13268_onTap_runningActionsCount < 0) {
	window.obj13268_onTap_runningActionsCount = 0;
} else if (window.obj13268_onTap_runningActionsCount == 0) {
	obj13268_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13268_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13268_onTap_activeActionGroupIndex = -1;
		$("#obj13268").trigger("obj13268_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13268) {
				console.warn("de-queueing event obj13268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13268_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13242 
hide_13271();
function hide_13271() {
	var selector = "#obj13242";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13268_onTap_runningActionsCount = obj13268_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13268_onTap_runningActionsCount = window.obj13268_onTap_runningActionsCount - 1;

if (window.obj13268_onTap_runningActionsCount < 0) {
	window.obj13268_onTap_runningActionsCount = 0;
} else if (window.obj13268_onTap_runningActionsCount == 0) {
	obj13268_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13271(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13268_onTap_runningActionsCount = window.obj13268_onTap_runningActionsCount - 1;

if (window.obj13268_onTap_runningActionsCount < 0) {
	window.obj13268_onTap_runningActionsCount = 0;
} else if (window.obj13268_onTap_runningActionsCount == 0) {
	obj13268_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13268_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13268_onTap_activeActionGroupIndex = -1;
		$("#obj13268").trigger("obj13268_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13268) {
				console.warn("de-queueing event obj13268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13268_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13242
(function(){
	window.obj13268_onTap_runningActionsCount = obj13268_onTap_runningActionsCount + 1;


	var selector = "#obj13242";
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
					window.obj13268_onTap_runningActionsCount = window.obj13268_onTap_runningActionsCount - 1;

if (window.obj13268_onTap_runningActionsCount < 0) {
	window.obj13268_onTap_runningActionsCount = 0;
} else if (window.obj13268_onTap_runningActionsCount == 0) {
	obj13268_onTap_actionGroup3();
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
				window.obj13268_onTap_runningActionsCount = window.obj13268_onTap_runningActionsCount - 1;

if (window.obj13268_onTap_runningActionsCount < 0) {
	window.obj13268_onTap_runningActionsCount = 0;
} else if (window.obj13268_onTap_runningActionsCount == 0) {
	obj13268_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13268_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13268_onTap_activeActionGroupIndex = -1;
		$("#obj13268").trigger("obj13268_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13268) {
				console.warn("de-queueing event obj13268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13268_onTap_activeActionGroupIndex = 3;
	











































};
obj13253_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13253_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13253").trigger("obj13253_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13253) {
				console.warn("de-queueing event obj13253." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13253").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13253_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_13255();
function switchText_13255() {
	window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount = obj13253_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>9/9</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13045_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13045_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13045").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13045_content");
			setTimeout(function () {
				window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13253_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13045 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13253_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13253_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj13253_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13253_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13253").trigger("obj13253_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13253) {
				console.warn("de-queueing event obj13253." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13253").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13253_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj12957: Event Touch Down
 *
 */

$("#obj12957").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12957_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12957_onTap is still running");
	return;
}
var obj12957_onTap_runningActionsCount = 0;
var obj12957_onTap_loopCount = 0;
obj12957_onTap_actionGroup0();
});
























































/*
 *
 *   obj12967: Event Touch Down
 *
 */

$("#obj12967").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12967_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12967_onTap is still running");
	return;
}
var obj12967_onTap_runningActionsCount = 0;
var obj12967_onTap_loopCount = 0;
obj12967_onTap_actionGroup0();
});


















/*
 *
 *   obj12974: Event Touch Down
 *
 */

$("#obj12974").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12974_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12974_onTap is still running");
	return;
}
var obj12974_onTap_runningActionsCount = 0;
var obj12974_onTap_loopCount = 0;
obj12974_onTap_actionGroup0();
});


































































































































































































































































































































/*
 *
 *   obj13012: Event Touch Down
 *
 */

$("#obj13012").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13012_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13012_onTap is still running");
	return;
}
var obj13012_onTap_runningActionsCount = 0;
var obj13012_onTap_loopCount = 0;
obj13012_onTap_actionGroup0();
});


















/*
 *
 *   obj13024: Event Touch Down
 *
 */

$("#obj13024").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13024_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13024_onTap is still running");
	return;
}
var obj13024_onTap_runningActionsCount = 0;
var obj13024_onTap_loopCount = 0;
obj13024_onTap_actionGroup0();
});


















/*
 *
 *   obj13029: Event Touch Down
 *
 */

$("#obj13029").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13029_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13029_onTap is still running");
	return;
}
var obj13029_onTap_runningActionsCount = 0;
var obj13029_onTap_loopCount = 0;
obj13029_onTap_actionGroup0();
});


















/*
 *
 *   obj13034: Event Touch Down
 *
 */

$("#obj13034").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13034_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13034_onTap is still running");
	return;
}
var obj13034_onTap_runningActionsCount = 0;
var obj13034_onTap_loopCount = 0;
obj13034_onTap_actionGroup0();
});


















/*
 *
 *   obj13235: Event Touch Down
 *
 */

$("#obj13235").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13235_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13235_onTap is still running");
	return;
}
var obj13235_onTap_runningActionsCount = 0;
var obj13235_onTap_loopCount = 0;
obj13235_onTap_actionGroup0();
});



























/*
 *
 *   obj13039: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13039").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13039_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13039_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13039_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13039_SCEventCounterReachedTargetValue_loopCount = 0;
obj13039_SCEventCounterReachedTargetValue_actionGroup0();
});
























































/*
 *
 *   obj13047: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13047").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13047_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13047_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13047_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13047_SCEventCounterReachedTargetValue_loopCount = 0;
obj13047_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13050: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13050").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13050_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13050_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13050_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13050_SCEventCounterReachedTargetValue_loopCount = 0;
obj13050_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13053: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13053").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13053_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13053_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13053_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13053_SCEventCounterReachedTargetValue_loopCount = 0;
obj13053_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13056: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13056").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13056_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13056_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13056_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13056_SCEventCounterReachedTargetValue_loopCount = 0;
obj13056_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj13059: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13059").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13059_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13059_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13059_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13059_SCEventCounterReachedTargetValue_loopCount = 0;
obj13059_SCEventCounterReachedTargetValue_actionGroup0();
});









/*
 *
 *   obj13066: Event Touch Down
 *
 */

$("#obj13066").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13066_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13066_onTap is still running");
	return;
}
var obj13066_onTap_runningActionsCount = 0;
var obj13066_onTap_loopCount = 0;
obj13066_onTap_actionGroup0();
});





































/*
 *
 *   obj13078: Event Touch Down
 *
 */

$("#obj13078").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13078_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13078_onTap is still running");
	return;
}
var obj13078_onTap_runningActionsCount = 0;
var obj13078_onTap_loopCount = 0;
obj13078_onTap_actionGroup0();
});


















/*
 *
 *   obj13090: Event Touch Down
 *
 */

$("#obj13090").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13090_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13090_onTap is still running");
	return;
}
var obj13090_onTap_runningActionsCount = 0;
var obj13090_onTap_loopCount = 0;
obj13090_onTap_actionGroup0();
});


















/*
 *
 *   obj13095: Event Touch Down
 *
 */

$("#obj13095").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13095_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13095_onTap is still running");
	return;
}
var obj13095_onTap_runningActionsCount = 0;
var obj13095_onTap_loopCount = 0;
obj13095_onTap_actionGroup0();
});


















/*
 *
 *   obj13100: Event Touch Down
 *
 */

$("#obj13100").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13100_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13100_onTap is still running");
	return;
}
var obj13100_onTap_runningActionsCount = 0;
var obj13100_onTap_loopCount = 0;
obj13100_onTap_actionGroup0();
});


















/*
 *
 *   obj13216: Event Touch Down
 *
 */

$("#obj13216").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13216_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13216_onTap is still running");
	return;
}
var obj13216_onTap_runningActionsCount = 0;
var obj13216_onTap_loopCount = 0;
obj13216_onTap_actionGroup0();
});


















/*
 *
 *   obj13105: Event Touch Down
 *
 */

$("#obj13105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13105_onTap is still running");
	return;
}
var obj13105_onTap_runningActionsCount = 0;
var obj13105_onTap_loopCount = 0;
obj13105_onTap_actionGroup0();
});





































/*
 *
 *   obj13117: Event Touch Down
 *
 */

$("#obj13117").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13117_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13117_onTap is still running");
	return;
}
var obj13117_onTap_runningActionsCount = 0;
var obj13117_onTap_loopCount = 0;
obj13117_onTap_actionGroup0();
});


















/*
 *
 *   obj13129: Event Touch Down
 *
 */

$("#obj13129").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13129_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13129_onTap is still running");
	return;
}
var obj13129_onTap_runningActionsCount = 0;
var obj13129_onTap_loopCount = 0;
obj13129_onTap_actionGroup0();
});


















/*
 *
 *   obj13134: Event Touch Down
 *
 */

$("#obj13134").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13134_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13134_onTap is still running");
	return;
}
var obj13134_onTap_runningActionsCount = 0;
var obj13134_onTap_loopCount = 0;
obj13134_onTap_actionGroup0();
});


















/*
 *
 *   obj13139: Event Touch Down
 *
 */

$("#obj13139").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13139_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13139_onTap is still running");
	return;
}
var obj13139_onTap_runningActionsCount = 0;
var obj13139_onTap_loopCount = 0;
obj13139_onTap_actionGroup0();
});


















/*
 *
 *   obj13223: Event Touch Down
 *
 */

$("#obj13223").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13223_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13223_onTap is still running");
	return;
}
var obj13223_onTap_runningActionsCount = 0;
var obj13223_onTap_loopCount = 0;
obj13223_onTap_actionGroup0();
});


















/*
 *
 *   obj13144: Event Touch Down
 *
 */

$("#obj13144").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13144_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13144_onTap is still running");
	return;
}
var obj13144_onTap_runningActionsCount = 0;
var obj13144_onTap_loopCount = 0;
obj13144_onTap_actionGroup0();
});





































/*
 *
 *   obj13158: Event Touch Down
 *
 */

$("#obj13158").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13158_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13158_onTap is still running");
	return;
}
var obj13158_onTap_runningActionsCount = 0;
var obj13158_onTap_loopCount = 0;
obj13158_onTap_actionGroup0();
});


















/*
 *
 *   obj13170: Event Touch Down
 *
 */

$("#obj13170").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13170_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13170_onTap is still running");
	return;
}
var obj13170_onTap_runningActionsCount = 0;
var obj13170_onTap_loopCount = 0;
obj13170_onTap_actionGroup0();
});


















/*
 *
 *   obj13175: Event Touch Down
 *
 */

$("#obj13175").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13175_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13175_onTap is still running");
	return;
}
var obj13175_onTap_runningActionsCount = 0;
var obj13175_onTap_loopCount = 0;
obj13175_onTap_actionGroup0();
});


















/*
 *
 *   obj13180: Event Touch Down
 *
 */

$("#obj13180").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13180_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13180_onTap is still running");
	return;
}
var obj13180_onTap_runningActionsCount = 0;
var obj13180_onTap_loopCount = 0;
obj13180_onTap_actionGroup0();
});


















/*
 *
 *   obj13211: Event Touch Down
 *
 */

$("#obj13211").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13211_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13211_onTap is still running");
	return;
}
var obj13211_onTap_runningActionsCount = 0;
var obj13211_onTap_loopCount = 0;
obj13211_onTap_actionGroup0();
});


















/*
 *
 *   obj13185: Event Touch Down
 *
 */

$("#obj13185").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13185_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13185_onTap is still running");
	return;
}
var obj13185_onTap_runningActionsCount = 0;
var obj13185_onTap_loopCount = 0;
obj13185_onTap_actionGroup0();
});











































































/*
 *
 *   obj13197: Event Touch Down
 *
 */

$("#obj13197").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13197_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13197_onTap is still running");
	return;
}
var obj13197_onTap_runningActionsCount = 0;
var obj13197_onTap_loopCount = 0;
obj13197_onTap_actionGroup0();
});











































































/*
 *
 *   obj13288: Event Touch Down
 *
 */

$("#obj13288").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13288_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13288_onTap is still running");
	return;
}
var obj13288_onTap_runningActionsCount = 0;
var obj13288_onTap_loopCount = 0;
obj13288_onTap_actionGroup0();
});


















/*
 *
 *   obj13283: Event Touch Down
 *
 */

$("#obj13283").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13283_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13283_onTap is still running");
	return;
}
var obj13283_onTap_runningActionsCount = 0;
var obj13283_onTap_loopCount = 0;
obj13283_onTap_actionGroup0();
});


















/*
 *
 *   obj13278: Event Touch Down
 *
 */

$("#obj13278").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13278_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13278_onTap is still running");
	return;
}
var obj13278_onTap_runningActionsCount = 0;
var obj13278_onTap_loopCount = 0;
obj13278_onTap_actionGroup0();
});


















/*
 *
 *   obj13273: Event Touch Down
 *
 */

$("#obj13273").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13273_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13273_onTap is still running");
	return;
}
var obj13273_onTap_runningActionsCount = 0;
var obj13273_onTap_loopCount = 0;
obj13273_onTap_actionGroup0();
});


















/*
 *
 *   obj13268: Event Touch Down
 *
 */

$("#obj13268").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13268_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13268_onTap is still running");
	return;
}
var obj13268_onTap_runningActionsCount = 0;
var obj13268_onTap_loopCount = 0;
obj13268_onTap_actionGroup0();
});

































































/*
 *
 *   obj13253: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13253").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13253_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13253_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13253_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13253_SCEventCounterReachedTargetValue_loopCount = 0;
obj13253_SCEventCounterReachedTargetValue_actionGroup0();
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
	
$("#obj12948").trigger('SCEventShow');
$("#obj12953").trigger('SCEventShow');
$("#obj12955").trigger('SCEventShow');
$("#obj12957").trigger('SCEventShow');
$("#obj12963").trigger('SCEventShow');
$("#obj12965").trigger('SCEventShow');
$("#obj12967").trigger('SCEventShow');
$("#obj12980").trigger('SCEventShow');
$("#obj12982").trigger('SCEventShow');
$("#obj12984").trigger('SCEventShow');
$("#obj12986").trigger('SCEventShow');
$("#obj12988").trigger('SCEventShow');
$("#obj12990").trigger('SCEventShow');
$("#obj12992").trigger('SCEventShow');
$("#obj12994").trigger('SCEventShow');
$("#obj12996").trigger('SCEventShow');
$("#obj12998").trigger('SCEventShow');
$("#obj13000").trigger('SCEventShow');
$("#obj13002").trigger('SCEventShow');
$("#obj13004").trigger('SCEventShow');
$("#obj13006").trigger('SCEventShow');
$("#obj13008").trigger('SCEventShow');
$("#obj13010").trigger('SCEventShow');
$("#obj13043").trigger('SCEventShow');
$("#obj13045").trigger('SCEventShow');
$("#obj13066").trigger('SCEventShow');
$("#obj13105").trigger('SCEventShow');
$("#obj13144").trigger('SCEventShow');
$("#obj13185").trigger('SCEventShow');
$("#obj13209").trigger('SCEventShow');
$("#obj13207").trigger('SCEventShow');
$("#obj13197").trigger('SCEventShow');
$("#obj13242").trigger('SCEventShow');
$("#obj13240").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});