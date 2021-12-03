// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-
const Main = imports.ui.main;

function init() {
}

function enable() {
    const activitiesButton = Main.panel.statusArea['activities'];
    if (activitiesButton) {
        activitiesButton.container.hide()
    }
    const keyboardButton = Main.panel.statusArea['keyboard'];
    if (keyboardButton) {
        keyboardButton.container.hide();
    }
}

function disable() {
    const activitiesButton = Main.panel.statusArea['activities']
    if (activitiesButton) {
        activitiesButton.container.show()
    }
    const keyboardButton = Main.panel.statusArea['keyboard']
    if (keyboardButton) {
        keyboardButton.container.show()
    }
}
