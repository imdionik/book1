pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 16795;
pubcoder.page.title = pubcoder.page.title || "13";
pubcoder.page.number = pubcoder.page.number || 13;
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
var obj16804_onTap_activeActionGroupIndex = -1;
var obj16804_onTap_runningActionsCount = 0;
var obj16804_onTap_loopCount = 0;
var obj16825_onTap_activeActionGroupIndex = -1;
var obj16825_onTap_runningActionsCount = 0;
var obj16825_onTap_loopCount = 0;
var obj16836_onTap_activeActionGroupIndex = -1;
var obj16836_onTap_runningActionsCount = 0;
var obj16836_onTap_loopCount = 0;
var obj16847_onTap_activeActionGroupIndex = -1;
var obj16847_onTap_runningActionsCount = 0;
var obj16847_onTap_loopCount = 0;
var obj16858_onTap_activeActionGroupIndex = -1;
var obj16858_onTap_runningActionsCount = 0;
var obj16858_onTap_loopCount = 0;
var obj16869_onTap_activeActionGroupIndex = -1;
var obj16869_onTap_runningActionsCount = 0;
var obj16869_onTap_loopCount = 0;
var obj16880_onTap_activeActionGroupIndex = -1;
var obj16880_onTap_runningActionsCount = 0;
var obj16880_onTap_loopCount = 0;

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
		
obj16804_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16804_onTap_activeActionGroupIndex = -1;
		$("#obj16804").trigger("obj16804_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16804) {
				console.warn("de-queueing event obj16804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16804_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_16806();
function goToPage_16806() {
	window.obj16804_onTap_runningActionsCount = obj16804_onTap_runningActionsCount + 1;

	$("#anchor204")[0].click();
	window.obj16804_onTap_runningActionsCount = window.obj16804_onTap_runningActionsCount - 1;

if (window.obj16804_onTap_runningActionsCount < 0) {
	window.obj16804_onTap_runningActionsCount = 0;
} else if (window.obj16804_onTap_runningActionsCount == 0) {
	obj16804_onTap_actionGroup1();
}
}










































};
obj16804_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16804_onTap_activeActionGroupIndex = -1;
		$("#obj16804").trigger("obj16804_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16804) {
				console.warn("de-queueing event obj16804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16804_onTap_activeActionGroupIndex = 1;
	











































};
obj16825_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16825_onTap_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16887
(function(){
	window.obj16825_onTap_runningActionsCount = obj16825_onTap_runningActionsCount + 1;


	var selector = "#obj16887";
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
					window.obj16825_onTap_runningActionsCount = window.obj16825_onTap_runningActionsCount - 1;

if (window.obj16825_onTap_runningActionsCount < 0) {
	window.obj16825_onTap_runningActionsCount = 0;
} else if (window.obj16825_onTap_runningActionsCount == 0) {
	obj16825_onTap_actionGroup1();
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
				window.obj16825_onTap_runningActionsCount = window.obj16825_onTap_runningActionsCount - 1;

if (window.obj16825_onTap_runningActionsCount < 0) {
	window.obj16825_onTap_runningActionsCount = 0;
} else if (window.obj16825_onTap_runningActionsCount == 0) {
	obj16825_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16825_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16825_onTap_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16828();
function playAudioFile_16828() {
	window.obj16825_onTap_runningActionsCount = obj16825_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16828")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16828");
			$("#obj_audio_playSoundFile16828").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16825_onTap_runningActionsCount = window.obj16825_onTap_runningActionsCount - 1;

if (window.obj16825_onTap_runningActionsCount < 0) {
	window.obj16825_onTap_runningActionsCount = 0;
} else if (window.obj16825_onTap_runningActionsCount == 0) {
	obj16825_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16825_onTap_runningActionsCount = window.obj16825_onTap_runningActionsCount - 1;

if (window.obj16825_onTap_runningActionsCount < 0) {
	window.obj16825_onTap_runningActionsCount = 0;
} else if (window.obj16825_onTap_runningActionsCount == 0) {
	obj16825_onTap_actionGroup2();
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
				window.obj16825_onTap_runningActionsCount = window.obj16825_onTap_runningActionsCount - 1;

if (window.obj16825_onTap_runningActionsCount < 0) {
	window.obj16825_onTap_runningActionsCount = 0;
} else if (window.obj16825_onTap_runningActionsCount == 0) {
	obj16825_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16825_onTap_runningActionsCount = window.obj16825_onTap_runningActionsCount - 1;

if (window.obj16825_onTap_runningActionsCount < 0) {
	window.obj16825_onTap_runningActionsCount = 0;
} else if (window.obj16825_onTap_runningActionsCount == 0) {
	obj16825_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16825_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16825_onTap_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj16821 
(function () {
	window.obj16825_onTap_runningActionsCount = obj16825_onTap_runningActionsCount + 1;


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

	if ($("#obj16821").css('filter') == 'none')
$("#obj16821").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj16821").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16825_onTap_runningActionsCount = window.obj16825_onTap_runningActionsCount - 1;

if (window.obj16825_onTap_runningActionsCount < 0) {
	window.obj16825_onTap_runningActionsCount = 0;
} else if (window.obj16825_onTap_runningActionsCount == 0) {
	obj16825_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj16825_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16825_onTap_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_16830();
function wait_16830() {
	window.obj16825_onTap_runningActionsCount = obj16825_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16825_onTap_runningActionsCount = window.obj16825_onTap_runningActionsCount - 1;

if (window.obj16825_onTap_runningActionsCount < 0) {
	window.obj16825_onTap_runningActionsCount = 0;
} else if (window.obj16825_onTap_runningActionsCount == 0) {
	obj16825_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj16825_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16825_onTap_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_16831();
function goToPage_16831() {
	window.obj16825_onTap_runningActionsCount = obj16825_onTap_runningActionsCount + 1;

	$("#anchor206")[0].click();
	window.obj16825_onTap_runningActionsCount = window.obj16825_onTap_runningActionsCount - 1;

if (window.obj16825_onTap_runningActionsCount < 0) {
	window.obj16825_onTap_runningActionsCount = 0;
} else if (window.obj16825_onTap_runningActionsCount == 0) {
	obj16825_onTap_actionGroup5();
}
}










































};
obj16825_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16825_onTap_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_onTap_activeActionGroupIndex = 5;
	











































};
obj16836_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16836_onTap_activeActionGroupIndex = -1;
		$("#obj16836").trigger("obj16836_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16836) {
				console.warn("de-queueing event obj16836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16836_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16887
(function(){
	window.obj16836_onTap_runningActionsCount = obj16836_onTap_runningActionsCount + 1;


	var selector = "#obj16887";
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
					window.obj16836_onTap_runningActionsCount = window.obj16836_onTap_runningActionsCount - 1;

if (window.obj16836_onTap_runningActionsCount < 0) {
	window.obj16836_onTap_runningActionsCount = 0;
} else if (window.obj16836_onTap_runningActionsCount == 0) {
	obj16836_onTap_actionGroup1();
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
				window.obj16836_onTap_runningActionsCount = window.obj16836_onTap_runningActionsCount - 1;

if (window.obj16836_onTap_runningActionsCount < 0) {
	window.obj16836_onTap_runningActionsCount = 0;
} else if (window.obj16836_onTap_runningActionsCount == 0) {
	obj16836_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16836_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16836_onTap_activeActionGroupIndex = -1;
		$("#obj16836").trigger("obj16836_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16836) {
				console.warn("de-queueing event obj16836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16836_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16839();
function playAudioFile_16839() {
	window.obj16836_onTap_runningActionsCount = obj16836_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16839")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16839");
			$("#obj_audio_playSoundFile16839").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16836_onTap_runningActionsCount = window.obj16836_onTap_runningActionsCount - 1;

if (window.obj16836_onTap_runningActionsCount < 0) {
	window.obj16836_onTap_runningActionsCount = 0;
} else if (window.obj16836_onTap_runningActionsCount == 0) {
	obj16836_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16836_onTap_runningActionsCount = window.obj16836_onTap_runningActionsCount - 1;

if (window.obj16836_onTap_runningActionsCount < 0) {
	window.obj16836_onTap_runningActionsCount = 0;
} else if (window.obj16836_onTap_runningActionsCount == 0) {
	obj16836_onTap_actionGroup2();
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
				window.obj16836_onTap_runningActionsCount = window.obj16836_onTap_runningActionsCount - 1;

if (window.obj16836_onTap_runningActionsCount < 0) {
	window.obj16836_onTap_runningActionsCount = 0;
} else if (window.obj16836_onTap_runningActionsCount == 0) {
	obj16836_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16836_onTap_runningActionsCount = window.obj16836_onTap_runningActionsCount - 1;

if (window.obj16836_onTap_runningActionsCount < 0) {
	window.obj16836_onTap_runningActionsCount = 0;
} else if (window.obj16836_onTap_runningActionsCount == 0) {
	obj16836_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16836_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16836_onTap_activeActionGroupIndex = -1;
		$("#obj16836").trigger("obj16836_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16836) {
				console.warn("de-queueing event obj16836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16836_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj16832 
(function () {
	window.obj16836_onTap_runningActionsCount = obj16836_onTap_runningActionsCount + 1;


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

	if ($("#obj16832").css('filter') == 'none')
$("#obj16832").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj16832").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16836_onTap_runningActionsCount = window.obj16836_onTap_runningActionsCount - 1;

if (window.obj16836_onTap_runningActionsCount < 0) {
	window.obj16836_onTap_runningActionsCount = 0;
} else if (window.obj16836_onTap_runningActionsCount == 0) {
	obj16836_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj16836_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16836_onTap_activeActionGroupIndex = -1;
		$("#obj16836").trigger("obj16836_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16836) {
				console.warn("de-queueing event obj16836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16836_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_16841();
function wait_16841() {
	window.obj16836_onTap_runningActionsCount = obj16836_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16836_onTap_runningActionsCount = window.obj16836_onTap_runningActionsCount - 1;

if (window.obj16836_onTap_runningActionsCount < 0) {
	window.obj16836_onTap_runningActionsCount = 0;
} else if (window.obj16836_onTap_runningActionsCount == 0) {
	obj16836_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj16836_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16836_onTap_activeActionGroupIndex = -1;
		$("#obj16836").trigger("obj16836_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16836) {
				console.warn("de-queueing event obj16836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16836_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_16842();
function goToPage_16842() {
	window.obj16836_onTap_runningActionsCount = obj16836_onTap_runningActionsCount + 1;

	$("#anchor208")[0].click();
	window.obj16836_onTap_runningActionsCount = window.obj16836_onTap_runningActionsCount - 1;

if (window.obj16836_onTap_runningActionsCount < 0) {
	window.obj16836_onTap_runningActionsCount = 0;
} else if (window.obj16836_onTap_runningActionsCount == 0) {
	obj16836_onTap_actionGroup5();
}
}










































};
obj16836_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16836_onTap_activeActionGroupIndex = -1;
		$("#obj16836").trigger("obj16836_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16836) {
				console.warn("de-queueing event obj16836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16836_onTap_activeActionGroupIndex = 5;
	











































};
obj16847_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16847_onTap_activeActionGroupIndex = -1;
		$("#obj16847").trigger("obj16847_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16847) {
				console.warn("de-queueing event obj16847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16847_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16887
(function(){
	window.obj16847_onTap_runningActionsCount = obj16847_onTap_runningActionsCount + 1;


	var selector = "#obj16887";
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
					window.obj16847_onTap_runningActionsCount = window.obj16847_onTap_runningActionsCount - 1;

if (window.obj16847_onTap_runningActionsCount < 0) {
	window.obj16847_onTap_runningActionsCount = 0;
} else if (window.obj16847_onTap_runningActionsCount == 0) {
	obj16847_onTap_actionGroup1();
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
				window.obj16847_onTap_runningActionsCount = window.obj16847_onTap_runningActionsCount - 1;

if (window.obj16847_onTap_runningActionsCount < 0) {
	window.obj16847_onTap_runningActionsCount = 0;
} else if (window.obj16847_onTap_runningActionsCount == 0) {
	obj16847_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16847_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16847_onTap_activeActionGroupIndex = -1;
		$("#obj16847").trigger("obj16847_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16847) {
				console.warn("de-queueing event obj16847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16847_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16850();
function playAudioFile_16850() {
	window.obj16847_onTap_runningActionsCount = obj16847_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16850")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16850");
			$("#obj_audio_playSoundFile16850").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16847_onTap_runningActionsCount = window.obj16847_onTap_runningActionsCount - 1;

if (window.obj16847_onTap_runningActionsCount < 0) {
	window.obj16847_onTap_runningActionsCount = 0;
} else if (window.obj16847_onTap_runningActionsCount == 0) {
	obj16847_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16847_onTap_runningActionsCount = window.obj16847_onTap_runningActionsCount - 1;

if (window.obj16847_onTap_runningActionsCount < 0) {
	window.obj16847_onTap_runningActionsCount = 0;
} else if (window.obj16847_onTap_runningActionsCount == 0) {
	obj16847_onTap_actionGroup2();
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
				window.obj16847_onTap_runningActionsCount = window.obj16847_onTap_runningActionsCount - 1;

if (window.obj16847_onTap_runningActionsCount < 0) {
	window.obj16847_onTap_runningActionsCount = 0;
} else if (window.obj16847_onTap_runningActionsCount == 0) {
	obj16847_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16847_onTap_runningActionsCount = window.obj16847_onTap_runningActionsCount - 1;

if (window.obj16847_onTap_runningActionsCount < 0) {
	window.obj16847_onTap_runningActionsCount = 0;
} else if (window.obj16847_onTap_runningActionsCount == 0) {
	obj16847_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16847_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16847_onTap_activeActionGroupIndex = -1;
		$("#obj16847").trigger("obj16847_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16847) {
				console.warn("de-queueing event obj16847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16847_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj16843 
(function () {
	window.obj16847_onTap_runningActionsCount = obj16847_onTap_runningActionsCount + 1;


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

	if ($("#obj16843").css('filter') == 'none')
$("#obj16843").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj16843").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16847_onTap_runningActionsCount = window.obj16847_onTap_runningActionsCount - 1;

if (window.obj16847_onTap_runningActionsCount < 0) {
	window.obj16847_onTap_runningActionsCount = 0;
} else if (window.obj16847_onTap_runningActionsCount == 0) {
	obj16847_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj16847_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16847_onTap_activeActionGroupIndex = -1;
		$("#obj16847").trigger("obj16847_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16847) {
				console.warn("de-queueing event obj16847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16847_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_16852();
function wait_16852() {
	window.obj16847_onTap_runningActionsCount = obj16847_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16847_onTap_runningActionsCount = window.obj16847_onTap_runningActionsCount - 1;

if (window.obj16847_onTap_runningActionsCount < 0) {
	window.obj16847_onTap_runningActionsCount = 0;
} else if (window.obj16847_onTap_runningActionsCount == 0) {
	obj16847_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj16847_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16847_onTap_activeActionGroupIndex = -1;
		$("#obj16847").trigger("obj16847_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16847) {
				console.warn("de-queueing event obj16847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16847_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_16853();
function goToPage_16853() {
	window.obj16847_onTap_runningActionsCount = obj16847_onTap_runningActionsCount + 1;

	$("#anchor210")[0].click();
	window.obj16847_onTap_runningActionsCount = window.obj16847_onTap_runningActionsCount - 1;

if (window.obj16847_onTap_runningActionsCount < 0) {
	window.obj16847_onTap_runningActionsCount = 0;
} else if (window.obj16847_onTap_runningActionsCount == 0) {
	obj16847_onTap_actionGroup5();
}
}










































};
obj16847_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16847_onTap_activeActionGroupIndex = -1;
		$("#obj16847").trigger("obj16847_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16847) {
				console.warn("de-queueing event obj16847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16847_onTap_activeActionGroupIndex = 5;
	











































};
obj16858_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16858_onTap_activeActionGroupIndex = -1;
		$("#obj16858").trigger("obj16858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16858) {
				console.warn("de-queueing event obj16858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16858_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16887
(function(){
	window.obj16858_onTap_runningActionsCount = obj16858_onTap_runningActionsCount + 1;


	var selector = "#obj16887";
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
					window.obj16858_onTap_runningActionsCount = window.obj16858_onTap_runningActionsCount - 1;

if (window.obj16858_onTap_runningActionsCount < 0) {
	window.obj16858_onTap_runningActionsCount = 0;
} else if (window.obj16858_onTap_runningActionsCount == 0) {
	obj16858_onTap_actionGroup1();
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
				window.obj16858_onTap_runningActionsCount = window.obj16858_onTap_runningActionsCount - 1;

if (window.obj16858_onTap_runningActionsCount < 0) {
	window.obj16858_onTap_runningActionsCount = 0;
} else if (window.obj16858_onTap_runningActionsCount == 0) {
	obj16858_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16858_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16858_onTap_activeActionGroupIndex = -1;
		$("#obj16858").trigger("obj16858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16858) {
				console.warn("de-queueing event obj16858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16858_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16861();
function playAudioFile_16861() {
	window.obj16858_onTap_runningActionsCount = obj16858_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16861")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16861");
			$("#obj_audio_playSoundFile16861").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16858_onTap_runningActionsCount = window.obj16858_onTap_runningActionsCount - 1;

if (window.obj16858_onTap_runningActionsCount < 0) {
	window.obj16858_onTap_runningActionsCount = 0;
} else if (window.obj16858_onTap_runningActionsCount == 0) {
	obj16858_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16858_onTap_runningActionsCount = window.obj16858_onTap_runningActionsCount - 1;

if (window.obj16858_onTap_runningActionsCount < 0) {
	window.obj16858_onTap_runningActionsCount = 0;
} else if (window.obj16858_onTap_runningActionsCount == 0) {
	obj16858_onTap_actionGroup2();
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
				window.obj16858_onTap_runningActionsCount = window.obj16858_onTap_runningActionsCount - 1;

if (window.obj16858_onTap_runningActionsCount < 0) {
	window.obj16858_onTap_runningActionsCount = 0;
} else if (window.obj16858_onTap_runningActionsCount == 0) {
	obj16858_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16858_onTap_runningActionsCount = window.obj16858_onTap_runningActionsCount - 1;

if (window.obj16858_onTap_runningActionsCount < 0) {
	window.obj16858_onTap_runningActionsCount = 0;
} else if (window.obj16858_onTap_runningActionsCount == 0) {
	obj16858_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16858_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16858_onTap_activeActionGroupIndex = -1;
		$("#obj16858").trigger("obj16858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16858) {
				console.warn("de-queueing event obj16858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16858_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj16854 
(function () {
	window.obj16858_onTap_runningActionsCount = obj16858_onTap_runningActionsCount + 1;


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

	if ($("#obj16854").css('filter') == 'none')
$("#obj16854").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj16854").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16858_onTap_runningActionsCount = window.obj16858_onTap_runningActionsCount - 1;

if (window.obj16858_onTap_runningActionsCount < 0) {
	window.obj16858_onTap_runningActionsCount = 0;
} else if (window.obj16858_onTap_runningActionsCount == 0) {
	obj16858_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj16858_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16858_onTap_activeActionGroupIndex = -1;
		$("#obj16858").trigger("obj16858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16858) {
				console.warn("de-queueing event obj16858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16858_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_16863();
function wait_16863() {
	window.obj16858_onTap_runningActionsCount = obj16858_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16858_onTap_runningActionsCount = window.obj16858_onTap_runningActionsCount - 1;

if (window.obj16858_onTap_runningActionsCount < 0) {
	window.obj16858_onTap_runningActionsCount = 0;
} else if (window.obj16858_onTap_runningActionsCount == 0) {
	obj16858_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj16858_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16858_onTap_activeActionGroupIndex = -1;
		$("#obj16858").trigger("obj16858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16858) {
				console.warn("de-queueing event obj16858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16858_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_16864();
function goToPage_16864() {
	window.obj16858_onTap_runningActionsCount = obj16858_onTap_runningActionsCount + 1;

	$("#anchor212")[0].click();
	window.obj16858_onTap_runningActionsCount = window.obj16858_onTap_runningActionsCount - 1;

if (window.obj16858_onTap_runningActionsCount < 0) {
	window.obj16858_onTap_runningActionsCount = 0;
} else if (window.obj16858_onTap_runningActionsCount == 0) {
	obj16858_onTap_actionGroup5();
}
}










































};
obj16858_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16858_onTap_activeActionGroupIndex = -1;
		$("#obj16858").trigger("obj16858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16858) {
				console.warn("de-queueing event obj16858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16858_onTap_activeActionGroupIndex = 5;
	











































};
obj16869_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16869_onTap_activeActionGroupIndex = -1;
		$("#obj16869").trigger("obj16869_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16869) {
				console.warn("de-queueing event obj16869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16869_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16887
(function(){
	window.obj16869_onTap_runningActionsCount = obj16869_onTap_runningActionsCount + 1;


	var selector = "#obj16887";
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
					window.obj16869_onTap_runningActionsCount = window.obj16869_onTap_runningActionsCount - 1;

if (window.obj16869_onTap_runningActionsCount < 0) {
	window.obj16869_onTap_runningActionsCount = 0;
} else if (window.obj16869_onTap_runningActionsCount == 0) {
	obj16869_onTap_actionGroup1();
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
				window.obj16869_onTap_runningActionsCount = window.obj16869_onTap_runningActionsCount - 1;

if (window.obj16869_onTap_runningActionsCount < 0) {
	window.obj16869_onTap_runningActionsCount = 0;
} else if (window.obj16869_onTap_runningActionsCount == 0) {
	obj16869_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16869_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16869_onTap_activeActionGroupIndex = -1;
		$("#obj16869").trigger("obj16869_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16869) {
				console.warn("de-queueing event obj16869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16869_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16872();
function playAudioFile_16872() {
	window.obj16869_onTap_runningActionsCount = obj16869_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16872")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16872");
			$("#obj_audio_playSoundFile16872").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16869_onTap_runningActionsCount = window.obj16869_onTap_runningActionsCount - 1;

if (window.obj16869_onTap_runningActionsCount < 0) {
	window.obj16869_onTap_runningActionsCount = 0;
} else if (window.obj16869_onTap_runningActionsCount == 0) {
	obj16869_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16869_onTap_runningActionsCount = window.obj16869_onTap_runningActionsCount - 1;

if (window.obj16869_onTap_runningActionsCount < 0) {
	window.obj16869_onTap_runningActionsCount = 0;
} else if (window.obj16869_onTap_runningActionsCount == 0) {
	obj16869_onTap_actionGroup2();
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
				window.obj16869_onTap_runningActionsCount = window.obj16869_onTap_runningActionsCount - 1;

if (window.obj16869_onTap_runningActionsCount < 0) {
	window.obj16869_onTap_runningActionsCount = 0;
} else if (window.obj16869_onTap_runningActionsCount == 0) {
	obj16869_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16869_onTap_runningActionsCount = window.obj16869_onTap_runningActionsCount - 1;

if (window.obj16869_onTap_runningActionsCount < 0) {
	window.obj16869_onTap_runningActionsCount = 0;
} else if (window.obj16869_onTap_runningActionsCount == 0) {
	obj16869_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16869_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16869_onTap_activeActionGroupIndex = -1;
		$("#obj16869").trigger("obj16869_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16869) {
				console.warn("de-queueing event obj16869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16869_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj16865 
(function () {
	window.obj16869_onTap_runningActionsCount = obj16869_onTap_runningActionsCount + 1;


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

	if ($("#obj16865").css('filter') == 'none')
$("#obj16865").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj16865").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16869_onTap_runningActionsCount = window.obj16869_onTap_runningActionsCount - 1;

if (window.obj16869_onTap_runningActionsCount < 0) {
	window.obj16869_onTap_runningActionsCount = 0;
} else if (window.obj16869_onTap_runningActionsCount == 0) {
	obj16869_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj16869_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16869_onTap_activeActionGroupIndex = -1;
		$("#obj16869").trigger("obj16869_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16869) {
				console.warn("de-queueing event obj16869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16869_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_16874();
function wait_16874() {
	window.obj16869_onTap_runningActionsCount = obj16869_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16869_onTap_runningActionsCount = window.obj16869_onTap_runningActionsCount - 1;

if (window.obj16869_onTap_runningActionsCount < 0) {
	window.obj16869_onTap_runningActionsCount = 0;
} else if (window.obj16869_onTap_runningActionsCount == 0) {
	obj16869_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj16869_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16869_onTap_activeActionGroupIndex = -1;
		$("#obj16869").trigger("obj16869_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16869) {
				console.warn("de-queueing event obj16869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16869_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_16875();
function goToPage_16875() {
	window.obj16869_onTap_runningActionsCount = obj16869_onTap_runningActionsCount + 1;

	$("#anchor214")[0].click();
	window.obj16869_onTap_runningActionsCount = window.obj16869_onTap_runningActionsCount - 1;

if (window.obj16869_onTap_runningActionsCount < 0) {
	window.obj16869_onTap_runningActionsCount = 0;
} else if (window.obj16869_onTap_runningActionsCount == 0) {
	obj16869_onTap_actionGroup5();
}
}










































};
obj16869_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16869_onTap_activeActionGroupIndex = -1;
		$("#obj16869").trigger("obj16869_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16869) {
				console.warn("de-queueing event obj16869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16869_onTap_activeActionGroupIndex = 5;
	











































};
obj16880_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16880_onTap_activeActionGroupIndex = -1;
		$("#obj16880").trigger("obj16880_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16880) {
				console.warn("de-queueing event obj16880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16880_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16887
(function(){
	window.obj16880_onTap_runningActionsCount = obj16880_onTap_runningActionsCount + 1;


	var selector = "#obj16887";
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
					window.obj16880_onTap_runningActionsCount = window.obj16880_onTap_runningActionsCount - 1;

if (window.obj16880_onTap_runningActionsCount < 0) {
	window.obj16880_onTap_runningActionsCount = 0;
} else if (window.obj16880_onTap_runningActionsCount == 0) {
	obj16880_onTap_actionGroup1();
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
				window.obj16880_onTap_runningActionsCount = window.obj16880_onTap_runningActionsCount - 1;

if (window.obj16880_onTap_runningActionsCount < 0) {
	window.obj16880_onTap_runningActionsCount = 0;
} else if (window.obj16880_onTap_runningActionsCount == 0) {
	obj16880_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16880_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16880_onTap_activeActionGroupIndex = -1;
		$("#obj16880").trigger("obj16880_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16880) {
				console.warn("de-queueing event obj16880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16880_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_16883();
function playAudioFile_16883() {
	window.obj16880_onTap_runningActionsCount = obj16880_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16883")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16883");
			$("#obj_audio_playSoundFile16883").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16880_onTap_runningActionsCount = window.obj16880_onTap_runningActionsCount - 1;

if (window.obj16880_onTap_runningActionsCount < 0) {
	window.obj16880_onTap_runningActionsCount = 0;
} else if (window.obj16880_onTap_runningActionsCount == 0) {
	obj16880_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16880_onTap_runningActionsCount = window.obj16880_onTap_runningActionsCount - 1;

if (window.obj16880_onTap_runningActionsCount < 0) {
	window.obj16880_onTap_runningActionsCount = 0;
} else if (window.obj16880_onTap_runningActionsCount == 0) {
	obj16880_onTap_actionGroup2();
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
				window.obj16880_onTap_runningActionsCount = window.obj16880_onTap_runningActionsCount - 1;

if (window.obj16880_onTap_runningActionsCount < 0) {
	window.obj16880_onTap_runningActionsCount = 0;
} else if (window.obj16880_onTap_runningActionsCount == 0) {
	obj16880_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj16880_onTap_runningActionsCount = window.obj16880_onTap_runningActionsCount - 1;

if (window.obj16880_onTap_runningActionsCount < 0) {
	window.obj16880_onTap_runningActionsCount = 0;
} else if (window.obj16880_onTap_runningActionsCount == 0) {
	obj16880_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj16880_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16880_onTap_activeActionGroupIndex = -1;
		$("#obj16880").trigger("obj16880_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16880) {
				console.warn("de-queueing event obj16880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16880_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj16876 
(function () {
	window.obj16880_onTap_runningActionsCount = obj16880_onTap_runningActionsCount + 1;


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

	if ($("#obj16876").css('filter') == 'none')
$("#obj16876").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj16876").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16880_onTap_runningActionsCount = window.obj16880_onTap_runningActionsCount - 1;

if (window.obj16880_onTap_runningActionsCount < 0) {
	window.obj16880_onTap_runningActionsCount = 0;
} else if (window.obj16880_onTap_runningActionsCount == 0) {
	obj16880_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj16880_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16880_onTap_activeActionGroupIndex = -1;
		$("#obj16880").trigger("obj16880_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16880) {
				console.warn("de-queueing event obj16880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16880_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_16885();
function wait_16885() {
	window.obj16880_onTap_runningActionsCount = obj16880_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16880_onTap_runningActionsCount = window.obj16880_onTap_runningActionsCount - 1;

if (window.obj16880_onTap_runningActionsCount < 0) {
	window.obj16880_onTap_runningActionsCount = 0;
} else if (window.obj16880_onTap_runningActionsCount == 0) {
	obj16880_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj16880_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16880_onTap_activeActionGroupIndex = -1;
		$("#obj16880").trigger("obj16880_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16880) {
				console.warn("de-queueing event obj16880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16880_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_16886();
function goToPage_16886() {
	window.obj16880_onTap_runningActionsCount = obj16880_onTap_runningActionsCount + 1;

	$("#anchor216")[0].click();
	window.obj16880_onTap_runningActionsCount = window.obj16880_onTap_runningActionsCount - 1;

if (window.obj16880_onTap_runningActionsCount < 0) {
	window.obj16880_onTap_runningActionsCount = 0;
} else if (window.obj16880_onTap_runningActionsCount == 0) {
	obj16880_onTap_actionGroup5();
}
}










































};
obj16880_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16880_onTap_activeActionGroupIndex = -1;
		$("#obj16880").trigger("obj16880_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16880) {
				console.warn("de-queueing event obj16880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16880_onTap_activeActionGroupIndex = 5;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































/*
 *
 *   obj16804: Event Touch Down
 *
 */

$("#obj16804").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16804_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16804_onTap is still running");
	return;
}
var obj16804_onTap_runningActionsCount = 0;
var obj16804_onTap_loopCount = 0;
obj16804_onTap_actionGroup0();
});





























































































































































































/*
 *
 *   obj16825: Event Touch Down
 *
 */

$("#obj16825").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16825_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16825_onTap is still running");
	return;
}
var obj16825_onTap_runningActionsCount = 0;
var obj16825_onTap_loopCount = 0;
obj16825_onTap_actionGroup0();
});
























































/*
 *
 *   obj16836: Event Touch Down
 *
 */

$("#obj16836").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16836_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16836_onTap is still running");
	return;
}
var obj16836_onTap_runningActionsCount = 0;
var obj16836_onTap_loopCount = 0;
obj16836_onTap_actionGroup0();
});
























































/*
 *
 *   obj16847: Event Touch Down
 *
 */

$("#obj16847").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16847_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16847_onTap is still running");
	return;
}
var obj16847_onTap_runningActionsCount = 0;
var obj16847_onTap_loopCount = 0;
obj16847_onTap_actionGroup0();
});
























































/*
 *
 *   obj16858: Event Touch Down
 *
 */

$("#obj16858").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16858_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16858_onTap is still running");
	return;
}
var obj16858_onTap_runningActionsCount = 0;
var obj16858_onTap_loopCount = 0;
obj16858_onTap_actionGroup0();
});
























































/*
 *
 *   obj16869: Event Touch Down
 *
 */

$("#obj16869").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16869_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16869_onTap is still running");
	return;
}
var obj16869_onTap_runningActionsCount = 0;
var obj16869_onTap_loopCount = 0;
obj16869_onTap_actionGroup0();
});
























































/*
 *
 *   obj16880: Event Touch Down
 *
 */

$("#obj16880").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16880_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16880_onTap is still running");
	return;
}
var obj16880_onTap_runningActionsCount = 0;
var obj16880_onTap_loopCount = 0;
obj16880_onTap_actionGroup0();
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
	
$("#obj16796").trigger('SCEventShow');
$("#obj16798").trigger('SCEventShow');
$("#obj16800").trigger('SCEventShow');
$("#obj16802").trigger('SCEventShow');
$("#obj16804").trigger('SCEventShow');
$("#obj16807").trigger('SCEventShow');
$("#obj16809").trigger('SCEventShow');
$("#obj16811").trigger('SCEventShow');
$("#obj16813").trigger('SCEventShow');
$("#obj16815").trigger('SCEventShow');
$("#obj16817").trigger('SCEventShow');
$("#obj16819").trigger('SCEventShow');
$("#obj16821").trigger('SCEventShow');
$("#obj16823").trigger('SCEventShow');
$("#obj16825").trigger('SCEventShow');
$("#obj16832").trigger('SCEventShow');
$("#obj16834").trigger('SCEventShow');
$("#obj16836").trigger('SCEventShow');
$("#obj16843").trigger('SCEventShow');
$("#obj16845").trigger('SCEventShow');
$("#obj16847").trigger('SCEventShow');
$("#obj16854").trigger('SCEventShow');
$("#obj16856").trigger('SCEventShow');
$("#obj16858").trigger('SCEventShow');
$("#obj16865").trigger('SCEventShow');
$("#obj16867").trigger('SCEventShow');
$("#obj16869").trigger('SCEventShow');
$("#obj16876").trigger('SCEventShow');
$("#obj16878").trigger('SCEventShow');
$("#obj16880").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});