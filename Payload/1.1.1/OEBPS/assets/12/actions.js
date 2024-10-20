pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 24080;
pubcoder.page.title = pubcoder.page.title || "12";
pubcoder.page.number = pubcoder.page.number || 12;
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
var obj24083_onTap_activeActionGroupIndex = -1;
var obj24083_onTap_runningActionsCount = 0;
var obj24083_onTap_loopCount = 0;
var obj24139_onTap_activeActionGroupIndex = -1;
var obj24139_onTap_runningActionsCount = 0;
var obj24139_onTap_loopCount = 0;
var obj24148_onTap_activeActionGroupIndex = -1;
var obj24148_onTap_runningActionsCount = 0;
var obj24148_onTap_loopCount = 0;

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
		
obj24083_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24083_onTap_activeActionGroupIndex = -1;
		$("#obj24083").trigger("obj24083_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24083) {
				console.warn("de-queueing event obj24083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24083_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_24085();
function goToPage_24085() {
	window.obj24083_onTap_runningActionsCount = obj24083_onTap_runningActionsCount + 1;

	$("#anchor199")[0].click();
	window.obj24083_onTap_runningActionsCount = window.obj24083_onTap_runningActionsCount - 1;

if (window.obj24083_onTap_runningActionsCount < 0) {
	window.obj24083_onTap_runningActionsCount = 0;
} else if (window.obj24083_onTap_runningActionsCount == 0) {
	obj24083_onTap_actionGroup1();
}
}










































};
obj24083_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24083_onTap_activeActionGroupIndex = -1;
		$("#obj24083").trigger("obj24083_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24083) {
				console.warn("de-queueing event obj24083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24083_onTap_activeActionGroupIndex = 1;
	











































};
obj24139_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24139_onTap_activeActionGroupIndex = -1;
		$("#obj24139").trigger("obj24139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24139) {
				console.warn("de-queueing event obj24139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24139_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24134
(function(){
	window.obj24139_onTap_runningActionsCount = obj24139_onTap_runningActionsCount + 1;


	var selector = "#obj24134";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24139_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24139_onTap_activeActionGroupIndex = -1;
		$("#obj24139").trigger("obj24139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24139) {
				console.warn("de-queueing event obj24139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24139_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_24143();
function playAudioFile_24143() {
	window.obj24139_onTap_runningActionsCount = obj24139_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24143")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24143");
			$("#obj_audio_playSoundFile24143").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup2();
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
				window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj24139_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24139_onTap_activeActionGroupIndex = -1;
		$("#obj24139").trigger("obj24139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24139) {
				console.warn("de-queueing event obj24139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24139_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24139 
scale_24144();
function scale_24144() {
	window.obj24139_onTap_runningActionsCount = obj24139_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24139";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24139';
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
		scale_24144_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24144_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24144_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24144_completed() {
	setTimeout(function() {
		window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24139_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24139_onTap_activeActionGroupIndex = -1;
		$("#obj24139").trigger("obj24139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24139) {
				console.warn("de-queueing event obj24139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24139_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_24145();
function wait_24145() {
	window.obj24139_onTap_runningActionsCount = obj24139_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup4();
}
	}, 500);
}


























};
obj24139_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24139_onTap_activeActionGroupIndex = -1;
		$("#obj24139").trigger("obj24139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24139) {
				console.warn("de-queueing event obj24139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24139_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj24139 
scale_24147();
function scale_24147() {
	window.obj24139_onTap_runningActionsCount = obj24139_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24139";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24139';
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
		scale_24147_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24147_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24147_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24147_completed() {
	setTimeout(function() {
		window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup5();
}
	}, 1);
}

























};
obj24139_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24139_onTap_activeActionGroupIndex = -1;
		$("#obj24139").trigger("obj24139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24139) {
				console.warn("de-queueing event obj24139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24139_onTap_activeActionGroupIndex = 5;
	
//	action: goToPage
goToPage_24146();
function goToPage_24146() {
	window.obj24139_onTap_runningActionsCount = obj24139_onTap_runningActionsCount + 1;

	$("#anchor201")[0].click();
	window.obj24139_onTap_runningActionsCount = window.obj24139_onTap_runningActionsCount - 1;

if (window.obj24139_onTap_runningActionsCount < 0) {
	window.obj24139_onTap_runningActionsCount = 0;
} else if (window.obj24139_onTap_runningActionsCount == 0) {
	obj24139_onTap_actionGroup6();
}
}










































};
obj24139_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24139_onTap_activeActionGroupIndex = -1;
		$("#obj24139").trigger("obj24139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24139) {
				console.warn("de-queueing event obj24139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24139_onTap_activeActionGroupIndex = 6;
	











































};
obj24148_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24148_onTap_activeActionGroupIndex = -1;
		$("#obj24148").trigger("obj24148_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24148) {
				console.warn("de-queueing event obj24148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24148_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24134
(function(){
	window.obj24148_onTap_runningActionsCount = obj24148_onTap_runningActionsCount + 1;


	var selector = "#obj24134";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24148_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24148_onTap_activeActionGroupIndex = -1;
		$("#obj24148").trigger("obj24148_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24148) {
				console.warn("de-queueing event obj24148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24148_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_24151();
function playAudioFile_24151() {
	window.obj24148_onTap_runningActionsCount = obj24148_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24151")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24151");
			$("#obj_audio_playSoundFile24151").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup2();
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
				window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj24148_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24148_onTap_activeActionGroupIndex = -1;
		$("#obj24148").trigger("obj24148_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24148) {
				console.warn("de-queueing event obj24148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24148_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24148 
scale_24152();
function scale_24152() {
	window.obj24148_onTap_runningActionsCount = obj24148_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24148";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24148';
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
		scale_24152_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24152_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24152_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24152_completed() {
	setTimeout(function() {
		window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24148_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24148_onTap_activeActionGroupIndex = -1;
		$("#obj24148").trigger("obj24148_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24148) {
				console.warn("de-queueing event obj24148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24148_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_24153();
function wait_24153() {
	window.obj24148_onTap_runningActionsCount = obj24148_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup4();
}
	}, 500);
}


























};
obj24148_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24148_onTap_activeActionGroupIndex = -1;
		$("#obj24148").trigger("obj24148_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24148) {
				console.warn("de-queueing event obj24148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24148_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj24148 
scale_24154();
function scale_24154() {
	window.obj24148_onTap_runningActionsCount = obj24148_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24148";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24148';
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
		scale_24154_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24154_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24154_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24154_completed() {
	setTimeout(function() {
		window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup5();
}
	}, 1);
}

























};
obj24148_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24148_onTap_activeActionGroupIndex = -1;
		$("#obj24148").trigger("obj24148_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24148) {
				console.warn("de-queueing event obj24148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24148_onTap_activeActionGroupIndex = 5;
	
//	action: goToPage
goToPage_24155();
function goToPage_24155() {
	window.obj24148_onTap_runningActionsCount = obj24148_onTap_runningActionsCount + 1;

	$("#anchor203")[0].click();
	window.obj24148_onTap_runningActionsCount = window.obj24148_onTap_runningActionsCount - 1;

if (window.obj24148_onTap_runningActionsCount < 0) {
	window.obj24148_onTap_runningActionsCount = 0;
} else if (window.obj24148_onTap_runningActionsCount == 0) {
	obj24148_onTap_actionGroup6();
}
}










































};
obj24148_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24148_onTap_activeActionGroupIndex = -1;
		$("#obj24148").trigger("obj24148_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24148) {
				console.warn("de-queueing event obj24148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24148_onTap_activeActionGroupIndex = 6;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj24083: Event Touch Down
 *
 */

$("#obj24083").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24083_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24083_onTap is still running");
	return;
}
var obj24083_onTap_runningActionsCount = 0;
var obj24083_onTap_loopCount = 0;
obj24083_onTap_actionGroup0();
});





























































































































































































/*
 *
 *   obj24139: Event Touch Down
 *
 */

$("#obj24139").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24139_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24139_onTap is still running");
	return;
}
var obj24139_onTap_runningActionsCount = 0;
var obj24139_onTap_loopCount = 0;
obj24139_onTap_actionGroup0();
});


















/*
 *
 *   obj24148: Event Touch Down
 *
 */

$("#obj24148").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24148_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24148_onTap is still running");
	return;
}
var obj24148_onTap_runningActionsCount = 0;
var obj24148_onTap_loopCount = 0;
obj24148_onTap_actionGroup0();
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
	
$("#obj24081").trigger('SCEventShow');
$("#obj24083").trigger('SCEventShow');
$("#obj24086").trigger('SCEventShow');
$("#obj24088").trigger('SCEventShow');
$("#obj24090").trigger('SCEventShow');
$("#obj24137").trigger('SCEventShow');
$("#obj24092").trigger('SCEventShow');
$("#obj24094").trigger('SCEventShow');
$("#obj24096").trigger('SCEventShow');
$("#obj24098").trigger('SCEventShow');
$("#obj24139").trigger('SCEventShow');
$("#obj24148").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});