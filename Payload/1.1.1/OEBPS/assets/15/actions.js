pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 12353;
pubcoder.page.title = pubcoder.page.title || "15";
pubcoder.page.number = pubcoder.page.number || 15;
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
var obj12363_onTap_activeActionGroupIndex = -1;
var obj12363_onTap_runningActionsCount = 0;
var obj12363_onTap_loopCount = 0;
var obj12373_onTap_activeActionGroupIndex = -1;
var obj12373_onTap_runningActionsCount = 0;
var obj12373_onTap_loopCount = 0;
var obj12592_onTap_activeActionGroupIndex = -1;
var obj12592_onTap_runningActionsCount = 0;
var obj12592_onTap_loopCount = 0;
var obj12672_onTap_activeActionGroupIndex = -1;
var obj12672_onTap_runningActionsCount = 0;
var obj12672_onTap_loopCount = 0;
var obj12729_onTap_activeActionGroupIndex = -1;
var obj12729_onTap_runningActionsCount = 0;
var obj12729_onTap_loopCount = 0;
var obj12742_onTap_activeActionGroupIndex = -1;
var obj12742_onTap_runningActionsCount = 0;
var obj12742_onTap_loopCount = 0;
var obj12747_onTap_activeActionGroupIndex = -1;
var obj12747_onTap_runningActionsCount = 0;
var obj12747_onTap_loopCount = 0;
var obj12684_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj12684_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12684_SCEventCounterReachedTargetValue_loopCount = 0;
var obj12701_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj12701_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12701_SCEventCounterReachedTargetValue_loopCount = 0;
var obj12698_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj12698_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12698_SCEventCounterReachedTargetValue_loopCount = 0;
var obj12695_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj12695_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12695_SCEventCounterReachedTargetValue_loopCount = 0;
var obj12692_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj12692_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12692_SCEventCounterReachedTargetValue_loopCount = 0;
var obj12708_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj12708_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12708_SCEventCounterReachedTargetValue_loopCount = 0;
var obj12715_onTap_activeActionGroupIndex = -1;
var obj12715_onTap_runningActionsCount = 0;
var obj12715_onTap_loopCount = 0;
var obj12779_onTap_activeActionGroupIndex = -1;
var obj12779_onTap_runningActionsCount = 0;
var obj12779_onTap_loopCount = 0;
var obj12774_onTap_activeActionGroupIndex = -1;
var obj12774_onTap_runningActionsCount = 0;
var obj12774_onTap_loopCount = 0;
var obj12769_onTap_activeActionGroupIndex = -1;
var obj12769_onTap_runningActionsCount = 0;
var obj12769_onTap_loopCount = 0;
var obj12764_onTap_activeActionGroupIndex = -1;
var obj12764_onTap_runningActionsCount = 0;
var obj12764_onTap_loopCount = 0;
var obj12754_onTap_activeActionGroupIndex = -1;
var obj12754_onTap_runningActionsCount = 0;
var obj12754_onTap_loopCount = 0;
var obj12896_onTap_activeActionGroupIndex = -1;
var obj12896_onTap_runningActionsCount = 0;
var obj12896_onTap_loopCount = 0;
var obj12891_onTap_activeActionGroupIndex = -1;
var obj12891_onTap_runningActionsCount = 0;
var obj12891_onTap_loopCount = 0;
var obj12886_onTap_activeActionGroupIndex = -1;
var obj12886_onTap_runningActionsCount = 0;
var obj12886_onTap_loopCount = 0;
var obj12881_onTap_activeActionGroupIndex = -1;
var obj12881_onTap_runningActionsCount = 0;
var obj12881_onTap_loopCount = 0;
var obj12871_onTap_activeActionGroupIndex = -1;
var obj12871_onTap_runningActionsCount = 0;
var obj12871_onTap_loopCount = 0;
var obj12935_onTap_activeActionGroupIndex = -1;
var obj12935_onTap_runningActionsCount = 0;
var obj12935_onTap_loopCount = 0;
var obj12930_onTap_activeActionGroupIndex = -1;
var obj12930_onTap_runningActionsCount = 0;
var obj12930_onTap_loopCount = 0;
var obj12925_onTap_activeActionGroupIndex = -1;
var obj12925_onTap_runningActionsCount = 0;
var obj12925_onTap_loopCount = 0;
var obj12920_onTap_activeActionGroupIndex = -1;
var obj12920_onTap_runningActionsCount = 0;
var obj12920_onTap_loopCount = 0;
var obj12910_onTap_activeActionGroupIndex = -1;
var obj12910_onTap_runningActionsCount = 0;
var obj12910_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj12684_counterValue = 0;
var obj12684_counterTargetValue = 4;
var obj12684_counterCanExceedTargetValue = false;
var obj12701_counterValue = 0;
var obj12701_counterTargetValue = 1;
var obj12701_counterCanExceedTargetValue = false;
var obj12698_counterValue = 0;
var obj12698_counterTargetValue = 2;
var obj12698_counterCanExceedTargetValue = false;
var obj12695_counterValue = 0;
var obj12695_counterTargetValue = 3;
var obj12695_counterCanExceedTargetValue = false;
var obj12692_counterValue = 0;
var obj12692_counterTargetValue = 4;
var obj12692_counterCanExceedTargetValue = false;
var obj12708_counterValue = 0;
var obj12708_counterTargetValue = 1;
var obj12708_counterCanExceedTargetValue = false;

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
		
obj12363_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12363_onTap_activeActionGroupIndex = -1;
		$("#obj12363").trigger("obj12363_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12363) {
				console.warn("de-queueing event obj12363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12363_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12592
(function(){
	window.obj12363_onTap_runningActionsCount = obj12363_onTap_runningActionsCount + 1;


	var selector = "#obj12592";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12363_onTap_runningActionsCount = window.obj12363_onTap_runningActionsCount - 1;

if (window.obj12363_onTap_runningActionsCount < 0) {
	window.obj12363_onTap_runningActionsCount = 0;
} else if (window.obj12363_onTap_runningActionsCount == 0) {
	obj12363_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12363_onTap_runningActionsCount = window.obj12363_onTap_runningActionsCount - 1;

if (window.obj12363_onTap_runningActionsCount < 0) {
	window.obj12363_onTap_runningActionsCount = 0;
} else if (window.obj12363_onTap_runningActionsCount == 0) {
	obj12363_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12363_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12363_onTap_activeActionGroupIndex = -1;
		$("#obj12363").trigger("obj12363_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12363) {
				console.warn("de-queueing event obj12363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12363_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj12588
(function(){
	window.obj12363_onTap_runningActionsCount = obj12363_onTap_runningActionsCount + 1;


	var selector = "#obj12588";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12363_onTap_runningActionsCount = window.obj12363_onTap_runningActionsCount - 1;

if (window.obj12363_onTap_runningActionsCount < 0) {
	window.obj12363_onTap_runningActionsCount = 0;
} else if (window.obj12363_onTap_runningActionsCount == 0) {
	obj12363_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12363_onTap_runningActionsCount = window.obj12363_onTap_runningActionsCount - 1;

if (window.obj12363_onTap_runningActionsCount < 0) {
	window.obj12363_onTap_runningActionsCount = 0;
} else if (window.obj12363_onTap_runningActionsCount == 0) {
	obj12363_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12590
(function(){
	window.obj12363_onTap_runningActionsCount = obj12363_onTap_runningActionsCount + 1;


	var selector = "#obj12590";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12363_onTap_runningActionsCount = window.obj12363_onTap_runningActionsCount - 1;

if (window.obj12363_onTap_runningActionsCount < 0) {
	window.obj12363_onTap_runningActionsCount = 0;
} else if (window.obj12363_onTap_runningActionsCount == 0) {
	obj12363_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12363_onTap_runningActionsCount = window.obj12363_onTap_runningActionsCount - 1;

if (window.obj12363_onTap_runningActionsCount < 0) {
	window.obj12363_onTap_runningActionsCount = 0;
} else if (window.obj12363_onTap_runningActionsCount == 0) {
	obj12363_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12363_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12363_onTap_activeActionGroupIndex = -1;
		$("#obj12363").trigger("obj12363_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12363) {
				console.warn("de-queueing event obj12363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12363_onTap_activeActionGroupIndex = 2;
	











































};
obj12373_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12373_onTap_activeActionGroupIndex = -1;
		$("#obj12373").trigger("obj12373_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12373) {
				console.warn("de-queueing event obj12373." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12373").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12373_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12375();
function goToPage_12375() {
	window.obj12373_onTap_runningActionsCount = obj12373_onTap_runningActionsCount + 1;

	$("#anchor238")[0].click();
	window.obj12373_onTap_runningActionsCount = window.obj12373_onTap_runningActionsCount - 1;

if (window.obj12373_onTap_runningActionsCount < 0) {
	window.obj12373_onTap_runningActionsCount = 0;
} else if (window.obj12373_onTap_runningActionsCount == 0) {
	obj12373_onTap_actionGroup1();
}
}










































};
obj12373_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12373_onTap_activeActionGroupIndex = -1;
		$("#obj12373").trigger("obj12373_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12373) {
				console.warn("de-queueing event obj12373." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12373").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12373_onTap_activeActionGroupIndex = 1;
	











































};
obj12592_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12592_onTap_activeActionGroupIndex = -1;
		$("#obj12592").trigger("obj12592_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12592) {
				console.warn("de-queueing event obj12592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12592_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12592 
hide_12595();
function hide_12595() {
	var selector = "#obj12592";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12592_onTap_runningActionsCount = obj12592_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12592_onTap_runningActionsCount = window.obj12592_onTap_runningActionsCount - 1;

if (window.obj12592_onTap_runningActionsCount < 0) {
	window.obj12592_onTap_runningActionsCount = 0;
} else if (window.obj12592_onTap_runningActionsCount == 0) {
	obj12592_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12595(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12592_onTap_runningActionsCount = window.obj12592_onTap_runningActionsCount - 1;

if (window.obj12592_onTap_runningActionsCount < 0) {
	window.obj12592_onTap_runningActionsCount = 0;
} else if (window.obj12592_onTap_runningActionsCount == 0) {
	obj12592_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12363
(function(){
	window.obj12592_onTap_runningActionsCount = obj12592_onTap_runningActionsCount + 1;


	var selector = "#obj12363";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12592_onTap_runningActionsCount = window.obj12592_onTap_runningActionsCount - 1;

if (window.obj12592_onTap_runningActionsCount < 0) {
	window.obj12592_onTap_runningActionsCount = 0;
} else if (window.obj12592_onTap_runningActionsCount == 0) {
	obj12592_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12592_onTap_runningActionsCount = window.obj12592_onTap_runningActionsCount - 1;

if (window.obj12592_onTap_runningActionsCount < 0) {
	window.obj12592_onTap_runningActionsCount = 0;
} else if (window.obj12592_onTap_runningActionsCount == 0) {
	obj12592_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12592_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12592_onTap_activeActionGroupIndex = -1;
		$("#obj12592").trigger("obj12592_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12592) {
				console.warn("de-queueing event obj12592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12592_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12590 
hide_12596();
function hide_12596() {
	var selector = "#obj12590";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12592_onTap_runningActionsCount = obj12592_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12592_onTap_runningActionsCount = window.obj12592_onTap_runningActionsCount - 1;

if (window.obj12592_onTap_runningActionsCount < 0) {
	window.obj12592_onTap_runningActionsCount = 0;
} else if (window.obj12592_onTap_runningActionsCount == 0) {
	obj12592_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12596(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12592_onTap_runningActionsCount = window.obj12592_onTap_runningActionsCount - 1;

if (window.obj12592_onTap_runningActionsCount < 0) {
	window.obj12592_onTap_runningActionsCount = 0;
} else if (window.obj12592_onTap_runningActionsCount == 0) {
	obj12592_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12588 
hide_12597();
function hide_12597() {
	var selector = "#obj12588";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12592_onTap_runningActionsCount = obj12592_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12592_onTap_runningActionsCount = window.obj12592_onTap_runningActionsCount - 1;

if (window.obj12592_onTap_runningActionsCount < 0) {
	window.obj12592_onTap_runningActionsCount = 0;
} else if (window.obj12592_onTap_runningActionsCount == 0) {
	obj12592_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12597(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12592_onTap_runningActionsCount = window.obj12592_onTap_runningActionsCount - 1;

if (window.obj12592_onTap_runningActionsCount < 0) {
	window.obj12592_onTap_runningActionsCount = 0;
} else if (window.obj12592_onTap_runningActionsCount == 0) {
	obj12592_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12592_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12592_onTap_activeActionGroupIndex = -1;
		$("#obj12592").trigger("obj12592_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12592) {
				console.warn("de-queueing event obj12592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12592_onTap_activeActionGroupIndex = 2;
	











































};
obj12672_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12672_onTap_activeActionGroupIndex = -1;
		$("#obj12672").trigger("obj12672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12672) {
				console.warn("de-queueing event obj12672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12672_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12672 
hide_12676();
function hide_12676() {
	var selector = "#obj12672";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12676(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12729 
hide_12677();
function hide_12677() {
	var selector = "#obj12729";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12677(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12742 
hide_12678();
function hide_12678() {
	var selector = "#obj12742";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12678(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12747 
hide_12679();
function hide_12679() {
	var selector = "#obj12747";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12679(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12725
(function(){
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;


	var selector = "#obj12725";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12672_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12672_onTap_activeActionGroupIndex = -1;
		$("#obj12672").trigger("obj12672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12672) {
				console.warn("de-queueing event obj12672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12672_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12674();
function playAudioFile_12674() {
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12674")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12674");
			$("#obj_audio_playSoundFile12674").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup2();
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
				window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12672_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12672_onTap_activeActionGroupIndex = -1;
		$("#obj12672").trigger("obj12672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12672) {
				console.warn("de-queueing event obj12672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12672_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_12675();
function runjs_12675() {
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;


	$("#obj12648").css("background-color", "#EA9284");
	
	setTimeout(function() {
		window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup3();
}
	}, 1);
}














};
obj12672_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12672_onTap_activeActionGroupIndex = -1;
		$("#obj12672").trigger("obj12672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12672) {
				console.warn("de-queueing event obj12672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12672_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj12680 
hide_12683();
function hide_12683() {
	var selector = "#obj12680";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12683(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12672_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12672_onTap_activeActionGroupIndex = -1;
		$("#obj12672").trigger("obj12672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12672) {
				console.warn("de-queueing event obj12672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12672_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj12708 
incrementCounter_12728();
function incrementCounter_12728() {
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;


	var oldValue = obj12708_counterValue;
	obj12708_counterValue = obj12708_counterValue + 1;
	if (! obj12708_counterCanExceedTargetValue && obj12708_counterValue > obj12708_counterTargetValue) {
		obj12708_counterValue = obj12708_counterTargetValue;
	}

	if (oldValue != obj12708_counterValue) {
		$("#obj12708").trigger('SCEventCounterValueChange');
		$("#obj12708").trigger('SCEventCounterIncrease');
		if (obj12708_counterValue == obj12708_counterTargetValue)
			$("#obj12708").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj12684 
incrementCounter_12688();
function incrementCounter_12688() {
	window.obj12672_onTap_runningActionsCount = obj12672_onTap_runningActionsCount + 1;


	var oldValue = obj12684_counterValue;
	obj12684_counterValue = obj12684_counterValue + 1;
	if (! obj12684_counterCanExceedTargetValue && obj12684_counterValue > obj12684_counterTargetValue) {
		obj12684_counterValue = obj12684_counterTargetValue;
	}

	if (oldValue != obj12684_counterValue) {
		$("#obj12684").trigger('SCEventCounterValueChange');
		$("#obj12684").trigger('SCEventCounterIncrease');
		if (obj12684_counterValue == obj12684_counterTargetValue)
			$("#obj12684").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12672_onTap_runningActionsCount = window.obj12672_onTap_runningActionsCount - 1;

if (window.obj12672_onTap_runningActionsCount < 0) {
	window.obj12672_onTap_runningActionsCount = 0;
} else if (window.obj12672_onTap_runningActionsCount == 0) {
	obj12672_onTap_actionGroup5();
} }, 1);
}











};
obj12672_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12672_onTap_activeActionGroupIndex = -1;
		$("#obj12672").trigger("obj12672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12672) {
				console.warn("de-queueing event obj12672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12672_onTap_activeActionGroupIndex = 5;
	











































};
obj12729_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12729_onTap_activeActionGroupIndex = -1;
		$("#obj12729").trigger("obj12729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12729) {
				console.warn("de-queueing event obj12729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12729_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12736();
function playAudioFile_12736() {
	window.obj12729_onTap_runningActionsCount = obj12729_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12736")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12736");
			$("#obj_audio_playSoundFile12736").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12729_onTap_runningActionsCount = window.obj12729_onTap_runningActionsCount - 1;

if (window.obj12729_onTap_runningActionsCount < 0) {
	window.obj12729_onTap_runningActionsCount = 0;
} else if (window.obj12729_onTap_runningActionsCount == 0) {
	obj12729_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12729_onTap_runningActionsCount = window.obj12729_onTap_runningActionsCount - 1;

if (window.obj12729_onTap_runningActionsCount < 0) {
	window.obj12729_onTap_runningActionsCount = 0;
} else if (window.obj12729_onTap_runningActionsCount == 0) {
	obj12729_onTap_actionGroup1();
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
				window.obj12729_onTap_runningActionsCount = window.obj12729_onTap_runningActionsCount - 1;

if (window.obj12729_onTap_runningActionsCount < 0) {
	window.obj12729_onTap_runningActionsCount = 0;
} else if (window.obj12729_onTap_runningActionsCount == 0) {
	obj12729_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12729_onTap_runningActionsCount = window.obj12729_onTap_runningActionsCount - 1;

if (window.obj12729_onTap_runningActionsCount < 0) {
	window.obj12729_onTap_runningActionsCount = 0;
} else if (window.obj12729_onTap_runningActionsCount == 0) {
	obj12729_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12729_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12729_onTap_activeActionGroupIndex = -1;
		$("#obj12729").trigger("obj12729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12729) {
				console.warn("de-queueing event obj12729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12729_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12656 
hide_12738();
function hide_12738() {
	var selector = "#obj12656";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12729_onTap_runningActionsCount = obj12729_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12729_onTap_runningActionsCount = window.obj12729_onTap_runningActionsCount - 1;

if (window.obj12729_onTap_runningActionsCount < 0) {
	window.obj12729_onTap_runningActionsCount = 0;
} else if (window.obj12729_onTap_runningActionsCount == 0) {
	obj12729_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12738(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12729_onTap_runningActionsCount = window.obj12729_onTap_runningActionsCount - 1;

if (window.obj12729_onTap_runningActionsCount < 0) {
	window.obj12729_onTap_runningActionsCount = 0;
} else if (window.obj12729_onTap_runningActionsCount == 0) {
	obj12729_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12729_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12729_onTap_activeActionGroupIndex = -1;
		$("#obj12729").trigger("obj12729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12729) {
				console.warn("de-queueing event obj12729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12729_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12656
(function(){
	window.obj12729_onTap_runningActionsCount = obj12729_onTap_runningActionsCount + 1;


	var selector = "#obj12656";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12729_onTap_runningActionsCount = window.obj12729_onTap_runningActionsCount - 1;

if (window.obj12729_onTap_runningActionsCount < 0) {
	window.obj12729_onTap_runningActionsCount = 0;
} else if (window.obj12729_onTap_runningActionsCount == 0) {
	obj12729_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12729_onTap_runningActionsCount = window.obj12729_onTap_runningActionsCount - 1;

if (window.obj12729_onTap_runningActionsCount < 0) {
	window.obj12729_onTap_runningActionsCount = 0;
} else if (window.obj12729_onTap_runningActionsCount == 0) {
	obj12729_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12729_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12729_onTap_activeActionGroupIndex = -1;
		$("#obj12729").trigger("obj12729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12729) {
				console.warn("de-queueing event obj12729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12729_onTap_activeActionGroupIndex = 3;
	











































};
obj12742_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12742_onTap_activeActionGroupIndex = -1;
		$("#obj12742").trigger("obj12742_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12742) {
				console.warn("de-queueing event obj12742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12742_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12744();
function playAudioFile_12744() {
	window.obj12742_onTap_runningActionsCount = obj12742_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12744")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12744");
			$("#obj_audio_playSoundFile12744").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12742_onTap_runningActionsCount = window.obj12742_onTap_runningActionsCount - 1;

if (window.obj12742_onTap_runningActionsCount < 0) {
	window.obj12742_onTap_runningActionsCount = 0;
} else if (window.obj12742_onTap_runningActionsCount == 0) {
	obj12742_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12742_onTap_runningActionsCount = window.obj12742_onTap_runningActionsCount - 1;

if (window.obj12742_onTap_runningActionsCount < 0) {
	window.obj12742_onTap_runningActionsCount = 0;
} else if (window.obj12742_onTap_runningActionsCount == 0) {
	obj12742_onTap_actionGroup1();
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
				window.obj12742_onTap_runningActionsCount = window.obj12742_onTap_runningActionsCount - 1;

if (window.obj12742_onTap_runningActionsCount < 0) {
	window.obj12742_onTap_runningActionsCount = 0;
} else if (window.obj12742_onTap_runningActionsCount == 0) {
	obj12742_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12742_onTap_runningActionsCount = window.obj12742_onTap_runningActionsCount - 1;

if (window.obj12742_onTap_runningActionsCount < 0) {
	window.obj12742_onTap_runningActionsCount = 0;
} else if (window.obj12742_onTap_runningActionsCount == 0) {
	obj12742_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12742_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12742_onTap_activeActionGroupIndex = -1;
		$("#obj12742").trigger("obj12742_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12742) {
				console.warn("de-queueing event obj12742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12742_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12668 
hide_12745();
function hide_12745() {
	var selector = "#obj12668";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12742_onTap_runningActionsCount = obj12742_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12742_onTap_runningActionsCount = window.obj12742_onTap_runningActionsCount - 1;

if (window.obj12742_onTap_runningActionsCount < 0) {
	window.obj12742_onTap_runningActionsCount = 0;
} else if (window.obj12742_onTap_runningActionsCount == 0) {
	obj12742_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12745(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12742_onTap_runningActionsCount = window.obj12742_onTap_runningActionsCount - 1;

if (window.obj12742_onTap_runningActionsCount < 0) {
	window.obj12742_onTap_runningActionsCount = 0;
} else if (window.obj12742_onTap_runningActionsCount == 0) {
	obj12742_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12742_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12742_onTap_activeActionGroupIndex = -1;
		$("#obj12742").trigger("obj12742_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12742) {
				console.warn("de-queueing event obj12742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12742_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12668
(function(){
	window.obj12742_onTap_runningActionsCount = obj12742_onTap_runningActionsCount + 1;


	var selector = "#obj12668";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12742_onTap_runningActionsCount = window.obj12742_onTap_runningActionsCount - 1;

if (window.obj12742_onTap_runningActionsCount < 0) {
	window.obj12742_onTap_runningActionsCount = 0;
} else if (window.obj12742_onTap_runningActionsCount == 0) {
	obj12742_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12742_onTap_runningActionsCount = window.obj12742_onTap_runningActionsCount - 1;

if (window.obj12742_onTap_runningActionsCount < 0) {
	window.obj12742_onTap_runningActionsCount = 0;
} else if (window.obj12742_onTap_runningActionsCount == 0) {
	obj12742_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12742_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12742_onTap_activeActionGroupIndex = -1;
		$("#obj12742").trigger("obj12742_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12742) {
				console.warn("de-queueing event obj12742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12742_onTap_activeActionGroupIndex = 3;
	











































};
obj12747_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12747_onTap_activeActionGroupIndex = -1;
		$("#obj12747").trigger("obj12747_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12747) {
				console.warn("de-queueing event obj12747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12747_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12749();
function playAudioFile_12749() {
	window.obj12747_onTap_runningActionsCount = obj12747_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12749")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12749");
			$("#obj_audio_playSoundFile12749").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12747_onTap_runningActionsCount = window.obj12747_onTap_runningActionsCount - 1;

if (window.obj12747_onTap_runningActionsCount < 0) {
	window.obj12747_onTap_runningActionsCount = 0;
} else if (window.obj12747_onTap_runningActionsCount == 0) {
	obj12747_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12747_onTap_runningActionsCount = window.obj12747_onTap_runningActionsCount - 1;

if (window.obj12747_onTap_runningActionsCount < 0) {
	window.obj12747_onTap_runningActionsCount = 0;
} else if (window.obj12747_onTap_runningActionsCount == 0) {
	obj12747_onTap_actionGroup1();
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
				window.obj12747_onTap_runningActionsCount = window.obj12747_onTap_runningActionsCount - 1;

if (window.obj12747_onTap_runningActionsCount < 0) {
	window.obj12747_onTap_runningActionsCount = 0;
} else if (window.obj12747_onTap_runningActionsCount == 0) {
	obj12747_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12747_onTap_runningActionsCount = window.obj12747_onTap_runningActionsCount - 1;

if (window.obj12747_onTap_runningActionsCount < 0) {
	window.obj12747_onTap_runningActionsCount = 0;
} else if (window.obj12747_onTap_runningActionsCount == 0) {
	obj12747_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12747_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12747_onTap_activeActionGroupIndex = -1;
		$("#obj12747").trigger("obj12747_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12747) {
				console.warn("de-queueing event obj12747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12747_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12662 
hide_12750();
function hide_12750() {
	var selector = "#obj12662";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12747_onTap_runningActionsCount = obj12747_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12747_onTap_runningActionsCount = window.obj12747_onTap_runningActionsCount - 1;

if (window.obj12747_onTap_runningActionsCount < 0) {
	window.obj12747_onTap_runningActionsCount = 0;
} else if (window.obj12747_onTap_runningActionsCount == 0) {
	obj12747_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12750(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12747_onTap_runningActionsCount = window.obj12747_onTap_runningActionsCount - 1;

if (window.obj12747_onTap_runningActionsCount < 0) {
	window.obj12747_onTap_runningActionsCount = 0;
} else if (window.obj12747_onTap_runningActionsCount == 0) {
	obj12747_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12747_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12747_onTap_activeActionGroupIndex = -1;
		$("#obj12747").trigger("obj12747_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12747) {
				console.warn("de-queueing event obj12747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12747_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12662
(function(){
	window.obj12747_onTap_runningActionsCount = obj12747_onTap_runningActionsCount + 1;


	var selector = "#obj12662";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12747_onTap_runningActionsCount = window.obj12747_onTap_runningActionsCount - 1;

if (window.obj12747_onTap_runningActionsCount < 0) {
	window.obj12747_onTap_runningActionsCount = 0;
} else if (window.obj12747_onTap_runningActionsCount == 0) {
	obj12747_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12747_onTap_runningActionsCount = window.obj12747_onTap_runningActionsCount - 1;

if (window.obj12747_onTap_runningActionsCount < 0) {
	window.obj12747_onTap_runningActionsCount = 0;
} else if (window.obj12747_onTap_runningActionsCount == 0) {
	obj12747_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12747_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12747_onTap_activeActionGroupIndex = -1;
		$("#obj12747").trigger("obj12747_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12747) {
				console.warn("de-queueing event obj12747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12747_onTap_activeActionGroupIndex = 3;
	











































};
obj12684_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12684_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12684").trigger("obj12684_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12684) {
				console.warn("de-queueing event obj12684." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12684").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12684_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_12686();
function wait_12686() {
	window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount = obj12684_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12684_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj12684_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12684_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12684").trigger("obj12684_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12684) {
				console.warn("de-queueing event obj12684." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12684").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12684_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_12687();
function goToPage_12687() {
	window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount = obj12684_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor243")[0].click();
	window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12684_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12684_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj12684_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12684_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12684").trigger("obj12684_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12684) {
				console.warn("de-queueing event obj12684." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12684").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12684_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj12701_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12701_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12701").trigger("obj12701_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12701) {
				console.warn("de-queueing event obj12701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12701_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_12703();
function switchText_12703() {
	window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount = obj12701_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/9</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12704_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12704_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12704").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12704_content");
			setTimeout(function () {
				window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12701_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj12704 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12701_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12701_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj12701_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12701_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12701").trigger("obj12701_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12701) {
				console.warn("de-queueing event obj12701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12701_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj12698_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12698_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12698").trigger("obj12698_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12698) {
				console.warn("de-queueing event obj12698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12698_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_12700();
function switchText_12700() {
	window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount = obj12698_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/9</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12704_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12704_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12704").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12704_content");
			setTimeout(function () {
				window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12698_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj12704 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12698_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12698_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj12698_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12698_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12698").trigger("obj12698_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12698) {
				console.warn("de-queueing event obj12698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12698_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj12695_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12695_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12695").trigger("obj12695_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12695) {
				console.warn("de-queueing event obj12695." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12695").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12695_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_12697();
function switchText_12697() {
	window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount = obj12695_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/9</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12704_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12704_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12704").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12704_content");
			setTimeout(function () {
				window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12695_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj12704 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12695_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12695_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj12695_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12695_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12695").trigger("obj12695_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12695) {
				console.warn("de-queueing event obj12695." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12695").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12695_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj12692_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12692_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12692").trigger("obj12692_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12692) {
				console.warn("de-queueing event obj12692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12692_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_12694();
function switchText_12694() {
	window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount = obj12692_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>4/9</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12704_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12704_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12704").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12704_content");
			setTimeout(function () {
				window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12692_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj12704 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12692_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12692_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj12692_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12692_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12692").trigger("obj12692_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12692) {
				console.warn("de-queueing event obj12692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12692_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj12708_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12708_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12708").trigger("obj12708_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12708) {
				console.warn("de-queueing event obj12708." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12708").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12708_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj12701 
incrementCounter_12710();
function incrementCounter_12710() {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = obj12708_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj12701_counterValue;
	obj12701_counterValue = obj12701_counterValue + 1;
	if (! obj12701_counterCanExceedTargetValue && obj12701_counterValue > obj12701_counterTargetValue) {
		obj12701_counterValue = obj12701_counterTargetValue;
	}

	if (oldValue != obj12701_counterValue) {
		$("#obj12701").trigger('SCEventCounterValueChange');
		$("#obj12701").trigger('SCEventCounterIncrease');
		if (obj12701_counterValue == obj12701_counterTargetValue)
			$("#obj12701").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12708_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj12698 
incrementCounter_12711();
function incrementCounter_12711() {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = obj12708_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj12698_counterValue;
	obj12698_counterValue = obj12698_counterValue + 1;
	if (! obj12698_counterCanExceedTargetValue && obj12698_counterValue > obj12698_counterTargetValue) {
		obj12698_counterValue = obj12698_counterTargetValue;
	}

	if (oldValue != obj12698_counterValue) {
		$("#obj12698").trigger('SCEventCounterValueChange');
		$("#obj12698").trigger('SCEventCounterIncrease');
		if (obj12698_counterValue == obj12698_counterTargetValue)
			$("#obj12698").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12708_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj12695 
incrementCounter_12712();
function incrementCounter_12712() {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = obj12708_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj12695_counterValue;
	obj12695_counterValue = obj12695_counterValue + 1;
	if (! obj12695_counterCanExceedTargetValue && obj12695_counterValue > obj12695_counterTargetValue) {
		obj12695_counterValue = obj12695_counterTargetValue;
	}

	if (oldValue != obj12695_counterValue) {
		$("#obj12695").trigger('SCEventCounterValueChange');
		$("#obj12695").trigger('SCEventCounterIncrease');
		if (obj12695_counterValue == obj12695_counterTargetValue)
			$("#obj12695").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12708_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj12692 
incrementCounter_12713();
function incrementCounter_12713() {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = obj12708_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj12692_counterValue;
	obj12692_counterValue = obj12692_counterValue + 1;
	if (! obj12692_counterCanExceedTargetValue && obj12692_counterValue > obj12692_counterTargetValue) {
		obj12692_counterValue = obj12692_counterTargetValue;
	}

	if (oldValue != obj12692_counterValue) {
		$("#obj12692").trigger('SCEventCounterValueChange');
		$("#obj12692").trigger('SCEventCounterIncrease');
		if (obj12692_counterValue == obj12692_counterTargetValue)
			$("#obj12692").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12708_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj12708_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12708_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12708").trigger("obj12708_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12708) {
				console.warn("de-queueing event obj12708." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12708").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12708_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj12708 
decrementCounter_12714();
function decrementCounter_12714() {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = obj12708_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj12708_counterValue;
	obj12708_counterValue = obj12708_counterValue - 1;
	if (obj12708_counterValue < 0) {
		obj12708_counterValue = 0;
	}

	if (oldValue != obj12708_counterValue) {
		$("#obj12708").trigger('SCEventCounterValueChange');
		$("#obj12708").trigger('SCEventCounterDecrease');
		if (obj12708_counterValue == obj12708_counterTargetValue)
			$("#obj12708").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12708_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12708_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj12708_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12708_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12708").trigger("obj12708_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12708) {
				console.warn("de-queueing event obj12708." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12708").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12708_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj12715_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12715_onTap_activeActionGroupIndex = -1;
		$("#obj12715").trigger("obj12715_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12715) {
				console.warn("de-queueing event obj12715." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12715").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12715_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12715 
hide_12724();
function hide_12724() {
	var selector = "#obj12715";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12715_onTap_runningActionsCount = obj12715_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12724(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12680
(function(){
	window.obj12715_onTap_runningActionsCount = obj12715_onTap_runningActionsCount + 1;


	var selector = "#obj12680";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12715_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12715_onTap_activeActionGroupIndex = -1;
		$("#obj12715").trigger("obj12715_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12715) {
				console.warn("de-queueing event obj12715." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12715").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12715_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12723();
function playAudioFile_12723() {
	window.obj12715_onTap_runningActionsCount = obj12715_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12723")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12723");
			$("#obj_audio_playSoundFile12723").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup2();
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
				window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12715_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12715_onTap_activeActionGroupIndex = -1;
		$("#obj12715").trigger("obj12715_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12715) {
				console.warn("de-queueing event obj12715." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12715").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12715_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_12717();
function runjs_12717() {
	window.obj12715_onTap_runningActionsCount = obj12715_onTap_runningActionsCount + 1;


	$("#obj12646").css("background-color", "#EA9284");
	
	setTimeout(function() {
		window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup3();
}
	}, 1);
}














};
obj12715_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12715_onTap_activeActionGroupIndex = -1;
		$("#obj12715").trigger("obj12715_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12715) {
				console.warn("de-queueing event obj12715." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12715").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12715_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj12672
(function(){
	window.obj12715_onTap_runningActionsCount = obj12715_onTap_runningActionsCount + 1;


	var selector = "#obj12672";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12729
(function(){
	window.obj12715_onTap_runningActionsCount = obj12715_onTap_runningActionsCount + 1;


	var selector = "#obj12729";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12742
(function(){
	window.obj12715_onTap_runningActionsCount = obj12715_onTap_runningActionsCount + 1;


	var selector = "#obj12742";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12747
(function(){
	window.obj12715_onTap_runningActionsCount = obj12715_onTap_runningActionsCount + 1;


	var selector = "#obj12747";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12715_onTap_runningActionsCount = window.obj12715_onTap_runningActionsCount - 1;

if (window.obj12715_onTap_runningActionsCount < 0) {
	window.obj12715_onTap_runningActionsCount = 0;
} else if (window.obj12715_onTap_runningActionsCount == 0) {
	obj12715_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12715_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12715_onTap_activeActionGroupIndex = -1;
		$("#obj12715").trigger("obj12715_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12715) {
				console.warn("de-queueing event obj12715." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12715").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12715_onTap_activeActionGroupIndex = 4;
	











































};
obj12779_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12779_onTap_activeActionGroupIndex = -1;
		$("#obj12779").trigger("obj12779_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12779) {
				console.warn("de-queueing event obj12779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12779_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12779 
hide_12782();
function hide_12782() {
	var selector = "#obj12779";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12782(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12774 
hide_12783();
function hide_12783() {
	var selector = "#obj12774";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12783(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12769 
hide_12784();
function hide_12784() {
	var selector = "#obj12769";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12784(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12764 
hide_12785();
function hide_12785() {
	var selector = "#obj12764";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12785(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12752
(function(){
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;


	var selector = "#obj12752";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12779_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12779_onTap_activeActionGroupIndex = -1;
		$("#obj12779").trigger("obj12779_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12779) {
				console.warn("de-queueing event obj12779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12779_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12786();
function playAudioFile_12786() {
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12786")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12786");
			$("#obj_audio_playSoundFile12786").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup2();
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
				window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12779_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12779_onTap_activeActionGroupIndex = -1;
		$("#obj12779").trigger("obj12779_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12779) {
				console.warn("de-queueing event obj12779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12779_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_12787();
function runjs_12787() {
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;


	$("#obj12662").css("background-color", "#8AC440");
	
	setTimeout(function() {
		window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup3();
}
	}, 1);
}














};
obj12779_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12779_onTap_activeActionGroupIndex = -1;
		$("#obj12779").trigger("obj12779_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12779) {
				console.warn("de-queueing event obj12779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12779_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj12680 
hide_12788();
function hide_12788() {
	var selector = "#obj12680";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12788(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12779_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12779_onTap_activeActionGroupIndex = -1;
		$("#obj12779").trigger("obj12779_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12779) {
				console.warn("de-queueing event obj12779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12779_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj12708 
incrementCounter_12789();
function incrementCounter_12789() {
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;


	var oldValue = obj12708_counterValue;
	obj12708_counterValue = obj12708_counterValue + 1;
	if (! obj12708_counterCanExceedTargetValue && obj12708_counterValue > obj12708_counterTargetValue) {
		obj12708_counterValue = obj12708_counterTargetValue;
	}

	if (oldValue != obj12708_counterValue) {
		$("#obj12708").trigger('SCEventCounterValueChange');
		$("#obj12708").trigger('SCEventCounterIncrease');
		if (obj12708_counterValue == obj12708_counterTargetValue)
			$("#obj12708").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj12684 
incrementCounter_12790();
function incrementCounter_12790() {
	window.obj12779_onTap_runningActionsCount = obj12779_onTap_runningActionsCount + 1;


	var oldValue = obj12684_counterValue;
	obj12684_counterValue = obj12684_counterValue + 1;
	if (! obj12684_counterCanExceedTargetValue && obj12684_counterValue > obj12684_counterTargetValue) {
		obj12684_counterValue = obj12684_counterTargetValue;
	}

	if (oldValue != obj12684_counterValue) {
		$("#obj12684").trigger('SCEventCounterValueChange');
		$("#obj12684").trigger('SCEventCounterIncrease');
		if (obj12684_counterValue == obj12684_counterTargetValue)
			$("#obj12684").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12779_onTap_runningActionsCount = window.obj12779_onTap_runningActionsCount - 1;

if (window.obj12779_onTap_runningActionsCount < 0) {
	window.obj12779_onTap_runningActionsCount = 0;
} else if (window.obj12779_onTap_runningActionsCount == 0) {
	obj12779_onTap_actionGroup5();
} }, 1);
}











};
obj12779_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12779_onTap_activeActionGroupIndex = -1;
		$("#obj12779").trigger("obj12779_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12779) {
				console.warn("de-queueing event obj12779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12779_onTap_activeActionGroupIndex = 5;
	











































};
obj12774_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12774_onTap_activeActionGroupIndex = -1;
		$("#obj12774").trigger("obj12774_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12774) {
				console.warn("de-queueing event obj12774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12774_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12776();
function playAudioFile_12776() {
	window.obj12774_onTap_runningActionsCount = obj12774_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12776")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12776");
			$("#obj_audio_playSoundFile12776").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12774_onTap_runningActionsCount = window.obj12774_onTap_runningActionsCount - 1;

if (window.obj12774_onTap_runningActionsCount < 0) {
	window.obj12774_onTap_runningActionsCount = 0;
} else if (window.obj12774_onTap_runningActionsCount == 0) {
	obj12774_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12774_onTap_runningActionsCount = window.obj12774_onTap_runningActionsCount - 1;

if (window.obj12774_onTap_runningActionsCount < 0) {
	window.obj12774_onTap_runningActionsCount = 0;
} else if (window.obj12774_onTap_runningActionsCount == 0) {
	obj12774_onTap_actionGroup1();
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
				window.obj12774_onTap_runningActionsCount = window.obj12774_onTap_runningActionsCount - 1;

if (window.obj12774_onTap_runningActionsCount < 0) {
	window.obj12774_onTap_runningActionsCount = 0;
} else if (window.obj12774_onTap_runningActionsCount == 0) {
	obj12774_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12774_onTap_runningActionsCount = window.obj12774_onTap_runningActionsCount - 1;

if (window.obj12774_onTap_runningActionsCount < 0) {
	window.obj12774_onTap_runningActionsCount = 0;
} else if (window.obj12774_onTap_runningActionsCount == 0) {
	obj12774_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12774_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12774_onTap_activeActionGroupIndex = -1;
		$("#obj12774").trigger("obj12774_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12774) {
				console.warn("de-queueing event obj12774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12774_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12656 
hide_12777();
function hide_12777() {
	var selector = "#obj12656";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12774_onTap_runningActionsCount = obj12774_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12774_onTap_runningActionsCount = window.obj12774_onTap_runningActionsCount - 1;

if (window.obj12774_onTap_runningActionsCount < 0) {
	window.obj12774_onTap_runningActionsCount = 0;
} else if (window.obj12774_onTap_runningActionsCount == 0) {
	obj12774_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12777(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12774_onTap_runningActionsCount = window.obj12774_onTap_runningActionsCount - 1;

if (window.obj12774_onTap_runningActionsCount < 0) {
	window.obj12774_onTap_runningActionsCount = 0;
} else if (window.obj12774_onTap_runningActionsCount == 0) {
	obj12774_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12774_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12774_onTap_activeActionGroupIndex = -1;
		$("#obj12774").trigger("obj12774_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12774) {
				console.warn("de-queueing event obj12774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12774_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12656
(function(){
	window.obj12774_onTap_runningActionsCount = obj12774_onTap_runningActionsCount + 1;


	var selector = "#obj12656";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12774_onTap_runningActionsCount = window.obj12774_onTap_runningActionsCount - 1;

if (window.obj12774_onTap_runningActionsCount < 0) {
	window.obj12774_onTap_runningActionsCount = 0;
} else if (window.obj12774_onTap_runningActionsCount == 0) {
	obj12774_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12774_onTap_runningActionsCount = window.obj12774_onTap_runningActionsCount - 1;

if (window.obj12774_onTap_runningActionsCount < 0) {
	window.obj12774_onTap_runningActionsCount = 0;
} else if (window.obj12774_onTap_runningActionsCount == 0) {
	obj12774_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12774_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12774_onTap_activeActionGroupIndex = -1;
		$("#obj12774").trigger("obj12774_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12774) {
				console.warn("de-queueing event obj12774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12774_onTap_activeActionGroupIndex = 3;
	











































};
obj12769_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12769_onTap_activeActionGroupIndex = -1;
		$("#obj12769").trigger("obj12769_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12769) {
				console.warn("de-queueing event obj12769." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12769").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12769_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12771();
function playAudioFile_12771() {
	window.obj12769_onTap_runningActionsCount = obj12769_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12771")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12771");
			$("#obj_audio_playSoundFile12771").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12769_onTap_runningActionsCount = window.obj12769_onTap_runningActionsCount - 1;

if (window.obj12769_onTap_runningActionsCount < 0) {
	window.obj12769_onTap_runningActionsCount = 0;
} else if (window.obj12769_onTap_runningActionsCount == 0) {
	obj12769_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12769_onTap_runningActionsCount = window.obj12769_onTap_runningActionsCount - 1;

if (window.obj12769_onTap_runningActionsCount < 0) {
	window.obj12769_onTap_runningActionsCount = 0;
} else if (window.obj12769_onTap_runningActionsCount == 0) {
	obj12769_onTap_actionGroup1();
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
				window.obj12769_onTap_runningActionsCount = window.obj12769_onTap_runningActionsCount - 1;

if (window.obj12769_onTap_runningActionsCount < 0) {
	window.obj12769_onTap_runningActionsCount = 0;
} else if (window.obj12769_onTap_runningActionsCount == 0) {
	obj12769_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12769_onTap_runningActionsCount = window.obj12769_onTap_runningActionsCount - 1;

if (window.obj12769_onTap_runningActionsCount < 0) {
	window.obj12769_onTap_runningActionsCount = 0;
} else if (window.obj12769_onTap_runningActionsCount == 0) {
	obj12769_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12769_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12769_onTap_activeActionGroupIndex = -1;
		$("#obj12769").trigger("obj12769_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12769) {
				console.warn("de-queueing event obj12769." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12769").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12769_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12668 
hide_12772();
function hide_12772() {
	var selector = "#obj12668";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12769_onTap_runningActionsCount = obj12769_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12769_onTap_runningActionsCount = window.obj12769_onTap_runningActionsCount - 1;

if (window.obj12769_onTap_runningActionsCount < 0) {
	window.obj12769_onTap_runningActionsCount = 0;
} else if (window.obj12769_onTap_runningActionsCount == 0) {
	obj12769_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12772(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12769_onTap_runningActionsCount = window.obj12769_onTap_runningActionsCount - 1;

if (window.obj12769_onTap_runningActionsCount < 0) {
	window.obj12769_onTap_runningActionsCount = 0;
} else if (window.obj12769_onTap_runningActionsCount == 0) {
	obj12769_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12769_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12769_onTap_activeActionGroupIndex = -1;
		$("#obj12769").trigger("obj12769_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12769) {
				console.warn("de-queueing event obj12769." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12769").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12769_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12668
(function(){
	window.obj12769_onTap_runningActionsCount = obj12769_onTap_runningActionsCount + 1;


	var selector = "#obj12668";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12769_onTap_runningActionsCount = window.obj12769_onTap_runningActionsCount - 1;

if (window.obj12769_onTap_runningActionsCount < 0) {
	window.obj12769_onTap_runningActionsCount = 0;
} else if (window.obj12769_onTap_runningActionsCount == 0) {
	obj12769_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12769_onTap_runningActionsCount = window.obj12769_onTap_runningActionsCount - 1;

if (window.obj12769_onTap_runningActionsCount < 0) {
	window.obj12769_onTap_runningActionsCount = 0;
} else if (window.obj12769_onTap_runningActionsCount == 0) {
	obj12769_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12769_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12769_onTap_activeActionGroupIndex = -1;
		$("#obj12769").trigger("obj12769_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12769) {
				console.warn("de-queueing event obj12769." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12769").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12769_onTap_activeActionGroupIndex = 3;
	











































};
obj12764_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12764_onTap_activeActionGroupIndex = -1;
		$("#obj12764").trigger("obj12764_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12764) {
				console.warn("de-queueing event obj12764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12764_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12766();
function playAudioFile_12766() {
	window.obj12764_onTap_runningActionsCount = obj12764_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12766")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12766");
			$("#obj_audio_playSoundFile12766").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12764_onTap_runningActionsCount = window.obj12764_onTap_runningActionsCount - 1;

if (window.obj12764_onTap_runningActionsCount < 0) {
	window.obj12764_onTap_runningActionsCount = 0;
} else if (window.obj12764_onTap_runningActionsCount == 0) {
	obj12764_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12764_onTap_runningActionsCount = window.obj12764_onTap_runningActionsCount - 1;

if (window.obj12764_onTap_runningActionsCount < 0) {
	window.obj12764_onTap_runningActionsCount = 0;
} else if (window.obj12764_onTap_runningActionsCount == 0) {
	obj12764_onTap_actionGroup1();
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
				window.obj12764_onTap_runningActionsCount = window.obj12764_onTap_runningActionsCount - 1;

if (window.obj12764_onTap_runningActionsCount < 0) {
	window.obj12764_onTap_runningActionsCount = 0;
} else if (window.obj12764_onTap_runningActionsCount == 0) {
	obj12764_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12764_onTap_runningActionsCount = window.obj12764_onTap_runningActionsCount - 1;

if (window.obj12764_onTap_runningActionsCount < 0) {
	window.obj12764_onTap_runningActionsCount = 0;
} else if (window.obj12764_onTap_runningActionsCount == 0) {
	obj12764_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12764_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12764_onTap_activeActionGroupIndex = -1;
		$("#obj12764").trigger("obj12764_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12764) {
				console.warn("de-queueing event obj12764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12764_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12648 
hide_12767();
function hide_12767() {
	var selector = "#obj12648";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12764_onTap_runningActionsCount = obj12764_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12764_onTap_runningActionsCount = window.obj12764_onTap_runningActionsCount - 1;

if (window.obj12764_onTap_runningActionsCount < 0) {
	window.obj12764_onTap_runningActionsCount = 0;
} else if (window.obj12764_onTap_runningActionsCount == 0) {
	obj12764_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12767(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12764_onTap_runningActionsCount = window.obj12764_onTap_runningActionsCount - 1;

if (window.obj12764_onTap_runningActionsCount < 0) {
	window.obj12764_onTap_runningActionsCount = 0;
} else if (window.obj12764_onTap_runningActionsCount == 0) {
	obj12764_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12764_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12764_onTap_activeActionGroupIndex = -1;
		$("#obj12764").trigger("obj12764_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12764) {
				console.warn("de-queueing event obj12764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12764_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12648
(function(){
	window.obj12764_onTap_runningActionsCount = obj12764_onTap_runningActionsCount + 1;


	var selector = "#obj12648";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12764_onTap_runningActionsCount = window.obj12764_onTap_runningActionsCount - 1;

if (window.obj12764_onTap_runningActionsCount < 0) {
	window.obj12764_onTap_runningActionsCount = 0;
} else if (window.obj12764_onTap_runningActionsCount == 0) {
	obj12764_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12764_onTap_runningActionsCount = window.obj12764_onTap_runningActionsCount - 1;

if (window.obj12764_onTap_runningActionsCount < 0) {
	window.obj12764_onTap_runningActionsCount = 0;
} else if (window.obj12764_onTap_runningActionsCount == 0) {
	obj12764_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12764_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12764_onTap_activeActionGroupIndex = -1;
		$("#obj12764").trigger("obj12764_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12764) {
				console.warn("de-queueing event obj12764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12764_onTap_activeActionGroupIndex = 3;
	











































};
obj12754_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12754_onTap_activeActionGroupIndex = -1;
		$("#obj12754").trigger("obj12754_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12754) {
				console.warn("de-queueing event obj12754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12754_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12754 
hide_12757();
function hide_12757() {
	var selector = "#obj12754";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12754_onTap_runningActionsCount = obj12754_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12757(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12680
(function(){
	window.obj12754_onTap_runningActionsCount = obj12754_onTap_runningActionsCount + 1;


	var selector = "#obj12680";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12754_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12754_onTap_activeActionGroupIndex = -1;
		$("#obj12754").trigger("obj12754_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12754) {
				console.warn("de-queueing event obj12754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12754_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12758();
function playAudioFile_12758() {
	window.obj12754_onTap_runningActionsCount = obj12754_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12758")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12758");
			$("#obj_audio_playSoundFile12758").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup2();
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
				window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12754_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12754_onTap_activeActionGroupIndex = -1;
		$("#obj12754").trigger("obj12754_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12754) {
				console.warn("de-queueing event obj12754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12754_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_12759();
function runjs_12759() {
	window.obj12754_onTap_runningActionsCount = obj12754_onTap_runningActionsCount + 1;


	$("#obj12637").css("background-color", "#8AC440");
	
	setTimeout(function() {
		window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup3();
}
	}, 1);
}














};
obj12754_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12754_onTap_activeActionGroupIndex = -1;
		$("#obj12754").trigger("obj12754_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12754) {
				console.warn("de-queueing event obj12754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12754_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj12779
(function(){
	window.obj12754_onTap_runningActionsCount = obj12754_onTap_runningActionsCount + 1;


	var selector = "#obj12779";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12774
(function(){
	window.obj12754_onTap_runningActionsCount = obj12754_onTap_runningActionsCount + 1;


	var selector = "#obj12774";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12769
(function(){
	window.obj12754_onTap_runningActionsCount = obj12754_onTap_runningActionsCount + 1;


	var selector = "#obj12769";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12764
(function(){
	window.obj12754_onTap_runningActionsCount = obj12754_onTap_runningActionsCount + 1;


	var selector = "#obj12764";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12754_onTap_runningActionsCount = window.obj12754_onTap_runningActionsCount - 1;

if (window.obj12754_onTap_runningActionsCount < 0) {
	window.obj12754_onTap_runningActionsCount = 0;
} else if (window.obj12754_onTap_runningActionsCount == 0) {
	obj12754_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12754_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12754_onTap_activeActionGroupIndex = -1;
		$("#obj12754").trigger("obj12754_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12754) {
				console.warn("de-queueing event obj12754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12754_onTap_activeActionGroupIndex = 4;
	











































};
obj12896_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12896_onTap_activeActionGroupIndex = -1;
		$("#obj12896").trigger("obj12896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12896) {
				console.warn("de-queueing event obj12896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12896_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12896 
hide_12899();
function hide_12899() {
	var selector = "#obj12896";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12899(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12891 
hide_12900();
function hide_12900() {
	var selector = "#obj12891";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12900(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12886 
hide_12901();
function hide_12901() {
	var selector = "#obj12886";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12901(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12881 
hide_12902();
function hide_12902() {
	var selector = "#obj12881";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12902(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12869
(function(){
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;


	var selector = "#obj12869";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12896_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12896_onTap_activeActionGroupIndex = -1;
		$("#obj12896").trigger("obj12896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12896) {
				console.warn("de-queueing event obj12896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12896_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12903();
function playAudioFile_12903() {
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12903")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12903");
			$("#obj_audio_playSoundFile12903").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup2();
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
				window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12896_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12896_onTap_activeActionGroupIndex = -1;
		$("#obj12896").trigger("obj12896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12896) {
				console.warn("de-queueing event obj12896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12896_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_12904();
function runjs_12904() {
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;


	$("#obj12668").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup3();
}
	}, 1);
}














};
obj12896_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12896_onTap_activeActionGroupIndex = -1;
		$("#obj12896").trigger("obj12896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12896) {
				console.warn("de-queueing event obj12896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12896_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj12680 
hide_12905();
function hide_12905() {
	var selector = "#obj12680";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12905(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12896_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12896_onTap_activeActionGroupIndex = -1;
		$("#obj12896").trigger("obj12896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12896) {
				console.warn("de-queueing event obj12896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12896_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj12708 
incrementCounter_12906();
function incrementCounter_12906() {
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;


	var oldValue = obj12708_counterValue;
	obj12708_counterValue = obj12708_counterValue + 1;
	if (! obj12708_counterCanExceedTargetValue && obj12708_counterValue > obj12708_counterTargetValue) {
		obj12708_counterValue = obj12708_counterTargetValue;
	}

	if (oldValue != obj12708_counterValue) {
		$("#obj12708").trigger('SCEventCounterValueChange');
		$("#obj12708").trigger('SCEventCounterIncrease');
		if (obj12708_counterValue == obj12708_counterTargetValue)
			$("#obj12708").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj12684 
incrementCounter_12907();
function incrementCounter_12907() {
	window.obj12896_onTap_runningActionsCount = obj12896_onTap_runningActionsCount + 1;


	var oldValue = obj12684_counterValue;
	obj12684_counterValue = obj12684_counterValue + 1;
	if (! obj12684_counterCanExceedTargetValue && obj12684_counterValue > obj12684_counterTargetValue) {
		obj12684_counterValue = obj12684_counterTargetValue;
	}

	if (oldValue != obj12684_counterValue) {
		$("#obj12684").trigger('SCEventCounterValueChange');
		$("#obj12684").trigger('SCEventCounterIncrease');
		if (obj12684_counterValue == obj12684_counterTargetValue)
			$("#obj12684").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12896_onTap_runningActionsCount = window.obj12896_onTap_runningActionsCount - 1;

if (window.obj12896_onTap_runningActionsCount < 0) {
	window.obj12896_onTap_runningActionsCount = 0;
} else if (window.obj12896_onTap_runningActionsCount == 0) {
	obj12896_onTap_actionGroup5();
} }, 1);
}











};
obj12896_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12896_onTap_activeActionGroupIndex = -1;
		$("#obj12896").trigger("obj12896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12896) {
				console.warn("de-queueing event obj12896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12896_onTap_activeActionGroupIndex = 5;
	











































};
obj12891_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12891_onTap_activeActionGroupIndex = -1;
		$("#obj12891").trigger("obj12891_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12891) {
				console.warn("de-queueing event obj12891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12891_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12893();
function playAudioFile_12893() {
	window.obj12891_onTap_runningActionsCount = obj12891_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12893")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12893");
			$("#obj_audio_playSoundFile12893").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12891_onTap_runningActionsCount = window.obj12891_onTap_runningActionsCount - 1;

if (window.obj12891_onTap_runningActionsCount < 0) {
	window.obj12891_onTap_runningActionsCount = 0;
} else if (window.obj12891_onTap_runningActionsCount == 0) {
	obj12891_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12891_onTap_runningActionsCount = window.obj12891_onTap_runningActionsCount - 1;

if (window.obj12891_onTap_runningActionsCount < 0) {
	window.obj12891_onTap_runningActionsCount = 0;
} else if (window.obj12891_onTap_runningActionsCount == 0) {
	obj12891_onTap_actionGroup1();
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
				window.obj12891_onTap_runningActionsCount = window.obj12891_onTap_runningActionsCount - 1;

if (window.obj12891_onTap_runningActionsCount < 0) {
	window.obj12891_onTap_runningActionsCount = 0;
} else if (window.obj12891_onTap_runningActionsCount == 0) {
	obj12891_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12891_onTap_runningActionsCount = window.obj12891_onTap_runningActionsCount - 1;

if (window.obj12891_onTap_runningActionsCount < 0) {
	window.obj12891_onTap_runningActionsCount = 0;
} else if (window.obj12891_onTap_runningActionsCount == 0) {
	obj12891_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12891_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12891_onTap_activeActionGroupIndex = -1;
		$("#obj12891").trigger("obj12891_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12891) {
				console.warn("de-queueing event obj12891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12891_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12656 
hide_12894();
function hide_12894() {
	var selector = "#obj12656";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12891_onTap_runningActionsCount = obj12891_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12891_onTap_runningActionsCount = window.obj12891_onTap_runningActionsCount - 1;

if (window.obj12891_onTap_runningActionsCount < 0) {
	window.obj12891_onTap_runningActionsCount = 0;
} else if (window.obj12891_onTap_runningActionsCount == 0) {
	obj12891_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12894(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12891_onTap_runningActionsCount = window.obj12891_onTap_runningActionsCount - 1;

if (window.obj12891_onTap_runningActionsCount < 0) {
	window.obj12891_onTap_runningActionsCount = 0;
} else if (window.obj12891_onTap_runningActionsCount == 0) {
	obj12891_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12891_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12891_onTap_activeActionGroupIndex = -1;
		$("#obj12891").trigger("obj12891_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12891) {
				console.warn("de-queueing event obj12891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12891_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12656
(function(){
	window.obj12891_onTap_runningActionsCount = obj12891_onTap_runningActionsCount + 1;


	var selector = "#obj12656";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12891_onTap_runningActionsCount = window.obj12891_onTap_runningActionsCount - 1;

if (window.obj12891_onTap_runningActionsCount < 0) {
	window.obj12891_onTap_runningActionsCount = 0;
} else if (window.obj12891_onTap_runningActionsCount == 0) {
	obj12891_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12891_onTap_runningActionsCount = window.obj12891_onTap_runningActionsCount - 1;

if (window.obj12891_onTap_runningActionsCount < 0) {
	window.obj12891_onTap_runningActionsCount = 0;
} else if (window.obj12891_onTap_runningActionsCount == 0) {
	obj12891_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12891_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12891_onTap_activeActionGroupIndex = -1;
		$("#obj12891").trigger("obj12891_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12891) {
				console.warn("de-queueing event obj12891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12891_onTap_activeActionGroupIndex = 3;
	











































};
obj12886_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12886_onTap_activeActionGroupIndex = -1;
		$("#obj12886").trigger("obj12886_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12886) {
				console.warn("de-queueing event obj12886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12886_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12888();
function playAudioFile_12888() {
	window.obj12886_onTap_runningActionsCount = obj12886_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12888")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12888");
			$("#obj_audio_playSoundFile12888").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12886_onTap_runningActionsCount = window.obj12886_onTap_runningActionsCount - 1;

if (window.obj12886_onTap_runningActionsCount < 0) {
	window.obj12886_onTap_runningActionsCount = 0;
} else if (window.obj12886_onTap_runningActionsCount == 0) {
	obj12886_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12886_onTap_runningActionsCount = window.obj12886_onTap_runningActionsCount - 1;

if (window.obj12886_onTap_runningActionsCount < 0) {
	window.obj12886_onTap_runningActionsCount = 0;
} else if (window.obj12886_onTap_runningActionsCount == 0) {
	obj12886_onTap_actionGroup1();
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
				window.obj12886_onTap_runningActionsCount = window.obj12886_onTap_runningActionsCount - 1;

if (window.obj12886_onTap_runningActionsCount < 0) {
	window.obj12886_onTap_runningActionsCount = 0;
} else if (window.obj12886_onTap_runningActionsCount == 0) {
	obj12886_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12886_onTap_runningActionsCount = window.obj12886_onTap_runningActionsCount - 1;

if (window.obj12886_onTap_runningActionsCount < 0) {
	window.obj12886_onTap_runningActionsCount = 0;
} else if (window.obj12886_onTap_runningActionsCount == 0) {
	obj12886_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12886_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12886_onTap_activeActionGroupIndex = -1;
		$("#obj12886").trigger("obj12886_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12886) {
				console.warn("de-queueing event obj12886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12886_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12648 
hide_12889();
function hide_12889() {
	var selector = "#obj12648";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12886_onTap_runningActionsCount = obj12886_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12886_onTap_runningActionsCount = window.obj12886_onTap_runningActionsCount - 1;

if (window.obj12886_onTap_runningActionsCount < 0) {
	window.obj12886_onTap_runningActionsCount = 0;
} else if (window.obj12886_onTap_runningActionsCount == 0) {
	obj12886_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12889(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12886_onTap_runningActionsCount = window.obj12886_onTap_runningActionsCount - 1;

if (window.obj12886_onTap_runningActionsCount < 0) {
	window.obj12886_onTap_runningActionsCount = 0;
} else if (window.obj12886_onTap_runningActionsCount == 0) {
	obj12886_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12886_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12886_onTap_activeActionGroupIndex = -1;
		$("#obj12886").trigger("obj12886_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12886) {
				console.warn("de-queueing event obj12886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12886_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12648
(function(){
	window.obj12886_onTap_runningActionsCount = obj12886_onTap_runningActionsCount + 1;


	var selector = "#obj12648";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12886_onTap_runningActionsCount = window.obj12886_onTap_runningActionsCount - 1;

if (window.obj12886_onTap_runningActionsCount < 0) {
	window.obj12886_onTap_runningActionsCount = 0;
} else if (window.obj12886_onTap_runningActionsCount == 0) {
	obj12886_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12886_onTap_runningActionsCount = window.obj12886_onTap_runningActionsCount - 1;

if (window.obj12886_onTap_runningActionsCount < 0) {
	window.obj12886_onTap_runningActionsCount = 0;
} else if (window.obj12886_onTap_runningActionsCount == 0) {
	obj12886_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12886_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12886_onTap_activeActionGroupIndex = -1;
		$("#obj12886").trigger("obj12886_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12886) {
				console.warn("de-queueing event obj12886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12886_onTap_activeActionGroupIndex = 3;
	











































};
obj12881_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12881_onTap_activeActionGroupIndex = -1;
		$("#obj12881").trigger("obj12881_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12881) {
				console.warn("de-queueing event obj12881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12881_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12883();
function playAudioFile_12883() {
	window.obj12881_onTap_runningActionsCount = obj12881_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12883")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12883");
			$("#obj_audio_playSoundFile12883").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12881_onTap_runningActionsCount = window.obj12881_onTap_runningActionsCount - 1;

if (window.obj12881_onTap_runningActionsCount < 0) {
	window.obj12881_onTap_runningActionsCount = 0;
} else if (window.obj12881_onTap_runningActionsCount == 0) {
	obj12881_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12881_onTap_runningActionsCount = window.obj12881_onTap_runningActionsCount - 1;

if (window.obj12881_onTap_runningActionsCount < 0) {
	window.obj12881_onTap_runningActionsCount = 0;
} else if (window.obj12881_onTap_runningActionsCount == 0) {
	obj12881_onTap_actionGroup1();
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
				window.obj12881_onTap_runningActionsCount = window.obj12881_onTap_runningActionsCount - 1;

if (window.obj12881_onTap_runningActionsCount < 0) {
	window.obj12881_onTap_runningActionsCount = 0;
} else if (window.obj12881_onTap_runningActionsCount == 0) {
	obj12881_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12881_onTap_runningActionsCount = window.obj12881_onTap_runningActionsCount - 1;

if (window.obj12881_onTap_runningActionsCount < 0) {
	window.obj12881_onTap_runningActionsCount = 0;
} else if (window.obj12881_onTap_runningActionsCount == 0) {
	obj12881_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12881_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12881_onTap_activeActionGroupIndex = -1;
		$("#obj12881").trigger("obj12881_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12881) {
				console.warn("de-queueing event obj12881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12881_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12662 
hide_12884();
function hide_12884() {
	var selector = "#obj12662";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12881_onTap_runningActionsCount = obj12881_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12881_onTap_runningActionsCount = window.obj12881_onTap_runningActionsCount - 1;

if (window.obj12881_onTap_runningActionsCount < 0) {
	window.obj12881_onTap_runningActionsCount = 0;
} else if (window.obj12881_onTap_runningActionsCount == 0) {
	obj12881_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12884(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12881_onTap_runningActionsCount = window.obj12881_onTap_runningActionsCount - 1;

if (window.obj12881_onTap_runningActionsCount < 0) {
	window.obj12881_onTap_runningActionsCount = 0;
} else if (window.obj12881_onTap_runningActionsCount == 0) {
	obj12881_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12881_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12881_onTap_activeActionGroupIndex = -1;
		$("#obj12881").trigger("obj12881_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12881) {
				console.warn("de-queueing event obj12881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12881_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12662
(function(){
	window.obj12881_onTap_runningActionsCount = obj12881_onTap_runningActionsCount + 1;


	var selector = "#obj12662";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12881_onTap_runningActionsCount = window.obj12881_onTap_runningActionsCount - 1;

if (window.obj12881_onTap_runningActionsCount < 0) {
	window.obj12881_onTap_runningActionsCount = 0;
} else if (window.obj12881_onTap_runningActionsCount == 0) {
	obj12881_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12881_onTap_runningActionsCount = window.obj12881_onTap_runningActionsCount - 1;

if (window.obj12881_onTap_runningActionsCount < 0) {
	window.obj12881_onTap_runningActionsCount = 0;
} else if (window.obj12881_onTap_runningActionsCount == 0) {
	obj12881_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12881_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12881_onTap_activeActionGroupIndex = -1;
		$("#obj12881").trigger("obj12881_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12881) {
				console.warn("de-queueing event obj12881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12881_onTap_activeActionGroupIndex = 3;
	











































};
obj12871_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12871_onTap_activeActionGroupIndex = -1;
		$("#obj12871").trigger("obj12871_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12871) {
				console.warn("de-queueing event obj12871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12871_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12871 
hide_12874();
function hide_12874() {
	var selector = "#obj12871";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12871_onTap_runningActionsCount = obj12871_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12874(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12680
(function(){
	window.obj12871_onTap_runningActionsCount = obj12871_onTap_runningActionsCount + 1;


	var selector = "#obj12680";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12871_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12871_onTap_activeActionGroupIndex = -1;
		$("#obj12871").trigger("obj12871_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12871) {
				console.warn("de-queueing event obj12871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12871_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12875();
function playAudioFile_12875() {
	window.obj12871_onTap_runningActionsCount = obj12871_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12875")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12875");
			$("#obj_audio_playSoundFile12875").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup2();
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
				window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12871_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12871_onTap_activeActionGroupIndex = -1;
		$("#obj12871").trigger("obj12871_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12871) {
				console.warn("de-queueing event obj12871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12871_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_12876();
function runjs_12876() {
	window.obj12871_onTap_runningActionsCount = obj12871_onTap_runningActionsCount + 1;


	$("#obj12622").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup3();
}
	}, 1);
}














};
obj12871_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12871_onTap_activeActionGroupIndex = -1;
		$("#obj12871").trigger("obj12871_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12871) {
				console.warn("de-queueing event obj12871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12871_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj12896
(function(){
	window.obj12871_onTap_runningActionsCount = obj12871_onTap_runningActionsCount + 1;


	var selector = "#obj12896";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12891
(function(){
	window.obj12871_onTap_runningActionsCount = obj12871_onTap_runningActionsCount + 1;


	var selector = "#obj12891";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12886
(function(){
	window.obj12871_onTap_runningActionsCount = obj12871_onTap_runningActionsCount + 1;


	var selector = "#obj12886";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12881
(function(){
	window.obj12871_onTap_runningActionsCount = obj12871_onTap_runningActionsCount + 1;


	var selector = "#obj12881";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12871_onTap_runningActionsCount = window.obj12871_onTap_runningActionsCount - 1;

if (window.obj12871_onTap_runningActionsCount < 0) {
	window.obj12871_onTap_runningActionsCount = 0;
} else if (window.obj12871_onTap_runningActionsCount == 0) {
	obj12871_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12871_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12871_onTap_activeActionGroupIndex = -1;
		$("#obj12871").trigger("obj12871_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12871) {
				console.warn("de-queueing event obj12871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12871_onTap_activeActionGroupIndex = 4;
	











































};
obj12935_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12935_onTap_activeActionGroupIndex = -1;
		$("#obj12935").trigger("obj12935_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12935) {
				console.warn("de-queueing event obj12935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12935_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12935 
hide_12938();
function hide_12938() {
	var selector = "#obj12935";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12938(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12930 
hide_12939();
function hide_12939() {
	var selector = "#obj12930";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12939(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12925 
hide_12940();
function hide_12940() {
	var selector = "#obj12925";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12940(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12920 
hide_12941();
function hide_12941() {
	var selector = "#obj12920";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12941(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12908
(function(){
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;


	var selector = "#obj12908";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12935_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12935_onTap_activeActionGroupIndex = -1;
		$("#obj12935").trigger("obj12935_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12935) {
				console.warn("de-queueing event obj12935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12935_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12942();
function playAudioFile_12942() {
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12942")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12942");
			$("#obj_audio_playSoundFile12942").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup2();
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
				window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12935_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12935_onTap_activeActionGroupIndex = -1;
		$("#obj12935").trigger("obj12935_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12935) {
				console.warn("de-queueing event obj12935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12935_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_12943();
function runjs_12943() {
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;


	$("#obj12656").css("background-color", "#90AFDB");
	
	setTimeout(function() {
		window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup3();
}
	}, 1);
}














};
obj12935_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12935_onTap_activeActionGroupIndex = -1;
		$("#obj12935").trigger("obj12935_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12935) {
				console.warn("de-queueing event obj12935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12935_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj12680 
hide_12944();
function hide_12944() {
	var selector = "#obj12680";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12944(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12935_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12935_onTap_activeActionGroupIndex = -1;
		$("#obj12935").trigger("obj12935_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12935) {
				console.warn("de-queueing event obj12935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12935_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj12708 
incrementCounter_12945();
function incrementCounter_12945() {
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;


	var oldValue = obj12708_counterValue;
	obj12708_counterValue = obj12708_counterValue + 1;
	if (! obj12708_counterCanExceedTargetValue && obj12708_counterValue > obj12708_counterTargetValue) {
		obj12708_counterValue = obj12708_counterTargetValue;
	}

	if (oldValue != obj12708_counterValue) {
		$("#obj12708").trigger('SCEventCounterValueChange');
		$("#obj12708").trigger('SCEventCounterIncrease');
		if (obj12708_counterValue == obj12708_counterTargetValue)
			$("#obj12708").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj12684 
incrementCounter_12946();
function incrementCounter_12946() {
	window.obj12935_onTap_runningActionsCount = obj12935_onTap_runningActionsCount + 1;


	var oldValue = obj12684_counterValue;
	obj12684_counterValue = obj12684_counterValue + 1;
	if (! obj12684_counterCanExceedTargetValue && obj12684_counterValue > obj12684_counterTargetValue) {
		obj12684_counterValue = obj12684_counterTargetValue;
	}

	if (oldValue != obj12684_counterValue) {
		$("#obj12684").trigger('SCEventCounterValueChange');
		$("#obj12684").trigger('SCEventCounterIncrease');
		if (obj12684_counterValue == obj12684_counterTargetValue)
			$("#obj12684").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12935_onTap_runningActionsCount = window.obj12935_onTap_runningActionsCount - 1;

if (window.obj12935_onTap_runningActionsCount < 0) {
	window.obj12935_onTap_runningActionsCount = 0;
} else if (window.obj12935_onTap_runningActionsCount == 0) {
	obj12935_onTap_actionGroup5();
} }, 1);
}











};
obj12935_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12935_onTap_activeActionGroupIndex = -1;
		$("#obj12935").trigger("obj12935_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12935) {
				console.warn("de-queueing event obj12935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12935_onTap_activeActionGroupIndex = 5;
	











































};
obj12930_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12930_onTap_activeActionGroupIndex = -1;
		$("#obj12930").trigger("obj12930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12930) {
				console.warn("de-queueing event obj12930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12930_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12932();
function playAudioFile_12932() {
	window.obj12930_onTap_runningActionsCount = obj12930_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12932")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12932");
			$("#obj_audio_playSoundFile12932").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12930_onTap_runningActionsCount = window.obj12930_onTap_runningActionsCount - 1;

if (window.obj12930_onTap_runningActionsCount < 0) {
	window.obj12930_onTap_runningActionsCount = 0;
} else if (window.obj12930_onTap_runningActionsCount == 0) {
	obj12930_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12930_onTap_runningActionsCount = window.obj12930_onTap_runningActionsCount - 1;

if (window.obj12930_onTap_runningActionsCount < 0) {
	window.obj12930_onTap_runningActionsCount = 0;
} else if (window.obj12930_onTap_runningActionsCount == 0) {
	obj12930_onTap_actionGroup1();
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
				window.obj12930_onTap_runningActionsCount = window.obj12930_onTap_runningActionsCount - 1;

if (window.obj12930_onTap_runningActionsCount < 0) {
	window.obj12930_onTap_runningActionsCount = 0;
} else if (window.obj12930_onTap_runningActionsCount == 0) {
	obj12930_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12930_onTap_runningActionsCount = window.obj12930_onTap_runningActionsCount - 1;

if (window.obj12930_onTap_runningActionsCount < 0) {
	window.obj12930_onTap_runningActionsCount = 0;
} else if (window.obj12930_onTap_runningActionsCount == 0) {
	obj12930_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12930_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12930_onTap_activeActionGroupIndex = -1;
		$("#obj12930").trigger("obj12930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12930) {
				console.warn("de-queueing event obj12930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12930_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12668 
hide_12933();
function hide_12933() {
	var selector = "#obj12668";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12930_onTap_runningActionsCount = obj12930_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12930_onTap_runningActionsCount = window.obj12930_onTap_runningActionsCount - 1;

if (window.obj12930_onTap_runningActionsCount < 0) {
	window.obj12930_onTap_runningActionsCount = 0;
} else if (window.obj12930_onTap_runningActionsCount == 0) {
	obj12930_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12933(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12930_onTap_runningActionsCount = window.obj12930_onTap_runningActionsCount - 1;

if (window.obj12930_onTap_runningActionsCount < 0) {
	window.obj12930_onTap_runningActionsCount = 0;
} else if (window.obj12930_onTap_runningActionsCount == 0) {
	obj12930_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12930_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12930_onTap_activeActionGroupIndex = -1;
		$("#obj12930").trigger("obj12930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12930) {
				console.warn("de-queueing event obj12930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12930_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12668
(function(){
	window.obj12930_onTap_runningActionsCount = obj12930_onTap_runningActionsCount + 1;


	var selector = "#obj12668";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12930_onTap_runningActionsCount = window.obj12930_onTap_runningActionsCount - 1;

if (window.obj12930_onTap_runningActionsCount < 0) {
	window.obj12930_onTap_runningActionsCount = 0;
} else if (window.obj12930_onTap_runningActionsCount == 0) {
	obj12930_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12930_onTap_runningActionsCount = window.obj12930_onTap_runningActionsCount - 1;

if (window.obj12930_onTap_runningActionsCount < 0) {
	window.obj12930_onTap_runningActionsCount = 0;
} else if (window.obj12930_onTap_runningActionsCount == 0) {
	obj12930_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12930_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12930_onTap_activeActionGroupIndex = -1;
		$("#obj12930").trigger("obj12930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12930) {
				console.warn("de-queueing event obj12930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12930_onTap_activeActionGroupIndex = 3;
	











































};
obj12925_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12925_onTap_activeActionGroupIndex = -1;
		$("#obj12925").trigger("obj12925_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12925) {
				console.warn("de-queueing event obj12925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12925_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12927();
function playAudioFile_12927() {
	window.obj12925_onTap_runningActionsCount = obj12925_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12927")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12927");
			$("#obj_audio_playSoundFile12927").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12925_onTap_runningActionsCount = window.obj12925_onTap_runningActionsCount - 1;

if (window.obj12925_onTap_runningActionsCount < 0) {
	window.obj12925_onTap_runningActionsCount = 0;
} else if (window.obj12925_onTap_runningActionsCount == 0) {
	obj12925_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12925_onTap_runningActionsCount = window.obj12925_onTap_runningActionsCount - 1;

if (window.obj12925_onTap_runningActionsCount < 0) {
	window.obj12925_onTap_runningActionsCount = 0;
} else if (window.obj12925_onTap_runningActionsCount == 0) {
	obj12925_onTap_actionGroup1();
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
				window.obj12925_onTap_runningActionsCount = window.obj12925_onTap_runningActionsCount - 1;

if (window.obj12925_onTap_runningActionsCount < 0) {
	window.obj12925_onTap_runningActionsCount = 0;
} else if (window.obj12925_onTap_runningActionsCount == 0) {
	obj12925_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12925_onTap_runningActionsCount = window.obj12925_onTap_runningActionsCount - 1;

if (window.obj12925_onTap_runningActionsCount < 0) {
	window.obj12925_onTap_runningActionsCount = 0;
} else if (window.obj12925_onTap_runningActionsCount == 0) {
	obj12925_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12925_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12925_onTap_activeActionGroupIndex = -1;
		$("#obj12925").trigger("obj12925_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12925) {
				console.warn("de-queueing event obj12925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12925_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12648 
hide_12928();
function hide_12928() {
	var selector = "#obj12648";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12925_onTap_runningActionsCount = obj12925_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12925_onTap_runningActionsCount = window.obj12925_onTap_runningActionsCount - 1;

if (window.obj12925_onTap_runningActionsCount < 0) {
	window.obj12925_onTap_runningActionsCount = 0;
} else if (window.obj12925_onTap_runningActionsCount == 0) {
	obj12925_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12928(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12925_onTap_runningActionsCount = window.obj12925_onTap_runningActionsCount - 1;

if (window.obj12925_onTap_runningActionsCount < 0) {
	window.obj12925_onTap_runningActionsCount = 0;
} else if (window.obj12925_onTap_runningActionsCount == 0) {
	obj12925_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12925_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12925_onTap_activeActionGroupIndex = -1;
		$("#obj12925").trigger("obj12925_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12925) {
				console.warn("de-queueing event obj12925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12925_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12648
(function(){
	window.obj12925_onTap_runningActionsCount = obj12925_onTap_runningActionsCount + 1;


	var selector = "#obj12648";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12925_onTap_runningActionsCount = window.obj12925_onTap_runningActionsCount - 1;

if (window.obj12925_onTap_runningActionsCount < 0) {
	window.obj12925_onTap_runningActionsCount = 0;
} else if (window.obj12925_onTap_runningActionsCount == 0) {
	obj12925_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12925_onTap_runningActionsCount = window.obj12925_onTap_runningActionsCount - 1;

if (window.obj12925_onTap_runningActionsCount < 0) {
	window.obj12925_onTap_runningActionsCount = 0;
} else if (window.obj12925_onTap_runningActionsCount == 0) {
	obj12925_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12925_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12925_onTap_activeActionGroupIndex = -1;
		$("#obj12925").trigger("obj12925_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12925) {
				console.warn("de-queueing event obj12925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12925_onTap_activeActionGroupIndex = 3;
	











































};
obj12920_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12920_onTap_activeActionGroupIndex = -1;
		$("#obj12920").trigger("obj12920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12920) {
				console.warn("de-queueing event obj12920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12920_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12922();
function playAudioFile_12922() {
	window.obj12920_onTap_runningActionsCount = obj12920_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12922")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12922");
			$("#obj_audio_playSoundFile12922").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12920_onTap_runningActionsCount = window.obj12920_onTap_runningActionsCount - 1;

if (window.obj12920_onTap_runningActionsCount < 0) {
	window.obj12920_onTap_runningActionsCount = 0;
} else if (window.obj12920_onTap_runningActionsCount == 0) {
	obj12920_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12920_onTap_runningActionsCount = window.obj12920_onTap_runningActionsCount - 1;

if (window.obj12920_onTap_runningActionsCount < 0) {
	window.obj12920_onTap_runningActionsCount = 0;
} else if (window.obj12920_onTap_runningActionsCount == 0) {
	obj12920_onTap_actionGroup1();
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
				window.obj12920_onTap_runningActionsCount = window.obj12920_onTap_runningActionsCount - 1;

if (window.obj12920_onTap_runningActionsCount < 0) {
	window.obj12920_onTap_runningActionsCount = 0;
} else if (window.obj12920_onTap_runningActionsCount == 0) {
	obj12920_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12920_onTap_runningActionsCount = window.obj12920_onTap_runningActionsCount - 1;

if (window.obj12920_onTap_runningActionsCount < 0) {
	window.obj12920_onTap_runningActionsCount = 0;
} else if (window.obj12920_onTap_runningActionsCount == 0) {
	obj12920_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12920_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12920_onTap_activeActionGroupIndex = -1;
		$("#obj12920").trigger("obj12920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12920) {
				console.warn("de-queueing event obj12920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12920_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12662 
hide_12923();
function hide_12923() {
	var selector = "#obj12662";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12920_onTap_runningActionsCount = obj12920_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12920_onTap_runningActionsCount = window.obj12920_onTap_runningActionsCount - 1;

if (window.obj12920_onTap_runningActionsCount < 0) {
	window.obj12920_onTap_runningActionsCount = 0;
} else if (window.obj12920_onTap_runningActionsCount == 0) {
	obj12920_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12923(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12920_onTap_runningActionsCount = window.obj12920_onTap_runningActionsCount - 1;

if (window.obj12920_onTap_runningActionsCount < 0) {
	window.obj12920_onTap_runningActionsCount = 0;
} else if (window.obj12920_onTap_runningActionsCount == 0) {
	obj12920_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12920_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12920_onTap_activeActionGroupIndex = -1;
		$("#obj12920").trigger("obj12920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12920) {
				console.warn("de-queueing event obj12920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12920_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12662
(function(){
	window.obj12920_onTap_runningActionsCount = obj12920_onTap_runningActionsCount + 1;


	var selector = "#obj12662";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12920_onTap_runningActionsCount = window.obj12920_onTap_runningActionsCount - 1;

if (window.obj12920_onTap_runningActionsCount < 0) {
	window.obj12920_onTap_runningActionsCount = 0;
} else if (window.obj12920_onTap_runningActionsCount == 0) {
	obj12920_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12920_onTap_runningActionsCount = window.obj12920_onTap_runningActionsCount - 1;

if (window.obj12920_onTap_runningActionsCount < 0) {
	window.obj12920_onTap_runningActionsCount = 0;
} else if (window.obj12920_onTap_runningActionsCount == 0) {
	obj12920_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12920_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12920_onTap_activeActionGroupIndex = -1;
		$("#obj12920").trigger("obj12920_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12920) {
				console.warn("de-queueing event obj12920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12920_onTap_activeActionGroupIndex = 3;
	











































};
obj12910_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12910_onTap_activeActionGroupIndex = -1;
		$("#obj12910").trigger("obj12910_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12910) {
				console.warn("de-queueing event obj12910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12910_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12910 
hide_12913();
function hide_12913() {
	var selector = "#obj12910";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12910_onTap_runningActionsCount = obj12910_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12913(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12680
(function(){
	window.obj12910_onTap_runningActionsCount = obj12910_onTap_runningActionsCount + 1;


	var selector = "#obj12680";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12910_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12910_onTap_activeActionGroupIndex = -1;
		$("#obj12910").trigger("obj12910_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12910) {
				console.warn("de-queueing event obj12910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12910_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12914();
function playAudioFile_12914() {
	window.obj12910_onTap_runningActionsCount = obj12910_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12914")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12914");
			$("#obj_audio_playSoundFile12914").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup2();
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
				window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12910_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12910_onTap_activeActionGroupIndex = -1;
		$("#obj12910").trigger("obj12910_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12910) {
				console.warn("de-queueing event obj12910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12910_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_12915();
function runjs_12915() {
	window.obj12910_onTap_runningActionsCount = obj12910_onTap_runningActionsCount + 1;


	$("#obj12642").css("background-color", "#90AFDB");
	
	setTimeout(function() {
		window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup3();
}
	}, 1);
}














};
obj12910_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12910_onTap_activeActionGroupIndex = -1;
		$("#obj12910").trigger("obj12910_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12910) {
				console.warn("de-queueing event obj12910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12910_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	selector: #obj12935
(function(){
	window.obj12910_onTap_runningActionsCount = obj12910_onTap_runningActionsCount + 1;


	var selector = "#obj12935";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12930
(function(){
	window.obj12910_onTap_runningActionsCount = obj12910_onTap_runningActionsCount + 1;


	var selector = "#obj12930";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12925
(function(){
	window.obj12910_onTap_runningActionsCount = obj12910_onTap_runningActionsCount + 1;


	var selector = "#obj12925";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12920
(function(){
	window.obj12910_onTap_runningActionsCount = obj12910_onTap_runningActionsCount + 1;


	var selector = "#obj12920";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup4();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12910_onTap_runningActionsCount = window.obj12910_onTap_runningActionsCount - 1;

if (window.obj12910_onTap_runningActionsCount < 0) {
	window.obj12910_onTap_runningActionsCount = 0;
} else if (window.obj12910_onTap_runningActionsCount == 0) {
	obj12910_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12910_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12910_onTap_activeActionGroupIndex = -1;
		$("#obj12910").trigger("obj12910_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12910) {
				console.warn("de-queueing event obj12910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12910_onTap_activeActionGroupIndex = 4;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj12363: Event Touch Down
 *
 */

$("#obj12363").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12363_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12363_onTap is still running");
	return;
}
var obj12363_onTap_runningActionsCount = 0;
var obj12363_onTap_loopCount = 0;
obj12363_onTap_actionGroup0();
});
























































/*
 *
 *   obj12373: Event Touch Down
 *
 */

$("#obj12373").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12373_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12373_onTap is still running");
	return;
}
var obj12373_onTap_runningActionsCount = 0;
var obj12373_onTap_loopCount = 0;
obj12373_onTap_actionGroup0();
});


















/*
 *
 *   obj12592: Event Touch Down
 *
 */

$("#obj12592").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12592_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12592_onTap is still running");
	return;
}
var obj12592_onTap_runningActionsCount = 0;
var obj12592_onTap_loopCount = 0;
obj12592_onTap_actionGroup0();
});


































































































































































































































































































































/*
 *
 *   obj12672: Event Touch Down
 *
 */

$("#obj12672").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12672_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12672_onTap is still running");
	return;
}
var obj12672_onTap_runningActionsCount = 0;
var obj12672_onTap_loopCount = 0;
obj12672_onTap_actionGroup0();
});


















/*
 *
 *   obj12729: Event Touch Down
 *
 */

$("#obj12729").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12729_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12729_onTap is still running");
	return;
}
var obj12729_onTap_runningActionsCount = 0;
var obj12729_onTap_loopCount = 0;
obj12729_onTap_actionGroup0();
});


















/*
 *
 *   obj12742: Event Touch Down
 *
 */

$("#obj12742").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12742_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12742_onTap is still running");
	return;
}
var obj12742_onTap_runningActionsCount = 0;
var obj12742_onTap_loopCount = 0;
obj12742_onTap_actionGroup0();
});


















/*
 *
 *   obj12747: Event Touch Down
 *
 */

$("#obj12747").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12747_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12747_onTap is still running");
	return;
}
var obj12747_onTap_runningActionsCount = 0;
var obj12747_onTap_loopCount = 0;
obj12747_onTap_actionGroup0();
});



























/*
 *
 *   obj12684: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj12684").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj12684_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12684_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj12684_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12684_SCEventCounterReachedTargetValue_loopCount = 0;
obj12684_SCEventCounterReachedTargetValue_actionGroup0();
});
























































/*
 *
 *   obj12701: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj12701").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj12701_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12701_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj12701_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12701_SCEventCounterReachedTargetValue_loopCount = 0;
obj12701_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj12698: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj12698").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj12698_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12698_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj12698_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12698_SCEventCounterReachedTargetValue_loopCount = 0;
obj12698_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj12695: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj12695").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj12695_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12695_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj12695_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12695_SCEventCounterReachedTargetValue_loopCount = 0;
obj12695_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj12692: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj12692").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj12692_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12692_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj12692_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12692_SCEventCounterReachedTargetValue_loopCount = 0;
obj12692_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj12708: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj12708").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj12708_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12708_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj12708_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12708_SCEventCounterReachedTargetValue_loopCount = 0;
obj12708_SCEventCounterReachedTargetValue_actionGroup0();
});









/*
 *
 *   obj12715: Event Touch Down
 *
 */

$("#obj12715").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12715_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12715_onTap is still running");
	return;
}
var obj12715_onTap_runningActionsCount = 0;
var obj12715_onTap_loopCount = 0;
obj12715_onTap_actionGroup0();
});





































/*
 *
 *   obj12779: Event Touch Down
 *
 */

$("#obj12779").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12779_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12779_onTap is still running");
	return;
}
var obj12779_onTap_runningActionsCount = 0;
var obj12779_onTap_loopCount = 0;
obj12779_onTap_actionGroup0();
});


















/*
 *
 *   obj12774: Event Touch Down
 *
 */

$("#obj12774").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12774_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12774_onTap is still running");
	return;
}
var obj12774_onTap_runningActionsCount = 0;
var obj12774_onTap_loopCount = 0;
obj12774_onTap_actionGroup0();
});


















/*
 *
 *   obj12769: Event Touch Down
 *
 */

$("#obj12769").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12769_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12769_onTap is still running");
	return;
}
var obj12769_onTap_runningActionsCount = 0;
var obj12769_onTap_loopCount = 0;
obj12769_onTap_actionGroup0();
});


















/*
 *
 *   obj12764: Event Touch Down
 *
 */

$("#obj12764").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12764_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12764_onTap is still running");
	return;
}
var obj12764_onTap_runningActionsCount = 0;
var obj12764_onTap_loopCount = 0;
obj12764_onTap_actionGroup0();
});


















/*
 *
 *   obj12754: Event Touch Down
 *
 */

$("#obj12754").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12754_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12754_onTap is still running");
	return;
}
var obj12754_onTap_runningActionsCount = 0;
var obj12754_onTap_loopCount = 0;
obj12754_onTap_actionGroup0();
});





































/*
 *
 *   obj12896: Event Touch Down
 *
 */

$("#obj12896").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12896_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12896_onTap is still running");
	return;
}
var obj12896_onTap_runningActionsCount = 0;
var obj12896_onTap_loopCount = 0;
obj12896_onTap_actionGroup0();
});


















/*
 *
 *   obj12891: Event Touch Down
 *
 */

$("#obj12891").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12891_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12891_onTap is still running");
	return;
}
var obj12891_onTap_runningActionsCount = 0;
var obj12891_onTap_loopCount = 0;
obj12891_onTap_actionGroup0();
});


















/*
 *
 *   obj12886: Event Touch Down
 *
 */

$("#obj12886").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12886_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12886_onTap is still running");
	return;
}
var obj12886_onTap_runningActionsCount = 0;
var obj12886_onTap_loopCount = 0;
obj12886_onTap_actionGroup0();
});


















/*
 *
 *   obj12881: Event Touch Down
 *
 */

$("#obj12881").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12881_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12881_onTap is still running");
	return;
}
var obj12881_onTap_runningActionsCount = 0;
var obj12881_onTap_loopCount = 0;
obj12881_onTap_actionGroup0();
});


















/*
 *
 *   obj12871: Event Touch Down
 *
 */

$("#obj12871").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12871_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12871_onTap is still running");
	return;
}
var obj12871_onTap_runningActionsCount = 0;
var obj12871_onTap_loopCount = 0;
obj12871_onTap_actionGroup0();
});
























































/*
 *
 *   obj12935: Event Touch Down
 *
 */

$("#obj12935").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12935_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12935_onTap is still running");
	return;
}
var obj12935_onTap_runningActionsCount = 0;
var obj12935_onTap_loopCount = 0;
obj12935_onTap_actionGroup0();
});


















/*
 *
 *   obj12930: Event Touch Down
 *
 */

$("#obj12930").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12930_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12930_onTap is still running");
	return;
}
var obj12930_onTap_runningActionsCount = 0;
var obj12930_onTap_loopCount = 0;
obj12930_onTap_actionGroup0();
});


















/*
 *
 *   obj12925: Event Touch Down
 *
 */

$("#obj12925").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12925_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12925_onTap is still running");
	return;
}
var obj12925_onTap_runningActionsCount = 0;
var obj12925_onTap_loopCount = 0;
obj12925_onTap_actionGroup0();
});


















/*
 *
 *   obj12920: Event Touch Down
 *
 */

$("#obj12920").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12920_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12920_onTap is still running");
	return;
}
var obj12920_onTap_runningActionsCount = 0;
var obj12920_onTap_loopCount = 0;
obj12920_onTap_actionGroup0();
});


















/*
 *
 *   obj12910: Event Touch Down
 *
 */

$("#obj12910").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12910_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12910_onTap is still running");
	return;
}
var obj12910_onTap_runningActionsCount = 0;
var obj12910_onTap_loopCount = 0;
obj12910_onTap_actionGroup0();
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
	
$("#obj12354").trigger('SCEventShow');
$("#obj12359").trigger('SCEventShow');
$("#obj12361").trigger('SCEventShow');
$("#obj12363").trigger('SCEventShow');
$("#obj12369").trigger('SCEventShow');
$("#obj12371").trigger('SCEventShow');
$("#obj12373").trigger('SCEventShow');
$("#obj12622").trigger('SCEventShow');
$("#obj12624").trigger('SCEventShow');
$("#obj12637").trigger('SCEventShow');
$("#obj12635").trigger('SCEventShow');
$("#obj12646").trigger('SCEventShow');
$("#obj12644").trigger('SCEventShow');
$("#obj12642").trigger('SCEventShow');
$("#obj12640").trigger('SCEventShow');
$("#obj12648").trigger('SCEventShow');
$("#obj12650").trigger('SCEventShow');
$("#obj12656").trigger('SCEventShow');
$("#obj12654").trigger('SCEventShow');
$("#obj12668").trigger('SCEventShow');
$("#obj12666").trigger('SCEventShow');
$("#obj12662").trigger('SCEventShow');
$("#obj12660").trigger('SCEventShow');
$("#obj12706").trigger('SCEventShow');
$("#obj12704").trigger('SCEventShow');
$("#obj12715").trigger('SCEventShow');
$("#obj12754").trigger('SCEventShow');
$("#obj12871").trigger('SCEventShow');
$("#obj12910").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});