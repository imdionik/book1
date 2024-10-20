pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 24208;
pubcoder.page.title = pubcoder.page.title || "44";
pubcoder.page.number = pubcoder.page.number || 44;
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
var obj24213_onTap_activeActionGroupIndex = -1;
var obj24213_onTap_runningActionsCount = 0;
var obj24213_onTap_loopCount = 0;
var obj24236_onTap_activeActionGroupIndex = -1;
var obj24236_onTap_runningActionsCount = 0;
var obj24236_onTap_loopCount = 0;
var obj24244_onTap_activeActionGroupIndex = -1;
var obj24244_onTap_runningActionsCount = 0;
var obj24244_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 

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
		
obj24213_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24213_onTap_activeActionGroupIndex = -1;
		$("#obj24213").trigger("obj24213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24213) {
				console.warn("de-queueing event obj24213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24213_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_24215();
function goToPage_24215() {
	window.obj24213_onTap_runningActionsCount = obj24213_onTap_runningActionsCount + 1;

	$("#anchor821")[0].click();
	window.obj24213_onTap_runningActionsCount = window.obj24213_onTap_runningActionsCount - 1;

if (window.obj24213_onTap_runningActionsCount < 0) {
	window.obj24213_onTap_runningActionsCount = 0;
} else if (window.obj24213_onTap_runningActionsCount == 0) {
	obj24213_onTap_actionGroup1();
}
}










































};
obj24213_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24213_onTap_activeActionGroupIndex = -1;
		$("#obj24213").trigger("obj24213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24213) {
				console.warn("de-queueing event obj24213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24213_onTap_activeActionGroupIndex = 1;
	











































};
obj24236_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24236_onTap_activeActionGroupIndex = -1;
		$("#obj24236").trigger("obj24236_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24236) {
				console.warn("de-queueing event obj24236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24236_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24251
(function(){
	window.obj24236_onTap_runningActionsCount = obj24236_onTap_runningActionsCount + 1;


	var selector = "#obj24251";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24236_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24236_onTap_activeActionGroupIndex = -1;
		$("#obj24236").trigger("obj24236_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24236) {
				console.warn("de-queueing event obj24236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24236_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_24239();
function playAudioFile_24239() {
	window.obj24236_onTap_runningActionsCount = obj24236_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24239")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24239");
			$("#obj_audio_playSoundFile24239").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup2();
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
				window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj24236_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24236_onTap_activeActionGroupIndex = -1;
		$("#obj24236").trigger("obj24236_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24236) {
				console.warn("de-queueing event obj24236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24236_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24236 
scale_24240();
function scale_24240() {
	window.obj24236_onTap_runningActionsCount = obj24236_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24236";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24236';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24240_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24240_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24240_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24240_completed() {
	setTimeout(function() {
		window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24236_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24236_onTap_activeActionGroupIndex = -1;
		$("#obj24236").trigger("obj24236_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24236) {
				console.warn("de-queueing event obj24236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24236_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_24241();
function wait_24241() {
	window.obj24236_onTap_runningActionsCount = obj24236_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup4();
}
	}, 500);
}


























};
obj24236_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24236_onTap_activeActionGroupIndex = -1;
		$("#obj24236").trigger("obj24236_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24236) {
				console.warn("de-queueing event obj24236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24236_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj24236 
scale_24242();
function scale_24242() {
	window.obj24236_onTap_runningActionsCount = obj24236_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24236";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24236';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24242_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24242_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24242_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24242_completed() {
	setTimeout(function() {
		window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup5();
}
	}, 1);
}

























};
obj24236_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24236_onTap_activeActionGroupIndex = -1;
		$("#obj24236").trigger("obj24236_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24236) {
				console.warn("de-queueing event obj24236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24236_onTap_activeActionGroupIndex = 5;
	
//	action: goToPage
goToPage_24243();
function goToPage_24243() {
	window.obj24236_onTap_runningActionsCount = obj24236_onTap_runningActionsCount + 1;

	$("#anchor823")[0].click();
	window.obj24236_onTap_runningActionsCount = window.obj24236_onTap_runningActionsCount - 1;

if (window.obj24236_onTap_runningActionsCount < 0) {
	window.obj24236_onTap_runningActionsCount = 0;
} else if (window.obj24236_onTap_runningActionsCount == 0) {
	obj24236_onTap_actionGroup6();
}
}










































};
obj24236_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24236_onTap_activeActionGroupIndex = -1;
		$("#obj24236").trigger("obj24236_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24236) {
				console.warn("de-queueing event obj24236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24236_onTap_activeActionGroupIndex = 6;
	











































};
obj24244_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24244_onTap_activeActionGroupIndex = -1;
		$("#obj24244").trigger("obj24244_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24244) {
				console.warn("de-queueing event obj24244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24244_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24251
(function(){
	window.obj24244_onTap_runningActionsCount = obj24244_onTap_runningActionsCount + 1;


	var selector = "#obj24251";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24244_onTap_runningActionsCount = window.obj24244_onTap_runningActionsCount - 1;

if (window.obj24244_onTap_runningActionsCount < 0) {
	window.obj24244_onTap_runningActionsCount = 0;
} else if (window.obj24244_onTap_runningActionsCount == 0) {
	obj24244_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24244_onTap_runningActionsCount = window.obj24244_onTap_runningActionsCount - 1;

if (window.obj24244_onTap_runningActionsCount < 0) {
	window.obj24244_onTap_runningActionsCount = 0;
} else if (window.obj24244_onTap_runningActionsCount == 0) {
	obj24244_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24244_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24244_onTap_activeActionGroupIndex = -1;
		$("#obj24244").trigger("obj24244_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24244) {
				console.warn("de-queueing event obj24244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24244_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_24247();
function playAudioFile_24247() {
	window.obj24244_onTap_runningActionsCount = obj24244_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24247")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24247");
			$("#obj_audio_playSoundFile24247").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24244_onTap_runningActionsCount = window.obj24244_onTap_runningActionsCount - 1;

if (window.obj24244_onTap_runningActionsCount < 0) {
	window.obj24244_onTap_runningActionsCount = 0;
} else if (window.obj24244_onTap_runningActionsCount == 0) {
	obj24244_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24244_onTap_runningActionsCount = window.obj24244_onTap_runningActionsCount - 1;

if (window.obj24244_onTap_runningActionsCount < 0) {
	window.obj24244_onTap_runningActionsCount = 0;
} else if (window.obj24244_onTap_runningActionsCount == 0) {
	obj24244_onTap_actionGroup2();
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
				window.obj24244_onTap_runningActionsCount = window.obj24244_onTap_runningActionsCount - 1;

if (window.obj24244_onTap_runningActionsCount < 0) {
	window.obj24244_onTap_runningActionsCount = 0;
} else if (window.obj24244_onTap_runningActionsCount == 0) {
	obj24244_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj24244_onTap_runningActionsCount = window.obj24244_onTap_runningActionsCount - 1;

if (window.obj24244_onTap_runningActionsCount < 0) {
	window.obj24244_onTap_runningActionsCount = 0;
} else if (window.obj24244_onTap_runningActionsCount == 0) {
	obj24244_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj24244_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24244_onTap_activeActionGroupIndex = -1;
		$("#obj24244").trigger("obj24244_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24244) {
				console.warn("de-queueing event obj24244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24244_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24244 
scale_24248();
function scale_24248() {
	window.obj24244_onTap_runningActionsCount = obj24244_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24244";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24244';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24248_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24248_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24248_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24248_completed() {
	setTimeout(function() {
		window.obj24244_onTap_runningActionsCount = window.obj24244_onTap_runningActionsCount - 1;

if (window.obj24244_onTap_runningActionsCount < 0) {
	window.obj24244_onTap_runningActionsCount = 0;
} else if (window.obj24244_onTap_runningActionsCount == 0) {
	obj24244_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24244_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24244_onTap_activeActionGroupIndex = -1;
		$("#obj24244").trigger("obj24244_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24244) {
				console.warn("de-queueing event obj24244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24244_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_24249();
function wait_24249() {
	window.obj24244_onTap_runningActionsCount = obj24244_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24244_onTap_runningActionsCount = window.obj24244_onTap_runningActionsCount - 1;

if (window.obj24244_onTap_runningActionsCount < 0) {
	window.obj24244_onTap_runningActionsCount = 0;
} else if (window.obj24244_onTap_runningActionsCount == 0) {
	obj24244_onTap_actionGroup4();
}
	}, 500);
}


























};
obj24244_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24244_onTap_activeActionGroupIndex = -1;
		$("#obj24244").trigger("obj24244_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24244) {
				console.warn("de-queueing event obj24244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24244_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj24244 
scale_24250();
function scale_24250() {
	window.obj24244_onTap_runningActionsCount = obj24244_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24244";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24244';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24250_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24250_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24250_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24250_completed() {
	setTimeout(function() {
		window.obj24244_onTap_runningActionsCount = window.obj24244_onTap_runningActionsCount - 1;

if (window.obj24244_onTap_runningActionsCount < 0) {
	window.obj24244_onTap_runningActionsCount = 0;
} else if (window.obj24244_onTap_runningActionsCount == 0) {
	obj24244_onTap_actionGroup5();
}
	}, 1);
}

























};
obj24244_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24244_onTap_activeActionGroupIndex = -1;
		$("#obj24244").trigger("obj24244_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24244) {
				console.warn("de-queueing event obj24244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24244_onTap_activeActionGroupIndex = 5;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj24213: Event Touch Down
 *
 */

$("#obj24213").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24213_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24213_onTap is still running");
	return;
}
var obj24213_onTap_runningActionsCount = 0;
var obj24213_onTap_loopCount = 0;
obj24213_onTap_actionGroup0();
});























































































































































/*
 *
 *   obj24236: Event Touch Down
 *
 */

$("#obj24236").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24236_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24236_onTap is still running");
	return;
}
var obj24236_onTap_runningActionsCount = 0;
var obj24236_onTap_loopCount = 0;
obj24236_onTap_actionGroup0();
});


















/*
 *
 *   obj24244: Event Touch Down
 *
 */

$("#obj24244").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24244_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24244_onTap is still running");
	return;
}
var obj24244_onTap_runningActionsCount = 0;
var obj24244_onTap_loopCount = 0;
obj24244_onTap_actionGroup0();
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
	
$("#obj24209").trigger('SCEventShow');
$("#obj24213").trigger('SCEventShow');
$("#obj24216").trigger('SCEventShow');
$("#obj24254").trigger('SCEventShow');
$("#obj24220").trigger('SCEventShow');
$("#obj24222").trigger('SCEventShow');
$("#obj24224").trigger('SCEventShow');
$("#obj24226").trigger('SCEventShow');
$("#obj24228").trigger('SCEventShow');
$("#obj24236").trigger('SCEventShow');
$("#obj24244").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});