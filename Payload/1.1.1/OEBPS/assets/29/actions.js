pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 23688;
pubcoder.page.title = pubcoder.page.title || "29";
pubcoder.page.number = pubcoder.page.number || 29;
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
var obj23697_onTap_activeActionGroupIndex = -1;
var obj23697_onTap_runningActionsCount = 0;
var obj23697_onTap_loopCount = 0;
var obj23718_onTap_activeActionGroupIndex = -1;
var obj23718_onTap_runningActionsCount = 0;
var obj23718_onTap_loopCount = 0;
var obj23729_onTap_activeActionGroupIndex = -1;
var obj23729_onTap_runningActionsCount = 0;
var obj23729_onTap_loopCount = 0;
var obj23740_onTap_activeActionGroupIndex = -1;
var obj23740_onTap_runningActionsCount = 0;
var obj23740_onTap_loopCount = 0;
var obj23751_onTap_activeActionGroupIndex = -1;
var obj23751_onTap_runningActionsCount = 0;
var obj23751_onTap_loopCount = 0;
var obj23762_onTap_activeActionGroupIndex = -1;
var obj23762_onTap_runningActionsCount = 0;
var obj23762_onTap_loopCount = 0;
var obj23773_onTap_activeActionGroupIndex = -1;
var obj23773_onTap_runningActionsCount = 0;
var obj23773_onTap_loopCount = 0;

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
		
obj23697_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23697_onTap_activeActionGroupIndex = -1;
		$("#obj23697").trigger("obj23697_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23697) {
				console.warn("de-queueing event obj23697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23697_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_23699();
function goToPage_23699() {
	window.obj23697_onTap_runningActionsCount = obj23697_onTap_runningActionsCount + 1;

	$("#anchor422")[0].click();
	window.obj23697_onTap_runningActionsCount = window.obj23697_onTap_runningActionsCount - 1;

if (window.obj23697_onTap_runningActionsCount < 0) {
	window.obj23697_onTap_runningActionsCount = 0;
} else if (window.obj23697_onTap_runningActionsCount == 0) {
	obj23697_onTap_actionGroup1();
}
}










































};
obj23697_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23697_onTap_activeActionGroupIndex = -1;
		$("#obj23697").trigger("obj23697_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23697) {
				console.warn("de-queueing event obj23697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23697_onTap_activeActionGroupIndex = 1;
	











































};
obj23718_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23718_onTap_activeActionGroupIndex = -1;
		$("#obj23718").trigger("obj23718_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23718) {
				console.warn("de-queueing event obj23718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23718_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23780
(function(){
	window.obj23718_onTap_runningActionsCount = obj23718_onTap_runningActionsCount + 1;


	var selector = "#obj23780";
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
					window.obj23718_onTap_runningActionsCount = window.obj23718_onTap_runningActionsCount - 1;

if (window.obj23718_onTap_runningActionsCount < 0) {
	window.obj23718_onTap_runningActionsCount = 0;
} else if (window.obj23718_onTap_runningActionsCount == 0) {
	obj23718_onTap_actionGroup1();
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
				window.obj23718_onTap_runningActionsCount = window.obj23718_onTap_runningActionsCount - 1;

if (window.obj23718_onTap_runningActionsCount < 0) {
	window.obj23718_onTap_runningActionsCount = 0;
} else if (window.obj23718_onTap_runningActionsCount == 0) {
	obj23718_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23718_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23718_onTap_activeActionGroupIndex = -1;
		$("#obj23718").trigger("obj23718_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23718) {
				console.warn("de-queueing event obj23718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23718_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23721();
function playAudioFile_23721() {
	window.obj23718_onTap_runningActionsCount = obj23718_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23721")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23721");
			$("#obj_audio_playSoundFile23721").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23718_onTap_runningActionsCount = window.obj23718_onTap_runningActionsCount - 1;

if (window.obj23718_onTap_runningActionsCount < 0) {
	window.obj23718_onTap_runningActionsCount = 0;
} else if (window.obj23718_onTap_runningActionsCount == 0) {
	obj23718_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23718_onTap_runningActionsCount = window.obj23718_onTap_runningActionsCount - 1;

if (window.obj23718_onTap_runningActionsCount < 0) {
	window.obj23718_onTap_runningActionsCount = 0;
} else if (window.obj23718_onTap_runningActionsCount == 0) {
	obj23718_onTap_actionGroup2();
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
				window.obj23718_onTap_runningActionsCount = window.obj23718_onTap_runningActionsCount - 1;

if (window.obj23718_onTap_runningActionsCount < 0) {
	window.obj23718_onTap_runningActionsCount = 0;
} else if (window.obj23718_onTap_runningActionsCount == 0) {
	obj23718_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23718_onTap_runningActionsCount = window.obj23718_onTap_runningActionsCount - 1;

if (window.obj23718_onTap_runningActionsCount < 0) {
	window.obj23718_onTap_runningActionsCount = 0;
} else if (window.obj23718_onTap_runningActionsCount == 0) {
	obj23718_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23718_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23718_onTap_activeActionGroupIndex = -1;
		$("#obj23718").trigger("obj23718_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23718) {
				console.warn("de-queueing event obj23718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23718_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj23714 
(function () {
	window.obj23718_onTap_runningActionsCount = obj23718_onTap_runningActionsCount + 1;


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

	if ($("#obj23714").css('filter') == 'none')
$("#obj23714").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj23714").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj23718_onTap_runningActionsCount = window.obj23718_onTap_runningActionsCount - 1;

if (window.obj23718_onTap_runningActionsCount < 0) {
	window.obj23718_onTap_runningActionsCount = 0;
} else if (window.obj23718_onTap_runningActionsCount == 0) {
	obj23718_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj23718_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23718_onTap_activeActionGroupIndex = -1;
		$("#obj23718").trigger("obj23718_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23718) {
				console.warn("de-queueing event obj23718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23718_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_23723();
function wait_23723() {
	window.obj23718_onTap_runningActionsCount = obj23718_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj23718_onTap_runningActionsCount = window.obj23718_onTap_runningActionsCount - 1;

if (window.obj23718_onTap_runningActionsCount < 0) {
	window.obj23718_onTap_runningActionsCount = 0;
} else if (window.obj23718_onTap_runningActionsCount == 0) {
	obj23718_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj23718_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23718_onTap_activeActionGroupIndex = -1;
		$("#obj23718").trigger("obj23718_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23718) {
				console.warn("de-queueing event obj23718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23718_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_23724();
function goToPage_23724() {
	window.obj23718_onTap_runningActionsCount = obj23718_onTap_runningActionsCount + 1;

	$("#anchor424")[0].click();
	window.obj23718_onTap_runningActionsCount = window.obj23718_onTap_runningActionsCount - 1;

if (window.obj23718_onTap_runningActionsCount < 0) {
	window.obj23718_onTap_runningActionsCount = 0;
} else if (window.obj23718_onTap_runningActionsCount == 0) {
	obj23718_onTap_actionGroup5();
}
}










































};
obj23718_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23718_onTap_activeActionGroupIndex = -1;
		$("#obj23718").trigger("obj23718_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23718) {
				console.warn("de-queueing event obj23718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23718_onTap_activeActionGroupIndex = 5;
	











































};
obj23729_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23729_onTap_activeActionGroupIndex = -1;
		$("#obj23729").trigger("obj23729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23729) {
				console.warn("de-queueing event obj23729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23729_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23780
(function(){
	window.obj23729_onTap_runningActionsCount = obj23729_onTap_runningActionsCount + 1;


	var selector = "#obj23780";
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
					window.obj23729_onTap_runningActionsCount = window.obj23729_onTap_runningActionsCount - 1;

if (window.obj23729_onTap_runningActionsCount < 0) {
	window.obj23729_onTap_runningActionsCount = 0;
} else if (window.obj23729_onTap_runningActionsCount == 0) {
	obj23729_onTap_actionGroup1();
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
				window.obj23729_onTap_runningActionsCount = window.obj23729_onTap_runningActionsCount - 1;

if (window.obj23729_onTap_runningActionsCount < 0) {
	window.obj23729_onTap_runningActionsCount = 0;
} else if (window.obj23729_onTap_runningActionsCount == 0) {
	obj23729_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23729_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23729_onTap_activeActionGroupIndex = -1;
		$("#obj23729").trigger("obj23729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23729) {
				console.warn("de-queueing event obj23729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23729_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23732();
function playAudioFile_23732() {
	window.obj23729_onTap_runningActionsCount = obj23729_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23732")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23732");
			$("#obj_audio_playSoundFile23732").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23729_onTap_runningActionsCount = window.obj23729_onTap_runningActionsCount - 1;

if (window.obj23729_onTap_runningActionsCount < 0) {
	window.obj23729_onTap_runningActionsCount = 0;
} else if (window.obj23729_onTap_runningActionsCount == 0) {
	obj23729_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23729_onTap_runningActionsCount = window.obj23729_onTap_runningActionsCount - 1;

if (window.obj23729_onTap_runningActionsCount < 0) {
	window.obj23729_onTap_runningActionsCount = 0;
} else if (window.obj23729_onTap_runningActionsCount == 0) {
	obj23729_onTap_actionGroup2();
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
				window.obj23729_onTap_runningActionsCount = window.obj23729_onTap_runningActionsCount - 1;

if (window.obj23729_onTap_runningActionsCount < 0) {
	window.obj23729_onTap_runningActionsCount = 0;
} else if (window.obj23729_onTap_runningActionsCount == 0) {
	obj23729_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23729_onTap_runningActionsCount = window.obj23729_onTap_runningActionsCount - 1;

if (window.obj23729_onTap_runningActionsCount < 0) {
	window.obj23729_onTap_runningActionsCount = 0;
} else if (window.obj23729_onTap_runningActionsCount == 0) {
	obj23729_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23729_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23729_onTap_activeActionGroupIndex = -1;
		$("#obj23729").trigger("obj23729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23729) {
				console.warn("de-queueing event obj23729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23729_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj23725 
(function () {
	window.obj23729_onTap_runningActionsCount = obj23729_onTap_runningActionsCount + 1;


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

	if ($("#obj23725").css('filter') == 'none')
$("#obj23725").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj23725").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj23729_onTap_runningActionsCount = window.obj23729_onTap_runningActionsCount - 1;

if (window.obj23729_onTap_runningActionsCount < 0) {
	window.obj23729_onTap_runningActionsCount = 0;
} else if (window.obj23729_onTap_runningActionsCount == 0) {
	obj23729_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj23729_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23729_onTap_activeActionGroupIndex = -1;
		$("#obj23729").trigger("obj23729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23729) {
				console.warn("de-queueing event obj23729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23729_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_23734();
function wait_23734() {
	window.obj23729_onTap_runningActionsCount = obj23729_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj23729_onTap_runningActionsCount = window.obj23729_onTap_runningActionsCount - 1;

if (window.obj23729_onTap_runningActionsCount < 0) {
	window.obj23729_onTap_runningActionsCount = 0;
} else if (window.obj23729_onTap_runningActionsCount == 0) {
	obj23729_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj23729_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23729_onTap_activeActionGroupIndex = -1;
		$("#obj23729").trigger("obj23729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23729) {
				console.warn("de-queueing event obj23729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23729_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_23735();
function goToPage_23735() {
	window.obj23729_onTap_runningActionsCount = obj23729_onTap_runningActionsCount + 1;

	$("#anchor426")[0].click();
	window.obj23729_onTap_runningActionsCount = window.obj23729_onTap_runningActionsCount - 1;

if (window.obj23729_onTap_runningActionsCount < 0) {
	window.obj23729_onTap_runningActionsCount = 0;
} else if (window.obj23729_onTap_runningActionsCount == 0) {
	obj23729_onTap_actionGroup5();
}
}










































};
obj23729_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23729_onTap_activeActionGroupIndex = -1;
		$("#obj23729").trigger("obj23729_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23729) {
				console.warn("de-queueing event obj23729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23729_onTap_activeActionGroupIndex = 5;
	











































};
obj23740_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23740_onTap_activeActionGroupIndex = -1;
		$("#obj23740").trigger("obj23740_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23740) {
				console.warn("de-queueing event obj23740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23740_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23780
(function(){
	window.obj23740_onTap_runningActionsCount = obj23740_onTap_runningActionsCount + 1;


	var selector = "#obj23780";
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
					window.obj23740_onTap_runningActionsCount = window.obj23740_onTap_runningActionsCount - 1;

if (window.obj23740_onTap_runningActionsCount < 0) {
	window.obj23740_onTap_runningActionsCount = 0;
} else if (window.obj23740_onTap_runningActionsCount == 0) {
	obj23740_onTap_actionGroup1();
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
				window.obj23740_onTap_runningActionsCount = window.obj23740_onTap_runningActionsCount - 1;

if (window.obj23740_onTap_runningActionsCount < 0) {
	window.obj23740_onTap_runningActionsCount = 0;
} else if (window.obj23740_onTap_runningActionsCount == 0) {
	obj23740_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23740_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23740_onTap_activeActionGroupIndex = -1;
		$("#obj23740").trigger("obj23740_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23740) {
				console.warn("de-queueing event obj23740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23740_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23743();
function playAudioFile_23743() {
	window.obj23740_onTap_runningActionsCount = obj23740_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23743")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23743");
			$("#obj_audio_playSoundFile23743").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23740_onTap_runningActionsCount = window.obj23740_onTap_runningActionsCount - 1;

if (window.obj23740_onTap_runningActionsCount < 0) {
	window.obj23740_onTap_runningActionsCount = 0;
} else if (window.obj23740_onTap_runningActionsCount == 0) {
	obj23740_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23740_onTap_runningActionsCount = window.obj23740_onTap_runningActionsCount - 1;

if (window.obj23740_onTap_runningActionsCount < 0) {
	window.obj23740_onTap_runningActionsCount = 0;
} else if (window.obj23740_onTap_runningActionsCount == 0) {
	obj23740_onTap_actionGroup2();
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
				window.obj23740_onTap_runningActionsCount = window.obj23740_onTap_runningActionsCount - 1;

if (window.obj23740_onTap_runningActionsCount < 0) {
	window.obj23740_onTap_runningActionsCount = 0;
} else if (window.obj23740_onTap_runningActionsCount == 0) {
	obj23740_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23740_onTap_runningActionsCount = window.obj23740_onTap_runningActionsCount - 1;

if (window.obj23740_onTap_runningActionsCount < 0) {
	window.obj23740_onTap_runningActionsCount = 0;
} else if (window.obj23740_onTap_runningActionsCount == 0) {
	obj23740_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23740_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23740_onTap_activeActionGroupIndex = -1;
		$("#obj23740").trigger("obj23740_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23740) {
				console.warn("de-queueing event obj23740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23740_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj23736 
(function () {
	window.obj23740_onTap_runningActionsCount = obj23740_onTap_runningActionsCount + 1;


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

	if ($("#obj23736").css('filter') == 'none')
$("#obj23736").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj23736").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj23740_onTap_runningActionsCount = window.obj23740_onTap_runningActionsCount - 1;

if (window.obj23740_onTap_runningActionsCount < 0) {
	window.obj23740_onTap_runningActionsCount = 0;
} else if (window.obj23740_onTap_runningActionsCount == 0) {
	obj23740_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj23740_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23740_onTap_activeActionGroupIndex = -1;
		$("#obj23740").trigger("obj23740_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23740) {
				console.warn("de-queueing event obj23740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23740_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_23745();
function wait_23745() {
	window.obj23740_onTap_runningActionsCount = obj23740_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj23740_onTap_runningActionsCount = window.obj23740_onTap_runningActionsCount - 1;

if (window.obj23740_onTap_runningActionsCount < 0) {
	window.obj23740_onTap_runningActionsCount = 0;
} else if (window.obj23740_onTap_runningActionsCount == 0) {
	obj23740_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj23740_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23740_onTap_activeActionGroupIndex = -1;
		$("#obj23740").trigger("obj23740_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23740) {
				console.warn("de-queueing event obj23740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23740_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_23746();
function goToPage_23746() {
	window.obj23740_onTap_runningActionsCount = obj23740_onTap_runningActionsCount + 1;

	$("#anchor428")[0].click();
	window.obj23740_onTap_runningActionsCount = window.obj23740_onTap_runningActionsCount - 1;

if (window.obj23740_onTap_runningActionsCount < 0) {
	window.obj23740_onTap_runningActionsCount = 0;
} else if (window.obj23740_onTap_runningActionsCount == 0) {
	obj23740_onTap_actionGroup5();
}
}










































};
obj23740_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23740_onTap_activeActionGroupIndex = -1;
		$("#obj23740").trigger("obj23740_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23740) {
				console.warn("de-queueing event obj23740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23740_onTap_activeActionGroupIndex = 5;
	











































};
obj23751_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23751_onTap_activeActionGroupIndex = -1;
		$("#obj23751").trigger("obj23751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23751) {
				console.warn("de-queueing event obj23751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23751_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23780
(function(){
	window.obj23751_onTap_runningActionsCount = obj23751_onTap_runningActionsCount + 1;


	var selector = "#obj23780";
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
					window.obj23751_onTap_runningActionsCount = window.obj23751_onTap_runningActionsCount - 1;

if (window.obj23751_onTap_runningActionsCount < 0) {
	window.obj23751_onTap_runningActionsCount = 0;
} else if (window.obj23751_onTap_runningActionsCount == 0) {
	obj23751_onTap_actionGroup1();
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
				window.obj23751_onTap_runningActionsCount = window.obj23751_onTap_runningActionsCount - 1;

if (window.obj23751_onTap_runningActionsCount < 0) {
	window.obj23751_onTap_runningActionsCount = 0;
} else if (window.obj23751_onTap_runningActionsCount == 0) {
	obj23751_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23751_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23751_onTap_activeActionGroupIndex = -1;
		$("#obj23751").trigger("obj23751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23751) {
				console.warn("de-queueing event obj23751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23751_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23754();
function playAudioFile_23754() {
	window.obj23751_onTap_runningActionsCount = obj23751_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23754")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23754");
			$("#obj_audio_playSoundFile23754").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23751_onTap_runningActionsCount = window.obj23751_onTap_runningActionsCount - 1;

if (window.obj23751_onTap_runningActionsCount < 0) {
	window.obj23751_onTap_runningActionsCount = 0;
} else if (window.obj23751_onTap_runningActionsCount == 0) {
	obj23751_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23751_onTap_runningActionsCount = window.obj23751_onTap_runningActionsCount - 1;

if (window.obj23751_onTap_runningActionsCount < 0) {
	window.obj23751_onTap_runningActionsCount = 0;
} else if (window.obj23751_onTap_runningActionsCount == 0) {
	obj23751_onTap_actionGroup2();
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
				window.obj23751_onTap_runningActionsCount = window.obj23751_onTap_runningActionsCount - 1;

if (window.obj23751_onTap_runningActionsCount < 0) {
	window.obj23751_onTap_runningActionsCount = 0;
} else if (window.obj23751_onTap_runningActionsCount == 0) {
	obj23751_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23751_onTap_runningActionsCount = window.obj23751_onTap_runningActionsCount - 1;

if (window.obj23751_onTap_runningActionsCount < 0) {
	window.obj23751_onTap_runningActionsCount = 0;
} else if (window.obj23751_onTap_runningActionsCount == 0) {
	obj23751_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23751_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23751_onTap_activeActionGroupIndex = -1;
		$("#obj23751").trigger("obj23751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23751) {
				console.warn("de-queueing event obj23751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23751_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj23747 
(function () {
	window.obj23751_onTap_runningActionsCount = obj23751_onTap_runningActionsCount + 1;


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

	if ($("#obj23747").css('filter') == 'none')
$("#obj23747").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj23747").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj23751_onTap_runningActionsCount = window.obj23751_onTap_runningActionsCount - 1;

if (window.obj23751_onTap_runningActionsCount < 0) {
	window.obj23751_onTap_runningActionsCount = 0;
} else if (window.obj23751_onTap_runningActionsCount == 0) {
	obj23751_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj23751_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23751_onTap_activeActionGroupIndex = -1;
		$("#obj23751").trigger("obj23751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23751) {
				console.warn("de-queueing event obj23751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23751_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_23756();
function wait_23756() {
	window.obj23751_onTap_runningActionsCount = obj23751_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj23751_onTap_runningActionsCount = window.obj23751_onTap_runningActionsCount - 1;

if (window.obj23751_onTap_runningActionsCount < 0) {
	window.obj23751_onTap_runningActionsCount = 0;
} else if (window.obj23751_onTap_runningActionsCount == 0) {
	obj23751_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj23751_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23751_onTap_activeActionGroupIndex = -1;
		$("#obj23751").trigger("obj23751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23751) {
				console.warn("de-queueing event obj23751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23751_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_23757();
function goToPage_23757() {
	window.obj23751_onTap_runningActionsCount = obj23751_onTap_runningActionsCount + 1;

	$("#anchor430")[0].click();
	window.obj23751_onTap_runningActionsCount = window.obj23751_onTap_runningActionsCount - 1;

if (window.obj23751_onTap_runningActionsCount < 0) {
	window.obj23751_onTap_runningActionsCount = 0;
} else if (window.obj23751_onTap_runningActionsCount == 0) {
	obj23751_onTap_actionGroup5();
}
}










































};
obj23751_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23751_onTap_activeActionGroupIndex = -1;
		$("#obj23751").trigger("obj23751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23751) {
				console.warn("de-queueing event obj23751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23751_onTap_activeActionGroupIndex = 5;
	











































};
obj23762_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23762_onTap_activeActionGroupIndex = -1;
		$("#obj23762").trigger("obj23762_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23762) {
				console.warn("de-queueing event obj23762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23762_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23780
(function(){
	window.obj23762_onTap_runningActionsCount = obj23762_onTap_runningActionsCount + 1;


	var selector = "#obj23780";
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
					window.obj23762_onTap_runningActionsCount = window.obj23762_onTap_runningActionsCount - 1;

if (window.obj23762_onTap_runningActionsCount < 0) {
	window.obj23762_onTap_runningActionsCount = 0;
} else if (window.obj23762_onTap_runningActionsCount == 0) {
	obj23762_onTap_actionGroup1();
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
				window.obj23762_onTap_runningActionsCount = window.obj23762_onTap_runningActionsCount - 1;

if (window.obj23762_onTap_runningActionsCount < 0) {
	window.obj23762_onTap_runningActionsCount = 0;
} else if (window.obj23762_onTap_runningActionsCount == 0) {
	obj23762_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23762_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23762_onTap_activeActionGroupIndex = -1;
		$("#obj23762").trigger("obj23762_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23762) {
				console.warn("de-queueing event obj23762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23762_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23765();
function playAudioFile_23765() {
	window.obj23762_onTap_runningActionsCount = obj23762_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23765")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23765");
			$("#obj_audio_playSoundFile23765").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23762_onTap_runningActionsCount = window.obj23762_onTap_runningActionsCount - 1;

if (window.obj23762_onTap_runningActionsCount < 0) {
	window.obj23762_onTap_runningActionsCount = 0;
} else if (window.obj23762_onTap_runningActionsCount == 0) {
	obj23762_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23762_onTap_runningActionsCount = window.obj23762_onTap_runningActionsCount - 1;

if (window.obj23762_onTap_runningActionsCount < 0) {
	window.obj23762_onTap_runningActionsCount = 0;
} else if (window.obj23762_onTap_runningActionsCount == 0) {
	obj23762_onTap_actionGroup2();
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
				window.obj23762_onTap_runningActionsCount = window.obj23762_onTap_runningActionsCount - 1;

if (window.obj23762_onTap_runningActionsCount < 0) {
	window.obj23762_onTap_runningActionsCount = 0;
} else if (window.obj23762_onTap_runningActionsCount == 0) {
	obj23762_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23762_onTap_runningActionsCount = window.obj23762_onTap_runningActionsCount - 1;

if (window.obj23762_onTap_runningActionsCount < 0) {
	window.obj23762_onTap_runningActionsCount = 0;
} else if (window.obj23762_onTap_runningActionsCount == 0) {
	obj23762_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23762_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23762_onTap_activeActionGroupIndex = -1;
		$("#obj23762").trigger("obj23762_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23762) {
				console.warn("de-queueing event obj23762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23762_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj23758 
(function () {
	window.obj23762_onTap_runningActionsCount = obj23762_onTap_runningActionsCount + 1;


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

	if ($("#obj23758").css('filter') == 'none')
$("#obj23758").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj23758").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj23762_onTap_runningActionsCount = window.obj23762_onTap_runningActionsCount - 1;

if (window.obj23762_onTap_runningActionsCount < 0) {
	window.obj23762_onTap_runningActionsCount = 0;
} else if (window.obj23762_onTap_runningActionsCount == 0) {
	obj23762_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj23762_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23762_onTap_activeActionGroupIndex = -1;
		$("#obj23762").trigger("obj23762_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23762) {
				console.warn("de-queueing event obj23762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23762_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_23767();
function wait_23767() {
	window.obj23762_onTap_runningActionsCount = obj23762_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj23762_onTap_runningActionsCount = window.obj23762_onTap_runningActionsCount - 1;

if (window.obj23762_onTap_runningActionsCount < 0) {
	window.obj23762_onTap_runningActionsCount = 0;
} else if (window.obj23762_onTap_runningActionsCount == 0) {
	obj23762_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj23762_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23762_onTap_activeActionGroupIndex = -1;
		$("#obj23762").trigger("obj23762_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23762) {
				console.warn("de-queueing event obj23762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23762_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_23768();
function goToPage_23768() {
	window.obj23762_onTap_runningActionsCount = obj23762_onTap_runningActionsCount + 1;

	$("#anchor432")[0].click();
	window.obj23762_onTap_runningActionsCount = window.obj23762_onTap_runningActionsCount - 1;

if (window.obj23762_onTap_runningActionsCount < 0) {
	window.obj23762_onTap_runningActionsCount = 0;
} else if (window.obj23762_onTap_runningActionsCount == 0) {
	obj23762_onTap_actionGroup5();
}
}










































};
obj23762_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23762_onTap_activeActionGroupIndex = -1;
		$("#obj23762").trigger("obj23762_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23762) {
				console.warn("de-queueing event obj23762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23762_onTap_activeActionGroupIndex = 5;
	











































};
obj23773_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23773_onTap_activeActionGroupIndex = -1;
		$("#obj23773").trigger("obj23773_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23773) {
				console.warn("de-queueing event obj23773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23773_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23780
(function(){
	window.obj23773_onTap_runningActionsCount = obj23773_onTap_runningActionsCount + 1;


	var selector = "#obj23780";
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
					window.obj23773_onTap_runningActionsCount = window.obj23773_onTap_runningActionsCount - 1;

if (window.obj23773_onTap_runningActionsCount < 0) {
	window.obj23773_onTap_runningActionsCount = 0;
} else if (window.obj23773_onTap_runningActionsCount == 0) {
	obj23773_onTap_actionGroup1();
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
				window.obj23773_onTap_runningActionsCount = window.obj23773_onTap_runningActionsCount - 1;

if (window.obj23773_onTap_runningActionsCount < 0) {
	window.obj23773_onTap_runningActionsCount = 0;
} else if (window.obj23773_onTap_runningActionsCount == 0) {
	obj23773_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23773_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23773_onTap_activeActionGroupIndex = -1;
		$("#obj23773").trigger("obj23773_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23773) {
				console.warn("de-queueing event obj23773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23773_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_23776();
function playAudioFile_23776() {
	window.obj23773_onTap_runningActionsCount = obj23773_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile23776")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile23776");
			$("#obj_audio_playSoundFile23776").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj23773_onTap_runningActionsCount = window.obj23773_onTap_runningActionsCount - 1;

if (window.obj23773_onTap_runningActionsCount < 0) {
	window.obj23773_onTap_runningActionsCount = 0;
} else if (window.obj23773_onTap_runningActionsCount == 0) {
	obj23773_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj23773_onTap_runningActionsCount = window.obj23773_onTap_runningActionsCount - 1;

if (window.obj23773_onTap_runningActionsCount < 0) {
	window.obj23773_onTap_runningActionsCount = 0;
} else if (window.obj23773_onTap_runningActionsCount == 0) {
	obj23773_onTap_actionGroup2();
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
				window.obj23773_onTap_runningActionsCount = window.obj23773_onTap_runningActionsCount - 1;

if (window.obj23773_onTap_runningActionsCount < 0) {
	window.obj23773_onTap_runningActionsCount = 0;
} else if (window.obj23773_onTap_runningActionsCount == 0) {
	obj23773_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj23773_onTap_runningActionsCount = window.obj23773_onTap_runningActionsCount - 1;

if (window.obj23773_onTap_runningActionsCount < 0) {
	window.obj23773_onTap_runningActionsCount = 0;
} else if (window.obj23773_onTap_runningActionsCount == 0) {
	obj23773_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj23773_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23773_onTap_activeActionGroupIndex = -1;
		$("#obj23773").trigger("obj23773_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23773) {
				console.warn("de-queueing event obj23773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23773_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj23769 
(function () {
	window.obj23773_onTap_runningActionsCount = obj23773_onTap_runningActionsCount + 1;


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

	if ($("#obj23769").css('filter') == 'none')
$("#obj23769").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj23769").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj23773_onTap_runningActionsCount = window.obj23773_onTap_runningActionsCount - 1;

if (window.obj23773_onTap_runningActionsCount < 0) {
	window.obj23773_onTap_runningActionsCount = 0;
} else if (window.obj23773_onTap_runningActionsCount == 0) {
	obj23773_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj23773_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23773_onTap_activeActionGroupIndex = -1;
		$("#obj23773").trigger("obj23773_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23773) {
				console.warn("de-queueing event obj23773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23773_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_23778();
function wait_23778() {
	window.obj23773_onTap_runningActionsCount = obj23773_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj23773_onTap_runningActionsCount = window.obj23773_onTap_runningActionsCount - 1;

if (window.obj23773_onTap_runningActionsCount < 0) {
	window.obj23773_onTap_runningActionsCount = 0;
} else if (window.obj23773_onTap_runningActionsCount == 0) {
	obj23773_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj23773_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23773_onTap_activeActionGroupIndex = -1;
		$("#obj23773").trigger("obj23773_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23773) {
				console.warn("de-queueing event obj23773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23773_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_23779();
function goToPage_23779() {
	window.obj23773_onTap_runningActionsCount = obj23773_onTap_runningActionsCount + 1;

	$("#anchor434")[0].click();
	window.obj23773_onTap_runningActionsCount = window.obj23773_onTap_runningActionsCount - 1;

if (window.obj23773_onTap_runningActionsCount < 0) {
	window.obj23773_onTap_runningActionsCount = 0;
} else if (window.obj23773_onTap_runningActionsCount == 0) {
	obj23773_onTap_actionGroup5();
}
}










































};
obj23773_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23773_onTap_activeActionGroupIndex = -1;
		$("#obj23773").trigger("obj23773_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23773) {
				console.warn("de-queueing event obj23773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23773_onTap_activeActionGroupIndex = 5;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































/*
 *
 *   obj23697: Event Touch Down
 *
 */

$("#obj23697").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23697_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23697_onTap is still running");
	return;
}
var obj23697_onTap_runningActionsCount = 0;
var obj23697_onTap_loopCount = 0;
obj23697_onTap_actionGroup0();
});





























































































































































































/*
 *
 *   obj23718: Event Touch Down
 *
 */

$("#obj23718").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23718_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23718_onTap is still running");
	return;
}
var obj23718_onTap_runningActionsCount = 0;
var obj23718_onTap_loopCount = 0;
obj23718_onTap_actionGroup0();
});
























































/*
 *
 *   obj23729: Event Touch Down
 *
 */

$("#obj23729").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23729_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23729_onTap is still running");
	return;
}
var obj23729_onTap_runningActionsCount = 0;
var obj23729_onTap_loopCount = 0;
obj23729_onTap_actionGroup0();
});
























































/*
 *
 *   obj23740: Event Touch Down
 *
 */

$("#obj23740").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23740_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23740_onTap is still running");
	return;
}
var obj23740_onTap_runningActionsCount = 0;
var obj23740_onTap_loopCount = 0;
obj23740_onTap_actionGroup0();
});
























































/*
 *
 *   obj23751: Event Touch Down
 *
 */

$("#obj23751").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23751_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23751_onTap is still running");
	return;
}
var obj23751_onTap_runningActionsCount = 0;
var obj23751_onTap_loopCount = 0;
obj23751_onTap_actionGroup0();
});
























































/*
 *
 *   obj23762: Event Touch Down
 *
 */

$("#obj23762").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23762_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23762_onTap is still running");
	return;
}
var obj23762_onTap_runningActionsCount = 0;
var obj23762_onTap_loopCount = 0;
obj23762_onTap_actionGroup0();
});
























































/*
 *
 *   obj23773: Event Touch Down
 *
 */

$("#obj23773").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23773_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23773_onTap is still running");
	return;
}
var obj23773_onTap_runningActionsCount = 0;
var obj23773_onTap_loopCount = 0;
obj23773_onTap_actionGroup0();
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
	
$("#obj23689").trigger('SCEventShow');
$("#obj23691").trigger('SCEventShow');
$("#obj23693").trigger('SCEventShow');
$("#obj23695").trigger('SCEventShow');
$("#obj23697").trigger('SCEventShow');
$("#obj23700").trigger('SCEventShow');
$("#obj23702").trigger('SCEventShow');
$("#obj23704").trigger('SCEventShow');
$("#obj23706").trigger('SCEventShow');
$("#obj23708").trigger('SCEventShow');
$("#obj23710").trigger('SCEventShow');
$("#obj23712").trigger('SCEventShow');
$("#obj23714").trigger('SCEventShow');
$("#obj23716").trigger('SCEventShow');
$("#obj23718").trigger('SCEventShow');
$("#obj23725").trigger('SCEventShow');
$("#obj23727").trigger('SCEventShow');
$("#obj23729").trigger('SCEventShow');
$("#obj23736").trigger('SCEventShow');
$("#obj23738").trigger('SCEventShow');
$("#obj23740").trigger('SCEventShow');
$("#obj23747").trigger('SCEventShow');
$("#obj23749").trigger('SCEventShow');
$("#obj23751").trigger('SCEventShow');
$("#obj23758").trigger('SCEventShow');
$("#obj23760").trigger('SCEventShow');
$("#obj23762").trigger('SCEventShow');
$("#obj23769").trigger('SCEventShow');
$("#obj23771").trigger('SCEventShow');
$("#obj23773").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});