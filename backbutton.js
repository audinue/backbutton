addEventListener('popstate', function (e) {
	if (e.state === null) {
		var event = new CustomEvent('backbutton', { cancelable: true })
		dispatchEvent(event)
		if (!event.defaultPrevented) {
			history.back()
		} else {
			history.pushState('', '')
		}
	}
})
if (history.state === null) {
	history.pushState('', '')
}
