import { InjectionToken } from "@angular/core";
import { Routes } from "@angular/router";
import { PageRoute } from "../app.routes";

export const ROUTES_LIST = new InjectionToken<PageRoute[]>('ROUTES_LIST');