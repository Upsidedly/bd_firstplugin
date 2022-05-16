/**
 * @name FirstPlugin
 * @version 1.0.0
 * @description my first actual plugin lel
 * @author Upsided
 * @updateUrl https://raw.githubusercontent.com/Upsidedly/bd_firstplugin/master/first.plugin.js
 * @source https://github.com/Upsidedly/bd_firstplugin
 * @authorId 935932557013426176
 */

module.exports = class FirstPlugin {
  load() {
    BdApi.alert("hi thanks for getting dis");
  }
  start() {
    BdApi.showConfirmationModal(
      "Test",
      [
        "This is not a link. ",
        BdApi.React.createElement(
          "a",
          { href: "https://google.com", target: "_blank" },
          "This is a link."
        ),
        " This is not.",
      ],
      {
        danger: true,
        confirmText: "Oh No",
        cancelText: "Go Back",
      }
    );
  }
  stop() {}
};
