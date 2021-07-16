(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"global.html\">Globals</a>","id":"global","children":[]},{"label":"<a href=\"MRP_CLIENT.html\">MRP_CLIENT</a>","id":"MRP_CLIENT","children":[{"label":"<a href=\"MRP_CLIENT.business.html\">business</a>","id":"MRP_CLIENT.business","children":[]},{"label":"<a href=\"MRP_CLIENT.employment.html\">employment</a>","id":"MRP_CLIENT.employment","children":[]}]},{"label":"<a href=\"MRP_SERVER.html\">MRP_SERVER</a>","id":"MRP_SERVER","children":[{"label":"<a href=\"MRP_SERVER.business.html\">business</a>","id":"MRP_SERVER.business","children":[]},{"label":"<a href=\"MRP_SERVER.employment.html\">employment</a>","id":"MRP_SERVER.employment","children":[]}]},{"label":"<a href=\"ObjectID.html\">ObjectID</a>","id":"ObjectID","children":[]},{"label":"<a href=\"utils.html\">utils</a>","id":"utils","children":[]}],
        openedIcon: ' &#x21e3;',
        saveState: false,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
