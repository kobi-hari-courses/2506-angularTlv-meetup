import { InjectionToken } from "@angular/core";
import { User } from "../models/user.model";

export const USERS_TOKEN = new InjectionToken<User[]>('USERS_TOKEN');