import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    templateUrl: './accordion.component.html',
    selector: 'app-accordion',
    styleUrls: ['./accordion.component.css'],
    // for preformance - stop re-render unless data itself changes
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppAccordionComponent {
    @Input() public data;

    public sortBy(type: string) {
        if (type === 'price') { // ascending
            this.data.sort((a, b) => (a.rate || 0) - (b.rate || 0));
        }

        if (type === 'rating') { // descending
            this.data.sort((a, b) => (b.stars || 0) - (a.stars || 0));
        }

        if (type === 'alphabetical') {
            this.data.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
        }
    }

}
