addEventListener('popstate', function (e) {
	if (e.state === null) {
		history.pushState('', '')
		dispatchEvent(new CustomEvent('backbutton'))
	}
})
if (history.state === null) {
	history.pushState('', '')
}
