import { Routes } from '@angular/router';
import { HeavyComponent } from "./components/heavy/heavy.component";
import { SimpleDeferComponent } from "./components/examples/simple-defer/simple-defer.component";
import {
    DeferWithPlaceholderComponent
} from "./components/examples/defer-with-placeholder/defer-with-placeholder.component";
import { DeferOnViewportComponent } from "./components/examples/defer-on-viewport/defer-on-viewport.component";

export const routes: Routes = [
    /*{
        path: 'news',
        component: NewsComponent
    },*/
    {
        path: 'heavy',
        component: HeavyComponent
    },
    {
        path: 'defer',
        component: SimpleDeferComponent
    },
    {
        path: 'defer-placeholder',
        component: DeferWithPlaceholderComponent
    },
    {
        path: 'defer-viewport',
        component: DeferOnViewportComponent
    }
];
