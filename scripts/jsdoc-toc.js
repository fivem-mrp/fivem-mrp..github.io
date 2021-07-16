
(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"mrp-client.html\">MRP_CLIENT</a>","id":"MRP_CLIENT","children":[]},{"label":"<a href=\"mrp-server.html\">MRP_SERVER</a>","id":"MRP_SERVER","children":[{"label":"<a href=\"mrp-server-employment.html\">employment</a>","id":"MRP_SERVER.employment","children":[]}]},{"label":"<a href=\"utils.html\">utils</a>","id":"utils","children":[]}],
        openedIcon: ' &#x21e3;',
        saveState: false,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
