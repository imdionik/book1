pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 3977;
pubcoder.page.title = pubcoder.page.title || "57";
pubcoder.page.number = pubcoder.page.number || 57;
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
var obj4694_onTap_activeActionGroupIndex = -1;
var obj4694_onTap_runningActionsCount = 0;
var obj4694_onTap_loopCount = 0;
var obj4945_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4945_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4945_SCEventCounterReachedTargetValue_loopCount = 0;
var obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4947_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5417_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5417_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5417_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6914_onTap_activeActionGroupIndex = -1;
var obj6914_onTap_runningActionsCount = 0;
var obj6914_onTap_loopCount = 0;
var obj6922_onTap_activeActionGroupIndex = -1;
var obj6922_onTap_runningActionsCount = 0;
var obj6922_onTap_loopCount = 0;
var obj6930_onTap_activeActionGroupIndex = -1;
var obj6930_onTap_runningActionsCount = 0;
var obj6930_onTap_loopCount = 0;
var obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6961_SCEventCounterReachedTargetValue_loopCount = 0;
var obj7001_onTap_activeActionGroupIndex = -1;
var obj7001_onTap_runningActionsCount = 0;
var obj7001_onTap_loopCount = 0;
var obj6995_onTap_activeActionGroupIndex = -1;
var obj6995_onTap_runningActionsCount = 0;
var obj6995_onTap_loopCount = 0;
var obj7055_onTap_activeActionGroupIndex = -1;
var obj7055_onTap_runningActionsCount = 0;
var obj7055_onTap_loopCount = 0;
var obj7049_onTap_activeActionGroupIndex = -1;
var obj7049_onTap_runningActionsCount = 0;
var obj7049_onTap_loopCount = 0;
var obj7085_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj7085_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7085_SCEventCounterReachedTargetValue_loopCount = 0;
var obj7115_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj7115_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7115_SCEventCounterReachedTargetValue_loopCount = 0;
var obj7219_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj7219_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7219_SCEventCounterReachedTargetValue_loopCount = 0;
var obj7419_onTap_activeActionGroupIndex = -1;
var obj7419_onTap_runningActionsCount = 0;
var obj7419_onTap_loopCount = 0;
var obj24735_onTap_activeActionGroupIndex = -1;
var obj24735_onTap_runningActionsCount = 0;
var obj24735_onTap_loopCount = 0;
var obj24725_onTap_activeActionGroupIndex = -1;
var obj24725_onTap_runningActionsCount = 0;
var obj24725_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj4945_counterValue = 0;
var obj4945_counterTargetValue = 3;
var obj4945_counterCanExceedTargetValue = false;
var obj4947_counterValue = 0;
var obj4947_counterTargetValue = 3;
var obj4947_counterCanExceedTargetValue = false;
var obj5417_counterValue = 0;
var obj5417_counterTargetValue = 1;
var obj5417_counterCanExceedTargetValue = false;
var obj6961_counterValue = 0;
var obj6961_counterTargetValue = 1;
var obj6961_counterCanExceedTargetValue = false;
var obj7085_counterValue = 0;
var obj7085_counterTargetValue = 3;
var obj7085_counterCanExceedTargetValue = false;
var obj7115_counterValue = 0;
var obj7115_counterTargetValue = 2;
var obj7115_counterCanExceedTargetValue = false;
var obj7219_counterValue = 0;
var obj7219_counterTargetValue = 2;
var obj7219_counterCanExceedTargetValue = false;

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
		
obj4694_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6955
(function(){
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	var selector = "#obj6955";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4694_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_6941();
function playAudioFile_6941() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile6941")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6941");
			$("#obj_audio_playSoundFile6941").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup2();
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
				window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj4694_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_6938();
function runjs_6938() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	$("#obj6942").css("border-color", "#2DB657"); $("#obj6942").css("border-width", "2px"); $("#obj6942").css("border-style", "solid"); $("#obj6942").css("border-radius", "15px"); $("#obj6942").css("-webkit-border-radius", "15px"); $("#obj6942").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24743();
function runjs_24743() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	$("#obj6942").css("background-color", "#2DB657");
	
	setTimeout(function() {
		window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24937();
function runjs_24937() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	$("#obj4632").css("color", "white");
	
	setTimeout(function() {
		window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup3();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj6942 
(function () {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


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

	if ($("#obj6942").css('filter') == 'none')
$("#obj6942").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj6942").animate({ dropShadow: 'drop-shadow(4px 4px 2px #2DB657)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj4694_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj4694 
hide_6939();
function hide_6939() {
	var selector = "#obj4694";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6939(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj4694_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj4694
(function(){
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	var selector = "#obj4694";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4694_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj5417 
incrementCounter_6982();
function incrementCounter_6982() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	var oldValue = obj5417_counterValue;
	obj5417_counterValue = obj5417_counterValue + 1;
	if (! obj5417_counterCanExceedTargetValue && obj5417_counterValue > obj5417_counterTargetValue) {
		obj5417_counterValue = obj5417_counterTargetValue;
	}

	if (oldValue != obj5417_counterValue) {
		$("#obj5417").trigger('SCEventCounterValueChange');
		$("#obj5417").trigger('SCEventCounterIncrease');
		if (obj5417_counterValue == obj5417_counterTargetValue)
			$("#obj5417").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup6();
} }, 1);
}
//	action: increment counter
//	target: obj7085 
incrementCounter_7227();
function incrementCounter_7227() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	var oldValue = obj7085_counterValue;
	obj7085_counterValue = obj7085_counterValue + 1;
	if (! obj7085_counterCanExceedTargetValue && obj7085_counterValue > obj7085_counterTargetValue) {
		obj7085_counterValue = obj7085_counterTargetValue;
	}

	if (oldValue != obj7085_counterValue) {
		$("#obj7085").trigger('SCEventCounterValueChange');
		$("#obj7085").trigger('SCEventCounterIncrease');
		if (obj7085_counterValue == obj7085_counterTargetValue)
			$("#obj7085").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup6();
} }, 1);
}
//	action: increment counter
//	target: obj7219 
incrementCounter_7228();
function incrementCounter_7228() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	var oldValue = obj7219_counterValue;
	obj7219_counterValue = obj7219_counterValue + 1;
	if (! obj7219_counterCanExceedTargetValue && obj7219_counterValue > obj7219_counterTargetValue) {
		obj7219_counterValue = obj7219_counterTargetValue;
	}

	if (oldValue != obj7219_counterValue) {
		$("#obj7219").trigger('SCEventCounterValueChange');
		$("#obj7219").trigger('SCEventCounterIncrease');
		if (obj7219_counterValue == obj7219_counterTargetValue)
			$("#obj7219").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup6();
} }, 1);
}











};
obj4694_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 6;
	































//	action: increment counter
//	target: obj4945 
incrementCounter_6958();
function incrementCounter_6958() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	var oldValue = obj4945_counterValue;
	obj4945_counterValue = obj4945_counterValue + 1;
	if (! obj4945_counterCanExceedTargetValue && obj4945_counterValue > obj4945_counterTargetValue) {
		obj4945_counterValue = obj4945_counterTargetValue;
	}

	if (oldValue != obj4945_counterValue) {
		$("#obj4945").trigger('SCEventCounterValueChange');
		$("#obj4945").trigger('SCEventCounterIncrease');
		if (obj4945_counterValue == obj4945_counterTargetValue)
			$("#obj4945").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup7();
} }, 1);
}











};
obj4694_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj4947 
incrementCounter_6960();
function incrementCounter_6960() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	var oldValue = obj4947_counterValue;
	obj4947_counterValue = obj4947_counterValue + 1;
	if (! obj4947_counterCanExceedTargetValue && obj4947_counterValue > obj4947_counterTargetValue) {
		obj4947_counterValue = obj4947_counterTargetValue;
	}

	if (oldValue != obj4947_counterValue) {
		$("#obj4947").trigger('SCEventCounterValueChange');
		$("#obj4947").trigger('SCEventCounterIncrease');
		if (obj4947_counterValue == obj4947_counterTargetValue)
			$("#obj4947").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup8();
} }, 1);
}











};
obj4694_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 8;
	

































//	action: set counter value
//	target: obj6961 
setCounterValue_6976();
function setCounterValue_6976() {
	window.obj4694_onTap_runningActionsCount = obj4694_onTap_runningActionsCount + 1;


	var oldValue = obj6961_counterValue;
	obj6961_counterValue = 1;
	if (obj6961_counterValue < 0) {
		obj6961_counterValue = 0;
	} else if (! obj6961_counterCanExceedTargetValue && obj6961_counterValue > obj6961_counterTargetValue) {
		obj6961_counterValue = obj6961_counterTargetValue;
	}

	if (oldValue != obj6961_counterValue) {
		$("#obj6961").trigger('SCEventCounterValueChange');
		if (obj6961_counterValue == obj6961_counterTargetValue)
			$("#obj6961").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4694_onTap_runningActionsCount = window.obj4694_onTap_runningActionsCount - 1;

if (window.obj4694_onTap_runningActionsCount < 0) {
	window.obj4694_onTap_runningActionsCount = 0;
} else if (window.obj4694_onTap_runningActionsCount == 0) {
	obj4694_onTap_actionGroup9();
} }, 1);
}









};
obj4694_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4694_onTap_activeActionGroupIndex = -1;
		$("#obj4694").trigger("obj4694_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4694) {
				console.warn("de-queueing event obj4694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4694_onTap_activeActionGroupIndex = 9;
	











































};
obj4945_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4945_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4945").trigger("obj4945_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4945) {
				console.warn("de-queueing event obj4945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4945_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_5385();
function wait_5385() {
	window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount = obj4945_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4945_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1500);
}


























};
obj4945_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4945_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4945").trigger("obj4945_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4945) {
				console.warn("de-queueing event obj4945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4945_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_5388();
function goToPage_5388() {
	window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount = obj4945_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor917")[0].click();
	window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4945_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4945_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj4945_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4945_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4945").trigger("obj4945_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4945) {
				console.warn("de-queueing event obj4945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4945_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj4947_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4947").trigger("obj4947_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4947) {
				console.warn("de-queueing event obj4947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_5391();
function wait_5391() {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1500);
}


























};
obj4947_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4947").trigger("obj4947_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4947) {
				console.warn("de-queueing event obj4947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_7186();
function runjs_7186() {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	$("#obj7021").css("border-color", "#919191"); $("#obj7021").css("border-width", "1px"); $("#obj7021").css("border-style", "solid"); $("#obj7021").css("border-radius", "15px"); $("#obj7021").css("-webkit-border-radius", "15px"); $("#obj7021").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1);
}
//	action: Run JavaScript
runjs_7187();
function runjs_7187() {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	$("#obj7019").css("border-color", "#919191"); $("#obj7019").css("border-width", "1px"); $("#obj7019").css("border-style", "solid"); $("#obj7019").css("border-radius", "15px"); $("#obj7019").css("-webkit-border-radius", "15px"); $("#obj7019").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1);
}
//	action: Run JavaScript
runjs_7188();
function runjs_7188() {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	$("#obj7071").css("border-color", "#919191"); $("#obj7071").css("border-width", "1px"); $("#obj7071").css("border-style", "solid"); $("#obj7071").css("border-radius", "15px"); $("#obj7071").css("-webkit-border-radius", "15px"); $("#obj7071").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1);
}
//	action: Run JavaScript
runjs_7189();
function runjs_7189() {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	$("#obj7069").css("border-color", "#919191"); $("#obj7069").css("border-width", "1px"); $("#obj7069").css("border-style", "solid"); $("#obj7069").css("border-radius", "15px"); $("#obj7069").css("-webkit-border-radius", "15px"); $("#obj7069").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj7021 
(function () {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;


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

	if ($("#obj7021").css('filter') == 'none')
$("#obj7021").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7021").animate({ dropShadow: 'drop-shadow(2px 2px 2px #919191)'}, 100, easing, function() {
		setTimeout(function() {
			window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj7019 
(function () {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;


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

	if ($("#obj7019").css('filter') == 'none')
$("#obj7019").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7019").animate({ dropShadow: 'drop-shadow(2px 2px 2px #919191)'}, 100, easing, function() {
		setTimeout(function() {
			window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj7071 
(function () {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;


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

	if ($("#obj7071").css('filter') == 'none')
$("#obj7071").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7071").animate({ dropShadow: 'drop-shadow(2px 2px 2px #919191)'}, 100, easing, function() {
		setTimeout(function() {
			window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj7069 
(function () {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;


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

	if ($("#obj7069").css('filter') == 'none')
$("#obj7069").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7069").animate({ dropShadow: 'drop-shadow(2px 2px 2px #919191)'}, 100, easing, function() {
		setTimeout(function() {
			window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
	});
})();

};
obj4947_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4947").trigger("obj4947_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4947) {
				console.warn("de-queueing event obj4947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_7799();
function goToPage_7799() {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = obj4947_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor918")[0].click();
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4947_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4947_SCEventCounterReachedTargetValue_actionGroup3();
}
}










































};
obj4947_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4947").trigger("obj4947_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4947) {
				console.warn("de-queueing event obj4947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj5417_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5417_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5417").trigger("obj5417_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5417) {
				console.warn("de-queueing event obj5417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5417_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24735
(function(){
	window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = obj5417_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj24735";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5417_SCEventCounterReachedTargetValue_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5417_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5417_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5417_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5417").trigger("obj5417_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5417) {
				console.warn("de-queueing event obj5417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5417_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_5419();
function switchText_5419() {
	window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = obj5417_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/3</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4670_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4670_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj4670").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4670_content");
			setTimeout(function () {
				window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5417_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj4670 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5417_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5417_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
	}
}












};
obj5417_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5417_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5417").trigger("obj5417_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5417) {
				console.warn("de-queueing event obj5417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5417_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj6914_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6955
(function(){
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;


	var selector = "#obj6955";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6914_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7024();
function playAudioFile_7024() {
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7024")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7024");
			$("#obj_audio_playSoundFile7024").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup2();
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
				window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj6914_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_7025();
function runjs_7025() {
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;


	$("#obj6944").css("border-color", "#F8A03C"); $("#obj6944").css("border-width", "2px"); $("#obj6944").css("border-style", "solid"); $("#obj6944").css("border-radius", "15px"); $("#obj6944").css("-webkit-border-radius", "15px"); $("#obj6944").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24744();
function runjs_24744() {
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;


	$("#obj6944").css("background-color", "#F8A03C");
	
	setTimeout(function() {
		window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24938();
function runjs_24938() {
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;


	$("#obj6918").css("color", "white");
	
	setTimeout(function() {
		window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup3();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj6944 
(function () {
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;


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

	if ($("#obj6944").css('filter') == 'none')
$("#obj6944").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj6944").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj6914_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj6914 
hide_7027();
function hide_7027() {
	var selector = "#obj6914";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7027(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6914_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj6914
(function(){
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;


	var selector = "#obj6914";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6914_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj4947 
incrementCounter_7031();
function incrementCounter_7031() {
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;


	var oldValue = obj4947_counterValue;
	obj4947_counterValue = obj4947_counterValue + 1;
	if (! obj4947_counterCanExceedTargetValue && obj4947_counterValue > obj4947_counterTargetValue) {
		obj4947_counterValue = obj4947_counterTargetValue;
	}

	if (oldValue != obj4947_counterValue) {
		$("#obj4947").trigger('SCEventCounterValueChange');
		$("#obj4947").trigger('SCEventCounterIncrease');
		if (obj4947_counterValue == obj4947_counterTargetValue)
			$("#obj4947").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup6();
} }, 1);
}











};
obj6914_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 6;
	

































//	action: set counter value
//	target: obj6961 
setCounterValue_7032();
function setCounterValue_7032() {
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;


	var oldValue = obj6961_counterValue;
	obj6961_counterValue = 1;
	if (obj6961_counterValue < 0) {
		obj6961_counterValue = 0;
	} else if (! obj6961_counterCanExceedTargetValue && obj6961_counterValue > obj6961_counterTargetValue) {
		obj6961_counterValue = obj6961_counterTargetValue;
	}

	if (oldValue != obj6961_counterValue) {
		$("#obj6961").trigger('SCEventCounterValueChange');
		if (obj6961_counterValue == obj6961_counterTargetValue)
			$("#obj6961").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;

if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup7();
} }, 1);
}









};
obj6914_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 7;
	











































};
obj6922_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6955
(function(){
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;


	var selector = "#obj6955";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6922_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7034();
function playAudioFile_7034() {
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7034")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7034");
			$("#obj_audio_playSoundFile7034").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup2();
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
				window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj6922_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_7035();
function runjs_7035() {
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;


	$("#obj6946").css("border-color", "#F8A03C"); $("#obj6946").css("border-width", "2px"); $("#obj6946").css("border-style", "solid"); $("#obj6946").css("border-radius", "15px"); $("#obj6946").css("-webkit-border-radius", "15px"); $("#obj6946").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24745();
function runjs_24745() {
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;


	$("#obj6946").css("background-color", "#F8A03C");
	
	setTimeout(function() {
		window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24939();
function runjs_24939() {
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;


	$("#obj6926").css("color", "white");
	
	setTimeout(function() {
		window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup3();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj6946 
(function () {
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;


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

	if ($("#obj6946").css('filter') == 'none')
$("#obj6946").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj6946").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj6922_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj6922 
hide_7037();
function hide_7037() {
	var selector = "#obj6922";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7037(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6922_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj6922
(function(){
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;


	var selector = "#obj6922";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6922_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj4947 
incrementCounter_7039();
function incrementCounter_7039() {
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;


	var oldValue = obj4947_counterValue;
	obj4947_counterValue = obj4947_counterValue + 1;
	if (! obj4947_counterCanExceedTargetValue && obj4947_counterValue > obj4947_counterTargetValue) {
		obj4947_counterValue = obj4947_counterTargetValue;
	}

	if (oldValue != obj4947_counterValue) {
		$("#obj4947").trigger('SCEventCounterValueChange');
		$("#obj4947").trigger('SCEventCounterIncrease');
		if (obj4947_counterValue == obj4947_counterTargetValue)
			$("#obj4947").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup6();
} }, 1);
}











};
obj6922_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 6;
	

































//	action: set counter value
//	target: obj6961 
setCounterValue_7040();
function setCounterValue_7040() {
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;


	var oldValue = obj6961_counterValue;
	obj6961_counterValue = 1;
	if (obj6961_counterValue < 0) {
		obj6961_counterValue = 0;
	} else if (! obj6961_counterCanExceedTargetValue && obj6961_counterValue > obj6961_counterTargetValue) {
		obj6961_counterValue = obj6961_counterTargetValue;
	}

	if (oldValue != obj6961_counterValue) {
		$("#obj6961").trigger('SCEventCounterValueChange');
		if (obj6961_counterValue == obj6961_counterTargetValue)
			$("#obj6961").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;

if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup7();
} }, 1);
}









};
obj6922_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 7;
	











































};
obj6930_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6930_onTap_activeActionGroupIndex = -1;
		$("#obj6930").trigger("obj6930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6930) {
				console.warn("de-queueing event obj6930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6930_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6955
(function(){
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;


	var selector = "#obj6955";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6930_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6930_onTap_activeActionGroupIndex = -1;
		$("#obj6930").trigger("obj6930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6930) {
				console.warn("de-queueing event obj6930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6930_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7042();
function playAudioFile_7042() {
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7042")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7042");
			$("#obj_audio_playSoundFile7042").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup2();
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
				window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj6930_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6930_onTap_activeActionGroupIndex = -1;
		$("#obj6930").trigger("obj6930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6930) {
				console.warn("de-queueing event obj6930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6930_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_7043();
function runjs_7043() {
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;


	$("#obj6948").css("border-color", "#F8A03C"); $("#obj6948").css("border-width", "2px"); $("#obj6948").css("border-style", "solid"); $("#obj6948").css("border-radius", "15px"); $("#obj6948").css("-webkit-border-radius", "15px"); $("#obj6948").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24746();
function runjs_24746() {
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;


	$("#obj6948").css("background-color", "#F8A03C");
	
	setTimeout(function() {
		window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24940();
function runjs_24940() {
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;


	$("#obj6934").css("color", "white");
	
	setTimeout(function() {
		window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup3();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj6948 
(function () {
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;


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

	if ($("#obj6948").css('filter') == 'none')
$("#obj6948").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj6948").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj6930_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6930_onTap_activeActionGroupIndex = -1;
		$("#obj6930").trigger("obj6930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6930) {
				console.warn("de-queueing event obj6930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6930_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj6930 
hide_7045();
function hide_7045() {
	var selector = "#obj6930";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7045(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6930_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6930_onTap_activeActionGroupIndex = -1;
		$("#obj6930").trigger("obj6930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6930) {
				console.warn("de-queueing event obj6930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6930_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj6930
(function(){
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;


	var selector = "#obj6930";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj6930_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6930_onTap_activeActionGroupIndex = -1;
		$("#obj6930").trigger("obj6930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6930) {
				console.warn("de-queueing event obj6930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6930_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj4947 
incrementCounter_7047();
function incrementCounter_7047() {
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;


	var oldValue = obj4947_counterValue;
	obj4947_counterValue = obj4947_counterValue + 1;
	if (! obj4947_counterCanExceedTargetValue && obj4947_counterValue > obj4947_counterTargetValue) {
		obj4947_counterValue = obj4947_counterTargetValue;
	}

	if (oldValue != obj4947_counterValue) {
		$("#obj4947").trigger('SCEventCounterValueChange');
		$("#obj4947").trigger('SCEventCounterIncrease');
		if (obj4947_counterValue == obj4947_counterTargetValue)
			$("#obj4947").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup6();
} }, 1);
}











};
obj6930_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6930_onTap_activeActionGroupIndex = -1;
		$("#obj6930").trigger("obj6930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6930) {
				console.warn("de-queueing event obj6930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6930_onTap_activeActionGroupIndex = 6;
	

































//	action: set counter value
//	target: obj6961 
setCounterValue_7048();
function setCounterValue_7048() {
	window.obj6930_onTap_runningActionsCount = obj6930_onTap_runningActionsCount + 1;


	var oldValue = obj6961_counterValue;
	obj6961_counterValue = 1;
	if (obj6961_counterValue < 0) {
		obj6961_counterValue = 0;
	} else if (! obj6961_counterCanExceedTargetValue && obj6961_counterValue > obj6961_counterTargetValue) {
		obj6961_counterValue = obj6961_counterTargetValue;
	}

	if (oldValue != obj6961_counterValue) {
		$("#obj6961").trigger('SCEventCounterValueChange');
		if (obj6961_counterValue == obj6961_counterTargetValue)
			$("#obj6961").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6930_onTap_runningActionsCount = window.obj6930_onTap_runningActionsCount - 1;

if (window.obj6930_onTap_runningActionsCount < 0) {
	window.obj6930_onTap_runningActionsCount = 0;
} else if (window.obj6930_onTap_runningActionsCount == 0) {
	obj6930_onTap_actionGroup7();
} }, 1);
}









};
obj6930_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6930_onTap_activeActionGroupIndex = -1;
		$("#obj6930").trigger("obj6930_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6930) {
				console.warn("de-queueing event obj6930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6930_onTap_activeActionGroupIndex = 7;
	











































};
obj6961_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6961").trigger("obj6961_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6961) {
				console.warn("de-queueing event obj6961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj4694 
hide_6963();
function hide_6963() {
	var selector = "#obj4694";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6963(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6914 
hide_6964();
function hide_6964() {
	var selector = "#obj6914";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6964(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6922 
hide_6965();
function hide_6965() {
	var selector = "#obj6922";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6965(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6930 
hide_6966();
function hide_6966() {
	var selector = "#obj6930";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6966(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6955 
hide_6967();
function hide_6967() {
	var selector = "#obj6955";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6967(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4632 
hide_6968();
function hide_6968() {
	var selector = "#obj4632";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6968(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6918 
hide_6969();
function hide_6969() {
	var selector = "#obj6918";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6969(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6926 
hide_6970();
function hide_6970() {
	var selector = "#obj6926";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6970(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6934 
hide_6971();
function hide_6971() {
	var selector = "#obj6934";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6971(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6942 
hide_6972();
function hide_6972() {
	var selector = "#obj6942";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6972(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6944 
hide_6973();
function hide_6973() {
	var selector = "#obj6944";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6973(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6946 
hide_6974();
function hide_6974() {
	var selector = "#obj6946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6974(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj6948 
hide_6975();
function hide_6975() {
	var selector = "#obj6948";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6975(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4615 
hide_6981();
function hide_6981() {
	var selector = "#obj4615";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6981(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6961_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6961").trigger("obj6961_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6961) {
				console.warn("de-queueing event obj6961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4870
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4870";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7021
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7021";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7019
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7019";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7071
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7071";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7069
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7069";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7013
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7013";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj6999
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj6999";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7067
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7067";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7053
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7053";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7001
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7001";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj6995
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj6995";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7055
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7055";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7049
(function(){
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj7049";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



























//	action: Switch Text
switchText_6980();
function switchText_6980() {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><em>Задача 2</em></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4613_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4613_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj4613").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4613_content");
			setTimeout(function () {
				window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj4613 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
	}
}












};
obj6961_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6961").trigger("obj6961_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6961) {
				console.warn("de-queueing event obj6961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
































//	action: decrement counter
//	target: obj6961 
decrementCounter_6977();
function decrementCounter_6977() {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = obj6961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj6961_counterValue;
	obj6961_counterValue = obj6961_counterValue - 1;
	if (obj6961_counterValue < 0) {
		obj6961_counterValue = 0;
	}

	if (oldValue != obj6961_counterValue) {
		$("#obj6961").trigger('SCEventCounterValueChange');
		$("#obj6961").trigger('SCEventCounterDecrease');
		if (obj6961_counterValue == obj6961_counterTargetValue)
			$("#obj6961").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj6961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6961_SCEventCounterReachedTargetValue_actionGroup3();
} }, 1);
}










};
obj6961_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6961").trigger("obj6961_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6961) {
				console.warn("de-queueing event obj6961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj7001_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7001_onTap_activeActionGroupIndex = -1;
		$("#obj7001").trigger("obj7001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7001) {
				console.warn("de-queueing event obj7001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7001_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj7115 
incrementCounter_7171();
function incrementCounter_7171() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	var oldValue = obj7115_counterValue;
	obj7115_counterValue = obj7115_counterValue + 1;
	if (! obj7115_counterCanExceedTargetValue && obj7115_counterValue > obj7115_counterTargetValue) {
		obj7115_counterValue = obj7115_counterTargetValue;
	}

	if (oldValue != obj7115_counterValue) {
		$("#obj7115").trigger('SCEventCounterValueChange');
		$("#obj7115").trigger('SCEventCounterIncrease');
		if (obj7115_counterValue == obj7115_counterTargetValue)
			$("#obj7115").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup1();
} }, 1);
}











};
obj7001_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7001_onTap_activeActionGroupIndex = -1;
		$("#obj7001").trigger("obj7001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7001) {
				console.warn("de-queueing event obj7001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7001_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7004();
function playAudioFile_7004() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7004")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7004");
			$("#obj_audio_playSoundFile7004").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup2();
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
				window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7001_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7001_onTap_activeActionGroupIndex = -1;
		$("#obj7001").trigger("obj7001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7001) {
				console.warn("de-queueing event obj7001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7001_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_7005();
function runjs_7005() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	$("#obj7021").css("border-color", "#2DB657"); $("#obj7021").css("border-width", "2px"); $("#obj7021").css("border-style", "solid"); $("#obj7021").css("border-radius", "15px"); $("#obj7021").css("-webkit-border-radius", "15px"); $("#obj7021").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24747();
function runjs_24747() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	$("#obj7021").css("background-color", "#2DB657");
	
	setTimeout(function() {
		window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24933();
function runjs_24933() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	$("#obj7013").css("color", "white");
	
	setTimeout(function() {
		window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup3();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj7021 
(function () {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


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

	if ($("#obj7021").css('filter') == 'none')
$("#obj7021").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7021").animate({ dropShadow: 'drop-shadow(4px 4px 2px #2DB657)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7001_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7001_onTap_activeActionGroupIndex = -1;
		$("#obj7001").trigger("obj7001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7001) {
				console.warn("de-queueing event obj7001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7001_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj7001 
hide_7007();
function hide_7007() {
	var selector = "#obj7001";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7007(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7001_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7001_onTap_activeActionGroupIndex = -1;
		$("#obj7001").trigger("obj7001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7001) {
				console.warn("de-queueing event obj7001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7001_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj7001
(function(){
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	var selector = "#obj7001";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7001_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7001_onTap_activeActionGroupIndex = -1;
		$("#obj7001").trigger("obj7001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7001) {
				console.warn("de-queueing event obj7001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7001_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj7219 
incrementCounter_7222();
function incrementCounter_7222() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	var oldValue = obj7219_counterValue;
	obj7219_counterValue = obj7219_counterValue + 1;
	if (! obj7219_counterCanExceedTargetValue && obj7219_counterValue > obj7219_counterTargetValue) {
		obj7219_counterValue = obj7219_counterTargetValue;
	}

	if (oldValue != obj7219_counterValue) {
		$("#obj7219").trigger('SCEventCounterValueChange');
		$("#obj7219").trigger('SCEventCounterIncrease');
		if (obj7219_counterValue == obj7219_counterTargetValue)
			$("#obj7219").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup6();
} }, 1);
}
//	action: increment counter
//	target: obj7085 
incrementCounter_7009();
function incrementCounter_7009() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	var oldValue = obj7085_counterValue;
	obj7085_counterValue = obj7085_counterValue + 1;
	if (! obj7085_counterCanExceedTargetValue && obj7085_counterValue > obj7085_counterTargetValue) {
		obj7085_counterValue = obj7085_counterTargetValue;
	}

	if (oldValue != obj7085_counterValue) {
		$("#obj7085").trigger('SCEventCounterValueChange');
		$("#obj7085").trigger('SCEventCounterIncrease');
		if (obj7085_counterValue == obj7085_counterTargetValue)
			$("#obj7085").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup6();
} }, 1);
}
//	action: increment counter
//	target: obj5417 
incrementCounter_7226();
function incrementCounter_7226() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	var oldValue = obj5417_counterValue;
	obj5417_counterValue = obj5417_counterValue + 1;
	if (! obj5417_counterCanExceedTargetValue && obj5417_counterValue > obj5417_counterTargetValue) {
		obj5417_counterValue = obj5417_counterTargetValue;
	}

	if (oldValue != obj5417_counterValue) {
		$("#obj5417").trigger('SCEventCounterValueChange');
		$("#obj5417").trigger('SCEventCounterIncrease');
		if (obj5417_counterValue == obj5417_counterTargetValue)
			$("#obj5417").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup6();
} }, 1);
}











};
obj7001_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7001_onTap_activeActionGroupIndex = -1;
		$("#obj7001").trigger("obj7001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7001) {
				console.warn("de-queueing event obj7001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7001_onTap_activeActionGroupIndex = 6;
	































//	action: increment counter
//	target: obj4945 
incrementCounter_7010();
function incrementCounter_7010() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	var oldValue = obj4945_counterValue;
	obj4945_counterValue = obj4945_counterValue + 1;
	if (! obj4945_counterCanExceedTargetValue && obj4945_counterValue > obj4945_counterTargetValue) {
		obj4945_counterValue = obj4945_counterTargetValue;
	}

	if (oldValue != obj4945_counterValue) {
		$("#obj4945").trigger('SCEventCounterValueChange');
		$("#obj4945").trigger('SCEventCounterIncrease');
		if (obj4945_counterValue == obj4945_counterTargetValue)
			$("#obj4945").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup7();
} }, 1);
}











};
obj7001_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7001_onTap_activeActionGroupIndex = -1;
		$("#obj7001").trigger("obj7001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7001) {
				console.warn("de-queueing event obj7001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7001_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj4947 
incrementCounter_7011();
function incrementCounter_7011() {
	window.obj7001_onTap_runningActionsCount = obj7001_onTap_runningActionsCount + 1;


	var oldValue = obj4947_counterValue;
	obj4947_counterValue = obj4947_counterValue + 1;
	if (! obj4947_counterCanExceedTargetValue && obj4947_counterValue > obj4947_counterTargetValue) {
		obj4947_counterValue = obj4947_counterTargetValue;
	}

	if (oldValue != obj4947_counterValue) {
		$("#obj4947").trigger('SCEventCounterValueChange');
		$("#obj4947").trigger('SCEventCounterIncrease');
		if (obj4947_counterValue == obj4947_counterTargetValue)
			$("#obj4947").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7001_onTap_runningActionsCount = window.obj7001_onTap_runningActionsCount - 1;

if (window.obj7001_onTap_runningActionsCount < 0) {
	window.obj7001_onTap_runningActionsCount = 0;
} else if (window.obj7001_onTap_runningActionsCount == 0) {
	obj7001_onTap_actionGroup8();
} }, 1);
}











};
obj7001_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7001_onTap_activeActionGroupIndex = -1;
		$("#obj7001").trigger("obj7001_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7001) {
				console.warn("de-queueing event obj7001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7001_onTap_activeActionGroupIndex = 8;
	











































};
obj6995_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6995_onTap_activeActionGroupIndex = -1;
		$("#obj6995").trigger("obj6995_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6995) {
				console.warn("de-queueing event obj6995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6995_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj7115 
incrementCounter_7170();
function incrementCounter_7170() {
	window.obj6995_onTap_runningActionsCount = obj6995_onTap_runningActionsCount + 1;


	var oldValue = obj7115_counterValue;
	obj7115_counterValue = obj7115_counterValue + 1;
	if (! obj7115_counterCanExceedTargetValue && obj7115_counterValue > obj7115_counterTargetValue) {
		obj7115_counterValue = obj7115_counterTargetValue;
	}

	if (oldValue != obj7115_counterValue) {
		$("#obj7115").trigger('SCEventCounterValueChange');
		$("#obj7115").trigger('SCEventCounterIncrease');
		if (obj7115_counterValue == obj7115_counterTargetValue)
			$("#obj7115").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup1();
} }, 1);
}











};
obj6995_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6995_onTap_activeActionGroupIndex = -1;
		$("#obj6995").trigger("obj6995_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6995) {
				console.warn("de-queueing event obj6995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6995_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7089();
function playAudioFile_7089() {
	window.obj6995_onTap_runningActionsCount = obj6995_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7089")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7089");
			$("#obj_audio_playSoundFile7089").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup2();
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
				window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj6995_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6995_onTap_activeActionGroupIndex = -1;
		$("#obj6995").trigger("obj6995_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6995) {
				console.warn("de-queueing event obj6995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6995_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_7090();
function runjs_7090() {
	window.obj6995_onTap_runningActionsCount = obj6995_onTap_runningActionsCount + 1;


	$("#obj7019").css("border-color", "#F8A03C"); $("#obj7019").css("border-width", "2px"); $("#obj7019").css("border-style", "solid"); $("#obj7019").css("border-radius", "15px"); $("#obj7019").css("-webkit-border-radius", "15px"); $("#obj7019").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24748();
function runjs_24748() {
	window.obj6995_onTap_runningActionsCount = obj6995_onTap_runningActionsCount + 1;


	$("#obj7019").css("background-color", "#F8A03C");
	
	setTimeout(function() {
		window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24934();
function runjs_24934() {
	window.obj6995_onTap_runningActionsCount = obj6995_onTap_runningActionsCount + 1;


	$("#obj6999").css("color", "white");
	
	setTimeout(function() {
		window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup3();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj7019 
(function () {
	window.obj6995_onTap_runningActionsCount = obj6995_onTap_runningActionsCount + 1;


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

	if ($("#obj7019").css('filter') == 'none')
$("#obj7019").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7019").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj6995_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6995_onTap_activeActionGroupIndex = -1;
		$("#obj6995").trigger("obj6995_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6995) {
				console.warn("de-queueing event obj6995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6995_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj6995 
hide_7092();
function hide_7092() {
	var selector = "#obj6995";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6995_onTap_runningActionsCount = obj6995_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7092(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj6995_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6995_onTap_activeActionGroupIndex = -1;
		$("#obj6995").trigger("obj6995_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6995) {
				console.warn("de-queueing event obj6995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6995_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4947 
incrementCounter_7094();
function incrementCounter_7094() {
	window.obj6995_onTap_runningActionsCount = obj6995_onTap_runningActionsCount + 1;


	var oldValue = obj4947_counterValue;
	obj4947_counterValue = obj4947_counterValue + 1;
	if (! obj4947_counterCanExceedTargetValue && obj4947_counterValue > obj4947_counterTargetValue) {
		obj4947_counterValue = obj4947_counterTargetValue;
	}

	if (oldValue != obj4947_counterValue) {
		$("#obj4947").trigger('SCEventCounterValueChange');
		$("#obj4947").trigger('SCEventCounterIncrease');
		if (obj4947_counterValue == obj4947_counterTargetValue)
			$("#obj4947").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj6995_onTap_runningActionsCount = window.obj6995_onTap_runningActionsCount - 1;

if (window.obj6995_onTap_runningActionsCount < 0) {
	window.obj6995_onTap_runningActionsCount = 0;
} else if (window.obj6995_onTap_runningActionsCount == 0) {
	obj6995_onTap_actionGroup5();
} }, 1);
}











};
obj6995_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6995_onTap_activeActionGroupIndex = -1;
		$("#obj6995").trigger("obj6995_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6995) {
				console.warn("de-queueing event obj6995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6995_onTap_activeActionGroupIndex = 5;
	











































};
obj7055_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7055_onTap_activeActionGroupIndex = -1;
		$("#obj7055").trigger("obj7055_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7055) {
				console.warn("de-queueing event obj7055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7055_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj7115 
incrementCounter_7172();
function incrementCounter_7172() {
	window.obj7055_onTap_runningActionsCount = obj7055_onTap_runningActionsCount + 1;


	var oldValue = obj7115_counterValue;
	obj7115_counterValue = obj7115_counterValue + 1;
	if (! obj7115_counterCanExceedTargetValue && obj7115_counterValue > obj7115_counterTargetValue) {
		obj7115_counterValue = obj7115_counterTargetValue;
	}

	if (oldValue != obj7115_counterValue) {
		$("#obj7115").trigger('SCEventCounterValueChange');
		$("#obj7115").trigger('SCEventCounterIncrease');
		if (obj7115_counterValue == obj7115_counterTargetValue)
			$("#obj7115").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup1();
} }, 1);
}











};
obj7055_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7055_onTap_activeActionGroupIndex = -1;
		$("#obj7055").trigger("obj7055_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7055) {
				console.warn("de-queueing event obj7055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7055_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7095();
function playAudioFile_7095() {
	window.obj7055_onTap_runningActionsCount = obj7055_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7095")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7095");
			$("#obj_audio_playSoundFile7095").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup2();
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
				window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7055_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7055_onTap_activeActionGroupIndex = -1;
		$("#obj7055").trigger("obj7055_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7055) {
				console.warn("de-queueing event obj7055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7055_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_7096();
function runjs_7096() {
	window.obj7055_onTap_runningActionsCount = obj7055_onTap_runningActionsCount + 1;


	$("#obj7071").css("border-color", "#F8A03C"); $("#obj7071").css("border-width", "2px"); $("#obj7071").css("border-style", "solid"); $("#obj7071").css("border-radius", "15px"); $("#obj7071").css("-webkit-border-radius", "15px"); $("#obj7071").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24749();
function runjs_24749() {
	window.obj7055_onTap_runningActionsCount = obj7055_onTap_runningActionsCount + 1;


	$("#obj7071").css("background-color", "#F8A03C");
	
	setTimeout(function() {
		window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24936();
function runjs_24936() {
	window.obj7055_onTap_runningActionsCount = obj7055_onTap_runningActionsCount + 1;


	$("#obj7067").css("color", "white");
	
	setTimeout(function() {
		window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup3();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj7071 
(function () {
	window.obj7055_onTap_runningActionsCount = obj7055_onTap_runningActionsCount + 1;


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

	if ($("#obj7071").css('filter') == 'none')
$("#obj7071").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7071").animate({ dropShadow: 'drop-shadow(4px 4px 2px #F8A03C)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7055_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7055_onTap_activeActionGroupIndex = -1;
		$("#obj7055").trigger("obj7055_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7055) {
				console.warn("de-queueing event obj7055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7055_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj7055 
hide_7098();
function hide_7098() {
	var selector = "#obj7055";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7055_onTap_runningActionsCount = obj7055_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7098(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7055_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7055_onTap_activeActionGroupIndex = -1;
		$("#obj7055").trigger("obj7055_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7055) {
				console.warn("de-queueing event obj7055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7055_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4947 
incrementCounter_7100();
function incrementCounter_7100() {
	window.obj7055_onTap_runningActionsCount = obj7055_onTap_runningActionsCount + 1;


	var oldValue = obj4947_counterValue;
	obj4947_counterValue = obj4947_counterValue + 1;
	if (! obj4947_counterCanExceedTargetValue && obj4947_counterValue > obj4947_counterTargetValue) {
		obj4947_counterValue = obj4947_counterTargetValue;
	}

	if (oldValue != obj4947_counterValue) {
		$("#obj4947").trigger('SCEventCounterValueChange');
		$("#obj4947").trigger('SCEventCounterIncrease');
		if (obj4947_counterValue == obj4947_counterTargetValue)
			$("#obj4947").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7055_onTap_runningActionsCount = window.obj7055_onTap_runningActionsCount - 1;

if (window.obj7055_onTap_runningActionsCount < 0) {
	window.obj7055_onTap_runningActionsCount = 0;
} else if (window.obj7055_onTap_runningActionsCount == 0) {
	obj7055_onTap_actionGroup5();
} }, 1);
}











};
obj7055_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7055_onTap_activeActionGroupIndex = -1;
		$("#obj7055").trigger("obj7055_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7055) {
				console.warn("de-queueing event obj7055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7055_onTap_activeActionGroupIndex = 5;
	











































};
obj7049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7049_onTap_activeActionGroupIndex = -1;
		$("#obj7049").trigger("obj7049_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7049) {
				console.warn("de-queueing event obj7049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7049_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj7115 
incrementCounter_7173();
function incrementCounter_7173() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	var oldValue = obj7115_counterValue;
	obj7115_counterValue = obj7115_counterValue + 1;
	if (! obj7115_counterCanExceedTargetValue && obj7115_counterValue > obj7115_counterTargetValue) {
		obj7115_counterValue = obj7115_counterTargetValue;
	}

	if (oldValue != obj7115_counterValue) {
		$("#obj7115").trigger('SCEventCounterValueChange');
		$("#obj7115").trigger('SCEventCounterIncrease');
		if (obj7115_counterValue == obj7115_counterTargetValue)
			$("#obj7115").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup1();
} }, 1);
}











};
obj7049_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7049_onTap_activeActionGroupIndex = -1;
		$("#obj7049").trigger("obj7049_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7049) {
				console.warn("de-queueing event obj7049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7049_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7107();
function playAudioFile_7107() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7107")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7107");
			$("#obj_audio_playSoundFile7107").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup2();
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
				window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7049_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7049_onTap_activeActionGroupIndex = -1;
		$("#obj7049").trigger("obj7049_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7049) {
				console.warn("de-queueing event obj7049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7049_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_7108();
function runjs_7108() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	$("#obj7069").css("border-color", "#2DB657"); $("#obj7069").css("border-width", "2px"); $("#obj7069").css("border-style", "solid"); $("#obj7069").css("border-radius", "15px"); $("#obj7069").css("-webkit-border-radius", "15px"); $("#obj7069").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24750();
function runjs_24750() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	$("#obj7069").css("background-color", "#2DB657");
	
	setTimeout(function() {
		window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_24935();
function runjs_24935() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	$("#obj7053").css("color", "white");
	
	setTimeout(function() {
		window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup3();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj7069 
(function () {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


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

	if ($("#obj7069").css('filter') == 'none')
$("#obj7069").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7069").animate({ dropShadow: 'drop-shadow(4px 4px 2px #2DB657)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7049_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7049_onTap_activeActionGroupIndex = -1;
		$("#obj7049").trigger("obj7049_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7049) {
				console.warn("de-queueing event obj7049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7049_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj7049 
hide_7110();
function hide_7110() {
	var selector = "#obj7049";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7110(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7049_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7049_onTap_activeActionGroupIndex = -1;
		$("#obj7049").trigger("obj7049_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7049) {
				console.warn("de-queueing event obj7049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7049_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj7049
(function(){
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	var selector = "#obj7049";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7049_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7049_onTap_activeActionGroupIndex = -1;
		$("#obj7049").trigger("obj7049_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7049) {
				console.warn("de-queueing event obj7049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7049_onTap_activeActionGroupIndex = 5;
	































//	action: increment counter
//	target: obj7219 
incrementCounter_7221();
function incrementCounter_7221() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	var oldValue = obj7219_counterValue;
	obj7219_counterValue = obj7219_counterValue + 1;
	if (! obj7219_counterCanExceedTargetValue && obj7219_counterValue > obj7219_counterTargetValue) {
		obj7219_counterValue = obj7219_counterTargetValue;
	}

	if (oldValue != obj7219_counterValue) {
		$("#obj7219").trigger('SCEventCounterValueChange');
		$("#obj7219").trigger('SCEventCounterIncrease');
		if (obj7219_counterValue == obj7219_counterTargetValue)
			$("#obj7219").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup6();
} }, 1);
}
//	action: increment counter
//	target: obj7085 
incrementCounter_7112();
function incrementCounter_7112() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	var oldValue = obj7085_counterValue;
	obj7085_counterValue = obj7085_counterValue + 1;
	if (! obj7085_counterCanExceedTargetValue && obj7085_counterValue > obj7085_counterTargetValue) {
		obj7085_counterValue = obj7085_counterTargetValue;
	}

	if (oldValue != obj7085_counterValue) {
		$("#obj7085").trigger('SCEventCounterValueChange');
		$("#obj7085").trigger('SCEventCounterIncrease');
		if (obj7085_counterValue == obj7085_counterTargetValue)
			$("#obj7085").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup6();
} }, 1);
}
//	action: increment counter
//	target: obj5417 
incrementCounter_7225();
function incrementCounter_7225() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	var oldValue = obj5417_counterValue;
	obj5417_counterValue = obj5417_counterValue + 1;
	if (! obj5417_counterCanExceedTargetValue && obj5417_counterValue > obj5417_counterTargetValue) {
		obj5417_counterValue = obj5417_counterTargetValue;
	}

	if (oldValue != obj5417_counterValue) {
		$("#obj5417").trigger('SCEventCounterValueChange');
		$("#obj5417").trigger('SCEventCounterIncrease');
		if (obj5417_counterValue == obj5417_counterTargetValue)
			$("#obj5417").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup6();
} }, 1);
}











};
obj7049_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7049_onTap_activeActionGroupIndex = -1;
		$("#obj7049").trigger("obj7049_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7049) {
				console.warn("de-queueing event obj7049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7049_onTap_activeActionGroupIndex = 6;
	































//	action: increment counter
//	target: obj4945 
incrementCounter_7113();
function incrementCounter_7113() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	var oldValue = obj4945_counterValue;
	obj4945_counterValue = obj4945_counterValue + 1;
	if (! obj4945_counterCanExceedTargetValue && obj4945_counterValue > obj4945_counterTargetValue) {
		obj4945_counterValue = obj4945_counterTargetValue;
	}

	if (oldValue != obj4945_counterValue) {
		$("#obj4945").trigger('SCEventCounterValueChange');
		$("#obj4945").trigger('SCEventCounterIncrease');
		if (obj4945_counterValue == obj4945_counterTargetValue)
			$("#obj4945").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup7();
} }, 1);
}











};
obj7049_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7049_onTap_activeActionGroupIndex = -1;
		$("#obj7049").trigger("obj7049_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7049) {
				console.warn("de-queueing event obj7049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7049_onTap_activeActionGroupIndex = 7;
	































//	action: increment counter
//	target: obj4947 
incrementCounter_7114();
function incrementCounter_7114() {
	window.obj7049_onTap_runningActionsCount = obj7049_onTap_runningActionsCount + 1;


	var oldValue = obj4947_counterValue;
	obj4947_counterValue = obj4947_counterValue + 1;
	if (! obj4947_counterCanExceedTargetValue && obj4947_counterValue > obj4947_counterTargetValue) {
		obj4947_counterValue = obj4947_counterTargetValue;
	}

	if (oldValue != obj4947_counterValue) {
		$("#obj4947").trigger('SCEventCounterValueChange');
		$("#obj4947").trigger('SCEventCounterIncrease');
		if (obj4947_counterValue == obj4947_counterTargetValue)
			$("#obj4947").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7049_onTap_runningActionsCount = window.obj7049_onTap_runningActionsCount - 1;

if (window.obj7049_onTap_runningActionsCount < 0) {
	window.obj7049_onTap_runningActionsCount = 0;
} else if (window.obj7049_onTap_runningActionsCount == 0) {
	obj7049_onTap_actionGroup8();
} }, 1);
}











};
obj7049_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7049_onTap_activeActionGroupIndex = -1;
		$("#obj7049").trigger("obj7049_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7049) {
				console.warn("de-queueing event obj7049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7049_onTap_activeActionGroupIndex = 8;
	











































};
obj7085_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7085_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7085").trigger("obj7085_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7085) {
				console.warn("de-queueing event obj7085." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7085").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7085_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_7087();
function switchText_7087() {
	window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount = obj7085_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/3</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4670_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4670_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj4670").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4670_content");
			setTimeout(function () {
				window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7085_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj4670 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj7085_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7085_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj7085_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7085_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7085").trigger("obj7085_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7085) {
				console.warn("de-queueing event obj7085." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7085").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7085_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj7115_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7115_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7115").trigger("obj7115_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7115) {
				console.warn("de-queueing event obj7115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7115_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj6955
(function(){
	window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount = obj7115_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj6955";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7115_SCEventCounterReachedTargetValue_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7115_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7115_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7115_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7115").trigger("obj7115_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7115) {
				console.warn("de-queueing event obj7115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7115_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj7115 
decrementCounter_7119();
function decrementCounter_7119() {
	window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount = obj7115_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj7115_counterValue;
	obj7115_counterValue = obj7115_counterValue - 1;
	if (obj7115_counterValue < 0) {
		obj7115_counterValue = 0;
	}

	if (oldValue != obj7115_counterValue) {
		$("#obj7115").trigger('SCEventCounterValueChange');
		$("#obj7115").trigger('SCEventCounterDecrease');
		if (obj7115_counterValue == obj7115_counterTargetValue)
			$("#obj7115").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj7115_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7115_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj7115_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7115_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7115").trigger("obj7115_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7115) {
				console.warn("de-queueing event obj7115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7115_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj7219_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7219_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7219").trigger("obj7219_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7219) {
				console.warn("de-queueing event obj7219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7219_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_7224();
function switchText_7224() {
	window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount = obj7219_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/3</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4670_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4670_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj4670").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4670_content");
			setTimeout(function () {
				window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7219_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj4670 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj7219_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7219_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj7219_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7219_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7219").trigger("obj7219_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7219) {
				console.warn("de-queueing event obj7219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7219_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj7419_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7419_onTap_activeActionGroupIndex = -1;
		$("#obj7419").trigger("obj7419_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7419) {
				console.warn("de-queueing event obj7419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7419_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7421();
function goToPage_7421() {
	window.obj7419_onTap_runningActionsCount = obj7419_onTap_runningActionsCount + 1;

	$("#anchor926")[0].click();
	window.obj7419_onTap_runningActionsCount = window.obj7419_onTap_runningActionsCount - 1;

if (window.obj7419_onTap_runningActionsCount < 0) {
	window.obj7419_onTap_runningActionsCount = 0;
} else if (window.obj7419_onTap_runningActionsCount == 0) {
	obj7419_onTap_actionGroup1();
}
}










































};
obj7419_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7419_onTap_activeActionGroupIndex = -1;
		$("#obj7419").trigger("obj7419_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7419) {
				console.warn("de-queueing event obj7419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7419_onTap_activeActionGroupIndex = 1;
	











































};
obj24735_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24735_onTap_activeActionGroupIndex = -1;
		$("#obj24735").trigger("obj24735_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24735) {
				console.warn("de-queueing event obj24735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24735_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24725
(function(){
	window.obj24735_onTap_runningActionsCount = obj24735_onTap_runningActionsCount + 1;


	var selector = "#obj24725";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24735_onTap_runningActionsCount = window.obj24735_onTap_runningActionsCount - 1;

if (window.obj24735_onTap_runningActionsCount < 0) {
	window.obj24735_onTap_runningActionsCount = 0;
} else if (window.obj24735_onTap_runningActionsCount == 0) {
	obj24735_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24735_onTap_runningActionsCount = window.obj24735_onTap_runningActionsCount - 1;

if (window.obj24735_onTap_runningActionsCount < 0) {
	window.obj24735_onTap_runningActionsCount = 0;
} else if (window.obj24735_onTap_runningActionsCount == 0) {
	obj24735_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24735_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24735_onTap_activeActionGroupIndex = -1;
		$("#obj24735").trigger("obj24735_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24735) {
				console.warn("de-queueing event obj24735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24735_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj24733
(function(){
	window.obj24735_onTap_runningActionsCount = obj24735_onTap_runningActionsCount + 1;


	var selector = "#obj24733";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24735_onTap_runningActionsCount = window.obj24735_onTap_runningActionsCount - 1;

if (window.obj24735_onTap_runningActionsCount < 0) {
	window.obj24735_onTap_runningActionsCount = 0;
} else if (window.obj24735_onTap_runningActionsCount == 0) {
	obj24735_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24735_onTap_runningActionsCount = window.obj24735_onTap_runningActionsCount - 1;

if (window.obj24735_onTap_runningActionsCount < 0) {
	window.obj24735_onTap_runningActionsCount = 0;
} else if (window.obj24735_onTap_runningActionsCount == 0) {
	obj24735_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24731
(function(){
	window.obj24735_onTap_runningActionsCount = obj24735_onTap_runningActionsCount + 1;


	var selector = "#obj24731";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24735_onTap_runningActionsCount = window.obj24735_onTap_runningActionsCount - 1;

if (window.obj24735_onTap_runningActionsCount < 0) {
	window.obj24735_onTap_runningActionsCount = 0;
} else if (window.obj24735_onTap_runningActionsCount == 0) {
	obj24735_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24735_onTap_runningActionsCount = window.obj24735_onTap_runningActionsCount - 1;

if (window.obj24735_onTap_runningActionsCount < 0) {
	window.obj24735_onTap_runningActionsCount = 0;
} else if (window.obj24735_onTap_runningActionsCount == 0) {
	obj24735_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24735_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24735_onTap_activeActionGroupIndex = -1;
		$("#obj24735").trigger("obj24735_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24735) {
				console.warn("de-queueing event obj24735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24735_onTap_activeActionGroupIndex = 2;
	











































};
obj24725_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24725_onTap_activeActionGroupIndex = -1;
		$("#obj24725").trigger("obj24725_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24725) {
				console.warn("de-queueing event obj24725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24725_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24725 
hide_24728();
function hide_24728() {
	var selector = "#obj24725";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24725_onTap_runningActionsCount = obj24725_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24725_onTap_runningActionsCount = window.obj24725_onTap_runningActionsCount - 1;

if (window.obj24725_onTap_runningActionsCount < 0) {
	window.obj24725_onTap_runningActionsCount = 0;
} else if (window.obj24725_onTap_runningActionsCount == 0) {
	obj24725_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24728(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24725_onTap_runningActionsCount = window.obj24725_onTap_runningActionsCount - 1;

if (window.obj24725_onTap_runningActionsCount < 0) {
	window.obj24725_onTap_runningActionsCount = 0;
} else if (window.obj24725_onTap_runningActionsCount == 0) {
	obj24725_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24735
(function(){
	window.obj24725_onTap_runningActionsCount = obj24725_onTap_runningActionsCount + 1;


	var selector = "#obj24735";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj24725_onTap_runningActionsCount = window.obj24725_onTap_runningActionsCount - 1;

if (window.obj24725_onTap_runningActionsCount < 0) {
	window.obj24725_onTap_runningActionsCount = 0;
} else if (window.obj24725_onTap_runningActionsCount == 0) {
	obj24725_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj24725_onTap_runningActionsCount = window.obj24725_onTap_runningActionsCount - 1;

if (window.obj24725_onTap_runningActionsCount < 0) {
	window.obj24725_onTap_runningActionsCount = 0;
} else if (window.obj24725_onTap_runningActionsCount == 0) {
	obj24725_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24725_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24725_onTap_activeActionGroupIndex = -1;
		$("#obj24725").trigger("obj24725_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24725) {
				console.warn("de-queueing event obj24725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24725_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24731 
hide_24729();
function hide_24729() {
	var selector = "#obj24731";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24725_onTap_runningActionsCount = obj24725_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24725_onTap_runningActionsCount = window.obj24725_onTap_runningActionsCount - 1;

if (window.obj24725_onTap_runningActionsCount < 0) {
	window.obj24725_onTap_runningActionsCount = 0;
} else if (window.obj24725_onTap_runningActionsCount == 0) {
	obj24725_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24729(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24725_onTap_runningActionsCount = window.obj24725_onTap_runningActionsCount - 1;

if (window.obj24725_onTap_runningActionsCount < 0) {
	window.obj24725_onTap_runningActionsCount = 0;
} else if (window.obj24725_onTap_runningActionsCount == 0) {
	obj24725_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24733 
hide_24730();
function hide_24730() {
	var selector = "#obj24733";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24725_onTap_runningActionsCount = obj24725_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24725_onTap_runningActionsCount = window.obj24725_onTap_runningActionsCount - 1;

if (window.obj24725_onTap_runningActionsCount < 0) {
	window.obj24725_onTap_runningActionsCount = 0;
} else if (window.obj24725_onTap_runningActionsCount == 0) {
	obj24725_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24730(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24725_onTap_runningActionsCount = window.obj24725_onTap_runningActionsCount - 1;

if (window.obj24725_onTap_runningActionsCount < 0) {
	window.obj24725_onTap_runningActionsCount = 0;
} else if (window.obj24725_onTap_runningActionsCount == 0) {
	obj24725_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24725_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24725_onTap_activeActionGroupIndex = -1;
		$("#obj24725").trigger("obj24725_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24725) {
				console.warn("de-queueing event obj24725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24725_onTap_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






















































































































































































































/*
 *
 *   obj4694: Event Touch Down
 *
 */

$("#obj4694").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4694_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4694_onTap is still running");
	return;
}
var obj4694_onTap_runningActionsCount = 0;
var obj4694_onTap_loopCount = 0;
obj4694_onTap_actionGroup0();
});














































/*
 *
 *   obj4945: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj4945").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4945_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4945_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj4945_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4945_SCEventCounterReachedTargetValue_loopCount = 0;
obj4945_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj4947: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj4947").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4947_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4947_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj4947_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4947_SCEventCounterReachedTargetValue_loopCount = 0;
obj4947_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj5417: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj5417").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5417_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5417_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj5417_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5417_SCEventCounterReachedTargetValue_loopCount = 0;
obj5417_SCEventCounterReachedTargetValue_actionGroup0();
});




























/*
 *
 *   obj6914: Event Touch Down
 *
 */

$("#obj6914").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6914_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6914_onTap is still running");
	return;
}
var obj6914_onTap_runningActionsCount = 0;
var obj6914_onTap_loopCount = 0;
obj6914_onTap_actionGroup0();
});





































/*
 *
 *   obj6922: Event Touch Down
 *
 */

$("#obj6922").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6922_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6922_onTap is still running");
	return;
}
var obj6922_onTap_runningActionsCount = 0;
var obj6922_onTap_loopCount = 0;
obj6922_onTap_actionGroup0();
});





































/*
 *
 *   obj6930: Event Touch Down
 *
 */

$("#obj6930").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6930_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6930_onTap is still running");
	return;
}
var obj6930_onTap_runningActionsCount = 0;
var obj6930_onTap_loopCount = 0;
obj6930_onTap_actionGroup0();
});



























/*
 *
 *   obj6961: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj6961").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6961_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6961_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj6961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6961_SCEventCounterReachedTargetValue_loopCount = 0;
obj6961_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj7001: Event Touch Down
 *
 */

$("#obj7001").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7001_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7001_onTap is still running");
	return;
}
var obj7001_onTap_runningActionsCount = 0;
var obj7001_onTap_loopCount = 0;
obj7001_onTap_actionGroup0();
});





































/*
 *
 *   obj6995: Event Touch Down
 *
 */

$("#obj6995").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6995_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6995_onTap is still running");
	return;
}
var obj6995_onTap_runningActionsCount = 0;
var obj6995_onTap_loopCount = 0;
obj6995_onTap_actionGroup0();
});






























































































/*
 *
 *   obj7055: Event Touch Down
 *
 */

$("#obj7055").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7055_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7055_onTap is still running");
	return;
}
var obj7055_onTap_runningActionsCount = 0;
var obj7055_onTap_loopCount = 0;
obj7055_onTap_actionGroup0();
});


















/*
 *
 *   obj7049: Event Touch Down
 *
 */

$("#obj7049").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7049_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7049_onTap is still running");
	return;
}
var obj7049_onTap_runningActionsCount = 0;
var obj7049_onTap_loopCount = 0;
obj7049_onTap_actionGroup0();
});



























/*
 *
 *   obj7085: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj7085").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj7085_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7085_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj7085_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7085_SCEventCounterReachedTargetValue_loopCount = 0;
obj7085_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj7115: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj7115").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj7115_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7115_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj7115_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7115_SCEventCounterReachedTargetValue_loopCount = 0;
obj7115_SCEventCounterReachedTargetValue_actionGroup0();
});





































/*
 *
 *   obj7219: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj7219").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj7219_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7219_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj7219_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7219_SCEventCounterReachedTargetValue_loopCount = 0;
obj7219_SCEventCounterReachedTargetValue_actionGroup0();
});















































/*
 *
 *   obj7419: Event Touch Down
 *
 */

$("#obj7419").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7419_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7419_onTap is still running");
	return;
}
var obj7419_onTap_runningActionsCount = 0;
var obj7419_onTap_loopCount = 0;
obj7419_onTap_actionGroup0();
});
























































/*
 *
 *   obj24735: Event Touch Down
 *
 */

$("#obj24735").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24735_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24735_onTap is still running");
	return;
}
var obj24735_onTap_runningActionsCount = 0;
var obj24735_onTap_loopCount = 0;
obj24735_onTap_actionGroup0();
});
























































/*
 *
 *   obj24725: Event Touch Down
 *
 */

$("#obj24725").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24725_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24725_onTap is still running");
	return;
}
var obj24725_onTap_runningActionsCount = 0;
var obj24725_onTap_loopCount = 0;
obj24725_onTap_actionGroup0();
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
	
$("#obj7449").trigger('SCEventShow');
$("#obj7429").trigger('SCEventShow');
$("#obj4613").trigger('SCEventShow');
$("#obj4615").trigger('SCEventShow');
$("#obj6942").trigger('SCEventShow');
$("#obj6944").trigger('SCEventShow');
$("#obj6946").trigger('SCEventShow');
$("#obj6948").trigger('SCEventShow');
$("#obj4632").trigger('SCEventShow');
$("#obj4672").trigger('SCEventShow');
$("#obj4670").trigger('SCEventShow');
$("#obj4694").trigger('SCEventShow');
$("#obj6918").trigger('SCEventShow');
$("#obj6914").trigger('SCEventShow');
$("#obj6926").trigger('SCEventShow');
$("#obj6922").trigger('SCEventShow');
$("#obj6934").trigger('SCEventShow');
$("#obj6930").trigger('SCEventShow');
$("#obj7424").trigger('SCEventShow');
$("#obj7422").trigger('SCEventShow');
$("#obj7419").trigger('SCEventShow');
$("#obj7417").trigger('SCEventShow');
$("#obj7415").trigger('SCEventShow');
$("#obj24725").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});