import { Component } from "@angular/core";

@Component({
    selector: "app_menu",
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']

})

export class MenuComponent{
    title_menu = "Funny cats"
    img = "https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page="
}