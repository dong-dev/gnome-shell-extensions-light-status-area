// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-
import Clutter from 'gi://Clutter';
import * as Main from "resource:///org/gnome/shell/ui/main.js";

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

/* exported init */
export default class LightStatusAreaExtension extends Extension {
    // #region Defaults Getters
    get activitiesButton() {
        return Main.panel.statusArea.activities;
    }
    get keyboardButton() {
        return Main.panel.statusArea.keyboard;
    }
    get dateMenuButton() {
        return Main.panel.statusArea.dateMenu;
    }
    get RightBox(){
        return Main.panel._rightBox;
    }
    get CenterBox(){
        return Main.panel._centerBox;
    }

    // Get messageTray 
    get messageTray() {
        return Main.messageTray;
    }

    get dash() {
        return Main.overview.dash;
    }
    
    // #endregion Defaults Getters
    constructor(params) {
        super(params)
    }
    enable() {
        // if (this.activitiesButton) {
        //     this.activitiesButton.container.hide();
        // }
        if (this.keyboardButton) {
            this.keyboardButton.container.hide();
        }
        if (this.dateMenuButton) {
            if (this.dateMenuButton._eventsItem) {
                this.dateMenuButton._eventsItem.hide();
            }
            if (this.dateMenuButton._displaysSection) {
                this.dateMenuButton._displaysSection.hide();
            }
            this.dateMenuButton.add_style_class_name('display-clock-clear-hpadding');
            // this.dateMenuButton.setSensitive(false);
            this.CenterBox.remove_child(this.dateMenuButton.container);
            this.RightBox.insert_child_at_index(this.dateMenuButton.container, 0);
        }
        // Move the message tray to the top-right corner
        if (this.messageTray) {
            this.messageTray._bannerBin.set_x_align(Clutter.ActorAlign.END)
        }
        
        this.hideDash();
    }
    disable() {
        // if (this.activitiesButton) {
        //     this.activitiesButton.container.show();
        // }
        if (this.keyboardButton) {
            this.keyboardButton.container.show();
        }
        if (this.dateMenuButton) {
            // this.dateMenuButton.setSensitive(true);
            // Move clock to center
            this.RightBox.remove_child(this.dateMenuButton.container); 
            this.CenterBox.add_child(this.dateMenuButton.container);
            this.dateMenuButton.remove_style_class_name('display-clock-clear-hpadding');

        }
        // Move the message tray to top-center
        if (this.messageTray) {
            this.messageTray._bannerBin.set_x_align(Clutter.ActorAlign.CENTER)
        }

        this.showDash();
    }

    hideDash() {
        this.dash.hide();
        this.dash.height = 0;
    }

    showDash() {
        this.dash.hide();
        this.dash.height = -1;
    }

}
