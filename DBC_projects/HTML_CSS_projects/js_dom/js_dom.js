window.onload = function() {
  
  //RELEASE 0: Link this script to the js_dom.html file and analyze what this code does. 
  
  //RELEASE 1:
    //Add code here to select elements of the DOM 
    document.getElementsByTagName('body')[0].style.backgroundColor = "#c0ffc5";
    
  //RELEASE 2: 
    // Add code here to manipulate the DOM.
    var body = document.querySelector("body");
    body.setAttribute("align", "center");
  
    var style = body.getAttribute("style");
    body.setAttribute("style", style + "; font-family: sans-serif; font-size: 0.75em");
  
    var heading = body.getElementsByTagName("h1")[0];
    heading.setAttribute("style", "margin: 200px 100px 50px 100px; padding: 40px; border: 10px solid black")
  
    var headingText = heading.innerHTML.replace("Hello.", "Hi There!");
    heading.innerHTML = headingText;
  
  //RELEASE 3: Event Listener
    // Add the code for the event listener here and replace the console.log code with code that changes the color of some DOM element
    var colors = ["blue", "red", "green", "fuchsia", "yellow"];

    var switchColor = function(){
      var headingStyle = heading.getAttribute("style");
      var newHeadingStyle = headingStyle.replace(/\w*$/, colors[0]);
      heading.setAttribute("style", newHeadingStyle);
      colors.push(colors.shift());
    }
  
    var updateButton = function(){
      var button = body.getElementsByTagName("button")[0];
      button.innerHTML = ("Change Border to " + colors[0].toUpperCase());
    }
    
    document.getElementById('color-switcher').addEventListener('click', function(){
      switchColor();
      updateButton();
    })
  //RELEASE 4 : Experiment on your own
    var newParagraph = document.createElement("h2")
    var paraText = document.createTextNode("Careen bowsprit Jack Tar provost yo-ho-ho reef sails Sea Legs deadlights topsail long boat. No prey, no pay haul wind execution dock boom rigging hogshead spirits code of conduct man-of-war piracy. Fire ship skysail holystone mutiny bilge water killick weigh anchor draught chantey bounty. League tack transom bucko draught Jolly Roger man-of-war weigh anchor jack rope's end.");
    newParagraph.appendChild(paraText);
    body.appendChild(newParagraph);
  
}; // end of the window.onload function do not remove or write DOM manipulation below this.