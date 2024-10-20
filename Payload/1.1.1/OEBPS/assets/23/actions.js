pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 14949;
pubcoder.page.title = pubcoder.page.title || "23";
pubcoder.page.number = pubcoder.page.number || 23;
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
var obj14963_onTap_activeActionGroupIndex = -1;
var obj14963_onTap_runningActionsCount = 0;
var obj14963_onTap_loopCount = 0;
var obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14966_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14974_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14974_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14974_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14977_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14977_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14977_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14980_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14980_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14980_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14983_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14983_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14983_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15177_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15177_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15177_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15180_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15180_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15180_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15183_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15183_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15183_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14988_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14988_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15213_onTap_activeActionGroupIndex = -1;
var obj15213_onTap_runningActionsCount = 0;
var obj15213_onTap_loopCount = 0;
var obj15219_onTap_activeActionGroupIndex = -1;
var obj15219_onTap_runningActionsCount = 0;
var obj15219_onTap_loopCount = 0;
var obj15232_onTap_activeActionGroupIndex = -1;
var obj15232_onTap_runningActionsCount = 0;
var obj15232_onTap_loopCount = 0;
var obj15245_onTap_activeActionGroupIndex = -1;
var obj15245_onTap_runningActionsCount = 0;
var obj15245_onTap_loopCount = 0;
var obj15258_onTap_activeActionGroupIndex = -1;
var obj15258_onTap_runningActionsCount = 0;
var obj15258_onTap_loopCount = 0;
var obj15270_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15270_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15270_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15272_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15272_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15272_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15347_onTap_activeActionGroupIndex = -1;
var obj15347_onTap_runningActionsCount = 0;
var obj15347_onTap_loopCount = 0;
var obj15335_onTap_activeActionGroupIndex = -1;
var obj15335_onTap_runningActionsCount = 0;
var obj15335_onTap_loopCount = 0;
var obj15322_onTap_activeActionGroupIndex = -1;
var obj15322_onTap_runningActionsCount = 0;
var obj15322_onTap_loopCount = 0;
var obj15309_onTap_activeActionGroupIndex = -1;
var obj15309_onTap_runningActionsCount = 0;
var obj15309_onTap_loopCount = 0;
var obj15297_onTap_activeActionGroupIndex = -1;
var obj15297_onTap_runningActionsCount = 0;
var obj15297_onTap_loopCount = 0;
var obj15360_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15360_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15360_SCEventCounterReachedTargetValue_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj14966_counterValue = 0;
var obj14966_counterTargetValue = 3;
var obj14966_counterCanExceedTargetValue = false;
var obj14974_counterValue = 0;
var obj14974_counterTargetValue = 1;
var obj14974_counterCanExceedTargetValue = false;
var obj14977_counterValue = 0;
var obj14977_counterTargetValue = 2;
var obj14977_counterCanExceedTargetValue = false;
var obj14980_counterValue = 0;
var obj14980_counterTargetValue = 3;
var obj14980_counterCanExceedTargetValue = false;
var obj14983_counterValue = 0;
var obj14983_counterTargetValue = 4;
var obj14983_counterCanExceedTargetValue = false;
var obj15177_counterValue = 0;
var obj15177_counterTargetValue = 5;
var obj15177_counterCanExceedTargetValue = false;
var obj15180_counterValue = 0;
var obj15180_counterTargetValue = 6;
var obj15180_counterCanExceedTargetValue = false;
var obj15183_counterValue = 0;
var obj15183_counterTargetValue = 7;
var obj15183_counterCanExceedTargetValue = false;
var obj14988_counterValue = 0;
var obj14988_counterTargetValue = 1;
var obj14988_counterCanExceedTargetValue = false;
var obj15270_counterValue = 0;
var obj15270_counterTargetValue = 7;
var obj15270_counterCanExceedTargetValue = false;
var obj15272_counterValue = 0;
var obj15272_counterTargetValue = 7;
var obj15272_counterCanExceedTargetValue = false;
var obj15360_counterValue = 0;
var obj15360_counterTargetValue = 4;
var obj15360_counterCanExceedTargetValue = false;

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
		
obj14963_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14963_onTap_activeActionGroupIndex = -1;
		$("#obj14963").trigger("obj14963_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14963) {
				console.warn("de-queueing event obj14963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14963_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_14965();
function goToPage_14965() {
	window.obj14963_onTap_runningActionsCount = obj14963_onTap_runningActionsCount + 1;

	$("#anchor378")[0].click();
	window.obj14963_onTap_runningActionsCount = window.obj14963_onTap_runningActionsCount - 1;

if (window.obj14963_onTap_runningActionsCount < 0) {
	window.obj14963_onTap_runningActionsCount = 0;
} else if (window.obj14963_onTap_runningActionsCount == 0) {
	obj14963_onTap_actionGroup1();
}
}










































};
obj14963_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14963_onTap_activeActionGroupIndex = -1;
		$("#obj14963").trigger("obj14963_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14963) {
				console.warn("de-queueing event obj14963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14963_onTap_activeActionGroupIndex = 1;
	











































};
obj14966_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14966").trigger("obj14966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14966) {
				console.warn("de-queueing event obj14966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15274
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15274";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14966_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14966").trigger("obj14966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14966) {
				console.warn("de-queueing event obj14966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj15194 
hide_15277();
function hide_15277() {
	var selector = "#obj15194";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15277(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15198 
hide_15278();
function hide_15278() {
	var selector = "#obj15198";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15278(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15200 
hide_15279();
function hide_15279() {
	var selector = "#obj15200";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15279(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15213 
hide_15280();
function hide_15280() {
	var selector = "#obj15213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15280(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15229 
hide_15281();
function hide_15281() {
	var selector = "#obj15229";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15281(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15227 
hide_15282();
function hide_15282() {
	var selector = "#obj15227";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15282(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15225 
hide_15283();
function hide_15283() {
	var selector = "#obj15225";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15283(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15219 
hide_15284();
function hide_15284() {
	var selector = "#obj15219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15284(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15256 
hide_15285();
function hide_15285() {
	var selector = "#obj15256";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15285(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15254 
hide_15286();
function hide_15286() {
	var selector = "#obj15254";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15286(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15252 
hide_15287();
function hide_15287() {
	var selector = "#obj15252";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15287(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15268 
hide_15288();
function hide_15288() {
	var selector = "#obj15268";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15288(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15266 
hide_15289();
function hide_15289() {
	var selector = "#obj15266";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15289(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15264 
hide_15290();
function hide_15290() {
	var selector = "#obj15264";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15290(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15258 
hide_15291();
function hide_15291() {
	var selector = "#obj15258";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15291(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15243 
hide_15293();
function hide_15293() {
	var selector = "#obj15243";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15293(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15241 
hide_15294();
function hide_15294() {
	var selector = "#obj15241";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15294(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15239 
hide_15295();
function hide_15295() {
	var selector = "#obj15239";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15295(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15232 
hide_15296();
function hide_15296() {
	var selector = "#obj15232";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15296(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14966_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14966").trigger("obj14966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14966) {
				console.warn("de-queueing event obj14966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj15358
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15358";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15356
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15356";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15354
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15354";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15347
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15347";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15345
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15345";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15343
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15343";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15341
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15341";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15335
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15335";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15333
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15333";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15331
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15331";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15329
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15329";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15322
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15322";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15320
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15320";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15318
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15318";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15316
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15316";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15309
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15309";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15307
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15307";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15305
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15305";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15303
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15303";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15297
(function(){
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15297";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14966_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14966").trigger("obj14966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14966) {
				console.warn("de-queueing event obj14966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj15274 
hide_15441();
function hide_15441() {
	var selector = "#obj15274";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = obj14966_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15441(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14966_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14966_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14966_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14966").trigger("obj14966_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14966) {
				console.warn("de-queueing event obj14966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	











































};
obj14974_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14974_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14974").trigger("obj14974_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14974) {
				console.warn("de-queueing event obj14974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14974_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_14976();
function switchText_14976() {
	window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount = obj14974_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/7</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14972_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14972_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14972").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14972_content");
			setTimeout(function () {
				window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14974_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14972 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14974_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14974_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj14974_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14974_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14974").trigger("obj14974_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14974) {
				console.warn("de-queueing event obj14974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14974_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj14977_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14977_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14977").trigger("obj14977_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14977) {
				console.warn("de-queueing event obj14977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14977_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_14979();
function switchText_14979() {
	window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount = obj14977_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/7</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14972_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14972_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14972").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14972_content");
			setTimeout(function () {
				window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14977_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14972 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14977_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14977_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj14977_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14977_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14977").trigger("obj14977_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14977) {
				console.warn("de-queueing event obj14977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14977_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj14980_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14980_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14980").trigger("obj14980_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14980) {
				console.warn("de-queueing event obj14980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14980_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_14982();
function switchText_14982() {
	window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount = obj14980_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/7</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14972_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14972_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14972").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14972_content");
			setTimeout(function () {
				window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14980_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14972 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14980_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14980_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj14980_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14980_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14980").trigger("obj14980_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14980) {
				console.warn("de-queueing event obj14980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14980_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj14983_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14983_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14983").trigger("obj14983_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14983) {
				console.warn("de-queueing event obj14983." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14983").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14983_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_14985();
function switchText_14985() {
	window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount = obj14983_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>4/7</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14972_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14972_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14972").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14972_content");
			setTimeout(function () {
				window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14983_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14972 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14983_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14983_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj14983_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14983_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14983").trigger("obj14983_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14983) {
				console.warn("de-queueing event obj14983." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14983").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14983_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj15177_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15177_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15177").trigger("obj15177_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15177) {
				console.warn("de-queueing event obj15177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15177_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_15179();
function switchText_15179() {
	window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount = obj15177_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>5/7</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14972_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14972_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14972").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14972_content");
			setTimeout(function () {
				window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15177_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14972 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15177_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15177_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj15177_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15177_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15177").trigger("obj15177_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15177) {
				console.warn("de-queueing event obj15177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15177_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj15180_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15180_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15180").trigger("obj15180_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15180) {
				console.warn("de-queueing event obj15180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15180_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_15182();
function switchText_15182() {
	window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount = obj15180_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>6/7</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14972_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14972_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14972").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14972_content");
			setTimeout(function () {
				window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15180_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14972 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15180_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15180_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj15180_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15180_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15180").trigger("obj15180_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15180) {
				console.warn("de-queueing event obj15180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15180_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj15183_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15183_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15183").trigger("obj15183_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15183) {
				console.warn("de-queueing event obj15183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15183_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_15185();
function switchText_15185() {
	window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount = obj15183_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>7/7</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14972_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14972_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14972").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14972_content");
			setTimeout(function () {
				window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15183_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14972 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15183_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15183_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj15183_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15183_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15183").trigger("obj15183_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15183) {
				console.warn("de-queueing event obj15183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15183_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj14988_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14988_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14988").trigger("obj14988_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14988) {
				console.warn("de-queueing event obj14988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14988_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj14974 
incrementCounter_14990();
function incrementCounter_14990() {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = obj14988_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14974_counterValue;
	obj14974_counterValue = obj14974_counterValue + 1;
	if (! obj14974_counterCanExceedTargetValue && obj14974_counterValue > obj14974_counterTargetValue) {
		obj14974_counterValue = obj14974_counterTargetValue;
	}

	if (oldValue != obj14974_counterValue) {
		$("#obj14974").trigger('SCEventCounterValueChange');
		$("#obj14974").trigger('SCEventCounterIncrease');
		if (obj14974_counterValue == obj14974_counterTargetValue)
			$("#obj14974").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14988_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj14977 
incrementCounter_14991();
function incrementCounter_14991() {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = obj14988_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14977_counterValue;
	obj14977_counterValue = obj14977_counterValue + 1;
	if (! obj14977_counterCanExceedTargetValue && obj14977_counterValue > obj14977_counterTargetValue) {
		obj14977_counterValue = obj14977_counterTargetValue;
	}

	if (oldValue != obj14977_counterValue) {
		$("#obj14977").trigger('SCEventCounterValueChange');
		$("#obj14977").trigger('SCEventCounterIncrease');
		if (obj14977_counterValue == obj14977_counterTargetValue)
			$("#obj14977").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14988_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj14980 
incrementCounter_14992();
function incrementCounter_14992() {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = obj14988_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14980_counterValue;
	obj14980_counterValue = obj14980_counterValue + 1;
	if (! obj14980_counterCanExceedTargetValue && obj14980_counterValue > obj14980_counterTargetValue) {
		obj14980_counterValue = obj14980_counterTargetValue;
	}

	if (oldValue != obj14980_counterValue) {
		$("#obj14980").trigger('SCEventCounterValueChange');
		$("#obj14980").trigger('SCEventCounterIncrease');
		if (obj14980_counterValue == obj14980_counterTargetValue)
			$("#obj14980").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14988_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj14983 
incrementCounter_14993();
function incrementCounter_14993() {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = obj14988_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14983_counterValue;
	obj14983_counterValue = obj14983_counterValue + 1;
	if (! obj14983_counterCanExceedTargetValue && obj14983_counterValue > obj14983_counterTargetValue) {
		obj14983_counterValue = obj14983_counterTargetValue;
	}

	if (oldValue != obj14983_counterValue) {
		$("#obj14983").trigger('SCEventCounterValueChange');
		$("#obj14983").trigger('SCEventCounterIncrease');
		if (obj14983_counterValue == obj14983_counterTargetValue)
			$("#obj14983").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14988_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj15177 
incrementCounter_15207();
function incrementCounter_15207() {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = obj14988_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj15177_counterValue;
	obj15177_counterValue = obj15177_counterValue + 1;
	if (! obj15177_counterCanExceedTargetValue && obj15177_counterValue > obj15177_counterTargetValue) {
		obj15177_counterValue = obj15177_counterTargetValue;
	}

	if (oldValue != obj15177_counterValue) {
		$("#obj15177").trigger('SCEventCounterValueChange');
		$("#obj15177").trigger('SCEventCounterIncrease');
		if (obj15177_counterValue == obj15177_counterTargetValue)
			$("#obj15177").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14988_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj15180 
incrementCounter_15208();
function incrementCounter_15208() {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = obj14988_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj15180_counterValue;
	obj15180_counterValue = obj15180_counterValue + 1;
	if (! obj15180_counterCanExceedTargetValue && obj15180_counterValue > obj15180_counterTargetValue) {
		obj15180_counterValue = obj15180_counterTargetValue;
	}

	if (oldValue != obj15180_counterValue) {
		$("#obj15180").trigger('SCEventCounterValueChange');
		$("#obj15180").trigger('SCEventCounterIncrease');
		if (obj15180_counterValue == obj15180_counterTargetValue)
			$("#obj15180").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14988_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj15183 
incrementCounter_15209();
function incrementCounter_15209() {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = obj14988_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj15183_counterValue;
	obj15183_counterValue = obj15183_counterValue + 1;
	if (! obj15183_counterCanExceedTargetValue && obj15183_counterValue > obj15183_counterTargetValue) {
		obj15183_counterValue = obj15183_counterTargetValue;
	}

	if (oldValue != obj15183_counterValue) {
		$("#obj15183").trigger('SCEventCounterValueChange');
		$("#obj15183").trigger('SCEventCounterIncrease');
		if (obj15183_counterValue == obj15183_counterTargetValue)
			$("#obj15183").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14988_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj14988_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14988_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14988").trigger("obj14988_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14988) {
				console.warn("de-queueing event obj14988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14988_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj14988 
decrementCounter_14994();
function decrementCounter_14994() {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = obj14988_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14988_counterValue;
	obj14988_counterValue = obj14988_counterValue - 1;
	if (obj14988_counterValue < 0) {
		obj14988_counterValue = 0;
	}

	if (oldValue != obj14988_counterValue) {
		$("#obj14988").trigger('SCEventCounterValueChange');
		$("#obj14988").trigger('SCEventCounterDecrease');
		if (obj14988_counterValue == obj14988_counterTargetValue)
			$("#obj14988").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14988_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14988_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj14988_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14988_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14988").trigger("obj14988_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14988) {
				console.warn("de-queueing event obj14988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14988_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj15213_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15213_onTap_activeActionGroupIndex = -1;
		$("#obj15213").trigger("obj15213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15213) {
				console.warn("de-queueing event obj15213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15213_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15213 
hide_15216();
function hide_15216() {
	var selector = "#obj15213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15213_onTap_runningActionsCount = obj15213_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15216(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15213_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15213_onTap_activeActionGroupIndex = -1;
		$("#obj15213").trigger("obj15213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15213) {
				console.warn("de-queueing event obj15213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15213_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15215();
function playAudioFile_15215() {
	window.obj15213_onTap_runningActionsCount = obj15213_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15215")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15215");
			$("#obj_audio_playSoundFile15215").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup2();
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
				window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15213_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15213_onTap_activeActionGroupIndex = -1;
		$("#obj15213").trigger("obj15213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15213) {
				console.warn("de-queueing event obj15213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15213_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_15218();
function runjs_15218() {
	window.obj15213_onTap_runningActionsCount = obj15213_onTap_runningActionsCount + 1;


	$("#obj15194").css("background-color", "#0BB14B");
	
	setTimeout(function() {
		window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup3();
}
	}, 1);
}














};
obj15213_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15213_onTap_activeActionGroupIndex = -1;
		$("#obj15213").trigger("obj15213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15213) {
				console.warn("de-queueing event obj15213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15213_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14966 
incrementCounter_15217();
function incrementCounter_15217() {
	window.obj15213_onTap_runningActionsCount = obj15213_onTap_runningActionsCount + 1;


	var oldValue = obj14966_counterValue;
	obj14966_counterValue = obj14966_counterValue + 1;
	if (! obj14966_counterCanExceedTargetValue && obj14966_counterValue > obj14966_counterTargetValue) {
		obj14966_counterValue = obj14966_counterTargetValue;
	}

	if (oldValue != obj14966_counterValue) {
		$("#obj14966").trigger('SCEventCounterValueChange');
		$("#obj14966").trigger('SCEventCounterIncrease');
		if (obj14966_counterValue == obj14966_counterTargetValue)
			$("#obj14966").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj14988 
incrementCounter_15231();
function incrementCounter_15231() {
	window.obj15213_onTap_runningActionsCount = obj15213_onTap_runningActionsCount + 1;


	var oldValue = obj14988_counterValue;
	obj14988_counterValue = obj14988_counterValue + 1;
	if (! obj14988_counterCanExceedTargetValue && obj14988_counterValue > obj14988_counterTargetValue) {
		obj14988_counterValue = obj14988_counterTargetValue;
	}

	if (oldValue != obj14988_counterValue) {
		$("#obj14988").trigger('SCEventCounterValueChange');
		$("#obj14988").trigger('SCEventCounterIncrease');
		if (obj14988_counterValue == obj14988_counterTargetValue)
			$("#obj14988").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj15272 
incrementCounter_15413();
function incrementCounter_15413() {
	window.obj15213_onTap_runningActionsCount = obj15213_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj15270 
incrementCounter_15414();
function incrementCounter_15414() {
	window.obj15213_onTap_runningActionsCount = obj15213_onTap_runningActionsCount + 1;


	var oldValue = obj15270_counterValue;
	obj15270_counterValue = obj15270_counterValue + 1;
	if (! obj15270_counterCanExceedTargetValue && obj15270_counterValue > obj15270_counterTargetValue) {
		obj15270_counterValue = obj15270_counterTargetValue;
	}

	if (oldValue != obj15270_counterValue) {
		$("#obj15270").trigger('SCEventCounterValueChange');
		$("#obj15270").trigger('SCEventCounterIncrease');
		if (obj15270_counterValue == obj15270_counterTargetValue)
			$("#obj15270").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15213_onTap_runningActionsCount = window.obj15213_onTap_runningActionsCount - 1;

if (window.obj15213_onTap_runningActionsCount < 0) {
	window.obj15213_onTap_runningActionsCount = 0;
} else if (window.obj15213_onTap_runningActionsCount == 0) {
	obj15213_onTap_actionGroup4();
} }, 1);
}











};
obj15213_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15213_onTap_activeActionGroupIndex = -1;
		$("#obj15213").trigger("obj15213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15213) {
				console.warn("de-queueing event obj15213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15213_onTap_activeActionGroupIndex = 4;
	











































};
obj15219_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15219_onTap_activeActionGroupIndex = -1;
		$("#obj15219").trigger("obj15219_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15219) {
				console.warn("de-queueing event obj15219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15219_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15219 
hide_15221();
function hide_15221() {
	var selector = "#obj15219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15221(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15219_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15219_onTap_activeActionGroupIndex = -1;
		$("#obj15219").trigger("obj15219_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15219) {
				console.warn("de-queueing event obj15219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15219_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15222();
function playAudioFile_15222() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15222")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15222");
			$("#obj_audio_playSoundFile15222").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup2();
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
				window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15219_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15219_onTap_activeActionGroupIndex = -1;
		$("#obj15219").trigger("obj15219_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15219) {
				console.warn("de-queueing event obj15219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15219_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_15223();
function runjs_15223() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;


	$("#obj15229").css("background-color", "#F47920");
	
	setTimeout(function() {
		window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup3();
}
	}, 1);
}














};
obj15219_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15219_onTap_activeActionGroupIndex = -1;
		$("#obj15219").trigger("obj15219_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15219) {
				console.warn("de-queueing event obj15219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15219_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14966 
incrementCounter_15224();
function incrementCounter_15224() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;


	var oldValue = obj14966_counterValue;
	obj14966_counterValue = obj14966_counterValue + 1;
	if (! obj14966_counterCanExceedTargetValue && obj14966_counterValue > obj14966_counterTargetValue) {
		obj14966_counterValue = obj14966_counterTargetValue;
	}

	if (oldValue != obj14966_counterValue) {
		$("#obj14966").trigger('SCEventCounterValueChange');
		$("#obj14966").trigger('SCEventCounterIncrease');
		if (obj14966_counterValue == obj14966_counterTargetValue)
			$("#obj14966").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj15272 
incrementCounter_15415();
function incrementCounter_15415() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup4();
} }, 1);
}











};
obj15219_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15219_onTap_activeActionGroupIndex = -1;
		$("#obj15219").trigger("obj15219_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15219) {
				console.warn("de-queueing event obj15219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15219_onTap_activeActionGroupIndex = 4;
	











































};
obj15232_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15232_onTap_activeActionGroupIndex = -1;
		$("#obj15232").trigger("obj15232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15232) {
				console.warn("de-queueing event obj15232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15232_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15232 
hide_15234();
function hide_15234() {
	var selector = "#obj15232";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15232_onTap_runningActionsCount = obj15232_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15234(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15232_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15232_onTap_activeActionGroupIndex = -1;
		$("#obj15232").trigger("obj15232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15232) {
				console.warn("de-queueing event obj15232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15232_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15235();
function playAudioFile_15235() {
	window.obj15232_onTap_runningActionsCount = obj15232_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15235")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15235");
			$("#obj_audio_playSoundFile15235").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup2();
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
				window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15232_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15232_onTap_activeActionGroupIndex = -1;
		$("#obj15232").trigger("obj15232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15232) {
				console.warn("de-queueing event obj15232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15232_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_15236();
function runjs_15236() {
	window.obj15232_onTap_runningActionsCount = obj15232_onTap_runningActionsCount + 1;


	$("#obj15243").css("background-color", "#0BB14B");
	
	setTimeout(function() {
		window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup3();
}
	}, 1);
}














};
obj15232_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15232_onTap_activeActionGroupIndex = -1;
		$("#obj15232").trigger("obj15232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15232) {
				console.warn("de-queueing event obj15232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15232_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14966 
incrementCounter_15237();
function incrementCounter_15237() {
	window.obj15232_onTap_runningActionsCount = obj15232_onTap_runningActionsCount + 1;


	var oldValue = obj14966_counterValue;
	obj14966_counterValue = obj14966_counterValue + 1;
	if (! obj14966_counterCanExceedTargetValue && obj14966_counterValue > obj14966_counterTargetValue) {
		obj14966_counterValue = obj14966_counterTargetValue;
	}

	if (oldValue != obj14966_counterValue) {
		$("#obj14966").trigger('SCEventCounterValueChange');
		$("#obj14966").trigger('SCEventCounterIncrease');
		if (obj14966_counterValue == obj14966_counterTargetValue)
			$("#obj14966").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj14988 
incrementCounter_15238();
function incrementCounter_15238() {
	window.obj15232_onTap_runningActionsCount = obj15232_onTap_runningActionsCount + 1;


	var oldValue = obj14988_counterValue;
	obj14988_counterValue = obj14988_counterValue + 1;
	if (! obj14988_counterCanExceedTargetValue && obj14988_counterValue > obj14988_counterTargetValue) {
		obj14988_counterValue = obj14988_counterTargetValue;
	}

	if (oldValue != obj14988_counterValue) {
		$("#obj14988").trigger('SCEventCounterValueChange');
		$("#obj14988").trigger('SCEventCounterIncrease');
		if (obj14988_counterValue == obj14988_counterTargetValue)
			$("#obj14988").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj15272 
incrementCounter_15416();
function incrementCounter_15416() {
	window.obj15232_onTap_runningActionsCount = obj15232_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj15270 
incrementCounter_15417();
function incrementCounter_15417() {
	window.obj15232_onTap_runningActionsCount = obj15232_onTap_runningActionsCount + 1;


	var oldValue = obj15270_counterValue;
	obj15270_counterValue = obj15270_counterValue + 1;
	if (! obj15270_counterCanExceedTargetValue && obj15270_counterValue > obj15270_counterTargetValue) {
		obj15270_counterValue = obj15270_counterTargetValue;
	}

	if (oldValue != obj15270_counterValue) {
		$("#obj15270").trigger('SCEventCounterValueChange');
		$("#obj15270").trigger('SCEventCounterIncrease');
		if (obj15270_counterValue == obj15270_counterTargetValue)
			$("#obj15270").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15232_onTap_runningActionsCount = window.obj15232_onTap_runningActionsCount - 1;

if (window.obj15232_onTap_runningActionsCount < 0) {
	window.obj15232_onTap_runningActionsCount = 0;
} else if (window.obj15232_onTap_runningActionsCount == 0) {
	obj15232_onTap_actionGroup4();
} }, 1);
}











};
obj15232_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15232_onTap_activeActionGroupIndex = -1;
		$("#obj15232").trigger("obj15232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15232) {
				console.warn("de-queueing event obj15232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15232_onTap_activeActionGroupIndex = 4;
	











































};
obj15245_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15245_onTap_activeActionGroupIndex = -1;
		$("#obj15245").trigger("obj15245_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15245) {
				console.warn("de-queueing event obj15245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15245_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15245 
hide_15247();
function hide_15247() {
	var selector = "#obj15245";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15245_onTap_runningActionsCount = obj15245_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15247(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15245_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15245_onTap_activeActionGroupIndex = -1;
		$("#obj15245").trigger("obj15245_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15245) {
				console.warn("de-queueing event obj15245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15245_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15248();
function playAudioFile_15248() {
	window.obj15245_onTap_runningActionsCount = obj15245_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15248")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15248");
			$("#obj_audio_playSoundFile15248").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup2();
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
				window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15245_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15245_onTap_activeActionGroupIndex = -1;
		$("#obj15245").trigger("obj15245_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15245) {
				console.warn("de-queueing event obj15245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15245_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_15249();
function runjs_15249() {
	window.obj15245_onTap_runningActionsCount = obj15245_onTap_runningActionsCount + 1;


	$("#obj15256").css("background-color", "#0BB14B");
	
	setTimeout(function() {
		window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup3();
}
	}, 1);
}














};
obj15245_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15245_onTap_activeActionGroupIndex = -1;
		$("#obj15245").trigger("obj15245_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15245) {
				console.warn("de-queueing event obj15245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15245_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14966 
incrementCounter_15250();
function incrementCounter_15250() {
	window.obj15245_onTap_runningActionsCount = obj15245_onTap_runningActionsCount + 1;


	var oldValue = obj14966_counterValue;
	obj14966_counterValue = obj14966_counterValue + 1;
	if (! obj14966_counterCanExceedTargetValue && obj14966_counterValue > obj14966_counterTargetValue) {
		obj14966_counterValue = obj14966_counterTargetValue;
	}

	if (oldValue != obj14966_counterValue) {
		$("#obj14966").trigger('SCEventCounterValueChange');
		$("#obj14966").trigger('SCEventCounterIncrease');
		if (obj14966_counterValue == obj14966_counterTargetValue)
			$("#obj14966").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj14988 
incrementCounter_15251();
function incrementCounter_15251() {
	window.obj15245_onTap_runningActionsCount = obj15245_onTap_runningActionsCount + 1;


	var oldValue = obj14988_counterValue;
	obj14988_counterValue = obj14988_counterValue + 1;
	if (! obj14988_counterCanExceedTargetValue && obj14988_counterValue > obj14988_counterTargetValue) {
		obj14988_counterValue = obj14988_counterTargetValue;
	}

	if (oldValue != obj14988_counterValue) {
		$("#obj14988").trigger('SCEventCounterValueChange');
		$("#obj14988").trigger('SCEventCounterIncrease');
		if (obj14988_counterValue == obj14988_counterTargetValue)
			$("#obj14988").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj15270 
incrementCounter_15418();
function incrementCounter_15418() {
	window.obj15245_onTap_runningActionsCount = obj15245_onTap_runningActionsCount + 1;


	var oldValue = obj15270_counterValue;
	obj15270_counterValue = obj15270_counterValue + 1;
	if (! obj15270_counterCanExceedTargetValue && obj15270_counterValue > obj15270_counterTargetValue) {
		obj15270_counterValue = obj15270_counterTargetValue;
	}

	if (oldValue != obj15270_counterValue) {
		$("#obj15270").trigger('SCEventCounterValueChange');
		$("#obj15270").trigger('SCEventCounterIncrease');
		if (obj15270_counterValue == obj15270_counterTargetValue)
			$("#obj15270").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj15272 
incrementCounter_15419();
function incrementCounter_15419() {
	window.obj15245_onTap_runningActionsCount = obj15245_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15245_onTap_runningActionsCount = window.obj15245_onTap_runningActionsCount - 1;

if (window.obj15245_onTap_runningActionsCount < 0) {
	window.obj15245_onTap_runningActionsCount = 0;
} else if (window.obj15245_onTap_runningActionsCount == 0) {
	obj15245_onTap_actionGroup4();
} }, 1);
}











};
obj15245_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15245_onTap_activeActionGroupIndex = -1;
		$("#obj15245").trigger("obj15245_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15245) {
				console.warn("de-queueing event obj15245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15245_onTap_activeActionGroupIndex = 4;
	











































};
obj15258_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15258_onTap_activeActionGroupIndex = -1;
		$("#obj15258").trigger("obj15258_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15258) {
				console.warn("de-queueing event obj15258." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15258").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15258_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15258 
hide_15260();
function hide_15260() {
	var selector = "#obj15258";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15258_onTap_runningActionsCount = obj15258_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15258_onTap_runningActionsCount = window.obj15258_onTap_runningActionsCount - 1;

if (window.obj15258_onTap_runningActionsCount < 0) {
	window.obj15258_onTap_runningActionsCount = 0;
} else if (window.obj15258_onTap_runningActionsCount == 0) {
	obj15258_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15260(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15258_onTap_runningActionsCount = window.obj15258_onTap_runningActionsCount - 1;

if (window.obj15258_onTap_runningActionsCount < 0) {
	window.obj15258_onTap_runningActionsCount = 0;
} else if (window.obj15258_onTap_runningActionsCount == 0) {
	obj15258_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15258_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15258_onTap_activeActionGroupIndex = -1;
		$("#obj15258").trigger("obj15258_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15258) {
				console.warn("de-queueing event obj15258." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15258").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15258_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15261();
function playAudioFile_15261() {
	window.obj15258_onTap_runningActionsCount = obj15258_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15261")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15261");
			$("#obj_audio_playSoundFile15261").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15258_onTap_runningActionsCount = window.obj15258_onTap_runningActionsCount - 1;

if (window.obj15258_onTap_runningActionsCount < 0) {
	window.obj15258_onTap_runningActionsCount = 0;
} else if (window.obj15258_onTap_runningActionsCount == 0) {
	obj15258_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15258_onTap_runningActionsCount = window.obj15258_onTap_runningActionsCount - 1;

if (window.obj15258_onTap_runningActionsCount < 0) {
	window.obj15258_onTap_runningActionsCount = 0;
} else if (window.obj15258_onTap_runningActionsCount == 0) {
	obj15258_onTap_actionGroup2();
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
				window.obj15258_onTap_runningActionsCount = window.obj15258_onTap_runningActionsCount - 1;

if (window.obj15258_onTap_runningActionsCount < 0) {
	window.obj15258_onTap_runningActionsCount = 0;
} else if (window.obj15258_onTap_runningActionsCount == 0) {
	obj15258_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15258_onTap_runningActionsCount = window.obj15258_onTap_runningActionsCount - 1;

if (window.obj15258_onTap_runningActionsCount < 0) {
	window.obj15258_onTap_runningActionsCount = 0;
} else if (window.obj15258_onTap_runningActionsCount == 0) {
	obj15258_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15258_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15258_onTap_activeActionGroupIndex = -1;
		$("#obj15258").trigger("obj15258_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15258) {
				console.warn("de-queueing event obj15258." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15258").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15258_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_15262();
function runjs_15262() {
	window.obj15258_onTap_runningActionsCount = obj15258_onTap_runningActionsCount + 1;


	$("#obj15268").css("background-color", "#F47920");
	
	setTimeout(function() {
		window.obj15258_onTap_runningActionsCount = window.obj15258_onTap_runningActionsCount - 1;

if (window.obj15258_onTap_runningActionsCount < 0) {
	window.obj15258_onTap_runningActionsCount = 0;
} else if (window.obj15258_onTap_runningActionsCount == 0) {
	obj15258_onTap_actionGroup3();
}
	}, 1);
}














};
obj15258_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15258_onTap_activeActionGroupIndex = -1;
		$("#obj15258").trigger("obj15258_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15258) {
				console.warn("de-queueing event obj15258." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15258").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15258_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14966 
incrementCounter_15263();
function incrementCounter_15263() {
	window.obj15258_onTap_runningActionsCount = obj15258_onTap_runningActionsCount + 1;


	var oldValue = obj14966_counterValue;
	obj14966_counterValue = obj14966_counterValue + 1;
	if (! obj14966_counterCanExceedTargetValue && obj14966_counterValue > obj14966_counterTargetValue) {
		obj14966_counterValue = obj14966_counterTargetValue;
	}

	if (oldValue != obj14966_counterValue) {
		$("#obj14966").trigger('SCEventCounterValueChange');
		$("#obj14966").trigger('SCEventCounterIncrease');
		if (obj14966_counterValue == obj14966_counterTargetValue)
			$("#obj14966").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15258_onTap_runningActionsCount = window.obj15258_onTap_runningActionsCount - 1;

if (window.obj15258_onTap_runningActionsCount < 0) {
	window.obj15258_onTap_runningActionsCount = 0;
} else if (window.obj15258_onTap_runningActionsCount == 0) {
	obj15258_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj15272 
incrementCounter_15420();
function incrementCounter_15420() {
	window.obj15258_onTap_runningActionsCount = obj15258_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15258_onTap_runningActionsCount = window.obj15258_onTap_runningActionsCount - 1;

if (window.obj15258_onTap_runningActionsCount < 0) {
	window.obj15258_onTap_runningActionsCount = 0;
} else if (window.obj15258_onTap_runningActionsCount == 0) {
	obj15258_onTap_actionGroup4();
} }, 1);
}











};
obj15258_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15258_onTap_activeActionGroupIndex = -1;
		$("#obj15258").trigger("obj15258_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15258) {
				console.warn("de-queueing event obj15258." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15258").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15258_onTap_activeActionGroupIndex = 4;
	











































};
obj15270_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15270_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15270").trigger("obj15270_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15270) {
				console.warn("de-queueing event obj15270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15270_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_15400();
function wait_15400() {
	window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount = obj15270_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15270_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1500);
}


























};
obj15270_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15270_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15270").trigger("obj15270_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15270) {
				console.warn("de-queueing event obj15270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15270_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_15401();
function goToPage_15401() {
	window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount = obj15270_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor384")[0].click();
	window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15270_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15270_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj15270_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15270_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15270").trigger("obj15270_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15270) {
				console.warn("de-queueing event obj15270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15270_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj15272_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15272_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15272").trigger("obj15272_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15272) {
				console.warn("de-queueing event obj15272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15272_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_15398();
function wait_15398() {
	window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount = obj15272_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15272_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 2000);
}


























};
obj15272_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15272_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15272").trigger("obj15272_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15272) {
				console.warn("de-queueing event obj15272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15272_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_15399();
function goToPage_15399() {
	window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount = obj15272_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor385")[0].click();
	window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15272_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15272_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj15272_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15272_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15272").trigger("obj15272_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15272) {
				console.warn("de-queueing event obj15272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15272_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj15347_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15347_onTap_activeActionGroupIndex = -1;
		$("#obj15347").trigger("obj15347_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15347) {
				console.warn("de-queueing event obj15347." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15347").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15347_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj15360 
incrementCounter_15352();
function incrementCounter_15352() {
	window.obj15347_onTap_runningActionsCount = obj15347_onTap_runningActionsCount + 1;


	var oldValue = obj15360_counterValue;
	obj15360_counterValue = obj15360_counterValue + 1;
	if (! obj15360_counterCanExceedTargetValue && obj15360_counterValue > obj15360_counterTargetValue) {
		obj15360_counterValue = obj15360_counterTargetValue;
	}

	if (oldValue != obj15360_counterValue) {
		$("#obj15360").trigger('SCEventCounterValueChange');
		$("#obj15360").trigger('SCEventCounterIncrease');
		if (obj15360_counterValue == obj15360_counterTargetValue)
			$("#obj15360").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup1();
} }, 1);
}











};
obj15347_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15347_onTap_activeActionGroupIndex = -1;
		$("#obj15347").trigger("obj15347_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15347) {
				console.warn("de-queueing event obj15347." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15347").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15347_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj15347 
hide_15349();
function hide_15349() {
	var selector = "#obj15347";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15347_onTap_runningActionsCount = obj15347_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15349(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15347_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15347_onTap_activeActionGroupIndex = -1;
		$("#obj15347").trigger("obj15347_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15347) {
				console.warn("de-queueing event obj15347." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15347").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15347_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_15350();
function playAudioFile_15350() {
	window.obj15347_onTap_runningActionsCount = obj15347_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15350")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15350");
			$("#obj_audio_playSoundFile15350").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup3();
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
				window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj15347_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15347_onTap_activeActionGroupIndex = -1;
		$("#obj15347").trigger("obj15347_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15347) {
				console.warn("de-queueing event obj15347." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15347").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15347_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_15351();
function runjs_15351() {
	window.obj15347_onTap_runningActionsCount = obj15347_onTap_runningActionsCount + 1;


	$("#obj15358").css("background-color", "#0BB14B");
	
	setTimeout(function() {
		window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup4();
}
	}, 1);
}














};
obj15347_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15347_onTap_activeActionGroupIndex = -1;
		$("#obj15347").trigger("obj15347_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15347) {
				console.warn("de-queueing event obj15347." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15347").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15347_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj14988 
incrementCounter_15353();
function incrementCounter_15353() {
	window.obj15347_onTap_runningActionsCount = obj15347_onTap_runningActionsCount + 1;


	var oldValue = obj14988_counterValue;
	obj14988_counterValue = obj14988_counterValue + 1;
	if (! obj14988_counterCanExceedTargetValue && obj14988_counterValue > obj14988_counterTargetValue) {
		obj14988_counterValue = obj14988_counterTargetValue;
	}

	if (oldValue != obj14988_counterValue) {
		$("#obj14988").trigger('SCEventCounterValueChange');
		$("#obj14988").trigger('SCEventCounterIncrease');
		if (obj14988_counterValue == obj14988_counterTargetValue)
			$("#obj14988").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj15270 
incrementCounter_15402();
function incrementCounter_15402() {
	window.obj15347_onTap_runningActionsCount = obj15347_onTap_runningActionsCount + 1;


	var oldValue = obj15270_counterValue;
	obj15270_counterValue = obj15270_counterValue + 1;
	if (! obj15270_counterCanExceedTargetValue && obj15270_counterValue > obj15270_counterTargetValue) {
		obj15270_counterValue = obj15270_counterTargetValue;
	}

	if (oldValue != obj15270_counterValue) {
		$("#obj15270").trigger('SCEventCounterValueChange');
		$("#obj15270").trigger('SCEventCounterIncrease');
		if (obj15270_counterValue == obj15270_counterTargetValue)
			$("#obj15270").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj15272 
incrementCounter_15403();
function incrementCounter_15403() {
	window.obj15347_onTap_runningActionsCount = obj15347_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15347_onTap_runningActionsCount = window.obj15347_onTap_runningActionsCount - 1;

if (window.obj15347_onTap_runningActionsCount < 0) {
	window.obj15347_onTap_runningActionsCount = 0;
} else if (window.obj15347_onTap_runningActionsCount == 0) {
	obj15347_onTap_actionGroup5();
} }, 1);
}











};
obj15347_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15347_onTap_activeActionGroupIndex = -1;
		$("#obj15347").trigger("obj15347_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15347) {
				console.warn("de-queueing event obj15347." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15347").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15347_onTap_activeActionGroupIndex = 5;
	











































};
obj15335_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15335_onTap_activeActionGroupIndex = -1;
		$("#obj15335").trigger("obj15335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15335) {
				console.warn("de-queueing event obj15335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15335_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj15360 
incrementCounter_15340();
function incrementCounter_15340() {
	window.obj15335_onTap_runningActionsCount = obj15335_onTap_runningActionsCount + 1;


	var oldValue = obj15360_counterValue;
	obj15360_counterValue = obj15360_counterValue + 1;
	if (! obj15360_counterCanExceedTargetValue && obj15360_counterValue > obj15360_counterTargetValue) {
		obj15360_counterValue = obj15360_counterTargetValue;
	}

	if (oldValue != obj15360_counterValue) {
		$("#obj15360").trigger('SCEventCounterValueChange');
		$("#obj15360").trigger('SCEventCounterIncrease');
		if (obj15360_counterValue == obj15360_counterTargetValue)
			$("#obj15360").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup1();
} }, 1);
}











};
obj15335_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15335_onTap_activeActionGroupIndex = -1;
		$("#obj15335").trigger("obj15335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15335) {
				console.warn("de-queueing event obj15335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15335_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj15335 
hide_15337();
function hide_15337() {
	var selector = "#obj15335";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15335_onTap_runningActionsCount = obj15335_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15337(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15335_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15335_onTap_activeActionGroupIndex = -1;
		$("#obj15335").trigger("obj15335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15335) {
				console.warn("de-queueing event obj15335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15335_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_15338();
function playAudioFile_15338() {
	window.obj15335_onTap_runningActionsCount = obj15335_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15338")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15338");
			$("#obj_audio_playSoundFile15338").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup3();
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
				window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj15335_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15335_onTap_activeActionGroupIndex = -1;
		$("#obj15335").trigger("obj15335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15335) {
				console.warn("de-queueing event obj15335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15335_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_15339();
function runjs_15339() {
	window.obj15335_onTap_runningActionsCount = obj15335_onTap_runningActionsCount + 1;


	$("#obj15345").css("background-color", "#0BB14B");
	
	setTimeout(function() {
		window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup4();
}
	}, 1);
}














};
obj15335_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15335_onTap_activeActionGroupIndex = -1;
		$("#obj15335").trigger("obj15335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15335) {
				console.warn("de-queueing event obj15335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15335_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj14988 
incrementCounter_15382();
function incrementCounter_15382() {
	window.obj15335_onTap_runningActionsCount = obj15335_onTap_runningActionsCount + 1;


	var oldValue = obj14988_counterValue;
	obj14988_counterValue = obj14988_counterValue + 1;
	if (! obj14988_counterCanExceedTargetValue && obj14988_counterValue > obj14988_counterTargetValue) {
		obj14988_counterValue = obj14988_counterTargetValue;
	}

	if (oldValue != obj14988_counterValue) {
		$("#obj14988").trigger('SCEventCounterValueChange');
		$("#obj14988").trigger('SCEventCounterIncrease');
		if (obj14988_counterValue == obj14988_counterTargetValue)
			$("#obj14988").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj15270 
incrementCounter_15404();
function incrementCounter_15404() {
	window.obj15335_onTap_runningActionsCount = obj15335_onTap_runningActionsCount + 1;


	var oldValue = obj15270_counterValue;
	obj15270_counterValue = obj15270_counterValue + 1;
	if (! obj15270_counterCanExceedTargetValue && obj15270_counterValue > obj15270_counterTargetValue) {
		obj15270_counterValue = obj15270_counterTargetValue;
	}

	if (oldValue != obj15270_counterValue) {
		$("#obj15270").trigger('SCEventCounterValueChange');
		$("#obj15270").trigger('SCEventCounterIncrease');
		if (obj15270_counterValue == obj15270_counterTargetValue)
			$("#obj15270").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj15272 
incrementCounter_15405();
function incrementCounter_15405() {
	window.obj15335_onTap_runningActionsCount = obj15335_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15335_onTap_runningActionsCount = window.obj15335_onTap_runningActionsCount - 1;

if (window.obj15335_onTap_runningActionsCount < 0) {
	window.obj15335_onTap_runningActionsCount = 0;
} else if (window.obj15335_onTap_runningActionsCount == 0) {
	obj15335_onTap_actionGroup5();
} }, 1);
}











};
obj15335_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15335_onTap_activeActionGroupIndex = -1;
		$("#obj15335").trigger("obj15335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15335) {
				console.warn("de-queueing event obj15335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15335_onTap_activeActionGroupIndex = 5;
	











































};
obj15322_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15322_onTap_activeActionGroupIndex = -1;
		$("#obj15322").trigger("obj15322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15322) {
				console.warn("de-queueing event obj15322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15322_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj15360 
incrementCounter_15327();
function incrementCounter_15327() {
	window.obj15322_onTap_runningActionsCount = obj15322_onTap_runningActionsCount + 1;


	var oldValue = obj15360_counterValue;
	obj15360_counterValue = obj15360_counterValue + 1;
	if (! obj15360_counterCanExceedTargetValue && obj15360_counterValue > obj15360_counterTargetValue) {
		obj15360_counterValue = obj15360_counterTargetValue;
	}

	if (oldValue != obj15360_counterValue) {
		$("#obj15360").trigger('SCEventCounterValueChange');
		$("#obj15360").trigger('SCEventCounterIncrease');
		if (obj15360_counterValue == obj15360_counterTargetValue)
			$("#obj15360").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15322_onTap_runningActionsCount = window.obj15322_onTap_runningActionsCount - 1;

if (window.obj15322_onTap_runningActionsCount < 0) {
	window.obj15322_onTap_runningActionsCount = 0;
} else if (window.obj15322_onTap_runningActionsCount == 0) {
	obj15322_onTap_actionGroup1();
} }, 1);
}











};
obj15322_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15322_onTap_activeActionGroupIndex = -1;
		$("#obj15322").trigger("obj15322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15322) {
				console.warn("de-queueing event obj15322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15322_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj15322 
hide_15324();
function hide_15324() {
	var selector = "#obj15322";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15322_onTap_runningActionsCount = obj15322_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15322_onTap_runningActionsCount = window.obj15322_onTap_runningActionsCount - 1;

if (window.obj15322_onTap_runningActionsCount < 0) {
	window.obj15322_onTap_runningActionsCount = 0;
} else if (window.obj15322_onTap_runningActionsCount == 0) {
	obj15322_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15324(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15322_onTap_runningActionsCount = window.obj15322_onTap_runningActionsCount - 1;

if (window.obj15322_onTap_runningActionsCount < 0) {
	window.obj15322_onTap_runningActionsCount = 0;
} else if (window.obj15322_onTap_runningActionsCount == 0) {
	obj15322_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15322_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15322_onTap_activeActionGroupIndex = -1;
		$("#obj15322").trigger("obj15322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15322) {
				console.warn("de-queueing event obj15322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15322_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_15325();
function playAudioFile_15325() {
	window.obj15322_onTap_runningActionsCount = obj15322_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15325")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15325");
			$("#obj_audio_playSoundFile15325").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15322_onTap_runningActionsCount = window.obj15322_onTap_runningActionsCount - 1;

if (window.obj15322_onTap_runningActionsCount < 0) {
	window.obj15322_onTap_runningActionsCount = 0;
} else if (window.obj15322_onTap_runningActionsCount == 0) {
	obj15322_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15322_onTap_runningActionsCount = window.obj15322_onTap_runningActionsCount - 1;

if (window.obj15322_onTap_runningActionsCount < 0) {
	window.obj15322_onTap_runningActionsCount = 0;
} else if (window.obj15322_onTap_runningActionsCount == 0) {
	obj15322_onTap_actionGroup3();
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
				window.obj15322_onTap_runningActionsCount = window.obj15322_onTap_runningActionsCount - 1;

if (window.obj15322_onTap_runningActionsCount < 0) {
	window.obj15322_onTap_runningActionsCount = 0;
} else if (window.obj15322_onTap_runningActionsCount == 0) {
	obj15322_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj15322_onTap_runningActionsCount = window.obj15322_onTap_runningActionsCount - 1;

if (window.obj15322_onTap_runningActionsCount < 0) {
	window.obj15322_onTap_runningActionsCount = 0;
} else if (window.obj15322_onTap_runningActionsCount == 0) {
	obj15322_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj15322_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15322_onTap_activeActionGroupIndex = -1;
		$("#obj15322").trigger("obj15322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15322) {
				console.warn("de-queueing event obj15322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15322_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_15326();
function runjs_15326() {
	window.obj15322_onTap_runningActionsCount = obj15322_onTap_runningActionsCount + 1;


	$("#obj15333").css("background-color", "#F47920");
	
	setTimeout(function() {
		window.obj15322_onTap_runningActionsCount = window.obj15322_onTap_runningActionsCount - 1;

if (window.obj15322_onTap_runningActionsCount < 0) {
	window.obj15322_onTap_runningActionsCount = 0;
} else if (window.obj15322_onTap_runningActionsCount == 0) {
	obj15322_onTap_actionGroup4();
}
	}, 1);
}














};
obj15322_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15322_onTap_activeActionGroupIndex = -1;
		$("#obj15322").trigger("obj15322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15322) {
				console.warn("de-queueing event obj15322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15322_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj15272 
incrementCounter_15408();
function incrementCounter_15408() {
	window.obj15322_onTap_runningActionsCount = obj15322_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15322_onTap_runningActionsCount = window.obj15322_onTap_runningActionsCount - 1;

if (window.obj15322_onTap_runningActionsCount < 0) {
	window.obj15322_onTap_runningActionsCount = 0;
} else if (window.obj15322_onTap_runningActionsCount == 0) {
	obj15322_onTap_actionGroup5();
} }, 1);
}











};
obj15322_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15322_onTap_activeActionGroupIndex = -1;
		$("#obj15322").trigger("obj15322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15322) {
				console.warn("de-queueing event obj15322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15322_onTap_activeActionGroupIndex = 5;
	











































};
obj15309_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15309_onTap_activeActionGroupIndex = -1;
		$("#obj15309").trigger("obj15309_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15309) {
				console.warn("de-queueing event obj15309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15309_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj15360 
incrementCounter_15314();
function incrementCounter_15314() {
	window.obj15309_onTap_runningActionsCount = obj15309_onTap_runningActionsCount + 1;


	var oldValue = obj15360_counterValue;
	obj15360_counterValue = obj15360_counterValue + 1;
	if (! obj15360_counterCanExceedTargetValue && obj15360_counterValue > obj15360_counterTargetValue) {
		obj15360_counterValue = obj15360_counterTargetValue;
	}

	if (oldValue != obj15360_counterValue) {
		$("#obj15360").trigger('SCEventCounterValueChange');
		$("#obj15360").trigger('SCEventCounterIncrease');
		if (obj15360_counterValue == obj15360_counterTargetValue)
			$("#obj15360").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup1();
} }, 1);
}











};
obj15309_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15309_onTap_activeActionGroupIndex = -1;
		$("#obj15309").trigger("obj15309_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15309) {
				console.warn("de-queueing event obj15309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15309_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj15309 
hide_15311();
function hide_15311() {
	var selector = "#obj15309";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15309_onTap_runningActionsCount = obj15309_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15311(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15309_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15309_onTap_activeActionGroupIndex = -1;
		$("#obj15309").trigger("obj15309_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15309) {
				console.warn("de-queueing event obj15309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15309_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_15312();
function playAudioFile_15312() {
	window.obj15309_onTap_runningActionsCount = obj15309_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15312")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15312");
			$("#obj_audio_playSoundFile15312").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup3();
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
				window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj15309_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15309_onTap_activeActionGroupIndex = -1;
		$("#obj15309").trigger("obj15309_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15309) {
				console.warn("de-queueing event obj15309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15309_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_15313();
function runjs_15313() {
	window.obj15309_onTap_runningActionsCount = obj15309_onTap_runningActionsCount + 1;


	$("#obj15320").css("background-color", "#0BB14B");
	
	setTimeout(function() {
		window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup4();
}
	}, 1);
}














};
obj15309_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15309_onTap_activeActionGroupIndex = -1;
		$("#obj15309").trigger("obj15309_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15309) {
				console.warn("de-queueing event obj15309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15309_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj14988 
incrementCounter_15315();
function incrementCounter_15315() {
	window.obj15309_onTap_runningActionsCount = obj15309_onTap_runningActionsCount + 1;


	var oldValue = obj14988_counterValue;
	obj14988_counterValue = obj14988_counterValue + 1;
	if (! obj14988_counterCanExceedTargetValue && obj14988_counterValue > obj14988_counterTargetValue) {
		obj14988_counterValue = obj14988_counterTargetValue;
	}

	if (oldValue != obj14988_counterValue) {
		$("#obj14988").trigger('SCEventCounterValueChange');
		$("#obj14988").trigger('SCEventCounterIncrease');
		if (obj14988_counterValue == obj14988_counterTargetValue)
			$("#obj14988").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj15270 
incrementCounter_15406();
function incrementCounter_15406() {
	window.obj15309_onTap_runningActionsCount = obj15309_onTap_runningActionsCount + 1;


	var oldValue = obj15270_counterValue;
	obj15270_counterValue = obj15270_counterValue + 1;
	if (! obj15270_counterCanExceedTargetValue && obj15270_counterValue > obj15270_counterTargetValue) {
		obj15270_counterValue = obj15270_counterTargetValue;
	}

	if (oldValue != obj15270_counterValue) {
		$("#obj15270").trigger('SCEventCounterValueChange');
		$("#obj15270").trigger('SCEventCounterIncrease');
		if (obj15270_counterValue == obj15270_counterTargetValue)
			$("#obj15270").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj15272 
incrementCounter_15407();
function incrementCounter_15407() {
	window.obj15309_onTap_runningActionsCount = obj15309_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15309_onTap_runningActionsCount = window.obj15309_onTap_runningActionsCount - 1;

if (window.obj15309_onTap_runningActionsCount < 0) {
	window.obj15309_onTap_runningActionsCount = 0;
} else if (window.obj15309_onTap_runningActionsCount == 0) {
	obj15309_onTap_actionGroup5();
} }, 1);
}











};
obj15309_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15309_onTap_activeActionGroupIndex = -1;
		$("#obj15309").trigger("obj15309_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15309) {
				console.warn("de-queueing event obj15309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15309_onTap_activeActionGroupIndex = 5;
	











































};
obj15297_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15297_onTap_activeActionGroupIndex = -1;
		$("#obj15297").trigger("obj15297_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15297) {
				console.warn("de-queueing event obj15297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15297_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj15360 
incrementCounter_15302();
function incrementCounter_15302() {
	window.obj15297_onTap_runningActionsCount = obj15297_onTap_runningActionsCount + 1;


	var oldValue = obj15360_counterValue;
	obj15360_counterValue = obj15360_counterValue + 1;
	if (! obj15360_counterCanExceedTargetValue && obj15360_counterValue > obj15360_counterTargetValue) {
		obj15360_counterValue = obj15360_counterTargetValue;
	}

	if (oldValue != obj15360_counterValue) {
		$("#obj15360").trigger('SCEventCounterValueChange');
		$("#obj15360").trigger('SCEventCounterIncrease');
		if (obj15360_counterValue == obj15360_counterTargetValue)
			$("#obj15360").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup1();
} }, 1);
}











};
obj15297_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15297_onTap_activeActionGroupIndex = -1;
		$("#obj15297").trigger("obj15297_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15297) {
				console.warn("de-queueing event obj15297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15297_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj15297 
hide_15299();
function hide_15299() {
	var selector = "#obj15297";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15297_onTap_runningActionsCount = obj15297_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15299(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15297_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15297_onTap_activeActionGroupIndex = -1;
		$("#obj15297").trigger("obj15297_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15297) {
				console.warn("de-queueing event obj15297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15297_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_15300();
function playAudioFile_15300() {
	window.obj15297_onTap_runningActionsCount = obj15297_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15300")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15300");
			$("#obj_audio_playSoundFile15300").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup3();
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
				window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj15297_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15297_onTap_activeActionGroupIndex = -1;
		$("#obj15297").trigger("obj15297_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15297) {
				console.warn("de-queueing event obj15297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15297_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_15301();
function runjs_15301() {
	window.obj15297_onTap_runningActionsCount = obj15297_onTap_runningActionsCount + 1;


	$("#obj15307").css("background-color", "#0BB14B");
	
	setTimeout(function() {
		window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup4();
}
	}, 1);
}














};
obj15297_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15297_onTap_activeActionGroupIndex = -1;
		$("#obj15297").trigger("obj15297_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15297) {
				console.warn("de-queueing event obj15297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15297_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj14988 
incrementCounter_15409();
function incrementCounter_15409() {
	window.obj15297_onTap_runningActionsCount = obj15297_onTap_runningActionsCount + 1;


	var oldValue = obj14988_counterValue;
	obj14988_counterValue = obj14988_counterValue + 1;
	if (! obj14988_counterCanExceedTargetValue && obj14988_counterValue > obj14988_counterTargetValue) {
		obj14988_counterValue = obj14988_counterTargetValue;
	}

	if (oldValue != obj14988_counterValue) {
		$("#obj14988").trigger('SCEventCounterValueChange');
		$("#obj14988").trigger('SCEventCounterIncrease');
		if (obj14988_counterValue == obj14988_counterTargetValue)
			$("#obj14988").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj15272 
incrementCounter_15410();
function incrementCounter_15410() {
	window.obj15297_onTap_runningActionsCount = obj15297_onTap_runningActionsCount + 1;


	var oldValue = obj15272_counterValue;
	obj15272_counterValue = obj15272_counterValue + 1;
	if (! obj15272_counterCanExceedTargetValue && obj15272_counterValue > obj15272_counterTargetValue) {
		obj15272_counterValue = obj15272_counterTargetValue;
	}

	if (oldValue != obj15272_counterValue) {
		$("#obj15272").trigger('SCEventCounterValueChange');
		$("#obj15272").trigger('SCEventCounterIncrease');
		if (obj15272_counterValue == obj15272_counterTargetValue)
			$("#obj15272").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj15270 
incrementCounter_15412();
function incrementCounter_15412() {
	window.obj15297_onTap_runningActionsCount = obj15297_onTap_runningActionsCount + 1;


	var oldValue = obj15270_counterValue;
	obj15270_counterValue = obj15270_counterValue + 1;
	if (! obj15270_counterCanExceedTargetValue && obj15270_counterValue > obj15270_counterTargetValue) {
		obj15270_counterValue = obj15270_counterTargetValue;
	}

	if (oldValue != obj15270_counterValue) {
		$("#obj15270").trigger('SCEventCounterValueChange');
		$("#obj15270").trigger('SCEventCounterIncrease');
		if (obj15270_counterValue == obj15270_counterTargetValue)
			$("#obj15270").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15297_onTap_runningActionsCount = window.obj15297_onTap_runningActionsCount - 1;

if (window.obj15297_onTap_runningActionsCount < 0) {
	window.obj15297_onTap_runningActionsCount = 0;
} else if (window.obj15297_onTap_runningActionsCount == 0) {
	obj15297_onTap_actionGroup5();
} }, 1);
}











};
obj15297_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15297_onTap_activeActionGroupIndex = -1;
		$("#obj15297").trigger("obj15297_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15297) {
				console.warn("de-queueing event obj15297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15297_onTap_activeActionGroupIndex = 5;
	











































};
obj15360_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15360_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15360").trigger("obj15360_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15360) {
				console.warn("de-queueing event obj15360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15360_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15274
(function(){
	window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount = obj15360_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15274";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15360_SCEventCounterReachedTargetValue_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15360_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15360_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15360_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15360_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15360").trigger("obj15360_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15360) {
				console.warn("de-queueing event obj15360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15360_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




































































































/*
 *
 *   obj14963: Event Touch Down
 *
 */

$("#obj14963").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14963_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14963_onTap is still running");
	return;
}
var obj14963_onTap_runningActionsCount = 0;
var obj14963_onTap_loopCount = 0;
obj14963_onTap_actionGroup0();
});



























/*
 *
 *   obj14966: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14966").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14966_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14966_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14966_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14966_SCEventCounterReachedTargetValue_loopCount = 0;
obj14966_SCEventCounterReachedTargetValue_actionGroup0();
});
























































/*
 *
 *   obj14974: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14974").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14974_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14974_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14974_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14974_SCEventCounterReachedTargetValue_loopCount = 0;
obj14974_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj14977: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14977").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14977_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14977_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14977_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14977_SCEventCounterReachedTargetValue_loopCount = 0;
obj14977_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj14980: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14980").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14980_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14980_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14980_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14980_SCEventCounterReachedTargetValue_loopCount = 0;
obj14980_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj14983: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14983").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14983_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14983_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14983_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14983_SCEventCounterReachedTargetValue_loopCount = 0;
obj14983_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj15177: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj15177").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15177_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15177_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj15177_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15177_SCEventCounterReachedTargetValue_loopCount = 0;
obj15177_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj15180: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj15180").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15180_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15180_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj15180_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15180_SCEventCounterReachedTargetValue_loopCount = 0;
obj15180_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj15183: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj15183").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15183_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15183_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj15183_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15183_SCEventCounterReachedTargetValue_loopCount = 0;
obj15183_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj14988: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14988").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14988_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14988_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14988_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14988_SCEventCounterReachedTargetValue_loopCount = 0;
obj14988_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj15213: Event Touch Down
 *
 */

$("#obj15213").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15213_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15213_onTap is still running");
	return;
}
var obj15213_onTap_runningActionsCount = 0;
var obj15213_onTap_loopCount = 0;
obj15213_onTap_actionGroup0();
});











































































/*
 *
 *   obj15219: Event Touch Down
 *
 */

$("#obj15219").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15219_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15219_onTap is still running");
	return;
}
var obj15219_onTap_runningActionsCount = 0;
var obj15219_onTap_loopCount = 0;
obj15219_onTap_actionGroup0();
});











































































/*
 *
 *   obj15232: Event Touch Down
 *
 */

$("#obj15232").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15232_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15232_onTap is still running");
	return;
}
var obj15232_onTap_runningActionsCount = 0;
var obj15232_onTap_loopCount = 0;
obj15232_onTap_actionGroup0();
});











































































/*
 *
 *   obj15245: Event Touch Down
 *
 */

$("#obj15245").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15245_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15245_onTap is still running");
	return;
}
var obj15245_onTap_runningActionsCount = 0;
var obj15245_onTap_loopCount = 0;
obj15245_onTap_actionGroup0();
});











































































/*
 *
 *   obj15258: Event Touch Down
 *
 */

$("#obj15258").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15258_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15258_onTap is still running");
	return;
}
var obj15258_onTap_runningActionsCount = 0;
var obj15258_onTap_loopCount = 0;
obj15258_onTap_actionGroup0();
});



























/*
 *
 *   obj15270: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj15270").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15270_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15270_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj15270_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15270_SCEventCounterReachedTargetValue_loopCount = 0;
obj15270_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj15272: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj15272").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15272_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15272_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj15272_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15272_SCEventCounterReachedTargetValue_loopCount = 0;
obj15272_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj15347: Event Touch Down
 *
 */

$("#obj15347").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15347_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15347_onTap is still running");
	return;
}
var obj15347_onTap_runningActionsCount = 0;
var obj15347_onTap_loopCount = 0;
obj15347_onTap_actionGroup0();
});











































































/*
 *
 *   obj15335: Event Touch Down
 *
 */

$("#obj15335").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15335_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15335_onTap is still running");
	return;
}
var obj15335_onTap_runningActionsCount = 0;
var obj15335_onTap_loopCount = 0;
obj15335_onTap_actionGroup0();
});











































































/*
 *
 *   obj15322: Event Touch Down
 *
 */

$("#obj15322").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15322_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15322_onTap is still running");
	return;
}
var obj15322_onTap_runningActionsCount = 0;
var obj15322_onTap_loopCount = 0;
obj15322_onTap_actionGroup0();
});











































































/*
 *
 *   obj15309: Event Touch Down
 *
 */

$("#obj15309").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15309_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15309_onTap is still running");
	return;
}
var obj15309_onTap_runningActionsCount = 0;
var obj15309_onTap_loopCount = 0;
obj15309_onTap_actionGroup0();
});











































































/*
 *
 *   obj15297: Event Touch Down
 *
 */

$("#obj15297").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15297_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15297_onTap is still running");
	return;
}
var obj15297_onTap_runningActionsCount = 0;
var obj15297_onTap_loopCount = 0;
obj15297_onTap_actionGroup0();
});



























/*
 *
 *   obj15360: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj15360").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15360_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15360_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj15360_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15360_SCEventCounterReachedTargetValue_loopCount = 0;
obj15360_SCEventCounterReachedTargetValue_actionGroup0();
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
	
$("#obj14950").trigger('SCEventShow');
$("#obj14955").trigger('SCEventShow');
$("#obj14957").trigger('SCEventShow');
$("#obj14959").trigger('SCEventShow');
$("#obj14961").trigger('SCEventShow');
$("#obj14963").trigger('SCEventShow');
$("#obj14970").trigger('SCEventShow');
$("#obj14972").trigger('SCEventShow');
$("#obj15194").trigger('SCEventShow');
$("#obj15198").trigger('SCEventShow');
$("#obj15200").trigger('SCEventShow');
$("#obj15213").trigger('SCEventShow');
$("#obj15229").trigger('SCEventShow');
$("#obj15227").trigger('SCEventShow');
$("#obj15225").trigger('SCEventShow');
$("#obj15219").trigger('SCEventShow');
$("#obj15243").trigger('SCEventShow');
$("#obj15241").trigger('SCEventShow');
$("#obj15239").trigger('SCEventShow');
$("#obj15232").trigger('SCEventShow');
$("#obj15256").trigger('SCEventShow');
$("#obj15254").trigger('SCEventShow');
$("#obj15252").trigger('SCEventShow');
$("#obj15245").trigger('SCEventShow');
$("#obj15268").trigger('SCEventShow');
$("#obj15266").trigger('SCEventShow');
$("#obj15264").trigger('SCEventShow');
$("#obj15258").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});