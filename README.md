# Orientation Helper Widget

Very simple widget for indicating that the user should rotate the device to better view the mashup.

## Available properties

* Message: Main message to show
* AllowClickBypass: Allow the user to bypass the warning
* SubMessage: Optional message enabled if AllowClickBypass is true
* OnlyMobile: Only enforce this setting on mobile devices
* Style: Configure the style of the display. Background and foreground color properties are used, as well as font size and line color.

## Known issues

* The widget does not function propertly when you click on the "Reload" button on the top of the screen.
* Multiple instances of this widget are not supported.

## Building and publishing

The following commands allow you to build and compile your widget:

* `npm run build`: builds the production version of the widget. Creates a new extension zip file under the `zip` folder. The production version is optimized for sharing and using in production enviroments.
* `npm run upload`: creates a build, and uploads the extension zip to the thingworx server configured in `package.json`. The build is created for developement, with source-maps enabled.
* `npm run watch`: watches the source files, and whenever they change, do a build.

#This Extension is provided as-is and without warranty or support. It is not part of the PTC product suite. This project is licensed under the terms of the MIT license
