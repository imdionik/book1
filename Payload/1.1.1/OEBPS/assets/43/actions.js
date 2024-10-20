pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 24157;
pubcoder.page.title = pubcoder.page.title || "43";
pubcoder.page.number = pubcoder.page.number || 43;
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
var obj24160_onTap_activeActionGroupIndex = -1;
var obj24160_onTap_runningActionsCount = 0;
var obj24160_onTap_loopCount = 0;
var obj24187_onTap_activeActionGroupIndex = -1;
var obj24187_onTap_runningActionsCount = 0;
var obj24187_onTap_loopCount = 0;
var obj24195_onTap_activeActionGroupIndex = -1;
var obj24195_onTap_runningActionsCount = 0;
var obj24195_onTap_loopCount = 0;

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
		
obj24160_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24160_onTap_activeActionGroupIndex = -1;
		$("#obj24160").trigger("obj24160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24160) {
				console.warn("de-queueing event obj24160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24160_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_24162();
function goToPage_24162() {
	window.obj24160_onTap_runningActionsCount = obj24160_onTap_runningActionsCount + 1;

	$("#anchor818")[0].click();
	window.obj24160_onTap_runningActionsCount = window.obj24160_onTap_runningActionsCount - 1;

if (window.obj24160_onTap_runningActionsCount < 0) {
	window.obj24160_onTap_runningActionsCount = 0;
} else if (window.obj24160_onTap_runningActionsCount == 0) {
	obj24160_onTap_actionGroup1();
}
}










































};
obj24160_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24160_onTap_activeActionGroupIndex = -1;
		$("#obj24160").trigger("obj24160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24160) {
				console.warn("de-queueing event obj24160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24160_onTap_activeActionGroupIndex = 1;
	











































};
obj24187_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24187_onTap_activeActionGroupIndex = -1;
		$("#obj24187").trigger("obj24187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24187) {
				console.warn("de-queueing event obj24187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24187_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24185
(function(){
	window.obj24187_onTap_runningActionsCount = obj24187_onTap_runningActionsCount + 1;


	var selector = "#obj24185";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24187_onTap_runningActionsCount = window.obj24187_onTap_runningActionsCount - 1;

if (window.obj24187_onTap_runningActionsCount < 0) {
	window.obj24187_onTap_runningActionsCount = 0;
} else if (window.obj24187_onTap_runningActionsCount == 0) {
	obj24187_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24187_onTap_runningActionsCount = window.obj24187_onTap_runningActionsCount - 1;

if (window.obj24187_onTap_runningActionsCount < 0) {
	window.obj24187_onTap_runningActionsCount = 0;
} else if (window.obj24187_onTap_runningActionsCount == 0) {
	obj24187_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24187_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24187_onTap_activeActionGroupIndex = -1;
		$("#obj24187").trigger("obj24187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24187) {
				console.warn("de-queueing event obj24187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24187_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_24190();
function playAudioFile_24190() {
	window.obj24187_onTap_runningActionsCount = obj24187_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24190")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24190");
			$("#obj_audio_playSoundFile24190").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24187_onTap_runningActionsCount = window.obj24187_onTap_runningActionsCount - 1;

if (window.obj24187_onTap_runningActionsCount < 0) {
	window.obj24187_onTap_runningActionsCount = 0;
} else if (window.obj24187_onTap_runningActionsCount == 0) {
	obj24187_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24187_onTap_runningActionsCount = window.obj24187_onTap_runningActionsCount - 1;

if (window.obj24187_onTap_runningActionsCount < 0) {
	window.obj24187_onTap_runningActionsCount = 0;
} else if (window.obj24187_onTap_runningActionsCount == 0) {
	obj24187_onTap_actionGroup2();
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
				window.obj24187_onTap_runningActionsCount = window.obj24187_onTap_runningActionsCount - 1;

if (window.obj24187_onTap_runningActionsCount < 0) {
	window.obj24187_onTap_runningActionsCount = 0;
} else if (window.obj24187_onTap_runningActionsCount == 0) {
	obj24187_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj24187_onTap_runningActionsCount = window.obj24187_onTap_runningActionsCount - 1;

if (window.obj24187_onTap_runningActionsCount < 0) {
	window.obj24187_onTap_runningActionsCount = 0;
} else if (window.obj24187_onTap_runningActionsCount == 0) {
	obj24187_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj24187_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24187_onTap_activeActionGroupIndex = -1;
		$("#obj24187").trigger("obj24187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24187) {
				console.warn("de-queueing event obj24187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24187_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24187 
scale_24191();
function scale_24191() {
	window.obj24187_onTap_runningActionsCount = obj24187_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24187";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24187';
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
		scale_24191_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24191_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24191_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24191_completed() {
	setTimeout(function() {
		window.obj24187_onTap_runningActionsCount = window.obj24187_onTap_runningActionsCount - 1;

if (window.obj24187_onTap_runningActionsCount < 0) {
	window.obj24187_onTap_runningActionsCount = 0;
} else if (window.obj24187_onTap_runningActionsCount == 0) {
	obj24187_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24187_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24187_onTap_activeActionGroupIndex = -1;
		$("#obj24187").trigger("obj24187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24187) {
				console.warn("de-queueing event obj24187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24187_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_24192();
function wait_24192() {
	window.obj24187_onTap_runningActionsCount = obj24187_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24187_onTap_runningActionsCount = window.obj24187_onTap_runningActionsCount - 1;

if (window.obj24187_onTap_runningActionsCount < 0) {
	window.obj24187_onTap_runningActionsCount = 0;
} else if (window.obj24187_onTap_runningActionsCount == 0) {
	obj24187_onTap_actionGroup4();
}
	}, 500);
}


























};
obj24187_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24187_onTap_activeActionGroupIndex = -1;
		$("#obj24187").trigger("obj24187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24187) {
				console.warn("de-queueing event obj24187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24187_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj24187 
scale_24193();
function scale_24193() {
	window.obj24187_onTap_runningActionsCount = obj24187_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24187";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24187';
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
		scale_24193_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24193_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24193_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24193_completed() {
	setTimeout(function() {
		window.obj24187_onTap_runningActionsCount = window.obj24187_onTap_runningActionsCount - 1;

if (window.obj24187_onTap_runningActionsCount < 0) {
	window.obj24187_onTap_runningActionsCount = 0;
} else if (window.obj24187_onTap_runningActionsCount == 0) {
	obj24187_onTap_actionGroup5();
}
	}, 1);
}

























};
obj24187_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24187_onTap_activeActionGroupIndex = -1;
		$("#obj24187").trigger("obj24187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24187) {
				console.warn("de-queueing event obj24187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24187_onTap_activeActionGroupIndex = 5;
	











































};
obj24195_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24195_onTap_activeActionGroupIndex = -1;
		$("#obj24195").trigger("obj24195_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24195) {
				console.warn("de-queueing event obj24195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24195_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24185
(function(){
	window.obj24195_onTap_runningActionsCount = obj24195_onTap_runningActionsCount + 1;


	var selector = "#obj24185";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24195_onTap_runningActionsCount = window.obj24195_onTap_runningActionsCount - 1;

if (window.obj24195_onTap_runningActionsCount < 0) {
	window.obj24195_onTap_runningActionsCount = 0;
} else if (window.obj24195_onTap_runningActionsCount == 0) {
	obj24195_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24195_onTap_runningActionsCount = window.obj24195_onTap_runningActionsCount - 1;

if (window.obj24195_onTap_runningActionsCount < 0) {
	window.obj24195_onTap_runningActionsCount = 0;
} else if (window.obj24195_onTap_runningActionsCount == 0) {
	obj24195_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24195_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24195_onTap_activeActionGroupIndex = -1;
		$("#obj24195").trigger("obj24195_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24195) {
				console.warn("de-queueing event obj24195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24195_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_24198();
function playAudioFile_24198() {
	window.obj24195_onTap_runningActionsCount = obj24195_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24198")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24198");
			$("#obj_audio_playSoundFile24198").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24195_onTap_runningActionsCount = window.obj24195_onTap_runningActionsCount - 1;

if (window.obj24195_onTap_runningActionsCount < 0) {
	window.obj24195_onTap_runningActionsCount = 0;
} else if (window.obj24195_onTap_runningActionsCount == 0) {
	obj24195_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24195_onTap_runningActionsCount = window.obj24195_onTap_runningActionsCount - 1;

if (window.obj24195_onTap_runningActionsCount < 0) {
	window.obj24195_onTap_runningActionsCount = 0;
} else if (window.obj24195_onTap_runningActionsCount == 0) {
	obj24195_onTap_actionGroup2();
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
				window.obj24195_onTap_runningActionsCount = window.obj24195_onTap_runningActionsCount - 1;

if (window.obj24195_onTap_runningActionsCount < 0) {
	window.obj24195_onTap_runningActionsCount = 0;
} else if (window.obj24195_onTap_runningActionsCount == 0) {
	obj24195_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj24195_onTap_runningActionsCount = window.obj24195_onTap_runningActionsCount - 1;

if (window.obj24195_onTap_runningActionsCount < 0) {
	window.obj24195_onTap_runningActionsCount = 0;
} else if (window.obj24195_onTap_runningActionsCount == 0) {
	obj24195_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj24195_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24195_onTap_activeActionGroupIndex = -1;
		$("#obj24195").trigger("obj24195_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24195) {
				console.warn("de-queueing event obj24195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24195_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24195 
scale_24199();
function scale_24199() {
	window.obj24195_onTap_runningActionsCount = obj24195_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24195";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24195';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.13';
	var scaleYValue = '1.13';
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
		scale_24199_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24199_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24199_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24199_completed() {
	setTimeout(function() {
		window.obj24195_onTap_runningActionsCount = window.obj24195_onTap_runningActionsCount - 1;

if (window.obj24195_onTap_runningActionsCount < 0) {
	window.obj24195_onTap_runningActionsCount = 0;
} else if (window.obj24195_onTap_runningActionsCount == 0) {
	obj24195_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24195_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24195_onTap_activeActionGroupIndex = -1;
		$("#obj24195").trigger("obj24195_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24195) {
				console.warn("de-queueing event obj24195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24195_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_24200();
function wait_24200() {
	window.obj24195_onTap_runningActionsCount = obj24195_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24195_onTap_runningActionsCount = window.obj24195_onTap_runningActionsCount - 1;

if (window.obj24195_onTap_runningActionsCount < 0) {
	window.obj24195_onTap_runningActionsCount = 0;
} else if (window.obj24195_onTap_runningActionsCount == 0) {
	obj24195_onTap_actionGroup4();
}
	}, 500);
}


























};
obj24195_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24195_onTap_activeActionGroupIndex = -1;
		$("#obj24195").trigger("obj24195_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24195) {
				console.warn("de-queueing event obj24195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24195_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj24195 
scale_24201();
function scale_24201() {
	window.obj24195_onTap_runningActionsCount = obj24195_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24195";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24195';
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
		scale_24201_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24201_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24201_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24201_completed() {
	setTimeout(function() {
		window.obj24195_onTap_runningActionsCount = window.obj24195_onTap_runningActionsCount - 1;

if (window.obj24195_onTap_runningActionsCount < 0) {
	window.obj24195_onTap_runningActionsCount = 0;
} else if (window.obj24195_onTap_runningActionsCount == 0) {
	obj24195_onTap_actionGroup5();
}
	}, 1);
}

























};
obj24195_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24195_onTap_activeActionGroupIndex = -1;
		$("#obj24195").trigger("obj24195_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24195) {
				console.warn("de-queueing event obj24195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24195_onTap_activeActionGroupIndex = 5;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj24160: Event Touch Down
 *
 */

$("#obj24160").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24160_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24160_onTap is still running");
	return;
}
var obj24160_onTap_runningActionsCount = 0;
var obj24160_onTap_loopCount = 0;
obj24160_onTap_actionGroup0();
});























































































































































/*
 *
 *   obj24187: Event Touch Down
 *
 */

$("#obj24187").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24187_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24187_onTap is still running");
	return;
}
var obj24187_onTap_runningActionsCount = 0;
var obj24187_onTap_loopCount = 0;
obj24187_onTap_actionGroup0();
});


















/*
 *
 *   obj24195: Event Touch Down
 *
 */

$("#obj24195").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24195_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24195_onTap is still running");
	return;
}
var obj24195_onTap_runningActionsCount = 0;
var obj24195_onTap_loopCount = 0;
obj24195_onTap_actionGroup0();
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
	
$("#obj24158").trigger('SCEventShow');
$("#obj24169").trigger('SCEventShow');
$("#obj24160").trigger('SCEventShow');
$("#obj24163").trigger('SCEventShow');
$("#obj24204").trigger('SCEventShow');
$("#obj24167").trigger('SCEventShow');
$("#obj24171").trigger('SCEventShow');
$("#obj24173").trigger('SCEventShow');
$("#obj24175").trigger('SCEventShow');
$("#obj24177").trigger('SCEventShow');
$("#obj24187").trigger('SCEventShow');
$("#obj24195").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});