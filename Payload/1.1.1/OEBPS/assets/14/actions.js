pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 11419;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
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
var obj12059_onTap_activeActionGroupIndex = -1;
var obj12059_onTap_runningActionsCount = 0;
var obj12059_onTap_loopCount = 0;
var obj12081_onTap_activeActionGroupIndex = -1;
var obj12081_onTap_runningActionsCount = 0;
var obj12081_onTap_loopCount = 0;
var obj12130_onTap_activeActionGroupIndex = -1;
var obj12130_onTap_runningActionsCount = 0;
var obj12130_onTap_loopCount = 0;
var obj12155_onTap_activeActionGroupIndex = -1;
var obj12155_onTap_runningActionsCount = 0;
var obj12155_onTap_loopCount = 0;
var obj12179_onTap_activeActionGroupIndex = -1;
var obj12179_onTap_runningActionsCount = 0;
var obj12179_onTap_loopCount = 0;
var obj12171_onTap_activeActionGroupIndex = -1;
var obj12171_onTap_runningActionsCount = 0;
var obj12171_onTap_loopCount = 0;
var obj12203_onTap_activeActionGroupIndex = -1;
var obj12203_onTap_runningActionsCount = 0;
var obj12203_onTap_loopCount = 0;
var obj12227_onTap_activeActionGroupIndex = -1;
var obj12227_onTap_runningActionsCount = 0;
var obj12227_onTap_loopCount = 0;
var obj12251_onTap_activeActionGroupIndex = -1;
var obj12251_onTap_runningActionsCount = 0;
var obj12251_onTap_loopCount = 0;
var obj12275_onTap_activeActionGroupIndex = -1;
var obj12275_onTap_runningActionsCount = 0;
var obj12275_onTap_loopCount = 0;
var obj12299_onTap_activeActionGroupIndex = -1;
var obj12299_onTap_runningActionsCount = 0;
var obj12299_onTap_loopCount = 0;
var obj12069_onTap_activeActionGroupIndex = -1;
var obj12069_onTap_runningActionsCount = 0;
var obj12069_onTap_loopCount = 0;
var obj12315_onTap_activeActionGroupIndex = -1;
var obj12315_onTap_runningActionsCount = 0;
var obj12315_onTap_loopCount = 0;
var obj12329_onTap_activeActionGroupIndex = -1;
var obj12329_onTap_runningActionsCount = 0;
var obj12329_onTap_loopCount = 0;
var obj24751_onTap_activeActionGroupIndex = -1;
var obj24751_onTap_runningActionsCount = 0;
var obj24751_onTap_loopCount = 0;
var obj24759_onTap_activeActionGroupIndex = -1;
var obj24759_onTap_runningActionsCount = 0;
var obj24759_onTap_loopCount = 0;
var obj24767_onTap_activeActionGroupIndex = -1;
var obj24767_onTap_runningActionsCount = 0;
var obj24767_onTap_loopCount = 0;
var obj24776_onTap_activeActionGroupIndex = -1;
var obj24776_onTap_runningActionsCount = 0;
var obj24776_onTap_loopCount = 0;
var obj24784_onTap_activeActionGroupIndex = -1;
var obj24784_onTap_runningActionsCount = 0;
var obj24784_onTap_loopCount = 0;
var obj24792_onTap_activeActionGroupIndex = -1;
var obj24792_onTap_runningActionsCount = 0;
var obj24792_onTap_loopCount = 0;
var obj24800_onTap_activeActionGroupIndex = -1;
var obj24800_onTap_runningActionsCount = 0;
var obj24800_onTap_loopCount = 0;
var obj24808_onTap_activeActionGroupIndex = -1;
var obj24808_onTap_runningActionsCount = 0;
var obj24808_onTap_loopCount = 0;
var obj24518_onTap_activeActionGroupIndex = -1;
var obj24518_onTap_runningActionsCount = 0;
var obj24518_onTap_loopCount = 0;

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
		
obj12059_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12059_onTap_activeActionGroupIndex = -1;
		$("#obj12059").trigger("obj12059_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12059) {
				console.warn("de-queueing event obj12059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12059_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12069
(function(){
	window.obj12059_onTap_runningActionsCount = obj12059_onTap_runningActionsCount + 1;


	var selector = "#obj12069";
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
					window.obj12059_onTap_runningActionsCount = window.obj12059_onTap_runningActionsCount - 1;

if (window.obj12059_onTap_runningActionsCount < 0) {
	window.obj12059_onTap_runningActionsCount = 0;
} else if (window.obj12059_onTap_runningActionsCount == 0) {
	obj12059_onTap_actionGroup1();
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
				window.obj12059_onTap_runningActionsCount = window.obj12059_onTap_runningActionsCount - 1;

if (window.obj12059_onTap_runningActionsCount < 0) {
	window.obj12059_onTap_runningActionsCount = 0;
} else if (window.obj12059_onTap_runningActionsCount == 0) {
	obj12059_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12059_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12059_onTap_activeActionGroupIndex = -1;
		$("#obj12059").trigger("obj12059_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12059) {
				console.warn("de-queueing event obj12059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12059_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj12065
(function(){
	window.obj12059_onTap_runningActionsCount = obj12059_onTap_runningActionsCount + 1;


	var selector = "#obj12065";
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
					window.obj12059_onTap_runningActionsCount = window.obj12059_onTap_runningActionsCount - 1;

if (window.obj12059_onTap_runningActionsCount < 0) {
	window.obj12059_onTap_runningActionsCount = 0;
} else if (window.obj12059_onTap_runningActionsCount == 0) {
	obj12059_onTap_actionGroup2();
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
				window.obj12059_onTap_runningActionsCount = window.obj12059_onTap_runningActionsCount - 1;

if (window.obj12059_onTap_runningActionsCount < 0) {
	window.obj12059_onTap_runningActionsCount = 0;
} else if (window.obj12059_onTap_runningActionsCount == 0) {
	obj12059_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12067
(function(){
	window.obj12059_onTap_runningActionsCount = obj12059_onTap_runningActionsCount + 1;


	var selector = "#obj12067";
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
					window.obj12059_onTap_runningActionsCount = window.obj12059_onTap_runningActionsCount - 1;

if (window.obj12059_onTap_runningActionsCount < 0) {
	window.obj12059_onTap_runningActionsCount = 0;
} else if (window.obj12059_onTap_runningActionsCount == 0) {
	obj12059_onTap_actionGroup2();
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
				window.obj12059_onTap_runningActionsCount = window.obj12059_onTap_runningActionsCount - 1;

if (window.obj12059_onTap_runningActionsCount < 0) {
	window.obj12059_onTap_runningActionsCount = 0;
} else if (window.obj12059_onTap_runningActionsCount == 0) {
	obj12059_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12059_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12059_onTap_activeActionGroupIndex = -1;
		$("#obj12059").trigger("obj12059_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12059) {
				console.warn("de-queueing event obj12059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12059_onTap_activeActionGroupIndex = 2;
	











































};
obj12081_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12081_onTap_activeActionGroupIndex = -1;
		$("#obj12081").trigger("obj12081_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12081) {
				console.warn("de-queueing event obj12081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12081_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12083();
function goToPage_12083() {
	window.obj12081_onTap_runningActionsCount = obj12081_onTap_runningActionsCount + 1;

	$("#anchor217")[0].click();
	window.obj12081_onTap_runningActionsCount = window.obj12081_onTap_runningActionsCount - 1;

if (window.obj12081_onTap_runningActionsCount < 0) {
	window.obj12081_onTap_runningActionsCount = 0;
} else if (window.obj12081_onTap_runningActionsCount == 0) {
	obj12081_onTap_actionGroup1();
}
}










































};
obj12081_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12081_onTap_activeActionGroupIndex = -1;
		$("#obj12081").trigger("obj12081_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12081) {
				console.warn("de-queueing event obj12081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12081_onTap_activeActionGroupIndex = 1;
	











































};
obj12130_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12130_onTap_activeActionGroupIndex = -1;
		$("#obj12130").trigger("obj12130_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12130) {
				console.warn("de-queueing event obj12130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12130_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12132();
function playAudioFile_12132() {
	window.obj12130_onTap_runningActionsCount = obj12130_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12132")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12132");
			$("#obj_audio_playSoundFile12132").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup1();
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
				window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12130_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12130_onTap_activeActionGroupIndex = -1;
		$("#obj12130").trigger("obj12130_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12130) {
				console.warn("de-queueing event obj12130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12130_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12128 
hide_24765();
function hide_24765() {
	var selector = "#obj12128";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12130_onTap_runningActionsCount = obj12130_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24765(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12130 
hide_24766();
function hide_24766() {
	var selector = "#obj12130";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12130_onTap_runningActionsCount = obj12130_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24766(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12130_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12130_onTap_activeActionGroupIndex = -1;
		$("#obj12130").trigger("obj12130_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12130) {
				console.warn("de-queueing event obj12130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12130_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24759
(function(){
	window.obj12130_onTap_runningActionsCount = obj12130_onTap_runningActionsCount + 1;


	var selector = "#obj24759";
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
					window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup3();
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
				window.obj12130_onTap_runningActionsCount = window.obj12130_onTap_runningActionsCount - 1;

if (window.obj12130_onTap_runningActionsCount < 0) {
	window.obj12130_onTap_runningActionsCount = 0;
} else if (window.obj12130_onTap_runningActionsCount == 0) {
	obj12130_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12130_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12130_onTap_activeActionGroupIndex = -1;
		$("#obj12130").trigger("obj12130_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12130) {
				console.warn("de-queueing event obj12130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12130_onTap_activeActionGroupIndex = 3;
	











































};
obj12155_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12155_onTap_activeActionGroupIndex = -1;
		$("#obj12155").trigger("obj12155_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12155) {
				console.warn("de-queueing event obj12155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12155_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12158();
function playAudioFile_12158() {
	window.obj12155_onTap_runningActionsCount = obj12155_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12158")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12158");
			$("#obj_audio_playSoundFile12158").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup1();
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
				window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12155_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12155_onTap_activeActionGroupIndex = -1;
		$("#obj12155").trigger("obj12155_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12155) {
				console.warn("de-queueing event obj12155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12155_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12163 
hide_24773();
function hide_24773() {
	var selector = "#obj12163";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12155_onTap_runningActionsCount = obj12155_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24773(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12155 
hide_24774();
function hide_24774() {
	var selector = "#obj12155";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12155_onTap_runningActionsCount = obj12155_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24774(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12155_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12155_onTap_activeActionGroupIndex = -1;
		$("#obj12155").trigger("obj12155_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12155) {
				console.warn("de-queueing event obj12155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12155_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24767
(function(){
	window.obj12155_onTap_runningActionsCount = obj12155_onTap_runningActionsCount + 1;


	var selector = "#obj24767";
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
					window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup3();
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
				window.obj12155_onTap_runningActionsCount = window.obj12155_onTap_runningActionsCount - 1;

if (window.obj12155_onTap_runningActionsCount < 0) {
	window.obj12155_onTap_runningActionsCount = 0;
} else if (window.obj12155_onTap_runningActionsCount == 0) {
	obj12155_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12155_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12155_onTap_activeActionGroupIndex = -1;
		$("#obj12155").trigger("obj12155_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12155) {
				console.warn("de-queueing event obj12155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12155_onTap_activeActionGroupIndex = 3;
	











































};
obj12179_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12179_onTap_activeActionGroupIndex = -1;
		$("#obj12179").trigger("obj12179_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12179) {
				console.warn("de-queueing event obj12179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12179_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12182();
function playAudioFile_12182() {
	window.obj12179_onTap_runningActionsCount = obj12179_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12182")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12182");
			$("#obj_audio_playSoundFile12182").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup1();
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
				window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12179_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12179_onTap_activeActionGroupIndex = -1;
		$("#obj12179").trigger("obj12179_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12179) {
				console.warn("de-queueing event obj12179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12179_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12179 
hide_24756();
function hide_24756() {
	var selector = "#obj12179";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12179_onTap_runningActionsCount = obj12179_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24756(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12187 
hide_24757();
function hide_24757() {
	var selector = "#obj12187";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12179_onTap_runningActionsCount = obj12179_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24757(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12179_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12179_onTap_activeActionGroupIndex = -1;
		$("#obj12179").trigger("obj12179_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12179) {
				console.warn("de-queueing event obj12179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12179_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24751
(function(){
	window.obj12179_onTap_runningActionsCount = obj12179_onTap_runningActionsCount + 1;


	var selector = "#obj24751";
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
					window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup3();
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
				window.obj12179_onTap_runningActionsCount = window.obj12179_onTap_runningActionsCount - 1;

if (window.obj12179_onTap_runningActionsCount < 0) {
	window.obj12179_onTap_runningActionsCount = 0;
} else if (window.obj12179_onTap_runningActionsCount == 0) {
	obj12179_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12179_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12179_onTap_activeActionGroupIndex = -1;
		$("#obj12179").trigger("obj12179_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12179) {
				console.warn("de-queueing event obj12179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12179_onTap_activeActionGroupIndex = 3;
	











































};
obj12171_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12171_onTap_activeActionGroupIndex = -1;
		$("#obj12171").trigger("obj12171_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12171) {
				console.warn("de-queueing event obj12171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12171_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12171 
hide_12173();
function hide_12173() {
	var selector = "#obj12171";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12171_onTap_runningActionsCount = obj12171_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12173(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12171_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12171_onTap_activeActionGroupIndex = -1;
		$("#obj12171").trigger("obj12171_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12171) {
				console.warn("de-queueing event obj12171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12171_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12174();
function playAudioFile_12174() {
	window.obj12171_onTap_runningActionsCount = obj12171_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12174")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12174");
			$("#obj_audio_playSoundFile12174").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup2();
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
				window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12171_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12171_onTap_activeActionGroupIndex = -1;
		$("#obj12171").trigger("obj12171_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12171) {
				console.warn("de-queueing event obj12171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12171_onTap_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj12189 
move_12177();
function move_12177() {
	window.obj12171_onTap_runningActionsCount = obj12171_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj12189");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 810;
	var moveY = 191;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup3();
}
		}, 1);
	});
}
//	action: move
//	target: obj12191 
move_12178();
function move_12178() {
	window.obj12171_onTap_runningActionsCount = obj12171_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj12191");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 810;
	var moveY = 191;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup3();
}
		}, 1);
	});
}














//	action: scale
//	target: obj12193 
scale_12175();
function scale_12175() {
	window.obj12171_onTap_runningActionsCount = obj12171_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj12193";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj12193';
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
		scale_12175_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_12175_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_12175_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_12175_completed() {
	setTimeout(function() {
		window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup3();
}
	}, 1);
}
//	action: scale
//	target: obj12187 
scale_12176();
function scale_12176() {
	window.obj12171_onTap_runningActionsCount = obj12171_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj12187";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj12187';
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
		scale_12176_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_12176_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_12176_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_12176_completed() {
	setTimeout(function() {
		window.obj12171_onTap_runningActionsCount = window.obj12171_onTap_runningActionsCount - 1;

if (window.obj12171_onTap_runningActionsCount < 0) {
	window.obj12171_onTap_runningActionsCount = 0;
} else if (window.obj12171_onTap_runningActionsCount == 0) {
	obj12171_onTap_actionGroup3();
}
	}, 1);
}

























};
obj12171_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12171_onTap_activeActionGroupIndex = -1;
		$("#obj12171").trigger("obj12171_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12171) {
				console.warn("de-queueing event obj12171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12171_onTap_activeActionGroupIndex = 3;
	











































};
obj12203_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12203_onTap_activeActionGroupIndex = -1;
		$("#obj12203").trigger("obj12203_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12203) {
				console.warn("de-queueing event obj12203." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12203").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12203_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12206();
function playAudioFile_12206() {
	window.obj12203_onTap_runningActionsCount = obj12203_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12206")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12206");
			$("#obj_audio_playSoundFile12206").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup1();
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
				window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12203_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12203_onTap_activeActionGroupIndex = -1;
		$("#obj12203").trigger("obj12203_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12203) {
				console.warn("de-queueing event obj12203." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12203").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12203_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12211 
hide_24782();
function hide_24782() {
	var selector = "#obj12211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12203_onTap_runningActionsCount = obj12203_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24782(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12203 
hide_24783();
function hide_24783() {
	var selector = "#obj12203";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12203_onTap_runningActionsCount = obj12203_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24783(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12203_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12203_onTap_activeActionGroupIndex = -1;
		$("#obj12203").trigger("obj12203_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12203) {
				console.warn("de-queueing event obj12203." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12203").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12203_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24776
(function(){
	window.obj12203_onTap_runningActionsCount = obj12203_onTap_runningActionsCount + 1;


	var selector = "#obj24776";
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
					window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup3();
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
				window.obj12203_onTap_runningActionsCount = window.obj12203_onTap_runningActionsCount - 1;

if (window.obj12203_onTap_runningActionsCount < 0) {
	window.obj12203_onTap_runningActionsCount = 0;
} else if (window.obj12203_onTap_runningActionsCount == 0) {
	obj12203_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12203_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12203_onTap_activeActionGroupIndex = -1;
		$("#obj12203").trigger("obj12203_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12203) {
				console.warn("de-queueing event obj12203." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12203").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12203_onTap_activeActionGroupIndex = 3;
	











































};
obj12227_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12227_onTap_activeActionGroupIndex = -1;
		$("#obj12227").trigger("obj12227_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12227) {
				console.warn("de-queueing event obj12227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12227_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12230();
function playAudioFile_12230() {
	window.obj12227_onTap_runningActionsCount = obj12227_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12230")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12230");
			$("#obj_audio_playSoundFile12230").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup1();
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
				window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12227_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12227_onTap_activeActionGroupIndex = -1;
		$("#obj12227").trigger("obj12227_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12227) {
				console.warn("de-queueing event obj12227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12227_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12235 
hide_24790();
function hide_24790() {
	var selector = "#obj12235";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12227_onTap_runningActionsCount = obj12227_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24790(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12227 
hide_24791();
function hide_24791() {
	var selector = "#obj12227";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12227_onTap_runningActionsCount = obj12227_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24791(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12227_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12227_onTap_activeActionGroupIndex = -1;
		$("#obj12227").trigger("obj12227_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12227) {
				console.warn("de-queueing event obj12227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12227_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24784
(function(){
	window.obj12227_onTap_runningActionsCount = obj12227_onTap_runningActionsCount + 1;


	var selector = "#obj24784";
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
					window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup3();
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
				window.obj12227_onTap_runningActionsCount = window.obj12227_onTap_runningActionsCount - 1;

if (window.obj12227_onTap_runningActionsCount < 0) {
	window.obj12227_onTap_runningActionsCount = 0;
} else if (window.obj12227_onTap_runningActionsCount == 0) {
	obj12227_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12227_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12227_onTap_activeActionGroupIndex = -1;
		$("#obj12227").trigger("obj12227_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12227) {
				console.warn("de-queueing event obj12227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12227_onTap_activeActionGroupIndex = 3;
	











































};
obj12251_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12251_onTap_activeActionGroupIndex = -1;
		$("#obj12251").trigger("obj12251_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12251) {
				console.warn("de-queueing event obj12251." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12251").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12251_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12254();
function playAudioFile_12254() {
	window.obj12251_onTap_runningActionsCount = obj12251_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12254")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12254");
			$("#obj_audio_playSoundFile12254").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup1();
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
				window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12251_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12251_onTap_activeActionGroupIndex = -1;
		$("#obj12251").trigger("obj12251_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12251) {
				console.warn("de-queueing event obj12251." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12251").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12251_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12259 
hide_24798();
function hide_24798() {
	var selector = "#obj12259";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12251_onTap_runningActionsCount = obj12251_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24798(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12251 
hide_24799();
function hide_24799() {
	var selector = "#obj12251";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12251_onTap_runningActionsCount = obj12251_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24799(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12251_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12251_onTap_activeActionGroupIndex = -1;
		$("#obj12251").trigger("obj12251_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12251) {
				console.warn("de-queueing event obj12251." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12251").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12251_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24792
(function(){
	window.obj12251_onTap_runningActionsCount = obj12251_onTap_runningActionsCount + 1;


	var selector = "#obj24792";
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
					window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup3();
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
				window.obj12251_onTap_runningActionsCount = window.obj12251_onTap_runningActionsCount - 1;

if (window.obj12251_onTap_runningActionsCount < 0) {
	window.obj12251_onTap_runningActionsCount = 0;
} else if (window.obj12251_onTap_runningActionsCount == 0) {
	obj12251_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12251_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12251_onTap_activeActionGroupIndex = -1;
		$("#obj12251").trigger("obj12251_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12251) {
				console.warn("de-queueing event obj12251." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12251").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12251_onTap_activeActionGroupIndex = 3;
	











































};
obj12275_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12275_onTap_activeActionGroupIndex = -1;
		$("#obj12275").trigger("obj12275_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12275) {
				console.warn("de-queueing event obj12275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12275_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12278();
function playAudioFile_12278() {
	window.obj12275_onTap_runningActionsCount = obj12275_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12278")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12278");
			$("#obj_audio_playSoundFile12278").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup1();
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
				window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12275_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12275_onTap_activeActionGroupIndex = -1;
		$("#obj12275").trigger("obj12275_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12275) {
				console.warn("de-queueing event obj12275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12275_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12283 
hide_24806();
function hide_24806() {
	var selector = "#obj12283";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12275_onTap_runningActionsCount = obj12275_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24806(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12275 
hide_24807();
function hide_24807() {
	var selector = "#obj12275";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12275_onTap_runningActionsCount = obj12275_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24807(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12275_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12275_onTap_activeActionGroupIndex = -1;
		$("#obj12275").trigger("obj12275_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12275) {
				console.warn("de-queueing event obj12275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12275_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24800
(function(){
	window.obj12275_onTap_runningActionsCount = obj12275_onTap_runningActionsCount + 1;


	var selector = "#obj24800";
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
					window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup3();
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
				window.obj12275_onTap_runningActionsCount = window.obj12275_onTap_runningActionsCount - 1;

if (window.obj12275_onTap_runningActionsCount < 0) {
	window.obj12275_onTap_runningActionsCount = 0;
} else if (window.obj12275_onTap_runningActionsCount == 0) {
	obj12275_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12275_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12275_onTap_activeActionGroupIndex = -1;
		$("#obj12275").trigger("obj12275_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12275) {
				console.warn("de-queueing event obj12275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12275_onTap_activeActionGroupIndex = 3;
	











































};
obj12299_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12299_onTap_activeActionGroupIndex = -1;
		$("#obj12299").trigger("obj12299_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12299) {
				console.warn("de-queueing event obj12299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12299_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_12302();
function playAudioFile_12302() {
	window.obj12299_onTap_runningActionsCount = obj12299_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12302")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12302");
			$("#obj_audio_playSoundFile12302").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup1();
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
				window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12299_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12299_onTap_activeActionGroupIndex = -1;
		$("#obj12299").trigger("obj12299_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12299) {
				console.warn("de-queueing event obj12299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12299_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12307 
hide_24814();
function hide_24814() {
	var selector = "#obj12307";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12299_onTap_runningActionsCount = obj12299_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24814(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12299 
hide_24816();
function hide_24816() {
	var selector = "#obj12299";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12299_onTap_runningActionsCount = obj12299_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24816(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12299_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12299_onTap_activeActionGroupIndex = -1;
		$("#obj12299").trigger("obj12299_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12299) {
				console.warn("de-queueing event obj12299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12299_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24808
(function(){
	window.obj12299_onTap_runningActionsCount = obj12299_onTap_runningActionsCount + 1;


	var selector = "#obj24808";
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
					window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup3();
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
				window.obj12299_onTap_runningActionsCount = window.obj12299_onTap_runningActionsCount - 1;

if (window.obj12299_onTap_runningActionsCount < 0) {
	window.obj12299_onTap_runningActionsCount = 0;
} else if (window.obj12299_onTap_runningActionsCount == 0) {
	obj12299_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12299_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12299_onTap_activeActionGroupIndex = -1;
		$("#obj12299").trigger("obj12299_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12299) {
				console.warn("de-queueing event obj12299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12299_onTap_activeActionGroupIndex = 3;
	











































};
obj12069_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12069_onTap_activeActionGroupIndex = -1;
		$("#obj12069").trigger("obj12069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12069) {
				console.warn("de-queueing event obj12069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12069_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12069 
hide_12072();
function hide_12072() {
	var selector = "#obj12069";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12069_onTap_runningActionsCount = obj12069_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12069_onTap_runningActionsCount = window.obj12069_onTap_runningActionsCount - 1;

if (window.obj12069_onTap_runningActionsCount < 0) {
	window.obj12069_onTap_runningActionsCount = 0;
} else if (window.obj12069_onTap_runningActionsCount == 0) {
	obj12069_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12072(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12069_onTap_runningActionsCount = window.obj12069_onTap_runningActionsCount - 1;

if (window.obj12069_onTap_runningActionsCount < 0) {
	window.obj12069_onTap_runningActionsCount = 0;
} else if (window.obj12069_onTap_runningActionsCount == 0) {
	obj12069_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12059
(function(){
	window.obj12069_onTap_runningActionsCount = obj12069_onTap_runningActionsCount + 1;


	var selector = "#obj12059";
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
					window.obj12069_onTap_runningActionsCount = window.obj12069_onTap_runningActionsCount - 1;

if (window.obj12069_onTap_runningActionsCount < 0) {
	window.obj12069_onTap_runningActionsCount = 0;
} else if (window.obj12069_onTap_runningActionsCount == 0) {
	obj12069_onTap_actionGroup1();
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
				window.obj12069_onTap_runningActionsCount = window.obj12069_onTap_runningActionsCount - 1;

if (window.obj12069_onTap_runningActionsCount < 0) {
	window.obj12069_onTap_runningActionsCount = 0;
} else if (window.obj12069_onTap_runningActionsCount == 0) {
	obj12069_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12069_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12069_onTap_activeActionGroupIndex = -1;
		$("#obj12069").trigger("obj12069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12069) {
				console.warn("de-queueing event obj12069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12069_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12067 
hide_12073();
function hide_12073() {
	var selector = "#obj12067";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12069_onTap_runningActionsCount = obj12069_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12069_onTap_runningActionsCount = window.obj12069_onTap_runningActionsCount - 1;

if (window.obj12069_onTap_runningActionsCount < 0) {
	window.obj12069_onTap_runningActionsCount = 0;
} else if (window.obj12069_onTap_runningActionsCount == 0) {
	obj12069_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12073(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12069_onTap_runningActionsCount = window.obj12069_onTap_runningActionsCount - 1;

if (window.obj12069_onTap_runningActionsCount < 0) {
	window.obj12069_onTap_runningActionsCount = 0;
} else if (window.obj12069_onTap_runningActionsCount == 0) {
	obj12069_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12065 
hide_12074();
function hide_12074() {
	var selector = "#obj12065";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12069_onTap_runningActionsCount = obj12069_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12069_onTap_runningActionsCount = window.obj12069_onTap_runningActionsCount - 1;

if (window.obj12069_onTap_runningActionsCount < 0) {
	window.obj12069_onTap_runningActionsCount = 0;
} else if (window.obj12069_onTap_runningActionsCount == 0) {
	obj12069_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12074(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12069_onTap_runningActionsCount = window.obj12069_onTap_runningActionsCount - 1;

if (window.obj12069_onTap_runningActionsCount < 0) {
	window.obj12069_onTap_runningActionsCount = 0;
} else if (window.obj12069_onTap_runningActionsCount == 0) {
	obj12069_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12069_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12069_onTap_activeActionGroupIndex = -1;
		$("#obj12069").trigger("obj12069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12069) {
				console.warn("de-queueing event obj12069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12069_onTap_activeActionGroupIndex = 2;
	











































};
obj12315_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12315_onTap_activeActionGroupIndex = -1;
		$("#obj12315").trigger("obj12315_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12315) {
				console.warn("de-queueing event obj12315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12315_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24521
(function(){
	window.obj12315_onTap_runningActionsCount = obj12315_onTap_runningActionsCount + 1;


	var selector = "#obj24521";
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
					window.obj12315_onTap_runningActionsCount = window.obj12315_onTap_runningActionsCount - 1;

if (window.obj12315_onTap_runningActionsCount < 0) {
	window.obj12315_onTap_runningActionsCount = 0;
} else if (window.obj12315_onTap_runningActionsCount == 0) {
	obj12315_onTap_actionGroup1();
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
				window.obj12315_onTap_runningActionsCount = window.obj12315_onTap_runningActionsCount - 1;

if (window.obj12315_onTap_runningActionsCount < 0) {
	window.obj12315_onTap_runningActionsCount = 0;
} else if (window.obj12315_onTap_runningActionsCount == 0) {
	obj12315_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12315_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12315_onTap_activeActionGroupIndex = -1;
		$("#obj12315").trigger("obj12315_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12315) {
				console.warn("de-queueing event obj12315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12315_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12317();
function playAudioFile_12317() {
	window.obj12315_onTap_runningActionsCount = obj12315_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12317")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12317");
			$("#obj_audio_playSoundFile12317").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12315_onTap_runningActionsCount = window.obj12315_onTap_runningActionsCount - 1;

if (window.obj12315_onTap_runningActionsCount < 0) {
	window.obj12315_onTap_runningActionsCount = 0;
} else if (window.obj12315_onTap_runningActionsCount == 0) {
	obj12315_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12315_onTap_runningActionsCount = window.obj12315_onTap_runningActionsCount - 1;

if (window.obj12315_onTap_runningActionsCount < 0) {
	window.obj12315_onTap_runningActionsCount = 0;
} else if (window.obj12315_onTap_runningActionsCount == 0) {
	obj12315_onTap_actionGroup2();
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
				window.obj12315_onTap_runningActionsCount = window.obj12315_onTap_runningActionsCount - 1;

if (window.obj12315_onTap_runningActionsCount < 0) {
	window.obj12315_onTap_runningActionsCount = 0;
} else if (window.obj12315_onTap_runningActionsCount == 0) {
	obj12315_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12315_onTap_runningActionsCount = window.obj12315_onTap_runningActionsCount - 1;

if (window.obj12315_onTap_runningActionsCount < 0) {
	window.obj12315_onTap_runningActionsCount = 0;
} else if (window.obj12315_onTap_runningActionsCount == 0) {
	obj12315_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12315_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12315_onTap_activeActionGroupIndex = -1;
		$("#obj12315").trigger("obj12315_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12315) {
				console.warn("de-queueing event obj12315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12315_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24518
(function(){
	window.obj12315_onTap_runningActionsCount = obj12315_onTap_runningActionsCount + 1;


	var selector = "#obj24518";
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
					window.obj12315_onTap_runningActionsCount = window.obj12315_onTap_runningActionsCount - 1;

if (window.obj12315_onTap_runningActionsCount < 0) {
	window.obj12315_onTap_runningActionsCount = 0;
} else if (window.obj12315_onTap_runningActionsCount == 0) {
	obj12315_onTap_actionGroup3();
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
				window.obj12315_onTap_runningActionsCount = window.obj12315_onTap_runningActionsCount - 1;

if (window.obj12315_onTap_runningActionsCount < 0) {
	window.obj12315_onTap_runningActionsCount = 0;
} else if (window.obj12315_onTap_runningActionsCount == 0) {
	obj12315_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12315_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12315_onTap_activeActionGroupIndex = -1;
		$("#obj12315").trigger("obj12315_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12315) {
				console.warn("de-queueing event obj12315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12315_onTap_activeActionGroupIndex = 3;
	











































};
obj12329_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12329_onTap_activeActionGroupIndex = -1;
		$("#obj12329").trigger("obj12329_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12329) {
				console.warn("de-queueing event obj12329." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12329").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12329_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12329 
hide_12352();
function hide_12352() {
	var selector = "#obj12329";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12352(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12329_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12329_onTap_activeActionGroupIndex = -1;
		$("#obj12329").trigger("obj12329_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12329) {
				console.warn("de-queueing event obj12329." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12329").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12329_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_12331();
function playAudioFile_12331() {
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12331")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12331");
			$("#obj_audio_playSoundFile12331").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup2();
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
				window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj12329_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12329_onTap_activeActionGroupIndex = -1;
		$("#obj12329").trigger("obj12329_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12329) {
				console.warn("de-queueing event obj12329." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12329").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12329_onTap_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj12095 
move_12333();
function move_12333() {
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj12095");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 10;
	var moveY = 305;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup3();
}
		}, 1);
	});
}
//	action: move
//	target: obj12098 
move_12334();
function move_12334() {
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj12098");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 9;
	var moveY = 238;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup3();
}
		}, 1);
	});
}
//	action: move
//	target: obj12102 
move_12335();
function move_12335() {
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj12102");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 633;
	var moveY = 195;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup3();
}
		}, 1);
	});
}
//	action: move
//	target: obj12110 
move_12336();
function move_12336() {
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj12110");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 608;
	var moveY = 300;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup3();
}
		}, 1);
	});
}
//	action: move
//	target: obj12113 
move_12337();
function move_12337() {
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj12113");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 601;
	var moveY = 351;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup3();
}
		}, 1);
	});
}
//	action: move
//	target: obj12119 
move_12338();
function move_12338() {
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj12119");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -4;
	var moveY = 368;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup3();
}
		}, 1);
	});
}
//	action: move
//	target: obj12116 
move_12339();
function move_12339() {
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj12116");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 665;
	var moveY = 181;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup3();
}
		}, 1);
	});
}














//	action: scale
//	target: obj12088 
scale_12332();
function scale_12332() {
	window.obj12329_onTap_runningActionsCount = obj12329_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj12088";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj12088';
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
		scale_12332_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_12332_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_12332_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_12332_completed() {
	setTimeout(function() {
		window.obj12329_onTap_runningActionsCount = window.obj12329_onTap_runningActionsCount - 1;

if (window.obj12329_onTap_runningActionsCount < 0) {
	window.obj12329_onTap_runningActionsCount = 0;
} else if (window.obj12329_onTap_runningActionsCount == 0) {
	obj12329_onTap_actionGroup3();
}
	}, 1);
}

























};
obj12329_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12329_onTap_activeActionGroupIndex = -1;
		$("#obj12329").trigger("obj12329_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12329) {
				console.warn("de-queueing event obj12329." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12329").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12329_onTap_activeActionGroupIndex = 3;
	











































};
obj24751_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24751_onTap_activeActionGroupIndex = -1;
		$("#obj24751").trigger("obj24751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24751) {
				console.warn("de-queueing event obj24751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24751_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24758();
function playAudioFile_24758() {
	window.obj24751_onTap_runningActionsCount = obj24751_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24758")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24758");
			$("#obj_audio_playSoundFile24758").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup1();
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
				window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24751_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24751_onTap_activeActionGroupIndex = -1;
		$("#obj24751").trigger("obj24751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24751) {
				console.warn("de-queueing event obj24751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24751_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24751 
hide_24753();
function hide_24753() {
	var selector = "#obj24751";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24751_onTap_runningActionsCount = obj24751_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24753(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24751_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24751_onTap_activeActionGroupIndex = -1;
		$("#obj24751").trigger("obj24751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24751) {
				console.warn("de-queueing event obj24751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24751_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12179
(function(){
	window.obj24751_onTap_runningActionsCount = obj24751_onTap_runningActionsCount + 1;


	var selector = "#obj12179";
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
					window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup3();
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
				window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12187
(function(){
	window.obj24751_onTap_runningActionsCount = obj24751_onTap_runningActionsCount + 1;


	var selector = "#obj12187";
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
					window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup3();
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
				window.obj24751_onTap_runningActionsCount = window.obj24751_onTap_runningActionsCount - 1;

if (window.obj24751_onTap_runningActionsCount < 0) {
	window.obj24751_onTap_runningActionsCount = 0;
} else if (window.obj24751_onTap_runningActionsCount == 0) {
	obj24751_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24751_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24751_onTap_activeActionGroupIndex = -1;
		$("#obj24751").trigger("obj24751_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24751) {
				console.warn("de-queueing event obj24751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24751_onTap_activeActionGroupIndex = 3;
	











































};
obj24759_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24759_onTap_activeActionGroupIndex = -1;
		$("#obj24759").trigger("obj24759_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24759) {
				console.warn("de-queueing event obj24759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24759_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24761();
function playAudioFile_24761() {
	window.obj24759_onTap_runningActionsCount = obj24759_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24761")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24761");
			$("#obj_audio_playSoundFile24761").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup1();
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
				window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24759_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24759_onTap_activeActionGroupIndex = -1;
		$("#obj24759").trigger("obj24759_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24759) {
				console.warn("de-queueing event obj24759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24759_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24759 
hide_24762();
function hide_24762() {
	var selector = "#obj24759";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24759_onTap_runningActionsCount = obj24759_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24762(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24759_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24759_onTap_activeActionGroupIndex = -1;
		$("#obj24759").trigger("obj24759_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24759) {
				console.warn("de-queueing event obj24759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24759_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12128
(function(){
	window.obj24759_onTap_runningActionsCount = obj24759_onTap_runningActionsCount + 1;


	var selector = "#obj12128";
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
					window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup3();
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
				window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12130
(function(){
	window.obj24759_onTap_runningActionsCount = obj24759_onTap_runningActionsCount + 1;


	var selector = "#obj12130";
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
					window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup3();
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
				window.obj24759_onTap_runningActionsCount = window.obj24759_onTap_runningActionsCount - 1;

if (window.obj24759_onTap_runningActionsCount < 0) {
	window.obj24759_onTap_runningActionsCount = 0;
} else if (window.obj24759_onTap_runningActionsCount == 0) {
	obj24759_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24759_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24759_onTap_activeActionGroupIndex = -1;
		$("#obj24759").trigger("obj24759_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24759) {
				console.warn("de-queueing event obj24759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24759_onTap_activeActionGroupIndex = 3;
	











































};
obj24767_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24767_onTap_activeActionGroupIndex = -1;
		$("#obj24767").trigger("obj24767_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24767) {
				console.warn("de-queueing event obj24767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24767_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24769();
function playAudioFile_24769() {
	window.obj24767_onTap_runningActionsCount = obj24767_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24769")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24769");
			$("#obj_audio_playSoundFile24769").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup1();
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
				window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24767_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24767_onTap_activeActionGroupIndex = -1;
		$("#obj24767").trigger("obj24767_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24767) {
				console.warn("de-queueing event obj24767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24767_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24767 
hide_24770();
function hide_24770() {
	var selector = "#obj24767";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24767_onTap_runningActionsCount = obj24767_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24770(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24767_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24767_onTap_activeActionGroupIndex = -1;
		$("#obj24767").trigger("obj24767_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24767) {
				console.warn("de-queueing event obj24767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24767_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12163
(function(){
	window.obj24767_onTap_runningActionsCount = obj24767_onTap_runningActionsCount + 1;


	var selector = "#obj12163";
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
					window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup3();
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
				window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12155
(function(){
	window.obj24767_onTap_runningActionsCount = obj24767_onTap_runningActionsCount + 1;


	var selector = "#obj12155";
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
					window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup3();
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
				window.obj24767_onTap_runningActionsCount = window.obj24767_onTap_runningActionsCount - 1;

if (window.obj24767_onTap_runningActionsCount < 0) {
	window.obj24767_onTap_runningActionsCount = 0;
} else if (window.obj24767_onTap_runningActionsCount == 0) {
	obj24767_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24767_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24767_onTap_activeActionGroupIndex = -1;
		$("#obj24767").trigger("obj24767_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24767) {
				console.warn("de-queueing event obj24767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24767_onTap_activeActionGroupIndex = 3;
	











































};
obj24776_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24776_onTap_activeActionGroupIndex = -1;
		$("#obj24776").trigger("obj24776_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24776) {
				console.warn("de-queueing event obj24776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24776_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24778();
function playAudioFile_24778() {
	window.obj24776_onTap_runningActionsCount = obj24776_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24778")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24778");
			$("#obj_audio_playSoundFile24778").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup1();
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
				window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24776_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24776_onTap_activeActionGroupIndex = -1;
		$("#obj24776").trigger("obj24776_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24776) {
				console.warn("de-queueing event obj24776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24776_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24776 
hide_24779();
function hide_24779() {
	var selector = "#obj24776";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24776_onTap_runningActionsCount = obj24776_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24779(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24776_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24776_onTap_activeActionGroupIndex = -1;
		$("#obj24776").trigger("obj24776_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24776) {
				console.warn("de-queueing event obj24776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24776_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12211
(function(){
	window.obj24776_onTap_runningActionsCount = obj24776_onTap_runningActionsCount + 1;


	var selector = "#obj12211";
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
					window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup3();
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
				window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12203
(function(){
	window.obj24776_onTap_runningActionsCount = obj24776_onTap_runningActionsCount + 1;


	var selector = "#obj12203";
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
					window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup3();
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
				window.obj24776_onTap_runningActionsCount = window.obj24776_onTap_runningActionsCount - 1;

if (window.obj24776_onTap_runningActionsCount < 0) {
	window.obj24776_onTap_runningActionsCount = 0;
} else if (window.obj24776_onTap_runningActionsCount == 0) {
	obj24776_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24776_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24776_onTap_activeActionGroupIndex = -1;
		$("#obj24776").trigger("obj24776_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24776) {
				console.warn("de-queueing event obj24776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24776_onTap_activeActionGroupIndex = 3;
	











































};
obj24784_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24784_onTap_activeActionGroupIndex = -1;
		$("#obj24784").trigger("obj24784_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24784) {
				console.warn("de-queueing event obj24784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24784_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24786();
function playAudioFile_24786() {
	window.obj24784_onTap_runningActionsCount = obj24784_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24786")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24786");
			$("#obj_audio_playSoundFile24786").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup1();
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
				window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24784_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24784_onTap_activeActionGroupIndex = -1;
		$("#obj24784").trigger("obj24784_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24784) {
				console.warn("de-queueing event obj24784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24784_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24784 
hide_24787();
function hide_24787() {
	var selector = "#obj24784";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24784_onTap_runningActionsCount = obj24784_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24787(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24784_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24784_onTap_activeActionGroupIndex = -1;
		$("#obj24784").trigger("obj24784_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24784) {
				console.warn("de-queueing event obj24784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24784_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12235
(function(){
	window.obj24784_onTap_runningActionsCount = obj24784_onTap_runningActionsCount + 1;


	var selector = "#obj12235";
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
					window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup3();
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
				window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12227
(function(){
	window.obj24784_onTap_runningActionsCount = obj24784_onTap_runningActionsCount + 1;


	var selector = "#obj12227";
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
					window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup3();
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
				window.obj24784_onTap_runningActionsCount = window.obj24784_onTap_runningActionsCount - 1;

if (window.obj24784_onTap_runningActionsCount < 0) {
	window.obj24784_onTap_runningActionsCount = 0;
} else if (window.obj24784_onTap_runningActionsCount == 0) {
	obj24784_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24784_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24784_onTap_activeActionGroupIndex = -1;
		$("#obj24784").trigger("obj24784_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24784) {
				console.warn("de-queueing event obj24784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24784_onTap_activeActionGroupIndex = 3;
	











































};
obj24792_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24792_onTap_activeActionGroupIndex = -1;
		$("#obj24792").trigger("obj24792_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24792) {
				console.warn("de-queueing event obj24792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24792_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24794();
function playAudioFile_24794() {
	window.obj24792_onTap_runningActionsCount = obj24792_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24794")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24794");
			$("#obj_audio_playSoundFile24794").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup1();
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
				window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24792_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24792_onTap_activeActionGroupIndex = -1;
		$("#obj24792").trigger("obj24792_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24792) {
				console.warn("de-queueing event obj24792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24792_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24792 
hide_24795();
function hide_24795() {
	var selector = "#obj24792";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24792_onTap_runningActionsCount = obj24792_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24795(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24792_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24792_onTap_activeActionGroupIndex = -1;
		$("#obj24792").trigger("obj24792_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24792) {
				console.warn("de-queueing event obj24792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24792_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12259
(function(){
	window.obj24792_onTap_runningActionsCount = obj24792_onTap_runningActionsCount + 1;


	var selector = "#obj12259";
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
					window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup3();
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
				window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12251
(function(){
	window.obj24792_onTap_runningActionsCount = obj24792_onTap_runningActionsCount + 1;


	var selector = "#obj12251";
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
					window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup3();
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
				window.obj24792_onTap_runningActionsCount = window.obj24792_onTap_runningActionsCount - 1;

if (window.obj24792_onTap_runningActionsCount < 0) {
	window.obj24792_onTap_runningActionsCount = 0;
} else if (window.obj24792_onTap_runningActionsCount == 0) {
	obj24792_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24792_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24792_onTap_activeActionGroupIndex = -1;
		$("#obj24792").trigger("obj24792_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24792) {
				console.warn("de-queueing event obj24792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24792_onTap_activeActionGroupIndex = 3;
	











































};
obj24800_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24800_onTap_activeActionGroupIndex = -1;
		$("#obj24800").trigger("obj24800_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24800) {
				console.warn("de-queueing event obj24800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24800_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24802();
function playAudioFile_24802() {
	window.obj24800_onTap_runningActionsCount = obj24800_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24802")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24802");
			$("#obj_audio_playSoundFile24802").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup1();
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
				window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24800_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24800_onTap_activeActionGroupIndex = -1;
		$("#obj24800").trigger("obj24800_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24800) {
				console.warn("de-queueing event obj24800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24800_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24800 
hide_24803();
function hide_24803() {
	var selector = "#obj24800";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24800_onTap_runningActionsCount = obj24800_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24803(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24800_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24800_onTap_activeActionGroupIndex = -1;
		$("#obj24800").trigger("obj24800_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24800) {
				console.warn("de-queueing event obj24800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24800_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12283
(function(){
	window.obj24800_onTap_runningActionsCount = obj24800_onTap_runningActionsCount + 1;


	var selector = "#obj12283";
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
					window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup3();
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
				window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12275
(function(){
	window.obj24800_onTap_runningActionsCount = obj24800_onTap_runningActionsCount + 1;


	var selector = "#obj12275";
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
					window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup3();
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
				window.obj24800_onTap_runningActionsCount = window.obj24800_onTap_runningActionsCount - 1;

if (window.obj24800_onTap_runningActionsCount < 0) {
	window.obj24800_onTap_runningActionsCount = 0;
} else if (window.obj24800_onTap_runningActionsCount == 0) {
	obj24800_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24800_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24800_onTap_activeActionGroupIndex = -1;
		$("#obj24800").trigger("obj24800_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24800) {
				console.warn("de-queueing event obj24800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24800_onTap_activeActionGroupIndex = 3;
	











































};
obj24808_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24808_onTap_activeActionGroupIndex = -1;
		$("#obj24808").trigger("obj24808_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24808) {
				console.warn("de-queueing event obj24808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24808_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24810();
function playAudioFile_24810() {
	window.obj24808_onTap_runningActionsCount = obj24808_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24810")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24810");
			$("#obj_audio_playSoundFile24810").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup1();
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
				window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24808_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24808_onTap_activeActionGroupIndex = -1;
		$("#obj24808").trigger("obj24808_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24808) {
				console.warn("de-queueing event obj24808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24808_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24808 
hide_24811();
function hide_24811() {
	var selector = "#obj24808";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24808_onTap_runningActionsCount = obj24808_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24811(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24808_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24808_onTap_activeActionGroupIndex = -1;
		$("#obj24808").trigger("obj24808_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24808) {
				console.warn("de-queueing event obj24808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24808_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12307
(function(){
	window.obj24808_onTap_runningActionsCount = obj24808_onTap_runningActionsCount + 1;


	var selector = "#obj12307";
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
					window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup3();
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
				window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12299
(function(){
	window.obj24808_onTap_runningActionsCount = obj24808_onTap_runningActionsCount + 1;


	var selector = "#obj12299";
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
					window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup3();
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
				window.obj24808_onTap_runningActionsCount = window.obj24808_onTap_runningActionsCount - 1;

if (window.obj24808_onTap_runningActionsCount < 0) {
	window.obj24808_onTap_runningActionsCount = 0;
} else if (window.obj24808_onTap_runningActionsCount == 0) {
	obj24808_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24808_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24808_onTap_activeActionGroupIndex = -1;
		$("#obj24808").trigger("obj24808_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24808) {
				console.warn("de-queueing event obj24808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24808_onTap_activeActionGroupIndex = 3;
	











































};
obj24518_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24518_onTap_activeActionGroupIndex = -1;
		$("#obj24518").trigger("obj24518_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24518) {
				console.warn("de-queueing event obj24518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24518_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24526();
function playAudioFile_24526() {
	window.obj24518_onTap_runningActionsCount = obj24518_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24526")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24526");
			$("#obj_audio_playSoundFile24526").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24518_onTap_runningActionsCount = window.obj24518_onTap_runningActionsCount - 1;

if (window.obj24518_onTap_runningActionsCount < 0) {
	window.obj24518_onTap_runningActionsCount = 0;
} else if (window.obj24518_onTap_runningActionsCount == 0) {
	obj24518_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24518_onTap_runningActionsCount = window.obj24518_onTap_runningActionsCount - 1;

if (window.obj24518_onTap_runningActionsCount < 0) {
	window.obj24518_onTap_runningActionsCount = 0;
} else if (window.obj24518_onTap_runningActionsCount == 0) {
	obj24518_onTap_actionGroup1();
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
				window.obj24518_onTap_runningActionsCount = window.obj24518_onTap_runningActionsCount - 1;

if (window.obj24518_onTap_runningActionsCount < 0) {
	window.obj24518_onTap_runningActionsCount = 0;
} else if (window.obj24518_onTap_runningActionsCount == 0) {
	obj24518_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24518_onTap_runningActionsCount = window.obj24518_onTap_runningActionsCount - 1;

if (window.obj24518_onTap_runningActionsCount < 0) {
	window.obj24518_onTap_runningActionsCount = 0;
} else if (window.obj24518_onTap_runningActionsCount == 0) {
	obj24518_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24518_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24518_onTap_activeActionGroupIndex = -1;
		$("#obj24518").trigger("obj24518_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24518) {
				console.warn("de-queueing event obj24518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24518_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24521 
hide_24525();
function hide_24525() {
	var selector = "#obj24521";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24518_onTap_runningActionsCount = obj24518_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24518_onTap_runningActionsCount = window.obj24518_onTap_runningActionsCount - 1;

if (window.obj24518_onTap_runningActionsCount < 0) {
	window.obj24518_onTap_runningActionsCount = 0;
} else if (window.obj24518_onTap_runningActionsCount == 0) {
	obj24518_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24525(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24518_onTap_runningActionsCount = window.obj24518_onTap_runningActionsCount - 1;

if (window.obj24518_onTap_runningActionsCount < 0) {
	window.obj24518_onTap_runningActionsCount = 0;
} else if (window.obj24518_onTap_runningActionsCount == 0) {
	obj24518_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24518 
hide_24524();
function hide_24524() {
	var selector = "#obj24518";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24518_onTap_runningActionsCount = obj24518_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24518_onTap_runningActionsCount = window.obj24518_onTap_runningActionsCount - 1;

if (window.obj24518_onTap_runningActionsCount < 0) {
	window.obj24518_onTap_runningActionsCount = 0;
} else if (window.obj24518_onTap_runningActionsCount == 0) {
	obj24518_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24524(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24518_onTap_runningActionsCount = window.obj24518_onTap_runningActionsCount - 1;

if (window.obj24518_onTap_runningActionsCount < 0) {
	window.obj24518_onTap_runningActionsCount = 0;
} else if (window.obj24518_onTap_runningActionsCount == 0) {
	obj24518_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24518_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24518_onTap_activeActionGroupIndex = -1;
		$("#obj24518").trigger("obj24518_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24518) {
				console.warn("de-queueing event obj24518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24518_onTap_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj12059: Event Touch Down
 *
 */

$("#obj12059").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12059_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12059_onTap is still running");
	return;
}
var obj12059_onTap_runningActionsCount = 0;
var obj12059_onTap_loopCount = 0;
obj12059_onTap_actionGroup0();
});
























































/*
 *
 *   obj12081: Event Touch Down
 *
 */

$("#obj12081").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12081_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12081_onTap is still running");
	return;
}
var obj12081_onTap_runningActionsCount = 0;
var obj12081_onTap_loopCount = 0;
obj12081_onTap_actionGroup0();
});




























































































































































































































































































/*
 *
 *   obj12130: Event Touch Down
 *
 */

$("#obj12130").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12130_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12130_onTap is still running");
	return;
}
var obj12130_onTap_runningActionsCount = 0;
var obj12130_onTap_loopCount = 0;
obj12130_onTap_actionGroup0();
});






























































































/*
 *
 *   obj12155: Event Touch Down
 *
 */

$("#obj12155").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12155_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12155_onTap is still running");
	return;
}
var obj12155_onTap_runningActionsCount = 0;
var obj12155_onTap_loopCount = 0;
obj12155_onTap_actionGroup0();
});






























































































/*
 *
 *   obj12179: Event Touch Down
 *
 */

$("#obj12179").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12179_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12179_onTap is still running");
	return;
}
var obj12179_onTap_runningActionsCount = 0;
var obj12179_onTap_loopCount = 0;
obj12179_onTap_actionGroup0();
});


















/*
 *
 *   obj12171: Event Touch Down
 *
 */

$("#obj12171").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12171_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12171_onTap is still running");
	return;
}
var obj12171_onTap_runningActionsCount = 0;
var obj12171_onTap_loopCount = 0;
obj12171_onTap_actionGroup0();
});






























































































/*
 *
 *   obj12203: Event Touch Down
 *
 */

$("#obj12203").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12203_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12203_onTap is still running");
	return;
}
var obj12203_onTap_runningActionsCount = 0;
var obj12203_onTap_loopCount = 0;
obj12203_onTap_actionGroup0();
});






























































































/*
 *
 *   obj12227: Event Touch Down
 *
 */

$("#obj12227").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12227_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12227_onTap is still running");
	return;
}
var obj12227_onTap_runningActionsCount = 0;
var obj12227_onTap_loopCount = 0;
obj12227_onTap_actionGroup0();
});






























































































/*
 *
 *   obj12251: Event Touch Down
 *
 */

$("#obj12251").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12251_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12251_onTap is still running");
	return;
}
var obj12251_onTap_runningActionsCount = 0;
var obj12251_onTap_loopCount = 0;
obj12251_onTap_actionGroup0();
});






























































































/*
 *
 *   obj12275: Event Touch Down
 *
 */

$("#obj12275").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12275_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12275_onTap is still running");
	return;
}
var obj12275_onTap_runningActionsCount = 0;
var obj12275_onTap_loopCount = 0;
obj12275_onTap_actionGroup0();
});






























































































/*
 *
 *   obj12299: Event Touch Down
 *
 */

$("#obj12299").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12299_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12299_onTap is still running");
	return;
}
var obj12299_onTap_runningActionsCount = 0;
var obj12299_onTap_loopCount = 0;
obj12299_onTap_actionGroup0();
});


















/*
 *
 *   obj12069: Event Touch Down
 *
 */

$("#obj12069").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12069_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12069_onTap is still running");
	return;
}
var obj12069_onTap_runningActionsCount = 0;
var obj12069_onTap_loopCount = 0;
obj12069_onTap_actionGroup0();
});


















/*
 *
 *   obj12315: Event Touch Down
 *
 */

$("#obj12315").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12315_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12315_onTap is still running");
	return;
}
var obj12315_onTap_runningActionsCount = 0;
var obj12315_onTap_loopCount = 0;
obj12315_onTap_actionGroup0();
});


















/*
 *
 *   obj12329: Event Touch Down
 *
 */

$("#obj12329").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12329_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12329_onTap is still running");
	return;
}
var obj12329_onTap_runningActionsCount = 0;
var obj12329_onTap_loopCount = 0;
obj12329_onTap_actionGroup0();
});


















/*
 *
 *   obj24751: Event Touch Down
 *
 */

$("#obj24751").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24751_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24751_onTap is still running");
	return;
}
var obj24751_onTap_runningActionsCount = 0;
var obj24751_onTap_loopCount = 0;
obj24751_onTap_actionGroup0();
});


















/*
 *
 *   obj24759: Event Touch Down
 *
 */

$("#obj24759").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24759_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24759_onTap is still running");
	return;
}
var obj24759_onTap_runningActionsCount = 0;
var obj24759_onTap_loopCount = 0;
obj24759_onTap_actionGroup0();
});


















/*
 *
 *   obj24767: Event Touch Down
 *
 */

$("#obj24767").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24767_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24767_onTap is still running");
	return;
}
var obj24767_onTap_runningActionsCount = 0;
var obj24767_onTap_loopCount = 0;
obj24767_onTap_actionGroup0();
});


















/*
 *
 *   obj24776: Event Touch Down
 *
 */

$("#obj24776").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24776_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24776_onTap is still running");
	return;
}
var obj24776_onTap_runningActionsCount = 0;
var obj24776_onTap_loopCount = 0;
obj24776_onTap_actionGroup0();
});


















/*
 *
 *   obj24784: Event Touch Down
 *
 */

$("#obj24784").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24784_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24784_onTap is still running");
	return;
}
var obj24784_onTap_runningActionsCount = 0;
var obj24784_onTap_loopCount = 0;
obj24784_onTap_actionGroup0();
});


















/*
 *
 *   obj24792: Event Touch Down
 *
 */

$("#obj24792").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24792_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24792_onTap is still running");
	return;
}
var obj24792_onTap_runningActionsCount = 0;
var obj24792_onTap_loopCount = 0;
obj24792_onTap_actionGroup0();
});


















/*
 *
 *   obj24800: Event Touch Down
 *
 */

$("#obj24800").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24800_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24800_onTap is still running");
	return;
}
var obj24800_onTap_runningActionsCount = 0;
var obj24800_onTap_loopCount = 0;
obj24800_onTap_actionGroup0();
});


















/*
 *
 *   obj24808: Event Touch Down
 *
 */

$("#obj24808").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24808_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24808_onTap is still running");
	return;
}
var obj24808_onTap_runningActionsCount = 0;
var obj24808_onTap_loopCount = 0;
obj24808_onTap_actionGroup0();
});





































/*
 *
 *   obj24518: Event Touch Down
 *
 */

$("#obj24518").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24518_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24518_onTap is still running");
	return;
}
var obj24518_onTap_runningActionsCount = 0;
var obj24518_onTap_loopCount = 0;
obj24518_onTap_actionGroup0();
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
	
$("#obj11420").trigger('SCEventShow');
$("#obj12055").trigger('SCEventShow');
$("#obj12057").trigger('SCEventShow');
$("#obj12059").trigger('SCEventShow');
$("#obj12075").trigger('SCEventShow');
$("#obj12077").trigger('SCEventShow');
$("#obj12081").trigger('SCEventShow');
$("#obj12086").trigger('SCEventShow');
$("#obj12088").trigger('SCEventShow');
$("#obj12095").trigger('SCEventShow');
$("#obj12098").trigger('SCEventShow');
$("#obj12102").trigger('SCEventShow');
$("#obj12106").trigger('SCEventShow');
$("#obj12110").trigger('SCEventShow');
$("#obj12113").trigger('SCEventShow');
$("#obj12116").trigger('SCEventShow');
$("#obj12119").trigger('SCEventShow');
$("#obj12122").trigger('SCEventShow');
$("#obj12124").trigger('SCEventShow');
$("#obj12126").trigger('SCEventShow');
$("#obj12130").trigger('SCEventShow');
$("#obj12169").trigger('SCEventShow');
$("#obj12167").trigger('SCEventShow');
$("#obj12165").trigger('SCEventShow');
$("#obj12155").trigger('SCEventShow');
$("#obj12193").trigger('SCEventShow');
$("#obj12191").trigger('SCEventShow');
$("#obj12189").trigger('SCEventShow');
$("#obj12179").trigger('SCEventShow');
$("#obj12217").trigger('SCEventShow');
$("#obj12215").trigger('SCEventShow');
$("#obj12213").trigger('SCEventShow');
$("#obj12203").trigger('SCEventShow');
$("#obj12241").trigger('SCEventShow');
$("#obj12239").trigger('SCEventShow');
$("#obj12237").trigger('SCEventShow');
$("#obj12227").trigger('SCEventShow');
$("#obj12265").trigger('SCEventShow');
$("#obj12263").trigger('SCEventShow');
$("#obj12261").trigger('SCEventShow');
$("#obj12251").trigger('SCEventShow');
$("#obj12289").trigger('SCEventShow');
$("#obj12287").trigger('SCEventShow');
$("#obj12285").trigger('SCEventShow');
$("#obj12275").trigger('SCEventShow');
$("#obj12313").trigger('SCEventShow');
$("#obj12311").trigger('SCEventShow');
$("#obj12309").trigger('SCEventShow');
$("#obj12299").trigger('SCEventShow');
$("#obj12315").trigger('SCEventShow');
$("#obj24751").trigger('SCEventShow');
$("#obj24759").trigger('SCEventShow');
$("#obj24767").trigger('SCEventShow');
$("#obj24776").trigger('SCEventShow');
$("#obj24784").trigger('SCEventShow');
$("#obj24792").trigger('SCEventShow');
$("#obj24800").trigger('SCEventShow');
$("#obj24808").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});