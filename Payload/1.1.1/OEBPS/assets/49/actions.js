pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 436;
pubcoder.page.title = pubcoder.page.title || "49";
pubcoder.page.number = pubcoder.page.number || 49;
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
var obj827_onTap_activeActionGroupIndex = -1;
var obj827_onTap_runningActionsCount = 0;
var obj827_onTap_loopCount = 0;
var obj829_onTap_activeActionGroupIndex = -1;
var obj829_onTap_runningActionsCount = 0;
var obj829_onTap_loopCount = 0;
var obj842_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj842_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj842_SCEventCounterReachedTargetValue_loopCount = 0;
var obj839_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj839_SCEventCounterReachedTargetValue_loopCount = 0;
var obj836_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj836_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj836_SCEventCounterReachedTargetValue_loopCount = 0;
var obj833_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj833_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj833_SCEventCounterReachedTargetValue_loopCount = 0;
var obj845_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj845_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj845_SCEventCounterReachedTargetValue_loopCount = 0;
var obj848_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj848_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj848_SCEventCounterReachedTargetValue_loopCount = 0;
var obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj851_SCEventCounterReachedTargetValue_loopCount = 0;
var obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj864_SCEventCounterReachedTargetValue_loopCount = 0;
var obj878_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj878_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj878_SCEventCounterReachedTargetValue_loopCount = 0;
var obj880_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj880_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj880_SCEventCounterReachedTargetValue_loopCount = 0;
var obj930_onTap_activeActionGroupIndex = -1;
var obj930_onTap_runningActionsCount = 0;
var obj930_onTap_loopCount = 0;
var obj920_onTap_activeActionGroupIndex = -1;
var obj920_onTap_runningActionsCount = 0;
var obj920_onTap_loopCount = 0;
var obj950_onTap_activeActionGroupIndex = -1;
var obj950_onTap_runningActionsCount = 0;
var obj950_onTap_loopCount = 0;
var obj940_onTap_activeActionGroupIndex = -1;
var obj940_onTap_runningActionsCount = 0;
var obj940_onTap_loopCount = 0;
var obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj966_SCEventCounterReachedTargetValue_loopCount = 0;
var obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj979_SCEventCounterReachedTargetValue_loopCount = 0;
var obj999_onTap_activeActionGroupIndex = -1;
var obj999_onTap_runningActionsCount = 0;
var obj999_onTap_loopCount = 0;
var obj988_onTap_activeActionGroupIndex = -1;
var obj988_onTap_runningActionsCount = 0;
var obj988_onTap_loopCount = 0;
var obj1023_onTap_activeActionGroupIndex = -1;
var obj1023_onTap_runningActionsCount = 0;
var obj1023_onTap_loopCount = 0;
var obj1012_onTap_activeActionGroupIndex = -1;
var obj1012_onTap_runningActionsCount = 0;
var obj1012_onTap_loopCount = 0;
var obj1045_onTap_activeActionGroupIndex = -1;
var obj1045_onTap_runningActionsCount = 0;
var obj1045_onTap_loopCount = 0;
var obj1034_onTap_activeActionGroupIndex = -1;
var obj1034_onTap_runningActionsCount = 0;
var obj1034_onTap_loopCount = 0;
var obj7437_onTap_activeActionGroupIndex = -1;
var obj7437_onTap_runningActionsCount = 0;
var obj7437_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj842_counterValue = 0;
var obj842_counterTargetValue = 2;
var obj842_counterCanExceedTargetValue = false;
var obj839_counterValue = 0;
var obj839_counterTargetValue = 4;
var obj839_counterCanExceedTargetValue = false;
var obj836_counterValue = 0;
var obj836_counterTargetValue = 3;
var obj836_counterCanExceedTargetValue = false;
var obj833_counterValue = 0;
var obj833_counterTargetValue = 1;
var obj833_counterCanExceedTargetValue = false;
var obj845_counterValue = 0;
var obj845_counterTargetValue = 5;
var obj845_counterCanExceedTargetValue = false;
var obj848_counterValue = 0;
var obj848_counterTargetValue = 6;
var obj848_counterCanExceedTargetValue = false;
var obj851_counterValue = 0;
var obj851_counterTargetValue = 1;
var obj851_counterCanExceedTargetValue = false;
var obj864_counterValue = 0;
var obj864_counterTargetValue = 1;
var obj864_counterCanExceedTargetValue = false;
var obj876_counterValue = 0;
var obj876_counterTargetValue = 2;
var obj876_counterCanExceedTargetValue = false;
var obj878_counterValue = 0;
var obj878_counterTargetValue = 6;
var obj878_counterCanExceedTargetValue = false;
var obj880_counterValue = 0;
var obj880_counterTargetValue = 6;
var obj880_counterCanExceedTargetValue = false;
var obj966_counterValue = 0;
var obj966_counterTargetValue = 1;
var obj966_counterCanExceedTargetValue = false;
var obj979_counterValue = 0;
var obj979_counterTargetValue = 1;
var obj979_counterCanExceedTargetValue = false;

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
		
obj827_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onTap_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup1();
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
				window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj827_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onTap_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj816
(function(){
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;


	var selector = "#obj816";
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
					window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup2();
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
				window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj827_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onTap_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj851 
setCounterValue_863();
function setCounterValue_863() {
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;


	var oldValue = obj851_counterValue;
	obj851_counterValue = 1;
	if (obj851_counterValue < 0) {
		obj851_counterValue = 0;
	} else if (! obj851_counterCanExceedTargetValue && obj851_counterValue > obj851_counterTargetValue) {
		obj851_counterValue = obj851_counterTargetValue;
	}

	if (oldValue != obj851_counterValue) {
		$("#obj851").trigger('SCEventCounterValueChange');
		if (obj851_counterValue == obj851_counterTargetValue)
			$("#obj851").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup3();
} }, 1);
}









};
obj827_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onTap_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_885();
function wait_885() {
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj827_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onTap_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7275 
hide_886();
function hide_886() {
	var selector = "#obj7275";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_886(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj816 
hide_887();
function hide_887() {
	var selector = "#obj816";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_887(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj784 
hide_888();
function hide_888() {
	var selector = "#obj784";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_888(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj827 
hide_916();
function hide_916() {
	var selector = "#obj827";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_916(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj786
(function(){
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;


	var selector = "#obj786";
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
					window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
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
				window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj930
(function(){
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;


	var selector = "#obj930";
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
					window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
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
				window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj920
(function(){
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;


	var selector = "#obj920";
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
					window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
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
				window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj827_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onTap_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7706();
function hide_7706() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7706(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;

if (window.obj827_onTap_runningActionsCount < 0) {
	window.obj827_onTap_runningActionsCount = 0;
} else if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj827_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj827_onTap_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onTap_activeActionGroupIndex = 6;
	











































};
obj829_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj829_onTap_activeActionGroupIndex = -1;
		$("#obj829").trigger("obj829_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 829) {
				console.warn("de-queueing event obj829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj829_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup1();
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
				window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj829_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj829_onTap_activeActionGroupIndex = -1;
		$("#obj829").trigger("obj829_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 829) {
				console.warn("de-queueing event obj829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj829_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj818
(function(){
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;


	var selector = "#obj818";
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
					window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup2();
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
				window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj829_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj829_onTap_activeActionGroupIndex = -1;
		$("#obj829").trigger("obj829_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 829) {
				console.warn("de-queueing event obj829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj829_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj864 
setCounterValue_891();
function setCounterValue_891() {
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;


	var oldValue = obj864_counterValue;
	obj864_counterValue = 1;
	if (obj864_counterValue < 0) {
		obj864_counterValue = 0;
	} else if (! obj864_counterCanExceedTargetValue && obj864_counterValue > obj864_counterTargetValue) {
		obj864_counterValue = obj864_counterTargetValue;
	}

	if (oldValue != obj864_counterValue) {
		$("#obj864").trigger('SCEventCounterValueChange');
		if (obj864_counterValue == obj864_counterTargetValue)
			$("#obj864").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup3();
} }, 1);
}









};
obj829_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj829_onTap_activeActionGroupIndex = -1;
		$("#obj829").trigger("obj829_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 829) {
				console.warn("de-queueing event obj829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj829_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_892();
function wait_892() {
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj829_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj829_onTap_activeActionGroupIndex = -1;
		$("#obj829").trigger("obj829_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 829) {
				console.warn("de-queueing event obj829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj829_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7279 
hide_893();
function hide_893() {
	var selector = "#obj7279";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_893(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj818 
hide_894();
function hide_894() {
	var selector = "#obj818";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_894(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj784 
hide_895();
function hide_895() {
	var selector = "#obj784";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_895(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj829 
hide_918();
function hide_918() {
	var selector = "#obj829";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_918(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj786
(function(){
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;


	var selector = "#obj786";
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
					window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
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
				window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj930
(function(){
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;


	var selector = "#obj930";
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
					window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
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
				window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj920
(function(){
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;


	var selector = "#obj920";
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
					window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
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
				window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj829_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj829_onTap_activeActionGroupIndex = -1;
		$("#obj829").trigger("obj829_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 829) {
				console.warn("de-queueing event obj829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj829_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7705();
function hide_7705() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj829_onTap_runningActionsCount = obj829_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7705(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj829_onTap_runningActionsCount = window.obj829_onTap_runningActionsCount - 1;

if (window.obj829_onTap_runningActionsCount < 0) {
	window.obj829_onTap_runningActionsCount = 0;
} else if (window.obj829_onTap_runningActionsCount == 0) {
	obj829_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj829_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj829_onTap_activeActionGroupIndex = -1;
		$("#obj829").trigger("obj829_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 829) {
				console.warn("de-queueing event obj829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj829_onTap_activeActionGroupIndex = 6;
	











































};
obj842_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj842_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj842").trigger("obj842_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 842) {
				console.warn("de-queueing event obj842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj842_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_844();
function switchText_844() {
	window.obj842_SCEventCounterReachedTargetValue_runningActionsCount = obj842_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj560_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj560_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj560").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj560_content");
			setTimeout(function () {
				window.obj842_SCEventCounterReachedTargetValue_runningActionsCount = window.obj842_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj842_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj842_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj842_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj842_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj560 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj842_SCEventCounterReachedTargetValue_runningActionsCount = window.obj842_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj842_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj842_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj842_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj842_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj842_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj842_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj842").trigger("obj842_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 842) {
				console.warn("de-queueing event obj842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj842_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj839_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj839_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj839").trigger("obj839_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 839) {
				console.warn("de-queueing event obj839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj839_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_841();
function switchText_841() {
	window.obj839_SCEventCounterReachedTargetValue_runningActionsCount = obj839_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>4/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj560_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj560_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj560").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj560_content");
			setTimeout(function () {
				window.obj839_SCEventCounterReachedTargetValue_runningActionsCount = window.obj839_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj839_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj839_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj839_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj560 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj839_SCEventCounterReachedTargetValue_runningActionsCount = window.obj839_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj839_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj839_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj839_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj839_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj839_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj839").trigger("obj839_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 839) {
				console.warn("de-queueing event obj839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj839_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj836_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj836_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj836").trigger("obj836_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 836) {
				console.warn("de-queueing event obj836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj836_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_838();
function switchText_838() {
	window.obj836_SCEventCounterReachedTargetValue_runningActionsCount = obj836_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj560_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj560_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj560").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj560_content");
			setTimeout(function () {
				window.obj836_SCEventCounterReachedTargetValue_runningActionsCount = window.obj836_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj836_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj836_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj836_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj836_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj560 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj836_SCEventCounterReachedTargetValue_runningActionsCount = window.obj836_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj836_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj836_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj836_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj836_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj836_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj836_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj836").trigger("obj836_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 836) {
				console.warn("de-queueing event obj836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj836_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj833_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj833_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj833").trigger("obj833_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 833) {
				console.warn("de-queueing event obj833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj833_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_835();
function switchText_835() {
	window.obj833_SCEventCounterReachedTargetValue_runningActionsCount = obj833_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj560_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj560_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj560").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj560_content");
			setTimeout(function () {
				window.obj833_SCEventCounterReachedTargetValue_runningActionsCount = window.obj833_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj833_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj833_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj833_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj833_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj560 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj833_SCEventCounterReachedTargetValue_runningActionsCount = window.obj833_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj833_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj833_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj833_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj833_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj833_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj833_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj833").trigger("obj833_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 833) {
				console.warn("de-queueing event obj833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj833_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj845_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj845_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj845").trigger("obj845_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 845) {
				console.warn("de-queueing event obj845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj845_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_847();
function switchText_847() {
	window.obj845_SCEventCounterReachedTargetValue_runningActionsCount = obj845_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>5/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj560_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj560_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj560").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj560_content");
			setTimeout(function () {
				window.obj845_SCEventCounterReachedTargetValue_runningActionsCount = window.obj845_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj845_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj845_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj845_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj845_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj560 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj845_SCEventCounterReachedTargetValue_runningActionsCount = window.obj845_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj845_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj845_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj845_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj845_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj845_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj845_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj845").trigger("obj845_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 845) {
				console.warn("de-queueing event obj845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj845_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj848_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj848_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj848").trigger("obj848_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 848) {
				console.warn("de-queueing event obj848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj848_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_850();
function switchText_850() {
	window.obj848_SCEventCounterReachedTargetValue_runningActionsCount = obj848_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>6/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj560_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj560_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj560").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj560_content");
			setTimeout(function () {
				window.obj848_SCEventCounterReachedTargetValue_runningActionsCount = window.obj848_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj848_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj848_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj848_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj848_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj560 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj848_SCEventCounterReachedTargetValue_runningActionsCount = window.obj848_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj848_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj848_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj848_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj848_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj848_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj848_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj848").trigger("obj848_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 848) {
				console.warn("de-queueing event obj848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj848_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj851_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj851").trigger("obj851_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 851) {
				console.warn("de-queueing event obj851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_862();
function playAudioFile_862() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile862")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile862");
			$("#obj_audio_playSoundFile862").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, false);
		} else {
			window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj851_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj851").trigger("obj851_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 851) {
				console.warn("de-queueing event obj851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj7275
(function(){
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7275";
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
					window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj851_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj851").trigger("obj851_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 851) {
				console.warn("de-queueing event obj851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	































//	action: increment counter
//	target: obj833 
incrementCounter_853();
function incrementCounter_853() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj833_counterValue;
	obj833_counterValue = obj833_counterValue + 1;
	if (! obj833_counterCanExceedTargetValue && obj833_counterValue > obj833_counterTargetValue) {
		obj833_counterValue = obj833_counterTargetValue;
	}

	if (oldValue != obj833_counterValue) {
		$("#obj833").trigger('SCEventCounterValueChange');
		$("#obj833").trigger('SCEventCounterIncrease');
		if (obj833_counterValue == obj833_counterTargetValue)
			$("#obj833").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj842 
incrementCounter_854();
function incrementCounter_854() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj842_counterValue;
	obj842_counterValue = obj842_counterValue + 1;
	if (! obj842_counterCanExceedTargetValue && obj842_counterValue > obj842_counterTargetValue) {
		obj842_counterValue = obj842_counterTargetValue;
	}

	if (oldValue != obj842_counterValue) {
		$("#obj842").trigger('SCEventCounterValueChange');
		$("#obj842").trigger('SCEventCounterIncrease');
		if (obj842_counterValue == obj842_counterTargetValue)
			$("#obj842").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj836 
incrementCounter_855();
function incrementCounter_855() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj836_counterValue;
	obj836_counterValue = obj836_counterValue + 1;
	if (! obj836_counterCanExceedTargetValue && obj836_counterValue > obj836_counterTargetValue) {
		obj836_counterValue = obj836_counterTargetValue;
	}

	if (oldValue != obj836_counterValue) {
		$("#obj836").trigger('SCEventCounterValueChange');
		$("#obj836").trigger('SCEventCounterIncrease');
		if (obj836_counterValue == obj836_counterTargetValue)
			$("#obj836").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj839 
incrementCounter_856();
function incrementCounter_856() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj839_counterValue;
	obj839_counterValue = obj839_counterValue + 1;
	if (! obj839_counterCanExceedTargetValue && obj839_counterValue > obj839_counterTargetValue) {
		obj839_counterValue = obj839_counterTargetValue;
	}

	if (oldValue != obj839_counterValue) {
		$("#obj839").trigger('SCEventCounterValueChange');
		$("#obj839").trigger('SCEventCounterIncrease');
		if (obj839_counterValue == obj839_counterTargetValue)
			$("#obj839").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj845 
incrementCounter_857();
function incrementCounter_857() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj845_counterValue;
	obj845_counterValue = obj845_counterValue + 1;
	if (! obj845_counterCanExceedTargetValue && obj845_counterValue > obj845_counterTargetValue) {
		obj845_counterValue = obj845_counterTargetValue;
	}

	if (oldValue != obj845_counterValue) {
		$("#obj845").trigger('SCEventCounterValueChange');
		$("#obj845").trigger('SCEventCounterIncrease');
		if (obj845_counterValue == obj845_counterTargetValue)
			$("#obj845").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj848 
incrementCounter_858();
function incrementCounter_858() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj848_counterValue;
	obj848_counterValue = obj848_counterValue + 1;
	if (! obj848_counterCanExceedTargetValue && obj848_counterValue > obj848_counterTargetValue) {
		obj848_counterValue = obj848_counterTargetValue;
	}

	if (oldValue != obj848_counterValue) {
		$("#obj848").trigger('SCEventCounterValueChange');
		$("#obj848").trigger('SCEventCounterIncrease');
		if (obj848_counterValue == obj848_counterTargetValue)
			$("#obj848").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj880 
incrementCounter_883();
function incrementCounter_883() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj880_counterValue;
	obj880_counterValue = obj880_counterValue + 1;
	if (! obj880_counterCanExceedTargetValue && obj880_counterValue > obj880_counterTargetValue) {
		obj880_counterValue = obj880_counterTargetValue;
	}

	if (oldValue != obj880_counterValue) {
		$("#obj880").trigger('SCEventCounterValueChange');
		$("#obj880").trigger('SCEventCounterIncrease');
		if (obj880_counterValue == obj880_counterTargetValue)
			$("#obj880").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj878 
incrementCounter_1066();
function incrementCounter_1066() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj878_counterValue;
	obj878_counterValue = obj878_counterValue + 1;
	if (! obj878_counterCanExceedTargetValue && obj878_counterValue > obj878_counterTargetValue) {
		obj878_counterValue = obj878_counterTargetValue;
	}

	if (oldValue != obj878_counterValue) {
		$("#obj878").trigger('SCEventCounterValueChange');
		$("#obj878").trigger('SCEventCounterIncrease');
		if (obj878_counterValue == obj878_counterTargetValue)
			$("#obj878").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}











};
obj851_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj851").trigger("obj851_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 851) {
				console.warn("de-queueing event obj851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	
































//	action: decrement counter
//	target: obj851 
decrementCounter_859();
function decrementCounter_859() {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = obj851_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj851_counterValue;
	obj851_counterValue = obj851_counterValue - 1;
	if (obj851_counterValue < 0) {
		obj851_counterValue = 0;
	}

	if (oldValue != obj851_counterValue) {
		$("#obj851").trigger('SCEventCounterValueChange');
		$("#obj851").trigger('SCEventCounterDecrease');
		if (obj851_counterValue == obj851_counterTargetValue)
			$("#obj851").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = window.obj851_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj851_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj851_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}










};
obj851_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj851").trigger("obj851_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 851) {
				console.warn("de-queueing event obj851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	











































};
obj864_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj864").trigger("obj864_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 864) {
				console.warn("de-queueing event obj864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_866();
function playAudioFile_866() {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = obj864_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile866")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile866");
			$("#obj_audio_playSoundFile866").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = window.obj864_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj864_SCEventCounterReachedTargetValue_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = window.obj864_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj864_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = window.obj864_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj864_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, false);
		} else {
			window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = window.obj864_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj864_SCEventCounterReachedTargetValue_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj864_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj864").trigger("obj864_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 864) {
				console.warn("de-queueing event obj864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj7279
(function(){
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = obj864_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7279";
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
					window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = window.obj864_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj864_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = window.obj864_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj864_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




























//	action: increment counter
//	target: obj880 
incrementCounter_882();
function incrementCounter_882() {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = obj864_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj880_counterValue;
	obj880_counterValue = obj880_counterValue + 1;
	if (! obj880_counterCanExceedTargetValue && obj880_counterValue > obj880_counterTargetValue) {
		obj880_counterValue = obj880_counterTargetValue;
	}

	if (oldValue != obj880_counterValue) {
		$("#obj880").trigger('SCEventCounterValueChange');
		$("#obj880").trigger('SCEventCounterIncrease');
		if (obj880_counterValue == obj880_counterTargetValue)
			$("#obj880").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = window.obj864_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj864_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}











};
obj864_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj864").trigger("obj864_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 864) {
				console.warn("de-queueing event obj864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
































//	action: decrement counter
//	target: obj864 
decrementCounter_875();
function decrementCounter_875() {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = obj864_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj864_counterValue;
	obj864_counterValue = obj864_counterValue - 1;
	if (obj864_counterValue < 0) {
		obj864_counterValue = 0;
	}

	if (oldValue != obj864_counterValue) {
		$("#obj864").trigger('SCEventCounterValueChange');
		$("#obj864").trigger('SCEventCounterDecrease');
		if (obj864_counterValue == obj864_counterTargetValue)
			$("#obj864").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = window.obj864_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj864_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj864_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}










};
obj864_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj864").trigger("obj864_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 864) {
				console.warn("de-queueing event obj864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj878_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj878_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 878) {
				console.warn("de-queueing event obj878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj878_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_6381();
function wait_6381() {
	window.obj878_SCEventCounterReachedTargetValue_runningActionsCount = obj878_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj878_SCEventCounterReachedTargetValue_runningActionsCount = window.obj878_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj878_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj878_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj878_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj878_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj878_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj878_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 878) {
				console.warn("de-queueing event obj878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj878_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_3943();
function goToPage_3943() {
	window.obj878_SCEventCounterReachedTargetValue_runningActionsCount = obj878_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor857")[0].click();
	window.obj878_SCEventCounterReachedTargetValue_runningActionsCount = window.obj878_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj878_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj878_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj878_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj878_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj878_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj878_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 878) {
				console.warn("de-queueing event obj878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj878_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj880_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj880_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj880").trigger("obj880_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 880) {
				console.warn("de-queueing event obj880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj880_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_1070();
function wait_1070() {
	window.obj880_SCEventCounterReachedTargetValue_runningActionsCount = obj880_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj880_SCEventCounterReachedTargetValue_runningActionsCount = window.obj880_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj880_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj880_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj880_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj880_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1500);
}


























};
obj880_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj880_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj880").trigger("obj880_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 880) {
				console.warn("de-queueing event obj880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj880_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_7746();
function goToPage_7746() {
	window.obj880_SCEventCounterReachedTargetValue_runningActionsCount = obj880_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor858")[0].click();
	window.obj880_SCEventCounterReachedTargetValue_runningActionsCount = window.obj880_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj880_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj880_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj880_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj880_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj880_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj880_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj880").trigger("obj880_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 880) {
				console.warn("de-queueing event obj880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj880_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj930_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj930_onTap_activeActionGroupIndex = -1;
		$("#obj930").trigger("obj930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 930) {
				console.warn("de-queueing event obj930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj930_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup1();
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
				window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj930_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj930_onTap_activeActionGroupIndex = -1;
		$("#obj930").trigger("obj930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 930) {
				console.warn("de-queueing event obj930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj930_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj816
(function(){
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;


	var selector = "#obj816";
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
					window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup2();
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
				window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj930_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj930_onTap_activeActionGroupIndex = -1;
		$("#obj930").trigger("obj930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 930) {
				console.warn("de-queueing event obj930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj930_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj851 
setCounterValue_932();
function setCounterValue_932() {
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;


	var oldValue = obj851_counterValue;
	obj851_counterValue = 1;
	if (obj851_counterValue < 0) {
		obj851_counterValue = 0;
	} else if (! obj851_counterCanExceedTargetValue && obj851_counterValue > obj851_counterTargetValue) {
		obj851_counterValue = obj851_counterTargetValue;
	}

	if (oldValue != obj851_counterValue) {
		$("#obj851").trigger('SCEventCounterValueChange');
		if (obj851_counterValue == obj851_counterTargetValue)
			$("#obj851").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup3();
} }, 1);
}









};
obj930_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj930_onTap_activeActionGroupIndex = -1;
		$("#obj930").trigger("obj930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 930) {
				console.warn("de-queueing event obj930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj930_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_933();
function wait_933() {
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj930_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj930_onTap_activeActionGroupIndex = -1;
		$("#obj930").trigger("obj930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 930) {
				console.warn("de-queueing event obj930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj930_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7275 
hide_934();
function hide_934() {
	var selector = "#obj7275";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_934(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj816 
hide_935();
function hide_935() {
	var selector = "#obj816";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_935(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj786 
hide_936();
function hide_936() {
	var selector = "#obj786";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_936(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj930 
hide_938();
function hide_938() {
	var selector = "#obj930";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_938(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj796
(function(){
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;


	var selector = "#obj796";
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
					window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
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
				window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj950
(function(){
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;


	var selector = "#obj950";
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
					window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
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
				window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj940
(function(){
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;


	var selector = "#obj940";
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
					window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
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
				window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj930_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj930_onTap_activeActionGroupIndex = -1;
		$("#obj930").trigger("obj930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 930) {
				console.warn("de-queueing event obj930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj930_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7707();
function hide_7707() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj930_onTap_runningActionsCount = obj930_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7707(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj930_onTap_runningActionsCount = window.obj930_onTap_runningActionsCount - 1;

if (window.obj930_onTap_runningActionsCount < 0) {
	window.obj930_onTap_runningActionsCount = 0;
} else if (window.obj930_onTap_runningActionsCount == 0) {
	obj930_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj930_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj930_onTap_activeActionGroupIndex = -1;
		$("#obj930").trigger("obj930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 930) {
				console.warn("de-queueing event obj930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj930_onTap_activeActionGroupIndex = 6;
	











































};
obj920_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj920_onTap_activeActionGroupIndex = -1;
		$("#obj920").trigger("obj920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 920) {
				console.warn("de-queueing event obj920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj920_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup1();
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
				window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj920_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj920_onTap_activeActionGroupIndex = -1;
		$("#obj920").trigger("obj920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 920) {
				console.warn("de-queueing event obj920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj920_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj818
(function(){
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;


	var selector = "#obj818";
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
					window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup2();
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
				window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj920_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj920_onTap_activeActionGroupIndex = -1;
		$("#obj920").trigger("obj920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 920) {
				console.warn("de-queueing event obj920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj920_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj864 
setCounterValue_922();
function setCounterValue_922() {
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;


	var oldValue = obj864_counterValue;
	obj864_counterValue = 1;
	if (obj864_counterValue < 0) {
		obj864_counterValue = 0;
	} else if (! obj864_counterCanExceedTargetValue && obj864_counterValue > obj864_counterTargetValue) {
		obj864_counterValue = obj864_counterTargetValue;
	}

	if (oldValue != obj864_counterValue) {
		$("#obj864").trigger('SCEventCounterValueChange');
		if (obj864_counterValue == obj864_counterTargetValue)
			$("#obj864").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup3();
} }, 1);
}









};
obj920_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj920_onTap_activeActionGroupIndex = -1;
		$("#obj920").trigger("obj920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 920) {
				console.warn("de-queueing event obj920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj920_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_923();
function wait_923() {
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj920_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj920_onTap_activeActionGroupIndex = -1;
		$("#obj920").trigger("obj920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 920) {
				console.warn("de-queueing event obj920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj920_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7279 
hide_924();
function hide_924() {
	var selector = "#obj7279";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_924(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj818 
hide_925();
function hide_925() {
	var selector = "#obj818";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_925(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj786 
hide_926();
function hide_926() {
	var selector = "#obj786";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_926(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj920 
hide_928();
function hide_928() {
	var selector = "#obj920";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_928(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj796
(function(){
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;


	var selector = "#obj796";
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
					window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
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
				window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj950
(function(){
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;


	var selector = "#obj950";
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
					window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
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
				window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj940
(function(){
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;


	var selector = "#obj940";
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
					window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
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
				window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj920_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj920_onTap_activeActionGroupIndex = -1;
		$("#obj920").trigger("obj920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 920) {
				console.warn("de-queueing event obj920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj920_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7708();
function hide_7708() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj920_onTap_runningActionsCount = obj920_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7708(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj920_onTap_runningActionsCount = window.obj920_onTap_runningActionsCount - 1;

if (window.obj920_onTap_runningActionsCount < 0) {
	window.obj920_onTap_runningActionsCount = 0;
} else if (window.obj920_onTap_runningActionsCount == 0) {
	obj920_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj920_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj920_onTap_activeActionGroupIndex = -1;
		$("#obj920").trigger("obj920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 920) {
				console.warn("de-queueing event obj920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj920_onTap_activeActionGroupIndex = 6;
	











































};
obj950_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj950_onTap_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 950) {
				console.warn("de-queueing event obj950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj950_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup1();
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
				window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj950_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj950_onTap_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 950) {
				console.warn("de-queueing event obj950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj950_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj816
(function(){
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;


	var selector = "#obj816";
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
					window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup2();
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
				window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj950_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj950_onTap_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 950) {
				console.warn("de-queueing event obj950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj950_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj979 
setCounterValue_952();
function setCounterValue_952() {
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;


	var oldValue = obj979_counterValue;
	obj979_counterValue = 1;
	if (obj979_counterValue < 0) {
		obj979_counterValue = 0;
	} else if (! obj979_counterCanExceedTargetValue && obj979_counterValue > obj979_counterTargetValue) {
		obj979_counterValue = obj979_counterTargetValue;
	}

	if (oldValue != obj979_counterValue) {
		$("#obj979").trigger('SCEventCounterValueChange');
		if (obj979_counterValue == obj979_counterTargetValue)
			$("#obj979").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup3();
} }, 1);
}









};
obj950_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj950_onTap_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 950) {
				console.warn("de-queueing event obj950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj950_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_953();
function wait_953() {
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj950_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj950_onTap_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 950) {
				console.warn("de-queueing event obj950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj950_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7281 
hide_954();
function hide_954() {
	var selector = "#obj7281";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_954(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj816 
hide_955();
function hide_955() {
	var selector = "#obj816";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_955(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj796 
hide_956();
function hide_956() {
	var selector = "#obj796";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_956(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj950 
hide_958();
function hide_958() {
	var selector = "#obj950";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_958(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj798
(function(){
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;


	var selector = "#obj798";
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
					window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
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
				window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj999
(function(){
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;


	var selector = "#obj999";
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
					window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
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
				window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj988
(function(){
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;


	var selector = "#obj988";
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
					window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
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
				window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj950_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj950_onTap_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 950) {
				console.warn("de-queueing event obj950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj950_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7709();
function hide_7709() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj950_onTap_runningActionsCount = obj950_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7709(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj950_onTap_runningActionsCount = window.obj950_onTap_runningActionsCount - 1;

if (window.obj950_onTap_runningActionsCount < 0) {
	window.obj950_onTap_runningActionsCount = 0;
} else if (window.obj950_onTap_runningActionsCount == 0) {
	obj950_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj950_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj950_onTap_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 950) {
				console.warn("de-queueing event obj950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj950_onTap_activeActionGroupIndex = 6;
	











































};
obj940_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj940_onTap_activeActionGroupIndex = -1;
		$("#obj940").trigger("obj940_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 940) {
				console.warn("de-queueing event obj940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj940_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup1();
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
				window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj940_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj940_onTap_activeActionGroupIndex = -1;
		$("#obj940").trigger("obj940_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 940) {
				console.warn("de-queueing event obj940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj940_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj818
(function(){
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;


	var selector = "#obj818";
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
					window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup2();
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
				window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj940_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj940_onTap_activeActionGroupIndex = -1;
		$("#obj940").trigger("obj940_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 940) {
				console.warn("de-queueing event obj940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj940_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj966 
setCounterValue_942();
function setCounterValue_942() {
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;


	var oldValue = obj966_counterValue;
	obj966_counterValue = 1;
	if (obj966_counterValue < 0) {
		obj966_counterValue = 0;
	} else if (! obj966_counterCanExceedTargetValue && obj966_counterValue > obj966_counterTargetValue) {
		obj966_counterValue = obj966_counterTargetValue;
	}

	if (oldValue != obj966_counterValue) {
		$("#obj966").trigger('SCEventCounterValueChange');
		if (obj966_counterValue == obj966_counterTargetValue)
			$("#obj966").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup3();
} }, 1);
}









};
obj940_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj940_onTap_activeActionGroupIndex = -1;
		$("#obj940").trigger("obj940_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 940) {
				console.warn("de-queueing event obj940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj940_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_943();
function wait_943() {
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj940_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj940_onTap_activeActionGroupIndex = -1;
		$("#obj940").trigger("obj940_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 940) {
				console.warn("de-queueing event obj940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj940_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7277 
hide_944();
function hide_944() {
	var selector = "#obj7277";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_944(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj818 
hide_945();
function hide_945() {
	var selector = "#obj818";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_945(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj796 
hide_946();
function hide_946() {
	var selector = "#obj796";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_946(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj940 
hide_948();
function hide_948() {
	var selector = "#obj940";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_948(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj798
(function(){
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;


	var selector = "#obj798";
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
					window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
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
				window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj999
(function(){
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;


	var selector = "#obj999";
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
					window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
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
				window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj988
(function(){
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;


	var selector = "#obj988";
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
					window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
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
				window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj940_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj940_onTap_activeActionGroupIndex = -1;
		$("#obj940").trigger("obj940_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 940) {
				console.warn("de-queueing event obj940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj940_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7710();
function hide_7710() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj940_onTap_runningActionsCount = obj940_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7710(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj940_onTap_runningActionsCount = window.obj940_onTap_runningActionsCount - 1;

if (window.obj940_onTap_runningActionsCount < 0) {
	window.obj940_onTap_runningActionsCount = 0;
} else if (window.obj940_onTap_runningActionsCount == 0) {
	obj940_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj940_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj940_onTap_activeActionGroupIndex = -1;
		$("#obj940").trigger("obj940_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 940) {
				console.warn("de-queueing event obj940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj940_onTap_activeActionGroupIndex = 6;
	











































};
obj966_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj966").trigger("obj966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 966) {
				console.warn("de-queueing event obj966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_968();
function playAudioFile_968() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile968")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile968");
			$("#obj_audio_playSoundFile968").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, false);
		} else {
			window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj966_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj966").trigger("obj966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 966) {
				console.warn("de-queueing event obj966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj7277
(function(){
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7277";
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
					window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj966_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj966").trigger("obj966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 966) {
				console.warn("de-queueing event obj966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	































//	action: increment counter
//	target: obj833 
incrementCounter_971();
function incrementCounter_971() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj833_counterValue;
	obj833_counterValue = obj833_counterValue + 1;
	if (! obj833_counterCanExceedTargetValue && obj833_counterValue > obj833_counterTargetValue) {
		obj833_counterValue = obj833_counterTargetValue;
	}

	if (oldValue != obj833_counterValue) {
		$("#obj833").trigger('SCEventCounterValueChange');
		$("#obj833").trigger('SCEventCounterIncrease');
		if (obj833_counterValue == obj833_counterTargetValue)
			$("#obj833").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj842 
incrementCounter_972();
function incrementCounter_972() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj842_counterValue;
	obj842_counterValue = obj842_counterValue + 1;
	if (! obj842_counterCanExceedTargetValue && obj842_counterValue > obj842_counterTargetValue) {
		obj842_counterValue = obj842_counterTargetValue;
	}

	if (oldValue != obj842_counterValue) {
		$("#obj842").trigger('SCEventCounterValueChange');
		$("#obj842").trigger('SCEventCounterIncrease');
		if (obj842_counterValue == obj842_counterTargetValue)
			$("#obj842").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj836 
incrementCounter_973();
function incrementCounter_973() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj836_counterValue;
	obj836_counterValue = obj836_counterValue + 1;
	if (! obj836_counterCanExceedTargetValue && obj836_counterValue > obj836_counterTargetValue) {
		obj836_counterValue = obj836_counterTargetValue;
	}

	if (oldValue != obj836_counterValue) {
		$("#obj836").trigger('SCEventCounterValueChange');
		$("#obj836").trigger('SCEventCounterIncrease');
		if (obj836_counterValue == obj836_counterTargetValue)
			$("#obj836").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj839 
incrementCounter_974();
function incrementCounter_974() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj839_counterValue;
	obj839_counterValue = obj839_counterValue + 1;
	if (! obj839_counterCanExceedTargetValue && obj839_counterValue > obj839_counterTargetValue) {
		obj839_counterValue = obj839_counterTargetValue;
	}

	if (oldValue != obj839_counterValue) {
		$("#obj839").trigger('SCEventCounterValueChange');
		$("#obj839").trigger('SCEventCounterIncrease');
		if (obj839_counterValue == obj839_counterTargetValue)
			$("#obj839").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj845 
incrementCounter_975();
function incrementCounter_975() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj845_counterValue;
	obj845_counterValue = obj845_counterValue + 1;
	if (! obj845_counterCanExceedTargetValue && obj845_counterValue > obj845_counterTargetValue) {
		obj845_counterValue = obj845_counterTargetValue;
	}

	if (oldValue != obj845_counterValue) {
		$("#obj845").trigger('SCEventCounterValueChange');
		$("#obj845").trigger('SCEventCounterIncrease');
		if (obj845_counterValue == obj845_counterTargetValue)
			$("#obj845").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj848 
incrementCounter_976();
function incrementCounter_976() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj848_counterValue;
	obj848_counterValue = obj848_counterValue + 1;
	if (! obj848_counterCanExceedTargetValue && obj848_counterValue > obj848_counterTargetValue) {
		obj848_counterValue = obj848_counterTargetValue;
	}

	if (oldValue != obj848_counterValue) {
		$("#obj848").trigger('SCEventCounterValueChange');
		$("#obj848").trigger('SCEventCounterIncrease');
		if (obj848_counterValue == obj848_counterTargetValue)
			$("#obj848").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj880 
incrementCounter_977();
function incrementCounter_977() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj880_counterValue;
	obj880_counterValue = obj880_counterValue + 1;
	if (! obj880_counterCanExceedTargetValue && obj880_counterValue > obj880_counterTargetValue) {
		obj880_counterValue = obj880_counterTargetValue;
	}

	if (oldValue != obj880_counterValue) {
		$("#obj880").trigger('SCEventCounterValueChange');
		$("#obj880").trigger('SCEventCounterIncrease');
		if (obj880_counterValue == obj880_counterTargetValue)
			$("#obj880").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}
//	action: increment counter
//	target: obj878 
incrementCounter_1067();
function incrementCounter_1067() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj878_counterValue;
	obj878_counterValue = obj878_counterValue + 1;
	if (! obj878_counterCanExceedTargetValue && obj878_counterValue > obj878_counterTargetValue) {
		obj878_counterValue = obj878_counterTargetValue;
	}

	if (oldValue != obj878_counterValue) {
		$("#obj878").trigger('SCEventCounterValueChange');
		$("#obj878").trigger('SCEventCounterIncrease');
		if (obj878_counterValue == obj878_counterTargetValue)
			$("#obj878").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}











};
obj966_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj966").trigger("obj966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 966) {
				console.warn("de-queueing event obj966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	
































//	action: decrement counter
//	target: obj966 
decrementCounter_978();
function decrementCounter_978() {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = obj966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj966_counterValue;
	obj966_counterValue = obj966_counterValue - 1;
	if (obj966_counterValue < 0) {
		obj966_counterValue = 0;
	}

	if (oldValue != obj966_counterValue) {
		$("#obj966").trigger('SCEventCounterValueChange');
		$("#obj966").trigger('SCEventCounterDecrease');
		if (obj966_counterValue == obj966_counterTargetValue)
			$("#obj966").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj966_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}










};
obj966_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj966").trigger("obj966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 966) {
				console.warn("de-queueing event obj966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	











































};
obj979_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj979").trigger("obj979_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 979) {
				console.warn("de-queueing event obj979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_981();
function playAudioFile_981() {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = obj979_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile981")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile981");
			$("#obj_audio_playSoundFile981").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = window.obj979_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj979_SCEventCounterReachedTargetValue_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = window.obj979_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj979_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = window.obj979_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj979_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, false);
		} else {
			window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = window.obj979_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj979_SCEventCounterReachedTargetValue_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj979_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj979").trigger("obj979_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 979) {
				console.warn("de-queueing event obj979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj7281
(function(){
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = obj979_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7281";
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
					window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = window.obj979_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj979_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = window.obj979_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj979_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




























//	action: increment counter
//	target: obj880 
incrementCounter_984();
function incrementCounter_984() {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = obj979_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj880_counterValue;
	obj880_counterValue = obj880_counterValue + 1;
	if (! obj880_counterCanExceedTargetValue && obj880_counterValue > obj880_counterTargetValue) {
		obj880_counterValue = obj880_counterTargetValue;
	}

	if (oldValue != obj880_counterValue) {
		$("#obj880").trigger('SCEventCounterValueChange');
		$("#obj880").trigger('SCEventCounterIncrease');
		if (obj880_counterValue == obj880_counterTargetValue)
			$("#obj880").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = window.obj979_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj979_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}











};
obj979_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj979").trigger("obj979_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 979) {
				console.warn("de-queueing event obj979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
































//	action: decrement counter
//	target: obj979 
decrementCounter_985();
function decrementCounter_985() {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = obj979_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj979_counterValue;
	obj979_counterValue = obj979_counterValue - 1;
	if (obj979_counterValue < 0) {
		obj979_counterValue = 0;
	}

	if (oldValue != obj979_counterValue) {
		$("#obj979").trigger('SCEventCounterValueChange');
		$("#obj979").trigger('SCEventCounterDecrease');
		if (obj979_counterValue == obj979_counterTargetValue)
			$("#obj979").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = window.obj979_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj979_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj979_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}










};
obj979_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj979").trigger("obj979_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 979) {
				console.warn("de-queueing event obj979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj999_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj999_onTap_activeActionGroupIndex = -1;
		$("#obj999").trigger("obj999_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 999) {
				console.warn("de-queueing event obj999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj999_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup1();
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
				window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj999_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj999_onTap_activeActionGroupIndex = -1;
		$("#obj999").trigger("obj999_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 999) {
				console.warn("de-queueing event obj999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj999_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj816
(function(){
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;


	var selector = "#obj816";
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
					window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup2();
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
				window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj999_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj999_onTap_activeActionGroupIndex = -1;
		$("#obj999").trigger("obj999_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 999) {
				console.warn("de-queueing event obj999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj999_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj851 
setCounterValue_1001();
function setCounterValue_1001() {
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;


	var oldValue = obj851_counterValue;
	obj851_counterValue = 1;
	if (obj851_counterValue < 0) {
		obj851_counterValue = 0;
	} else if (! obj851_counterCanExceedTargetValue && obj851_counterValue > obj851_counterTargetValue) {
		obj851_counterValue = obj851_counterTargetValue;
	}

	if (oldValue != obj851_counterValue) {
		$("#obj851").trigger('SCEventCounterValueChange');
		if (obj851_counterValue == obj851_counterTargetValue)
			$("#obj851").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup3();
} }, 1);
}









};
obj999_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj999_onTap_activeActionGroupIndex = -1;
		$("#obj999").trigger("obj999_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 999) {
				console.warn("de-queueing event obj999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj999_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_1002();
function wait_1002() {
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj999_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj999_onTap_activeActionGroupIndex = -1;
		$("#obj999").trigger("obj999_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 999) {
				console.warn("de-queueing event obj999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj999_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7275 
hide_1003();
function hide_1003() {
	var selector = "#obj7275";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1003(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj816 
hide_1004();
function hide_1004() {
	var selector = "#obj816";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1004(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj798 
hide_1005();
function hide_1005() {
	var selector = "#obj798";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1005(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj999 
hide_1007();
function hide_1007() {
	var selector = "#obj999";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1007(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj800
(function(){
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;


	var selector = "#obj800";
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
					window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
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
				window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1023
(function(){
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;


	var selector = "#obj1023";
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
					window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
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
				window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1012
(function(){
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;


	var selector = "#obj1012";
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
					window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
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
				window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj999_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj999_onTap_activeActionGroupIndex = -1;
		$("#obj999").trigger("obj999_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 999) {
				console.warn("de-queueing event obj999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj999_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7711();
function hide_7711() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7711(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;

if (window.obj999_onTap_runningActionsCount < 0) {
	window.obj999_onTap_runningActionsCount = 0;
} else if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj999_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj999_onTap_activeActionGroupIndex = -1;
		$("#obj999").trigger("obj999_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 999) {
				console.warn("de-queueing event obj999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj999_onTap_activeActionGroupIndex = 6;
	











































};
obj988_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj988_onTap_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 988) {
				console.warn("de-queueing event obj988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj988_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup1();
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
				window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj988_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj988_onTap_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 988) {
				console.warn("de-queueing event obj988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj988_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj818
(function(){
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;


	var selector = "#obj818";
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
					window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup2();
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
				window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj988_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj988_onTap_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 988) {
				console.warn("de-queueing event obj988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj988_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj864 
setCounterValue_990();
function setCounterValue_990() {
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;


	var oldValue = obj864_counterValue;
	obj864_counterValue = 1;
	if (obj864_counterValue < 0) {
		obj864_counterValue = 0;
	} else if (! obj864_counterCanExceedTargetValue && obj864_counterValue > obj864_counterTargetValue) {
		obj864_counterValue = obj864_counterTargetValue;
	}

	if (oldValue != obj864_counterValue) {
		$("#obj864").trigger('SCEventCounterValueChange');
		if (obj864_counterValue == obj864_counterTargetValue)
			$("#obj864").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup3();
} }, 1);
}









};
obj988_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj988_onTap_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 988) {
				console.warn("de-queueing event obj988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj988_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_991();
function wait_991() {
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj988_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj988_onTap_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 988) {
				console.warn("de-queueing event obj988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj988_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7279 
hide_992();
function hide_992() {
	var selector = "#obj7279";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_992(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj818 
hide_993();
function hide_993() {
	var selector = "#obj818";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_993(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj798 
hide_994();
function hide_994() {
	var selector = "#obj798";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_994(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj988 
hide_996();
function hide_996() {
	var selector = "#obj988";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_996(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj800
(function(){
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;


	var selector = "#obj800";
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
					window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
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
				window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1023
(function(){
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;


	var selector = "#obj1023";
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
					window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
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
				window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1012
(function(){
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;


	var selector = "#obj1012";
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
					window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
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
				window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj988_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj988_onTap_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 988) {
				console.warn("de-queueing event obj988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj988_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7712();
function hide_7712() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj988_onTap_runningActionsCount = obj988_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7712(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj988_onTap_runningActionsCount = window.obj988_onTap_runningActionsCount - 1;

if (window.obj988_onTap_runningActionsCount < 0) {
	window.obj988_onTap_runningActionsCount = 0;
} else if (window.obj988_onTap_runningActionsCount == 0) {
	obj988_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj988_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj988_onTap_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 988) {
				console.warn("de-queueing event obj988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj988_onTap_activeActionGroupIndex = 6;
	











































};
obj1023_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1023_onTap_activeActionGroupIndex = -1;
		$("#obj1023").trigger("obj1023_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1023) {
				console.warn("de-queueing event obj1023." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1023").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1023_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup1();
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
				window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1023_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1023_onTap_activeActionGroupIndex = -1;
		$("#obj1023").trigger("obj1023_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1023) {
				console.warn("de-queueing event obj1023." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1023").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1023_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj816
(function(){
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;


	var selector = "#obj816";
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
					window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup2();
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
				window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1023_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1023_onTap_activeActionGroupIndex = -1;
		$("#obj1023").trigger("obj1023_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1023) {
				console.warn("de-queueing event obj1023." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1023").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1023_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj979 
setCounterValue_1025();
function setCounterValue_1025() {
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;


	var oldValue = obj979_counterValue;
	obj979_counterValue = 1;
	if (obj979_counterValue < 0) {
		obj979_counterValue = 0;
	} else if (! obj979_counterCanExceedTargetValue && obj979_counterValue > obj979_counterTargetValue) {
		obj979_counterValue = obj979_counterTargetValue;
	}

	if (oldValue != obj979_counterValue) {
		$("#obj979").trigger('SCEventCounterValueChange');
		if (obj979_counterValue == obj979_counterTargetValue)
			$("#obj979").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup3();
} }, 1);
}









};
obj1023_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1023_onTap_activeActionGroupIndex = -1;
		$("#obj1023").trigger("obj1023_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1023) {
				console.warn("de-queueing event obj1023." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1023").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1023_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_1026();
function wait_1026() {
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj1023_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1023_onTap_activeActionGroupIndex = -1;
		$("#obj1023").trigger("obj1023_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1023) {
				console.warn("de-queueing event obj1023." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1023").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1023_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7281 
hide_1027();
function hide_1027() {
	var selector = "#obj7281";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1027(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj816 
hide_1028();
function hide_1028() {
	var selector = "#obj816";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1028(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj800 
hide_1029();
function hide_1029() {
	var selector = "#obj800";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1029(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj1023 
hide_1031();
function hide_1031() {
	var selector = "#obj1023";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1031(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj802
(function(){
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;


	var selector = "#obj802";
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
					window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
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
				window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1045
(function(){
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;


	var selector = "#obj1045";
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
					window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
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
				window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1034
(function(){
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;


	var selector = "#obj1034";
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
					window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
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
				window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1023_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1023_onTap_activeActionGroupIndex = -1;
		$("#obj1023").trigger("obj1023_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1023) {
				console.warn("de-queueing event obj1023." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1023").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1023_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7713();
function hide_7713() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1023_onTap_runningActionsCount = obj1023_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7713(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1023_onTap_runningActionsCount = window.obj1023_onTap_runningActionsCount - 1;

if (window.obj1023_onTap_runningActionsCount < 0) {
	window.obj1023_onTap_runningActionsCount = 0;
} else if (window.obj1023_onTap_runningActionsCount == 0) {
	obj1023_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1023_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1023_onTap_activeActionGroupIndex = -1;
		$("#obj1023").trigger("obj1023_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1023) {
				console.warn("de-queueing event obj1023." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1023").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1023_onTap_activeActionGroupIndex = 6;
	











































};
obj1012_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1012_onTap_activeActionGroupIndex = -1;
		$("#obj1012").trigger("obj1012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1012) {
				console.warn("de-queueing event obj1012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1012_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup1();
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
				window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1012_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1012_onTap_activeActionGroupIndex = -1;
		$("#obj1012").trigger("obj1012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1012) {
				console.warn("de-queueing event obj1012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1012_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj818
(function(){
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;


	var selector = "#obj818";
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
					window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup2();
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
				window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1012_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1012_onTap_activeActionGroupIndex = -1;
		$("#obj1012").trigger("obj1012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1012) {
				console.warn("de-queueing event obj1012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1012_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj966 
setCounterValue_1014();
function setCounterValue_1014() {
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;


	var oldValue = obj966_counterValue;
	obj966_counterValue = 1;
	if (obj966_counterValue < 0) {
		obj966_counterValue = 0;
	} else if (! obj966_counterCanExceedTargetValue && obj966_counterValue > obj966_counterTargetValue) {
		obj966_counterValue = obj966_counterTargetValue;
	}

	if (oldValue != obj966_counterValue) {
		$("#obj966").trigger('SCEventCounterValueChange');
		if (obj966_counterValue == obj966_counterTargetValue)
			$("#obj966").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup3();
} }, 1);
}









};
obj1012_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1012_onTap_activeActionGroupIndex = -1;
		$("#obj1012").trigger("obj1012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1012) {
				console.warn("de-queueing event obj1012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1012_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_1015();
function wait_1015() {
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj1012_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1012_onTap_activeActionGroupIndex = -1;
		$("#obj1012").trigger("obj1012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1012) {
				console.warn("de-queueing event obj1012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1012_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7277 
hide_1016();
function hide_1016() {
	var selector = "#obj7277";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1016(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj818 
hide_1017();
function hide_1017() {
	var selector = "#obj818";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1017(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj800 
hide_1018();
function hide_1018() {
	var selector = "#obj800";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1018(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj1012 
hide_1020();
function hide_1020() {
	var selector = "#obj1012";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1020(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj802
(function(){
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;


	var selector = "#obj802";
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
					window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
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
				window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1045
(function(){
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;


	var selector = "#obj1045";
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
					window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
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
				window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1034
(function(){
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;


	var selector = "#obj1034";
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
					window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
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
				window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1012_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1012_onTap_activeActionGroupIndex = -1;
		$("#obj1012").trigger("obj1012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1012) {
				console.warn("de-queueing event obj1012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1012_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7714();
function hide_7714() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7714(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount < 0) {
	window.obj1012_onTap_runningActionsCount = 0;
} else if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1012_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1012_onTap_activeActionGroupIndex = -1;
		$("#obj1012").trigger("obj1012_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1012) {
				console.warn("de-queueing event obj1012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1012_onTap_activeActionGroupIndex = 6;
	











































};
obj1045_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1045_onTap_activeActionGroupIndex = -1;
		$("#obj1045").trigger("obj1045_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1045) {
				console.warn("de-queueing event obj1045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1045_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj1045_onTap_runningActionsCount = obj1045_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup1();
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
				window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1045_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1045_onTap_activeActionGroupIndex = -1;
		$("#obj1045").trigger("obj1045_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1045) {
				console.warn("de-queueing event obj1045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1045_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj816
(function(){
	window.obj1045_onTap_runningActionsCount = obj1045_onTap_runningActionsCount + 1;


	var selector = "#obj816";
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
					window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup2();
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
				window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1045_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1045_onTap_activeActionGroupIndex = -1;
		$("#obj1045").trigger("obj1045_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1045) {
				console.warn("de-queueing event obj1045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1045_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj851 
setCounterValue_1047();
function setCounterValue_1047() {
	window.obj1045_onTap_runningActionsCount = obj1045_onTap_runningActionsCount + 1;


	var oldValue = obj851_counterValue;
	obj851_counterValue = 1;
	if (obj851_counterValue < 0) {
		obj851_counterValue = 0;
	} else if (! obj851_counterCanExceedTargetValue && obj851_counterValue > obj851_counterTargetValue) {
		obj851_counterValue = obj851_counterTargetValue;
	}

	if (oldValue != obj851_counterValue) {
		$("#obj851").trigger('SCEventCounterValueChange');
		if (obj851_counterValue == obj851_counterTargetValue)
			$("#obj851").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup3();
} }, 1);
}









};
obj1045_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1045_onTap_activeActionGroupIndex = -1;
		$("#obj1045").trigger("obj1045_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1045) {
				console.warn("de-queueing event obj1045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1045_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_1048();
function wait_1048() {
	window.obj1045_onTap_runningActionsCount = obj1045_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj1045_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1045_onTap_activeActionGroupIndex = -1;
		$("#obj1045").trigger("obj1045_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1045) {
				console.warn("de-queueing event obj1045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1045_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7275 
hide_1049();
function hide_1049() {
	var selector = "#obj7275";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1045_onTap_runningActionsCount = obj1045_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1049(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj816 
hide_1050();
function hide_1050() {
	var selector = "#obj816";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1045_onTap_runningActionsCount = obj1045_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1050(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1045_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1045_onTap_activeActionGroupIndex = -1;
		$("#obj1045").trigger("obj1045_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1045) {
				console.warn("de-queueing event obj1045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1045_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7715();
function hide_7715() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1045_onTap_runningActionsCount = obj1045_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7715(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1045_onTap_runningActionsCount = window.obj1045_onTap_runningActionsCount - 1;

if (window.obj1045_onTap_runningActionsCount < 0) {
	window.obj1045_onTap_runningActionsCount = 0;
} else if (window.obj1045_onTap_runningActionsCount == 0) {
	obj1045_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1045_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1045_onTap_activeActionGroupIndex = -1;
		$("#obj1045").trigger("obj1045_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1045) {
				console.warn("de-queueing event obj1045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1045_onTap_activeActionGroupIndex = 6;
	











































};
obj1034_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1034_onTap_activeActionGroupIndex = -1;
		$("#obj1034").trigger("obj1034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1034) {
				console.warn("de-queueing event obj1034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1034_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1100
(function(){
	window.obj1034_onTap_runningActionsCount = obj1034_onTap_runningActionsCount + 1;


	var selector = "#obj1100";
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
					window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup1();
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
				window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1034_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1034_onTap_activeActionGroupIndex = -1;
		$("#obj1034").trigger("obj1034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1034) {
				console.warn("de-queueing event obj1034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1034_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj818
(function(){
	window.obj1034_onTap_runningActionsCount = obj1034_onTap_runningActionsCount + 1;


	var selector = "#obj818";
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
					window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup2();
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
				window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1034_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1034_onTap_activeActionGroupIndex = -1;
		$("#obj1034").trigger("obj1034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1034) {
				console.warn("de-queueing event obj1034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1034_onTap_activeActionGroupIndex = 2;
	

































//	action: set counter value
//	target: obj864 
setCounterValue_1036();
function setCounterValue_1036() {
	window.obj1034_onTap_runningActionsCount = obj1034_onTap_runningActionsCount + 1;


	var oldValue = obj864_counterValue;
	obj864_counterValue = 1;
	if (obj864_counterValue < 0) {
		obj864_counterValue = 0;
	} else if (! obj864_counterCanExceedTargetValue && obj864_counterValue > obj864_counterTargetValue) {
		obj864_counterValue = obj864_counterTargetValue;
	}

	if (oldValue != obj864_counterValue) {
		$("#obj864").trigger('SCEventCounterValueChange');
		if (obj864_counterValue == obj864_counterTargetValue)
			$("#obj864").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup3();
} }, 1);
}









};
obj1034_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1034_onTap_activeActionGroupIndex = -1;
		$("#obj1034").trigger("obj1034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1034) {
				console.warn("de-queueing event obj1034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1034_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_1037();
function wait_1037() {
	window.obj1034_onTap_runningActionsCount = obj1034_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup4();
}
	}, 2000);
}


























};
obj1034_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1034_onTap_activeActionGroupIndex = -1;
		$("#obj1034").trigger("obj1034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1034) {
				console.warn("de-queueing event obj1034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1034_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj7279 
hide_1038();
function hide_1038() {
	var selector = "#obj7279";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1034_onTap_runningActionsCount = obj1034_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1038(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj818 
hide_1039();
function hide_1039() {
	var selector = "#obj818";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1034_onTap_runningActionsCount = obj1034_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1039(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1034_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1034_onTap_activeActionGroupIndex = -1;
		$("#obj1034").trigger("obj1034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1034) {
				console.warn("de-queueing event obj1034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1034_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1100 
hide_7716();
function hide_7716() {
	var selector = "#obj1100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1034_onTap_runningActionsCount = obj1034_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7716(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1034_onTap_runningActionsCount = window.obj1034_onTap_runningActionsCount - 1;

if (window.obj1034_onTap_runningActionsCount < 0) {
	window.obj1034_onTap_runningActionsCount = 0;
} else if (window.obj1034_onTap_runningActionsCount == 0) {
	obj1034_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1034_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1034_onTap_activeActionGroupIndex = -1;
		$("#obj1034").trigger("obj1034_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1034) {
				console.warn("de-queueing event obj1034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1034_onTap_activeActionGroupIndex = 6;
	











































};
obj7437_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7437_onTap_activeActionGroupIndex = -1;
		$("#obj7437").trigger("obj7437_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7437) {
				console.warn("de-queueing event obj7437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7437_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7439();
function goToPage_7439() {
	window.obj7437_onTap_runningActionsCount = obj7437_onTap_runningActionsCount + 1;

	$("#anchor861")[0].click();
	window.obj7437_onTap_runningActionsCount = window.obj7437_onTap_runningActionsCount - 1;

if (window.obj7437_onTap_runningActionsCount < 0) {
	window.obj7437_onTap_runningActionsCount = 0;
} else if (window.obj7437_onTap_runningActionsCount == 0) {
	obj7437_onTap_actionGroup1();
}
}










































};
obj7437_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7437_onTap_activeActionGroupIndex = -1;
		$("#obj7437").trigger("obj7437_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7437) {
				console.warn("de-queueing event obj7437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7437_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		


























































































































































































































































































































































































































































/*
 *
 *   obj827: Event Touch Down
 *
 */

$("#obj827").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj827_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj827_onTap is still running");
	return;
}
var obj827_onTap_runningActionsCount = 0;
var obj827_onTap_loopCount = 0;
obj827_onTap_actionGroup0();
});


















/*
 *
 *   obj829: Event Touch Down
 *
 */

$("#obj829").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj829_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj829_onTap is still running");
	return;
}
var obj829_onTap_runningActionsCount = 0;
var obj829_onTap_loopCount = 0;
obj829_onTap_actionGroup0();
});



























/*
 *
 *   obj842: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj842").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj842_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj842_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj842_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj842_SCEventCounterReachedTargetValue_loopCount = 0;
obj842_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj839: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj839").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj839_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj839_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj839_SCEventCounterReachedTargetValue_loopCount = 0;
obj839_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj836: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj836").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj836_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj836_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj836_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj836_SCEventCounterReachedTargetValue_loopCount = 0;
obj836_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj833: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj833").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj833_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj833_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj833_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj833_SCEventCounterReachedTargetValue_loopCount = 0;
obj833_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj845: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj845").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj845_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj845_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj845_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj845_SCEventCounterReachedTargetValue_loopCount = 0;
obj845_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj848: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj848").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj848_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj848_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj848_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj848_SCEventCounterReachedTargetValue_loopCount = 0;
obj848_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj851: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj851").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj851_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj851_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj851_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj851_SCEventCounterReachedTargetValue_loopCount = 0;
obj851_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj864: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj864").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj864_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj864_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj864_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj864_SCEventCounterReachedTargetValue_loopCount = 0;
obj864_SCEventCounterReachedTargetValue_actionGroup0();
});





































/*
 *
 *   obj878: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj878").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj878_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj878_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj878_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj878_SCEventCounterReachedTargetValue_loopCount = 0;
obj878_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj880: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj880").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj880_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj880_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj880_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj880_SCEventCounterReachedTargetValue_loopCount = 0;
obj880_SCEventCounterReachedTargetValue_actionGroup0();
});









/*
 *
 *   obj930: Event Touch Down
 *
 */

$("#obj930").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj930_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj930_onTap is still running");
	return;
}
var obj930_onTap_runningActionsCount = 0;
var obj930_onTap_loopCount = 0;
obj930_onTap_actionGroup0();
});


















/*
 *
 *   obj920: Event Touch Down
 *
 */

$("#obj920").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj920_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj920_onTap is still running");
	return;
}
var obj920_onTap_runningActionsCount = 0;
var obj920_onTap_loopCount = 0;
obj920_onTap_actionGroup0();
});


















/*
 *
 *   obj950: Event Touch Down
 *
 */

$("#obj950").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj950_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj950_onTap is still running");
	return;
}
var obj950_onTap_runningActionsCount = 0;
var obj950_onTap_loopCount = 0;
obj950_onTap_actionGroup0();
});


















/*
 *
 *   obj940: Event Touch Down
 *
 */

$("#obj940").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj940_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj940_onTap is still running");
	return;
}
var obj940_onTap_runningActionsCount = 0;
var obj940_onTap_loopCount = 0;
obj940_onTap_actionGroup0();
});



























/*
 *
 *   obj966: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj966").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj966_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj966_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj966_SCEventCounterReachedTargetValue_loopCount = 0;
obj966_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj979: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj979").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj979_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj979_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj979_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj979_SCEventCounterReachedTargetValue_loopCount = 0;
obj979_SCEventCounterReachedTargetValue_actionGroup0();
});









/*
 *
 *   obj999: Event Touch Down
 *
 */

$("#obj999").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj999_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj999_onTap is still running");
	return;
}
var obj999_onTap_runningActionsCount = 0;
var obj999_onTap_loopCount = 0;
obj999_onTap_actionGroup0();
});


















/*
 *
 *   obj988: Event Touch Down
 *
 */

$("#obj988").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj988_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj988_onTap is still running");
	return;
}
var obj988_onTap_runningActionsCount = 0;
var obj988_onTap_loopCount = 0;
obj988_onTap_actionGroup0();
});


















/*
 *
 *   obj1023: Event Touch Down
 *
 */

$("#obj1023").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1023_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1023_onTap is still running");
	return;
}
var obj1023_onTap_runningActionsCount = 0;
var obj1023_onTap_loopCount = 0;
obj1023_onTap_actionGroup0();
});


















/*
 *
 *   obj1012: Event Touch Down
 *
 */

$("#obj1012").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1012_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1012_onTap is still running");
	return;
}
var obj1012_onTap_runningActionsCount = 0;
var obj1012_onTap_loopCount = 0;
obj1012_onTap_actionGroup0();
});


















/*
 *
 *   obj1045: Event Touch Down
 *
 */

$("#obj1045").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1045_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1045_onTap is still running");
	return;
}
var obj1045_onTap_runningActionsCount = 0;
var obj1045_onTap_loopCount = 0;
obj1045_onTap_actionGroup0();
});


















/*
 *
 *   obj1034: Event Touch Down
 *
 */

$("#obj1034").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1034_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1034_onTap is still running");
	return;
}
var obj1034_onTap_runningActionsCount = 0;
var obj1034_onTap_loopCount = 0;
obj1034_onTap_actionGroup0();
});










































































































































































/*
 *
 *   obj7437: Event Touch Down
 *
 */

$("#obj7437").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7437_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7437_onTap is still running");
	return;
}
var obj7437_onTap_runningActionsCount = 0;
var obj7437_onTap_loopCount = 0;
obj7437_onTap_actionGroup0();
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
	
$("#obj7300").trigger('SCEventShow');
$("#obj7303").trigger('SCEventShow');
$("#obj7289").trigger('SCEventShow');
$("#obj7267").trigger('SCEventShow');
$("#obj7260").trigger('SCEventShow');
$("#obj558").trigger('SCEventShow');
$("#obj560").trigger('SCEventShow');
$("#obj784").trigger('SCEventShow');
$("#obj7297").trigger('SCEventShow');
$("#obj7295").trigger('SCEventShow');
$("#obj810").trigger('SCEventShow');
$("#obj812").trigger('SCEventShow');
$("#obj827").trigger('SCEventShow');
$("#obj829").trigger('SCEventShow');
$("#obj7254").trigger('SCEventShow');
$("#obj7252").trigger('SCEventShow');
$("#obj7258").trigger('SCEventShow');
$("#obj7256").trigger('SCEventShow');
$("#obj7262").trigger('SCEventShow');
$("#obj7271").trigger('SCEventShow');
$("#obj7273").trigger('SCEventShow');
$("#obj7437").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});