pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 3593;
pubcoder.page.title = pubcoder.page.title || "46";
pubcoder.page.number = pubcoder.page.number || 46;
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
var obj3614_onTap_activeActionGroupIndex = -1;
var obj3614_onTap_runningActionsCount = 0;
var obj3614_onTap_loopCount = 0;
var obj3627_onTap_activeActionGroupIndex = -1;
var obj3627_onTap_runningActionsCount = 0;
var obj3627_onTap_loopCount = 0;
var obj3643_onTap_activeActionGroupIndex = -1;
var obj3643_onTap_runningActionsCount = 0;
var obj3643_onTap_loopCount = 0;
var obj3657_onTap_activeActionGroupIndex = -1;
var obj3657_onTap_runningActionsCount = 0;
var obj3657_onTap_loopCount = 0;
var obj3671_onTap_activeActionGroupIndex = -1;
var obj3671_onTap_runningActionsCount = 0;
var obj3671_onTap_loopCount = 0;
var obj3685_onTap_activeActionGroupIndex = -1;
var obj3685_onTap_runningActionsCount = 0;
var obj3685_onTap_loopCount = 0;
var obj3701_onTap_activeActionGroupIndex = -1;
var obj3701_onTap_runningActionsCount = 0;
var obj3701_onTap_loopCount = 0;
var obj3719_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj3719_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3719_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3722_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj3722_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3722_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3725_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj3725_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3725_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3728_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj3728_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3728_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3731_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj3731_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3731_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3738_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj3738_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3738_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3750_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3777_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3782_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3833_onTap_activeActionGroupIndex = -1;
var obj3833_onTap_runningActionsCount = 0;
var obj3833_onTap_loopCount = 0;
var obj3848_onTap_activeActionGroupIndex = -1;
var obj3848_onTap_runningActionsCount = 0;
var obj3848_onTap_loopCount = 0;
var obj3861_onTap_activeActionGroupIndex = -1;
var obj3861_onTap_runningActionsCount = 0;
var obj3861_onTap_loopCount = 0;
var obj3874_onTap_activeActionGroupIndex = -1;
var obj3874_onTap_runningActionsCount = 0;
var obj3874_onTap_loopCount = 0;
var obj3889_onTap_activeActionGroupIndex = -1;
var obj3889_onTap_runningActionsCount = 0;
var obj3889_onTap_loopCount = 0;
var obj3902_onTap_activeActionGroupIndex = -1;
var obj3902_onTap_runningActionsCount = 0;
var obj3902_onTap_loopCount = 0;
var obj6685_onTap_activeActionGroupIndex = -1;
var obj6685_onTap_runningActionsCount = 0;
var obj6685_onTap_loopCount = 0;
var obj7440_onTap_activeActionGroupIndex = -1;
var obj7440_onTap_runningActionsCount = 0;
var obj7440_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj3719_counterValue = 0;
var obj3719_counterTargetValue = 2;
var obj3719_counterCanExceedTargetValue = false;
var obj3722_counterValue = 0;
var obj3722_counterTargetValue = 4;
var obj3722_counterCanExceedTargetValue = false;
var obj3725_counterValue = 0;
var obj3725_counterTargetValue = 3;
var obj3725_counterCanExceedTargetValue = false;
var obj3728_counterValue = 0;
var obj3728_counterTargetValue = 1;
var obj3728_counterCanExceedTargetValue = false;
var obj3731_counterValue = 0;
var obj3731_counterTargetValue = 1;
var obj3731_counterCanExceedTargetValue = false;
var obj3738_counterValue = 0;
var obj3738_counterTargetValue = 2;
var obj3738_counterCanExceedTargetValue = false;
var obj3750_counterValue = 0;
var obj3750_counterTargetValue = 2;
var obj3750_counterCanExceedTargetValue = false;
var obj3777_counterValue = 0;
var obj3777_counterTargetValue = 4;
var obj3777_counterCanExceedTargetValue = false;
var obj3782_counterValue = 0;
var obj3782_counterTargetValue = 4;
var obj3782_counterCanExceedTargetValue = false;

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
		
obj3614_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3614_onTap_activeActionGroupIndex = -1;
		$("#obj3614").trigger("obj3614_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3614) {
				console.warn("de-queueing event obj3614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3614_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6685
(function(){
	window.obj3614_onTap_runningActionsCount = obj3614_onTap_runningActionsCount + 1;


	var selector = "#obj6685";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3614_onTap_runningActionsCount = window.obj3614_onTap_runningActionsCount - 1;

if (window.obj3614_onTap_runningActionsCount < 0) {
	window.obj3614_onTap_runningActionsCount = 0;
} else if (window.obj3614_onTap_runningActionsCount == 0) {
	obj3614_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3614_onTap_runningActionsCount = window.obj3614_onTap_runningActionsCount - 1;

if (window.obj3614_onTap_runningActionsCount < 0) {
	window.obj3614_onTap_runningActionsCount = 0;
} else if (window.obj3614_onTap_runningActionsCount == 0) {
	obj3614_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3614_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3614_onTap_activeActionGroupIndex = -1;
		$("#obj3614").trigger("obj3614_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3614) {
				console.warn("de-queueing event obj3614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3614_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj3938
(function(){
	window.obj3614_onTap_runningActionsCount = obj3614_onTap_runningActionsCount + 1;


	var selector = "#obj3938";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3614_onTap_runningActionsCount = window.obj3614_onTap_runningActionsCount - 1;

if (window.obj3614_onTap_runningActionsCount < 0) {
	window.obj3614_onTap_runningActionsCount = 0;
} else if (window.obj3614_onTap_runningActionsCount == 0) {
	obj3614_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3614_onTap_runningActionsCount = window.obj3614_onTap_runningActionsCount - 1;

if (window.obj3614_onTap_runningActionsCount < 0) {
	window.obj3614_onTap_runningActionsCount = 0;
} else if (window.obj3614_onTap_runningActionsCount == 0) {
	obj3614_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3940
(function(){
	window.obj3614_onTap_runningActionsCount = obj3614_onTap_runningActionsCount + 1;


	var selector = "#obj3940";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3614_onTap_runningActionsCount = window.obj3614_onTap_runningActionsCount - 1;

if (window.obj3614_onTap_runningActionsCount < 0) {
	window.obj3614_onTap_runningActionsCount = 0;
} else if (window.obj3614_onTap_runningActionsCount == 0) {
	obj3614_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3614_onTap_runningActionsCount = window.obj3614_onTap_runningActionsCount - 1;

if (window.obj3614_onTap_runningActionsCount < 0) {
	window.obj3614_onTap_runningActionsCount = 0;
} else if (window.obj3614_onTap_runningActionsCount == 0) {
	obj3614_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3614_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3614_onTap_activeActionGroupIndex = -1;
		$("#obj3614").trigger("obj3614_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3614) {
				console.warn("de-queueing event obj3614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3614_onTap_activeActionGroupIndex = 2;
	











































};
obj3627_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3627 
hide_3629();
function hide_3629() {
	var selector = "#obj3627";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3629(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6852();
function incrementCounter_6852() {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup1();
} }, 1);
}











};
obj3627_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3631();
function playAudioFile_3631() {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3631")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3631");
			$("#obj_audio_playSoundFile3631").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup2();
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
				window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3627_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3632();
function runjs_3632() {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	$("#obj3598").css("border-color", "#2DB657"); $("#obj3598").css("border-width", "2px"); $("#obj3598").css("border-style", "solid"); $("#obj3598").css("border-radius", "15px"); $("#obj3598").css("-webkit-border-radius", "15px"); $("#obj3598").css("-moz-border-radius", "15px"); $("#obj3598_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup3();
}
	}, 1);
}














};
obj3627_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3598 
(function () {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3598").css('filter') == 'none')
$("#obj3598").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3598").animate({ dropShadow: 'drop-shadow(4px 4px 2px #2DB657)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3627_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3916
(function(){
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	var selector = "#obj3916";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3627_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 5;
	

































//	action: set counter value
//	target: obj3731 
setCounterValue_3635();
function setCounterValue_3635() {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	var oldValue = obj3731_counterValue;
	obj3731_counterValue = 1;
	if (obj3731_counterValue < 0) {
		obj3731_counterValue = 0;
	} else if (! obj3731_counterCanExceedTargetValue && obj3731_counterValue > obj3731_counterTargetValue) {
		obj3731_counterValue = obj3731_counterTargetValue;
	}

	if (oldValue != obj3731_counterValue) {
		$("#obj3731").trigger('SCEventCounterValueChange');
		if (obj3731_counterValue == obj3731_counterTargetValue)
			$("#obj3731").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup6();
} }, 1);
}









};
obj3627_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 6;
	
















//	action: wait
wait_3636();
function wait_3636() {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup7();
}
	}, 1000);
}


























};
obj3627_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 7;
	





























//	action: Run JavaScript
runjs_3637();
function runjs_3637() {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	$("#obj3598").css("border-color", "#4B4B4B"); $("#obj3598").css("border-width", "0px"); $("#obj3598").css("border-style", "solid"); $("#obj3598").css("border-radius", "15px"); $("#obj3598").css("-webkit-border-radius", "15px"); $("#obj3598").css("-moz-border-radius", "15px"); $("#obj3598_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup8();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3598 
(function () {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3598").css('filter') == 'none')
$("#obj3598").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3598").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup8();
}
		}, 1);
	});
})();

};
obj3627_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj3750 
incrementCounter_3640();
function incrementCounter_3640() {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	var oldValue = obj3750_counterValue;
	obj3750_counterValue = obj3750_counterValue + 1;
	if (! obj3750_counterCanExceedTargetValue && obj3750_counterValue > obj3750_counterTargetValue) {
		obj3750_counterValue = obj3750_counterTargetValue;
	}

	if (oldValue != obj3750_counterValue) {
		$("#obj3750").trigger('SCEventCounterValueChange');
		$("#obj3750").trigger('SCEventCounterIncrease');
		if (obj3750_counterValue == obj3750_counterTargetValue)
			$("#obj3750").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup9();
} }, 1);
}











};
obj3627_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 9;
	































//	action: increment counter
//	target: obj3777 
incrementCounter_3641();
function incrementCounter_3641() {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	var oldValue = obj3777_counterValue;
	obj3777_counterValue = obj3777_counterValue + 1;
	if (! obj3777_counterCanExceedTargetValue && obj3777_counterValue > obj3777_counterTargetValue) {
		obj3777_counterValue = obj3777_counterTargetValue;
	}

	if (oldValue != obj3777_counterValue) {
		$("#obj3777").trigger('SCEventCounterValueChange');
		$("#obj3777").trigger('SCEventCounterIncrease');
		if (obj3777_counterValue == obj3777_counterTargetValue)
			$("#obj3777").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup10();
} }, 1);
}











};
obj3627_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 10;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3642();
function incrementCounter_3642() {
	window.obj3627_onTap_runningActionsCount = obj3627_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3627_onTap_runningActionsCount = window.obj3627_onTap_runningActionsCount - 1;

if (window.obj3627_onTap_runningActionsCount < 0) {
	window.obj3627_onTap_runningActionsCount = 0;
} else if (window.obj3627_onTap_runningActionsCount == 0) {
	obj3627_onTap_actionGroup11();
} }, 1);
}











};
obj3627_onTap_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3627_onTap_activeActionGroupIndex = -1;
		$("#obj3627").trigger("obj3627_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3627) {
				console.warn("de-queueing event obj3627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3627_onTap_activeActionGroupIndex = 11;
	











































};
obj3643_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3643 
hide_3645();
function hide_3645() {
	var selector = "#obj3643";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3645(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6853();
function incrementCounter_6853() {
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup1();
} }, 1);
}











};
obj3643_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3647();
function playAudioFile_3647() {
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3647")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3647");
			$("#obj_audio_playSoundFile3647").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup2();
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
				window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3643_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3648();
function runjs_3648() {
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;


	$("#obj3596").css("border-color", "#F8A03C"); $("#obj3596").css("border-width", "2px"); $("#obj3596").css("border-style", "solid"); $("#obj3596").css("border-radius", "15px"); $("#obj3596").css("-webkit-border-radius", "15px"); $("#obj3596").css("-moz-border-radius", "15px"); $("#obj3596_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup3();
}
	}, 1);
}














};
obj3643_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3596 
(function () {
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3596").css('filter') == 'none')
$("#obj3596").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3596").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3643_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3920
(function(){
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;


	var selector = "#obj3920";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3643_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 5;
	
















//	action: wait
wait_3651();
function wait_3651() {
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup6();
}
	}, 1000);
}


























};
obj3643_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3652();
function runjs_3652() {
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;


	$("#obj3596").css("border-color", "#4B4B4B"); $("#obj3596").css("border-width", "0px"); $("#obj3596").css("border-style", "solid"); $("#obj3596").css("border-radius", "15px"); $("#obj3596").css("-webkit-border-radius", "15px"); $("#obj3596").css("-moz-border-radius", "15px"); $("#obj3596_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup7();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3596 
(function () {
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3596").css('filter') == 'none')
$("#obj3596").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3596").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup7();
}
		}, 1);
	});
})();

};
obj3643_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj3750 
incrementCounter_3655();
function incrementCounter_3655() {
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;


	var oldValue = obj3750_counterValue;
	obj3750_counterValue = obj3750_counterValue + 1;
	if (! obj3750_counterCanExceedTargetValue && obj3750_counterValue > obj3750_counterTargetValue) {
		obj3750_counterValue = obj3750_counterTargetValue;
	}

	if (oldValue != obj3750_counterValue) {
		$("#obj3750").trigger('SCEventCounterValueChange');
		$("#obj3750").trigger('SCEventCounterIncrease');
		if (obj3750_counterValue == obj3750_counterTargetValue)
			$("#obj3750").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup8();
} }, 1);
}











};
obj3643_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3656();
function incrementCounter_3656() {
	window.obj3643_onTap_runningActionsCount = obj3643_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3643_onTap_runningActionsCount = window.obj3643_onTap_runningActionsCount - 1;

if (window.obj3643_onTap_runningActionsCount < 0) {
	window.obj3643_onTap_runningActionsCount = 0;
} else if (window.obj3643_onTap_runningActionsCount == 0) {
	obj3643_onTap_actionGroup9();
} }, 1);
}











};
obj3643_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3643_onTap_activeActionGroupIndex = -1;
		$("#obj3643").trigger("obj3643_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3643) {
				console.warn("de-queueing event obj3643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3643_onTap_activeActionGroupIndex = 9;
	











































};
obj3657_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3657 
hide_3659();
function hide_3659() {
	var selector = "#obj3657";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3659(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6854();
function incrementCounter_6854() {
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup1();
} }, 1);
}











};
obj3657_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3661();
function playAudioFile_3661() {
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3661")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3661");
			$("#obj_audio_playSoundFile3661").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup2();
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
				window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3657_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3662();
function runjs_3662() {
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;


	$("#obj3594").css("border-color", "#F8A03C"); $("#obj3594").css("border-width", "2px"); $("#obj3594").css("border-style", "solid"); $("#obj3594").css("border-radius", "15px"); $("#obj3594").css("-webkit-border-radius", "15px"); $("#obj3594").css("-moz-border-radius", "15px"); $("#obj3594_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup3();
}
	}, 1);
}














};
obj3657_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3594 
(function () {
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3594").css('filter') == 'none')
$("#obj3594").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3594").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3657_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3922
(function(){
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;


	var selector = "#obj3922";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3657_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 5;
	
















//	action: wait
wait_3665();
function wait_3665() {
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup6();
}
	}, 1000);
}


























};
obj3657_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3666();
function runjs_3666() {
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;


	$("#obj3594").css("border-color", "#4B4B4B"); $("#obj3594").css("border-width", "0px"); $("#obj3594").css("border-style", "solid"); $("#obj3594").css("border-radius", "15px"); $("#obj3594").css("-webkit-border-radius", "15px"); $("#obj3594").css("-moz-border-radius", "15px"); $("#obj3594_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup7();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3594 
(function () {
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3594").css('filter') == 'none')
$("#obj3594").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3594").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup7();
}
		}, 1);
	});
})();

};
obj3657_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj3750 
incrementCounter_3669();
function incrementCounter_3669() {
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;


	var oldValue = obj3750_counterValue;
	obj3750_counterValue = obj3750_counterValue + 1;
	if (! obj3750_counterCanExceedTargetValue && obj3750_counterValue > obj3750_counterTargetValue) {
		obj3750_counterValue = obj3750_counterTargetValue;
	}

	if (oldValue != obj3750_counterValue) {
		$("#obj3750").trigger('SCEventCounterValueChange');
		$("#obj3750").trigger('SCEventCounterIncrease');
		if (obj3750_counterValue == obj3750_counterTargetValue)
			$("#obj3750").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup8();
} }, 1);
}











};
obj3657_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3670();
function incrementCounter_3670() {
	window.obj3657_onTap_runningActionsCount = obj3657_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3657_onTap_runningActionsCount = window.obj3657_onTap_runningActionsCount - 1;

if (window.obj3657_onTap_runningActionsCount < 0) {
	window.obj3657_onTap_runningActionsCount = 0;
} else if (window.obj3657_onTap_runningActionsCount == 0) {
	obj3657_onTap_actionGroup9();
} }, 1);
}











};
obj3657_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3657_onTap_activeActionGroupIndex = -1;
		$("#obj3657").trigger("obj3657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3657) {
				console.warn("de-queueing event obj3657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3657_onTap_activeActionGroupIndex = 9;
	











































};
obj3671_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3671 
hide_3673();
function hide_3673() {
	var selector = "#obj3671";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3673(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6855();
function incrementCounter_6855() {
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup1();
} }, 1);
}











};
obj3671_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3675();
function playAudioFile_3675() {
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3675")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3675");
			$("#obj_audio_playSoundFile3675").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup2();
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
				window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3671_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3676();
function runjs_3676() {
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;


	$("#obj3602").css("border-color", "#F8A03C"); $("#obj3602").css("border-width", "2px"); $("#obj3602").css("border-style", "solid"); $("#obj3602").css("border-radius", "15px"); $("#obj3602").css("-webkit-border-radius", "15px"); $("#obj3602").css("-moz-border-radius", "15px"); $("#obj3602_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup3();
}
	}, 1);
}














};
obj3671_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3602 
(function () {
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3602").css('filter') == 'none')
$("#obj3602").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3602").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3671_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3924
(function(){
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;


	var selector = "#obj3924";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3671_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 5;
	
















//	action: wait
wait_3679();
function wait_3679() {
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup6();
}
	}, 1000);
}


























};
obj3671_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3680();
function runjs_3680() {
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;


	$("#obj3602").css("border-color", "#4B4B4B"); $("#obj3602").css("border-width", "0px"); $("#obj3602").css("border-style", "solid"); $("#obj3602").css("border-radius", "15px"); $("#obj3602").css("-webkit-border-radius", "15px"); $("#obj3602").css("-moz-border-radius", "15px"); $("#obj3602_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup7();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3602 
(function () {
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3602").css('filter') == 'none')
$("#obj3602").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3602").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup7();
}
		}, 1);
	});
})();

};
obj3671_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj3750 
incrementCounter_3683();
function incrementCounter_3683() {
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;


	var oldValue = obj3750_counterValue;
	obj3750_counterValue = obj3750_counterValue + 1;
	if (! obj3750_counterCanExceedTargetValue && obj3750_counterValue > obj3750_counterTargetValue) {
		obj3750_counterValue = obj3750_counterTargetValue;
	}

	if (oldValue != obj3750_counterValue) {
		$("#obj3750").trigger('SCEventCounterValueChange');
		$("#obj3750").trigger('SCEventCounterIncrease');
		if (obj3750_counterValue == obj3750_counterTargetValue)
			$("#obj3750").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup8();
} }, 1);
}











};
obj3671_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3684();
function incrementCounter_3684() {
	window.obj3671_onTap_runningActionsCount = obj3671_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3671_onTap_runningActionsCount = window.obj3671_onTap_runningActionsCount - 1;

if (window.obj3671_onTap_runningActionsCount < 0) {
	window.obj3671_onTap_runningActionsCount = 0;
} else if (window.obj3671_onTap_runningActionsCount == 0) {
	obj3671_onTap_actionGroup9();
} }, 1);
}











};
obj3671_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3671_onTap_activeActionGroupIndex = -1;
		$("#obj3671").trigger("obj3671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3671) {
				console.warn("de-queueing event obj3671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3671_onTap_activeActionGroupIndex = 9;
	











































};
obj3685_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3685 
hide_3687();
function hide_3687() {
	var selector = "#obj3685";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3687(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6856();
function incrementCounter_6856() {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup1();
} }, 1);
}











};
obj3685_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3689();
function playAudioFile_3689() {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3689")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3689");
			$("#obj_audio_playSoundFile3689").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup2();
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
				window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3685_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3690();
function runjs_3690() {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	$("#obj3604").css("border-color", "#2DB657"); $("#obj3604").css("border-width", "2px"); $("#obj3604").css("border-style", "solid"); $("#obj3604").css("border-radius", "15px"); $("#obj3604").css("-webkit-border-radius", "15px"); $("#obj3604").css("-moz-border-radius", "15px"); $("#obj3604_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup3();
}
	}, 1);
}














};
obj3685_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3604 
(function () {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3604").css('filter') == 'none')
$("#obj3604").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3604").animate({ dropShadow: 'drop-shadow(4px 4px 2px #2DB657)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3685_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3918
(function(){
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	var selector = "#obj3918";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3685_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 5;
	

































//	action: set counter value
//	target: obj3731 
setCounterValue_3693();
function setCounterValue_3693() {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	var oldValue = obj3731_counterValue;
	obj3731_counterValue = 1;
	if (obj3731_counterValue < 0) {
		obj3731_counterValue = 0;
	} else if (! obj3731_counterCanExceedTargetValue && obj3731_counterValue > obj3731_counterTargetValue) {
		obj3731_counterValue = obj3731_counterTargetValue;
	}

	if (oldValue != obj3731_counterValue) {
		$("#obj3731").trigger('SCEventCounterValueChange');
		if (obj3731_counterValue == obj3731_counterTargetValue)
			$("#obj3731").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup6();
} }, 1);
}









};
obj3685_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3694();
function runjs_3694() {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	$("#obj3604").css("border-color", "#00BAFF"); $("#obj3604").css("border-width", "0px"); $("#obj3604").css("border-style", "solid"); $("#obj3604").css("border-radius", "15px"); $("#obj3604").css("-webkit-border-radius", "15px"); $("#obj3604").css("-moz-border-radius", "15px"); $("#obj3604_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup7();
}
	}, 1);
}














};
obj3685_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 7;
	









































//	action: runJqueryAnimation
//	target: obj3604 
(function () {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3604").css('filter') == 'none')
$("#obj3604").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3604").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup8();
}
		}, 1);
	});
})();

};
obj3685_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 8;
	
















//	action: wait
wait_3696();
function wait_3696() {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup9();
}
	}, 1000);
}


























};
obj3685_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 9;
	































//	action: increment counter
//	target: obj3750 
incrementCounter_3698();
function incrementCounter_3698() {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	var oldValue = obj3750_counterValue;
	obj3750_counterValue = obj3750_counterValue + 1;
	if (! obj3750_counterCanExceedTargetValue && obj3750_counterValue > obj3750_counterTargetValue) {
		obj3750_counterValue = obj3750_counterTargetValue;
	}

	if (oldValue != obj3750_counterValue) {
		$("#obj3750").trigger('SCEventCounterValueChange');
		$("#obj3750").trigger('SCEventCounterIncrease');
		if (obj3750_counterValue == obj3750_counterTargetValue)
			$("#obj3750").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup10();
} }, 1);
}











};
obj3685_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 10;
	































//	action: increment counter
//	target: obj3777 
incrementCounter_3699();
function incrementCounter_3699() {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	var oldValue = obj3777_counterValue;
	obj3777_counterValue = obj3777_counterValue + 1;
	if (! obj3777_counterCanExceedTargetValue && obj3777_counterValue > obj3777_counterTargetValue) {
		obj3777_counterValue = obj3777_counterTargetValue;
	}

	if (oldValue != obj3777_counterValue) {
		$("#obj3777").trigger('SCEventCounterValueChange');
		$("#obj3777").trigger('SCEventCounterIncrease');
		if (obj3777_counterValue == obj3777_counterTargetValue)
			$("#obj3777").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup11();
} }, 1);
}











};
obj3685_onTap_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 11;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3700();
function incrementCounter_3700() {
	window.obj3685_onTap_runningActionsCount = obj3685_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3685_onTap_runningActionsCount = window.obj3685_onTap_runningActionsCount - 1;

if (window.obj3685_onTap_runningActionsCount < 0) {
	window.obj3685_onTap_runningActionsCount = 0;
} else if (window.obj3685_onTap_runningActionsCount == 0) {
	obj3685_onTap_actionGroup12();
} }, 1);
}











};
obj3685_onTap_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3685_onTap_activeActionGroupIndex = -1;
		$("#obj3685").trigger("obj3685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3685) {
				console.warn("de-queueing event obj3685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3685_onTap_activeActionGroupIndex = 12;
	











































};
obj3701_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3701 
hide_3703();
function hide_3703() {
	var selector = "#obj3701";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3703(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6857();
function incrementCounter_6857() {
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup1();
} }, 1);
}











};
obj3701_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3705();
function playAudioFile_3705() {
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3705")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3705");
			$("#obj_audio_playSoundFile3705").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup2();
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
				window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3701_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3706();
function runjs_3706() {
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;


	$("#obj3600").css("border-color", "#F8A03C"); $("#obj3600").css("border-width", "2px"); $("#obj3600").css("border-style", "solid"); $("#obj3600").css("border-radius", "15px"); $("#obj3600").css("-webkit-border-radius", "15px"); $("#obj3600").css("-moz-border-radius", "15px"); $("#obj3600_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup3();
}
	}, 1);
}














};
obj3701_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3600 
(function () {
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3600").css('filter') == 'none')
$("#obj3600").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3600").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3701_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3926
(function(){
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;


	var selector = "#obj3926";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3701_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 5;
	
















//	action: wait
wait_3709();
function wait_3709() {
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup6();
}
	}, 1000);
}


























};
obj3701_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3710();
function runjs_3710() {
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;


	$("#obj3600").css("border-color", "#4B4B4B"); $("#obj3600").css("border-width", "0px"); $("#obj3600").css("border-style", "solid"); $("#obj3600").css("border-radius", "15px"); $("#obj3600").css("-webkit-border-radius", "15px"); $("#obj3600").css("-moz-border-radius", "15px"); $("#obj3600_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup7();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3600 
(function () {
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3600").css('filter') == 'none')
$("#obj3600").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3600").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup7();
}
		}, 1);
	});
})();

};
obj3701_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj3750 
incrementCounter_3713();
function incrementCounter_3713() {
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;


	var oldValue = obj3750_counterValue;
	obj3750_counterValue = obj3750_counterValue + 1;
	if (! obj3750_counterCanExceedTargetValue && obj3750_counterValue > obj3750_counterTargetValue) {
		obj3750_counterValue = obj3750_counterTargetValue;
	}

	if (oldValue != obj3750_counterValue) {
		$("#obj3750").trigger('SCEventCounterValueChange');
		$("#obj3750").trigger('SCEventCounterIncrease');
		if (obj3750_counterValue == obj3750_counterTargetValue)
			$("#obj3750").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup8();
} }, 1);
}











};
obj3701_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3714();
function incrementCounter_3714() {
	window.obj3701_onTap_runningActionsCount = obj3701_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3701_onTap_runningActionsCount = window.obj3701_onTap_runningActionsCount - 1;

if (window.obj3701_onTap_runningActionsCount < 0) {
	window.obj3701_onTap_runningActionsCount = 0;
} else if (window.obj3701_onTap_runningActionsCount == 0) {
	obj3701_onTap_actionGroup9();
} }, 1);
}











};
obj3701_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3701_onTap_activeActionGroupIndex = -1;
		$("#obj3701").trigger("obj3701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3701) {
				console.warn("de-queueing event obj3701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3701_onTap_activeActionGroupIndex = 9;
	











































};
obj3719_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3719_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3719").trigger("obj3719_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3719) {
				console.warn("de-queueing event obj3719." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3719").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3719_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_3721();
function switchText_3721() {
	window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount = obj3719_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/4</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3717_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3717_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3717").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3717_content");
			setTimeout(function () {
				window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3719_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3717 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3719_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3719_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj3719_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3719_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3719").trigger("obj3719_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3719) {
				console.warn("de-queueing event obj3719." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3719").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3719_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj3722_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3722_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3722").trigger("obj3722_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3722) {
				console.warn("de-queueing event obj3722." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3722").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3722_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_3724();
function switchText_3724() {
	window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount = obj3722_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>4/4</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3717_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3717_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3717").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3717_content");
			setTimeout(function () {
				window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3722_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3717 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3722_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3722_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj3722_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3722_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3722").trigger("obj3722_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3722) {
				console.warn("de-queueing event obj3722." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3722").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3722_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj3725_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3725_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3725").trigger("obj3725_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3725) {
				console.warn("de-queueing event obj3725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3725_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_3727();
function switchText_3727() {
	window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount = obj3725_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/4</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3717_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3717_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3717").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3717_content");
			setTimeout(function () {
				window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3725_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3717 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3725_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3725_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj3725_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3725_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3725").trigger("obj3725_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3725) {
				console.warn("de-queueing event obj3725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3725_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj3728_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3728_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3728").trigger("obj3728_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3728) {
				console.warn("de-queueing event obj3728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3728_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_3730();
function switchText_3730() {
	window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount = obj3728_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/4</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3717_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3717_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3717").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3717_content");
			setTimeout(function () {
				window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3728_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3717 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3728_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3728_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj3728_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3728_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3728").trigger("obj3728_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3728) {
				console.warn("de-queueing event obj3728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3728_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj3731_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3731_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3731").trigger("obj3731_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3731) {
				console.warn("de-queueing event obj3731." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3731").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3731_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj3728 
incrementCounter_3733();
function incrementCounter_3733() {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = obj3731_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj3728_counterValue;
	obj3728_counterValue = obj3728_counterValue + 1;
	if (! obj3728_counterCanExceedTargetValue && obj3728_counterValue > obj3728_counterTargetValue) {
		obj3728_counterValue = obj3728_counterTargetValue;
	}

	if (oldValue != obj3728_counterValue) {
		$("#obj3728").trigger('SCEventCounterValueChange');
		$("#obj3728").trigger('SCEventCounterIncrease');
		if (obj3728_counterValue == obj3728_counterTargetValue)
			$("#obj3728").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3731_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj3722 
incrementCounter_3734();
function incrementCounter_3734() {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = obj3731_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj3722_counterValue;
	obj3722_counterValue = obj3722_counterValue + 1;
	if (! obj3722_counterCanExceedTargetValue && obj3722_counterValue > obj3722_counterTargetValue) {
		obj3722_counterValue = obj3722_counterTargetValue;
	}

	if (oldValue != obj3722_counterValue) {
		$("#obj3722").trigger('SCEventCounterValueChange');
		$("#obj3722").trigger('SCEventCounterIncrease');
		if (obj3722_counterValue == obj3722_counterTargetValue)
			$("#obj3722").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3731_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj3725 
incrementCounter_3735();
function incrementCounter_3735() {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = obj3731_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj3725_counterValue;
	obj3725_counterValue = obj3725_counterValue + 1;
	if (! obj3725_counterCanExceedTargetValue && obj3725_counterValue > obj3725_counterTargetValue) {
		obj3725_counterValue = obj3725_counterTargetValue;
	}

	if (oldValue != obj3725_counterValue) {
		$("#obj3725").trigger('SCEventCounterValueChange');
		$("#obj3725").trigger('SCEventCounterIncrease');
		if (obj3725_counterValue == obj3725_counterTargetValue)
			$("#obj3725").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3731_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj3719 
incrementCounter_3736();
function incrementCounter_3736() {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = obj3731_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj3719_counterValue;
	obj3719_counterValue = obj3719_counterValue + 1;
	if (! obj3719_counterCanExceedTargetValue && obj3719_counterValue > obj3719_counterTargetValue) {
		obj3719_counterValue = obj3719_counterTargetValue;
	}

	if (oldValue != obj3719_counterValue) {
		$("#obj3719").trigger('SCEventCounterValueChange');
		$("#obj3719").trigger('SCEventCounterIncrease');
		if (obj3719_counterValue == obj3719_counterTargetValue)
			$("#obj3719").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3731_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj3731_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3731_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3731").trigger("obj3731_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3731) {
				console.warn("de-queueing event obj3731." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3731").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3731_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj3731 
decrementCounter_3737();
function decrementCounter_3737() {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = obj3731_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj3731_counterValue;
	obj3731_counterValue = obj3731_counterValue - 1;
	if (obj3731_counterValue < 0) {
		obj3731_counterValue = 0;
	}

	if (oldValue != obj3731_counterValue) {
		$("#obj3731").trigger('SCEventCounterValueChange');
		$("#obj3731").trigger('SCEventCounterDecrease');
		if (obj3731_counterValue == obj3731_counterTargetValue)
			$("#obj3731").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3731_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3731_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj3731_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3731_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3731").trigger("obj3731_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3731) {
				console.warn("de-queueing event obj3731." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3731").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3731_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj3738_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3738_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3738").trigger("obj3738_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3738) {
				console.warn("de-queueing event obj3738." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3738").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3738_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
































//	action: decrement counter
//	target: obj3738 
decrementCounter_3748();
function decrementCounter_3748() {
	window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount = obj3738_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue - 2;
	if (obj3738_counterValue < 0) {
		obj3738_counterValue = 0;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterDecrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3738_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}










};
obj3738_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3738_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3738").trigger("obj3738_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3738) {
				console.warn("de-queueing event obj3738." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3738").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3738_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj3932
(function(){
	window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount = obj3738_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3932";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3738_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3738_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3738_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3738_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3738_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3738").trigger("obj3738_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3738) {
				console.warn("de-queueing event obj3738." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3738").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3738_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj3750_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3750").trigger("obj3750_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3750) {
				console.warn("de-queueing event obj3750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3916 
hide_6364();
function hide_6364() {
	var selector = "#obj3916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6364(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3918 
hide_6365();
function hide_6365() {
	var selector = "#obj3918";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6365(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3920 
hide_6366();
function hide_6366() {
	var selector = "#obj3920";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6366(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3922 
hide_6367();
function hide_6367() {
	var selector = "#obj3922";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6367(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3924 
hide_6368();
function hide_6368() {
	var selector = "#obj3924";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6368(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3926 
hide_6369();
function hide_6369() {
	var selector = "#obj3926";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6369(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3928 
hide_6370();
function hide_6370() {
	var selector = "#obj3928";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6370(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3930 
hide_6371();
function hide_6371() {
	var selector = "#obj3930";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6371(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3750_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3750").trigger("obj3750_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3750) {
				console.warn("de-queueing event obj3750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj3833
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3833";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3848
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3848";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3861
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3861";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3874
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3874";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3889
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3889";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3902
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3902";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3821
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3821";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3823
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3823";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3825
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3825";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3827
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3827";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3829
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3829";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3831
(function(){
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj3831";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3750_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3750").trigger("obj3750_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3750) {
				console.warn("de-queueing event obj3750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3594 
hide_3764();
function hide_3764() {
	var selector = "#obj3594";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3764(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3596 
hide_3765();
function hide_3765() {
	var selector = "#obj3596";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3765(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3598 
hide_3766();
function hide_3766() {
	var selector = "#obj3598";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3766(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3600 
hide_3767();
function hide_3767() {
	var selector = "#obj3600";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3767(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3602 
hide_3768();
function hide_3768() {
	var selector = "#obj3602";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3768(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3604 
hide_3769();
function hide_3769() {
	var selector = "#obj3604";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3769(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3643 
hide_3770();
function hide_3770() {
	var selector = "#obj3643";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3770(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3627 
hide_3771();
function hide_3771() {
	var selector = "#obj3627";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3771(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3657 
hide_3772();
function hide_3772() {
	var selector = "#obj3657";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3772(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3671 
hide_3773();
function hide_3773() {
	var selector = "#obj3671";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3773(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3685 
hide_3774();
function hide_3774() {
	var selector = "#obj3685";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3774(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3701 
hide_3775();
function hide_3775() {
	var selector = "#obj3701";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3775(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3750_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3750").trigger("obj3750_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3750) {
				console.warn("de-queueing event obj3750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_3776();
function switchText_3776() {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 30px;\">Познач ілюстрації, на яких зображено роль людини як споживача послуг.</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3612_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3612_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3612").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3612_content");
			setTimeout(function () {
				window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj3612 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
	}
}












};
obj3750_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3750").trigger("obj3750_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3750) {
				console.warn("de-queueing event obj3750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj3932 
hide_6860();
function hide_6860() {
	var selector = "#obj3932";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6860(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}































//	action: set counter value
//	target: obj3738 
setCounterValue_6858();
function setCounterValue_6858() {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = obj3750_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = 0;
	if (obj3738_counterValue < 0) {
		obj3738_counterValue = 0;
	} else if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3750_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3750_SCEventCounterReachedTargetValue_actionGroup5();
} }, 1);
}









};
obj3750_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3750").trigger("obj3750_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3750) {
				console.warn("de-queueing event obj3750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	











































};
obj3777_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3777").trigger("obj3777_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3777) {
				console.warn("de-queueing event obj3777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
































//	action: decrement counter
//	target: obj3782 
decrementCounter_6380();
function decrementCounter_6380() {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue - 1;
	if (obj3782_counterValue < 0) {
		obj3782_counterValue = 0;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterDecrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}










};
obj3777_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3777").trigger("obj3777_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3777) {
				console.warn("de-queueing event obj3777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj3916 
hide_7815();
function hide_7815() {
	var selector = "#obj3916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7815(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3918 
hide_7816();
function hide_7816() {
	var selector = "#obj3918";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7816(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3920 
hide_7817();
function hide_7817() {
	var selector = "#obj3920";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7817(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3922 
hide_7818();
function hide_7818() {
	var selector = "#obj3922";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7818(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3924 
hide_7819();
function hide_7819() {
	var selector = "#obj3924";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7819(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3926 
hide_7820();
function hide_7820() {
	var selector = "#obj3926";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7820(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3928 
hide_7821();
function hide_7821() {
	var selector = "#obj3928";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7821(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3930 
hide_7822();
function hide_7822() {
	var selector = "#obj3930";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7822(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3777_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3777").trigger("obj3777_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3777) {
				console.warn("de-queueing event obj3777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
















//	action: wait
wait_3780();
function wait_3780() {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 200);
}


























};
obj3777_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3777").trigger("obj3777_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3777) {
				console.warn("de-queueing event obj3777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	
//	action: goToPage
goToPage_3942();
function goToPage_3942() {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = obj3777_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor844")[0].click();
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3777_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3777_SCEventCounterReachedTargetValue_actionGroup4();
}
}










































};
obj3777_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3777").trigger("obj3777_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3777) {
				console.warn("de-queueing event obj3777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	











































};
obj3782_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3782").trigger("obj3782_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3782) {
				console.warn("de-queueing event obj3782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3833 
hide_3788();
function hide_3788() {
	var selector = "#obj3833";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3788(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3848 
hide_3789();
function hide_3789() {
	var selector = "#obj3848";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3789(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3861 
hide_3790();
function hide_3790() {
	var selector = "#obj3861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3790(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3874 
hide_3791();
function hide_3791() {
	var selector = "#obj3874";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3791(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3889 
hide_3792();
function hide_3792() {
	var selector = "#obj3889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3792(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3902 
hide_3793();
function hide_3793() {
	var selector = "#obj3902";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3793(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3916 
hide_6372();
function hide_6372() {
	var selector = "#obj3916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6372(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3918 
hide_6373();
function hide_6373() {
	var selector = "#obj3918";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6373(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3920 
hide_6374();
function hide_6374() {
	var selector = "#obj3920";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6374(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3922 
hide_6375();
function hide_6375() {
	var selector = "#obj3922";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6375(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3924 
hide_6376();
function hide_6376() {
	var selector = "#obj3924";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6376(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3926 
hide_6377();
function hide_6377() {
	var selector = "#obj3926";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6377(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3928 
hide_6378();
function hide_6378() {
	var selector = "#obj3928";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6378(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3930 
hide_6379();
function hide_6379() {
	var selector = "#obj3930";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6379(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3782_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3782").trigger("obj3782_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3782) {
				console.warn("de-queueing event obj3782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3785();
function wait_3785() {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 500);
}


























};
obj3782_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3782").trigger("obj3782_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3782) {
				console.warn("de-queueing event obj3782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_7733();
function goToPage_7733() {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = obj3782_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor845")[0].click();
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj3782_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj3782_SCEventCounterReachedTargetValue_actionGroup3();
}
}










































};
obj3782_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj3782").trigger("obj3782_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3782) {
				console.warn("de-queueing event obj3782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj3833_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3833 
hide_3835();
function hide_3835() {
	var selector = "#obj3833";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3835(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6866();
function incrementCounter_6866() {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup1();
} }, 1);
}











};
obj3833_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3837();
function playAudioFile_3837() {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3837")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3837");
			$("#obj_audio_playSoundFile3837").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup2();
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
				window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3833_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3838();
function runjs_3838() {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;


	$("#obj3821").css("border-color", "#2DB657"); $("#obj3821").css("border-width", "2px"); $("#obj3821").css("border-style", "solid"); $("#obj3821").css("border-radius", "15px"); $("#obj3821").css("-webkit-border-radius", "15px"); $("#obj3821").css("-moz-border-radius", "15px"); $("#obj3821_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup3();
}
	}, 1);
}














};
obj3833_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3821 
(function () {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3821").css('filter') == 'none')
$("#obj3821").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3821").animate({ dropShadow: 'drop-shadow(4px 4px 2px #2DB657)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3833_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3916
(function(){
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;


	var selector = "#obj3916";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3833_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 5;
	

































//	action: set counter value
//	target: obj3731 
setCounterValue_3841();
function setCounterValue_3841() {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;


	var oldValue = obj3731_counterValue;
	obj3731_counterValue = 1;
	if (obj3731_counterValue < 0) {
		obj3731_counterValue = 0;
	} else if (! obj3731_counterCanExceedTargetValue && obj3731_counterValue > obj3731_counterTargetValue) {
		obj3731_counterValue = obj3731_counterTargetValue;
	}

	if (oldValue != obj3731_counterValue) {
		$("#obj3731").trigger('SCEventCounterValueChange');
		if (obj3731_counterValue == obj3731_counterTargetValue)
			$("#obj3731").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup6();
} }, 1);
}









};
obj3833_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 6;
	
















//	action: wait
wait_3842();
function wait_3842() {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup7();
}
	}, 1000);
}


























};
obj3833_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 7;
	





























//	action: Run JavaScript
runjs_3843();
function runjs_3843() {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;


	$("#obj3821").css("border-color", "#4B4B4B"); $("#obj3821").css("border-width", "0px"); $("#obj3821").css("border-style", "solid"); $("#obj3821").css("border-radius", "15px"); $("#obj3821").css("-webkit-border-radius", "15px"); $("#obj3821").css("-moz-border-radius", "15px"); $("#obj3821_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup8();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3821 
(function () {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3821").css('filter') == 'none')
$("#obj3821").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3821").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup8();
}
		}, 1);
	});
})();

};
obj3833_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj3777 
incrementCounter_3846();
function incrementCounter_3846() {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;


	var oldValue = obj3777_counterValue;
	obj3777_counterValue = obj3777_counterValue + 1;
	if (! obj3777_counterCanExceedTargetValue && obj3777_counterValue > obj3777_counterTargetValue) {
		obj3777_counterValue = obj3777_counterTargetValue;
	}

	if (oldValue != obj3777_counterValue) {
		$("#obj3777").trigger('SCEventCounterValueChange');
		$("#obj3777").trigger('SCEventCounterIncrease');
		if (obj3777_counterValue == obj3777_counterTargetValue)
			$("#obj3777").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup9();
} }, 1);
}











};
obj3833_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 9;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3847();
function incrementCounter_3847() {
	window.obj3833_onTap_runningActionsCount = obj3833_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3833_onTap_runningActionsCount = window.obj3833_onTap_runningActionsCount - 1;

if (window.obj3833_onTap_runningActionsCount < 0) {
	window.obj3833_onTap_runningActionsCount = 0;
} else if (window.obj3833_onTap_runningActionsCount == 0) {
	obj3833_onTap_actionGroup10();
} }, 1);
}











};
obj3833_onTap_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3833_onTap_activeActionGroupIndex = -1;
		$("#obj3833").trigger("obj3833_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3833) {
				console.warn("de-queueing event obj3833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3833_onTap_activeActionGroupIndex = 10;
	











































};
obj3848_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3848_onTap_activeActionGroupIndex = -1;
		$("#obj3848").trigger("obj3848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3848) {
				console.warn("de-queueing event obj3848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3848_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3848 
hide_3850();
function hide_3850() {
	var selector = "#obj3848";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3850(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6865();
function incrementCounter_6865() {
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup1();
} }, 1);
}











};
obj3848_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3848_onTap_activeActionGroupIndex = -1;
		$("#obj3848").trigger("obj3848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3848) {
				console.warn("de-queueing event obj3848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3848_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3852();
function playAudioFile_3852() {
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3852")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3852");
			$("#obj_audio_playSoundFile3852").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup2();
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
				window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3848_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3848_onTap_activeActionGroupIndex = -1;
		$("#obj3848").trigger("obj3848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3848) {
				console.warn("de-queueing event obj3848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3848_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3853();
function runjs_3853() {
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;


	$("#obj3825").css("border-color", "#F8A03C"); $("#obj3825").css("border-width", "2px"); $("#obj3825").css("border-style", "solid"); $("#obj3825").css("border-radius", "15px"); $("#obj3825").css("-webkit-border-radius", "15px"); $("#obj3825").css("-moz-border-radius", "15px"); $("#obj3825_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup3();
}
	}, 1);
}














};
obj3848_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3848_onTap_activeActionGroupIndex = -1;
		$("#obj3848").trigger("obj3848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3848) {
				console.warn("de-queueing event obj3848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3848_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3825 
(function () {
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3825").css('filter') == 'none')
$("#obj3825").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3825").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3848_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3848_onTap_activeActionGroupIndex = -1;
		$("#obj3848").trigger("obj3848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3848) {
				console.warn("de-queueing event obj3848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3848_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3920
(function(){
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;


	var selector = "#obj3920";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3848_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3848_onTap_activeActionGroupIndex = -1;
		$("#obj3848").trigger("obj3848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3848) {
				console.warn("de-queueing event obj3848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3848_onTap_activeActionGroupIndex = 5;
	
















//	action: wait
wait_3856();
function wait_3856() {
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup6();
}
	}, 1000);
}


























};
obj3848_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3848_onTap_activeActionGroupIndex = -1;
		$("#obj3848").trigger("obj3848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3848) {
				console.warn("de-queueing event obj3848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3848_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3857();
function runjs_3857() {
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;


	$("#obj3825").css("border-color", "#4B4B4B"); $("#obj3825").css("border-width", "0px"); $("#obj3825").css("border-style", "solid"); $("#obj3825").css("border-radius", "15px"); $("#obj3825").css("-webkit-border-radius", "15px"); $("#obj3825").css("-moz-border-radius", "15px"); $("#obj3825_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup7();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3825 
(function () {
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3825").css('filter') == 'none')
$("#obj3825").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3825").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup7();
}
		}, 1);
	});
})();

};
obj3848_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3848_onTap_activeActionGroupIndex = -1;
		$("#obj3848").trigger("obj3848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3848) {
				console.warn("de-queueing event obj3848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3848_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3860();
function incrementCounter_3860() {
	window.obj3848_onTap_runningActionsCount = obj3848_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3848_onTap_runningActionsCount = window.obj3848_onTap_runningActionsCount - 1;

if (window.obj3848_onTap_runningActionsCount < 0) {
	window.obj3848_onTap_runningActionsCount = 0;
} else if (window.obj3848_onTap_runningActionsCount == 0) {
	obj3848_onTap_actionGroup8();
} }, 1);
}











};
obj3848_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3848_onTap_activeActionGroupIndex = -1;
		$("#obj3848").trigger("obj3848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3848) {
				console.warn("de-queueing event obj3848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3848_onTap_activeActionGroupIndex = 8;
	











































};
obj3861_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3861_onTap_activeActionGroupIndex = -1;
		$("#obj3861").trigger("obj3861_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3861) {
				console.warn("de-queueing event obj3861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3861_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3861 
hide_3863();
function hide_3863() {
	var selector = "#obj3861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3863(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6864();
function incrementCounter_6864() {
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup1();
} }, 1);
}











};
obj3861_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3861_onTap_activeActionGroupIndex = -1;
		$("#obj3861").trigger("obj3861_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3861) {
				console.warn("de-queueing event obj3861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3861_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3865();
function playAudioFile_3865() {
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3865")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3865");
			$("#obj_audio_playSoundFile3865").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup2();
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
				window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3861_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3861_onTap_activeActionGroupIndex = -1;
		$("#obj3861").trigger("obj3861_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3861) {
				console.warn("de-queueing event obj3861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3861_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3866();
function runjs_3866() {
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;


	$("#obj3823").css("border-color", "#F8A03C"); $("#obj3823").css("border-width", "2px"); $("#obj3823").css("border-style", "solid"); $("#obj3823").css("border-radius", "15px"); $("#obj3823").css("-webkit-border-radius", "15px"); $("#obj3823").css("-moz-border-radius", "15px"); $("#obj3823_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup3();
}
	}, 1);
}














};
obj3861_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3861_onTap_activeActionGroupIndex = -1;
		$("#obj3861").trigger("obj3861_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3861) {
				console.warn("de-queueing event obj3861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3861_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3823 
(function () {
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3823").css('filter') == 'none')
$("#obj3823").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3823").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3861_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3861_onTap_activeActionGroupIndex = -1;
		$("#obj3861").trigger("obj3861_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3861) {
				console.warn("de-queueing event obj3861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3861_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3922
(function(){
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;


	var selector = "#obj3922";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3861_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3861_onTap_activeActionGroupIndex = -1;
		$("#obj3861").trigger("obj3861_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3861) {
				console.warn("de-queueing event obj3861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3861_onTap_activeActionGroupIndex = 5;
	
















//	action: wait
wait_3869();
function wait_3869() {
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup6();
}
	}, 1000);
}


























};
obj3861_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3861_onTap_activeActionGroupIndex = -1;
		$("#obj3861").trigger("obj3861_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3861) {
				console.warn("de-queueing event obj3861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3861_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3870();
function runjs_3870() {
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;


	$("#obj3823").css("border-color", "#4B4B4B"); $("#obj3823").css("border-width", "0px"); $("#obj3823").css("border-style", "solid"); $("#obj3823").css("border-radius", "15px"); $("#obj3823").css("-webkit-border-radius", "15px"); $("#obj3823").css("-moz-border-radius", "15px"); $("#obj3823_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup7();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3823 
(function () {
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3823").css('filter') == 'none')
$("#obj3823").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3823").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup7();
}
		}, 1);
	});
})();

};
obj3861_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3861_onTap_activeActionGroupIndex = -1;
		$("#obj3861").trigger("obj3861_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3861) {
				console.warn("de-queueing event obj3861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3861_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3873();
function incrementCounter_3873() {
	window.obj3861_onTap_runningActionsCount = obj3861_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3861_onTap_runningActionsCount = window.obj3861_onTap_runningActionsCount - 1;

if (window.obj3861_onTap_runningActionsCount < 0) {
	window.obj3861_onTap_runningActionsCount = 0;
} else if (window.obj3861_onTap_runningActionsCount == 0) {
	obj3861_onTap_actionGroup8();
} }, 1);
}











};
obj3861_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3861_onTap_activeActionGroupIndex = -1;
		$("#obj3861").trigger("obj3861_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3861) {
				console.warn("de-queueing event obj3861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3861_onTap_activeActionGroupIndex = 8;
	











































};
obj3874_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3874 
hide_3876();
function hide_3876() {
	var selector = "#obj3874";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3876(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6863();
function incrementCounter_6863() {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup1();
} }, 1);
}











};
obj3874_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3878();
function playAudioFile_3878() {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3878")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3878");
			$("#obj_audio_playSoundFile3878").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup2();
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
				window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3874_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3879();
function runjs_3879() {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;


	$("#obj3827").css("border-color", "#2DB657"); $("#obj3827").css("border-width", "2px"); $("#obj3827").css("border-style", "solid"); $("#obj3827").css("border-radius", "15px"); $("#obj3827").css("-webkit-border-radius", "15px"); $("#obj3827").css("-moz-border-radius", "15px"); $("#obj3827_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup3();
}
	}, 1);
}














};
obj3874_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3827 
(function () {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3827").css('filter') == 'none')
$("#obj3827").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3827").animate({ dropShadow: 'drop-shadow(4px 4px 2px #2DB657)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3874_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3930
(function(){
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;


	var selector = "#obj3930";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3874_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 5;
	
















//	action: wait
wait_3882();
function wait_3882() {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup6();
}
	}, 1000);
}


























};
obj3874_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3883();
function runjs_3883() {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;


	$("#obj3827").css("border-color", "#4B4B4B"); $("#obj3827").css("border-width", "0px"); $("#obj3827").css("border-style", "solid"); $("#obj3827").css("border-radius", "15px"); $("#obj3827").css("-webkit-border-radius", "15px"); $("#obj3827").css("-moz-border-radius", "15px"); $("#obj3827_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup7();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3827 
(function () {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3827").css('filter') == 'none')
$("#obj3827").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3827").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup7();
}
		}, 1);
	});
})();

};
obj3874_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 7;
	

































//	action: set counter value
//	target: obj3731 
setCounterValue_3886();
function setCounterValue_3886() {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;


	var oldValue = obj3731_counterValue;
	obj3731_counterValue = 1;
	if (obj3731_counterValue < 0) {
		obj3731_counterValue = 0;
	} else if (! obj3731_counterCanExceedTargetValue && obj3731_counterValue > obj3731_counterTargetValue) {
		obj3731_counterValue = obj3731_counterTargetValue;
	}

	if (oldValue != obj3731_counterValue) {
		$("#obj3731").trigger('SCEventCounterValueChange');
		if (obj3731_counterValue == obj3731_counterTargetValue)
			$("#obj3731").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup8();
} }, 1);
}









};
obj3874_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj3777 
incrementCounter_3888();
function incrementCounter_3888() {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;


	var oldValue = obj3777_counterValue;
	obj3777_counterValue = obj3777_counterValue + 1;
	if (! obj3777_counterCanExceedTargetValue && obj3777_counterValue > obj3777_counterTargetValue) {
		obj3777_counterValue = obj3777_counterTargetValue;
	}

	if (oldValue != obj3777_counterValue) {
		$("#obj3777").trigger('SCEventCounterValueChange');
		$("#obj3777").trigger('SCEventCounterIncrease');
		if (obj3777_counterValue == obj3777_counterTargetValue)
			$("#obj3777").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup9();
} }, 1);
}











};
obj3874_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 9;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3887();
function incrementCounter_3887() {
	window.obj3874_onTap_runningActionsCount = obj3874_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3874_onTap_runningActionsCount = window.obj3874_onTap_runningActionsCount - 1;

if (window.obj3874_onTap_runningActionsCount < 0) {
	window.obj3874_onTap_runningActionsCount = 0;
} else if (window.obj3874_onTap_runningActionsCount == 0) {
	obj3874_onTap_actionGroup10();
} }, 1);
}











};
obj3874_onTap_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3874_onTap_activeActionGroupIndex = -1;
		$("#obj3874").trigger("obj3874_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3874) {
				console.warn("de-queueing event obj3874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3874_onTap_activeActionGroupIndex = 10;
	











































};
obj3889_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3889 
hide_3891();
function hide_3891() {
	var selector = "#obj3889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3891(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6862();
function incrementCounter_6862() {
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup1();
} }, 1);
}











};
obj3889_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3893();
function playAudioFile_3893() {
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3893")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3893");
			$("#obj_audio_playSoundFile3893").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup2();
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
				window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3889_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3894();
function runjs_3894() {
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;


	$("#obj3829").css("border-color", "#F8A03C"); $("#obj3829").css("border-width", "2px"); $("#obj3829").css("border-style", "solid"); $("#obj3829").css("border-radius", "15px"); $("#obj3829").css("-webkit-border-radius", "15px"); $("#obj3829").css("-moz-border-radius", "15px"); $("#obj3829_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup3();
}
	}, 1);
}














};
obj3889_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3829 
(function () {
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3829").css('filter') == 'none')
$("#obj3829").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3829").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3889_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3928
(function(){
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;


	var selector = "#obj3928";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3889_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 5;
	
















//	action: wait
wait_3897();
function wait_3897() {
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup6();
}
	}, 1000);
}


























};
obj3889_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3898();
function runjs_3898() {
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;


	$("#obj3829").css("border-color", "#4B4B4B"); $("#obj3829").css("border-width", "0px"); $("#obj3829").css("border-style", "solid"); $("#obj3829").css("border-radius", "15px"); $("#obj3829").css("-webkit-border-radius", "15px"); $("#obj3829").css("-moz-border-radius", "15px"); $("#obj3829_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup7();
}
	}, 1);
}














};
obj3889_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 7;
	









































//	action: runJqueryAnimation
//	target: obj3829 
(function () {
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3829").css('filter') == 'none')
$("#obj3829").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3829").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup8();
}
		}, 1);
	});
})();

};
obj3889_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 8;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3901();
function incrementCounter_3901() {
	window.obj3889_onTap_runningActionsCount = obj3889_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3889_onTap_runningActionsCount = window.obj3889_onTap_runningActionsCount - 1;

if (window.obj3889_onTap_runningActionsCount < 0) {
	window.obj3889_onTap_runningActionsCount = 0;
} else if (window.obj3889_onTap_runningActionsCount == 0) {
	obj3889_onTap_actionGroup9();
} }, 1);
}











};
obj3889_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3889_onTap_activeActionGroupIndex = -1;
		$("#obj3889").trigger("obj3889_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3889) {
				console.warn("de-queueing event obj3889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3889_onTap_activeActionGroupIndex = 9;
	











































};
obj3902_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3902_onTap_activeActionGroupIndex = -1;
		$("#obj3902").trigger("obj3902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3902) {
				console.warn("de-queueing event obj3902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3902_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3902 
hide_3904();
function hide_3904() {
	var selector = "#obj3902";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3904(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}





























//	action: increment counter
//	target: obj3738 
incrementCounter_6861();
function incrementCounter_6861() {
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;


	var oldValue = obj3738_counterValue;
	obj3738_counterValue = obj3738_counterValue + 1;
	if (! obj3738_counterCanExceedTargetValue && obj3738_counterValue > obj3738_counterTargetValue) {
		obj3738_counterValue = obj3738_counterTargetValue;
	}

	if (oldValue != obj3738_counterValue) {
		$("#obj3738").trigger('SCEventCounterValueChange');
		$("#obj3738").trigger('SCEventCounterIncrease');
		if (obj3738_counterValue == obj3738_counterTargetValue)
			$("#obj3738").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup1();
} }, 1);
}











};
obj3902_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3902_onTap_activeActionGroupIndex = -1;
		$("#obj3902").trigger("obj3902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3902) {
				console.warn("de-queueing event obj3902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3902_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_3906();
function playAudioFile_3906() {
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3906")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3906");
			$("#obj_audio_playSoundFile3906").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup2();
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
				window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj3902_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3902_onTap_activeActionGroupIndex = -1;
		$("#obj3902").trigger("obj3902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3902) {
				console.warn("de-queueing event obj3902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3902_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_3907();
function runjs_3907() {
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;


	$("#obj3831").css("border-color", "#F8A03C"); $("#obj3831").css("border-width", "2px"); $("#obj3831").css("border-style", "solid"); $("#obj3831").css("border-radius", "15px"); $("#obj3831").css("-webkit-border-radius", "15px"); $("#obj3831").css("-moz-border-radius", "15px"); $("#obj3831_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup3();
}
	}, 1);
}














};
obj3902_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3902_onTap_activeActionGroupIndex = -1;
		$("#obj3902").trigger("obj3902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3902) {
				console.warn("de-queueing event obj3902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3902_onTap_activeActionGroupIndex = 3;
	









































//	action: runJqueryAnimation
//	target: obj3831 
(function () {
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3831").css('filter') == 'none')
$("#obj3831").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3831").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj3902_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3902_onTap_activeActionGroupIndex = -1;
		$("#obj3902").trigger("obj3902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3902) {
				console.warn("de-queueing event obj3902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3902_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj3926
(function(){
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;


	var selector = "#obj3926";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3902_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3902_onTap_activeActionGroupIndex = -1;
		$("#obj3902").trigger("obj3902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3902) {
				console.warn("de-queueing event obj3902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3902_onTap_activeActionGroupIndex = 5;
	
















//	action: wait
wait_3910();
function wait_3910() {
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup6();
}
	}, 1000);
}


























};
obj3902_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3902_onTap_activeActionGroupIndex = -1;
		$("#obj3902").trigger("obj3902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3902) {
				console.warn("de-queueing event obj3902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3902_onTap_activeActionGroupIndex = 6;
	





























//	action: Run JavaScript
runjs_3911();
function runjs_3911() {
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;


	$("#obj3831").css("border-color", "#4B4B4B"); $("#obj3831").css("border-width", "0px"); $("#obj3831").css("border-style", "solid"); $("#obj3831").css("border-radius", "15px"); $("#obj3831").css("-webkit-border-radius", "15px"); $("#obj3831").css("-moz-border-radius", "15px"); $("#obj3831_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup7();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj3831 
(function () {
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj3831").css('filter') == 'none')
$("#obj3831").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj3831").animate({ dropShadow: 'drop-shadow(4px 4px 2px #4B4B4B)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup7();
}
		}, 1);
	});
})();

};
obj3902_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3902_onTap_activeActionGroupIndex = -1;
		$("#obj3902").trigger("obj3902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3902) {
				console.warn("de-queueing event obj3902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3902_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj3782 
incrementCounter_3915();
function incrementCounter_3915() {
	window.obj3902_onTap_runningActionsCount = obj3902_onTap_runningActionsCount + 1;


	var oldValue = obj3782_counterValue;
	obj3782_counterValue = obj3782_counterValue + 1;
	if (! obj3782_counterCanExceedTargetValue && obj3782_counterValue > obj3782_counterTargetValue) {
		obj3782_counterValue = obj3782_counterTargetValue;
	}

	if (oldValue != obj3782_counterValue) {
		$("#obj3782").trigger('SCEventCounterValueChange');
		$("#obj3782").trigger('SCEventCounterIncrease');
		if (obj3782_counterValue == obj3782_counterTargetValue)
			$("#obj3782").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3902_onTap_runningActionsCount = window.obj3902_onTap_runningActionsCount - 1;

if (window.obj3902_onTap_runningActionsCount < 0) {
	window.obj3902_onTap_runningActionsCount = 0;
} else if (window.obj3902_onTap_runningActionsCount == 0) {
	obj3902_onTap_actionGroup8();
} }, 1);
}











};
obj3902_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3902_onTap_activeActionGroupIndex = -1;
		$("#obj3902").trigger("obj3902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3902) {
				console.warn("de-queueing event obj3902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3902_onTap_activeActionGroupIndex = 8;
	











































};
obj6685_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6685_onTap_activeActionGroupIndex = -1;
		$("#obj6685").trigger("obj6685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6685) {
				console.warn("de-queueing event obj6685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6685_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj6685 
hide_6688();
function hide_6688() {
	var selector = "#obj6685";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6685_onTap_runningActionsCount = obj6685_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6685_onTap_runningActionsCount = window.obj6685_onTap_runningActionsCount - 1;

if (window.obj6685_onTap_runningActionsCount < 0) {
	window.obj6685_onTap_runningActionsCount = 0;
} else if (window.obj6685_onTap_runningActionsCount == 0) {
	obj6685_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6688(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6685_onTap_runningActionsCount = window.obj6685_onTap_runningActionsCount - 1;

if (window.obj6685_onTap_runningActionsCount < 0) {
	window.obj6685_onTap_runningActionsCount = 0;
} else if (window.obj6685_onTap_runningActionsCount == 0) {
	obj6685_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj3614
(function(){
	window.obj6685_onTap_runningActionsCount = obj6685_onTap_runningActionsCount + 1;


	var selector = "#obj3614";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6685_onTap_runningActionsCount = window.obj6685_onTap_runningActionsCount - 1;

if (window.obj6685_onTap_runningActionsCount < 0) {
	window.obj6685_onTap_runningActionsCount = 0;
} else if (window.obj6685_onTap_runningActionsCount == 0) {
	obj6685_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6685_onTap_runningActionsCount = window.obj6685_onTap_runningActionsCount - 1;

if (window.obj6685_onTap_runningActionsCount < 0) {
	window.obj6685_onTap_runningActionsCount = 0;
} else if (window.obj6685_onTap_runningActionsCount == 0) {
	obj6685_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6685_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6685_onTap_activeActionGroupIndex = -1;
		$("#obj6685").trigger("obj6685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6685) {
				console.warn("de-queueing event obj6685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6685_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj3940 
hide_6689();
function hide_6689() {
	var selector = "#obj3940";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6685_onTap_runningActionsCount = obj6685_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6685_onTap_runningActionsCount = window.obj6685_onTap_runningActionsCount - 1;

if (window.obj6685_onTap_runningActionsCount < 0) {
	window.obj6685_onTap_runningActionsCount = 0;
} else if (window.obj6685_onTap_runningActionsCount == 0) {
	obj6685_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6689(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6685_onTap_runningActionsCount = window.obj6685_onTap_runningActionsCount - 1;

if (window.obj6685_onTap_runningActionsCount < 0) {
	window.obj6685_onTap_runningActionsCount = 0;
} else if (window.obj6685_onTap_runningActionsCount == 0) {
	obj6685_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3938 
hide_6690();
function hide_6690() {
	var selector = "#obj3938";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6685_onTap_runningActionsCount = obj6685_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6685_onTap_runningActionsCount = window.obj6685_onTap_runningActionsCount - 1;

if (window.obj6685_onTap_runningActionsCount < 0) {
	window.obj6685_onTap_runningActionsCount = 0;
} else if (window.obj6685_onTap_runningActionsCount == 0) {
	obj6685_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6690(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6685_onTap_runningActionsCount = window.obj6685_onTap_runningActionsCount - 1;

if (window.obj6685_onTap_runningActionsCount < 0) {
	window.obj6685_onTap_runningActionsCount = 0;
} else if (window.obj6685_onTap_runningActionsCount == 0) {
	obj6685_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6685_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6685_onTap_activeActionGroupIndex = -1;
		$("#obj6685").trigger("obj6685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6685) {
				console.warn("de-queueing event obj6685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6685_onTap_activeActionGroupIndex = 2;
	











































};
obj7440_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7440_onTap_activeActionGroupIndex = -1;
		$("#obj7440").trigger("obj7440_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7440) {
				console.warn("de-queueing event obj7440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7440_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7442();
function goToPage_7442() {
	window.obj7440_onTap_runningActionsCount = obj7440_onTap_runningActionsCount + 1;

	$("#anchor852")[0].click();
	window.obj7440_onTap_runningActionsCount = window.obj7440_onTap_runningActionsCount - 1;

if (window.obj7440_onTap_runningActionsCount < 0) {
	window.obj7440_onTap_runningActionsCount = 0;
} else if (window.obj7440_onTap_runningActionsCount == 0) {
	obj7440_onTap_actionGroup1();
}
}










































};
obj7440_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7440_onTap_activeActionGroupIndex = -1;
		$("#obj7440").trigger("obj7440_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7440) {
				console.warn("de-queueing event obj7440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7440_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
















































































































































































/*
 *
 *   obj3614: Event Touch Down
 *
 */

$("#obj3614").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3614_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3614_onTap is still running");
	return;
}
var obj3614_onTap_runningActionsCount = 0;
var obj3614_onTap_loopCount = 0;
obj3614_onTap_actionGroup0();
});


















/*
 *
 *   obj3627: Event Touch Down
 *
 */

$("#obj3627").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3627_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3627_onTap is still running");
	return;
}
var obj3627_onTap_runningActionsCount = 0;
var obj3627_onTap_loopCount = 0;
obj3627_onTap_actionGroup0();
});


















/*
 *
 *   obj3643: Event Touch Down
 *
 */

$("#obj3643").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3643_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3643_onTap is still running");
	return;
}
var obj3643_onTap_runningActionsCount = 0;
var obj3643_onTap_loopCount = 0;
obj3643_onTap_actionGroup0();
});


















/*
 *
 *   obj3657: Event Touch Down
 *
 */

$("#obj3657").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3657_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3657_onTap is still running");
	return;
}
var obj3657_onTap_runningActionsCount = 0;
var obj3657_onTap_loopCount = 0;
obj3657_onTap_actionGroup0();
});


















/*
 *
 *   obj3671: Event Touch Down
 *
 */

$("#obj3671").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3671_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3671_onTap is still running");
	return;
}
var obj3671_onTap_runningActionsCount = 0;
var obj3671_onTap_loopCount = 0;
obj3671_onTap_actionGroup0();
});


















/*
 *
 *   obj3685: Event Touch Down
 *
 */

$("#obj3685").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3685_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3685_onTap is still running");
	return;
}
var obj3685_onTap_runningActionsCount = 0;
var obj3685_onTap_loopCount = 0;
obj3685_onTap_actionGroup0();
});


















/*
 *
 *   obj3701: Event Touch Down
 *
 */

$("#obj3701").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3701_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3701_onTap is still running");
	return;
}
var obj3701_onTap_runningActionsCount = 0;
var obj3701_onTap_loopCount = 0;
obj3701_onTap_actionGroup0();
});

































































/*
 *
 *   obj3719: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj3719").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj3719_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3719_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj3719_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3719_SCEventCounterReachedTargetValue_loopCount = 0;
obj3719_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj3722: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj3722").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj3722_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3722_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj3722_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3722_SCEventCounterReachedTargetValue_loopCount = 0;
obj3722_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj3725: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj3725").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj3725_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3725_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj3725_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3725_SCEventCounterReachedTargetValue_loopCount = 0;
obj3725_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj3728: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj3728").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj3728_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3728_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj3728_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3728_SCEventCounterReachedTargetValue_loopCount = 0;
obj3728_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj3731: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj3731").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj3731_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3731_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj3731_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3731_SCEventCounterReachedTargetValue_loopCount = 0;
obj3731_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj3738: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj3738").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj3738_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3738_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj3738_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3738_SCEventCounterReachedTargetValue_loopCount = 0;
obj3738_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj3750: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj3750").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj3750_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3750_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj3750_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3750_SCEventCounterReachedTargetValue_loopCount = 0;
obj3750_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj3777: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj3777").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj3777_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3777_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj3777_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3777_SCEventCounterReachedTargetValue_loopCount = 0;
obj3777_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj3782: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj3782").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj3782_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3782_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj3782_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj3782_SCEventCounterReachedTargetValue_loopCount = 0;
obj3782_SCEventCounterReachedTargetValue_actionGroup0();
});



























































































































/*
 *
 *   obj3833: Event Touch Down
 *
 */

$("#obj3833").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3833_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3833_onTap is still running");
	return;
}
var obj3833_onTap_runningActionsCount = 0;
var obj3833_onTap_loopCount = 0;
obj3833_onTap_actionGroup0();
});


















/*
 *
 *   obj3848: Event Touch Down
 *
 */

$("#obj3848").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3848_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3848_onTap is still running");
	return;
}
var obj3848_onTap_runningActionsCount = 0;
var obj3848_onTap_loopCount = 0;
obj3848_onTap_actionGroup0();
});


















/*
 *
 *   obj3861: Event Touch Down
 *
 */

$("#obj3861").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3861_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3861_onTap is still running");
	return;
}
var obj3861_onTap_runningActionsCount = 0;
var obj3861_onTap_loopCount = 0;
obj3861_onTap_actionGroup0();
});


















/*
 *
 *   obj3874: Event Touch Down
 *
 */

$("#obj3874").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3874_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3874_onTap is still running");
	return;
}
var obj3874_onTap_runningActionsCount = 0;
var obj3874_onTap_loopCount = 0;
obj3874_onTap_actionGroup0();
});


















/*
 *
 *   obj3889: Event Touch Down
 *
 */

$("#obj3889").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3889_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3889_onTap is still running");
	return;
}
var obj3889_onTap_runningActionsCount = 0;
var obj3889_onTap_loopCount = 0;
obj3889_onTap_actionGroup0();
});


















/*
 *
 *   obj3902: Event Touch Down
 *
 */

$("#obj3902").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3902_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3902_onTap is still running");
	return;
}
var obj3902_onTap_runningActionsCount = 0;
var obj3902_onTap_loopCount = 0;
obj3902_onTap_actionGroup0();
});



































































































































































































































/*
 *
 *   obj6685: Event Touch Down
 *
 */

$("#obj6685").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6685_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6685_onTap is still running");
	return;
}
var obj6685_onTap_runningActionsCount = 0;
var obj6685_onTap_loopCount = 0;
obj6685_onTap_actionGroup0();
});
























































/*
 *
 *   obj7440: Event Touch Down
 *
 */

$("#obj7440").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7440_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7440_onTap is still running");
	return;
}
var obj7440_onTap_runningActionsCount = 0;
var obj7440_onTap_loopCount = 0;
obj7440_onTap_actionGroup0();
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
	
$("#obj7237").trigger('SCEventShow');
$("#obj3594").trigger('SCEventShow');
$("#obj3596").trigger('SCEventShow');
$("#obj3598").trigger('SCEventShow');
$("#obj3600").trigger('SCEventShow');
$("#obj3602").trigger('SCEventShow');
$("#obj3604").trigger('SCEventShow');
$("#obj3608").trigger('SCEventShow');
$("#obj3612").trigger('SCEventShow');
$("#obj3614").trigger('SCEventShow');
$("#obj3627").trigger('SCEventShow');
$("#obj3643").trigger('SCEventShow');
$("#obj3657").trigger('SCEventShow');
$("#obj3671").trigger('SCEventShow');
$("#obj3685").trigger('SCEventShow');
$("#obj3701").trigger('SCEventShow');
$("#obj3715").trigger('SCEventShow');
$("#obj3717").trigger('SCEventShow');
$("#obj7231").trigger('SCEventShow');
$("#obj7234").trigger('SCEventShow');
$("#obj7440").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});