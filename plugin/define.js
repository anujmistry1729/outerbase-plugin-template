const { OuterbasePluginCell_$PLUGIN_ID } = require("./cell/cell")
const { OuterbasePluginEditor_$PLUGIN_ID } = require("./cell/cell-editor")

window.customElements.define('outerbase-plugin-cell-$PLUGIN_ID', OuterbasePluginCell_$PLUGIN_ID)
window.customElements.define('outerbase-plugin-editor-$PLUGIN_ID', OuterbasePluginEditor_$PLUGIN_ID)
