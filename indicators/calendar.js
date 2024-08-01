import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import * as ModalDialog from 'resource:///org/gnome/shell/ui/modalDialog.js';
import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';
import * as QuickSettings from 'resource:///org/gnome/shell/ui/quickSettings.js';

/* Common imports found in `extension.js` */
import Clutter from 'gi://Clutter';
import Meta from 'gi://Meta';
import St from 'gi://St';
import Shell from 'gi://Shell';

// PopupMenuItem is a subclass of PopupBaseMenuItem
export const menuItem = new PopupMenu.PopupMenuItem('Item Label', {
    // active: false,
    can_focus: true,
    hover: true,
    reactive: true,
    style_class: 'my-menu-item',
});

// Adding an ornament
// menuItem.setOrnament(PopupMenu.Ornament.CHECK);

// Disabling the item (active property will no longer change)
menuItem.sensitive = true;

// Watching the `activate` signal
menuItem.connect('activate', (item, event) => {
    // Do something special for pointer buttons
    console.log(Object.keys(item),Object.keys(event));
    return Clutter.EVENT_PROPAGATE;
});
