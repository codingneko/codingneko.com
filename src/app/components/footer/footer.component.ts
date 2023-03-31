import { Component, OnInit } from '@angular/core';
import { constants } from 'src/environments/constants';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    date: Date = new Date();
    hostname: string = constants.url;

    ngOnInit() {
        this.date.getFullYear();
    }
}
