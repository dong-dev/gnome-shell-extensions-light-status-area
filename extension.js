// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-
const Main = imports.ui.main;

function init() {
}

function enable() {
    const activitiesButton = Main.panel.statusArea['activities'];
    if (activitiesButton) {
        activitiesButton.container.hide();
    }
    const keyboardButton = Main.panel.statusArea['keyboard'];
    if (keyboardButton) {
        keyboardButton.container.hide();
    }
    // Move clock to the right side
    Main.panel._centerBox.remove_child(Main.panel.statusArea.dateMenu.container); Main.panel._rightBox.insert_child_at_index(Main.panel.statusArea.dateMenu.container, 0);
}

function disable() {
    const activitiesButton = Main.panel.statusArea['activities'];
    if (activitiesButton) {
        activitiesButton.container.show();
    }
    const keyboardButton = Main.panel.statusArea['keyboard'];
    if (keyboardButton) {
        keyboardButton.container.show();
    }
    // Move clock to center
    Main.panel._rightBox.remove_child(Main.panel.statusArea.dateMenu.container); Main.panel._centerBox.add_child(Main.panel.statusArea.dateMenu.container);
}
