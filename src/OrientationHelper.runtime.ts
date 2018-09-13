import { ThingworxRuntimeWidget, TWService, TWProperty } from 'typescriptwebpacksupport'
import * as PleaseRotate from 'pleaserotate.js'

@ThingworxRuntimeWidget
class OrientationHelper extends TWRuntimeWidget {
    serviceInvoked(name: string): void {
        throw new Error("Method not implemented.");
    }

    renderHtml(): string {
        return '';
    };

    afterRender() {
    }

    updateProperty(info: TWUpdatePropertyInfo): void {
    }

    beforeDestroy?(): void {
    }
}