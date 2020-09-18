import { Component, OnInit, Input } from '@angular/core';

@Component({
    templateUrl: './feature-logo.component.html',
    selector: 'app-feature-logo',
})
export class FeatureLogoComponent implements OnInit {
    @Input() public featureData;
    public featureLibrary = {};

    public ngOnInit() {
        // this would be removed with the upgrade mentioned in html
        this.featureData.forEach(obj => {
            this.featureLibrary[obj.icon] = obj.icon;
        });
    }

    public generateSVG(icon) { // would need a little more time to make this work properly
        // const path = '../assets/assets/IconFeatures' + icon + '.svg';
        // const SVGFile: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
        // return SVGFile;
    }

}
