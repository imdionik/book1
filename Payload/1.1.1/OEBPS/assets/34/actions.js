pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 18734;
pubcoder.page.title = pubcoder.page.title || "34";
pubcoder.page.number = pubcoder.page.number || 34;
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
var obj18741_onTap_activeActionGroupIndex = -1;
var obj18741_onTap_runningActionsCount = 0;
var obj18741_onTap_loopCount = 0;
var obj18744_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj18744_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18744_SCEventCounterReachedTargetValue_loopCount = 0;
var obj18752_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj18752_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18752_SCEventCounterReachedTargetValue_loopCount = 0;
var obj18755_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj18755_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18755_SCEventCounterReachedTargetValue_loopCount = 0;
var obj18758_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj18758_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18758_SCEventCounterReachedTargetValue_loopCount = 0;
var obj18788_onDrag_activeActionGroupIndex = -1;
var obj18788_onDrag_runningActionsCount = 0;
var obj18788_onDrag_loopCount = 0;
var obj18788_onTouchDown_activeActionGroupIndex = -1;
var obj18788_onTouchDown_runningActionsCount = 0;
var obj18788_onTouchDown_loopCount = 0;
var obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18788_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18788_droppedInsideTargetActions_runningActionsCount = 0;
var obj18788_droppedInsideTargetActions_loopCount = 0;
var obj18800_onDrag_activeActionGroupIndex = -1;
var obj18800_onDrag_runningActionsCount = 0;
var obj18800_onDrag_loopCount = 0;
var obj18800_onTouchDown_activeActionGroupIndex = -1;
var obj18800_onTouchDown_runningActionsCount = 0;
var obj18800_onTouchDown_loopCount = 0;
var obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18800_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18800_droppedInsideTargetActions_runningActionsCount = 0;
var obj18800_droppedInsideTargetActions_loopCount = 0;
var obj18812_onDrag_activeActionGroupIndex = -1;
var obj18812_onDrag_runningActionsCount = 0;
var obj18812_onDrag_loopCount = 0;
var obj18812_onTouchDown_activeActionGroupIndex = -1;
var obj18812_onTouchDown_runningActionsCount = 0;
var obj18812_onTouchDown_loopCount = 0;
var obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18812_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18812_droppedInsideTargetActions_runningActionsCount = 0;
var obj18812_droppedInsideTargetActions_loopCount = 0;
var obj18824_onDrag_activeActionGroupIndex = -1;
var obj18824_onDrag_runningActionsCount = 0;
var obj18824_onDrag_loopCount = 0;
var obj18824_onTouchDown_activeActionGroupIndex = -1;
var obj18824_onTouchDown_runningActionsCount = 0;
var obj18824_onTouchDown_loopCount = 0;
var obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18824_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18824_droppedInsideTargetActions_runningActionsCount = 0;
var obj18824_droppedInsideTargetActions_loopCount = 0;
var obj18836_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj18836_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18836_SCEventCounterReachedTargetValue_loopCount = 0;
var obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj18839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18839_SCEventCounterReachedTargetValue_loopCount = 0;
var obj18908_onDrag_activeActionGroupIndex = -1;
var obj18908_onDrag_runningActionsCount = 0;
var obj18908_onDrag_loopCount = 0;
var obj18908_onTouchDown_activeActionGroupIndex = -1;
var obj18908_onTouchDown_runningActionsCount = 0;
var obj18908_onTouchDown_loopCount = 0;
var obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18908_droppedInsideTargetActions_2_loopCount = 0;
var obj18908_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18908_droppedInsideTargetActions_runningActionsCount = 0;
var obj18908_droppedInsideTargetActions_loopCount = 0;
var obj18920_onDrag_activeActionGroupIndex = -1;
var obj18920_onDrag_runningActionsCount = 0;
var obj18920_onDrag_loopCount = 0;
var obj18920_onTouchDown_activeActionGroupIndex = -1;
var obj18920_onTouchDown_runningActionsCount = 0;
var obj18920_onTouchDown_loopCount = 0;
var obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18920_droppedInsideTargetActions_2_loopCount = 0;
var obj18920_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18920_droppedInsideTargetActions_runningActionsCount = 0;
var obj18920_droppedInsideTargetActions_loopCount = 0;
var obj18932_onDrag_activeActionGroupIndex = -1;
var obj18932_onDrag_runningActionsCount = 0;
var obj18932_onDrag_loopCount = 0;
var obj18932_onTouchDown_activeActionGroupIndex = -1;
var obj18932_onTouchDown_runningActionsCount = 0;
var obj18932_onTouchDown_loopCount = 0;
var obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18932_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18932_droppedInsideTargetActions_runningActionsCount = 0;
var obj18932_droppedInsideTargetActions_loopCount = 0;
var obj18960_onDrag_activeActionGroupIndex = -1;
var obj18960_onDrag_runningActionsCount = 0;
var obj18960_onDrag_loopCount = 0;
var obj18960_onTouchDown_activeActionGroupIndex = -1;
var obj18960_onTouchDown_runningActionsCount = 0;
var obj18960_onTouchDown_loopCount = 0;
var obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18960_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18960_droppedInsideTargetActions_runningActionsCount = 0;
var obj18960_droppedInsideTargetActions_loopCount = 0;
var obj18972_onDrag_activeActionGroupIndex = -1;
var obj18972_onDrag_runningActionsCount = 0;
var obj18972_onDrag_loopCount = 0;
var obj18972_onTouchDown_activeActionGroupIndex = -1;
var obj18972_onTouchDown_runningActionsCount = 0;
var obj18972_onTouchDown_loopCount = 0;
var obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18972_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18972_droppedInsideTargetActions_runningActionsCount = 0;
var obj18972_droppedInsideTargetActions_loopCount = 0;
var obj18984_onDrag_activeActionGroupIndex = -1;
var obj18984_onDrag_runningActionsCount = 0;
var obj18984_onDrag_loopCount = 0;
var obj18984_onTouchDown_activeActionGroupIndex = -1;
var obj18984_onTouchDown_runningActionsCount = 0;
var obj18984_onTouchDown_loopCount = 0;
var obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18984_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18984_droppedInsideTargetActions_runningActionsCount = 0;
var obj18984_droppedInsideTargetActions_loopCount = 0;
var obj19012_onDrag_activeActionGroupIndex = -1;
var obj19012_onDrag_runningActionsCount = 0;
var obj19012_onDrag_loopCount = 0;
var obj19012_onTouchDown_activeActionGroupIndex = -1;
var obj19012_onTouchDown_runningActionsCount = 0;
var obj19012_onTouchDown_loopCount = 0;
var obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj19012_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj19012_droppedInsideTargetActions_runningActionsCount = 0;
var obj19012_droppedInsideTargetActions_loopCount = 0;
var obj19024_onDrag_activeActionGroupIndex = -1;
var obj19024_onDrag_runningActionsCount = 0;
var obj19024_onDrag_loopCount = 0;
var obj19024_onTouchDown_activeActionGroupIndex = -1;
var obj19024_onTouchDown_runningActionsCount = 0;
var obj19024_onTouchDown_loopCount = 0;
var obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj19024_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj19024_droppedInsideTargetActions_runningActionsCount = 0;
var obj19024_droppedInsideTargetActions_loopCount = 0;
var obj19155_onDrag_activeActionGroupIndex = -1;
var obj19155_onDrag_runningActionsCount = 0;
var obj19155_onDrag_loopCount = 0;
var obj19155_onTouchDown_activeActionGroupIndex = -1;
var obj19155_onTouchDown_runningActionsCount = 0;
var obj19155_onTouchDown_loopCount = 0;
var obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj19155_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj19155_droppedInsideTargetActions_runningActionsCount = 0;
var obj19155_droppedInsideTargetActions_loopCount = 0;
var obj19172_onDrag_activeActionGroupIndex = -1;
var obj19172_onDrag_runningActionsCount = 0;
var obj19172_onDrag_loopCount = 0;
var obj19172_onTouchDown_activeActionGroupIndex = -1;
var obj19172_onTouchDown_runningActionsCount = 0;
var obj19172_onTouchDown_loopCount = 0;
var obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj19172_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj19172_droppedInsideTargetActions_runningActionsCount = 0;
var obj19172_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj18744_counterValue = 0;
var obj18744_counterTargetValue = 4;
var obj18744_counterCanExceedTargetValue = false;
var obj18752_counterValue = 0;
var obj18752_counterTargetValue = 6;
var obj18752_counterCanExceedTargetValue = false;
var obj18755_counterValue = 0;
var obj18755_counterTargetValue = 8;
var obj18755_counterCanExceedTargetValue = false;
var obj18758_counterValue = 0;
var obj18758_counterTargetValue = 1;
var obj18758_counterCanExceedTargetValue = false;
var obj18836_counterValue = 0;
var obj18836_counterTargetValue = 1;
var obj18836_counterCanExceedTargetValue = false;
var obj18839_counterValue = 0;
var obj18839_counterTargetValue = 2;
var obj18839_counterCanExceedTargetValue = false;

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
		
obj18741_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18741_onTap_activeActionGroupIndex = -1;
		$("#obj18741").trigger("obj18741_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18741) {
				console.warn("de-queueing event obj18741." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18741").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18741_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_18743();
function goToPage_18743() {
	window.obj18741_onTap_runningActionsCount = obj18741_onTap_runningActionsCount + 1;

	$("#anchor518")[0].click();
	window.obj18741_onTap_runningActionsCount = window.obj18741_onTap_runningActionsCount - 1;

if (window.obj18741_onTap_runningActionsCount < 0) {
	window.obj18741_onTap_runningActionsCount = 0;
} else if (window.obj18741_onTap_runningActionsCount == 0) {
	obj18741_onTap_actionGroup1();
}
}










































};
obj18741_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18741_onTap_activeActionGroupIndex = -1;
		$("#obj18741").trigger("obj18741_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18741) {
				console.warn("de-queueing event obj18741." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18741").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18741_onTap_activeActionGroupIndex = 1;
	











































};
obj18744_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18744_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18744").trigger("obj18744_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18744) {
				console.warn("de-queueing event obj18744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18744_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_18746();
function wait_18746() {
	window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount = obj18744_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18744_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj18744_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18744_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18744").trigger("obj18744_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18744) {
				console.warn("de-queueing event obj18744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18744_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_18747();
function goToPage_18747() {
	window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount = obj18744_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor519")[0].click();
	window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18744_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18744_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj18744_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18744_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18744").trigger("obj18744_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18744) {
				console.warn("de-queueing event obj18744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18744_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj18752_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18752_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18752").trigger("obj18752_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18752) {
				console.warn("de-queueing event obj18752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18752_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18764 
hide_24628();
function hide_24628() {
	var selector = "#obj18764";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount = obj18752_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18752_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24628(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18752_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18752_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18752_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18752").trigger("obj18752_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18752) {
				console.warn("de-queueing event obj18752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18752_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj18758 
incrementCounter_18754();
function incrementCounter_18754() {
	window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount = obj18752_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj18758_counterValue;
	obj18758_counterValue = obj18758_counterValue + 1;
	if (! obj18758_counterCanExceedTargetValue && obj18758_counterValue > obj18758_counterTargetValue) {
		obj18758_counterValue = obj18758_counterTargetValue;
	}

	if (oldValue != obj18758_counterValue) {
		$("#obj18758").trigger('SCEventCounterValueChange');
		$("#obj18758").trigger('SCEventCounterIncrease');
		if (obj18758_counterValue == obj18758_counterTargetValue)
			$("#obj18758").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18752_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18752_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}











};
obj18752_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18752_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18752").trigger("obj18752_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18752) {
				console.warn("de-queueing event obj18752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18752_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj18755_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18755_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18755").trigger("obj18755_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18755) {
				console.warn("de-queueing event obj18755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18755_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18844 
hide_24629();
function hide_24629() {
	var selector = "#obj18844";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount = obj18755_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18755_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24629(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18755_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18755_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18755_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18755").trigger("obj18755_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18755) {
				console.warn("de-queueing event obj18755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18755_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj18758 
incrementCounter_18757();
function incrementCounter_18757() {
	window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount = obj18755_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj18758_counterValue;
	obj18758_counterValue = obj18758_counterValue + 1;
	if (! obj18758_counterCanExceedTargetValue && obj18758_counterValue > obj18758_counterTargetValue) {
		obj18758_counterValue = obj18758_counterTargetValue;
	}

	if (oldValue != obj18758_counterValue) {
		$("#obj18758").trigger('SCEventCounterValueChange');
		$("#obj18758").trigger('SCEventCounterIncrease');
		if (obj18758_counterValue == obj18758_counterTargetValue)
			$("#obj18758").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18755_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18755_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}











};
obj18755_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18755_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18755").trigger("obj18755_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18755) {
				console.warn("de-queueing event obj18755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18755_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj18758_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18758_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18758").trigger("obj18758_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18758) {
				console.warn("de-queueing event obj18758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18758_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj18839 
incrementCounter_18761();
function incrementCounter_18761() {
	window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount = obj18758_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj18839_counterValue;
	obj18839_counterValue = obj18839_counterValue + 1;
	if (! obj18839_counterCanExceedTargetValue && obj18839_counterValue > obj18839_counterTargetValue) {
		obj18839_counterValue = obj18839_counterTargetValue;
	}

	if (oldValue != obj18839_counterValue) {
		$("#obj18839").trigger('SCEventCounterValueChange');
		$("#obj18839").trigger('SCEventCounterIncrease');
		if (obj18839_counterValue == obj18839_counterTargetValue)
			$("#obj18839").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18758_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj18836 
incrementCounter_18762();
function incrementCounter_18762() {
	window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount = obj18758_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj18836_counterValue;
	obj18836_counterValue = obj18836_counterValue + 1;
	if (! obj18836_counterCanExceedTargetValue && obj18836_counterValue > obj18836_counterTargetValue) {
		obj18836_counterValue = obj18836_counterTargetValue;
	}

	if (oldValue != obj18836_counterValue) {
		$("#obj18836").trigger('SCEventCounterValueChange');
		$("#obj18836").trigger('SCEventCounterIncrease');
		if (obj18836_counterValue == obj18836_counterTargetValue)
			$("#obj18836").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18758_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj18758_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18758_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18758").trigger("obj18758_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18758) {
				console.warn("de-queueing event obj18758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18758_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj18758 
decrementCounter_18763();
function decrementCounter_18763() {
	window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount = obj18758_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj18758_counterValue;
	obj18758_counterValue = obj18758_counterValue - 1;
	if (obj18758_counterValue < 0) {
		obj18758_counterValue = 0;
	}

	if (oldValue != obj18758_counterValue) {
		$("#obj18758").trigger('SCEventCounterValueChange');
		$("#obj18758").trigger('SCEventCounterDecrease');
		if (obj18758_counterValue == obj18758_counterTargetValue)
			$("#obj18758").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18758_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18758_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj18758_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18758_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18758").trigger("obj18758_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18758) {
				console.warn("de-queueing event obj18758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18758_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj18788_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18788_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18788");

//	action: dragDrop
//	target: obj18788 
dragDrop_18791();
function dragDrop_18791() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18788_onTouchDown_runningActionsCount = obj18788_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18788');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18788_onTouchDown_runningActionsCount = window.obj18788_onTouchDown_runningActionsCount - 1;

if (window.obj18788_onTouchDown_runningActionsCount < 0) {
	window.obj18788_onTouchDown_runningActionsCount = 0;
} else if (window.obj18788_onTouchDown_runningActionsCount == 0) {
	obj18788_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18783");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18791 = false;
    	var dropped_id_18791;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_18791 = true;
					dropped_id_18791 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18791) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18788").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18788_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18788_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18798();
function playAudioFile_18798() {
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18798")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18798");
			$("#obj_audio_playSoundFile18798").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18788 
move_18799();
function move_18799() {
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18788");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 833;
	var moveY = 268;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18788_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18788 
hide_18793();
function hide_18793() {
	var selector = "#obj18788";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18788_droppedInsideTargetActions_runningActionsCount = obj18788_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18788_droppedInsideTargetActions_runningActionsCount = window.obj18788_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18788_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18793(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18788_droppedInsideTargetActions_runningActionsCount = window.obj18788_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18788_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18788_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18794();
function playAudioFile_18794() {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = obj18788_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18794")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18794");
			$("#obj_audio_playSoundFile18794").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18788_droppedInsideTargetActions_runningActionsCount = window.obj18788_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18788_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18788_droppedInsideTargetActions_runningActionsCount = window.obj18788_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18788_droppedInsideTargetActions_actionGroup2();
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
				window.obj18788_droppedInsideTargetActions_runningActionsCount = window.obj18788_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18788_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18788_droppedInsideTargetActions_runningActionsCount = window.obj18788_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18788_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18788_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18785
(function(){
	window.obj18788_droppedInsideTargetActions_runningActionsCount = obj18788_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18785";
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
					window.obj18788_droppedInsideTargetActions_runningActionsCount = window.obj18788_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18788_droppedInsideTargetActions_actionGroup3();
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
				window.obj18788_droppedInsideTargetActions_runningActionsCount = window.obj18788_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18788_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18788_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18752 
incrementCounter_18796();
function incrementCounter_18796() {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = obj18788_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18752_counterValue;
	obj18752_counterValue = obj18752_counterValue + 1;
	if (! obj18752_counterCanExceedTargetValue && obj18752_counterValue > obj18752_counterTargetValue) {
		obj18752_counterValue = obj18752_counterTargetValue;
	}

	if (oldValue != obj18752_counterValue) {
		$("#obj18752").trigger('SCEventCounterValueChange');
		$("#obj18752").trigger('SCEventCounterIncrease');
		if (obj18752_counterValue == obj18752_counterTargetValue)
			$("#obj18752").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18788_droppedInsideTargetActions_runningActionsCount = window.obj18788_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18788_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18788_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18788").trigger("obj18788_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18788) {
				console.warn("de-queueing event obj18788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18788_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18800_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18800_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18800");

//	action: dragDrop
//	target: obj18800 
dragDrop_18803();
function dragDrop_18803() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18800_onTouchDown_runningActionsCount = obj18800_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18800');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18800_onTouchDown_runningActionsCount = window.obj18800_onTouchDown_runningActionsCount - 1;

if (window.obj18800_onTouchDown_runningActionsCount < 0) {
	window.obj18800_onTouchDown_runningActionsCount = 0;
} else if (window.obj18800_onTouchDown_runningActionsCount == 0) {
	obj18800_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj19170");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18803 = false;
    	var dropped_id_18803;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_18803 = true;
					dropped_id_18803 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18803) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18800").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18800_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18800_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18810();
function playAudioFile_18810() {
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18810")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18810");
			$("#obj_audio_playSoundFile18810").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18800 
move_18811();
function move_18811() {
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18800");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 907;
	var moveY = 268;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18800_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18800 
hide_18805();
function hide_18805() {
	var selector = "#obj18800";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18800_droppedInsideTargetActions_runningActionsCount = obj18800_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18800_droppedInsideTargetActions_runningActionsCount = window.obj18800_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18800_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18805(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18800_droppedInsideTargetActions_runningActionsCount = window.obj18800_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18800_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18800_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18806();
function playAudioFile_18806() {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = obj18800_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18806")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18806");
			$("#obj_audio_playSoundFile18806").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18800_droppedInsideTargetActions_runningActionsCount = window.obj18800_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18800_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18800_droppedInsideTargetActions_runningActionsCount = window.obj18800_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18800_droppedInsideTargetActions_actionGroup2();
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
				window.obj18800_droppedInsideTargetActions_runningActionsCount = window.obj18800_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18800_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18800_droppedInsideTargetActions_runningActionsCount = window.obj18800_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18800_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18800_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj19167
(function(){
	window.obj18800_droppedInsideTargetActions_runningActionsCount = obj18800_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19167";
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
					window.obj18800_droppedInsideTargetActions_runningActionsCount = window.obj18800_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18800_droppedInsideTargetActions_actionGroup3();
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
				window.obj18800_droppedInsideTargetActions_runningActionsCount = window.obj18800_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18800_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18800_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18752 
incrementCounter_18808();
function incrementCounter_18808() {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = obj18800_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18752_counterValue;
	obj18752_counterValue = obj18752_counterValue + 1;
	if (! obj18752_counterCanExceedTargetValue && obj18752_counterValue > obj18752_counterTargetValue) {
		obj18752_counterValue = obj18752_counterTargetValue;
	}

	if (oldValue != obj18752_counterValue) {
		$("#obj18752").trigger('SCEventCounterValueChange');
		$("#obj18752").trigger('SCEventCounterIncrease');
		if (obj18752_counterValue == obj18752_counterTargetValue)
			$("#obj18752").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18800_droppedInsideTargetActions_runningActionsCount = window.obj18800_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18800_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18800_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18800").trigger("obj18800_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18800) {
				console.warn("de-queueing event obj18800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18800_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18812_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18812_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18812");

//	action: dragDrop
//	target: obj18812 
dragDrop_18815();
function dragDrop_18815() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18812_onTouchDown_runningActionsCount = obj18812_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18812');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18812_onTouchDown_runningActionsCount = window.obj18812_onTouchDown_runningActionsCount - 1;

if (window.obj18812_onTouchDown_runningActionsCount < 0) {
	window.obj18812_onTouchDown_runningActionsCount = 0;
} else if (window.obj18812_onTouchDown_runningActionsCount == 0) {
	obj18812_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18778");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18815 = false;
    	var dropped_id_18815;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_18815 = true;
					dropped_id_18815 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18815) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18812").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18812_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18812_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18822();
function playAudioFile_18822() {
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18822")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18822");
			$("#obj_audio_playSoundFile18822").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18812 
move_18823();
function move_18823() {
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18812");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 983;
	var moveY = 268;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18812_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18812 
hide_18817();
function hide_18817() {
	var selector = "#obj18812";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18812_droppedInsideTargetActions_runningActionsCount = obj18812_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18812_droppedInsideTargetActions_runningActionsCount = window.obj18812_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18812_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18812_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18817(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18812_droppedInsideTargetActions_runningActionsCount = window.obj18812_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18812_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18812_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18812_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18818();
function playAudioFile_18818() {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = obj18812_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18818")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18818");
			$("#obj_audio_playSoundFile18818").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18812_droppedInsideTargetActions_runningActionsCount = window.obj18812_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18812_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18812_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18812_droppedInsideTargetActions_runningActionsCount = window.obj18812_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18812_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18812_droppedInsideTargetActions_actionGroup2();
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
				window.obj18812_droppedInsideTargetActions_runningActionsCount = window.obj18812_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18812_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18812_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18812_droppedInsideTargetActions_runningActionsCount = window.obj18812_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18812_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18812_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18812_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18780
(function(){
	window.obj18812_droppedInsideTargetActions_runningActionsCount = obj18812_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18780";
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
					window.obj18812_droppedInsideTargetActions_runningActionsCount = window.obj18812_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18812_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18812_droppedInsideTargetActions_actionGroup3();
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
				window.obj18812_droppedInsideTargetActions_runningActionsCount = window.obj18812_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18812_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18812_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18812_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18752 
incrementCounter_18820();
function incrementCounter_18820() {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = obj18812_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18752_counterValue;
	obj18752_counterValue = obj18752_counterValue + 1;
	if (! obj18752_counterCanExceedTargetValue && obj18752_counterValue > obj18752_counterTargetValue) {
		obj18752_counterValue = obj18752_counterTargetValue;
	}

	if (oldValue != obj18752_counterValue) {
		$("#obj18752").trigger('SCEventCounterValueChange');
		$("#obj18752").trigger('SCEventCounterIncrease');
		if (obj18752_counterValue == obj18752_counterTargetValue)
			$("#obj18752").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18812_droppedInsideTargetActions_runningActionsCount = window.obj18812_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18812_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18812_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18812_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18812_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18812_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18812").trigger("obj18812_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18812) {
				console.warn("de-queueing event obj18812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18812_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18824_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18824_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18824");

//	action: dragDrop
//	target: obj18824 
dragDrop_18827();
function dragDrop_18827() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18824_onTouchDown_runningActionsCount = obj18824_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18824');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18824_onTouchDown_runningActionsCount = window.obj18824_onTouchDown_runningActionsCount - 1;

if (window.obj18824_onTouchDown_runningActionsCount < 0) {
	window.obj18824_onTouchDown_runningActionsCount = 0;
} else if (window.obj18824_onTouchDown_runningActionsCount == 0) {
	obj18824_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18768");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18827 = false;
    	var dropped_id_18827;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_18827 = true;
					dropped_id_18827 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18827) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18824").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18824_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18824_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18834();
function playAudioFile_18834() {
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18834")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18834");
			$("#obj_audio_playSoundFile18834").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18824 
move_18835();
function move_18835() {
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18824");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1060;
	var moveY = 268;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18824_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18824 
hide_18829();
function hide_18829() {
	var selector = "#obj18824";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18824_droppedInsideTargetActions_runningActionsCount = obj18824_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18824_droppedInsideTargetActions_runningActionsCount = window.obj18824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18824_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18829(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18824_droppedInsideTargetActions_runningActionsCount = window.obj18824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18824_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18824_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18830();
function playAudioFile_18830() {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = obj18824_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18830")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18830");
			$("#obj_audio_playSoundFile18830").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18824_droppedInsideTargetActions_runningActionsCount = window.obj18824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18824_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18824_droppedInsideTargetActions_runningActionsCount = window.obj18824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18824_droppedInsideTargetActions_actionGroup2();
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
				window.obj18824_droppedInsideTargetActions_runningActionsCount = window.obj18824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18824_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18824_droppedInsideTargetActions_runningActionsCount = window.obj18824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18824_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18824_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18770
(function(){
	window.obj18824_droppedInsideTargetActions_runningActionsCount = obj18824_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18770";
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
					window.obj18824_droppedInsideTargetActions_runningActionsCount = window.obj18824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18824_droppedInsideTargetActions_actionGroup3();
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
				window.obj18824_droppedInsideTargetActions_runningActionsCount = window.obj18824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18824_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18824_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18752 
incrementCounter_18832();
function incrementCounter_18832() {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = obj18824_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18752_counterValue;
	obj18752_counterValue = obj18752_counterValue + 1;
	if (! obj18752_counterCanExceedTargetValue && obj18752_counterValue > obj18752_counterTargetValue) {
		obj18752_counterValue = obj18752_counterTargetValue;
	}

	if (oldValue != obj18752_counterValue) {
		$("#obj18752").trigger('SCEventCounterValueChange');
		$("#obj18752").trigger('SCEventCounterIncrease');
		if (obj18752_counterValue == obj18752_counterTargetValue)
			$("#obj18752").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18824_droppedInsideTargetActions_runningActionsCount = window.obj18824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18824_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18824_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18824").trigger("obj18824_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18824) {
				console.warn("de-queueing event obj18824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18824_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18836_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18836_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18836").trigger("obj18836_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18836) {
				console.warn("de-queueing event obj18836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18836_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_18838();
function switchText_18838() {
	window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount = obj18836_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/4</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj18750_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj18750_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj18750").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj18750_content");
			setTimeout(function () {
				window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18836_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj18750 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18836_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18836_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj18836_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18836_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18836").trigger("obj18836_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18836) {
				console.warn("de-queueing event obj18836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18836_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj18839_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18839").trigger("obj18839_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18839) {
				console.warn("de-queueing event obj18839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_18841();
function switchText_18841() {
	window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = obj18839_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>4/4</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj18750_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj18750_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj18750").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj18750_content");
			setTimeout(function () {
				window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18839_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj18750 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18839_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj18839_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18839").trigger("obj18839_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18839) {
				console.warn("de-queueing event obj18839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
















//	action: wait
wait_18842();
function wait_18842() {
	window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = obj18839_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18839_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1500);
}


























};
obj18839_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18839").trigger("obj18839_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18839) {
				console.warn("de-queueing event obj18839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_18843();
function goToPage_18843() {
	window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = obj18839_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor528")[0].click();
	window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18839_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18839_SCEventCounterReachedTargetValue_actionGroup3();
}
}










































};
obj18839_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18839").trigger("obj18839_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18839) {
				console.warn("de-queueing event obj18839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj18908_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18908");

//	action: dragDrop
//	target: obj18908 
dragDrop_18911();
function dragDrop_18911() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18908_onTouchDown_runningActionsCount = obj18908_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18908');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18908_onTouchDown_runningActionsCount = window.obj18908_onTouchDown_runningActionsCount - 1;

if (window.obj18908_onTouchDown_runningActionsCount < 0) {
	window.obj18908_onTouchDown_runningActionsCount = 0;
} else if (window.obj18908_onTouchDown_runningActionsCount == 0) {
	obj18908_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18881","#obj18893");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18911 = false;
    	var dropped_id_18911;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_18911 = true;
					dropped_id_18911 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18911) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18908").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18908_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18908_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18918();
function playAudioFile_18918() {
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18918")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18918");
			$("#obj_audio_playSoundFile18918").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18908 
move_18919();
function move_18919() {
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18908");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 831;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18908_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18908 
hide_19250();
function hide_19250() {
	var selector = "#obj18908";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = obj18908_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19250(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18893 
hide_19251();
function hide_19251() {
	var selector = "#obj18893";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = obj18908_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19251(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18895
(function(){
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = obj18908_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18895";
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
					window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18908_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_19253();
function playAudioFile_19253() {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = obj18908_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19253")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19253");
			$("#obj_audio_playSoundFile19253").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18908_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18902
(function(){
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = obj18908_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18902";
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
					window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18908_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_19255();
function incrementCounter_19255() {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = obj18908_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18908_droppedInsideTargetActions_2_runningActionsCount = window.obj18908_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj18908_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj18908_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18908 
hide_18913();
function hide_18913() {
	var selector = "#obj18908";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18908_droppedInsideTargetActions_runningActionsCount = obj18908_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18913(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18881 
hide_19247();
function hide_19247() {
	var selector = "#obj18881";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18908_droppedInsideTargetActions_runningActionsCount = obj18908_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19247(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18864
(function(){
	window.obj18908_droppedInsideTargetActions_runningActionsCount = obj18908_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18864";
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
					window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup1();
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
				window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18908_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18914();
function playAudioFile_18914() {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = obj18908_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18914")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18914");
			$("#obj_audio_playSoundFile18914").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup2();
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
				window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18908_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18883
(function(){
	window.obj18908_droppedInsideTargetActions_runningActionsCount = obj18908_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18883";
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
					window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup3();
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
				window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18908_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_18916();
function incrementCounter_18916() {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = obj18908_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18908_droppedInsideTargetActions_runningActionsCount = window.obj18908_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18908_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18908_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18908_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18908_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18908_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18908").trigger("obj18908_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18908) {
				console.warn("de-queueing event obj18908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18908_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18920_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18920");

//	action: dragDrop
//	target: obj18920 
dragDrop_19256();
function dragDrop_19256() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18920_onTouchDown_runningActionsCount = obj18920_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18920');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18920_onTouchDown_runningActionsCount = window.obj18920_onTouchDown_runningActionsCount - 1;

if (window.obj18920_onTouchDown_runningActionsCount < 0) {
	window.obj18920_onTouchDown_runningActionsCount = 0;
} else if (window.obj18920_onTouchDown_runningActionsCount == 0) {
	obj18920_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18881","#obj18893");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_19256 = false;
    	var dropped_id_19256;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_19256 = true;
					dropped_id_19256 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_19256) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18920").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18920_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18920_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_19272();
function playAudioFile_19272() {
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19272")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19272");
			$("#obj_audio_playSoundFile19272").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18920 
move_19273();
function move_19273() {
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18920");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 907;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18920_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18920 
hide_19265();
function hide_19265() {
	var selector = "#obj18920";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = obj18920_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19265(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18893 
hide_19266();
function hide_19266() {
	var selector = "#obj18893";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = obj18920_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19266(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18895
(function(){
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = obj18920_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18895";
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
					window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18920_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_19268();
function playAudioFile_19268() {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = obj18920_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19268")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19268");
			$("#obj_audio_playSoundFile19268").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18920_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18902
(function(){
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = obj18920_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18902";
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
					window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18920_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_19270();
function incrementCounter_19270() {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = obj18920_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18920_droppedInsideTargetActions_2_runningActionsCount = window.obj18920_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj18920_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj18920_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18920 
hide_19258();
function hide_19258() {
	var selector = "#obj18920";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18920_droppedInsideTargetActions_runningActionsCount = obj18920_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19258(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18881 
hide_19259();
function hide_19259() {
	var selector = "#obj18881";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18920_droppedInsideTargetActions_runningActionsCount = obj18920_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19259(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18864
(function(){
	window.obj18920_droppedInsideTargetActions_runningActionsCount = obj18920_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18864";
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
					window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup1();
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
				window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18920_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_19261();
function playAudioFile_19261() {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = obj18920_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19261")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19261");
			$("#obj_audio_playSoundFile19261").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup2();
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
				window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18920_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18883
(function(){
	window.obj18920_droppedInsideTargetActions_runningActionsCount = obj18920_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18883";
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
					window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup3();
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
				window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18920_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_19263();
function incrementCounter_19263() {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = obj18920_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18920_droppedInsideTargetActions_runningActionsCount = window.obj18920_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18920_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18920_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18920_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18920_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18920_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18920").trigger("obj18920_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18920) {
				console.warn("de-queueing event obj18920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18920_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18932_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18932_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18932");

//	action: dragDrop
//	target: obj18932 
dragDrop_18935();
function dragDrop_18935() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18932_onTouchDown_runningActionsCount = obj18932_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18932');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18932_onTouchDown_runningActionsCount = window.obj18932_onTouchDown_runningActionsCount - 1;

if (window.obj18932_onTouchDown_runningActionsCount < 0) {
	window.obj18932_onTouchDown_runningActionsCount = 0;
} else if (window.obj18932_onTouchDown_runningActionsCount == 0) {
	obj18932_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18897");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18935 = false;
    	var dropped_id_18935;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_18935 = true;
					dropped_id_18935 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18935) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18932").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18932_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18932_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18958();
function playAudioFile_18958() {
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18958")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18958");
			$("#obj_audio_playSoundFile18958").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18932 
move_18959();
function move_18959() {
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18932");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 984;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18932_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18932 
hide_18937();
function hide_18937() {
	var selector = "#obj18932";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18932_droppedInsideTargetActions_runningActionsCount = obj18932_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18932_droppedInsideTargetActions_runningActionsCount = window.obj18932_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18932_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18932_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18937(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18932_droppedInsideTargetActions_runningActionsCount = window.obj18932_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18932_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18932_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18932_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18940();
function playAudioFile_18940() {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = obj18932_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18940")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18940");
			$("#obj_audio_playSoundFile18940").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18932_droppedInsideTargetActions_runningActionsCount = window.obj18932_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18932_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18932_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18932_droppedInsideTargetActions_runningActionsCount = window.obj18932_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18932_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18932_droppedInsideTargetActions_actionGroup2();
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
				window.obj18932_droppedInsideTargetActions_runningActionsCount = window.obj18932_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18932_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18932_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18932_droppedInsideTargetActions_runningActionsCount = window.obj18932_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18932_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18932_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18932_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18905
(function(){
	window.obj18932_droppedInsideTargetActions_runningActionsCount = obj18932_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18905";
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
					window.obj18932_droppedInsideTargetActions_runningActionsCount = window.obj18932_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18932_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18932_droppedInsideTargetActions_actionGroup3();
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
				window.obj18932_droppedInsideTargetActions_runningActionsCount = window.obj18932_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18932_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18932_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18932_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_18942();
function incrementCounter_18942() {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = obj18932_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18932_droppedInsideTargetActions_runningActionsCount = window.obj18932_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18932_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18932_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18932_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18932_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18932_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18932").trigger("obj18932_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18932) {
				console.warn("de-queueing event obj18932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18932_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18960_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18960_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18960");

//	action: dragDrop
//	target: obj18960 
dragDrop_18963();
function dragDrop_18963() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18960_onTouchDown_runningActionsCount = obj18960_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18960');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18960_onTouchDown_runningActionsCount = window.obj18960_onTouchDown_runningActionsCount - 1;

if (window.obj18960_onTouchDown_runningActionsCount < 0) {
	window.obj18960_onTouchDown_runningActionsCount = 0;
} else if (window.obj18960_onTouchDown_runningActionsCount == 0) {
	obj18960_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18876");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18963 = false;
    	var dropped_id_18963;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_18963 = true;
					dropped_id_18963 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18963) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18960").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18960_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18960_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18970();
function playAudioFile_18970() {
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18970")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18970");
			$("#obj_audio_playSoundFile18970").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18960 
move_18971();
function move_18971() {
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18960");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 453;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18960_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18960 
hide_18965();
function hide_18965() {
	var selector = "#obj18960";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18960_droppedInsideTargetActions_runningActionsCount = obj18960_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18960_droppedInsideTargetActions_runningActionsCount = window.obj18960_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18960_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18965(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18960_droppedInsideTargetActions_runningActionsCount = window.obj18960_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18960_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18960_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18966();
function playAudioFile_18966() {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = obj18960_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18966")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18966");
			$("#obj_audio_playSoundFile18966").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18960_droppedInsideTargetActions_runningActionsCount = window.obj18960_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18960_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18960_droppedInsideTargetActions_runningActionsCount = window.obj18960_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18960_droppedInsideTargetActions_actionGroup2();
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
				window.obj18960_droppedInsideTargetActions_runningActionsCount = window.obj18960_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18960_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18960_droppedInsideTargetActions_runningActionsCount = window.obj18960_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18960_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18960_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18878
(function(){
	window.obj18960_droppedInsideTargetActions_runningActionsCount = obj18960_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18878";
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
					window.obj18960_droppedInsideTargetActions_runningActionsCount = window.obj18960_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18960_droppedInsideTargetActions_actionGroup3();
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
				window.obj18960_droppedInsideTargetActions_runningActionsCount = window.obj18960_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18960_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18960_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_18968();
function incrementCounter_18968() {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = obj18960_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18960_droppedInsideTargetActions_runningActionsCount = window.obj18960_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18960_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18960_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18960").trigger("obj18960_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18960) {
				console.warn("de-queueing event obj18960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18960_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18972_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18972_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18972");

//	action: dragDrop
//	target: obj18972 
dragDrop_18975();
function dragDrop_18975() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18972_onTouchDown_runningActionsCount = obj18972_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18972');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18972_onTouchDown_runningActionsCount = window.obj18972_onTouchDown_runningActionsCount - 1;

if (window.obj18972_onTouchDown_runningActionsCount < 0) {
	window.obj18972_onTouchDown_runningActionsCount = 0;
} else if (window.obj18972_onTouchDown_runningActionsCount == 0) {
	obj18972_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18862");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18975 = false;
    	var dropped_id_18975;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_18975 = true;
					dropped_id_18975 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18975) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18972").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18972_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18972_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18982();
function playAudioFile_18982() {
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18982")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18982");
			$("#obj_audio_playSoundFile18982").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18972 
move_18983();
function move_18983() {
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18972");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 527;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18972_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18972 
hide_18977();
function hide_18977() {
	var selector = "#obj18972";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18972_droppedInsideTargetActions_runningActionsCount = obj18972_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18972_droppedInsideTargetActions_runningActionsCount = window.obj18972_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18972_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18972_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18977(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18972_droppedInsideTargetActions_runningActionsCount = window.obj18972_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18972_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18972_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18972_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18978();
function playAudioFile_18978() {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = obj18972_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18978")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18978");
			$("#obj_audio_playSoundFile18978").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18972_droppedInsideTargetActions_runningActionsCount = window.obj18972_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18972_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18972_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18972_droppedInsideTargetActions_runningActionsCount = window.obj18972_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18972_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18972_droppedInsideTargetActions_actionGroup2();
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
				window.obj18972_droppedInsideTargetActions_runningActionsCount = window.obj18972_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18972_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18972_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18972_droppedInsideTargetActions_runningActionsCount = window.obj18972_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18972_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18972_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18972_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18866
(function(){
	window.obj18972_droppedInsideTargetActions_runningActionsCount = obj18972_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18866";
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
					window.obj18972_droppedInsideTargetActions_runningActionsCount = window.obj18972_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18972_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18972_droppedInsideTargetActions_actionGroup3();
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
				window.obj18972_droppedInsideTargetActions_runningActionsCount = window.obj18972_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18972_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18972_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18972_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_18980();
function incrementCounter_18980() {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = obj18972_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18972_droppedInsideTargetActions_runningActionsCount = window.obj18972_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18972_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18972_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18972_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18972_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18972_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18972").trigger("obj18972_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18972) {
				console.warn("de-queueing event obj18972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18972_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18984_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18984_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18984");

//	action: dragDrop
//	target: obj18984 
dragDrop_18987();
function dragDrop_18987() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18984_onTouchDown_runningActionsCount = obj18984_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18984');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj18984_onTouchDown_runningActionsCount = window.obj18984_onTouchDown_runningActionsCount - 1;

if (window.obj18984_onTouchDown_runningActionsCount < 0) {
	window.obj18984_onTouchDown_runningActionsCount = 0;
} else if (window.obj18984_onTouchDown_runningActionsCount == 0) {
	obj18984_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18891");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18987 = false;
    	var dropped_id_18987;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_18987 = true;
					dropped_id_18987 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18987) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18984").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18984_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18984_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_19010();
function playAudioFile_19010() {
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19010")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19010");
			$("#obj_audio_playSoundFile19010").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18984 
move_19011();
function move_19011() {
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18984");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 603;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18984_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18984 
hide_18989();
function hide_18989() {
	var selector = "#obj18984";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18984_droppedInsideTargetActions_runningActionsCount = obj18984_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18984_droppedInsideTargetActions_runningActionsCount = window.obj18984_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18984_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18984_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18989(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18984_droppedInsideTargetActions_runningActionsCount = window.obj18984_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18984_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18984_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18984_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18992();
function playAudioFile_18992() {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = obj18984_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18992")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18992");
			$("#obj_audio_playSoundFile18992").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18984_droppedInsideTargetActions_runningActionsCount = window.obj18984_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18984_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18984_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18984_droppedInsideTargetActions_runningActionsCount = window.obj18984_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18984_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18984_droppedInsideTargetActions_actionGroup2();
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
				window.obj18984_droppedInsideTargetActions_runningActionsCount = window.obj18984_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18984_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18984_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18984_droppedInsideTargetActions_runningActionsCount = window.obj18984_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18984_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18984_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18984_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18899
(function(){
	window.obj18984_droppedInsideTargetActions_runningActionsCount = obj18984_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18899";
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
					window.obj18984_droppedInsideTargetActions_runningActionsCount = window.obj18984_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18984_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18984_droppedInsideTargetActions_actionGroup3();
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
				window.obj18984_droppedInsideTargetActions_runningActionsCount = window.obj18984_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18984_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18984_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18984_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_18994();
function incrementCounter_18994() {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = obj18984_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18984_droppedInsideTargetActions_runningActionsCount = window.obj18984_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18984_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18984_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18984_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18984_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18984_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18984").trigger("obj18984_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18984) {
				console.warn("de-queueing event obj18984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18984_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj19012_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19012_onTouchDown_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj19012");

//	action: dragDrop
//	target: obj19012 
dragDrop_19015();
function dragDrop_19015() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj19012_onTouchDown_runningActionsCount = obj19012_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj19012');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj19012_onTouchDown_runningActionsCount = window.obj19012_onTouchDown_runningActionsCount - 1;

if (window.obj19012_onTouchDown_runningActionsCount < 0) {
	window.obj19012_onTouchDown_runningActionsCount = 0;
} else if (window.obj19012_onTouchDown_runningActionsCount == 0) {
	obj19012_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18886");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_19015 = false;
    	var dropped_id_19015;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_19015 = true;
					dropped_id_19015 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_19015) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj19012").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj19012_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19012_onTouchDown_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_19022();
function playAudioFile_19022() {
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19022")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19022");
			$("#obj_audio_playSoundFile19022").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj19012 
move_19023();
function move_19023() {
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj19012");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 677;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj19012_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19012 
hide_19017();
function hide_19017() {
	var selector = "#obj19012";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19012_droppedInsideTargetActions_runningActionsCount = obj19012_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19012_droppedInsideTargetActions_runningActionsCount = window.obj19012_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19012_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19017(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19012_droppedInsideTargetActions_runningActionsCount = window.obj19012_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19012_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19012_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_19018();
function playAudioFile_19018() {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = obj19012_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19018")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19018");
			$("#obj_audio_playSoundFile19018").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19012_droppedInsideTargetActions_runningActionsCount = window.obj19012_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19012_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19012_droppedInsideTargetActions_runningActionsCount = window.obj19012_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19012_droppedInsideTargetActions_actionGroup2();
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
				window.obj19012_droppedInsideTargetActions_runningActionsCount = window.obj19012_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19012_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj19012_droppedInsideTargetActions_runningActionsCount = window.obj19012_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19012_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj19012_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18888
(function(){
	window.obj19012_droppedInsideTargetActions_runningActionsCount = obj19012_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18888";
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
					window.obj19012_droppedInsideTargetActions_runningActionsCount = window.obj19012_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19012_droppedInsideTargetActions_actionGroup3();
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
				window.obj19012_droppedInsideTargetActions_runningActionsCount = window.obj19012_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19012_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj19012_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_19020();
function incrementCounter_19020() {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = obj19012_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj19012_droppedInsideTargetActions_runningActionsCount = window.obj19012_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19012_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj19012_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19012").trigger("obj19012_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19012) {
				console.warn("de-queueing event obj19012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19012_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj19024_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19024_onTouchDown_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj19024");

//	action: dragDrop
//	target: obj19024 
dragDrop_19027();
function dragDrop_19027() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj19024_onTouchDown_runningActionsCount = obj19024_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj19024');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj19024_onTouchDown_runningActionsCount = window.obj19024_onTouchDown_runningActionsCount - 1;

if (window.obj19024_onTouchDown_runningActionsCount < 0) {
	window.obj19024_onTouchDown_runningActionsCount = 0;
} else if (window.obj19024_onTouchDown_runningActionsCount == 0) {
	obj19024_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18869");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_19027 = false;
    	var dropped_id_19027;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_19027 = true;
					dropped_id_19027 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_19027) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj19024").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj19024_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19024_onTouchDown_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_19043();
function playAudioFile_19043() {
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19043")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19043");
			$("#obj_audio_playSoundFile19043").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj19024 
move_19044();
function move_19044() {
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj19024");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 754;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj19024_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19024 
hide_19029();
function hide_19029() {
	var selector = "#obj19024";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19024_droppedInsideTargetActions_runningActionsCount = obj19024_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19024_droppedInsideTargetActions_runningActionsCount = window.obj19024_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19024_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19024_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19029(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19024_droppedInsideTargetActions_runningActionsCount = window.obj19024_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19024_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19024_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19024_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_19032();
function playAudioFile_19032() {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = obj19024_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19032")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19032");
			$("#obj_audio_playSoundFile19032").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19024_droppedInsideTargetActions_runningActionsCount = window.obj19024_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19024_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19024_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19024_droppedInsideTargetActions_runningActionsCount = window.obj19024_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19024_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19024_droppedInsideTargetActions_actionGroup2();
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
				window.obj19024_droppedInsideTargetActions_runningActionsCount = window.obj19024_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19024_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19024_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj19024_droppedInsideTargetActions_runningActionsCount = window.obj19024_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19024_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19024_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj19024_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18873
(function(){
	window.obj19024_droppedInsideTargetActions_runningActionsCount = obj19024_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18873";
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
					window.obj19024_droppedInsideTargetActions_runningActionsCount = window.obj19024_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19024_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19024_droppedInsideTargetActions_actionGroup3();
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
				window.obj19024_droppedInsideTargetActions_runningActionsCount = window.obj19024_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19024_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19024_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj19024_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18755 
incrementCounter_19034();
function incrementCounter_19034() {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = obj19024_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18755_counterValue;
	obj18755_counterValue = obj18755_counterValue + 1;
	if (! obj18755_counterCanExceedTargetValue && obj18755_counterValue > obj18755_counterTargetValue) {
		obj18755_counterValue = obj18755_counterTargetValue;
	}

	if (oldValue != obj18755_counterValue) {
		$("#obj18755").trigger('SCEventCounterValueChange');
		$("#obj18755").trigger('SCEventCounterIncrease');
		if (obj18755_counterValue == obj18755_counterTargetValue)
			$("#obj18755").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj19024_droppedInsideTargetActions_runningActionsCount = window.obj19024_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19024_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19024_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19024_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19024_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj19024_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19024").trigger("obj19024_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19024) {
				console.warn("de-queueing event obj19024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19024_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj19155_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19155_onTouchDown_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj19155");

//	action: dragDrop
//	target: obj19155 
dragDrop_19158();
function dragDrop_19158() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj19155_onTouchDown_runningActionsCount = obj19155_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj19155');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj19155_onTouchDown_runningActionsCount = window.obj19155_onTouchDown_runningActionsCount - 1;

if (window.obj19155_onTouchDown_runningActionsCount < 0) {
	window.obj19155_onTouchDown_runningActionsCount = 0;
} else if (window.obj19155_onTouchDown_runningActionsCount == 0) {
	obj19155_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj19187");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_19158 = false;
    	var dropped_id_19158;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_19158 = true;
					dropped_id_19158 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_19158) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj19155").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj19155_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19155_onTouchDown_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_19165();
function playAudioFile_19165() {
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19165")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19165");
			$("#obj_audio_playSoundFile19165").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj19155 
move_19166();
function move_19166() {
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj19155");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1135;
	var moveY = 268;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj19155_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19155 
hide_19160();
function hide_19160() {
	var selector = "#obj19155";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19155_droppedInsideTargetActions_runningActionsCount = obj19155_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19155_droppedInsideTargetActions_runningActionsCount = window.obj19155_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19155_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19155_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19160(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19155_droppedInsideTargetActions_runningActionsCount = window.obj19155_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19155_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19155_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19155_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_19161();
function playAudioFile_19161() {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = obj19155_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19161")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19161");
			$("#obj_audio_playSoundFile19161").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19155_droppedInsideTargetActions_runningActionsCount = window.obj19155_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19155_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19155_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19155_droppedInsideTargetActions_runningActionsCount = window.obj19155_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19155_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19155_droppedInsideTargetActions_actionGroup2();
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
				window.obj19155_droppedInsideTargetActions_runningActionsCount = window.obj19155_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19155_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19155_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj19155_droppedInsideTargetActions_runningActionsCount = window.obj19155_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19155_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19155_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj19155_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj19184
(function(){
	window.obj19155_droppedInsideTargetActions_runningActionsCount = obj19155_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19184";
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
					window.obj19155_droppedInsideTargetActions_runningActionsCount = window.obj19155_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19155_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19155_droppedInsideTargetActions_actionGroup3();
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
				window.obj19155_droppedInsideTargetActions_runningActionsCount = window.obj19155_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19155_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19155_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj19155_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18752 
incrementCounter_19163();
function incrementCounter_19163() {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = obj19155_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18752_counterValue;
	obj18752_counterValue = obj18752_counterValue + 1;
	if (! obj18752_counterCanExceedTargetValue && obj18752_counterValue > obj18752_counterTargetValue) {
		obj18752_counterValue = obj18752_counterTargetValue;
	}

	if (oldValue != obj18752_counterValue) {
		$("#obj18752").trigger('SCEventCounterValueChange');
		$("#obj18752").trigger('SCEventCounterIncrease');
		if (obj18752_counterValue == obj18752_counterTargetValue)
			$("#obj18752").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj19155_droppedInsideTargetActions_runningActionsCount = window.obj19155_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19155_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19155_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19155_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19155_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj19155_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19155").trigger("obj19155_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19155) {
				console.warn("de-queueing event obj19155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19155_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj19172_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19172_onTouchDown_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj19172");

//	action: dragDrop
//	target: obj19172 
dragDrop_19175();
function dragDrop_19175() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj19172_onTouchDown_runningActionsCount = obj19172_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj19172');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj19172_onTouchDown_runningActionsCount = window.obj19172_onTouchDown_runningActionsCount - 1;

if (window.obj19172_onTouchDown_runningActionsCount < 0) {
	window.obj19172_onTouchDown_runningActionsCount = 0;
} else if (window.obj19172_onTouchDown_runningActionsCount == 0) {
	obj19172_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18773");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_19175 = false;
    	var dropped_id_19175;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_19175 = true;
					dropped_id_19175 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_19175) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj19172").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj19172_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19172_onTouchDown_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_19182();
function playAudioFile_19182() {
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19182")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19182");
			$("#obj_audio_playSoundFile19182").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj19172 
move_19183();
function move_19183() {
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj19172");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1210;
	var moveY = 268;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj19172_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19172 
hide_19177();
function hide_19177() {
	var selector = "#obj19172";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19172_droppedInsideTargetActions_runningActionsCount = obj19172_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19172_droppedInsideTargetActions_runningActionsCount = window.obj19172_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19172_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19172_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19177(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19172_droppedInsideTargetActions_runningActionsCount = window.obj19172_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19172_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19172_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19172_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_19178();
function playAudioFile_19178() {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = obj19172_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19178")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19178");
			$("#obj_audio_playSoundFile19178").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19172_droppedInsideTargetActions_runningActionsCount = window.obj19172_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19172_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19172_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19172_droppedInsideTargetActions_runningActionsCount = window.obj19172_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19172_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19172_droppedInsideTargetActions_actionGroup2();
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
				window.obj19172_droppedInsideTargetActions_runningActionsCount = window.obj19172_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19172_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19172_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj19172_droppedInsideTargetActions_runningActionsCount = window.obj19172_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19172_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19172_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj19172_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18775
(function(){
	window.obj19172_droppedInsideTargetActions_runningActionsCount = obj19172_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18775";
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
					window.obj19172_droppedInsideTargetActions_runningActionsCount = window.obj19172_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19172_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19172_droppedInsideTargetActions_actionGroup3();
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
				window.obj19172_droppedInsideTargetActions_runningActionsCount = window.obj19172_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19172_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19172_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj19172_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj18752 
incrementCounter_19180();
function incrementCounter_19180() {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = obj19172_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj18752_counterValue;
	obj18752_counterValue = obj18752_counterValue + 1;
	if (! obj18752_counterCanExceedTargetValue && obj18752_counterValue > obj18752_counterTargetValue) {
		obj18752_counterValue = obj18752_counterTargetValue;
	}

	if (oldValue != obj18752_counterValue) {
		$("#obj18752").trigger('SCEventCounterValueChange');
		$("#obj18752").trigger('SCEventCounterIncrease');
		if (obj18752_counterValue == obj18752_counterTargetValue)
			$("#obj18752").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj19172_droppedInsideTargetActions_runningActionsCount = window.obj19172_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj19172_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj19172_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj19172_droppedInsideTargetActions_runningActionsCount == 0) {
	obj19172_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj19172_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj19172").trigger("obj19172_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19172) {
				console.warn("de-queueing event obj19172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19172_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj18741: Event Touch Down
 *
 */

$("#obj18741").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj18741_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18741_onTap is still running");
	return;
}
var obj18741_onTap_runningActionsCount = 0;
var obj18741_onTap_loopCount = 0;
obj18741_onTap_actionGroup0();
});



























/*
 *
 *   obj18744: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj18744").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj18744_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18744_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj18744_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18744_SCEventCounterReachedTargetValue_loopCount = 0;
obj18744_SCEventCounterReachedTargetValue_actionGroup0();
});
























































/*
 *
 *   obj18752: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj18752").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj18752_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18752_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj18752_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18752_SCEventCounterReachedTargetValue_loopCount = 0;
obj18752_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj18755: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj18755").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj18755_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18755_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj18755_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18755_SCEventCounterReachedTargetValue_loopCount = 0;
obj18755_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj18758: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj18758").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj18758_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18758_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj18758_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18758_SCEventCounterReachedTargetValue_loopCount = 0;
obj18758_SCEventCounterReachedTargetValue_actionGroup0();
});















































































































































































































































/*
 *
 *   obj18788: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18788");
	var winTarget = document.getElementById("obj18788");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18788").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18788_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18788_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18788_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18788_onTouchDown is still running");
	return;
}
var obj18788_onTouchDown_runningActionsCount = 0;
var obj18788_onTouchDown_loopCount = 0;
obj18788_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18788: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18788").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18788_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18788_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18788: Event droppedInsideTargetActions
 *
 */

$("#obj18788").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18788_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18788_droppedInsideTargetActions is still running");
	return;
}
var obj18788_droppedInsideTargetActions_runningActionsCount = 0;
var obj18788_droppedInsideTargetActions_loopCount = 0;
obj18788_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18800: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18800");
	var winTarget = document.getElementById("obj18800");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18800").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18800_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18800_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18800_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18800_onTouchDown is still running");
	return;
}
var obj18800_onTouchDown_runningActionsCount = 0;
var obj18800_onTouchDown_loopCount = 0;
obj18800_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18800: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18800").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18800_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18800_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18800: Event droppedInsideTargetActions
 *
 */

$("#obj18800").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18800_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18800_droppedInsideTargetActions is still running");
	return;
}
var obj18800_droppedInsideTargetActions_runningActionsCount = 0;
var obj18800_droppedInsideTargetActions_loopCount = 0;
obj18800_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18812: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18812");
	var winTarget = document.getElementById("obj18812");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18812").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18812_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18812_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18812_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18812_onTouchDown is still running");
	return;
}
var obj18812_onTouchDown_runningActionsCount = 0;
var obj18812_onTouchDown_loopCount = 0;
obj18812_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18812: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18812").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18812_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18812_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18812: Event droppedInsideTargetActions
 *
 */

$("#obj18812").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18812_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18812_droppedInsideTargetActions is still running");
	return;
}
var obj18812_droppedInsideTargetActions_runningActionsCount = 0;
var obj18812_droppedInsideTargetActions_loopCount = 0;
obj18812_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18824: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18824");
	var winTarget = document.getElementById("obj18824");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18824").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18824_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18824_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18824_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18824_onTouchDown is still running");
	return;
}
var obj18824_onTouchDown_runningActionsCount = 0;
var obj18824_onTouchDown_loopCount = 0;
obj18824_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18824: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18824").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18824_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18824_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18824: Event droppedInsideTargetActions
 *
 */

$("#obj18824").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18824_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18824_droppedInsideTargetActions is still running");
	return;
}
var obj18824_droppedInsideTargetActions_runningActionsCount = 0;
var obj18824_droppedInsideTargetActions_loopCount = 0;
obj18824_droppedInsideTargetActions_actionGroup0();
});


















/*
 *
 *   obj18836: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj18836").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj18836_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18836_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj18836_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18836_SCEventCounterReachedTargetValue_loopCount = 0;
obj18836_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj18839: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj18839").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj18839_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18839_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj18839_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18839_SCEventCounterReachedTargetValue_loopCount = 0;
obj18839_SCEventCounterReachedTargetValue_actionGroup0();
});







































































































































































































































































































































































































/*
 *
 *   obj18908: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18908");
	var winTarget = document.getElementById("obj18908");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18908").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18908_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18908_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18908_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18908_onTouchDown is still running");
	return;
}
var obj18908_onTouchDown_runningActionsCount = 0;
var obj18908_onTouchDown_loopCount = 0;
obj18908_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18908: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18908").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18908_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18908_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18908: Event droppedInsideTargetActions_2
 *
 */

$("#obj18908").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj18908_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18908_droppedInsideTargetActions_2 is still running");
	return;
}
var obj18908_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18908_droppedInsideTargetActions_2_loopCount = 0;
obj18908_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj18908: Event droppedInsideTargetActions
 *
 */

$("#obj18908").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18908_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18908_droppedInsideTargetActions is still running");
	return;
}
var obj18908_droppedInsideTargetActions_runningActionsCount = 0;
var obj18908_droppedInsideTargetActions_loopCount = 0;
obj18908_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18920: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18920");
	var winTarget = document.getElementById("obj18920");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18920").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18920_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18920_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18920_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18920_onTouchDown is still running");
	return;
}
var obj18920_onTouchDown_runningActionsCount = 0;
var obj18920_onTouchDown_loopCount = 0;
obj18920_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18920: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18920").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18920_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18920_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18920: Event droppedInsideTargetActions_2
 *
 */

$("#obj18920").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj18920_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18920_droppedInsideTargetActions_2 is still running");
	return;
}
var obj18920_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18920_droppedInsideTargetActions_2_loopCount = 0;
obj18920_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj18920: Event droppedInsideTargetActions
 *
 */

$("#obj18920").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18920_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18920_droppedInsideTargetActions is still running");
	return;
}
var obj18920_droppedInsideTargetActions_runningActionsCount = 0;
var obj18920_droppedInsideTargetActions_loopCount = 0;
obj18920_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18932: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18932");
	var winTarget = document.getElementById("obj18932");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18932").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18932_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18932_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18932_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18932_onTouchDown is still running");
	return;
}
var obj18932_onTouchDown_runningActionsCount = 0;
var obj18932_onTouchDown_loopCount = 0;
obj18932_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18932: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18932").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18932_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18932_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18932: Event droppedInsideTargetActions
 *
 */

$("#obj18932").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18932_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18932_droppedInsideTargetActions is still running");
	return;
}
var obj18932_droppedInsideTargetActions_runningActionsCount = 0;
var obj18932_droppedInsideTargetActions_loopCount = 0;
obj18932_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18960: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18960");
	var winTarget = document.getElementById("obj18960");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18960").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18960_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18960_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18960_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18960_onTouchDown is still running");
	return;
}
var obj18960_onTouchDown_runningActionsCount = 0;
var obj18960_onTouchDown_loopCount = 0;
obj18960_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18960: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18960").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18960_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18960_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18960: Event droppedInsideTargetActions
 *
 */

$("#obj18960").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18960_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18960_droppedInsideTargetActions is still running");
	return;
}
var obj18960_droppedInsideTargetActions_runningActionsCount = 0;
var obj18960_droppedInsideTargetActions_loopCount = 0;
obj18960_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18972: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18972");
	var winTarget = document.getElementById("obj18972");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18972").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18972_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18972_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18972_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18972_onTouchDown is still running");
	return;
}
var obj18972_onTouchDown_runningActionsCount = 0;
var obj18972_onTouchDown_loopCount = 0;
obj18972_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18972: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18972").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18972_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18972_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18972: Event droppedInsideTargetActions
 *
 */

$("#obj18972").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18972_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18972_droppedInsideTargetActions is still running");
	return;
}
var obj18972_droppedInsideTargetActions_runningActionsCount = 0;
var obj18972_droppedInsideTargetActions_loopCount = 0;
obj18972_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18984: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18984");
	var winTarget = document.getElementById("obj18984");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18984").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18984_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18984_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18984_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18984_onTouchDown is still running");
	return;
}
var obj18984_onTouchDown_runningActionsCount = 0;
var obj18984_onTouchDown_loopCount = 0;
obj18984_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18984: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18984").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18984_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18984_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18984: Event droppedInsideTargetActions
 *
 */

$("#obj18984").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18984_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18984_droppedInsideTargetActions is still running");
	return;
}
var obj18984_droppedInsideTargetActions_runningActionsCount = 0;
var obj18984_droppedInsideTargetActions_loopCount = 0;
obj18984_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj19012: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj19012");
	var winTarget = document.getElementById("obj19012");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj19012").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj19012_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj19012_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj19012_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19012_onTouchDown is still running");
	return;
}
var obj19012_onTouchDown_runningActionsCount = 0;
var obj19012_onTouchDown_loopCount = 0;
obj19012_onTouchDown_actionGroup0();
});






/*
 *
 *   obj19012: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj19012").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19012_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj19012_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj19012: Event droppedInsideTargetActions
 *
 */

$("#obj19012").bind("droppedInsideTargetActions", function(event) {
	if (window.obj19012_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19012_droppedInsideTargetActions is still running");
	return;
}
var obj19012_droppedInsideTargetActions_runningActionsCount = 0;
var obj19012_droppedInsideTargetActions_loopCount = 0;
obj19012_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj19024: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj19024");
	var winTarget = document.getElementById("obj19024");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj19024").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj19024_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj19024_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj19024_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19024_onTouchDown is still running");
	return;
}
var obj19024_onTouchDown_runningActionsCount = 0;
var obj19024_onTouchDown_loopCount = 0;
obj19024_onTouchDown_actionGroup0();
});






/*
 *
 *   obj19024: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj19024").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19024_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj19024_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj19024: Event droppedInsideTargetActions
 *
 */

$("#obj19024").bind("droppedInsideTargetActions", function(event) {
	if (window.obj19024_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19024_droppedInsideTargetActions is still running");
	return;
}
var obj19024_droppedInsideTargetActions_runningActionsCount = 0;
var obj19024_droppedInsideTargetActions_loopCount = 0;
obj19024_droppedInsideTargetActions_actionGroup0();
});

















































/*
 *
 *   obj19155: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj19155");
	var winTarget = document.getElementById("obj19155");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj19155").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj19155_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj19155_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj19155_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19155_onTouchDown is still running");
	return;
}
var obj19155_onTouchDown_runningActionsCount = 0;
var obj19155_onTouchDown_loopCount = 0;
obj19155_onTouchDown_actionGroup0();
});






/*
 *
 *   obj19155: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj19155").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19155_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj19155_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj19155: Event droppedInsideTargetActions
 *
 */

$("#obj19155").bind("droppedInsideTargetActions", function(event) {
	if (window.obj19155_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19155_droppedInsideTargetActions is still running");
	return;
}
var obj19155_droppedInsideTargetActions_runningActionsCount = 0;
var obj19155_droppedInsideTargetActions_loopCount = 0;
obj19155_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj19172: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj19172");
	var winTarget = document.getElementById("obj19172");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj19172").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj19172_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj19172_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj19172_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19172_onTouchDown is still running");
	return;
}
var obj19172_onTouchDown_runningActionsCount = 0;
var obj19172_onTouchDown_loopCount = 0;
obj19172_onTouchDown_actionGroup0();
});






/*
 *
 *   obj19172: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj19172").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19172_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj19172_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj19172: Event droppedInsideTargetActions
 *
 */

$("#obj19172").bind("droppedInsideTargetActions", function(event) {
	if (window.obj19172_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19172_droppedInsideTargetActions is still running");
	return;
}
var obj19172_droppedInsideTargetActions_runningActionsCount = 0;
var obj19172_droppedInsideTargetActions_loopCount = 0;
obj19172_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj18735").trigger('SCEventShow');
$("#obj18737").trigger('SCEventShow');
$("#obj18739").trigger('SCEventShow');
$("#obj18741").trigger('SCEventShow');
$("#obj18748").trigger('SCEventShow');
$("#obj18750").trigger('SCEventShow');
$("#obj18764").trigger('SCEventShow');
$("#obj18766").trigger('SCEventShow');
$("#obj18768").trigger('SCEventShow');
$("#obj18773").trigger('SCEventShow');
$("#obj18778").trigger('SCEventShow');
$("#obj18783").trigger('SCEventShow');
$("#obj19170").trigger('SCEventShow');
$("#obj19187").trigger('SCEventShow');
$("#obj18788").trigger('SCEventShow');
$("#obj18800").trigger('SCEventShow');
$("#obj18812").trigger('SCEventShow');
$("#obj18824").trigger('SCEventShow');
$("#obj18844").trigger('SCEventShow');
$("#obj18846").trigger('SCEventShow');
$("#obj18862").trigger('SCEventShow');
$("#obj18869").trigger('SCEventShow');
$("#obj18876").trigger('SCEventShow');
$("#obj18881").trigger('SCEventShow');
$("#obj18864").trigger('SCEventShow');
$("#obj18886").trigger('SCEventShow');
$("#obj18891").trigger('SCEventShow');
$("#obj18893").trigger('SCEventShow');
$("#obj18895").trigger('SCEventShow');
$("#obj18897").trigger('SCEventShow');
$("#obj18908").trigger('SCEventShow');
$("#obj18920").trigger('SCEventShow');
$("#obj18932").trigger('SCEventShow');
$("#obj18960").trigger('SCEventShow');
$("#obj18972").trigger('SCEventShow');
$("#obj18984").trigger('SCEventShow');
$("#obj19012").trigger('SCEventShow');
$("#obj19024").trigger('SCEventShow');
$("#obj19153").trigger('SCEventShow');
$("#obj19155").trigger('SCEventShow');
$("#obj19172").trigger('SCEventShow');
$("#obj19245").trigger('SCEventShow');
$("#obj24624").trigger('SCEventShow');
$("#obj24622").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});