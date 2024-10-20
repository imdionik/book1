pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 7475;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
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
var obj7478_onTap_activeActionGroupIndex = -1;
var obj7478_onTap_runningActionsCount = 0;
var obj7478_onTap_loopCount = 0;
var obj7503_onTap_activeActionGroupIndex = -1;
var obj7503_onTap_runningActionsCount = 0;
var obj7503_onTap_loopCount = 0;
var obj7510_onTap_activeActionGroupIndex = -1;
var obj7510_onTap_runningActionsCount = 0;
var obj7510_onTap_loopCount = 0;
var obj7525_onTap_activeActionGroupIndex = -1;
var obj7525_onTap_runningActionsCount = 0;
var obj7525_onTap_loopCount = 0;

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
		
obj7478_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7478_onTap_activeActionGroupIndex = -1;
		$("#obj7478").trigger("obj7478_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7478) {
				console.warn("de-queueing event obj7478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7478_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10495();
function goToPage_10495() {
	window.obj7478_onTap_runningActionsCount = obj7478_onTap_runningActionsCount + 1;

	$("#anchor191")[0].click();
	window.obj7478_onTap_runningActionsCount = window.obj7478_onTap_runningActionsCount - 1;

if (window.obj7478_onTap_runningActionsCount < 0) {
	window.obj7478_onTap_runningActionsCount = 0;
} else if (window.obj7478_onTap_runningActionsCount == 0) {
	obj7478_onTap_actionGroup1();
}
}










































};
obj7478_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7478_onTap_activeActionGroupIndex = -1;
		$("#obj7478").trigger("obj7478_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7478) {
				console.warn("de-queueing event obj7478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7478_onTap_activeActionGroupIndex = 1;
	











































};
obj7503_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7503_onTap_activeActionGroupIndex = -1;
		$("#obj7503").trigger("obj7503_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7503) {
				console.warn("de-queueing event obj7503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7503_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7508
(function(){
	window.obj7503_onTap_runningActionsCount = obj7503_onTap_runningActionsCount + 1;


	var selector = "#obj7508";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj7503_onTap_runningActionsCount = window.obj7503_onTap_runningActionsCount - 1;

if (window.obj7503_onTap_runningActionsCount < 0) {
	window.obj7503_onTap_runningActionsCount = 0;
} else if (window.obj7503_onTap_runningActionsCount == 0) {
	obj7503_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj7503_onTap_runningActionsCount = window.obj7503_onTap_runningActionsCount - 1;

if (window.obj7503_onTap_runningActionsCount < 0) {
	window.obj7503_onTap_runningActionsCount = 0;
} else if (window.obj7503_onTap_runningActionsCount == 0) {
	obj7503_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7503_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7503_onTap_activeActionGroupIndex = -1;
		$("#obj7503").trigger("obj7503_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7503) {
				console.warn("de-queueing event obj7503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7503_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7505();
function playAudioFile_7505() {
	window.obj7503_onTap_runningActionsCount = obj7503_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7505")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7505");
			$("#obj_audio_playSoundFile7505").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7503_onTap_runningActionsCount = window.obj7503_onTap_runningActionsCount - 1;

if (window.obj7503_onTap_runningActionsCount < 0) {
	window.obj7503_onTap_runningActionsCount = 0;
} else if (window.obj7503_onTap_runningActionsCount == 0) {
	obj7503_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7503_onTap_runningActionsCount = window.obj7503_onTap_runningActionsCount - 1;

if (window.obj7503_onTap_runningActionsCount < 0) {
	window.obj7503_onTap_runningActionsCount = 0;
} else if (window.obj7503_onTap_runningActionsCount == 0) {
	obj7503_onTap_actionGroup2();
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
				window.obj7503_onTap_runningActionsCount = window.obj7503_onTap_runningActionsCount - 1;

if (window.obj7503_onTap_runningActionsCount < 0) {
	window.obj7503_onTap_runningActionsCount = 0;
} else if (window.obj7503_onTap_runningActionsCount == 0) {
	obj7503_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7503_onTap_runningActionsCount = window.obj7503_onTap_runningActionsCount - 1;

if (window.obj7503_onTap_runningActionsCount < 0) {
	window.obj7503_onTap_runningActionsCount = 0;
} else if (window.obj7503_onTap_runningActionsCount == 0) {
	obj7503_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7503_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7503_onTap_activeActionGroupIndex = -1;
		$("#obj7503").trigger("obj7503_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7503) {
				console.warn("de-queueing event obj7503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7503_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj7491 
(function () {
	window.obj7503_onTap_runningActionsCount = obj7503_onTap_runningActionsCount + 1;


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

	if ($("#obj7491").css('filter') == 'none')
$("#obj7491").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7491").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7503_onTap_runningActionsCount = window.obj7503_onTap_runningActionsCount - 1;

if (window.obj7503_onTap_runningActionsCount < 0) {
	window.obj7503_onTap_runningActionsCount = 0;
} else if (window.obj7503_onTap_runningActionsCount == 0) {
	obj7503_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7503_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7503_onTap_activeActionGroupIndex = -1;
		$("#obj7503").trigger("obj7503_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7503) {
				console.warn("de-queueing event obj7503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7503_onTap_activeActionGroupIndex = 3;
	
//	action: goToPage
goToPage_23911();
function goToPage_23911() {
	window.obj7503_onTap_runningActionsCount = obj7503_onTap_runningActionsCount + 1;

	$("#anchor193")[0].click();
	window.obj7503_onTap_runningActionsCount = window.obj7503_onTap_runningActionsCount - 1;

if (window.obj7503_onTap_runningActionsCount < 0) {
	window.obj7503_onTap_runningActionsCount = 0;
} else if (window.obj7503_onTap_runningActionsCount == 0) {
	obj7503_onTap_actionGroup4();
}
}










































};
obj7503_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7503_onTap_activeActionGroupIndex = -1;
		$("#obj7503").trigger("obj7503_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7503) {
				console.warn("de-queueing event obj7503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7503_onTap_activeActionGroupIndex = 4;
	











































};
obj7510_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7510_onTap_activeActionGroupIndex = -1;
		$("#obj7510").trigger("obj7510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7510) {
				console.warn("de-queueing event obj7510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7510_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7508
(function(){
	window.obj7510_onTap_runningActionsCount = obj7510_onTap_runningActionsCount + 1;


	var selector = "#obj7508";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj7510_onTap_runningActionsCount = window.obj7510_onTap_runningActionsCount - 1;

if (window.obj7510_onTap_runningActionsCount < 0) {
	window.obj7510_onTap_runningActionsCount = 0;
} else if (window.obj7510_onTap_runningActionsCount == 0) {
	obj7510_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj7510_onTap_runningActionsCount = window.obj7510_onTap_runningActionsCount - 1;

if (window.obj7510_onTap_runningActionsCount < 0) {
	window.obj7510_onTap_runningActionsCount = 0;
} else if (window.obj7510_onTap_runningActionsCount == 0) {
	obj7510_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7510_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7510_onTap_activeActionGroupIndex = -1;
		$("#obj7510").trigger("obj7510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7510) {
				console.warn("de-queueing event obj7510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7510_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7513();
function playAudioFile_7513() {
	window.obj7510_onTap_runningActionsCount = obj7510_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7513")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7513");
			$("#obj_audio_playSoundFile7513").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7510_onTap_runningActionsCount = window.obj7510_onTap_runningActionsCount - 1;

if (window.obj7510_onTap_runningActionsCount < 0) {
	window.obj7510_onTap_runningActionsCount = 0;
} else if (window.obj7510_onTap_runningActionsCount == 0) {
	obj7510_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7510_onTap_runningActionsCount = window.obj7510_onTap_runningActionsCount - 1;

if (window.obj7510_onTap_runningActionsCount < 0) {
	window.obj7510_onTap_runningActionsCount = 0;
} else if (window.obj7510_onTap_runningActionsCount == 0) {
	obj7510_onTap_actionGroup2();
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
				window.obj7510_onTap_runningActionsCount = window.obj7510_onTap_runningActionsCount - 1;

if (window.obj7510_onTap_runningActionsCount < 0) {
	window.obj7510_onTap_runningActionsCount = 0;
} else if (window.obj7510_onTap_runningActionsCount == 0) {
	obj7510_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7510_onTap_runningActionsCount = window.obj7510_onTap_runningActionsCount - 1;

if (window.obj7510_onTap_runningActionsCount < 0) {
	window.obj7510_onTap_runningActionsCount = 0;
} else if (window.obj7510_onTap_runningActionsCount == 0) {
	obj7510_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7510_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7510_onTap_activeActionGroupIndex = -1;
		$("#obj7510").trigger("obj7510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7510) {
				console.warn("de-queueing event obj7510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7510_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj7521 
(function () {
	window.obj7510_onTap_runningActionsCount = obj7510_onTap_runningActionsCount + 1;


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

	if ($("#obj7521").css('filter') == 'none')
$("#obj7521").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7521").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7510_onTap_runningActionsCount = window.obj7510_onTap_runningActionsCount - 1;

if (window.obj7510_onTap_runningActionsCount < 0) {
	window.obj7510_onTap_runningActionsCount = 0;
} else if (window.obj7510_onTap_runningActionsCount == 0) {
	obj7510_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7510_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7510_onTap_activeActionGroupIndex = -1;
		$("#obj7510").trigger("obj7510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7510) {
				console.warn("de-queueing event obj7510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7510_onTap_activeActionGroupIndex = 3;
	
//	action: goToPage
goToPage_24258();
function goToPage_24258() {
	window.obj7510_onTap_runningActionsCount = obj7510_onTap_runningActionsCount + 1;

	$("#anchor195")[0].click();
	window.obj7510_onTap_runningActionsCount = window.obj7510_onTap_runningActionsCount - 1;

if (window.obj7510_onTap_runningActionsCount < 0) {
	window.obj7510_onTap_runningActionsCount = 0;
} else if (window.obj7510_onTap_runningActionsCount == 0) {
	obj7510_onTap_actionGroup4();
}
}










































};
obj7510_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7510_onTap_activeActionGroupIndex = -1;
		$("#obj7510").trigger("obj7510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7510) {
				console.warn("de-queueing event obj7510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7510_onTap_activeActionGroupIndex = 4;
	











































};
obj7525_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7508
(function(){
	window.obj7525_onTap_runningActionsCount = obj7525_onTap_runningActionsCount + 1;


	var selector = "#obj7508";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7525_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7528();
function playAudioFile_7528() {
	window.obj7525_onTap_runningActionsCount = obj7525_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7528")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7528");
			$("#obj_audio_playSoundFile7528").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup2();
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
				window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7525_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj7536 
(function () {
	window.obj7525_onTap_runningActionsCount = obj7525_onTap_runningActionsCount + 1;


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

	if ($("#obj7536").css('filter') == 'none')
$("#obj7536").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7536").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7525_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_7686();
function wait_7686() {
	window.obj7525_onTap_runningActionsCount = obj7525_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj7525_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_7684();
function goToPage_7684() {
	window.obj7525_onTap_runningActionsCount = obj7525_onTap_runningActionsCount + 1;

	$("#anchor197")[0].click();
	window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup5();
}
}










































};
obj7525_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 5;
	
//	action: goToPage
goToPage_24259();
function goToPage_24259() {
	window.obj7525_onTap_runningActionsCount = obj7525_onTap_runningActionsCount + 1;

	$("#anchor198")[0].click();
	window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;

if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup6();
}
}










































};
obj7525_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 6;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj7478: Event Touch Down
 *
 */

$("#obj7478").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7478_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7478_onTap is still running");
	return;
}
var obj7478_onTap_runningActionsCount = 0;
var obj7478_onTap_loopCount = 0;
obj7478_onTap_actionGroup0();
});























































































































































/*
 *
 *   obj7503: Event Touch Down
 *
 */

$("#obj7503").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7503_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7503_onTap is still running");
	return;
}
var obj7503_onTap_runningActionsCount = 0;
var obj7503_onTap_loopCount = 0;
obj7503_onTap_actionGroup0();
});






























































































/*
 *
 *   obj7510: Event Touch Down
 *
 */

$("#obj7510").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7510_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7510_onTap is still running");
	return;
}
var obj7510_onTap_runningActionsCount = 0;
var obj7510_onTap_loopCount = 0;
obj7510_onTap_actionGroup0();
});






























































































/*
 *
 *   obj7525: Event Touch Down
 *
 */

$("#obj7525").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7525_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7525_onTap is still running");
	return;
}
var obj7525_onTap_runningActionsCount = 0;
var obj7525_onTap_loopCount = 0;
obj7525_onTap_actionGroup0();
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
	
$("#obj7476").trigger('SCEventShow');
$("#obj7478").trigger('SCEventShow');
$("#obj7484").trigger('SCEventShow');
$("#obj7487").trigger('SCEventShow');
$("#obj7489").trigger('SCEventShow');
$("#obj7491").trigger('SCEventShow');
$("#obj7494").trigger('SCEventShow');
$("#obj7496").trigger('SCEventShow');
$("#obj7501").trigger('SCEventShow');
$("#obj7503").trigger('SCEventShow');
$("#obj7521").trigger('SCEventShow');
$("#obj7519").trigger('SCEventShow');
$("#obj7517").trigger('SCEventShow');
$("#obj7515").trigger('SCEventShow');
$("#obj7510").trigger('SCEventShow');
$("#obj7536").trigger('SCEventShow');
$("#obj7534").trigger('SCEventShow');
$("#obj7532").trigger('SCEventShow');
$("#obj7530").trigger('SCEventShow');
$("#obj7525").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});