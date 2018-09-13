// automatically import the css file
import { ThingworxComposerWidget } from 'typescriptwebpacksupport';

@ThingworxComposerWidget
class OrientationHelper extends TWComposerWidget {

    widgetIconUrl(): string {
        return require('./images/icon.png');
    }

    widgetProperties(): TWWidgetProperties {
        require("./styles/ide.css");
        return {
            'name': 'OrientationHelper',
            'description': 'A simple widget that displays a warning when the screen orientation is not correct',
            'category': ['Common'],
            'supportsAutoResize': false,
            'properties': {
                'Width': {
                    'description': 'Total width of the widget',
                    'baseType': 'NUMBER',
                    'isVisible': true,
                    'defaultValue': 165,
                    'isBindingTarget': false
                },
                'Height': {
                    'description': 'Total height of the widget',
                    'baseType': 'NUMBER',
                    'isVisible': true,
                    'defaultValue': 20,
                    'isBindingTarget': false
                },
                'Orientation': {
                    'description': 'The orientation to force',
                    'baseType': 'STRING',
                    'selectOptions': [
                        {
                            text: "Landscape",
                            value: "Landscape"
                        },
                        {
                            text: "Portrait",
                            value: "Portrait"
                        }
                    ],
                    'isVisible': true,
                    'defaultValue': "Landscape"
                },
                'Message': {
                    baseType: 'STRING',
                    description: 'Main message to show',
                    defaultValue: 'Please Rotate Your Device',
                },
                'AllowClickBypass': {
                    baseType: 'BOOLEAN',
                    description: 'Allow the user to bypass the warning',
                    defaultValue: true
                },
                'SubMessage': {
                    baseType: 'STRING',
                    description: 'Optional message enabled if AllowClickBypass is true',
                    defaultValue: '(or click to continue)',
                },
                'OnlyMobile': {
                    baseType: 'BOOLEAN',
                    description: 'Only enforce this setting on mobile devices',
                    defaultValue: true
                },
                'Style': {
                    baseType: 'STYLEDEFINITION',
                    description: 'Configure the style of the display. Background and foreground color properties are used, as well as font size and line color.',
                    defaultValue: 'OrientationHelperDefaultStyle'
                }
            }
        };
    };

    widgetServices(): Dictionary<TWWidgetService> {
        return {
        };
    };

    widgetEvents(): Dictionary<TWWidgetEvent> {
        return {
        };
    }

    renderHtml(): string {
        return '<div class="widget-content widget-orientation-helper">Orientation Helper</div>';
    };

    afterRender(): void {
    }

    beforeDestroy(): void {
    }

}