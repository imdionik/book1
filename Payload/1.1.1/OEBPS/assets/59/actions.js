pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 7791;
pubcoder.page.title = pubcoder.page.title || "59";
pubcoder.page.number = pubcoder.page.number || 59;
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
var obj7794_onShow_activeActionGroupIndex = -1;
var obj7794_onShow_runningActionsCount = 0;
var obj7794_onShow_loopCount = 0;

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
		
obj7794_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7794_onShow_activeActionGroupIndex = -1;
		$("#obj7794").trigger("obj7794_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7794) {
				console.warn("de-queueing event obj7794." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7794").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7794_onShow_activeActionGroupIndex = 0;
	
















//	action: wait
wait_7827();
function wait_7827() {
	window.obj7794_onShow_runningActionsCount = obj7794_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7794_onShow_runningActionsCount = window.obj7794_onShow_runningActionsCount - 1;

if (window.obj7794_onShow_runningActionsCount < 0) {
	window.obj7794_onShow_runningActionsCount = 0;
} else if (window.obj7794_onShow_runningActionsCount == 0) {
	obj7794_onShow_actionGroup1();
}
	}, 2000);
}


























};
obj7794_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7794_onShow_activeActionGroupIndex = -1;
		$("#obj7794").trigger("obj7794_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7794) {
				console.warn("de-queueing event obj7794." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7794").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7794_onShow_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_7828();
function goToPage_7828() {
	window.obj7794_onShow_runningActionsCount = obj7794_onShow_runningActionsCount + 1;

	$("#anchor928")[0].click();
	window.obj7794_onShow_runningActionsCount = window.obj7794_onShow_runningActionsCount - 1;

if (window.obj7794_onShow_runningActionsCount < 0) {
	window.obj7794_onShow_runningActionsCount = 0;
} else if (window.obj7794_onShow_runningActionsCount == 0) {
	obj7794_onShow_actionGroup2();
}
}










































};
obj7794_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7794_onShow_activeActionGroupIndex = -1;
		$("#obj7794").trigger("obj7794_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7794) {
				console.warn("de-queueing event obj7794." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7794").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7794_onShow_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



























/*
 *
 *   obj7794: Event Show
 *
 */

$("#obj7794").bind('SCEventShow', function(event) {
	if (window.obj7794_onShow_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7794_onShow is still running");
	return;
}
var obj7794_onShow_runningActionsCount = 0;
var obj7794_onShow_loopCount = 0;
obj7794_onShow_actionGroup0();
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
	
$("#obj7792").trigger('SCEventShow');
$("#obj7794").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});