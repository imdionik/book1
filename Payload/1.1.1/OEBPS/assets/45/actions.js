pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 7540;
pubcoder.page.title = pubcoder.page.title || "45";
pubcoder.page.number = pubcoder.page.number || 45;
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
var obj7543_onTap_activeActionGroupIndex = -1;
var obj7543_onTap_runningActionsCount = 0;
var obj7543_onTap_loopCount = 0;
var obj7626_onTap_activeActionGroupIndex = -1;
var obj7626_onTap_runningActionsCount = 0;
var obj7626_onTap_loopCount = 0;
var obj7634_onTap_activeActionGroupIndex = -1;
var obj7634_onTap_runningActionsCount = 0;
var obj7634_onTap_loopCount = 0;
var obj7654_onTap_activeActionGroupIndex = -1;
var obj7654_onTap_runningActionsCount = 0;
var obj7654_onTap_loopCount = 0;
var obj7644_onTap_activeActionGroupIndex = -1;
var obj7644_onTap_runningActionsCount = 0;
var obj7644_onTap_loopCount = 0;
var obj7674_onTap_activeActionGroupIndex = -1;
var obj7674_onTap_runningActionsCount = 0;
var obj7674_onTap_loopCount = 0;
var obj7664_onTap_activeActionGroupIndex = -1;
var obj7664_onTap_runningActionsCount = 0;
var obj7664_onTap_loopCount = 0;

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
		
obj7543_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7543_onTap_activeActionGroupIndex = -1;
		$("#obj7543").trigger("obj7543_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7543) {
				console.warn("de-queueing event obj7543." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7543").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7543_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7545();
function goToPage_7545() {
	window.obj7543_onTap_runningActionsCount = obj7543_onTap_runningActionsCount + 1;

	$("#anchor825")[0].click();
	window.obj7543_onTap_runningActionsCount = window.obj7543_onTap_runningActionsCount - 1;

if (window.obj7543_onTap_runningActionsCount < 0) {
	window.obj7543_onTap_runningActionsCount = 0;
} else if (window.obj7543_onTap_runningActionsCount == 0) {
	obj7543_onTap_actionGroup1();
}
}










































};
obj7543_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7543_onTap_activeActionGroupIndex = -1;
		$("#obj7543").trigger("obj7543_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7543) {
				console.warn("de-queueing event obj7543." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7543").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7543_onTap_activeActionGroupIndex = 1;
	











































};
obj7626_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7626_onTap_activeActionGroupIndex = -1;
		$("#obj7626").trigger("obj7626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7626) {
				console.warn("de-queueing event obj7626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7626_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7630
(function(){
	window.obj7626_onTap_runningActionsCount = obj7626_onTap_runningActionsCount + 1;


	var selector = "#obj7630";
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
					window.obj7626_onTap_runningActionsCount = window.obj7626_onTap_runningActionsCount - 1;

if (window.obj7626_onTap_runningActionsCount < 0) {
	window.obj7626_onTap_runningActionsCount = 0;
} else if (window.obj7626_onTap_runningActionsCount == 0) {
	obj7626_onTap_actionGroup1();
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
				window.obj7626_onTap_runningActionsCount = window.obj7626_onTap_runningActionsCount - 1;

if (window.obj7626_onTap_runningActionsCount < 0) {
	window.obj7626_onTap_runningActionsCount = 0;
} else if (window.obj7626_onTap_runningActionsCount == 0) {
	obj7626_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7626_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7626_onTap_activeActionGroupIndex = -1;
		$("#obj7626").trigger("obj7626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7626) {
				console.warn("de-queueing event obj7626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7626_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7628();
function playAudioFile_7628() {
	window.obj7626_onTap_runningActionsCount = obj7626_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7628")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7628");
			$("#obj_audio_playSoundFile7628").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7626_onTap_runningActionsCount = window.obj7626_onTap_runningActionsCount - 1;

if (window.obj7626_onTap_runningActionsCount < 0) {
	window.obj7626_onTap_runningActionsCount = 0;
} else if (window.obj7626_onTap_runningActionsCount == 0) {
	obj7626_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7626_onTap_runningActionsCount = window.obj7626_onTap_runningActionsCount - 1;

if (window.obj7626_onTap_runningActionsCount < 0) {
	window.obj7626_onTap_runningActionsCount = 0;
} else if (window.obj7626_onTap_runningActionsCount == 0) {
	obj7626_onTap_actionGroup2();
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
				window.obj7626_onTap_runningActionsCount = window.obj7626_onTap_runningActionsCount - 1;

if (window.obj7626_onTap_runningActionsCount < 0) {
	window.obj7626_onTap_runningActionsCount = 0;
} else if (window.obj7626_onTap_runningActionsCount == 0) {
	obj7626_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7626_onTap_runningActionsCount = window.obj7626_onTap_runningActionsCount - 1;

if (window.obj7626_onTap_runningActionsCount < 0) {
	window.obj7626_onTap_runningActionsCount = 0;
} else if (window.obj7626_onTap_runningActionsCount == 0) {
	obj7626_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7626_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7626_onTap_activeActionGroupIndex = -1;
		$("#obj7626").trigger("obj7626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7626) {
				console.warn("de-queueing event obj7626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7626_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj7622 
(function () {
	window.obj7626_onTap_runningActionsCount = obj7626_onTap_runningActionsCount + 1;


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

	if ($("#obj7622").css('filter') == 'none')
$("#obj7622").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7622").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7626_onTap_runningActionsCount = window.obj7626_onTap_runningActionsCount - 1;

if (window.obj7626_onTap_runningActionsCount < 0) {
	window.obj7626_onTap_runningActionsCount = 0;
} else if (window.obj7626_onTap_runningActionsCount == 0) {
	obj7626_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7626_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7626_onTap_activeActionGroupIndex = -1;
		$("#obj7626").trigger("obj7626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7626) {
				console.warn("de-queueing event obj7626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7626_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_7692();
function wait_7692() {
	window.obj7626_onTap_runningActionsCount = obj7626_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7626_onTap_runningActionsCount = window.obj7626_onTap_runningActionsCount - 1;

if (window.obj7626_onTap_runningActionsCount < 0) {
	window.obj7626_onTap_runningActionsCount = 0;
} else if (window.obj7626_onTap_runningActionsCount == 0) {
	obj7626_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj7626_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7626_onTap_activeActionGroupIndex = -1;
		$("#obj7626").trigger("obj7626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7626) {
				console.warn("de-queueing event obj7626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7626_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_7633();
function goToPage_7633() {
	window.obj7626_onTap_runningActionsCount = obj7626_onTap_runningActionsCount + 1;

	$("#anchor827")[0].click();
	window.obj7626_onTap_runningActionsCount = window.obj7626_onTap_runningActionsCount - 1;

if (window.obj7626_onTap_runningActionsCount < 0) {
	window.obj7626_onTap_runningActionsCount = 0;
} else if (window.obj7626_onTap_runningActionsCount == 0) {
	obj7626_onTap_actionGroup5();
}
}










































};
obj7626_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7626_onTap_activeActionGroupIndex = -1;
		$("#obj7626").trigger("obj7626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7626) {
				console.warn("de-queueing event obj7626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7626_onTap_activeActionGroupIndex = 5;
	











































};
obj7634_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7634_onTap_activeActionGroupIndex = -1;
		$("#obj7634").trigger("obj7634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7634) {
				console.warn("de-queueing event obj7634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7634_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7630
(function(){
	window.obj7634_onTap_runningActionsCount = obj7634_onTap_runningActionsCount + 1;


	var selector = "#obj7630";
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
					window.obj7634_onTap_runningActionsCount = window.obj7634_onTap_runningActionsCount - 1;

if (window.obj7634_onTap_runningActionsCount < 0) {
	window.obj7634_onTap_runningActionsCount = 0;
} else if (window.obj7634_onTap_runningActionsCount == 0) {
	obj7634_onTap_actionGroup1();
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
				window.obj7634_onTap_runningActionsCount = window.obj7634_onTap_runningActionsCount - 1;

if (window.obj7634_onTap_runningActionsCount < 0) {
	window.obj7634_onTap_runningActionsCount = 0;
} else if (window.obj7634_onTap_runningActionsCount == 0) {
	obj7634_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7634_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7634_onTap_activeActionGroupIndex = -1;
		$("#obj7634").trigger("obj7634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7634) {
				console.warn("de-queueing event obj7634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7634_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7637();
function playAudioFile_7637() {
	window.obj7634_onTap_runningActionsCount = obj7634_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7637")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7637");
			$("#obj_audio_playSoundFile7637").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7634_onTap_runningActionsCount = window.obj7634_onTap_runningActionsCount - 1;

if (window.obj7634_onTap_runningActionsCount < 0) {
	window.obj7634_onTap_runningActionsCount = 0;
} else if (window.obj7634_onTap_runningActionsCount == 0) {
	obj7634_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7634_onTap_runningActionsCount = window.obj7634_onTap_runningActionsCount - 1;

if (window.obj7634_onTap_runningActionsCount < 0) {
	window.obj7634_onTap_runningActionsCount = 0;
} else if (window.obj7634_onTap_runningActionsCount == 0) {
	obj7634_onTap_actionGroup2();
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
				window.obj7634_onTap_runningActionsCount = window.obj7634_onTap_runningActionsCount - 1;

if (window.obj7634_onTap_runningActionsCount < 0) {
	window.obj7634_onTap_runningActionsCount = 0;
} else if (window.obj7634_onTap_runningActionsCount == 0) {
	obj7634_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7634_onTap_runningActionsCount = window.obj7634_onTap_runningActionsCount - 1;

if (window.obj7634_onTap_runningActionsCount < 0) {
	window.obj7634_onTap_runningActionsCount = 0;
} else if (window.obj7634_onTap_runningActionsCount == 0) {
	obj7634_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7634_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7634_onTap_activeActionGroupIndex = -1;
		$("#obj7634").trigger("obj7634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7634) {
				console.warn("de-queueing event obj7634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7634_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj7642 
(function () {
	window.obj7634_onTap_runningActionsCount = obj7634_onTap_runningActionsCount + 1;


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

	if ($("#obj7642").css('filter') == 'none')
$("#obj7642").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7642").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7634_onTap_runningActionsCount = window.obj7634_onTap_runningActionsCount - 1;

if (window.obj7634_onTap_runningActionsCount < 0) {
	window.obj7634_onTap_runningActionsCount = 0;
} else if (window.obj7634_onTap_runningActionsCount == 0) {
	obj7634_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7634_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7634_onTap_activeActionGroupIndex = -1;
		$("#obj7634").trigger("obj7634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7634) {
				console.warn("de-queueing event obj7634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7634_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_7687();
function wait_7687() {
	window.obj7634_onTap_runningActionsCount = obj7634_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7634_onTap_runningActionsCount = window.obj7634_onTap_runningActionsCount - 1;

if (window.obj7634_onTap_runningActionsCount < 0) {
	window.obj7634_onTap_runningActionsCount = 0;
} else if (window.obj7634_onTap_runningActionsCount == 0) {
	obj7634_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj7634_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7634_onTap_activeActionGroupIndex = -1;
		$("#obj7634").trigger("obj7634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7634) {
				console.warn("de-queueing event obj7634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7634_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_7639();
function goToPage_7639() {
	window.obj7634_onTap_runningActionsCount = obj7634_onTap_runningActionsCount + 1;

	$("#anchor829")[0].click();
	window.obj7634_onTap_runningActionsCount = window.obj7634_onTap_runningActionsCount - 1;

if (window.obj7634_onTap_runningActionsCount < 0) {
	window.obj7634_onTap_runningActionsCount = 0;
} else if (window.obj7634_onTap_runningActionsCount == 0) {
	obj7634_onTap_actionGroup5();
}
}










































};
obj7634_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7634_onTap_activeActionGroupIndex = -1;
		$("#obj7634").trigger("obj7634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7634) {
				console.warn("de-queueing event obj7634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7634_onTap_activeActionGroupIndex = 5;
	











































};
obj7654_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7654_onTap_activeActionGroupIndex = -1;
		$("#obj7654").trigger("obj7654_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7654) {
				console.warn("de-queueing event obj7654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7654_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7630
(function(){
	window.obj7654_onTap_runningActionsCount = obj7654_onTap_runningActionsCount + 1;


	var selector = "#obj7630";
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
					window.obj7654_onTap_runningActionsCount = window.obj7654_onTap_runningActionsCount - 1;

if (window.obj7654_onTap_runningActionsCount < 0) {
	window.obj7654_onTap_runningActionsCount = 0;
} else if (window.obj7654_onTap_runningActionsCount == 0) {
	obj7654_onTap_actionGroup1();
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
				window.obj7654_onTap_runningActionsCount = window.obj7654_onTap_runningActionsCount - 1;

if (window.obj7654_onTap_runningActionsCount < 0) {
	window.obj7654_onTap_runningActionsCount = 0;
} else if (window.obj7654_onTap_runningActionsCount == 0) {
	obj7654_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7654_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7654_onTap_activeActionGroupIndex = -1;
		$("#obj7654").trigger("obj7654_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7654) {
				console.warn("de-queueing event obj7654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7654_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7657();
function playAudioFile_7657() {
	window.obj7654_onTap_runningActionsCount = obj7654_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7657")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7657");
			$("#obj_audio_playSoundFile7657").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7654_onTap_runningActionsCount = window.obj7654_onTap_runningActionsCount - 1;

if (window.obj7654_onTap_runningActionsCount < 0) {
	window.obj7654_onTap_runningActionsCount = 0;
} else if (window.obj7654_onTap_runningActionsCount == 0) {
	obj7654_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7654_onTap_runningActionsCount = window.obj7654_onTap_runningActionsCount - 1;

if (window.obj7654_onTap_runningActionsCount < 0) {
	window.obj7654_onTap_runningActionsCount = 0;
} else if (window.obj7654_onTap_runningActionsCount == 0) {
	obj7654_onTap_actionGroup2();
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
				window.obj7654_onTap_runningActionsCount = window.obj7654_onTap_runningActionsCount - 1;

if (window.obj7654_onTap_runningActionsCount < 0) {
	window.obj7654_onTap_runningActionsCount = 0;
} else if (window.obj7654_onTap_runningActionsCount == 0) {
	obj7654_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7654_onTap_runningActionsCount = window.obj7654_onTap_runningActionsCount - 1;

if (window.obj7654_onTap_runningActionsCount < 0) {
	window.obj7654_onTap_runningActionsCount = 0;
} else if (window.obj7654_onTap_runningActionsCount == 0) {
	obj7654_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7654_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7654_onTap_activeActionGroupIndex = -1;
		$("#obj7654").trigger("obj7654_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7654) {
				console.warn("de-queueing event obj7654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7654_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj7662 
(function () {
	window.obj7654_onTap_runningActionsCount = obj7654_onTap_runningActionsCount + 1;


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

	if ($("#obj7662").css('filter') == 'none')
$("#obj7662").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7662").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7654_onTap_runningActionsCount = window.obj7654_onTap_runningActionsCount - 1;

if (window.obj7654_onTap_runningActionsCount < 0) {
	window.obj7654_onTap_runningActionsCount = 0;
} else if (window.obj7654_onTap_runningActionsCount == 0) {
	obj7654_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7654_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7654_onTap_activeActionGroupIndex = -1;
		$("#obj7654").trigger("obj7654_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7654) {
				console.warn("de-queueing event obj7654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7654_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_7688();
function wait_7688() {
	window.obj7654_onTap_runningActionsCount = obj7654_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7654_onTap_runningActionsCount = window.obj7654_onTap_runningActionsCount - 1;

if (window.obj7654_onTap_runningActionsCount < 0) {
	window.obj7654_onTap_runningActionsCount = 0;
} else if (window.obj7654_onTap_runningActionsCount == 0) {
	obj7654_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj7654_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7654_onTap_activeActionGroupIndex = -1;
		$("#obj7654").trigger("obj7654_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7654) {
				console.warn("de-queueing event obj7654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7654_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_7659();
function goToPage_7659() {
	window.obj7654_onTap_runningActionsCount = obj7654_onTap_runningActionsCount + 1;

	$("#anchor831")[0].click();
	window.obj7654_onTap_runningActionsCount = window.obj7654_onTap_runningActionsCount - 1;

if (window.obj7654_onTap_runningActionsCount < 0) {
	window.obj7654_onTap_runningActionsCount = 0;
} else if (window.obj7654_onTap_runningActionsCount == 0) {
	obj7654_onTap_actionGroup5();
}
}










































};
obj7654_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7654_onTap_activeActionGroupIndex = -1;
		$("#obj7654").trigger("obj7654_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7654) {
				console.warn("de-queueing event obj7654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7654_onTap_activeActionGroupIndex = 5;
	











































};
obj7644_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7644_onTap_activeActionGroupIndex = -1;
		$("#obj7644").trigger("obj7644_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7644) {
				console.warn("de-queueing event obj7644." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7644").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7644_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7630
(function(){
	window.obj7644_onTap_runningActionsCount = obj7644_onTap_runningActionsCount + 1;


	var selector = "#obj7630";
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
					window.obj7644_onTap_runningActionsCount = window.obj7644_onTap_runningActionsCount - 1;

if (window.obj7644_onTap_runningActionsCount < 0) {
	window.obj7644_onTap_runningActionsCount = 0;
} else if (window.obj7644_onTap_runningActionsCount == 0) {
	obj7644_onTap_actionGroup1();
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
				window.obj7644_onTap_runningActionsCount = window.obj7644_onTap_runningActionsCount - 1;

if (window.obj7644_onTap_runningActionsCount < 0) {
	window.obj7644_onTap_runningActionsCount = 0;
} else if (window.obj7644_onTap_runningActionsCount == 0) {
	obj7644_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7644_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7644_onTap_activeActionGroupIndex = -1;
		$("#obj7644").trigger("obj7644_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7644) {
				console.warn("de-queueing event obj7644." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7644").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7644_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7647();
function playAudioFile_7647() {
	window.obj7644_onTap_runningActionsCount = obj7644_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7647")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7647");
			$("#obj_audio_playSoundFile7647").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7644_onTap_runningActionsCount = window.obj7644_onTap_runningActionsCount - 1;

if (window.obj7644_onTap_runningActionsCount < 0) {
	window.obj7644_onTap_runningActionsCount = 0;
} else if (window.obj7644_onTap_runningActionsCount == 0) {
	obj7644_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7644_onTap_runningActionsCount = window.obj7644_onTap_runningActionsCount - 1;

if (window.obj7644_onTap_runningActionsCount < 0) {
	window.obj7644_onTap_runningActionsCount = 0;
} else if (window.obj7644_onTap_runningActionsCount == 0) {
	obj7644_onTap_actionGroup2();
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
				window.obj7644_onTap_runningActionsCount = window.obj7644_onTap_runningActionsCount - 1;

if (window.obj7644_onTap_runningActionsCount < 0) {
	window.obj7644_onTap_runningActionsCount = 0;
} else if (window.obj7644_onTap_runningActionsCount == 0) {
	obj7644_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7644_onTap_runningActionsCount = window.obj7644_onTap_runningActionsCount - 1;

if (window.obj7644_onTap_runningActionsCount < 0) {
	window.obj7644_onTap_runningActionsCount = 0;
} else if (window.obj7644_onTap_runningActionsCount == 0) {
	obj7644_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7644_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7644_onTap_activeActionGroupIndex = -1;
		$("#obj7644").trigger("obj7644_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7644) {
				console.warn("de-queueing event obj7644." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7644").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7644_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj7652 
(function () {
	window.obj7644_onTap_runningActionsCount = obj7644_onTap_runningActionsCount + 1;


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

	if ($("#obj7652").css('filter') == 'none')
$("#obj7652").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7652").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7644_onTap_runningActionsCount = window.obj7644_onTap_runningActionsCount - 1;

if (window.obj7644_onTap_runningActionsCount < 0) {
	window.obj7644_onTap_runningActionsCount = 0;
} else if (window.obj7644_onTap_runningActionsCount == 0) {
	obj7644_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7644_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7644_onTap_activeActionGroupIndex = -1;
		$("#obj7644").trigger("obj7644_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7644) {
				console.warn("de-queueing event obj7644." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7644").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7644_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_7689();
function wait_7689() {
	window.obj7644_onTap_runningActionsCount = obj7644_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7644_onTap_runningActionsCount = window.obj7644_onTap_runningActionsCount - 1;

if (window.obj7644_onTap_runningActionsCount < 0) {
	window.obj7644_onTap_runningActionsCount = 0;
} else if (window.obj7644_onTap_runningActionsCount == 0) {
	obj7644_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj7644_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7644_onTap_activeActionGroupIndex = -1;
		$("#obj7644").trigger("obj7644_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7644) {
				console.warn("de-queueing event obj7644." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7644").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7644_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_7649();
function goToPage_7649() {
	window.obj7644_onTap_runningActionsCount = obj7644_onTap_runningActionsCount + 1;

	$("#anchor833")[0].click();
	window.obj7644_onTap_runningActionsCount = window.obj7644_onTap_runningActionsCount - 1;

if (window.obj7644_onTap_runningActionsCount < 0) {
	window.obj7644_onTap_runningActionsCount = 0;
} else if (window.obj7644_onTap_runningActionsCount == 0) {
	obj7644_onTap_actionGroup5();
}
}










































};
obj7644_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7644_onTap_activeActionGroupIndex = -1;
		$("#obj7644").trigger("obj7644_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7644) {
				console.warn("de-queueing event obj7644." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7644").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7644_onTap_activeActionGroupIndex = 5;
	











































};
obj7674_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7674_onTap_activeActionGroupIndex = -1;
		$("#obj7674").trigger("obj7674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7674) {
				console.warn("de-queueing event obj7674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7674_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7630
(function(){
	window.obj7674_onTap_runningActionsCount = obj7674_onTap_runningActionsCount + 1;


	var selector = "#obj7630";
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
					window.obj7674_onTap_runningActionsCount = window.obj7674_onTap_runningActionsCount - 1;

if (window.obj7674_onTap_runningActionsCount < 0) {
	window.obj7674_onTap_runningActionsCount = 0;
} else if (window.obj7674_onTap_runningActionsCount == 0) {
	obj7674_onTap_actionGroup1();
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
				window.obj7674_onTap_runningActionsCount = window.obj7674_onTap_runningActionsCount - 1;

if (window.obj7674_onTap_runningActionsCount < 0) {
	window.obj7674_onTap_runningActionsCount = 0;
} else if (window.obj7674_onTap_runningActionsCount == 0) {
	obj7674_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7674_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7674_onTap_activeActionGroupIndex = -1;
		$("#obj7674").trigger("obj7674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7674) {
				console.warn("de-queueing event obj7674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7674_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7677();
function playAudioFile_7677() {
	window.obj7674_onTap_runningActionsCount = obj7674_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7677")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7677");
			$("#obj_audio_playSoundFile7677").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7674_onTap_runningActionsCount = window.obj7674_onTap_runningActionsCount - 1;

if (window.obj7674_onTap_runningActionsCount < 0) {
	window.obj7674_onTap_runningActionsCount = 0;
} else if (window.obj7674_onTap_runningActionsCount == 0) {
	obj7674_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7674_onTap_runningActionsCount = window.obj7674_onTap_runningActionsCount - 1;

if (window.obj7674_onTap_runningActionsCount < 0) {
	window.obj7674_onTap_runningActionsCount = 0;
} else if (window.obj7674_onTap_runningActionsCount == 0) {
	obj7674_onTap_actionGroup2();
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
				window.obj7674_onTap_runningActionsCount = window.obj7674_onTap_runningActionsCount - 1;

if (window.obj7674_onTap_runningActionsCount < 0) {
	window.obj7674_onTap_runningActionsCount = 0;
} else if (window.obj7674_onTap_runningActionsCount == 0) {
	obj7674_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7674_onTap_runningActionsCount = window.obj7674_onTap_runningActionsCount - 1;

if (window.obj7674_onTap_runningActionsCount < 0) {
	window.obj7674_onTap_runningActionsCount = 0;
} else if (window.obj7674_onTap_runningActionsCount == 0) {
	obj7674_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7674_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7674_onTap_activeActionGroupIndex = -1;
		$("#obj7674").trigger("obj7674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7674) {
				console.warn("de-queueing event obj7674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7674_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj7682 
(function () {
	window.obj7674_onTap_runningActionsCount = obj7674_onTap_runningActionsCount + 1;


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

	if ($("#obj7682").css('filter') == 'none')
$("#obj7682").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7682").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7674_onTap_runningActionsCount = window.obj7674_onTap_runningActionsCount - 1;

if (window.obj7674_onTap_runningActionsCount < 0) {
	window.obj7674_onTap_runningActionsCount = 0;
} else if (window.obj7674_onTap_runningActionsCount == 0) {
	obj7674_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7674_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7674_onTap_activeActionGroupIndex = -1;
		$("#obj7674").trigger("obj7674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7674) {
				console.warn("de-queueing event obj7674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7674_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_7690();
function wait_7690() {
	window.obj7674_onTap_runningActionsCount = obj7674_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7674_onTap_runningActionsCount = window.obj7674_onTap_runningActionsCount - 1;

if (window.obj7674_onTap_runningActionsCount < 0) {
	window.obj7674_onTap_runningActionsCount = 0;
} else if (window.obj7674_onTap_runningActionsCount == 0) {
	obj7674_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj7674_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7674_onTap_activeActionGroupIndex = -1;
		$("#obj7674").trigger("obj7674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7674) {
				console.warn("de-queueing event obj7674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7674_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_7679();
function goToPage_7679() {
	window.obj7674_onTap_runningActionsCount = obj7674_onTap_runningActionsCount + 1;

	$("#anchor835")[0].click();
	window.obj7674_onTap_runningActionsCount = window.obj7674_onTap_runningActionsCount - 1;

if (window.obj7674_onTap_runningActionsCount < 0) {
	window.obj7674_onTap_runningActionsCount = 0;
} else if (window.obj7674_onTap_runningActionsCount == 0) {
	obj7674_onTap_actionGroup5();
}
}










































};
obj7674_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7674_onTap_activeActionGroupIndex = -1;
		$("#obj7674").trigger("obj7674_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7674) {
				console.warn("de-queueing event obj7674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7674_onTap_activeActionGroupIndex = 5;
	











































};
obj7664_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7664_onTap_activeActionGroupIndex = -1;
		$("#obj7664").trigger("obj7664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7664) {
				console.warn("de-queueing event obj7664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7664_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7630
(function(){
	window.obj7664_onTap_runningActionsCount = obj7664_onTap_runningActionsCount + 1;


	var selector = "#obj7630";
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
					window.obj7664_onTap_runningActionsCount = window.obj7664_onTap_runningActionsCount - 1;

if (window.obj7664_onTap_runningActionsCount < 0) {
	window.obj7664_onTap_runningActionsCount = 0;
} else if (window.obj7664_onTap_runningActionsCount == 0) {
	obj7664_onTap_actionGroup1();
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
				window.obj7664_onTap_runningActionsCount = window.obj7664_onTap_runningActionsCount - 1;

if (window.obj7664_onTap_runningActionsCount < 0) {
	window.obj7664_onTap_runningActionsCount = 0;
} else if (window.obj7664_onTap_runningActionsCount == 0) {
	obj7664_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7664_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7664_onTap_activeActionGroupIndex = -1;
		$("#obj7664").trigger("obj7664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7664) {
				console.warn("de-queueing event obj7664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7664_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_7667();
function playAudioFile_7667() {
	window.obj7664_onTap_runningActionsCount = obj7664_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7667")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7667");
			$("#obj_audio_playSoundFile7667").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7664_onTap_runningActionsCount = window.obj7664_onTap_runningActionsCount - 1;

if (window.obj7664_onTap_runningActionsCount < 0) {
	window.obj7664_onTap_runningActionsCount = 0;
} else if (window.obj7664_onTap_runningActionsCount == 0) {
	obj7664_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7664_onTap_runningActionsCount = window.obj7664_onTap_runningActionsCount - 1;

if (window.obj7664_onTap_runningActionsCount < 0) {
	window.obj7664_onTap_runningActionsCount = 0;
} else if (window.obj7664_onTap_runningActionsCount == 0) {
	obj7664_onTap_actionGroup2();
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
				window.obj7664_onTap_runningActionsCount = window.obj7664_onTap_runningActionsCount - 1;

if (window.obj7664_onTap_runningActionsCount < 0) {
	window.obj7664_onTap_runningActionsCount = 0;
} else if (window.obj7664_onTap_runningActionsCount == 0) {
	obj7664_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7664_onTap_runningActionsCount = window.obj7664_onTap_runningActionsCount - 1;

if (window.obj7664_onTap_runningActionsCount < 0) {
	window.obj7664_onTap_runningActionsCount = 0;
} else if (window.obj7664_onTap_runningActionsCount == 0) {
	obj7664_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj7664_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7664_onTap_activeActionGroupIndex = -1;
		$("#obj7664").trigger("obj7664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7664) {
				console.warn("de-queueing event obj7664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7664_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj7672 
(function () {
	window.obj7664_onTap_runningActionsCount = obj7664_onTap_runningActionsCount + 1;


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

	if ($("#obj7672").css('filter') == 'none')
$("#obj7672").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj7672").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj7664_onTap_runningActionsCount = window.obj7664_onTap_runningActionsCount - 1;

if (window.obj7664_onTap_runningActionsCount < 0) {
	window.obj7664_onTap_runningActionsCount = 0;
} else if (window.obj7664_onTap_runningActionsCount == 0) {
	obj7664_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj7664_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7664_onTap_activeActionGroupIndex = -1;
		$("#obj7664").trigger("obj7664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7664) {
				console.warn("de-queueing event obj7664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7664_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_7691();
function wait_7691() {
	window.obj7664_onTap_runningActionsCount = obj7664_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7664_onTap_runningActionsCount = window.obj7664_onTap_runningActionsCount - 1;

if (window.obj7664_onTap_runningActionsCount < 0) {
	window.obj7664_onTap_runningActionsCount = 0;
} else if (window.obj7664_onTap_runningActionsCount == 0) {
	obj7664_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj7664_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7664_onTap_activeActionGroupIndex = -1;
		$("#obj7664").trigger("obj7664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7664) {
				console.warn("de-queueing event obj7664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7664_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_7669();
function goToPage_7669() {
	window.obj7664_onTap_runningActionsCount = obj7664_onTap_runningActionsCount + 1;

	$("#anchor837")[0].click();
	window.obj7664_onTap_runningActionsCount = window.obj7664_onTap_runningActionsCount - 1;

if (window.obj7664_onTap_runningActionsCount < 0) {
	window.obj7664_onTap_runningActionsCount = 0;
} else if (window.obj7664_onTap_runningActionsCount == 0) {
	obj7664_onTap_actionGroup5();
}
}










































};
obj7664_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7664_onTap_activeActionGroupIndex = -1;
		$("#obj7664").trigger("obj7664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7664) {
				console.warn("de-queueing event obj7664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7664_onTap_activeActionGroupIndex = 5;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































/*
 *
 *   obj7543: Event Touch Down
 *
 */

$("#obj7543").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7543_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7543_onTap is still running");
	return;
}
var obj7543_onTap_runningActionsCount = 0;
var obj7543_onTap_loopCount = 0;
obj7543_onTap_actionGroup0();
});





























































































































































































/*
 *
 *   obj7626: Event Touch Down
 *
 */

$("#obj7626").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7626_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7626_onTap is still running");
	return;
}
var obj7626_onTap_runningActionsCount = 0;
var obj7626_onTap_loopCount = 0;
obj7626_onTap_actionGroup0();
});
























































/*
 *
 *   obj7634: Event Touch Down
 *
 */

$("#obj7634").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7634_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7634_onTap is still running");
	return;
}
var obj7634_onTap_runningActionsCount = 0;
var obj7634_onTap_loopCount = 0;
obj7634_onTap_actionGroup0();
});
























































/*
 *
 *   obj7654: Event Touch Down
 *
 */

$("#obj7654").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7654_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7654_onTap is still running");
	return;
}
var obj7654_onTap_runningActionsCount = 0;
var obj7654_onTap_loopCount = 0;
obj7654_onTap_actionGroup0();
});
























































/*
 *
 *   obj7644: Event Touch Down
 *
 */

$("#obj7644").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7644_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7644_onTap is still running");
	return;
}
var obj7644_onTap_runningActionsCount = 0;
var obj7644_onTap_loopCount = 0;
obj7644_onTap_actionGroup0();
});
























































/*
 *
 *   obj7674: Event Touch Down
 *
 */

$("#obj7674").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7674_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7674_onTap is still running");
	return;
}
var obj7674_onTap_runningActionsCount = 0;
var obj7674_onTap_loopCount = 0;
obj7674_onTap_actionGroup0();
});
























































/*
 *
 *   obj7664: Event Touch Down
 *
 */

$("#obj7664").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7664_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7664_onTap is still running");
	return;
}
var obj7664_onTap_runningActionsCount = 0;
var obj7664_onTap_loopCount = 0;
obj7664_onTap_actionGroup0();
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
	
$("#obj7616").trigger('SCEventShow');
$("#obj7619").trigger('SCEventShow');
$("#obj7614").trigger('SCEventShow');
$("#obj7541").trigger('SCEventShow');
$("#obj7543").trigger('SCEventShow');
$("#obj7549").trigger('SCEventShow');
$("#obj7553").trigger('SCEventShow');
$("#obj7599").trigger('SCEventShow');
$("#obj7602").trigger('SCEventShow');
$("#obj7604").trigger('SCEventShow');
$("#obj7606").trigger('SCEventShow');
$("#obj7608").trigger('SCEventShow');
$("#obj7622").trigger('SCEventShow');
$("#obj7624").trigger('SCEventShow');
$("#obj7626").trigger('SCEventShow');
$("#obj7642").trigger('SCEventShow');
$("#obj7640").trigger('SCEventShow');
$("#obj7634").trigger('SCEventShow');
$("#obj7662").trigger('SCEventShow');
$("#obj7660").trigger('SCEventShow');
$("#obj7654").trigger('SCEventShow');
$("#obj7652").trigger('SCEventShow');
$("#obj7650").trigger('SCEventShow');
$("#obj7644").trigger('SCEventShow');
$("#obj7682").trigger('SCEventShow');
$("#obj7680").trigger('SCEventShow');
$("#obj7674").trigger('SCEventShow');
$("#obj7672").trigger('SCEventShow');
$("#obj7670").trigger('SCEventShow');
$("#obj7664").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});