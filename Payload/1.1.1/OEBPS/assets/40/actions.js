pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 23195;
pubcoder.page.title = pubcoder.page.title || "40";
pubcoder.page.number = pubcoder.page.number || 40;
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
var obj23202_onTap_activeActionGroupIndex = -1;
var obj23202_onTap_runningActionsCount = 0;
var obj23202_onTap_loopCount = 0;
var obj23213_onTap_activeActionGroupIndex = -1;
var obj23213_onTap_runningActionsCount = 0;
var obj23213_onTap_loopCount = 0;
var obj23222_onTap_activeActionGroupIndex = -1;
var obj23222_onTap_runningActionsCount = 0;
var obj23222_onTap_loopCount = 0;
var obj23231_onTap_activeActionGroupIndex = -1;
var obj23231_onTap_runningActionsCount = 0;
var obj23231_onTap_loopCount = 0;
var obj23240_onTap_activeActionGroupIndex = -1;
var obj23240_onTap_runningActionsCount = 0;
var obj23240_onTap_loopCount = 0;
var obj23580_onTap_activeActionGroupIndex = -1;
var obj23580_onTap_runningActionsCount = 0;
var obj23580_onTap_loopCount = 0;
var obj23251_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23251_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23289_onTap_activeActionGroupIndex = -1;
var obj23289_onTap_runningActionsCount = 0;
var obj23289_onTap_loopCount = 0;
var obj23298_onTap_activeActionGroupIndex = -1;
var obj23298_onTap_runningActionsCount = 0;
var obj23298_onTap_loopCount = 0;
var obj23307_onTap_activeActionGroupIndex = -1;
var obj23307_onTap_runningActionsCount = 0;
var obj23307_onTap_loopCount = 0;
var obj23316_onTap_activeActionGroupIndex = -1;
var obj23316_onTap_runningActionsCount = 0;
var obj23316_onTap_loopCount = 0;
var obj23589_onTap_activeActionGroupIndex = -1;
var obj23589_onTap_runningActionsCount = 0;
var obj23589_onTap_loopCount = 0;
var obj23333_onTap_activeActionGroupIndex = -1;
var obj23333_onTap_runningActionsCount = 0;
var obj23333_onTap_loopCount = 0;
var obj23342_onTap_activeActionGroupIndex = -1;
var obj23342_onTap_runningActionsCount = 0;
var obj23342_onTap_loopCount = 0;
var obj23351_onTap_activeActionGroupIndex = -1;
var obj23351_onTap_runningActionsCount = 0;
var obj23351_onTap_loopCount = 0;
var obj23360_onTap_activeActionGroupIndex = -1;
var obj23360_onTap_runningActionsCount = 0;
var obj23360_onTap_loopCount = 0;
var obj23614_onTap_activeActionGroupIndex = -1;
var obj23614_onTap_runningActionsCount = 0;
var obj23614_onTap_loopCount = 0;
var obj23371_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23371_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23409_onTap_activeActionGroupIndex = -1;
var obj23409_onTap_runningActionsCount = 0;
var obj23409_onTap_loopCount = 0;
var obj23418_onTap_activeActionGroupIndex = -1;
var obj23418_onTap_runningActionsCount = 0;
var obj23418_onTap_loopCount = 0;
var obj23427_onTap_activeActionGroupIndex = -1;
var obj23427_onTap_runningActionsCount = 0;
var obj23427_onTap_loopCount = 0;
var obj23436_onTap_activeActionGroupIndex = -1;
var obj23436_onTap_runningActionsCount = 0;
var obj23436_onTap_loopCount = 0;
var obj23623_onTap_activeActionGroupIndex = -1;
var obj23623_onTap_runningActionsCount = 0;
var obj23623_onTap_loopCount = 0;
var obj23451_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23451_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23451_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23454_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23454_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23457_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23457_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23457_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23460_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23460_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23460_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23469_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23469_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23469_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23472_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23472_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23472_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23475_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23475_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23475_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23478_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23478_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23478_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23482_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23482_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23482_SCEventCounterReachedTargetValue_loopCount = 0;
var obj23492_onTap_activeActionGroupIndex = -1;
var obj23492_onTap_runningActionsCount = 0;
var obj23492_onTap_loopCount = 0;
var obj23500_onTap_activeActionGroupIndex = -1;
var obj23500_onTap_runningActionsCount = 0;
var obj23500_onTap_loopCount = 0;
var obj23508_onTap_activeActionGroupIndex = -1;
var obj23508_onTap_runningActionsCount = 0;
var obj23508_onTap_loopCount = 0;
var obj23516_onTap_activeActionGroupIndex = -1;
var obj23516_onTap_runningActionsCount = 0;
var obj23516_onTap_loopCount = 0;
var obj23532_onTap_activeActionGroupIndex = -1;
var obj23532_onTap_runningActionsCount = 0;
var obj23532_onTap_loopCount = 0;
var obj23540_onTap_activeActionGroupIndex = -1;
var obj23540_onTap_runningActionsCount = 0;
var obj23540_onTap_loopCount = 0;
var obj23548_onTap_activeActionGroupIndex = -1;
var obj23548_onTap_runningActionsCount = 0;
var obj23548_onTap_loopCount = 0;
var obj23556_onTap_activeActionGroupIndex = -1;
var obj23556_onTap_runningActionsCount = 0;
var obj23556_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj23251_counterValue = 0;
var obj23251_counterTargetValue = 2;
var obj23251_counterCanExceedTargetValue = false;
var obj23371_counterValue = 0;
var obj23371_counterTargetValue = 2;
var obj23371_counterCanExceedTargetValue = false;
var obj23451_counterValue = 0;
var obj23451_counterTargetValue = 1;
var obj23451_counterCanExceedTargetValue = false;
var obj23454_counterValue = 0;
var obj23454_counterTargetValue = 2;
var obj23454_counterCanExceedTargetValue = false;
var obj23457_counterValue = 0;
var obj23457_counterTargetValue = 3;
var obj23457_counterCanExceedTargetValue = false;
var obj23460_counterValue = 0;
var obj23460_counterTargetValue = 1;
var obj23460_counterCanExceedTargetValue = false;
var obj23469_counterValue = 0;
var obj23469_counterTargetValue = 4;
var obj23469_counterCanExceedTargetValue = false;
var obj23472_counterValue = 0;
var obj23472_counterTargetValue = 5;
var obj23472_counterCanExceedTargetValue = false;
var obj23475_counterValue = 0;
var obj23475_counterTargetValue = 6;
var obj23475_counterCanExceedTargetValue = false;
var obj23478_counterValue = 0;
var obj23478_counterTargetValue = 6;
var obj23478_counterCanExceedTargetValue = false;
var obj23482_counterValue = 0;
var obj23482_counterTargetValue = 6;
var obj23482_counterCanExceedTargetValue = false;

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
		
obj23202_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23202_onTap_activeActionGroupIndex = -1;
		$("#obj23202").trigger("obj23202_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23202) {
				console.warn("de-queueing event obj23202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23202_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_23204();
function goToPage_23204() {
	window.obj23202_onTap_runningActionsCount = obj23202_onTap_runningActionsCount + 1;

	$("#anchor785")[0].click();
	window.obj23202_onTap_runningActionsCount = window.obj23202_onTap_runningActionsCount - 1;

if (window.obj23202_onTap_runningActionsCount < 0) {
	window.obj23202_onTap_runningActionsCount = 0;
} else if (window.obj23202_onTap_runningActionsCount == 0) {
	obj23202_onTap_actionGroup1();
}
}










































};
obj23202_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23202_onTap_activeActionGroupIndex = -1;
		$("#obj23202").trigger("obj23202_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23202) {
				console.warn("de-queueing event obj23202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23202_onTap_activeActionGroupIndex = 1;
	











































};
obj23213_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23213_onTap_activeActionGroupIndex = -1;
		$("#obj23213").trigger("obj23213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23213) {
				console.warn("de-queueing event obj23213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23213_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23249
(function(){
	window.obj23213_onTap_runningActionsCount = obj23213_onTap_runningActionsCount + 1;


	var selector = "#obj23249";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23213_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23213_onTap_activeActionGroupIndex = -1;
		$("#obj23213").trigger("obj23213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23213) {
				console.warn("de-queueing event obj23213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23213_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23216();
function playAudioFile_23216() {
	window.obj23213_onTap_runningActionsCount = obj23213_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23216")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23216");
			$("#obj_audio_playSoundFile23216").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup2();
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
				window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23213_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23213_onTap_activeActionGroupIndex = -1;
		$("#obj23213").trigger("obj23213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23213) {
				console.warn("de-queueing event obj23213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23213_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_23217();
function runjs_23217() {
	window.obj23213_onTap_runningActionsCount = obj23213_onTap_runningActionsCount + 1;


	$("#obj23213").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24667();
function runjs_24667() {
	window.obj23213_onTap_runningActionsCount = obj23213_onTap_runningActionsCount + 1;


	$("#obj23213").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup3();
}
	}, 1);
}














};
obj23213_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23213_onTap_activeActionGroupIndex = -1;
		$("#obj23213").trigger("obj23213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23213) {
				console.warn("de-queueing event obj23213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23213_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23251 
incrementCounter_23218();
function incrementCounter_23218() {
	window.obj23213_onTap_runningActionsCount = obj23213_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23460 
incrementCounter_23219();
function incrementCounter_23219() {
	window.obj23213_onTap_runningActionsCount = obj23213_onTap_runningActionsCount + 1;


	var oldValue = obj23460_counterValue;
	obj23460_counterValue = obj23460_counterValue + 1;
	if (! obj23460_counterCanExceedTargetValue && obj23460_counterValue > obj23460_counterTargetValue) {
		obj23460_counterValue = obj23460_counterTargetValue;
	}

	if (oldValue != obj23460_counterValue) {
		$("#obj23460").trigger('SCEventCounterValueChange');
		$("#obj23460").trigger('SCEventCounterIncrease');
		if (obj23460_counterValue == obj23460_counterTargetValue)
			$("#obj23460").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23220();
function incrementCounter_23220() {
	window.obj23213_onTap_runningActionsCount = obj23213_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23478 
incrementCounter_23221();
function incrementCounter_23221() {
	window.obj23213_onTap_runningActionsCount = obj23213_onTap_runningActionsCount + 1;


	var oldValue = obj23478_counterValue;
	obj23478_counterValue = obj23478_counterValue + 1;
	if (! obj23478_counterCanExceedTargetValue && obj23478_counterValue > obj23478_counterTargetValue) {
		obj23478_counterValue = obj23478_counterTargetValue;
	}

	if (oldValue != obj23478_counterValue) {
		$("#obj23478").trigger('SCEventCounterValueChange');
		$("#obj23478").trigger('SCEventCounterIncrease');
		if (obj23478_counterValue == obj23478_counterTargetValue)
			$("#obj23478").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23213_onTap_runningActionsCount = window.obj23213_onTap_runningActionsCount - 1;

if (window.obj23213_onTap_runningActionsCount < 0) {
	window.obj23213_onTap_runningActionsCount = 0;
} else if (window.obj23213_onTap_runningActionsCount == 0) {
	obj23213_onTap_actionGroup4();
} }, 1);
}











};
obj23213_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23213_onTap_activeActionGroupIndex = -1;
		$("#obj23213").trigger("obj23213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23213) {
				console.warn("de-queueing event obj23213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23213_onTap_activeActionGroupIndex = 4;
	











































};
obj23222_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23222_onTap_activeActionGroupIndex = -1;
		$("#obj23222").trigger("obj23222_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23222) {
				console.warn("de-queueing event obj23222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23222_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23249
(function(){
	window.obj23222_onTap_runningActionsCount = obj23222_onTap_runningActionsCount + 1;


	var selector = "#obj23249";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23222_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23222_onTap_activeActionGroupIndex = -1;
		$("#obj23222").trigger("obj23222_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23222) {
				console.warn("de-queueing event obj23222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23222_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23225();
function playAudioFile_23225() {
	window.obj23222_onTap_runningActionsCount = obj23222_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23225")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23225");
			$("#obj_audio_playSoundFile23225").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup2();
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
				window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23222_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23222_onTap_activeActionGroupIndex = -1;
		$("#obj23222").trigger("obj23222_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23222) {
				console.warn("de-queueing event obj23222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23222_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24690();
function runjs_24690() {
	window.obj23222_onTap_runningActionsCount = obj23222_onTap_runningActionsCount + 1;


	$("#obj23222").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24691();
function runjs_24691() {
	window.obj23222_onTap_runningActionsCount = obj23222_onTap_runningActionsCount + 1;


	$("#obj23222").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup3();
}
	}, 1);
}














};
obj23222_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23222_onTap_activeActionGroupIndex = -1;
		$("#obj23222").trigger("obj23222_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23222) {
				console.warn("de-queueing event obj23222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23222_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23251 
incrementCounter_23229();
function incrementCounter_23229() {
	window.obj23222_onTap_runningActionsCount = obj23222_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23230();
function incrementCounter_23230() {
	window.obj23222_onTap_runningActionsCount = obj23222_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23222_onTap_runningActionsCount = window.obj23222_onTap_runningActionsCount - 1;

if (window.obj23222_onTap_runningActionsCount < 0) {
	window.obj23222_onTap_runningActionsCount = 0;
} else if (window.obj23222_onTap_runningActionsCount == 0) {
	obj23222_onTap_actionGroup4();
} }, 1);
}











};
obj23222_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23222_onTap_activeActionGroupIndex = -1;
		$("#obj23222").trigger("obj23222_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23222) {
				console.warn("de-queueing event obj23222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23222_onTap_activeActionGroupIndex = 4;
	











































};
obj23231_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23231_onTap_activeActionGroupIndex = -1;
		$("#obj23231").trigger("obj23231_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23231) {
				console.warn("de-queueing event obj23231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23231_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23249
(function(){
	window.obj23231_onTap_runningActionsCount = obj23231_onTap_runningActionsCount + 1;


	var selector = "#obj23249";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23231_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23231_onTap_activeActionGroupIndex = -1;
		$("#obj23231").trigger("obj23231_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23231) {
				console.warn("de-queueing event obj23231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23231_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23234();
function playAudioFile_23234() {
	window.obj23231_onTap_runningActionsCount = obj23231_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23234")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23234");
			$("#obj_audio_playSoundFile23234").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup2();
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
				window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23231_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23231_onTap_activeActionGroupIndex = -1;
		$("#obj23231").trigger("obj23231_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23231) {
				console.warn("de-queueing event obj23231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23231_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24692();
function runjs_24692() {
	window.obj23231_onTap_runningActionsCount = obj23231_onTap_runningActionsCount + 1;


	$("#obj23231").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24693();
function runjs_24693() {
	window.obj23231_onTap_runningActionsCount = obj23231_onTap_runningActionsCount + 1;


	$("#obj23231").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup3();
}
	}, 1);
}














};
obj23231_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23231_onTap_activeActionGroupIndex = -1;
		$("#obj23231").trigger("obj23231_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23231) {
				console.warn("de-queueing event obj23231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23231_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23251 
incrementCounter_23238();
function incrementCounter_23238() {
	window.obj23231_onTap_runningActionsCount = obj23231_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23239();
function incrementCounter_23239() {
	window.obj23231_onTap_runningActionsCount = obj23231_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23231_onTap_runningActionsCount = window.obj23231_onTap_runningActionsCount - 1;

if (window.obj23231_onTap_runningActionsCount < 0) {
	window.obj23231_onTap_runningActionsCount = 0;
} else if (window.obj23231_onTap_runningActionsCount == 0) {
	obj23231_onTap_actionGroup4();
} }, 1);
}











};
obj23231_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23231_onTap_activeActionGroupIndex = -1;
		$("#obj23231").trigger("obj23231_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23231) {
				console.warn("de-queueing event obj23231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23231_onTap_activeActionGroupIndex = 4;
	











































};
obj23240_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23240_onTap_activeActionGroupIndex = -1;
		$("#obj23240").trigger("obj23240_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23240) {
				console.warn("de-queueing event obj23240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23240_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23249
(function(){
	window.obj23240_onTap_runningActionsCount = obj23240_onTap_runningActionsCount + 1;


	var selector = "#obj23249";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23240_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23240_onTap_activeActionGroupIndex = -1;
		$("#obj23240").trigger("obj23240_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23240) {
				console.warn("de-queueing event obj23240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23240_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23243();
function playAudioFile_23243() {
	window.obj23240_onTap_runningActionsCount = obj23240_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23243")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23243");
			$("#obj_audio_playSoundFile23243").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup2();
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
				window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23240_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23240_onTap_activeActionGroupIndex = -1;
		$("#obj23240").trigger("obj23240_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23240) {
				console.warn("de-queueing event obj23240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23240_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24694();
function runjs_24694() {
	window.obj23240_onTap_runningActionsCount = obj23240_onTap_runningActionsCount + 1;


	$("#obj23240").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24695();
function runjs_24695() {
	window.obj23240_onTap_runningActionsCount = obj23240_onTap_runningActionsCount + 1;


	$("#obj23240").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup3();
}
	}, 1);
}














};
obj23240_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23240_onTap_activeActionGroupIndex = -1;
		$("#obj23240").trigger("obj23240_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23240) {
				console.warn("de-queueing event obj23240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23240_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23251 
incrementCounter_23247();
function incrementCounter_23247() {
	window.obj23240_onTap_runningActionsCount = obj23240_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23248();
function incrementCounter_23248() {
	window.obj23240_onTap_runningActionsCount = obj23240_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23240_onTap_runningActionsCount = window.obj23240_onTap_runningActionsCount - 1;

if (window.obj23240_onTap_runningActionsCount < 0) {
	window.obj23240_onTap_runningActionsCount = 0;
} else if (window.obj23240_onTap_runningActionsCount == 0) {
	obj23240_onTap_actionGroup4();
} }, 1);
}











};
obj23240_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23240_onTap_activeActionGroupIndex = -1;
		$("#obj23240").trigger("obj23240_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23240) {
				console.warn("de-queueing event obj23240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23240_onTap_activeActionGroupIndex = 4;
	











































};
obj23580_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23580_onTap_activeActionGroupIndex = -1;
		$("#obj23580").trigger("obj23580_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23580) {
				console.warn("de-queueing event obj23580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23580_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23249
(function(){
	window.obj23580_onTap_runningActionsCount = obj23580_onTap_runningActionsCount + 1;


	var selector = "#obj23249";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23580_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23580_onTap_activeActionGroupIndex = -1;
		$("#obj23580").trigger("obj23580_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23580) {
				console.warn("de-queueing event obj23580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23580_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23583();
function playAudioFile_23583() {
	window.obj23580_onTap_runningActionsCount = obj23580_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23583")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23583");
			$("#obj_audio_playSoundFile23583").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup2();
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
				window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23580_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23580_onTap_activeActionGroupIndex = -1;
		$("#obj23580").trigger("obj23580_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23580) {
				console.warn("de-queueing event obj23580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23580_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24696();
function runjs_24696() {
	window.obj23580_onTap_runningActionsCount = obj23580_onTap_runningActionsCount + 1;


	$("#obj23580").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24697();
function runjs_24697() {
	window.obj23580_onTap_runningActionsCount = obj23580_onTap_runningActionsCount + 1;


	$("#obj23580").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup3();
}
	}, 1);
}














};
obj23580_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23580_onTap_activeActionGroupIndex = -1;
		$("#obj23580").trigger("obj23580_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23580) {
				console.warn("de-queueing event obj23580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23580_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23251 
incrementCounter_23587();
function incrementCounter_23587() {
	window.obj23580_onTap_runningActionsCount = obj23580_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23588();
function incrementCounter_23588() {
	window.obj23580_onTap_runningActionsCount = obj23580_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23580_onTap_runningActionsCount = window.obj23580_onTap_runningActionsCount - 1;

if (window.obj23580_onTap_runningActionsCount < 0) {
	window.obj23580_onTap_runningActionsCount = 0;
} else if (window.obj23580_onTap_runningActionsCount == 0) {
	obj23580_onTap_actionGroup4();
} }, 1);
}











};
obj23580_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23580_onTap_activeActionGroupIndex = -1;
		$("#obj23580").trigger("obj23580_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23580) {
				console.warn("de-queueing event obj23580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23580_onTap_activeActionGroupIndex = 4;
	











































};
obj23251_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23251_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23251").trigger("obj23251_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23251) {
				console.warn("de-queueing event obj23251." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23251").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23251_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj23285 
hide_23253();
function hide_23253() {
	var selector = "#obj23285";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23253(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23287 
hide_23254();
function hide_23254() {
	var selector = "#obj23287";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23254(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23289 
hide_23255();
function hide_23255() {
	var selector = "#obj23289";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23255(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23298 
hide_23256();
function hide_23256() {
	var selector = "#obj23298";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23256(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23307 
hide_23257();
function hide_23257() {
	var selector = "#obj23307";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23257(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23316 
hide_23258();
function hide_23258() {
	var selector = "#obj23316";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23258(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23325 
hide_23259();
function hide_23259() {
	var selector = "#obj23325";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23259(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23209 
hide_23260();
function hide_23260() {
	var selector = "#obj23209";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23260(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23211 
hide_23261();
function hide_23261() {
	var selector = "#obj23211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23261(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23580 
hide_23612();
function hide_23612() {
	var selector = "#obj23580";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23612(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23589 
hide_23613();
function hide_23613() {
	var selector = "#obj23589";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23613(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23213 
hide_23262();
function hide_23262() {
	var selector = "#obj23213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23262(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23222 
hide_23263();
function hide_23263() {
	var selector = "#obj23222";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23263(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23231 
hide_23264();
function hide_23264() {
	var selector = "#obj23231";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23264(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23240 
hide_23265();
function hide_23265() {
	var selector = "#obj23240";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23265(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23249 
hide_23266();
function hide_23266() {
	var selector = "#obj23249";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23266(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23207 
hide_23267();
function hide_23267() {
	var selector = "#obj23207";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23267(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23283 
hide_23268();
function hide_23268() {
	var selector = "#obj23283";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23268(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj23251_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23251_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23251").trigger("obj23251_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23251) {
				console.warn("de-queueing event obj23251." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23251").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23251_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj23327
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23327";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23329
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23329";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23331
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23331";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23333
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23333";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23342
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23342";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23351
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23351";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23360
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23360";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23403
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23403";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23405
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23405";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23407
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23407";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23409
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23409";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23418
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23418";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23427
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23427";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23436
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23436";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23614
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23614";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23623
(function(){
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = obj23251_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23623";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23251_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23251_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23251_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23251_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23251").trigger("obj23251_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23251) {
				console.warn("de-queueing event obj23251." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23251").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23251_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj23289_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23289_onTap_activeActionGroupIndex = -1;
		$("#obj23289").trigger("obj23289_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23289) {
				console.warn("de-queueing event obj23289." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23289").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23289_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23325
(function(){
	window.obj23289_onTap_runningActionsCount = obj23289_onTap_runningActionsCount + 1;


	var selector = "#obj23325";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23289_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23289_onTap_activeActionGroupIndex = -1;
		$("#obj23289").trigger("obj23289_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23289) {
				console.warn("de-queueing event obj23289." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23289").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23289_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23292();
function playAudioFile_23292() {
	window.obj23289_onTap_runningActionsCount = obj23289_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23292")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23292");
			$("#obj_audio_playSoundFile23292").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup2();
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
				window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23289_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23289_onTap_activeActionGroupIndex = -1;
		$("#obj23289").trigger("obj23289_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23289) {
				console.warn("de-queueing event obj23289." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23289").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23289_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24698();
function runjs_24698() {
	window.obj23289_onTap_runningActionsCount = obj23289_onTap_runningActionsCount + 1;


	$("#obj23289").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24699();
function runjs_24699() {
	window.obj23289_onTap_runningActionsCount = obj23289_onTap_runningActionsCount + 1;


	$("#obj23289").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup3();
}
	}, 1);
}














};
obj23289_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23289_onTap_activeActionGroupIndex = -1;
		$("#obj23289").trigger("obj23289_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23289) {
				console.warn("de-queueing event obj23289." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23289").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23289_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23251 
incrementCounter_23296();
function incrementCounter_23296() {
	window.obj23289_onTap_runningActionsCount = obj23289_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23297();
function incrementCounter_23297() {
	window.obj23289_onTap_runningActionsCount = obj23289_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23289_onTap_runningActionsCount = window.obj23289_onTap_runningActionsCount - 1;

if (window.obj23289_onTap_runningActionsCount < 0) {
	window.obj23289_onTap_runningActionsCount = 0;
} else if (window.obj23289_onTap_runningActionsCount == 0) {
	obj23289_onTap_actionGroup4();
} }, 1);
}











};
obj23289_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23289_onTap_activeActionGroupIndex = -1;
		$("#obj23289").trigger("obj23289_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23289) {
				console.warn("de-queueing event obj23289." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23289").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23289_onTap_activeActionGroupIndex = 4;
	











































};
obj23298_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23298_onTap_activeActionGroupIndex = -1;
		$("#obj23298").trigger("obj23298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23298) {
				console.warn("de-queueing event obj23298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23298_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23325
(function(){
	window.obj23298_onTap_runningActionsCount = obj23298_onTap_runningActionsCount + 1;


	var selector = "#obj23325";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23298_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23298_onTap_activeActionGroupIndex = -1;
		$("#obj23298").trigger("obj23298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23298) {
				console.warn("de-queueing event obj23298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23298_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23599();
function playAudioFile_23599() {
	window.obj23298_onTap_runningActionsCount = obj23298_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23599")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23599");
			$("#obj_audio_playSoundFile23599").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup2();
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
				window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23298_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23298_onTap_activeActionGroupIndex = -1;
		$("#obj23298").trigger("obj23298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23298) {
				console.warn("de-queueing event obj23298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23298_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24700();
function runjs_24700() {
	window.obj23298_onTap_runningActionsCount = obj23298_onTap_runningActionsCount + 1;


	$("#obj23298").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24701();
function runjs_24701() {
	window.obj23298_onTap_runningActionsCount = obj23298_onTap_runningActionsCount + 1;


	$("#obj23298").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup3();
}
	}, 1);
}














};
obj23298_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23298_onTap_activeActionGroupIndex = -1;
		$("#obj23298").trigger("obj23298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23298) {
				console.warn("de-queueing event obj23298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23298_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23251 
incrementCounter_23603();
function incrementCounter_23603() {
	window.obj23298_onTap_runningActionsCount = obj23298_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23604();
function incrementCounter_23604() {
	window.obj23298_onTap_runningActionsCount = obj23298_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23298_onTap_runningActionsCount = window.obj23298_onTap_runningActionsCount - 1;

if (window.obj23298_onTap_runningActionsCount < 0) {
	window.obj23298_onTap_runningActionsCount = 0;
} else if (window.obj23298_onTap_runningActionsCount == 0) {
	obj23298_onTap_actionGroup4();
} }, 1);
}











};
obj23298_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23298_onTap_activeActionGroupIndex = -1;
		$("#obj23298").trigger("obj23298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23298) {
				console.warn("de-queueing event obj23298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23298_onTap_activeActionGroupIndex = 4;
	











































};
obj23307_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23307_onTap_activeActionGroupIndex = -1;
		$("#obj23307").trigger("obj23307_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23307) {
				console.warn("de-queueing event obj23307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23307_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23325
(function(){
	window.obj23307_onTap_runningActionsCount = obj23307_onTap_runningActionsCount + 1;


	var selector = "#obj23325";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23307_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23307_onTap_activeActionGroupIndex = -1;
		$("#obj23307").trigger("obj23307_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23307) {
				console.warn("de-queueing event obj23307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23307_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23606();
function playAudioFile_23606() {
	window.obj23307_onTap_runningActionsCount = obj23307_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23606")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23606");
			$("#obj_audio_playSoundFile23606").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup2();
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
				window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23307_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23307_onTap_activeActionGroupIndex = -1;
		$("#obj23307").trigger("obj23307_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23307) {
				console.warn("de-queueing event obj23307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23307_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_23607();
function runjs_23607() {
	window.obj23307_onTap_runningActionsCount = obj23307_onTap_runningActionsCount + 1;


	$("#obj23307").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24703();
function runjs_24703() {
	window.obj23307_onTap_runningActionsCount = obj23307_onTap_runningActionsCount + 1;


	$("#obj23307").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup3();
}
	}, 1);
}














};
obj23307_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23307_onTap_activeActionGroupIndex = -1;
		$("#obj23307").trigger("obj23307_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23307) {
				console.warn("de-queueing event obj23307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23307_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23251 
incrementCounter_23608();
function incrementCounter_23608() {
	window.obj23307_onTap_runningActionsCount = obj23307_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23460 
incrementCounter_23609();
function incrementCounter_23609() {
	window.obj23307_onTap_runningActionsCount = obj23307_onTap_runningActionsCount + 1;


	var oldValue = obj23460_counterValue;
	obj23460_counterValue = obj23460_counterValue + 1;
	if (! obj23460_counterCanExceedTargetValue && obj23460_counterValue > obj23460_counterTargetValue) {
		obj23460_counterValue = obj23460_counterTargetValue;
	}

	if (oldValue != obj23460_counterValue) {
		$("#obj23460").trigger('SCEventCounterValueChange');
		$("#obj23460").trigger('SCEventCounterIncrease');
		if (obj23460_counterValue == obj23460_counterTargetValue)
			$("#obj23460").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23478 
incrementCounter_23610();
function incrementCounter_23610() {
	window.obj23307_onTap_runningActionsCount = obj23307_onTap_runningActionsCount + 1;


	var oldValue = obj23478_counterValue;
	obj23478_counterValue = obj23478_counterValue + 1;
	if (! obj23478_counterCanExceedTargetValue && obj23478_counterValue > obj23478_counterTargetValue) {
		obj23478_counterValue = obj23478_counterTargetValue;
	}

	if (oldValue != obj23478_counterValue) {
		$("#obj23478").trigger('SCEventCounterValueChange');
		$("#obj23478").trigger('SCEventCounterIncrease');
		if (obj23478_counterValue == obj23478_counterTargetValue)
			$("#obj23478").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23611();
function incrementCounter_23611() {
	window.obj23307_onTap_runningActionsCount = obj23307_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23307_onTap_runningActionsCount = window.obj23307_onTap_runningActionsCount - 1;

if (window.obj23307_onTap_runningActionsCount < 0) {
	window.obj23307_onTap_runningActionsCount = 0;
} else if (window.obj23307_onTap_runningActionsCount == 0) {
	obj23307_onTap_actionGroup4();
} }, 1);
}











};
obj23307_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23307_onTap_activeActionGroupIndex = -1;
		$("#obj23307").trigger("obj23307_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23307) {
				console.warn("de-queueing event obj23307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23307_onTap_activeActionGroupIndex = 4;
	











































};
obj23316_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23316_onTap_activeActionGroupIndex = -1;
		$("#obj23316").trigger("obj23316_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23316) {
				console.warn("de-queueing event obj23316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23316_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23325
(function(){
	window.obj23316_onTap_runningActionsCount = obj23316_onTap_runningActionsCount + 1;


	var selector = "#obj23325";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23316_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23316_onTap_activeActionGroupIndex = -1;
		$("#obj23316").trigger("obj23316_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23316) {
				console.warn("de-queueing event obj23316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23316_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23319();
function playAudioFile_23319() {
	window.obj23316_onTap_runningActionsCount = obj23316_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23319")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23319");
			$("#obj_audio_playSoundFile23319").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup2();
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
				window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23316_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23316_onTap_activeActionGroupIndex = -1;
		$("#obj23316").trigger("obj23316_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23316) {
				console.warn("de-queueing event obj23316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23316_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24704();
function runjs_24704() {
	window.obj23316_onTap_runningActionsCount = obj23316_onTap_runningActionsCount + 1;


	$("#obj23316").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24705();
function runjs_24705() {
	window.obj23316_onTap_runningActionsCount = obj23316_onTap_runningActionsCount + 1;


	$("#obj23316").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup3();
}
	}, 1);
}














};
obj23316_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23316_onTap_activeActionGroupIndex = -1;
		$("#obj23316").trigger("obj23316_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23316) {
				console.warn("de-queueing event obj23316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23316_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23482 
incrementCounter_23323();
function incrementCounter_23323() {
	window.obj23316_onTap_runningActionsCount = obj23316_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23251 
incrementCounter_23324();
function incrementCounter_23324() {
	window.obj23316_onTap_runningActionsCount = obj23316_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23316_onTap_runningActionsCount = window.obj23316_onTap_runningActionsCount - 1;

if (window.obj23316_onTap_runningActionsCount < 0) {
	window.obj23316_onTap_runningActionsCount = 0;
} else if (window.obj23316_onTap_runningActionsCount == 0) {
	obj23316_onTap_actionGroup4();
} }, 1);
}











};
obj23316_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23316_onTap_activeActionGroupIndex = -1;
		$("#obj23316").trigger("obj23316_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23316) {
				console.warn("de-queueing event obj23316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23316_onTap_activeActionGroupIndex = 4;
	











































};
obj23589_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23589_onTap_activeActionGroupIndex = -1;
		$("#obj23589").trigger("obj23589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23589) {
				console.warn("de-queueing event obj23589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23589_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23325
(function(){
	window.obj23589_onTap_runningActionsCount = obj23589_onTap_runningActionsCount + 1;


	var selector = "#obj23325";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23589_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23589_onTap_activeActionGroupIndex = -1;
		$("#obj23589").trigger("obj23589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23589) {
				console.warn("de-queueing event obj23589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23589_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23592();
function playAudioFile_23592() {
	window.obj23589_onTap_runningActionsCount = obj23589_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23592")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23592");
			$("#obj_audio_playSoundFile23592").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup2();
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
				window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23589_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23589_onTap_activeActionGroupIndex = -1;
		$("#obj23589").trigger("obj23589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23589) {
				console.warn("de-queueing event obj23589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23589_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24706();
function runjs_24706() {
	window.obj23589_onTap_runningActionsCount = obj23589_onTap_runningActionsCount + 1;


	$("#obj23589").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24707();
function runjs_24707() {
	window.obj23589_onTap_runningActionsCount = obj23589_onTap_runningActionsCount + 1;


	$("#obj23589").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup3();
}
	}, 1);
}














};
obj23589_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23589_onTap_activeActionGroupIndex = -1;
		$("#obj23589").trigger("obj23589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23589) {
				console.warn("de-queueing event obj23589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23589_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23482 
incrementCounter_23596();
function incrementCounter_23596() {
	window.obj23589_onTap_runningActionsCount = obj23589_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23251 
incrementCounter_23597();
function incrementCounter_23597() {
	window.obj23589_onTap_runningActionsCount = obj23589_onTap_runningActionsCount + 1;


	var oldValue = obj23251_counterValue;
	obj23251_counterValue = obj23251_counterValue + 1;
	if (! obj23251_counterCanExceedTargetValue && obj23251_counterValue > obj23251_counterTargetValue) {
		obj23251_counterValue = obj23251_counterTargetValue;
	}

	if (oldValue != obj23251_counterValue) {
		$("#obj23251").trigger('SCEventCounterValueChange');
		$("#obj23251").trigger('SCEventCounterIncrease');
		if (obj23251_counterValue == obj23251_counterTargetValue)
			$("#obj23251").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23589_onTap_runningActionsCount = window.obj23589_onTap_runningActionsCount - 1;

if (window.obj23589_onTap_runningActionsCount < 0) {
	window.obj23589_onTap_runningActionsCount = 0;
} else if (window.obj23589_onTap_runningActionsCount == 0) {
	obj23589_onTap_actionGroup4();
} }, 1);
}











};
obj23589_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23589_onTap_activeActionGroupIndex = -1;
		$("#obj23589").trigger("obj23589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23589) {
				console.warn("de-queueing event obj23589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23589_onTap_activeActionGroupIndex = 4;
	











































};
obj23333_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23333_onTap_activeActionGroupIndex = -1;
		$("#obj23333").trigger("obj23333_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23333) {
				console.warn("de-queueing event obj23333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23333_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23369
(function(){
	window.obj23333_onTap_runningActionsCount = obj23333_onTap_runningActionsCount + 1;


	var selector = "#obj23369";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23333_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23333_onTap_activeActionGroupIndex = -1;
		$("#obj23333").trigger("obj23333_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23333) {
				console.warn("de-queueing event obj23333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23333_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23647();
function playAudioFile_23647() {
	window.obj23333_onTap_runningActionsCount = obj23333_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23647")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23647");
			$("#obj_audio_playSoundFile23647").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup2();
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
				window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23333_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23333_onTap_activeActionGroupIndex = -1;
		$("#obj23333").trigger("obj23333_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23333) {
				console.warn("de-queueing event obj23333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23333_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_23648();
function runjs_23648() {
	window.obj23333_onTap_runningActionsCount = obj23333_onTap_runningActionsCount + 1;


	$("#obj23333").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24669();
function runjs_24669() {
	window.obj23333_onTap_runningActionsCount = obj23333_onTap_runningActionsCount + 1;


	$("#obj23333").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup3();
}
	}, 1);
}














};
obj23333_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23333_onTap_activeActionGroupIndex = -1;
		$("#obj23333").trigger("obj23333_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23333) {
				console.warn("de-queueing event obj23333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23333_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23649();
function incrementCounter_23649() {
	window.obj23333_onTap_runningActionsCount = obj23333_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23460 
incrementCounter_23650();
function incrementCounter_23650() {
	window.obj23333_onTap_runningActionsCount = obj23333_onTap_runningActionsCount + 1;


	var oldValue = obj23460_counterValue;
	obj23460_counterValue = obj23460_counterValue + 1;
	if (! obj23460_counterCanExceedTargetValue && obj23460_counterValue > obj23460_counterTargetValue) {
		obj23460_counterValue = obj23460_counterTargetValue;
	}

	if (oldValue != obj23460_counterValue) {
		$("#obj23460").trigger('SCEventCounterValueChange');
		$("#obj23460").trigger('SCEventCounterIncrease');
		if (obj23460_counterValue == obj23460_counterTargetValue)
			$("#obj23460").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23478 
incrementCounter_23651();
function incrementCounter_23651() {
	window.obj23333_onTap_runningActionsCount = obj23333_onTap_runningActionsCount + 1;


	var oldValue = obj23478_counterValue;
	obj23478_counterValue = obj23478_counterValue + 1;
	if (! obj23478_counterCanExceedTargetValue && obj23478_counterValue > obj23478_counterTargetValue) {
		obj23478_counterValue = obj23478_counterTargetValue;
	}

	if (oldValue != obj23478_counterValue) {
		$("#obj23478").trigger('SCEventCounterValueChange');
		$("#obj23478").trigger('SCEventCounterIncrease');
		if (obj23478_counterValue == obj23478_counterTargetValue)
			$("#obj23478").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23652();
function incrementCounter_23652() {
	window.obj23333_onTap_runningActionsCount = obj23333_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23333_onTap_runningActionsCount = window.obj23333_onTap_runningActionsCount - 1;

if (window.obj23333_onTap_runningActionsCount < 0) {
	window.obj23333_onTap_runningActionsCount = 0;
} else if (window.obj23333_onTap_runningActionsCount == 0) {
	obj23333_onTap_actionGroup4();
} }, 1);
}











};
obj23333_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23333_onTap_activeActionGroupIndex = -1;
		$("#obj23333").trigger("obj23333_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23333) {
				console.warn("de-queueing event obj23333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23333_onTap_activeActionGroupIndex = 4;
	











































};
obj23342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23342_onTap_activeActionGroupIndex = -1;
		$("#obj23342").trigger("obj23342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23342) {
				console.warn("de-queueing event obj23342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23342_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23369
(function(){
	window.obj23342_onTap_runningActionsCount = obj23342_onTap_runningActionsCount + 1;


	var selector = "#obj23369";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23342_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23342_onTap_activeActionGroupIndex = -1;
		$("#obj23342").trigger("obj23342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23342) {
				console.warn("de-queueing event obj23342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23342_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23345();
function playAudioFile_23345() {
	window.obj23342_onTap_runningActionsCount = obj23342_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23345")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23345");
			$("#obj_audio_playSoundFile23345").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup2();
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
				window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23342_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23342_onTap_activeActionGroupIndex = -1;
		$("#obj23342").trigger("obj23342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23342) {
				console.warn("de-queueing event obj23342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23342_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24670();
function runjs_24670() {
	window.obj23342_onTap_runningActionsCount = obj23342_onTap_runningActionsCount + 1;


	$("#obj23342").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24671();
function runjs_24671() {
	window.obj23342_onTap_runningActionsCount = obj23342_onTap_runningActionsCount + 1;


	$("#obj23342").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup3();
}
	}, 1);
}














};
obj23342_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23342_onTap_activeActionGroupIndex = -1;
		$("#obj23342").trigger("obj23342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23342) {
				console.warn("de-queueing event obj23342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23342_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23349();
function incrementCounter_23349() {
	window.obj23342_onTap_runningActionsCount = obj23342_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23350();
function incrementCounter_23350() {
	window.obj23342_onTap_runningActionsCount = obj23342_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23342_onTap_runningActionsCount = window.obj23342_onTap_runningActionsCount - 1;

if (window.obj23342_onTap_runningActionsCount < 0) {
	window.obj23342_onTap_runningActionsCount = 0;
} else if (window.obj23342_onTap_runningActionsCount == 0) {
	obj23342_onTap_actionGroup4();
} }, 1);
}











};
obj23342_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23342_onTap_activeActionGroupIndex = -1;
		$("#obj23342").trigger("obj23342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23342) {
				console.warn("de-queueing event obj23342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23342_onTap_activeActionGroupIndex = 4;
	











































};
obj23351_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23351_onTap_activeActionGroupIndex = -1;
		$("#obj23351").trigger("obj23351_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23351) {
				console.warn("de-queueing event obj23351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23351_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23369
(function(){
	window.obj23351_onTap_runningActionsCount = obj23351_onTap_runningActionsCount + 1;


	var selector = "#obj23369";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23351_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23351_onTap_activeActionGroupIndex = -1;
		$("#obj23351").trigger("obj23351_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23351) {
				console.warn("de-queueing event obj23351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23351_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23654();
function playAudioFile_23654() {
	window.obj23351_onTap_runningActionsCount = obj23351_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23654")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23654");
			$("#obj_audio_playSoundFile23654").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup2();
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
				window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23351_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23351_onTap_activeActionGroupIndex = -1;
		$("#obj23351").trigger("obj23351_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23351) {
				console.warn("de-queueing event obj23351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23351_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24672();
function runjs_24672() {
	window.obj23351_onTap_runningActionsCount = obj23351_onTap_runningActionsCount + 1;


	$("#obj23351").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24673();
function runjs_24673() {
	window.obj23351_onTap_runningActionsCount = obj23351_onTap_runningActionsCount + 1;


	$("#obj23351").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup3();
}
	}, 1);
}














};
obj23351_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23351_onTap_activeActionGroupIndex = -1;
		$("#obj23351").trigger("obj23351_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23351) {
				console.warn("de-queueing event obj23351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23351_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23658();
function incrementCounter_23658() {
	window.obj23351_onTap_runningActionsCount = obj23351_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23659();
function incrementCounter_23659() {
	window.obj23351_onTap_runningActionsCount = obj23351_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23351_onTap_runningActionsCount = window.obj23351_onTap_runningActionsCount - 1;

if (window.obj23351_onTap_runningActionsCount < 0) {
	window.obj23351_onTap_runningActionsCount = 0;
} else if (window.obj23351_onTap_runningActionsCount == 0) {
	obj23351_onTap_actionGroup4();
} }, 1);
}











};
obj23351_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23351_onTap_activeActionGroupIndex = -1;
		$("#obj23351").trigger("obj23351_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23351) {
				console.warn("de-queueing event obj23351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23351_onTap_activeActionGroupIndex = 4;
	











































};
obj23360_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23360_onTap_activeActionGroupIndex = -1;
		$("#obj23360").trigger("obj23360_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23360) {
				console.warn("de-queueing event obj23360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23360_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23369
(function(){
	window.obj23360_onTap_runningActionsCount = obj23360_onTap_runningActionsCount + 1;


	var selector = "#obj23369";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23360_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23360_onTap_activeActionGroupIndex = -1;
		$("#obj23360").trigger("obj23360_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23360) {
				console.warn("de-queueing event obj23360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23360_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23363();
function playAudioFile_23363() {
	window.obj23360_onTap_runningActionsCount = obj23360_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23363")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23363");
			$("#obj_audio_playSoundFile23363").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup2();
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
				window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23360_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23360_onTap_activeActionGroupIndex = -1;
		$("#obj23360").trigger("obj23360_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23360) {
				console.warn("de-queueing event obj23360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23360_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24674();
function runjs_24674() {
	window.obj23360_onTap_runningActionsCount = obj23360_onTap_runningActionsCount + 1;


	$("#obj23360").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24675();
function runjs_24675() {
	window.obj23360_onTap_runningActionsCount = obj23360_onTap_runningActionsCount + 1;


	$("#obj23360").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup3();
}
	}, 1);
}














};
obj23360_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23360_onTap_activeActionGroupIndex = -1;
		$("#obj23360").trigger("obj23360_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23360) {
				console.warn("de-queueing event obj23360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23360_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23367();
function incrementCounter_23367() {
	window.obj23360_onTap_runningActionsCount = obj23360_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23368();
function incrementCounter_23368() {
	window.obj23360_onTap_runningActionsCount = obj23360_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23360_onTap_runningActionsCount = window.obj23360_onTap_runningActionsCount - 1;

if (window.obj23360_onTap_runningActionsCount < 0) {
	window.obj23360_onTap_runningActionsCount = 0;
} else if (window.obj23360_onTap_runningActionsCount == 0) {
	obj23360_onTap_actionGroup4();
} }, 1);
}











};
obj23360_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23360_onTap_activeActionGroupIndex = -1;
		$("#obj23360").trigger("obj23360_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23360) {
				console.warn("de-queueing event obj23360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23360_onTap_activeActionGroupIndex = 4;
	











































};
obj23614_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23614_onTap_activeActionGroupIndex = -1;
		$("#obj23614").trigger("obj23614_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23614) {
				console.warn("de-queueing event obj23614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23614_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23369
(function(){
	window.obj23614_onTap_runningActionsCount = obj23614_onTap_runningActionsCount + 1;


	var selector = "#obj23369";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23614_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23614_onTap_activeActionGroupIndex = -1;
		$("#obj23614").trigger("obj23614_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23614) {
				console.warn("de-queueing event obj23614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23614_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23617();
function playAudioFile_23617() {
	window.obj23614_onTap_runningActionsCount = obj23614_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23617")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23617");
			$("#obj_audio_playSoundFile23617").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup2();
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
				window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23614_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23614_onTap_activeActionGroupIndex = -1;
		$("#obj23614").trigger("obj23614_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23614) {
				console.warn("de-queueing event obj23614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23614_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24676();
function runjs_24676() {
	window.obj23614_onTap_runningActionsCount = obj23614_onTap_runningActionsCount + 1;


	$("#obj23614").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24677();
function runjs_24677() {
	window.obj23614_onTap_runningActionsCount = obj23614_onTap_runningActionsCount + 1;


	$("#obj23614").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup3();
}
	}, 1);
}














};
obj23614_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23614_onTap_activeActionGroupIndex = -1;
		$("#obj23614").trigger("obj23614_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23614) {
				console.warn("de-queueing event obj23614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23614_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23621();
function incrementCounter_23621() {
	window.obj23614_onTap_runningActionsCount = obj23614_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23622();
function incrementCounter_23622() {
	window.obj23614_onTap_runningActionsCount = obj23614_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23614_onTap_runningActionsCount = window.obj23614_onTap_runningActionsCount - 1;

if (window.obj23614_onTap_runningActionsCount < 0) {
	window.obj23614_onTap_runningActionsCount = 0;
} else if (window.obj23614_onTap_runningActionsCount == 0) {
	obj23614_onTap_actionGroup4();
} }, 1);
}











};
obj23614_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23614_onTap_activeActionGroupIndex = -1;
		$("#obj23614").trigger("obj23614_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23614) {
				console.warn("de-queueing event obj23614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23614_onTap_activeActionGroupIndex = 4;
	











































};
obj23371_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23371_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23371").trigger("obj23371_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23371) {
				console.warn("de-queueing event obj23371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23371_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj23405 
hide_23373();
function hide_23373() {
	var selector = "#obj23405";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23373(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23407 
hide_23374();
function hide_23374() {
	var selector = "#obj23407";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23374(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23409 
hide_23375();
function hide_23375() {
	var selector = "#obj23409";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23375(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23418 
hide_23376();
function hide_23376() {
	var selector = "#obj23418";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23376(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23427 
hide_23377();
function hide_23377() {
	var selector = "#obj23427";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23377(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23436 
hide_23378();
function hide_23378() {
	var selector = "#obj23436";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23378(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23403 
hide_23379();
function hide_23379() {
	var selector = "#obj23403";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23379(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23445 
hide_23380();
function hide_23380() {
	var selector = "#obj23445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23380(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23329 
hide_23381();
function hide_23381() {
	var selector = "#obj23329";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23381(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23331 
hide_23382();
function hide_23382() {
	var selector = "#obj23331";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23382(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23333 
hide_23383();
function hide_23383() {
	var selector = "#obj23333";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23383(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23342 
hide_23384();
function hide_23384() {
	var selector = "#obj23342";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23384(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23351 
hide_23385();
function hide_23385() {
	var selector = "#obj23351";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23385(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23360 
hide_23386();
function hide_23386() {
	var selector = "#obj23360";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23386(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23369 
hide_23387();
function hide_23387() {
	var selector = "#obj23369";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23387(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23327 
hide_23388();
function hide_23388() {
	var selector = "#obj23327";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23388(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23614 
hide_23662();
function hide_23662() {
	var selector = "#obj23614";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23662(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23623 
hide_23663();
function hide_23663() {
	var selector = "#obj23623";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23663(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj23371_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23371_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23371").trigger("obj23371_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23371) {
				console.warn("de-queueing event obj23371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23371_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj23486
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23486";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23488
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23488";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23490
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23490";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23492
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23492";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23500
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23500";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23508
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23508";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23516
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23516";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23526
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23526";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23528
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23528";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23530
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23530";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23532
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23532";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23540
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23540";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23548
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23548";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23556
(function(){
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = obj23371_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj23556";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23371_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23371_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23371_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23371_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23371").trigger("obj23371_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23371) {
				console.warn("de-queueing event obj23371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23371_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj23409_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23409_onTap_activeActionGroupIndex = -1;
		$("#obj23409").trigger("obj23409_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23409) {
				console.warn("de-queueing event obj23409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23409_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23445
(function(){
	window.obj23409_onTap_runningActionsCount = obj23409_onTap_runningActionsCount + 1;


	var selector = "#obj23445";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23409_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23409_onTap_activeActionGroupIndex = -1;
		$("#obj23409").trigger("obj23409_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23409) {
				console.warn("de-queueing event obj23409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23409_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23412();
function playAudioFile_23412() {
	window.obj23409_onTap_runningActionsCount = obj23409_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23412")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23412");
			$("#obj_audio_playSoundFile23412").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup2();
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
				window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23409_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23409_onTap_activeActionGroupIndex = -1;
		$("#obj23409").trigger("obj23409_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23409) {
				console.warn("de-queueing event obj23409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23409_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24678();
function runjs_24678() {
	window.obj23409_onTap_runningActionsCount = obj23409_onTap_runningActionsCount + 1;


	$("#obj23409").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24679();
function runjs_24679() {
	window.obj23409_onTap_runningActionsCount = obj23409_onTap_runningActionsCount + 1;


	$("#obj23409").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup3();
}
	}, 1);
}














};
obj23409_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23409_onTap_activeActionGroupIndex = -1;
		$("#obj23409").trigger("obj23409_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23409) {
				console.warn("de-queueing event obj23409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23409_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23416();
function incrementCounter_23416() {
	window.obj23409_onTap_runningActionsCount = obj23409_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23417();
function incrementCounter_23417() {
	window.obj23409_onTap_runningActionsCount = obj23409_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23409_onTap_runningActionsCount = window.obj23409_onTap_runningActionsCount - 1;

if (window.obj23409_onTap_runningActionsCount < 0) {
	window.obj23409_onTap_runningActionsCount = 0;
} else if (window.obj23409_onTap_runningActionsCount == 0) {
	obj23409_onTap_actionGroup4();
} }, 1);
}











};
obj23409_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23409_onTap_activeActionGroupIndex = -1;
		$("#obj23409").trigger("obj23409_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23409) {
				console.warn("de-queueing event obj23409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23409_onTap_activeActionGroupIndex = 4;
	











































};
obj23418_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23418_onTap_activeActionGroupIndex = -1;
		$("#obj23418").trigger("obj23418_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23418) {
				console.warn("de-queueing event obj23418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23418_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23445
(function(){
	window.obj23418_onTap_runningActionsCount = obj23418_onTap_runningActionsCount + 1;


	var selector = "#obj23445";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23418_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23418_onTap_activeActionGroupIndex = -1;
		$("#obj23418").trigger("obj23418_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23418) {
				console.warn("de-queueing event obj23418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23418_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23633();
function playAudioFile_23633() {
	window.obj23418_onTap_runningActionsCount = obj23418_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23633")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23633");
			$("#obj_audio_playSoundFile23633").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup2();
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
				window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23418_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23418_onTap_activeActionGroupIndex = -1;
		$("#obj23418").trigger("obj23418_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23418) {
				console.warn("de-queueing event obj23418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23418_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_23634();
function runjs_23634() {
	window.obj23418_onTap_runningActionsCount = obj23418_onTap_runningActionsCount + 1;


	$("#obj23418").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24681();
function runjs_24681() {
	window.obj23418_onTap_runningActionsCount = obj23418_onTap_runningActionsCount + 1;


	$("#obj23418").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup3();
}
	}, 1);
}














};
obj23418_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23418_onTap_activeActionGroupIndex = -1;
		$("#obj23418").trigger("obj23418_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23418) {
				console.warn("de-queueing event obj23418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23418_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23635();
function incrementCounter_23635() {
	window.obj23418_onTap_runningActionsCount = obj23418_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23460 
incrementCounter_23636();
function incrementCounter_23636() {
	window.obj23418_onTap_runningActionsCount = obj23418_onTap_runningActionsCount + 1;


	var oldValue = obj23460_counterValue;
	obj23460_counterValue = obj23460_counterValue + 1;
	if (! obj23460_counterCanExceedTargetValue && obj23460_counterValue > obj23460_counterTargetValue) {
		obj23460_counterValue = obj23460_counterTargetValue;
	}

	if (oldValue != obj23460_counterValue) {
		$("#obj23460").trigger('SCEventCounterValueChange');
		$("#obj23460").trigger('SCEventCounterIncrease');
		if (obj23460_counterValue == obj23460_counterTargetValue)
			$("#obj23460").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23637();
function incrementCounter_23637() {
	window.obj23418_onTap_runningActionsCount = obj23418_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23478 
incrementCounter_23638();
function incrementCounter_23638() {
	window.obj23418_onTap_runningActionsCount = obj23418_onTap_runningActionsCount + 1;


	var oldValue = obj23478_counterValue;
	obj23478_counterValue = obj23478_counterValue + 1;
	if (! obj23478_counterCanExceedTargetValue && obj23478_counterValue > obj23478_counterTargetValue) {
		obj23478_counterValue = obj23478_counterTargetValue;
	}

	if (oldValue != obj23478_counterValue) {
		$("#obj23478").trigger('SCEventCounterValueChange');
		$("#obj23478").trigger('SCEventCounterIncrease');
		if (obj23478_counterValue == obj23478_counterTargetValue)
			$("#obj23478").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23418_onTap_runningActionsCount = window.obj23418_onTap_runningActionsCount - 1;

if (window.obj23418_onTap_runningActionsCount < 0) {
	window.obj23418_onTap_runningActionsCount = 0;
} else if (window.obj23418_onTap_runningActionsCount == 0) {
	obj23418_onTap_actionGroup4();
} }, 1);
}











};
obj23418_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23418_onTap_activeActionGroupIndex = -1;
		$("#obj23418").trigger("obj23418_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23418) {
				console.warn("de-queueing event obj23418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23418_onTap_activeActionGroupIndex = 4;
	











































};
obj23427_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23427_onTap_activeActionGroupIndex = -1;
		$("#obj23427").trigger("obj23427_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23427) {
				console.warn("de-queueing event obj23427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23427_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23445
(function(){
	window.obj23427_onTap_runningActionsCount = obj23427_onTap_runningActionsCount + 1;


	var selector = "#obj23445";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23427_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23427_onTap_activeActionGroupIndex = -1;
		$("#obj23427").trigger("obj23427_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23427) {
				console.warn("de-queueing event obj23427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23427_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23430();
function playAudioFile_23430() {
	window.obj23427_onTap_runningActionsCount = obj23427_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23430")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23430");
			$("#obj_audio_playSoundFile23430").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup2();
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
				window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23427_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23427_onTap_activeActionGroupIndex = -1;
		$("#obj23427").trigger("obj23427_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23427) {
				console.warn("de-queueing event obj23427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23427_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24682();
function runjs_24682() {
	window.obj23427_onTap_runningActionsCount = obj23427_onTap_runningActionsCount + 1;


	$("#obj23427").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24683();
function runjs_24683() {
	window.obj23427_onTap_runningActionsCount = obj23427_onTap_runningActionsCount + 1;


	$("#obj23427").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup3();
}
	}, 1);
}














};
obj23427_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23427_onTap_activeActionGroupIndex = -1;
		$("#obj23427").trigger("obj23427_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23427) {
				console.warn("de-queueing event obj23427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23427_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23434();
function incrementCounter_23434() {
	window.obj23427_onTap_runningActionsCount = obj23427_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23435();
function incrementCounter_23435() {
	window.obj23427_onTap_runningActionsCount = obj23427_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23427_onTap_runningActionsCount = window.obj23427_onTap_runningActionsCount - 1;

if (window.obj23427_onTap_runningActionsCount < 0) {
	window.obj23427_onTap_runningActionsCount = 0;
} else if (window.obj23427_onTap_runningActionsCount == 0) {
	obj23427_onTap_actionGroup4();
} }, 1);
}











};
obj23427_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23427_onTap_activeActionGroupIndex = -1;
		$("#obj23427").trigger("obj23427_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23427) {
				console.warn("de-queueing event obj23427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23427_onTap_activeActionGroupIndex = 4;
	











































};
obj23436_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23436_onTap_activeActionGroupIndex = -1;
		$("#obj23436").trigger("obj23436_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23436) {
				console.warn("de-queueing event obj23436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23436_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23445
(function(){
	window.obj23436_onTap_runningActionsCount = obj23436_onTap_runningActionsCount + 1;


	var selector = "#obj23445";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23436_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23436_onTap_activeActionGroupIndex = -1;
		$("#obj23436").trigger("obj23436_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23436) {
				console.warn("de-queueing event obj23436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23436_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23640();
function playAudioFile_23640() {
	window.obj23436_onTap_runningActionsCount = obj23436_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23640")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23640");
			$("#obj_audio_playSoundFile23640").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup2();
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
				window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23436_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23436_onTap_activeActionGroupIndex = -1;
		$("#obj23436").trigger("obj23436_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23436) {
				console.warn("de-queueing event obj23436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23436_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24684();
function runjs_24684() {
	window.obj23436_onTap_runningActionsCount = obj23436_onTap_runningActionsCount + 1;


	$("#obj23436").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24685();
function runjs_24685() {
	window.obj23436_onTap_runningActionsCount = obj23436_onTap_runningActionsCount + 1;


	$("#obj23436").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup3();
}
	}, 1);
}














};
obj23436_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23436_onTap_activeActionGroupIndex = -1;
		$("#obj23436").trigger("obj23436_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23436) {
				console.warn("de-queueing event obj23436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23436_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23644();
function incrementCounter_23644() {
	window.obj23436_onTap_runningActionsCount = obj23436_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23645();
function incrementCounter_23645() {
	window.obj23436_onTap_runningActionsCount = obj23436_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23436_onTap_runningActionsCount = window.obj23436_onTap_runningActionsCount - 1;

if (window.obj23436_onTap_runningActionsCount < 0) {
	window.obj23436_onTap_runningActionsCount = 0;
} else if (window.obj23436_onTap_runningActionsCount == 0) {
	obj23436_onTap_actionGroup4();
} }, 1);
}











};
obj23436_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23436_onTap_activeActionGroupIndex = -1;
		$("#obj23436").trigger("obj23436_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23436) {
				console.warn("de-queueing event obj23436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23436_onTap_activeActionGroupIndex = 4;
	











































};
obj23623_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23623_onTap_activeActionGroupIndex = -1;
		$("#obj23623").trigger("obj23623_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23623) {
				console.warn("de-queueing event obj23623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23623_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23445
(function(){
	window.obj23623_onTap_runningActionsCount = obj23623_onTap_runningActionsCount + 1;


	var selector = "#obj23445";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23623_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23623_onTap_activeActionGroupIndex = -1;
		$("#obj23623").trigger("obj23623_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23623) {
				console.warn("de-queueing event obj23623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23623_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23626();
function playAudioFile_23626() {
	window.obj23623_onTap_runningActionsCount = obj23623_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23626")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23626");
			$("#obj_audio_playSoundFile23626").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup2();
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
				window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23623_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23623_onTap_activeActionGroupIndex = -1;
		$("#obj23623").trigger("obj23623_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23623) {
				console.warn("de-queueing event obj23623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23623_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24688();
function runjs_24688() {
	window.obj23623_onTap_runningActionsCount = obj23623_onTap_runningActionsCount + 1;


	$("#obj23623").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24689();
function runjs_24689() {
	window.obj23623_onTap_runningActionsCount = obj23623_onTap_runningActionsCount + 1;


	$("#obj23623").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup3();
}
	}, 1);
}














};
obj23623_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23623_onTap_activeActionGroupIndex = -1;
		$("#obj23623").trigger("obj23623_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23623) {
				console.warn("de-queueing event obj23623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23623_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23371 
incrementCounter_23628();
function incrementCounter_23628() {
	window.obj23623_onTap_runningActionsCount = obj23623_onTap_runningActionsCount + 1;


	var oldValue = obj23371_counterValue;
	obj23371_counterValue = obj23371_counterValue + 1;
	if (! obj23371_counterCanExceedTargetValue && obj23371_counterValue > obj23371_counterTargetValue) {
		obj23371_counterValue = obj23371_counterTargetValue;
	}

	if (oldValue != obj23371_counterValue) {
		$("#obj23371").trigger('SCEventCounterValueChange');
		$("#obj23371").trigger('SCEventCounterIncrease');
		if (obj23371_counterValue == obj23371_counterTargetValue)
			$("#obj23371").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23630();
function incrementCounter_23630() {
	window.obj23623_onTap_runningActionsCount = obj23623_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23623_onTap_runningActionsCount = window.obj23623_onTap_runningActionsCount - 1;

if (window.obj23623_onTap_runningActionsCount < 0) {
	window.obj23623_onTap_runningActionsCount = 0;
} else if (window.obj23623_onTap_runningActionsCount == 0) {
	obj23623_onTap_actionGroup4();
} }, 1);
}











};
obj23623_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23623_onTap_activeActionGroupIndex = -1;
		$("#obj23623").trigger("obj23623_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23623) {
				console.warn("de-queueing event obj23623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23623_onTap_activeActionGroupIndex = 4;
	











































};
obj23451_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23451_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23451").trigger("obj23451_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23451) {
				console.warn("de-queueing event obj23451." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23451").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23451_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_23453();
function switchText_23453() {
	window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount = obj23451_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>1/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj23449_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj23449_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj23449").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj23449_content");
			setTimeout(function () {
				window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23451_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj23449 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23451_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23451_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj23451_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23451_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23451").trigger("obj23451_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23451) {
				console.warn("de-queueing event obj23451." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23451").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23451_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj23454_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23454").trigger("obj23454_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23454) {
				console.warn("de-queueing event obj23454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_23456();
function switchText_23456() {
	window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount = obj23454_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>2/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj23449_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj23449_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj23449").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj23449_content");
			setTimeout(function () {
				window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23454_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj23449 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23454_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj23454_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23454").trigger("obj23454_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23454) {
				console.warn("de-queueing event obj23454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj23457_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23457_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23457").trigger("obj23457_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23457) {
				console.warn("de-queueing event obj23457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23457_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_23459();
function switchText_23459() {
	window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount = obj23457_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>3/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj23449_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj23449_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj23449").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj23449_content");
			setTimeout(function () {
				window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23457_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj23449 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23457_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23457_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj23457_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23457_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23457").trigger("obj23457_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23457) {
				console.warn("de-queueing event obj23457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23457_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj23460_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23460_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23460").trigger("obj23460_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23460) {
				console.warn("de-queueing event obj23460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23460_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj23451 
incrementCounter_23462();
function incrementCounter_23462() {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = obj23460_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj23451_counterValue;
	obj23451_counterValue = obj23451_counterValue + 1;
	if (! obj23451_counterCanExceedTargetValue && obj23451_counterValue > obj23451_counterTargetValue) {
		obj23451_counterValue = obj23451_counterTargetValue;
	}

	if (oldValue != obj23451_counterValue) {
		$("#obj23451").trigger('SCEventCounterValueChange');
		$("#obj23451").trigger('SCEventCounterIncrease');
		if (obj23451_counterValue == obj23451_counterTargetValue)
			$("#obj23451").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23460_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj23457 
incrementCounter_23463();
function incrementCounter_23463() {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = obj23460_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj23457_counterValue;
	obj23457_counterValue = obj23457_counterValue + 1;
	if (! obj23457_counterCanExceedTargetValue && obj23457_counterValue > obj23457_counterTargetValue) {
		obj23457_counterValue = obj23457_counterTargetValue;
	}

	if (oldValue != obj23457_counterValue) {
		$("#obj23457").trigger('SCEventCounterValueChange');
		$("#obj23457").trigger('SCEventCounterIncrease');
		if (obj23457_counterValue == obj23457_counterTargetValue)
			$("#obj23457").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23460_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj23454 
incrementCounter_23464();
function incrementCounter_23464() {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = obj23460_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj23454_counterValue;
	obj23454_counterValue = obj23454_counterValue + 1;
	if (! obj23454_counterCanExceedTargetValue && obj23454_counterValue > obj23454_counterTargetValue) {
		obj23454_counterValue = obj23454_counterTargetValue;
	}

	if (oldValue != obj23454_counterValue) {
		$("#obj23454").trigger('SCEventCounterValueChange');
		$("#obj23454").trigger('SCEventCounterIncrease');
		if (obj23454_counterValue == obj23454_counterTargetValue)
			$("#obj23454").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23460_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj23469 
incrementCounter_23465();
function incrementCounter_23465() {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = obj23460_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj23469_counterValue;
	obj23469_counterValue = obj23469_counterValue + 1;
	if (! obj23469_counterCanExceedTargetValue && obj23469_counterValue > obj23469_counterTargetValue) {
		obj23469_counterValue = obj23469_counterTargetValue;
	}

	if (oldValue != obj23469_counterValue) {
		$("#obj23469").trigger('SCEventCounterValueChange');
		$("#obj23469").trigger('SCEventCounterIncrease');
		if (obj23469_counterValue == obj23469_counterTargetValue)
			$("#obj23469").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23460_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj23472 
incrementCounter_23466();
function incrementCounter_23466() {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = obj23460_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj23472_counterValue;
	obj23472_counterValue = obj23472_counterValue + 1;
	if (! obj23472_counterCanExceedTargetValue && obj23472_counterValue > obj23472_counterTargetValue) {
		obj23472_counterValue = obj23472_counterTargetValue;
	}

	if (oldValue != obj23472_counterValue) {
		$("#obj23472").trigger('SCEventCounterValueChange');
		$("#obj23472").trigger('SCEventCounterIncrease');
		if (obj23472_counterValue == obj23472_counterTargetValue)
			$("#obj23472").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23460_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj23475 
incrementCounter_23467();
function incrementCounter_23467() {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = obj23460_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj23475_counterValue;
	obj23475_counterValue = obj23475_counterValue + 1;
	if (! obj23475_counterCanExceedTargetValue && obj23475_counterValue > obj23475_counterTargetValue) {
		obj23475_counterValue = obj23475_counterTargetValue;
	}

	if (oldValue != obj23475_counterValue) {
		$("#obj23475").trigger('SCEventCounterValueChange');
		$("#obj23475").trigger('SCEventCounterIncrease');
		if (obj23475_counterValue == obj23475_counterTargetValue)
			$("#obj23475").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23460_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj23460_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23460_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23460").trigger("obj23460_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23460) {
				console.warn("de-queueing event obj23460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23460_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj23460 
decrementCounter_23468();
function decrementCounter_23468() {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = obj23460_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj23460_counterValue;
	obj23460_counterValue = obj23460_counterValue - 1;
	if (obj23460_counterValue < 0) {
		obj23460_counterValue = 0;
	}

	if (oldValue != obj23460_counterValue) {
		$("#obj23460").trigger('SCEventCounterValueChange');
		$("#obj23460").trigger('SCEventCounterDecrease');
		if (obj23460_counterValue == obj23460_counterTargetValue)
			$("#obj23460").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23460_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23460_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj23460_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23460_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23460").trigger("obj23460_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23460) {
				console.warn("de-queueing event obj23460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23460_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj23469_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23469_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23469").trigger("obj23469_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23469) {
				console.warn("de-queueing event obj23469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23469_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_23471();
function switchText_23471() {
	window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount = obj23469_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>4/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj23449_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj23449_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj23449").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj23449_content");
			setTimeout(function () {
				window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23469_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj23449 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23469_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23469_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj23469_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23469_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23469").trigger("obj23469_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23469) {
				console.warn("de-queueing event obj23469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23469_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj23472_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23472_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23472").trigger("obj23472_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23472) {
				console.warn("de-queueing event obj23472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23472_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_23474();
function switchText_23474() {
	window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount = obj23472_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>5/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj23449_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj23449_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj23449").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj23449_content");
			setTimeout(function () {
				window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23472_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj23449 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23472_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23472_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj23472_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23472_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23472").trigger("obj23472_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23472) {
				console.warn("de-queueing event obj23472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23472_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj23475_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23475_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23475").trigger("obj23475_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23475) {
				console.warn("de-queueing event obj23475." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23475").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23475_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_23477();
function switchText_23477() {
	window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount = obj23475_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong>6/6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj23449_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj23449_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj23449").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj23449_content");
			setTimeout(function () {
				window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23475_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj23449 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23475_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23475_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj23475_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23475_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23475").trigger("obj23475_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23475) {
				console.warn("de-queueing event obj23475." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23475").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23475_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj23478_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23478_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23478").trigger("obj23478_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23478) {
				console.warn("de-queueing event obj23478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23478_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_23480();
function wait_23480() {
	window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount = obj23478_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23478_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1500);
}


























};
obj23478_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23478_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23478").trigger("obj23478_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23478) {
				console.warn("de-queueing event obj23478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23478_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_23481();
function goToPage_23481() {
	window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount = obj23478_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor806")[0].click();
	window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23478_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23478_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj23478_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23478_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23478").trigger("obj23478_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23478) {
				console.warn("de-queueing event obj23478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23478_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj23482_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23482_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23482").trigger("obj23482_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23482) {
				console.warn("de-queueing event obj23482." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23482").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23482_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_23484();
function wait_23484() {
	window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount = obj23482_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23482_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 2000);
}


























};
obj23482_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23482_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23482").trigger("obj23482_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23482) {
				console.warn("de-queueing event obj23482." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23482").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23482_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_23485();
function goToPage_23485() {
	window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount = obj23482_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor807")[0].click();
	window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23482_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23482_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj23482_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23482_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23482").trigger("obj23482_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23482) {
				console.warn("de-queueing event obj23482." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23482").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23482_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj23492_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23492_onTap_activeActionGroupIndex = -1;
		$("#obj23492").trigger("obj23492_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23492) {
				console.warn("de-queueing event obj23492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23492_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23524
(function(){
	window.obj23492_onTap_runningActionsCount = obj23492_onTap_runningActionsCount + 1;


	var selector = "#obj23524";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23492_onTap_runningActionsCount = window.obj23492_onTap_runningActionsCount - 1;

if (window.obj23492_onTap_runningActionsCount < 0) {
	window.obj23492_onTap_runningActionsCount = 0;
} else if (window.obj23492_onTap_runningActionsCount == 0) {
	obj23492_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23492_onTap_runningActionsCount = window.obj23492_onTap_runningActionsCount - 1;

if (window.obj23492_onTap_runningActionsCount < 0) {
	window.obj23492_onTap_runningActionsCount = 0;
} else if (window.obj23492_onTap_runningActionsCount == 0) {
	obj23492_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23492_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23492_onTap_activeActionGroupIndex = -1;
		$("#obj23492").trigger("obj23492_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23492) {
				console.warn("de-queueing event obj23492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23492_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23671();
function playAudioFile_23671() {
	window.obj23492_onTap_runningActionsCount = obj23492_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23671")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23671");
			$("#obj_audio_playSoundFile23671").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23492_onTap_runningActionsCount = window.obj23492_onTap_runningActionsCount - 1;

if (window.obj23492_onTap_runningActionsCount < 0) {
	window.obj23492_onTap_runningActionsCount = 0;
} else if (window.obj23492_onTap_runningActionsCount == 0) {
	obj23492_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23492_onTap_runningActionsCount = window.obj23492_onTap_runningActionsCount - 1;

if (window.obj23492_onTap_runningActionsCount < 0) {
	window.obj23492_onTap_runningActionsCount = 0;
} else if (window.obj23492_onTap_runningActionsCount == 0) {
	obj23492_onTap_actionGroup2();
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
				window.obj23492_onTap_runningActionsCount = window.obj23492_onTap_runningActionsCount - 1;

if (window.obj23492_onTap_runningActionsCount < 0) {
	window.obj23492_onTap_runningActionsCount = 0;
} else if (window.obj23492_onTap_runningActionsCount == 0) {
	obj23492_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23492_onTap_runningActionsCount = window.obj23492_onTap_runningActionsCount - 1;

if (window.obj23492_onTap_runningActionsCount < 0) {
	window.obj23492_onTap_runningActionsCount = 0;
} else if (window.obj23492_onTap_runningActionsCount == 0) {
	obj23492_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23492_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23492_onTap_activeActionGroupIndex = -1;
		$("#obj23492").trigger("obj23492_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23492) {
				console.warn("de-queueing event obj23492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23492_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24650();
function runjs_24650() {
	window.obj23492_onTap_runningActionsCount = obj23492_onTap_runningActionsCount + 1;


	$("#obj23492").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23492_onTap_runningActionsCount = window.obj23492_onTap_runningActionsCount - 1;

if (window.obj23492_onTap_runningActionsCount < 0) {
	window.obj23492_onTap_runningActionsCount = 0;
} else if (window.obj23492_onTap_runningActionsCount == 0) {
	obj23492_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24651();
function runjs_24651() {
	window.obj23492_onTap_runningActionsCount = obj23492_onTap_runningActionsCount + 1;


	$("#obj23492").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23492_onTap_runningActionsCount = window.obj23492_onTap_runningActionsCount - 1;

if (window.obj23492_onTap_runningActionsCount < 0) {
	window.obj23492_onTap_runningActionsCount = 0;
} else if (window.obj23492_onTap_runningActionsCount == 0) {
	obj23492_onTap_actionGroup3();
}
	}, 1);
}














};
obj23492_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23492_onTap_activeActionGroupIndex = -1;
		$("#obj23492").trigger("obj23492_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23492) {
				console.warn("de-queueing event obj23492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23492_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23482 
incrementCounter_23675();
function incrementCounter_23675() {
	window.obj23492_onTap_runningActionsCount = obj23492_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23492_onTap_runningActionsCount = window.obj23492_onTap_runningActionsCount - 1;

if (window.obj23492_onTap_runningActionsCount < 0) {
	window.obj23492_onTap_runningActionsCount = 0;
} else if (window.obj23492_onTap_runningActionsCount == 0) {
	obj23492_onTap_actionGroup4();
} }, 1);
}











};
obj23492_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23492_onTap_activeActionGroupIndex = -1;
		$("#obj23492").trigger("obj23492_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23492) {
				console.warn("de-queueing event obj23492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23492_onTap_activeActionGroupIndex = 4;
	











































};
obj23500_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23500_onTap_activeActionGroupIndex = -1;
		$("#obj23500").trigger("obj23500_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23500) {
				console.warn("de-queueing event obj23500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23500_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23524
(function(){
	window.obj23500_onTap_runningActionsCount = obj23500_onTap_runningActionsCount + 1;


	var selector = "#obj23524";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23500_onTap_runningActionsCount = window.obj23500_onTap_runningActionsCount - 1;

if (window.obj23500_onTap_runningActionsCount < 0) {
	window.obj23500_onTap_runningActionsCount = 0;
} else if (window.obj23500_onTap_runningActionsCount == 0) {
	obj23500_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23500_onTap_runningActionsCount = window.obj23500_onTap_runningActionsCount - 1;

if (window.obj23500_onTap_runningActionsCount < 0) {
	window.obj23500_onTap_runningActionsCount = 0;
} else if (window.obj23500_onTap_runningActionsCount == 0) {
	obj23500_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23500_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23500_onTap_activeActionGroupIndex = -1;
		$("#obj23500").trigger("obj23500_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23500) {
				console.warn("de-queueing event obj23500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23500_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23503();
function playAudioFile_23503() {
	window.obj23500_onTap_runningActionsCount = obj23500_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23503")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23503");
			$("#obj_audio_playSoundFile23503").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23500_onTap_runningActionsCount = window.obj23500_onTap_runningActionsCount - 1;

if (window.obj23500_onTap_runningActionsCount < 0) {
	window.obj23500_onTap_runningActionsCount = 0;
} else if (window.obj23500_onTap_runningActionsCount == 0) {
	obj23500_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23500_onTap_runningActionsCount = window.obj23500_onTap_runningActionsCount - 1;

if (window.obj23500_onTap_runningActionsCount < 0) {
	window.obj23500_onTap_runningActionsCount = 0;
} else if (window.obj23500_onTap_runningActionsCount == 0) {
	obj23500_onTap_actionGroup2();
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
				window.obj23500_onTap_runningActionsCount = window.obj23500_onTap_runningActionsCount - 1;

if (window.obj23500_onTap_runningActionsCount < 0) {
	window.obj23500_onTap_runningActionsCount = 0;
} else if (window.obj23500_onTap_runningActionsCount == 0) {
	obj23500_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23500_onTap_runningActionsCount = window.obj23500_onTap_runningActionsCount - 1;

if (window.obj23500_onTap_runningActionsCount < 0) {
	window.obj23500_onTap_runningActionsCount = 0;
} else if (window.obj23500_onTap_runningActionsCount == 0) {
	obj23500_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23500_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23500_onTap_activeActionGroupIndex = -1;
		$("#obj23500").trigger("obj23500_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23500) {
				console.warn("de-queueing event obj23500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23500_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24652();
function runjs_24652() {
	window.obj23500_onTap_runningActionsCount = obj23500_onTap_runningActionsCount + 1;


	$("#obj23500").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23500_onTap_runningActionsCount = window.obj23500_onTap_runningActionsCount - 1;

if (window.obj23500_onTap_runningActionsCount < 0) {
	window.obj23500_onTap_runningActionsCount = 0;
} else if (window.obj23500_onTap_runningActionsCount == 0) {
	obj23500_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24653();
function runjs_24653() {
	window.obj23500_onTap_runningActionsCount = obj23500_onTap_runningActionsCount + 1;


	$("#obj23500").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23500_onTap_runningActionsCount = window.obj23500_onTap_runningActionsCount - 1;

if (window.obj23500_onTap_runningActionsCount < 0) {
	window.obj23500_onTap_runningActionsCount = 0;
} else if (window.obj23500_onTap_runningActionsCount == 0) {
	obj23500_onTap_actionGroup3();
}
	}, 1);
}














};
obj23500_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23500_onTap_activeActionGroupIndex = -1;
		$("#obj23500").trigger("obj23500_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23500) {
				console.warn("de-queueing event obj23500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23500_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23482 
incrementCounter_23507();
function incrementCounter_23507() {
	window.obj23500_onTap_runningActionsCount = obj23500_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23500_onTap_runningActionsCount = window.obj23500_onTap_runningActionsCount - 1;

if (window.obj23500_onTap_runningActionsCount < 0) {
	window.obj23500_onTap_runningActionsCount = 0;
} else if (window.obj23500_onTap_runningActionsCount == 0) {
	obj23500_onTap_actionGroup4();
} }, 1);
}











};
obj23500_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23500_onTap_activeActionGroupIndex = -1;
		$("#obj23500").trigger("obj23500_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23500) {
				console.warn("de-queueing event obj23500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23500_onTap_activeActionGroupIndex = 4;
	











































};
obj23508_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23508_onTap_activeActionGroupIndex = -1;
		$("#obj23508").trigger("obj23508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23508) {
				console.warn("de-queueing event obj23508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23508_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23524
(function(){
	window.obj23508_onTap_runningActionsCount = obj23508_onTap_runningActionsCount + 1;


	var selector = "#obj23524";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23508_onTap_runningActionsCount = window.obj23508_onTap_runningActionsCount - 1;

if (window.obj23508_onTap_runningActionsCount < 0) {
	window.obj23508_onTap_runningActionsCount = 0;
} else if (window.obj23508_onTap_runningActionsCount == 0) {
	obj23508_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23508_onTap_runningActionsCount = window.obj23508_onTap_runningActionsCount - 1;

if (window.obj23508_onTap_runningActionsCount < 0) {
	window.obj23508_onTap_runningActionsCount = 0;
} else if (window.obj23508_onTap_runningActionsCount == 0) {
	obj23508_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23508_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23508_onTap_activeActionGroupIndex = -1;
		$("#obj23508").trigger("obj23508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23508) {
				console.warn("de-queueing event obj23508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23508_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23511();
function playAudioFile_23511() {
	window.obj23508_onTap_runningActionsCount = obj23508_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23511")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23511");
			$("#obj_audio_playSoundFile23511").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23508_onTap_runningActionsCount = window.obj23508_onTap_runningActionsCount - 1;

if (window.obj23508_onTap_runningActionsCount < 0) {
	window.obj23508_onTap_runningActionsCount = 0;
} else if (window.obj23508_onTap_runningActionsCount == 0) {
	obj23508_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23508_onTap_runningActionsCount = window.obj23508_onTap_runningActionsCount - 1;

if (window.obj23508_onTap_runningActionsCount < 0) {
	window.obj23508_onTap_runningActionsCount = 0;
} else if (window.obj23508_onTap_runningActionsCount == 0) {
	obj23508_onTap_actionGroup2();
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
				window.obj23508_onTap_runningActionsCount = window.obj23508_onTap_runningActionsCount - 1;

if (window.obj23508_onTap_runningActionsCount < 0) {
	window.obj23508_onTap_runningActionsCount = 0;
} else if (window.obj23508_onTap_runningActionsCount == 0) {
	obj23508_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23508_onTap_runningActionsCount = window.obj23508_onTap_runningActionsCount - 1;

if (window.obj23508_onTap_runningActionsCount < 0) {
	window.obj23508_onTap_runningActionsCount = 0;
} else if (window.obj23508_onTap_runningActionsCount == 0) {
	obj23508_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23508_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23508_onTap_activeActionGroupIndex = -1;
		$("#obj23508").trigger("obj23508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23508) {
				console.warn("de-queueing event obj23508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23508_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24654();
function runjs_24654() {
	window.obj23508_onTap_runningActionsCount = obj23508_onTap_runningActionsCount + 1;


	$("#obj23508").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23508_onTap_runningActionsCount = window.obj23508_onTap_runningActionsCount - 1;

if (window.obj23508_onTap_runningActionsCount < 0) {
	window.obj23508_onTap_runningActionsCount = 0;
} else if (window.obj23508_onTap_runningActionsCount == 0) {
	obj23508_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24655();
function runjs_24655() {
	window.obj23508_onTap_runningActionsCount = obj23508_onTap_runningActionsCount + 1;


	$("#obj23508").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23508_onTap_runningActionsCount = window.obj23508_onTap_runningActionsCount - 1;

if (window.obj23508_onTap_runningActionsCount < 0) {
	window.obj23508_onTap_runningActionsCount = 0;
} else if (window.obj23508_onTap_runningActionsCount == 0) {
	obj23508_onTap_actionGroup3();
}
	}, 1);
}














};
obj23508_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23508_onTap_activeActionGroupIndex = -1;
		$("#obj23508").trigger("obj23508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23508) {
				console.warn("de-queueing event obj23508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23508_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23482 
incrementCounter_23515();
function incrementCounter_23515() {
	window.obj23508_onTap_runningActionsCount = obj23508_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23508_onTap_runningActionsCount = window.obj23508_onTap_runningActionsCount - 1;

if (window.obj23508_onTap_runningActionsCount < 0) {
	window.obj23508_onTap_runningActionsCount = 0;
} else if (window.obj23508_onTap_runningActionsCount == 0) {
	obj23508_onTap_actionGroup4();
} }, 1);
}











};
obj23508_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23508_onTap_activeActionGroupIndex = -1;
		$("#obj23508").trigger("obj23508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23508) {
				console.warn("de-queueing event obj23508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23508_onTap_activeActionGroupIndex = 4;
	











































};
obj23516_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23516_onTap_activeActionGroupIndex = -1;
		$("#obj23516").trigger("obj23516_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23516) {
				console.warn("de-queueing event obj23516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23516_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23524
(function(){
	window.obj23516_onTap_runningActionsCount = obj23516_onTap_runningActionsCount + 1;


	var selector = "#obj23524";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23516_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23516_onTap_activeActionGroupIndex = -1;
		$("#obj23516").trigger("obj23516_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23516) {
				console.warn("de-queueing event obj23516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23516_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23665();
function playAudioFile_23665() {
	window.obj23516_onTap_runningActionsCount = obj23516_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23665")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23665");
			$("#obj_audio_playSoundFile23665").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup2();
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
				window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23516_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23516_onTap_activeActionGroupIndex = -1;
		$("#obj23516").trigger("obj23516_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23516) {
				console.warn("de-queueing event obj23516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23516_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_23666();
function runjs_23666() {
	window.obj23516_onTap_runningActionsCount = obj23516_onTap_runningActionsCount + 1;


	$("#obj23516").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24657();
function runjs_24657() {
	window.obj23516_onTap_runningActionsCount = obj23516_onTap_runningActionsCount + 1;


	$("#obj23516").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup3();
}
	}, 1);
}














};
obj23516_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23516_onTap_activeActionGroupIndex = -1;
		$("#obj23516").trigger("obj23516_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23516) {
				console.warn("de-queueing event obj23516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23516_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23460 
incrementCounter_23667();
function incrementCounter_23667() {
	window.obj23516_onTap_runningActionsCount = obj23516_onTap_runningActionsCount + 1;


	var oldValue = obj23460_counterValue;
	obj23460_counterValue = obj23460_counterValue + 1;
	if (! obj23460_counterCanExceedTargetValue && obj23460_counterValue > obj23460_counterTargetValue) {
		obj23460_counterValue = obj23460_counterTargetValue;
	}

	if (oldValue != obj23460_counterValue) {
		$("#obj23460").trigger('SCEventCounterValueChange');
		$("#obj23460").trigger('SCEventCounterIncrease');
		if (obj23460_counterValue == obj23460_counterTargetValue)
			$("#obj23460").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23478 
incrementCounter_23668();
function incrementCounter_23668() {
	window.obj23516_onTap_runningActionsCount = obj23516_onTap_runningActionsCount + 1;


	var oldValue = obj23478_counterValue;
	obj23478_counterValue = obj23478_counterValue + 1;
	if (! obj23478_counterCanExceedTargetValue && obj23478_counterValue > obj23478_counterTargetValue) {
		obj23478_counterValue = obj23478_counterTargetValue;
	}

	if (oldValue != obj23478_counterValue) {
		$("#obj23478").trigger('SCEventCounterValueChange');
		$("#obj23478").trigger('SCEventCounterIncrease');
		if (obj23478_counterValue == obj23478_counterTargetValue)
			$("#obj23478").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23669();
function incrementCounter_23669() {
	window.obj23516_onTap_runningActionsCount = obj23516_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23516_onTap_runningActionsCount = window.obj23516_onTap_runningActionsCount - 1;

if (window.obj23516_onTap_runningActionsCount < 0) {
	window.obj23516_onTap_runningActionsCount = 0;
} else if (window.obj23516_onTap_runningActionsCount == 0) {
	obj23516_onTap_actionGroup4();
} }, 1);
}











};
obj23516_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23516_onTap_activeActionGroupIndex = -1;
		$("#obj23516").trigger("obj23516_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23516) {
				console.warn("de-queueing event obj23516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23516_onTap_activeActionGroupIndex = 4;
	











































};
obj23532_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23532_onTap_activeActionGroupIndex = -1;
		$("#obj23532").trigger("obj23532_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23532) {
				console.warn("de-queueing event obj23532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23532_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23564
(function(){
	window.obj23532_onTap_runningActionsCount = obj23532_onTap_runningActionsCount + 1;


	var selector = "#obj23564";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23532_onTap_runningActionsCount = window.obj23532_onTap_runningActionsCount - 1;

if (window.obj23532_onTap_runningActionsCount < 0) {
	window.obj23532_onTap_runningActionsCount = 0;
} else if (window.obj23532_onTap_runningActionsCount == 0) {
	obj23532_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23532_onTap_runningActionsCount = window.obj23532_onTap_runningActionsCount - 1;

if (window.obj23532_onTap_runningActionsCount < 0) {
	window.obj23532_onTap_runningActionsCount = 0;
} else if (window.obj23532_onTap_runningActionsCount == 0) {
	obj23532_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23532_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23532_onTap_activeActionGroupIndex = -1;
		$("#obj23532").trigger("obj23532_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23532) {
				console.warn("de-queueing event obj23532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23532_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23535();
function playAudioFile_23535() {
	window.obj23532_onTap_runningActionsCount = obj23532_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23535")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23535");
			$("#obj_audio_playSoundFile23535").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23532_onTap_runningActionsCount = window.obj23532_onTap_runningActionsCount - 1;

if (window.obj23532_onTap_runningActionsCount < 0) {
	window.obj23532_onTap_runningActionsCount = 0;
} else if (window.obj23532_onTap_runningActionsCount == 0) {
	obj23532_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23532_onTap_runningActionsCount = window.obj23532_onTap_runningActionsCount - 1;

if (window.obj23532_onTap_runningActionsCount < 0) {
	window.obj23532_onTap_runningActionsCount = 0;
} else if (window.obj23532_onTap_runningActionsCount == 0) {
	obj23532_onTap_actionGroup2();
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
				window.obj23532_onTap_runningActionsCount = window.obj23532_onTap_runningActionsCount - 1;

if (window.obj23532_onTap_runningActionsCount < 0) {
	window.obj23532_onTap_runningActionsCount = 0;
} else if (window.obj23532_onTap_runningActionsCount == 0) {
	obj23532_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23532_onTap_runningActionsCount = window.obj23532_onTap_runningActionsCount - 1;

if (window.obj23532_onTap_runningActionsCount < 0) {
	window.obj23532_onTap_runningActionsCount = 0;
} else if (window.obj23532_onTap_runningActionsCount == 0) {
	obj23532_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23532_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23532_onTap_activeActionGroupIndex = -1;
		$("#obj23532").trigger("obj23532_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23532) {
				console.warn("de-queueing event obj23532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23532_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24658();
function runjs_24658() {
	window.obj23532_onTap_runningActionsCount = obj23532_onTap_runningActionsCount + 1;


	$("#obj23532").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23532_onTap_runningActionsCount = window.obj23532_onTap_runningActionsCount - 1;

if (window.obj23532_onTap_runningActionsCount < 0) {
	window.obj23532_onTap_runningActionsCount = 0;
} else if (window.obj23532_onTap_runningActionsCount == 0) {
	obj23532_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24659();
function runjs_24659() {
	window.obj23532_onTap_runningActionsCount = obj23532_onTap_runningActionsCount + 1;


	$("#obj23532").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23532_onTap_runningActionsCount = window.obj23532_onTap_runningActionsCount - 1;

if (window.obj23532_onTap_runningActionsCount < 0) {
	window.obj23532_onTap_runningActionsCount = 0;
} else if (window.obj23532_onTap_runningActionsCount == 0) {
	obj23532_onTap_actionGroup3();
}
	}, 1);
}














};
obj23532_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23532_onTap_activeActionGroupIndex = -1;
		$("#obj23532").trigger("obj23532_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23532) {
				console.warn("de-queueing event obj23532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23532_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23482 
incrementCounter_23539();
function incrementCounter_23539() {
	window.obj23532_onTap_runningActionsCount = obj23532_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23532_onTap_runningActionsCount = window.obj23532_onTap_runningActionsCount - 1;

if (window.obj23532_onTap_runningActionsCount < 0) {
	window.obj23532_onTap_runningActionsCount = 0;
} else if (window.obj23532_onTap_runningActionsCount == 0) {
	obj23532_onTap_actionGroup4();
} }, 1);
}











};
obj23532_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23532_onTap_activeActionGroupIndex = -1;
		$("#obj23532").trigger("obj23532_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23532) {
				console.warn("de-queueing event obj23532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23532_onTap_activeActionGroupIndex = 4;
	











































};
obj23540_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23540_onTap_activeActionGroupIndex = -1;
		$("#obj23540").trigger("obj23540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23540) {
				console.warn("de-queueing event obj23540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23540_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23564
(function(){
	window.obj23540_onTap_runningActionsCount = obj23540_onTap_runningActionsCount + 1;


	var selector = "#obj23564";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23540_onTap_runningActionsCount = window.obj23540_onTap_runningActionsCount - 1;

if (window.obj23540_onTap_runningActionsCount < 0) {
	window.obj23540_onTap_runningActionsCount = 0;
} else if (window.obj23540_onTap_runningActionsCount == 0) {
	obj23540_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23540_onTap_runningActionsCount = window.obj23540_onTap_runningActionsCount - 1;

if (window.obj23540_onTap_runningActionsCount < 0) {
	window.obj23540_onTap_runningActionsCount = 0;
} else if (window.obj23540_onTap_runningActionsCount == 0) {
	obj23540_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23540_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23540_onTap_activeActionGroupIndex = -1;
		$("#obj23540").trigger("obj23540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23540) {
				console.warn("de-queueing event obj23540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23540_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23543();
function playAudioFile_23543() {
	window.obj23540_onTap_runningActionsCount = obj23540_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23543")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23543");
			$("#obj_audio_playSoundFile23543").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23540_onTap_runningActionsCount = window.obj23540_onTap_runningActionsCount - 1;

if (window.obj23540_onTap_runningActionsCount < 0) {
	window.obj23540_onTap_runningActionsCount = 0;
} else if (window.obj23540_onTap_runningActionsCount == 0) {
	obj23540_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23540_onTap_runningActionsCount = window.obj23540_onTap_runningActionsCount - 1;

if (window.obj23540_onTap_runningActionsCount < 0) {
	window.obj23540_onTap_runningActionsCount = 0;
} else if (window.obj23540_onTap_runningActionsCount == 0) {
	obj23540_onTap_actionGroup2();
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
				window.obj23540_onTap_runningActionsCount = window.obj23540_onTap_runningActionsCount - 1;

if (window.obj23540_onTap_runningActionsCount < 0) {
	window.obj23540_onTap_runningActionsCount = 0;
} else if (window.obj23540_onTap_runningActionsCount == 0) {
	obj23540_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23540_onTap_runningActionsCount = window.obj23540_onTap_runningActionsCount - 1;

if (window.obj23540_onTap_runningActionsCount < 0) {
	window.obj23540_onTap_runningActionsCount = 0;
} else if (window.obj23540_onTap_runningActionsCount == 0) {
	obj23540_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23540_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23540_onTap_activeActionGroupIndex = -1;
		$("#obj23540").trigger("obj23540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23540) {
				console.warn("de-queueing event obj23540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23540_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24662();
function runjs_24662() {
	window.obj23540_onTap_runningActionsCount = obj23540_onTap_runningActionsCount + 1;


	$("#obj23540").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23540_onTap_runningActionsCount = window.obj23540_onTap_runningActionsCount - 1;

if (window.obj23540_onTap_runningActionsCount < 0) {
	window.obj23540_onTap_runningActionsCount = 0;
} else if (window.obj23540_onTap_runningActionsCount == 0) {
	obj23540_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24663();
function runjs_24663() {
	window.obj23540_onTap_runningActionsCount = obj23540_onTap_runningActionsCount + 1;


	$("#obj23540").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23540_onTap_runningActionsCount = window.obj23540_onTap_runningActionsCount - 1;

if (window.obj23540_onTap_runningActionsCount < 0) {
	window.obj23540_onTap_runningActionsCount = 0;
} else if (window.obj23540_onTap_runningActionsCount == 0) {
	obj23540_onTap_actionGroup3();
}
	}, 1);
}














};
obj23540_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23540_onTap_activeActionGroupIndex = -1;
		$("#obj23540").trigger("obj23540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23540) {
				console.warn("de-queueing event obj23540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23540_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23482 
incrementCounter_23547();
function incrementCounter_23547() {
	window.obj23540_onTap_runningActionsCount = obj23540_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23540_onTap_runningActionsCount = window.obj23540_onTap_runningActionsCount - 1;

if (window.obj23540_onTap_runningActionsCount < 0) {
	window.obj23540_onTap_runningActionsCount = 0;
} else if (window.obj23540_onTap_runningActionsCount == 0) {
	obj23540_onTap_actionGroup4();
} }, 1);
}











};
obj23540_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23540_onTap_activeActionGroupIndex = -1;
		$("#obj23540").trigger("obj23540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23540) {
				console.warn("de-queueing event obj23540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23540_onTap_activeActionGroupIndex = 4;
	











































};
obj23548_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23548_onTap_activeActionGroupIndex = -1;
		$("#obj23548").trigger("obj23548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23548) {
				console.warn("de-queueing event obj23548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23548_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23564
(function(){
	window.obj23548_onTap_runningActionsCount = obj23548_onTap_runningActionsCount + 1;


	var selector = "#obj23564";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23548_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23548_onTap_activeActionGroupIndex = -1;
		$("#obj23548").trigger("obj23548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23548) {
				console.warn("de-queueing event obj23548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23548_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23677();
function playAudioFile_23677() {
	window.obj23548_onTap_runningActionsCount = obj23548_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23677")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23677");
			$("#obj_audio_playSoundFile23677").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup2();
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
				window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23548_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23548_onTap_activeActionGroupIndex = -1;
		$("#obj23548").trigger("obj23548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23548) {
				console.warn("de-queueing event obj23548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23548_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_23678();
function runjs_23678() {
	window.obj23548_onTap_runningActionsCount = obj23548_onTap_runningActionsCount + 1;


	$("#obj23548").css("color", "#5a78aa");
	
	setTimeout(function() {
		window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24661();
function runjs_24661() {
	window.obj23548_onTap_runningActionsCount = obj23548_onTap_runningActionsCount + 1;


	$("#obj23548").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup3();
}
	}, 1);
}














};
obj23548_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23548_onTap_activeActionGroupIndex = -1;
		$("#obj23548").trigger("obj23548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23548) {
				console.warn("de-queueing event obj23548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23548_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23460 
incrementCounter_23679();
function incrementCounter_23679() {
	window.obj23548_onTap_runningActionsCount = obj23548_onTap_runningActionsCount + 1;


	var oldValue = obj23460_counterValue;
	obj23460_counterValue = obj23460_counterValue + 1;
	if (! obj23460_counterCanExceedTargetValue && obj23460_counterValue > obj23460_counterTargetValue) {
		obj23460_counterValue = obj23460_counterTargetValue;
	}

	if (oldValue != obj23460_counterValue) {
		$("#obj23460").trigger('SCEventCounterValueChange');
		$("#obj23460").trigger('SCEventCounterIncrease');
		if (obj23460_counterValue == obj23460_counterTargetValue)
			$("#obj23460").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23482 
incrementCounter_23680();
function incrementCounter_23680() {
	window.obj23548_onTap_runningActionsCount = obj23548_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj23478 
incrementCounter_23681();
function incrementCounter_23681() {
	window.obj23548_onTap_runningActionsCount = obj23548_onTap_runningActionsCount + 1;


	var oldValue = obj23478_counterValue;
	obj23478_counterValue = obj23478_counterValue + 1;
	if (! obj23478_counterCanExceedTargetValue && obj23478_counterValue > obj23478_counterTargetValue) {
		obj23478_counterValue = obj23478_counterTargetValue;
	}

	if (oldValue != obj23478_counterValue) {
		$("#obj23478").trigger('SCEventCounterValueChange');
		$("#obj23478").trigger('SCEventCounterIncrease');
		if (obj23478_counterValue == obj23478_counterTargetValue)
			$("#obj23478").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23548_onTap_runningActionsCount = window.obj23548_onTap_runningActionsCount - 1;

if (window.obj23548_onTap_runningActionsCount < 0) {
	window.obj23548_onTap_runningActionsCount = 0;
} else if (window.obj23548_onTap_runningActionsCount == 0) {
	obj23548_onTap_actionGroup4();
} }, 1);
}











};
obj23548_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23548_onTap_activeActionGroupIndex = -1;
		$("#obj23548").trigger("obj23548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23548) {
				console.warn("de-queueing event obj23548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23548_onTap_activeActionGroupIndex = 4;
	











































};
obj23556_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23556_onTap_activeActionGroupIndex = -1;
		$("#obj23556").trigger("obj23556_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23556) {
				console.warn("de-queueing event obj23556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23556_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23564
(function(){
	window.obj23556_onTap_runningActionsCount = obj23556_onTap_runningActionsCount + 1;


	var selector = "#obj23564";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj23556_onTap_runningActionsCount = window.obj23556_onTap_runningActionsCount - 1;

if (window.obj23556_onTap_runningActionsCount < 0) {
	window.obj23556_onTap_runningActionsCount = 0;
} else if (window.obj23556_onTap_runningActionsCount == 0) {
	obj23556_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj23556_onTap_runningActionsCount = window.obj23556_onTap_runningActionsCount - 1;

if (window.obj23556_onTap_runningActionsCount < 0) {
	window.obj23556_onTap_runningActionsCount = 0;
} else if (window.obj23556_onTap_runningActionsCount == 0) {
	obj23556_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23556_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23556_onTap_activeActionGroupIndex = -1;
		$("#obj23556").trigger("obj23556_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23556) {
				console.warn("de-queueing event obj23556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23556_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23683();
function playAudioFile_23683() {
	window.obj23556_onTap_runningActionsCount = obj23556_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23683")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23683");
			$("#obj_audio_playSoundFile23683").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23556_onTap_runningActionsCount = window.obj23556_onTap_runningActionsCount - 1;

if (window.obj23556_onTap_runningActionsCount < 0) {
	window.obj23556_onTap_runningActionsCount = 0;
} else if (window.obj23556_onTap_runningActionsCount == 0) {
	obj23556_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23556_onTap_runningActionsCount = window.obj23556_onTap_runningActionsCount - 1;

if (window.obj23556_onTap_runningActionsCount < 0) {
	window.obj23556_onTap_runningActionsCount = 0;
} else if (window.obj23556_onTap_runningActionsCount == 0) {
	obj23556_onTap_actionGroup2();
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
				window.obj23556_onTap_runningActionsCount = window.obj23556_onTap_runningActionsCount - 1;

if (window.obj23556_onTap_runningActionsCount < 0) {
	window.obj23556_onTap_runningActionsCount = 0;
} else if (window.obj23556_onTap_runningActionsCount == 0) {
	obj23556_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23556_onTap_runningActionsCount = window.obj23556_onTap_runningActionsCount - 1;

if (window.obj23556_onTap_runningActionsCount < 0) {
	window.obj23556_onTap_runningActionsCount = 0;
} else if (window.obj23556_onTap_runningActionsCount == 0) {
	obj23556_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23556_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23556_onTap_activeActionGroupIndex = -1;
		$("#obj23556").trigger("obj23556_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23556) {
				console.warn("de-queueing event obj23556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23556_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_24664();
function runjs_24664() {
	window.obj23556_onTap_runningActionsCount = obj23556_onTap_runningActionsCount + 1;


	$("#obj23556").css("color", "#F58220");
	
	setTimeout(function() {
		window.obj23556_onTap_runningActionsCount = window.obj23556_onTap_runningActionsCount - 1;

if (window.obj23556_onTap_runningActionsCount < 0) {
	window.obj23556_onTap_runningActionsCount = 0;
} else if (window.obj23556_onTap_runningActionsCount == 0) {
	obj23556_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24665();
function runjs_24665() {
	window.obj23556_onTap_runningActionsCount = obj23556_onTap_runningActionsCount + 1;


	$("#obj23556").css("font-weight", "900");
	
	setTimeout(function() {
		window.obj23556_onTap_runningActionsCount = window.obj23556_onTap_runningActionsCount - 1;

if (window.obj23556_onTap_runningActionsCount < 0) {
	window.obj23556_onTap_runningActionsCount = 0;
} else if (window.obj23556_onTap_runningActionsCount == 0) {
	obj23556_onTap_actionGroup3();
}
	}, 1);
}














};
obj23556_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23556_onTap_activeActionGroupIndex = -1;
		$("#obj23556").trigger("obj23556_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23556) {
				console.warn("de-queueing event obj23556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23556_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj23482 
incrementCounter_23687();
function incrementCounter_23687() {
	window.obj23556_onTap_runningActionsCount = obj23556_onTap_runningActionsCount + 1;


	var oldValue = obj23482_counterValue;
	obj23482_counterValue = obj23482_counterValue + 1;
	if (! obj23482_counterCanExceedTargetValue && obj23482_counterValue > obj23482_counterTargetValue) {
		obj23482_counterValue = obj23482_counterTargetValue;
	}

	if (oldValue != obj23482_counterValue) {
		$("#obj23482").trigger('SCEventCounterValueChange');
		$("#obj23482").trigger('SCEventCounterIncrease');
		if (obj23482_counterValue == obj23482_counterTargetValue)
			$("#obj23482").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj23556_onTap_runningActionsCount = window.obj23556_onTap_runningActionsCount - 1;

if (window.obj23556_onTap_runningActionsCount < 0) {
	window.obj23556_onTap_runningActionsCount = 0;
} else if (window.obj23556_onTap_runningActionsCount == 0) {
	obj23556_onTap_actionGroup4();
} }, 1);
}











};
obj23556_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23556_onTap_activeActionGroupIndex = -1;
		$("#obj23556").trigger("obj23556_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23556) {
				console.warn("de-queueing event obj23556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23556_onTap_activeActionGroupIndex = 4;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj23202: Event Touch Down
 *
 */

$("#obj23202").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23202_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23202_onTap is still running");
	return;
}
var obj23202_onTap_runningActionsCount = 0;
var obj23202_onTap_loopCount = 0;
obj23202_onTap_actionGroup0();
});






























































































/*
 *
 *   obj23213: Event Touch Down
 *
 */

$("#obj23213").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23213_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23213_onTap is still running");
	return;
}
var obj23213_onTap_runningActionsCount = 0;
var obj23213_onTap_loopCount = 0;
obj23213_onTap_actionGroup0();
});


















/*
 *
 *   obj23222: Event Touch Down
 *
 */

$("#obj23222").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23222_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23222_onTap is still running");
	return;
}
var obj23222_onTap_runningActionsCount = 0;
var obj23222_onTap_loopCount = 0;
obj23222_onTap_actionGroup0();
});


















/*
 *
 *   obj23231: Event Touch Down
 *
 */

$("#obj23231").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23231_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23231_onTap is still running");
	return;
}
var obj23231_onTap_runningActionsCount = 0;
var obj23231_onTap_loopCount = 0;
obj23231_onTap_actionGroup0();
});


















/*
 *
 *   obj23240: Event Touch Down
 *
 */

$("#obj23240").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23240_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23240_onTap is still running");
	return;
}
var obj23240_onTap_runningActionsCount = 0;
var obj23240_onTap_loopCount = 0;
obj23240_onTap_actionGroup0();
});


















/*
 *
 *   obj23580: Event Touch Down
 *
 */

$("#obj23580").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23580_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23580_onTap is still running");
	return;
}
var obj23580_onTap_runningActionsCount = 0;
var obj23580_onTap_loopCount = 0;
obj23580_onTap_actionGroup0();
});














































/*
 *
 *   obj23251: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23251").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23251_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23251_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23251_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23251_SCEventCounterReachedTargetValue_loopCount = 0;
obj23251_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj23289: Event Touch Down
 *
 */

$("#obj23289").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23289_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23289_onTap is still running");
	return;
}
var obj23289_onTap_runningActionsCount = 0;
var obj23289_onTap_loopCount = 0;
obj23289_onTap_actionGroup0();
});


















/*
 *
 *   obj23298: Event Touch Down
 *
 */

$("#obj23298").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23298_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23298_onTap is still running");
	return;
}
var obj23298_onTap_runningActionsCount = 0;
var obj23298_onTap_loopCount = 0;
obj23298_onTap_actionGroup0();
});


















/*
 *
 *   obj23307: Event Touch Down
 *
 */

$("#obj23307").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23307_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23307_onTap is still running");
	return;
}
var obj23307_onTap_runningActionsCount = 0;
var obj23307_onTap_loopCount = 0;
obj23307_onTap_actionGroup0();
});


















/*
 *
 *   obj23316: Event Touch Down
 *
 */

$("#obj23316").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23316_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23316_onTap is still running");
	return;
}
var obj23316_onTap_runningActionsCount = 0;
var obj23316_onTap_loopCount = 0;
obj23316_onTap_actionGroup0();
});


















/*
 *
 *   obj23589: Event Touch Down
 *
 */

$("#obj23589").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23589_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23589_onTap is still running");
	return;
}
var obj23589_onTap_runningActionsCount = 0;
var obj23589_onTap_loopCount = 0;
obj23589_onTap_actionGroup0();
});






























































































/*
 *
 *   obj23333: Event Touch Down
 *
 */

$("#obj23333").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23333_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23333_onTap is still running");
	return;
}
var obj23333_onTap_runningActionsCount = 0;
var obj23333_onTap_loopCount = 0;
obj23333_onTap_actionGroup0();
});


















/*
 *
 *   obj23342: Event Touch Down
 *
 */

$("#obj23342").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23342_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23342_onTap is still running");
	return;
}
var obj23342_onTap_runningActionsCount = 0;
var obj23342_onTap_loopCount = 0;
obj23342_onTap_actionGroup0();
});


















/*
 *
 *   obj23351: Event Touch Down
 *
 */

$("#obj23351").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23351_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23351_onTap is still running");
	return;
}
var obj23351_onTap_runningActionsCount = 0;
var obj23351_onTap_loopCount = 0;
obj23351_onTap_actionGroup0();
});


















/*
 *
 *   obj23360: Event Touch Down
 *
 */

$("#obj23360").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23360_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23360_onTap is still running");
	return;
}
var obj23360_onTap_runningActionsCount = 0;
var obj23360_onTap_loopCount = 0;
obj23360_onTap_actionGroup0();
});


















/*
 *
 *   obj23614: Event Touch Down
 *
 */

$("#obj23614").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23614_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23614_onTap is still running");
	return;
}
var obj23614_onTap_runningActionsCount = 0;
var obj23614_onTap_loopCount = 0;
obj23614_onTap_actionGroup0();
});














































/*
 *
 *   obj23371: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23371").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23371_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23371_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23371_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23371_SCEventCounterReachedTargetValue_loopCount = 0;
obj23371_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj23409: Event Touch Down
 *
 */

$("#obj23409").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23409_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23409_onTap is still running");
	return;
}
var obj23409_onTap_runningActionsCount = 0;
var obj23409_onTap_loopCount = 0;
obj23409_onTap_actionGroup0();
});


















/*
 *
 *   obj23418: Event Touch Down
 *
 */

$("#obj23418").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23418_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23418_onTap is still running");
	return;
}
var obj23418_onTap_runningActionsCount = 0;
var obj23418_onTap_loopCount = 0;
obj23418_onTap_actionGroup0();
});


















/*
 *
 *   obj23427: Event Touch Down
 *
 */

$("#obj23427").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23427_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23427_onTap is still running");
	return;
}
var obj23427_onTap_runningActionsCount = 0;
var obj23427_onTap_loopCount = 0;
obj23427_onTap_actionGroup0();
});


















/*
 *
 *   obj23436: Event Touch Down
 *
 */

$("#obj23436").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23436_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23436_onTap is still running");
	return;
}
var obj23436_onTap_runningActionsCount = 0;
var obj23436_onTap_loopCount = 0;
obj23436_onTap_actionGroup0();
});


















/*
 *
 *   obj23623: Event Touch Down
 *
 */

$("#obj23623").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23623_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23623_onTap is still running");
	return;
}
var obj23623_onTap_runningActionsCount = 0;
var obj23623_onTap_loopCount = 0;
obj23623_onTap_actionGroup0();
});




















































































/*
 *
 *   obj23451: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23451").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23451_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23451_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23451_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23451_SCEventCounterReachedTargetValue_loopCount = 0;
obj23451_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj23454: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23454").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23454_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23454_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23454_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23454_SCEventCounterReachedTargetValue_loopCount = 0;
obj23454_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj23457: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23457").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23457_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23457_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23457_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23457_SCEventCounterReachedTargetValue_loopCount = 0;
obj23457_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj23460: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23460").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23460_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23460_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23460_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23460_SCEventCounterReachedTargetValue_loopCount = 0;
obj23460_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj23469: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23469").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23469_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23469_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23469_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23469_SCEventCounterReachedTargetValue_loopCount = 0;
obj23469_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj23472: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23472").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23472_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23472_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23472_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23472_SCEventCounterReachedTargetValue_loopCount = 0;
obj23472_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj23475: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23475").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23475_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23475_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23475_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23475_SCEventCounterReachedTargetValue_loopCount = 0;
obj23475_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj23478: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23478").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23478_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23478_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23478_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23478_SCEventCounterReachedTargetValue_loopCount = 0;
obj23478_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj23482: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23482").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23482_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23482_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23482_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23482_SCEventCounterReachedTargetValue_loopCount = 0;
obj23482_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj23492: Event Touch Down
 *
 */

$("#obj23492").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23492_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23492_onTap is still running");
	return;
}
var obj23492_onTap_runningActionsCount = 0;
var obj23492_onTap_loopCount = 0;
obj23492_onTap_actionGroup0();
});


















/*
 *
 *   obj23500: Event Touch Down
 *
 */

$("#obj23500").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23500_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23500_onTap is still running");
	return;
}
var obj23500_onTap_runningActionsCount = 0;
var obj23500_onTap_loopCount = 0;
obj23500_onTap_actionGroup0();
});


















/*
 *
 *   obj23508: Event Touch Down
 *
 */

$("#obj23508").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23508_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23508_onTap is still running");
	return;
}
var obj23508_onTap_runningActionsCount = 0;
var obj23508_onTap_loopCount = 0;
obj23508_onTap_actionGroup0();
});


















/*
 *
 *   obj23516: Event Touch Down
 *
 */

$("#obj23516").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23516_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23516_onTap is still running");
	return;
}
var obj23516_onTap_runningActionsCount = 0;
var obj23516_onTap_loopCount = 0;
obj23516_onTap_actionGroup0();
});






























































































/*
 *
 *   obj23532: Event Touch Down
 *
 */

$("#obj23532").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23532_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23532_onTap is still running");
	return;
}
var obj23532_onTap_runningActionsCount = 0;
var obj23532_onTap_loopCount = 0;
obj23532_onTap_actionGroup0();
});


















/*
 *
 *   obj23540: Event Touch Down
 *
 */

$("#obj23540").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23540_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23540_onTap is still running");
	return;
}
var obj23540_onTap_runningActionsCount = 0;
var obj23540_onTap_loopCount = 0;
obj23540_onTap_actionGroup0();
});


















/*
 *
 *   obj23548: Event Touch Down
 *
 */

$("#obj23548").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23548_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23548_onTap is still running");
	return;
}
var obj23548_onTap_runningActionsCount = 0;
var obj23548_onTap_loopCount = 0;
obj23548_onTap_actionGroup0();
});


















/*
 *
 *   obj23556: Event Touch Down
 *
 */

$("#obj23556").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23556_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23556_onTap is still running");
	return;
}
var obj23556_onTap_runningActionsCount = 0;
var obj23556_onTap_loopCount = 0;
obj23556_onTap_actionGroup0();
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
	
$("#obj23196").trigger('SCEventShow');
$("#obj23200").trigger('SCEventShow');
$("#obj23202").trigger('SCEventShow');
$("#obj23205").trigger('SCEventShow');
$("#obj23207").trigger('SCEventShow');
$("#obj23209").trigger('SCEventShow');
$("#obj23211").trigger('SCEventShow');
$("#obj23213").trigger('SCEventShow');
$("#obj23222").trigger('SCEventShow');
$("#obj23231").trigger('SCEventShow');
$("#obj23240").trigger('SCEventShow');
$("#obj23580").trigger('SCEventShow');
$("#obj23283").trigger('SCEventShow');
$("#obj23285").trigger('SCEventShow');
$("#obj23287").trigger('SCEventShow');
$("#obj23289").trigger('SCEventShow');
$("#obj23298").trigger('SCEventShow');
$("#obj23307").trigger('SCEventShow');
$("#obj23316").trigger('SCEventShow');
$("#obj23589").trigger('SCEventShow');
$("#obj23447").trigger('SCEventShow');
$("#obj23449").trigger('SCEventShow');
$("#obj24648").trigger('SCEventShow');
$("#obj24646").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});