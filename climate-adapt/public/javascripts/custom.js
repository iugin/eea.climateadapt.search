settings_display_options = ['tabular', 'card', 'list'];
settings_search_sortby = [
      {
        'field': 'title',
        'display_asc': 'Title a-z',
        'display_desc': 'Title z-a'
      },
      {
        'field': 'issued',
        'display_asc': 'Oldest',
        'display_desc': 'Newest'
    }]
settings_sort= [{'issued': {'order': 'desc'}}];
settings_default_display = 'list';

jQuery(document).ready(function($) {
    if (window.settings_display_images === undefined){
        settings_display_images = true;
    }
    var opts = {
        datatype: 'json',
        display_images: settings_display_images,
        default_sort: [],
        search_sortby: settings_search_sortby,
        sort: settings_sort,
        paging: {
            from: 0,
            size: 10
        },
        display_type_options: settings_display_options,
        display_type: settings_default_display
    };
    eea_facetview('.facet-view-simple', opts);
});
