pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 23105;
pubcoder.page.title = pubcoder.page.title || "39";
pubcoder.page.number = pubcoder.page.number || 39;
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
var obj23112_onTap_activeActionGroupIndex = -1;
var obj23112_onTap_runningActionsCount = 0;
var obj23112_onTap_loopCount = 0;
var obj23153_onTap_activeActionGroupIndex = -1;
var obj23153_onTap_runningActionsCount = 0;
var obj23153_onTap_loopCount = 0;
var obj23147_onTap_activeActionGroupIndex = -1;
var obj23147_onTap_runningActionsCount = 0;
var obj23147_onTap_loopCount = 0;
var obj23175_onTap_activeActionGroupIndex = -1;
var obj23175_onTap_runningActionsCount = 0;
var obj23175_onTap_loopCount = 0;
var obj23179_onTap_activeActionGroupIndex = -1;
var obj23179_onTap_runningActionsCount = 0;
var obj23179_onTap_loopCount = 0;
var obj23186_onTap_activeActionGroupIndex = -1;
var obj23186_onTap_runningActionsCount = 0;
var obj23186_onTap_loopCount = 0;

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
		
obj23112_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23112_onTap_activeActionGroupIndex = -1;
		$("#obj23112").trigger("obj23112_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23112) {
				console.warn("de-queueing event obj23112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23112_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_23114();
function goToPage_23114() {
	window.obj23112_onTap_runningActionsCount = obj23112_onTap_runningActionsCount + 1;

	$("#anchor784")[0].click();
	window.obj23112_onTap_runningActionsCount = window.obj23112_onTap_runningActionsCount - 1;

if (window.obj23112_onTap_runningActionsCount < 0) {
	window.obj23112_onTap_runningActionsCount = 0;
} else if (window.obj23112_onTap_runningActionsCount == 0) {
	obj23112_onTap_actionGroup1();
}
}










































};
obj23112_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23112_onTap_activeActionGroupIndex = -1;
		$("#obj23112").trigger("obj23112_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23112) {
				console.warn("de-queueing event obj23112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23112_onTap_activeActionGroupIndex = 1;
	











































};
obj23153_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23153_onTap_activeActionGroupIndex = -1;
		$("#obj23153").trigger("obj23153_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23153) {
				console.warn("de-queueing event obj23153." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23153").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23153_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23147
(function(){
	window.obj23153_onTap_runningActionsCount = obj23153_onTap_runningActionsCount + 1;


	var selector = "#obj23147";
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
					window.obj23153_onTap_runningActionsCount = window.obj23153_onTap_runningActionsCount - 1;

if (window.obj23153_onTap_runningActionsCount < 0) {
	window.obj23153_onTap_runningActionsCount = 0;
} else if (window.obj23153_onTap_runningActionsCount == 0) {
	obj23153_onTap_actionGroup1();
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
				window.obj23153_onTap_runningActionsCount = window.obj23153_onTap_runningActionsCount - 1;

if (window.obj23153_onTap_runningActionsCount < 0) {
	window.obj23153_onTap_runningActionsCount = 0;
} else if (window.obj23153_onTap_runningActionsCount == 0) {
	obj23153_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23153_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23153_onTap_activeActionGroupIndex = -1;
		$("#obj23153").trigger("obj23153_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23153) {
				console.warn("de-queueing event obj23153." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23153").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23153_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj23145
(function(){
	window.obj23153_onTap_runningActionsCount = obj23153_onTap_runningActionsCount + 1;


	var selector = "#obj23145";
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
					window.obj23153_onTap_runningActionsCount = window.obj23153_onTap_runningActionsCount - 1;

if (window.obj23153_onTap_runningActionsCount < 0) {
	window.obj23153_onTap_runningActionsCount = 0;
} else if (window.obj23153_onTap_runningActionsCount == 0) {
	obj23153_onTap_actionGroup2();
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
				window.obj23153_onTap_runningActionsCount = window.obj23153_onTap_runningActionsCount - 1;

if (window.obj23153_onTap_runningActionsCount < 0) {
	window.obj23153_onTap_runningActionsCount = 0;
} else if (window.obj23153_onTap_runningActionsCount == 0) {
	obj23153_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23143
(function(){
	window.obj23153_onTap_runningActionsCount = obj23153_onTap_runningActionsCount + 1;


	var selector = "#obj23143";
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
					window.obj23153_onTap_runningActionsCount = window.obj23153_onTap_runningActionsCount - 1;

if (window.obj23153_onTap_runningActionsCount < 0) {
	window.obj23153_onTap_runningActionsCount = 0;
} else if (window.obj23153_onTap_runningActionsCount == 0) {
	obj23153_onTap_actionGroup2();
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
				window.obj23153_onTap_runningActionsCount = window.obj23153_onTap_runningActionsCount - 1;

if (window.obj23153_onTap_runningActionsCount < 0) {
	window.obj23153_onTap_runningActionsCount = 0;
} else if (window.obj23153_onTap_runningActionsCount == 0) {
	obj23153_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23153_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23153_onTap_activeActionGroupIndex = -1;
		$("#obj23153").trigger("obj23153_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23153) {
				console.warn("de-queueing event obj23153." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23153").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23153_onTap_activeActionGroupIndex = 2;
	











































};
obj23147_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23147_onTap_activeActionGroupIndex = -1;
		$("#obj23147").trigger("obj23147_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23147) {
				console.warn("de-queueing event obj23147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23147_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj23147 
hide_23150();
function hide_23150() {
	var selector = "#obj23147";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23147_onTap_runningActionsCount = obj23147_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23147_onTap_runningActionsCount = window.obj23147_onTap_runningActionsCount - 1;

if (window.obj23147_onTap_runningActionsCount < 0) {
	window.obj23147_onTap_runningActionsCount = 0;
} else if (window.obj23147_onTap_runningActionsCount == 0) {
	obj23147_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23150(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23147_onTap_runningActionsCount = window.obj23147_onTap_runningActionsCount - 1;

if (window.obj23147_onTap_runningActionsCount < 0) {
	window.obj23147_onTap_runningActionsCount = 0;
} else if (window.obj23147_onTap_runningActionsCount == 0) {
	obj23147_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj23153
(function(){
	window.obj23147_onTap_runningActionsCount = obj23147_onTap_runningActionsCount + 1;


	var selector = "#obj23153";
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
					window.obj23147_onTap_runningActionsCount = window.obj23147_onTap_runningActionsCount - 1;

if (window.obj23147_onTap_runningActionsCount < 0) {
	window.obj23147_onTap_runningActionsCount = 0;
} else if (window.obj23147_onTap_runningActionsCount == 0) {
	obj23147_onTap_actionGroup1();
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
				window.obj23147_onTap_runningActionsCount = window.obj23147_onTap_runningActionsCount - 1;

if (window.obj23147_onTap_runningActionsCount < 0) {
	window.obj23147_onTap_runningActionsCount = 0;
} else if (window.obj23147_onTap_runningActionsCount == 0) {
	obj23147_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23147_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23147_onTap_activeActionGroupIndex = -1;
		$("#obj23147").trigger("obj23147_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23147) {
				console.warn("de-queueing event obj23147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23147_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj23143 
hide_23151();
function hide_23151() {
	var selector = "#obj23143";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23147_onTap_runningActionsCount = obj23147_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23147_onTap_runningActionsCount = window.obj23147_onTap_runningActionsCount - 1;

if (window.obj23147_onTap_runningActionsCount < 0) {
	window.obj23147_onTap_runningActionsCount = 0;
} else if (window.obj23147_onTap_runningActionsCount == 0) {
	obj23147_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23151(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23147_onTap_runningActionsCount = window.obj23147_onTap_runningActionsCount - 1;

if (window.obj23147_onTap_runningActionsCount < 0) {
	window.obj23147_onTap_runningActionsCount = 0;
} else if (window.obj23147_onTap_runningActionsCount == 0) {
	obj23147_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23145 
hide_23152();
function hide_23152() {
	var selector = "#obj23145";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23147_onTap_runningActionsCount = obj23147_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23147_onTap_runningActionsCount = window.obj23147_onTap_runningActionsCount - 1;

if (window.obj23147_onTap_runningActionsCount < 0) {
	window.obj23147_onTap_runningActionsCount = 0;
} else if (window.obj23147_onTap_runningActionsCount == 0) {
	obj23147_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23152(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23147_onTap_runningActionsCount = window.obj23147_onTap_runningActionsCount - 1;

if (window.obj23147_onTap_runningActionsCount < 0) {
	window.obj23147_onTap_runningActionsCount = 0;
} else if (window.obj23147_onTap_runningActionsCount == 0) {
	obj23147_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj23147_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23147_onTap_activeActionGroupIndex = -1;
		$("#obj23147").trigger("obj23147_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23147) {
				console.warn("de-queueing event obj23147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23147_onTap_activeActionGroupIndex = 2;
	











































};
obj23175_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23175_onTap_activeActionGroupIndex = -1;
		$("#obj23175").trigger("obj23175_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23175) {
				console.warn("de-queueing event obj23175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23175_onTap_activeActionGroupIndex = 0;
	

















//	action: openURL
openUrl_23178();
function openUrl_23178() {
	window.obj23175_onTap_runningActionsCount = obj23175_onTap_runningActionsCount + 1;

	XPUB.openUrl("https://qr.orioncentr.com.ua/9VQVy", false);
	window.obj23175_onTap_runningActionsCount = window.obj23175_onTap_runningActionsCount - 1;

if (window.obj23175_onTap_runningActionsCount < 0) {
	window.obj23175_onTap_runningActionsCount = 0;
} else if (window.obj23175_onTap_runningActionsCount == 0) {
	obj23175_onTap_actionGroup1();
}
}

























};
obj23175_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23175_onTap_activeActionGroupIndex = -1;
		$("#obj23175").trigger("obj23175_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23175) {
				console.warn("de-queueing event obj23175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23175_onTap_activeActionGroupIndex = 1;
	











































};
obj23179_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23179_onTap_activeActionGroupIndex = -1;
		$("#obj23179").trigger("obj23179_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23179) {
				console.warn("de-queueing event obj23179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23179_onTap_activeActionGroupIndex = 0;
	

















//	action: openURL
openUrl_23181();
function openUrl_23181() {
	window.obj23179_onTap_runningActionsCount = obj23179_onTap_runningActionsCount + 1;

	XPUB.openUrl("https://qr.orioncentr.com.ua/ZaX9X", false);
	window.obj23179_onTap_runningActionsCount = window.obj23179_onTap_runningActionsCount - 1;

if (window.obj23179_onTap_runningActionsCount < 0) {
	window.obj23179_onTap_runningActionsCount = 0;
} else if (window.obj23179_onTap_runningActionsCount == 0) {
	obj23179_onTap_actionGroup1();
}
}

























};
obj23179_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23179_onTap_activeActionGroupIndex = -1;
		$("#obj23179").trigger("obj23179_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23179) {
				console.warn("de-queueing event obj23179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23179_onTap_activeActionGroupIndex = 1;
	











































};
obj23186_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23186_onTap_activeActionGroupIndex = -1;
		$("#obj23186").trigger("obj23186_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23186) {
				console.warn("de-queueing event obj23186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23186_onTap_activeActionGroupIndex = 0;
	

















//	action: openURL
openUrl_23188();
function openUrl_23188() {
	window.obj23186_onTap_runningActionsCount = obj23186_onTap_runningActionsCount + 1;

	XPUB.openUrl("https://qr.orioncentr.com.ua/cSlkj", false);
	window.obj23186_onTap_runningActionsCount = window.obj23186_onTap_runningActionsCount - 1;

if (window.obj23186_onTap_runningActionsCount < 0) {
	window.obj23186_onTap_runningActionsCount = 0;
} else if (window.obj23186_onTap_runningActionsCount == 0) {
	obj23186_onTap_actionGroup1();
}
}

























};
obj23186_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23186_onTap_activeActionGroupIndex = -1;
		$("#obj23186").trigger("obj23186_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23186) {
				console.warn("de-queueing event obj23186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23186_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj23112: Event Touch Down
 *
 */

$("#obj23112").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23112_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23112_onTap is still running");
	return;
}
var obj23112_onTap_runningActionsCount = 0;
var obj23112_onTap_loopCount = 0;
obj23112_onTap_actionGroup0();
});


















/*
 *
 *   obj23153: Event Touch Down
 *
 */

$("#obj23153").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23153_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23153_onTap is still running");
	return;
}
var obj23153_onTap_runningActionsCount = 0;
var obj23153_onTap_loopCount = 0;
obj23153_onTap_actionGroup0();
});


















/*
 *
 *   obj23147: Event Touch Down
 *
 */

$("#obj23147").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23147_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23147_onTap is still running");
	return;
}
var obj23147_onTap_runningActionsCount = 0;
var obj23147_onTap_loopCount = 0;
obj23147_onTap_actionGroup0();
});




































































































































/*
 *
 *   obj23175: Event Touch Down
 *
 */

$("#obj23175").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23175_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23175_onTap is still running");
	return;
}
var obj23175_onTap_runningActionsCount = 0;
var obj23175_onTap_loopCount = 0;
obj23175_onTap_actionGroup0();
});
























































/*
 *
 *   obj23179: Event Touch Down
 *
 */

$("#obj23179").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23179_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23179_onTap is still running");
	return;
}
var obj23179_onTap_runningActionsCount = 0;
var obj23179_onTap_loopCount = 0;
obj23179_onTap_actionGroup0();
});
























































/*
 *
 *   obj23186: Event Touch Down
 *
 */

$("#obj23186").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23186_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23186_onTap is still running");
	return;
}
var obj23186_onTap_runningActionsCount = 0;
var obj23186_onTap_loopCount = 0;
obj23186_onTap_actionGroup0();
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
	
$("#obj23106").trigger('SCEventShow');
$("#obj23108").trigger('SCEventShow');
$("#obj23110").trigger('SCEventShow');
$("#obj23112").trigger('SCEventShow');
$("#obj23153").trigger('SCEventShow');
$("#obj23161").trigger('SCEventShow');
$("#obj23159").trigger('SCEventShow');
$("#obj23163").trigger('SCEventShow');
$("#obj23168").trigger('SCEventShow');
$("#obj23171").trigger('SCEventShow');
$("#obj23173").trigger('SCEventShow');
$("#obj23175").trigger('SCEventShow');
$("#obj23184").trigger('SCEventShow');
$("#obj23182").trigger('SCEventShow');
$("#obj23179").trigger('SCEventShow');
$("#obj23191").trigger('SCEventShow');
$("#obj23189").trigger('SCEventShow');
$("#obj23186").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});