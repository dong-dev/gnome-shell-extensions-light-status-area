// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-
const Main = imports.ui.main;

class LightStatusAreaExtension {
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
    // #endregion Defaults Getters
    constructor() {
    }
    enable() {
        if (this.activitiesButton) {
            this.activitiesButton.container.hide();
        }
        if (this.keyboardButton) {
            this.keyboardButton.container.hide();
        }
        if (this.dateMenuButton) {
            this.dateMenuButton.setSensitive(false);
            this.CenterBox.remove_child(this.dateMenuButton.container);
            this.RightBox.insert_child_at_index(this.dateMenuButton.container, 0);
        }
    }
    disable() {
        if (this.activitiesButton) {
            this.activitiesButton.container.show();
        }
        if (this.keyboardButton) {
            this.keyboardButton.container.show();
        }
        if (this.dateMenuButton) {
            this.dateMenuButton.setSensitive(true);
            // Move clock to center
            this.RightBox.remove_child(this.dateMenuButton.container); 
            this.CenterBox.add_child(this.dateMenuButton.container);
        }
    }

}

function init() {
    return new LightStatusAreaExtension();
}