pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 22683;
pubcoder.page.title = pubcoder.page.title || "38";
pubcoder.page.number = pubcoder.page.number || 38;
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
var obj22690_onTap_activeActionGroupIndex = -1;
var obj22690_onTap_runningActionsCount = 0;
var obj22690_onTap_loopCount = 0;

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
		
obj22690_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22690_onTap_activeActionGroupIndex = -1;
		$("#obj22690").trigger("obj22690_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22690) {
				console.warn("de-queueing event obj22690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22690_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22692();
function goToPage_22692() {
	window.obj22690_onTap_runningActionsCount = obj22690_onTap_runningActionsCount + 1;

	$("#anchor781")[0].click();
	window.obj22690_onTap_runningActionsCount = window.obj22690_onTap_runningActionsCount - 1;

if (window.obj22690_onTap_runningActionsCount < 0) {
	window.obj22690_onTap_runningActionsCount = 0;
} else if (window.obj22690_onTap_runningActionsCount == 0) {
	obj22690_onTap_actionGroup1();
}
}










































};
obj22690_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22690_onTap_activeActionGroupIndex = -1;
		$("#obj22690").trigger("obj22690_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22690) {
				console.warn("de-queueing event obj22690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22690_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj22690: Event Touch Down
 *
 */

$("#obj22690").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22690_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22690_onTap is still running");
	return;
}
var obj22690_onTap_runningActionsCount = 0;
var obj22690_onTap_loopCount = 0;
obj22690_onTap_actionGroup0();
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
	
$("#obj22684").trigger('SCEventShow');
$("#obj22686").trigger('SCEventShow');
$("#obj22688").trigger('SCEventShow');
$("#obj22690").trigger('SCEventShow');
$("#obj23100").trigger('SCEventShow');
$("#obj23103").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});