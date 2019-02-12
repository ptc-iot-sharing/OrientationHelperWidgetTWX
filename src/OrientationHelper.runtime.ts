import { ThingworxRuntimeWidget } from 'typescriptwebpacksupport'
export interface PleaseRotateOptions {
    forcePortrait: boolean,
    message: string,
    subMessage: string,
    allowClickBypass: boolean,
    onlyMobile: boolean,
    zIndex: number
};
@ThingworxRuntimeWidget
export class OrientationHelper extends TWRuntimeWidget {
    serviceInvoked(name: string): void {
        throw new Error("Method not implemented.");
    }

    pleaseRotateInstance;

    renderHtml(): string {
        if(document.getElementById("pleaserotate-backdrop")) {
            document.getElementById("pleaserotate-backdrop").remove();
        }
        import("pleaserotate.js").then((PleaseRotate) => {
            this.pleaseRotateInstance = PleaseRotate;
            this.pleaseRotateInstance.start(this.convertPropertiesToOptions());
            if (this.getProperty("Style")) {
                let style = TW.getStyleFromStyleDefinition(this.getProperty("Style"));
                if (style.backgroundColor) {
                    document.getElementById("pleaserotate-backdrop").style.backgroundColor = style.backgroundColor;
                }
                if (style.foregroundColor) {
                    document.getElementById("pleaserotate-backdrop").style.color = style.foregroundColor;
                }
                if (style.lineColor) {
                    document.getElementById("pleaserotate-graphic-path").style.fill = style.lineColor;
                }
                if (style.textSize) {
                    document.getElementById("pleaserotate-message").classList.add("textsize-" + style.textSize);
                }
            }
        });
        return '';
    };

    convertPropertiesToOptions(): PleaseRotateOptions {
        return {
            allowClickBypass: this.getProperty('AllowClickBypass'),
            message: this.getProperty('Message'),
            subMessage: this.getProperty('AllowClickBypass') ? this.getProperty('SubMessage') : '',
            forcePortrait: this.getProperty('Orientation') == "Portrait",
            onlyMobile: this.getProperty('OnlyMobile'),
            zIndex: 99999999,
        }
    }

    afterRender() {
    }

    updateProperty(info: TWUpdatePropertyInfo): void {
    }

    beforeDestroy?(): void {
        if (this.pleaseRotateInstance) {
            document.getElementById("pleaserotate-backdrop").remove();
        }
    }
}