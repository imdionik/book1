pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 17943;
pubcoder.page.title = pubcoder.page.title || "33";
pubcoder.page.number = pubcoder.page.number || 33;
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
var obj17950_onTap_activeActionGroupIndex = -1;
var obj17950_onTap_runningActionsCount = 0;
var obj17950_onTap_loopCount = 0;
var obj17953_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj17953_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj17953_SCEventCounterReachedTargetValue_loopCount = 0;
var obj17961_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj17961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj17961_SCEventCounterReachedTargetValue_loopCount = 0;
var obj17967_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj17967_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj17967_SCEventCounterReachedTargetValue_loopCount = 0;
var obj17970_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj17970_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj17970_SCEventCounterReachedTargetValue_loopCount = 0;
var obj18007_onDrag_activeActionGroupIndex = -1;
var obj18007_onDrag_runningActionsCount = 0;
var obj18007_onDrag_loopCount = 0;
var obj18007_onTouchDown_activeActionGroupIndex = -1;
var obj18007_onTouchDown_runningActionsCount = 0;
var obj18007_onTouchDown_loopCount = 0;
var obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18007_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18007_droppedInsideTargetActions_runningActionsCount = 0;
var obj18007_droppedInsideTargetActions_loopCount = 0;
var obj18019_onDrag_activeActionGroupIndex = -1;
var obj18019_onDrag_runningActionsCount = 0;
var obj18019_onDrag_loopCount = 0;
var obj18019_onTouchDown_activeActionGroupIndex = -1;
var obj18019_onTouchDown_runningActionsCount = 0;
var obj18019_onTouchDown_loopCount = 0;
var obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18019_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18019_droppedInsideTargetActions_runningActionsCount = 0;
var obj18019_droppedInsideTargetActions_loopCount = 0;
var obj18031_onDrag_activeActionGroupIndex = -1;
var obj18031_onDrag_runningActionsCount = 0;
var obj18031_onDrag_loopCount = 0;
var obj18031_onTouchDown_activeActionGroupIndex = -1;
var obj18031_onTouchDown_runningActionsCount = 0;
var obj18031_onTouchDown_loopCount = 0;
var obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18031_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18031_droppedInsideTargetActions_runningActionsCount = 0;
var obj18031_droppedInsideTargetActions_loopCount = 0;
var obj18043_onDrag_activeActionGroupIndex = -1;
var obj18043_onDrag_runningActionsCount = 0;
var obj18043_onDrag_loopCount = 0;
var obj18043_onTouchDown_activeActionGroupIndex = -1;
var obj18043_onTouchDown_runningActionsCount = 0;
var obj18043_onTouchDown_loopCount = 0;
var obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18043_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18043_droppedInsideTargetActions_runningActionsCount = 0;
var obj18043_droppedInsideTargetActions_loopCount = 0;
var obj18067_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj18067_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18067_SCEventCounterReachedTargetValue_loopCount = 0;
var obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj18070_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18070_SCEventCounterReachedTargetValue_loopCount = 0;
var obj18232_onDrag_activeActionGroupIndex = -1;
var obj18232_onDrag_runningActionsCount = 0;
var obj18232_onDrag_loopCount = 0;
var obj18232_onTouchDown_activeActionGroupIndex = -1;
var obj18232_onTouchDown_runningActionsCount = 0;
var obj18232_onTouchDown_loopCount = 0;
var obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18232_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18232_droppedInsideTargetActions_runningActionsCount = 0;
var obj18232_droppedInsideTargetActions_loopCount = 0;
var obj18249_onDrag_activeActionGroupIndex = -1;
var obj18249_onDrag_runningActionsCount = 0;
var obj18249_onDrag_loopCount = 0;
var obj18249_onTouchDown_activeActionGroupIndex = -1;
var obj18249_onTouchDown_runningActionsCount = 0;
var obj18249_onTouchDown_loopCount = 0;
var obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18249_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18249_droppedInsideTargetActions_runningActionsCount = 0;
var obj18249_droppedInsideTargetActions_loopCount = 0;
var obj18266_onDrag_activeActionGroupIndex = -1;
var obj18266_onDrag_runningActionsCount = 0;
var obj18266_onDrag_loopCount = 0;
var obj18266_onTouchDown_activeActionGroupIndex = -1;
var obj18266_onTouchDown_runningActionsCount = 0;
var obj18266_onTouchDown_loopCount = 0;
var obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj18266_droppedInsideTargetActions_3_loopCount = 0;
var obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18266_droppedInsideTargetActions_2_loopCount = 0;
var obj18266_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18266_droppedInsideTargetActions_runningActionsCount = 0;
var obj18266_droppedInsideTargetActions_loopCount = 0;
var obj18283_onDrag_activeActionGroupIndex = -1;
var obj18283_onDrag_runningActionsCount = 0;
var obj18283_onDrag_loopCount = 0;
var obj18283_onTouchDown_activeActionGroupIndex = -1;
var obj18283_onTouchDown_runningActionsCount = 0;
var obj18283_onTouchDown_loopCount = 0;
var obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18283_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18283_droppedInsideTargetActions_runningActionsCount = 0;
var obj18283_droppedInsideTargetActions_loopCount = 0;
var obj18295_onDrag_activeActionGroupIndex = -1;
var obj18295_onDrag_runningActionsCount = 0;
var obj18295_onDrag_loopCount = 0;
var obj18295_onTouchDown_activeActionGroupIndex = -1;
var obj18295_onTouchDown_runningActionsCount = 0;
var obj18295_onTouchDown_loopCount = 0;
var obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18295_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18295_droppedInsideTargetActions_runningActionsCount = 0;
var obj18295_droppedInsideTargetActions_loopCount = 0;
var obj18307_onDrag_activeActionGroupIndex = -1;
var obj18307_onDrag_runningActionsCount = 0;
var obj18307_onDrag_loopCount = 0;
var obj18307_onTouchDown_activeActionGroupIndex = -1;
var obj18307_onTouchDown_runningActionsCount = 0;
var obj18307_onTouchDown_loopCount = 0;
var obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj18307_droppedInsideTargetActions_3_loopCount = 0;
var obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18307_droppedInsideTargetActions_2_loopCount = 0;
var obj18307_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18307_droppedInsideTargetActions_runningActionsCount = 0;
var obj18307_droppedInsideTargetActions_loopCount = 0;
var obj18324_onDrag_activeActionGroupIndex = -1;
var obj18324_onDrag_runningActionsCount = 0;
var obj18324_onDrag_loopCount = 0;
var obj18324_onTouchDown_activeActionGroupIndex = -1;
var obj18324_onTouchDown_runningActionsCount = 0;
var obj18324_onTouchDown_loopCount = 0;
var obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18324_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18324_droppedInsideTargetActions_runningActionsCount = 0;
var obj18324_droppedInsideTargetActions_loopCount = 0;
var obj18336_onDrag_activeActionGroupIndex = -1;
var obj18336_onDrag_runningActionsCount = 0;
var obj18336_onDrag_loopCount = 0;
var obj18336_onTouchDown_activeActionGroupIndex = -1;
var obj18336_onTouchDown_runningActionsCount = 0;
var obj18336_onTouchDown_loopCount = 0;
var obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18336_droppedInsideTargetActions_2_loopCount = 0;
var obj18336_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18336_droppedInsideTargetActions_runningActionsCount = 0;
var obj18336_droppedInsideTargetActions_loopCount = 0;
var obj18421_onDrag_activeActionGroupIndex = -1;
var obj18421_onDrag_runningActionsCount = 0;
var obj18421_onDrag_loopCount = 0;
var obj18421_onTouchDown_activeActionGroupIndex = -1;
var obj18421_onTouchDown_runningActionsCount = 0;
var obj18421_onTouchDown_loopCount = 0;
var obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18421_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18421_droppedInsideTargetActions_runningActionsCount = 0;
var obj18421_droppedInsideTargetActions_loopCount = 0;
var obj18404_onDrag_activeActionGroupIndex = -1;
var obj18404_onDrag_runningActionsCount = 0;
var obj18404_onDrag_loopCount = 0;
var obj18404_onTouchDown_activeActionGroupIndex = -1;
var obj18404_onTouchDown_runningActionsCount = 0;
var obj18404_onTouchDown_loopCount = 0;
var obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18404_droppedInsideTargetActions_2_loopCount = 0;
var obj18404_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18404_droppedInsideTargetActions_runningActionsCount = 0;
var obj18404_droppedInsideTargetActions_loopCount = 0;
var obj18387_onDrag_activeActionGroupIndex = -1;
var obj18387_onDrag_runningActionsCount = 0;
var obj18387_onDrag_loopCount = 0;
var obj18387_onTouchDown_activeActionGroupIndex = -1;
var obj18387_onTouchDown_runningActionsCount = 0;
var obj18387_onTouchDown_loopCount = 0;
var obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj18387_droppedInsideTargetActions_3_loopCount = 0;
var obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18387_droppedInsideTargetActions_2_loopCount = 0;
var obj18387_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18387_droppedInsideTargetActions_runningActionsCount = 0;
var obj18387_droppedInsideTargetActions_loopCount = 0;
var obj18375_onDrag_activeActionGroupIndex = -1;
var obj18375_onDrag_runningActionsCount = 0;
var obj18375_onDrag_loopCount = 0;
var obj18375_onTouchDown_activeActionGroupIndex = -1;
var obj18375_onTouchDown_runningActionsCount = 0;
var obj18375_onTouchDown_loopCount = 0;
var obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18375_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18375_droppedInsideTargetActions_runningActionsCount = 0;
var obj18375_droppedInsideTargetActions_loopCount = 0;
var obj18363_onDrag_activeActionGroupIndex = -1;
var obj18363_onDrag_runningActionsCount = 0;
var obj18363_onDrag_loopCount = 0;
var obj18363_onTouchDown_activeActionGroupIndex = -1;
var obj18363_onTouchDown_runningActionsCount = 0;
var obj18363_onTouchDown_loopCount = 0;
var obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj18363_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18363_droppedInsideTargetActions_runningActionsCount = 0;
var obj18363_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj17953_counterValue = 0;
var obj17953_counterTargetValue = 4;
var obj17953_counterCanExceedTargetValue = false;
var obj17961_counterValue = 0;
var obj17961_counterTargetValue = 4;
var obj17961_counterCanExceedTargetValue = false;
var obj17967_counterValue = 0;
var obj17967_counterTargetValue = 13;
var obj17967_counterCanExceedTargetValue = false;
var obj17970_counterValue = 0;
var obj17970_counterTargetValue = 1;
var obj17970_counterCanExceedTargetValue = false;
var obj18067_counterValue = 0;
var obj18067_counterTargetValue = 1;
var obj18067_counterCanExceedTargetValue = false;
var obj18070_counterValue = 0;
var obj18070_counterTargetValue = 2;
var obj18070_counterCanExceedTargetValue = false;

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
		
obj17950_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17950_onTap_activeActionGroupIndex = -1;
		$("#obj17950").trigger("obj17950_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17950) {
				console.warn("de-queueing event obj17950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17950_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17952();
function goToPage_17952() {
	window.obj17950_onTap_runningActionsCount = obj17950_onTap_runningActionsCount + 1;

	$("#anchor473")[0].click();
	window.obj17950_onTap_runningActionsCount = window.obj17950_onTap_runningActionsCount - 1;

if (window.obj17950_onTap_runningActionsCount < 0) {
	window.obj17950_onTap_runningActionsCount = 0;
} else if (window.obj17950_onTap_runningActionsCount == 0) {
	obj17950_onTap_actionGroup1();
}
}










































};
obj17950_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17950_onTap_activeActionGroupIndex = -1;
		$("#obj17950").trigger("obj17950_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17950) {
				console.warn("de-queueing event obj17950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17950_onTap_activeActionGroupIndex = 1;
	











































};
obj17953_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17953_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17953").trigger("obj17953_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17953) {
				console.warn("de-queueing event obj17953." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17953").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17953_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_17955();
function wait_17955() {
	window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount = obj17953_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17953_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj17953_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17953_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17953").trigger("obj17953_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17953) {
				console.warn("de-queueing event obj17953." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17953").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17953_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_17956();
function goToPage_17956() {
	window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount = obj17953_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor474")[0].click();
	window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17953_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17953_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj17953_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17953_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17953").trigger("obj17953_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17953) {
				console.warn("de-queueing event obj17953." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17953").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17953_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj17961_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17961_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17961").trigger("obj17961_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17961) {
				console.warn("de-queueing event obj17961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17961_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17978 
hide_24626();
function hide_24626() {
	var selector = "#obj17978";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount = obj17961_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17961_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24626(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17961_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj17961_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17961_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17961").trigger("obj17961_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17961) {
				console.warn("de-queueing event obj17961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17961_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj17970 
incrementCounter_17963();
function incrementCounter_17963() {
	window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount = obj17961_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj17970_counterValue;
	obj17970_counterValue = obj17970_counterValue + 1;
	if (! obj17970_counterCanExceedTargetValue && obj17970_counterValue > obj17970_counterTargetValue) {
		obj17970_counterValue = obj17970_counterTargetValue;
	}

	if (oldValue != obj17970_counterValue) {
		$("#obj17970").trigger('SCEventCounterValueChange');
		$("#obj17970").trigger('SCEventCounterIncrease');
		if (obj17970_counterValue == obj17970_counterTargetValue)
			$("#obj17970").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17961_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17961_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}











};
obj17961_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17961_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17961").trigger("obj17961_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17961) {
				console.warn("de-queueing event obj17961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17961_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj17967_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17967_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17967").trigger("obj17967_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17967) {
				console.warn("de-queueing event obj17967." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17967").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17967_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18188 
hide_24627();
function hide_24627() {
	var selector = "#obj18188";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount = obj17967_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17967_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24627(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17967_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj17967_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17967_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17967").trigger("obj17967_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17967) {
				console.warn("de-queueing event obj17967." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17967").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17967_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj17970 
incrementCounter_17969();
function incrementCounter_17969() {
	window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount = obj17967_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj17970_counterValue;
	obj17970_counterValue = obj17970_counterValue + 1;
	if (! obj17970_counterCanExceedTargetValue && obj17970_counterValue > obj17970_counterTargetValue) {
		obj17970_counterValue = obj17970_counterTargetValue;
	}

	if (oldValue != obj17970_counterValue) {
		$("#obj17970").trigger('SCEventCounterValueChange');
		$("#obj17970").trigger('SCEventCounterIncrease');
		if (obj17970_counterValue == obj17970_counterTargetValue)
			$("#obj17970").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17967_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17967_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}











};
obj17967_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17967_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17967").trigger("obj17967_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17967) {
				console.warn("de-queueing event obj17967." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17967").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17967_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj17970_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17970_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17970").trigger("obj17970_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17970) {
				console.warn("de-queueing event obj17970." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17970").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17970_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj18070 
incrementCounter_17973();
function incrementCounter_17973() {
	window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount = obj17970_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj18070_counterValue;
	obj18070_counterValue = obj18070_counterValue + 1;
	if (! obj18070_counterCanExceedTargetValue && obj18070_counterValue > obj18070_counterTargetValue) {
		obj18070_counterValue = obj18070_counterTargetValue;
	}

	if (oldValue != obj18070_counterValue) {
		$("#obj18070").trigger('SCEventCounterValueChange');
		$("#obj18070").trigger('SCEventCounterIncrease');
		if (obj18070_counterValue == obj18070_counterTargetValue)
			$("#obj18070").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17970_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj18067 
incrementCounter_17974();
function incrementCounter_17974() {
	window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount = obj17970_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj18067_counterValue;
	obj18067_counterValue = obj18067_counterValue + 1;
	if (! obj18067_counterCanExceedTargetValue && obj18067_counterValue > obj18067_counterTargetValue) {
		obj18067_counterValue = obj18067_counterTargetValue;
	}

	if (oldValue != obj18067_counterValue) {
		$("#obj18067").trigger('SCEventCounterValueChange');
		$("#obj18067").trigger('SCEventCounterIncrease');
		if (obj18067_counterValue == obj18067_counterTargetValue)
			$("#obj18067").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17970_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj17970_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17970_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17970").trigger("obj17970_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17970) {
				console.warn("de-queueing event obj17970." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17970").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17970_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj17970 
decrementCounter_17975();
function decrementCounter_17975() {
	window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount = obj17970_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj17970_counterValue;
	obj17970_counterValue = obj17970_counterValue - 1;
	if (obj17970_counterValue < 0) {
		obj17970_counterValue = 0;
	}

	if (oldValue != obj17970_counterValue) {
		$("#obj17970").trigger('SCEventCounterValueChange');
		$("#obj17970").trigger('SCEventCounterDecrease');
		if (obj17970_counterValue == obj17970_counterTargetValue)
			$("#obj17970").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount = window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj17970_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj17970_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj17970_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17970_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj17970").trigger("obj17970_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17970) {
				console.warn("de-queueing event obj17970." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17970").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17970_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj18007_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18007_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18007");

//	action: dragDrop
//	target: obj18007 
dragDrop_18010();
function dragDrop_18010() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18007_onTouchDown_runningActionsCount = obj18007_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18007');
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
    	window.obj18007_onTouchDown_runningActionsCount = window.obj18007_onTouchDown_runningActionsCount - 1;

if (window.obj18007_onTouchDown_runningActionsCount < 0) {
	window.obj18007_onTouchDown_runningActionsCount = 0;
} else if (window.obj18007_onTouchDown_runningActionsCount == 0) {
	obj18007_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj17992");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18010 = false;
    	var dropped_id_18010;
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
					dropped_18010 = true;
					dropped_id_18010 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18010) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18007").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18007_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18007_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18017();
function playAudioFile_18017() {
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18017")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18017");
			$("#obj_audio_playSoundFile18017").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18007 
move_18018();
function move_18018() {
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18007");
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
			window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18007_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18007 
hide_18012();
function hide_18012() {
	var selector = "#obj18007";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18007_droppedInsideTargetActions_runningActionsCount = obj18007_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18007_droppedInsideTargetActions_runningActionsCount = window.obj18007_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18007_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18007_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18012(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18007_droppedInsideTargetActions_runningActionsCount = window.obj18007_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18007_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18007_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18007_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18013();
function playAudioFile_18013() {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = obj18007_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18013")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18013");
			$("#obj_audio_playSoundFile18013").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18007_droppedInsideTargetActions_runningActionsCount = window.obj18007_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18007_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18007_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18007_droppedInsideTargetActions_runningActionsCount = window.obj18007_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18007_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18007_droppedInsideTargetActions_actionGroup2();
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
				window.obj18007_droppedInsideTargetActions_runningActionsCount = window.obj18007_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18007_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18007_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18007_droppedInsideTargetActions_runningActionsCount = window.obj18007_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18007_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18007_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18007_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj17994
(function(){
	window.obj18007_droppedInsideTargetActions_runningActionsCount = obj18007_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17994";
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
					window.obj18007_droppedInsideTargetActions_runningActionsCount = window.obj18007_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18007_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18007_droppedInsideTargetActions_actionGroup3();
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
				window.obj18007_droppedInsideTargetActions_runningActionsCount = window.obj18007_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18007_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18007_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18007_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17961 
incrementCounter_18015();
function incrementCounter_18015() {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = obj18007_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17961_counterValue;
	obj17961_counterValue = obj17961_counterValue + 1;
	if (! obj17961_counterCanExceedTargetValue && obj17961_counterValue > obj17961_counterTargetValue) {
		obj17961_counterValue = obj17961_counterTargetValue;
	}

	if (oldValue != obj17961_counterValue) {
		$("#obj17961").trigger('SCEventCounterValueChange');
		$("#obj17961").trigger('SCEventCounterIncrease');
		if (obj17961_counterValue == obj17961_counterTargetValue)
			$("#obj17961").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18007_droppedInsideTargetActions_runningActionsCount = window.obj18007_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18007_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18007_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18007_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18007_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18007_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18007").trigger("obj18007_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18007) {
				console.warn("de-queueing event obj18007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18007_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18019_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18019_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18019");

//	action: dragDrop
//	target: obj18019 
dragDrop_18022();
function dragDrop_18022() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18019_onTouchDown_runningActionsCount = obj18019_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18019');
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
    	window.obj18019_onTouchDown_runningActionsCount = window.obj18019_onTouchDown_runningActionsCount - 1;

if (window.obj18019_onTouchDown_runningActionsCount < 0) {
	window.obj18019_onTouchDown_runningActionsCount = 0;
} else if (window.obj18019_onTouchDown_runningActionsCount == 0) {
	obj18019_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj17982");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18022 = false;
    	var dropped_id_18022;
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
					dropped_18022 = true;
					dropped_id_18022 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18022) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18019").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18019_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18019_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18029();
function playAudioFile_18029() {
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18029")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18029");
			$("#obj_audio_playSoundFile18029").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18019 
move_18030();
function move_18030() {
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18019");
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
			window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18019_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18019 
hide_18024();
function hide_18024() {
	var selector = "#obj18019";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18019_droppedInsideTargetActions_runningActionsCount = obj18019_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18019_droppedInsideTargetActions_runningActionsCount = window.obj18019_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18019_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18019_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18024(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18019_droppedInsideTargetActions_runningActionsCount = window.obj18019_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18019_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18019_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18019_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18025();
function playAudioFile_18025() {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = obj18019_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18025")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18025");
			$("#obj_audio_playSoundFile18025").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18019_droppedInsideTargetActions_runningActionsCount = window.obj18019_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18019_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18019_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18019_droppedInsideTargetActions_runningActionsCount = window.obj18019_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18019_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18019_droppedInsideTargetActions_actionGroup2();
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
				window.obj18019_droppedInsideTargetActions_runningActionsCount = window.obj18019_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18019_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18019_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18019_droppedInsideTargetActions_runningActionsCount = window.obj18019_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18019_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18019_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18019_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj17984
(function(){
	window.obj18019_droppedInsideTargetActions_runningActionsCount = obj18019_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17984";
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
					window.obj18019_droppedInsideTargetActions_runningActionsCount = window.obj18019_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18019_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18019_droppedInsideTargetActions_actionGroup3();
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
				window.obj18019_droppedInsideTargetActions_runningActionsCount = window.obj18019_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18019_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18019_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18019_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17961 
incrementCounter_18027();
function incrementCounter_18027() {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = obj18019_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17961_counterValue;
	obj17961_counterValue = obj17961_counterValue + 1;
	if (! obj17961_counterCanExceedTargetValue && obj17961_counterValue > obj17961_counterTargetValue) {
		obj17961_counterValue = obj17961_counterTargetValue;
	}

	if (oldValue != obj17961_counterValue) {
		$("#obj17961").trigger('SCEventCounterValueChange');
		$("#obj17961").trigger('SCEventCounterIncrease');
		if (obj17961_counterValue == obj17961_counterTargetValue)
			$("#obj17961").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18019_droppedInsideTargetActions_runningActionsCount = window.obj18019_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18019_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18019_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18019_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18019_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18019_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18019").trigger("obj18019_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18019) {
				console.warn("de-queueing event obj18019." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18019").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18019_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18031_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18031_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18031");

//	action: dragDrop
//	target: obj18031 
dragDrop_18034();
function dragDrop_18034() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18031_onTouchDown_runningActionsCount = obj18031_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18031');
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
    	window.obj18031_onTouchDown_runningActionsCount = window.obj18031_onTouchDown_runningActionsCount - 1;

if (window.obj18031_onTouchDown_runningActionsCount < 0) {
	window.obj18031_onTouchDown_runningActionsCount = 0;
} else if (window.obj18031_onTouchDown_runningActionsCount == 0) {
	obj18031_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj17987");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18034 = false;
    	var dropped_id_18034;
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
					dropped_18034 = true;
					dropped_id_18034 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18034) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18031").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18031_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18031_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18041();
function playAudioFile_18041() {
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18041")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18041");
			$("#obj_audio_playSoundFile18041").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18031 
move_18042();
function move_18042() {
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18031");
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
			window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18031_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18031 
hide_18036();
function hide_18036() {
	var selector = "#obj18031";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18031_droppedInsideTargetActions_runningActionsCount = obj18031_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18031_droppedInsideTargetActions_runningActionsCount = window.obj18031_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18031_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18036(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18031_droppedInsideTargetActions_runningActionsCount = window.obj18031_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18031_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18031_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18037();
function playAudioFile_18037() {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = obj18031_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18037")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18037");
			$("#obj_audio_playSoundFile18037").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18031_droppedInsideTargetActions_runningActionsCount = window.obj18031_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18031_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18031_droppedInsideTargetActions_runningActionsCount = window.obj18031_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18031_droppedInsideTargetActions_actionGroup2();
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
				window.obj18031_droppedInsideTargetActions_runningActionsCount = window.obj18031_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18031_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18031_droppedInsideTargetActions_runningActionsCount = window.obj18031_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18031_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18031_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj17989
(function(){
	window.obj18031_droppedInsideTargetActions_runningActionsCount = obj18031_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17989";
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
					window.obj18031_droppedInsideTargetActions_runningActionsCount = window.obj18031_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18031_droppedInsideTargetActions_actionGroup3();
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
				window.obj18031_droppedInsideTargetActions_runningActionsCount = window.obj18031_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18031_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18031_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17961 
incrementCounter_18039();
function incrementCounter_18039() {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = obj18031_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17961_counterValue;
	obj17961_counterValue = obj17961_counterValue + 1;
	if (! obj17961_counterCanExceedTargetValue && obj17961_counterValue > obj17961_counterTargetValue) {
		obj17961_counterValue = obj17961_counterTargetValue;
	}

	if (oldValue != obj17961_counterValue) {
		$("#obj17961").trigger('SCEventCounterValueChange');
		$("#obj17961").trigger('SCEventCounterIncrease');
		if (obj17961_counterValue == obj17961_counterTargetValue)
			$("#obj17961").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18031_droppedInsideTargetActions_runningActionsCount = window.obj18031_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18031_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18031_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18031").trigger("obj18031_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18031) {
				console.warn("de-queueing event obj18031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18031_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18043_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18043_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18043");

//	action: dragDrop
//	target: obj18043 
dragDrop_18046();
function dragDrop_18046() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18043_onTouchDown_runningActionsCount = obj18043_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18043');
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
    	window.obj18043_onTouchDown_runningActionsCount = window.obj18043_onTouchDown_runningActionsCount - 1;

if (window.obj18043_onTouchDown_runningActionsCount < 0) {
	window.obj18043_onTouchDown_runningActionsCount = 0;
} else if (window.obj18043_onTouchDown_runningActionsCount == 0) {
	obj18043_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj17997");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18046 = false;
    	var dropped_id_18046;
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
					dropped_18046 = true;
					dropped_id_18046 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18046) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18043").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18043_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18043_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18053();
function playAudioFile_18053() {
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18053")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18053");
			$("#obj_audio_playSoundFile18053").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18043 
move_18054();
function move_18054() {
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18043");
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
			window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18043_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18043 
hide_18048();
function hide_18048() {
	var selector = "#obj18043";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18043_droppedInsideTargetActions_runningActionsCount = obj18043_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18043_droppedInsideTargetActions_runningActionsCount = window.obj18043_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18043_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18048(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18043_droppedInsideTargetActions_runningActionsCount = window.obj18043_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18043_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18043_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18049();
function playAudioFile_18049() {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = obj18043_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18049")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18049");
			$("#obj_audio_playSoundFile18049").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18043_droppedInsideTargetActions_runningActionsCount = window.obj18043_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18043_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18043_droppedInsideTargetActions_runningActionsCount = window.obj18043_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18043_droppedInsideTargetActions_actionGroup2();
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
				window.obj18043_droppedInsideTargetActions_runningActionsCount = window.obj18043_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18043_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18043_droppedInsideTargetActions_runningActionsCount = window.obj18043_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18043_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18043_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj17999
(function(){
	window.obj18043_droppedInsideTargetActions_runningActionsCount = obj18043_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17999";
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
					window.obj18043_droppedInsideTargetActions_runningActionsCount = window.obj18043_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18043_droppedInsideTargetActions_actionGroup3();
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
				window.obj18043_droppedInsideTargetActions_runningActionsCount = window.obj18043_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18043_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18043_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17961 
incrementCounter_18051();
function incrementCounter_18051() {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = obj18043_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17961_counterValue;
	obj17961_counterValue = obj17961_counterValue + 1;
	if (! obj17961_counterCanExceedTargetValue && obj17961_counterValue > obj17961_counterTargetValue) {
		obj17961_counterValue = obj17961_counterTargetValue;
	}

	if (oldValue != obj17961_counterValue) {
		$("#obj17961").trigger('SCEventCounterValueChange');
		$("#obj17961").trigger('SCEventCounterIncrease');
		if (obj17961_counterValue == obj17961_counterTargetValue)
			$("#obj17961").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18043_droppedInsideTargetActions_runningActionsCount = window.obj18043_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18043_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18043_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18043").trigger("obj18043_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18043) {
				console.warn("de-queueing event obj18043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18043_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18067_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18067_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18067").trigger("obj18067_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18067) {
				console.warn("de-queueing event obj18067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18067_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_18069();
function switchText_18069() {
	window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount = obj18067_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/4</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17959_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17959_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17959").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17959_content");
			setTimeout(function () {
				window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18067_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17959 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18067_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18067_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj18067_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18067_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18067").trigger("obj18067_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18067) {
				console.warn("de-queueing event obj18067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18067_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj18070_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18070").trigger("obj18070_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18070) {
				console.warn("de-queueing event obj18070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_18072();
function switchText_18072() {
	window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = obj18070_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/4</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17959_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17959_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17959").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17959_content");
			setTimeout(function () {
				window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18070_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17959 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18070_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj18070_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18070").trigger("obj18070_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18070) {
				console.warn("de-queueing event obj18070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
















//	action: wait
wait_18664();
function wait_18664() {
	window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = obj18070_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18070_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1000);
}


























};
obj18070_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18070").trigger("obj18070_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18070) {
				console.warn("de-queueing event obj18070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_19151();
function goToPage_19151() {
	window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = obj18070_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor483")[0].click();
	window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18070_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18070_SCEventCounterReachedTargetValue_actionGroup3();
}
}










































};
obj18070_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18070").trigger("obj18070_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18070) {
				console.warn("de-queueing event obj18070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj18232_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18232_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18232");

//	action: dragDrop
//	target: obj18232 
dragDrop_18235();
function dragDrop_18235() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18232_onTouchDown_runningActionsCount = obj18232_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18232');
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
    	window.obj18232_onTouchDown_runningActionsCount = window.obj18232_onTouchDown_runningActionsCount - 1;

if (window.obj18232_onTouchDown_runningActionsCount < 0) {
	window.obj18232_onTouchDown_runningActionsCount = 0;
} else if (window.obj18232_onTouchDown_runningActionsCount == 0) {
	obj18232_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18207");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18235 = false;
    	var dropped_id_18235;
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
					dropped_18235 = true;
					dropped_id_18235 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18235) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18232").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18232_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18232_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18247();
function playAudioFile_18247() {
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18247")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18247");
			$("#obj_audio_playSoundFile18247").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18232 
move_18248();
function move_18248() {
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18232");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 629;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18232_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18232 
hide_18242();
function hide_18242() {
	var selector = "#obj18232";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18232_droppedInsideTargetActions_runningActionsCount = obj18232_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18232_droppedInsideTargetActions_runningActionsCount = window.obj18232_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18232_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18232_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18242(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18232_droppedInsideTargetActions_runningActionsCount = window.obj18232_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18232_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18232_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18232_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18243();
function playAudioFile_18243() {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = obj18232_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18243")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18243");
			$("#obj_audio_playSoundFile18243").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18232_droppedInsideTargetActions_runningActionsCount = window.obj18232_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18232_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18232_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18232_droppedInsideTargetActions_runningActionsCount = window.obj18232_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18232_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18232_droppedInsideTargetActions_actionGroup2();
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
				window.obj18232_droppedInsideTargetActions_runningActionsCount = window.obj18232_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18232_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18232_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18232_droppedInsideTargetActions_runningActionsCount = window.obj18232_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18232_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18232_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18232_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18209
(function(){
	window.obj18232_droppedInsideTargetActions_runningActionsCount = obj18232_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18209";
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
					window.obj18232_droppedInsideTargetActions_runningActionsCount = window.obj18232_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18232_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18232_droppedInsideTargetActions_actionGroup3();
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
				window.obj18232_droppedInsideTargetActions_runningActionsCount = window.obj18232_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18232_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18232_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18232_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18245();
function incrementCounter_18245() {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = obj18232_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18232_droppedInsideTargetActions_runningActionsCount = window.obj18232_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18232_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18232_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18232_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18232_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18232_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18232").trigger("obj18232_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18232) {
				console.warn("de-queueing event obj18232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18232_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18249_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18249_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18249");

//	action: dragDrop
//	target: obj18249 
dragDrop_18252();
function dragDrop_18252() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18249_onTouchDown_runningActionsCount = obj18249_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18249');
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
    	window.obj18249_onTouchDown_runningActionsCount = window.obj18249_onTouchDown_runningActionsCount - 1;

if (window.obj18249_onTouchDown_runningActionsCount < 0) {
	window.obj18249_onTouchDown_runningActionsCount = 0;
} else if (window.obj18249_onTouchDown_runningActionsCount == 0) {
	obj18249_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18202");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18252 = false;
    	var dropped_id_18252;
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
					dropped_18252 = true;
					dropped_id_18252 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18252) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18249").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18249_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18249_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18264();
function playAudioFile_18264() {
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18264")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18264");
			$("#obj_audio_playSoundFile18264").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18249 
move_18265();
function move_18265() {
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18249");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 705;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18249_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18249 
hide_18259();
function hide_18259() {
	var selector = "#obj18249";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18249_droppedInsideTargetActions_runningActionsCount = obj18249_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18249_droppedInsideTargetActions_runningActionsCount = window.obj18249_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18249_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18249_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18259(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18249_droppedInsideTargetActions_runningActionsCount = window.obj18249_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18249_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18249_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18249_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18260();
function playAudioFile_18260() {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = obj18249_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18260")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18260");
			$("#obj_audio_playSoundFile18260").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18249_droppedInsideTargetActions_runningActionsCount = window.obj18249_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18249_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18249_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18249_droppedInsideTargetActions_runningActionsCount = window.obj18249_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18249_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18249_droppedInsideTargetActions_actionGroup2();
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
				window.obj18249_droppedInsideTargetActions_runningActionsCount = window.obj18249_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18249_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18249_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18249_droppedInsideTargetActions_runningActionsCount = window.obj18249_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18249_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18249_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18249_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18204
(function(){
	window.obj18249_droppedInsideTargetActions_runningActionsCount = obj18249_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18204";
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
					window.obj18249_droppedInsideTargetActions_runningActionsCount = window.obj18249_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18249_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18249_droppedInsideTargetActions_actionGroup3();
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
				window.obj18249_droppedInsideTargetActions_runningActionsCount = window.obj18249_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18249_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18249_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18249_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18262();
function incrementCounter_18262() {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = obj18249_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18249_droppedInsideTargetActions_runningActionsCount = window.obj18249_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18249_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18249_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18249_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18249_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18249_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18249").trigger("obj18249_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18249) {
				console.warn("de-queueing event obj18249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18249_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18266_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18266");

//	action: dragDrop
//	target: obj18266 
dragDrop_18492();
function dragDrop_18492() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18266_onTouchDown_runningActionsCount = obj18266_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18266');
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
    	window.obj18266_onTouchDown_runningActionsCount = window.obj18266_onTouchDown_runningActionsCount - 1;

if (window.obj18266_onTouchDown_runningActionsCount < 0) {
	window.obj18266_onTouchDown_runningActionsCount = 0;
} else if (window.obj18266_onTouchDown_runningActionsCount == 0) {
	obj18266_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18192","#obj18451","#obj18449");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18492 = false;
    	var dropped_id_18492;
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
					dropped_18492 = true;
					dropped_id_18492 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18492) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18266").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18266_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18266_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18509();
function playAudioFile_18509() {
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18509")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18509");
			$("#obj_audio_playSoundFile18509").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18266 
move_18510();
function move_18510() {
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18266");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 782;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18266_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18266 
hide_18504();
function hide_18504() {
	var selector = "#obj18266";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = obj18266_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18504(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18449 
hide_18648();
function hide_18648() {
	var selector = "#obj18449";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = obj18266_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18648(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18644
(function(){
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = obj18266_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj18644";
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
					window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18266_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18505();
function playAudioFile_18505() {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = obj18266_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18505")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18505");
			$("#obj_audio_playSoundFile18505").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup2();
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
				window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup2();
}
			}, false);
		} else {
			window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18266_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18441
(function(){
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = obj18266_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj18441";
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
					window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup3();
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
				window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18266_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18507();
function incrementCounter_18507() {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = obj18266_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18266_droppedInsideTargetActions_3_runningActionsCount = window.obj18266_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}











};
obj18266_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	











































};
obj18266_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18266 
hide_18499();
function hide_18499() {
	var selector = "#obj18266";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = obj18266_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18499(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18451 
hide_18640();
function hide_18640() {
	var selector = "#obj18451";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = obj18266_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18640(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18636
(function(){
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = obj18266_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18636";
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
					window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18266_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18500();
function playAudioFile_18500() {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = obj18266_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18500")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18500");
			$("#obj_audio_playSoundFile18500").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18266_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18444
(function(){
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = obj18266_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18444";
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
					window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18266_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18502();
function incrementCounter_18502() {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = obj18266_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18266_droppedInsideTargetActions_2_runningActionsCount = window.obj18266_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj18266_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj18266_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18266 
hide_18494();
function hide_18494() {
	var selector = "#obj18266";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18266_droppedInsideTargetActions_runningActionsCount = obj18266_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18494(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18192 
hide_18632();
function hide_18632() {
	var selector = "#obj18192";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18266_droppedInsideTargetActions_runningActionsCount = obj18266_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18632(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18628
(function(){
	window.obj18266_droppedInsideTargetActions_runningActionsCount = obj18266_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18628";
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
					window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup1();
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
				window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18266_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18495();
function playAudioFile_18495() {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = obj18266_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18495")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18495");
			$("#obj_audio_playSoundFile18495").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup2();
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
				window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18266_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18194
(function(){
	window.obj18266_droppedInsideTargetActions_runningActionsCount = obj18266_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18194";
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
					window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup3();
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
				window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18266_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18497();
function incrementCounter_18497() {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = obj18266_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18266_droppedInsideTargetActions_runningActionsCount = window.obj18266_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18266_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18266_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18266_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18266_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18266_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18266").trigger("obj18266_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18266) {
				console.warn("de-queueing event obj18266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18266_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18283_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18283_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18283");

//	action: dragDrop
//	target: obj18283 
dragDrop_18286();
function dragDrop_18286() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18283_onTouchDown_runningActionsCount = obj18283_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18283');
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
    	window.obj18283_onTouchDown_runningActionsCount = window.obj18283_onTouchDown_runningActionsCount - 1;

if (window.obj18283_onTouchDown_runningActionsCount < 0) {
	window.obj18283_onTouchDown_runningActionsCount = 0;
} else if (window.obj18283_onTouchDown_runningActionsCount == 0) {
	obj18283_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18221");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18286 = false;
    	var dropped_id_18286;
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
					dropped_18286 = true;
					dropped_id_18286 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18286) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18283").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18283_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18283_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18293();
function playAudioFile_18293() {
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18293")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18293");
			$("#obj_audio_playSoundFile18293").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18283 
move_18294();
function move_18294() {
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18283");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 251;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18283_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18283 
hide_18288();
function hide_18288() {
	var selector = "#obj18283";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18283_droppedInsideTargetActions_runningActionsCount = obj18283_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18283_droppedInsideTargetActions_runningActionsCount = window.obj18283_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18283_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18288(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18283_droppedInsideTargetActions_runningActionsCount = window.obj18283_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18283_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18283_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18289();
function playAudioFile_18289() {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = obj18283_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18289")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18289");
			$("#obj_audio_playSoundFile18289").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18283_droppedInsideTargetActions_runningActionsCount = window.obj18283_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18283_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18283_droppedInsideTargetActions_runningActionsCount = window.obj18283_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18283_droppedInsideTargetActions_actionGroup2();
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
				window.obj18283_droppedInsideTargetActions_runningActionsCount = window.obj18283_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18283_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18283_droppedInsideTargetActions_runningActionsCount = window.obj18283_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18283_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18283_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18229
(function(){
	window.obj18283_droppedInsideTargetActions_runningActionsCount = obj18283_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18229";
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
					window.obj18283_droppedInsideTargetActions_runningActionsCount = window.obj18283_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18283_droppedInsideTargetActions_actionGroup3();
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
				window.obj18283_droppedInsideTargetActions_runningActionsCount = window.obj18283_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18283_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18283_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18291();
function incrementCounter_18291() {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = obj18283_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18283_droppedInsideTargetActions_runningActionsCount = window.obj18283_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18283_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18283_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18283").trigger("obj18283_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18283) {
				console.warn("de-queueing event obj18283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18283_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18295_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18295_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18295");

//	action: dragDrop
//	target: obj18295 
dragDrop_18298();
function dragDrop_18298() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18295_onTouchDown_runningActionsCount = obj18295_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18295');
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
    	window.obj18295_onTouchDown_runningActionsCount = window.obj18295_onTouchDown_runningActionsCount - 1;

if (window.obj18295_onTouchDown_runningActionsCount < 0) {
	window.obj18295_onTouchDown_runningActionsCount = 0;
} else if (window.obj18295_onTouchDown_runningActionsCount == 0) {
	obj18295_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18456");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18298 = false;
    	var dropped_id_18298;
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
					dropped_18298 = true;
					dropped_id_18298 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18298) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18295").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18295_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18295_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18305();
function playAudioFile_18305() {
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18305")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18305");
			$("#obj_audio_playSoundFile18305").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18295 
move_18306();
function move_18306() {
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18295");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18295_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18295 
hide_18300();
function hide_18300() {
	var selector = "#obj18295";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18295_droppedInsideTargetActions_runningActionsCount = obj18295_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18295_droppedInsideTargetActions_runningActionsCount = window.obj18295_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18295_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18295_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18300(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18295_droppedInsideTargetActions_runningActionsCount = window.obj18295_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18295_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18295_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18295_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18301();
function playAudioFile_18301() {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = obj18295_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18301")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18301");
			$("#obj_audio_playSoundFile18301").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18295_droppedInsideTargetActions_runningActionsCount = window.obj18295_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18295_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18295_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18295_droppedInsideTargetActions_runningActionsCount = window.obj18295_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18295_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18295_droppedInsideTargetActions_actionGroup2();
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
				window.obj18295_droppedInsideTargetActions_runningActionsCount = window.obj18295_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18295_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18295_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18295_droppedInsideTargetActions_runningActionsCount = window.obj18295_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18295_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18295_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18295_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18453
(function(){
	window.obj18295_droppedInsideTargetActions_runningActionsCount = obj18295_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18453";
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
					window.obj18295_droppedInsideTargetActions_runningActionsCount = window.obj18295_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18295_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18295_droppedInsideTargetActions_actionGroup3();
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
				window.obj18295_droppedInsideTargetActions_runningActionsCount = window.obj18295_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18295_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18295_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18295_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18303();
function incrementCounter_18303() {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = obj18295_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18295_droppedInsideTargetActions_runningActionsCount = window.obj18295_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18295_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18295_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18295_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18295_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18295_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18295").trigger("obj18295_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18295) {
				console.warn("de-queueing event obj18295." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18295").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18295_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18307_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18307");

//	action: dragDrop
//	target: obj18307 
dragDrop_18310();
function dragDrop_18310() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18307_onTouchDown_runningActionsCount = obj18307_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18307');
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
    	window.obj18307_onTouchDown_runningActionsCount = window.obj18307_onTouchDown_runningActionsCount - 1;

if (window.obj18307_onTouchDown_runningActionsCount < 0) {
	window.obj18307_onTouchDown_runningActionsCount = 0;
} else if (window.obj18307_onTouchDown_runningActionsCount == 0) {
	obj18307_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18192","#obj18451","#obj18449");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18310 = false;
    	var dropped_id_18310;
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
					dropped_18310 = true;
					dropped_id_18310 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18310) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18307").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18307_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18307_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18322();
function playAudioFile_18322() {
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18322")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18322");
			$("#obj_audio_playSoundFile18322").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18307 
move_18323();
function move_18323() {
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18307");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 401;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18307_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18307 
hide_18483();
function hide_18483() {
	var selector = "#obj18307";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = obj18307_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18483(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18449 
hide_18646();
function hide_18646() {
	var selector = "#obj18449";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = obj18307_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18646(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18644
(function(){
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = obj18307_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj18644";
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
					window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18307_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18484();
function playAudioFile_18484() {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = obj18307_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18484")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18484");
			$("#obj_audio_playSoundFile18484").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup2();
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
				window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup2();
}
			}, false);
		} else {
			window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18307_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18441
(function(){
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = obj18307_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj18441";
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
					window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup3();
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
				window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18307_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18486();
function incrementCounter_18486() {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = obj18307_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18307_droppedInsideTargetActions_3_runningActionsCount = window.obj18307_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}











};
obj18307_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	











































};
obj18307_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18307 
hide_18317();
function hide_18317() {
	var selector = "#obj18307";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = obj18307_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18317(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18451 
hide_18638();
function hide_18638() {
	var selector = "#obj18451";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = obj18307_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18638(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18636
(function(){
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = obj18307_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18636";
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
					window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18307_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18318();
function playAudioFile_18318() {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = obj18307_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18318")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18318");
			$("#obj_audio_playSoundFile18318").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18307_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18444
(function(){
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = obj18307_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18444";
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
					window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18307_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18320();
function incrementCounter_18320() {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = obj18307_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18307_droppedInsideTargetActions_2_runningActionsCount = window.obj18307_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj18307_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj18307_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18307 
hide_18312();
function hide_18312() {
	var selector = "#obj18307";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18307_droppedInsideTargetActions_runningActionsCount = obj18307_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18312(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18192 
hide_18630();
function hide_18630() {
	var selector = "#obj18192";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18307_droppedInsideTargetActions_runningActionsCount = obj18307_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18630(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18628
(function(){
	window.obj18307_droppedInsideTargetActions_runningActionsCount = obj18307_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18628";
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
					window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup1();
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
				window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18307_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18313();
function playAudioFile_18313() {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = obj18307_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18313")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18313");
			$("#obj_audio_playSoundFile18313").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup2();
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
				window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18307_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18194
(function(){
	window.obj18307_droppedInsideTargetActions_runningActionsCount = obj18307_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18194";
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
					window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup3();
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
				window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18307_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18315();
function incrementCounter_18315() {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = obj18307_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18307_droppedInsideTargetActions_runningActionsCount = window.obj18307_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18307_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18307_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18307_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18307_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18307_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18307").trigger("obj18307_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18307) {
				console.warn("de-queueing event obj18307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18307_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18324_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18324_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18324");

//	action: dragDrop
//	target: obj18324 
dragDrop_18327();
function dragDrop_18327() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18324_onTouchDown_runningActionsCount = obj18324_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18324');
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
    	window.obj18324_onTouchDown_runningActionsCount = window.obj18324_onTouchDown_runningActionsCount - 1;

if (window.obj18324_onTouchDown_runningActionsCount < 0) {
	window.obj18324_onTouchDown_runningActionsCount = 0;
} else if (window.obj18324_onTouchDown_runningActionsCount == 0) {
	obj18324_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18217");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18327 = false;
    	var dropped_id_18327;
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
					dropped_18327 = true;
					dropped_id_18327 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18327) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18324").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18324_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18324_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18334();
function playAudioFile_18334() {
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18334")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18334");
			$("#obj_audio_playSoundFile18334").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18324 
move_18335();
function move_18335() {
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18324");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 475;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18324_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18324 
hide_18329();
function hide_18329() {
	var selector = "#obj18324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18324_droppedInsideTargetActions_runningActionsCount = obj18324_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18324_droppedInsideTargetActions_runningActionsCount = window.obj18324_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18324_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18324_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18329(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18324_droppedInsideTargetActions_runningActionsCount = window.obj18324_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18324_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18324_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18324_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18330();
function playAudioFile_18330() {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = obj18324_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18330")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18330");
			$("#obj_audio_playSoundFile18330").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18324_droppedInsideTargetActions_runningActionsCount = window.obj18324_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18324_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18324_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18324_droppedInsideTargetActions_runningActionsCount = window.obj18324_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18324_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18324_droppedInsideTargetActions_actionGroup2();
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
				window.obj18324_droppedInsideTargetActions_runningActionsCount = window.obj18324_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18324_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18324_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18324_droppedInsideTargetActions_runningActionsCount = window.obj18324_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18324_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18324_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18324_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18223
(function(){
	window.obj18324_droppedInsideTargetActions_runningActionsCount = obj18324_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18223";
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
					window.obj18324_droppedInsideTargetActions_runningActionsCount = window.obj18324_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18324_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18324_droppedInsideTargetActions_actionGroup3();
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
				window.obj18324_droppedInsideTargetActions_runningActionsCount = window.obj18324_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18324_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18324_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18324_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18332();
function incrementCounter_18332() {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = obj18324_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18324_droppedInsideTargetActions_runningActionsCount = window.obj18324_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18324_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18324_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18324_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18324_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18324_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18324").trigger("obj18324_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18324) {
				console.warn("de-queueing event obj18324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18324_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18336_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18336");

//	action: dragDrop
//	target: obj18336 
dragDrop_18339();
function dragDrop_18339() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18336_onTouchDown_runningActionsCount = obj18336_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18336');
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
    	window.obj18336_onTouchDown_runningActionsCount = window.obj18336_onTouchDown_runningActionsCount - 1;

if (window.obj18336_onTouchDown_runningActionsCount < 0) {
	window.obj18336_onTouchDown_runningActionsCount = 0;
} else if (window.obj18336_onTouchDown_runningActionsCount == 0) {
	obj18336_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18197","#obj18219");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18339 = false;
    	var dropped_id_18339;
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
					dropped_18339 = true;
					dropped_id_18339 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18339) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18336").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18336_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18336_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18346();
function playAudioFile_18346() {
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18346")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18346");
			$("#obj_audio_playSoundFile18346").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18336 
move_18347();
function move_18347() {
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18336");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 552;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18336_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18336 
hide_18488();
function hide_18488() {
	var selector = "#obj18336";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = obj18336_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18488(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18219 
hide_18660();
function hide_18660() {
	var selector = "#obj18219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = obj18336_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18660(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18658
(function(){
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = obj18336_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18658";
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
					window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18336_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18489();
function playAudioFile_18489() {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = obj18336_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18489")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18489");
			$("#obj_audio_playSoundFile18489").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18336_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18226
(function(){
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = obj18336_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18226";
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
					window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18336_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18491();
function incrementCounter_18491() {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = obj18336_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18336_droppedInsideTargetActions_2_runningActionsCount = window.obj18336_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj18336_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj18336_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18336 
hide_18341();
function hide_18341() {
	var selector = "#obj18336";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18336_droppedInsideTargetActions_runningActionsCount = obj18336_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18341(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18197 
hide_18654();
function hide_18654() {
	var selector = "#obj18197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18336_droppedInsideTargetActions_runningActionsCount = obj18336_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18654(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18652
(function(){
	window.obj18336_droppedInsideTargetActions_runningActionsCount = obj18336_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18652";
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
					window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup1();
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
				window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18336_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18342();
function playAudioFile_18342() {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = obj18336_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18342")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18342");
			$("#obj_audio_playSoundFile18342").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup2();
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
				window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18336_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18199
(function(){
	window.obj18336_droppedInsideTargetActions_runningActionsCount = obj18336_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18199";
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
					window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup3();
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
				window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18336_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18344();
function incrementCounter_18344() {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = obj18336_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18336_droppedInsideTargetActions_runningActionsCount = window.obj18336_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18336_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18336_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18336_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18336_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18336_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18336").trigger("obj18336_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18336) {
				console.warn("de-queueing event obj18336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18336_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18421_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18421_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18421");

//	action: dragDrop
//	target: obj18421 
dragDrop_18424();
function dragDrop_18424() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18421_onTouchDown_runningActionsCount = obj18421_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18421');
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
    	window.obj18421_onTouchDown_runningActionsCount = window.obj18421_onTouchDown_runningActionsCount - 1;

if (window.obj18421_onTouchDown_runningActionsCount < 0) {
	window.obj18421_onTouchDown_runningActionsCount = 0;
} else if (window.obj18421_onTouchDown_runningActionsCount == 0) {
	obj18421_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18212");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18424 = false;
    	var dropped_id_18424;
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
					dropped_18424 = true;
					dropped_id_18424 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18424) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18421").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18421_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18421_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18436();
function playAudioFile_18436() {
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18436")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18436");
			$("#obj_audio_playSoundFile18436").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18421 
move_18437();
function move_18437() {
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18421");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1016;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18421_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18421 
hide_18431();
function hide_18431() {
	var selector = "#obj18421";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18421_droppedInsideTargetActions_runningActionsCount = obj18421_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18421_droppedInsideTargetActions_runningActionsCount = window.obj18421_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18421_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18421_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18431(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18421_droppedInsideTargetActions_runningActionsCount = window.obj18421_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18421_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18421_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18421_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18432();
function playAudioFile_18432() {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = obj18421_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18432")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18432");
			$("#obj_audio_playSoundFile18432").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18421_droppedInsideTargetActions_runningActionsCount = window.obj18421_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18421_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18421_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18421_droppedInsideTargetActions_runningActionsCount = window.obj18421_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18421_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18421_droppedInsideTargetActions_actionGroup2();
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
				window.obj18421_droppedInsideTargetActions_runningActionsCount = window.obj18421_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18421_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18421_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18421_droppedInsideTargetActions_runningActionsCount = window.obj18421_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18421_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18421_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18421_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18214
(function(){
	window.obj18421_droppedInsideTargetActions_runningActionsCount = obj18421_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18214";
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
					window.obj18421_droppedInsideTargetActions_runningActionsCount = window.obj18421_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18421_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18421_droppedInsideTargetActions_actionGroup3();
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
				window.obj18421_droppedInsideTargetActions_runningActionsCount = window.obj18421_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18421_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18421_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18421_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18434();
function incrementCounter_18434() {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = obj18421_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18421_droppedInsideTargetActions_runningActionsCount = window.obj18421_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18421_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18421_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18421_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18421_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18421_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18421").trigger("obj18421_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18421) {
				console.warn("de-queueing event obj18421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18421_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18404_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18404");

//	action: dragDrop
//	target: obj18404 
dragDrop_18511();
function dragDrop_18511() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18404_onTouchDown_runningActionsCount = obj18404_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18404');
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
    	window.obj18404_onTouchDown_runningActionsCount = window.obj18404_onTouchDown_runningActionsCount - 1;

if (window.obj18404_onTouchDown_runningActionsCount < 0) {
	window.obj18404_onTouchDown_runningActionsCount = 0;
} else if (window.obj18404_onTouchDown_runningActionsCount == 0) {
	obj18404_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18197","#obj18219");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18511 = false;
    	var dropped_id_18511;
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
					dropped_18511 = true;
					dropped_id_18511 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18511) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18404").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18404_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18404_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18523();
function playAudioFile_18523() {
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18523")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18523");
			$("#obj_audio_playSoundFile18523").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18404 
move_18524();
function move_18524() {
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18404");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1092;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18404_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18404 
hide_18518();
function hide_18518() {
	var selector = "#obj18404";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = obj18404_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18518(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18219 
hide_18662();
function hide_18662() {
	var selector = "#obj18219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = obj18404_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18662(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18658
(function(){
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = obj18404_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18658";
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
					window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18404_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18519();
function playAudioFile_18519() {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = obj18404_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18519")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18519");
			$("#obj_audio_playSoundFile18519").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18404_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18226
(function(){
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = obj18404_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18226";
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
					window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18404_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18521();
function incrementCounter_18521() {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = obj18404_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18404_droppedInsideTargetActions_2_runningActionsCount = window.obj18404_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj18404_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj18404_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18404 
hide_18513();
function hide_18513() {
	var selector = "#obj18404";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18404_droppedInsideTargetActions_runningActionsCount = obj18404_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18513(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18197 
hide_18656();
function hide_18656() {
	var selector = "#obj18197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18404_droppedInsideTargetActions_runningActionsCount = obj18404_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18656(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18652
(function(){
	window.obj18404_droppedInsideTargetActions_runningActionsCount = obj18404_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18652";
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
					window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup1();
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
				window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18404_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18514();
function playAudioFile_18514() {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = obj18404_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18514")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18514");
			$("#obj_audio_playSoundFile18514").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup2();
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
				window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18404_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18199
(function(){
	window.obj18404_droppedInsideTargetActions_runningActionsCount = obj18404_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18199";
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
					window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup3();
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
				window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18404_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18516();
function incrementCounter_18516() {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = obj18404_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18404_droppedInsideTargetActions_runningActionsCount = window.obj18404_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18404_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18404_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18404_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18404_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18404").trigger("obj18404_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18404) {
				console.warn("de-queueing event obj18404." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18404").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18404_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18387_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18387");

//	action: dragDrop
//	target: obj18387 
dragDrop_18525();
function dragDrop_18525() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18387_onTouchDown_runningActionsCount = obj18387_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18387');
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
    	window.obj18387_onTouchDown_runningActionsCount = window.obj18387_onTouchDown_runningActionsCount - 1;

if (window.obj18387_onTouchDown_runningActionsCount < 0) {
	window.obj18387_onTouchDown_runningActionsCount = 0;
} else if (window.obj18387_onTouchDown_runningActionsCount == 0) {
	obj18387_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18192","#obj18451","#obj18449");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18525 = false;
    	var dropped_id_18525;
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
					dropped_18525 = true;
					dropped_id_18525 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18525) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18387").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18387_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18387_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18542();
function playAudioFile_18542() {
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18542")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18542");
			$("#obj_audio_playSoundFile18542").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18387 
move_18543();
function move_18543() {
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18387");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1169;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18387_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18387 
hide_18537();
function hide_18537() {
	var selector = "#obj18387";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = obj18387_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18537(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18449 
hide_18650();
function hide_18650() {
	var selector = "#obj18449";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = obj18387_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18650(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18644
(function(){
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = obj18387_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj18644";
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
					window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18387_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18538();
function playAudioFile_18538() {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = obj18387_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18538")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18538");
			$("#obj_audio_playSoundFile18538").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup2();
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
				window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup2();
}
			}, false);
		} else {
			window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18387_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18441
(function(){
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = obj18387_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj18441";
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
					window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup3();
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
				window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18387_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18540();
function incrementCounter_18540() {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = obj18387_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18387_droppedInsideTargetActions_3_runningActionsCount = window.obj18387_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}











};
obj18387_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	











































};
obj18387_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18387 
hide_18532();
function hide_18532() {
	var selector = "#obj18387";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = obj18387_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18532(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18451 
hide_18642();
function hide_18642() {
	var selector = "#obj18451";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = obj18387_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18642(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18636
(function(){
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = obj18387_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18636";
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
					window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18387_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18533();
function playAudioFile_18533() {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = obj18387_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18533")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18533");
			$("#obj_audio_playSoundFile18533").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18387_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18444
(function(){
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = obj18387_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18444";
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
					window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18387_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18535();
function incrementCounter_18535() {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = obj18387_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18387_droppedInsideTargetActions_2_runningActionsCount = window.obj18387_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj18387_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj18387_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18387 
hide_18527();
function hide_18527() {
	var selector = "#obj18387";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18387_droppedInsideTargetActions_runningActionsCount = obj18387_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18527(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18192 
hide_18634();
function hide_18634() {
	var selector = "#obj18192";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18387_droppedInsideTargetActions_runningActionsCount = obj18387_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18634(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18628
(function(){
	window.obj18387_droppedInsideTargetActions_runningActionsCount = obj18387_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18628";
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
					window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup1();
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
				window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18387_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18528();
function playAudioFile_18528() {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = obj18387_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18528")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18528");
			$("#obj_audio_playSoundFile18528").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup2();
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
				window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18387_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18194
(function(){
	window.obj18387_droppedInsideTargetActions_runningActionsCount = obj18387_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18194";
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
					window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup3();
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
				window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18387_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18530();
function incrementCounter_18530() {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = obj18387_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18387_droppedInsideTargetActions_runningActionsCount = window.obj18387_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18387_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18387_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18387_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18387_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18387_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18387").trigger("obj18387_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18387) {
				console.warn("de-queueing event obj18387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18387_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18375_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18375_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18375");

//	action: dragDrop
//	target: obj18375 
dragDrop_18378();
function dragDrop_18378() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18375_onTouchDown_runningActionsCount = obj18375_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18375');
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
    	window.obj18375_onTouchDown_runningActionsCount = window.obj18375_onTouchDown_runningActionsCount - 1;

if (window.obj18375_onTouchDown_runningActionsCount < 0) {
	window.obj18375_onTouchDown_runningActionsCount = 0;
} else if (window.obj18375_onTouchDown_runningActionsCount == 0) {
	obj18375_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18461");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18378 = false;
    	var dropped_id_18378;
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
					dropped_18378 = true;
					dropped_id_18378 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18378) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18375").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18375_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18375_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18385();
function playAudioFile_18385() {
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18385")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18385");
			$("#obj_audio_playSoundFile18385").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18375 
move_18386();
function move_18386() {
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18375");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 862;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18375_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18375 
hide_18380();
function hide_18380() {
	var selector = "#obj18375";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18375_droppedInsideTargetActions_runningActionsCount = obj18375_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18375_droppedInsideTargetActions_runningActionsCount = window.obj18375_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18375_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18375_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18380(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18375_droppedInsideTargetActions_runningActionsCount = window.obj18375_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18375_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18375_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18375_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18381();
function playAudioFile_18381() {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = obj18375_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18381")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18381");
			$("#obj_audio_playSoundFile18381").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18375_droppedInsideTargetActions_runningActionsCount = window.obj18375_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18375_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18375_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18375_droppedInsideTargetActions_runningActionsCount = window.obj18375_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18375_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18375_droppedInsideTargetActions_actionGroup2();
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
				window.obj18375_droppedInsideTargetActions_runningActionsCount = window.obj18375_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18375_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18375_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18375_droppedInsideTargetActions_runningActionsCount = window.obj18375_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18375_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18375_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18375_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18458
(function(){
	window.obj18375_droppedInsideTargetActions_runningActionsCount = obj18375_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18458";
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
					window.obj18375_droppedInsideTargetActions_runningActionsCount = window.obj18375_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18375_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18375_droppedInsideTargetActions_actionGroup3();
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
				window.obj18375_droppedInsideTargetActions_runningActionsCount = window.obj18375_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18375_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18375_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18375_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18383();
function incrementCounter_18383() {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = obj18375_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18375_droppedInsideTargetActions_runningActionsCount = window.obj18375_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18375_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18375_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18375_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18375_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18375_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18375").trigger("obj18375_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18375) {
				console.warn("de-queueing event obj18375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18375_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj18363_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18363_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18363");

//	action: dragDrop
//	target: obj18363 
dragDrop_18366();
function dragDrop_18366() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18363_onTouchDown_runningActionsCount = obj18363_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18363');
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
    	window.obj18363_onTouchDown_runningActionsCount = window.obj18363_onTouchDown_runningActionsCount - 1;

if (window.obj18363_onTouchDown_runningActionsCount < 0) {
	window.obj18363_onTouchDown_runningActionsCount = 0;
} else if (window.obj18363_onTouchDown_runningActionsCount == 0) {
	obj18363_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj18447");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_18366 = false;
    	var dropped_id_18366;
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
					dropped_18366 = true;
					dropped_id_18366 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_18366) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18363").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj18363_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18363_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_18373();
function playAudioFile_18373() {
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18373")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18373");
			$("#obj_audio_playSoundFile18373").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj18363 
move_18374();
function move_18374() {
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj18363");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 939;
	var moveY = 702;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj18363_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj18363 
hide_18368();
function hide_18368() {
	var selector = "#obj18363";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18363_droppedInsideTargetActions_runningActionsCount = obj18363_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18363_droppedInsideTargetActions_runningActionsCount = window.obj18363_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18363_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18363_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18368(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18363_droppedInsideTargetActions_runningActionsCount = window.obj18363_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18363_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18363_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18363_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_18369();
function playAudioFile_18369() {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = obj18363_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile18369")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile18369");
			$("#obj_audio_playSoundFile18369").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj18363_droppedInsideTargetActions_runningActionsCount = window.obj18363_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18363_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18363_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj18363_droppedInsideTargetActions_runningActionsCount = window.obj18363_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18363_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18363_droppedInsideTargetActions_actionGroup2();
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
				window.obj18363_droppedInsideTargetActions_runningActionsCount = window.obj18363_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18363_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18363_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj18363_droppedInsideTargetActions_runningActionsCount = window.obj18363_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18363_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18363_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj18363_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18438
(function(){
	window.obj18363_droppedInsideTargetActions_runningActionsCount = obj18363_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18438";
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
					window.obj18363_droppedInsideTargetActions_runningActionsCount = window.obj18363_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18363_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18363_droppedInsideTargetActions_actionGroup3();
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
				window.obj18363_droppedInsideTargetActions_runningActionsCount = window.obj18363_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18363_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18363_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18363_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj17967 
incrementCounter_18371();
function incrementCounter_18371() {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = obj18363_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj17967_counterValue;
	obj17967_counterValue = obj17967_counterValue + 1;
	if (! obj17967_counterCanExceedTargetValue && obj17967_counterValue > obj17967_counterTargetValue) {
		obj17967_counterValue = obj17967_counterTargetValue;
	}

	if (oldValue != obj17967_counterValue) {
		$("#obj17967").trigger('SCEventCounterValueChange');
		$("#obj17967").trigger('SCEventCounterIncrease');
		if (obj17967_counterValue == obj17967_counterTargetValue)
			$("#obj17967").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj18363_droppedInsideTargetActions_runningActionsCount = window.obj18363_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj18363_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj18363_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj18363_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18363_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj18363_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18363").trigger("obj18363_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18363) {
				console.warn("de-queueing event obj18363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18363_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj17950: Event Touch Down
 *
 */

$("#obj17950").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17950_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17950_onTap is still running");
	return;
}
var obj17950_onTap_runningActionsCount = 0;
var obj17950_onTap_loopCount = 0;
obj17950_onTap_actionGroup0();
});



























/*
 *
 *   obj17953: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj17953").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj17953_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17953_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj17953_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj17953_SCEventCounterReachedTargetValue_loopCount = 0;
obj17953_SCEventCounterReachedTargetValue_actionGroup0();
});
























































/*
 *
 *   obj17961: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj17961").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj17961_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17961_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj17961_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj17961_SCEventCounterReachedTargetValue_loopCount = 0;
obj17961_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj17967: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj17967").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj17967_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17967_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj17967_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj17967_SCEventCounterReachedTargetValue_loopCount = 0;
obj17967_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj17970: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj17970").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj17970_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17970_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj17970_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj17970_SCEventCounterReachedTargetValue_loopCount = 0;
obj17970_SCEventCounterReachedTargetValue_actionGroup0();
});









































































































































































































/*
 *
 *   obj18007: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18007");
	var winTarget = document.getElementById("obj18007");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18007").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18007_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18007_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18007_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18007_onTouchDown is still running");
	return;
}
var obj18007_onTouchDown_runningActionsCount = 0;
var obj18007_onTouchDown_loopCount = 0;
obj18007_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18007: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18007").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18007_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18007_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18007: Event droppedInsideTargetActions
 *
 */

$("#obj18007").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18007_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18007_droppedInsideTargetActions is still running");
	return;
}
var obj18007_droppedInsideTargetActions_runningActionsCount = 0;
var obj18007_droppedInsideTargetActions_loopCount = 0;
obj18007_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18019: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18019");
	var winTarget = document.getElementById("obj18019");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18019").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18019_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18019_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18019_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18019_onTouchDown is still running");
	return;
}
var obj18019_onTouchDown_runningActionsCount = 0;
var obj18019_onTouchDown_loopCount = 0;
obj18019_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18019: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18019").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18019_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18019_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18019: Event droppedInsideTargetActions
 *
 */

$("#obj18019").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18019_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18019_droppedInsideTargetActions is still running");
	return;
}
var obj18019_droppedInsideTargetActions_runningActionsCount = 0;
var obj18019_droppedInsideTargetActions_loopCount = 0;
obj18019_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18031: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18031");
	var winTarget = document.getElementById("obj18031");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18031").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18031_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18031_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18031_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18031_onTouchDown is still running");
	return;
}
var obj18031_onTouchDown_runningActionsCount = 0;
var obj18031_onTouchDown_loopCount = 0;
obj18031_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18031: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18031").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18031_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18031_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18031: Event droppedInsideTargetActions
 *
 */

$("#obj18031").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18031_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18031_droppedInsideTargetActions is still running");
	return;
}
var obj18031_droppedInsideTargetActions_runningActionsCount = 0;
var obj18031_droppedInsideTargetActions_loopCount = 0;
obj18031_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18043: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18043");
	var winTarget = document.getElementById("obj18043");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18043").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18043_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18043_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18043_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18043_onTouchDown is still running");
	return;
}
var obj18043_onTouchDown_runningActionsCount = 0;
var obj18043_onTouchDown_loopCount = 0;
obj18043_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18043: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18043").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18043_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18043_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18043: Event droppedInsideTargetActions
 *
 */

$("#obj18043").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18043_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18043_droppedInsideTargetActions is still running");
	return;
}
var obj18043_droppedInsideTargetActions_runningActionsCount = 0;
var obj18043_droppedInsideTargetActions_loopCount = 0;
obj18043_droppedInsideTargetActions_actionGroup0();
});


















/*
 *
 *   obj18067: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj18067").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj18067_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18067_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj18067_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18067_SCEventCounterReachedTargetValue_loopCount = 0;
obj18067_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj18070: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj18070").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj18070_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18070_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj18070_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18070_SCEventCounterReachedTargetValue_loopCount = 0;
obj18070_SCEventCounterReachedTargetValue_actionGroup0();
});




































































































































































































































































































































































































































































































































































































































































































/*
 *
 *   obj18232: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18232");
	var winTarget = document.getElementById("obj18232");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18232").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18232_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18232_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18232_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18232_onTouchDown is still running");
	return;
}
var obj18232_onTouchDown_runningActionsCount = 0;
var obj18232_onTouchDown_loopCount = 0;
obj18232_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18232: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18232").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18232_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18232_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18232: Event droppedInsideTargetActions
 *
 */

$("#obj18232").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18232_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18232_droppedInsideTargetActions is still running");
	return;
}
var obj18232_droppedInsideTargetActions_runningActionsCount = 0;
var obj18232_droppedInsideTargetActions_loopCount = 0;
obj18232_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18249: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18249");
	var winTarget = document.getElementById("obj18249");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18249").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18249_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18249_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18249_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18249_onTouchDown is still running");
	return;
}
var obj18249_onTouchDown_runningActionsCount = 0;
var obj18249_onTouchDown_loopCount = 0;
obj18249_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18249: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18249").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18249_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18249_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18249: Event droppedInsideTargetActions
 *
 */

$("#obj18249").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18249_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18249_droppedInsideTargetActions is still running");
	return;
}
var obj18249_droppedInsideTargetActions_runningActionsCount = 0;
var obj18249_droppedInsideTargetActions_loopCount = 0;
obj18249_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18266: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18266");
	var winTarget = document.getElementById("obj18266");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18266").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18266_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18266_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18266_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18266_onTouchDown is still running");
	return;
}
var obj18266_onTouchDown_runningActionsCount = 0;
var obj18266_onTouchDown_loopCount = 0;
obj18266_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18266: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18266").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18266_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18266_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18266: Event droppedInsideTargetActions_3
 *
 */

$("#obj18266").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj18266_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18266_droppedInsideTargetActions_3 is still running");
	return;
}
var obj18266_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj18266_droppedInsideTargetActions_3_loopCount = 0;
obj18266_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj18266: Event droppedInsideTargetActions_2
 *
 */

$("#obj18266").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj18266_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18266_droppedInsideTargetActions_2 is still running");
	return;
}
var obj18266_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18266_droppedInsideTargetActions_2_loopCount = 0;
obj18266_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj18266: Event droppedInsideTargetActions
 *
 */

$("#obj18266").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18266_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18266_droppedInsideTargetActions is still running");
	return;
}
var obj18266_droppedInsideTargetActions_runningActionsCount = 0;
var obj18266_droppedInsideTargetActions_loopCount = 0;
obj18266_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18283: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18283");
	var winTarget = document.getElementById("obj18283");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18283").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18283_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18283_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18283_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18283_onTouchDown is still running");
	return;
}
var obj18283_onTouchDown_runningActionsCount = 0;
var obj18283_onTouchDown_loopCount = 0;
obj18283_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18283: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18283").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18283_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18283_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18283: Event droppedInsideTargetActions
 *
 */

$("#obj18283").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18283_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18283_droppedInsideTargetActions is still running");
	return;
}
var obj18283_droppedInsideTargetActions_runningActionsCount = 0;
var obj18283_droppedInsideTargetActions_loopCount = 0;
obj18283_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18295: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18295");
	var winTarget = document.getElementById("obj18295");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18295").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18295_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18295_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18295_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18295_onTouchDown is still running");
	return;
}
var obj18295_onTouchDown_runningActionsCount = 0;
var obj18295_onTouchDown_loopCount = 0;
obj18295_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18295: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18295").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18295_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18295_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18295: Event droppedInsideTargetActions
 *
 */

$("#obj18295").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18295_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18295_droppedInsideTargetActions is still running");
	return;
}
var obj18295_droppedInsideTargetActions_runningActionsCount = 0;
var obj18295_droppedInsideTargetActions_loopCount = 0;
obj18295_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18307: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18307");
	var winTarget = document.getElementById("obj18307");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18307").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18307_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18307_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18307_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18307_onTouchDown is still running");
	return;
}
var obj18307_onTouchDown_runningActionsCount = 0;
var obj18307_onTouchDown_loopCount = 0;
obj18307_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18307: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18307").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18307_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18307_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18307: Event droppedInsideTargetActions_3
 *
 */

$("#obj18307").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj18307_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18307_droppedInsideTargetActions_3 is still running");
	return;
}
var obj18307_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj18307_droppedInsideTargetActions_3_loopCount = 0;
obj18307_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj18307: Event droppedInsideTargetActions_2
 *
 */

$("#obj18307").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj18307_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18307_droppedInsideTargetActions_2 is still running");
	return;
}
var obj18307_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18307_droppedInsideTargetActions_2_loopCount = 0;
obj18307_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj18307: Event droppedInsideTargetActions
 *
 */

$("#obj18307").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18307_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18307_droppedInsideTargetActions is still running");
	return;
}
var obj18307_droppedInsideTargetActions_runningActionsCount = 0;
var obj18307_droppedInsideTargetActions_loopCount = 0;
obj18307_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18324: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18324");
	var winTarget = document.getElementById("obj18324");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18324").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18324_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18324_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18324_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18324_onTouchDown is still running");
	return;
}
var obj18324_onTouchDown_runningActionsCount = 0;
var obj18324_onTouchDown_loopCount = 0;
obj18324_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18324: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18324").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18324_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18324_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18324: Event droppedInsideTargetActions
 *
 */

$("#obj18324").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18324_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18324_droppedInsideTargetActions is still running");
	return;
}
var obj18324_droppedInsideTargetActions_runningActionsCount = 0;
var obj18324_droppedInsideTargetActions_loopCount = 0;
obj18324_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18336: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18336");
	var winTarget = document.getElementById("obj18336");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18336").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18336_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18336_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18336_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18336_onTouchDown is still running");
	return;
}
var obj18336_onTouchDown_runningActionsCount = 0;
var obj18336_onTouchDown_loopCount = 0;
obj18336_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18336: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18336").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18336_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18336_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18336: Event droppedInsideTargetActions_2
 *
 */

$("#obj18336").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj18336_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18336_droppedInsideTargetActions_2 is still running");
	return;
}
var obj18336_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18336_droppedInsideTargetActions_2_loopCount = 0;
obj18336_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj18336: Event droppedInsideTargetActions
 *
 */

$("#obj18336").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18336_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18336_droppedInsideTargetActions is still running");
	return;
}
var obj18336_droppedInsideTargetActions_runningActionsCount = 0;
var obj18336_droppedInsideTargetActions_loopCount = 0;
obj18336_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18421: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18421");
	var winTarget = document.getElementById("obj18421");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18421").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18421_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18421_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18421_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18421_onTouchDown is still running");
	return;
}
var obj18421_onTouchDown_runningActionsCount = 0;
var obj18421_onTouchDown_loopCount = 0;
obj18421_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18421: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18421").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18421_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18421_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18421: Event droppedInsideTargetActions
 *
 */

$("#obj18421").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18421_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18421_droppedInsideTargetActions is still running");
	return;
}
var obj18421_droppedInsideTargetActions_runningActionsCount = 0;
var obj18421_droppedInsideTargetActions_loopCount = 0;
obj18421_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18404: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18404");
	var winTarget = document.getElementById("obj18404");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18404").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18404_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18404_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18404_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18404_onTouchDown is still running");
	return;
}
var obj18404_onTouchDown_runningActionsCount = 0;
var obj18404_onTouchDown_loopCount = 0;
obj18404_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18404: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18404").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18404_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18404_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18404: Event droppedInsideTargetActions_2
 *
 */

$("#obj18404").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj18404_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18404_droppedInsideTargetActions_2 is still running");
	return;
}
var obj18404_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18404_droppedInsideTargetActions_2_loopCount = 0;
obj18404_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj18404: Event droppedInsideTargetActions
 *
 */

$("#obj18404").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18404_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18404_droppedInsideTargetActions is still running");
	return;
}
var obj18404_droppedInsideTargetActions_runningActionsCount = 0;
var obj18404_droppedInsideTargetActions_loopCount = 0;
obj18404_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18387: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18387");
	var winTarget = document.getElementById("obj18387");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18387").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18387_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18387_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18387_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18387_onTouchDown is still running");
	return;
}
var obj18387_onTouchDown_runningActionsCount = 0;
var obj18387_onTouchDown_loopCount = 0;
obj18387_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18387: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18387").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18387_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18387_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18387: Event droppedInsideTargetActions_3
 *
 */

$("#obj18387").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj18387_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18387_droppedInsideTargetActions_3 is still running");
	return;
}
var obj18387_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj18387_droppedInsideTargetActions_3_loopCount = 0;
obj18387_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj18387: Event droppedInsideTargetActions_2
 *
 */

$("#obj18387").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj18387_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18387_droppedInsideTargetActions_2 is still running");
	return;
}
var obj18387_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj18387_droppedInsideTargetActions_2_loopCount = 0;
obj18387_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj18387: Event droppedInsideTargetActions
 *
 */

$("#obj18387").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18387_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18387_droppedInsideTargetActions is still running");
	return;
}
var obj18387_droppedInsideTargetActions_runningActionsCount = 0;
var obj18387_droppedInsideTargetActions_loopCount = 0;
obj18387_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18375: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18375");
	var winTarget = document.getElementById("obj18375");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18375").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18375_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18375_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18375_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18375_onTouchDown is still running");
	return;
}
var obj18375_onTouchDown_runningActionsCount = 0;
var obj18375_onTouchDown_loopCount = 0;
obj18375_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18375: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18375").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18375_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18375_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18375: Event droppedInsideTargetActions
 *
 */

$("#obj18375").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18375_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18375_droppedInsideTargetActions is still running");
	return;
}
var obj18375_droppedInsideTargetActions_runningActionsCount = 0;
var obj18375_droppedInsideTargetActions_loopCount = 0;
obj18375_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj18363: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18363");
	var winTarget = document.getElementById("obj18363");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj18363").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18363_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18363_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18363_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18363_onTouchDown is still running");
	return;
}
var obj18363_onTouchDown_runningActionsCount = 0;
var obj18363_onTouchDown_loopCount = 0;
obj18363_onTouchDown_actionGroup0();
});






/*
 *
 *   obj18363: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj18363").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18363_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj18363_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18363: Event droppedInsideTargetActions
 *
 */

$("#obj18363").bind("droppedInsideTargetActions", function(event) {
	if (window.obj18363_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18363_droppedInsideTargetActions is still running");
	return;
}
var obj18363_droppedInsideTargetActions_runningActionsCount = 0;
var obj18363_droppedInsideTargetActions_loopCount = 0;
obj18363_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj17944").trigger('SCEventShow');
$("#obj17946").trigger('SCEventShow');
$("#obj17948").trigger('SCEventShow');
$("#obj17950").trigger('SCEventShow');
$("#obj17957").trigger('SCEventShow');
$("#obj17959").trigger('SCEventShow');
$("#obj17978").trigger('SCEventShow');
$("#obj17980").trigger('SCEventShow');
$("#obj17982").trigger('SCEventShow');
$("#obj17987").trigger('SCEventShow');
$("#obj17992").trigger('SCEventShow');
$("#obj17997").trigger('SCEventShow');
$("#obj18007").trigger('SCEventShow');
$("#obj18019").trigger('SCEventShow');
$("#obj18031").trigger('SCEventShow');
$("#obj18043").trigger('SCEventShow');
$("#obj18188").trigger('SCEventShow');
$("#obj18190").trigger('SCEventShow');
$("#obj18461").trigger('SCEventShow');
$("#obj18456").trigger('SCEventShow');
$("#obj18451").trigger('SCEventShow');
$("#obj18636").trigger('SCEventShow');
$("#obj18449").trigger('SCEventShow');
$("#obj18644").trigger('SCEventShow');
$("#obj18447").trigger('SCEventShow');
$("#obj18192").trigger('SCEventShow');
$("#obj18628").trigger('SCEventShow');
$("#obj18197").trigger('SCEventShow');
$("#obj18652").trigger('SCEventShow');
$("#obj18202").trigger('SCEventShow');
$("#obj18207").trigger('SCEventShow');
$("#obj18212").trigger('SCEventShow');
$("#obj18217").trigger('SCEventShow');
$("#obj18219").trigger('SCEventShow');
$("#obj18658").trigger('SCEventShow');
$("#obj18221").trigger('SCEventShow');
$("#obj18358").trigger('SCEventShow');
$("#obj18361").trigger('SCEventShow');
$("#obj18232").trigger('SCEventShow');
$("#obj18249").trigger('SCEventShow');
$("#obj18266").trigger('SCEventShow');
$("#obj18283").trigger('SCEventShow');
$("#obj18295").trigger('SCEventShow');
$("#obj18307").trigger('SCEventShow');
$("#obj18324").trigger('SCEventShow');
$("#obj18336").trigger('SCEventShow');
$("#obj18421").trigger('SCEventShow');
$("#obj18404").trigger('SCEventShow');
$("#obj18387").trigger('SCEventShow');
$("#obj18375").trigger('SCEventShow');
$("#obj18363").trigger('SCEventShow');
$("#obj18480").trigger('SCEventShow');
$("#obj24620").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});