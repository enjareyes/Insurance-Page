import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './panel.component.html',
    selector: 'app-panel',
    styleUrls: ['./panel.component.css']
})
export class AppPanelComponent implements AfterViewInit {
    @Input() public data;
    @Input() public panelId;

    public ngAfterViewInit() {
        this.getFeatureContent();
    }

    public getStars(num) {
        // account for no stars
        if (!num) {
            return [];
        }

        return new Array(num).fill('x');
    }

    public getRate(num: number) {
        // account for missing rates
        if (!num) {
            return;
        }

        return (Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);
    }

    public goTo(url: string) {
        window.open(url, '_blank');
    }

    public getFeatureContent() {
        if (this.data.features_html) {
            document.getElementById('feature-content-' + this.panelId).innerHTML = this.data.features_html[0];
        }
    }

}
