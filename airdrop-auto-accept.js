// Function to recursively search for buttons and menu buttons
function searchUIElements(element) {
    var buttonList = [];
    
	//console.log(element.title() + element.role());
	
	if(element.name() === "Accept" || element.name() === "Save to Downloads" || element.name() == "Options" || element.name() === "Connect") {
		console.log("Button: " + element.title());
		console.log("Found");
		element.click();
	} 
	
    //	printAXProperties(element);
    
    // Check for child elements and recurse
    var children = element.entireContents();
    if (children.length > 0) {
        for (var i = 0; i < children.length; i++) {
            // Recursively search child elements
            buttonList = buttonList.concat(searchUIElements(children[i]));  
        }
    }

    return buttonList;
}

// Function to print all accessible properties of an AXUIElement
// This is useful for determining the names and properties of UI elements during debugging.
// Unfortunately, JSA does not make this easy to do without scripting.
function printAXProperties(element) {
	for(var property in element.properties()) {
		try {
		console.log(property + ": " + element[property]());
		} catch (e) {
			console.log(property + ": " + "error " + e);
		}
	}
}


function searchWindows(appName, processName) {
  var app = Application(appName);
  var process = app.processes.byName(processName);
  var windows = process.windows;

  for(var i=0; i < windows.length; i++) {
  	console.log("Window " + i);
    // Start the search from the window
    var buttonNames = searchUIElements(windows.at(i));

    // Display the result
	console.log('Found buttons and menu buttons:');
	console.log(buttonNames.join(' '));
  }
  console.log("Searched " + windows.length + " windows");
}


while(true) {
	try {
	searchWindows('System Events', 'NotificationCenter');
	searchWindows('System Events', 'BluetoothUIServer');
	} catch(e) {
		console.log("Error: " + e);
	}
	delay(1);
}úÞÞ­
