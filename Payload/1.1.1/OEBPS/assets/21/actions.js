pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 14133;
pubcoder.page.title = pubcoder.page.title || "21";
pubcoder.page.number = pubcoder.page.number || 21;
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
var obj14147_onTap_activeActionGroupIndex = -1;
var obj14147_onTap_runningActionsCount = 0;
var obj14147_onTap_loopCount = 0;
var obj14150_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14150_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14150_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14158_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14158_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14158_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14161_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14161_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14161_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14164_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14164_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14164_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14172_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14172_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14172_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14366_onDrag_activeActionGroupIndex = -1;
var obj14366_onDrag_runningActionsCount = 0;
var obj14366_onDrag_loopCount = 0;
var obj14366_onTouchDown_activeActionGroupIndex = -1;
var obj14366_onTouchDown_runningActionsCount = 0;
var obj14366_onTouchDown_loopCount = 0;
var obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14366_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14366_droppedInsideTargetActions_runningActionsCount = 0;
var obj14366_droppedInsideTargetActions_loopCount = 0;
var obj14434_onDrag_activeActionGroupIndex = -1;
var obj14434_onDrag_runningActionsCount = 0;
var obj14434_onDrag_loopCount = 0;
var obj14434_onTouchDown_activeActionGroupIndex = -1;
var obj14434_onTouchDown_runningActionsCount = 0;
var obj14434_onTouchDown_loopCount = 0;
var obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14434_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14434_droppedInsideTargetActions_runningActionsCount = 0;
var obj14434_droppedInsideTargetActions_loopCount = 0;
var obj14460_onDrag_activeActionGroupIndex = -1;
var obj14460_onDrag_runningActionsCount = 0;
var obj14460_onDrag_loopCount = 0;
var obj14460_onTouchDown_activeActionGroupIndex = -1;
var obj14460_onTouchDown_runningActionsCount = 0;
var obj14460_onTouchDown_loopCount = 0;
var obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14460_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14460_droppedInsideTargetActions_runningActionsCount = 0;
var obj14460_droppedInsideTargetActions_loopCount = 0;
var obj14448_onDrag_activeActionGroupIndex = -1;
var obj14448_onDrag_runningActionsCount = 0;
var obj14448_onDrag_loopCount = 0;
var obj14448_onTouchDown_activeActionGroupIndex = -1;
var obj14448_onTouchDown_runningActionsCount = 0;
var obj14448_onTouchDown_loopCount = 0;
var obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14448_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14448_droppedInsideTargetActions_runningActionsCount = 0;
var obj14448_droppedInsideTargetActions_loopCount = 0;
var obj14472_onDrag_activeActionGroupIndex = -1;
var obj14472_onDrag_runningActionsCount = 0;
var obj14472_onDrag_loopCount = 0;
var obj14472_onTouchDown_activeActionGroupIndex = -1;
var obj14472_onTouchDown_runningActionsCount = 0;
var obj14472_onTouchDown_loopCount = 0;
var obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14472_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14472_droppedInsideTargetActions_runningActionsCount = 0;
var obj14472_droppedInsideTargetActions_loopCount = 0;
var obj14492_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14492_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14492_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14489_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14489_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj14484_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14484_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14549_onDrag_activeActionGroupIndex = -1;
var obj14549_onDrag_runningActionsCount = 0;
var obj14549_onDrag_loopCount = 0;
var obj14549_onTouchDown_activeActionGroupIndex = -1;
var obj14549_onTouchDown_runningActionsCount = 0;
var obj14549_onTouchDown_loopCount = 0;
var obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14549_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14549_droppedInsideTargetActions_runningActionsCount = 0;
var obj14549_droppedInsideTargetActions_loopCount = 0;
var obj14537_onDrag_activeActionGroupIndex = -1;
var obj14537_onDrag_runningActionsCount = 0;
var obj14537_onDrag_loopCount = 0;
var obj14537_onTouchDown_activeActionGroupIndex = -1;
var obj14537_onTouchDown_runningActionsCount = 0;
var obj14537_onTouchDown_loopCount = 0;
var obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14537_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14537_droppedInsideTargetActions_runningActionsCount = 0;
var obj14537_droppedInsideTargetActions_loopCount = 0;
var obj14525_onDrag_activeActionGroupIndex = -1;
var obj14525_onDrag_runningActionsCount = 0;
var obj14525_onDrag_loopCount = 0;
var obj14525_onTouchDown_activeActionGroupIndex = -1;
var obj14525_onTouchDown_runningActionsCount = 0;
var obj14525_onTouchDown_loopCount = 0;
var obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14525_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14525_droppedInsideTargetActions_runningActionsCount = 0;
var obj14525_droppedInsideTargetActions_loopCount = 0;
var obj14513_onDrag_activeActionGroupIndex = -1;
var obj14513_onDrag_runningActionsCount = 0;
var obj14513_onDrag_loopCount = 0;
var obj14513_onTouchDown_activeActionGroupIndex = -1;
var obj14513_onTouchDown_runningActionsCount = 0;
var obj14513_onTouchDown_loopCount = 0;
var obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14513_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14513_droppedInsideTargetActions_runningActionsCount = 0;
var obj14513_droppedInsideTargetActions_loopCount = 0;
var obj14501_onDrag_activeActionGroupIndex = -1;
var obj14501_onDrag_runningActionsCount = 0;
var obj14501_onDrag_loopCount = 0;
var obj14501_onTouchDown_activeActionGroupIndex = -1;
var obj14501_onTouchDown_runningActionsCount = 0;
var obj14501_onTouchDown_loopCount = 0;
var obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14501_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14501_droppedInsideTargetActions_runningActionsCount = 0;
var obj14501_droppedInsideTargetActions_loopCount = 0;
var obj14593_onDrag_activeActionGroupIndex = -1;
var obj14593_onDrag_runningActionsCount = 0;
var obj14593_onDrag_loopCount = 0;
var obj14593_onTouchDown_activeActionGroupIndex = -1;
var obj14593_onTouchDown_runningActionsCount = 0;
var obj14593_onTouchDown_loopCount = 0;
var obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14593_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14593_droppedInsideTargetActions_runningActionsCount = 0;
var obj14593_droppedInsideTargetActions_loopCount = 0;
var obj14634_onDrag_activeActionGroupIndex = -1;
var obj14634_onDrag_runningActionsCount = 0;
var obj14634_onDrag_loopCount = 0;
var obj14634_onTouchDown_activeActionGroupIndex = -1;
var obj14634_onTouchDown_runningActionsCount = 0;
var obj14634_onTouchDown_loopCount = 0;
var obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj14634_droppedInsideTargetActions_2_loopCount = 0;
var obj14634_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14634_droppedInsideTargetActions_runningActionsCount = 0;
var obj14634_droppedInsideTargetActions_loopCount = 0;
var obj14759_onDrag_activeActionGroupIndex = -1;
var obj14759_onDrag_runningActionsCount = 0;
var obj14759_onDrag_loopCount = 0;
var obj14759_onTouchDown_activeActionGroupIndex = -1;
var obj14759_onTouchDown_runningActionsCount = 0;
var obj14759_onTouchDown_loopCount = 0;
var obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj14759_droppedInsideTargetActions_2_loopCount = 0;
var obj14759_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14759_droppedInsideTargetActions_runningActionsCount = 0;
var obj14759_droppedInsideTargetActions_loopCount = 0;
var obj14742_onDrag_activeActionGroupIndex = -1;
var obj14742_onDrag_runningActionsCount = 0;
var obj14742_onDrag_loopCount = 0;
var obj14742_onTouchDown_activeActionGroupIndex = -1;
var obj14742_onTouchDown_runningActionsCount = 0;
var obj14742_onTouchDown_loopCount = 0;
var obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj14742_droppedInsideTargetActions_2_loopCount = 0;
var obj14742_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14742_droppedInsideTargetActions_runningActionsCount = 0;
var obj14742_droppedInsideTargetActions_loopCount = 0;
var obj14699_onDrag_activeActionGroupIndex = -1;
var obj14699_onDrag_runningActionsCount = 0;
var obj14699_onDrag_loopCount = 0;
var obj14699_onTouchDown_activeActionGroupIndex = -1;
var obj14699_onTouchDown_runningActionsCount = 0;
var obj14699_onTouchDown_loopCount = 0;
var obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14699_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14699_droppedInsideTargetActions_runningActionsCount = 0;
var obj14699_droppedInsideTargetActions_loopCount = 0;
var obj14687_onDrag_activeActionGroupIndex = -1;
var obj14687_onDrag_runningActionsCount = 0;
var obj14687_onDrag_loopCount = 0;
var obj14687_onTouchDown_activeActionGroupIndex = -1;
var obj14687_onTouchDown_runningActionsCount = 0;
var obj14687_onTouchDown_loopCount = 0;
var obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14687_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14687_droppedInsideTargetActions_runningActionsCount = 0;
var obj14687_droppedInsideTargetActions_loopCount = 0;
var obj14675_onDrag_activeActionGroupIndex = -1;
var obj14675_onDrag_runningActionsCount = 0;
var obj14675_onDrag_loopCount = 0;
var obj14675_onTouchDown_activeActionGroupIndex = -1;
var obj14675_onTouchDown_runningActionsCount = 0;
var obj14675_onTouchDown_loopCount = 0;
var obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj14675_droppedInsideTargetActions_2_loopCount = 0;
var obj14675_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14675_droppedInsideTargetActions_runningActionsCount = 0;
var obj14675_droppedInsideTargetActions_loopCount = 0;
var obj14663_onDrag_activeActionGroupIndex = -1;
var obj14663_onDrag_runningActionsCount = 0;
var obj14663_onDrag_loopCount = 0;
var obj14663_onTouchDown_activeActionGroupIndex = -1;
var obj14663_onTouchDown_runningActionsCount = 0;
var obj14663_onTouchDown_loopCount = 0;
var obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14663_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14663_droppedInsideTargetActions_runningActionsCount = 0;
var obj14663_droppedInsideTargetActions_loopCount = 0;
var obj14651_onDrag_activeActionGroupIndex = -1;
var obj14651_onDrag_runningActionsCount = 0;
var obj14651_onDrag_loopCount = 0;
var obj14651_onTouchDown_activeActionGroupIndex = -1;
var obj14651_onTouchDown_runningActionsCount = 0;
var obj14651_onTouchDown_loopCount = 0;
var obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
var obj14651_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj14651_droppedInsideTargetActions_runningActionsCount = 0;
var obj14651_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj14150_counterValue = 0;
var obj14150_counterTargetValue = 4;
var obj14150_counterCanExceedTargetValue = false;
var obj14158_counterValue = 0;
var obj14158_counterTargetValue = 5;
var obj14158_counterCanExceedTargetValue = false;
var obj14161_counterValue = 0;
var obj14161_counterTargetValue = 6;
var obj14161_counterCanExceedTargetValue = false;
var obj14164_counterValue = 0;
var obj14164_counterTargetValue = 8;
var obj14164_counterCanExceedTargetValue = false;
var obj14172_counterValue = 0;
var obj14172_counterTargetValue = 1;
var obj14172_counterCanExceedTargetValue = false;
var obj14492_counterValue = 0;
var obj14492_counterTargetValue = 1;
var obj14492_counterCanExceedTargetValue = false;
var obj14489_counterValue = 0;
var obj14489_counterTargetValue = 2;
var obj14489_counterCanExceedTargetValue = false;
var obj14484_counterValue = 0;
var obj14484_counterTargetValue = 3;
var obj14484_counterCanExceedTargetValue = false;

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
		
obj14147_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14147_onTap_activeActionGroupIndex = -1;
		$("#obj14147").trigger("obj14147_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14147) {
				console.warn("de-queueing event obj14147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14147_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_14149();
function goToPage_14149() {
	window.obj14147_onTap_runningActionsCount = obj14147_onTap_runningActionsCount + 1;

	$("#anchor332")[0].click();
	window.obj14147_onTap_runningActionsCount = window.obj14147_onTap_runningActionsCount - 1;

if (window.obj14147_onTap_runningActionsCount < 0) {
	window.obj14147_onTap_runningActionsCount = 0;
} else if (window.obj14147_onTap_runningActionsCount == 0) {
	obj14147_onTap_actionGroup1();
}
}










































};
obj14147_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14147_onTap_activeActionGroupIndex = -1;
		$("#obj14147").trigger("obj14147_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14147) {
				console.warn("de-queueing event obj14147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14147_onTap_activeActionGroupIndex = 1;
	











































};
obj14150_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14150_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14150").trigger("obj14150_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14150) {
				console.warn("de-queueing event obj14150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14150_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_14152();
function wait_14152() {
	window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount = obj14150_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14150_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj14150_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14150_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14150").trigger("obj14150_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14150) {
				console.warn("de-queueing event obj14150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14150_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_14153();
function goToPage_14153() {
	window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount = obj14150_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor333")[0].click();
	window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14150_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14150_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj14150_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14150_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14150").trigger("obj14150_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14150) {
				console.warn("de-queueing event obj14150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14150_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj14158_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14158_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14158").trigger("obj14158_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14158) {
				console.warn("de-queueing event obj14158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14158_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14364 
hide_24543();
function hide_24543() {
	var selector = "#obj14364";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount = obj14158_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14158_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24543(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14158_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14158_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14158_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14158").trigger("obj14158_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14158) {
				console.warn("de-queueing event obj14158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14158_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj14172 
incrementCounter_14495();
function incrementCounter_14495() {
	window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount = obj14158_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14172_counterValue;
	obj14172_counterValue = obj14172_counterValue + 1;
	if (! obj14172_counterCanExceedTargetValue && obj14172_counterValue > obj14172_counterTargetValue) {
		obj14172_counterValue = obj14172_counterTargetValue;
	}

	if (oldValue != obj14172_counterValue) {
		$("#obj14172").trigger('SCEventCounterValueChange');
		$("#obj14172").trigger('SCEventCounterIncrease');
		if (obj14172_counterValue == obj14172_counterTargetValue)
			$("#obj14172").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14158_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14158_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}











};
obj14158_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14158_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14158").trigger("obj14158_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14158) {
				console.warn("de-queueing event obj14158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14158_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj14161_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14161_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14161").trigger("obj14161_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14161) {
				console.warn("de-queueing event obj14161." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14161").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14161_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14588 
hide_24544();
function hide_24544() {
	var selector = "#obj14588";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount = obj14161_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14161_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24544(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14161_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14161_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14161_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14161").trigger("obj14161_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14161) {
				console.warn("de-queueing event obj14161." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14161").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14161_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj14172 
incrementCounter_14621();
function incrementCounter_14621() {
	window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount = obj14161_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14172_counterValue;
	obj14172_counterValue = obj14172_counterValue + 1;
	if (! obj14172_counterCanExceedTargetValue && obj14172_counterValue > obj14172_counterTargetValue) {
		obj14172_counterValue = obj14172_counterTargetValue;
	}

	if (oldValue != obj14172_counterValue) {
		$("#obj14172").trigger('SCEventCounterValueChange');
		$("#obj14172").trigger('SCEventCounterIncrease');
		if (obj14172_counterValue == obj14172_counterTargetValue)
			$("#obj14172").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14161_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14161_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}











};
obj14161_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14161_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14161").trigger("obj14161_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14161) {
				console.warn("de-queueing event obj14161." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14161").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14161_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj14164_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14164_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14164").trigger("obj14164_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14164) {
				console.warn("de-queueing event obj14164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14164_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14738 
hide_24545();
function hide_24545() {
	var selector = "#obj14738";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount = obj14164_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14164_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24545(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14164_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14164_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14164_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14164").trigger("obj14164_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14164) {
				console.warn("de-queueing event obj14164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14164_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj14172 
incrementCounter_14622();
function incrementCounter_14622() {
	window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount = obj14164_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14172_counterValue;
	obj14172_counterValue = obj14172_counterValue + 1;
	if (! obj14172_counterCanExceedTargetValue && obj14172_counterValue > obj14172_counterTargetValue) {
		obj14172_counterValue = obj14172_counterTargetValue;
	}

	if (oldValue != obj14172_counterValue) {
		$("#obj14172").trigger('SCEventCounterValueChange');
		$("#obj14172").trigger('SCEventCounterIncrease');
		if (obj14172_counterValue == obj14172_counterTargetValue)
			$("#obj14172").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14164_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14164_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}











};
obj14164_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14164_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14164").trigger("obj14164_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14164) {
				console.warn("de-queueing event obj14164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14164_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj14172_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14172_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14172").trigger("obj14172_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14172) {
				console.warn("de-queueing event obj14172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14172_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj14484 
incrementCounter_14174();
function incrementCounter_14174() {
	window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = obj14172_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14484_counterValue;
	obj14484_counterValue = obj14484_counterValue + 1;
	if (! obj14484_counterCanExceedTargetValue && obj14484_counterValue > obj14484_counterTargetValue) {
		obj14484_counterValue = obj14484_counterTargetValue;
	}

	if (oldValue != obj14484_counterValue) {
		$("#obj14484").trigger('SCEventCounterValueChange');
		$("#obj14484").trigger('SCEventCounterIncrease');
		if (obj14484_counterValue == obj14484_counterTargetValue)
			$("#obj14484").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14172_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj14489 
incrementCounter_14175();
function incrementCounter_14175() {
	window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = obj14172_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14489_counterValue;
	obj14489_counterValue = obj14489_counterValue + 1;
	if (! obj14489_counterCanExceedTargetValue && obj14489_counterValue > obj14489_counterTargetValue) {
		obj14489_counterValue = obj14489_counterTargetValue;
	}

	if (oldValue != obj14489_counterValue) {
		$("#obj14489").trigger('SCEventCounterValueChange');
		$("#obj14489").trigger('SCEventCounterIncrease');
		if (obj14489_counterValue == obj14489_counterTargetValue)
			$("#obj14489").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14172_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj14492 
incrementCounter_14176();
function incrementCounter_14176() {
	window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = obj14172_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14492_counterValue;
	obj14492_counterValue = obj14492_counterValue + 1;
	if (! obj14492_counterCanExceedTargetValue && obj14492_counterValue > obj14492_counterTargetValue) {
		obj14492_counterValue = obj14492_counterTargetValue;
	}

	if (oldValue != obj14492_counterValue) {
		$("#obj14492").trigger('SCEventCounterValueChange');
		$("#obj14492").trigger('SCEventCounterIncrease');
		if (obj14492_counterValue == obj14492_counterTargetValue)
			$("#obj14492").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14172_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj14172_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14172_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14172").trigger("obj14172_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14172) {
				console.warn("de-queueing event obj14172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14172_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj14172 
decrementCounter_14178();
function decrementCounter_14178() {
	window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = obj14172_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj14172_counterValue;
	obj14172_counterValue = obj14172_counterValue - 1;
	if (obj14172_counterValue < 0) {
		obj14172_counterValue = 0;
	}

	if (oldValue != obj14172_counterValue) {
		$("#obj14172").trigger('SCEventCounterValueChange');
		$("#obj14172").trigger('SCEventCounterDecrease');
		if (obj14172_counterValue == obj14172_counterTargetValue)
			$("#obj14172").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14172_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14172_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj14172_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14172_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14172").trigger("obj14172_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14172) {
				console.warn("de-queueing event obj14172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14172_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj14366_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14366_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14366");

//	action: dragDrop
//	target: obj14366 
dragDrop_14371();
function dragDrop_14371() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14366_onTouchDown_runningActionsCount = obj14366_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14366');
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
    	window.obj14366_onTouchDown_runningActionsCount = window.obj14366_onTouchDown_runningActionsCount - 1;

if (window.obj14366_onTouchDown_runningActionsCount < 0) {
	window.obj14366_onTouchDown_runningActionsCount = 0;
} else if (window.obj14366_onTouchDown_runningActionsCount == 0) {
	obj14366_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14390");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14371 = false;
    	var dropped_id_14371;
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
					dropped_14371 = true;
					dropped_id_14371 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14371) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14366").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14366_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14366_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14409();
function playAudioFile_14409() {
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14409")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14409");
			$("#obj_audio_playSoundFile14409").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14366 
move_14410();
function move_14410() {
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14366");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 717;
	var moveY = 199;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14366_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14366 
hide_14406();
function hide_14406() {
	var selector = "#obj14366";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14366_droppedInsideTargetActions_runningActionsCount = obj14366_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14366_droppedInsideTargetActions_runningActionsCount = window.obj14366_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14366_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14366_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14406(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14366_droppedInsideTargetActions_runningActionsCount = window.obj14366_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14366_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14366_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14366_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14405();
function playAudioFile_14405() {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = obj14366_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14405")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14405");
			$("#obj_audio_playSoundFile14405").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14366_droppedInsideTargetActions_runningActionsCount = window.obj14366_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14366_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14366_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14366_droppedInsideTargetActions_runningActionsCount = window.obj14366_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14366_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14366_droppedInsideTargetActions_actionGroup2();
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
				window.obj14366_droppedInsideTargetActions_runningActionsCount = window.obj14366_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14366_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14366_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14366_droppedInsideTargetActions_runningActionsCount = window.obj14366_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14366_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14366_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14366_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14386
(function(){
	window.obj14366_droppedInsideTargetActions_runningActionsCount = obj14366_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14386";
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
					window.obj14366_droppedInsideTargetActions_runningActionsCount = window.obj14366_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14366_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14366_droppedInsideTargetActions_actionGroup3();
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
				window.obj14366_droppedInsideTargetActions_runningActionsCount = window.obj14366_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14366_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14366_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14366_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14158 
incrementCounter_14433();
function incrementCounter_14433() {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = obj14366_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14158_counterValue;
	obj14158_counterValue = obj14158_counterValue + 1;
	if (! obj14158_counterCanExceedTargetValue && obj14158_counterValue > obj14158_counterTargetValue) {
		obj14158_counterValue = obj14158_counterTargetValue;
	}

	if (oldValue != obj14158_counterValue) {
		$("#obj14158").trigger('SCEventCounterValueChange');
		$("#obj14158").trigger('SCEventCounterIncrease');
		if (obj14158_counterValue == obj14158_counterTargetValue)
			$("#obj14158").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14366_droppedInsideTargetActions_runningActionsCount = window.obj14366_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14366_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14366_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14366_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14366_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14366_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14366").trigger("obj14366_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14366) {
				console.warn("de-queueing event obj14366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14366_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14434_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14434_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14434");

//	action: dragDrop
//	target: obj14434 
dragDrop_14437();
function dragDrop_14437() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14434_onTouchDown_runningActionsCount = obj14434_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14434');
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
    	window.obj14434_onTouchDown_runningActionsCount = window.obj14434_onTouchDown_runningActionsCount - 1;

if (window.obj14434_onTouchDown_runningActionsCount < 0) {
	window.obj14434_onTouchDown_runningActionsCount = 0;
} else if (window.obj14434_onTouchDown_runningActionsCount == 0) {
	obj14434_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14402");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14437 = false;
    	var dropped_id_14437;
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
					dropped_14437 = true;
					dropped_id_14437 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14437) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14434").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14434_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14434_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14444();
function playAudioFile_14444() {
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14444")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14444");
			$("#obj_audio_playSoundFile14444").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14434 
move_14445();
function move_14445() {
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14434");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 791;
	var moveY = 199;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14434_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14434 
hide_14439();
function hide_14439() {
	var selector = "#obj14434";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14434_droppedInsideTargetActions_runningActionsCount = obj14434_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14434_droppedInsideTargetActions_runningActionsCount = window.obj14434_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14434_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14434_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14439(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14434_droppedInsideTargetActions_runningActionsCount = window.obj14434_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14434_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14434_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14434_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14440();
function playAudioFile_14440() {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = obj14434_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14440")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14440");
			$("#obj_audio_playSoundFile14440").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14434_droppedInsideTargetActions_runningActionsCount = window.obj14434_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14434_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14434_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14434_droppedInsideTargetActions_runningActionsCount = window.obj14434_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14434_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14434_droppedInsideTargetActions_actionGroup2();
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
				window.obj14434_droppedInsideTargetActions_runningActionsCount = window.obj14434_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14434_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14434_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14434_droppedInsideTargetActions_runningActionsCount = window.obj14434_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14434_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14434_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14434_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14398
(function(){
	window.obj14434_droppedInsideTargetActions_runningActionsCount = obj14434_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14398";
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
					window.obj14434_droppedInsideTargetActions_runningActionsCount = window.obj14434_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14434_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14434_droppedInsideTargetActions_actionGroup3();
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
				window.obj14434_droppedInsideTargetActions_runningActionsCount = window.obj14434_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14434_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14434_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14434_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14158 
incrementCounter_14442();
function incrementCounter_14442() {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = obj14434_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14158_counterValue;
	obj14158_counterValue = obj14158_counterValue + 1;
	if (! obj14158_counterCanExceedTargetValue && obj14158_counterValue > obj14158_counterTargetValue) {
		obj14158_counterValue = obj14158_counterTargetValue;
	}

	if (oldValue != obj14158_counterValue) {
		$("#obj14158").trigger('SCEventCounterValueChange');
		$("#obj14158").trigger('SCEventCounterIncrease');
		if (obj14158_counterValue == obj14158_counterTargetValue)
			$("#obj14158").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14434_droppedInsideTargetActions_runningActionsCount = window.obj14434_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14434_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14434_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14434_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14434_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14434_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14434) {
				console.warn("de-queueing event obj14434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14434_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14460_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14460_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14460");

//	action: dragDrop
//	target: obj14460 
dragDrop_14463();
function dragDrop_14463() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14460_onTouchDown_runningActionsCount = obj14460_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14460');
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
    	window.obj14460_onTouchDown_runningActionsCount = window.obj14460_onTouchDown_runningActionsCount - 1;

if (window.obj14460_onTouchDown_runningActionsCount < 0) {
	window.obj14460_onTouchDown_runningActionsCount = 0;
} else if (window.obj14460_onTouchDown_runningActionsCount == 0) {
	obj14460_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14378");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14463 = false;
    	var dropped_id_14463;
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
					dropped_14463 = true;
					dropped_id_14463 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14463) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14460").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14460_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14460_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14470();
function playAudioFile_14470() {
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14470")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14470");
			$("#obj_audio_playSoundFile14470").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14460 
move_14471();
function move_14471() {
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14460");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 867;
	var moveY = 199;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14460_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14460 
hide_14465();
function hide_14465() {
	var selector = "#obj14460";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14460_droppedInsideTargetActions_runningActionsCount = obj14460_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14460_droppedInsideTargetActions_runningActionsCount = window.obj14460_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14460_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14460_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14465(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14460_droppedInsideTargetActions_runningActionsCount = window.obj14460_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14460_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14460_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14460_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14466();
function playAudioFile_14466() {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = obj14460_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14466")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14466");
			$("#obj_audio_playSoundFile14466").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14460_droppedInsideTargetActions_runningActionsCount = window.obj14460_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14460_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14460_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14460_droppedInsideTargetActions_runningActionsCount = window.obj14460_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14460_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14460_droppedInsideTargetActions_actionGroup2();
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
				window.obj14460_droppedInsideTargetActions_runningActionsCount = window.obj14460_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14460_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14460_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14460_droppedInsideTargetActions_runningActionsCount = window.obj14460_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14460_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14460_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14460_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14372
(function(){
	window.obj14460_droppedInsideTargetActions_runningActionsCount = obj14460_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14372";
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
					window.obj14460_droppedInsideTargetActions_runningActionsCount = window.obj14460_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14460_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14460_droppedInsideTargetActions_actionGroup3();
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
				window.obj14460_droppedInsideTargetActions_runningActionsCount = window.obj14460_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14460_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14460_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14460_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14158 
incrementCounter_14468();
function incrementCounter_14468() {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = obj14460_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14158_counterValue;
	obj14158_counterValue = obj14158_counterValue + 1;
	if (! obj14158_counterCanExceedTargetValue && obj14158_counterValue > obj14158_counterTargetValue) {
		obj14158_counterValue = obj14158_counterTargetValue;
	}

	if (oldValue != obj14158_counterValue) {
		$("#obj14158").trigger('SCEventCounterValueChange');
		$("#obj14158").trigger('SCEventCounterIncrease');
		if (obj14158_counterValue == obj14158_counterTargetValue)
			$("#obj14158").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14460_droppedInsideTargetActions_runningActionsCount = window.obj14460_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14460_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14460_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14460_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14460_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14460_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14460").trigger("obj14460_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14460) {
				console.warn("de-queueing event obj14460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14460_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14448_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14448_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14448");

//	action: dragDrop
//	target: obj14448 
dragDrop_14451();
function dragDrop_14451() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14448_onTouchDown_runningActionsCount = obj14448_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14448');
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
    	window.obj14448_onTouchDown_runningActionsCount = window.obj14448_onTouchDown_runningActionsCount - 1;

if (window.obj14448_onTouchDown_runningActionsCount < 0) {
	window.obj14448_onTouchDown_runningActionsCount = 0;
} else if (window.obj14448_onTouchDown_runningActionsCount == 0) {
	obj14448_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14396");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14451 = false;
    	var dropped_id_14451;
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
					dropped_14451 = true;
					dropped_id_14451 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14451) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14448").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14448_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14448_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14458();
function playAudioFile_14458() {
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14458")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14458");
			$("#obj_audio_playSoundFile14458").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14448 
move_14459();
function move_14459() {
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14448");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 944;
	var moveY = 199;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14448_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14448 
hide_14453();
function hide_14453() {
	var selector = "#obj14448";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14448_droppedInsideTargetActions_runningActionsCount = obj14448_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14448_droppedInsideTargetActions_runningActionsCount = window.obj14448_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14448_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14448_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14453(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14448_droppedInsideTargetActions_runningActionsCount = window.obj14448_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14448_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14448_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14448_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14454();
function playAudioFile_14454() {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = obj14448_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14454")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14454");
			$("#obj_audio_playSoundFile14454").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14448_droppedInsideTargetActions_runningActionsCount = window.obj14448_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14448_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14448_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14448_droppedInsideTargetActions_runningActionsCount = window.obj14448_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14448_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14448_droppedInsideTargetActions_actionGroup2();
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
				window.obj14448_droppedInsideTargetActions_runningActionsCount = window.obj14448_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14448_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14448_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14448_droppedInsideTargetActions_runningActionsCount = window.obj14448_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14448_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14448_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14448_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14392
(function(){
	window.obj14448_droppedInsideTargetActions_runningActionsCount = obj14448_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14392";
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
					window.obj14448_droppedInsideTargetActions_runningActionsCount = window.obj14448_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14448_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14448_droppedInsideTargetActions_actionGroup3();
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
				window.obj14448_droppedInsideTargetActions_runningActionsCount = window.obj14448_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14448_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14448_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14448_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14158 
incrementCounter_14456();
function incrementCounter_14456() {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = obj14448_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14158_counterValue;
	obj14158_counterValue = obj14158_counterValue + 1;
	if (! obj14158_counterCanExceedTargetValue && obj14158_counterValue > obj14158_counterTargetValue) {
		obj14158_counterValue = obj14158_counterTargetValue;
	}

	if (oldValue != obj14158_counterValue) {
		$("#obj14158").trigger('SCEventCounterValueChange');
		$("#obj14158").trigger('SCEventCounterIncrease');
		if (obj14158_counterValue == obj14158_counterTargetValue)
			$("#obj14158").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14448_droppedInsideTargetActions_runningActionsCount = window.obj14448_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14448_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14448_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14448_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14448_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14448_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14448").trigger("obj14448_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14448) {
				console.warn("de-queueing event obj14448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14448_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14472_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14472_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14472");

//	action: dragDrop
//	target: obj14472 
dragDrop_14475();
function dragDrop_14475() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14472_onTouchDown_runningActionsCount = obj14472_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14472');
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
    	window.obj14472_onTouchDown_runningActionsCount = window.obj14472_onTouchDown_runningActionsCount - 1;

if (window.obj14472_onTouchDown_runningActionsCount < 0) {
	window.obj14472_onTouchDown_runningActionsCount = 0;
} else if (window.obj14472_onTouchDown_runningActionsCount == 0) {
	obj14472_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14384");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14475 = false;
    	var dropped_id_14475;
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
					dropped_14475 = true;
					dropped_id_14475 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14475) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14472").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14472_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14472_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14482();
function playAudioFile_14482() {
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14482")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14482");
			$("#obj_audio_playSoundFile14482").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14472 
move_14483();
function move_14483() {
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14472");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1021;
	var moveY = 199;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14472_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14472 
hide_14477();
function hide_14477() {
	var selector = "#obj14472";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14472_droppedInsideTargetActions_runningActionsCount = obj14472_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14472_droppedInsideTargetActions_runningActionsCount = window.obj14472_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14472_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14472_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14477(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14472_droppedInsideTargetActions_runningActionsCount = window.obj14472_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14472_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14472_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14472_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14478();
function playAudioFile_14478() {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = obj14472_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14478")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14478");
			$("#obj_audio_playSoundFile14478").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14472_droppedInsideTargetActions_runningActionsCount = window.obj14472_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14472_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14472_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14472_droppedInsideTargetActions_runningActionsCount = window.obj14472_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14472_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14472_droppedInsideTargetActions_actionGroup2();
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
				window.obj14472_droppedInsideTargetActions_runningActionsCount = window.obj14472_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14472_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14472_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14472_droppedInsideTargetActions_runningActionsCount = window.obj14472_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14472_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14472_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14472_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14380
(function(){
	window.obj14472_droppedInsideTargetActions_runningActionsCount = obj14472_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14380";
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
					window.obj14472_droppedInsideTargetActions_runningActionsCount = window.obj14472_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14472_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14472_droppedInsideTargetActions_actionGroup3();
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
				window.obj14472_droppedInsideTargetActions_runningActionsCount = window.obj14472_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14472_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14472_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14472_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14158 
incrementCounter_14480();
function incrementCounter_14480() {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = obj14472_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14158_counterValue;
	obj14158_counterValue = obj14158_counterValue + 1;
	if (! obj14158_counterCanExceedTargetValue && obj14158_counterValue > obj14158_counterTargetValue) {
		obj14158_counterValue = obj14158_counterTargetValue;
	}

	if (oldValue != obj14158_counterValue) {
		$("#obj14158").trigger('SCEventCounterValueChange');
		$("#obj14158").trigger('SCEventCounterIncrease');
		if (obj14158_counterValue == obj14158_counterTargetValue)
			$("#obj14158").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14472_droppedInsideTargetActions_runningActionsCount = window.obj14472_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14472_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14472_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14472_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14472_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14472_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14472").trigger("obj14472_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14472) {
				console.warn("de-queueing event obj14472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14472_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14492_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14492_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14492").trigger("obj14492_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14492) {
				console.warn("de-queueing event obj14492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14492_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_14494();
function switchText_14494() {
	window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount = obj14492_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/3</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14156_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14156_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14156").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14156_content");
			setTimeout(function () {
				window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14492_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14156 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14492_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14492_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj14492_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14492_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14492").trigger("obj14492_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14492) {
				console.warn("de-queueing event obj14492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14492_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj14489_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14489_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14489").trigger("obj14489_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14489) {
				console.warn("de-queueing event obj14489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14489_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_14491();
function switchText_14491() {
	window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount = obj14489_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/3</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14156_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14156_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14156").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14156_content");
			setTimeout(function () {
				window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14489_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14156 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14489_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14489_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj14489_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14489_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14489").trigger("obj14489_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14489) {
				console.warn("de-queueing event obj14489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14489_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj14484_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14484").trigger("obj14484_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14484) {
				console.warn("de-queueing event obj14484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_14486();
function switchText_14486() {
	window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = obj14484_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/3</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14156_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14156_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14156").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14156_content");
			setTimeout(function () {
				window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14484_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14156 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14484_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj14484_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14484").trigger("obj14484_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14484) {
				console.warn("de-queueing event obj14484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
















//	action: wait
wait_14487();
function wait_14487() {
	window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = obj14484_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14484_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1000);
}


























};
obj14484_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14484").trigger("obj14484_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14484) {
				console.warn("de-queueing event obj14484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_14488();
function goToPage_14488() {
	window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = obj14484_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor344")[0].click();
	window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj14484_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj14484_SCEventCounterReachedTargetValue_actionGroup3();
}
}










































};
obj14484_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj14484").trigger("obj14484_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14484) {
				console.warn("de-queueing event obj14484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj14549_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14549_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14549");

//	action: dragDrop
//	target: obj14549 
dragDrop_14552();
function dragDrop_14552() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14549_onTouchDown_runningActionsCount = obj14549_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14549');
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
    	window.obj14549_onTouchDown_runningActionsCount = window.obj14549_onTouchDown_runningActionsCount - 1;

if (window.obj14549_onTouchDown_runningActionsCount < 0) {
	window.obj14549_onTouchDown_runningActionsCount = 0;
} else if (window.obj14549_onTouchDown_runningActionsCount == 0) {
	obj14549_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14608");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14552 = false;
    	var dropped_id_14552;
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
					dropped_14552 = true;
					dropped_id_14552 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14552) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14549").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14549_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14549_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14559();
function playAudioFile_14559() {
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14559")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14559");
			$("#obj_audio_playSoundFile14559").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14549 
move_14560();
function move_14560() {
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14549");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 717;
	var moveY = 440;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14549_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14549 
hide_14554();
function hide_14554() {
	var selector = "#obj14549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14549_droppedInsideTargetActions_runningActionsCount = obj14549_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14549_droppedInsideTargetActions_runningActionsCount = window.obj14549_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14549_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14549_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14554(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14549_droppedInsideTargetActions_runningActionsCount = window.obj14549_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14549_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14549_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14549_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14555();
function playAudioFile_14555() {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = obj14549_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14555")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14555");
			$("#obj_audio_playSoundFile14555").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14549_droppedInsideTargetActions_runningActionsCount = window.obj14549_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14549_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14549_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14549_droppedInsideTargetActions_runningActionsCount = window.obj14549_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14549_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14549_droppedInsideTargetActions_actionGroup2();
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
				window.obj14549_droppedInsideTargetActions_runningActionsCount = window.obj14549_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14549_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14549_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14549_droppedInsideTargetActions_runningActionsCount = window.obj14549_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14549_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14549_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14549_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14605
(function(){
	window.obj14549_droppedInsideTargetActions_runningActionsCount = obj14549_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14605";
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
					window.obj14549_droppedInsideTargetActions_runningActionsCount = window.obj14549_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14549_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14549_droppedInsideTargetActions_actionGroup3();
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
				window.obj14549_droppedInsideTargetActions_runningActionsCount = window.obj14549_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14549_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14549_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14549_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14161 
incrementCounter_14557();
function incrementCounter_14557() {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = obj14549_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14161_counterValue;
	obj14161_counterValue = obj14161_counterValue + 1;
	if (! obj14161_counterCanExceedTargetValue && obj14161_counterValue > obj14161_counterTargetValue) {
		obj14161_counterValue = obj14161_counterTargetValue;
	}

	if (oldValue != obj14161_counterValue) {
		$("#obj14161").trigger('SCEventCounterValueChange');
		$("#obj14161").trigger('SCEventCounterIncrease');
		if (obj14161_counterValue == obj14161_counterTargetValue)
			$("#obj14161").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14549_droppedInsideTargetActions_runningActionsCount = window.obj14549_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14549_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14549_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14549_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14549_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14549_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14549").trigger("obj14549_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14549) {
				console.warn("de-queueing event obj14549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14549_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14537_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14537_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14537");

//	action: dragDrop
//	target: obj14537 
dragDrop_14540();
function dragDrop_14540() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14537_onTouchDown_runningActionsCount = obj14537_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14537');
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
    	window.obj14537_onTouchDown_runningActionsCount = window.obj14537_onTouchDown_runningActionsCount - 1;

if (window.obj14537_onTouchDown_runningActionsCount < 0) {
	window.obj14537_onTouchDown_runningActionsCount = 0;
} else if (window.obj14537_onTouchDown_runningActionsCount == 0) {
	obj14537_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14569");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14540 = false;
    	var dropped_id_14540;
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
					dropped_14540 = true;
					dropped_id_14540 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14540) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14537").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14537_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14537_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14547();
function playAudioFile_14547() {
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14547")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14547");
			$("#obj_audio_playSoundFile14547").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14537 
move_14548();
function move_14548() {
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14537");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 791;
	var moveY = 440;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14537_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14537 
hide_14542();
function hide_14542() {
	var selector = "#obj14537";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14537_droppedInsideTargetActions_runningActionsCount = obj14537_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14537_droppedInsideTargetActions_runningActionsCount = window.obj14537_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14537_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14537_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14542(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14537_droppedInsideTargetActions_runningActionsCount = window.obj14537_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14537_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14537_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14537_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14543();
function playAudioFile_14543() {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = obj14537_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14543")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14543");
			$("#obj_audio_playSoundFile14543").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14537_droppedInsideTargetActions_runningActionsCount = window.obj14537_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14537_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14537_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14537_droppedInsideTargetActions_runningActionsCount = window.obj14537_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14537_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14537_droppedInsideTargetActions_actionGroup2();
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
				window.obj14537_droppedInsideTargetActions_runningActionsCount = window.obj14537_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14537_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14537_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14537_droppedInsideTargetActions_runningActionsCount = window.obj14537_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14537_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14537_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14537_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14566
(function(){
	window.obj14537_droppedInsideTargetActions_runningActionsCount = obj14537_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14566";
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
					window.obj14537_droppedInsideTargetActions_runningActionsCount = window.obj14537_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14537_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14537_droppedInsideTargetActions_actionGroup3();
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
				window.obj14537_droppedInsideTargetActions_runningActionsCount = window.obj14537_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14537_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14537_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14537_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14161 
incrementCounter_14545();
function incrementCounter_14545() {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = obj14537_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14161_counterValue;
	obj14161_counterValue = obj14161_counterValue + 1;
	if (! obj14161_counterCanExceedTargetValue && obj14161_counterValue > obj14161_counterTargetValue) {
		obj14161_counterValue = obj14161_counterTargetValue;
	}

	if (oldValue != obj14161_counterValue) {
		$("#obj14161").trigger('SCEventCounterValueChange');
		$("#obj14161").trigger('SCEventCounterIncrease');
		if (obj14161_counterValue == obj14161_counterTargetValue)
			$("#obj14161").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14537_droppedInsideTargetActions_runningActionsCount = window.obj14537_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14537_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14537_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14537_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14537_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14537_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14537").trigger("obj14537_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14537) {
				console.warn("de-queueing event obj14537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14537_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14525_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14525_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14525");

//	action: dragDrop
//	target: obj14525 
dragDrop_14528();
function dragDrop_14528() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14525_onTouchDown_runningActionsCount = obj14525_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14525');
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
    	window.obj14525_onTouchDown_runningActionsCount = window.obj14525_onTouchDown_runningActionsCount - 1;

if (window.obj14525_onTouchDown_runningActionsCount < 0) {
	window.obj14525_onTouchDown_runningActionsCount = 0;
} else if (window.obj14525_onTouchDown_runningActionsCount == 0) {
	obj14525_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14584");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14528 = false;
    	var dropped_id_14528;
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
					dropped_14528 = true;
					dropped_id_14528 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14528) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14525").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14525_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14525_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14535();
function playAudioFile_14535() {
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14535")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14535");
			$("#obj_audio_playSoundFile14535").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14525 
move_14536();
function move_14536() {
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14525");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 867;
	var moveY = 440;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14525_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14525 
hide_14530();
function hide_14530() {
	var selector = "#obj14525";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14525_droppedInsideTargetActions_runningActionsCount = obj14525_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14525_droppedInsideTargetActions_runningActionsCount = window.obj14525_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14525_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14525_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14530(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14525_droppedInsideTargetActions_runningActionsCount = window.obj14525_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14525_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14525_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14525_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14531();
function playAudioFile_14531() {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = obj14525_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14531")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14531");
			$("#obj_audio_playSoundFile14531").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14525_droppedInsideTargetActions_runningActionsCount = window.obj14525_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14525_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14525_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14525_droppedInsideTargetActions_runningActionsCount = window.obj14525_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14525_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14525_droppedInsideTargetActions_actionGroup2();
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
				window.obj14525_droppedInsideTargetActions_runningActionsCount = window.obj14525_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14525_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14525_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14525_droppedInsideTargetActions_runningActionsCount = window.obj14525_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14525_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14525_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14525_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14581
(function(){
	window.obj14525_droppedInsideTargetActions_runningActionsCount = obj14525_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14581";
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
					window.obj14525_droppedInsideTargetActions_runningActionsCount = window.obj14525_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14525_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14525_droppedInsideTargetActions_actionGroup3();
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
				window.obj14525_droppedInsideTargetActions_runningActionsCount = window.obj14525_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14525_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14525_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14525_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14161 
incrementCounter_14533();
function incrementCounter_14533() {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = obj14525_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14161_counterValue;
	obj14161_counterValue = obj14161_counterValue + 1;
	if (! obj14161_counterCanExceedTargetValue && obj14161_counterValue > obj14161_counterTargetValue) {
		obj14161_counterValue = obj14161_counterTargetValue;
	}

	if (oldValue != obj14161_counterValue) {
		$("#obj14161").trigger('SCEventCounterValueChange');
		$("#obj14161").trigger('SCEventCounterIncrease');
		if (obj14161_counterValue == obj14161_counterTargetValue)
			$("#obj14161").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14525_droppedInsideTargetActions_runningActionsCount = window.obj14525_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14525_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14525_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14525_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14525_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14525_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14525").trigger("obj14525_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14525) {
				console.warn("de-queueing event obj14525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14525_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14513_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14513_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14513");

//	action: dragDrop
//	target: obj14513 
dragDrop_14516();
function dragDrop_14516() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14513_onTouchDown_runningActionsCount = obj14513_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14513');
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
    	window.obj14513_onTouchDown_runningActionsCount = window.obj14513_onTouchDown_runningActionsCount - 1;

if (window.obj14513_onTouchDown_runningActionsCount < 0) {
	window.obj14513_onTouchDown_runningActionsCount = 0;
} else if (window.obj14513_onTouchDown_runningActionsCount == 0) {
	obj14513_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14564");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14516 = false;
    	var dropped_id_14516;
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
					dropped_14516 = true;
					dropped_id_14516 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14516) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14513").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14513_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14513_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14523();
function playAudioFile_14523() {
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14523")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14523");
			$("#obj_audio_playSoundFile14523").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14513 
move_14524();
function move_14524() {
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14513");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 944;
	var moveY = 440;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14513_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14513 
hide_14518();
function hide_14518() {
	var selector = "#obj14513";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14513_droppedInsideTargetActions_runningActionsCount = obj14513_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14513_droppedInsideTargetActions_runningActionsCount = window.obj14513_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14513_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14513_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14518(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14513_droppedInsideTargetActions_runningActionsCount = window.obj14513_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14513_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14513_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14513_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14519();
function playAudioFile_14519() {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = obj14513_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14519")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14519");
			$("#obj_audio_playSoundFile14519").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14513_droppedInsideTargetActions_runningActionsCount = window.obj14513_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14513_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14513_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14513_droppedInsideTargetActions_runningActionsCount = window.obj14513_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14513_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14513_droppedInsideTargetActions_actionGroup2();
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
				window.obj14513_droppedInsideTargetActions_runningActionsCount = window.obj14513_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14513_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14513_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14513_droppedInsideTargetActions_runningActionsCount = window.obj14513_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14513_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14513_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14513_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14561
(function(){
	window.obj14513_droppedInsideTargetActions_runningActionsCount = obj14513_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14561";
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
					window.obj14513_droppedInsideTargetActions_runningActionsCount = window.obj14513_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14513_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14513_droppedInsideTargetActions_actionGroup3();
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
				window.obj14513_droppedInsideTargetActions_runningActionsCount = window.obj14513_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14513_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14513_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14513_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14161 
incrementCounter_14521();
function incrementCounter_14521() {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = obj14513_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14161_counterValue;
	obj14161_counterValue = obj14161_counterValue + 1;
	if (! obj14161_counterCanExceedTargetValue && obj14161_counterValue > obj14161_counterTargetValue) {
		obj14161_counterValue = obj14161_counterTargetValue;
	}

	if (oldValue != obj14161_counterValue) {
		$("#obj14161").trigger('SCEventCounterValueChange');
		$("#obj14161").trigger('SCEventCounterIncrease');
		if (obj14161_counterValue == obj14161_counterTargetValue)
			$("#obj14161").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14513_droppedInsideTargetActions_runningActionsCount = window.obj14513_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14513_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14513_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14513_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14513_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14513_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14513").trigger("obj14513_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14513) {
				console.warn("de-queueing event obj14513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14513_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14501_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14501_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14501");

//	action: dragDrop
//	target: obj14501 
dragDrop_14504();
function dragDrop_14504() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14501_onTouchDown_runningActionsCount = obj14501_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14501');
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
    	window.obj14501_onTouchDown_runningActionsCount = window.obj14501_onTouchDown_runningActionsCount - 1;

if (window.obj14501_onTouchDown_runningActionsCount < 0) {
	window.obj14501_onTouchDown_runningActionsCount = 0;
} else if (window.obj14501_onTouchDown_runningActionsCount == 0) {
	obj14501_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14574");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14504 = false;
    	var dropped_id_14504;
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
					dropped_14504 = true;
					dropped_id_14504 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14504) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14501").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14501_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14501_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14511();
function playAudioFile_14511() {
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14511")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14511");
			$("#obj_audio_playSoundFile14511").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14501 
move_14512();
function move_14512() {
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14501");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1021;
	var moveY = 440;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14501_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14501 
hide_14506();
function hide_14506() {
	var selector = "#obj14501";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14501_droppedInsideTargetActions_runningActionsCount = obj14501_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14501_droppedInsideTargetActions_runningActionsCount = window.obj14501_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14501_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14501_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14506(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14501_droppedInsideTargetActions_runningActionsCount = window.obj14501_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14501_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14501_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14501_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14507();
function playAudioFile_14507() {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = obj14501_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14507")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14507");
			$("#obj_audio_playSoundFile14507").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14501_droppedInsideTargetActions_runningActionsCount = window.obj14501_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14501_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14501_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14501_droppedInsideTargetActions_runningActionsCount = window.obj14501_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14501_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14501_droppedInsideTargetActions_actionGroup2();
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
				window.obj14501_droppedInsideTargetActions_runningActionsCount = window.obj14501_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14501_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14501_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14501_droppedInsideTargetActions_runningActionsCount = window.obj14501_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14501_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14501_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14501_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14571
(function(){
	window.obj14501_droppedInsideTargetActions_runningActionsCount = obj14501_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14571";
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
					window.obj14501_droppedInsideTargetActions_runningActionsCount = window.obj14501_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14501_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14501_droppedInsideTargetActions_actionGroup3();
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
				window.obj14501_droppedInsideTargetActions_runningActionsCount = window.obj14501_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14501_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14501_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14501_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14161 
incrementCounter_14509();
function incrementCounter_14509() {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = obj14501_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14161_counterValue;
	obj14161_counterValue = obj14161_counterValue + 1;
	if (! obj14161_counterCanExceedTargetValue && obj14161_counterValue > obj14161_counterTargetValue) {
		obj14161_counterValue = obj14161_counterTargetValue;
	}

	if (oldValue != obj14161_counterValue) {
		$("#obj14161").trigger('SCEventCounterValueChange');
		$("#obj14161").trigger('SCEventCounterIncrease');
		if (obj14161_counterValue == obj14161_counterTargetValue)
			$("#obj14161").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14501_droppedInsideTargetActions_runningActionsCount = window.obj14501_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14501_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14501_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14501_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14501_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14501_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14501").trigger("obj14501_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14501) {
				console.warn("de-queueing event obj14501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14501_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14593_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14593_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14593");

//	action: dragDrop
//	target: obj14593 
dragDrop_14596();
function dragDrop_14596() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14593_onTouchDown_runningActionsCount = obj14593_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14593');
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
    	window.obj14593_onTouchDown_runningActionsCount = window.obj14593_onTouchDown_runningActionsCount - 1;

if (window.obj14593_onTouchDown_runningActionsCount < 0) {
	window.obj14593_onTouchDown_runningActionsCount = 0;
} else if (window.obj14593_onTouchDown_runningActionsCount == 0) {
	obj14593_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14579");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14596 = false;
    	var dropped_id_14596;
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
					dropped_14596 = true;
					dropped_id_14596 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14596) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14593").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14593_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14593_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14603();
function playAudioFile_14603() {
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14603")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14603");
			$("#obj_audio_playSoundFile14603").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14593 
move_14604();
function move_14604() {
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14593");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1098;
	var moveY = 440;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14593_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14593 
hide_14598();
function hide_14598() {
	var selector = "#obj14593";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14593_droppedInsideTargetActions_runningActionsCount = obj14593_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14593_droppedInsideTargetActions_runningActionsCount = window.obj14593_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14593_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14593_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14598(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14593_droppedInsideTargetActions_runningActionsCount = window.obj14593_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14593_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14593_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14593_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14599();
function playAudioFile_14599() {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = obj14593_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14599")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14599");
			$("#obj_audio_playSoundFile14599").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14593_droppedInsideTargetActions_runningActionsCount = window.obj14593_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14593_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14593_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14593_droppedInsideTargetActions_runningActionsCount = window.obj14593_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14593_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14593_droppedInsideTargetActions_actionGroup2();
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
				window.obj14593_droppedInsideTargetActions_runningActionsCount = window.obj14593_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14593_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14593_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14593_droppedInsideTargetActions_runningActionsCount = window.obj14593_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14593_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14593_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14593_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14576
(function(){
	window.obj14593_droppedInsideTargetActions_runningActionsCount = obj14593_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14576";
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
					window.obj14593_droppedInsideTargetActions_runningActionsCount = window.obj14593_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14593_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14593_droppedInsideTargetActions_actionGroup3();
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
				window.obj14593_droppedInsideTargetActions_runningActionsCount = window.obj14593_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14593_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14593_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14593_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14161 
incrementCounter_14601();
function incrementCounter_14601() {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = obj14593_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14161_counterValue;
	obj14161_counterValue = obj14161_counterValue + 1;
	if (! obj14161_counterCanExceedTargetValue && obj14161_counterValue > obj14161_counterTargetValue) {
		obj14161_counterValue = obj14161_counterTargetValue;
	}

	if (oldValue != obj14161_counterValue) {
		$("#obj14161").trigger('SCEventCounterValueChange');
		$("#obj14161").trigger('SCEventCounterIncrease');
		if (obj14161_counterValue == obj14161_counterTargetValue)
			$("#obj14161").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14593_droppedInsideTargetActions_runningActionsCount = window.obj14593_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14593_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14593_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14593_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14593_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14593_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14593").trigger("obj14593_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14593) {
				console.warn("de-queueing event obj14593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14593_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14634_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14634");

//	action: dragDrop
//	target: obj14634 
dragDrop_14637();
function dragDrop_14637() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14634_onTouchDown_runningActionsCount = obj14634_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14634');
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
    	window.obj14634_onTouchDown_runningActionsCount = window.obj14634_onTouchDown_runningActionsCount - 1;

if (window.obj14634_onTouchDown_runningActionsCount < 0) {
	window.obj14634_onTouchDown_runningActionsCount = 0;
} else if (window.obj14634_onTouchDown_runningActionsCount == 0) {
	obj14634_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14714","#obj14724");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14637 = false;
    	var dropped_id_14637;
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
					dropped_14637 = true;
					dropped_id_14637 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14637) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14634").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14634_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14634_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14644();
function playAudioFile_14644() {
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14644")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14644");
			$("#obj_audio_playSoundFile14644").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14634 
move_14645();
function move_14645() {
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14634");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1095;
	var moveY = 687;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14634_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14634 
hide_14844();
function hide_14844() {
	var selector = "#obj14634";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = obj14634_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14844(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14724 
hide_18605();
function hide_18605() {
	var selector = "#obj14724";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = obj14634_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18605(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18603
(function(){
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = obj14634_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18603";
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
					window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14634_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14845();
function playAudioFile_14845() {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = obj14634_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14845")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14845");
			$("#obj_audio_playSoundFile14845").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14634_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14721
(function(){
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = obj14634_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj14721";
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
					window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14634_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14847();
function incrementCounter_14847() {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = obj14634_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14634_droppedInsideTargetActions_2_runningActionsCount = window.obj14634_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj14634_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj14634_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14634 
hide_14639();
function hide_14639() {
	var selector = "#obj14634";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14634_droppedInsideTargetActions_runningActionsCount = obj14634_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14639(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14714 
hide_18600();
function hide_18600() {
	var selector = "#obj14714";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14634_droppedInsideTargetActions_runningActionsCount = obj14634_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18600(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18597
(function(){
	window.obj14634_droppedInsideTargetActions_runningActionsCount = obj14634_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18597";
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
					window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup1();
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
				window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14634_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14640();
function playAudioFile_14640() {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = obj14634_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14640")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14640");
			$("#obj_audio_playSoundFile14640").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup2();
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
				window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14634_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14711
(function(){
	window.obj14634_droppedInsideTargetActions_runningActionsCount = obj14634_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14711";
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
					window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup3();
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
				window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14634_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14642();
function incrementCounter_14642() {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = obj14634_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14634_droppedInsideTargetActions_runningActionsCount = window.obj14634_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14634_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14634_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14634_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14634_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14634_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14634").trigger("obj14634_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14634) {
				console.warn("de-queueing event obj14634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14634_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14759_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14759");

//	action: dragDrop
//	target: obj14759 
dragDrop_14762();
function dragDrop_14762() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14759_onTouchDown_runningActionsCount = obj14759_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14759');
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
    	window.obj14759_onTouchDown_runningActionsCount = window.obj14759_onTouchDown_runningActionsCount - 1;

if (window.obj14759_onTouchDown_runningActionsCount < 0) {
	window.obj14759_onTouchDown_runningActionsCount = 0;
} else if (window.obj14759_onTouchDown_runningActionsCount == 0) {
	obj14759_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14729","#obj14757");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14762 = false;
    	var dropped_id_14762;
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
					dropped_14762 = true;
					dropped_id_14762 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14762) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14759").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14759_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14759_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14769();
function playAudioFile_14769() {
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14769")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14769");
			$("#obj_audio_playSoundFile14769").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14759 
move_14770();
function move_14770() {
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14759");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1171;
	var moveY = 687;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14759_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14759 
hide_14782();
function hide_14782() {
	var selector = "#obj14759";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = obj14759_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14759_droppedInsideTargetActions_2_runningActionsCount = window.obj14759_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14782(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14759_droppedInsideTargetActions_2_runningActionsCount = window.obj14759_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14759_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14783();
function playAudioFile_14783() {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = obj14759_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14783")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14783");
			$("#obj_audio_playSoundFile14783").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14759_droppedInsideTargetActions_2_runningActionsCount = window.obj14759_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14759_droppedInsideTargetActions_2_runningActionsCount = window.obj14759_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj14759_droppedInsideTargetActions_2_runningActionsCount = window.obj14759_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj14759_droppedInsideTargetActions_2_runningActionsCount = window.obj14759_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14759_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14754
(function(){
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = obj14759_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj14754";
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
					window.obj14759_droppedInsideTargetActions_2_runningActionsCount = window.obj14759_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj14759_droppedInsideTargetActions_2_runningActionsCount = window.obj14759_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14759_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14785();
function incrementCounter_14785() {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = obj14759_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14759_droppedInsideTargetActions_2_runningActionsCount = window.obj14759_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj14759_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj14759_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14759 
hide_14764();
function hide_14764() {
	var selector = "#obj14759";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14759_droppedInsideTargetActions_runningActionsCount = obj14759_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14759_droppedInsideTargetActions_runningActionsCount = window.obj14759_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14764(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14759_droppedInsideTargetActions_runningActionsCount = window.obj14759_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14759_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14765();
function playAudioFile_14765() {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = obj14759_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14765")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14765");
			$("#obj_audio_playSoundFile14765").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14759_droppedInsideTargetActions_runningActionsCount = window.obj14759_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14759_droppedInsideTargetActions_runningActionsCount = window.obj14759_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_actionGroup2();
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
				window.obj14759_droppedInsideTargetActions_runningActionsCount = window.obj14759_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14759_droppedInsideTargetActions_runningActionsCount = window.obj14759_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14759_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14726
(function(){
	window.obj14759_droppedInsideTargetActions_runningActionsCount = obj14759_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14726";
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
					window.obj14759_droppedInsideTargetActions_runningActionsCount = window.obj14759_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_actionGroup3();
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
				window.obj14759_droppedInsideTargetActions_runningActionsCount = window.obj14759_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14759_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14767();
function incrementCounter_14767() {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = obj14759_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14759_droppedInsideTargetActions_runningActionsCount = window.obj14759_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14759_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14759_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14759_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14759_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14759_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14759").trigger("obj14759_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14759) {
				console.warn("de-queueing event obj14759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14759_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14742_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14742");

//	action: dragDrop
//	target: obj14742 
dragDrop_14745();
function dragDrop_14745() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14742_onTouchDown_runningActionsCount = obj14742_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14742');
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
    	window.obj14742_onTouchDown_runningActionsCount = window.obj14742_onTouchDown_runningActionsCount - 1;

if (window.obj14742_onTouchDown_runningActionsCount < 0) {
	window.obj14742_onTouchDown_runningActionsCount = 0;
} else if (window.obj14742_onTouchDown_runningActionsCount == 0) {
	obj14742_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14724","#obj14714");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14745 = false;
    	var dropped_id_14745;
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
					dropped_14745 = true;
					dropped_id_14745 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14745) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14742").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14742_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14742_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14752();
function playAudioFile_14752() {
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14752")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14752");
			$("#obj_audio_playSoundFile14752").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14742 
move_14753();
function move_14753() {
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14742");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1248;
	var moveY = 687;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14742_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14742 
hide_14849();
function hide_14849() {
	var selector = "#obj14742";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = obj14742_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14849(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14714 
hide_18601();
function hide_18601() {
	var selector = "#obj14714";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = obj14742_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18601(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18597
(function(){
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = obj14742_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj18597";
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
					window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14742_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14850();
function playAudioFile_14850() {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = obj14742_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14850")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14850");
			$("#obj_audio_playSoundFile14850").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14742_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14711
(function(){
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = obj14742_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj14711";
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
					window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14742_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14852();
function incrementCounter_14852() {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = obj14742_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14742_droppedInsideTargetActions_2_runningActionsCount = window.obj14742_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj14742_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj14742_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14742 
hide_14747();
function hide_14747() {
	var selector = "#obj14742";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14742_droppedInsideTargetActions_runningActionsCount = obj14742_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14747(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14724 
hide_18607();
function hide_18607() {
	var selector = "#obj14724";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14742_droppedInsideTargetActions_runningActionsCount = obj14742_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18607(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj18603
(function(){
	window.obj14742_droppedInsideTargetActions_runningActionsCount = obj14742_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj18603";
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
					window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup1();
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
				window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14742_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14748();
function playAudioFile_14748() {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = obj14742_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14748")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14748");
			$("#obj_audio_playSoundFile14748").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup2();
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
				window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14742_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14721
(function(){
	window.obj14742_droppedInsideTargetActions_runningActionsCount = obj14742_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14721";
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
					window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup3();
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
				window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14742_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14750();
function incrementCounter_14750() {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = obj14742_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14742_droppedInsideTargetActions_runningActionsCount = window.obj14742_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14742_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14742_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14742_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14742_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14742_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14742").trigger("obj14742_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14742) {
				console.warn("de-queueing event obj14742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14742_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14699_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14699_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14699");

//	action: dragDrop
//	target: obj14699 
dragDrop_14702();
function dragDrop_14702() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14699_onTouchDown_runningActionsCount = obj14699_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14699');
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
    	window.obj14699_onTouchDown_runningActionsCount = window.obj14699_onTouchDown_runningActionsCount - 1;

if (window.obj14699_onTouchDown_runningActionsCount < 0) {
	window.obj14699_onTouchDown_runningActionsCount = 0;
} else if (window.obj14699_onTouchDown_runningActionsCount == 0) {
	obj14699_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14734");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14702 = false;
    	var dropped_id_14702;
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
					dropped_14702 = true;
					dropped_id_14702 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14702) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14699").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14699_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14699_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14709();
function playAudioFile_14709() {
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14709")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14709");
			$("#obj_audio_playSoundFile14709").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14699 
move_14710();
function move_14710() {
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14699");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 717;
	var moveY = 687;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14699_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14699 
hide_14704();
function hide_14704() {
	var selector = "#obj14699";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14699_droppedInsideTargetActions_runningActionsCount = obj14699_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14699_droppedInsideTargetActions_runningActionsCount = window.obj14699_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14699_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14699_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14704(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14699_droppedInsideTargetActions_runningActionsCount = window.obj14699_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14699_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14699_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14699_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14705();
function playAudioFile_14705() {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = obj14699_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14705")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14705");
			$("#obj_audio_playSoundFile14705").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14699_droppedInsideTargetActions_runningActionsCount = window.obj14699_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14699_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14699_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14699_droppedInsideTargetActions_runningActionsCount = window.obj14699_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14699_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14699_droppedInsideTargetActions_actionGroup2();
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
				window.obj14699_droppedInsideTargetActions_runningActionsCount = window.obj14699_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14699_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14699_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14699_droppedInsideTargetActions_runningActionsCount = window.obj14699_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14699_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14699_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14699_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14731
(function(){
	window.obj14699_droppedInsideTargetActions_runningActionsCount = obj14699_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14731";
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
					window.obj14699_droppedInsideTargetActions_runningActionsCount = window.obj14699_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14699_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14699_droppedInsideTargetActions_actionGroup3();
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
				window.obj14699_droppedInsideTargetActions_runningActionsCount = window.obj14699_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14699_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14699_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14699_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14707();
function incrementCounter_14707() {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = obj14699_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14699_droppedInsideTargetActions_runningActionsCount = window.obj14699_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14699_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14699_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14699_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14699_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14699_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14699").trigger("obj14699_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14699) {
				console.warn("de-queueing event obj14699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14699_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14687_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14687_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14687");

//	action: dragDrop
//	target: obj14687 
dragDrop_14690();
function dragDrop_14690() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14687_onTouchDown_runningActionsCount = obj14687_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14687');
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
    	window.obj14687_onTouchDown_runningActionsCount = window.obj14687_onTouchDown_runningActionsCount - 1;

if (window.obj14687_onTouchDown_runningActionsCount < 0) {
	window.obj14687_onTouchDown_runningActionsCount = 0;
} else if (window.obj14687_onTouchDown_runningActionsCount == 0) {
	obj14687_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14719");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14690 = false;
    	var dropped_id_14690;
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
					dropped_14690 = true;
					dropped_id_14690 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14690) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14687").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14687_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14687_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14697();
function playAudioFile_14697() {
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14697")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14697");
			$("#obj_audio_playSoundFile14697").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14687 
move_14698();
function move_14698() {
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14687");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 791;
	var moveY = 687;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14687_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14687 
hide_14692();
function hide_14692() {
	var selector = "#obj14687";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14687_droppedInsideTargetActions_runningActionsCount = obj14687_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14687_droppedInsideTargetActions_runningActionsCount = window.obj14687_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14687_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14687_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14692(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14687_droppedInsideTargetActions_runningActionsCount = window.obj14687_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14687_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14687_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14687_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14693();
function playAudioFile_14693() {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = obj14687_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14693")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14693");
			$("#obj_audio_playSoundFile14693").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14687_droppedInsideTargetActions_runningActionsCount = window.obj14687_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14687_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14687_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14687_droppedInsideTargetActions_runningActionsCount = window.obj14687_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14687_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14687_droppedInsideTargetActions_actionGroup2();
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
				window.obj14687_droppedInsideTargetActions_runningActionsCount = window.obj14687_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14687_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14687_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14687_droppedInsideTargetActions_runningActionsCount = window.obj14687_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14687_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14687_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14687_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14716
(function(){
	window.obj14687_droppedInsideTargetActions_runningActionsCount = obj14687_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14716";
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
					window.obj14687_droppedInsideTargetActions_runningActionsCount = window.obj14687_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14687_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14687_droppedInsideTargetActions_actionGroup3();
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
				window.obj14687_droppedInsideTargetActions_runningActionsCount = window.obj14687_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14687_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14687_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14687_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14695();
function incrementCounter_14695() {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = obj14687_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14687_droppedInsideTargetActions_runningActionsCount = window.obj14687_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14687_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14687_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14687_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14687_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14687_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14687").trigger("obj14687_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14687) {
				console.warn("de-queueing event obj14687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14687_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14675_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14675");

//	action: dragDrop
//	target: obj14675 
dragDrop_14678();
function dragDrop_14678() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14675_onTouchDown_runningActionsCount = obj14675_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14675');
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
    	window.obj14675_onTouchDown_runningActionsCount = window.obj14675_onTouchDown_runningActionsCount - 1;

if (window.obj14675_onTouchDown_runningActionsCount < 0) {
	window.obj14675_onTouchDown_runningActionsCount = 0;
} else if (window.obj14675_onTouchDown_runningActionsCount == 0) {
	obj14675_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14729","#obj14757");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14678 = false;
    	var dropped_id_14678;
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
					dropped_14678 = true;
					dropped_id_14678 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14678) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14675").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14675_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14675_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14685();
function playAudioFile_14685() {
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14685")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14685");
			$("#obj_audio_playSoundFile14685").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14675 
move_14686();
function move_14686() {
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14675");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 867;
	var moveY = 687;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14675_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14675 
hide_14777();
function hide_14777() {
	var selector = "#obj14675";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = obj14675_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14675_droppedInsideTargetActions_2_runningActionsCount = window.obj14675_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14777(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14675_droppedInsideTargetActions_2_runningActionsCount = window.obj14675_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14675_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14778();
function playAudioFile_14778() {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = obj14675_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14778")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14778");
			$("#obj_audio_playSoundFile14778").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14675_droppedInsideTargetActions_2_runningActionsCount = window.obj14675_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14675_droppedInsideTargetActions_2_runningActionsCount = window.obj14675_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj14675_droppedInsideTargetActions_2_runningActionsCount = window.obj14675_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj14675_droppedInsideTargetActions_2_runningActionsCount = window.obj14675_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14675_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14754
(function(){
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = obj14675_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj14754";
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
					window.obj14675_droppedInsideTargetActions_2_runningActionsCount = window.obj14675_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj14675_droppedInsideTargetActions_2_runningActionsCount = window.obj14675_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14675_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14780();
function incrementCounter_14780() {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = obj14675_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14675_droppedInsideTargetActions_2_runningActionsCount = window.obj14675_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj14675_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj14675_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14675 
hide_14680();
function hide_14680() {
	var selector = "#obj14675";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14675_droppedInsideTargetActions_runningActionsCount = obj14675_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14675_droppedInsideTargetActions_runningActionsCount = window.obj14675_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14680(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14675_droppedInsideTargetActions_runningActionsCount = window.obj14675_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14675_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14681();
function playAudioFile_14681() {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = obj14675_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14681")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14681");
			$("#obj_audio_playSoundFile14681").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14675_droppedInsideTargetActions_runningActionsCount = window.obj14675_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14675_droppedInsideTargetActions_runningActionsCount = window.obj14675_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_actionGroup2();
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
				window.obj14675_droppedInsideTargetActions_runningActionsCount = window.obj14675_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14675_droppedInsideTargetActions_runningActionsCount = window.obj14675_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14675_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14726
(function(){
	window.obj14675_droppedInsideTargetActions_runningActionsCount = obj14675_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14726";
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
					window.obj14675_droppedInsideTargetActions_runningActionsCount = window.obj14675_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_actionGroup3();
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
				window.obj14675_droppedInsideTargetActions_runningActionsCount = window.obj14675_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14675_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14683();
function incrementCounter_14683() {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = obj14675_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14675_droppedInsideTargetActions_runningActionsCount = window.obj14675_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14675_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14675_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14675_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14675_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14675_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14675").trigger("obj14675_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14675) {
				console.warn("de-queueing event obj14675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14675_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14663_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14663_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14663");

//	action: dragDrop
//	target: obj14663 
dragDrop_14666();
function dragDrop_14666() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14663_onTouchDown_runningActionsCount = obj14663_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14663');
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
    	window.obj14663_onTouchDown_runningActionsCount = window.obj14663_onTouchDown_runningActionsCount - 1;

if (window.obj14663_onTouchDown_runningActionsCount < 0) {
	window.obj14663_onTouchDown_runningActionsCount = 0;
} else if (window.obj14663_onTouchDown_runningActionsCount == 0) {
	obj14663_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14649");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14666 = false;
    	var dropped_id_14666;
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
					dropped_14666 = true;
					dropped_id_14666 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14666) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14663").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14663_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14663_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14673();
function playAudioFile_14673() {
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14673")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14673");
			$("#obj_audio_playSoundFile14673").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14663 
move_14674();
function move_14674() {
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14663");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 941;
	var moveY = 687;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14663_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14663 
hide_14668();
function hide_14668() {
	var selector = "#obj14663";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14663_droppedInsideTargetActions_runningActionsCount = obj14663_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14663_droppedInsideTargetActions_runningActionsCount = window.obj14663_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14663_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14663_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14668(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14663_droppedInsideTargetActions_runningActionsCount = window.obj14663_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14663_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14663_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14663_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14669();
function playAudioFile_14669() {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = obj14663_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14669")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14669");
			$("#obj_audio_playSoundFile14669").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14663_droppedInsideTargetActions_runningActionsCount = window.obj14663_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14663_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14663_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14663_droppedInsideTargetActions_runningActionsCount = window.obj14663_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14663_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14663_droppedInsideTargetActions_actionGroup2();
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
				window.obj14663_droppedInsideTargetActions_runningActionsCount = window.obj14663_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14663_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14663_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14663_droppedInsideTargetActions_runningActionsCount = window.obj14663_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14663_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14663_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14663_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14646
(function(){
	window.obj14663_droppedInsideTargetActions_runningActionsCount = obj14663_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14646";
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
					window.obj14663_droppedInsideTargetActions_runningActionsCount = window.obj14663_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14663_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14663_droppedInsideTargetActions_actionGroup3();
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
				window.obj14663_droppedInsideTargetActions_runningActionsCount = window.obj14663_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14663_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14663_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14663_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14671();
function incrementCounter_14671() {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = obj14663_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14663_droppedInsideTargetActions_runningActionsCount = window.obj14663_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14663_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14663_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14663_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14663_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14663_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14663").trigger("obj14663_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14663) {
				console.warn("de-queueing event obj14663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14663_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj14651_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14651_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj14651");

//	action: dragDrop
//	target: obj14651 
dragDrop_14654();
function dragDrop_14654() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj14651_onTouchDown_runningActionsCount = obj14651_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj14651');
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
    	window.obj14651_onTouchDown_runningActionsCount = window.obj14651_onTouchDown_runningActionsCount - 1;

if (window.obj14651_onTouchDown_runningActionsCount < 0) {
	window.obj14651_onTouchDown_runningActionsCount = 0;
} else if (window.obj14651_onTouchDown_runningActionsCount == 0) {
	obj14651_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14774");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_14654 = false;
    	var dropped_id_14654;
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
					dropped_14654 = true;
					dropped_id_14654 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_14654) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj14651").trigger('SCActionDragDrop14371_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj14651_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14651_onTouchDown_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_14661();
function playAudioFile_14661() {
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14661")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14661");
			$("#obj_audio_playSoundFile14661").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
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
				window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj14651 
move_14662();
function move_14662() {
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj14651");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1018;
	var moveY = 687;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj14651_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14651 
hide_14656();
function hide_14656() {
	var selector = "#obj14651";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14651_droppedInsideTargetActions_runningActionsCount = obj14651_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14651_droppedInsideTargetActions_runningActionsCount = window.obj14651_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14651_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14651_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14656(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14651_droppedInsideTargetActions_runningActionsCount = window.obj14651_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14651_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14651_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj14651_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_14657();
function playAudioFile_14657() {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = obj14651_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14657")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14657");
			$("#obj_audio_playSoundFile14657").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14651_droppedInsideTargetActions_runningActionsCount = window.obj14651_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14651_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14651_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14651_droppedInsideTargetActions_runningActionsCount = window.obj14651_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14651_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14651_droppedInsideTargetActions_actionGroup2();
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
				window.obj14651_droppedInsideTargetActions_runningActionsCount = window.obj14651_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14651_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14651_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj14651_droppedInsideTargetActions_runningActionsCount = window.obj14651_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14651_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14651_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj14651_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj14771
(function(){
	window.obj14651_droppedInsideTargetActions_runningActionsCount = obj14651_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj14771";
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
					window.obj14651_droppedInsideTargetActions_runningActionsCount = window.obj14651_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14651_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14651_droppedInsideTargetActions_actionGroup3();
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
				window.obj14651_droppedInsideTargetActions_runningActionsCount = window.obj14651_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14651_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14651_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj14651_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj14164 
incrementCounter_14659();
function incrementCounter_14659() {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = obj14651_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj14164_counterValue;
	obj14164_counterValue = obj14164_counterValue + 1;
	if (! obj14164_counterCanExceedTargetValue && obj14164_counterValue > obj14164_counterTargetValue) {
		obj14164_counterValue = obj14164_counterTargetValue;
	}

	if (oldValue != obj14164_counterValue) {
		$("#obj14164").trigger('SCEventCounterValueChange');
		$("#obj14164").trigger('SCEventCounterIncrease');
		if (obj14164_counterValue == obj14164_counterTargetValue)
			$("#obj14164").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14651_droppedInsideTargetActions_runningActionsCount = window.obj14651_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj14651_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj14651_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj14651_droppedInsideTargetActions_runningActionsCount == 0) {
	obj14651_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj14651_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj14651").trigger("obj14651_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14651) {
				console.warn("de-queueing event obj14651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14651_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj14147: Event Touch Down
 *
 */

$("#obj14147").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14147_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14147_onTap is still running");
	return;
}
var obj14147_onTap_runningActionsCount = 0;
var obj14147_onTap_loopCount = 0;
obj14147_onTap_actionGroup0();
});



























/*
 *
 *   obj14150: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14150").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14150_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14150_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14150_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14150_SCEventCounterReachedTargetValue_loopCount = 0;
obj14150_SCEventCounterReachedTargetValue_actionGroup0();
});
























































/*
 *
 *   obj14158: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14158").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14158_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14158_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14158_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14158_SCEventCounterReachedTargetValue_loopCount = 0;
obj14158_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj14161: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14161").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14161_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14161_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14161_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14161_SCEventCounterReachedTargetValue_loopCount = 0;
obj14161_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj14164: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14164").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14164_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14164_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14164_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14164_SCEventCounterReachedTargetValue_loopCount = 0;
obj14164_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj14172: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14172").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14172_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14172_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14172_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14172_SCEventCounterReachedTargetValue_loopCount = 0;
obj14172_SCEventCounterReachedTargetValue_actionGroup0();
});


































































































































































































































































/*
 *
 *   obj14366: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14366");
	var winTarget = document.getElementById("obj14366");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14366").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14366_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14366_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14366_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14366_onTouchDown is still running");
	return;
}
var obj14366_onTouchDown_runningActionsCount = 0;
var obj14366_onTouchDown_loopCount = 0;
obj14366_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14366: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14366").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14366_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14366_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14366: Event droppedInsideTargetActions
 *
 */

$("#obj14366").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14366_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14366_droppedInsideTargetActions is still running");
	return;
}
var obj14366_droppedInsideTargetActions_runningActionsCount = 0;
var obj14366_droppedInsideTargetActions_loopCount = 0;
obj14366_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14434: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14434");
	var winTarget = document.getElementById("obj14434");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14434").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14434_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14434_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14434_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14434_onTouchDown is still running");
	return;
}
var obj14434_onTouchDown_runningActionsCount = 0;
var obj14434_onTouchDown_loopCount = 0;
obj14434_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14434: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14434").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14434_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14434_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14434: Event droppedInsideTargetActions
 *
 */

$("#obj14434").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14434_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14434_droppedInsideTargetActions is still running");
	return;
}
var obj14434_droppedInsideTargetActions_runningActionsCount = 0;
var obj14434_droppedInsideTargetActions_loopCount = 0;
obj14434_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14460: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14460");
	var winTarget = document.getElementById("obj14460");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14460").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14460_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14460_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14460_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14460_onTouchDown is still running");
	return;
}
var obj14460_onTouchDown_runningActionsCount = 0;
var obj14460_onTouchDown_loopCount = 0;
obj14460_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14460: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14460").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14460_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14460_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14460: Event droppedInsideTargetActions
 *
 */

$("#obj14460").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14460_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14460_droppedInsideTargetActions is still running");
	return;
}
var obj14460_droppedInsideTargetActions_runningActionsCount = 0;
var obj14460_droppedInsideTargetActions_loopCount = 0;
obj14460_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14448: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14448");
	var winTarget = document.getElementById("obj14448");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14448").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14448_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14448_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14448_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14448_onTouchDown is still running");
	return;
}
var obj14448_onTouchDown_runningActionsCount = 0;
var obj14448_onTouchDown_loopCount = 0;
obj14448_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14448: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14448").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14448_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14448_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14448: Event droppedInsideTargetActions
 *
 */

$("#obj14448").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14448_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14448_droppedInsideTargetActions is still running");
	return;
}
var obj14448_droppedInsideTargetActions_runningActionsCount = 0;
var obj14448_droppedInsideTargetActions_loopCount = 0;
obj14448_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14472: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14472");
	var winTarget = document.getElementById("obj14472");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14472").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14472_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14472_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14472_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14472_onTouchDown is still running");
	return;
}
var obj14472_onTouchDown_runningActionsCount = 0;
var obj14472_onTouchDown_loopCount = 0;
obj14472_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14472: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14472").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14472_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14472_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14472: Event droppedInsideTargetActions
 *
 */

$("#obj14472").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14472_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14472_droppedInsideTargetActions is still running");
	return;
}
var obj14472_droppedInsideTargetActions_runningActionsCount = 0;
var obj14472_droppedInsideTargetActions_loopCount = 0;
obj14472_droppedInsideTargetActions_actionGroup0();
});


















/*
 *
 *   obj14492: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14492").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14492_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14492_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14492_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14492_SCEventCounterReachedTargetValue_loopCount = 0;
obj14492_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj14489: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14489").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14489_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14489_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14489_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14489_SCEventCounterReachedTargetValue_loopCount = 0;
obj14489_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj14484: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj14484").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj14484_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14484_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj14484_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj14484_SCEventCounterReachedTargetValue_loopCount = 0;
obj14484_SCEventCounterReachedTargetValue_actionGroup0();
});








































































































































































































































































































/*
 *
 *   obj14549: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14549");
	var winTarget = document.getElementById("obj14549");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14549").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14549_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14549_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14549_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14549_onTouchDown is still running");
	return;
}
var obj14549_onTouchDown_runningActionsCount = 0;
var obj14549_onTouchDown_loopCount = 0;
obj14549_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14549: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14549").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14549_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14549_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14549: Event droppedInsideTargetActions
 *
 */

$("#obj14549").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14549_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14549_droppedInsideTargetActions is still running");
	return;
}
var obj14549_droppedInsideTargetActions_runningActionsCount = 0;
var obj14549_droppedInsideTargetActions_loopCount = 0;
obj14549_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14537: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14537");
	var winTarget = document.getElementById("obj14537");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14537").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14537_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14537_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14537_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14537_onTouchDown is still running");
	return;
}
var obj14537_onTouchDown_runningActionsCount = 0;
var obj14537_onTouchDown_loopCount = 0;
obj14537_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14537: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14537").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14537_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14537_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14537: Event droppedInsideTargetActions
 *
 */

$("#obj14537").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14537_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14537_droppedInsideTargetActions is still running");
	return;
}
var obj14537_droppedInsideTargetActions_runningActionsCount = 0;
var obj14537_droppedInsideTargetActions_loopCount = 0;
obj14537_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14525: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14525");
	var winTarget = document.getElementById("obj14525");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14525").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14525_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14525_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14525_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14525_onTouchDown is still running");
	return;
}
var obj14525_onTouchDown_runningActionsCount = 0;
var obj14525_onTouchDown_loopCount = 0;
obj14525_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14525: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14525").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14525_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14525_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14525: Event droppedInsideTargetActions
 *
 */

$("#obj14525").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14525_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14525_droppedInsideTargetActions is still running");
	return;
}
var obj14525_droppedInsideTargetActions_runningActionsCount = 0;
var obj14525_droppedInsideTargetActions_loopCount = 0;
obj14525_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14513: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14513");
	var winTarget = document.getElementById("obj14513");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14513").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14513_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14513_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14513_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14513_onTouchDown is still running");
	return;
}
var obj14513_onTouchDown_runningActionsCount = 0;
var obj14513_onTouchDown_loopCount = 0;
obj14513_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14513: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14513").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14513_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14513_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14513: Event droppedInsideTargetActions
 *
 */

$("#obj14513").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14513_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14513_droppedInsideTargetActions is still running");
	return;
}
var obj14513_droppedInsideTargetActions_runningActionsCount = 0;
var obj14513_droppedInsideTargetActions_loopCount = 0;
obj14513_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14501: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14501");
	var winTarget = document.getElementById("obj14501");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14501").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14501_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14501_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14501_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14501_onTouchDown is still running");
	return;
}
var obj14501_onTouchDown_runningActionsCount = 0;
var obj14501_onTouchDown_loopCount = 0;
obj14501_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14501: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14501").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14501_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14501_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14501: Event droppedInsideTargetActions
 *
 */

$("#obj14501").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14501_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14501_droppedInsideTargetActions is still running");
	return;
}
var obj14501_droppedInsideTargetActions_runningActionsCount = 0;
var obj14501_droppedInsideTargetActions_loopCount = 0;
obj14501_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14593: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14593");
	var winTarget = document.getElementById("obj14593");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14593").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14593_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14593_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14593_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14593_onTouchDown is still running");
	return;
}
var obj14593_onTouchDown_runningActionsCount = 0;
var obj14593_onTouchDown_loopCount = 0;
obj14593_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14593: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14593").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14593_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14593_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14593: Event droppedInsideTargetActions
 *
 */

$("#obj14593").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14593_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14593_droppedInsideTargetActions is still running");
	return;
}
var obj14593_droppedInsideTargetActions_runningActionsCount = 0;
var obj14593_droppedInsideTargetActions_loopCount = 0;
obj14593_droppedInsideTargetActions_actionGroup0();
});


























































































































































































































































































































































































































/*
 *
 *   obj14634: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14634");
	var winTarget = document.getElementById("obj14634");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14634").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14634_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14634_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14634_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14634_onTouchDown is still running");
	return;
}
var obj14634_onTouchDown_runningActionsCount = 0;
var obj14634_onTouchDown_loopCount = 0;
obj14634_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14634: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14634").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14634_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14634_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14634: Event droppedInsideTargetActions_2
 *
 */

$("#obj14634").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj14634_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14634_droppedInsideTargetActions_2 is still running");
	return;
}
var obj14634_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj14634_droppedInsideTargetActions_2_loopCount = 0;
obj14634_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj14634: Event droppedInsideTargetActions
 *
 */

$("#obj14634").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14634_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14634_droppedInsideTargetActions is still running");
	return;
}
var obj14634_droppedInsideTargetActions_runningActionsCount = 0;
var obj14634_droppedInsideTargetActions_loopCount = 0;
obj14634_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14759: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14759");
	var winTarget = document.getElementById("obj14759");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14759").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14759_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14759_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14759_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14759_onTouchDown is still running");
	return;
}
var obj14759_onTouchDown_runningActionsCount = 0;
var obj14759_onTouchDown_loopCount = 0;
obj14759_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14759: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14759").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14759_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14759_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14759: Event droppedInsideTargetActions_2
 *
 */

$("#obj14759").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj14759_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14759_droppedInsideTargetActions_2 is still running");
	return;
}
var obj14759_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj14759_droppedInsideTargetActions_2_loopCount = 0;
obj14759_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj14759: Event droppedInsideTargetActions
 *
 */

$("#obj14759").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14759_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14759_droppedInsideTargetActions is still running");
	return;
}
var obj14759_droppedInsideTargetActions_runningActionsCount = 0;
var obj14759_droppedInsideTargetActions_loopCount = 0;
obj14759_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14742: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14742");
	var winTarget = document.getElementById("obj14742");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14742").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14742_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14742_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14742_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14742_onTouchDown is still running");
	return;
}
var obj14742_onTouchDown_runningActionsCount = 0;
var obj14742_onTouchDown_loopCount = 0;
obj14742_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14742: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14742").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14742_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14742_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14742: Event droppedInsideTargetActions_2
 *
 */

$("#obj14742").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj14742_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14742_droppedInsideTargetActions_2 is still running");
	return;
}
var obj14742_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj14742_droppedInsideTargetActions_2_loopCount = 0;
obj14742_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj14742: Event droppedInsideTargetActions
 *
 */

$("#obj14742").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14742_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14742_droppedInsideTargetActions is still running");
	return;
}
var obj14742_droppedInsideTargetActions_runningActionsCount = 0;
var obj14742_droppedInsideTargetActions_loopCount = 0;
obj14742_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14699: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14699");
	var winTarget = document.getElementById("obj14699");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14699").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14699_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14699_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14699_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14699_onTouchDown is still running");
	return;
}
var obj14699_onTouchDown_runningActionsCount = 0;
var obj14699_onTouchDown_loopCount = 0;
obj14699_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14699: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14699").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14699_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14699_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14699: Event droppedInsideTargetActions
 *
 */

$("#obj14699").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14699_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14699_droppedInsideTargetActions is still running");
	return;
}
var obj14699_droppedInsideTargetActions_runningActionsCount = 0;
var obj14699_droppedInsideTargetActions_loopCount = 0;
obj14699_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14687: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14687");
	var winTarget = document.getElementById("obj14687");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14687").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14687_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14687_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14687_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14687_onTouchDown is still running");
	return;
}
var obj14687_onTouchDown_runningActionsCount = 0;
var obj14687_onTouchDown_loopCount = 0;
obj14687_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14687: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14687").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14687_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14687_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14687: Event droppedInsideTargetActions
 *
 */

$("#obj14687").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14687_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14687_droppedInsideTargetActions is still running");
	return;
}
var obj14687_droppedInsideTargetActions_runningActionsCount = 0;
var obj14687_droppedInsideTargetActions_loopCount = 0;
obj14687_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14675: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14675");
	var winTarget = document.getElementById("obj14675");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14675").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14675_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14675_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14675_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14675_onTouchDown is still running");
	return;
}
var obj14675_onTouchDown_runningActionsCount = 0;
var obj14675_onTouchDown_loopCount = 0;
obj14675_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14675: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14675").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14675_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14675_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14675: Event droppedInsideTargetActions_2
 *
 */

$("#obj14675").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj14675_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14675_droppedInsideTargetActions_2 is still running");
	return;
}
var obj14675_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj14675_droppedInsideTargetActions_2_loopCount = 0;
obj14675_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj14675: Event droppedInsideTargetActions
 *
 */

$("#obj14675").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14675_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14675_droppedInsideTargetActions is still running");
	return;
}
var obj14675_droppedInsideTargetActions_runningActionsCount = 0;
var obj14675_droppedInsideTargetActions_loopCount = 0;
obj14675_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14663: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14663");
	var winTarget = document.getElementById("obj14663");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14663").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14663_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14663_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14663_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14663_onTouchDown is still running");
	return;
}
var obj14663_onTouchDown_runningActionsCount = 0;
var obj14663_onTouchDown_loopCount = 0;
obj14663_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14663: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14663").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14663_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14663_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14663: Event droppedInsideTargetActions
 *
 */

$("#obj14663").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14663_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14663_droppedInsideTargetActions is still running");
	return;
}
var obj14663_droppedInsideTargetActions_runningActionsCount = 0;
var obj14663_droppedInsideTargetActions_loopCount = 0;
obj14663_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj14651: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj14651");
	var winTarget = document.getElementById("obj14651");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj14651").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj14651_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj14651_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj14651_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14651_onTouchDown is still running");
	return;
}
var obj14651_onTouchDown_runningActionsCount = 0;
var obj14651_onTouchDown_loopCount = 0;
obj14651_onTouchDown_actionGroup0();
});






/*
 *
 *   obj14651: Event SCActionDragDrop14371_droppedOutsideTargetActions
 *
 */

$("#obj14651").bind("SCActionDragDrop14371_droppedOutsideTargetActions", function(event) {
	if (window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14651_SCActionDragDrop14371_droppedOutsideTargetActions is still running");
	return;
}
var obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_runningActionsCount = 0;
var obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_loopCount = 0;
obj14651_SCActionDragDrop14371_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj14651: Event droppedInsideTargetActions
 *
 */

$("#obj14651").bind("droppedInsideTargetActions", function(event) {
	if (window.obj14651_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14651_droppedInsideTargetActions is still running");
	return;
}
var obj14651_droppedInsideTargetActions_runningActionsCount = 0;
var obj14651_droppedInsideTargetActions_loopCount = 0;
obj14651_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj14134").trigger('SCEventShow');
$("#obj14139").trigger('SCEventShow');
$("#obj14143").trigger('SCEventShow');
$("#obj14147").trigger('SCEventShow');
$("#obj14154").trigger('SCEventShow');
$("#obj14156").trigger('SCEventShow');
$("#obj14359").trigger('SCEventShow');
$("#obj14364").trigger('SCEventShow');
$("#obj14376").trigger('SCEventShow');
$("#obj14378").trigger('SCEventShow');
$("#obj14384").trigger('SCEventShow');
$("#obj14390").trigger('SCEventShow');
$("#obj14402").trigger('SCEventShow');
$("#obj14396").trigger('SCEventShow');
$("#obj14366").trigger('SCEventShow');
$("#obj14434").trigger('SCEventShow');
$("#obj14460").trigger('SCEventShow');
$("#obj14448").trigger('SCEventShow');
$("#obj14472").trigger('SCEventShow');
$("#obj14590").trigger('SCEventShow');
$("#obj14588").trigger('SCEventShow');
$("#obj14586").trigger('SCEventShow');
$("#obj14584").trigger('SCEventShow');
$("#obj14579").trigger('SCEventShow');
$("#obj14574").trigger('SCEventShow');
$("#obj14569").trigger('SCEventShow');
$("#obj14564").trigger('SCEventShow');
$("#obj14608").trigger('SCEventShow');
$("#obj14549").trigger('SCEventShow');
$("#obj14537").trigger('SCEventShow');
$("#obj14525").trigger('SCEventShow');
$("#obj14513").trigger('SCEventShow');
$("#obj14501").trigger('SCEventShow');
$("#obj14593").trigger('SCEventShow');
$("#obj14740").trigger('SCEventShow');
$("#obj14738").trigger('SCEventShow');
$("#obj14736").trigger('SCEventShow');
$("#obj14734").trigger('SCEventShow');
$("#obj14729").trigger('SCEventShow');
$("#obj14724").trigger('SCEventShow');
$("#obj18603").trigger('SCEventShow');
$("#obj14719").trigger('SCEventShow');
$("#obj14714").trigger('SCEventShow');
$("#obj14649").trigger('SCEventShow');
$("#obj14774").trigger('SCEventShow');
$("#obj14757").trigger('SCEventShow');
$("#obj14634").trigger('SCEventShow');
$("#obj14759").trigger('SCEventShow');
$("#obj14742").trigger('SCEventShow');
$("#obj14699").trigger('SCEventShow');
$("#obj14687").trigger('SCEventShow');
$("#obj14675").trigger('SCEventShow');
$("#obj14663").trigger('SCEventShow');
$("#obj14651").trigger('SCEventShow');
$("#obj24541").trigger('SCEventShow');
$("#obj24539").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});