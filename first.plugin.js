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
    BdApi.alert('What\'s New', 'Nothing really laff out loud');
  }
  start() {
    BdApi.showConfirmationModal(
      'Thanks for opening!',
      [
        '2 plus two is 4 tbh'
      ],
      {
        confirmText: "ur right",
        cancelText: "no dumbass",
      }
    );
  }
  stop() {}
};
