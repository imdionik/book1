pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 25339;
pubcoder.page.title = pubcoder.page.title || "10";
pubcoder.page.number = pubcoder.page.number || 10;
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
var obj25340_onTap_activeActionGroupIndex = -1;
var obj25340_onTap_runningActionsCount = 0;
var obj25340_onTap_loopCount = 0;

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
		
obj25340_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj25340_onTap_activeActionGroupIndex = -1;
		$("#obj25340").trigger("obj25340_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 25340) {
				console.warn("de-queueing event obj25340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj25340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj25340_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_25342();
function goToPage_25342() {
	window.obj25340_onTap_runningActionsCount = obj25340_onTap_runningActionsCount + 1;

	$("#anchor190")[0].click();
	window.obj25340_onTap_runningActionsCount = window.obj25340_onTap_runningActionsCount - 1;

if (window.obj25340_onTap_runningActionsCount < 0) {
	window.obj25340_onTap_runningActionsCount = 0;
} else if (window.obj25340_onTap_runningActionsCount == 0) {
	obj25340_onTap_actionGroup1();
}
}










































};
obj25340_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj25340_onTap_activeActionGroupIndex = -1;
		$("#obj25340").trigger("obj25340_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 25340) {
				console.warn("de-queueing event obj25340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj25340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj25340_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj25340: Event Touch Down
 *
 */

$("#obj25340").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj25340_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj25340_onTap is still running");
	return;
}
var obj25340_onTap_runningActionsCount = 0;
var obj25340_onTap_loopCount = 0;
obj25340_onTap_actionGroup0();
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
	
$("#obj25340").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});