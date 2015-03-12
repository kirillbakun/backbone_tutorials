$(document).ready(function() {
    app.Library = Backbone.Collection.extend({
        model: app.Book
    });
});