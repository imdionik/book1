pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 15442;
pubcoder.page.title = pubcoder.page.title || "26";
pubcoder.page.number = pubcoder.page.number || 26;
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
var obj15452_onTap_activeActionGroupIndex = -1;
var obj15452_onTap_runningActionsCount = 0;
var obj15452_onTap_loopCount = 0;
var obj15463_onTap_activeActionGroupIndex = -1;
var obj15463_onTap_runningActionsCount = 0;
var obj15463_onTap_loopCount = 0;
var obj15469_onTap_activeActionGroupIndex = -1;
var obj15469_onTap_runningActionsCount = 0;
var obj15469_onTap_loopCount = 0;
var obj15475_onTap_activeActionGroupIndex = -1;
var obj15475_onTap_runningActionsCount = 0;
var obj15475_onTap_loopCount = 0;
var obj15481_onTap_activeActionGroupIndex = -1;
var obj15481_onTap_runningActionsCount = 0;
var obj15481_onTap_loopCount = 0;
var obj15489_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15489_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15528_onTap_activeActionGroupIndex = -1;
var obj15528_onTap_runningActionsCount = 0;
var obj15528_onTap_loopCount = 0;
var obj15534_onTap_activeActionGroupIndex = -1;
var obj15534_onTap_runningActionsCount = 0;
var obj15534_onTap_loopCount = 0;
var obj15540_onTap_activeActionGroupIndex = -1;
var obj15540_onTap_runningActionsCount = 0;
var obj15540_onTap_loopCount = 0;
var obj15546_onTap_activeActionGroupIndex = -1;
var obj15546_onTap_runningActionsCount = 0;
var obj15546_onTap_loopCount = 0;
var obj15566_onTap_activeActionGroupIndex = -1;
var obj15566_onTap_runningActionsCount = 0;
var obj15566_onTap_loopCount = 0;
var obj15572_onTap_activeActionGroupIndex = -1;
var obj15572_onTap_runningActionsCount = 0;
var obj15572_onTap_loopCount = 0;
var obj15578_onTap_activeActionGroupIndex = -1;
var obj15578_onTap_runningActionsCount = 0;
var obj15578_onTap_loopCount = 0;
var obj15584_onTap_activeActionGroupIndex = -1;
var obj15584_onTap_runningActionsCount = 0;
var obj15584_onTap_loopCount = 0;
var obj15592_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15592_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15624_onTap_activeActionGroupIndex = -1;
var obj15624_onTap_runningActionsCount = 0;
var obj15624_onTap_loopCount = 0;
var obj15630_onTap_activeActionGroupIndex = -1;
var obj15630_onTap_runningActionsCount = 0;
var obj15630_onTap_loopCount = 0;
var obj15636_onTap_activeActionGroupIndex = -1;
var obj15636_onTap_runningActionsCount = 0;
var obj15636_onTap_loopCount = 0;
var obj15642_onTap_activeActionGroupIndex = -1;
var obj15642_onTap_runningActionsCount = 0;
var obj15642_onTap_loopCount = 0;
var obj16521_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16521_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16521_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16518_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16518_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16518_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16515_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16515_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16515_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16509_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16509_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16509_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16537_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16537_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16537_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16534_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16534_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16534_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16531_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16531_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16531_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16551_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16551_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16551_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16547_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16547_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16547_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16701_onTap_activeActionGroupIndex = -1;
var obj16701_onTap_runningActionsCount = 0;
var obj16701_onTap_loopCount = 0;
var obj16692_onTap_activeActionGroupIndex = -1;
var obj16692_onTap_runningActionsCount = 0;
var obj16692_onTap_loopCount = 0;
var obj16683_onTap_activeActionGroupIndex = -1;
var obj16683_onTap_runningActionsCount = 0;
var obj16683_onTap_loopCount = 0;
var obj16674_onTap_activeActionGroupIndex = -1;
var obj16674_onTap_runningActionsCount = 0;
var obj16674_onTap_loopCount = 0;
var obj16657_onTap_activeActionGroupIndex = -1;
var obj16657_onTap_runningActionsCount = 0;
var obj16657_onTap_loopCount = 0;
var obj16648_onTap_activeActionGroupIndex = -1;
var obj16648_onTap_runningActionsCount = 0;
var obj16648_onTap_loopCount = 0;
var obj16639_onTap_activeActionGroupIndex = -1;
var obj16639_onTap_runningActionsCount = 0;
var obj16639_onTap_loopCount = 0;
var obj16630_onTap_activeActionGroupIndex = -1;
var obj16630_onTap_runningActionsCount = 0;
var obj16630_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj15489_counterValue = 0;
var obj15489_counterTargetValue = 2;
var obj15489_counterCanExceedTargetValue = false;
var obj15592_counterValue = 0;
var obj15592_counterTargetValue = 2;
var obj15592_counterCanExceedTargetValue = false;
var obj16521_counterValue = 0;
var obj16521_counterTargetValue = 1;
var obj16521_counterCanExceedTargetValue = false;
var obj16518_counterValue = 0;
var obj16518_counterTargetValue = 2;
var obj16518_counterCanExceedTargetValue = false;
var obj16515_counterValue = 0;
var obj16515_counterTargetValue = 3;
var obj16515_counterCanExceedTargetValue = false;
var obj16509_counterValue = 0;
var obj16509_counterTargetValue = 1;
var obj16509_counterCanExceedTargetValue = false;
var obj16537_counterValue = 0;
var obj16537_counterTargetValue = 4;
var obj16537_counterCanExceedTargetValue = false;
var obj16534_counterValue = 0;
var obj16534_counterTargetValue = 5;
var obj16534_counterCanExceedTargetValue = false;
var obj16531_counterValue = 0;
var obj16531_counterTargetValue = 6;
var obj16531_counterCanExceedTargetValue = false;
var obj16551_counterValue = 0;
var obj16551_counterTargetValue = 6;
var obj16551_counterCanExceedTargetValue = false;
var obj16547_counterValue = 0;
var obj16547_counterTargetValue = 6;
var obj16547_counterCanExceedTargetValue = false;

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
		
obj15452_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15452_onTap_activeActionGroupIndex = -1;
		$("#obj15452").trigger("obj15452_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15452) {
				console.warn("de-queueing event obj15452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15452_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_15454();
function goToPage_15454() {
	window.obj15452_onTap_runningActionsCount = obj15452_onTap_runningActionsCount + 1;

	$("#anchor393")[0].click();
	window.obj15452_onTap_runningActionsCount = window.obj15452_onTap_runningActionsCount - 1;

if (window.obj15452_onTap_runningActionsCount < 0) {
	window.obj15452_onTap_runningActionsCount = 0;
} else if (window.obj15452_onTap_runningActionsCount == 0) {
	obj15452_onTap_actionGroup1();
}
}










































};
obj15452_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15452_onTap_activeActionGroupIndex = -1;
		$("#obj15452").trigger("obj15452_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15452) {
				console.warn("de-queueing event obj15452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15452_onTap_activeActionGroupIndex = 1;
	











































};
obj15463_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15463_onTap_activeActionGroupIndex = -1;
		$("#obj15463").trigger("obj15463_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15463) {
				console.warn("de-queueing event obj15463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15463_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15487
(function(){
	window.obj15463_onTap_runningActionsCount = obj15463_onTap_runningActionsCount + 1;


	var selector = "#obj15487";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15463_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15463_onTap_activeActionGroupIndex = -1;
		$("#obj15463").trigger("obj15463_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15463) {
				console.warn("de-queueing event obj15463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15463_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15466();
function playAudioFile_15466() {
	window.obj15463_onTap_runningActionsCount = obj15463_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15466")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15466");
			$("#obj_audio_playSoundFile15466").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup2();
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
				window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15463_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15463_onTap_activeActionGroupIndex = -1;
		$("#obj15463").trigger("obj15463_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15463) {
				console.warn("de-queueing event obj15463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15463_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_15467();
function runjs_15467() {
	window.obj15463_onTap_runningActionsCount = obj15463_onTap_runningActionsCount + 1;


	$("#obj15463").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24569();
function runjs_24569() {
	window.obj15463_onTap_runningActionsCount = obj15463_onTap_runningActionsCount + 1;


	$("#obj15463").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup3();
}
	}, 1);
}














};
obj15463_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15463_onTap_activeActionGroupIndex = -1;
		$("#obj15463").trigger("obj15463_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15463) {
				console.warn("de-queueing event obj15463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15463_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15489 
incrementCounter_15468();
function incrementCounter_15468() {
	window.obj15463_onTap_runningActionsCount = obj15463_onTap_runningActionsCount + 1;


	var oldValue = obj15489_counterValue;
	obj15489_counterValue = obj15489_counterValue + 1;
	if (! obj15489_counterCanExceedTargetValue && obj15489_counterValue > obj15489_counterTargetValue) {
		obj15489_counterValue = obj15489_counterTargetValue;
	}

	if (oldValue != obj15489_counterValue) {
		$("#obj15489").trigger('SCEventCounterValueChange');
		$("#obj15489").trigger('SCEventCounterIncrease');
		if (obj15489_counterValue == obj15489_counterTargetValue)
			$("#obj15489").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16509 
incrementCounter_16546();
function incrementCounter_16546() {
	window.obj15463_onTap_runningActionsCount = obj15463_onTap_runningActionsCount + 1;


	var oldValue = obj16509_counterValue;
	obj16509_counterValue = obj16509_counterValue + 1;
	if (! obj16509_counterCanExceedTargetValue && obj16509_counterValue > obj16509_counterTargetValue) {
		obj16509_counterValue = obj16509_counterTargetValue;
	}

	if (oldValue != obj16509_counterValue) {
		$("#obj16509").trigger('SCEventCounterValueChange');
		$("#obj16509").trigger('SCEventCounterIncrease');
		if (obj16509_counterValue == obj16509_counterTargetValue)
			$("#obj16509").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16555();
function incrementCounter_16555() {
	window.obj15463_onTap_runningActionsCount = obj15463_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16551 
incrementCounter_16556();
function incrementCounter_16556() {
	window.obj15463_onTap_runningActionsCount = obj15463_onTap_runningActionsCount + 1;


	var oldValue = obj16551_counterValue;
	obj16551_counterValue = obj16551_counterValue + 1;
	if (! obj16551_counterCanExceedTargetValue && obj16551_counterValue > obj16551_counterTargetValue) {
		obj16551_counterValue = obj16551_counterTargetValue;
	}

	if (oldValue != obj16551_counterValue) {
		$("#obj16551").trigger('SCEventCounterValueChange');
		$("#obj16551").trigger('SCEventCounterIncrease');
		if (obj16551_counterValue == obj16551_counterTargetValue)
			$("#obj16551").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15463_onTap_runningActionsCount = window.obj15463_onTap_runningActionsCount - 1;

if (window.obj15463_onTap_runningActionsCount < 0) {
	window.obj15463_onTap_runningActionsCount = 0;
} else if (window.obj15463_onTap_runningActionsCount == 0) {
	obj15463_onTap_actionGroup4();
} }, 1);
}











};
obj15463_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15463_onTap_activeActionGroupIndex = -1;
		$("#obj15463").trigger("obj15463_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15463) {
				console.warn("de-queueing event obj15463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15463_onTap_activeActionGroupIndex = 4;
	











































};
obj15469_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15469_onTap_activeActionGroupIndex = -1;
		$("#obj15469").trigger("obj15469_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15469) {
				console.warn("de-queueing event obj15469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15469_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15487
(function(){
	window.obj15469_onTap_runningActionsCount = obj15469_onTap_runningActionsCount + 1;


	var selector = "#obj15487";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15469_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15469_onTap_activeActionGroupIndex = -1;
		$("#obj15469").trigger("obj15469_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15469) {
				console.warn("de-queueing event obj15469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15469_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15471();
function playAudioFile_15471() {
	window.obj15469_onTap_runningActionsCount = obj15469_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15471")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15471");
			$("#obj_audio_playSoundFile15471").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup2();
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
				window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15469_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15469_onTap_activeActionGroupIndex = -1;
		$("#obj15469").trigger("obj15469_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15469) {
				console.warn("de-queueing event obj15469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15469_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24570();
function runjs_24570() {
	window.obj15469_onTap_runningActionsCount = obj15469_onTap_runningActionsCount + 1;


	$("#obj15469").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24571();
function runjs_24571() {
	window.obj15469_onTap_runningActionsCount = obj15469_onTap_runningActionsCount + 1;


	$("#obj15469").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup3();
}
	}, 1);
}














};
obj15469_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15469_onTap_activeActionGroupIndex = -1;
		$("#obj15469").trigger("obj15469_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15469) {
				console.warn("de-queueing event obj15469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15469_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15489 
incrementCounter_16558();
function incrementCounter_16558() {
	window.obj15469_onTap_runningActionsCount = obj15469_onTap_runningActionsCount + 1;


	var oldValue = obj15489_counterValue;
	obj15489_counterValue = obj15489_counterValue + 1;
	if (! obj15489_counterCanExceedTargetValue && obj15489_counterValue > obj15489_counterTargetValue) {
		obj15489_counterValue = obj15489_counterTargetValue;
	}

	if (oldValue != obj15489_counterValue) {
		$("#obj15489").trigger('SCEventCounterValueChange');
		$("#obj15489").trigger('SCEventCounterIncrease');
		if (obj15489_counterValue == obj15489_counterTargetValue)
			$("#obj15489").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16557();
function incrementCounter_16557() {
	window.obj15469_onTap_runningActionsCount = obj15469_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15469_onTap_runningActionsCount = window.obj15469_onTap_runningActionsCount - 1;

if (window.obj15469_onTap_runningActionsCount < 0) {
	window.obj15469_onTap_runningActionsCount = 0;
} else if (window.obj15469_onTap_runningActionsCount == 0) {
	obj15469_onTap_actionGroup4();
} }, 1);
}











};
obj15469_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15469_onTap_activeActionGroupIndex = -1;
		$("#obj15469").trigger("obj15469_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15469) {
				console.warn("de-queueing event obj15469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15469_onTap_activeActionGroupIndex = 4;
	











































};
obj15475_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15475_onTap_activeActionGroupIndex = -1;
		$("#obj15475").trigger("obj15475_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15475) {
				console.warn("de-queueing event obj15475." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15475").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15475_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15487
(function(){
	window.obj15475_onTap_runningActionsCount = obj15475_onTap_runningActionsCount + 1;


	var selector = "#obj15487";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15475_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15475_onTap_activeActionGroupIndex = -1;
		$("#obj15475").trigger("obj15475_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15475) {
				console.warn("de-queueing event obj15475." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15475").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15475_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15477();
function playAudioFile_15477() {
	window.obj15475_onTap_runningActionsCount = obj15475_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15477")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15477");
			$("#obj_audio_playSoundFile15477").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup2();
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
				window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15475_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15475_onTap_activeActionGroupIndex = -1;
		$("#obj15475").trigger("obj15475_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15475) {
				console.warn("de-queueing event obj15475." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15475").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15475_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24572();
function runjs_24572() {
	window.obj15475_onTap_runningActionsCount = obj15475_onTap_runningActionsCount + 1;


	$("#obj15475").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24573();
function runjs_24573() {
	window.obj15475_onTap_runningActionsCount = obj15475_onTap_runningActionsCount + 1;


	$("#obj15475").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup3();
}
	}, 1);
}














};
obj15475_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15475_onTap_activeActionGroupIndex = -1;
		$("#obj15475").trigger("obj15475_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15475) {
				console.warn("de-queueing event obj15475." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15475").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15475_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15489 
incrementCounter_16561();
function incrementCounter_16561() {
	window.obj15475_onTap_runningActionsCount = obj15475_onTap_runningActionsCount + 1;


	var oldValue = obj15489_counterValue;
	obj15489_counterValue = obj15489_counterValue + 1;
	if (! obj15489_counterCanExceedTargetValue && obj15489_counterValue > obj15489_counterTargetValue) {
		obj15489_counterValue = obj15489_counterTargetValue;
	}

	if (oldValue != obj15489_counterValue) {
		$("#obj15489").trigger('SCEventCounterValueChange');
		$("#obj15489").trigger('SCEventCounterIncrease');
		if (obj15489_counterValue == obj15489_counterTargetValue)
			$("#obj15489").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16562();
function incrementCounter_16562() {
	window.obj15475_onTap_runningActionsCount = obj15475_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15475_onTap_runningActionsCount = window.obj15475_onTap_runningActionsCount - 1;

if (window.obj15475_onTap_runningActionsCount < 0) {
	window.obj15475_onTap_runningActionsCount = 0;
} else if (window.obj15475_onTap_runningActionsCount == 0) {
	obj15475_onTap_actionGroup4();
} }, 1);
}











};
obj15475_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15475_onTap_activeActionGroupIndex = -1;
		$("#obj15475").trigger("obj15475_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15475) {
				console.warn("de-queueing event obj15475." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15475").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15475_onTap_activeActionGroupIndex = 4;
	











































};
obj15481_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15481_onTap_activeActionGroupIndex = -1;
		$("#obj15481").trigger("obj15481_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15481) {
				console.warn("de-queueing event obj15481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15481_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15487
(function(){
	window.obj15481_onTap_runningActionsCount = obj15481_onTap_runningActionsCount + 1;


	var selector = "#obj15487";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15481_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15481_onTap_activeActionGroupIndex = -1;
		$("#obj15481").trigger("obj15481_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15481) {
				console.warn("de-queueing event obj15481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15481_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15483();
function playAudioFile_15483() {
	window.obj15481_onTap_runningActionsCount = obj15481_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15483")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15483");
			$("#obj_audio_playSoundFile15483").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup2();
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
				window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15481_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15481_onTap_activeActionGroupIndex = -1;
		$("#obj15481").trigger("obj15481_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15481) {
				console.warn("de-queueing event obj15481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15481_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24574();
function runjs_24574() {
	window.obj15481_onTap_runningActionsCount = obj15481_onTap_runningActionsCount + 1;


	$("#obj15481").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24575();
function runjs_24575() {
	window.obj15481_onTap_runningActionsCount = obj15481_onTap_runningActionsCount + 1;


	$("#obj15481").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup3();
}
	}, 1);
}














};
obj15481_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15481_onTap_activeActionGroupIndex = -1;
		$("#obj15481").trigger("obj15481_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15481) {
				console.warn("de-queueing event obj15481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15481_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15489 
incrementCounter_16564();
function incrementCounter_16564() {
	window.obj15481_onTap_runningActionsCount = obj15481_onTap_runningActionsCount + 1;


	var oldValue = obj15489_counterValue;
	obj15489_counterValue = obj15489_counterValue + 1;
	if (! obj15489_counterCanExceedTargetValue && obj15489_counterValue > obj15489_counterTargetValue) {
		obj15489_counterValue = obj15489_counterTargetValue;
	}

	if (oldValue != obj15489_counterValue) {
		$("#obj15489").trigger('SCEventCounterValueChange');
		$("#obj15489").trigger('SCEventCounterIncrease');
		if (obj15489_counterValue == obj15489_counterTargetValue)
			$("#obj15489").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16565();
function incrementCounter_16565() {
	window.obj15481_onTap_runningActionsCount = obj15481_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15481_onTap_runningActionsCount = window.obj15481_onTap_runningActionsCount - 1;

if (window.obj15481_onTap_runningActionsCount < 0) {
	window.obj15481_onTap_runningActionsCount = 0;
} else if (window.obj15481_onTap_runningActionsCount == 0) {
	obj15481_onTap_actionGroup4();
} }, 1);
}











};
obj15481_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15481_onTap_activeActionGroupIndex = -1;
		$("#obj15481").trigger("obj15481_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15481) {
				console.warn("de-queueing event obj15481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15481_onTap_activeActionGroupIndex = 4;
	











































};
obj15489_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15489_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15489").trigger("obj15489_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15489) {
				console.warn("de-queueing event obj15489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15489_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15524 
hide_15491();
function hide_15491() {
	var selector = "#obj15524";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15491(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15526 
hide_15492();
function hide_15492() {
	var selector = "#obj15526";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15492(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15528 
hide_15493();
function hide_15493() {
	var selector = "#obj15528";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15493(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15534 
hide_15494();
function hide_15494() {
	var selector = "#obj15534";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15494(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15540 
hide_15495();
function hide_15495() {
	var selector = "#obj15540";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15495(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15546 
hide_15496();
function hide_15496() {
	var selector = "#obj15546";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15496(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15558 
hide_15498();
function hide_15498() {
	var selector = "#obj15558";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15498(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15459 
hide_15499();
function hide_15499() {
	var selector = "#obj15459";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15499(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15461 
hide_15500();
function hide_15500() {
	var selector = "#obj15461";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15500(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15463 
hide_15501();
function hide_15501() {
	var selector = "#obj15463";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15501(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15469 
hide_15502();
function hide_15502() {
	var selector = "#obj15469";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15502(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15475 
hide_15503();
function hide_15503() {
	var selector = "#obj15475";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15503(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15481 
hide_15504();
function hide_15504() {
	var selector = "#obj15481";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15504(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15487 
hide_15505();
function hide_15505() {
	var selector = "#obj15487";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15505(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15457 
hide_15506();
function hide_15506() {
	var selector = "#obj15457";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15506(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15522 
hide_15507();
function hide_15507() {
	var selector = "#obj15522";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15507(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15489_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15489_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15489").trigger("obj15489_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15489) {
				console.warn("de-queueing event obj15489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15489_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj15560
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15560";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15562
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15562";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15564
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15564";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15566
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15566";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15572
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15572";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15578
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15578";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15584
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15584";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15618
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15618";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15620
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15620";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15622
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15622";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15624
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15624";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15630
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15630";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15636
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15636";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15642
(function(){
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = obj15489_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj15642";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15489_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15489_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15489_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15489").trigger("obj15489_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15489) {
				console.warn("de-queueing event obj15489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15489_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj15528_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15528_onTap_activeActionGroupIndex = -1;
		$("#obj15528").trigger("obj15528_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15528) {
				console.warn("de-queueing event obj15528." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15528").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15528_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15558
(function(){
	window.obj15528_onTap_runningActionsCount = obj15528_onTap_runningActionsCount + 1;


	var selector = "#obj15558";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15528_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15528_onTap_activeActionGroupIndex = -1;
		$("#obj15528").trigger("obj15528_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15528) {
				console.warn("de-queueing event obj15528." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15528").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15528_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15530();
function playAudioFile_15530() {
	window.obj15528_onTap_runningActionsCount = obj15528_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15530")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15530");
			$("#obj_audio_playSoundFile15530").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup2();
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
				window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15528_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15528_onTap_activeActionGroupIndex = -1;
		$("#obj15528").trigger("obj15528_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15528) {
				console.warn("de-queueing event obj15528." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15528").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15528_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24576();
function runjs_24576() {
	window.obj15528_onTap_runningActionsCount = obj15528_onTap_runningActionsCount + 1;


	$("#obj15528").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24577();
function runjs_24577() {
	window.obj15528_onTap_runningActionsCount = obj15528_onTap_runningActionsCount + 1;


	$("#obj15528").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup3();
}
	}, 1);
}














};
obj15528_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15528_onTap_activeActionGroupIndex = -1;
		$("#obj15528").trigger("obj15528_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15528) {
				console.warn("de-queueing event obj15528." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15528").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15528_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15489 
incrementCounter_16579();
function incrementCounter_16579() {
	window.obj15528_onTap_runningActionsCount = obj15528_onTap_runningActionsCount + 1;


	var oldValue = obj15489_counterValue;
	obj15489_counterValue = obj15489_counterValue + 1;
	if (! obj15489_counterCanExceedTargetValue && obj15489_counterValue > obj15489_counterTargetValue) {
		obj15489_counterValue = obj15489_counterTargetValue;
	}

	if (oldValue != obj15489_counterValue) {
		$("#obj15489").trigger('SCEventCounterValueChange');
		$("#obj15489").trigger('SCEventCounterIncrease');
		if (obj15489_counterValue == obj15489_counterTargetValue)
			$("#obj15489").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16580();
function incrementCounter_16580() {
	window.obj15528_onTap_runningActionsCount = obj15528_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15528_onTap_runningActionsCount = window.obj15528_onTap_runningActionsCount - 1;

if (window.obj15528_onTap_runningActionsCount < 0) {
	window.obj15528_onTap_runningActionsCount = 0;
} else if (window.obj15528_onTap_runningActionsCount == 0) {
	obj15528_onTap_actionGroup4();
} }, 1);
}











};
obj15528_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15528_onTap_activeActionGroupIndex = -1;
		$("#obj15528").trigger("obj15528_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15528) {
				console.warn("de-queueing event obj15528." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15528").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15528_onTap_activeActionGroupIndex = 4;
	











































};
obj15534_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15534_onTap_activeActionGroupIndex = -1;
		$("#obj15534").trigger("obj15534_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15534) {
				console.warn("de-queueing event obj15534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15534_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15558
(function(){
	window.obj15534_onTap_runningActionsCount = obj15534_onTap_runningActionsCount + 1;


	var selector = "#obj15558";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15534_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15534_onTap_activeActionGroupIndex = -1;
		$("#obj15534").trigger("obj15534_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15534) {
				console.warn("de-queueing event obj15534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15534_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15536();
function playAudioFile_15536() {
	window.obj15534_onTap_runningActionsCount = obj15534_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15536")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15536");
			$("#obj_audio_playSoundFile15536").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup2();
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
				window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15534_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15534_onTap_activeActionGroupIndex = -1;
		$("#obj15534").trigger("obj15534_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15534) {
				console.warn("de-queueing event obj15534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15534_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_16569();
function runjs_16569() {
	window.obj15534_onTap_runningActionsCount = obj15534_onTap_runningActionsCount + 1;


	$("#obj15534").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24579();
function runjs_24579() {
	window.obj15534_onTap_runningActionsCount = obj15534_onTap_runningActionsCount + 1;


	$("#obj15534").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup3();
}
	}, 1);
}














};
obj15534_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15534_onTap_activeActionGroupIndex = -1;
		$("#obj15534").trigger("obj15534_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15534) {
				console.warn("de-queueing event obj15534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15534_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15489 
incrementCounter_16573();
function incrementCounter_16573() {
	window.obj15534_onTap_runningActionsCount = obj15534_onTap_runningActionsCount + 1;


	var oldValue = obj15489_counterValue;
	obj15489_counterValue = obj15489_counterValue + 1;
	if (! obj15489_counterCanExceedTargetValue && obj15489_counterValue > obj15489_counterTargetValue) {
		obj15489_counterValue = obj15489_counterTargetValue;
	}

	if (oldValue != obj15489_counterValue) {
		$("#obj15489").trigger('SCEventCounterValueChange');
		$("#obj15489").trigger('SCEventCounterIncrease');
		if (obj15489_counterValue == obj15489_counterTargetValue)
			$("#obj15489").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16509 
incrementCounter_16575();
function incrementCounter_16575() {
	window.obj15534_onTap_runningActionsCount = obj15534_onTap_runningActionsCount + 1;


	var oldValue = obj16509_counterValue;
	obj16509_counterValue = obj16509_counterValue + 1;
	if (! obj16509_counterCanExceedTargetValue && obj16509_counterValue > obj16509_counterTargetValue) {
		obj16509_counterValue = obj16509_counterTargetValue;
	}

	if (oldValue != obj16509_counterValue) {
		$("#obj16509").trigger('SCEventCounterValueChange');
		$("#obj16509").trigger('SCEventCounterIncrease');
		if (obj16509_counterValue == obj16509_counterTargetValue)
			$("#obj16509").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16551 
incrementCounter_16576();
function incrementCounter_16576() {
	window.obj15534_onTap_runningActionsCount = obj15534_onTap_runningActionsCount + 1;


	var oldValue = obj16551_counterValue;
	obj16551_counterValue = obj16551_counterValue + 1;
	if (! obj16551_counterCanExceedTargetValue && obj16551_counterValue > obj16551_counterTargetValue) {
		obj16551_counterValue = obj16551_counterTargetValue;
	}

	if (oldValue != obj16551_counterValue) {
		$("#obj16551").trigger('SCEventCounterValueChange');
		$("#obj16551").trigger('SCEventCounterIncrease');
		if (obj16551_counterValue == obj16551_counterTargetValue)
			$("#obj16551").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16577();
function incrementCounter_16577() {
	window.obj15534_onTap_runningActionsCount = obj15534_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15534_onTap_runningActionsCount = window.obj15534_onTap_runningActionsCount - 1;

if (window.obj15534_onTap_runningActionsCount < 0) {
	window.obj15534_onTap_runningActionsCount = 0;
} else if (window.obj15534_onTap_runningActionsCount == 0) {
	obj15534_onTap_actionGroup4();
} }, 1);
}











};
obj15534_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15534_onTap_activeActionGroupIndex = -1;
		$("#obj15534").trigger("obj15534_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15534) {
				console.warn("de-queueing event obj15534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15534_onTap_activeActionGroupIndex = 4;
	











































};
obj15540_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15540_onTap_activeActionGroupIndex = -1;
		$("#obj15540").trigger("obj15540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15540) {
				console.warn("de-queueing event obj15540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15540_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15558
(function(){
	window.obj15540_onTap_runningActionsCount = obj15540_onTap_runningActionsCount + 1;


	var selector = "#obj15558";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15540_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15540_onTap_activeActionGroupIndex = -1;
		$("#obj15540").trigger("obj15540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15540) {
				console.warn("de-queueing event obj15540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15540_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15542();
function playAudioFile_15542() {
	window.obj15540_onTap_runningActionsCount = obj15540_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15542")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15542");
			$("#obj_audio_playSoundFile15542").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup2();
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
				window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15540_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15540_onTap_activeActionGroupIndex = -1;
		$("#obj15540").trigger("obj15540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15540) {
				console.warn("de-queueing event obj15540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15540_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24580();
function runjs_24580() {
	window.obj15540_onTap_runningActionsCount = obj15540_onTap_runningActionsCount + 1;


	$("#obj15540").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24581();
function runjs_24581() {
	window.obj15540_onTap_runningActionsCount = obj15540_onTap_runningActionsCount + 1;


	$("#obj15540").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup3();
}
	}, 1);
}














};
obj15540_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15540_onTap_activeActionGroupIndex = -1;
		$("#obj15540").trigger("obj15540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15540) {
				console.warn("de-queueing event obj15540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15540_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15489 
incrementCounter_16582();
function incrementCounter_16582() {
	window.obj15540_onTap_runningActionsCount = obj15540_onTap_runningActionsCount + 1;


	var oldValue = obj15489_counterValue;
	obj15489_counterValue = obj15489_counterValue + 1;
	if (! obj15489_counterCanExceedTargetValue && obj15489_counterValue > obj15489_counterTargetValue) {
		obj15489_counterValue = obj15489_counterTargetValue;
	}

	if (oldValue != obj15489_counterValue) {
		$("#obj15489").trigger('SCEventCounterValueChange');
		$("#obj15489").trigger('SCEventCounterIncrease');
		if (obj15489_counterValue == obj15489_counterTargetValue)
			$("#obj15489").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16583();
function incrementCounter_16583() {
	window.obj15540_onTap_runningActionsCount = obj15540_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15540_onTap_runningActionsCount = window.obj15540_onTap_runningActionsCount - 1;

if (window.obj15540_onTap_runningActionsCount < 0) {
	window.obj15540_onTap_runningActionsCount = 0;
} else if (window.obj15540_onTap_runningActionsCount == 0) {
	obj15540_onTap_actionGroup4();
} }, 1);
}











};
obj15540_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15540_onTap_activeActionGroupIndex = -1;
		$("#obj15540").trigger("obj15540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15540) {
				console.warn("de-queueing event obj15540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15540_onTap_activeActionGroupIndex = 4;
	











































};
obj15546_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15546_onTap_activeActionGroupIndex = -1;
		$("#obj15546").trigger("obj15546_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15546) {
				console.warn("de-queueing event obj15546." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15546").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15546_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15558
(function(){
	window.obj15546_onTap_runningActionsCount = obj15546_onTap_runningActionsCount + 1;


	var selector = "#obj15558";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15546_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15546_onTap_activeActionGroupIndex = -1;
		$("#obj15546").trigger("obj15546_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15546) {
				console.warn("de-queueing event obj15546." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15546").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15546_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15549();
function playAudioFile_15549() {
	window.obj15546_onTap_runningActionsCount = obj15546_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15549")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15549");
			$("#obj_audio_playSoundFile15549").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup2();
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
				window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15546_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15546_onTap_activeActionGroupIndex = -1;
		$("#obj15546").trigger("obj15546_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15546) {
				console.warn("de-queueing event obj15546." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15546").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15546_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24582();
function runjs_24582() {
	window.obj15546_onTap_runningActionsCount = obj15546_onTap_runningActionsCount + 1;


	$("#obj15546").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24583();
function runjs_24583() {
	window.obj15546_onTap_runningActionsCount = obj15546_onTap_runningActionsCount + 1;


	$("#obj15546").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup3();
}
	}, 1);
}














};
obj15546_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15546_onTap_activeActionGroupIndex = -1;
		$("#obj15546").trigger("obj15546_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15546) {
				console.warn("de-queueing event obj15546." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15546").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15546_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj16547 
incrementCounter_16586();
function incrementCounter_16586() {
	window.obj15546_onTap_runningActionsCount = obj15546_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj15489 
incrementCounter_15551();
function incrementCounter_15551() {
	window.obj15546_onTap_runningActionsCount = obj15546_onTap_runningActionsCount + 1;


	var oldValue = obj15489_counterValue;
	obj15489_counterValue = obj15489_counterValue + 1;
	if (! obj15489_counterCanExceedTargetValue && obj15489_counterValue > obj15489_counterTargetValue) {
		obj15489_counterValue = obj15489_counterTargetValue;
	}

	if (oldValue != obj15489_counterValue) {
		$("#obj15489").trigger('SCEventCounterValueChange');
		$("#obj15489").trigger('SCEventCounterIncrease');
		if (obj15489_counterValue == obj15489_counterTargetValue)
			$("#obj15489").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15546_onTap_runningActionsCount = window.obj15546_onTap_runningActionsCount - 1;

if (window.obj15546_onTap_runningActionsCount < 0) {
	window.obj15546_onTap_runningActionsCount = 0;
} else if (window.obj15546_onTap_runningActionsCount == 0) {
	obj15546_onTap_actionGroup4();
} }, 1);
}











};
obj15546_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15546_onTap_activeActionGroupIndex = -1;
		$("#obj15546").trigger("obj15546_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15546) {
				console.warn("de-queueing event obj15546." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15546").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15546_onTap_activeActionGroupIndex = 4;
	











































};
obj15566_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15566_onTap_activeActionGroupIndex = -1;
		$("#obj15566").trigger("obj15566_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15566) {
				console.warn("de-queueing event obj15566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15566_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15590
(function(){
	window.obj15566_onTap_runningActionsCount = obj15566_onTap_runningActionsCount + 1;


	var selector = "#obj15590";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15566_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15566_onTap_activeActionGroupIndex = -1;
		$("#obj15566").trigger("obj15566_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15566) {
				console.warn("de-queueing event obj15566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15566_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15568();
function playAudioFile_15568() {
	window.obj15566_onTap_runningActionsCount = obj15566_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15568")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15568");
			$("#obj_audio_playSoundFile15568").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup2();
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
				window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15566_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15566_onTap_activeActionGroupIndex = -1;
		$("#obj15566").trigger("obj15566_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15566) {
				console.warn("de-queueing event obj15566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15566_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24584();
function runjs_24584() {
	window.obj15566_onTap_runningActionsCount = obj15566_onTap_runningActionsCount + 1;


	$("#obj15566").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24585();
function runjs_24585() {
	window.obj15566_onTap_runningActionsCount = obj15566_onTap_runningActionsCount + 1;


	$("#obj15566").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup3();
}
	}, 1);
}














};
obj15566_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15566_onTap_activeActionGroupIndex = -1;
		$("#obj15566").trigger("obj15566_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15566) {
				console.warn("de-queueing event obj15566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15566_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15592 
incrementCounter_16600();
function incrementCounter_16600() {
	window.obj15566_onTap_runningActionsCount = obj15566_onTap_runningActionsCount + 1;


	var oldValue = obj15592_counterValue;
	obj15592_counterValue = obj15592_counterValue + 1;
	if (! obj15592_counterCanExceedTargetValue && obj15592_counterValue > obj15592_counterTargetValue) {
		obj15592_counterValue = obj15592_counterTargetValue;
	}

	if (oldValue != obj15592_counterValue) {
		$("#obj15592").trigger('SCEventCounterValueChange');
		$("#obj15592").trigger('SCEventCounterIncrease');
		if (obj15592_counterValue == obj15592_counterTargetValue)
			$("#obj15592").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16601();
function incrementCounter_16601() {
	window.obj15566_onTap_runningActionsCount = obj15566_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15566_onTap_runningActionsCount = window.obj15566_onTap_runningActionsCount - 1;

if (window.obj15566_onTap_runningActionsCount < 0) {
	window.obj15566_onTap_runningActionsCount = 0;
} else if (window.obj15566_onTap_runningActionsCount == 0) {
	obj15566_onTap_actionGroup4();
} }, 1);
}











};
obj15566_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15566_onTap_activeActionGroupIndex = -1;
		$("#obj15566").trigger("obj15566_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15566) {
				console.warn("de-queueing event obj15566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15566_onTap_activeActionGroupIndex = 4;
	











































};
obj15572_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15572_onTap_activeActionGroupIndex = -1;
		$("#obj15572").trigger("obj15572_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15572) {
				console.warn("de-queueing event obj15572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15572_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15590
(function(){
	window.obj15572_onTap_runningActionsCount = obj15572_onTap_runningActionsCount + 1;


	var selector = "#obj15590";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15572_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15572_onTap_activeActionGroupIndex = -1;
		$("#obj15572").trigger("obj15572_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15572) {
				console.warn("de-queueing event obj15572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15572_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15574();
function playAudioFile_15574() {
	window.obj15572_onTap_runningActionsCount = obj15572_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15574")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15574");
			$("#obj_audio_playSoundFile15574").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup2();
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
				window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15572_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15572_onTap_activeActionGroupIndex = -1;
		$("#obj15572").trigger("obj15572_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15572) {
				console.warn("de-queueing event obj15572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15572_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24586();
function runjs_24586() {
	window.obj15572_onTap_runningActionsCount = obj15572_onTap_runningActionsCount + 1;


	$("#obj15572").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24587();
function runjs_24587() {
	window.obj15572_onTap_runningActionsCount = obj15572_onTap_runningActionsCount + 1;


	$("#obj15572").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup3();
}
	}, 1);
}














};
obj15572_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15572_onTap_activeActionGroupIndex = -1;
		$("#obj15572").trigger("obj15572_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15572) {
				console.warn("de-queueing event obj15572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15572_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15592 
incrementCounter_16597();
function incrementCounter_16597() {
	window.obj15572_onTap_runningActionsCount = obj15572_onTap_runningActionsCount + 1;


	var oldValue = obj15592_counterValue;
	obj15592_counterValue = obj15592_counterValue + 1;
	if (! obj15592_counterCanExceedTargetValue && obj15592_counterValue > obj15592_counterTargetValue) {
		obj15592_counterValue = obj15592_counterTargetValue;
	}

	if (oldValue != obj15592_counterValue) {
		$("#obj15592").trigger('SCEventCounterValueChange');
		$("#obj15592").trigger('SCEventCounterIncrease');
		if (obj15592_counterValue == obj15592_counterTargetValue)
			$("#obj15592").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16598();
function incrementCounter_16598() {
	window.obj15572_onTap_runningActionsCount = obj15572_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15572_onTap_runningActionsCount = window.obj15572_onTap_runningActionsCount - 1;

if (window.obj15572_onTap_runningActionsCount < 0) {
	window.obj15572_onTap_runningActionsCount = 0;
} else if (window.obj15572_onTap_runningActionsCount == 0) {
	obj15572_onTap_actionGroup4();
} }, 1);
}











};
obj15572_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15572_onTap_activeActionGroupIndex = -1;
		$("#obj15572").trigger("obj15572_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15572) {
				console.warn("de-queueing event obj15572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15572_onTap_activeActionGroupIndex = 4;
	











































};
obj15578_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15578_onTap_activeActionGroupIndex = -1;
		$("#obj15578").trigger("obj15578_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15578) {
				console.warn("de-queueing event obj15578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15578_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15590
(function(){
	window.obj15578_onTap_runningActionsCount = obj15578_onTap_runningActionsCount + 1;


	var selector = "#obj15590";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15578_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15578_onTap_activeActionGroupIndex = -1;
		$("#obj15578").trigger("obj15578_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15578) {
				console.warn("de-queueing event obj15578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15578_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15580();
function playAudioFile_15580() {
	window.obj15578_onTap_runningActionsCount = obj15578_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15580")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15580");
			$("#obj_audio_playSoundFile15580").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup2();
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
				window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15578_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15578_onTap_activeActionGroupIndex = -1;
		$("#obj15578").trigger("obj15578_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15578) {
				console.warn("de-queueing event obj15578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15578_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_16588();
function runjs_16588() {
	window.obj15578_onTap_runningActionsCount = obj15578_onTap_runningActionsCount + 1;


	$("#obj15578").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup3();
}
	}, 1);
}














};
obj15578_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15578_onTap_activeActionGroupIndex = -1;
		$("#obj15578").trigger("obj15578_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15578) {
				console.warn("de-queueing event obj15578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15578_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_24589();
function runjs_24589() {
	window.obj15578_onTap_runningActionsCount = obj15578_onTap_runningActionsCount + 1;


	$("#obj15578").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup4();
}
	}, 1);
}














};
obj15578_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15578_onTap_activeActionGroupIndex = -1;
		$("#obj15578").trigger("obj15578_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15578) {
				console.warn("de-queueing event obj15578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15578_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj15592 
incrementCounter_16589();
function incrementCounter_16589() {
	window.obj15578_onTap_runningActionsCount = obj15578_onTap_runningActionsCount + 1;


	var oldValue = obj15592_counterValue;
	obj15592_counterValue = obj15592_counterValue + 1;
	if (! obj15592_counterCanExceedTargetValue && obj15592_counterValue > obj15592_counterTargetValue) {
		obj15592_counterValue = obj15592_counterTargetValue;
	}

	if (oldValue != obj15592_counterValue) {
		$("#obj15592").trigger('SCEventCounterValueChange');
		$("#obj15592").trigger('SCEventCounterIncrease');
		if (obj15592_counterValue == obj15592_counterTargetValue)
			$("#obj15592").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj16509 
incrementCounter_16605();
function incrementCounter_16605() {
	window.obj15578_onTap_runningActionsCount = obj15578_onTap_runningActionsCount + 1;


	var oldValue = obj16509_counterValue;
	obj16509_counterValue = obj16509_counterValue + 1;
	if (! obj16509_counterCanExceedTargetValue && obj16509_counterValue > obj16509_counterTargetValue) {
		obj16509_counterValue = obj16509_counterTargetValue;
	}

	if (oldValue != obj16509_counterValue) {
		$("#obj16509").trigger('SCEventCounterValueChange');
		$("#obj16509").trigger('SCEventCounterIncrease');
		if (obj16509_counterValue == obj16509_counterTargetValue)
			$("#obj16509").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj16551 
incrementCounter_16606();
function incrementCounter_16606() {
	window.obj15578_onTap_runningActionsCount = obj15578_onTap_runningActionsCount + 1;


	var oldValue = obj16551_counterValue;
	obj16551_counterValue = obj16551_counterValue + 1;
	if (! obj16551_counterCanExceedTargetValue && obj16551_counterValue > obj16551_counterTargetValue) {
		obj16551_counterValue = obj16551_counterTargetValue;
	}

	if (oldValue != obj16551_counterValue) {
		$("#obj16551").trigger('SCEventCounterValueChange');
		$("#obj16551").trigger('SCEventCounterIncrease');
		if (obj16551_counterValue == obj16551_counterTargetValue)
			$("#obj16551").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup5();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16607();
function incrementCounter_16607() {
	window.obj15578_onTap_runningActionsCount = obj15578_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15578_onTap_runningActionsCount = window.obj15578_onTap_runningActionsCount - 1;

if (window.obj15578_onTap_runningActionsCount < 0) {
	window.obj15578_onTap_runningActionsCount = 0;
} else if (window.obj15578_onTap_runningActionsCount == 0) {
	obj15578_onTap_actionGroup5();
} }, 1);
}











};
obj15578_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15578_onTap_activeActionGroupIndex = -1;
		$("#obj15578").trigger("obj15578_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15578) {
				console.warn("de-queueing event obj15578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15578_onTap_activeActionGroupIndex = 5;
	











































};
obj15584_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15584_onTap_activeActionGroupIndex = -1;
		$("#obj15584").trigger("obj15584_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15584) {
				console.warn("de-queueing event obj15584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15584_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15590
(function(){
	window.obj15584_onTap_runningActionsCount = obj15584_onTap_runningActionsCount + 1;


	var selector = "#obj15590";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15584_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15584_onTap_activeActionGroupIndex = -1;
		$("#obj15584").trigger("obj15584_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15584) {
				console.warn("de-queueing event obj15584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15584_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16595();
function playAudioFile_16595() {
	window.obj15584_onTap_runningActionsCount = obj15584_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16595")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16595");
			$("#obj_audio_playSoundFile16595").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup2();
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
				window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15584_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15584_onTap_activeActionGroupIndex = -1;
		$("#obj15584").trigger("obj15584_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15584) {
				console.warn("de-queueing event obj15584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15584_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24590();
function runjs_24590() {
	window.obj15584_onTap_runningActionsCount = obj15584_onTap_runningActionsCount + 1;


	$("#obj15584").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24591();
function runjs_24591() {
	window.obj15584_onTap_runningActionsCount = obj15584_onTap_runningActionsCount + 1;


	$("#obj15584").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup3();
}
	}, 1);
}














};
obj15584_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15584_onTap_activeActionGroupIndex = -1;
		$("#obj15584").trigger("obj15584_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15584) {
				console.warn("de-queueing event obj15584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15584_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15592 
incrementCounter_16593();
function incrementCounter_16593() {
	window.obj15584_onTap_runningActionsCount = obj15584_onTap_runningActionsCount + 1;


	var oldValue = obj15592_counterValue;
	obj15592_counterValue = obj15592_counterValue + 1;
	if (! obj15592_counterCanExceedTargetValue && obj15592_counterValue > obj15592_counterTargetValue) {
		obj15592_counterValue = obj15592_counterTargetValue;
	}

	if (oldValue != obj15592_counterValue) {
		$("#obj15592").trigger('SCEventCounterValueChange');
		$("#obj15592").trigger('SCEventCounterIncrease');
		if (obj15592_counterValue == obj15592_counterTargetValue)
			$("#obj15592").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16594();
function incrementCounter_16594() {
	window.obj15584_onTap_runningActionsCount = obj15584_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15584_onTap_runningActionsCount = window.obj15584_onTap_runningActionsCount - 1;

if (window.obj15584_onTap_runningActionsCount < 0) {
	window.obj15584_onTap_runningActionsCount = 0;
} else if (window.obj15584_onTap_runningActionsCount == 0) {
	obj15584_onTap_actionGroup4();
} }, 1);
}











};
obj15584_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15584_onTap_activeActionGroupIndex = -1;
		$("#obj15584").trigger("obj15584_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15584) {
				console.warn("de-queueing event obj15584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15584_onTap_activeActionGroupIndex = 4;
	











































};
obj15592_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15592_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15592").trigger("obj15592_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15592) {
				console.warn("de-queueing event obj15592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15592_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15620 
hide_15594();
function hide_15594() {
	var selector = "#obj15620";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15594(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15622 
hide_15595();
function hide_15595() {
	var selector = "#obj15622";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15595(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15624 
hide_15596();
function hide_15596() {
	var selector = "#obj15624";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15596(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15630 
hide_15597();
function hide_15597() {
	var selector = "#obj15630";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15597(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15636 
hide_15598();
function hide_15598() {
	var selector = "#obj15636";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15598(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15642 
hide_15599();
function hide_15599() {
	var selector = "#obj15642";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15599(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15618 
hide_15600();
function hide_15600() {
	var selector = "#obj15618";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15600(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15648 
hide_15601();
function hide_15601() {
	var selector = "#obj15648";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15601(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15562 
hide_15602();
function hide_15602() {
	var selector = "#obj15562";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15602(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15564 
hide_15603();
function hide_15603() {
	var selector = "#obj15564";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15603(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15566 
hide_15604();
function hide_15604() {
	var selector = "#obj15566";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15604(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15572 
hide_15605();
function hide_15605() {
	var selector = "#obj15572";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15605(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15578 
hide_15606();
function hide_15606() {
	var selector = "#obj15578";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15606(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15584 
hide_15607();
function hide_15607() {
	var selector = "#obj15584";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15607(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15590 
hide_15608();
function hide_15608() {
	var selector = "#obj15590";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15608(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15560 
hide_15609();
function hide_15609() {
	var selector = "#obj15560";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15609(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15592_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15592_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15592").trigger("obj15592_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15592) {
				console.warn("de-queueing event obj15592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15592_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj16714
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16714";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16712
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16712";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16710
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16710";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16701
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16701";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16692
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16692";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16683
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16683";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16674
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16674";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16670
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16670";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16668
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16668";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16666
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16666";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16657
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16657";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16648
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16648";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16639
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16639";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16630
(function(){
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = obj15592_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj16630";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15592_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15592_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15592_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15592_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15592").trigger("obj15592_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15592) {
				console.warn("de-queueing event obj15592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15592_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj15624_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15624_onTap_activeActionGroupIndex = -1;
		$("#obj15624").trigger("obj15624_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15624) {
				console.warn("de-queueing event obj15624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15624_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15648
(function(){
	window.obj15624_onTap_runningActionsCount = obj15624_onTap_runningActionsCount + 1;


	var selector = "#obj15648";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15624_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15624_onTap_activeActionGroupIndex = -1;
		$("#obj15624").trigger("obj15624_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15624) {
				console.warn("de-queueing event obj15624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15624_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15626();
function playAudioFile_15626() {
	window.obj15624_onTap_runningActionsCount = obj15624_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15626")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15626");
			$("#obj_audio_playSoundFile15626").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup2();
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
				window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15624_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15624_onTap_activeActionGroupIndex = -1;
		$("#obj15624").trigger("obj15624_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15624) {
				console.warn("de-queueing event obj15624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15624_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24592();
function runjs_24592() {
	window.obj15624_onTap_runningActionsCount = obj15624_onTap_runningActionsCount + 1;


	$("#obj15624").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24593();
function runjs_24593() {
	window.obj15624_onTap_runningActionsCount = obj15624_onTap_runningActionsCount + 1;


	$("#obj15624").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup3();
}
	}, 1);
}














};
obj15624_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15624_onTap_activeActionGroupIndex = -1;
		$("#obj15624").trigger("obj15624_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15624) {
				console.warn("de-queueing event obj15624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15624_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15592 
incrementCounter_16626();
function incrementCounter_16626() {
	window.obj15624_onTap_runningActionsCount = obj15624_onTap_runningActionsCount + 1;


	var oldValue = obj15592_counterValue;
	obj15592_counterValue = obj15592_counterValue + 1;
	if (! obj15592_counterCanExceedTargetValue && obj15592_counterValue > obj15592_counterTargetValue) {
		obj15592_counterValue = obj15592_counterTargetValue;
	}

	if (oldValue != obj15592_counterValue) {
		$("#obj15592").trigger('SCEventCounterValueChange');
		$("#obj15592").trigger('SCEventCounterIncrease');
		if (obj15592_counterValue == obj15592_counterTargetValue)
			$("#obj15592").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16627();
function incrementCounter_16627() {
	window.obj15624_onTap_runningActionsCount = obj15624_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15624_onTap_runningActionsCount = window.obj15624_onTap_runningActionsCount - 1;

if (window.obj15624_onTap_runningActionsCount < 0) {
	window.obj15624_onTap_runningActionsCount = 0;
} else if (window.obj15624_onTap_runningActionsCount == 0) {
	obj15624_onTap_actionGroup4();
} }, 1);
}











};
obj15624_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15624_onTap_activeActionGroupIndex = -1;
		$("#obj15624").trigger("obj15624_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15624) {
				console.warn("de-queueing event obj15624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15624_onTap_activeActionGroupIndex = 4;
	











































};
obj15630_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15630_onTap_activeActionGroupIndex = -1;
		$("#obj15630").trigger("obj15630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15630) {
				console.warn("de-queueing event obj15630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15630_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15648
(function(){
	window.obj15630_onTap_runningActionsCount = obj15630_onTap_runningActionsCount + 1;


	var selector = "#obj15648";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15630_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15630_onTap_activeActionGroupIndex = -1;
		$("#obj15630").trigger("obj15630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15630) {
				console.warn("de-queueing event obj15630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15630_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16612();
function playAudioFile_16612() {
	window.obj15630_onTap_runningActionsCount = obj15630_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16612")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16612");
			$("#obj_audio_playSoundFile16612").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup2();
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
				window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15630_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15630_onTap_activeActionGroupIndex = -1;
		$("#obj15630").trigger("obj15630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15630) {
				console.warn("de-queueing event obj15630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15630_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24594();
function runjs_24594() {
	window.obj15630_onTap_runningActionsCount = obj15630_onTap_runningActionsCount + 1;


	$("#obj15630").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24595();
function runjs_24595() {
	window.obj15630_onTap_runningActionsCount = obj15630_onTap_runningActionsCount + 1;


	$("#obj15630").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup3();
}
	}, 1);
}














};
obj15630_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15630_onTap_activeActionGroupIndex = -1;
		$("#obj15630").trigger("obj15630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15630) {
				console.warn("de-queueing event obj15630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15630_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15592 
incrementCounter_16623();
function incrementCounter_16623() {
	window.obj15630_onTap_runningActionsCount = obj15630_onTap_runningActionsCount + 1;


	var oldValue = obj15592_counterValue;
	obj15592_counterValue = obj15592_counterValue + 1;
	if (! obj15592_counterCanExceedTargetValue && obj15592_counterValue > obj15592_counterTargetValue) {
		obj15592_counterValue = obj15592_counterTargetValue;
	}

	if (oldValue != obj15592_counterValue) {
		$("#obj15592").trigger('SCEventCounterValueChange');
		$("#obj15592").trigger('SCEventCounterIncrease');
		if (obj15592_counterValue == obj15592_counterTargetValue)
			$("#obj15592").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16624();
function incrementCounter_16624() {
	window.obj15630_onTap_runningActionsCount = obj15630_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15630_onTap_runningActionsCount = window.obj15630_onTap_runningActionsCount - 1;

if (window.obj15630_onTap_runningActionsCount < 0) {
	window.obj15630_onTap_runningActionsCount = 0;
} else if (window.obj15630_onTap_runningActionsCount == 0) {
	obj15630_onTap_actionGroup4();
} }, 1);
}











};
obj15630_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15630_onTap_activeActionGroupIndex = -1;
		$("#obj15630").trigger("obj15630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15630) {
				console.warn("de-queueing event obj15630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15630_onTap_activeActionGroupIndex = 4;
	











































};
obj15636_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15636_onTap_activeActionGroupIndex = -1;
		$("#obj15636").trigger("obj15636_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15636) {
				console.warn("de-queueing event obj15636." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15636").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15636_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15648
(function(){
	window.obj15636_onTap_runningActionsCount = obj15636_onTap_runningActionsCount + 1;


	var selector = "#obj15648";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15636_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15636_onTap_activeActionGroupIndex = -1;
		$("#obj15636").trigger("obj15636_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15636) {
				console.warn("de-queueing event obj15636." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15636").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15636_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_15638();
function playAudioFile_15638() {
	window.obj15636_onTap_runningActionsCount = obj15636_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15638")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15638");
			$("#obj_audio_playSoundFile15638").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup2();
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
				window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15636_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15636_onTap_activeActionGroupIndex = -1;
		$("#obj15636").trigger("obj15636_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15636) {
				console.warn("de-queueing event obj15636." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15636").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15636_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24596();
function runjs_24596() {
	window.obj15636_onTap_runningActionsCount = obj15636_onTap_runningActionsCount + 1;


	$("#obj15636").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24597();
function runjs_24597() {
	window.obj15636_onTap_runningActionsCount = obj15636_onTap_runningActionsCount + 1;


	$("#obj15636").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup3();
}
	}, 1);
}














};
obj15636_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15636_onTap_activeActionGroupIndex = -1;
		$("#obj15636").trigger("obj15636_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15636) {
				console.warn("de-queueing event obj15636." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15636").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15636_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15592 
incrementCounter_16621();
function incrementCounter_16621() {
	window.obj15636_onTap_runningActionsCount = obj15636_onTap_runningActionsCount + 1;


	var oldValue = obj15592_counterValue;
	obj15592_counterValue = obj15592_counterValue + 1;
	if (! obj15592_counterCanExceedTargetValue && obj15592_counterValue > obj15592_counterTargetValue) {
		obj15592_counterValue = obj15592_counterTargetValue;
	}

	if (oldValue != obj15592_counterValue) {
		$("#obj15592").trigger('SCEventCounterValueChange');
		$("#obj15592").trigger('SCEventCounterIncrease');
		if (obj15592_counterValue == obj15592_counterTargetValue)
			$("#obj15592").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16620();
function incrementCounter_16620() {
	window.obj15636_onTap_runningActionsCount = obj15636_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15636_onTap_runningActionsCount = window.obj15636_onTap_runningActionsCount - 1;

if (window.obj15636_onTap_runningActionsCount < 0) {
	window.obj15636_onTap_runningActionsCount = 0;
} else if (window.obj15636_onTap_runningActionsCount == 0) {
	obj15636_onTap_actionGroup4();
} }, 1);
}











};
obj15636_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15636_onTap_activeActionGroupIndex = -1;
		$("#obj15636").trigger("obj15636_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15636) {
				console.warn("de-queueing event obj15636." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15636").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15636_onTap_activeActionGroupIndex = 4;
	











































};
obj15642_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15642_onTap_activeActionGroupIndex = -1;
		$("#obj15642").trigger("obj15642_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15642) {
				console.warn("de-queueing event obj15642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15642_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15648
(function(){
	window.obj15642_onTap_runningActionsCount = obj15642_onTap_runningActionsCount + 1;


	var selector = "#obj15648";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15642_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15642_onTap_activeActionGroupIndex = -1;
		$("#obj15642").trigger("obj15642_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15642) {
				console.warn("de-queueing event obj15642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15642_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16609();
function playAudioFile_16609() {
	window.obj15642_onTap_runningActionsCount = obj15642_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16609")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16609");
			$("#obj_audio_playSoundFile16609").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup2();
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
				window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj15642_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15642_onTap_activeActionGroupIndex = -1;
		$("#obj15642").trigger("obj15642_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15642) {
				console.warn("de-queueing event obj15642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15642_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_16610();
function runjs_16610() {
	window.obj15642_onTap_runningActionsCount = obj15642_onTap_runningActionsCount + 1;


	$("#obj15642").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24599();
function runjs_24599() {
	window.obj15642_onTap_runningActionsCount = obj15642_onTap_runningActionsCount + 1;


	$("#obj15642").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup3();
}
	}, 1);
}














};
obj15642_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15642_onTap_activeActionGroupIndex = -1;
		$("#obj15642").trigger("obj15642_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15642) {
				console.warn("de-queueing event obj15642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15642_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj15592 
incrementCounter_16611();
function incrementCounter_16611() {
	window.obj15642_onTap_runningActionsCount = obj15642_onTap_runningActionsCount + 1;


	var oldValue = obj15592_counterValue;
	obj15592_counterValue = obj15592_counterValue + 1;
	if (! obj15592_counterCanExceedTargetValue && obj15592_counterValue > obj15592_counterTargetValue) {
		obj15592_counterValue = obj15592_counterTargetValue;
	}

	if (oldValue != obj15592_counterValue) {
		$("#obj15592").trigger('SCEventCounterValueChange');
		$("#obj15592").trigger('SCEventCounterIncrease');
		if (obj15592_counterValue == obj15592_counterTargetValue)
			$("#obj15592").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16509 
incrementCounter_16616();
function incrementCounter_16616() {
	window.obj15642_onTap_runningActionsCount = obj15642_onTap_runningActionsCount + 1;


	var oldValue = obj16509_counterValue;
	obj16509_counterValue = obj16509_counterValue + 1;
	if (! obj16509_counterCanExceedTargetValue && obj16509_counterValue > obj16509_counterTargetValue) {
		obj16509_counterValue = obj16509_counterTargetValue;
	}

	if (oldValue != obj16509_counterValue) {
		$("#obj16509").trigger('SCEventCounterValueChange');
		$("#obj16509").trigger('SCEventCounterIncrease');
		if (obj16509_counterValue == obj16509_counterTargetValue)
			$("#obj16509").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16617();
function incrementCounter_16617() {
	window.obj15642_onTap_runningActionsCount = obj15642_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16551 
incrementCounter_16618();
function incrementCounter_16618() {
	window.obj15642_onTap_runningActionsCount = obj15642_onTap_runningActionsCount + 1;


	var oldValue = obj16551_counterValue;
	obj16551_counterValue = obj16551_counterValue + 1;
	if (! obj16551_counterCanExceedTargetValue && obj16551_counterValue > obj16551_counterTargetValue) {
		obj16551_counterValue = obj16551_counterTargetValue;
	}

	if (oldValue != obj16551_counterValue) {
		$("#obj16551").trigger('SCEventCounterValueChange');
		$("#obj16551").trigger('SCEventCounterIncrease');
		if (obj16551_counterValue == obj16551_counterTargetValue)
			$("#obj16551").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15642_onTap_runningActionsCount = window.obj15642_onTap_runningActionsCount - 1;

if (window.obj15642_onTap_runningActionsCount < 0) {
	window.obj15642_onTap_runningActionsCount = 0;
} else if (window.obj15642_onTap_runningActionsCount == 0) {
	obj15642_onTap_actionGroup4();
} }, 1);
}











};
obj15642_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15642_onTap_activeActionGroupIndex = -1;
		$("#obj15642").trigger("obj15642_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15642) {
				console.warn("de-queueing event obj15642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15642_onTap_activeActionGroupIndex = 4;
	











































};
obj16521_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16521_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16521").trigger("obj16521_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16521) {
				console.warn("de-queueing event obj16521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16521_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_16540();
function switchText_16540() {
	window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount = obj16521_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>1/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16524_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16524_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16524").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16524_content");
			setTimeout(function () {
				window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16521_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16524 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16521_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16521_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj16521_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16521_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16521").trigger("obj16521_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16521) {
				console.warn("de-queueing event obj16521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16521_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj16518_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16518_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16518").trigger("obj16518_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16518) {
				console.warn("de-queueing event obj16518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16518_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_16541();
function switchText_16541() {
	window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount = obj16518_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>2/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16524_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16524_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16524").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16524_content");
			setTimeout(function () {
				window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16518_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16524 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16518_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16518_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj16518_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16518_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16518").trigger("obj16518_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16518) {
				console.warn("de-queueing event obj16518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16518_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj16515_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16515_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16515").trigger("obj16515_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16515) {
				console.warn("de-queueing event obj16515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16515_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_16542();
function switchText_16542() {
	window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount = obj16515_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>3/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16524_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16524_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16524").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16524_content");
			setTimeout(function () {
				window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16515_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16524 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16515_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16515_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj16515_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16515_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16515").trigger("obj16515_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16515) {
				console.warn("de-queueing event obj16515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16515_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj16509_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16509_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16509").trigger("obj16509_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16509) {
				console.warn("de-queueing event obj16509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16509_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj16521 
incrementCounter_16511();
function incrementCounter_16511() {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = obj16509_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj16521_counterValue;
	obj16521_counterValue = obj16521_counterValue + 1;
	if (! obj16521_counterCanExceedTargetValue && obj16521_counterValue > obj16521_counterTargetValue) {
		obj16521_counterValue = obj16521_counterTargetValue;
	}

	if (oldValue != obj16521_counterValue) {
		$("#obj16521").trigger('SCEventCounterValueChange');
		$("#obj16521").trigger('SCEventCounterIncrease');
		if (obj16521_counterValue == obj16521_counterTargetValue)
			$("#obj16521").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16509_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj16515 
incrementCounter_16512();
function incrementCounter_16512() {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = obj16509_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj16515_counterValue;
	obj16515_counterValue = obj16515_counterValue + 1;
	if (! obj16515_counterCanExceedTargetValue && obj16515_counterValue > obj16515_counterTargetValue) {
		obj16515_counterValue = obj16515_counterTargetValue;
	}

	if (oldValue != obj16515_counterValue) {
		$("#obj16515").trigger('SCEventCounterValueChange');
		$("#obj16515").trigger('SCEventCounterIncrease');
		if (obj16515_counterValue == obj16515_counterTargetValue)
			$("#obj16515").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16509_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj16518 
incrementCounter_16513();
function incrementCounter_16513() {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = obj16509_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj16518_counterValue;
	obj16518_counterValue = obj16518_counterValue + 1;
	if (! obj16518_counterCanExceedTargetValue && obj16518_counterValue > obj16518_counterTargetValue) {
		obj16518_counterValue = obj16518_counterTargetValue;
	}

	if (oldValue != obj16518_counterValue) {
		$("#obj16518").trigger('SCEventCounterValueChange');
		$("#obj16518").trigger('SCEventCounterIncrease');
		if (obj16518_counterValue == obj16518_counterTargetValue)
			$("#obj16518").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16509_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj16537 
incrementCounter_16528();
function incrementCounter_16528() {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = obj16509_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj16537_counterValue;
	obj16537_counterValue = obj16537_counterValue + 1;
	if (! obj16537_counterCanExceedTargetValue && obj16537_counterValue > obj16537_counterTargetValue) {
		obj16537_counterValue = obj16537_counterTargetValue;
	}

	if (oldValue != obj16537_counterValue) {
		$("#obj16537").trigger('SCEventCounterValueChange');
		$("#obj16537").trigger('SCEventCounterIncrease');
		if (obj16537_counterValue == obj16537_counterTargetValue)
			$("#obj16537").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16509_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj16534 
incrementCounter_16529();
function incrementCounter_16529() {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = obj16509_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj16534_counterValue;
	obj16534_counterValue = obj16534_counterValue + 1;
	if (! obj16534_counterCanExceedTargetValue && obj16534_counterValue > obj16534_counterTargetValue) {
		obj16534_counterValue = obj16534_counterTargetValue;
	}

	if (oldValue != obj16534_counterValue) {
		$("#obj16534").trigger('SCEventCounterValueChange');
		$("#obj16534").trigger('SCEventCounterIncrease');
		if (obj16534_counterValue == obj16534_counterTargetValue)
			$("#obj16534").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16509_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj16531 
incrementCounter_16530();
function incrementCounter_16530() {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = obj16509_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj16531_counterValue;
	obj16531_counterValue = obj16531_counterValue + 1;
	if (! obj16531_counterCanExceedTargetValue && obj16531_counterValue > obj16531_counterTargetValue) {
		obj16531_counterValue = obj16531_counterTargetValue;
	}

	if (oldValue != obj16531_counterValue) {
		$("#obj16531").trigger('SCEventCounterValueChange');
		$("#obj16531").trigger('SCEventCounterIncrease');
		if (obj16531_counterValue == obj16531_counterTargetValue)
			$("#obj16531").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16509_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj16509_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16509_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16509").trigger("obj16509_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16509) {
				console.warn("de-queueing event obj16509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16509_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj16509 
decrementCounter_16514();
function decrementCounter_16514() {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = obj16509_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj16509_counterValue;
	obj16509_counterValue = obj16509_counterValue - 1;
	if (obj16509_counterValue < 0) {
		obj16509_counterValue = 0;
	}

	if (oldValue != obj16509_counterValue) {
		$("#obj16509").trigger('SCEventCounterValueChange');
		$("#obj16509").trigger('SCEventCounterDecrease');
		if (obj16509_counterValue == obj16509_counterTargetValue)
			$("#obj16509").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16509_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16509_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj16509_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16509_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16509").trigger("obj16509_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16509) {
				console.warn("de-queueing event obj16509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16509_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj16537_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16537_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16537").trigger("obj16537_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16537) {
				console.warn("de-queueing event obj16537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16537_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_16543();
function switchText_16543() {
	window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount = obj16537_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>4/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16524_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16524_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16524").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16524_content");
			setTimeout(function () {
				window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16537_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16524 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16537_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16537_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj16537_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16537_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16537").trigger("obj16537_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16537) {
				console.warn("de-queueing event obj16537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16537_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj16534_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16534_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16534").trigger("obj16534_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16534) {
				console.warn("de-queueing event obj16534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16534_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_16544();
function switchText_16544() {
	window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount = obj16534_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>5/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16524_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16524_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16524").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16524_content");
			setTimeout(function () {
				window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16534_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16524 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16534_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16534_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj16534_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16534_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16534").trigger("obj16534_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16534) {
				console.warn("de-queueing event obj16534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16534_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj16531_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16531_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16531").trigger("obj16531_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16531) {
				console.warn("de-queueing event obj16531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16531_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_16545();
function switchText_16545() {
	window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount = obj16531_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>6/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16524_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16524_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16524").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16524_content");
			setTimeout(function () {
				window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16531_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16524 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16531_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16531_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj16531_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16531_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16531").trigger("obj16531_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16531) {
				console.warn("de-queueing event obj16531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16531_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj16551_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16551_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16551").trigger("obj16551_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16551) {
				console.warn("de-queueing event obj16551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16551_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_16553();
function wait_16553() {
	window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount = obj16551_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16551_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1500);
}


























};
obj16551_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16551_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16551").trigger("obj16551_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16551) {
				console.warn("de-queueing event obj16551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16551_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_16554();
function goToPage_16554() {
	window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount = obj16551_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor410")[0].click();
	window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16551_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16551_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj16551_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16551_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16551").trigger("obj16551_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16551) {
				console.warn("de-queueing event obj16551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16551_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj16547_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16547_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16547").trigger("obj16547_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16547) {
				console.warn("de-queueing event obj16547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16547_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_16549();
function wait_16549() {
	window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount = obj16547_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16547_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 2000);
}


























};
obj16547_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16547_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16547").trigger("obj16547_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16547) {
				console.warn("de-queueing event obj16547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16547_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_16550();
function goToPage_16550() {
	window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount = obj16547_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor411")[0].click();
	window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16547_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16547_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj16547_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16547_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16547").trigger("obj16547_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16547) {
				console.warn("de-queueing event obj16547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16547_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj16701_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16701_onTap_activeActionGroupIndex = -1;
		$("#obj16701").trigger("obj16701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16701) {
				console.warn("de-queueing event obj16701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16701_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16672
(function(){
	window.obj16701_onTap_runningActionsCount = obj16701_onTap_runningActionsCount + 1;


	var selector = "#obj16672";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16701_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16701_onTap_activeActionGroupIndex = -1;
		$("#obj16701").trigger("obj16701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16701) {
				console.warn("de-queueing event obj16701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16701_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16724();
function playAudioFile_16724() {
	window.obj16701_onTap_runningActionsCount = obj16701_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16724")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16724");
			$("#obj_audio_playSoundFile16724").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup2();
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
				window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16701_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16701_onTap_activeActionGroupIndex = -1;
		$("#obj16701").trigger("obj16701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16701) {
				console.warn("de-queueing event obj16701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16701_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_16725();
function runjs_16725() {
	window.obj16701_onTap_runningActionsCount = obj16701_onTap_runningActionsCount + 1;


	$("#obj16701").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24601();
function runjs_24601() {
	window.obj16701_onTap_runningActionsCount = obj16701_onTap_runningActionsCount + 1;


	$("#obj16701").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup3();
}
	}, 1);
}














};
obj16701_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16701_onTap_activeActionGroupIndex = -1;
		$("#obj16701").trigger("obj16701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16701) {
				console.warn("de-queueing event obj16701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16701_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj16509 
incrementCounter_16727();
function incrementCounter_16727() {
	window.obj16701_onTap_runningActionsCount = obj16701_onTap_runningActionsCount + 1;


	var oldValue = obj16509_counterValue;
	obj16509_counterValue = obj16509_counterValue + 1;
	if (! obj16509_counterCanExceedTargetValue && obj16509_counterValue > obj16509_counterTargetValue) {
		obj16509_counterValue = obj16509_counterTargetValue;
	}

	if (oldValue != obj16509_counterValue) {
		$("#obj16509").trigger('SCEventCounterValueChange');
		$("#obj16509").trigger('SCEventCounterIncrease');
		if (obj16509_counterValue == obj16509_counterTargetValue)
			$("#obj16509").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16551 
incrementCounter_16728();
function incrementCounter_16728() {
	window.obj16701_onTap_runningActionsCount = obj16701_onTap_runningActionsCount + 1;


	var oldValue = obj16551_counterValue;
	obj16551_counterValue = obj16551_counterValue + 1;
	if (! obj16551_counterCanExceedTargetValue && obj16551_counterValue > obj16551_counterTargetValue) {
		obj16551_counterValue = obj16551_counterTargetValue;
	}

	if (oldValue != obj16551_counterValue) {
		$("#obj16551").trigger('SCEventCounterValueChange');
		$("#obj16551").trigger('SCEventCounterIncrease');
		if (obj16551_counterValue == obj16551_counterTargetValue)
			$("#obj16551").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16729();
function incrementCounter_16729() {
	window.obj16701_onTap_runningActionsCount = obj16701_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16701_onTap_runningActionsCount = window.obj16701_onTap_runningActionsCount - 1;

if (window.obj16701_onTap_runningActionsCount < 0) {
	window.obj16701_onTap_runningActionsCount = 0;
} else if (window.obj16701_onTap_runningActionsCount == 0) {
	obj16701_onTap_actionGroup4();
} }, 1);
}











};
obj16701_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16701_onTap_activeActionGroupIndex = -1;
		$("#obj16701").trigger("obj16701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16701) {
				console.warn("de-queueing event obj16701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16701_onTap_activeActionGroupIndex = 4;
	











































};
obj16692_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16692_onTap_activeActionGroupIndex = -1;
		$("#obj16692").trigger("obj16692_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16692) {
				console.warn("de-queueing event obj16692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16692_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16672
(function(){
	window.obj16692_onTap_runningActionsCount = obj16692_onTap_runningActionsCount + 1;


	var selector = "#obj16672";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16692_onTap_runningActionsCount = window.obj16692_onTap_runningActionsCount - 1;

if (window.obj16692_onTap_runningActionsCount < 0) {
	window.obj16692_onTap_runningActionsCount = 0;
} else if (window.obj16692_onTap_runningActionsCount == 0) {
	obj16692_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16692_onTap_runningActionsCount = window.obj16692_onTap_runningActionsCount - 1;

if (window.obj16692_onTap_runningActionsCount < 0) {
	window.obj16692_onTap_runningActionsCount = 0;
} else if (window.obj16692_onTap_runningActionsCount == 0) {
	obj16692_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16692_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16692_onTap_activeActionGroupIndex = -1;
		$("#obj16692").trigger("obj16692_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16692) {
				console.warn("de-queueing event obj16692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16692_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16695();
function playAudioFile_16695() {
	window.obj16692_onTap_runningActionsCount = obj16692_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16695")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16695");
			$("#obj_audio_playSoundFile16695").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16692_onTap_runningActionsCount = window.obj16692_onTap_runningActionsCount - 1;

if (window.obj16692_onTap_runningActionsCount < 0) {
	window.obj16692_onTap_runningActionsCount = 0;
} else if (window.obj16692_onTap_runningActionsCount == 0) {
	obj16692_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16692_onTap_runningActionsCount = window.obj16692_onTap_runningActionsCount - 1;

if (window.obj16692_onTap_runningActionsCount < 0) {
	window.obj16692_onTap_runningActionsCount = 0;
} else if (window.obj16692_onTap_runningActionsCount == 0) {
	obj16692_onTap_actionGroup2();
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
				window.obj16692_onTap_runningActionsCount = window.obj16692_onTap_runningActionsCount - 1;

if (window.obj16692_onTap_runningActionsCount < 0) {
	window.obj16692_onTap_runningActionsCount = 0;
} else if (window.obj16692_onTap_runningActionsCount == 0) {
	obj16692_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16692_onTap_runningActionsCount = window.obj16692_onTap_runningActionsCount - 1;

if (window.obj16692_onTap_runningActionsCount < 0) {
	window.obj16692_onTap_runningActionsCount = 0;
} else if (window.obj16692_onTap_runningActionsCount == 0) {
	obj16692_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16692_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16692_onTap_activeActionGroupIndex = -1;
		$("#obj16692").trigger("obj16692_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16692) {
				console.warn("de-queueing event obj16692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16692_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24602();
function runjs_24602() {
	window.obj16692_onTap_runningActionsCount = obj16692_onTap_runningActionsCount + 1;


	$("#obj16692").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj16692_onTap_runningActionsCount = window.obj16692_onTap_runningActionsCount - 1;

if (window.obj16692_onTap_runningActionsCount < 0) {
	window.obj16692_onTap_runningActionsCount = 0;
} else if (window.obj16692_onTap_runningActionsCount == 0) {
	obj16692_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24603();
function runjs_24603() {
	window.obj16692_onTap_runningActionsCount = obj16692_onTap_runningActionsCount + 1;


	$("#obj16692").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj16692_onTap_runningActionsCount = window.obj16692_onTap_runningActionsCount - 1;

if (window.obj16692_onTap_runningActionsCount < 0) {
	window.obj16692_onTap_runningActionsCount = 0;
} else if (window.obj16692_onTap_runningActionsCount == 0) {
	obj16692_onTap_actionGroup3();
}
	}, 1);
}














};
obj16692_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16692_onTap_activeActionGroupIndex = -1;
		$("#obj16692").trigger("obj16692_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16692) {
				console.warn("de-queueing event obj16692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16692_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj16547 
incrementCounter_16700();
function incrementCounter_16700() {
	window.obj16692_onTap_runningActionsCount = obj16692_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16692_onTap_runningActionsCount = window.obj16692_onTap_runningActionsCount - 1;

if (window.obj16692_onTap_runningActionsCount < 0) {
	window.obj16692_onTap_runningActionsCount = 0;
} else if (window.obj16692_onTap_runningActionsCount == 0) {
	obj16692_onTap_actionGroup4();
} }, 1);
}











};
obj16692_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16692_onTap_activeActionGroupIndex = -1;
		$("#obj16692").trigger("obj16692_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16692) {
				console.warn("de-queueing event obj16692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16692_onTap_activeActionGroupIndex = 4;
	











































};
obj16683_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16683_onTap_activeActionGroupIndex = -1;
		$("#obj16683").trigger("obj16683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16683) {
				console.warn("de-queueing event obj16683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16683_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16672
(function(){
	window.obj16683_onTap_runningActionsCount = obj16683_onTap_runningActionsCount + 1;


	var selector = "#obj16672";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16683_onTap_runningActionsCount = window.obj16683_onTap_runningActionsCount - 1;

if (window.obj16683_onTap_runningActionsCount < 0) {
	window.obj16683_onTap_runningActionsCount = 0;
} else if (window.obj16683_onTap_runningActionsCount == 0) {
	obj16683_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16683_onTap_runningActionsCount = window.obj16683_onTap_runningActionsCount - 1;

if (window.obj16683_onTap_runningActionsCount < 0) {
	window.obj16683_onTap_runningActionsCount = 0;
} else if (window.obj16683_onTap_runningActionsCount == 0) {
	obj16683_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16683_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16683_onTap_activeActionGroupIndex = -1;
		$("#obj16683").trigger("obj16683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16683) {
				console.warn("de-queueing event obj16683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16683_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16717();
function playAudioFile_16717() {
	window.obj16683_onTap_runningActionsCount = obj16683_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16717")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16717");
			$("#obj_audio_playSoundFile16717").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16683_onTap_runningActionsCount = window.obj16683_onTap_runningActionsCount - 1;

if (window.obj16683_onTap_runningActionsCount < 0) {
	window.obj16683_onTap_runningActionsCount = 0;
} else if (window.obj16683_onTap_runningActionsCount == 0) {
	obj16683_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16683_onTap_runningActionsCount = window.obj16683_onTap_runningActionsCount - 1;

if (window.obj16683_onTap_runningActionsCount < 0) {
	window.obj16683_onTap_runningActionsCount = 0;
} else if (window.obj16683_onTap_runningActionsCount == 0) {
	obj16683_onTap_actionGroup2();
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
				window.obj16683_onTap_runningActionsCount = window.obj16683_onTap_runningActionsCount - 1;

if (window.obj16683_onTap_runningActionsCount < 0) {
	window.obj16683_onTap_runningActionsCount = 0;
} else if (window.obj16683_onTap_runningActionsCount == 0) {
	obj16683_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16683_onTap_runningActionsCount = window.obj16683_onTap_runningActionsCount - 1;

if (window.obj16683_onTap_runningActionsCount < 0) {
	window.obj16683_onTap_runningActionsCount = 0;
} else if (window.obj16683_onTap_runningActionsCount == 0) {
	obj16683_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16683_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16683_onTap_activeActionGroupIndex = -1;
		$("#obj16683").trigger("obj16683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16683) {
				console.warn("de-queueing event obj16683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16683_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24604();
function runjs_24604() {
	window.obj16683_onTap_runningActionsCount = obj16683_onTap_runningActionsCount + 1;


	$("#obj16683").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj16683_onTap_runningActionsCount = window.obj16683_onTap_runningActionsCount - 1;

if (window.obj16683_onTap_runningActionsCount < 0) {
	window.obj16683_onTap_runningActionsCount = 0;
} else if (window.obj16683_onTap_runningActionsCount == 0) {
	obj16683_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24605();
function runjs_24605() {
	window.obj16683_onTap_runningActionsCount = obj16683_onTap_runningActionsCount + 1;


	$("#obj16683").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj16683_onTap_runningActionsCount = window.obj16683_onTap_runningActionsCount - 1;

if (window.obj16683_onTap_runningActionsCount < 0) {
	window.obj16683_onTap_runningActionsCount = 0;
} else if (window.obj16683_onTap_runningActionsCount == 0) {
	obj16683_onTap_actionGroup3();
}
	}, 1);
}














};
obj16683_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16683_onTap_activeActionGroupIndex = -1;
		$("#obj16683").trigger("obj16683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16683) {
				console.warn("de-queueing event obj16683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16683_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj16547 
incrementCounter_16722();
function incrementCounter_16722() {
	window.obj16683_onTap_runningActionsCount = obj16683_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16683_onTap_runningActionsCount = window.obj16683_onTap_runningActionsCount - 1;

if (window.obj16683_onTap_runningActionsCount < 0) {
	window.obj16683_onTap_runningActionsCount = 0;
} else if (window.obj16683_onTap_runningActionsCount == 0) {
	obj16683_onTap_actionGroup4();
} }, 1);
}











};
obj16683_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16683_onTap_activeActionGroupIndex = -1;
		$("#obj16683").trigger("obj16683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16683) {
				console.warn("de-queueing event obj16683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16683_onTap_activeActionGroupIndex = 4;
	











































};
obj16674_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16674_onTap_activeActionGroupIndex = -1;
		$("#obj16674").trigger("obj16674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16674) {
				console.warn("de-queueing event obj16674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16674_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16672
(function(){
	window.obj16674_onTap_runningActionsCount = obj16674_onTap_runningActionsCount + 1;


	var selector = "#obj16672";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16674_onTap_runningActionsCount = window.obj16674_onTap_runningActionsCount - 1;

if (window.obj16674_onTap_runningActionsCount < 0) {
	window.obj16674_onTap_runningActionsCount = 0;
} else if (window.obj16674_onTap_runningActionsCount == 0) {
	obj16674_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16674_onTap_runningActionsCount = window.obj16674_onTap_runningActionsCount - 1;

if (window.obj16674_onTap_runningActionsCount < 0) {
	window.obj16674_onTap_runningActionsCount = 0;
} else if (window.obj16674_onTap_runningActionsCount == 0) {
	obj16674_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16674_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16674_onTap_activeActionGroupIndex = -1;
		$("#obj16674").trigger("obj16674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16674) {
				console.warn("de-queueing event obj16674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16674_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16677();
function playAudioFile_16677() {
	window.obj16674_onTap_runningActionsCount = obj16674_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16677")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16677");
			$("#obj_audio_playSoundFile16677").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16674_onTap_runningActionsCount = window.obj16674_onTap_runningActionsCount - 1;

if (window.obj16674_onTap_runningActionsCount < 0) {
	window.obj16674_onTap_runningActionsCount = 0;
} else if (window.obj16674_onTap_runningActionsCount == 0) {
	obj16674_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16674_onTap_runningActionsCount = window.obj16674_onTap_runningActionsCount - 1;

if (window.obj16674_onTap_runningActionsCount < 0) {
	window.obj16674_onTap_runningActionsCount = 0;
} else if (window.obj16674_onTap_runningActionsCount == 0) {
	obj16674_onTap_actionGroup2();
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
				window.obj16674_onTap_runningActionsCount = window.obj16674_onTap_runningActionsCount - 1;

if (window.obj16674_onTap_runningActionsCount < 0) {
	window.obj16674_onTap_runningActionsCount = 0;
} else if (window.obj16674_onTap_runningActionsCount == 0) {
	obj16674_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16674_onTap_runningActionsCount = window.obj16674_onTap_runningActionsCount - 1;

if (window.obj16674_onTap_runningActionsCount < 0) {
	window.obj16674_onTap_runningActionsCount = 0;
} else if (window.obj16674_onTap_runningActionsCount == 0) {
	obj16674_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16674_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16674_onTap_activeActionGroupIndex = -1;
		$("#obj16674").trigger("obj16674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16674) {
				console.warn("de-queueing event obj16674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16674_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24606();
function runjs_24606() {
	window.obj16674_onTap_runningActionsCount = obj16674_onTap_runningActionsCount + 1;


	$("#obj16674").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj16674_onTap_runningActionsCount = window.obj16674_onTap_runningActionsCount - 1;

if (window.obj16674_onTap_runningActionsCount < 0) {
	window.obj16674_onTap_runningActionsCount = 0;
} else if (window.obj16674_onTap_runningActionsCount == 0) {
	obj16674_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24607();
function runjs_24607() {
	window.obj16674_onTap_runningActionsCount = obj16674_onTap_runningActionsCount + 1;


	$("#obj16674").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj16674_onTap_runningActionsCount = window.obj16674_onTap_runningActionsCount - 1;

if (window.obj16674_onTap_runningActionsCount < 0) {
	window.obj16674_onTap_runningActionsCount = 0;
} else if (window.obj16674_onTap_runningActionsCount == 0) {
	obj16674_onTap_actionGroup3();
}
	}, 1);
}














};
obj16674_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16674_onTap_activeActionGroupIndex = -1;
		$("#obj16674").trigger("obj16674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16674) {
				console.warn("de-queueing event obj16674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16674_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj16547 
incrementCounter_16682();
function incrementCounter_16682() {
	window.obj16674_onTap_runningActionsCount = obj16674_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16674_onTap_runningActionsCount = window.obj16674_onTap_runningActionsCount - 1;

if (window.obj16674_onTap_runningActionsCount < 0) {
	window.obj16674_onTap_runningActionsCount = 0;
} else if (window.obj16674_onTap_runningActionsCount == 0) {
	obj16674_onTap_actionGroup4();
} }, 1);
}











};
obj16674_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16674_onTap_activeActionGroupIndex = -1;
		$("#obj16674").trigger("obj16674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16674) {
				console.warn("de-queueing event obj16674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16674_onTap_activeActionGroupIndex = 4;
	











































};
obj16657_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16657_onTap_activeActionGroupIndex = -1;
		$("#obj16657").trigger("obj16657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16657) {
				console.warn("de-queueing event obj16657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16657_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16628
(function(){
	window.obj16657_onTap_runningActionsCount = obj16657_onTap_runningActionsCount + 1;


	var selector = "#obj16628";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16657_onTap_runningActionsCount = window.obj16657_onTap_runningActionsCount - 1;

if (window.obj16657_onTap_runningActionsCount < 0) {
	window.obj16657_onTap_runningActionsCount = 0;
} else if (window.obj16657_onTap_runningActionsCount == 0) {
	obj16657_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16657_onTap_runningActionsCount = window.obj16657_onTap_runningActionsCount - 1;

if (window.obj16657_onTap_runningActionsCount < 0) {
	window.obj16657_onTap_runningActionsCount = 0;
} else if (window.obj16657_onTap_runningActionsCount == 0) {
	obj16657_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16657_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16657_onTap_activeActionGroupIndex = -1;
		$("#obj16657").trigger("obj16657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16657) {
				console.warn("de-queueing event obj16657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16657_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16660();
function playAudioFile_16660() {
	window.obj16657_onTap_runningActionsCount = obj16657_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16660")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16660");
			$("#obj_audio_playSoundFile16660").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16657_onTap_runningActionsCount = window.obj16657_onTap_runningActionsCount - 1;

if (window.obj16657_onTap_runningActionsCount < 0) {
	window.obj16657_onTap_runningActionsCount = 0;
} else if (window.obj16657_onTap_runningActionsCount == 0) {
	obj16657_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16657_onTap_runningActionsCount = window.obj16657_onTap_runningActionsCount - 1;

if (window.obj16657_onTap_runningActionsCount < 0) {
	window.obj16657_onTap_runningActionsCount = 0;
} else if (window.obj16657_onTap_runningActionsCount == 0) {
	obj16657_onTap_actionGroup2();
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
				window.obj16657_onTap_runningActionsCount = window.obj16657_onTap_runningActionsCount - 1;

if (window.obj16657_onTap_runningActionsCount < 0) {
	window.obj16657_onTap_runningActionsCount = 0;
} else if (window.obj16657_onTap_runningActionsCount == 0) {
	obj16657_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16657_onTap_runningActionsCount = window.obj16657_onTap_runningActionsCount - 1;

if (window.obj16657_onTap_runningActionsCount < 0) {
	window.obj16657_onTap_runningActionsCount = 0;
} else if (window.obj16657_onTap_runningActionsCount == 0) {
	obj16657_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16657_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16657_onTap_activeActionGroupIndex = -1;
		$("#obj16657").trigger("obj16657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16657) {
				console.warn("de-queueing event obj16657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16657_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24608();
function runjs_24608() {
	window.obj16657_onTap_runningActionsCount = obj16657_onTap_runningActionsCount + 1;


	$("#obj16657").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj16657_onTap_runningActionsCount = window.obj16657_onTap_runningActionsCount - 1;

if (window.obj16657_onTap_runningActionsCount < 0) {
	window.obj16657_onTap_runningActionsCount = 0;
} else if (window.obj16657_onTap_runningActionsCount == 0) {
	obj16657_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24609();
function runjs_24609() {
	window.obj16657_onTap_runningActionsCount = obj16657_onTap_runningActionsCount + 1;


	$("#obj16657").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj16657_onTap_runningActionsCount = window.obj16657_onTap_runningActionsCount - 1;

if (window.obj16657_onTap_runningActionsCount < 0) {
	window.obj16657_onTap_runningActionsCount = 0;
} else if (window.obj16657_onTap_runningActionsCount == 0) {
	obj16657_onTap_actionGroup3();
}
	}, 1);
}














};
obj16657_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16657_onTap_activeActionGroupIndex = -1;
		$("#obj16657").trigger("obj16657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16657) {
				console.warn("de-queueing event obj16657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16657_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj16547 
incrementCounter_16665();
function incrementCounter_16665() {
	window.obj16657_onTap_runningActionsCount = obj16657_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16657_onTap_runningActionsCount = window.obj16657_onTap_runningActionsCount - 1;

if (window.obj16657_onTap_runningActionsCount < 0) {
	window.obj16657_onTap_runningActionsCount = 0;
} else if (window.obj16657_onTap_runningActionsCount == 0) {
	obj16657_onTap_actionGroup4();
} }, 1);
}











};
obj16657_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16657_onTap_activeActionGroupIndex = -1;
		$("#obj16657").trigger("obj16657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16657) {
				console.warn("de-queueing event obj16657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16657_onTap_activeActionGroupIndex = 4;
	











































};
obj16648_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16648_onTap_activeActionGroupIndex = -1;
		$("#obj16648").trigger("obj16648_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16648) {
				console.warn("de-queueing event obj16648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16648_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16628
(function(){
	window.obj16648_onTap_runningActionsCount = obj16648_onTap_runningActionsCount + 1;


	var selector = "#obj16628";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16648_onTap_runningActionsCount = window.obj16648_onTap_runningActionsCount - 1;

if (window.obj16648_onTap_runningActionsCount < 0) {
	window.obj16648_onTap_runningActionsCount = 0;
} else if (window.obj16648_onTap_runningActionsCount == 0) {
	obj16648_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16648_onTap_runningActionsCount = window.obj16648_onTap_runningActionsCount - 1;

if (window.obj16648_onTap_runningActionsCount < 0) {
	window.obj16648_onTap_runningActionsCount = 0;
} else if (window.obj16648_onTap_runningActionsCount == 0) {
	obj16648_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16648_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16648_onTap_activeActionGroupIndex = -1;
		$("#obj16648").trigger("obj16648_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16648) {
				console.warn("de-queueing event obj16648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16648_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16651();
function playAudioFile_16651() {
	window.obj16648_onTap_runningActionsCount = obj16648_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16651")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16651");
			$("#obj_audio_playSoundFile16651").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16648_onTap_runningActionsCount = window.obj16648_onTap_runningActionsCount - 1;

if (window.obj16648_onTap_runningActionsCount < 0) {
	window.obj16648_onTap_runningActionsCount = 0;
} else if (window.obj16648_onTap_runningActionsCount == 0) {
	obj16648_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16648_onTap_runningActionsCount = window.obj16648_onTap_runningActionsCount - 1;

if (window.obj16648_onTap_runningActionsCount < 0) {
	window.obj16648_onTap_runningActionsCount = 0;
} else if (window.obj16648_onTap_runningActionsCount == 0) {
	obj16648_onTap_actionGroup2();
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
				window.obj16648_onTap_runningActionsCount = window.obj16648_onTap_runningActionsCount - 1;

if (window.obj16648_onTap_runningActionsCount < 0) {
	window.obj16648_onTap_runningActionsCount = 0;
} else if (window.obj16648_onTap_runningActionsCount == 0) {
	obj16648_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16648_onTap_runningActionsCount = window.obj16648_onTap_runningActionsCount - 1;

if (window.obj16648_onTap_runningActionsCount < 0) {
	window.obj16648_onTap_runningActionsCount = 0;
} else if (window.obj16648_onTap_runningActionsCount == 0) {
	obj16648_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16648_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16648_onTap_activeActionGroupIndex = -1;
		$("#obj16648").trigger("obj16648_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16648) {
				console.warn("de-queueing event obj16648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16648_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24610();
function runjs_24610() {
	window.obj16648_onTap_runningActionsCount = obj16648_onTap_runningActionsCount + 1;


	$("#obj16648").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj16648_onTap_runningActionsCount = window.obj16648_onTap_runningActionsCount - 1;

if (window.obj16648_onTap_runningActionsCount < 0) {
	window.obj16648_onTap_runningActionsCount = 0;
} else if (window.obj16648_onTap_runningActionsCount == 0) {
	obj16648_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24611();
function runjs_24611() {
	window.obj16648_onTap_runningActionsCount = obj16648_onTap_runningActionsCount + 1;


	$("#obj16648").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj16648_onTap_runningActionsCount = window.obj16648_onTap_runningActionsCount - 1;

if (window.obj16648_onTap_runningActionsCount < 0) {
	window.obj16648_onTap_runningActionsCount = 0;
} else if (window.obj16648_onTap_runningActionsCount == 0) {
	obj16648_onTap_actionGroup3();
}
	}, 1);
}














};
obj16648_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16648_onTap_activeActionGroupIndex = -1;
		$("#obj16648").trigger("obj16648_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16648) {
				console.warn("de-queueing event obj16648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16648_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj16547 
incrementCounter_16656();
function incrementCounter_16656() {
	window.obj16648_onTap_runningActionsCount = obj16648_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16648_onTap_runningActionsCount = window.obj16648_onTap_runningActionsCount - 1;

if (window.obj16648_onTap_runningActionsCount < 0) {
	window.obj16648_onTap_runningActionsCount = 0;
} else if (window.obj16648_onTap_runningActionsCount == 0) {
	obj16648_onTap_actionGroup4();
} }, 1);
}











};
obj16648_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16648_onTap_activeActionGroupIndex = -1;
		$("#obj16648").trigger("obj16648_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16648) {
				console.warn("de-queueing event obj16648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16648_onTap_activeActionGroupIndex = 4;
	











































};
obj16639_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16639_onTap_activeActionGroupIndex = -1;
		$("#obj16639").trigger("obj16639_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16639) {
				console.warn("de-queueing event obj16639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16639_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16628
(function(){
	window.obj16639_onTap_runningActionsCount = obj16639_onTap_runningActionsCount + 1;


	var selector = "#obj16628";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16639_onTap_runningActionsCount = window.obj16639_onTap_runningActionsCount - 1;

if (window.obj16639_onTap_runningActionsCount < 0) {
	window.obj16639_onTap_runningActionsCount = 0;
} else if (window.obj16639_onTap_runningActionsCount == 0) {
	obj16639_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16639_onTap_runningActionsCount = window.obj16639_onTap_runningActionsCount - 1;

if (window.obj16639_onTap_runningActionsCount < 0) {
	window.obj16639_onTap_runningActionsCount = 0;
} else if (window.obj16639_onTap_runningActionsCount == 0) {
	obj16639_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16639_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16639_onTap_activeActionGroupIndex = -1;
		$("#obj16639").trigger("obj16639_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16639) {
				console.warn("de-queueing event obj16639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16639_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16642();
function playAudioFile_16642() {
	window.obj16639_onTap_runningActionsCount = obj16639_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16642")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16642");
			$("#obj_audio_playSoundFile16642").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16639_onTap_runningActionsCount = window.obj16639_onTap_runningActionsCount - 1;

if (window.obj16639_onTap_runningActionsCount < 0) {
	window.obj16639_onTap_runningActionsCount = 0;
} else if (window.obj16639_onTap_runningActionsCount == 0) {
	obj16639_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16639_onTap_runningActionsCount = window.obj16639_onTap_runningActionsCount - 1;

if (window.obj16639_onTap_runningActionsCount < 0) {
	window.obj16639_onTap_runningActionsCount = 0;
} else if (window.obj16639_onTap_runningActionsCount == 0) {
	obj16639_onTap_actionGroup2();
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
				window.obj16639_onTap_runningActionsCount = window.obj16639_onTap_runningActionsCount - 1;

if (window.obj16639_onTap_runningActionsCount < 0) {
	window.obj16639_onTap_runningActionsCount = 0;
} else if (window.obj16639_onTap_runningActionsCount == 0) {
	obj16639_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16639_onTap_runningActionsCount = window.obj16639_onTap_runningActionsCount - 1;

if (window.obj16639_onTap_runningActionsCount < 0) {
	window.obj16639_onTap_runningActionsCount = 0;
} else if (window.obj16639_onTap_runningActionsCount == 0) {
	obj16639_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16639_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16639_onTap_activeActionGroupIndex = -1;
		$("#obj16639").trigger("obj16639_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16639) {
				console.warn("de-queueing event obj16639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16639_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24612();
function runjs_24612() {
	window.obj16639_onTap_runningActionsCount = obj16639_onTap_runningActionsCount + 1;


	$("#obj16639").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj16639_onTap_runningActionsCount = window.obj16639_onTap_runningActionsCount - 1;

if (window.obj16639_onTap_runningActionsCount < 0) {
	window.obj16639_onTap_runningActionsCount = 0;
} else if (window.obj16639_onTap_runningActionsCount == 0) {
	obj16639_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24613();
function runjs_24613() {
	window.obj16639_onTap_runningActionsCount = obj16639_onTap_runningActionsCount + 1;


	$("#obj16639").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj16639_onTap_runningActionsCount = window.obj16639_onTap_runningActionsCount - 1;

if (window.obj16639_onTap_runningActionsCount < 0) {
	window.obj16639_onTap_runningActionsCount = 0;
} else if (window.obj16639_onTap_runningActionsCount == 0) {
	obj16639_onTap_actionGroup3();
}
	}, 1);
}














};
obj16639_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16639_onTap_activeActionGroupIndex = -1;
		$("#obj16639").trigger("obj16639_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16639) {
				console.warn("de-queueing event obj16639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16639_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj16547 
incrementCounter_16647();
function incrementCounter_16647() {
	window.obj16639_onTap_runningActionsCount = obj16639_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16639_onTap_runningActionsCount = window.obj16639_onTap_runningActionsCount - 1;

if (window.obj16639_onTap_runningActionsCount < 0) {
	window.obj16639_onTap_runningActionsCount = 0;
} else if (window.obj16639_onTap_runningActionsCount == 0) {
	obj16639_onTap_actionGroup4();
} }, 1);
}











};
obj16639_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16639_onTap_activeActionGroupIndex = -1;
		$("#obj16639").trigger("obj16639_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16639) {
				console.warn("de-queueing event obj16639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16639_onTap_activeActionGroupIndex = 4;
	











































};
obj16630_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16630_onTap_activeActionGroupIndex = -1;
		$("#obj16630").trigger("obj16630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16630) {
				console.warn("de-queueing event obj16630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16630_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16628
(function(){
	window.obj16630_onTap_runningActionsCount = obj16630_onTap_runningActionsCount + 1;


	var selector = "#obj16628";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16630_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16630_onTap_activeActionGroupIndex = -1;
		$("#obj16630").trigger("obj16630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16630) {
				console.warn("de-queueing event obj16630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16630_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16633();
function playAudioFile_16633() {
	window.obj16630_onTap_runningActionsCount = obj16630_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16633")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16633");
			$("#obj_audio_playSoundFile16633").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup2();
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
				window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16630_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16630_onTap_activeActionGroupIndex = -1;
		$("#obj16630").trigger("obj16630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16630) {
				console.warn("de-queueing event obj16630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16630_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_16634();
function runjs_16634() {
	window.obj16630_onTap_runningActionsCount = obj16630_onTap_runningActionsCount + 1;


	$("#obj16630").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24615();
function runjs_24615() {
	window.obj16630_onTap_runningActionsCount = obj16630_onTap_runningActionsCount + 1;


	$("#obj16630").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup3();
}
	}, 1);
}














};
obj16630_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16630_onTap_activeActionGroupIndex = -1;
		$("#obj16630").trigger("obj16630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16630) {
				console.warn("de-queueing event obj16630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16630_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj16509 
incrementCounter_16636();
function incrementCounter_16636() {
	window.obj16630_onTap_runningActionsCount = obj16630_onTap_runningActionsCount + 1;


	var oldValue = obj16509_counterValue;
	obj16509_counterValue = obj16509_counterValue + 1;
	if (! obj16509_counterCanExceedTargetValue && obj16509_counterValue > obj16509_counterTargetValue) {
		obj16509_counterValue = obj16509_counterTargetValue;
	}

	if (oldValue != obj16509_counterValue) {
		$("#obj16509").trigger('SCEventCounterValueChange');
		$("#obj16509").trigger('SCEventCounterIncrease');
		if (obj16509_counterValue == obj16509_counterTargetValue)
			$("#obj16509").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16547 
incrementCounter_16637();
function incrementCounter_16637() {
	window.obj16630_onTap_runningActionsCount = obj16630_onTap_runningActionsCount + 1;


	var oldValue = obj16547_counterValue;
	obj16547_counterValue = obj16547_counterValue + 1;
	if (! obj16547_counterCanExceedTargetValue && obj16547_counterValue > obj16547_counterTargetValue) {
		obj16547_counterValue = obj16547_counterTargetValue;
	}

	if (oldValue != obj16547_counterValue) {
		$("#obj16547").trigger('SCEventCounterValueChange');
		$("#obj16547").trigger('SCEventCounterIncrease');
		if (obj16547_counterValue == obj16547_counterTargetValue)
			$("#obj16547").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj16551 
incrementCounter_16638();
function incrementCounter_16638() {
	window.obj16630_onTap_runningActionsCount = obj16630_onTap_runningActionsCount + 1;


	var oldValue = obj16551_counterValue;
	obj16551_counterValue = obj16551_counterValue + 1;
	if (! obj16551_counterCanExceedTargetValue && obj16551_counterValue > obj16551_counterTargetValue) {
		obj16551_counterValue = obj16551_counterTargetValue;
	}

	if (oldValue != obj16551_counterValue) {
		$("#obj16551").trigger('SCEventCounterValueChange');
		$("#obj16551").trigger('SCEventCounterIncrease');
		if (obj16551_counterValue == obj16551_counterTargetValue)
			$("#obj16551").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16630_onTap_runningActionsCount = window.obj16630_onTap_runningActionsCount - 1;

if (window.obj16630_onTap_runningActionsCount < 0) {
	window.obj16630_onTap_runningActionsCount = 0;
} else if (window.obj16630_onTap_runningActionsCount == 0) {
	obj16630_onTap_actionGroup4();
} }, 1);
}











};
obj16630_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16630_onTap_activeActionGroupIndex = -1;
		$("#obj16630").trigger("obj16630_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16630) {
				console.warn("de-queueing event obj16630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16630_onTap_activeActionGroupIndex = 4;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj15452: Event Touch Down
 *
 */

$("#obj15452").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15452_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15452_onTap is still running");
	return;
}
var obj15452_onTap_runningActionsCount = 0;
var obj15452_onTap_loopCount = 0;
obj15452_onTap_actionGroup0();
});






























































































/*
 *
 *   obj15463: Event Touch Down
 *
 */

$("#obj15463").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15463_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15463_onTap is still running");
	return;
}
var obj15463_onTap_runningActionsCount = 0;
var obj15463_onTap_loopCount = 0;
obj15463_onTap_actionGroup0();
});


















/*
 *
 *   obj15469: Event Touch Down
 *
 */

$("#obj15469").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15469_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15469_onTap is still running");
	return;
}
var obj15469_onTap_runningActionsCount = 0;
var obj15469_onTap_loopCount = 0;
obj15469_onTap_actionGroup0();
});


















/*
 *
 *   obj15475: Event Touch Down
 *
 */

$("#obj15475").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15475_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15475_onTap is still running");
	return;
}
var obj15475_onTap_runningActionsCount = 0;
var obj15475_onTap_loopCount = 0;
obj15475_onTap_actionGroup0();
});


















/*
 *
 *   obj15481: Event Touch Down
 *
 */

$("#obj15481").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15481_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15481_onTap is still running");
	return;
}
var obj15481_onTap_runningActionsCount = 0;
var obj15481_onTap_loopCount = 0;
obj15481_onTap_actionGroup0();
});














































/*
 *
 *   obj15489: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj15489").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15489_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15489_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj15489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15489_SCEventCounterReachedTargetValue_loopCount = 0;
obj15489_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj15528: Event Touch Down
 *
 */

$("#obj15528").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15528_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15528_onTap is still running");
	return;
}
var obj15528_onTap_runningActionsCount = 0;
var obj15528_onTap_loopCount = 0;
obj15528_onTap_actionGroup0();
});


















/*
 *
 *   obj15534: Event Touch Down
 *
 */

$("#obj15534").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15534_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15534_onTap is still running");
	return;
}
var obj15534_onTap_runningActionsCount = 0;
var obj15534_onTap_loopCount = 0;
obj15534_onTap_actionGroup0();
});


















/*
 *
 *   obj15540: Event Touch Down
 *
 */

$("#obj15540").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15540_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15540_onTap is still running");
	return;
}
var obj15540_onTap_runningActionsCount = 0;
var obj15540_onTap_loopCount = 0;
obj15540_onTap_actionGroup0();
});


















/*
 *
 *   obj15546: Event Touch Down
 *
 */

$("#obj15546").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15546_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15546_onTap is still running");
	return;
}
var obj15546_onTap_runningActionsCount = 0;
var obj15546_onTap_loopCount = 0;
obj15546_onTap_actionGroup0();
});






























































































/*
 *
 *   obj15566: Event Touch Down
 *
 */

$("#obj15566").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15566_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15566_onTap is still running");
	return;
}
var obj15566_onTap_runningActionsCount = 0;
var obj15566_onTap_loopCount = 0;
obj15566_onTap_actionGroup0();
});


















/*
 *
 *   obj15572: Event Touch Down
 *
 */

$("#obj15572").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15572_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15572_onTap is still running");
	return;
}
var obj15572_onTap_runningActionsCount = 0;
var obj15572_onTap_loopCount = 0;
obj15572_onTap_actionGroup0();
});


















/*
 *
 *   obj15578: Event Touch Down
 *
 */

$("#obj15578").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15578_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15578_onTap is still running");
	return;
}
var obj15578_onTap_runningActionsCount = 0;
var obj15578_onTap_loopCount = 0;
obj15578_onTap_actionGroup0();
});


















/*
 *
 *   obj15584: Event Touch Down
 *
 */

$("#obj15584").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15584_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15584_onTap is still running");
	return;
}
var obj15584_onTap_runningActionsCount = 0;
var obj15584_onTap_loopCount = 0;
obj15584_onTap_actionGroup0();
});














































/*
 *
 *   obj15592: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj15592").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15592_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15592_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj15592_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15592_SCEventCounterReachedTargetValue_loopCount = 0;
obj15592_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj15624: Event Touch Down
 *
 */

$("#obj15624").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15624_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15624_onTap is still running");
	return;
}
var obj15624_onTap_runningActionsCount = 0;
var obj15624_onTap_loopCount = 0;
obj15624_onTap_actionGroup0();
});


















/*
 *
 *   obj15630: Event Touch Down
 *
 */

$("#obj15630").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15630_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15630_onTap is still running");
	return;
}
var obj15630_onTap_runningActionsCount = 0;
var obj15630_onTap_loopCount = 0;
obj15630_onTap_actionGroup0();
});


















/*
 *
 *   obj15636: Event Touch Down
 *
 */

$("#obj15636").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15636_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15636_onTap is still running");
	return;
}
var obj15636_onTap_runningActionsCount = 0;
var obj15636_onTap_loopCount = 0;
obj15636_onTap_actionGroup0();
});


















/*
 *
 *   obj15642: Event Touch Down
 *
 */

$("#obj15642").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15642_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15642_onTap is still running");
	return;
}
var obj15642_onTap_runningActionsCount = 0;
var obj15642_onTap_loopCount = 0;
obj15642_onTap_actionGroup0();
});




















































































/*
 *
 *   obj16521: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16521").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16521_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16521_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16521_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16521_SCEventCounterReachedTargetValue_loopCount = 0;
obj16521_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj16518: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16518").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16518_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16518_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16518_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16518_SCEventCounterReachedTargetValue_loopCount = 0;
obj16518_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj16515: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16515").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16515_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16515_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16515_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16515_SCEventCounterReachedTargetValue_loopCount = 0;
obj16515_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj16509: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16509").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16509_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16509_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16509_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16509_SCEventCounterReachedTargetValue_loopCount = 0;
obj16509_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj16537: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16537").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16537_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16537_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16537_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16537_SCEventCounterReachedTargetValue_loopCount = 0;
obj16537_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj16534: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16534").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16534_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16534_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16534_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16534_SCEventCounterReachedTargetValue_loopCount = 0;
obj16534_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj16531: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16531").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16531_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16531_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16531_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16531_SCEventCounterReachedTargetValue_loopCount = 0;
obj16531_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj16551: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16551").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16551_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16551_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16551_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16551_SCEventCounterReachedTargetValue_loopCount = 0;
obj16551_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj16547: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16547").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16547_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16547_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16547_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16547_SCEventCounterReachedTargetValue_loopCount = 0;
obj16547_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj16701: Event Touch Down
 *
 */

$("#obj16701").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16701_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16701_onTap is still running");
	return;
}
var obj16701_onTap_runningActionsCount = 0;
var obj16701_onTap_loopCount = 0;
obj16701_onTap_actionGroup0();
});


















/*
 *
 *   obj16692: Event Touch Down
 *
 */

$("#obj16692").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16692_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16692_onTap is still running");
	return;
}
var obj16692_onTap_runningActionsCount = 0;
var obj16692_onTap_loopCount = 0;
obj16692_onTap_actionGroup0();
});


















/*
 *
 *   obj16683: Event Touch Down
 *
 */

$("#obj16683").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16683_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16683_onTap is still running");
	return;
}
var obj16683_onTap_runningActionsCount = 0;
var obj16683_onTap_loopCount = 0;
obj16683_onTap_actionGroup0();
});


















/*
 *
 *   obj16674: Event Touch Down
 *
 */

$("#obj16674").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16674_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16674_onTap is still running");
	return;
}
var obj16674_onTap_runningActionsCount = 0;
var obj16674_onTap_loopCount = 0;
obj16674_onTap_actionGroup0();
});






























































































/*
 *
 *   obj16657: Event Touch Down
 *
 */

$("#obj16657").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16657_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16657_onTap is still running");
	return;
}
var obj16657_onTap_runningActionsCount = 0;
var obj16657_onTap_loopCount = 0;
obj16657_onTap_actionGroup0();
});


















/*
 *
 *   obj16648: Event Touch Down
 *
 */

$("#obj16648").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16648_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16648_onTap is still running");
	return;
}
var obj16648_onTap_runningActionsCount = 0;
var obj16648_onTap_loopCount = 0;
obj16648_onTap_actionGroup0();
});


















/*
 *
 *   obj16639: Event Touch Down
 *
 */

$("#obj16639").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16639_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16639_onTap is still running");
	return;
}
var obj16639_onTap_runningActionsCount = 0;
var obj16639_onTap_loopCount = 0;
obj16639_onTap_actionGroup0();
});


















/*
 *
 *   obj16630: Event Touch Down
 *
 */

$("#obj16630").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16630_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16630_onTap is still running");
	return;
}
var obj16630_onTap_runningActionsCount = 0;
var obj16630_onTap_loopCount = 0;
obj16630_onTap_actionGroup0();
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
	
$("#obj15443").trigger('SCEventShow');
$("#obj15450").trigger('SCEventShow');
$("#obj15452").trigger('SCEventShow');
$("#obj15455").trigger('SCEventShow');
$("#obj15457").trigger('SCEventShow');
$("#obj15459").trigger('SCEventShow');
$("#obj15461").trigger('SCEventShow');
$("#obj15463").trigger('SCEventShow');
$("#obj15469").trigger('SCEventShow');
$("#obj15475").trigger('SCEventShow');
$("#obj15481").trigger('SCEventShow');
$("#obj15522").trigger('SCEventShow');
$("#obj15524").trigger('SCEventShow');
$("#obj15526").trigger('SCEventShow');
$("#obj15528").trigger('SCEventShow');
$("#obj15534").trigger('SCEventShow');
$("#obj15540").trigger('SCEventShow');
$("#obj15546").trigger('SCEventShow');
$("#obj16526").trigger('SCEventShow');
$("#obj16524").trigger('SCEventShow');
$("#obj24567").trigger('SCEventShow');
$("#obj24565").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});