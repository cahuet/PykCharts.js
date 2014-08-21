PykCharts.tree = {}

var theme = new PykCharts.Configuration.Theme({});

PykCharts.tree.configuration = function (options){
    var that = this;
    var treeConfig = {
    	dataTransfer : function (d) {
    		var data = d3.nest()
                .key(function(d) {
                    return d.level1;
                })
                .key(function(d) {
                    return d.level2;
                })
                .key(function(d) {
                    return d.level3;
                })
                .rollup(function(d) {
                    var leaves = [];
                    _.each(d, function (d1) {
                        leaves.push({
                            key: d1.level4,
                            weight: d1.weight
                        });
                    })
                    return leaves;
                })
                .entries(d);
            data = {
                key: "root",
                values: data
            };
            return data;
    	}
    }
    return treeConfig;
};


PykCharts.tree.processInputs = function (chartObject, options) {

    var theme = new PykCharts.Configuration.Theme({})
        , stylesheet = theme.stylesheet
        , functionality = theme.functionality
        , treeCharts = theme.treeCharts
        , optional = options.optional;

    chartObject.selector = options.selector ? options.selector : stylesheet.selector;
    chartObject.width = options.chart && _.isNumber(options.chart.width) ? options.chart.width : stylesheet.chart.width;
    chartObject.height = options.chart && _.isNumber(options.chart.height) ? options.chart.height : stylesheet.chart.height;
    chartObject.margin = options.chart && options.chart.margin ? options.chart.margin : stylesheet.chart.margin;
    chartObject.margin.left = options.chart && options.chart.margin && _.isNumber(options.chart.margin.left) ? options.chart.margin.left : stylesheet.chart.margin.left;
    chartObject.margin.right = options.chart && options.chart.margin && _.isNumber(options.chart.margin.right) ? options.chart.margin.right : stylesheet.chart.margin.right;
    chartObject.margin.top = options.chart && options.chart.margin && _.isNumber(options.chart.margin.top) ? options.chart.margin.top : stylesheet.chart.margin.top;
    chartObject.margin.bottom = options.chart && options.chart.margin && _.isNumber(options.chart.margin.bottom) ? options.chart.margin.bottom : stylesheet.chart.margin.bottom;
    chartObject.mode = options.mode ? options.mode : stylesheet.mode;
    if (optional && optional.title) {
        chartObject.title = optional.title;
        chartObject.title.size = optional.title.size ? optional.title.size : stylesheet.title.size;
        chartObject.title.color = optional.title.color ? optional.title.color : stylesheet.title.color;
        chartObject.title.weight = optional.title.weight ? optional.title.weight : stylesheet.title.weight;
        chartObject.title.family = optional.title.family ? optional.title.family : stylesheet.title.family;
    } else {
        chartObject.title = stylesheet.title;
    }
    if (optional && optional.subtitle) {
        chartObject.subtitle = optional.subtitle;
        chartObject.subtitle.size = optional.subtitle.size ? optional.subtitle.size : stylesheet.subtitle.size;
        chartObject.subtitle.color = optional.subtitle.color ? optional.subtitle.color : stylesheet.subtitle.color;
        chartObject.subtitle.weight = optional.subtitle.weight ? optional.subtitle.weight : stylesheet.subtitle.weight;
        chartObject.subtitle.family = optional.subtitle.family ? optional.subtitle.family : stylesheet.subtitle.family;
    } else {
        chartObject.subtitle = stylesheet.subtitle;
    }
    chartObject.realTimeCharts = optional && optional.realTimeCharts ? optional.realTimeCharts : functionality.realTimeCharts;
    chartObject.transition = optional && optional.transition && optional.transition.duration ? optional.transition : functionality.transition;
    chartObject.creditMySite = optional && optional.creditMySite ? optional.creditMySite : stylesheet.creditMySite;
    chartObject.dataSource = optional && optional.dataSource ? optional.dataSource : "no";
    chartObject.bg = optional && optional.colors && optional.colors.backgroundColor ? optional.colors.backgroundColor : stylesheet.colors.backgroundColor;
    chartObject.chartColor = optional && optional.colors && optional.colors.chartColor ? optional.colors.chartColor : stylesheet.colors.chartColor;
    chartObject.fullscreen = optional && optional.buttons && optional.buttons.enableFullScreen ? optional.buttons.enableFullScreen : stylesheet.buttons.enableFullScreen;
    chartObject.loading = optional && optional.loading && optional.loading.animationGifUrl ? optional.loading.animationGifUrl: stylesheet.loading.animationGifUrl;
    chartObject.enableTooltip = optional && optional.enableTooltip ? optional.enableTooltip : stylesheet.enableTooltip;
    if (optional && optional.borderBetweenChartElements && optional.borderBetweenChartElements.width!="0px") {
        chartObject.borderBetweenChartElements = optional.borderBetweenChartElements;
        chartObject.borderBetweenChartElements.width = optional.borderBetweenChartElements.width ? optional.borderBetweenChartElements.width : stylesheet.borderBetweenChartElements.width;
        chartObject.borderBetweenChartElements.color = optional.borderBetweenChartElements.color ? optional.borderBetweenChartElements.color : stylesheet.borderBetweenChartElements.color;
        chartObject.borderBetweenChartElements.style = optional.borderBetweenChartElements.style ? optional.borderBetweenChartElements.style : stylesheet.borderBetweenChartElements.style;
    } else {
        chartObject.borderBetweenChartElements = stylesheet.borderBetweenChartElements;
    }
    if (optional && optional.label) {
        chartObject.label = optional.label;
        chartObject.label.size = optional.label.size ? optional.label.size : stylesheet.label.size;
        chartObject.label.color = optional.label.color ? optional.label.color : stylesheet.label.color;
        chartObject.label.weight = optional.label.weight ? optional.label.weight : stylesheet.label.weight;
        chartObject.label.family = optional.label.family ? optional.label.family : stylesheet.label.family;
    } else {
        chartObject.label = stylesheet.label;
    }
    chartObject.zoom = optional && optional.zoom ? optional.zoom : treeCharts.zoom;
    chartObject.zoom.enable = optional && optional.zoom && optional.zoom.enable ? optional.zoom.enable : treeCharts.zoom.enable;

    chartObject.k = new PykCharts.Configuration(chartObject);

    return chartObject;
};
