$(document).ready(function() {
    app.BookView = Backbone.View.extend({
        tagName: 'div',

        className: 'bookContainer',

        template: _.template($("#bookTemplate").html()),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});